"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[3591],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,c(c({ref:t},l),{},{components:n})):a.createElement(m,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),c=["components"],i={sidebar_position:3,description:"Create an Account"},s="How to Create an Account",u={unversionedId:"wallet/manual/how-to-create-an-account",id:"wallet/manual/how-to-create-an-account",title:"How to Create an Account",description:"Create an Account",source:"@site/docs/wallet/manual/how-to-create-an-account.md",sourceDirName:"wallet/manual",slug:"/wallet/manual/how-to-create-an-account",permalink:"/wallet/manual/how-to-create-an-account",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/manual/how-to-create-an-account.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Create an Account"},sidebar:"tutorialSidebar",previous:{title:"How to Create a Wallet",permalink:"/wallet/manual/how-to-create-a-wallet"},next:{title:"How to send tokens",permalink:"/wallet/manual/how-to-send-tokens"}},l={},p=[{value:"Create an account with Keystore",id:"create-an-account-with-keystore",level:2},{value:"Create an account with Private Key",id:"create-an-account-with-private-key",level:2}],d={toc:p};function h(e){var t=e.components,i=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-create-an-account"},"How to Create an Account"),(0,r.kt)("p",null,"There are two ways to add an account: 1) ",(0,r.kt)("strong",{parentName:"p"},"add an account derived from the mnemonic registered in your wallet")," and 2) ",(0,r.kt)("strong",{parentName:"p"},"add an account by entering a Private Key"),"."),(0,r.kt)("p",null,"The first way is to recover your account from the mnemonic you have registered with your wallet. The second option is to use other mnemonic-derived accounts if you are already using them and want to use them on the WELLDONE Wallet."),(0,r.kt)("h2",{id:"create-an-account-with-keystore"},"Create an account with Keystore"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Select a chain that you want to add"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Click ",(0,r.kt)("strong",{parentName:"p"},"Add Account with Keystore")," button.(You can typically choose it if you want to use an account derived from a registered mnemonic or if you don't have an account you've previously used.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_1_1",src:n(3203).Z,title:"3_1_1",width:"388",height:"598"}),"\n",(0,r.kt)("img",{alt:"3_1_2",src:n(4929).Z,title:"3_1_2",width:"389",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),": Create an account name that is an alias to use in your wallet. Select HD Path by clicking the drop-down arrow."),(0,r.kt)("p",null,"The first option is the chain's primary standard. Choose the first option if you don't want to precisely customize it. Once HD Path has been selected, the address will be shown accordingly. Confirm the address and click the Add Account button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_1_3",src:n(3267).Z,title:"3_1_3",width:"389",height:"600"}),"\n",(0,r.kt)("img",{alt:"3_1_4",src:n(7713).Z,title:"3_1_4",width:"389",height:"600"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"HD Path")," is a concept created to create multiple accounts from a single mnemonic. Different HD Paths produce different account addresses even with the same mnemonic. Different account addresses are created from the same mnemonic because various chains use different HD Paths as a standard."),(0,r.kt)("p",{parentName:"admonition"},"But more than one HD Path could be used in a single chain. For example, in the case of Celo, there is a default HD Path of Celo, but there are users who use Celo with Metamask that uses Ethereum HD Path. As a result, WELLDONE Wallet allows users to choose their own HD Path within the chain to support these different cases. We also allow you to adjust the Index, the last item in HD Path.")),(0,r.kt)("h2",{id:"create-an-account-with-private-key"},"Create an account with Private Key"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Select a chain that you want to add"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Click ",(0,r.kt)("strong",{parentName:"p"},"Import Private Key")," button (You can typically choose it if you use an account that you have already used.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_2_1",src:n(4703).Z,title:"3_2_1",width:"388",height:"598"}),"\n",(0,r.kt)("img",{alt:"3_2_2",src:n(6881).Z,title:"3_2_2",width:"389",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),": Create an account name that is an alias to use in your wallet. Enter the Private Key, check the account address created, and click the Add Account button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_2_3",src:n(4260).Z,title:"3_2_3",width:"389",height:"600"})))}h.isMDXComponent=!0},3203:function(e,t,n){t.Z=n.p+"assets/images/3_1_1-d9481e2a64b9e6225f814fe3bca245f1.png"},4929:function(e,t,n){t.Z=n.p+"assets/images/3_1_2-a592bc6e282531682fd2184a6ea78dbe.png"},3267:function(e,t,n){t.Z=n.p+"assets/images/3_1_3-f33eac120273d90dfe67989b77023037.png"},7713:function(e,t,n){t.Z=n.p+"assets/images/3_1_4-a3ec5b3b89316bd55e663d5403a5f75f.png"},4703:function(e,t,n){t.Z=n.p+"assets/images/3_2_1-d9481e2a64b9e6225f814fe3bca245f1.png"},6881:function(e,t,n){t.Z=n.p+"assets/images/3_2_2-5d3807b7733b416b377511de10475fe4.png"},4260:function(e,t,n){t.Z=n.p+"assets/images/3_2_3-3c0f7e225ae216d0908e33de33fda863.png"}}]);