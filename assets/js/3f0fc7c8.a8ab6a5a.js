"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[734],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1315:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),a=["components"],s={},c=void 0,l={unversionedId:"add-chain/Cosmos",id:"add-chain/Cosmos",title:"Cosmos",description:"Cosmos params",source:"@site/docs/add-chain/Cosmos.md",sourceDirName:"add-chain",slug:"/add-chain/Cosmos",permalink:"/docs/add-chain/Cosmos",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/blob/master/docs/add-chain/Cosmos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add Chain",permalink:"/docs/add-chain"},next:{title:"Ethereum",permalink:"/docs/add-chain/Ethereum"}},d={},m=[{value:"Cosmos params",id:"cosmos-params",level:2},{value:"Example",id:"example",level:2}],p={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cosmos-params"},"Cosmos params"),(0,i.kt)("p",null,"To add Cosmos-compatible networks to the WELLDONE wallet, send the following object as a factor to ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),". The following is the standard for Cosmos ecosystem originally suggested by Keplr."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Cosmos"',title:'"Cosmos"'},"interface Currency {\n  coinDenom: string;\n  coinMinimalDenom: string;\n  coinDecimals: number;\n}\ninterface ChainData {\n  // Identifier to distinguish the chain\n  chainId: string;\n  // The name of the chain to be displayed to the user.\n  chainName: string;\n  // RPC endpoint of the chain\n  rpc: string;\n  // REST endpoint of the chain.\n  rest: string;\n  // BIP44 path\n  bip44: {\n    // We recommend using 118(Cosmos Hub) as this would provide good Ledger hardware wallet compatibility by utilizing the Cosmos Ledger app.\n    coinType: number;\n  };\n  // Bech32 config using the address prefix of the chain\n  bech32Config: {\n    bech32PrefixAccAddr: string;\n    bech32PrefixAccPub: string;\n    bech32PrefixValAddr: string;\n    bech32PrefixValPub: string;\n    bech32PrefixConsAddr: string;\n    bech32PrefixConsPub: string;\n  };\n  // Information on the staking token of the chain\n  stakeCurrency: {\n    coinDenom: string;\n    coinMinimalDenom: string;\n    coinDecimals: number;\n  };\n  // List of all coin/tokens used in this chain.\n  currencies: Array<Currency>;\n  // List of coin/tokens used as a fee token in this chain.\n  feeCurrencies: Array<Currency>;\n  // (Optional) The number of the coin type.\n  // This field is only used to fetch the address from ENS.\n  // Ideally, it is recommended to be the same with BIP44 path's coin type.\n  // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.\n  // So, this is separated to support such chains.\n  coinType: number;\n  // (Optional) This is used to set the fee of the transaction.\n  // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).\n  // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.\n  // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.\n  gasPriceStep: {\n    low: number;\n    average: number;\n    high: number;\n  };\n  // (Optional)\n  explorer: string;\n}\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following is the example that the addition of a Cosmos-based Osmosis testnet (",(0,i.kt)("inlineCode",{parentName:"p"},"osmo-test-4"),").\nTo connect the Osmosis Testnet to the WELLDONE Wallet, click the 'Add Chain' button. You must first connect to your wallet using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:accounts")," method before using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:addChain")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function addChain() {\n  // Cosmos-SDK based chain parameter Sample - Osmosis Testnet\n  const chainData = {\n    chainId: "osmo-test-4",\n    chainName: "Osmosis Testnet",\n    rpc: "https://osmosis-testnet-rpc.allthatnode.com:26657/",\n    rest: "https://osmosis-testnet-rpc.allthatnode.com:1317/",\n    bip44: {\n      coinType: 118\n    },\n    bech32Config: {\n      bech32PrefixAccAddr: "osmo",\n      bech32PrefixAccPub: "osmopub",\n      bech32PrefixValAddr: "osmovaloper",\n      bech32PrefixValPub: "osmovaloperpub",\n      bech32PrefixConsAddr: "osmovalcons",\n      bech32PrefixConsPub: "osmovalconspub"\n    },\n    stakeCurrency: {\n      coinDenom: "OSMO",\n      coinMinimalDenom: "uosmo",\n      coinDecimals: 6\n    },\n    currencies: [\n      {\n        coinDenom: "OSMO",\n        coinMinimalDenom: "uosmo",\n        coinDecimals: 6\n      }\n    ],\n    feeCurrencies: [\n      {\n        coinDenom: "OSMO",\n        coinMinimalDenom: "uosmo",\n        coinDecimals: 6\n      }\n    ],\n    explorer: "https://testnet.mintscan.io/osmosis-testnet",\n    coinType: 118\n    // gasPriceStep: {\n    //   low: 0.01,\n    //   average: 0.025,\n    //   high: 0.05\n    // }\n  };\n\n  async function addChain() {\n    // before adding chain to wallet, you should connect to wallet\n    const accounts = await window.dapp.request("cosmos", {\n      method: "dapp:accounts"\n    });\n    // add chain to wallet\n    const response = await window.dapp.request("cosmos", {\n      method: "dapp:addChain",\n      params: [chainData]\n    });\n  }\n\n  return <Button onClick={addChain}>Add Chain</Button>;\n}\n')))}u.isMDXComponent=!0}}]);