"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5304],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=a.createContext({}),l=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=l(n.components);return a.createElement(i.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,i=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),p=l(t),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(h,s(s({ref:e},u),{},{components:t})):a.createElement(h,s({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,s=new Array(r);s[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c.mdxType="string"==typeof n?n:o,s[1]=c;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},94005:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),s=["components"],c={keywords:["cosmos sendTransaction","dapp:sendTransaction","cosmos"],description:"Sending Transactions in Cosmos"},i="Cosmos",l={unversionedId:"wallet/developer-guide/sending-transaction/cosmos",id:"wallet/developer-guide/sending-transaction/cosmos",title:"Cosmos",description:"Sending Transactions in Cosmos",source:"@site/docs/wallet/developer-guide/sending-transaction/cosmos.md",sourceDirName:"wallet/developer-guide/sending-transaction",slug:"/wallet/developer-guide/sending-transaction/cosmos",permalink:"/wallet/developer-guide/sending-transaction/cosmos",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/sending-transaction/cosmos.md",tags:[],version:"current",frontMatter:{keywords:["cosmos sendTransaction","dapp:sendTransaction","cosmos"],description:"Sending Transactions in Cosmos"},sidebar:"tutorialSidebar",previous:{title:"Celo",permalink:"/wallet/developer-guide/sending-transaction/celo"},next:{title:"Ethereum",permalink:"/wallet/developer-guide/sending-transaction/ethereum"}},u={},d=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"3. Example",id:"3-example",level:2}],p={toc:d};function m(n){var e=n.components,t=(0,o.Z)(n,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cosmos"},"Cosmos"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Cosmos developers make use of external libraries like ",(0,r.kt)("a",{parentName:"p",href:"https://cosmos.github.io/cosmjs/"},"CosmJS"),". The following is an explanation of how to initiate a transfer transaction by invoking the method through ",(0,r.kt)("inlineCode",{parentName:"p"},"dapp.request"),". We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the API provides.")),(0,r.kt)("p",null,"To send a transaction from a cosmos web application, on the dapp for example, it needs to be followed the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Detection of Dapp providers (window.dapp)"),(0,r.kt)("li",{parentName:"ol"},"Detecting the Cosmos network to which the user is linked"),(0,r.kt)("li",{parentName:"ol"},"Import the Cosmos account of the user")),(0,r.kt)("p",null,"The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('cosmos', {\n  method: 'dapp:sendTransaction',\n  params: [JSON.stringify(transactionParameters)],\n});\nconst txHash = response;\n")),(0,r.kt)("h2",{id:"1-returns"},"1. Returns"),(0,r.kt)("p",null,"It returns the transaction hash value as a Promise object of type string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string>;\n")),(0,r.kt)("h2",{id:"2-params"},"2. Params"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TransactionParameters {\n  signerData: {\n    accountNumber: string;\n    sequence: string;\n    chainId: string;\n  };\n  fee: {\n    amount: [\n      {\n        denom: string;\n        amount: string;\n      },\n    ];\n    gas: string;\n  };\n  memo: string;\n  msgs: [\n    {\n      typeUrl: '/cosmos.bank.v1beta1.MsgSend';\n      value: {\n        fromAddress: string;\n        toAddress: string;\n        amount: [{ denom: string; amount: string }];\n      };\n    },\n  ];\n  sequence: string;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," depends on the type of ",(0,r.kt)("inlineCode",{parentName:"li"},"typeUrl")," and the method of the contract you want to execute. The above parameters are examples of transaction types that send coins to other accounts."),(0,r.kt)("li",{parentName:"ul"},"The parameters are described in detail at the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.44/core/proto-docs.html"},"link"),".")),(0,r.kt)("h2",{id:"3-example"},"3. Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendTransaction = async () => {\n  // get accounts first\n  const accounts = await dapp.request('cosmos', { method: 'dapp:accounts' });\n  const sequence = '10';\n  const chainId = 'vega-testnet';\n  const transactionParameters = {\n    signerData: {\n      accountNumber: accounts,\n      sequence,\n      chainId,\n    },\n    fee: {\n      amount: [\n        {\n          denom: 'uatom',\n          amount: '10000',\n        },\n      ],\n      gas: '180000', // 180k\n    },\n    memo: '',\n    msgs: [\n      {\n        typeUrl: '/cosmos.bank.v1beta1.MsgSend',\n        value: {\n          fromAddress: accounts,\n          toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode\n          amount: [{ denom: 'uatom', amount: '10000' }],\n        },\n      },\n    ],\n    sequence: `${sequence}`,\n  };\n  // sending a transaction\n  try {\n    const response = await dapp.request('cosmos', {\n      method: 'dapp:sendTransaction',\n      params: [JSON.stringify(transactionParameters)],\n    });\n    const txHash = response.transactionHash;\n  } catch (error) {\n    /* \n      {\n        message: 'User denied transaction signature',\n        code: 4001,\n      }\n    */\n  }\n};\n")),(0,r.kt)("p",null,"To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. ",(0,r.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/cosmos.dsrv"},"The following URL")," will send you a tap of the Cosmos testnet token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'cosmos';\n  const sequence = '10';\n  const chainId = 'vega-testnet';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n      if (dapp.networks.cosmos.chain !== 'theta-testnet') {\n        throw new Error('Please change to Cosmos Testnet in WELLDONE Wallet');\n      }\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const transactionParameters = {\n        signerData: {\n          accountNumber: accounts,\n          sequence,\n          chainId,\n        },\n        fee: {\n          amount: [\n            {\n              denom: 'uatom',\n              amount: '10000',\n            },\n          ],\n          gas: '180000', // 180k\n        },\n        memo: '',\n        msgs: [\n          {\n            typeUrl: '/cosmos.bank.v1beta1.MsgSend',\n            value: {\n              fromAddress: accounts,\n              toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode\n              amount: [{ denom: 'uatom', amount: '10000' }],\n            },\n          },\n        ],\n        sequence: `${sequence}`,\n      };\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [JSON.stringify(transactionParameters)],\n      });\n      const txHash = response;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);