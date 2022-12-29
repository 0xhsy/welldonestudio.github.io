"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[7399],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95552:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),s=["components"],c={keywords:["NEAR sendTransaction","dapp:sendTransaction","NEAR"],description:"Sending Transactions in NEAR"},i="NEAR",l={unversionedId:"wallet/developer-guide/sending-transaction/near",id:"wallet/developer-guide/sending-transaction/near",title:"NEAR",description:"Sending Transactions in NEAR",source:"@site/docs/wallet/developer-guide/sending-transaction/near.md",sourceDirName:"wallet/developer-guide/sending-transaction",slug:"/wallet/developer-guide/sending-transaction/near",permalink:"/wallet/developer-guide/sending-transaction/near",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/sending-transaction/near.md",tags:[],version:"current",frontMatter:{keywords:["NEAR sendTransaction","dapp:sendTransaction","NEAR"],description:"Sending Transactions in NEAR"},sidebar:"tutorialSidebar",previous:{title:"Klaytn",permalink:"/wallet/developer-guide/sending-transaction/klaytn"},next:{title:"Execute the Contract",permalink:"/execute-the-contract"}},d={},u=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"3. Example",id:"3-example",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"near"},"NEAR"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The following is an explanation of how to initiate a transfer transaction in NEAR network by invoking the through ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp.request"),". We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.")),(0,o.kt)("p",null,"To send a transaction from the Juno-supported dApp, it needs to be followed the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Detecting of Universal Provider (",(0,o.kt)("inlineCode",{parentName:"li"},"window.dapp"),")"),(0,o.kt)("li",{parentName:"ol"},"Detecting the NEAR network to which the user is linked"),(0,o.kt)("li",{parentName:"ol"},"Import the NEAR account of the user")),(0,o.kt)("p",null,"The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('near', {\n  method: 'dapp:signAndSendTransaction',\n  params: [HEX_STRING_TX_DATA],\n});\n")),(0,o.kt)("h2",{id:"1-returns"},"1. Returns"),(0,o.kt)("p",null,"This method returns the transaction hash value as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," object of type string because you can send multiple transactions as well as one transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string[]>;\n")),(0,o.kt)("h2",{id:"2-params"},"2. Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type HEX_STRING_TX_DATA = string;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HEX_STRING_TX_DATA")," must be passed to the parameter in order for a transaction to be sent from NEAR. The ",(0,o.kt)("inlineCode",{parentName:"li"},"near-api-js")," library can provide these values, and the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.near.org/integrator/create-transactions"},"link")," and the example below can explain their detailed usage.")),(0,o.kt)("h2",{id:"3-example"},"3. Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { providers, transactions, utils } from 'near-api-js';\nconst getSerializedTransaction = async ( accounts ) => {\n  const rpc = 'https://rpc.testnet.near.org';\n  const provider = new providers.JsonRpcProvider(rpc);\n  const accountLocal = currentAccount['near'].address;\n  const publicKey = currentAccount['near'].pubKey;\n  const signerId = accountLocal;\n  const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');\n  const actions = [transactions.transfer(new BN(10))];\n  const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);\n\n  const transaction = transactions.createTransaction(\n    accountLocal,\n    utils.PublicKey.fromString(publicKey),\n    '9bfd12934cd6fdd09199e2e267803c70bd7c6cb40832ac6f29811948dde2b723',\n    accessKey.nonce + 1,\n    actions,\n    recentBlockHash,\n  );\n\n  const bytes = transaction.encode();\n\n  return Buffer.from(bytes).toString('base64');\n};\n\nconst sendTransaction = async = () => {\n  // get accounts first\n  const accounts = await dapp.request('near', { method: 'dapp:accounts' });\n  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts);\n  // sending a transaction\n    try{\n      const response = await dapp.request('near' ,{\n        method: 'dapp:signAndSendTransaction',\n        params: [\n          // use serialized transaction\n          [`${HEX_STRING_TX_DATA}`]\n        ]\n      });\n      const txHash = response[0];\n    } catch (error) {\n      /*\n        {\n          message: 'User denied transaction signature',\n          code: 4001,\n        }\n      */\n    }\n  }\n")),(0,o.kt)("p",null,"To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. ",(0,o.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/near.dsrv"},"The following URL")," will send you a tap of the NEAR testnet token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'near';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  const getSerializedTransaction = async () => {\n    try {\n      const rpc = 'https://rpc.testnet.near.org';\n      const provider = new providers.JsonRpcProvider(rpc);\n      const signerId = accounts.address;\n      const publicKey = accounts.pubKey;\n\n      const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');\n\n      const actions = [transactions.transfer(new BN(10))];\n      const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);\n\n      // make transaction\n      const transaction = transactions.createTransaction(\n        signerId, // signerId\n        utils.PublicKey.fromString(publicKey), //pubKey\n        '9bfd12934cd6fdd09199e2e267803c70bd7c6cb40832ac6f29811948dde2b723', // receiver\n        accessKey.nonce + 1, // nonce\n        actions, // actions\n        recentBlockHash, // recentBlockHash\n      );\n      const bytes = transaction.encode();\n\n      return Buffer.from(bytes).toString('base64');\n    } catch (error) {\n      /* error */\n      console.log(error);\n    }\n  };\n\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n      const status = await window.dapp.request('near', { method: 'status', params: [] });\n      if (status.chain_id !== 'testnet') {\n        throw new Error('Please chagne to NEAR Testnet in WELLDONE Wallet');\n      }\n      setAccounts(accounts[CHAIN_NAME]);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const HEX_STRING_TX_DATA = await getSerializedTransaction();\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:signAndSendTransaction',\n        params: [`${HEX_STRING_TX_DATA}`],\n      });\n      const txHash = response[0];\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts.address}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);