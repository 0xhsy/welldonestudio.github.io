"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[133],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7294),i=r(6010),a=r(8425),o=r(9960),c=r(3919),l=r(5999),p="cardContainer_fWXF",s="cardTitle_rnsV",u="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",p)},r)}function m(e){var t=e.href,r=e.icon,a=e.title,o=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",u),title:o},o))}function f(e){var t=e.item,r=(0,a.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){var t,r=e.item,i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:i,title:r.label,description:null==o?void 0:o.description})}function h(e){var t=e.item;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,a.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{key:t,item:e}))})))}},257:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=r(2991),c=r(8425),l=["components"],p={slug:"/provider-api",sidebar_position:4},s="Provider Api",u={unversionedId:"provider-api/index",id:"provider-api/index",title:"Provider Api",description:"\ubaa8\ub4e0 web3 \uc0ac\uc774\ud2b8 \uac1c\ubc1c\uc790\ub294 \uae30\ubcf8 \uc0ac\uc6a9\ubc95 \uc139\uc158\uc744 \uc77d\uc744 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/provider-api/index.md",sourceDirName:"provider-api",slug:"/provider-api",permalink:"/ko/docs/provider-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/provider-api/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/provider-api",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Solana",permalink:"/ko/docs/add-chain/Solana"},next:{title:"Chain Names",permalink:"/ko/docs/provider-api/chain-names"}},d={},m=[],f={toc:m};function v(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"provider-api"},"Provider Api"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\ubaa8\ub4e0 web3 \uc0ac\uc774\ud2b8 \uac1c\ubc1c\uc790\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://master.dihnc19206p60.amplifyapp.com/docs/getting-started"},"\uae30\ubcf8 \uc0ac\uc6a9\ubc95")," \uc139\uc158\uc744 \uc77d\uc744 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."))),(0,a.kt)("p",null,"WELLDONE Wallet\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \ubc29\ubb38\ud55c \uc6f9 \uc0ac\uc774\ud2b8\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"window.dapp"),"\uc774\ub77c\ub294 \uae00\ub85c\ubc8c API\ub97c \uc8fc\uc785\ud569\ub2c8\ub2e4 ",(0,a.kt)("inlineCode",{parentName:"p"},"window.dapp")," API\ub97c \uc0ac\uc6a9\ud558\uba74 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc758 \uacc4\uc815\uc744 \uc694\uccad\ud558\uace0 \uc0ac\uc6a9\uc790\uac00 \uc5f0\uacb0\ub41c \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uace0 \uc0ac\uc6a9\uc790\uac00 \uba54\uc2dc\uc9c0 \ubc0f \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub3c4\ub85d \uc81c\uc548\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("p",null,"\uc5b4\ub5bb\uac8c \uba40\ud2f0\uccb4\uc778\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0bc \uc218 \uc788\ub294\uc9c0, \uc6b0\ub9ac\uac00 \uc5b4\ub5bb\uac8c \uba40\ud2f0\uccb4\uc778 \ud658\uacbd\uc744 \uc9c0\uc6d0\ud558\uace0 \uc788\ub294 \uc9c0 \uad81\uae08\ud558\ub2e4\uba74 \uc544\ub798\uc758 \uac00\uc774\ub4dc\ub97c \ud1b5\ud574 \ub354 \uc0c1\uc138\ud55c \ub0b4\uc6a9\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);