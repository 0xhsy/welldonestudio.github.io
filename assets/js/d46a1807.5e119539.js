"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[479],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={},l=void 0,c={unversionedId:"Sending Transactions/Klaytn",id:"Sending Transactions/Klaytn",title:"Klaytn",description:"Klaytn developers make use of external libraries like ethers. The following is an explanation of how to initiate a transfer transaction by invoking the eth_sendTransaction method through dapp.request. We recommend utilizing a dedicated library rather accessing the service directly if you want a greater degree of abstraction than the API provides.",source:"@site/docs/Sending Transactions/Klaytn.md",sourceDirName:"Sending Transactions",slug:"/Sending Transactions/Klaytn",permalink:"/docs/Sending Transactions/Klaytn",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/docs/Sending Transactions/Klaytn.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ethereum",permalink:"/docs/Sending Transactions/Ethereum"},next:{title:"Near",permalink:"/docs/Sending Transactions/Near"}},u={},p=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"To semi-optional",id:"to-semi-optional",level:3},{value:"Gas Limit optional",id:"gas-limit-optional",level:3},{value:"Gas Price optional",id:"gas-price-optional",level:3},{value:"Value optional",id:"value-optional",level:3},{value:"data semi-optional",id:"data-semi-optional",level:3},{value:"3. Example",id:"3-example",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Klaytn developers make use of external libraries like ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},"ethers"),". The following is an explanation of how to initiate a transfer transaction by invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," method through ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp.request"),". We recommend utilizing a dedicated library rather accessing the service directly if you want a greater degree of abstraction than the API provides.")),(0,o.kt)("p",null,"To send a transaction from an Klaytn web application, on the dapp for example, it needs to be followed the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Detection of Dapp providers (window.dapp)"),(0,o.kt)("li",{parentName:"ol"},"Detecting the Klaytn network to which the user is linked"),(0,o.kt)("li",{parentName:"ol"},"Import the KLaytn account of the user")),(0,o.kt)("p",null,"The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('klaytn' ,{\n    method: 'dapp:sendTransaction',\n    params: [\n      JSON.stringify(transactionParameters),\n    ]\n  });\nconst txHash = response;\n")),(0,o.kt)("h2",{id:"1-returns"},"1. Returns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The same type of value above as transaction hash can be obtained.")),(0,o.kt)("h2",{id:"2-params"},"2. Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TransactionParameters {\n  from: string; // must match user's active address.\n  to: string; // Required except during contract publications.\n  gas?: string; // customizable by user\n  gasPrice?: string; // customizable by user\n  value?: string; // Only required to send ether to the recipient from the initiating external account.\n  data?: string; // Optional, but used for defining smart contract creation and interaction.\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Required for smart contract creation. And this field is also used for specifying contract methods and their parameters.")),(0,o.kt)("h3",{id:"to-semi-optional"},"To ","[semi-optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A hex-encoded chain address. Required for transactions with a recipient (all transactions except for contract creation)."),(0,o.kt)("li",{parentName:"ul"},"Contract creation occurs when there is no to value but there is a data value.")),(0,o.kt)("h3",{id:"gas-limit-optional"},"Gas Limit ","[optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Optional parameter. Rarely useful to Dapp developers.")),(0,o.kt)("h3",{id:"gas-price-optional"},"Gas Price ","[optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Optional parameter - best used on private blockchains.")),(0,o.kt)("h3",{id:"value-optional"},"Value ","[optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hex-encoded value of the network's native currency to send. On the Main Ethereum network, this is ether, which is denominated in wei, which is 1e-18 ether."),(0,o.kt)("li",{parentName:"ul"},"Only required to send ether to the recipient from the initiating external account.")),(0,o.kt)("h3",{id:"data-semi-optional"},"data ","[semi-optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Required for smart contract creation."),(0,o.kt)("li",{parentName:"ul"},"This field is also used for specifying contract methods and their parameters. ")),(0,o.kt)("h2",{id:"3-example"},"3. Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendTransaction = async () => {\n  // get accounts first\n  const accounts = await dapp.request('klaytn', { method: 'dapp:accounts' });\n  const transactionParameters = {\n    from: accounts['klaytn'].address,\n    to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode\n    gas: '0x76c0',\n    gasPrice: '0x9184e72a000',\n    value: '0x00',\n    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n  };\n  // sending a transaction\n  try{\n    const response = await dapp.request('klaytn' ,{\n      method: 'dapp:sendTransaction',\n      params: [\n        JSON.stringify(transactionParameters),\n      ]\n    });\n    const txHash = response.hash;\n  } catch (error) {\n    /* \n      {\n        message: 'User denied transaction signature',\n        code: 4001,\n      }\n    */\n  }\n}\n")),(0,o.kt)("p",null,"To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. ",(0,o.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/klaytn.dsrv"},"The following URL")," will send you a tap of the Ethereum testnet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'klaytn';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const transactionParameters = {\n        from: accounts,\n        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode\n        gas: '0x76c0',\n        gasPrice: '0x9184e72a000',\n        value: '0x00',\n        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n      };\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [JSON.stringify(transactionParameters)],\n      });\n      const txHash = response.hash;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);