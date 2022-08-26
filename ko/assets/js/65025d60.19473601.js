"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[300],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=o,g=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},c="Detecting the Provider",d={unversionedId:"getting-started/detecting-provider",id:"getting-started/detecting-provider",title:"Detecting the Provider",description:"How to detect WELLDONE Wallet",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/getting-started/detecting-provider.md",sourceDirName:"getting-started",slug:"/getting-started/detecting-provider",permalink:"/ko/docs/getting-started/detecting-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/detecting-provider.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/ko/docs/getting-started"},next:{title:"Connecting to Wallet",permalink:"/ko/docs/getting-started/connecting-to-wallet"}},u={},p=[{value:"How to detect WELLDONE Wallet",id:"how-to-detect-welldone-wallet",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"detecting-the-provider"},"Detecting the Provider"),(0,i.kt)("h2",{id:"how-to-detect-welldone-wallet"},"How to detect WELLDONE Wallet"),(0,i.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800\uc5d0 WELLDONE Wallet\uc774 \uc124\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"window.dapp"),"\uc744 \uccb4\ud06c\ud569\ub2c8\ub2e4. \ub9cc\uc57d ",(0,i.kt)("inlineCode",{parentName:"p"},"window.dapp"),"\uc774 undefined\ub97c \ubc18\ud658\ud55c\ub2e4\uba74 \uc9c0\uac11\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"WELLDONE Wallet\uc744 \ud0d0\uc9c0\ud558\ub294 \uac04\ub2e8\ud55c \uc608\uc81c \ucf54\ub4dc \uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function getProvider() {\n  const [provider, setProvider] = React.useState(false);\n  function handleProvider() {\n    if (!window.dapp) {\n      alert("Please install WELLDONE Wallet extension");\n    } else {\n      setProvider(true);\n    }\n  }\n  return (\n    <>\n      <Button onClick={handleProvider} type="buton">\n        Get Provider\n      </Button>\n      {provider && (\n        <ResultTooltip style={{ background: "#3B48DF" }}>\n          <b>Success</b>\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n')))}f.isMDXComponent=!0}}]);