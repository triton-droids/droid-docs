"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1824],{5942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(4848),o=n(8453),i=n(2550);n(5965);const s={description:"Quickstart with ShellHub Cloud",hide_table_of_contents:!0},l="Getting Started",c={id:"overview/getting-started/index",title:"Getting Started",description:"Quickstart with ShellHub Cloud",source:"@site/docs/overview/getting-started/index.md",sourceDirName:"overview/getting-started",slug:"/overview/getting-started/",permalink:"/droid-docs/overview/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/triton-droids/droid-docs/tree/main/docs/overview/getting-started/index.md",tags:[],version:"current",frontMatter:{description:"Quickstart with ShellHub Cloud",hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Editions",permalink:"/droid-docs/overview/editions"},next:{title:"Quick Start with ShellHub Cloud",permalink:"/droid-docs/overview/getting-started/cloud"}},a={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get started with ShellHub as quickly as possible,\nthe ShellHub Cloud is the way to go. With the ShellHub Cloud,\nyou don't need to worry about provisioning a server or setting up any infrastructure."}),"\n",(0,r.jsx)(t.p,{children:"If you prefer to self-host ShellHub, you can follow the documentation\nto set up the Community Edition on your own server."}),"\n","\n",(0,r.jsx)(i.A,{items:[{type:"link",label:"Quick Start with ShellHub Cloud",description:"The simplest way to get started with ShellHub",docId:"overview/getting-started/cloud",href:"/overview/getting-started/cloud",className:"nada"},{type:"link",label:"Self-Hosted ShellHub",description:"Run ShellHub server on your own infrastructure",docId:"self-hosted/deploying",href:"/self-hosted"}]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5965:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(8215),o=n(8774),i=n(4718),s=n(5846),l=n(6654),c=n(1312),a=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function h(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:i}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},2550:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var r=n(8215),o=n(4718),i=n(5965),s=n(4848);function l(e){let{className:t}=e;const n=(0,o.$S)();return(0,s.jsx)(c,{items:n.items,className:t})}function c(e){const{items:t,className:n}=e;if(!t)return(0,s.jsx)(l,{...e});const c=(0,o.d1)(t);return(0,s.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(i.A,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(6540),o=n(4586);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);