"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4719],{81453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(74848),r=n(28453),i=n(72550);n(65965);const o={slug:"/",sidebar_position:1},l="Introduction",c={id:"overview/introduction",title:"Introduction",description:"What is ShellHub?",source:"@site/docs/overview/introduction.md",sourceDirName:"overview",slug:"/",permalink:"/droid-docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/shellhub-io/docs/tree/master/docs/overview/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"docsSidebar",next:{title:"How it Works",permalink:"/droid-docs/overview/concepts"}},a={},d=[{value:"What is ShellHub?",id:"what-is-shellhub",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"Why ShellHub?",id:"why-shellhub",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsx)(t.h2,{id:"what-is-shellhub",children:"What is ShellHub?"}),"\n",(0,s.jsx)(t.p,{children:"ShellHub is a platform to centralize and secure remote shell access to devices, servers and containers."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(77198).A+"",width:"851",height:"672"})}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,s.jsx)(t.p,{children:"ShellHub operates by installing a lightweight agent on each of your devices, servers or containers. This agent establishes a secure connection with the ShellHub server, allowing you to remotely access and manage these systems through the ShellHub UI or via standard SSH tools."}),"\n",(0,s.jsx)(t.h2,{id:"why-shellhub",children:"Why ShellHub?"}),"\n",(0,s.jsx)(t.p,{children:"Managing secure remote shell access to devices, servers, and containers is often complex, and it becomes even more challenging as the infrastructure scales. ShellHub provides the most efficient way to centralize and secure remote shell access."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Remote Access Simplification"}),":\nShellHub simplifies remote access to devices across diverse networks. It eliminates the need for complex VPN setups or direct public access, ensuring secure and manageable connections from anywhere."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Enhancing Security"}),": Centralized authentication with public key cryptography eliminates the need for password-based authentication, which can be vulnerable to brute-force attacks and password leaks."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Simplifying Access Management"}),": Managing access to multiple devices becomes more straightforward with public key authentication. Administrators can easily add or remove access permissions by managing keys centrally on ShellHub."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Controlling Network Access"}),": Administrators can create detailed firewall rules to control remote shell access to devices, servers and containers. This includes specifying allowed and blocked IP addresses and users, ensuring that only trusted connections can reach these systems."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(i.A,{items:[{type:"link",label:"Quick Start with ShellHub Cloud",description:"The simplest way to get started with ShellHub",docId:"overview/getting-started/cloud",href:"/overview/getting-started/cloud",className:"nada"},{type:"link",label:"Self-Hosted ShellHub",description:"Run ShellHub server on your own infrastructure",docId:"self-hosted/deploying",href:"/self-hosted"}]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},65965:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var s=n(18215),r=n(28774),i=n(44718),o=n(53465),l=n(16654),c=n(21312),a=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(74848);function u(e){let{href:t,children:n}=e;return(0,h.jsx)(r.A,{href:t,className:(0,s.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:i}=e;return(0,h.jsxs)(u,{href:t,children:[(0,h.jsxs)(a.A,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),i&&(0,h.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t),s=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(t.docId??void 0);return(0,h.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(f,{item:t});case"category":return(0,h.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},72550:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(18215),r=n(44718),i=n(65965),o=n(74848);function l(e){let{className:t}=e;const n=(0,r.$S)();return(0,o.jsx)(c,{items:n.items,className:t})}function c(e){const{items:t,className:n}=e;if(!t)return(0,o.jsx)(l,{...e});const c=(0,r.d1)(t);return(0,o.jsx)("section",{className:(0,s.A)("row",n),children:c.map(((e,t)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(i.A,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>a});var s=n(96540),r=n(44586);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),i=n.pluralForms.indexOf(r);return s[Math.min(i,s.length-1)]}(n,t,e)}}},77198:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/newdiagram-9a8949c19617450ffede7115c104fdab.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);