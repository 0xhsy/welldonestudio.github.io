/*! For license information please see 5ae0b73d.47d1b6fe.js.LICENSE.txt */
"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[4400],{3905:function(e,o,t){t.d(o,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},d=function(e){var o=s(e.components);return r.createElement(c.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},p=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(g,a(a({ref:o},d),{},{components:t})):r.createElement(g,a({ref:o},d))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9144:function(e,o,t){var r=t(80102),n=t(83117),i=t(67294),a=t(95408),l=t(98700),c=t(39707),s=t(59766),d=t(81719),u=t(78884),p=t(85893);const m=["component","direction","spacing","divider","children"];function g(e,o){const t=i.Children.toArray(e).filter(Boolean);return t.reduce(((e,r,n)=>(e.push(r),n<t.length-1&&e.push(i.cloneElement(o,{key:`separator-${n}`})),e)),[])}const f=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>[o.root]})((({ownerState:e,theme:o})=>{let t=(0,n.Z)({display:"flex",flexDirection:"column"},(0,a.k9)({theme:o},(0,a.P$)({values:e.direction,breakpoints:o.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,l.hB)(o),n=Object.keys(o.breakpoints.values).reduce(((o,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(o[t]=!0),o)),{}),i=(0,a.P$)({values:e.direction,base:n}),c=(0,a.P$)({values:e.spacing,base:n});"object"==typeof i&&Object.keys(i).forEach(((e,o,t)=>{if(!i[e]){const r=o>0?i[t[o-1]]:"column";i[e]=r}}));const d=(o,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${n=t?i[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,l.NA)(r,o)}};var n};t=(0,s.Z)(t,(0,a.k9)({theme:o},c,d))}return t=(0,a.dt)(o.breakpoints,t),t})),v=i.forwardRef((function(e,o){const t=(0,u.Z)({props:e,name:"MuiStack"}),i=(0,c.Z)(t),{component:a="div",direction:l="column",spacing:s=0,divider:d,children:v}=i,b=(0,r.Z)(i,m),h={direction:l,spacing:s};return(0,p.jsx)(f,(0,n.Z)({as:a,ownerState:h,ref:o},b,{children:d?g(v,d):v}))}));o.Z=v},81645:function(e,o,t){t.d(o,{Z:function(){return h}});var r=t(83117),n=t(80102),i=t(67294),a=t(93680),l=t(94780),c=t(36622),s=t(78884),d=t(81719),u=t(1588),p=t(34867);function m(e){return(0,p.Z)("MuiSvgIcon",e)}(0,u.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var g=t(85893);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,"inherit"!==t.color&&o[`color${(0,c.Z)(t.color)}`],o[`fontSize${(0,c.Z)(t.fontSize)}`]]}})((({theme:e,ownerState:o})=>{var t,r,n,i,a,l,c,s,d,u,p,m,g,f,v,b,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=e.transitions)||null==(r=t.create)?void 0:r.call(t,"fill",{duration:null==(n=e.transitions)||null==(i=n.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(l=a.pxToRem)?void 0:l.call(a,20))||"1.25rem",medium:(null==(c=e.typography)||null==(s=c.pxToRem)?void 0:s.call(c,24))||"1.5rem",large:(null==(d=e.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875rem"}[o.fontSize],color:null!=(p=null==(m=(e.vars||e).palette)||null==(g=m[o.color])?void 0:g.main)?p:{action:null==(f=(e.vars||e).palette)||null==(v=f.action)?void 0:v.active,disabled:null==(b=(e.vars||e).palette)||null==(h=b.action)?void 0:h.disabled,inherit:void 0}[o.color]}})),b=i.forwardRef((function(e,o){const t=(0,s.Z)({props:e,name:"MuiSvgIcon"}),{children:i,className:d,color:u="inherit",component:p="svg",fontSize:b="medium",htmlColor:h,inheritViewBox:y=!1,titleAccess:w,viewBox:C="0 0 24 24"}=t,E=(0,n.Z)(t,f),S=(0,r.Z)({},t,{color:u,component:p,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:C}),k={};y||(k.viewBox=C);const x=(e=>{const{color:o,fontSize:t,classes:r}=e,n={root:["root","inherit"!==o&&`color${(0,c.Z)(o)}`,`fontSize${(0,c.Z)(t)}`]};return(0,l.Z)(n,m,r)})(S);return(0,g.jsxs)(v,(0,r.Z)({as:p,className:(0,a.Z)(x.root,d),focusable:"false",color:h,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:o},k,E,{ownerState:S,children:[i,w?(0,g.jsx)("title",{children:w}):null]}))}));b.muiName="SvgIcon";var h=b},54235:function(e,o,t){t.d(o,{Z:function(){return l}});var r=t(83117),n=t(67294),i=t(81645),a=t(85893);function l(e,o){function t(t,n){return(0,a.jsx)(i.Z,(0,r.Z)({"data-testid":`${o}Icon`,ref:n},t,{children:e}))}return t.muiName=i.Z.muiName,n.memo(n.forwardRef(t))}},82399:function(e,o,t){t.r(o),t.d(o,{assets:function(){return Y},contentTitle:function(){return q},default:function(){return G},frontMatter:function(){return _},metadata:function(){return K},toc:function(){return H}});var r=t(83117),n=t(80102),i=t(67294),a=t(3905),l=t(93680),c=t(94780),s=t(41796),d=t(54235),u=t(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),m=t(84771),g=t(36622),f=t(50522),v=t(78884),b=t(81719),h=t(1588),y=t(34867);function w(e){return(0,y.Z)("MuiChip",e)}var C=(0,h.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]);const E=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],S=(0,b.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{color:r,iconColor:n,clickable:i,onDelete:a,size:l,variant:c}=t;return[{[`& .${C.avatar}`]:o.avatar},{[`& .${C.avatar}`]:o[`avatar${(0,g.Z)(l)}`]},{[`& .${C.avatar}`]:o[`avatarColor${(0,g.Z)(r)}`]},{[`& .${C.icon}`]:o.icon},{[`& .${C.icon}`]:o[`icon${(0,g.Z)(l)}`]},{[`& .${C.icon}`]:o[`iconColor${(0,g.Z)(n)}`]},{[`& .${C.deleteIcon}`]:o.deleteIcon},{[`& .${C.deleteIcon}`]:o[`deleteIcon${(0,g.Z)(l)}`]},{[`& .${C.deleteIcon}`]:o[`deleteIconColor${(0,g.Z)(r)}`]},{[`& .${C.deleteIcon}`]:o[`deleteIcon${(0,g.Z)(c)}Color${(0,g.Z)(r)}`]},o.root,o[`size${(0,g.Z)(l)}`],o[`color${(0,g.Z)(r)}`],i&&o.clickable,i&&"default"!==r&&o[`clickableColor${(0,g.Z)(r)})`],a&&o.deletable,a&&"default"!==r&&o[`deletableColor${(0,g.Z)(r)}`],o[c],o[`${c}${(0,g.Z)(r)}`]]}})((({theme:e,ownerState:o})=>{const t=(0,s.Fq)(e.palette.text.primary,.26),n="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,r.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${C.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:n,fontSize:e.typography.pxToRem(12)},[`& .${C.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${C.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${C.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${C.icon}`]:(0,r.Z)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,r.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:n},"default"!==o.color&&{color:"inherit"})),[`& .${C.deleteIcon}`]:(0,r.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:t,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,s.Fq)(t,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:e.vars?`rgba(${e.vars.palette[o.color].contrastTextChannel} / 0.7)`:(0,s.Fq)(e.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(e.vars||e).palette[o.color].main,color:(e.vars||e).palette[o.color].contrastText},o.onDelete&&{[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})}),(({theme:e,ownerState:o})=>(0,r.Z)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},o.clickable&&"default"!==o.color&&{[`&:hover, &.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})),(({theme:e,ownerState:o})=>(0,r.Z)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${C.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${C.avatar}`]:{marginLeft:4},[`& .${C.avatarSmall}`]:{marginLeft:2},[`& .${C.icon}`]:{marginLeft:4},[`& .${C.iconSmall}`]:{marginLeft:2},[`& .${C.deleteIcon}`]:{marginRight:5},[`& .${C.deleteIconSmall}`]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(e.vars||e).palette[o.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:(0,s.Fq)(e.palette[o.color].main,.7)}`,[`&.${C.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity)},[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,s.Fq)(e.palette[o.color].main,e.palette.action.focusOpacity)},[`& .${C.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:(0,s.Fq)(e.palette[o.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].main}}}))),k=(0,b.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:t}=e,{size:r}=t;return[o.label,o[`label${(0,g.Z)(r)}`]]}})((({ownerState:e})=>(0,r.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===e.size&&{paddingLeft:8,paddingRight:8})));function x(e){return"Backspace"===e.key||"Delete"===e.key}var Z=i.forwardRef((function(e,o){const t=(0,v.Z)({props:e,name:"MuiChip"}),{avatar:a,className:s,clickable:d,color:b="default",component:h,deleteIcon:y,disabled:C=!1,icon:Z,label:O,onClick:$,onDelete:I,onKeyDown:D,onKeyUp:L,size:N="medium",variant:R="filled"}=t,P=(0,n.Z)(t,E),W=i.useRef(null),M=(0,m.Z)(W,o),j=e=>{e.stopPropagation(),I&&I(e)},A=!(!1===d||!$)||d,z=A||I?f.Z:h||"div",T=(0,r.Z)({},t,{component:z,disabled:C,size:N,color:b,iconColor:i.isValidElement(Z)&&Z.props.color||b,onDelete:!!I,clickable:A,variant:R}),U=(e=>{const{classes:o,disabled:t,size:r,color:n,iconColor:i,onDelete:a,clickable:l,variant:s}=e,d={root:["root",s,t&&"disabled",`size${(0,g.Z)(r)}`,`color${(0,g.Z)(n)}`,l&&"clickable",l&&`clickableColor${(0,g.Z)(n)}`,a&&"deletable",a&&`deletableColor${(0,g.Z)(n)}`,`${s}${(0,g.Z)(n)}`],label:["label",`label${(0,g.Z)(r)}`],avatar:["avatar",`avatar${(0,g.Z)(r)}`,`avatarColor${(0,g.Z)(n)}`],icon:["icon",`icon${(0,g.Z)(r)}`,`iconColor${(0,g.Z)(i)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,g.Z)(r)}`,`deleteIconColor${(0,g.Z)(n)}`,`deleteIcon${(0,g.Z)(s)}Color${(0,g.Z)(n)}`]};return(0,c.Z)(d,w,o)})(T),V=z===f.Z?(0,r.Z)({component:h||"div",focusVisibleClassName:U.focusVisible},I&&{disableRipple:!0}):{};let B=null;I&&(B=y&&i.isValidElement(y)?i.cloneElement(y,{className:(0,l.Z)(y.props.className,U.deleteIcon),onClick:j}):(0,u.jsx)(p,{className:(0,l.Z)(U.deleteIcon),onClick:j}));let F=null;a&&i.isValidElement(a)&&(F=i.cloneElement(a,{className:(0,l.Z)(U.avatar,a.props.className)}));let _=null;return Z&&i.isValidElement(Z)&&(_=i.cloneElement(Z,{className:(0,l.Z)(U.icon,Z.props.className)})),(0,u.jsxs)(S,(0,r.Z)({as:z,className:(0,l.Z)(U.root,s),disabled:!(!A||!C)||void 0,onClick:$,onKeyDown:e=>{e.currentTarget===e.target&&x(e)&&e.preventDefault(),D&&D(e)},onKeyUp:e=>{e.currentTarget===e.target&&(I&&x(e)?I(e):"Escape"===e.key&&W.current&&W.current.blur()),L&&L(e)},ref:M,ownerState:T},V,P,{children:[F||_,(0,u.jsx)(k,{className:(0,l.Z)(U.label),ownerState:T,children:O}),B]}))})),O=t(79072),$=t(49837);function I(e){return(0,y.Z)("MuiCardMedia",e)}(0,h.Z)("MuiCardMedia",["root","media","img"]);const D=["children","className","component","image","src","style"],L=(0,b.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:r,isImageComponent:n}=t;return[o.root,r&&o.media,n&&o.img]}})((({ownerState:e})=>(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),N=["video","audio","picture","iframe","img"],R=["picture","img"];var P=i.forwardRef((function(e,o){const t=(0,v.Z)({props:e,name:"MuiCardMedia"}),{children:i,className:a,component:s="div",image:d,src:p,style:m}=t,g=(0,n.Z)(t,D),f=-1!==N.indexOf(s),b=!f&&d?(0,r.Z)({backgroundImage:`url("${d}")`},m):m,h=(0,r.Z)({},t,{component:s,isMediaComponent:f,isImageComponent:-1!==R.indexOf(s)}),y=(e=>{const{classes:o,isMediaComponent:t,isImageComponent:r}=e,n={root:["root",t&&"media",r&&"img"]};return(0,c.Z)(n,I,o)})(h);return(0,u.jsx)(L,(0,r.Z)({className:(0,l.Z)(y.root,a),as:s,role:!f&&d?"img":void 0,ref:o,style:b,ownerState:h,src:f?d||p:void 0},g,{children:i}))})),W=t(91359),M=t(9144),j=t(29630),A=t(39960),z=[{title:"WELLDONE Code(1) \u2014 Remix IDE plugin for Multichain",description:"Introducing WELLDONE Code (Remix IDE Plugin) to NEAR Protocol Medium.",imgUrl:"/img/contrubution/near/code.png",tags:["near","welldonecode","remix","article"],url:"https://medium.com/nearprotocol/welldone-code-1-remix-ide-plugin-for-multichain-4b5228419ce5"},{title:"WELLDONE Code(2) \u2014 Don\u2019t trust, verify.",description:"Introducing WELLDONE Code (Verification) to NEAR Protocol Medium.",imgUrl:"/img/contrubution/near/code.png",tags:["near","welldonecode","article"],url:"https://medium.com/nearprotocol/welldone-code-2-dont-trust-verify-92a7ae2fe0b2"},{title:"AwesomeNEAR - WELLDONE Wallet",description:"Wallet for Web3 Voyagers",imgUrl:"/img/contrubution/near/wallet.png",tags:["near","welldonewallet"],url:"https://awesomenear.com/welldone-wallet"},{title:"NEAR Wallet Selector",description:"This is a wallet selector modal that allows users to interact with NEAR dApps with a selection of available wallets.",imgUrl:"/img/contrubution/near/wallet.png",tags:["near","welldonewallet","opensource"],url:"https://github.com/near/wallet-selector"},{title:"APTOS SLIP-0044 Signer",description:"Create Account with hdpath 637",imgUrl:"/img/contrubution/aptos/wallet.png",tags:["aptos","welldonewallet","opensource"],url:"https://github.com/aptos-labs/aptos-core/pull/2073"},{title:"APTOS Wallet Adapter",description:"A monorepo modular wallet adapter for Aptos applications",imgUrl:"/img/contrubution/aptos/wallet.png",tags:["aptos","welldonewallet","opensource"],url:"https://github.com/aptos-labs/aptos-wallet-adapter"},{title:"NEAR Official Docs",description:"Introduction to how to use WELLDONE Code on NEAR",imgUrl:"/img/contrubution/near/code.png",tags:["near","welldonecode","remix","article"],url:"https://docs.near.org/tools/remix-ide-plugin"},{title:"APTOS Official Docs",description:"Introduction to how to use WELLDONE Code on Aptos",imgUrl:"/img/contrubution/aptos/code.png",tags:["aptos","welldonecode","remix","article"],url:"https://aptos.dev/community/contributions/remix-ide-plugin/"},{title:"Add Ed25519Keypair.fromDerivePath method",description:"make keypair from sui derive path (m/44'/784'/0'/0'/0')",imgUrl:"/img/contrubution/sui/wallet.png",tags:["sui","welldonewallet"],url:"https://github.com/MystenLabs/sui/pull/2900"},{title:"SUI Directory - WELLDONE Wallet",description:"WELLDONE Wallet is an integrated, non-custodial wallet that allows you to freely manage your assets across any network.",imgUrl:"/img/contrubution/sui/wallet.png",tags:["sui","welldonewallet"],url:"https://sui.directory/project/welldone-wallet/"},{title:"SUI Directory - WELLDONE Code",description:"WELLDONE Code is a web-based tool with Move module deployment features and capabilities for developers to interact with deployed modules.",imgUrl:"/img/contrubution/sui/code.png",tags:["sui","welldonecode"],url:"https://sui.directory/project/welldone-code/"},{title:"SUI Developer Portal - WELLDONE Code",description:"This plug-in for the Remix web-based IDE features a graphical interface for developing Move modules.",imgUrl:"/img/contrubution/sui/code.png",tags:["sui","welldonecode"],url:"https://sui.io/developers"},{title:"SUI Wallet Standard",description:"WELLDONE Wallet implemented Wallet Standard",imgUrl:"/img/contrubution/sui/wallet.png",tags:["sui","welldonewallet","opensource"],url:"https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter/wallet-standard"},{title:"Deploy & Write NEAR Smart Contracts on REMIX IDE",description:"Tutorial video about how to deploy & write NEAR Smart Contracts on REMIX IDE",imgUrl:"https://img.youtube.com/vi/wtumV7ffuhk/0.jpg",tags:["near","welldonecode","remix","video"],url:"https://www.youtube.com/watch?v=wtumV7ffuhk"},{title:"JUNO Ecosystem - WELLDONE Code",description:"WELLDONE Code is a Remix IDE plugin to deploy and execute CosmWasm smart contracts",imgUrl:"/img/contrubution/juno/code.png",tags:["juno","welldonecode"],url:"https://junonetwork.io/ecosystem/"},{title:"Awesome-CosmWasm: WELLDONE Code",description:"Remix IDE plugin that supports CosmWasm.",imgUrl:"/img/contrubution/cosmos/code.png",tags:["cosmos","welldonecode","cosmwasm"],url:"https://github.com/CosmWasm/awesome-cosmwasm"},{title:"DSRV Labs | Remix IDE Plugin for Sui | Sui Builder House Hong Kong",description:"Introduction video about WELLDONE Code, the Remix IDE Plugin for SUI",imgUrl:"https://img.youtube.com/vi/A87JrB9Rt-g/maxresdefault.jpg",tags:["sui","welldonecode","remix","video"],url:"https://www.youtube.com/watch?v=A87JrB9Rt-g"},{title:"Instant Coding with Remix IDE and WELLDONE Code",description:"The browser-based Remix IDE, combined with the WELLDONE Code plug-in, lets you build Sui apps with no local setup or installations.",imgUrl:"/img/contrubution/sui/code.png",tags:["sui","welldonecode","remix"],url:"https://blog.sui.io/remix-ide-welldone-code/"},{title:"AIP-X Code Verification API",description:"This API proposal seeks to introduce a standard protocol for the verification of Aptos Move smart contract code.",imgUrl:"/img/contrubution/aptos/code.png",tags:["aptos","welldonecode","verification"],url:"https://github.com/aptos-foundation/AIPs/pull/150/"},{title:"SIP-3: Code Verification API",description:"A standard protocol for the verification of SUI Move smart contract code.",imgUrl:"/img/contrubution/sui/code.png",tags:["sui","welldonecode","verification"],url:"https://forums.sui.io/t/sip-3-code-verification-api/44811"},{title:"SIP-4: Dependency Update Check API",description:" standard protocol for the API that checks the latest version of a dependency.",imgUrl:"/img/contrubution/sui/code.png",tags:["sui","welldonecode","verification"],url:"https://forums.sui.io/t/sip-4-dependency-update-check-api/44812"},{title:"Universal Serializer: Decentralize Your Multichain Game on #BOS w/ DSRV labs",description:"Hyunsun Yoo from the DSRV labs and Welldone wallet team show a product demo on decentralizing your game with BOS.",imgUrl:"https://img.youtube.com/vi/RYGNBjdnYfg/0.jpg",tags:["near","welldonecode","remix","video"],url:"https://www.youtube.com/watch?v=RYGNBjdnYfg"},{title:"\uc6f0\ub358 \uc2a4\ud29c\ub514\uc624\uc758 Sui \ud30c\ud5e4\uce58\uae30",description:"Sui(\uc218\uc774)\ub294 \uc720\uc800\uc640 \uac1c\ubc1c\uc790 \ubaa8\ub450\uc5d0\uac8c \uce5c\ud654\uc801\uc778 \ub808\uc774\uc5b41 \ub124\ud2b8\uc6cc\ud06c\uc785\ub2c8\ub2e4. \ube60\ub978 \uc18d\ub3c4\uc640 \uc801\uc740 \uac70\ub798\ube44\uc6a9\uc744 \ud1b5\ud574\uc11c \uad11\ubc94\uc704\ud55c \uc0ac\uc6a9\uc131\uc744 \uc9c0\ud5a5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc6f0\ub358\uc2a4\ud29c\ub514\uc624\ub294 Sui\uc758 \uacf5\uc2dd\uc801\uc778 \uad50\uc721 \ud30c\ud2b8\ub108\ub85c\uc11c \ud574\ub2f9 \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud55c \uac1c\ubc1c\uacfc \uc0ac\uc6a9\uc758 \uad6c\uccb4\uc801\uc778 \uacfc\uc815\uc744 \uc548\ub0b4\ud574 \ub4dc\ub9ac\uace0\uc790 \ud569\ub2c8\ub2e4.",imgUrl:"/img/sns/1704356222814875684.jpeg",tags:["near","welldonecode","remix","video","welldonewallet","education","sui"],url:"https://www.inflearn.com/course/\uc6f0\ub358\uc2a4\ud29c\ub514\uc624-sui-\ud30c\ud5e4\uce58\uae30"}],T={near:{color:"var(--ifm-color-primary)",name:"NEAR"},aptos:{color:"var(--ifm-color-primary)",name:"APTOS"},sui:{color:"var(--ifm-color-primary)",name:"SUI"},juno:{color:"var(--ifm-color-primary)",name:"JUNO"},cosmos:{color:"var(--ifm-color-primary)",name:"COSMOS"},welldonecode:{color:"var(--ifm-color-secondary)",name:"WELLDONE Code"},welldonewallet:{color:"var(--ifm-color-secondary)",name:"WELLDONE Wallet"},remix:{color:"var(--ifm-color-primary-dark)",name:"RemixIDE"},cosmwasm:{color:"var(--ifm-color-primary-dark)",name:"CosmWasm"},verification:{color:"var(--ifm-color-primary-dark)",name:"Verification"},article:{color:"var(--ifm-color-warning)",name:"Article"},video:{color:"var(--ifm-color-warning)",name:"Video"},opensource:{color:"var(--ifm-color-warning)",name:"Open Source"},education:{color:"var(--ifm-color-warning)",name:"Education"}};function U(e){var o=e.setTag,t=(0,i.useState)(""),r=t[0],n=t[1],a=Object.keys(T).map((function(e,t){return i.createElement(Z,{key:t,sx:{border:"1px solid "+T[e].color,color:e===r?"black":""+T[e].color,backgroundColor:e===r?""+T[e].color:"transparent","&:hover":{backgroundColor:e===r?T[e].color+" !important":"transparent"},"& .MuiButtonBase-root-MuiChip-root:hover":{backgroundColor:"red"}},label:T[e].name,variant:"outlined",size:"medium",onClick:function(){var t;r===(t=e)?(n(""),o("")):(n(t),o(t))}})}));return i.createElement(i.Fragment,null,i.createElement("h2",null,"Tags"),i.createElement("div",null,a))}function V(e){var o=e.tag;return i.createElement(i.Fragment,null,i.createElement("h2",null,"Contributions"),i.createElement(O.ZP,{container:!0,spacing:1},z.filter((function(e){return!o||e.tags.includes(o)})).map((function(e,o){return i.createElement(O.ZP,{key:o,item:!0,xs:4},i.createElement($.Z,{sx:{maxHeight:400,borderRadius:"24px",backgroundColor:"#20222A"}},i.createElement(P,{sx:{height:150},image:e.imgUrl,title:e.title}),i.createElement(W.Z,{sx:{color:"white",height:240,display:"flex",flexDirection:"column",justifyContent:"space-between"}},i.createElement(M.Z,null,i.createElement(j.Z,{gutterBottom:!0,variant:"body",color:"white",component:A.Z,to:e.url,sx:{fontWeight:"bold"}},e.title),i.createElement(j.Z,{variant:"caption",color:"white"},e.description)),i.createElement("div",null,function(e){return e.tags.map((function(e,o){return i.createElement(Z,{key:o,sx:{border:"1px solid "+T[e].color,color:""+T[e].color},label:T[e].name,variant:"outlined",size:"small"})}))}(e)))))}))))}function B(){var e=(0,i.useState)(""),o=e[0],t=e[1];return i.createElement(i.Fragment,null,i.createElement(U,{setTag:t}),i.createElement(V,{tag:o}))}var F=["components"],_={sidebar_position:1,slug:"/aboutus/contributions",title:"Contributions",description:"WELLDONE Studio's Contribution"},q="WELLDONE Studio's Contributions",K={unversionedId:"aboutus/contribution/index",id:"aboutus/contribution/index",title:"Contributions",description:"WELLDONE Studio's Contribution",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/aboutus/contribution/index.mdx",sourceDirName:"aboutus/contribution",slug:"/aboutus/contributions",permalink:"/ko/aboutus/contributions",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/aboutus/contribution/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/aboutus/contributions",title:"Contributions",description:"WELLDONE Studio's Contribution"},sidebar:"tutorialSidebar",previous:{title:"AboutUs",permalink:"/ko/aboutus"},next:{title:"Brand Guidelines",permalink:"/ko/aboutus/brand/"}},Y={},H=[],X={toc:H};function G(e){var o=e.components,t=(0,n.Z)(e,F);return(0,a.kt)("wrapper",(0,r.Z)({},X,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welldone-studios-contributions"},"WELLDONE Studio's Contributions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Below is a list of contents that WELLDONE Studio contributed to outside.")),(0,a.kt)(B,{mdxType:"Contributions"}))}G.isMDXComponent=!0},75251:function(e,o,t){var r=t(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,o,t){var r,i={},s=null,d=null;for(r in void 0!==t&&(s=""+t),void 0!==o.key&&(s=""+o.key),void 0!==o.ref&&(d=o.ref),o)a.call(o,r)&&!c.hasOwnProperty(r)&&(i[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return{$$typeof:n,type:e,key:s,ref:d,props:i,_owner:l.current}}o.Fragment=i,o.jsx=s,o.jsxs=s},85893:function(e,o,t){e.exports=t(75251)},44415:function(e,o,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(o,{Z:function(){return r}})}}]);