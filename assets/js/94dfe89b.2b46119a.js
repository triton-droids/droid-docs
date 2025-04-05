"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8756],{6626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(4848),o=t(8453);const s={sidebar_position:1},i="Development Environment Setup",d={id:"systems/development",title:"Development Environment Setup",description:"First of all, you'll need to generate required keys for the services:",source:"@site/docs/systems/development.md",sourceDirName:"systems",slug:"/systems/development",permalink:"/droid-docs/systems/development",draft:!1,unlisted:!1,editUrl:"https://github.com/triton-droids/droid-docs/tree/main/docs/systems/development.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Deploying",permalink:"/droid-docs/embedded/deploying"},next:{title:"Installation",permalink:"/droid-docs/systems/agent/installing"}},c={},l=[];function a(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"development-environment-setup",children:"Development Environment Setup"})}),"\n",(0,r.jsx)(n.p,{children:"First of all, you'll need to generate required keys for the services:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ make keygen\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the environment for development:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ echo "SHELLHUB_ENV=development" >> .env.override\n'})}),"\n",(0,r.jsx)(n.p,{children:"Start the whole environment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ make start\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Avoid using ",(0,r.jsx)(n.code,{children:"docker-compose"})," directly (unless you know what you're doing); instead use ",(0,r.jsx)(n.code,{children:"./bin/docker-compose"})," wrapper."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Wait for all services to be ready, then proceed:"})}),"\n",(0,r.jsx)(n.p,{children:"Then create an initial user by running"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ ./bin/cli user create <username> <password> <email>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a namespace for grouping devices and set a user as owner:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ ./bin/cli namespace create <namespace> <user> 00000000-0000-4000-0000-000000000000\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For development, the ",(0,r.jsx)(n.code,{children:"TENANT_ID"})," specified, ",(0,r.jsx)(n.code,{children:"00000000-0000-4000-0000-000000000000"}),", is required to turn the local\nenvironment into a ShellHub Agent running device, as it's a hardcoded value."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When you open ShellHub UI for the first time, be sure to accept pending device."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);