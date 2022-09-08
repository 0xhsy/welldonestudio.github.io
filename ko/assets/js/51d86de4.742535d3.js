"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[7355],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),o=n(4334),c=n(3651),i=n(9960),a=n(3919),l=n(5999),u="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function d(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},n)}function m(e){var t=e.href,n=e.icon,c=e.title,i=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:c},n," ",c),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",p),title:i},i))}function f(e){var t=e.item,n=(0,c.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,o=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:o,title:n.label,description:null==i?void 0:i.description})}function h(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e}))})))}},7550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(3117),o=n(102),c=(n(7294),n(3905)),i=n(2991),a=n(3651),l=["components"],u={slug:"/excute-the-contract",keywords:["\ucee8\ud2b8\ub799\ud2b8 \uc2e4\ud589","\uc6f0\ub358 \uc6d4\ub81b","\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8"],description:"Universal Provider\ub97c \uc0ac\uc6a9\ud574\uc11c \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud558\uae30",sidebar_position:4},s="Execute the Contract",p={unversionedId:"wallet/developer-guide/execute-the-contract/index",id:"wallet/developer-guide/execute-the-contract/index",title:"Execute the Contract",description:"Universal Provider\ub97c \uc0ac\uc6a9\ud574\uc11c \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud558\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/wallet/developer-guide/execute-the-contract/index.md",sourceDirName:"wallet/developer-guide/execute-the-contract",slug:"/excute-the-contract",permalink:"/ko/docs/excute-the-contract",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/execute-the-contract/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/excute-the-contract",keywords:["\ucee8\ud2b8\ub799\ud2b8 \uc2e4\ud589","\uc6f0\ub358 \uc6d4\ub81b","\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8"],description:"Universal Provider\ub97c \uc0ac\uc6a9\ud574\uc11c \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud558\uae30",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Near",permalink:"/ko/docs/wallet/developer-guide/sending-transaction/near"},next:{title:"Ethereum, Celo, Klaytn",permalink:"/ko/docs/wallet/developer-guide/execute-the-contract/ethereum-celo-klaytn"}},d={},m=[],f={toc:m};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"execute-the-contract"},"Execute the Contract"),(0,c.kt)("p",null,"\ubcf8 \ubb38\uc11c\uc5d0\uc11c\ub294 WELLDONE Wallet\uc758 ",(0,c.kt)("inlineCode",{parentName:"p"},"dapp:sendTransaction")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud574\uc11c \uccb4\uc778\ubcc4\ub85c \ubc30\ud3ec\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud558\ub294 \ubc29\ubc95\uc744 \uac04\ub2e8\ud55c \uce74\uc6b4\ud130 \uc608\uc81c\ub97c \ud1b5\ud574 \uc0b4\ud3b4\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4."),(0,c.kt)("p",null,"\uc6b0\ub9ac\uac00 \uc0ac\uc6a9\ud560 \uce74\uc6b4\ud130 \uc608\uc81c\ub294 \uccb4\uc778 \ubcc4\ub85c \ucee8\ud2b8\ub799\ud2b8 \uc138\ubd80 \uad6c\ud604 \uc0ac\ud56d\uc740 \uc870\uae08\uc529 \ub2e4\ub974\uc9c0\ub9cc \uacf5\ud1b5\uc73c\ub85c ",(0,c.kt)("inlineCode",{parentName:"p"},"increment"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"reset")," \ud568\uc218\ub97c \uad6c\ud604\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\nSolidity \uc218\ub3c4\ucf54\ub4dc\ub85c \uac04\ub2e8\ud558\uac8c \uad6c\ud604\ud574\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.4;\n\ncontract Counter {\n \xa0 \xa0int private count = 0;\n\n \xa0 \xa0constructor(uint256 _count) {\n \xa0    count = _count;\n \xa0  }\n\n \xa0 \xa0function increment(uint256 _count) public {\n \xa0 \xa0 \xa0 \xa0count += _count;\n \xa0  }\n\n \xa0 \xa0function reset(uint256 _count) public {\n \xa0 \xa0 \xa0 \xa0count = _count\n \xa0  }\n}\n")),(0,c.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud558\ub294 \ubc29\ubc95\uc740 \uacf5\ud1b5\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \ud3ec\ub9f7\uc744 \ud1b5\ud574 \uc774\ub904\uc9d1\ub2c8\ub2e4. \ud30c\ub77c\ubbf8\ud130\ub85c ",(0,c.kt)("inlineCode",{parentName:"p"},"CHAIN_NAME"),"\uacfc ",(0,c.kt)("inlineCode",{parentName:"p"},"TRANSACTION_PARAMETER"),"\ub97c \uc804\ub2ec\ud558\ub294\ub370, ",(0,c.kt)("inlineCode",{parentName:"p"},"TRANSACTION_PARAMETER"),"\ub294 transaction\uc744 string type\uc73c\ub85c \ubcc0\ud658\ud55c \uac12\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uccb4\uc778\ubcc4\ub85c transaction \ud3ec\ub9f7\uc774 \uc0c1\uc774\ud558\uae30 \ub54c\ubb38\uc5d0, WELLDONE Wallet\uc5d0\uc11c\ub294 \uc544\ub798\uc640 \uac19\uc774 string \ud615\uc73c\ub85c \ubcc0\ud658\ub41c \uaf34\uc744 \uacf5\ud1b5\uc73c\ub85c \ubc1b\uc544 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';\ntype TRANSACTION_PARAMETER = 'string';\n\nconst response = await dapp.request(CHAIN_NAME, {\n  method: 'dapp:sendTransaction',\n  params: [TRANSACTION_PARAMETER],\n});\nconst txHash = response.hash;\n")),(0,c.kt)("p",null,"\uc544\ub798\uc758 \uccb4\uc778\ubcc4 \uc139\uc158\uc744 \ud1b5\ud574 \uccb4\uc778 \ubcc4\ub85c \uc5b4\ub5bb\uac8c \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud560 \uc218 \uc788\ub294\uc9c0 \uc0c1\uc138\ud558\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,c.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);