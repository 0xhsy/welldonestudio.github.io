"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[958],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var a=n(3117),l=n(102),o=(n(7294),n(3905)),r=["components"],i={sidebar_position:3,description:"Deploy and Run Klaytn Smart Contract"},c="Klaytn",p={unversionedId:"Deploy-and-Run/Klaytn",id:"Deploy-and-Run/Klaytn",title:"Klaytn",description:"Deploy and Run Klaytn Smart Contract",source:"@site/docs/Deploy-and-Run/Klaytn.md",sourceDirName:"Deploy-and-Run",slug:"/Deploy-and-Run/Klaytn",permalink:"/docs/Deploy-and-Run/Klaytn",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/blob/master/docs/Deploy-and-Run/Klaytn.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Deploy and Run Klaytn Smart Contract"},sidebar:"tutorialSidebar",previous:{title:"Celo",permalink:"/docs/Deploy-and-Run/Celo"},next:{title:"Execute the Contract",permalink:"/docs/Execute-the-Contract"}},u={},s=[{value:"Choose a wallet",id:"choose-a-wallet",level:2},{value:"Connect",id:"connect",level:2},{value:"Create Project",id:"create-project",level:2},{value:"Compile",id:"compile",level:2},{value:"Deploy",id:"deploy",level:2},{value:"View and Call function",id:"view-and-call-function",level:2}],d={toc:s};function m(e){var t=e.components,i=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"klaytn"},"Klaytn"),(0,o.kt)("h2",{id:"choose-a-wallet"},"Choose a wallet"),(0,o.kt)("p",null,"You must first install ",(0,o.kt)("inlineCode",{parentName:"p"},"WELLDONE Wallet")," before you can utilize ",(0,o.kt)("inlineCode",{parentName:"p"},"WELLDONE Code"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en"},"\u27a1\ufe0f Installation of WELLDONE Wallet")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Wallet",src:n(656).Z,title:"Select Wallet",width:"1354",height:"970"})),(0,o.kt)("h2",{id:"connect"},"Connect"),(0,o.kt)("p",null,"Create a Klaytn account in ",(0,o.kt)("inlineCode",{parentName:"p"},"WELLDONE wallet")," before connecting to the network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect Wallet",src:n(4115).Z,title:"Connect Wallet",width:"1478",height:"696"})),(0,o.kt)("h2",{id:"create-project"},"Create Project"),(0,o.kt)("p",null,"Write a contract in solidity, then select a contract file you have written."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Project",src:n(3847).Z,title:"Select Project",width:"1788",height:"562"})),(0,o.kt)("h2",{id:"compile"},"Compile"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the Compile button after selecting the solidity contract code."),(0,o.kt)("li",{parentName:"ol"},"Select the Compile option.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Project Compile",src:n(2636).Z,title:"Project Compile",width:"618",height:"842"})),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you have built contract code, click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Deploy")," button."),(0,o.kt)("li",{parentName:"ul"},"Sign your transaction using your wallet.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy",src:n(2674).Z,title:"Deploy",width:"1598",height:"1658"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can run methods once the contract has been deployed.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deployed Contract",src:n(378).Z,title:"Deployed Contract",width:"580",height:"636"})),(0,o.kt)("h2",{id:"view-and-call-function"},"View and Call function"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have followed the aforementioned steps to deploy the contract, it is automatically triggered on the website.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can alternatively initiate an existing contract by putting the contract address into the ",(0,o.kt)("inlineCode",{parentName:"p"},"At Address")," field and click the button."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"At Address",src:n(1262).Z,title:"At Address",width:"582",height:"150"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose the method to invoke.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add parameters as you needed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reads the value through ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"transact")," or sends a transaction."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Deployed Contract",src:n(378).Z,title:"Deployed Contract",width:"580",height:"636"})))))}m.isMDXComponent=!0},378:function(e,t,n){t.Z=n.p+"assets/images/call_view_celo-fcd33bb14854d3d20f7f939a2a14bb58.png"},2636:function(e,t,n){t.Z=n.p+"assets/images/compile-klaytn-feb11f5a2574aeca65ac55605b0deace.png"},4115:function(e,t,n){t.Z=n.p+"assets/images/connect-wallet-klaytn-a861cb108167039b1223983b0f3eee65.png"},1262:function(e,t,n){t.Z=n.p+"assets/images/contract_address-ec30bfaa4527befb311f67d387ae4b3f.png"},3847:function(e,t,n){t.Z=n.p+"assets/images/create-project-celo-e10ecdf33f1e0a8f4ddea9065797bce2.png"},2674:function(e,t,n){t.Z=n.p+"assets/images/deploy-klaytn-ed4b7f3198f09389c0f4e0c1502910e5.png"},656:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-bc6a727b80fedced25d62154ce5b092d.png"}}]);