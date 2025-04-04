"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5295],{84289:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var o=i(74848),t=i(28453);const r={},l="Buildroot",s={id:"overview/supported-platforms/buildroot",title:"Buildroot",description:"This guide provides instructions for integrating the ShellHub Agent into a Buildroot-based system, enabling ShellHub\u2019s remote management capabilities.",source:"@site/docs/overview/supported-platforms/buildroot.md",sourceDirName:"overview/supported-platforms",slug:"/overview/supported-platforms/buildroot",permalink:"/docs/overview/supported-platforms/buildroot",draft:!1,unlisted:!1,editUrl:"https://github.com/shellhub-io/docs/tree/master/docs/overview/supported-platforms/buildroot.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Supported Platforms",permalink:"/docs/overview/supported-platforms/"},next:{title:"FreeBSD",permalink:"/docs/overview/supported-platforms/freebsd"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Cloning Repositories",id:"step-1-cloning-repositories",level:2},{value:"Step 2: Configuring ShellHub Integration",id:"step-2-configuring-shellhub-integration",level:2},{value:"Setting Default Configuration",id:"setting-default-configuration",level:3},{value:"Modifying Configuration via Menuconfig",id:"modifying-configuration-via-menuconfig",level:3},{value:"Step 3: Adding Custom ShellHub Configuration",id:"step-3-adding-custom-shellhub-configuration",level:2},{value:"Step 4: Building the System",id:"step-4-building-the-system",level:2},{value:"Step 5: Running With QEMU (Optional)",id:"step-5-running-with-qemu-optional",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"ShellHub Environment Variables for BuildRoot",id:"shellhub-environment-variables-for-buildroot",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"buildroot",children:"Buildroot"})}),"\n",(0,o.jsx)(n.p,{children:"This guide provides instructions for integrating the ShellHub Agent into a Buildroot-based system, enabling ShellHub\u2019s remote management capabilities."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Buildroot Environment"}),": Ensure you have Buildroot installed on your system."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"ShellHub Access"}),": A valid tenant ID for your ShellHub Cloud or self-hosted instance."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"QEMU"}),": Installed and configured for emulated environments (optional)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-1-cloning-repositories",children:"Step 1: Cloning Repositories"}),"\n",(0,o.jsx)(n.p,{children:"Clone the Buildroot repository:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone git://git.buildroot.net/buildroot\n"})}),"\n",(0,o.jsx)(n.p,{children:"Clone the ShellHub external Buildroot tree:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/shellhub-io/buildroot.git shellhub\n"})}),"\n",(0,o.jsx)(n.h2,{id:"step-2-configuring-shellhub-integration",children:"Step 2: Configuring ShellHub Integration"}),"\n",(0,o.jsx)(n.h3,{id:"setting-default-configuration",children:"Setting Default Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Navigate to the Buildroot directory and set the default configuration for ShellHub:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd buildroot\nmake BR2_EXTERNAL=../shellhub qemu_x86_64_defconfig\n"})}),"\n",(0,o.jsx)(n.h3,{id:"modifying-configuration-via-menuconfig",children:"Modifying Configuration via Menuconfig"}),"\n",(0,o.jsxs)(n.p,{children:["Start the Buildroot ",(0,o.jsx)(n.code,{children:"menuconfig"})," to customize options. Ensure the ",(0,o.jsx)(n.strong,{children:"ShellHub"})," option is selected under ",(0,o.jsx)(n.strong,{children:"External options"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make BR2_EXTERNAL=../shellhub menuconfig\n"})}),"\n",(0,o.jsx)(n.h2,{id:"step-3-adding-custom-shellhub-configuration",children:"Step 3: Adding Custom ShellHub Configuration"}),"\n",(0,o.jsx)(n.p,{children:"To customize the ShellHub Agent\u2019s configuration, create a configuration overlay:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nano ../shellhub/rootfs_overlay/etc/default/shellhub-agent\n"})}),"\n",(0,o.jsx)(n.p,{children:"Put the following content:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'SERVER_ADDRESS="https://cloud.shellhub.io"\nTENANT_ID="<your-tenant-id-here>"\nPRIVATE_KEY="/etc/shellhub-agent.key"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Replace the placeholder values. For more information see ",(0,o.jsx)(n.a,{href:"#shellhub-environment-variables-for-buildroot",children:"ShellHub Environment Variables for BuildRoot."}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"step-4-building-the-system",children:"Step 4: Building the System"}),"\n",(0,o.jsx)(n.p,{children:"Build the root filesystem and kernel:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make BR2_EXTERNAL=../shellhub rootfs-ext2\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command generates the system images required for your device."}),"\n",(0,o.jsx)(n.h2,{id:"step-5-running-with-qemu-optional",children:"Step 5: Running With QEMU (Optional)"}),"\n",(0,o.jsx)(n.p,{children:"To test your Buildroot system with ShellHub in an emulated environment, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'qemu-system-x86_64 \\\n  -kernel output/images/bzImage \\\n  -drive file=output/images/rootfs.ext2,format=raw \\\n  -append "root=/dev/sda console=ttyS0" \\\n  -m 512M \\\n  -nographic \\\n  -netdev user,id=n0,hostfwd=tcp::2222-:22 \\\n  -device virtio-net-pci,netdev=n0\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(96551).A+"",width:"284",height:"158"})}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Configuration File Not Applied"}),": Check the log file ",(0,o.jsx)(n.code,{children:"/var/log/shellhub-agent.log"})," for error messages. If the agent fails to load configuration or reports ",(0,o.jsx)(n.code,{children:"failed to parse the configuration"}),", ensure the ",(0,o.jsx)(n.code,{children:"shellhub-agent"})," configuration file is correctly placed in ",(0,o.jsx)(n.code,{children:"/etc/default/"}),". Double-check variable names and values, especially for ",(0,o.jsx)(n.code,{children:"SERVER_ADDRESS"}),", ",(0,o.jsx)(n.code,{children:"PRIVATE_KEY"}),", and ",(0,o.jsx)(n.code,{children:"TENANT_ID"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Network Connectivity Issues"}),": If the agent cannot connect to the server, confirm that the network interface is properly configured and active. Verify connectivity by testing with a tool like ",(0,o.jsx)(n.code,{children:"ping"})," or ",(0,o.jsx)(n.code,{children:"curl"})," from within the target system."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Build Errors"}),": If Buildroot fails during compilation, ensure all dependencies are satisfied and that external trees (e.g., ShellHub) are correctly referenced with ",(0,o.jsx)(n.code,{children:"BR2_EXTERNAL"}),". Verify any added ",(0,o.jsx)(n.code,{children:"Config.in"})," modifications do not conflict with existing configurations."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"shellhub-environment-variables-for-buildroot",children:"ShellHub Environment Variables for BuildRoot"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"SERVER_ADDRESS"}),": Your ShellHub server address. Keep ",(0,o.jsx)(n.code,{children:"https://cloud.shellhub.io"})," if you're using ShellHub Cloud."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"PRIVATE_KEY"}),": Path to your private key file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"TENANT_ID"}),": Links the device to a specific tenant or namespace. For help retrieving this, see ",(0,o.jsx)(n.a,{href:"/user-guides/namespaces/retrieving-your-tenant-id",children:"Retrieving Your Tenant ID"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["By integrating ShellHub into your Buildroot system, you enable seamless remote management of your device. For more information on Buildroot, refer to the ",(0,o.jsx)(n.a,{href:"https://buildroot.org/docs.html",children:"Buildroot Manual"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},96551:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/pending-device-notification-fba8151ded082240e0ae22d5da341c24.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var o=i(96540);const t={},r=o.createContext(t);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);