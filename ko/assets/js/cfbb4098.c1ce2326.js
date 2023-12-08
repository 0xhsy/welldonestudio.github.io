"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[6825],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),o=n(34334),c=n(54951),a=n(39960),i=n(13919),u=n(95999),l="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function m(e){var t=e.href,n=e.icon,c=e.title,a=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:c},n," ",c),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:a},a))}function f(e){var t,n=e.item,o=(0,c.Wl)(n);return o?r.createElement(m,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,o=e.item,a=(0,i.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,c.xz)(null!=(t=o.docId)?t:void 0);return r.createElement(m,{href:o.href,icon:a,title:o.label,description:null!=(n=o.description)?n:null==u?void 0:u.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,c.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(v,e);var a=(0,c.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e}))})))}},65551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(83117),o=n(80102),c=(n(67294),n(3905)),a=n(52991),i=n(54951),u=["components"],l={title:"APTOS Account Model",description:"Aptos Account Model \ud559\uc2b5\ud558\uae30"},s="APTOS Account Model",d={unversionedId:"tutorials/aptos-account/index",id:"tutorials/aptos-account/index",title:"APTOS Account Model",description:"Aptos Account Model \ud559\uc2b5\ud558\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/aptos-account/index.md",sourceDirName:"tutorials/aptos-account",slug:"/tutorials/aptos-account/",permalink:"/ko/tutorials/aptos-account/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/aptos-account/index.md",tags:[],version:"current",frontMatter:{title:"APTOS Account Model",description:"Aptos Account Model \ud559\uc2b5\ud558\uae30"},sidebar:"tutorialSidebar",previous:{title:"Study U&I",permalink:"/ko/tutorials/sui-game/game"},next:{title:"Standard Account",permalink:"/ko/tutorials/aptos-account/standard-account"}},p={},m=[],f={toc:m};function y(e){var t=e.components,n=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"aptos-account-model"},"APTOS Account Model"),(0,c.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);