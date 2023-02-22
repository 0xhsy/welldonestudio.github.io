"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5297],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=l(t),p=r,m=g["".concat(c,".").concat(p)]||g[p]||d[p]||i;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},92824:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),s=["components"],o={keywords:["celo sendTransaction","dapp:sendTransaction","celo","kms","@dsrv/kms"],description:"Sending Transactions using @dsrv/kms in Celo"},c="Celo",l={unversionedId:"tutorials/kms/celo",id:"tutorials/kms/celo",title:"Celo",description:"Sending Transactions using @dsrv/kms in Celo",source:"@site/docs/tutorials/kms/celo.md",sourceDirName:"tutorials/kms",slug:"/tutorials/kms/celo",permalink:"/tutorials/kms/celo",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/kms/celo.md",tags:[],version:"current",frontMatter:{keywords:["celo sendTransaction","dapp:sendTransaction","celo","kms","@dsrv/kms"],description:"Sending Transactions using @dsrv/kms in Celo"},sidebar:"tutorialSidebar",previous:{title:"Aptos",permalink:"/tutorials/kms/aptos"},next:{title:"Cosmos",permalink:"/tutorials/kms/cosmos"}},u={},d=[{value:"Create Signed transaction",id:"create-signed-transaction",level:2},{value:"1. getCeloTx",id:"1-getcelotx",level:3},{value:"2. getCeloSignature",id:"2-getcelosignature",level:3},{value:"3. createCeloSignedTx",id:"3-createcelosignedtx",level:3},{value:"Send Signed transaction",id:"send-signed-transaction",level:2},{value:"Examples",id:"examples",level:2}],g={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"celo"},"Celo"),(0,i.kt)("div",null,(0,i.kt)("span",{className:"author-sm"},"November 11, 2022"),(0,i.kt)("div",{className:"author-div"},(0,i.kt)("div",{className:"author-avatars"},(0,i.kt)("a",{href:"https://github.com/Nahee-Park",target:"_blank"},(0,i.kt)("img",{src:"https://avatars.githubusercontent.com/u/81923229?v=4"}))),(0,i.kt)("div",null,(0,i.kt)("span",{className:"author-name"},"Nahee Park"),(0,i.kt)("br",null),(0,i.kt)("span",{className:"author-sm"},"Software Engineer, DSRV ")))),(0,i.kt)("br",null),(0,i.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Celo part carries out the practice using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},"ethers"),". Please prepare by installing the package.")),(0,i.kt)("h2",{id:"create-signed-transaction"},"Create Signed transaction"),(0,i.kt)("p",null,"For a signed transaction, there are three essential steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a raw transaction first."),(0,i.kt)("li",{parentName:"ol"},"Make a raw transaction signature."),(0,i.kt)("li",{parentName:"ol"},"Convert a raw transaction into a signed transaction by adding a signature.")),(0,i.kt)("h3",{id:"1-getcelotx"},"1. getCeloTx"),(0,i.kt)("p",null,"Transaction and signature are needed. We first develop a ",(0,i.kt)("inlineCode",{parentName:"p"},"getCeloTx")," function to generate raw transaction because it is necessary to have a raw transaction to receive a signature via kms."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="getCeloTx.ts"',title:'"getCeloTx.ts"'},"import { ethers, UnsignedTransaction } from 'ethers';\nimport { Account, CHAIN } from '@dsrv/kms/lib/types';\nimport { Ethereum } from '@dsrv/kms/lib/blockchains/ethereum';\n\ninterface RawTransaction {\n  unSignedTx: UnsignedTransaction;\n  serializedTx: string;\n}\n\nexport const getCeloTx = async (mnemonic: string): Promise<RawTransaction> => {\n  /* 1. get Account */\n  const account = Ethereum.getAccount({\n    mnemonic,\n    path: { type: CHAIN.CELO, account: 0, index: 0 },\n  });\n\n  /* 2. make raw transaction */\n  const provider = new ethers.providers.JsonRpcProvider(\n    'https://celo-alfajores-rpc.allthatnode.com',\n  ); //allthatnode rpc\n  const nonce = await provider.getTransactionCount(account.address);\n  const gasLimit = await provider.estimateGas({\n    value: '0x1',\n    to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA',\n    from: account.address,\n  });\n  const transactionParameters = {\n    to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode address\n    value: ethers.utils.parseEther('0.0005'),\n    gasLimit: gasLimit.mul(10).toString(),\n    gasPrice: '0x07f9acf02',\n    type: 2,\n    nonce,\n    // alfajores network\n    chainId: 44787,\n    type: 1,\n    gasPrice: '0x07f9acf02',\n    maxPriorityFeePerGas: '0x07f9acf02',\n    maxFeePerGas: '0x07f9acf02',\n    nonce,\n  };\n\n  return {\n    serializedTx: ethers.utils.serializeTransaction(transactionParameters),\n    unSignedTx: transactionParameters,\n  };\n};\n")),(0,i.kt)("h3",{id:"2-getcelosignature"},"2. getCeloSignature"),(0,i.kt)("p",null,"We then develop a method called ",(0,i.kt)("inlineCode",{parentName:"p"},"getCeloSignature")," that produces a signature by using serializedTx as a factor in order to gain a signature for the transaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="getCeloSignature.ts"',title:'"getCeloSignature.ts"'},"import { CHAIN } from '@dsrv/kms/lib/types';\nimport { Ethereum } from '@dsrv/kms/lib/blockchains/ethereum';\n\nexport const getCeloSignature = (serializedTx: string): string => {\n  const { signature } = Ethereum.signTx(\n    {\n      mnemonic,\n      path: { type: CHAIN.CELO, account: 0, index: 0 },\n    },\n    serializedTx,\n  );\n\n  return signature;\n};\n")),(0,i.kt)("h3",{id:"3-createcelosignedtx"},"3. createCeloSignedTx"),(0,i.kt)("p",null,"Finally, we develop the ",(0,i.kt)("inlineCode",{parentName:"p"},"createCeloSignedTx")," function, which takes an ",(0,i.kt)("inlineCode",{parentName:"p"},"unsignedTx")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"signature")," generated earlier and returns a signed transaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="createCeloSignedTx.ts"',title:'"createCeloSignedTx.ts"'},"import { ethers, UnsignedTransaction } from 'ethers';\n\ninterface createCeloSignedTxProps {\n  unSignedTx: UnsignedTransaction;\n  signature: string;\n}\n\n/* create singedTx by combining tx and signature */\nexport const createCeloSignedTx = ({ unSignedTx, signature }: createCeloSignedTxProps): string => {\n  const signedTx = ethers.utils.serializeTransaction(unSignedTx, signature);\n  return signedTx;\n};\n")),(0,i.kt)("p",null,"Finally, you can construct a ",(0,i.kt)("inlineCode",{parentName:"p"},"getCeloSignedTx")," function that returns a signed transaction by combining the functions you made before, ",(0,i.kt)("inlineCode",{parentName:"p"},"getCeloTx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getCeloSignature"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"createCeloSignedTx"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="getCeloSignedTx.ts"',title:'"getCeloSignedTx.ts"'},"export const getCeloSignedTx = async (mnemonic: string) => {\n  /* 1. get rawTransaction */\n  const { serializedTx, unSignedTx } = await getCeloTx(mnemonic);\n  /* 2. get signature */\n  const celoSignature = getCeloSignature(serializedTx);\n  /* 3. create singedTx by combining rawTransaction and signature */\n  const celoSignedTx = createCeloSignedTx({\n    unSignedTx,\n    signature: celoSignature,\n  });\n\n  return celoSignedTx;\n};\n")),(0,i.kt)("h2",{id:"send-signed-transaction"},"Send Signed transaction"),(0,i.kt)("p",null,"You can transmit the transaction using a signed transaction you've prepared."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="sendCeloTransaction.ts"',title:'"sendCeloTransaction.ts"'},"import { Transaction, providers } from 'ethers';\n\nexport const sendCeloTransaction = async (serializedTx: string): Promise<Transaction> => {\n  const provider = new providers.JsonRpcProvider('https://celo-alfajores-rpc.allthatnode.com');\n\n  const result = await provider.sendTransaction(serializedTx);\n  return result;\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},"const mnemonic = 'sample mnemonic';\nconst main = async () => {\n  const celoSignedTx = await getCeloSignedTx(mnemonic);\n  const celoTxResult = await sendCeloTransaction(celoSignedTx);\n  console.log('Celo Tx Result : ', celoTxResult);\n};\nmain();\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. You can request faucet through the FAUCET tab in the wallet."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The loss of all cryptocurrency holdings is possible if mnemonic is revealed. To execute the following example, use a test or development mnemonic.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const [mnemonic, setMnemonic] = React.useState('');\n  const [account, setAccount] = React.useState(null);\n  const [signature, setSignature] = React.useState(null);\n  const [signedTx, setSignedTx] = React.useState(null);\n  const [txResult, setTxResult] = React.useState(null);\n\n  const getCeloTx = async () => {\n    try {\n      /* 1. get Account */\n      const account = Ethereum.getAccount({\n        mnemonic,\n        path: { type: CHAIN.CELO, account: 0, index: 0 },\n      });\n      setAccount(account.address);\n\n      /* 2. make raw transaction */\n      const provider = new ethers.providers.JsonRpcProvider(\n        'https://celo-alfajores-rpc.allthatnode.com',\n      ); //allthatnode rpc\n      const nonce = await provider.getTransactionCount(account.address);\n      const gasLimit = await provider.estimateGas({\n        value: '0x1',\n        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA',\n        from: account.address,\n      });\n      const transactionParameters = {\n        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode address\n        value: ethers.utils.parseEther('0.0005'),\n        gasLimit: gasLimit.mul(10).toString(),\n        gasPrice: '0x07f9acf02',\n        type: 2,\n        nonce,\n        // alfajores network\n        chainId: 44787,\n        type: 1,\n        gasPrice: '0x07f9acf02',\n        maxPriorityFeePerGas: '0x07f9acf02',\n        maxFeePerGas: '0x07f9acf02',\n        nonce,\n      };\n\n      return {\n        serializedTx: ethers.utils.serializeTransaction(transactionParameters),\n        unSignedTx: transactionParameters,\n      };\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n  const getCeloSignature = (serializedTx) => {\n    try {\n      const { signature } = Ethereum.signTx(\n        {\n          mnemonic,\n          path: { type: CHAIN.CELO, account: 0, index: 0 },\n        },\n        serializedTx,\n      );\n      setSignature(signature);\n      return signature;\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n  const createCeloSignedTx = ({ unSignedTx, signature }) => {\n    try {\n      const signedTx = ethers.utils.serializeTransaction(unSignedTx, signature);\n      return signedTx;\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n  const getCeloSignedTx = async () => {\n    try {\n      /* 1. get rawTransaction */\n      const { serializedTx, unSignedTx } = await getCeloTx();\n      /* 2. get signature */\n      const celoSignature = getCeloSignature(serializedTx);\n      /* 3. create singedTx by combining rawTransaction and signature */\n      const celoSignedTx = createCeloSignedTx({\n        unSignedTx,\n        signature: celoSignature,\n      });\n      setSignedTx(celoSignedTx);\n      return celoSignedTx;\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n  const sendCeloTransaction = async (celoSignedTx) => {\n    try {\n      const provider = new ethers.providers.JsonRpcProvider(\n        'https://celo-alfajores-rpc.allthatnode.com',\n      );\n\n      const tx = await provider.sendTransaction(celoSignedTx);\n      const result = await tx.wait();\n      return result;\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n\n  const handleClick = async () => {\n    account && setAccount(null);\n    signature && setSignature(null);\n    signedTx && setSignedTx(null);\n    txResult && setTxResult(null);\n    const celoSignedTx = await getCeloSignedTx();\n    const celoTxResult = await sendCeloTransaction(celoSignedTx);\n    setTxResult(celoTxResult);\n  };\n\n  const handleChange = (e) => {\n    setMnemonic(e.target.value);\n\n    account && setAccount(null);\n    signature && setSignature(null);\n    signedTx && setSignedTx(null);\n    txResult && setTxResult(null);\n  };\n\n  return (\n    <>\n      <Input\n        value={mnemonic}\n        onChange={handleChange}\n        placeholder=\"Your test mnemonic\"\n        style={{ marginRight: '8px' }}\n      />\n      <Button onClick={handleClick} type=\"button\">\n        send transaction\n      </Button>\n      {account && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Account:</b> {account}\n        </ResultTooltip>\n      )}\n      {signature && (\n        <ResultTooltip style={{ background: '#F4F4F4', color: 'black' }}>\n          <b>Signature:</b> {signature}\n        </ResultTooltip>\n      )}\n      {signedTx && (\n        <ResultTooltip style={{ background: '#3B48DF' }}>\n          <b>Signed Transaction:</b> {signedTx}\n        </ResultTooltip>\n      )}\n      {txResult && (\n        <ResultTooltip style={{ background: '#FFD400', color: 'black' }}>\n          <b>Transaction Hash:</b> {txResult.transactionHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}p.isMDXComponent=!0}}]);