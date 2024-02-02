"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[1546],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86243:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),s=["components"],i={slug:"/wallet/zkWallet/send-transaction",sidebar_position:3,description:"WELLDONE zkWallet for developer"},l="Send Transaction",c={unversionedId:"wallet/zkWallet/send-transaction/index",id:"wallet/zkWallet/send-transaction/index",title:"Send Transaction",description:"WELLDONE zkWallet for developer",source:"@site/docs/wallet/zkWallet/send-transaction/index.md",sourceDirName:"wallet/zkWallet/send-transaction",slug:"/wallet/zkWallet/send-transaction",permalink:"/wallet/zkWallet/send-transaction",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/zkWallet/send-transaction/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/wallet/zkWallet/send-transaction",sidebar_position:3,description:"WELLDONE zkWallet for developer"},sidebar:"tutorialSidebar",previous:{title:"Sign Transaction",permalink:"/wallet/zkWallet/sign-transaction"},next:{title:"Add Chain",permalink:"/add-chain"}},u={},p=[{value:"Implementation Method",id:"implementation-method",level:3}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-transaction"},"Send Transaction"),(0,o.kt)("p",null,'In this section, we describe how to send signed transactions to the Sui blockchain. This process involves the DApp receiving the signed transaction from the "Sign Transaction" part and deploying it to the blockchain.'),(0,o.kt)("h3",{id:"implementation-method"},"Implementation Method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Preparing the Transaction"),": The DApp receives the signed transaction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sending to the Blockchain"),": When the user clicks the 'Send a Transaction' button, the DApp transmits the transaction to the Sui blockchain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Confirming the Result"),": Once the transaction is successfully processed, the DApp displays the transaction hash to the user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'sui';\n  const SUI_RPC_URL = 'https://wallet-rpc.devnet.sui.io/';\n  const [txHash, setTxHash] = React.useState(null);\n  const [unsignedTx, setUnsignedTx] = React.useState(null);\n  const [signature, setSingnature] = React.useState(null);\n  \n  const request = async (method, params) => {\n    const res = await fetch(SUI_RPC_URL, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        id: 0,\n        jsonrpc: '2.0',\n        method,\n        params: params || [],\n      }),\n    });\n\n    const { result } = await res.json();\n    return result;\n  };\n\n  async function handleSendTransaction() {\n    try {\n      const { digest } = await request('sui_executeTransactionBlock', [\n          Buffer.from(unsignedTx.replace('0x', ''), 'hex').toString('base64'),\n          [Buffer.from(signature.replace('0x', ''), 'hex').toString('base64')],\n      ]);\n      digest && setTxHash(digest)\n    } catch (error) {\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n\n  useEffect(() => {\n    try {\n      const url = new URL(window.location.href);\n      const { result } = JSON.parse(url.searchParams.get('jsonrpc'));\n      if (result) {\n        setUnsignedTx(result[0].unsignedTx);\n        setSingnature(result[0].signature);\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }, []);\n\n  return (\n    <>\n      {(signature && !txHash)&& (\n        <Button onClick={handleSendTransaction} type=\"button\">\n          Send a Transaction\n        </Button>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}f.isMDXComponent=!0}}]);