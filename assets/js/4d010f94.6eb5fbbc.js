"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4863],{3070:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=i(4848),a=i(8453);const o={sidebar_position:1},r="Configuring an Identity Provider",s={id:"admin-guides/authentication/saml/configuring/index",title:"Configuring an Identity Provider",description:"Overview",source:"@site/docs/admin-guides/authentication/saml/configuring/index.md",sourceDirName:"admin-guides/authentication/saml/configuring",slug:"/admin-guides/authentication/saml/configuring/",permalink:"/droid-docs/admin-guides/authentication/saml/configuring/",draft:!1,unlisted:!1,editUrl:"https://github.com/triton-droids/droid-docs/tree/main/docs/admin-guides/authentication/saml/configuring/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"SAML Authentication",permalink:"/droid-docs/admin-guides/authentication/saml/"},next:{title:"Using IdP Metadata",permalink:"/droid-docs/admin-guides/authentication/saml/configuring/enabling-with-metadata"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Configuration Methods",id:"configuration-methods",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"configuring-an-identity-provider",children:"Configuring an Identity Provider"})}),"\n",(0,t.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(e.p,{children:"ShellHub supports SAML authentication through any compatible Identity Provider\n(IdP). You can enable SAML authentication at any time using either your IdP's\nmetadata URL or by manually configuring the required attributes. The SAML\nmethod can be disabled whenever an alternative authentication method is\navailable."}),"\n",(0,t.jsxs)(e.p,{children:["For information about user authentication with your IdP, see ",(0,t.jsx)(e.a,{href:"../authentication",children:"Authenticating\nUsers"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"configuration-methods",children:"Configuration Methods"}),"\n",(0,t.jsxs)(e.p,{children:["There are two ways to configure your IdP: ",(0,t.jsx)(e.a,{href:"./enabling-with-metadata",children:"using a metadata\nURL"})," or ",(0,t.jsx)(e.a,{href:"./enabling-manual",children:"manual attribute\nconfiguration"}),". You can also enable ",(0,t.jsx)(e.a,{href:"../signed_authn_requests",children:"signed authentication\nrequests"})," for enhanced security and customize\nattribute ",(0,t.jsx)(e.a,{href:"../mapping",children:"mappings"})," as needed."]}),"\n",(0,t.jsxs)(e.p,{children:["Once enabled, configure your IdP to allow callbacks to ShellHub using your\ninstance's authentication endpoint. The URL follows this format:\n",(0,t.jsx)(e.code,{children:"https://your-instance.managed.shellhub.io/api/user/saml/auth"})]}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"Use the exact URL format to avoid routing errors."})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>s});var t=i(6540);const a={},o=t.createContext(a);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);