from datetime import datetime
import json
from uuid import UUID
from langflow.services.base import Service
from typing import TYPE_CHECKING, List, Dict, Any, Optional, Union
import httpx

from httpx import HTTPError
from langflow.services.store.schema import (
    ComponentResponse,
    DownloadComponentResponse,
    ListComponentResponse,
    StoreComponentCreate,
)
from langflow.services.store.utils import process_tags_for_post

if TYPE_CHECKING:
    from langflow.services.settings.service import SettingsService
from contextlib import contextmanager
from contextvars import ContextVar

user_data_var: ContextVar[Optional[Dict[str, Any]]] = ContextVar(
    "user_data", default=None
)


@contextmanager
def user_data_context(api_key: str, store_service: "StoreService"):
    # Fetch and set user data to the context variable
    if api_key:
        user_data = store_service._get(
            f"{store_service.base_url}/users/me", api_key, params={"fields": "id"}
        )
        user_data_var.set(user_data)
    try:
        yield
    finally:
        # Clear the user data from the context variable
        user_data_var.set(None)


class StoreService(Service):
    """This is a service that integrates langflow with the store which
    is a Directus instance. It allows to search, get and post components to
    the store."""

    name = "store_service"

    def __init__(self, settings_service: "SettingsService"):
        self.settings_service = settings_service
        self.base_url = self.settings_service.settings.STORE_URL
        self.download_webhook_url = self.settings_service.settings.DOWNLOAD_WEBHOOK_URL
        self.like_webhook_url = self.settings_service.settings.LIKE_WEBHOOK_URL
        self.components_url = f"{self.base_url}/items/components"
        self.default_fields = [
            "id",
            "name",
            "description",
            "user_created.first_name",
            "is_component",
            "tags.tags_id.name",
            "tags.tags_id.id",
            "count(liked_by)",
            "count(downloads)",
            "metadata",
            "last_tested_version",
        ]

    # Create a context manager that will use the api key to
    # get the user data and all requests inside the context manager
    # will make a property return that data
    # Without making the request multiple times

    def _get(
        self, url: str, api_key: str, params: Dict[str, Any] = None
    ) -> List[Dict[str, Any]]:
        """Utility method to perform GET requests."""
        if api_key:
            headers = {"Authorization": f"Bearer {api_key}"}
        else:
            headers = {}
        try:
            response = httpx.get(url, headers=headers, params=params)
            response.raise_for_status()
            return response.json()["data"]
        except HTTPError as exc:
            raise exc
        except Exception as exc:
            raise ValueError(f"GET failed: {exc}")

    def call_webhook(self, api_key: str, webhook_url: str, component_id: UUID) -> None:
        # The webhook is a POST request with the data in the body
        # For now we are calling it just for testing
        try:
            headers = {"Authorization": f"Bearer {api_key}"}
            response = httpx.post(
                webhook_url, headers=headers, json={"component_id": str(component_id)}
            )
            response.raise_for_status()
            return response.json()
        except HTTPError as exc:
            raise exc

    def search(
        self,
        api_key: Optional[str],
        query: str,
        page: int = 1,
        limit: int = 10,
        status: Optional[str] = None,
        is_component: Optional[bool] = None,
        tags: Optional[List[str]] = None,
        date_from: Optional[datetime] = None,
        date_to: Optional[datetime] = None,
        sort: Optional[List[str]] = ["-count(liked_by)"],
        fields: Optional[List[str]] = None,
        filter_by_user: bool = False,
    ) -> List[ComponentResponse]:
        # ?sort=sort,-date_created,author.name

        # // or

        # ?sort[]=sort
        # &sort[]=-date_created
        # &sort[]=-author.name
        params = {
            "search": query,
            "page": page,
            "limit": limit,
        }

        filter_conditions = []

        if status:
            filter_conditions.append({"status": {"_eq": status}})
        if is_component is not None:
            # params["filter[is_component][_eq]"] = is_component
            filter_conditions.append({"is_component": {"_eq": is_component}})

        if tags:
            # params["filter[tags][_in]"] = ",".join(tags)
            filter_conditions.append({"tags": {"tags_id": {"name": {"_in": tags}}}})

        if date_from:
            # params["filter[date_updated][_gte]"] = date_from.isoformat()
            filter_conditions.append({"date_updated": {"_gte": date_from.isoformat()}})

        if date_to:
            # params["filter[date_updated][_lte]"] = date_to.isoformat()
            filter_conditions.append({"date_updated": {"_lte": date_to.isoformat()}})

        if sort:
            params["sort"] = ",".join(sort)

        if fields:
            params["fields"] = ",".join(fields)

        if filter_by_user:
            params["deep"] = json.dumps(
                {
                    "components": {
                        "_filter": {"user_created": {"token": {"_eq": api_key}}}
                    }
                }
            )
        else:
            # params["filter"] = json.dumps({"status": {"_eq": "public"}})
            filter_conditions.append({"status": {"_in": ["public", "Public"]}})

        if filter_conditions:
            params["filter"] = json.dumps({"_and": filter_conditions})

        results = self._get(self.components_url, api_key, params)
        return [ComponentResponse(**component) for component in results]

    def count_components(
        self,
        api_key: Optional[str] = None,
        filter_by_user: bool = False,
        is_component: Optional[bool] = None,
    ) -> int:
        params = {"aggregate": json.dumps({"count": "*"})}
        filter_conditions = []
        if filter_by_user:
            params["deep"] = json.dumps(
                {
                    "components": {
                        "_filter": {"user_created": {"token": {"_eq": api_key}}}
                    }
                }
            )
        else:
            filter_conditions.append({"status": {"_in": ["public", "Public"]}})

        if is_component is not None:
            filter_conditions.append({"is_component": {"_eq": is_component}})

        if filter_conditions:
            params["filter"] = json.dumps({"_and": filter_conditions})

        results = self._get(self.components_url, api_key, params)
        return results[0].get("count", 0)

    def query_components(
        self,
        api_key: str,
        page: int = 1,
        limit: int = 15,
        fields: Optional[List[str]] = None,
        is_component: Optional[bool] = None,
        filter_by_user: bool = False,
    ) -> Union[List[ListComponentResponse], List[Dict[str, int]]]:
        params = {"page": page, "limit": limit}
        # ?aggregate[count]=likes
        params["fields"] = ",".join(fields) if fields else ",".join(self.default_fields)
        filter_conditions = []

        if is_component is not None:
            filter_conditions.append({"is_component": {"_eq": is_component}})

        # Only public components or the ones created by the user
        # check for "public" or "Public"
        if filter_by_user and not api_key:
            raise ValueError("No API key provided")

        if filter_by_user and api_key:
            user_data = user_data_var.get()
            # params["filter"] = json.dumps({"user_created": {"_eq": user_data["id"]}})
            filter_conditions.append({"user_created": {"_eq": user_data["id"]}})
        else:
            filter_conditions.append({"status": {"_in": ["public", "Public"]}})

        if filter_conditions:
            params["filter"] = json.dumps({"_and": filter_conditions})

        results = self._get(self.components_url, api_key, params)
        results_objects = [ListComponentResponse(**component) for component in results]
        # Flatten the tags
        # for component in results_objects:
        #     if component.tags:
        #         component.tags = [tags_id.tags_id for tags_id in component.tags]
        return results_objects

    def get_liked_by_user_components(
        self, component_ids: List[UUID], api_key: str
    ) -> List[UUID]:
        # Get fields id
        # filter should be "id is in component_ids AND liked_by directus_users_id token is api_key"
        # return the ids
        user_data = user_data_var.get()
        params = {
            "fields": "id",
            "filter": json.dumps(
                {
                    "_and": [
                        {"id": {"_in": component_ids}},
                        {"liked_by": {"directus_users_id": {"_eq": user_data["id"]}}},
                    ]
                }
            ),
        }
        results = self._get(self.components_url, api_key, params)
        return [result["id"] for result in results]

    # Which of the components is parent of the user's components
    def get_components_in_users_collection(
        self, component_ids: List[UUID], api_key: str
    ):
        user_data = user_data_var.get()
        params = {
            "fields": "id",
            "filter": json.dumps(
                {
                    "_and": [
                        {"user_created": {"_eq": user_data["id"]}},
                        {"parent": {"_in": component_ids}},
                    ]
                }
            ),
        }
        results = self._get(self.components_url, api_key, params)
        return [result["id"] for result in results]

    def download(self, api_key: str, component_id: str) -> DownloadComponentResponse:
        url = f"{self.components_url}/{component_id}"
        params = {
            "fields": ",".join(["id", "name", "description", "data", "is_component"])
        }

        component = self._get(url, api_key, params)
        self.call_webhook(api_key, self.download_webhook_url, component_id)

        return DownloadComponentResponse(**component)

    def upload(
        self, api_key: str, component_data: StoreComponentCreate
    ) -> ComponentResponse:
        headers = {"Authorization": f"Bearer {api_key}"}
        component_dict = component_data.dict(exclude_unset=True)
        # Parent is a UUID, but the store expects a string
        response = None
        if component_dict.get("parent"):
            component_dict["parent"] = str(component_dict["parent"])

        component_dict = process_tags_for_post(component_dict)
        try:
            response = httpx.post(
                self.components_url, headers=headers, json=component_dict
            )
            response.raise_for_status()
            component = response.json()["data"]
            return ComponentResponse(**component)
        except HTTPError as exc:
            if response:
                try:
                    errors = response.json()
                    message = errors["errors"][0]["message"]
                    raise ValueError(message)
                except UnboundLocalError:
                    pass
            raise ValueError(f"Upload failed: {exc}")

    def get_tags(self, api_key: str) -> List[Dict[str, Any]]:
        url = f"{self.base_url}/items/tags"
        params = {"fields": ",".join(["id", "name"])}
        tags = self._get(url, api_key, params)
        return tags

    def get_user_likes(self, api_key: str) -> List[Dict[str, Any]]:
        url = f"{self.base_url}/users/me"
        params = {
            "fields": ",".join(["id", "likes"]),
        }
        likes = self._get(url, api_key, params)
        return likes

    def get_component_likes_count(self, api_key: str, component_id: str) -> int:
        url = f"{self.components_url}/{component_id}"

        params = {
            "fields": ",".join(["id", "count(liked_by)"]),
        }
        result = self._get(url, api_key, params)
        if len(result) == 0:
            raise ValueError("Component not found")
        likes = result["liked_by_count"]
        # likes_by_count is a string
        # try to convert it to int
        try:
            likes = int(likes)
        except ValueError:
            raise ValueError(f"Unexpected value for likes count: {likes}")
        return likes

    def like_component(self, api_key: str, component_id: str) -> bool:
        # if it returns a list with one id, it means the like was successful
        # if it returns an int, it means the like was removed
        headers = {"Authorization": f"Bearer {api_key}"}
        response = httpx.post(
            self.like_webhook_url,
            json={"component_id": str(component_id)},
            headers=headers,
        )

        response.raise_for_status()
        if response.status_code == 200:
            result = response.json()

            if isinstance(result, list):
                return True
            elif isinstance(result, int):
                return False
            else:
                raise ValueError(f"Unexpected result: {result}")
