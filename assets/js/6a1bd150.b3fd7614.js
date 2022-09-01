"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[469],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:0},u=void 0,c={unversionedId:"Deploy-and-Run/Introduction",id:"Deploy-and-Run/Introduction",title:"Introduction",description:"Since the smart contract development environment differs from networks, developers must reconstruct the development environment whenever the targeted network changes.",source:"@site/docs/Deploy-and-Run/Introduction.md",sourceDirName:"Deploy-and-Run",slug:"/Deploy-and-Run/Introduction",permalink:"/docs/Deploy-and-Run/Introduction",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/docs/Deploy-and-Run/Introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Deploy and Run",permalink:"/docs/Deploy-and-Run"},next:{title:"Near",permalink:"/docs/Deploy-and-Run/Near"}},s={},p=[{value:"Features",id:"features",level:2},{value:"How to connect to Remix",id:"how-to-connect-to-remix",level:2},{value:"Related",id:"related",level:2},{value:"Issues",id:"issues",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since the smart contract development environment differs from networks, developers must reconstruct the development environment whenever the targeted network changes."),(0,i.kt)("p",null,"Using the web-based Remix IDE, developers can quickly write and test EVM-based smart contracts."),(0,i.kt)("p",null,"WELLDONE Studio also offers ",(0,i.kt)("strong",{parentName:"p"},"WELLDONE Code"),", which allows chains backed by WELLDONE wallets to write smart contracts in Remix IDE for non-EVM networks, in addition to EVM-compatible networks."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WELLDONE Code")," is a wonderful tool for onboarding developers in any blockchain ecosystem since it allows them to write smart contracts without the need for building a separate development environment."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Multi-chain support"),(0,i.kt)("li",{parentName:"ol"},"Simple way to deploy contracts and perform functions.")),(0,i.kt)("h2",{id:"how-to-connect-to-remix"},"How to connect to Remix"),(0,i.kt)("p",null,"Follow the instructions at ",(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"https://remix.ethereum.org/"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the left bar, select ",(0,i.kt)("strong",{parentName:"li"},"Plugin Manager"),"."),(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Connect to a Local Plugin")," option.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin Manager",src:n(3239).Z,title:"Plugin Manager",width:"1656",height:"1588"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the plugin and display names."),(0,i.kt)("li",{parentName:"ul"},"In the URL column, type ",(0,i.kt)("a",{parentName:"li",href:"https://remix-plugin.welldonestudio.io/"},"https://remix-plugin.welldonestudio.io/"),"."),(0,i.kt)("li",{parentName:"ul"},"Select OK.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Local Plugin",src:n(7782).Z,title:"Local Plugin",width:"998",height:"1398"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The new plugin may now be found in the left bar."),(0,i.kt)("li",{parentName:"ul"},"Select the required chain by clicking New Plugin.")),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://remix-ide.readthedocs.io/en/latest/"},"Remix IDE Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/remix-ide"},"Github repository"))),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"If you encounter a problem, please report it to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/welldonestudio/welldonestudio.github.io"},"Github Repository"),"."))}m.isMDXComponent=!0},7782:function(e,t,n){t.Z=n.p+"assets/images/local-plugin-47259fdf7782b7a350504755e262ba66.png"},3239:function(e,t,n){t.Z=n.p+"assets/images/plugin-manager-645b4b9159e8a919b3c990383410ae26.png"}}]);