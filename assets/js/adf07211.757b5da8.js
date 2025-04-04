"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6935],{44333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(74848),o=r(28453),s=r(72550);const i={},l="Supported Platforms",c={id:"overview/supported-platforms/index",title:"Supported Platforms",description:"The ShellHub platform is designed to support a wide range of operating systems and environments,",source:"@site/docs/overview/supported-platforms/index.md",sourceDirName:"overview/supported-platforms",slug:"/overview/supported-platforms/",permalink:"/docs/overview/supported-platforms/",draft:!1,unlisted:!1,editUrl:"https://github.com/shellhub-io/docs/tree/master/docs/overview/supported-platforms/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FAQ",permalink:"/docs/overview/faq"},next:{title:"Buildroot",permalink:"/docs/overview/supported-platforms/buildroot"}},a={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"supported-platforms",children:"Supported Platforms"})}),"\n",(0,n.jsx)(t.p,{children:"The ShellHub platform is designed to support a wide range of operating systems and environments,\nensuring flexibility and adaptability for different use cases.\nBelow are the officially supported platforms with specific instructions on how to set up ShellHub on each one."}),"\n",(0,n.jsx)(s.A,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},65965:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var n=r(18215),o=r(28774),s=r(44718),i=r(53465),l=r(16654),c=r(21312),a=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function p(e){let{href:t,children:r}=e;return(0,d.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:o,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:o,children:[r," ",o]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},72550:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var n=r(18215),o=r(44718),s=r(65965),i=r(74848);function l(e){let{className:t}=e;const r=(0,o.$S)();return(0,i.jsx)(c,{items:r.items,className:t})}function c(e){const{items:t,className:r}=e;if(!t)return(0,i.jsx)(l,{...e});const c=(0,o.d1)(t);return(0,i.jsx)("section",{className:(0,n.A)("row",r),children:c.map(((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(s.A,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(96540),o=r(44586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);