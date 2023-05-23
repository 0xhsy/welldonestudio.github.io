/*! For license information please see adeb24f5.82b1941f.js.LICENSE.txt */
"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[615],{87054:function(e,t,o){o.d(t,{Z:function(){return E}});var a=o(80102),r=o(83117),i=o(67294),n=o(93680),l=o(94780),s=o(41796),d=o(50522),c=o(36622),u=o(78884),m=o(81719),p=o(1588),g=o(34867);function f(e){return(0,g.Z)("MuiToggleButton",e)}var h=(0,p.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),w=o(85893);const b=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],v=(0,m.ZP)(d.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`size${(0,c.Z)(o.size)}`]]}})((({theme:e,ownerState:t})=>{let o,a="standard"===t.color?e.palette.text.primary:e.palette[t.color].main;return e.vars&&(a="standard"===t.color?e.vars.palette.text.primary:e.vars.palette[t.color].main,o="standard"===t.color?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),(0,r.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${h.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}`]:{color:a,backgroundColor:e.vars?`rgba(${o} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(a,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${o} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(a,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${o} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(a,e.palette.action.selectedOpacity)}}}},"small"===t.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===t.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}));var E=i.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiToggleButton"}),{children:i,className:s,color:d="standard",disabled:m=!1,disableFocusRipple:p=!1,fullWidth:g=!1,onChange:h,onClick:E,selected:y,size:W="medium",value:N}=o,_=(0,a.Z)(o,b),O=(0,r.Z)({},o,{color:d,disabled:m,disableFocusRipple:p,fullWidth:g,size:W}),L=(e=>{const{classes:t,fullWidth:o,selected:a,disabled:r,size:i,color:n}=e,s={root:["root",a&&"selected",r&&"disabled",o&&"fullWidth",`size${(0,c.Z)(i)}`,n]};return(0,l.Z)(s,f,t)})(O);return(0,w.jsx)(v,(0,r.Z)({className:(0,n.Z)(L.root,s),disabled:m,focusRipple:!p,ref:t,onClick:e=>{E&&(E(e,N),e.defaultPrevented)||h&&h(e,N)},onChange:h,value:N,ownerState:O,"aria-pressed":y},_,{children:i}))}))},85390:function(e,t,o){o.d(t,{Z:function(){return v}});var a=o(80102),r=o(83117),i=o(67294),n=(o(59864),o(93680)),l=o(94780),s=o(81719),d=o(78884),c=o(36622);function u(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var m=o(1588),p=o(34867);function g(e){return(0,p.Z)("MuiToggleButtonGroup",e)}var f=(0,m.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),h=o(85893);const w=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],b=(0,s.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${f.grouped}`]:t.grouped},{[`& .${f.grouped}`]:t[`grouped${(0,c.Z)(o.orientation)}`]},t.root,"vertical"===o.orientation&&t.vertical,o.fullWidth&&t.fullWidth]}})((({ownerState:e,theme:t})=>(0,r.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${f.grouped}`]:(0,r.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${f.selected} + .${f.grouped}.${f.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${f.selected} + .${f.grouped}.${f.selected}`]:{borderTop:0,marginTop:0}})})));var v=i.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:s,className:m,color:p="standard",disabled:f=!1,exclusive:v=!1,fullWidth:E=!1,onChange:y,orientation:W="horizontal",size:N="medium",value:_}=o,O=(0,a.Z)(o,w),L=(0,r.Z)({},o,{disabled:f,fullWidth:E,orientation:W,size:N}),S=(e=>{const{classes:t,orientation:o,fullWidth:a,disabled:r}=e,i={root:["root","vertical"===o&&"vertical",a&&"fullWidth"],grouped:["grouped",`grouped${(0,c.Z)(o)}`,r&&"disabled"]};return(0,l.Z)(i,g,t)})(L),k=(e,t)=>{if(!y)return;const o=_&&_.indexOf(t);let a;_&&o>=0?(a=_.slice(),a.splice(o,1)):a=_?_.concat(t):[t],y(e,a)},x=(e,t)=>{y&&y(e,_===t?null:t)};return(0,h.jsx)(b,(0,r.Z)({role:"group",className:(0,n.Z)(S.root,m),ref:t,ownerState:L},O,{children:i.Children.map(s,(e=>i.isValidElement(e)?i.cloneElement(e,{className:(0,n.Z)(S.grouped,e.props.className),onChange:v?x:k,selected:void 0===e.props.selected?u(e.props.value,_):e.props.selected,size:e.props.size||N,fullWidth:E,color:e.props.color||p,disabled:e.props.disabled||f}):null))}))}))},80311:function(e,t,o){var a,r=o(67294),i=["title","titleId"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}t.Z=function(e){var t=e.title,o=e.titleId,s=l(e,i);return r.createElement("svg",n({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},s),t?r.createElement("title",{id:o},t):null,a||(a=r.createElement("path",{d:"M21.885 20.667c0 4.783-3.696 8.666-8.276 8.666-4.579 0-8.275-3.883-8.275-8.666S9.03 12 13.609 12c4.58 0 8.276 3.884 8.276 8.667Zm9.067 0c0 4.496-1.858 8.15-4.138 8.15s-4.138-3.654-4.138-8.15 1.858-8.15 4.138-8.15 4.138 3.635 4.138 8.15Zm3.715 0c0 4.036-.644 7.308-1.453 7.308-.81 0-1.453-3.272-1.453-7.308 0-4.037.644-7.309 1.453-7.309.81 0 1.453 3.272 1.453 7.309Z",fill:"#fff"})))}},79282:function(e,t,o){var a,r=o(67294),i=["title","titleId"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}t.Z=function(e){var t=e.title,o=e.titleId,s=l(e,i);return r.createElement("svg",n({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},s),t?r.createElement("title",{id:o},t):null,a||(a=r.createElement("path",{d:"M13.647 32.918c11.57 0 17.9-9.588 17.9-17.9 0-.27-.006-.545-.018-.814a12.775 12.775 0 0 0 3.138-3.257c-1.147.51-2.365.843-3.611.988a6.326 6.326 0 0 0 2.766-3.48 12.647 12.647 0 0 1-3.994 1.527 6.3 6.3 0 0 0-10.725 5.737A17.87 17.87 0 0 1 6.138 9.15a6.299 6.299 0 0 0 1.946 8.396 6.3 6.3 0 0 1-2.85-.785v.078a6.289 6.289 0 0 0 5.048 6.17 6.254 6.254 0 0 1-2.839.107 6.304 6.304 0 0 0 5.875 4.373A12.618 12.618 0 0 1 4 30.092a17.85 17.85 0 0 0 9.647 2.826Z",fill:"#fff"})))}},91262:function(e,t,o){o.d(t,{Z:function(){return i}});var a=o(67294),r=o(72389);function i(e){var t=e.children,o=e.fallback;return(0,r.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):null!=o?o:null}},18811:function(e,t,o){o.r(t),o.d(t,{default:function(){return S}});var a=o(67294),r=o(81566),i={container:"container_NSp9","section-title":"section-title_J41b","section-contents":"section-contents_grTT","intro-img":"intro-img_NyPZ",roadmap:"roadmap_VBkH","brand-img":"brand-img_r9jG","news-title":"news-title__qtQ","news-icons":"news-icons_ewIb","news-button":"news-button_qpHM",members:"members_NQpu","members-1":"members-1_eaRY","members-2":"members-2_AX0w"},n="card_OPk7",l="card1_yGIo",s="card2_U45V",d="card3_v7FC",c="thumb_OUyk",u="card__caption_UHtj",m="card__snippet_frD2",p="card__title_ldfX",g="card__button_uCN5",f=o(86010);function h(e){return a.createElement("div",{className:e.wide?e.width>768?(0,f.Z)(s,n):(0,f.Z)(d,n):(0,f.Z)(l,n)},a.createElement("div",{className:c,style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.16) 44.79%, rgba(0, 0, 0, 0.64) 100%, rgba(0, 0, 0, 0.75) 100%), url("+e.imageUrl+") no-repeat center",backgroundSize:"cover"}}),a.createElement("figcaption",{className:u},a.createElement("h2",{className:p},e.title),e.description?a.createElement(a.Fragment,null,a.createElement("p",{className:m},e.description)):a.createElement(a.Fragment,null),a.createElement("a",{className:g,target:"_blank",href:e.url},"Read more")))}var w=o(87054),b=o(85390),v=[{title:"NEAR Migration",description:"We have an update to our tutorial: How to migrate the smart contract in @NEARProtocol written by @suji_forcrypto",url:"https://twitter.com/WelldoneStudio_/status/1610155387877199873",imageUrl:"https://pbs.twimg.com/media/FlhqddEaUAApfbd?format=jpg&name=medium",wide:!1},{title:"WELLDONE Code",description:"The first and best developer tool for multi-chain voyagers, WELLDONE Code, has just made its OFFICIAL debut in Remix IDE!",url:"https://twitter.com/WelldoneStudio_/status/1612375978868895744",imageUrl:"https://pbs.twimg.com/media/FmBPN6faEAEeDoc?format=jpg&name=large",wide:!1},{title:"CELESTIA launching",description:"WELLDONE Wallet, the first browser extension wallet to officially support Celestia, now joins the modular voyage",url:"https://twitter.com/WelldoneStudio_/status/1604697099521531904",imageUrl:"https://pbs.twimg.com/media/FkUHU7YUEAA9PX6?format=jpg&name=medium",wide:!1},{title:"JUNO launching",description:"We are excited to announce that WELLDONEWallet now joins JUNO's voyage!",url:"https://twitter.com/WelldoneStudio_/status/1602540185194856448",imageUrl:"https://pbs.twimg.com/media/Fj1byWAVUAAW3aw?format=jpg&name=medium",wide:!1},{title:"WELLDONE Code JUNO",description:"We're excited to announce that our WELLDONE Code now allows you to deploy and interact with smart contracts on the @JunoNetwork using Remix IDE.",url:"https://twitter.com/WelldoneStudio_/status/1635584704572424194",imageUrl:"https://pbs.twimg.com/media/FrLDl9VaQAAo574?format=jpg&name=medium",wide:!1},{title:"Ahoy, Web3 voyagers!",description:"We're thrilled to announce our support for APTOS in WELLDONE Wallet",url:"https://twitter.com/WelldoneStudio_/status/1640993981575352323",imageUrl:"https://pbs.twimg.com/media/FsX6PdvaIAEOS33?format=jpg&name=medium",wide:!1},{title:"WELLDONE Code into the NEAR developer docs",description:"has been officially integrated into the NEAR Protocol developer documentation",url:"https://twitter.com/WelldoneStudio_/status/1638078237120278531",imageUrl:"https://pbs.twimg.com/media/FrufYCaakAcSBr2?format=jpg&name=medium",wide:!0},{title:"WELLDONE Code into the Aptos official docs",description:"if you are a developer looking for a user-friendly way to develop on APTOS, you can try it with Move language on WELLDONE Code Remix IDE plugin.",url:"https://twitter.com/WelldoneStudio_/status/1640994335306158080",imageUrl:"https://pbs.twimg.com/media/FsX7fePakAAArwZ?format=jpg&name=medium",wide:!0},{title:"\ud83d\ude80 What is @WelldoneStudio_",description:"\ud83d\ude80 What is @WelldoneStudio_, supporting the developer ecosystem at @dsrvlabs, doing in the @SuiNetwork ecosystem? Let's dive in! (1/5)",url:"https://twitter.com/WelldoneStudio_/status/1646491918673801216",imageUrl:"https://pbs.twimg.com/media/FtmDaP0aYAAhisf?format=jpg&name=large",wide:!1},{title:"\ud83c\udf8a Exciting news! @WelldoneStudio_",description:"\ud83c\udf8a Exciting news! @WelldoneStudio_ has been awarded a grant from @SuiNetwork following a rigorous milestone review.",url:"https://twitter.com/WelldoneStudio_/status/1653204149922848768",imageUrl:"https://pbs.twimg.com/media/FvFRpuMaIAE9GR8?format=jpg&name=large",wide:!1},{title:"\ud83c\udf70 10% of all packages on #Sui mainnet were deployed",description:"\ud83c\udf70 10% of all packages on #Sui mainnet were deployed via #WelldoneCode! That's 328 of 3,353 packages since launch.",url:"https://twitter.com/WelldoneStudio_/status/1656957610594304000",imageUrl:"https://pbs.twimg.com/media/Fv6xmveaMAAmb4j?format=jpg&name=large",wide:!1},{title:"Aptos Seoul Hack",description:"@HyunSooyoung, Lead Software Engineer of @WelldoneStudio_ by @dsrvlabs, introduced Remix IDE Plugin for @Aptos_Network",url:"https://twitter.com/WelldoneStudio_/status/1620663212755795968",imageUrl:"https://pbs.twimg.com/media/Fn2-8b2aMAAdWB4?format=jpg&name=large",wide:!1},{title:"NEAR Blockchain Foundation Week",description:"@suji_forcrypto's presentation at @Xangle_official Blockchain Foundation Week.",url:"https://twitter.com/WelldoneStudio_/status/1613101799514439682",imageUrl:"https://pbs.twimg.com/media/FmLjZnSaMAEqPga?format=jpg&name=large",wide:!0},{title:"Xin ch\xe0o, Voyagers!",description:"Kicking off with our WELLDONE Wallet presentation, look forward to new dev tools next month! Stay tuned!",url:"https://twitter.com/WelldoneStudio_/status/1637375082300358657",imageUrl:"https://pbs.twimg.com/media/FrkdxHtXwAAW_il?format=jpg&name=large",wide:!0},{title:"\ud83c\udded\ud83c\uddf0 We Showcased our contributions to @SuiNetwork",description:"\ud83c\udf89 Fantastic session at the #SuiBuilderHouse event in Hong Kong today!",url:"https://twitter.com/WelldoneStudio_/status/1646826264349790212",imageUrl:"https://pbs.twimg.com/media/FtqzfhuaMAA4HoH?format=jpg&name=large",wide:!0}],E=[{img:"https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Dohyoung-Lim_Head-of-Contribution.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2022/05/18.-Sooyoung_Hyun-747x1120.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2022/08/Yoonsoo_Jang-747x1120.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Hyunsun-Yoo_Software-Engineer.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Kwanhyung-Lee_UI_UX-Designer.jpg"},{img:"https://avatars.githubusercontent.com/u/81923229?v=4",link:"https://github.com/Nahee-Park"},{img:"https://avatars.githubusercontent.com/u/70956926?v=4",link:"https://github.com/Yoon-Suji"}],y=o(91262);function W(){return a.createElement("section",{className:"introduction"},a.createElement("div",{className:i["brand-img"]}),a.createElement("p",{className:i["section-title"]},"WELCOME to WELLDONE!"),a.createElement("p",{className:i["section-contents"]},"WELLDONE Studio is a subteam of DSRV that specializes in creating tools for web3 developers. We offer a suite of products that integrate disparate web3 development experiences to assist builders in developing more naturally and simply. We goal is to make the Web3 experience more familiar for developers and to help them realize their full potential."),a.createElement("p",{className:i["section-contents"]},"The products offered by WELLDONE Studio include WELLDONE Wallet, WELLDONE AddChain, and WELLDONE Code. WELLDONE Wallet allows users to create an account in a multi-chain environment with a single click and manage assets across any network. AddChain allows users to simply add a network, and WELLDONE Code allows users to easily deploy and execute contracts to multi-networks in a Remix IDE environment. Our team plans to support more networks in the future and to provide a standardized and integrated multi-chain development environment for developers."))}function N(){var e=a.useState("code"),t=e[0],o=e[1];return a.createElement("section",{className:"roadmap"},a.createElement("p",{className:i["section-title"]},"Our Roadmap"),a.createElement(b.Z,{value:t,exclusive:!0,onChange:function(e,a){o(a||t)},"aria-label":"roadmap",className:i["button-groups"],sx:{gap:"8px",width:"100%",paddingBottom:"32px","& .MuiToggleButton-root":{"&.Mui-selected":{border:"2px solid #FFFFFF",borderRadius:"2px",color:"white"}},"& .MuiToggleButton-root:hover":{background:"rgba(255, 255, 255, 0.08);"},"& .MuiToggleButtonGroup-grouped":{width:"50%",height:"64px",fontFamily:"SUIT",fontWeight:"800",fontSize:"1.5rem",lineHeight:"150%",color:"white"}}},a.createElement(w.Z,{value:"code","aria-label":"left aligned",className:i["code-buttons"]},"CODE"),a.createElement(w.Z,{value:"wallet","aria-label":"centered",className:i["wallet-buttons"]},"WALLET")),"code"===t?a.createElement("div",{className:i.roadmap,style:{backgroundImage:"url('/img/aboutus_roadmap_code.jpg')"}}):a.createElement("div",{className:i.roadmap,style:{backgroundImage:"url('/img/aboutus_roadmap_wallet.jpg')"}}))}function _(){var e=(0,a.useState)(window.innerWidth),t=e[0],r=e[1],n=o(79282).Z,l=o(80311).Z;return(0,a.useEffect)((function(){var e=function(){r(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),a.createElement("section",{className:"news",style:{display:"flex",flexDirection:"column",position:"relative"}},a.createElement("div",{className:i["news-title"]},a.createElement("p",{className:i["section-title"]},"News"),a.createElement("div",{className:i["news-icons"]},a.createElement("a",{className:i["news-button"],target:"_blank",href:"https://twitter.com/WelldoneStudio_"},a.createElement(n,{role:"img"})),a.createElement("a",{className:i["news-button"],target:"_blank",href:"https://dsrv.medium.com/"},a.createElement(l,{role:"img"})))),a.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"}},v.map((function(e,o){return a.createElement(h,{key:o,title:e.title,url:e.url,imageUrl:e.imageUrl,description:e.description,width:t,wide:e.wide})}))))}function O(){return a.createElement("section",{className:"brand"},a.createElement("p",{className:i["section-title"]},"Our Brand"),a.createElement("div",{className:i["intro-img"]}),a.createElement("p",{className:i["section-contents"]},"WELLDONE Studio is a leading developer of blockchain tools and solutions. Our flagship product, WELLDONE Code, is a web-based IDE that supports multiple blockchain protocols including Ethereum, NEAR, Celo, and Klaytn. The tool is designed to streamline the building process for developers, providing them with a single platform for all their web3 building needs. In addition to WELLDONE Code, we also offer WELLDONE Wallet, a multi-chain wallet that supports popular protocols such as Ethereum, Celo, Klaytn, and NEAR. The wallet is designed to provide users with a seamless and secure way to manage their digital assets across multiple blockchain networks. Our mission is to empower developers and users alike to easily navigate and build on multiple blockchain protocols, thus enabling them to fully realize the potential of web3 technology. With our cutting-edge tools and solutions, we strive to make the blockchain ecosystem more accessible and user-friendly."))}function L(){return a.createElement("section",{className:"members"},a.createElement("p",{className:i["section-title"]},"Our Members"),a.createElement("div",{className:i.members},E.map((function(e,t){var o=e.img,r=e.link;return a.createElement("a",{key:t,className:i["members-1"],target:"_blank",href:r||"https://www.dsrvlabs.com/about/#member"},a.createElement("img",{src:o,style:{width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(100%)"}}))}))))}function S(){return a.createElement(r.Z,{title:"WELLDONE Studio - Contribution List",description:"WELLDONE Studio Contribution List"},a.createElement("main",{className:i.container},a.createElement(W,null),a.createElement(N,null),a.createElement(y.Z,null,(function(){return a.createElement(_,null)})),a.createElement(O,null),a.createElement(L,null)))}},86010:function(e,t,o){function a(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=a(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}o.d(t,{Z:function(){return r}})},75251:function(e,t,o){var a=o(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var a,i={},d=null,c=null;for(a in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,a)&&!s.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:d,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},85893:function(e,t,o){e.exports=o(75251)},44415:function(e,t,o){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,{Z:function(){return a}})}}]);