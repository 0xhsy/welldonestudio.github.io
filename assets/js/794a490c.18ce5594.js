"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[1168],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(n),c=r,h=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39504:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:4,keywords:["WELLDONE Wallet Chain Names","WELLDONE Wallet HD Path"],description:"The chain name and HD Path that we support"},p="Chain Names",u={unversionedId:"wallet/developer-guide/provider-api/chain-names",id:"wallet/developer-guide/provider-api/chain-names",title:"Chain Names",description:"The chain name and HD Path that we support",source:"@site/docs/wallet/developer-guide/provider-api/chain-names.md",sourceDirName:"wallet/developer-guide/provider-api",slug:"/wallet/developer-guide/provider-api/chain-names",permalink:"/wallet/developer-guide/provider-api/chain-names",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/provider-api/chain-names.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["WELLDONE Wallet Chain Names","WELLDONE Wallet HD Path"],description:"The chain name and HD Path that we support"},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/wallet/developer-guide/provider-api/events"},next:{title:"Sending Transactions",permalink:"/sending-transaction"}},d={},m=[],s={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"chain-names"},"Chain Names"),(0,l.kt)("p",null,"The chain name that we support is as follows. These names are included in our provider method's ",(0,l.kt)("inlineCode",{parentName:"p"},"CHAIN_NAME")," argument to allow access to the multi-networks using the same interface."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Chain Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Chain"),(0,l.kt)("th",{parentName:"tr",align:null},"HD Path"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"celestia"),(0,l.kt)("td",{parentName:"tr",align:null},"Celestia"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/118'/0'/0/ (celestia's default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"celo"),(0,l.kt)("td",{parentName:"tr",align:null},"Celo"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/52752'/0'/0/ (celo's default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/60'/0'/0/ (ethereum compatible hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cosmos"),(0,l.kt)("td",{parentName:"tr",align:null},"Cosmos"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/118'/0'/0/ (cosmos's default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ethereum"),(0,l.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/60'/0'/0/ (ethereum compatible hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"juno"),(0,l.kt)("td",{parentName:"tr",align:null},"Juno"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/118'/0'/0/ (juno's default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"klaytn"),(0,l.kt)("td",{parentName:"tr",align:null},"Klaytn"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/8217'/0'/0/ (klaytn's default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/60'/0'/0/ (ethereum's default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"near"),(0,l.kt)("td",{parentName:"tr",align:null},"NEAR"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/397'/0'/0/ (near's default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"neon"),(0,l.kt)("td",{parentName:"tr",align:null},"Neon"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/60'/0'/0/ (ethereum compatible hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"solana"),(0,l.kt)("td",{parentName:"tr",align:null},"Solana"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/501'/0'/0/ (solana's default hd path)")))))}c.isMDXComponent=!0}}]);