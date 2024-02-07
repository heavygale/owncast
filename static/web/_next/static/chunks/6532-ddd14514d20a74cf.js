"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6532],{67974:function(e,t,n){var o=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),r=a(n(27424)),i=a(n(13210)),u=a(n(93967)),s=o(n(67294)),c=a(n(91374)),d=n(1530),p=n(72380),f=a(n(79614)),v=a(n(38482)),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n},DropdownButton=function(e){var t=s.useContext(d.ConfigContext),n=t.getPopupContainer,o=t.getPrefixCls,a=t.direction,m=e.prefixCls,g=e.type,y=void 0===g?"default":g,C=e.danger,b=e.disabled,h=e.loading,w=e.onClick,O=e.htmlType,E=e.children,P=e.className,N=e.menu,x=e.arrow,D=e.autoFocus,A=e.overlay,R=e.trigger,k=e.align,_=e.visible,M=e.open,L=e.onVisibleChange,S=e.onOpenChange,j=e.placement,T=e.getPopupContainer,V=e.href,F=e.icon,Z=void 0===F?s.createElement(i.default,null):F,B=e.title,I=e.buttonsRender,H=e.mouseEnterDelay,K=e.mouseLeaveDelay,W=e.overlayClassName,z=e.overlayStyle,U=e.destroyPopupOnHide,X=__rest(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","visible","open","onVisibleChange","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide"]),Y=o("dropdown-button",m),q={menu:N,arrow:x,autoFocus:D,align:k,disabled:b,trigger:b?[]:R,onOpenChange:S||L,getPopupContainer:T||n,mouseEnterDelay:H,mouseLeaveDelay:K,overlayClassName:W,overlayStyle:z,destroyPopupOnHide:U},G=(0,p.useCompactItemContext)(Y,a),J=G.compactSize,Q=G.compactItemClassnames,$=(0,u.default)(Y,Q,P);"overlay"in e&&(q.overlay=A),"open"in e?q.open=M:"visible"in e&&(q.open=_),"placement"in e?q.placement=j:q.placement="rtl"===a?"bottomLeft":"bottomRight";var ee=(void 0===I?function(e){return e}:I)([s.createElement(c.default,{type:y,danger:C,disabled:b,loading:h,onClick:w,htmlType:O,href:V,title:B},E),s.createElement(c.default,{type:y,danger:C,icon:Z})]),et=(0,r.default)(ee,2),en=et[0],eo=et[1];return s.createElement(v.default.Compact,(0,l.default)({className:$,size:J,block:!0},X),en,s.createElement(f.default,(0,l.default)({},q),eo))};DropdownButton.__ANT_BUTTON=!0,t.default=DropdownButton},79614:function(e,t,n){var o=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),r=a(n(18698)),i=a(n(38416)),u=a(n(27424)),s=a(n(28748)),c=a(n(93967)),d=a(n(60057)),p=a(n(79544)),f=a(n(96204)),v=o(n(67294)),m=a(n(98982)),g=n(1530),y=n(14083),C=a(n(12542)),b=n(24702),h=n(24404);a(n(24644));var w=a(n(67974)),O=n(72380);(0,h.tuple)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight","top","bottom");var Dropdown=function(e){var t,n,o,a,h,w=v.useContext(g.ConfigContext),E=w.getPopupContainer,P=w.getPrefixCls,N=w.direction,x=e.menu,D=e.arrow,A=e.prefixCls,R=e.children,k=e.trigger,_=e.disabled,M=e.dropdownRender,L=e.getPopupContainer,S=e.overlayClassName,j=e.visible,T=e.open,V=e.onVisibleChange,F=e.onOpenChange,Z=e.mouseEnterDelay,B=e.mouseLeaveDelay,I=e.autoAdjustOverflow,H=P("dropdown",A),K=v.Children.only(R),W=(0,b.cloneElement)(K,{className:(0,c.default)("".concat(H,"-trigger"),(0,i.default)({},"".concat(H,"-rtl"),"rtl"===N),K.props.className),disabled:_}),z=_?[]:k;z&&z.includes("contextMenu")&&(h=!0);var U=(0,f.default)(!1,{value:void 0!==T?T:j}),X=(0,u.default)(U,2),Y=X[0],q=X[1],G=(0,p.default)(function(e){null==V||V(e),null==F||F(e),q(e)}),J=(0,c.default)(S,(0,i.default)({},"".concat(H,"-rtl"),"rtl"===N)),Q=(0,C.default)({arrowPointAtCenter:"object"===(0,r.default)(D)&&D.pointAtCenter,autoAdjustOverflow:void 0===I||I}),$=v.useCallback(function(){q(!1)},[]);return v.createElement(d.default,(0,l.default)({alignPoint:h},e,{mouseEnterDelay:void 0===Z?.15:Z,mouseLeaveDelay:void 0===B?.1:B,visible:Y,builtinPlacements:Q,arrow:!!D,overlayClassName:J,prefixCls:H,getPopupContainer:L||E,transitionName:(t=P(),n=e.placement,void 0!==(o=e.transitionName)?o:(void 0===n?"":n).includes("top")?"".concat(t,"-slide-down"):"".concat(t,"-slide-up")),trigger:z,overlay:function(){var t,n=e.overlay;return t=(null==x?void 0:x.items)?v.createElement(m.default,(0,l.default)({},x)):"function"==typeof n?n():n,M&&(t=M(t)),t=v.Children.only("string"==typeof t?v.createElement("span",null,t):t),v.createElement(y.OverrideProvider,{prefixCls:"".concat(H,"-menu"),expandIcon:v.createElement("span",{className:"".concat(H,"-menu-submenu-arrow")},v.createElement(s.default,{className:"".concat(H,"-menu-submenu-arrow-icon")})),mode:"vertical",selectable:!1,onClick:$,validator:function(e){e.mode}},v.createElement(O.NoCompactStyle,null,t))},placement:(a=e.placement)?a.includes("Center")?a.slice(0,a.indexOf("Center")):a:"rtl"===N?"bottomRight":"bottomLeft",onVisibleChange:G}),W)};Dropdown.Button=w.default,t.default=Dropdown},86532:function(e,t,n){var o=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(79614));t.default=a.default},60057:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var o=n(4942),a=n(1413),l=n(97685),r=n(45987),i=n(67294),u=n(15118),s=n(93967),c=n.n(s),d={adjustX:1,adjustY:1},p=[0,0],f={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:p},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:p},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:p},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:p},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:p},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:p}},v=n(70584),m=n(65123),g=n(19807),y=v.Z.ESC,C=v.Z.TAB;function useAccessibility(e){var t=e.visible,n=e.setTriggerVisible,o=e.triggerRef,a=e.onVisibleChange,l=e.autoFocus,r=i.useRef(!1),handleCloseMenuAndReturnFocus=function(){if(t&&o.current){var e,l,r,i;null===(e=o.current)||void 0===e||null===(l=e.triggerRef)||void 0===l||null===(r=l.current)||void 0===r||null===(i=r.focus)||void 0===i||i.call(r),n(!1),"function"==typeof a&&a(!1)}},focusMenu=function(){var e,t,n,a,l=(0,g.tS)(null===(e=o.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(a=n.getElement)||void 0===a?void 0:a.call(n))[0];return null!=l&&!!l.focus&&(l.focus(),r.current=!0,!0)},handleKeyDown=function(e){switch(e.keyCode){case y:handleCloseMenuAndReturnFocus();break;case C:var t=!1;r.current||(t=focusMenu()),t?e.preventDefault():handleCloseMenuAndReturnFocus()}};i.useEffect(function(){return t?(window.addEventListener("keydown",handleKeyDown),l&&(0,m.Z)(focusMenu,3),function(){window.removeEventListener("keydown",handleKeyDown),r.current=!1}):function(){r.current=!1}},[t])}var b=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Dropdown(e,t){var n,s,d,p,v,m,g=e.arrow,y=void 0!==g&&g,C=e.prefixCls,h=void 0===C?"rc-dropdown":C,w=e.transitionName,O=e.animation,E=e.align,P=e.placement,N=e.placements,x=void 0===N?f:N,D=e.getPopupContainer,A=e.showAction,R=e.hideAction,k=e.overlayClassName,_=e.overlayStyle,M=e.visible,L=e.trigger,S=void 0===L?["hover"]:L,j=e.autoFocus,T=(0,r.Z)(e,b),V=i.useState(),F=(0,l.Z)(V,2),Z=F[0],B=F[1],I="visible"in e?M:Z,H=i.useRef(null);i.useImperativeHandle(t,function(){return H.current}),useAccessibility({visible:I,setTriggerVisible:B,triggerRef:H,onVisibleChange:e.onVisibleChange,autoFocus:j});var getOverlayElement=function(){var t=e.overlay;return"function"==typeof t?t():t},getMenuElement=function(){var e=getOverlayElement();return i.createElement(i.Fragment,null,y&&i.createElement("div",{className:"".concat(h,"-arrow")}),e)},K=R;return K||-1===S.indexOf("contextMenu")||(K=["click"]),i.createElement(u.Z,(0,a.Z)((0,a.Z)({builtinPlacements:x},T),{},{prefixCls:h,ref:H,popupClassName:c()(k,(0,o.Z)({},"".concat(h,"-show-arrow"),y)),popupStyle:_,action:S,showAction:A,hideAction:K||[],popupPlacement:void 0===P?"bottomLeft":P,popupAlign:E,popupTransitionName:w,popupAnimation:O,popupVisible:I,stretch:(s=e.minOverlayWidthMatchTrigger,d=e.alignPoint,"minOverlayWidthMatchTrigger"in e?s:!d)?"minWidth":"",popup:"function"==typeof e.overlay?getMenuElement:getMenuElement(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;B(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;B(!1),n&&n(t)},getPopupContainer:D}),(v=(p=e.children).props?p.props:{},m=c()(v.className,void 0!==(n=e.openClassName)?n:"".concat(h,"-open")),I&&p?i.cloneElement(p,{className:m}):p))}var h=i.forwardRef(Dropdown)}}]);