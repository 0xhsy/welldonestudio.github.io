"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[352],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(7294),i=r(4334),o=r(3651),a=r(9960),c=r(3919),l=r(5999),s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function f(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:a},a))}function m(e){var t=e.item,r=(0,o.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,r=e.item,i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},9500:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=r(2991),c=r(3651),l=["components"],s={slug:"/getting-started",sidebar_position:2},u="Getting Started",d={unversionedId:"getting-started/index",id:"getting-started/index",title:"Getting Started",description:"WELLDONE\uc758 \uc11c\ube44\uc2a4\ub4e4\ub85c \uac1c\ubc1c\ud558\ub824\uba74 \uac1c\ubc1c \ucef4\ud4e8\ud130\uc5d0\uc11c \uc120\ud0dd\ud55c \ube0c\ub77c\uc6b0\uc800\uc5d0 WELLDONE Wallet \uc124\uce58\ud558\uc2ed\uc2dc\uc624. \uc5ec\uae30\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started",permalink:"/ko/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/getting-started",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ko/docs/intro"},next:{title:"Detecting the Provider",permalink:"/ko/docs/getting-started/detecting-provider"}},p={},f=[],m={toc:f};function g(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"WELLDONE\uc758 \uc11c\ube44\uc2a4\ub4e4\ub85c \uac1c\ubc1c\ud558\ub824\uba74 \uac1c\ubc1c \ucef4\ud4e8\ud130\uc5d0\uc11c \uc120\ud0dd\ud55c \ube0c\ub77c\uc6b0\uc800\uc5d0 WELLDONE Wallet \uc124\uce58\ud558\uc2ed\uc2dc\uc624. ",(0,o.kt)("a",{parentName:"p",href:"https://wds-code-docs.vercel.app/ko/docs/category/getting-started"},"\uc5ec\uae30"),"\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\uc774 \uac00\uc774\ub4dc\ub294 HTML, CSS \ubc0f JavaScript\uc5d0 \ub300\ud55c \uc911\uae09 \uc9c0\uc2dd\uc744 \uac00\uc815\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,"WELLDONE Wallet\uac00 \uc124\uce58\ub418\uace0 \uc2e4\ud589\ub418\uba74 \uc0c8 \ube0c\ub77c\uc6b0\uc800 \ud0ed window.dapp \uac1c\ubc1c\uc790 \ucf58\uc194\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac1c\uccb4\uac00 \uc788\uc74c\uc744 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\uac83\uc774 \ub2f9\uc2e0\uc758 \uc6f9\uc0ac\uc774\ud2b8\uac00 WELLDONE Wallet\uacfc \uc0c1\ud638\uc791\uc6a9\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc544\ub798 \uac00\uc774\ub4dc\ub97c \ud1b5\ud574 \ub354 \uc0c1\uc138\ud55c \ub0b4\uc6a9\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);