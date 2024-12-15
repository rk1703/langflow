"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1185],{59844:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453);const l={},r="Create Flow",o={type:"api",id:"create-flow",title:"Create Flow",description:"",slug:"/create-flow",frontMatter:{},api:{tags:["Flows"],operationId:"create_flow_api_v1_flows__post",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],requestBody:{required:!0,content:{"application/json":{schema:{properties:{name:{type:"string",title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},icon:{anyOf:[{type:"string"},{type:"null"}],title:"Icon"},icon_bg_color:{anyOf:[{type:"string"},{type:"null"}],title:"Icon Bg Color"},gradient:{anyOf:[{type:"string"},{type:"null"}],title:"Gradient"},data:{anyOf:[{type:"object"},{type:"null"}],title:"Data"},is_component:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Component",default:!1},updated_at:{anyOf:[{type:"string",format:"date-time"},{type:"null"}],title:"Updated At"},webhook:{anyOf:[{type:"boolean"},{type:"null"}],title:"Webhook",description:"Can be used on the webhook endpoint",default:!1},endpoint_name:{anyOf:[{type:"string"},{type:"null"}],title:"Endpoint Name"},tags:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Tags"},user_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"User Id"},folder_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Folder Id"}},type:"object",required:["name"],title:"FlowCreate"}}}},responses:{201:{description:"Successful Response",content:{"application/json":{schema:{properties:{name:{type:"string",title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},icon:{anyOf:[{type:"string"},{type:"null"}],title:"Icon"},icon_bg_color:{anyOf:[{type:"string"},{type:"null"}],title:"Icon Bg Color"},gradient:{anyOf:[{type:"string"},{type:"null"}],title:"Gradient"},data:{anyOf:[{type:"object"},{type:"null"}],title:"Data"},is_component:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Component",default:!1},updated_at:{anyOf:[{type:"string",format:"date-time"},{type:"null"}],title:"Updated At"},webhook:{anyOf:[{type:"boolean"},{type:"null"}],title:"Webhook",description:"Can be used on the webhook endpoint",default:!1},endpoint_name:{anyOf:[{type:"string"},{type:"null"}],title:"Endpoint Name"},tags:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Tags"},id:{type:"string",format:"uuid",title:"Id"},user_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"User Id"},folder_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Folder Id"}},type:"object",required:["name","id","user_id","folder_id"],title:"FlowRead"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Create Flow",method:"post",path:"/api/v1/flows/",parameters:[],securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{name:"string"},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Create Flow",description:{type:"text/plain"},url:{path:["api","v1","flows",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "name": "<string>",\n    "description": "<string>",\n    "icon": "<string>",\n    "icon_bg_color": "<string>",\n    "gradient": "<string>",\n    "data": "<object>",\n    "is_component": "<boolean>",\n    "updated_at": "<dateTime>",\n    "webhook": "<boolean>",\n    "endpoint_name": "<string>",\n    "tags": [\n        "<string>",\n        "<string>"\n    ],\n    "user_id": "<uuid>",\n    "folder_id": "<uuid>"\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/create-flow",previous:{title:"Like Component",permalink:"/api/like-component"},next:{title:"Read Flows",permalink:"/api/read-flows"}},d=[];function a(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"create-flow",children:"Create Flow"})}),"\n",(0,i.jsx)(t.p,{children:"Create Flow"}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Request Body "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"description"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Description"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"icon"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Icon"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"icon_bg_color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Icon Bg Color"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"gradient"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Gradient"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"data"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Data"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"is_component"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"updated_at"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"webhook"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Webhook"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(t.p,{children:"Can be used on the webhook endpoint"})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"endpoint_name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"tags"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Tags"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"user_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"folder_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"201"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"description"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Description"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"icon"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Icon"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"icon_bg_color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Icon Bg Color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"gradient"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Gradient"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"data"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Data"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"is_component"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"updated_at"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"webhook"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Webhook"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(t.p,{children:"Can be used on the webhook endpoint"})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"endpoint_name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"tags"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Tags"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"user_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"folder_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})]})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"422"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Validation Error"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"detail"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"loc"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"msg"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"type"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);