"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[209],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(t),m=a,h=s["".concat(u,".").concat(m)]||s[m]||p[m]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6784:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],c={description:"\uc774\ub354\ub9ac\uc6c0 \uae30\ubc18 \ub124\ud2b8\uc6cc\ud06c \ucd94\uac00",keywords:["\ub124\ud2b8\uc6cc\ud06c \ucd94\uac00","\uc774\ub354\ub9ac\uc6c0"]},u="Ethereum",l={unversionedId:"add-chain/developer-guide/ethereum",id:"add-chain/developer-guide/ethereum",title:"Ethereum",description:"\uc774\ub354\ub9ac\uc6c0 \uae30\ubc18 \ub124\ud2b8\uc6cc\ud06c \ucd94\uac00",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/add-chain/developer-guide/ethereum.md",sourceDirName:"add-chain/developer-guide",slug:"/add-chain/developer-guide/ethereum",permalink:"/ko/add-chain/developer-guide/ethereum",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/add-chain/developer-guide/ethereum.md",tags:[],version:"current",frontMatter:{description:"\uc774\ub354\ub9ac\uc6c0 \uae30\ubc18 \ub124\ud2b8\uc6cc\ud06c \ucd94\uac00",keywords:["\ub124\ud2b8\uc6cc\ud06c \ucd94\uac00","\uc774\ub354\ub9ac\uc6c0"]},sidebar:"tutorialSidebar",previous:{title:"Cosmos",permalink:"/ko/add-chain/developer-guide/cosmos"},next:{title:"Solana",permalink:"/ko/add-chain/developer-guide/solana"}},d={},p=[{value:"Ethereum params",id:"ethereum-params",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ethereum"},"Ethereum"),(0,i.kt)("h2",{id:"ethereum-params"},"Ethereum params"),(0,i.kt)("p",null,"Ethereum \uae30\ubc18 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud558\uace0\uc790 \ud560 \ub54c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," \uc5d0 \ub2e4\uc74c\uc758 \uac1d\uccb4\ub97c \uc778\uc790\ub85c \ub118\uaca8\uc90d\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Ethereum"',title:'"Ethereum"'},"interface ChainData {\n  // Identifier to distinguish the chain\n  // \uc774\ub354\ub9ac\uc6c0\uc5d0\uc11c\ub294 Hex\ub85c \uc4f0\uc774\uc9c0\ub9cc \ucf54\uc2a4\ubaa8\uc2a4\uc5d0\uc11c\ub294 string\uc774\uae30 \ub54c\ubb38\uc5d0 string\uc73c\ub85c \ud1b5\uc77c\n  chainId: string;\n  // The name of the chain to be displayed to the user.\n  chainName: string;\n  // RPC endpoint of the chain.\n  rpcUrls: Array<string>;\n  // (Optional) \uccb4\uc778\uc758 \uc2dd\ubcc4\uc744 \uc704\ud55c \uc774\ubbf8\uc9c0 url\n  iconUrls: Array<string>;\n  // \uae30\ubcf8\uc73c\ub85c \uc4f0\uc774\ub294 \ud654\ud3d0 \uc124\uc815\n  nativeCurrency: {\n    name: string;\n    symbol: string;\n    decimals: number;\n  };\n  // (Optional) \uccb4\uc778\uc758 \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\ub294 \uc0ac\uc774\ud2b8 url\n  blockExplorerUrls: Array<string>;\n}\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Ethereum \uae30\ubc18\uc758 Ubiq \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud574\ubcf4\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Add Chain")," \ubc84\ud2bc\uc744 \ub20c\ub7ec WELLDONE Wallet\uc5d0 Ubiq \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:addChain")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:accounts")," \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \uba3c\uc800 \uc9c0\uac11\uc5d0 \uc5f0\uacb0\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function addChain() {\n  // Ethereum based chain parameter Sample - Ubiq\n  const chainData = {\n    chainId: '0x8',\n    chainName: 'Ubiq',\n    rpcUrls: ['https://rpc.octano.dev'],\n    iconUrls: [''],\n    nativeCurrency: {\n      name: 'Ubiq Ether',\n      symbol: 'UBQ',\n      decimals: 18,\n    },\n    blockExplorerUrls: ['https://ubiqscan.io'],\n  };\n\n  async function addChain() {\n    // before adding chain to wallet, you should connect to wallet first\n    const accounts = await window.dapp.request('ethereum', {\n      method: 'dapp:accounts',\n    });\n    // add chain to wallet\n    const response = await window.dapp.request('ethereum', {\n      method: 'dapp:addChain',\n      params: [chainData],\n    });\n  }\n  return <Button onClick={addChain}>Add Chain</Button>;\n}\n")))}m.isMDXComponent=!0}}]);