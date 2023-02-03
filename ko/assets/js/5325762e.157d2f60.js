"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[297],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52991:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(67294),i=t(34334),a=t(93651),o=t(39960),c=t(13919),l=t(95999),s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function u(e){var n=e.href,t=e.children;return r.createElement(o.Z,{href:n,className:(0,i.Z)("card padding--lg",s)},t)}function m(e){var n=e.href,t=e.icon,a=e.title,o=e.description;return r.createElement(u,{href:n},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:a},t," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",p),title:o},o))}function f(e){var n=e.item,t=(0,a.Wl)(n);return t?r.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function g(e){var n,t=e.item,i=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(n=t.docId)?n:void 0);return r.createElement(m,{href:t.href,icon:i,title:t.label,description:null==o?void 0:o.description})}function y(e){var n=e.item;switch(n.type){case"link":return r.createElement(g,{item:n});case"category":return r.createElement(f,{item:n});default:throw new Error("unknown item type "+JSON.stringify(n))}}function v(e){var n=e.items,t=e.className;return r.createElement("section",{className:(0,i.Z)("row",t)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,a.Wl)(e)}))}(n).map((function(e,n){return r.createElement("article",{key:n,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},39195:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=t(52991),c=t(93651),l=["components"],s={slug:"/sending-transaction",sidebar_position:3,description:"Universal Provider\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba40\ud2f0 \uccb4\uc778 \uc0c1\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30"},d="Sending Transactions",p={unversionedId:"wallet/developer-guide/sending-transaction/index",id:"wallet/developer-guide/sending-transaction/index",title:"Sending Transactions",description:"Universal Provider\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba40\ud2f0 \uccb4\uc778 \uc0c1\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/wallet/developer-guide/sending-transaction/index.md",sourceDirName:"wallet/developer-guide/sending-transaction",slug:"/sending-transaction",permalink:"/ko/sending-transaction",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/sending-transaction/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/sending-transaction",sidebar_position:3,description:"Universal Provider\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba40\ud2f0 \uccb4\uc778 \uc0c1\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30"},sidebar:"tutorialSidebar",previous:{title:"Chain Names",permalink:"/ko/wallet/developer-guide/provider-api/chain-names"},next:{title:"Aptos",permalink:"/ko/wallet/developer-guide/sending-transaction/aptos"}},u={},m=[],f={toc:m};function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-transactions"},"Sending Transactions"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud558\ub294 \uac83\uc740 \ube14\ub85d\uccb4\uc778\uc758 \uacf5\uc2dd\uc801\uc778 \uc561\uc158\uc785\ub2c8\ub2e4. \uc774 \uc561\uc158\uc740 \uac04\ub2e8\ud55c \ud1a0\ud070 \uc804\uc1a1, \uc0c8\ub85c\uc6b4 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ube14\ub85d\uccb4\uc778 \uc0c1\uc758 \uc0c1\ud0dc \ubcc0\uacbd\uc744 \uc720\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud55c\ub2e4\ub294 \uac83\uc740 \ud06c\uac8c \ud2b8\ub79c\uc7ad\uc158 \uc11c\uba85\uacfc \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1 \ub450 \ub2e8\uacc4\ub85c \ub098\ub20c \uc218 \uc788\ub294\ub370, WELLDONE Wallet\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"dapp:signAndSendTransaction")," \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc11c\uba85\ud558\uace0 \uc804\uc1a1\ud558\ub294 \uacfc\uc815\uc744 \ud55c \ubc88\uc5d0 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dapp:signAndSendTransaction")," \uba54\uc18c\ub4dc\uc758 \ud30c\ub77c\ubbf8\ud130\ub85c\ub294 \ud06c\uac8c ",(0,a.kt)("inlineCode",{parentName:"p"},"CHAIN_NAME"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"HEX_STRING_TX_DATA"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"CHAIN_NAME"),"\uc740 \uc5f0\uacb0\ud558\uace0\uc790 \ud558\ub294 \uccb4\uc778\uc758 \uc774\ub984\uc744, ",(0,a.kt)("inlineCode",{parentName:"p"},"HEX_STRING_TX_DATA"),"\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 HEX string \ud615\uc73c\ub85c \ubcc0\ud658\ud55c \uac12\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub2e4\uc591\ud55c \uccb4\uc778\ub4e4\uc758 \ud2b8\ub79c\uc7ad\uc158 \ud3ec\ub9f7\uc774 \uc0c1\uc774\ud558\uae30 \ub54c\ubb38\uc5d0, WELLDONE Wallet\uc5d0\uc11c\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 HEX string \ud0c0\uc785\uc73c\ub85c \ubcc0\ud658\ud55c \uac12\uc744 \uc778\uc790\ub85c \ubc1b\uc544 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-info"},"EVM \uacc4\uc5f4\uc758 \uacbd\uc6b0 \ud2b8\ub79c\uc7ad\uc158 \uac1d\uccb4\ub97c \uadf8\ub300\ub85c \ub123\uc5b4\uc11c \uc804\uc1a1\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';\ntype HEX_STRING_TX_DATA = 'string';\n\nconst response = await window.dapp.request(CHAIN_NAME, {\n  method: 'dapp:signAndSendTransaction',\n  params: [HEX_STRING_TX_DATA],\n});\n")),(0,a.kt)("p",null,"\uccb4\uc778\ubcc4\ub85c \ub3d9\uc77c\ud55c \uba54\uc18c\ub4dc ",(0,a.kt)("inlineCode",{parentName:"p"},"dapp:signAndSendTransaction"),"\ub97c \uc0ac\uc6a9\ud558\uc9c0\ub9cc, \uccb4\uc778\ubcc4\ub85c \ud2b8\ub79c\uc7ad\uc158 \ud3ec\ub9f7\uc774 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"HEX_STRING_TX_DATA"),"\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc758 \uccb4\uc778\ubcc4 \uc139\uc158\uc744 \ud1b5\ud574 \uccb4\uc778\ubcc4\ub85c \uc5b4\ub5bb\uac8c \uc694\uccad\uc744 \ubcf4\ub0b4\ub294\uc9c0 \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158 \uc608\uc81c\uc640 \ud568\uaed8 \uc0c1\uc138\ud558\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);