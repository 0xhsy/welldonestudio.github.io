"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[6836],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),o=r(34334),i=r(93651),a=r(39960),c=r(13919),l=r(95999),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function p(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},r)}function d(e){var t=e.href,r=e.icon,i=e.title,a=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",f),title:a},a))}function m(e){var t=e.item,r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,o=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:o,title:r.label,description:null==a?void 0:a.description})}function b(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,o.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e}))})))}},46865:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return d}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=r(52991),c=r(93651),l=["components"],u={slug:"/tutorials",sidebar_position:5,title:"Tutorial",description:"Tutorial for Web3 Voyagers"},s=void 0,f={unversionedId:"tutorials/index",id:"tutorials/index",title:"Tutorial",description:"Tutorial for Web3 Voyagers",source:"@site/docs/tutorials/index.md",sourceDirName:"tutorials",slug:"/tutorials",permalink:"/tutorials",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/tutorials",sidebar_position:5,title:"Tutorial",description:"Tutorial for Web3 Voyagers"},sidebar:"tutorialSidebar",previous:{title:"Klaytn",permalink:"/code/deploy-and-run/klaytn"},next:{title:"Near Counter Dapp",permalink:"/tutorials/near/"}},p={},d=[],m={toc:d};function y(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"WELLDONE Studio's tutorial for Web3 Voyagers."),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);