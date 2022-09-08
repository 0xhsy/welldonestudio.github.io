"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[8887],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(7294),i=r(4334),o=r(3651),a=r(9960),l=r(3919),c=r(5999),d="cardContainer_fWXF",u="cardTitle_rnsV",s="cardDescription_PWke";function p(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",d)},r)}function m(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",s),title:a},a))}function f(e){var t=e.item,r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,r=e.item,i=(0,l.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},1414:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return m}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=r(2991),l=r(3651),c=["components"],d={slug:"/getting-started",sidebar_position:1,keywords:["\uc6f0\ub358 \uc6d4\ub81b \uc0ac\uc6a9\ubc95","\uc6f0\ub358 \uc6d4\ub81b \uac10\uc9c0","\uc6f0\ub358 \uc6d4\ub81b \ud504\ub85c\ubc14\uc774\ub354","\uc6f0\ub358 \uc6d4\ub81b \uc5f0\uacb0\ud558\uae30"],description:"WELLDON Wallet \uc2dc\uc791\ud558\uae30"},u="Getting Started",s={unversionedId:"wallet/developer-guide/getting-started/index",id:"wallet/developer-guide/getting-started/index",title:"Getting Started",description:"WELLDON Wallet \uc2dc\uc791\ud558\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/wallet/developer-guide/getting-started/index.md",sourceDirName:"wallet/developer-guide/getting-started",slug:"/getting-started",permalink:"/ko/docs/getting-started",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/getting-started/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/getting-started",sidebar_position:1,keywords:["\uc6f0\ub358 \uc6d4\ub81b \uc0ac\uc6a9\ubc95","\uc6f0\ub358 \uc6d4\ub81b \uac10\uc9c0","\uc6f0\ub358 \uc6d4\ub81b \ud504\ub85c\ubc14\uc774\ub354","\uc6f0\ub358 \uc6d4\ub81b \uc5f0\uacb0\ud558\uae30"],description:"WELLDON Wallet \uc2dc\uc791\ud558\uae30"},sidebar:"tutorialSidebar",previous:{title:"Developer Guide",permalink:"/ko/docs/wallet/developer-guide"},next:{title:"Detecting the Provider",permalink:"/ko/docs/wallet/developer-guide/getting-started/detecting-provider"}},p={},m=[],f={toc:m};function g(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800\uc5d0 WELLDONE Wallet\uc744 \uc124\uce58\ud569\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=ko"},"\uc5ec\uae30"),"\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\uc774 \uac00\uc774\ub4dc\ub294 HTML, CSS \ubc0f JavaScript\uc5d0 \ub300\ud55c \uc911\uae09 \uc9c0\uc2dd\uc744 \uac16\ucd94\uace0 \uacc4\uc2e0 \ubd84\uc774 \uc77d\uc73c\uc2dc\uae38 \ucd94\ucc9c\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,"WELLDONE Wallet\uc774 \uc124\uce58\ub418\uba74, \uc0c8 \ube0c\ub77c\uc6b0\uc800 \ud0ed\uc5d0\uc11c \uac1c\ubc1c\uc790 \ucf58\uc194\uc744 \uc5f4\uc5b4 ",(0,o.kt)("inlineCode",{parentName:"p"},"window.dapp")," \uac1d\uccb4\uac00 \uc788\uc74c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4. WELLDONE Wallet\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \ubc29\ubb38\ud55c \uc6f9 \uc0ac\uc774\ud2b8\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"window.dapp"),"\uc774\ub77c\ub294 \uc804\uc5ed \uac1d\uccb4\ub97c \uc8fc\uc785\ud558\uace0, \ud574\ub2f9 \uac1d\uccb4\ub97c \uc774\uc6a9\ud574 \uc6f9 \uc0ac\uc774\ud2b8\uc640 WELLDONE Wallet\uc774 \ud1b5\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc758 \uc139\uc158\uc5d0\uc11c \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc9c0\uac11\uc774 \uc124\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uace0 \ube0c\ub77c\uc6b0\uc800\uc640 \uc9c0\uac11\uc744 \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95\uc744 \uc0c1\uc138\ud558\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(a.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);