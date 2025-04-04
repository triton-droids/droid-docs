"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9644],{19106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(74848),a=t(28453);const o={sidebar_position:1},s="SAML Authentication",r={id:"admin-guides/authentication/saml/index",title:"SAML Authentication",description:"SAML Authentication is available exclusively for enterprise customers.",source:"@site/docs/admin-guides/authentication/saml/index.md",sourceDirName:"admin-guides/authentication/saml",slug:"/admin-guides/authentication/saml/",permalink:"/droid-docs/admin-guides/authentication/saml/",draft:!1,unlisted:!1,editUrl:"https://github.com/shellhub-io/docs/tree/master/docs/admin-guides/authentication/saml/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Enabling Local Authentication for a User",permalink:"/droid-docs/admin-guides/authentication/local/enabling-method"},next:{title:"Configuring an Identity Provider",permalink:"/droid-docs/admin-guides/authentication/saml/configuring/"}},c={},d=[];function l(e){const n={admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"saml-authentication",children:"SAML Authentication"})}),"\n",(0,i.jsx)(n.admonition,{title:"Enterprise Feature",type:"note",children:(0,i.jsx)(n.p,{children:"SAML Authentication is available exclusively for enterprise customers."})}),"\n",(0,i.jsx)(n.p,{children:"SAML (Security Assertion Markup Language) is an open standard for exchanging\nauthentication and authorization data between parties, specifically between an\nidentity provider (IdP) and a service provider (SP). It enables Single Sign-On\n(SSO), allowing users to access multiple applications with a single set of\ncredentials. In that context, ShellHub acts as an SP, and uses users from an\nIdP to authenticate instead of relying on self reigstered one."}),"\n",(0,i.jsx)(n.p,{children:"ShellHub supports integration with one IdP at a time. This means you can\nconfigure and maintain only one active SAML connection for your instance. When\nswitching to a different IdP, all SAML-authenticated users will automatically\ntransition to using the new provider for authentication."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Once SAML is enabled, administrators have the option to disable the local\nauthentication. Forcing all users authenticate exclusively through your\nconfigured IdP."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"At least one authentication method must be enabled. If you plan to disable\nlocal authentication, ensure you have configured and tested an alternative\nauthentication method like Local first."})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);