"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[486],{3905:function(n,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var t=a(7294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var c=t.createContext({}),p=function(n){var e=t.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},s=function(n){var e=p(n.components);return t.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?t.createElement(f,l(l({ref:e},s),{},{components:a})):t.createElement(f,l({ref:e},s))}));function m(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6484:function(n,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var t=a(3117),r=a(102),o=(a(7294),a(3905)),l=["components"],i={},c=void 0,p={unversionedId:"add-chain/Solana",id:"add-chain/Solana",title:"Solana",description:"Solana params",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/add-chain/Solana.md",sourceDirName:"add-chain",slug:"/add-chain/Solana",permalink:"/ko/docs/add-chain/Solana",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/add-chain/Solana.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ethereum",permalink:"/ko/docs/add-chain/Ethereum"},next:{title:"Provider Api",permalink:"/ko/docs/provider-api"}},s={},u=[{value:"Solana params",id:"solana-params",level:2},{value:"Example",id:"example",level:2}],d={toc:u};function m(n){var e=n.components,a=(0,r.Z)(n,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"solana-params"},"Solana params"),(0,o.kt)("p",null,"Solana \uae30\ubc18\uc758 \ub124\ud2b8\uc6cc\ud06c, \ud639\uc740 \uadf8 \uc678\uc758 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud558\uace0\uc790 \ud560 \ub54c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),"\uc5d0 \ub2e4\uc74c\uc758 \uac1d\uccb4\ub97c \uc778\uc790\ub85c \ub118\uaca8\uc90d\ub2c8\ub2e4. \uc774\ub294 WELLDONE Wallet\uc5d0\uc11c \uc81c\uc548\ud558\ub294 Universal Chain \ud45c\uc900\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Solana"',title:'"Solana"'},'{\n  "chainId": "",\n  "chainName": "",\n  "rpcUrls": [\n    {\n      "providerName": "",\n      "url": ""\n    }\n  ],\n  "nativeCurrencies": [\n    {\n      "name": "",\n      "symbol": "",\n      "decimals": 9\n    }\n  ],\n  "feeCurrencies": [\n    {\n      "name": "",\n      "symbol": "",\n      "decimals": 9\n    }\n  ],\n  // (Optional)\n  "blockExplorerUrls": [\n    {\n      "name": "",\n      "url": ""\n    }\n  ],\n  // (Optional)\n  "iconUrls": [],\n  "slip44": "501"\n}\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Solana Devnet \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud574\ubcf4\ub294 \uc608\uc81c\ub97c \uac19\uc774 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Add Chain")," \ubc84\ud2bc\uc744 \ub20c\ub7ec Welldone Wallet\uc5d0 Solana Devnet \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud574\ubcf4\uc138\uc694. ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp:addChain")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp:accounts")," \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \uba3c\uc800 \uc9c0\uac11\uc5d0 \uc5f0\uacb0\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function addChain() {\n  const chainData = {\n    chainId: "devnet",\n    chainName: "Solana Devnet",\n    rpcUrls: [\n      {\n        providerName: "All That Node",\n        url: "https://solana-devnet-rpc.allthatnode.com/"\n      }\n    ],\n    nativeCurrencies: [\n      {\n        name: "Solana",\n        symbol: "SOL",\n        decimals: 18\n      }\n    ],\n    feeCurrencies: [\n      {\n        name: "Solana",\n        symbol: "SOL",\n        decimals: 18\n      }\n    ],\n    blockExplorerUrls: [\n      {\n        name: "Solana Devnet Explorer",\n        url: "https://explorer.solana.com/?cluster=devnet"\n      }\n    ],\n    iconUrls: [],\n    slip44: "501"\n  };\n\n  async function addChain() {\n    // before adding chain to wallet, you should connect to wallet first\n    const accounts = await window.dapp.request("solana", {\n      method: "dapp:accounts"\n    });\n    // add chain to wallet\n    const response = await window.dapp.request("solana", {\n      method: "dapp:addChain",\n      params: [chainData]\n    });\n  }\n  return <Button onClick={addChain}>Add Chain</Button>;\n}\n')))}m.isMDXComponent=!0}}]);