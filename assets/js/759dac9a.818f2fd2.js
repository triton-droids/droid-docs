"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4398],{26837:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=n(74848),s=n(28453);const t={},i="Reference",d={id:"self-hosted/reference",title:"Reference",description:"Docker Compose wrapper",source:"@site/docs/self-hosted/reference.md",sourceDirName:"self-hosted",slug:"/self-hosted/reference",permalink:"/droid-docs/self-hosted/reference",draft:!1,unlisted:!1,editUrl:"https://github.com/shellhub-io/docs/tree/master/docs/self-hosted/reference.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/droid-docs/self-hosted/troubleshooting"},next:{title:"Development Environment Setup",permalink:"/droid-docs/developers/development"}},c={},l=[{value:"Docker Compose wrapper",id:"docker-compose-wrapper",level:2},{value:"Override files",id:"override-files",level:2},{value:"Makefile commands",id:"makefile-commands",level:2}];function a(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"reference",children:"Reference"})}),"\n",(0,o.jsx)(r.h2,{id:"docker-compose-wrapper",children:"Docker Compose wrapper"}),"\n",(0,o.jsxs)(r.p,{children:["In order to extend some functionality of Docker Compose,\nwe provide ",(0,o.jsx)(r.code,{children:"bin/docker-compose"})," wrapper script that should\nbe used in favour of the ",(0,o.jsx)(r.code,{children:"docker-compose"})," binary from your ",(0,o.jsx)(r.code,{children:"$PATH"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"override-files",children:"Override files"}),"\n",(0,o.jsx)(r.p,{children:"The override files must be used in order to avoid conflict with\nupstream code when updating to a newer version."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:".env.override"}),": Use this file to configure your instance."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"docker-compose.override.yml"}),": Use this file to override different\naspects of your Docker Compose deployment."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"makefile-commands",children:"Makefile commands"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"make start"}),": Start instance"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"make stop"}),": Stop a running instance"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"make restart"}),": Restart instance"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"make keygen"}),": Generate required private keys"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var o=n(96540);const s={},t=o.createContext(s);function i(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);