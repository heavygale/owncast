(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9798],{99798:function(e,n,t){"use strict";t.r(n),t.d(n,{UserDropdown:function(){return UserDropdown}});var o=t(85893),r=t(86532),a=t(91374),i=t(93967),l=t.n(i),s=t(4480),u=t(67294),c=t(46977),d=t(5152),p=t.n(d),y=t(4511),f=t(73580),h=t(32703),v=t.n(h),b=t(50057);let m=p()(()=>t.e(8149).then(t.t.bind(t,18149,23)),{loadableGenerated:{webpack:()=>[18149]},ssr:!1}),k=p()(()=>t.e(5940).then(t.t.bind(t,35940,23)),{loadableGenerated:{webpack:()=>[35940]},ssr:!1}),g=p()(()=>t.e(9958).then(t.t.bind(t,59958,23)),{loadableGenerated:{webpack:()=>[59958]},ssr:!1}),w=p()(()=>t.e(7573).then(t.t.bind(t,77573,23)),{loadableGenerated:{webpack:()=>[77573]},ssr:!1}),E=p()(()=>t.e(1572).then(t.t.bind(t,51572,23)),{loadableGenerated:{webpack:()=>[51572]},ssr:!1}),C=p()(()=>t.e(4172).then(t.t.bind(t,84172,23)),{loadableGenerated:{webpack:()=>[84172]},ssr:!1}),K=p()(()=>t.e(3863).then(t.t.bind(t,3863,23)),{loadableGenerated:{webpack:()=>[3863]},ssr:!1}),P=p()(()=>Promise.all([t.e(329),t.e(1002),t.e(5849)]).then(t.bind(t,95849)).then(e=>e.Modal),{loadableGenerated:{webpack:()=>[95849]},ssr:!1}),L=p()(()=>Promise.all([t.e(5596),t.e(329),t.e(666),t.e(6157),t.e(9020),t.e(7752),t.e(4333),t.e(4653)]).then(t.bind(t,57283)).then(e=>e.NameChangeModal),{loadableGenerated:{webpack:()=>[57283]},ssr:!1}),D=p()(()=>Promise.all([t.e(5596),t.e(329),t.e(666),t.e(6157),t.e(461),t.e(3068),t.e(2336),t.e(3195)]).then(t.bind(t,36531)).then(e=>e.AuthModal),{loadableGenerated:{webpack:()=>[36531]},ssr:!1}),UserDropdown=e=>{let{id:n,username:t,hideTitleOnMobile:i=!1,showToggleChatOption:d=!0}=e,[p,h]=(0,u.useState)(!1),[_,H]=(0,u.useState)(!1),[I,x]=(0,s.FV)(f.vZ),[j,A]=(0,u.useState)(null),S=(0,s.sJ)(f.Q),toggleChatVisibility=()=>{d&&x(I===f.gG.VISIBLE?f.gG.HIDDEN:f.gG.VISIBLE)},closeChangeNameModal=()=>{h(!1)},closeChatPopup=()=>{j&&j.close(),A(null),x(f.gG.VISIBLE)},G=d&&S.chatAvailable&&(I===f.gG.HIDDEN||I===f.gG.VISIBLE),O=d&&S.chatAvailable&&(I===f.gG.HIDDEN||I===f.gG.VISIBLE||I===f.gG.POPPED_OUT);(0,c.y1)("c",toggleChatVisibility,{enableOnContentEditable:!1},[I===f.gG.VISIBLE]);let M=(0,s.sJ)(f.db);if(!M)return null;let{displayName:N}=M,T=[{key:0,icon:(0,o.jsx)(k,{}),label:"Change name",onClick:()=>{h(!0)}},{key:1,icon:(0,o.jsx)(g,{}),label:"Authenticate",onClick:()=>H(!0)}];return G&&T.push({key:3,"aria-expanded":I===f.gG.VISIBLE,className:v().chatToggle,icon:(0,o.jsx)(C,{}),label:I===f.gG.VISIBLE?"Hide Chat":"Show Chat",onClick:toggleChatVisibility}),O&&T.push({key:4,icon:j?(0,o.jsx)(w,{}):(0,o.jsx)(E,{}),label:j?"Put chat back":"Pop out chat",onClick:j?closeChatPopup:()=>{closeChatPopup();let e=window.open("/embed/chat/readwrite","_blank","popup");e.addEventListener("beforeunload",closeChatPopup),A(e),x(f.gG.POPPED_OUT)}}),(0,o.jsx)(y.SV,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,o.jsx)(b.A,{componentName:"UserDropdown",message:n.message,retryFunction:t})},children:(0,o.jsxs)("div",{className:v().root,children:[(0,o.jsx)(r.default,{menu:{items:T},trigger:["click"],children:(0,o.jsxs)(a.default,{id:n,type:"primary",icon:(0,o.jsx)(K,{className:v().userIcon}),children:[(0,o.jsx)("span",{className:l()([v().username,i&&v().hideTitleOnMobile]),children:t||N}),(0,o.jsx)(m,{})]})}),(0,o.jsx)(P,{title:"Change Chat Display Name",open:p,handleCancel:closeChangeNameModal,children:(0,o.jsx)(L,{closeModal:closeChangeNameModal})}),(0,o.jsx)(P,{title:"Authenticate",open:_,handleCancel:()=>H(!1),children:(0,o.jsx)(D,{})})]})})}},32703:function(e){e.exports={root:"UserDropdown_root__XCKtE","ant-space":"UserDropdown_ant-space__NT8a9","ant-space-item":"UserDropdown_ant-space-item__D6AUQ",username:"UserDropdown_username__1vJf_",hideTitleOnMobile:"UserDropdown_hideTitleOnMobile__Nd7fp",chatToggle:"UserDropdown_chatToggle__MEP4e"}},46977:function(e,n,t){"use strict";t.d(n,{y1:function(){return useHotkeys}});var o=t(67294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t(85893);var r=["shift","alt","meta","mod","ctrl"],a={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function mapKey(e){return(a[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function isHotkeyModifier(e){return r.includes(e)}function parseKeysHookInput(e,n){return void 0===n&&(n=","),e.split(n)}function parseHotkey(e,n,t){void 0===n&&(n="+");var o=e.toLocaleLowerCase().split(n).map(function(e){return mapKey(e)}),a={alt:o.includes("alt"),ctrl:o.includes("ctrl")||o.includes("control"),shift:o.includes("shift"),meta:o.includes("meta"),mod:o.includes("mod")},i=o.filter(function(e){return!r.includes(e)});return _extends({},a,{keys:i,description:t})}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&pushToCurrentlyPressedKeys([mapKey(e.key),mapKey(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&removeFromCurrentlyPressedKeys([mapKey(e.key),mapKey(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){i.clear()});var i=new Set;function isReadonlyArray(e){return Array.isArray(e)}function isHotkeyPressed(e,n){return void 0===n&&(n=","),(isReadonlyArray(e)?e:e.split(n)).every(function(e){return i.has(e.trim().toLowerCase())})}function pushToCurrentlyPressedKeys(e){var n=Array.isArray(e)?e:[e];i.has("meta")&&i.forEach(function(e){return!isHotkeyModifier(e)&&i.delete(e.toLowerCase())}),n.forEach(function(e){return i.add(e.toLowerCase())})}function removeFromCurrentlyPressedKeys(e){var n=Array.isArray(e)?e:[e];"meta"===e?i.clear():n.forEach(function(e){return i.delete(e.toLowerCase())})}function maybePreventDefault(e,n,t){("function"==typeof t&&t(e,n)||!0===t)&&e.preventDefault()}function isHotkeyEnabled(e,n,t){return"function"==typeof t?t(e,n):!0===t||void 0===t}function isKeyboardEventTriggeredByInput(e){return isHotkeyEnabledOnTag(e,["input","textarea","select"])}function isHotkeyEnabledOnTag(e,n){var t=e.target;void 0===n&&(n=!1);var o=t&&t.tagName;return isReadonlyArray(n)?!!(o&&n&&n.some(function(e){return e.toLowerCase()===o.toLowerCase()})):!!(o&&n&&!0===n)}function isScopeActive(e,n){return 0===e.length&&n?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!n||e.some(function(e){return n.includes(e)})||e.includes("*")}var isHotkeyMatchingKeyboardEvent=function(e,n,t){void 0===t&&(t=!1);var o=n.alt,r=n.meta,a=n.mod,i=n.shift,l=n.ctrl,s=n.keys,u=e.key,c=e.code,d=e.ctrlKey,p=e.metaKey,y=e.shiftKey,f=e.altKey,h=mapKey(c),v=u.toLowerCase();if(!(null!=s&&s.includes(h))&&!(null!=s&&s.includes(v))&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(h))return!1;if(!t){if(!f===o&&"alt"!==v||!y===i&&"shift"!==v)return!1;if(a){if(!p&&!d)return!1}else if(!p===r&&"meta"!==v&&"os"!==v||!d===l&&"ctrl"!==v&&"control"!==v)return!1}return!!(s&&1===s.length&&(s.includes(v)||s.includes(h)))||(s?isHotkeyPressed(s):!s)},l=(0,o.createContext)(void 0);function deepEqual(e,n){return e&&n&&"object"==typeof e&&"object"==typeof n?Object.keys(e).length===Object.keys(n).length&&Object.keys(e).reduce(function(t,o){return t&&deepEqual(e[o],n[o])},!0):e===n}var s=(0,o.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}});function useDeepEqualMemo(e){var n=(0,o.useRef)(void 0);return deepEqual(n.current,e)||(n.current=e),n.current}var stopPropagation=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},u="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function useHotkeys(e,n,t,r){var a=(0,o.useRef)(null),i=(0,o.useRef)(!1),c=t instanceof Array?r instanceof Array?void 0:r:t,d=isReadonlyArray(e)?e.join(null==c?void 0:c.splitKey):e,p=t instanceof Array?t:r instanceof Array?r:void 0,y=(0,o.useCallback)(n,null!=p?p:[]),f=(0,o.useRef)(y);p?f.current=y:f.current=n;var h=useDeepEqualMemo(c),v=(0,o.useContext)(s).enabledScopes,b=(0,o.useContext)(l);return u(function(){if((null==h?void 0:h.enabled)!==!1&&isScopeActive(v,null==h?void 0:h.scopes)){var listener=function(e,n){var t;if(void 0===n&&(n=!1),!isKeyboardEventTriggeredByInput(e)||isHotkeyEnabledOnTag(e,null==h?void 0:h.enableOnFormTags)){if(null!==a.current){var o=a.current.getRootNode();if((o instanceof Document||o instanceof ShadowRoot)&&o.activeElement!==a.current&&!a.current.contains(o.activeElement)){stopPropagation(e);return}}(null==(t=e.target)||!t.isContentEditable||null!=h&&h.enableOnContentEditable)&&parseKeysHookInput(d,null==h?void 0:h.splitKey).forEach(function(t){var o,r=parseHotkey(t,null==h?void 0:h.combinationKey);if(isHotkeyMatchingKeyboardEvent(e,r,null==h?void 0:h.ignoreModifiers)||null!=(o=r.keys)&&o.includes("*")){if(null!=h&&null!=h.ignoreEventWhen&&h.ignoreEventWhen(e)||n&&i.current)return;if(maybePreventDefault(e,r,null==h?void 0:h.preventDefault),!isHotkeyEnabled(e,r,null==h?void 0:h.enabled)){stopPropagation(e);return}f.current(e,r),n||(i.current=!0)}})}},handleKeyDown=function(e){void 0!==e.key&&(pushToCurrentlyPressedKeys(mapKey(e.code)),((null==h?void 0:h.keydown)===void 0&&(null==h?void 0:h.keyup)!==!0||null!=h&&h.keydown)&&listener(e))},handleKeyUp=function(e){void 0!==e.key&&(removeFromCurrentlyPressedKeys(mapKey(e.code)),i.current=!1,null!=h&&h.keyup&&listener(e,!0))},e=a.current||(null==c?void 0:c.document)||document;return e.addEventListener("keyup",handleKeyUp),e.addEventListener("keydown",handleKeyDown),b&&parseKeysHookInput(d,null==h?void 0:h.splitKey).forEach(function(e){return b.addHotkey(parseHotkey(e,null==h?void 0:h.combinationKey,null==h?void 0:h.description))}),function(){e.removeEventListener("keyup",handleKeyUp),e.removeEventListener("keydown",handleKeyDown),b&&parseKeysHookInput(d,null==h?void 0:h.splitKey).forEach(function(e){return b.removeHotkey(parseHotkey(e,null==h?void 0:h.combinationKey,null==h?void 0:h.description))})}}},[d,h,v]),a}}}]);