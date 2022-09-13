"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[1852],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return v}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(t),v=a,m=s["".concat(c,".").concat(v)]||s[v]||u[v]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},600:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],p={sidebar_position:4,keywords:["\uc6f0\ub358 \uc6d4\ub81b \uc774\ubca4\ud2b8","dapp:accountsChanged","dapp:chainChanged"],description:"dapp provider\uac00 \uc81c\uacf5\ud558\ub294 \uc774\ubca4\ud2b8"},c="Events",l={unversionedId:"wallet/developer-guide/provider-api/events",id:"wallet/developer-guide/provider-api/events",title:"Events",description:"dapp provider\uac00 \uc81c\uacf5\ud558\ub294 \uc774\ubca4\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/wallet/developer-guide/provider-api/events.md",sourceDirName:"wallet/developer-guide/provider-api",slug:"/wallet/developer-guide/provider-api/events",permalink:"/ko/wallet/developer-guide/provider-api/events",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/provider-api/events.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["\uc6f0\ub358 \uc6d4\ub81b \uc774\ubca4\ud2b8","dapp:accountsChanged","dapp:chainChanged"],description:"dapp provider\uac00 \uc81c\uacf5\ud558\ub294 \uc774\ubca4\ud2b8"},sidebar:"tutorialSidebar",previous:{title:"Methods",permalink:"/ko/wallet/developer-guide/provider-api/method"},next:{title:"About Universal Provider",permalink:"/ko/wallet/developer-guide/provider-api/how-we-wrap-for-multichain"}},d={},u=[{value:"1. accountsChanged",id:"accountsChanged",level:2},{value:"2. chainChanged",id:"chainChanged",level:2}],s={toc:u};function v(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"dapp provider\ub294 Node.js EventEmitter API\ub97c \ud1b5\ud574 \ucd1d 2\uac1c\uc758 \uc774\ubca4\ud2b8\ub97c emitted \ud569\ub2c8\ub2e4."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#accountsChanged"},"accountsChanged")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#chainChanged"},"chainChanged")))),(0,o.kt)("h2",{id:"accountsChanged"},"1. accountsChanged"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dapp:accountsChanged")," \uc774\ubca4\ud2b8\ub294 \uccb4\uc778 \ub0b4\ubd80\uc758 \uacc4\uc815 \ubcc0\uacbd\uc774 \uac10\uc9c0\ub418\uc5c8\uc744 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ucf5c\ubc31 \ud568\uc218\uc758 \uc778\uc790\ub85c \ubcc0\uacbd\ub41c \uacc4\uc815 \uc8fc\uc18c\uc640 \ud37c\ube14\ub9ad \ud0a4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';\n\ninterface ACCOUNT_INFO {\n  address: string;\n  pubKey: string;\n}\n\nwindow.dapp.on('dapp:accountsChanged', (currentAccount: Record<CHAIN_NAME, ACCOUNT_INFO>) => {\n  console.log(currentAccount);\n  /*\n  {\n    ethereum: {\n      address: \"0x....\",\n      pubKey: \"0x....\",\n    }\n  }\n  */\n});\n")),(0,o.kt)("h2",{id:"chainChanged"},"2. chainChanged"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dapp:chainChanged")," \uc774\ubca4\ud2b8\ub294 \uccb4\uc778 \ub0b4\ubd80\uc758 \ub124\ud2b8\uc6cc\ud06c \ubcc0\uacbd\uc774 \uac10\uc9c0\ub418\uc5c8\uc744 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ucf5c\ubc31 \ud568\uc218\uc758 \uc778\uc790\ub85c \ubcc0\uacbd\ub41c \ub124\ud2b8\uc6cc\ud06c\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"window.dapp.on('dapp:chainChanged', (currentNetwork: string) => {\n  console.log(currentNetwork); //celo:0xf370\n});\n")))}v.isMDXComponent=!0}}]);