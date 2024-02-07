(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1234],{93645:function(e,t,n){"use strict";n.d(t,{u:function(){return getRoundingMethod}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function getRoundingMethod(e){return e?a[e]:a.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return differenceInMilliseconds}});var a=n(19013),r=n(13882);function differenceInMilliseconds(e,t){return(0,r.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return differenceInSeconds}});var a=n(59910),r=n(13882),l=n(93645);function differenceInSeconds(e,t,n){(0,r.Z)(2,arguments);var o=(0,a.Z)(e,t)/1e3;return(0,l.u)(null==n?void 0:n.roundingMethod)(o)}},67742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/webhooks",function(){return n(67766)}])},16919:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}},53985:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=_interopRequireDefault(n(76942));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=a,e.exports=a},76942:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(42122)),o=_interopRequireWildcard(n(67294)),c=a(n(16919)),s=a(n(61081));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var UpOutlined=function(e,t){return o.createElement(s.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:c.default}))};UpOutlined.displayName="UpOutlined";var u=o.forwardRef(UpOutlined);t.default=u},22509:function(e,t,n){"use strict";t.Z=void 0;var a=n(45094);t.Z=a.Col},1558:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;t.Z=void 0;var l=r(n(10434)),o=r(n(38416)),c=r(n(18698)),s=r(n(27424)),u=r(n(38900)),i=r(n(53985)),d=r(n(93967)),f=r(n(82122)),p=a(n(67294)),m=n(1530),v=r(n(8872)),h=r(n(88241)),b=n(90329),y=n(72380),g=n(24702),x=n(42934),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},w=p.forwardRef(function(e,t){var n=p.useContext(m.ConfigContext),a=n.getPrefixCls,r=n.direction,w=p.useContext(h.default),C=p.useState(!1),O=(0,s.default)(C,2),j=O[0],_=O[1],E=p.useRef(null);p.useImperativeHandle(t,function(){return E.current});var k=e.className,S=e.size,P=e.disabled,N=e.prefixCls,M=e.addonBefore,I=e.addonAfter,T=e.prefix,R=e.bordered,W=void 0===R||R,Z=e.readOnly,A=e.status,D=e.controls,U=__rest(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),F=a("input-number",N),L=(0,y.useCompactItemContext)(F,r),q=L.compactSize,B=L.compactItemClassnames,H=p.createElement(i.default,{className:"".concat(F,"-handler-up-inner")}),z=p.createElement(u.default,{className:"".concat(F,"-handler-down-inner")}),G="boolean"==typeof D?D:void 0;"object"===(0,c.default)(D)&&(H=void 0===D.upIcon?H:p.createElement("span",{className:"".concat(F,"-handler-up-inner")},D.upIcon),z=void 0===D.downIcon?z:p.createElement("span",{className:"".concat(F,"-handler-down-inner")},D.downIcon));var Q=(0,p.useContext)(b.FormItemInputContext),X=Q.hasFeedback,$=Q.status,J=Q.isFormItemInput,K=Q.feedbackIcon,V=(0,x.getMergedStatus)($,A),Y=q||S||w,ee=p.useContext(v.default),et=null!=P?P:ee,en=(0,d.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)({},"".concat(F,"-lg"),"large"===Y),"".concat(F,"-sm"),"small"===Y),"".concat(F,"-rtl"),"rtl"===r),"".concat(F,"-borderless"),!W),"".concat(F,"-in-form-item"),J),(0,x.getStatusClassNames)(F,V),B,k),ea=p.createElement(f.default,(0,l.default)({ref:E,disabled:et,className:en,upHandler:H,downHandler:z,prefixCls:F,readOnly:Z,controls:G},U));if(null!=T||X){var er=(0,d.default)("".concat(F,"-affix-wrapper"),(0,x.getStatusClassNames)("".concat(F,"-affix-wrapper"),V,X),(0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)({},"".concat(F,"-affix-wrapper-focused"),j),"".concat(F,"-affix-wrapper-disabled"),e.disabled),"".concat(F,"-affix-wrapper-sm"),"small"===w),"".concat(F,"-affix-wrapper-lg"),"large"===w),"".concat(F,"-affix-wrapper-rtl"),"rtl"===r),"".concat(F,"-affix-wrapper-readonly"),Z),"".concat(F,"-affix-wrapper-borderless"),!W),"".concat(k),!(M||I)&&k));ea=p.createElement("div",{className:er,style:e.style,onMouseUp:function(){return E.current.focus()}},T&&p.createElement("span",{className:"".concat(F,"-prefix")},T),(0,g.cloneElement)(ea,{style:null,value:e.value,onFocus:function(t){var n;_(!0),null===(n=e.onFocus)||void 0===n||n.call(e,t)},onBlur:function(t){var n;_(!1),null===(n=e.onBlur)||void 0===n||n.call(e,t)}}),X&&p.createElement("span",{className:"".concat(F,"-suffix")},K))}if(null!=M||null!=I){var el="".concat(F,"-group"),eo="".concat(el,"-addon"),ec=M?p.createElement("div",{className:eo},M):null,es=I?p.createElement("div",{className:eo},I):null,eu=(0,d.default)("".concat(F,"-wrapper"),el,(0,o.default)({},"".concat(el,"-rtl"),"rtl"===r)),ei=(0,d.default)("".concat(F,"-group-wrapper"),(0,o.default)((0,o.default)((0,o.default)({},"".concat(F,"-group-wrapper-sm"),"small"===w),"".concat(F,"-group-wrapper-lg"),"large"===w),"".concat(F,"-group-wrapper-rtl"),"rtl"===r),(0,x.getStatusClassNames)("".concat(F,"-group-wrapper"),V,X),k);ea=p.createElement("div",{className:ei,style:e.style},p.createElement("div",{className:eu},ec&&p.createElement(y.NoCompactStyle,null,p.createElement(b.NoFormStyle,{status:!0,override:!0},ec)),(0,g.cloneElement)(ea,{style:null,disabled:et}),es&&p.createElement(y.NoCompactStyle,null,p.createElement(b.NoFormStyle,{status:!0,override:!0},es))))}return ea});t.Z=w},76171:function(e,t,n){"use strict";var a=n(75263).default;t.default=void 0;var r=a(n(21494)),l=a(n(65625)),o=r.default;o.Header=r.Header,o.Footer=r.Footer,o.Content=r.Content,o.Sider=l.default,o._InternalSiderContext=l.SiderContext,t.default=o},2943:function(e,t,n){"use strict";t.Z=void 0;var a=n(45094);t.Z=a.Row},72472:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(38416)),c=r(n(93967)),s=a(n(67294)),u=n(1530),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};t.default=function(e){var t=e.prefixCls,n=e.className,a=e.checked,r=e.onChange,i=e.onClick,d=__rest(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,s.useContext(u.ConfigContext).getPrefixCls)("tag",t),p=(0,c.default)(f,(0,o.default)((0,o.default)({},"".concat(f,"-checkable"),!0),"".concat(f,"-checkable-checked"),a),n);return s.createElement("span",(0,l.default)({},d,{className:p,onClick:function(e){null==r||r(!a),null==i||i(e)}}))}},19445:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;t.Z=void 0;var l=r(n(38416)),o=r(n(10434)),c=r(n(27424)),s=r(n(67840)),u=r(n(93967)),i=r(n(27648)),d=a(n(67294)),f=n(1530),p=n(17172),m=r(n(24962));r(n(24644));var v=r(n(72472)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},h=new RegExp("^(".concat(p.PresetColorTypes.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(p.PresetStatusColorTypes.join("|"),")$")),y=d.forwardRef(function(e,t){var n=e.prefixCls,a=e.className,r=e.style,p=e.children,v=e.icon,y=e.color,g=e.onClose,x=e.closeIcon,w=e.closable,C=void 0!==w&&w,O=__rest(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),j=d.useContext(f.ConfigContext),_=j.getPrefixCls,E=j.direction,k=d.useState(!0),S=(0,c.default)(k,2),P=S[0],N=S[1];d.useEffect(function(){"visible"in O&&N(O.visible)},[O.visible]);var isPresetColor=function(){return!!y&&(h.test(y)||b.test(y))},M=(0,o.default)({backgroundColor:y&&!isPresetColor()?y:void 0},r),I=isPresetColor(),T=_("tag",n),R=(0,u.default)(T,(0,l.default)((0,l.default)((0,l.default)((0,l.default)({},"".concat(T,"-").concat(y),I),"".concat(T,"-has-color"),y&&!I),"".concat(T,"-hidden"),!P),"".concat(T,"-rtl"),"rtl"===E),a),handleCloseClick=function(e){e.stopPropagation(),null==g||g(e),!e.defaultPrevented&&("visible"in O||N(!1))},W="onClick"in O||p&&"a"===p.type,Z=(0,i.default)(O,["visible"]),A=v||null,D=A?d.createElement(d.Fragment,null,A,d.createElement("span",null,p)):p,U=d.createElement("span",(0,o.default)({},Z,{ref:t,className:R,style:M}),D,C?x?d.createElement("span",{className:"".concat(T,"-close-icon"),onClick:handleCloseClick},x):d.createElement(s.default,{className:"".concat(T,"-close-icon"),onClick:handleCloseClick}):null);return W?d.createElement(m.default,null,U):U});y.CheckableTag=v.default,t.Z=y},16342:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434));r(n(18698));var o=a(n(67294));r(n(24644));var c=r(n(49664)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},s=o.forwardRef(function(e,t){var n=e.ellipsis,a=e.rel,r=__rest(e,["ellipsis","rel"]),s=(0,l.default)((0,l.default)({},r),{rel:void 0===a&&"_blank"===r.target?"noopener noreferrer":a});return delete s.navigate,o.createElement(c.default,(0,l.default)({},s,{ref:t,ellipsis:!!n,component:"a"}))});t.default=s},31169:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=a(n(67294)),c=r(n(49664)),s=o.forwardRef(function(e,t){return o.createElement(c.default,(0,l.default)({ref:t},e,{component:"div"}))});t.default=s},78066:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(18698)),c=r(n(27648)),s=a(n(67294));r(n(24644));var u=r(n(49664)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};t.default=s.forwardRef(function(e,t){var n=e.ellipsis,a=__rest(e,["ellipsis"]),r=s.useMemo(function(){return n&&"object"===(0,o.default)(n)?(0,c.default)(n,["expandable","rows"]):n},[n]);return s.createElement(u.default,(0,l.default)({ref:t},a,{ellipsis:r,component:"span"}))})},32271:function(e,t,n){"use strict";var a=n(64836).default;t.default=void 0;var r=a(n(16342)),l=a(n(31169)),o=a(n(78066)),c=a(n(40461)),s=a(n(2284)).default;s.Text=o.default,s.Link=r.default,s.Title=c.default,s.Paragraph=l.default,t.default=s},67766:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(91374),l=n(32459),o=n(22509),c=n(76157),s=n(55160),u=n(2943),i=n(38482),d=n(79978),f=n(19445),p=n(32271),m=n(92009),v=n(5152),h=n.n(v),b=n(67294),y=n(92863),g=n(89105),x=n(15578);let{Title:w,Paragraph:C}=p.default,O=h()(()=>n.e(2061).then(n.t.bind(n,62061,23)),{loadableGenerated:{webpack:()=>[62061]},ssr:!1}),j={CHAT:{name:"Chat messages",description:"When a user sends a chat message",color:"purple"},USER_JOINED:{name:"User joined",description:"When a user joins the chat",color:"green"},USER_PARTED:{name:"User parted",description:"When a user leaves the chat",color:"green"},NAME_CHANGE:{name:"User name changed",description:"When a user changes their name",color:"blue"},"VISIBILITY-UPDATE":{name:"Message visibility changed",description:"When a message visibility changes, likely due to moderation",color:"red"},STREAM_STARTED:{name:"Stream started",description:"When a stream starts",color:"orange"},STREAM_STOPPED:{name:"Stream stopped",description:"When a stream stops",color:"cyan"},STREAM_TITLE_UPDATED:{name:"Stream title updated",description:"When a stream title is changed",color:"yellow"}};function convertEventStringToTag(e){if(!e||!j[e])return null;let t=j[e];return(0,a.jsx)(m.default,{title:t.description,children:(0,a.jsx)(f.Z,{color:t.color,children:t.name})},e)}let NewWebhookModal=e=>{let{onOk:t,onCancel:n,open:i}=e,[d,f]=(0,b.useState)([]),[p,m]=(0,b.useState)(""),v=Object.keys(j).map(e=>({value:e,label:j[e].description}));function onChange(e){f(e)}function selectAll(){f(Object.keys(j))}function save(){t(p,d),m(""),f(null)}let h={disabled:(null==d?void 0:d.length)===0||!(0,g.jv)(p)},y=v.map(e=>(0,a.jsx)(o.Z,{span:8,children:(0,a.jsx)(l.default,{value:e.value,children:e.label})},e.value));return(0,a.jsxs)(s.default,{title:"Create New Webhook",open:i,onOk:save,onCancel:n,okButtonProps:h,children:[(0,a.jsx)("div",{children:(0,a.jsx)(c.default,{value:p,placeholder:"https://myserver.com/webhook",onChange:e=>m(e.currentTarget.value.trim()),type:"url",pattern:g.ax})}),(0,a.jsx)("p",{children:"Select the events that will be sent to this webhook."}),(0,a.jsx)(l.default.Group,{style:{width:"100%"},value:d,onChange:onChange,children:(0,a.jsx)(u.Z,{children:y})}),(0,a.jsx)("p",{children:(0,a.jsx)(r.default,{type:"primary",onClick:selectAll,children:"Select all"})})]})},Webhooks=()=>{let[e,t]=(0,b.useState)([]),[n,l]=(0,b.useState)(!1);function handleError(e){console.error("error",e)}async function getWebhooks(){try{let e=await (0,y.rQ)(y.XA);t(e)}catch(e){handleError(e)}}async function handleDelete(e){try{await (0,y.rQ)(y.M_,{method:"POST",data:{id:e}}),getWebhooks()}catch(e){handleError(e)}}async function handleSave(n,a){try{let r=await (0,y.rQ)(y.iG,{method:"POST",data:{url:n,events:a}});t(e.concat(r))}catch(e){handleError(e)}}(0,b.useEffect)(()=>{getWebhooks()},[]);let o=[{title:"",key:"delete",render:(e,t)=>(0,a.jsx)(i.default,{size:"middle",children:(0,a.jsx)(r.default,{onClick:()=>handleDelete(t.id),icon:(0,a.jsx)(O,{})})})},{title:"URL",dataIndex:"url",key:"url"},{title:"Events",dataIndex:"events",key:"events",render:e=>(0,a.jsx)(a.Fragment,{children:e.map(e=>convertEventStringToTag(e))})}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(w,{children:"Webhooks"}),(0,a.jsx)(C,{children:"A webhook is a callback made to an external API in response to an event that takes place within Owncast. This can be used to build chat bots or sending automatic notifications that you've started streaming."}),(0,a.jsxs)(C,{children:["Read more about how to use webhooks, with examples, at"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,a.jsx)(d.Z,{rowKey:e=>e.id,columns:o,dataSource:e,pagination:!1}),(0,a.jsx)("br",{}),(0,a.jsx)(r.default,{type:"primary",onClick:()=>{l(!0)},children:"Create Webhook"}),(0,a.jsx)(NewWebhookModal,{open:n,onOk:(e,t)=>{l(!1),handleSave(e,t)},onCancel:()=>{l(!1)}})]})};Webhooks.getLayout=function(e){return(0,a.jsx)(x.l,{page:e})},t.default=Webhooks},11163:function(e,t,n){e.exports=n(59974)}},function(e){e.O(0,[5596,329,666,3543,6157,2606,9374,1002,1664,9020,461,2122,7752,6355,6532,4333,6386,1611,5578,9774,2888,179],function(){return e(e.s=67742)}),_N_E=e.O()}]);