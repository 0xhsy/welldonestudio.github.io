"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[813],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(f,i(i({ref:e},u),{},{components:n})):a.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1578:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:3,description:"\uc6f0\ub358 \uc6d4\ub81b\uc5d0 \uacc4\uc815 \uc0dd\uc131\ud558\uae30"},l="How to Create an Account",p={unversionedId:"wallet/manual/how-to-create-an-account",id:"wallet/manual/how-to-create-an-account",title:"How to Create an Account",description:"\uc6f0\ub358 \uc6d4\ub81b\uc5d0 \uacc4\uc815 \uc0dd\uc131\ud558\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/wallet/manual/how-to-create-an-account.md",sourceDirName:"wallet/manual",slug:"/wallet/manual/how-to-create-an-account",permalink:"/ko/wallet/manual/how-to-create-an-account",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/manual/how-to-create-an-account.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"\uc6f0\ub358 \uc6d4\ub81b\uc5d0 \uacc4\uc815 \uc0dd\uc131\ud558\uae30"},sidebar:"tutorialSidebar",previous:{title:"How to Create a Wallet",permalink:"/ko/wallet/manual/how-to-create-a-wallet"},next:{title:"How to send tokens",permalink:"/ko/wallet/manual/how-to-send-tokens"}},u={},s=[{value:"Create an account with Keystore",id:"create-an-account-with-keystore",level:2},{value:"Create an account with Private Key",id:"create-an-account-with-private-key",level:2},{value:"Create an Account in NEAR",id:"create-an-account-in-near",level:2}],d={toc:s};function m(t){var e=t.components,c=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-an-account"},"How to Create an Account"),(0,o.kt)("p",null,"\uacc4\uc815\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\uc740 \ub450\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. 1) ",(0,o.kt)("strong",{parentName:"p"},"\uc9c0\uac11\uc5d0 \ub4f1\ub85d\ud55c \ub2c8\ubaa8\ub2c9\uc73c\ub85c \ud30c\uc0dd\ub41c \uacc4\uc815\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95"),"\uacfc 2) ",(0,o.kt)("strong",{parentName:"p"},"Private Key\ub97c \uc785\ub825\ud574\uc11c \uacc4\uc815\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uccab\ubc88\uc9f8 \ubc29\ubc95\uc774 \uc9c0\uac11\uc5d0 \ub4f1\ub85d\ud55c \ub2c8\ubaa8\ub2c9\uc73c\ub85c\ubd80\ud130 \uacc4\uc815\uc744 \ubcf5\uad6c\ud558\ub294 \uae30\ubcf8\uc801\uc778 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ub450\ubc88\uc9f8 \ubc29\ubc95\uc758 \uacbd\uc6b0 \uc9c0\uac11\uc5d0 \ub4f1\ub85d\ud55c \ub2c8\ubaa8\ub2c9\uacfc \ub2e4\ub978 \ub2c8\ubaa8\ub2c9\uc5d0\uc11c \ud30c\uc0dd\ub41c \uacc4\uc815\uc744 \uc774\ubbf8 \uc0ac\uc6a9 \uc911\uc774\uc600\uc744\ub54c \uc774\ub7ec\ud55c \uacc4\uc815\ub4e4\uc744 WELLDONE Wallet\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"create-an-account-with-keystore"},"Create an account with Keystore"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),": \ucd94\uac00\ud558\uace0 \uc2f6\uc740 \uccb4\uc778\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": Add Account with Keystore(\ub4f1\ub85d\ud55c \ub2c8\ubaa8\ub2c9\uc73c\ub85c \ud30c\uc0dd\ub41c \uacc4\uc815\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0. \ub530\ub85c \uc0ac\uc6a9\ud558\ub358 \uacc4\uc815\uc774 \uc5c6\ub294 \uacbd\uc6b0 \uc77c\ubc18\uc801\uc73c\ub85c \uc120\ud0dd\ud558\uba74 \ub429\ub2c8\ub2e4.) \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_1_1",src:n(1376).Z,title:"3_1_1",width:"388",height:"598"}),"\n",(0,o.kt)("img",{alt:"3_1_2",src:n(1043).Z,title:"3_1_2",width:"389",height:"600"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),": \uc9c0\uac11\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ubcc4\uce6d\uc778 \uacc4\uc815 \uc774\ub984\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ub4dc\ub86d \ub2e4\uc6b4 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uba74 HD Path\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uccab\ubc88\uc9f8 \ud56d\ubaa9\uc774 \ud574\ub2f9 \uccb4\uc778\uc5d0\uc11c \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 \ud45c\uc900\uc785\ub2c8\ub2e4. \ud2b9\ubcc4\ud788 \ucee4\uc2a4\ud140\ud558\uace0 \uc2f6\uc9c0 \uc54a\ub2e4\uba74 \uac00\uc7a5 \uccab\ubc88\uc9f8 \ud56d\ubaa9\uc744 \uc120\ud0dd\ud558\uba74 \ub429\ub2c8\ub2e4. HD Path\ub97c \uc120\ud0dd\ud558\uace0 \ub098\uba74 \uc774\uc5d0 \ub530\ub77c \uc8fc\uc18c\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc8fc\uc18c\ub97c \ud655\uc778\ud558\uace0 Add Account \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_1_3",src:n(7161).Z,title:"3_1_3",width:"389",height:"600"}),"\n",(0,o.kt)("img",{alt:"3_1_4",src:n(2979).Z,title:"3_1_4",width:"389",height:"600"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"HD Path")," \ub294 \ud558\ub098\uc758 \ub2c8\ubaa8\ub2c9\uc73c\ub85c \ubd80\ud130 \uc5ec\ub7ec \uac1c\uc758 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uc0dd\uaca8\ub09c \uac1c\ub150\uc785\ub2c8\ub2e4. \uac19\uc740 \ub2c8\ubaa8\ub2c9\uc774\ub77c\ub3c4 HD Path\uac00 \ub2e4\ub974\uba74 \ub2e4\ub978 \uacc4\uc815 \uc8fc\uc18c\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\ucc98\ub7fc \uccb4\uc778\ub9c8\ub2e4 \uac01\uac01 \ub2e4\ub978 HD Path\ub97c \ud45c\uc900\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uac19\uc740 \ub2c8\ubaa8\ub2c9\uc73c\ub85c \ubd80\ud130 \ub2e4\ub978 \uacc4\uc815 \uc8fc\uc18c\ub4e4\uc774 \uc0dd\uc131\ub418\ub294 \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud55c \uccb4\uc778\ub0b4\uc5d0\uc11c \uc5ec\ub7ec \uac00\uc9c0 HD Path\ub97c \ud63c\uc7ac\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 celo\uc758 \uacbd\uc6b0, celo\uc758 \uae30\ubcf8 HD Path\uac00 \uc874\uc7ac\ud558\uc9c0\ub9cc, ethereum HD Path\ub97c \uc0ac\uc6a9\ud558\ub294 Metamask\uc640 \uac19\uc740 \uc9c0\uac11\uc73c\ub85c celo\ub97c \uc774\uc6a9\ud558\ub294 \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c WELLDONE Wallet\uc740 \uc774\ub7ec\ud55c \ub2e4\uc591\ud55c \uacbd\uc6b0\ub4e4\uc744 \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \uccb4\uc778\ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 HD Path\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ub610\ud55c HD Path\uc758 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9 \ud56d\ubaa9\uc778 Index\ub3c4 \uc870\uc808\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4. HD Path\ub97c \uc870\uc815\ud574\uc11c \ucd94\uac00\ud558\uace0\uc790 \ud588\ub358 \uacc4\uc815\uc758 \uc8fc\uc18c\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"create-an-account-with-private-key"},"Create an account with Private Key"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),": \ucd94\uac00\ud558\uace0 \uc2f6\uc740 \uccb4\uc778\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": ",(0,o.kt)("strong",{parentName:"p"},"Import Private Key"),"(\uc774\ubbf8 \uc0ac\uc6a9\ud558\ub358 \uacc4\uc815\uc744 Private Key\ub85c \ub4f1\ub85d\ud574\uc11c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0) \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_2_1",src:n(9601).Z,title:"3_2_1",width:"388",height:"598"}),"\n",(0,o.kt)("img",{alt:"3_2_2",src:n(3804).Z,title:"3_2_2",width:"389",height:"600"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),": \uc9c0\uac11\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ubcc4\uce6d\uc778 \uacc4\uc815 \uc774\ub984\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. Private Key\ub97c \uc785\ub825\ud55c \ub4a4 \uc0dd\uc131\ub41c \uacc4\uc815 \uc8fc\uc18c\ub97c \ud655\uc778\ud558\uace0 Add Account \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_2_3",src:n(1339).Z,title:"3_2_3",width:"389",height:"600"})),(0,o.kt)("h2",{id:"create-an-account-in-near"},"Create an Account in NEAR"),(0,o.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uccb4\uc778\uc740 \uc704\uc758 \ubc29\ubc95\uc744 \ud1b5\ud574 \uacc4\uc815\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc9c0\ub9cc, NEAR\uc758 \uacbd\uc6b0\uc5d0\ub294 Keystore\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacc4\uc815\uc744 \uc0dd\uc131\ud560 \ub54c \uba87 \uac00\uc9c0 \uacfc\uc815\uc774 \ucd94\uac00\ub85c \ud544\uc694\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),": Address\uc5d0 \uc5f0\uacb0\ub41c \uae30\uc874 \uacc4\uc815\uc774 \uc5c6\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"Create New")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec AccountID\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \uc0dd\uc131\ud560 \uacbd\uc6b0\uc5d0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".testnet"),"\uc744, \uba54\uc778\ub137 \uacc4\uc815\uc744 \uc0dd\uc131\ud560 \uacbd\uc6b0\uc5d0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".near"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_3_1",src:n(6811).Z,title:"3_3_1",width:"395",height:"603"}),"\n",(0,o.kt)("img",{alt:"3_3_2",src:n(9351).Z,title:"3_3_2",width:"394",height:"603"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"NEAR\uc758 \uacbd\uc6b0 human-readable \ud55c ID\ub97c \uac16\uae30 \ub54c\ubb38\uc5d0 \uc911\ubcf5\ub418\uc9c0 \uc54a\ub294 Account ID \uac12\uc744 \uc785\ub825\ud574\uc918\uc57c \ud558\uace0, \ud574\ub2f9 \uacc4\uc815\uc744 \ud65c\uc131\ud654\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc77c\uc815\ub7c9\uc758 NEAR \ud1a0\ud070\uc744 \ud574\ub2f9 \uacc4\uc815\uc73c\ub85c \ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4. \ub2e4\uc74c ",(0,o.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/near.dsrv"},"\ub9c1\ud06c"),"\uc5d0\uc11c NEAR \ud14c\uc2a4\ud2b8\ub137 faucet\uc744 \uc694\uccad\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": \uacc4\uc815\uc5d0 \ud1a0\ud070\uc774 \ub4e4\uc5b4\uc628 \uac83\uc774 \ud655\uc778\ub418\uba74 \uc544\ub798\uc640 \uac19\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"Create New")," \ubc84\ud2bc\uc774 \ud65c\uc131\ud654 \ub429\ub2c8\ub2e4. \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 NEAR \uacc4\uc815\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_3_3",src:n(1326).Z,title:"3_3_3",width:"396",height:"602"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\ucc98\uc74c \uacc4\uc815\uc744 \ud65c\uc131\ud654\ud558\uae30 \uc704\ud574 \ubcf4\ub0b4\ub294 \ud1a0\ud070 \uc774\uc678\uc5d0 \ud574\ub2f9 \uacc4\uc815\uc744 \uc0ac\uc6a9\ud574\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 \ud14c\uc2a4\ud2b8\ub137 \ud1a0\ud070\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ub2e4\uc74c ",(0,o.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/near.dsrv"},"\ub9c1\ud06c"),"\uc5d0\uc11c NEAR \ud14c\uc2a4\ud2b8\ub137 faucet\uc744 \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}m.isMDXComponent=!0},1376:function(t,e,n){e.Z=n.p+"assets/images/3_1_1-d9481e2a64b9e6225f814fe3bca245f1.png"},1043:function(t,e,n){e.Z=n.p+"assets/images/3_1_2-a592bc6e282531682fd2184a6ea78dbe.png"},7161:function(t,e,n){e.Z=n.p+"assets/images/3_1_3-f33eac120273d90dfe67989b77023037.png"},2979:function(t,e,n){e.Z=n.p+"assets/images/3_1_4-a3ec5b3b89316bd55e663d5403a5f75f.png"},9601:function(t,e,n){e.Z=n.p+"assets/images/3_2_1-d9481e2a64b9e6225f814fe3bca245f1.png"},3804:function(t,e,n){e.Z=n.p+"assets/images/3_2_2-5d3807b7733b416b377511de10475fe4.png"},1339:function(t,e,n){e.Z=n.p+"assets/images/3_2_3-3c0f7e225ae216d0908e33de33fda863.png"},6811:function(t,e,n){e.Z=n.p+"assets/images/3_3_1-18de4ea7a40d9664f394557122d6c313.png"},9351:function(t,e,n){e.Z=n.p+"assets/images/3_3_2-113793e089a381fee2fb712df0946ec1.png"},1326:function(t,e,n){e.Z=n.p+"assets/images/3_3_3-9b44f672e2939d2f13be776932bc43c2.png"}}]);