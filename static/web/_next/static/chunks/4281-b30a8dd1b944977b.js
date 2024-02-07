(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4281],{91480:function(e,t,s){"use strict";let a;s.r(t),s.d(t,{ChatContainer:function(){return ChatContainer}});var r,n,i,o,c,l=s(85893),_=s(26246),p=s(67294),j=s(4511),d=s(92380),h=s(98391),S=s.n(h),u=s(93967),g=s.n(u),m=s(92009),x=s(4480),C=s(5152),E=s.n(C),y=s(63108),M=s(41366),f=s(4693);let ChatMessageHighlightMatcher=class ChatMessageHighlightMatcher extends f.M{match(e){let{highlightString:t}=this.options;if(!t)return null;let s=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/\s/g,"\\s"),a=s.normalize("NFD").replace(/[\u0300-\u036f]/g,""),r=s;s!==a&&(r="(?:".concat(s,")|(?:").concat(a,")"));let n=e.match(RegExp(r,"ui"));return n?{index:n.index,length:n[0].length,match:n[0],valid:!0}:null}replaceWith(e,t){let{key:s}=t;return p.createElement("mark",{key:s},e)}asTag(){return"mark"}};var b=s(11890),N=s.n(b);let B="\\p{RGI_Emoji}",v=(()=>{let e=null;try{e=RegExp(B,"v")}catch(e){return!1}return null!==e})(),P=(()=>{let e=N()(B,"v",{unicodeSetsFlag:v?"parse":"transform"});return new RegExp(e,v?"v":"u")})();let ChatMessageEmojiMatcher=class ChatMessageEmojiMatcher extends f.M{match(e){let t=e.match(P);return t?{index:t.index,length:t[0].length,match:t[0],valid:!0}:null}replaceWith(e,t){let{key:s}=t,{className:a}=this.options;return p.createElement("span",{key:s,className:a},e)}asTag(){return"span"}};var T=s(15095),w=s.n(T),k=s(53924);function formatTimestamp(e){let t=new Date(e);if(Number.isNaN(t))return"";let s=(0,k.Xb)(e);if(s>=1){let e=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"".concat(e," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var G=s(73580),A=s(57997),L=s.n(A);let ChatUserBadge=e=>{let{badge:t,userColor:s,title:a}=e;return(0,l.jsx)("span",{style:{color:"var(--theme-color-users-".concat(s,")")},className:g()([L().badge,"chat-user-badge"]),title:a,children:t})},D=E()(()=>s.e(5349).then(s.t.bind(s,95349,23)),{loadableGenerated:{webpack:()=>[95349]},ssr:!1}),AuthedUserBadge=e=>{let{userColor:t}=e;return(0,l.jsx)(ChatUserBadge,{badge:(0,l.jsx)(D,{}),userColor:t,title:"Authenticated"})},I=E()(()=>s.e(7913).then(s.t.bind(s,7913,23)),{loadableGenerated:{webpack:()=>[7913]},ssr:!1}),ModerationBadge=e=>{let{userColor:t}=e;return(0,l.jsx)(ChatUserBadge,{badge:(0,l.jsx)(I,{}),userColor:t,title:"Moderator"})},O=E()(()=>s.e(1137).then(s.t.bind(s,41137,23)),{loadableGenerated:{webpack:()=>[41137]},ssr:!1}),BotUserBadge=e=>{let{userColor:t}=e;return(0,l.jsx)(ChatUserBadge,{badge:(0,l.jsx)(O,{}),userColor:t,title:"Bot"})},H=E()(()=>Promise.all([s.e(5596),s.e(329),s.e(666),s.e(6157),s.e(9374),s.e(1002),s.e(7752),s.e(6355),s.e(6532),s.e(4333),s.e(6386),s.e(1611),s.e(8091),s.e(2336),s.e(479)]).then(s.bind(s,98332)).then(e=>e.ChatModerationActionMenu),{loadableGenerated:{webpack:()=>[98332]},ssr:!1}),UserTooltip=e=>{let{children:t,user:s}=e,{displayName:a,createdAt:r}=s,n="".concat(a," first joined ").concat(formatTimestamp(r));return(0,l.jsx)(m.default,{title:n,placement:"topLeft",mouseEnterDelay:1,children:t})},ChatUserMessage=e=>{let{message:t,highlightString:s,showModeratorMenu:a,sentBySelf:r,sameUserAsLast:n,isAuthorModerator:i,isAuthorAuthenticated:o,isAuthorBot:c}=e,{id:_,body:p,user:j,timestamp:d}=t,{id:h,displayName:S,displayColor:u}=j,C=(0,x.sJ)(G.FI),E="var(--theme-color-users-".concat(u,")"),f="Sent ".concat(formatTimestamp(d)),b=[];return i&&b.push((0,l.jsx)(ModerationBadge,{userColor:u},"mod")),o&&b.push((0,l.jsx)(AuthedUserBadge,{userColor:u},"auth")),c&&b.push((0,l.jsx)(BotUserBadge,{userColor:u},"bot")),(0,l.jsx)("div",{className:g()(w().messagePadding,n&&w().messagePaddingCollapsed,"chat-message_user"),children:(0,l.jsxs)("div",{className:g()(w().root,{[w().ownMessage]:r}),style:{borderColor:E},children:[(0,l.jsx)("div",{className:w().background,style:{color:E}}),(0,l.jsx)(UserTooltip,{user:j,children:(0,l.jsxs)("div",{className:n?w().repeatUser:w().user,style:{color:E},children:[(0,l.jsx)("span",{className:w().userName,children:S}),(0,l.jsx)("span",{className:w().userBadges,children:b})]})}),(0,l.jsx)(m.default,{title:f,mouseEnterDelay:1,children:(0,l.jsx)(y.wZ,{className:w().message,content:p,matchers:[new M.xc("url",{customTLDs:["online"]}),new ChatMessageHighlightMatcher("highlight",{highlightString:s}),new ChatMessageEmojiMatcher("emoji",{className:"emoji"})]})}),a&&(0,l.jsx)("div",{className:w().modMenuWrapper,children:(0,l.jsx)(H,{messageID:_,accessToken:C,userID:h,userDisplayName:S})})]})})};var U=s(96511),R=s(91036),W=s.n(R),F=s(85777),K=s.n(F);let ContentEditable=class ContentEditable extends p.Component{componentDidMount(){this.mutationObserver=new MutationObserver(this.onContentChange),this.mutationObserver.observe(this.root,{childList:!0,subtree:!0,characterData:!0})}render(){let{tagName:e,html:t,...s}=this.props;return delete s.onRootRef,delete s.onContentChange,p.createElement(e||"div",{...s,ref:this.onRootRef,contentEditable:!this.props.disabled,dangerouslySetInnerHTML:{__html:t}})}constructor(...e){super(...e),this.onContentChange=e=>{e.forEach(()=>{let{innerHTML:e}=this.root;(void 0===this.innerHTMLBuffer||this.innerHTMLBuffer!==e)&&(this.innerHTMLBuffer=e,this.props.onContentChange&&this.props.onContentChange({target:{value:e}}))})},this.onRootRef=e=>{this.root=e,this.props.onRootRef&&this.props.onRootRef(this.root)}}};var V=s(36875),J=s.n(V);let z=E()(()=>Promise.all([s.e(7741),s.e(7138)]).then(s.bind(s,37138)).then(e=>e.EmojiPicker),{loadableGenerated:{webpack:()=>[37138]},ssr:!1}),q=E()(()=>s.e(3938).then(s.t.bind(s,93938,23)),{loadableGenerated:{webpack:()=>[93938]},ssr:!1}),Z=E()(()=>s.e(225).then(s.t.bind(s,60225,23)),{loadableGenerated:{webpack:()=>[60225]},ssr:!1}),Y=new(K()),getNodeTextContent=(e,t)=>{let s="";if(t>10||null===e)return s;switch(e.nodeType){case Node.CDATA_SECTION_NODE:case Node.TEXT_NODE:s=e.nodeValue;break;case Node.ELEMENT_NODE:switch(e.tagName.toLowerCase()){case"img":s=e.getAttribute("alt")||"";break;case"br":s="\n";break;case"strong":case"b":s="**";for(let a=0;a<e.childNodes.length;a+=1)s+=getNodeTextContent(e.childNodes[a],t+1);s+="**";break;case"em":case"i":s="*";for(let a=0;a<e.childNodes.length;a+=1)s+=getNodeTextContent(e.childNodes[a],t+1);s+="*";break;case"p":s="\n";for(let a=0;a<e.childNodes.length;a+=1)s+=getNodeTextContent(e.childNodes[a],t+1);break;case"a":case"span":case"div":for(let a=0;a<e.childNodes.length;a+=1)s+=getNodeTextContent(e.childNodes[a],t+1);break;case"script":case"style":break;default:s=e.textContent}}return s},getTextContent=e=>{let t=getNodeTextContent(e,0).replace(/^\s+/,"").replace(/\s+$/,"").replace(/\n([^\n])/g,"  \n$1");return t},ChatTextField=e=>{let{defaultText:t,enabled:s,focusInput:a}=e,[r,n]=(0,p.useState)(null==t?void 0:t.length),i=(0,x.sJ)(G.Gt),[o,c]=(0,p.useState)(null),[_,j]=(0,p.useState)([]),getCharacterCount=()=>{let e=getTextContent(o);return Y.countGraphemes(e)},sendMessage=()=>{if(!i){console.log("websocketService is not defined");return}let e=getTextContent(o),t=Y.countGraphemes(e);0===t||t>300||(i.send({type:d.C.CHAT,body:e}),o.innerHTML="")},insertTextAtEnd=e=>{o.innerHTML+=e};(0,p.useEffect)(()=>{a&&document.getElementById("chat-input-content-editable").focus()},[]);let getCustomEmoji=async()=>{try{let e=await fetch("/api/emoji"),t=await e.json();j(t),t.forEach(e=>{let t=document.createElement("link");t.href=e.url,t.rel="preload",t.as="image",document.head.appendChild(t)})}catch(e){console.error("cannot fetch custom emoji",e)}};return(0,p.useEffect)(()=>{getCustomEmoji()},[]),(0,l.jsx)("div",{id:"chat-input",className:J().root,children:(0,l.jsxs)("div",{className:g()(J().inputWrap,r>300&&J().maxCharacters),children:[(0,l.jsx)(ContentEditable,{id:"chat-input-content-editable",html:t||"",placeholder:s?"Send a message to chat":"Chat is disabled",disabled:!s,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||e.metaKey||e.ctrlKey||e.altKey||(e.preventDefault(),sendMessage())},onContentChange:()=>{let e=getCharacterCount();n(e),0===e&&1===o.children.length&&"br"===o.children[0].tagName.toLowerCase()&&o.removeChild(o.children[0])},onPaste:e=>{let t;e.preventDefault();let s=e.clipboardData,{types:a}=s,r=["text/html","text/plain"];for(let e=0;e<r.length;e+=1){let n=r[e];if(a.includes(n)){t=s.getData(n);break}}if(!t)return;let n=W()(t,{allowedTags:["b","i","em","strong","a","br","p","img"],allowedAttributes:{img:["class","alt","title","src"]},allowedClasses:{img:["emoji"]},transformTags:{h1:"p",h2:"p",h3:"p"}});n&&document.execCommand("insertHTML",!1,n)},onRootRef:e=>{c(e)},style:{whiteSpace:"pre-wrap",width:"100%"},role:"textbox","aria-label":"Chat text input"}),s&&(0,l.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,l.jsx)(U.default,{content:(0,l.jsx)(z,{customEmoji:_,onEmojiSelect:e=>{insertTextAtEnd(e)},onCustomEmojiSelect:(e,t)=>{let s='<img src="'.concat(t,'" alt=":').concat(e,':" title=":').concat(e,':" class="emoji" />');insertTextAtEnd(s)}}),trigger:"click",placement:"topRight",children:(0,l.jsx)("button",{type:"button","aria-label":"Emoji picker",className:J().emojiButton,title:"Emoji picker button",children:(0,l.jsx)(Z,{})})}),(0,l.jsx)("button",{type:"button","aria-label":"Send message",className:J().sendButton,title:"Send message Button",onClick:sendMessage,children:(0,l.jsx)(q,{})})]})]})})};var Q=s(33613),X=s.n(Q);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var moderator=function(e){return p.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:500,height:500,viewBox:"0 0 132.292 132.292"},e),r||(r=p.createElement("linearGradient",{id:"moderator_svg__a",x1:432.851,x2:464.644,y1:49.977,y2:49.977,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{offset:0,stopColor:"#2087e2"}),p.createElement("stop",{offset:1,stopColor:"#b63fff"}))),n||(n=p.createElement("path",{fill:"url(#moderator_svg__a)",d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),i||(i=p.createElement("path",{fill:"#1d1535",fillOpacity:.335,d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z"})),o||(o=p.createElement("path",{fill:"#e2e8f0",fillOpacity:.306,d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203s50.249-20.11 50.249-20.11"})),c||(c=p.createElement("path",{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))};let ChatModeratorNotification=()=>(0,l.jsxs)("div",{className:X().chatModerationNotification,children:[(0,l.jsx)(moderator,{className:X().icon}),"You are now a moderator."]});var $=s(19944),ee=s.n($);let ChatSystemMessage=e=>{let{message:{body:t,user:{displayName:s}},highlightString:a}=e;return(0,l.jsx)("div",{className:ee().chatSystemMessagePadding,children:(0,l.jsxs)("div",{className:g()([ee().chatSystemMessage,"chat-message_system"]),children:[(0,l.jsx)("div",{className:ee().user,children:(0,l.jsx)("span",{className:ee().userName,children:s})}),(0,l.jsx)(y.wZ,{className:ee().message,content:t,matchers:[new M.xc("url",{customTLDs:["online"]}),new ChatMessageHighlightMatcher("highlight",{highlightString:a})]})]})})};var et=s(67477),es=s.n(et);let ea=E()(()=>s.e(585).then(s.t.bind(s,70585,23)),{loadableGenerated:{webpack:()=>[70585]},ssr:!1}),ChatJoinMessage=e=>{let{isAuthorModerator:t,userColor:s,displayName:a}=e;return(0,l.jsxs)("div",{className:es().root,children:[(0,l.jsxs)("span",{style:{color:"var(--theme-color-users-".concat(s,")")},children:[(0,l.jsx)("span",{className:es().icon,children:(0,l.jsx)(ea,{})}),(0,l.jsx)("span",{className:es().user,children:a}),t&&(0,l.jsx)("span",{className:es().moderatorBadge,children:(0,l.jsx)(ModerationBadge,{userColor:s})})]}),"joined the chat."]})};var er=s(99852),en=s.n(er);let ei=E()(()=>s.e(7443).then(s.t.bind(s,57443,23)),{loadableGenerated:{webpack:()=>[57443]},ssr:!1}),ChatPartMessage=e=>{let{isAuthorModerator:t,userColor:s,displayName:a}=e;return(0,l.jsxs)("div",{className:en().root,children:[(0,l.jsxs)("span",{style:{color:"var(--theme-color-users-".concat(s,")")},children:[(0,l.jsx)("span",{className:en().icon,children:(0,l.jsx)(ei,{})}),(0,l.jsx)("span",{className:en().user,children:a}),t&&(0,l.jsx)("span",{className:en().moderatorBadge,children:(0,l.jsx)(ModerationBadge,{userColor:s})})]}),"left the chat."]})};var eo=s(91374);let ec=E()(()=>s.e(9766).then(s.t.bind(s,79766,23)),{loadableGenerated:{webpack:()=>[79766]},ssr:!1}),ScrollToBotBtn=e=>{let{onClick:t}=e;return(0,l.jsx)("div",{className:S().toBottomWrap,id:"scroll-to-chat-bottom",children:(0,l.jsx)(eo.default,{type:"default",style:{color:"currentColor"},icon:(0,l.jsx)(ec,{}),onClick:t,children:"Go to last message"})})};var el=s(95636),e_=s.n(el);let ChatActionMessage=e=>{let{body:t}=e;return(0,l.jsx)("div",{className:e_().chatActionPadding,children:(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:e_().chatAction})})};var ep=s(34355),ej=s(22509),ed=s(2943),eh=s(95203),eS=s.n(eh);let eu=E()(()=>s.e(9069).then(s.bind(s,49069)),{loadableGenerated:{webpack:()=>[49069]},ssr:!1}),eg=E()(()=>s.e(5584).then(s.bind(s,15584)),{loadableGenerated:{webpack:()=>[15584]},ssr:!1}),em=E()(()=>s.e(7268).then(s.bind(s,97268)),{loadableGenerated:{webpack:()=>[97268]},ssr:!1}),ChatSocialMessage=e=>{let t,{message:s}=e,{body:a,title:r,image:n,link:i,type:o}=s;switch(o.toString()){case"FEDIVERSE_ENGAGEMENT_FOLLOW":t=eu;break;case"FEDIVERSE_ENGAGEMENT_LIKE":t=eg;break;case"FEDIVERSE_ENGAGEMENT_REPOST":t=em}return(0,l.jsx)("div",{className:eS().followerPadding,children:(0,l.jsx)("div",{className:g()([eS().follower,"chat-message_social"]),children:(0,l.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:(0,l.jsxs)(ed.Z,{wrap:!1,children:[(0,l.jsxs)(ej.Z,{span:6,className:eS().avatarColumn,children:[(0,l.jsx)(ep.ZP,{src:n,alt:"Avatar",className:eS().avatar,size:"large",children:r.charAt(0).toUpperCase()}),(0,l.jsx)(t,{className:eS().icon})]}),(0,l.jsxs)(ej.Z,{children:[(0,l.jsx)(ed.Z,{className:eS().account,children:r}),(0,l.jsx)(ed.Z,{className:eS().body,dangerouslySetInnerHTML:{__html:a}})]})]})})})})};var ex=s(34197),eC=s.n(ex);let eE=E()(()=>s.e(8018).then(s.t.bind(s,28018,23)),{loadableGenerated:{webpack:()=>[28018]},ssr:!1}),ChatNameChangeMessage=e=>{let{message:t}=e,{oldName:s,user:a}=t,{displayName:r,displayColor:n}=a,i="var(--theme-color-users-".concat(n,")");return(0,l.jsxs)("div",{className:eC().nameChangeView,children:[(0,l.jsx)("div",{className:eC().icon,children:(0,l.jsx)(eE,{})}),(0,l.jsxs)("div",{className:eC().nameChangeText,children:[(0,l.jsx)("span",{style:{color:i},children:s}),(0,l.jsx)("span",{className:eC().plain,children:" is now known as "}),(0,l.jsx)("span",{style:{color:i},children:r})]})]})};var ey=s(99511),eM=s(50057);function shouldCollapseMessages(e,t){if(!e||!e.user||t.type!==d.C.CHAT)return!1;let{user:{id:s}}=e;if(s!==t.user.id||!t.timestamp||!e.timestamp)return!1;let a=new Date(t.timestamp).getTime(),r=new Date(e.timestamp).getTime();return!(r-a>4e4)}function checkIsModerator(e){let{user:t}=e,s=new ey.n(t);return s.isModerator}let ChatContainer=e=>{let{messages:t,usernameToHighlight:s,chatUserId:r,isModerator:n,showInput:i,height:o,chatAvailable:c,desktop:h,focusInput:u=!0}=e,[g,m]=(0,p.useState)(!1),[x,C]=(0,p.useState)(!1),E=(0,p.useRef)(null),y=(0,p.useRef)(null),M=[],f=1;function calculateCollapsedMessages(){for(let e=M.length;e<t.length;e+=1){let s=e>0&&f<5&&shouldCollapseMessages(t[e],t[e-1]);M.push(s),f=1+(s?f:0)}}function shouldCollapse(e){return M.length<=e&&calculateCollapsedMessages(),M[e]}(0,p.useEffect)(()=>()=>{clearTimeout(y.current)},[]);let getFediverseMessage=e=>(0,l.jsx)(ChatSocialMessage,{message:e}),getUserJoinedMessage=e=>{let{user:{displayName:t,displayColor:s}}=e,a=checkIsModerator(e);return(0,l.jsx)(ChatJoinMessage,{displayName:t,userColor:s,isAuthorModerator:a})},getUserPartMessage=e=>{let{user:{displayName:t,displayColor:s}}=e,a=checkIsModerator(e);return(0,l.jsx)(ChatPartMessage,{displayName:t,userColor:s,isAuthorModerator:a})},getActionMessage=e=>{let{body:t}=e;return(0,l.jsx)(ChatActionMessage,{body:t})},getConnectedInfoMessage=e=>{let t=checkIsModerator(e);return t?(0,l.jsx)(ChatModeratorNotification,{}):(0,l.jsx)("div",{style:{width:"1px",height:"1px"}})},getUserChatMessageView=(e,t)=>{var a,i,o;let c=checkIsModerator(t);return(0,l.jsx)(ChatUserMessage,{message:t,showModeratorMenu:n,highlightString:s,sentBySelf:(null===(a=t.user)||void 0===a?void 0:a.id)===r,sameUserAsLast:shouldCollapse(e),isAuthorModerator:c,isAuthorBot:null===(i=t.user)||void 0===i?void 0:i.isBot,isAuthorAuthenticated:null===(o=t.user)||void 0===o?void 0:o.authenticated},t.id)},getViewForMessage=(e,t)=>{switch(t.type){case d.C.CHAT:return getUserChatMessageView(e,t);case d.C.NAME_CHANGE:return(0,l.jsx)(ChatNameChangeMessage,{message:t});case d.C.CONNECTED_USER_INFO:return getConnectedInfoMessage(t);case d.C.USER_JOINED:return getUserJoinedMessage(t);case d.C.USER_PARTED:return getUserPartMessage(t);case d.C.CHAT_ACTION:return getActionMessage(t);case d.C.SYSTEM:return(0,l.jsx)(ChatSystemMessage,{message:t,highlightString:s},t.id);case d.C.FEDIVERSE_ENGAGEMENT_FOLLOW:case d.C.FEDIVERSE_ENGAGEMENT_LIKE:case d.C.FEDIVERSE_ENGAGEMENT_REPOST:return getFediverseMessage(t);default:return null}},scrollChatToBottom=e=>{clearTimeout(y.current),y.current=setTimeout(()=>{var t;null===(t=e.current)||void 0===t||t.scrollTo({top:1/0,left:0,behavior:"auto"}),C(!0)},150),m(!1)};(0,p.useEffect)(()=>{setTimeout(()=>{scrollChatToBottom(E)},500)},[]);let b=(0,p.useMemo)(()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_.OO,{id:"virtuoso",style:{height:o},className:S().virtuoso,ref:E,data:t,itemContent:(e,t)=>getViewForMessage(e,t),initialTopMostItemIndex:t.length-1,followOutput:()=>!!x&&(m(!1),scrollChatToBottom(E),"smooth"),alignToBottom:!0,atBottomThreshold:70,atBottomStateChange:e=>{C(e),e?m(!1):m(!0)}}),g&&(0,l.jsx)(ScrollToBotBtn,{onClick:()=>{scrollChatToBottom(E)}})]}),[t,s,r,n,g,x]);function clampChatWidth(e){return Math.max(200,Math.min(.666*window.innerWidth,e))}function startDrag(e){let t=document.getElementById("chat-container");function move(e){t.style.width="".concat(clampChatWidth(window.innerWidth-e.x),"px")}function endDrag(){window.document.removeEventListener("mousemove",move),window.document.removeEventListener("mouseup",endDrag),window.document.removeEventListener("focusout",endDrag)}window.document.addEventListener("mousemove",move),window.document.addEventListener("mouseup",endDrag),window.document.addEventListener("focusout",endDrag),e.preventDefault()}function resize(){let e=h&&document.getElementById("chat-container");if(e){let t=parseFloat(e.style.width)||320;e.style.width="".concat(clampChatWidth(t),"px")}}return a&&window.removeEventListener("resize",a),h?(window.addEventListener("resize",resize),a=resize):a=null,(0,l.jsx)(j.SV,{fallbackRender:e=>{let{error:t,resetErrorBoundary:s}=e;return(0,l.jsx)(eM.A,{componentName:"ChatContainer",message:t.message,retryFunction:s})},children:(0,l.jsxs)("div",{id:"chat-container",className:S().chatContainer,style:h&&{width:"".concat(320,"px")},children:[b,i&&(0,l.jsx)("div",{className:S().chatTextField,children:(0,l.jsx)(ChatTextField,{enabled:c,focusInput:u})}),h&&(0,l.jsx)("div",{className:S().resizeHandle,onMouseDown:startDrag,role:"presentation"})]})})};ChatContainer.defaultProps={showInput:!0,height:"auto"}},95636:function(e){e.exports={chatActionPadding:"ChatActionMessage_chatActionPadding__gFHAK",chatAction:"ChatActionMessage_chatAction__SaAM1"}},98391:function(e){e.exports={toBottomWrap:"ChatContainer_toBottomWrap__3AnLI",show:"ChatContainer_show__LhPdy",chatContainer:"ChatContainer_chatContainer__jj1A1",resizeHandle:"ChatContainer_resizeHandle__tp5sp",virtuoso:"ChatContainer_virtuoso__h16VY",chatTextField:"ChatContainer_chatTextField__IMmRr"}},67477:function(e){e.exports={root:"ChatJoinMessage_root__LQnW8",moderatorBadge:"ChatJoinMessage_moderatorBadge___KAcr",user:"ChatJoinMessage_user__7VLJ4",icon:"ChatJoinMessage_icon__veWC1"}},33613:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__BNHEb",icon:"ChatModeratorNotification_icon__5szBr"}},34197:function(e){e.exports={nameChangeView:"ChatNameChangeMessage_nameChangeView__PTuEs",nameChangeText:"ChatNameChangeMessage_nameChangeText__d__tV",plain:"ChatNameChangeMessage_plain__qaGLJ",icon:"ChatNameChangeMessage_icon__gTVqw"}},99852:function(e){e.exports={root:"ChatPartMessage_root__uwlBE",moderatorBadge:"ChatPartMessage_moderatorBadge__7yjJY",user:"ChatPartMessage_user__48ZYk",icon:"ChatPartMessage_icon__CbsNu"}},95203:function(e){e.exports={followerPadding:"ChatSocialMessage_followerPadding__GHdNk",follower:"ChatSocialMessage_follower__yYsqi",avatar:"ChatSocialMessage_avatar__Phfq0",avatarColumn:"ChatSocialMessage_avatarColumn__xIbr_",body:"ChatSocialMessage_body__Tuie8",account:"ChatSocialMessage_account__aGIry",icon:"ChatSocialMessage_icon__C8Zpx"}},19944:function(e){e.exports={chatSystemMessagePadding:"ChatSystemMessage_chatSystemMessagePadding__xo2mL",chatSystemMessage:"ChatSystemMessage_chatSystemMessage__HJ7ko",user:"ChatSystemMessage_user__IqG5Q",message:"ChatSystemMessage_message__nhVHD"}},36875:function(e){e.exports={root:"ChatTextField_root__WUerS",inputWrap:"ChatTextField_inputWrap__2bWOE",maxCharacters:"ChatTextField_maxCharacters__qWmcu",emojiButton:"ChatTextField_emojiButton__dyDxD",sendButton:"ChatTextField_sendButton__Wa3ew"}},57997:function(e){e.exports={badge:"ChatUserBadge_badge__Nf_Gh"}},15095:function(e){e.exports={root:"ChatUserMessage_root__wl4Pw",user:"ChatUserMessage_user__u7aBR",repeatUser:"ChatUserMessage_repeatUser__TzC1D",userBadges:"ChatUserMessage_userBadges__sG_TM",message:"ChatUserMessage_message__JJiP9",ownMessage:"ChatUserMessage_ownMessage__WqULN",background:"ChatUserMessage_background__f__8c",modMenuWrapper:"ChatUserMessage_modMenuWrapper__LVHZU",messagePadding:"ChatUserMessage_messagePadding__f7kp4",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__2R0RQ"}},14640:function(e,t,s){var a={"./Binary_Property/ASCII.js":46962,"./Binary_Property/ASCII_Hex_Digit.js":60270,"./Binary_Property/Alphabetic.js":26969,"./Binary_Property/Any.js":22499,"./Binary_Property/Assigned.js":9213,"./Binary_Property/Bidi_Control.js":38838,"./Binary_Property/Bidi_Mirrored.js":5720,"./Binary_Property/Case_Ignorable.js":49965,"./Binary_Property/Cased.js":32948,"./Binary_Property/Changes_When_Casefolded.js":65314,"./Binary_Property/Changes_When_Casemapped.js":78562,"./Binary_Property/Changes_When_Lowercased.js":12104,"./Binary_Property/Changes_When_NFKC_Casefolded.js":41347,"./Binary_Property/Changes_When_Titlecased.js":50589,"./Binary_Property/Changes_When_Uppercased.js":50046,"./Binary_Property/Dash.js":77336,"./Binary_Property/Default_Ignorable_Code_Point.js":32016,"./Binary_Property/Deprecated.js":42339,"./Binary_Property/Diacritic.js":97707,"./Binary_Property/Emoji.js":23694,"./Binary_Property/Emoji_Component.js":94007,"./Binary_Property/Emoji_Modifier.js":13916,"./Binary_Property/Emoji_Modifier_Base.js":98053,"./Binary_Property/Emoji_Presentation.js":10906,"./Binary_Property/Extended_Pictographic.js":66359,"./Binary_Property/Extender.js":17743,"./Binary_Property/Grapheme_Base.js":75530,"./Binary_Property/Grapheme_Extend.js":38693,"./Binary_Property/Hex_Digit.js":91556,"./Binary_Property/IDS_Binary_Operator.js":2103,"./Binary_Property/IDS_Trinary_Operator.js":18502,"./Binary_Property/ID_Continue.js":19494,"./Binary_Property/ID_Start.js":20567,"./Binary_Property/Ideographic.js":19586,"./Binary_Property/Join_Control.js":36983,"./Binary_Property/Logical_Order_Exception.js":72947,"./Binary_Property/Lowercase.js":49111,"./Binary_Property/Math.js":65667,"./Binary_Property/Noncharacter_Code_Point.js":20052,"./Binary_Property/Pattern_Syntax.js":60514,"./Binary_Property/Pattern_White_Space.js":78588,"./Binary_Property/Quotation_Mark.js":1053,"./Binary_Property/Radical.js":25361,"./Binary_Property/Regional_Indicator.js":94375,"./Binary_Property/Sentence_Terminal.js":89697,"./Binary_Property/Soft_Dotted.js":35514,"./Binary_Property/Terminal_Punctuation.js":21043,"./Binary_Property/Unified_Ideograph.js":75771,"./Binary_Property/Uppercase.js":28368,"./Binary_Property/Variation_Selector.js":27186,"./Binary_Property/White_Space.js":61846,"./Binary_Property/XID_Continue.js":74003,"./Binary_Property/XID_Start.js":3468,"./General_Category/Cased_Letter.js":13090,"./General_Category/Close_Punctuation.js":8526,"./General_Category/Connector_Punctuation.js":26100,"./General_Category/Control.js":80282,"./General_Category/Currency_Symbol.js":15352,"./General_Category/Dash_Punctuation.js":45647,"./General_Category/Decimal_Number.js":98349,"./General_Category/Enclosing_Mark.js":18220,"./General_Category/Final_Punctuation.js":88482,"./General_Category/Format.js":87586,"./General_Category/Initial_Punctuation.js":88147,"./General_Category/Letter.js":65964,"./General_Category/Letter_Number.js":66793,"./General_Category/Line_Separator.js":63061,"./General_Category/Lowercase_Letter.js":19340,"./General_Category/Mark.js":93748,"./General_Category/Math_Symbol.js":32895,"./General_Category/Modifier_Letter.js":66710,"./General_Category/Modifier_Symbol.js":43026,"./General_Category/Nonspacing_Mark.js":95580,"./General_Category/Number.js":90055,"./General_Category/Open_Punctuation.js":25622,"./General_Category/Other.js":76288,"./General_Category/Other_Letter.js":61453,"./General_Category/Other_Number.js":88795,"./General_Category/Other_Punctuation.js":47221,"./General_Category/Other_Symbol.js":66733,"./General_Category/Paragraph_Separator.js":12600,"./General_Category/Private_Use.js":61704,"./General_Category/Punctuation.js":36290,"./General_Category/Separator.js":64661,"./General_Category/Space_Separator.js":54343,"./General_Category/Spacing_Mark.js":11276,"./General_Category/Surrogate.js":93474,"./General_Category/Symbol.js":54581,"./General_Category/Titlecase_Letter.js":8550,"./General_Category/Unassigned.js":22525,"./General_Category/Uppercase_Letter.js":28829,"./Property_of_Strings/Basic_Emoji.js":31355,"./Property_of_Strings/Emoji_Keycap_Sequence.js":2215,"./Property_of_Strings/RGI_Emoji.js":16081,"./Property_of_Strings/RGI_Emoji_Flag_Sequence.js":35816,"./Property_of_Strings/RGI_Emoji_Modifier_Sequence.js":80926,"./Property_of_Strings/RGI_Emoji_Tag_Sequence.js":99712,"./Property_of_Strings/RGI_Emoji_ZWJ_Sequence.js":2485,"./Script/Adlam.js":56129,"./Script/Ahom.js":50147,"./Script/Anatolian_Hieroglyphs.js":50926,"./Script/Arabic.js":56820,"./Script/Armenian.js":14899,"./Script/Avestan.js":69929,"./Script/Balinese.js":30706,"./Script/Bamum.js":15533,"./Script/Bassa_Vah.js":89979,"./Script/Batak.js":83765,"./Script/Bengali.js":72693,"./Script/Bhaiksuki.js":10236,"./Script/Bopomofo.js":30468,"./Script/Brahmi.js":45770,"./Script/Braille.js":65529,"./Script/Buginese.js":74206,"./Script/Buhid.js":96208,"./Script/Canadian_Aboriginal.js":66700,"./Script/Carian.js":93961,"./Script/Caucasian_Albanian.js":74121,"./Script/Chakma.js":12128,"./Script/Cham.js":52189,"./Script/Cherokee.js":75033,"./Script/Chorasmian.js":73507,"./Script/Common.js":85998,"./Script/Coptic.js":56036,"./Script/Cuneiform.js":13563,"./Script/Cypriot.js":49182,"./Script/Cypro_Minoan.js":80084,"./Script/Cyrillic.js":84087,"./Script/Deseret.js":48844,"./Script/Devanagari.js":35690,"./Script/Dives_Akuru.js":57201,"./Script/Dogra.js":71932,"./Script/Duployan.js":95187,"./Script/Egyptian_Hieroglyphs.js":49778,"./Script/Elbasan.js":42781,"./Script/Elymaic.js":83103,"./Script/Ethiopic.js":26672,"./Script/Georgian.js":73661,"./Script/Glagolitic.js":85857,"./Script/Gothic.js":32096,"./Script/Grantha.js":71742,"./Script/Greek.js":62199,"./Script/Gujarati.js":11931,"./Script/Gunjala_Gondi.js":27600,"./Script/Gurmukhi.js":76482,"./Script/Han.js":26294,"./Script/Hangul.js":38858,"./Script/Hanifi_Rohingya.js":50043,"./Script/Hanunoo.js":95307,"./Script/Hatran.js":20280,"./Script/Hebrew.js":12674,"./Script/Hiragana.js":54058,"./Script/Imperial_Aramaic.js":70521,"./Script/Inherited.js":21448,"./Script/Inscriptional_Pahlavi.js":35281,"./Script/Inscriptional_Parthian.js":35772,"./Script/Javanese.js":98272,"./Script/Kaithi.js":52764,"./Script/Kannada.js":98276,"./Script/Katakana.js":98285,"./Script/Kawi.js":50418,"./Script/Kayah_Li.js":10821,"./Script/Kharoshthi.js":67559,"./Script/Khitan_Small_Script.js":48304,"./Script/Khmer.js":39834,"./Script/Khojki.js":42593,"./Script/Khudawadi.js":43549,"./Script/Lao.js":37740,"./Script/Latin.js":46818,"./Script/Lepcha.js":7647,"./Script/Limbu.js":92627,"./Script/Linear_A.js":16193,"./Script/Linear_B.js":71901,"./Script/Lisu.js":25734,"./Script/Lycian.js":6450,"./Script/Lydian.js":28293,"./Script/Mahajani.js":48193,"./Script/Makasar.js":50865,"./Script/Malayalam.js":24789,"./Script/Mandaic.js":9535,"./Script/Manichaean.js":83061,"./Script/Marchen.js":76528,"./Script/Masaram_Gondi.js":9921,"./Script/Medefaidrin.js":93378,"./Script/Meetei_Mayek.js":6940,"./Script/Mende_Kikakui.js":3897,"./Script/Meroitic_Cursive.js":65999,"./Script/Meroitic_Hieroglyphs.js":59758,"./Script/Miao.js":65484,"./Script/Modi.js":34575,"./Script/Mongolian.js":75392,"./Script/Mro.js":36388,"./Script/Multani.js":60556,"./Script/Myanmar.js":15837,"./Script/Nabataean.js":6820,"./Script/Nag_Mundari.js":52423,"./Script/Nandinagari.js":51892,"./Script/New_Tai_Lue.js":32003,"./Script/Newa.js":15297,"./Script/Nko.js":17594,"./Script/Nushu.js":7493,"./Script/Nyiakeng_Puachue_Hmong.js":14406,"./Script/Ogham.js":75847,"./Script/Ol_Chiki.js":88416,"./Script/Old_Hungarian.js":40115,"./Script/Old_Italic.js":29109,"./Script/Old_North_Arabian.js":96840,"./Script/Old_Permic.js":39291,"./Script/Old_Persian.js":24678,"./Script/Old_Sogdian.js":78647,"./Script/Old_South_Arabian.js":70744,"./Script/Old_Turkic.js":59527,"./Script/Old_Uyghur.js":11791,"./Script/Oriya.js":23761,"./Script/Osage.js":39384,"./Script/Osmanya.js":90237,"./Script/Pahawh_Hmong.js":62976,"./Script/Palmyrene.js":60351,"./Script/Pau_Cin_Hau.js":19767,"./Script/Phags_Pa.js":25712,"./Script/Phoenician.js":86458,"./Script/Psalter_Pahlavi.js":74874,"./Script/Rejang.js":27603,"./Script/Runic.js":84788,"./Script/Samaritan.js":45810,"./Script/Saurashtra.js":37632,"./Script/Sharada.js":15058,"./Script/Shavian.js":76250,"./Script/Siddham.js":39573,"./Script/SignWriting.js":54039,"./Script/Sinhala.js":1611,"./Script/Sogdian.js":34250,"./Script/Sora_Sompeng.js":43065,"./Script/Soyombo.js":18135,"./Script/Sundanese.js":87334,"./Script/Syloti_Nagri.js":46566,"./Script/Syriac.js":7810,"./Script/Tagalog.js":67833,"./Script/Tagbanwa.js":58009,"./Script/Tai_Le.js":1187,"./Script/Tai_Tham.js":40377,"./Script/Tai_Viet.js":99e3,"./Script/Takri.js":72294,"./Script/Tamil.js":98682,"./Script/Tangsa.js":77808,"./Script/Tangut.js":75540,"./Script/Telugu.js":65084,"./Script/Thaana.js":6867,"./Script/Thai.js":49907,"./Script/Tibetan.js":29341,"./Script/Tifinagh.js":81261,"./Script/Tirhuta.js":57954,"./Script/Toto.js":68196,"./Script/Ugaritic.js":29097,"./Script/Vai.js":5767,"./Script/Vithkuqi.js":45785,"./Script/Wancho.js":27172,"./Script/Warang_Citi.js":17315,"./Script/Yezidi.js":34961,"./Script/Yi.js":90923,"./Script/Zanabazar_Square.js":92108,"./Script_Extensions/Adlam.js":99614,"./Script_Extensions/Ahom.js":24915,"./Script_Extensions/Anatolian_Hieroglyphs.js":8983,"./Script_Extensions/Arabic.js":75627,"./Script_Extensions/Armenian.js":13585,"./Script_Extensions/Avestan.js":79384,"./Script_Extensions/Balinese.js":47072,"./Script_Extensions/Bamum.js":31856,"./Script_Extensions/Bassa_Vah.js":24945,"./Script_Extensions/Batak.js":92147,"./Script_Extensions/Bengali.js":61530,"./Script_Extensions/Bhaiksuki.js":64063,"./Script_Extensions/Bopomofo.js":29962,"./Script_Extensions/Brahmi.js":61752,"./Script_Extensions/Braille.js":28434,"./Script_Extensions/Buginese.js":15148,"./Script_Extensions/Buhid.js":78881,"./Script_Extensions/Canadian_Aboriginal.js":55254,"./Script_Extensions/Carian.js":79110,"./Script_Extensions/Caucasian_Albanian.js":76550,"./Script_Extensions/Chakma.js":88753,"./Script_Extensions/Cham.js":98451,"./Script_Extensions/Cherokee.js":80196,"./Script_Extensions/Chorasmian.js":23352,"./Script_Extensions/Common.js":46921,"./Script_Extensions/Coptic.js":44141,"./Script_Extensions/Cuneiform.js":30286,"./Script_Extensions/Cypriot.js":73326,"./Script_Extensions/Cypro_Minoan.js":82300,"./Script_Extensions/Cyrillic.js":77115,"./Script_Extensions/Deseret.js":59108,"./Script_Extensions/Devanagari.js":59426,"./Script_Extensions/Dives_Akuru.js":44660,"./Script_Extensions/Dogra.js":41422,"./Script_Extensions/Duployan.js":66667,"./Script_Extensions/Egyptian_Hieroglyphs.js":20449,"./Script_Extensions/Elbasan.js":25810,"./Script_Extensions/Elymaic.js":83509,"./Script_Extensions/Ethiopic.js":37837,"./Script_Extensions/Georgian.js":77680,"./Script_Extensions/Glagolitic.js":97772,"./Script_Extensions/Gothic.js":60674,"./Script_Extensions/Grantha.js":52336,"./Script_Extensions/Greek.js":86310,"./Script_Extensions/Gujarati.js":92436,"./Script_Extensions/Gunjala_Gondi.js":20642,"./Script_Extensions/Gurmukhi.js":33831,"./Script_Extensions/Han.js":16613,"./Script_Extensions/Hangul.js":87001,"./Script_Extensions/Hanifi_Rohingya.js":88583,"./Script_Extensions/Hanunoo.js":82758,"./Script_Extensions/Hatran.js":66416,"./Script_Extensions/Hebrew.js":85222,"./Script_Extensions/Hiragana.js":60191,"./Script_Extensions/Imperial_Aramaic.js":57632,"./Script_Extensions/Inherited.js":96988,"./Script_Extensions/Inscriptional_Pahlavi.js":52121,"./Script_Extensions/Inscriptional_Parthian.js":82809,"./Script_Extensions/Javanese.js":31899,"./Script_Extensions/Kaithi.js":57574,"./Script_Extensions/Kannada.js":81868,"./Script_Extensions/Katakana.js":10774,"./Script_Extensions/Kawi.js":77325,"./Script_Extensions/Kayah_Li.js":76701,"./Script_Extensions/Kharoshthi.js":81466,"./Script_Extensions/Khitan_Small_Script.js":21325,"./Script_Extensions/Khmer.js":6068,"./Script_Extensions/Khojki.js":77706,"./Script_Extensions/Khudawadi.js":54258,"./Script_Extensions/Lao.js":77149,"./Script_Extensions/Latin.js":38334,"./Script_Extensions/Lepcha.js":12299,"./Script_Extensions/Limbu.js":25476,"./Script_Extensions/Linear_A.js":54625,"./Script_Extensions/Linear_B.js":38810,"./Script_Extensions/Lisu.js":90845,"./Script_Extensions/Lycian.js":68978,"./Script_Extensions/Lydian.js":67905,"./Script_Extensions/Mahajani.js":89576,"./Script_Extensions/Makasar.js":3405,"./Script_Extensions/Malayalam.js":974,"./Script_Extensions/Mandaic.js":28940,"./Script_Extensions/Manichaean.js":6677,"./Script_Extensions/Marchen.js":14740,"./Script_Extensions/Masaram_Gondi.js":82278,"./Script_Extensions/Medefaidrin.js":55949,"./Script_Extensions/Meetei_Mayek.js":13329,"./Script_Extensions/Mende_Kikakui.js":97146,"./Script_Extensions/Meroitic_Cursive.js":23715,"./Script_Extensions/Meroitic_Hieroglyphs.js":43199,"./Script_Extensions/Miao.js":26499,"./Script_Extensions/Modi.js":36995,"./Script_Extensions/Mongolian.js":98606,"./Script_Extensions/Mro.js":11462,"./Script_Extensions/Multani.js":45402,"./Script_Extensions/Myanmar.js":76318,"./Script_Extensions/Nabataean.js":34924,"./Script_Extensions/Nag_Mundari.js":45131,"./Script_Extensions/Nandinagari.js":8236,"./Script_Extensions/New_Tai_Lue.js":14575,"./Script_Extensions/Newa.js":71314,"./Script_Extensions/Nko.js":40577,"./Script_Extensions/Nushu.js":44432,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":53612,"./Script_Extensions/Ogham.js":19298,"./Script_Extensions/Ol_Chiki.js":55285,"./Script_Extensions/Old_Hungarian.js":16737,"./Script_Extensions/Old_Italic.js":73023,"./Script_Extensions/Old_North_Arabian.js":35723,"./Script_Extensions/Old_Permic.js":56370,"./Script_Extensions/Old_Persian.js":1402,"./Script_Extensions/Old_Sogdian.js":14718,"./Script_Extensions/Old_South_Arabian.js":40316,"./Script_Extensions/Old_Turkic.js":5462,"./Script_Extensions/Old_Uyghur.js":2280,"./Script_Extensions/Oriya.js":29434,"./Script_Extensions/Osage.js":77045,"./Script_Extensions/Osmanya.js":82301,"./Script_Extensions/Pahawh_Hmong.js":84766,"./Script_Extensions/Palmyrene.js":72685,"./Script_Extensions/Pau_Cin_Hau.js":34107,"./Script_Extensions/Phags_Pa.js":66506,"./Script_Extensions/Phoenician.js":42186,"./Script_Extensions/Psalter_Pahlavi.js":55507,"./Script_Extensions/Rejang.js":35435,"./Script_Extensions/Runic.js":76355,"./Script_Extensions/Samaritan.js":1509,"./Script_Extensions/Saurashtra.js":23386,"./Script_Extensions/Sharada.js":73709,"./Script_Extensions/Shavian.js":51826,"./Script_Extensions/Siddham.js":22026,"./Script_Extensions/SignWriting.js":96007,"./Script_Extensions/Sinhala.js":51104,"./Script_Extensions/Sogdian.js":82401,"./Script_Extensions/Sora_Sompeng.js":44399,"./Script_Extensions/Soyombo.js":37415,"./Script_Extensions/Sundanese.js":3894,"./Script_Extensions/Syloti_Nagri.js":5419,"./Script_Extensions/Syriac.js":21038,"./Script_Extensions/Tagalog.js":1744,"./Script_Extensions/Tagbanwa.js":54217,"./Script_Extensions/Tai_Le.js":63153,"./Script_Extensions/Tai_Tham.js":4926,"./Script_Extensions/Tai_Viet.js":39311,"./Script_Extensions/Takri.js":55970,"./Script_Extensions/Tamil.js":80882,"./Script_Extensions/Tangsa.js":92138,"./Script_Extensions/Tangut.js":46776,"./Script_Extensions/Telugu.js":40444,"./Script_Extensions/Thaana.js":23431,"./Script_Extensions/Thai.js":94846,"./Script_Extensions/Tibetan.js":137,"./Script_Extensions/Tifinagh.js":67065,"./Script_Extensions/Tirhuta.js":98082,"./Script_Extensions/Toto.js":6715,"./Script_Extensions/Ugaritic.js":29213,"./Script_Extensions/Vai.js":85388,"./Script_Extensions/Vithkuqi.js":97706,"./Script_Extensions/Wancho.js":68659,"./Script_Extensions/Warang_Citi.js":27900,"./Script_Extensions/Yezidi.js":8051,"./Script_Extensions/Yi.js":99799,"./Script_Extensions/Zanabazar_Square.js":25904,"./index.js":94274,"./unicode-version.js":47993};function webpackContext(e){return s(webpackContextResolve(e))}function webpackContextResolve(e){if(!s.o(a,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}webpackContext.keys=function(){return Object.keys(a)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id=14640},22868:function(){},14777:function(){},99830:function(){},70209:function(){}}]);