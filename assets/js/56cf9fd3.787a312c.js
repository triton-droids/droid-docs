"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7011],{1679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=t(4848),o=t(8453);const s={},c="Connecting to a device",d={id:"simulation/devices/connecting",title:"Connecting to a device",description:"You can establish an SSH connection to a device from the Devices page.",source:"@site/docs/simulation/devices/connecting.md",sourceDirName:"simulation/devices",slug:"/simulation/devices/connecting",permalink:"/droid-docs/simulation/devices/connecting",draft:!1,unlisted:!1,editUrl:"https://github.com/triton-droids/droid-docs/tree/main/docs/simulation/devices/connecting.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Adding device",permalink:"/droid-docs/simulation/devices/adding"},next:{title:"Tagging devices",permalink:"/droid-docs/simulation/devices/tagging devices"}},r={},l=[{value:"Alternate connection method",id:"alternate-connection-method",level:2},{value:"Command line SSH Client",id:"command-line-ssh-client",level:3},{value:"Desktop and mobile GUI SSH Client",id:"desktop-and-mobile-gui-ssh-client",level:3},{value:"PuTTY instructions",id:"putty-instructions",level:4},{value:"JuiceSSH instructions",id:"juicessh-instructions",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"connecting-to-a-device",children:"Connecting to a device"})}),"\n",(0,i.jsx)(n.p,{children:"You can establish an SSH connection to a device from the Devices page."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information about other connection methods, see ",(0,i.jsx)(n.a,{href:"#alternate-connection-method",children:"Alternate connection method"})," section below."]})}),"\n",(0,i.jsxs)(n.p,{children:["From Devices page, choose the device you wish to connect to and click on ",(0,i.jsx)(n.strong,{children:"Connect"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(723).A+"",width:"1902",height:"942"})}),"\n",(0,i.jsx)(n.p,{children:"A dialog will pop up prompting you for the username and password of an existing user on the device's operating system.\nAfter providing credentials, click on Connect button."}),"\n",(0,i.jsx)(n.h2,{id:"alternate-connection-method",children:"Alternate connection method"}),"\n",(0,i.jsx)(n.p,{children:"ShellHub is compatible with any SSH client that supports a minimum of SSH version 2.0."}),"\n",(0,i.jsxs)(n.p,{children:["Regardless of the connection method you choose, you need to know its SSHID address.\nFrom Devices page, choose the device you want to connect to and copy the device's SSHID address.\nIn the next step, make sure to replace ",(0,i.jsx)(n.code,{children:"<USER>"})," with the existing user on the\ndevice's operating system and ",(0,i.jsx)(n.code,{children:"<SSHID>"})," with the SSHID copied before."]}),"\n",(0,i.jsx)(n.h3,{id:"command-line-ssh-client",children:"Command line SSH Client"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command on your terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ssh <USER>@<SSHID>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"desktop-and-mobile-gui-ssh-client",children:"Desktop and mobile GUI SSH Client"}),"\n",(0,i.jsx)(n.h4,{id:"putty-instructions",children:"PuTTY instructions"}),"\n",(0,i.jsx)(n.p,{children:"Open Putty and fill in with the following information:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Host Name (or IP address)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<USER>@<SSHID>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Port"}),(0,i.jsx)(n.td,{children:"22"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Connection type"}),(0,i.jsx)(n.td,{children:"SSH"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"juicessh-instructions",children:"JuiceSSH instructions"}),"\n",(0,i.jsx)(n.p,{children:"Open JuiceSSH, click on Quick Connect button and enter following address:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<USER>@<SSHID>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},723:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/device-connect-db5b8f43877367b70a462a27b726e697.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var i=t(6540);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);