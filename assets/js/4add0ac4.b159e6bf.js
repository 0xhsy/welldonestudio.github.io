"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[775],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4545:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={keywords:["celo sendTransaction","dapp:sendTransaction","celo"],description:"Sending Transactions in Celo"},c="Celo",l={unversionedId:"sending-transaction/celo",id:"sending-transaction/celo",title:"Celo",description:"Sending Transactions in Celo",source:"@site/docs/sending-transaction/celo.md",sourceDirName:"sending-transaction",slug:"/sending-transaction/celo",permalink:"/docs/sending-transaction/celo",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/sending-transaction/celo.md",tags:[],version:"current",frontMatter:{keywords:["celo sendTransaction","dapp:sendTransaction","celo"],description:"Sending Transactions in Celo"},sidebar:"tutorialSidebar",previous:{title:"Sending Transactions",permalink:"/docs/sending-transaction"},next:{title:"Cosmos",permalink:"/docs/sending-transaction/cosmos"}},p={},d=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"celo"},"Celo"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Celo developers make use of external libraries like ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celo.org/developer/dappkit"},"DappKit"),". The following is an explanation of how to initiate a transfer transaction by invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"eth sendTransaction")," method through ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp.request"),". We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the API provides.")),(0,o.kt)("p",null,"To send a transaction from a celo web application, on the dapp for example, it needs to be followed the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Detection of Dapp providers (",(0,o.kt)("inlineCode",{parentName:"li"},"window.dapp"),")"),(0,o.kt)("li",{parentName:"ol"},"Detecting the celo network to which the user is linked"),(0,o.kt)("li",{parentName:"ol"},"Import the celo account of the user")),(0,o.kt)("p",null,"The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('celo', {\n  method: 'dapp:sendTransaction',\n  params: [JSON.stringify(transactionParameters)],\n});\nconst txHash = response;\n")),(0,o.kt)("h2",{id:"1-returns"},"1. Returns"),(0,o.kt)("p",null,"It returns the transaction hash value as a Promise object of type string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string>;\n")),(0,o.kt)("h2",{id:"2-params"},"2. Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TransactionParameters {\n  from: string;\n  to: string;\n  gas?: string; // overwritten by WELLDONE Wallet\n  gasPrice?: string; // overwritten by WELLDONE Wallet\n  value?: string;\n  data: string;\n  feeCurrency?: string; // Celo-specific option\n  gatewayFeeRecipient?: string; // Celo-specific option\n  gatewayFee?: string; // Celo-specific option\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"from")," : The address the transaction is sent from.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"to")," : (optional when creating new contract) The address the transaction is directed to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"gas")," : (optional) Integer of the gas provided for the transaction execution. It will return unused gas.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"gasPrice")," : (optional) Integer of the gasPrice used for each paid gas, in Wei.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"value")," : (optional) Integer of the value sent with this transaction, in Wei.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"data")," : The compiled code of a contract OR the hash of the invoked method signature and encoded parameters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"feeCurrency")," : (optional) address of the ERC20 contract to use to pay for gas and the gateway fee")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"gatewayFeeRecipient")," : (optional) coinbase address of the full serving the light client's trasactions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"gatewayFee")," : (optional) value paid to the gateway fee recipient, denominated in the fee currency"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"gas")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"gasPrice")," fields are overwritten by the WELLDONE Wallet internal logic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gatewayFeeRecipient")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"gatewayFee")," are options to support full node incentives, which are not currently implemented by the protocol.\n:::")),(0,o.kt)("h2",{parentName:"admonition",id:"3-example"},"3. Example"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendTransaction = async () => {\n  // get accounts first\n  const accounts = await dapp.request('celo', { method: 'dapp:accounts' });\n  const transactionParameters = {\n    from: accounts['celo'].address,\n    to: '0x502fB76a1A310d048973DeE209dC6c6ce572f7e4', // allthatnode\n    value: '0x00',\n    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n  };\n  // sending a transaction\n  try {\n    const response = await dapp.request('celo', {\n      method: 'dapp:sendTransaction',\n      params: [JSON.stringify(transactionParameters)],\n    });\n    const txHash = response;\n  } catch (error) {\n    /* \n      {\n        message: 'User denied transaction signature',\n        code: 4001,\n      }\n    */\n  }\n};\n")),(0,o.kt)("p",{parentName:"admonition"},"To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. ",(0,o.kt)("a",{parentName:"p",href:"https://celo.org/developers/faucet"},"The following URL")," will send you a tap of the Celo Alfajores testnet token."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'celo';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n      if (dapp.networks.celo.chain !== '0xaef3') {\n        throw new Error('Please change to Celo Alfajores Testnet in WELLDONE Wallet');\n      }\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const transactionParameters = {\n        from: accounts,\n        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode\n        value: '0x00',\n        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n      };\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [JSON.stringify(transactionParameters)],\n      });\n      const txHash = response;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n"))))}m.isMDXComponent=!0}}]);