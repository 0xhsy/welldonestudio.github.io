"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[7488],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return t?o.createElement(h,a(a({ref:n},l),{},{components:t})):o.createElement(h,a({ref:n},l))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5630:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var o=t(3117),i=t(102),r=(t(7294),t(3905)),a=["components"],s={description:"\ucf54\uc2a4\ubaa8\uc2a4 \uae30\ubc18 \ub124\ud2b8\uc6cc\ud06c \ucd94\uac00",keywords:["\ub124\ud2b8\uc6cc\ud06c \ucd94\uac00","\ucf54\uc2a4\ubaa8\uc2a4"]},c="Cosmos",d={unversionedId:"add-chain/developer-guide/cosmos",id:"add-chain/developer-guide/cosmos",title:"Cosmos",description:"\ucf54\uc2a4\ubaa8\uc2a4 \uae30\ubc18 \ub124\ud2b8\uc6cc\ud06c \ucd94\uac00",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/add-chain/developer-guide/cosmos.md",sourceDirName:"add-chain/developer-guide",slug:"/add-chain/developer-guide/cosmos",permalink:"/ko/docs/add-chain/developer-guide/cosmos",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/add-chain/developer-guide/cosmos.md",tags:[],version:"current",frontMatter:{description:"\ucf54\uc2a4\ubaa8\uc2a4 \uae30\ubc18 \ub124\ud2b8\uc6cc\ud06c \ucd94\uac00",keywords:["\ub124\ud2b8\uc6cc\ud06c \ucd94\uac00","\ucf54\uc2a4\ubaa8\uc2a4"]},sidebar:"tutorialSidebar",previous:{title:"Developer Guide",permalink:"/ko/docs/add-chain/developer-guide"},next:{title:"Ethereum",permalink:"/ko/docs/add-chain/developer-guide/ethereum"}},l={},p=[{value:"Cosmos params",id:"cosmos-params",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cosmos"},"Cosmos"),(0,r.kt)("h2",{id:"cosmos-params"},"Cosmos params"),(0,r.kt)("p",null,"Cosmos \uae30\ubc18 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud558\uace0\uc790 \ud560 \ub54c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"\uc5d0 \ub2e4\uc74c\uc758 \uac1d\uccb4\ub97c \uc778\uc790\ub85c \ub118\uaca8\uc90d\ub2c8\ub2e4.\n\uc544\ub798\ub294 Cosmos\uc758 \uc778\ud130\uccb4\uc778\uc744 \uc9c0\uc6d0\ud558\ub294 Keplr \uc5d0\uc11c \uc81c\uc548\ud55c Cosmos \uc0dd\ud0dc\uacc4 \ud45c\uc900\uc744 \ub530\ub985\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Cosmos"',title:'"Cosmos"'},"interface ChainData {\n  // Identifier to distinguish the chain\n  chainId: string;\n  // The name of the chain to be displayed to the user.\n  chainName: string;\n  // RPC endpoint of the chain\n  rpc: string;\n  // REST endpoint of the chain.\n  rest: string;\n  // BIP44 path\n  bip44: {\n    // We recommend using 118(Cosmos Hub) as this would provide good Ledger hardware wallet compatibility by utilizing the Cosmos Ledger app.\n    coinType: number;\n  };\n  // Bech32 config using the address prefix of the chain\n  bech32Config: {\n    bech32PrefixAccAddr: string;\n    bech32PrefixAccPub: string;\n    bech32PrefixValAddr: string;\n    bech32PrefixValPub: string;\n    bech32PrefixConsAddr: string;\n    bech32PrefixConsPub: string;\n  };\n  // Information on the staking token of the chain\n  stakeCurrency: {\n    coinDenom: string;\n    coinMinimalDenom: string;\n    coinDecimals: number;\n  };\n  // List of all coin/tokens used in this chain.\n  currencies: [\n    {\n      coinDenom: string;\n      coinMinimalDenom: string;\n      coinDecimals: number;\n    },\n  ];\n  // List of coin/tokens used as a fee token in this chain.\n  feeCurrencies: [\n    {\n      coinDenom: string;\n      coinMinimalDenom: string;\n      coinDecimals: number;\n    },\n  ];\n  // (Optional) The number of the coin type.\n  // This field is only used to fetch the address from ENS.\n  // Ideally, it is recommended to be the same with BIP44 path's coin type.\n  // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.\n  // So, this is separated to support such chains.\n  coinType: number;\n  // (Optional) This is used to set the fee of the transaction.\n  // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).\n  // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.\n  // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.\n  gasPriceStep: {\n    low: number;\n    average: number;\n    high: number;\n  };\n  // (Optional)\n  explorer: string;\n}\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Cosmos \uae30\ubc18\uc758 Osmosis \ud14c\uc2a4\ud2b8\ub137 (",(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-4"),") \uc744 \ucd94\uac00\ud574\ubcf4\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Add Chain")," \ubc84\ud2bc\uc744 \ub20c\ub7ec WELLDONE Wallet\uc5d0 Osmosis Testnet \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"dapp:addChain")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"dapp:accounts")," \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \uba3c\uc800 \uc9c0\uac11\uc5d0 \uc5f0\uacb0\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function addChain() {\n  // Cosmos-SDK based chain parameter Sample - Osmosis Testnet\n  const chainData = {\n    chainId: 'osmo-test-4',\n    chainName: 'Osmosis Testnet',\n    rpc: 'https://osmosis-testnet-rpc.allthatnode.com:26657/',\n    rest: 'https://osmosis-testnet-rpc.allthatnode.com:1317/',\n    bip44: {\n      coinType: 118,\n    },\n    bech32Config: {\n      bech32PrefixAccAddr: 'osmo',\n      bech32PrefixAccPub: 'osmopub',\n      bech32PrefixValAddr: 'osmovaloper',\n      bech32PrefixValPub: 'osmovaloperpub',\n      bech32PrefixConsAddr: 'osmovalcons',\n      bech32PrefixConsPub: 'osmovalconspub',\n    },\n    stakeCurrency: {\n      coinDenom: 'OSMO',\n      coinMinimalDenom: 'uosmo',\n      coinDecimals: 6,\n    },\n    currencies: [\n      {\n        coinDenom: 'OSMO',\n        coinMinimalDenom: 'uosmo',\n        coinDecimals: 6,\n      },\n    ],\n    feeCurrencies: [\n      {\n        coinDenom: 'OSMO',\n        coinMinimalDenom: 'uosmo',\n        coinDecimals: 6,\n      },\n    ],\n    explorer: 'https://testnet.mintscan.io/osmosis-testnet',\n    coinType: 118,\n    // gasPriceStep: {\n    //   low: 0.01,\n    //   average: 0.025,\n    //   high: 0.05\n    // }\n  };\n\n  async function addChain() {\n    // before adding chain to wallet, you should connect to wallet\n    const accounts = await window.dapp.request('cosmos', {\n      method: 'dapp:accounts',\n    });\n    // add chain to wallet\n    const response = await window.dapp.request('cosmos', {\n      method: 'dapp:addChain',\n      params: [chainData],\n    });\n  }\n\n  return <Button onClick={addChain}>Add Chain</Button>;\n}\n")))}u.isMDXComponent=!0}}]);