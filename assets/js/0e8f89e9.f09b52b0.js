"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6879],{2623:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=i(74848),l=i(28453);const t={sidebar_position:3},o="Configuration",d={id:"self-hosted/configuring",title:"Configuration",description:"ShellHub is easy to configure, all configuration is done via environment",source:"@site/docs/self-hosted/configuring.md",sourceDirName:"self-hosted",slug:"/self-hosted/configuring",permalink:"/docs/self-hosted/configuring",draft:!1,unlisted:!1,editUrl:"https://github.com/shellhub-io/docs/tree/master/docs/self-hosted/configuring.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Deploying",permalink:"/docs/self-hosted/deploying"},next:{title:"Administration",permalink:"/docs/self-hosted/administration"}},r={},c=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"<code>SHELLHUB_BIND_ADDRESS</code>",id:"shellhub_bind_address",level:3},{value:"<code>SHELLHUB_HTTP_PORT</code>",id:"shellhub_http_port",level:3},{value:"<code>SHELLHUB_HTTPS_PORT</code>",id:"shellhub_https_port",level:3},{value:"<code>SHELLHUB_SSH_PORT</code>",id:"shellhub_ssh_port",level:3},{value:"<code>SHELLHUB_PROXY</code>",id:"shellhub_proxy",level:3},{value:"<code>SHELLHUB_AUTO_SSL</code>",id:"shellhub_auto_ssl",level:3},{value:"<code>SHELLHUB_REDIRECT_TO_HTTPS</code>",id:"shellhub_redirect_to_https",level:3},{value:"<code>SHELLHUB_DOMAIN</code>",id:"shellhub_domain",level:3},{value:"<code>SHELLHUB_CONNECTOR</code>",id:"shellhub_connector",level:3},{value:"<code>SHELLHUB_CONNECTOR_TENANT_ID</code>",id:"shellhub_connector_tenant_id",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,s.jsxs)(n.p,{children:["ShellHub is easy to configure, all configuration is done via environment\nvariables inside the ",(0,s.jsx)(n.code,{children:".env.override"})," file located at the root of ShellHub project dir."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["By default, the ",(0,s.jsx)(n.code,{children:".env.override"})," file does not exists, so you need need to create it."]})}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["All default values are inherited from ",(0,s.jsx)(n.code,{children:".env"})," file."]})}),"\n",(0,s.jsx)(n.p,{children:"The bind address for the ShellHub gateway's container to bind on"}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_bind_address",children:(0,s.jsx)(n.code,{children:"SHELLHUB_BIND_ADDRESS"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: 0.0.0.0"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_http_port",children:(0,s.jsx)(n.code,{children:"SHELLHUB_HTTP_PORT"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: 80"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The HTTP listen port for the ShellHub web-based GUI, API and Reverse SSH tunnel."}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_https_port",children:(0,s.jsx)(n.code,{children:"SHELLHUB_HTTPS_PORT"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: 443"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The HTTPS listen port for the ShellHub web-based GUI, API and Reverse SSH tunnel."}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_ssh_port",children:(0,s.jsx)(n.code,{children:"SHELLHUB_SSH_PORT"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: 22"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The SSH listen port for incoming SSH connections to devices."}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_proxy",children:(0,s.jsx)(n.code,{children:"SHELLHUB_PROXY"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: false"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set this variable to ",(0,s.jsx)(n.code,{children:"true"})," if you are running a Layer 4 load balancer with proxy protocol in front of ShellHub."]}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_auto_ssl",children:(0,s.jsx)(n.code,{children:"SHELLHUB_AUTO_SSL"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: false"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Automatic HTTPS with Let's Encrypt"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["When enabling this option, you must set ",(0,s.jsx)(n.code,{children:"SHELLHUB_DOMAIN"})," with\ndomain of the server."]})}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_redirect_to_https",children:(0,s.jsx)(n.code,{children:"SHELLHUB_REDIRECT_TO_HTTPS"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: false"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Redirect requests from HTTP port to HTTPS port"}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_domain",children:(0,s.jsx)(n.code,{children:"SHELLHUB_DOMAIN"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: localhost"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Domain of the server"}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_connector",children:(0,s.jsx)(n.code,{children:"SHELLHUB_CONNECTOR"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default: false"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Enables container remote access.\nWhen enabled, all containers on the Docker host will be automatically added to a namespace\nconfigured by the ",(0,s.jsx)(n.code,{children:"SHELLHUB_CONNECTOR_TENANT_ID"})," variable."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Important Security Notice",type:"caution",children:[(0,s.jsx)(n.p,{children:"Please note that user access within the containers is restricted as a crucial security measure."}),(0,s.jsxs)(n.p,{children:["For password-based authentication, users who do not have a password defined in the containers ",(0,s.jsx)(n.code,{children:"/etc/shadow"}),"\nwill be denied access to connection attempts. This means that only users with properly configured passwords (via ",(0,s.jsx)(n.code,{children:"passwd"})," command) will be able to attempt connections."]}),(0,s.jsxs)(n.p,{children:["Alternatively, users can utilize the public key authentication scheme, even if they do not have a password defined\nin the containers ",(0,s.jsx)(n.code,{children:"/etc/shadow"})," file."]})]}),"\n",(0,s.jsx)(n.h3,{id:"shellhub_connector_tenant_id",children:(0,s.jsx)(n.code,{children:"SHELLHUB_CONNECTOR_TENANT_ID"})}),"\n",(0,s.jsx)(n.p,{children:"This variable specifies the namespace to which containers will be added when the container remote access is enabled."})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var s=i(96540);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);