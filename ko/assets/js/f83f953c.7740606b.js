"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[191],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?l.createElement(f,o(o({ref:t},u),{},{components:n})):l.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var l=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],i={sidebar_position:2,description:"Deploy and Run Celo Smart Contract"},c=void 0,p={unversionedId:"Deploy-and-Run/Celo",id:"Deploy-and-Run/Celo",title:"Celo",description:"Deploy and Run Celo Smart Contract",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Deploy-and-Run/Celo.md",sourceDirName:"Deploy-and-Run",slug:"/Deploy-and-Run/Celo",permalink:"/ko/docs/Deploy-and-Run/Celo",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/Deploy-and-Run/Celo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Deploy and Run Celo Smart Contract"},sidebar:"tutorialSidebar",previous:{title:"Near",permalink:"/ko/docs/Deploy-and-Run/Near"},next:{title:"Klaytn",permalink:"/ko/docs/Deploy-and-Run/Klaytn"}},u={},d=[{value:"Choose a wallet",id:"choose-a-wallet",level:2},{value:"Connect",id:"connect",level:2},{value:"Create Project",id:"create-project",level:2},{value:"Compile",id:"compile",level:2},{value:"Deploy",id:"deploy",level:2},{value:"View and Call function",id:"view-and-call-function",level:2}],s={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"choose-a-wallet"},"Choose a wallet"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WELLDONE Code"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"WELLDONE Wallet"),"\uc744 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select Wallet",src:n(7302).Z,title:"Select Wallet",width:"1354",height:"970"})),(0,a.kt)("h2",{id:"connect"},"Connect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WELLDONE wallet"),"\uc744 \uc5f0\uacb0\ud558\uae30 \uc774\uc804\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"WELLDONE wallet"),"\uc5d0 Celo account\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connect Wallet",src:n(7845).Z,title:"Connect Wallet",width:"1774",height:"1240"})),(0,a.kt)("h2",{id:"create-project"},"Create Project"),(0,a.kt)("p",null,"solidity\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 solidity\ub85c \uc791\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8 \ud30c\uc77c\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select Project",src:n(6485).Z,title:"Select Project",width:"1788",height:"562"})),(0,a.kt)("h2",{id:"compile"},"Compile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"solidity \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc120\ud0dd\ud558\uba74 Compile \ubc84\ud2bc\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Complie \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Compile",src:n(2594).Z,title:"Project Compile",width:"592",height:"698"})),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"WELLDONE Wallet\uc5d0\uc11c\ub294 \ud574\ub2f9 \uc9c0\uac11 \uc8fc\uc18c\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uc5ec \uac00\uc838\uc635\ub2c8\ub2e4. \ub530\ub77c\uc11c Deploy\ub97c \ud558\uae30 \uc774\uc804\uc5d0 \uba54\uc778\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0, \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0 \ubbf8\ub9ac \uace0\ub824\ud574\ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub41c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\uac00 \uc788\ub294 \uacbd\uc6b0 \ub514\ud50c\ub85c\uc774 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac70\ub798\uc5d0 \uc11c\uba85\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy",src:n(7560).Z,title:"Deploy",width:"1410",height:"1318"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uba74, \ucee8\ud2b8\ub799\ud2b8 \uba54\uc18c\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deployed Contract",src:n(6073).Z,title:"Deployed Contract",width:"580",height:"636"})),(0,a.kt)("h2",{id:"view-and-call-function"},"View and Call function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc704\uc758 \uacfc\uc815\uc744 \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud639\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"At Address")," \ub0b4\ubd80\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"At Address"),"\ubc84\ud2bc\uc744 \ub20c\ub7ec \uae30\uc874\uc5d0 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"At Address",src:n(4830).Z,title:"At Address",width:"582",height:"150"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud638\ucd9c\ud560 \uba54\uc11c\ub4dc\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud544\uc694\uc5d0 \ub530\ub77c \ub9e4\uac1c\ubcc0\uc218\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"call"),"\uc774\ub098 ",(0,a.kt)("inlineCode",{parentName:"p"},"transact"),"\ub97c \ud1b5\ud574 \uac12\uc744 \uc77d\uac70\ub098 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Deployed Contract",src:n(6073).Z,title:"Deployed Contract",width:"580",height:"636"})))))}m.isMDXComponent=!0},6073:function(e,t,n){t.Z=n.p+"assets/images/call_view_celo-fcd33bb14854d3d20f7f939a2a14bb58.png"},2594:function(e,t,n){t.Z=n.p+"assets/images/compile-celo-80f1ad81336de0f709f27f3d012827ac.png"},4830:function(e,t,n){t.Z=n.p+"assets/images/contract_address-ec30bfaa4527befb311f67d387ae4b3f.png"},6485:function(e,t,n){t.Z=n.p+"assets/images/create-project-celo-e10ecdf33f1e0a8f4ddea9065797bce2.png"},7560:function(e,t,n){t.Z=n.p+"assets/images/deploy-celo-b125c5585b534243ce76ed78de79b362.png"},7845:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-celo-90a940ff3067788efcfbb1dd40508bac.png"},7302:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-bc6a727b80fedced25d62154ce5b092d.png"}}]);