"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[469],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),l=["components"],a={sidebar_position:0},u=void 0,p={unversionedId:"Deploy-and-Run/Introduction",id:"Deploy-and-Run/Introduction",title:"Introduction",description:"\uac1c\ubc1c \ub300\uc0c1 \uccb4\uc778\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d \uac1c\ubc1c \ud658\uacbd\uc774 \ub124\ud2b8\uc6cc\ud06c\ub9c8\ub2e4 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \uac1c\ubc1c\uc790\ub294 \uac1c\ubc1c \ud658\uacbd\uc744 \uc7ac\uad6c\ucd95\ud574\uc57c \ud569\ub2c8\ub2e4.",source:"@site/docs/Deploy-and-Run/Introduction.md",sourceDirName:"Deploy-and-Run",slug:"/Deploy-and-Run/Introduction",permalink:"/docs/Deploy-and-Run/Introduction",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/docs/Deploy-and-Run/Introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Deploy and Run",permalink:"/docs/Deploy-and-Run"},next:{title:"Near",permalink:"/docs/Deploy-and-Run/Near"}},c={},s=[{value:"Features",id:"features",level:2},{value:"How to connect to Remix",id:"how-to-connect-to-remix",level:2},{value:"Related",id:"related",level:2},{value:"Issues",id:"issues",level:2}],d={toc:s};function m(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uac1c\ubc1c \ub300\uc0c1 \uccb4\uc778\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d \uac1c\ubc1c \ud658\uacbd\uc774 \ub124\ud2b8\uc6cc\ud06c\ub9c8\ub2e4 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \uac1c\ubc1c\uc790\ub294 \uac1c\ubc1c \ud658\uacbd\uc744 \uc7ac\uad6c\ucd95\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \uc6f9 \uae30\ubc18 IDE Remix\ub97c \uc0ac\uc6a9\ud558\uc5ec EVM \uae30\ubc18 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc744 \uc27d\uac8c \ub9cc\ub4e4\uace0 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"WELLDONE Studio\ub294 EVM\uc774 \uc544\ub2cc \uccb4\uc778\uc744 \ud3ec\ud568\ud558\uc5ec WELLDONE \uc9c0\uac11\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \uccb4\uc778\uc774 Remix\uc5d0\uc11c \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,i.kt)("inlineCode",{parentName:"p"},"WELLDONE Code"),"\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WELLDONE Code"),"\ub294 \uac1c\ubc1c\uc790\uac00 \ubcc4\ub3c4\uc758 \uac1c\ubc1c \ud658\uacbd\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\uace0\ub3c4 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud558\ubbc0\ub85c \uac01 \uccb4\uc778 \uc0dd\ud0dc\uacc4\uc5d0\uc11c \uac1c\ubc1c\uc790\ub97c \uc628\ubcf4\ub529\ud558\ub294 \uac83\uc5d0 \uc788\uc5b4\uc11c \ud0c1\uc6d4\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uba40\ud2f0\uccb4\uc778\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0 \ud568\uc218\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 \uc26c\uc6b4 \ubc29\uc2dd\uc785\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"how-to-connect-to-remix"},"How to connect to Remix"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/%EB%A1%9C"},"https://remix.ethereum.org/\ub85c")," \ubc29\ubb38\ud558\uc5ec \uc544\ub798\uc758 \uac00\uc774\ub4dc\ub97c \ub530\ub974\uc2ed\uc2dc\uc624."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc67c\ucabd \ubc14\uc758 'Plugin Manager'\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"'Connect to a Local Plugin'\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin Manager",src:n(3239).Z,title:"Plugin Manager",width:"1656",height:"1588"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"plugin \uc774\ub984\uacfc display \uc774\ub984\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.."),(0,i.kt)("li",{parentName:"ul"},"URL \ud544\ub4dc\uc5d0 '",(0,i.kt)("a",{parentName:"li",href:"https://remix-plugin.welldonestudio.io/'%EC%9D%84"},"https://remix-plugin.welldonestudio.io/'\uc744")," \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud655\uc778\uc744 \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Local Plugin",src:n(7782).Z,title:"Local Plugin",width:"998",height:"1398"})),(0,i.kt)("p",null,"\uc774\uc81c \uc67c\ucabd \ub9c9\ub300\uc5d0 \uc0c8 \ud50c\ub7ec\uadf8\uc778\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc0c8 \ud50c\ub7ec\uadf8\uc778\uc744 \ud074\ub9ad\ud558\uace0 \uc6d0\ud558\ub294 \uccb4\uc778\uc744 \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624."),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://remix-ide.readthedocs.io/en/latest/"},"Remix IDE Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/remix-ide"},"Github repository"))),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"\ubb38\uc81c\uac00 \uc788\ub294 \uacbd\uc6b0 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/welldonestudio/welldonestudio.github.io"},"Github repository"),"\uc5d0 \uc790\uc720\ub86d\uac8c issue\ub97c \uc0dd\uc131\ud558\uc138\uc694."))}m.isMDXComponent=!0},7782:function(e,t,n){t.Z=n.p+"assets/images/local-plugin-47259fdf7782b7a350504755e262ba66.png"},3239:function(e,t,n){t.Z=n.p+"assets/images/plugin-manager-645b4b9159e8a919b3c990383410ae26.png"}}]);