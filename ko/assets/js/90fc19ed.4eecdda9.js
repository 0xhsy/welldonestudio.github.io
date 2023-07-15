/*! For license information please see 90fc19ed.4eecdda9.js.LICENSE.txt */
"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[6779],{3905:function(e,o,t){t.d(o,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=s(e.components);return r.createElement(c.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},p=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,i(i({ref:o},u),{},{components:t})):r.createElement(g,i({ref:o},u))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9144:function(e,o,t){var r=t(80102),n=t(83117),a=t(67294),i=t(95408),l=t(98700),c=t(39707),s=t(59766),u=t(81719),d=t(78884),p=t(85893);const m=["component","direction","spacing","divider","children"];function g(e,o){const t=a.Children.toArray(e).filter(Boolean);return t.reduce(((e,r,n)=>(e.push(r),n<t.length-1&&e.push(a.cloneElement(o,{key:`separator-${n}`})),e)),[])}const f=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>[o.root]})((({ownerState:e,theme:o})=>{let t=(0,n.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:o},(0,i.P$)({values:e.direction,breakpoints:o.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,l.hB)(o),n=Object.keys(o.breakpoints.values).reduce(((o,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(o[t]=!0),o)),{}),a=(0,i.P$)({values:e.direction,base:n}),c=(0,i.P$)({values:e.spacing,base:n});"object"==typeof a&&Object.keys(a).forEach(((e,o,t)=>{if(!a[e]){const r=o>0?a[t[o-1]]:"column";a[e]=r}}));const u=(o,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${n=t?a[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,l.NA)(r,o)}};var n};t=(0,s.Z)(t,(0,i.k9)({theme:o},c,u))}return t=(0,i.dt)(o.breakpoints,t),t})),v=a.forwardRef((function(e,o){const t=(0,d.Z)({props:e,name:"MuiStack"}),a=(0,c.Z)(t),{component:i="div",direction:l="column",spacing:s=0,divider:u,children:v}=a,b=(0,r.Z)(a,m),h={direction:l,spacing:s};return(0,p.jsx)(f,(0,n.Z)({as:i,ownerState:h,ref:o},b,{children:u?g(v,u):v}))}));o.Z=v},81645:function(e,o,t){t.d(o,{Z:function(){return h}});var r=t(83117),n=t(80102),a=t(67294),i=t(93680),l=t(94780),c=t(36622),s=t(78884),u=t(81719),d=t(1588),p=t(34867);function m(e){return(0,p.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var g=t(85893);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,"inherit"!==t.color&&o[`color${(0,c.Z)(t.color)}`],o[`fontSize${(0,c.Z)(t.fontSize)}`]]}})((({theme:e,ownerState:o})=>{var t,r,n,a,i,l,c,s,u,d,p,m,g,f,v,b,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=e.transitions)||null==(r=t.create)?void 0:r.call(t,"fill",{duration:null==(n=e.transitions)||null==(a=n.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(i=e.typography)||null==(l=i.pxToRem)?void 0:l.call(i,20))||"1.25rem",medium:(null==(c=e.typography)||null==(s=c.pxToRem)?void 0:s.call(c,24))||"1.5rem",large:(null==(u=e.typography)||null==(d=u.pxToRem)?void 0:d.call(u,35))||"2.1875rem"}[o.fontSize],color:null!=(p=null==(m=(e.vars||e).palette)||null==(g=m[o.color])?void 0:g.main)?p:{action:null==(f=(e.vars||e).palette)||null==(v=f.action)?void 0:v.active,disabled:null==(b=(e.vars||e).palette)||null==(h=b.action)?void 0:h.disabled,inherit:void 0}[o.color]}})),b=a.forwardRef((function(e,o){const t=(0,s.Z)({props:e,name:"MuiSvgIcon"}),{children:a,className:u,color:d="inherit",component:p="svg",fontSize:b="medium",htmlColor:h,inheritViewBox:y=!1,titleAccess:w,viewBox:C="0 0 24 24"}=t,E=(0,n.Z)(t,f),S=(0,r.Z)({},t,{color:d,component:p,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:C}),x={};y||(x.viewBox=C);const k=(e=>{const{color:o,fontSize:t,classes:r}=e,n={root:["root","inherit"!==o&&`color${(0,c.Z)(o)}`,`fontSize${(0,c.Z)(t)}`]};return(0,l.Z)(n,m,r)})(S);return(0,g.jsxs)(v,(0,r.Z)({as:p,className:(0,i.Z)(k.root,u),focusable:"false",color:h,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:o},x,E,{ownerState:S,children:[a,w?(0,g.jsx)("title",{children:w}):null]}))}));b.muiName="SvgIcon";var h=b},54235:function(e,o,t){t.d(o,{Z:function(){return l}});var r=t(83117),n=t(67294),a=t(81645),i=t(85893);function l(e,o){function t(t,n){return(0,i.jsx)(a.Z,(0,r.Z)({"data-testid":`${o}Icon`,ref:n},t,{children:e}))}return t.muiName=a.Z.muiName,n.memo(n.forwardRef(t))}},2286:function(e,o,t){t.r(o),t.d(o,{assets:function(){return X},contentTitle:function(){return q},default:function(){return Y},frontMatter:function(){return _},metadata:function(){return K},toc:function(){return H}});var r=t(83117),n=t(80102),a=t(67294),i=t(3905),l=t(93680),c=t(94780),s=t(41796),u=t(54235),d=t(85893),p=(0,u.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),m=t(84771),g=t(36622),f=t(50522),v=t(78884),b=t(81719),h=t(1588),y=t(34867);function w(e){return(0,y.Z)("MuiChip",e)}var C=(0,h.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]);const E=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],S=(0,b.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{color:r,iconColor:n,clickable:a,onDelete:i,size:l,variant:c}=t;return[{[`& .${C.avatar}`]:o.avatar},{[`& .${C.avatar}`]:o[`avatar${(0,g.Z)(l)}`]},{[`& .${C.avatar}`]:o[`avatarColor${(0,g.Z)(r)}`]},{[`& .${C.icon}`]:o.icon},{[`& .${C.icon}`]:o[`icon${(0,g.Z)(l)}`]},{[`& .${C.icon}`]:o[`iconColor${(0,g.Z)(n)}`]},{[`& .${C.deleteIcon}`]:o.deleteIcon},{[`& .${C.deleteIcon}`]:o[`deleteIcon${(0,g.Z)(l)}`]},{[`& .${C.deleteIcon}`]:o[`deleteIconColor${(0,g.Z)(r)}`]},{[`& .${C.deleteIcon}`]:o[`deleteIcon${(0,g.Z)(c)}Color${(0,g.Z)(r)}`]},o.root,o[`size${(0,g.Z)(l)}`],o[`color${(0,g.Z)(r)}`],a&&o.clickable,a&&"default"!==r&&o[`clickableColor${(0,g.Z)(r)})`],i&&o.deletable,i&&"default"!==r&&o[`deletableColor${(0,g.Z)(r)}`],o[c],o[`${c}${(0,g.Z)(r)}`]]}})((({theme:e,ownerState:o})=>{const t=(0,s.Fq)(e.palette.text.primary,.26),n="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,r.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${C.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:n,fontSize:e.typography.pxToRem(12)},[`& .${C.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${C.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${C.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${C.icon}`]:(0,r.Z)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,r.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:n},"default"!==o.color&&{color:"inherit"})),[`& .${C.deleteIcon}`]:(0,r.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:t,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,s.Fq)(t,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:e.vars?`rgba(${e.vars.palette[o.color].contrastTextChannel} / 0.7)`:(0,s.Fq)(e.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(e.vars||e).palette[o.color].main,color:(e.vars||e).palette[o.color].contrastText},o.onDelete&&{[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})}),(({theme:e,ownerState:o})=>(0,r.Z)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},o.clickable&&"default"!==o.color&&{[`&:hover, &.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})),(({theme:e,ownerState:o})=>(0,r.Z)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${C.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${C.avatar}`]:{marginLeft:4},[`& .${C.avatarSmall}`]:{marginLeft:2},[`& .${C.icon}`]:{marginLeft:4},[`& .${C.iconSmall}`]:{marginLeft:2},[`& .${C.deleteIcon}`]:{marginRight:5},[`& .${C.deleteIconSmall}`]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(e.vars||e).palette[o.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:(0,s.Fq)(e.palette[o.color].main,.7)}`,[`&.${C.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity)},[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,s.Fq)(e.palette[o.color].main,e.palette.action.focusOpacity)},[`& .${C.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:(0,s.Fq)(e.palette[o.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].main}}}))),x=(0,b.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:t}=e,{size:r}=t;return[o.label,o[`label${(0,g.Z)(r)}`]]}})((({ownerState:e})=>(0,r.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===e.size&&{paddingLeft:8,paddingRight:8})));function k(e){return"Backspace"===e.key||"Delete"===e.key}var Z=a.forwardRef((function(e,o){const t=(0,v.Z)({props:e,name:"MuiChip"}),{avatar:i,className:s,clickable:u,color:b="default",component:h,deleteIcon:y,disabled:C=!1,icon:Z,label:O,onClick:$,onDelete:L,onKeyDown:I,onKeyUp:D,size:N="medium",variant:R="filled"}=t,P=(0,n.Z)(t,E),W=a.useRef(null),M=(0,m.Z)(W,o),j=e=>{e.stopPropagation(),L&&L(e)},A=!(!1===u||!$)||u,T=A||L?f.Z:h||"div",z=(0,r.Z)({},t,{component:T,disabled:C,size:N,color:b,iconColor:a.isValidElement(Z)&&Z.props.color||b,onDelete:!!L,clickable:A,variant:R}),U=(e=>{const{classes:o,disabled:t,size:r,color:n,iconColor:a,onDelete:i,clickable:l,variant:s}=e,u={root:["root",s,t&&"disabled",`size${(0,g.Z)(r)}`,`color${(0,g.Z)(n)}`,l&&"clickable",l&&`clickableColor${(0,g.Z)(n)}`,i&&"deletable",i&&`deletableColor${(0,g.Z)(n)}`,`${s}${(0,g.Z)(n)}`],label:["label",`label${(0,g.Z)(r)}`],avatar:["avatar",`avatar${(0,g.Z)(r)}`,`avatarColor${(0,g.Z)(n)}`],icon:["icon",`icon${(0,g.Z)(r)}`,`iconColor${(0,g.Z)(a)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,g.Z)(r)}`,`deleteIconColor${(0,g.Z)(n)}`,`deleteIcon${(0,g.Z)(s)}Color${(0,g.Z)(n)}`]};return(0,c.Z)(u,w,o)})(z),V=T===f.Z?(0,r.Z)({component:h||"div",focusVisibleClassName:U.focusVisible},L&&{disableRipple:!0}):{};let F=null;L&&(F=y&&a.isValidElement(y)?a.cloneElement(y,{className:(0,l.Z)(y.props.className,U.deleteIcon),onClick:j}):(0,d.jsx)(p,{className:(0,l.Z)(U.deleteIcon),onClick:j}));let B=null;i&&a.isValidElement(i)&&(B=a.cloneElement(i,{className:(0,l.Z)(U.avatar,i.props.className)}));let _=null;return Z&&a.isValidElement(Z)&&(_=a.cloneElement(Z,{className:(0,l.Z)(U.icon,Z.props.className)})),(0,d.jsxs)(S,(0,r.Z)({as:T,className:(0,l.Z)(U.root,s),disabled:!(!A||!C)||void 0,onClick:$,onKeyDown:e=>{e.currentTarget===e.target&&k(e)&&e.preventDefault(),I&&I(e)},onKeyUp:e=>{e.currentTarget===e.target&&(L&&k(e)?L(e):"Escape"===e.key&&W.current&&W.current.blur()),D&&D(e)},ref:M,ownerState:z},V,P,{children:[B||_,(0,d.jsx)(x,{className:(0,l.Z)(U.label),ownerState:z,children:O}),F]}))})),O=t(79072),$=t(49837);function L(e){return(0,y.Z)("MuiCardMedia",e)}(0,h.Z)("MuiCardMedia",["root","media","img"]);const I=["children","className","component","image","src","style"],D=(0,b.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:r,isImageComponent:n}=t;return[o.root,r&&o.media,n&&o.img]}})((({ownerState:e})=>(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),N=["video","audio","picture","iframe","img"],R=["picture","img"];var P=a.forwardRef((function(e,o){const t=(0,v.Z)({props:e,name:"MuiCardMedia"}),{children:a,className:i,component:s="div",image:u,src:p,style:m}=t,g=(0,n.Z)(t,I),f=-1!==N.indexOf(s),b=!f&&u?(0,r.Z)({backgroundImage:`url("${u}")`},m):m,h=(0,r.Z)({},t,{component:s,isMediaComponent:f,isImageComponent:-1!==R.indexOf(s)}),y=(e=>{const{classes:o,isMediaComponent:t,isImageComponent:r}=e,n={root:["root",t&&"media",r&&"img"]};return(0,c.Z)(n,L,o)})(h);return(0,d.jsx)(D,(0,r.Z)({className:(0,l.Z)(y.root,i),as:s,role:!f&&u?"img":void 0,ref:o,style:b,ownerState:h,src:f?u||p:void 0},g,{children:a}))})),W=t(91359),M=t(9144),j=t(29630),A=t(39960),T=[{title:"WELLDONE Code(1) \u2014 Remix IDE plugin for Multichain",description:"Introducing WELLDONE Code (Remix IDE Plugin) to NEAR Protocol Medium.",imgUrl:"/img/contrubution/near/code.png",tags:["near","welldonecode","remix","article"],url:"https://medium.com/nearprotocol/welldone-code-1-remix-ide-plugin-for-multichain-4b5228419ce5"},{title:"WELLDONE Code(2) \u2014 Don\u2019t trust, verify.",description:"Introducing WELLDONE Code (Verification) to NEAR Protocol Medium.",imgUrl:"/img/contrubution/near/code.png",tags:["near","welldonecode","article"],url:"https://medium.com/nearprotocol/welldone-code-2-dont-trust-verify-92a7ae2fe0b2"},{title:"AwesomeNEAR - WELLDONE Wallet",description:"Wallet for Web3 Voyagers",imgUrl:"/img/contrubution/near/wallet.png",tags:["near","welldonewallet"],url:"https://awesomenear.com/welldone-wallet"},{title:"NEAR Wallet Selector",description:"This is a wallet selector modal that allows users to interact with NEAR dApps with a selection of available wallets.",imgUrl:"/img/contrubution/near/wallet.png",tags:["near","welldonewallet","opensource"],url:"https://github.com/near/wallet-selector"},{title:"APTOS SLIP-0044 Signer",description:"Create Account with hdpath 637",imgUrl:"/img/contrubution/aptos/wallet.png",tags:["aptos","welldonewallet","opensource"],url:"https://github.com/aptos-labs/aptos-core/pull/2073"},{title:"APTOS Wallet Adapter",description:"A monorepo modular wallet adapter for Aptos applications",imgUrl:"/img/contrubution/aptos/wallet.png",tags:["aptos","welldonewallet","opensource"],url:"https://github.com/aptos-labs/aptos-wallet-adapter"},{title:"NEAR Official Docs",description:"Introduction to how to use WELLDONE Code on NEAR",imgUrl:"/img/contrubution/near/code.png",tags:["near","welldonecode","remix","article"],url:"https://docs.near.org/tools/remix-ide-plugin"},{title:"APTOS Official Docs",description:"Introduction to how to use WELLDONE Code on Aptos",imgUrl:"/img/contrubution/aptos/code.png",tags:["aptos","welldonecode","remix","article"],url:"https://aptos.dev/community/contributions/remix-ide-plugin/"},{title:"Add Ed25519Keypair.fromDerivePath method",description:"make keypair from sui derive path (m/44'/784'/0'/0'/0')",imgUrl:"/img/contrubution/sui/wallet.png",tags:["sui","welldonewallet"],url:"https://github.com/MystenLabs/sui/pull/2900"},{title:"SUI Directory - WELLDONE Wallet",description:"WELLDONE Wallet is an integrated, non-custodial wallet that allows you to freely manage your assets across any network.",imgUrl:"/img/contrubution/sui/wallet.png",tags:["sui","welldonewallet"],url:"https://sui.directory/project/welldone-wallet/"},{title:"SUI Directory - WELLDONE Code",description:"WELLDONE Code is a web-based tool with Move module deployment features and capabilities for developers to interact with deployed modules.",imgUrl:"/img/contrubution/sui/code.png",tags:["sui","welldonecode"],url:"https://sui.directory/project/welldone-code/"},{title:"SUI Developer Portal - WELLDONE Code",description:"This plug-in for the Remix web-based IDE features a graphical interface for developing Move modules.",imgUrl:"/img/contrubution/sui/code.png",tags:["sui","welldonecode"],url:"https://sui.io/developers"},{title:"SUI Wallet Standard",description:"WELLDONE Wallet implemented Wallet Standard",imgUrl:"/img/contrubution/sui/wallet.png",tags:["sui","welldonewallet","opensource"],url:"https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter/wallet-standard"},{title:"Deploy & Write NEAR Smart Contracts on REMIX IDE",description:"Tutorial video about how to deploy & write NEAR Smart Contracts on REMIX IDE",imgUrl:"https://img.youtube.com/vi/wtumV7ffuhk/0.jpg",tags:["near","welldonecode","remix","video"],url:"https://www.youtube.com/watch?v=wtumV7ffuhk"},{title:"JUNO Ecosystem - WELLDONE Code",description:"WELLDONE Code is a Remix IDE plugin to deploy and execute CosmWasm smart contracts",imgUrl:"/img/contrubution/juno/code.png",tags:["juno","welldonecode"],url:"https://junonetwork.io/ecosystem/"},{title:"Awesome-CosmWasm: WELLDONE Code",description:"Remix IDE plugin that supports CosmWasm.",imgUrl:"/img/contrubution/cosmos/code.png",tags:["cosmos","welldonecode","cosmwasm"],url:"https://github.com/CosmWasm/awesome-cosmwasm"},{title:"DSRV Labs | Remix IDE Plugin for Sui | Sui Builder House Hong Kong",description:"Introduction video about WELLDONE Code, the Remix IDE Plugin for SUI",imgUrl:"https://img.youtube.com/vi/A87JrB9Rt-g/maxresdefault.jpg",tags:["sui","welldonecode","remix","video"],url:"https://www.youtube.com/watch?v=A87JrB9Rt-g"},{title:"Instant Coding with Remix IDE and WELLDONE Code",description:"The browser-based Remix IDE, combined with the WELLDONE Code plug-in, lets you build Sui apps with no local setup or installations.",imgUrl:"/img/contrubution/sui/code.png",tags:["sui","welldonecode","remix"],url:"https://blog.sui.io/remix-ide-welldone-code/"},{title:"AIP-X Code Verification API",description:"This API proposal seeks to introduce a standard protocol for the verification of Aptos Move smart contract code.",imgUrl:"/img/contrubution/aptos/code.png",tags:["aptos","welldonecode","verification"],url:"https://github.com/aptos-foundation/AIPs/pull/150/"}],z={near:{color:"var(--ifm-color-primary)",name:"NEAR"},aptos:{color:"var(--ifm-color-primary)",name:"APTOS"},sui:{color:"var(--ifm-color-primary)",name:"SUI"},juno:{color:"var(--ifm-color-primary)",name:"JUNO"},cosmos:{color:"var(--ifm-color-primary)",name:"COSMOS"},welldonecode:{color:"var(--ifm-color-secondary)",name:"WELLDONE Code"},welldonewallet:{color:"var(--ifm-color-secondary)",name:"WELLDONE Wallet"},remix:{color:"var(--ifm-color-primary-dark)",name:"RemixIDE"},cosmwasm:{color:"var(--ifm-color-primary-dark)",name:"CosmWasm"},verification:{color:"var(--ifm-color-primary-dark)",name:"Verification"},article:{color:"var(--ifm-color-warning)",name:"Article"},video:{color:"var(--ifm-color-warning)",name:"Video"},opensource:{color:"var(--ifm-color-warning)",name:"Open Source"}};function U(e){var o=e.setTag,t=(0,a.useState)(""),r=t[0],n=t[1],i=Object.keys(z).map((function(e,t){return a.createElement(Z,{key:t,sx:{border:"1px solid "+z[e].color,color:e===r?"black":""+z[e].color,backgroundColor:e===r?""+z[e].color:"transparent","&:hover":{backgroundColor:e===r?z[e].color+" !important":"transparent"},"& .MuiButtonBase-root-MuiChip-root:hover":{backgroundColor:"red"}},label:z[e].name,variant:"outlined",size:"medium",onClick:function(){var t;r===(t=e)?(n(""),o("")):(n(t),o(t))}})}));return a.createElement(a.Fragment,null,a.createElement("h2",null,"Tags"),a.createElement("div",null,i))}function V(e){var o=e.tag;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Contributions"),a.createElement(O.ZP,{container:!0,spacing:1},T.filter((function(e){return!o||e.tags.includes(o)})).map((function(e,o){return a.createElement(O.ZP,{key:o,item:!0,xs:4},a.createElement($.Z,{sx:{maxHeight:400,borderRadius:"24px",backgroundColor:"#20222A"}},a.createElement(P,{sx:{height:150},image:e.imgUrl,title:e.title}),a.createElement(W.Z,{sx:{color:"white",height:240,display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.createElement(M.Z,null,a.createElement(j.Z,{gutterBottom:!0,variant:"body",color:"white",component:A.Z,to:e.url,sx:{fontWeight:"bold"}},e.title),a.createElement(j.Z,{variant:"caption",color:"white"},e.description)),a.createElement("div",null,function(e){return e.tags.map((function(e,o){return a.createElement(Z,{key:o,sx:{border:"1px solid "+z[e].color,color:""+z[e].color},label:z[e].name,variant:"outlined",size:"small"})}))}(e)))))}))))}function F(){var e=(0,a.useState)(""),o=e[0],t=e[1];return a.createElement(a.Fragment,null,a.createElement(U,{setTag:t}),a.createElement(V,{tag:o}))}var B=["components"],_={slug:"/aboutus/contributions",title:"WELLDONE Studio's Contributions",description:"WELLDONE Studio's Contribution"},q="WELLDONE Studio's Contributions",K={unversionedId:"aboutus/contribution/index",id:"aboutus/contribution/index",title:"WELLDONE Studio's Contributions",description:"WELLDONE Studio's Contribution",source:"@site/docs/aboutus/contribution/index.mdx",sourceDirName:"aboutus/contribution",slug:"/aboutus/contributions",permalink:"/ko/aboutus/contributions",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/aboutus/contribution/index.mdx",tags:[],version:"current",frontMatter:{slug:"/aboutus/contributions",title:"WELLDONE Studio's Contributions",description:"WELLDONE Studio's Contribution"},sidebar:"tutorialSidebar",previous:{title:"AboutUs",permalink:"/ko/aboutus"}},X={},H=[],J={toc:H};function Y(e){var o=e.components,t=(0,n.Z)(e,B);return(0,i.kt)("wrapper",(0,r.Z)({},J,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welldone-studios-contributions"},"WELLDONE Studio's Contributions"),(0,i.kt)("p",null,"Below is a list of contents that WELLDONE Studio contributed to outside."),(0,i.kt)(F,{mdxType:"Contributions"}))}Y.isMDXComponent=!0},75251:function(e,o,t){var r=t(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,o,t){var r,a={},s=null,u=null;for(r in void 0!==t&&(s=""+t),void 0!==o.key&&(s=""+o.key),void 0!==o.ref&&(u=o.ref),o)i.call(o,r)&&!c.hasOwnProperty(r)&&(a[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return{$$typeof:n,type:e,key:s,ref:u,props:a,_owner:l.current}}o.Fragment=a,o.jsx=s,o.jsxs=s},85893:function(e,o,t){e.exports=t(75251)},44415:function(e,o,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(o,{Z:function(){return r}})}}]);