"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[3648],{82003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return V},contentTitle:function(){return D},default:function(){return P},frontMatter:function(){return A},metadata:function(){return T},toc:function(){return N}});var r=n(83117),o=n(80102),i=n(67294),a=n(3905),l=n(1017),c=n(84035),s=n(9669),m=n.n(s),d=n(29630),u=n(61953),p=n(64288),f=n(79072),h=n(13264),v=n(59382),g=n(55733),E=n.n(g),y=n(63175),b=n(39288),w=n(46054);var x=function(e){var t=e.code;return i.createElement(b.Z,{language:"rust",style:w.Z},t)},Z=n(78744),k=n(70754),I=(0,Z.Z)((function(e){return{overlay:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:9999,display:"flex",justifyContent:"center",alignItems:"center"},loadingMessage:{color:"#ffffff",fontSize:"2em",textAlign:"center"}}})),C=(0,h.Z)(d.Z)((function(e){e.theme;return{borderBottom:"4px solid",display:"inline-block"}})),z=(0,h.Z)(u.Z)((function(e){var t=e.theme;return{borderRadius:t.shape.borderRadius,fontFamily:"monospace",fontSize:"0.82rem",whiteSpace:"pre-wrap",overflowX:"auto",backgroundColor:"#282c34",color:"#a9b7c6",border:"1px solid #3b4048",lineHeight:1.5,marginBottom:t.spacing(2),padding:t.spacing(2)}})),R=function(){var e=(0,i.useState)([]),t=e[0],n=e[1],r=(0,i.useState)(0),o=r[0],a=r[1],s=(0,i.useState)([]),h=s[0],g=s[1],b=(0,i.useState)(null),w=b[0],Z=b[1],R=(0,i.useState)(null),S=R[0],B=R[1],A=I(),D=(0,i.useState)(!1),T=D[0],V=D[1];(0,i.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://prod.compiler.welldonestudio.io/deploy-histories?chainId=pion-1&offset=0&fetchSize=50");case 2:t=e.sent,console.log(t.data),g(t.data.reverse());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var N=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(t){var r,o,i,a,c,s,d;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),Z(t.row),e.prev=2,e.next=5,m().post("https://prod.compiler.welldonestudio.io/verification/neutron",{contractAddress:t.row.contractAddress,chainId:"pion-1"});case 5:if("1"!==(r=e.sent).data.status||!r.data.result.isVerified){e.next=27;break}return e.next=9,fetch(r.data.result.srcUrl);case 9:if(o=e.sent,console.log(o),o.ok){e.next=13;break}throw new Error("Network response was not ok");case 13:return e.next=15,o.arrayBuffer();case 15:return i=e.sent,a=new Blob([i],{type:"application/zip"}),console.log(a),c=new(E()),e.next=21,c.loadAsync(a);case 21:return s=e.sent,e.next=24,O(s);case 24:d=e.sent,console.log(d),n(d);case 27:B(r.data.result),console.log(r.data.result),V(!1),e.next=36;break;case 32:e.prev=32,e.t0=e.catch(2),console.error(e.t0),V(!1);case 36:case"end":return e.stop()}}),e,null,[[2,32]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(t){var n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.forEach((function(e,t){if(!t.dir){var r=t.async("text").then((function(e){return{name:t.name,content:e}}));n.push(r)}})),e.next=4,Promise.all(n);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var n,r,l=e.data,c=(e.setData,e.selectedData,e.setSelectedData,e.verificationResult),s=(e.setVerificationResult,e.handleRowClick);return i.createElement("div",{style:{width:"100%"}},i.createElement(y._$,{rows:l,columns:[{field:"id",headerName:"ID",width:"10",headerAlign:"center",align:"center"},{field:"chainId",headerName:"Chain ID",width:"100",headerAlign:"center",align:"center"},{field:"account",headerName:"Deployer",width:"300",headerAlign:"center",align:"center"},{field:"contractAddress",headerName:"Contract Address",width:"300",headerAlign:"center",align:"center"}],onRowClick:s,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],style:{backgroundColor:"#282c34",color:"#a9b7c6"}}),c&&i.createElement("div",null,c.isVerified?i.createElement("div",null,i.createElement("h2",null,i.createElement("span",{style:{color:"green"}},"\u2713 "),"Verification Successful"),i.createElement(u.Z,{mb:3},i.createElement("p",null,"isImmutable: ",c.isImmutable?"Yes":i.createElement(i.Fragment,null,"No ",i.createElement("span",{style:{color:"red"}},"(This is upgradable)")))),i.createElement(u.Z,{mb:3},i.createElement("h3",null,"Build & Optimize Script"),i.createElement(x,{code:"> "+(null==c?void 0:c.envBuildScript)+"\n> "+(null==c?void 0:c.envOptimizerScript)})),i.createElement(u.Z,{mb:3},i.createElement("div",null,i.createElement("div",null,t.map((function(e,t){return i.createElement("button",{type:"button",key:t,onClick:function(e){e.preventDefault(),a(t)}},e.name)}))),i.createElement("div",null,i.createElement("h3",null,null==(n=t[o])?void 0:n.name),i.createElement(x,{code:null==(r=t[o])?void 0:r.content}))))):i.createElement("div",null,i.createElement("h2",null,i.createElement("span",{style:{color:"red"}},"\u2717 "),"Verification Failed"),i.createElement("p",null,c.errMsg),i.createElement(u.Z,{mb:3},i.createElement("p",null,"isImmutable: ",c.isImmutable?"Yes":i.createElement(i.Fragment,null,"No ",i.createElement("span",{style:{color:"red"}},"(This is upgradable)")))))))};return i.createElement(p.Z,{maxWidth:"lg"},i.createElement(u.Z,{sx:{my:4}},i.createElement(f.ZP,{container:!0,spacing:2,alignItems:"center"},i.createElement(f.ZP,{item:!0},i.createElement(v.Z,{fontSize:"large"})),i.createElement(f.ZP,{item:!0},i.createElement(u.Z,{component:"h1"},i.createElement(C,{variant:"h4"},"How Verification API Works")))),i.createElement(u.Z,{mb:3},i.createElement(d.Z,{variant:"h6",gutterBottom:!0},"About"),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"The CosmWasm environment presents challenges in verifying the consistency of smart contract code. The same source code can produce different binary outputs when compiled in various build environments. To overcome this issue, we utilize the Remix IDE & WELLDONE Code to provide a standardized build environment.")),i.createElement(u.Z,{mb:3},i.createElement(d.Z,{variant:"h6",gutterBottom:!0},"Key Features"),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},i.createElement("ol",null,i.createElement("li",null,i.createElement("strong",null,"Isolated Build Environment"),": Through the Remix IDE, smart contracts are compiled and deployed in an isolated environment. During this process, information such as the build environment details, original source code, generated schema (json), and deployment results are stored."),i.createElement("li",null,i.createElement("strong",null,"Public Verification Status"),": Developers can publicly display the verification status of their smart contracts using this system."),i.createElement("li",null,i.createElement("strong",null,"Contract List and Verification Request"),": Users can request a list of contracts deployed from Remix or request verification for a specific contract through the system."),i.createElement("li",null,i.createElement("strong",null,"Verification Process"),": Upon receiving a verification request, the system compares the code id from the Remix deployment to the current on-chain code id. If they don't match, it indicates the possibility of migration from another location, and verification is deemed impossible."),i.createElement("li",null,i.createElement("strong",null,"Verification Results"),": If the verification is successful, the system returns information to the user, including the code id, URLs for the original source code and schema json, isImmutable status, build environment, and build script.")),"This system serves as a crucial tool to address the smart contract verification challenges in the CosmWasm environment, offering both developers and users a transparent and trustworthy smart contract environment.")),i.createElement(u.Z,{mb:3},i.createElement(d.Z,{variant:"h6",gutterBottom:!0},"Retrieving the Deployed Contracts"),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"You can use the following API to check if a specific contract is verifiable.",i.createElement(z,null,"curl 'https://prod.compiler.welldonestudio.io/deploy-histories/pion-1?contract=neutron1gesll6lepas7xzt22pg7r07v9vd652md82z8m2fqp5zt43rznu5sl42s74'")),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"Response Example:",i.createElement(z,null,'{\n    "chainId": "pion-1",\n    "account": "neutron1tpurcpqmd8au3waymfajxd3z5n796p5cleqjrs",\n    "codeId": "1114",\n    "contract": "neutron1gesll6lepas7xzt22pg7r07v9vd652md82z8m2fqp5zt43rznu5sl42s74",\n    "txHash": "F92BCC5C25263680F5E05B873992D2B403A0206E0FA78F4490F14ACD447626AA"\n}\n              ')),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"You can use the following API to retrieve a complete list of verifiable contracts:",i.createElement(z,null,"curl 'https://prod.compiler.welldonestudio.io/deploy-histories?chainId=pion-1&offset=0&fetchSize=50'")),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"Response Example:",i.createElement(z,null,'[\n  {\n    "id": 26,\n    "chainId": "pion-1",\n    "account": "neutron1vvkxv9dyen4a34yacc24wjgen05m9jkylp0n33",\n    "contractAddress": "neutron1qdzdy8g9tmd04kvaq952zgjlntjjayaglnk7kz9zx599a5uw67dq0gqag0"\n  },\n  ...\n]\n              '))),i.createElement(u.Z,{mb:3},i.createElement(d.Z,{variant:"h6",gutterBottom:!0},"Requesting Verification for a Specific Contract"),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"To request verification for a specific contract, use the following API:",i.createElement(z,null,'curl -X POST \'https://prod.compiler.welldonestudio.io/verification/neutron\' \n    -H \'Content-Type: application/json\' \n    -d \'{"contractAddress": "YOUR_CONTRACT_ADDRESS", "chainId": "NETWORK_INFO"}\'')),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"Response Example:",i.createElement(z,null,'{\n    "status": "1",\n    "message": "OK",\n    "result": {\n        "chainId": "pion-1",\n        "contractAddress": "neutron18pj2pxd0dthkpz6gfytc07qa0ru2nfflyh7ylk3y75nd8d8erersfc4d2n",\n        "isVerified": true,\n        "onchainCodeId": 1542,\n        "historyCodeId": 1542,\n        "isImmutable": false,\n        "errMsg": null,\n        "envOsMachine": "x86_64",\n        "envOsName": "Ubuntu",\n        "envOsVersion": "22.04.1",\n        "envRustcVersion": "1.68.0",\n        "envCargoWasmVersion": "0.4.1",\n        "envBuildScript": "cargo wasm build",\n        "envOptimizerScript": "docker run --rm -v \\"$(pwd)\\":/code --mount type=volume,source=\\"$(basename \\"$(pwd)\\")_cache\\",target=/code/target --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry cosmwasm/rust-optimizer:0.12.11",\n        "srcUrl": "https://wds-code-build.s3.us-east80976900/1695280976900.zip",\n        "schemaUrl": "https://wds-code-build.s3.us-east280976900/schema.zip"\n    }\n}\n              ')),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"Explanation of Key Response Fields:",i.createElement("ul",null,i.createElement("li",null,i.createElement("strong",null,i.createElement("code",null,"isVerified")),": Indicates the verification status of the contract."),i.createElement("li",null,i.createElement("strong",null,i.createElement("code",null,"onchainCodeId")),": The current on-chain code ID for the contract."),i.createElement("li",null,i.createElement("strong",null,i.createElement("code",null,"historyCodeId")),": Represents the code ID from when it was previously deployed on Remix IDE. If it differs from ",i.createElement("strong",null,i.createElement("code",null,"onchainCodeId")),", it might have been migrated from a different build environment, and in such cases, verification is not supported."),i.createElement("li",null,i.createElement("strong",null,i.createElement("code",null,"isImmutable")),": Indicates the immutability status of the contract."),i.createElement("li",null,i.createElement("strong",null,i.createElement("code",null,"envOsMachine"))," ~ ",i.createElement("strong",null,i.createElement("code",null,"envCargoWasmVersion")),": Detailed information about the build environment."),i.createElement("li",null,i.createElement("strong",null,i.createElement("code",null,"srcUrl")),": The URL for the original source code."),i.createElement("li",null,i.createElement("strong",null,i.createElement("code",null,"schemaUrl")),": The URL for the schema file.")))),i.createElement(u.Z,{mb:3},i.createElement(d.Z,{variant:"h6",gutterBottom:!0},"Usage Example"),i.createElement(d.Z,{variant:"body1"},i.createElement("ul",null,i.createElement("li",{style:{marginBottom:"10px",fontSize:"16px",lineHeight:"1.5"}},"Refer to the ",i.createElement("a",{href:"https://docs.welldonestudio.io/code/deploy-and-run/neutron",target:"_blank"},"Manual")," to write and compile your contract, then proceed with the deployment. The process of contract creation and compilation can be complex, so handle it with care."),i.createElement("li",{style:{marginBottom:"10px",fontSize:"16px",lineHeight:"1.5"}},"Once the contract is compiled and deployed, it will automatically be stored in the database and will appear on this page's list."),i.createElement("li",{style:{marginBottom:"10px",fontSize:"16px",lineHeight:"1.5"}},"By clicking on a specific contract address in the table below, you can verify the contract by comparing the code id and checksum stored in the DB with the code id and checksum on-chain. This step is crucial for confirming the integrity of the contract."),i.createElement("li",{style:{marginBottom:"10px",fontSize:"16px",lineHeight:"1.5"}},"While we do provide the verification feature directly, a key point is that we offer information about the Rust build environment to allow anyone to verify contracts. Given that Rust's build results are non-deterministic when compiling into wasm, the provision of this build environment information becomes especially important. This information will allow developers to definitively ascertain if the contract is functioning as expected.")))),i.createElement(u.Z,{mb:3},i.createElement(P,{data:h,setData:g,selectedData:w,setSelectedData:Z,verificationResult:S,setVerificationResult:B,handleRowClick:N}))),T&&i.createElement("div",{className:A.overlay},i.createElement("div",{className:A.loadingMessage},i.createElement(k.Z,{color:"inherit"}),i.createElement("p",null,"Verifying..."))))},S=n(91262),B=["components"],A={sidebar_position:0,title:"Neutron-CosmWasm",description:"Verification API for CosmWasm",keywords:["remix ide","code verification","smart contracts","verification api","cosmwasm"]},D=void 0,T={unversionedId:"code/verification-api/cosmwasm",id:"code/verification-api/cosmwasm",title:"Neutron-CosmWasm",description:"Verification API for CosmWasm",source:"@site/docs/code/verification-api/cosmwasm.mdx",sourceDirName:"code/verification-api",slug:"/code/verification-api/cosmwasm",permalink:"/ko/code/verification-api/cosmwasm",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/verification-api/cosmwasm.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Neutron-CosmWasm",description:"Verification API for CosmWasm",keywords:["remix ide","code verification","smart contracts","verification api","cosmwasm"]},sidebar:"tutorialSidebar",previous:{title:"Verification API",permalink:"/ko/code/verification-api/"},next:{title:"Deploy and Run",permalink:"/ko/code/deploy-and-run"}},V={},N=[],O={toc:N};function P(e){var t=e.components,n=(0,o.Z)(e,B);return(0,a.kt)("wrapper",(0,r.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(S.Z,{mdxType:"BrowserOnly"},(function(){return(0,a.kt)(R,{mdxType:"CosmWasm"})})))}P.isMDXComponent=!0}}]);