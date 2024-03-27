"use strict";(self.webpackChunkflatboat_docs=self.webpackChunkflatboat_docs||[]).push([[146],{1276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(4848),i=t(8453);const a={sidebar_position:2},o="Install Flatboat",l={id:"install",title:"Install Flatboat",description:"Flatboat only works on Linux based systems, compatible with Docker Engine.",source:"@site/docs/02-install.mdx",sourceDirName:".",slug:"/install",permalink:"/flatboat-docs/docs/install",draft:!1,unlisted:!1,editUrl:"https://github.com/JuanCSUCoder/flatboat-docs/tree/main/docs/02-install.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/flatboat-docs/docs/intro"},next:{title:"Create a ROS2 Container Workspace",permalink:"/flatboat-docs/docs/Tutorials/create_ws"}},r={},d=[{value:"Install the Dependencies",id:"install-the-dependencies",level:2},{value:"Install Docker Engine",id:"install-docker-engine",level:3},{value:"Install NodeJS and NPM",id:"install-nodejs-and-npm",level:3},{value:"Install Devcontainer packages",id:"install-devcontainer-packages",level:3},{value:"Install Rust and Cargo",id:"install-rust-and-cargo",level:3},{value:"Run the Command",id:"run-the-command",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"install-flatboat",children:"Install Flatboat"}),"\n",(0,s.jsxs)(n.p,{children:["Flatboat only works on Linux based systems, compatible with ",(0,s.jsx)(n.strong,{children:"Docker Engine"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"install-the-dependencies",children:"Install the Dependencies"}),"\n",(0,s.jsx)(n.h3,{id:"install-docker-engine",children:"Install Docker Engine"}),"\n",(0,s.jsxs)(n.p,{children:["The main thing required to run ",(0,s.jsx)(n.strong,{children:"Flatboat"})," is the ",(0,s.jsx)(n.strong,{children:"Docker Engine"}),". Alternative container engines like ",(0,s.jsx)(n.em,{children:"Podman"})," may work, but ",(0,s.jsx)(n.strong,{children:"are not officially supported"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can install ",(0,s.jsx)(n.strong,{children:"Docker"})," following the instructions on their ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"documentation"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It's not recommended to use a Docker rootless installation."}),"\n",(0,s.jsxs)(n.li,{children:["It's recommended to add your ",(0,s.jsx)(n.code,{children:"$USER"})," to ",(0,s.jsx)(n.code,{children:"docker"})," group."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"install-nodejs-and-npm",children:"Install NodeJS and NPM"}),"\n",(0,s.jsxs)(n.p,{children:["The next thing is ",(0,s.jsx)(n.strong,{children:"NodeJS"})," runtime for javascript applications and ",(0,s.jsx)(n.strong,{children:"NPM"})," for installing packages. You can download these command-line tools from the following sources:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Official Download from ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en",children:"NodeJS Website"})]}),"\n",(0,s.jsxs)(n.li,{children:["Alternative Download for Ubuntu/Debian based systems from ",(0,s.jsx)(n.a,{href:"https://github.com/nodesource/distributions?tab=readme-ov-file#debian-and-ubuntu-based-distributions",children:"NodeSource (Ubuntu/Debian)"})]}),"\n",(0,s.jsxs)(n.li,{children:["Other installation options from ",(0,s.jsx)(n.a,{href:"https://github.com/nodesource/distributions?tab=readme-ov-file",children:"NodeSource"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"It is possible in the future that NodeJS removes NPM from its default installation, which may require another installation."})}),"\n",(0,s.jsx)(n.h3,{id:"install-devcontainer-packages",children:"Install Devcontainer packages"}),"\n",(0,s.jsxs)(n.p,{children:["Devcontainer is an specification created by Microsoft for development inside containers, which is used by ",(0,s.jsx)(n.strong,{children:"Flatboat"}),". Therefore, is required to install with the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo npm i -g @devcontainers/cli\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-rust-and-cargo",children:"Install Rust and Cargo"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Flatboat"})," is developed in ",(0,s.jsx)(n.em,{children:"Rust programming language"}),", and published on ",(0,s.jsx)(n.a,{href:"https://crates.io/crates/flatboat",children:(0,s.jsx)(n.em,{children:"crates.io"})}),". So in order to install it the ",(0,s.jsx)(n.strong,{children:"Cargo"})," package manager is required, and can be installed with the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When prompted, is recommended to choose the ",(0,s.jsx)(n.strong,{children:"default installation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"run-the-command",children:"Run the Command"}),"\n",(0,s.jsxs)(n.p,{children:["Install Flatboat with ",(0,s.jsx)(n.code,{children:"cargo"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  cargo install flatboat\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Learn about Flatboat with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  flatboat -h\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);