(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{93645:function(e,t,a){"use strict";a.d(t,{u:function(){return getRoundingMethod}});var l={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function getRoundingMethod(e){return e?l[e]:l.trunc}},59910:function(e,t,a){"use strict";a.d(t,{Z:function(){return differenceInMilliseconds}});var l=a(19013),n=a(13882);function differenceInMilliseconds(e,t){return(0,n.Z)(2,arguments),(0,l.Z)(e).getTime()-(0,l.Z)(t).getTime()}},11699:function(e,t,a){"use strict";a.d(t,{Z:function(){return differenceInSeconds}});var l=a(59910),n=a(13882),r=a(93645);function differenceInSeconds(e,t,a){(0,n.Z)(2,arguments);var o=(0,l.Z)(e,t)/1e3;return(0,r.u)(null==a?void 0:a.roundingMethod)(o)}},81009:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-social-items",function(){return a(48735)}])},55925:function(e,t,a){"use strict";a.d(t,{Z:function(){return EditSocialLinks}});var l=a(85893),n=a(67294),r=a(32271),o=a(79978),s=a(91374),i=a(55160),c=a(76157),d=a(5152),u=a.n(d),f=a(74333),p=a(25588);let SocialDropdown=e=>{let{iconList:t,selectedOption:a,onSelected:n}=e,r=""===a?null:a;return(0,l.jsxs)("div",{className:"social-dropdown-container",children:[(0,l.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,l.jsxs)("div",{className:"formfield-container",children:[(0,l.jsx)("div",{className:"label-side",children:(0,l.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,l.jsx)("div",{className:"input-side",children:(0,l.jsxs)(f.default,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:r,value:r,onSelect:e=>{n&&n(e)},children:[t.map(e=>{let{platform:t,icon:a,key:n}=e;return(0,l.jsxs)(f.default.Option,{className:"social-option",value:n,children:[(0,l.jsx)("span",{className:"option-icon",children:(0,l.jsx)("img",{src:a,alt:"",className:"option-icon"})}),(0,l.jsx)("span",{className:"option-label",children:t})]},"platform-".concat(n))}),(0,l.jsx)(f.default.Option,{className:"social-option",value:p.z_,children:"Other..."},"platform-".concat(p.z_))]})})]})]})};var m=a(92863),v=a(18454),h=a(89105),x=a(5751),b=a(75554),g=a(37383);let{Title:j}=r.default,y=u()(()=>Promise.resolve().then(a.t.bind(a,18149,23)),{loadableGenerated:{webpack:()=>[18149]},ssr:!1}),w=u()(()=>Promise.resolve().then(a.t.bind(a,67356,23)),{loadableGenerated:{webpack:()=>[67356]},ssr:!1}),N=u()(()=>a.e(2061).then(a.t.bind(a,62061,23)),{loadableGenerated:{webpack:()=>[62061]},ssr:!1});function EditSocialLinks(){var e;let[t,a]=(0,n.useState)([]),[r,d]=(0,n.useState)([]),[u,f]=(0,n.useState)(!1),[O,S]=(0,n.useState)(!1),[_,C]=(0,n.useState)(!1),[M,E]=(0,n.useState)(-1),[I,P]=(0,n.useState)(p.wC),[k,T]=(0,n.useState)(null),R=(0,n.useContext)(v.a),{serverConfig:U,setFieldInConfigState:z}=R||{},{instanceDetails:A}=U,{socialHandles:Z}=A,getAvailableIcons=async()=>{try{let e=await (0,m.rQ)(m.$i,{auth:!1}),t=Object.keys(e).map(t=>({key:t,...e[t]}));a(t)}catch(e){console.log(e)}},isPredefinedSocial=e=>t.find(t=>t.key===e)||!1,D=""!==I.platform&&!t.find(e=>e.key===I.platform);(0,n.useEffect)(()=>{getAvailableIcons()},[]),(0,n.useEffect)(()=>{A.socialHandles&&d(Z)},[A]);let resetStates=()=>{T(null),clearTimeout(null)},resetModal=()=>{f(!1),E(-1),S(!1),C(!1),P({...p.wC})},handleModalCancel=()=>{resetModal()},updateModalState=(e,t)=>{P({...I,[e]:t})},postUpdateToAPI=async e=>{await (0,p.Si)({apiPath:p.c9,data:{value:e},onSuccess:()=>{z({fieldName:"socialHandles",value:e,path:"instanceDetails"}),C(!1),handleModalCancel(),T((0,b.kg)(b.zv)),setTimeout(resetStates,p.sI)},onError:e=>{T((0,b.kg)(b.Un,"There was an error: ".concat(e))),C(!1),setTimeout(resetStates,p.sI)}})},handleDeleteItem=e=>{let t=[...r];t.splice(e,1),postUpdateToAPI(t)},handleMoveItemUp=e=>{if(e<=0||e>=r.length)return;let t=[...r],a=t[e-1];t[e-1]=t[e],t[e]=a,postUpdateToAPI(t)},handleMoveItemDown=e=>{if(e<0||e>=r.length-1)return;let t=[...r],a=t[e+1];t[e+1]=t[e],t[e]=a,postUpdateToAPI(t)},L=[{title:"Social Link",dataIndex:"",key:"combo",render:(e,t)=>{let{platform:a,url:n}=t,r=isPredefinedSocial(a);if(!r)return(0,l.jsx)("div",{className:"social-handle-cell",children:(0,l.jsxs)("p",{className:"option-label",children:[(0,l.jsx)("strong",{children:a}),(0,l.jsx)("span",{className:"handle-url",title:n,children:n})]})});let{icon:o,platform:s}=r;return(0,l.jsxs)("div",{className:"social-handle-cell",children:[(0,l.jsx)("span",{className:"option-icon",children:(0,l.jsx)("img",{src:o,alt:"",className:"option-icon"})}),(0,l.jsxs)("p",{className:"option-label",children:[(0,l.jsx)("strong",{children:s}),(0,l.jsx)("span",{className:"handle-url",title:n,children:n})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,t,a)=>(0,l.jsxs)("div",{className:"actions",children:[(0,l.jsx)(s.default,{size:"small",onClick:()=>{let e=r[a];E(a),P({...e}),f(!0),isPredefinedSocial(e.platform)||S(!0)},children:"Edit"}),(0,l.jsx)(s.default,{icon:(0,l.jsx)(w,{}),size:"small",hidden:0===a,onClick:()=>handleMoveItemUp(a)}),(0,l.jsx)(s.default,{icon:(0,l.jsx)(y,{}),size:"small",hidden:a===r.length-1,onClick:()=>handleMoveItemDown(a)}),(0,l.jsx)(s.default,{className:"delete-button",icon:(0,l.jsx)(N,{}),size:"small",onClick:()=>handleDeleteItem(a)})]})}],H={disabled:(e=I.url,"xmpp"===I.platform?!(0,h.Kf)(e,"xmpp"):!(0,h.jv)(e))},F=(0,l.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,l.jsx)("div",{className:"label-side"}),(0,l.jsx)("div",{className:"input-side",children:(0,l.jsx)(c.default,{placeholder:"Other platform name",defaultValue:I.platform,onChange:e=>{let{value:t}=e.target;updateModalState("platform",t)}})})]});return(0,l.jsxs)("div",{className:"social-links-edit-container",children:[(0,l.jsx)(j,{level:3,className:"section-title",children:"Your Social Handles"}),(0,l.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,l.jsx)(g.E,{status:k}),(0,l.jsx)(o.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:L,dataSource:r}),(0,l.jsx)(i.default,{title:"Edit Social Handle",open:u,onOk:()=>{C(!0);let e=r.length?[...r]:[];-1===M?e.push(I):e.splice(M,1,I),postUpdateToAPI(e)},onCancel:handleModalCancel,confirmLoading:_,okButtonProps:H,children:(0,l.jsxs)("div",{className:"social-handle-modal-content",children:[(0,l.jsx)(SocialDropdown,{iconList:t,selectedOption:D?p.z_:I.platform,onSelected:e=>{e===p.z_?(S(!0),updateModalState("platform","")):(S(!1),updateModalState("platform",e))}}),O&&F,(0,l.jsx)("br",{}),(0,l.jsx)(x.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[I.platform]||"Url to page",value:I.url,onChange:e=>{let{value:t}=e;updateModalState("url",t)},useTrim:!0,type:"url",pattern:h.ax}),(0,l.jsx)(g.E,{status:k})]})}),(0,l.jsx)("br",{}),(0,l.jsx)(s.default,{type:"primary",onClick:()=>{resetModal(),f(!0)},children:"Add a new social link"})]})}},16919:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}},53985:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=_interopRequireDefault(a(76942));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=l,e.exports=l},76942:function(e,t,a){"use strict";var l=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(42122)),o=_interopRequireWildcard(a(67294)),s=l(a(16919)),i=l(a(61081));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_getRequireWildcardCache=function(e){return e?a:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=_getRequireWildcardCache(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=r?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(l,o,s):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}var UpOutlined=function(e,t){return o.createElement(i.default,(0,r.default)((0,r.default)({},e),{},{ref:t,icon:s.default}))};UpOutlined.displayName="UpOutlined";var c=o.forwardRef(UpOutlined);t.default=c},1558:function(e,t,a){"use strict";var l=a(75263).default,n=a(64836).default;t.Z=void 0;var r=n(a(10434)),o=n(a(38416)),s=n(a(18698)),i=n(a(27424)),c=n(a(38900)),d=n(a(53985)),u=n(a(93967)),f=n(a(82122)),p=l(a(67294)),m=a(1530),v=n(a(8872)),h=n(a(88241)),x=a(90329),b=a(72380),g=a(24702),j=a(42934),__rest=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]]);return a},y=p.forwardRef(function(e,t){var a=p.useContext(m.ConfigContext),l=a.getPrefixCls,n=a.direction,y=p.useContext(h.default),w=p.useState(!1),N=(0,i.default)(w,2),O=N[0],S=N[1],_=p.useRef(null);p.useImperativeHandle(t,function(){return _.current});var C=e.className,M=e.size,E=e.disabled,I=e.prefixCls,P=e.addonBefore,k=e.addonAfter,T=e.prefix,R=e.bordered,U=void 0===R||R,z=e.readOnly,A=e.status,Z=e.controls,D=__rest(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),L=l("input-number",I),H=(0,b.useCompactItemContext)(L,n),F=H.compactSize,W=H.compactItemClassnames,q=p.createElement(d.default,{className:"".concat(L,"-handler-up-inner")}),B=p.createElement(c.default,{className:"".concat(L,"-handler-down-inner")}),G="boolean"==typeof Z?Z:void 0;"object"===(0,s.default)(Z)&&(q=void 0===Z.upIcon?q:p.createElement("span",{className:"".concat(L,"-handler-up-inner")},Z.upIcon),B=void 0===Z.downIcon?B:p.createElement("span",{className:"".concat(L,"-handler-down-inner")},Z.downIcon));var K=(0,p.useContext)(x.FormItemInputContext),V=K.hasFeedback,X=K.status,Q=K.isFormItemInput,Y=K.feedbackIcon,$=(0,j.getMergedStatus)(X,A),J=F||M||y,ee=p.useContext(v.default),et=null!=E?E:ee,ea=(0,u.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)({},"".concat(L,"-lg"),"large"===J),"".concat(L,"-sm"),"small"===J),"".concat(L,"-rtl"),"rtl"===n),"".concat(L,"-borderless"),!U),"".concat(L,"-in-form-item"),Q),(0,j.getStatusClassNames)(L,$),W,C),el=p.createElement(f.default,(0,r.default)({ref:_,disabled:et,className:ea,upHandler:q,downHandler:B,prefixCls:L,readOnly:z,controls:G},D));if(null!=T||V){var en=(0,u.default)("".concat(L,"-affix-wrapper"),(0,j.getStatusClassNames)("".concat(L,"-affix-wrapper"),$,V),(0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)({},"".concat(L,"-affix-wrapper-focused"),O),"".concat(L,"-affix-wrapper-disabled"),e.disabled),"".concat(L,"-affix-wrapper-sm"),"small"===y),"".concat(L,"-affix-wrapper-lg"),"large"===y),"".concat(L,"-affix-wrapper-rtl"),"rtl"===n),"".concat(L,"-affix-wrapper-readonly"),z),"".concat(L,"-affix-wrapper-borderless"),!U),"".concat(C),!(P||k)&&C));el=p.createElement("div",{className:en,style:e.style,onMouseUp:function(){return _.current.focus()}},T&&p.createElement("span",{className:"".concat(L,"-prefix")},T),(0,g.cloneElement)(el,{style:null,value:e.value,onFocus:function(t){var a;S(!0),null===(a=e.onFocus)||void 0===a||a.call(e,t)},onBlur:function(t){var a;S(!1),null===(a=e.onBlur)||void 0===a||a.call(e,t)}}),V&&p.createElement("span",{className:"".concat(L,"-suffix")},Y))}if(null!=P||null!=k){var er="".concat(L,"-group"),eo="".concat(er,"-addon"),es=P?p.createElement("div",{className:eo},P):null,ei=k?p.createElement("div",{className:eo},k):null,ec=(0,u.default)("".concat(L,"-wrapper"),er,(0,o.default)({},"".concat(er,"-rtl"),"rtl"===n)),ed=(0,u.default)("".concat(L,"-group-wrapper"),(0,o.default)((0,o.default)((0,o.default)({},"".concat(L,"-group-wrapper-sm"),"small"===y),"".concat(L,"-group-wrapper-lg"),"large"===y),"".concat(L,"-group-wrapper-rtl"),"rtl"===n),(0,j.getStatusClassNames)("".concat(L,"-group-wrapper"),$,V),C);el=p.createElement("div",{className:ed,style:e.style},p.createElement("div",{className:ec},es&&p.createElement(b.NoCompactStyle,null,p.createElement(x.NoFormStyle,{status:!0,override:!0},es)),(0,g.cloneElement)(el,{style:null,disabled:et}),ei&&p.createElement(b.NoCompactStyle,null,p.createElement(x.NoFormStyle,{status:!0,override:!0},ei))))}return el});t.Z=y},76171:function(e,t,a){"use strict";var l=a(75263).default;t.default=void 0;var n=l(a(21494)),r=l(a(65625)),o=n.default;o.Header=n.Header,o.Footer=n.Footer,o.Content=n.Content,o.Sider=r.default,o._InternalSiderContext=r.SiderContext,t.default=o},16342:function(e,t,a){"use strict";var l=a(75263).default,n=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(10434));n(a(18698));var o=l(a(67294));n(a(24644));var s=n(a(49664)),__rest=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]]);return a},i=o.forwardRef(function(e,t){var a=e.ellipsis,l=e.rel,n=__rest(e,["ellipsis","rel"]),i=(0,r.default)((0,r.default)({},n),{rel:void 0===l&&"_blank"===n.target?"noopener noreferrer":l});return delete i.navigate,o.createElement(s.default,(0,r.default)({},i,{ref:t,ellipsis:!!a,component:"a"}))});t.default=i},31169:function(e,t,a){"use strict";var l=a(75263).default,n=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(10434)),o=l(a(67294)),s=n(a(49664)),i=o.forwardRef(function(e,t){return o.createElement(s.default,(0,r.default)({ref:t},e,{component:"div"}))});t.default=i},78066:function(e,t,a){"use strict";var l=a(75263).default,n=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(10434)),o=n(a(18698)),s=n(a(27648)),i=l(a(67294));n(a(24644));var c=n(a(49664)),__rest=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]]);return a};t.default=i.forwardRef(function(e,t){var a=e.ellipsis,l=__rest(e,["ellipsis"]),n=i.useMemo(function(){return a&&"object"===(0,o.default)(a)?(0,s.default)(a,["expandable","rows"]):a},[a]);return i.createElement(c.default,(0,r.default)({ref:t},l,{ellipsis:n,component:"span"}))})},32271:function(e,t,a){"use strict";var l=a(64836).default;t.default=void 0;var n=l(a(16342)),r=l(a(31169)),o=l(a(78066)),s=l(a(40461)),i=l(a(2284)).default;i.Text=o.default,i.Link=n.default,i.Title=s.default,i.Paragraph=r.default,t.default=i},48735:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ConfigSocialThings}});var l=a(85893);a(67294);var n=a(32271),r=a(55925),o=a(15578);let{Title:s}=n.default;function ConfigSocialThings(){return(0,l.jsxs)("div",{className:"config-social-items",children:[(0,l.jsx)(s,{children:"Social Items"}),(0,l.jsx)(r.Z,{})]})}ConfigSocialThings.getLayout=function(e){return(0,l.jsx)(o.l,{page:e})}},11163:function(e,t,a){e.exports=a(59974)}},function(e){e.O(0,[5596,329,666,3543,6157,2606,9374,1002,1664,9020,461,2122,7752,6355,6532,4333,6386,1611,5578,9774,2888,179],function(){return e(e.s=81009)}),_N_E=e.O()}]);