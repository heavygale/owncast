(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{24019:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(1413),n=a(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},o=a(42135),s=function(e,t){return n.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};s.displayName="ClockCircleOutlined";var l=n.forwardRef(s)},16791:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/stream-health",function(){return a(46523)}])},51222:function(e,t,a){"use strict";a.d(t,{k:function(){return u}});var r=a(85893),n=a(29217),i=a(92616),o=a.n(i),s=a(58091),l=a(60727);function c(e){var t={};return e.forEach((function(e){var a=new Date(e.time),r=(0,s.Z)(a,"H:mma");t[r]=e.value})),t}o().use(n.Z);var u=function(e){var t=e.data,a=e.title,n=e.color,i=e.unit,o=e.dataCollections,s=e.yFlipped,u=e.yLogarithmic,d=[];t&&t.length>0&&d.push({name:a,color:n,data:c(t)}),o.forEach((function(e){d.push({name:e.name,data:c(e.data),color:e.color,dataset:e.options})}));var h={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return h.scales.y.reverse=s,h.scales.y.type=u?"logarithmic":"linear",(0,r.jsx)("div",{className:"line-chart-container",children:(0,r.jsx)(l.wW,{xtitle:"Time",ytitle:a,suffix:i,legend:"bottom",color:n,data:d,download:a,library:h})})};u.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},71630:function(e,t,a){"use strict";a.d(t,{j:function(){return f}});var r=a(85893),n=a(8751),i=a(11475),o=a(25968),s=a(6226),l=a(74763),c=a(84485),u=a(14670),d=a(71577),h=a(41664),p=a.n(h),y=a(67294),m=a(35159),f=function(e){var t=e.showTroubleshootButton,a=(0,y.useContext)(m.aC).health;if(!a)return null;var h=a.healthy,f=a.healthPercentage,g=a.message,v=a.representation,x="#3f8600",w="info";return f<80?(x="#cf000f",w="error"):f<30&&(x="#f0ad4e",w="error"),(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.Z,{gutter:8,children:[(0,r.jsx)(s.Z,{span:12,children:(0,r.jsx)(l.Z,{title:"Healthy Stream",value:h?"Yes":"No",valueStyle:{color:x},prefix:h?(0,r.jsx)(n.Z,{}):(0,r.jsx)(i.Z,{})})}),(0,r.jsx)(s.Z,{span:12,children:(0,r.jsx)(l.Z,{title:"Playback Health",value:f,valueStyle:{color:x},suffix:"%"})})]}),(0,r.jsx)(o.Z,{style:{display:v<100&&0!==v?"grid":"none"},children:(0,r.jsxs)(c.Z.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",v,"% of all known players. Other player status is unknown."]})}),(0,r.jsx)(o.Z,{gutter:16,style:{width:"100%",display:g?"grid":"none",marginTop:"10px"},children:(0,r.jsx)(s.Z,{span:24,children:(0,r.jsx)(u.Z,{message:g,type:w,showIcon:!0,action:t&&(0,r.jsx)(p(),{passHref:!0,href:"/stream-health",children:(0,r.jsx)(d.Z,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})};f.defaultProps={showTroubleshootButton:!0}},46523:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return S}});var r=a(47568),n=a(70655),i=a(85893),o=a(84485),s=a(14670),l=a(11382),c=a(26713),u=a(25968),d=a(6226),h=a(59652),p=a(74763),y=a(67294),m=a(1413),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 00-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 00-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 00-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 10128 0 64 64 0 10-128 0z"}}]},name:"wifi",theme:"outlined"},g=a(42135),v=function(e,t){return y.createElement(g.Z,(0,m.Z)((0,m.Z)({},e),{},{ref:t,icon:f}))};v.displayName="WifiOutlined";var x=y.forwardRef(v),w=a(24019),j=a(28058),b=a(58827),Z=a(51222),F=a(71630),k=function(e){var t=e.title,a=e.description;return(0,i.jsxs)("div",{className:"description-box",children:[(0,i.jsx)(o.Z.Title,{children:t}),(0,i.jsx)(o.Z.Paragraph,{children:a})]})},S=function(){var e,t,a,m,f,g,v,S=(0,y.useState)([]),C=S[0],P=S[1],T=(0,y.useState)([]),N=T[0],E=T[1],L=(0,y.useState)(),B=L[0],D=L[1],_=(0,y.useState)(),O=_[0],z=_[1],I=(0,y.useState)([]),q=I[0],M=I[1],H=(0,y.useState)([]),R=H[0],V=H[1],A=(0,y.useState)([]),Q=A[0],Y=A[1],W=(0,y.useState)([]),X=W[0],U=W[1],$=(0,y.useState)([]),G=$[0],J=$[1],K=(0,y.useState)([]),ee=K[0],te=K[1],ae=(0,y.useState)([]),re=ae[0],ne=ae[1],ie=(0,y.useState)([]),oe=ie[0],se=ie[1],le=(0,y.useState)(0),ce=le[0],ue=le[1],de=function(){var e=(0,r.Z)((function(){var e,t;return(0,n.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,b.rQ)(b.N$)];case 1:return e=a.sent(),P(e.errors),E(e.qualityVariantChanges),z(e.highestLatency),D(e.lowestLatency),M(e.medianLatency),V(e.medianSegmentDownloadDuration),Y(e.maximumSegmentDownloadDuration),U(e.minimumSegmentDownloadDuration),J(e.minPlayerBitrate),te(e.medianPlayerBitrate),ne(e.maxPlayerBitrate),se(e.availableBitrates),ue(e.segmentLength-.3),[3,3];case 2:return t=a.sent(),console.error(t),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,y.useEffect)((function(){var e;return de(),e=setInterval(de,b.NE),function(){clearInterval(e)}}),[]);var he=(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z.Title,{children:"Stream Performance"}),(0,i.jsx)(s.Z,{type:"info",message:" Data has not yet been collected. Once a stream has begun and viewers are watching this page will be available."}),(0,i.jsx)(l.Z,{size:"large",children:(0,i.jsx)("div",{style:{marginTop:"50px",height:"100px"}})})]});if(!(null===C||void 0===C?void 0:C.length))return he;if(!(null===q||void 0===q?void 0:q.length))return he;if(!(null===R||void 0===R?void 0:R.length))return he;var pe=[{name:"Errors",color:"#B63FFF",options:{radius:3},data:C},{name:"Quality changes",color:"#2087E2",options:{radius:2},data:N}],ye=[{name:"Median stream latency",color:"#00FFFF",options:{radius:2},data:q},{name:"Lowest stream latency",color:"#02FD0D",options:{radius:2},data:B},{name:"Highest stream latency",color:"#B63FFF",options:{radius:2},data:O}],me=[{name:"Max download duration",color:"#B63FFF",options:{radius:2},data:Q},{name:"Median download duration",color:"#00FFFF",options:{radius:2},data:R},{name:"Min download duration",color:"#02FD0D",options:{radius:2},data:X},{name:"Approximate limit",color:"#003FFF",data:R.map((function(e){return{time:e.time,value:ce}})),options:{radius:0}}],fe=[{name:"Lowest player speed",color:"#B63FFF",data:G,options:{radius:2}},{name:"Median player speed",color:"#00FFFF",data:ee,options:{radius:2}},{name:"Maximum player speed",color:"#02FD0D",data:re,options:{radius:2}}];oe.forEach((function(e){fe.push({name:"Available bitrate",color:"#003FFF",data:G.map((function(t){return{time:t.time,value:e}})),options:{radius:0}})}));var ge=null===(t=null===(e=fe[0])||void 0===e?void 0:e.data[fe[0].data.length-1])||void 0===t?void 0:t.value,ve=null===(a=R[R.length-1])||void 0===a?void 0:a.value,xe=oe[0],we=(null===(m=q[q.length-1])||void 0===m?void 0:m.value)||0,je=(null===(f=O[O.length-1])||void 0===f?void 0:f.value)||0,be=(null===(g=B[B.length-1])||void 0===g?void 0:g.value)||0,Ze=(Number(je)+Number(be)+Number(we))/3,Fe=0;((null===(v=pe[0])||void 0===v?void 0:v.data.length)||0)>5?Fe=pe[0].data.slice(-5).reduce((function(e,t){return e+Number(t.value)}),0):Fe=pe[0].data.reduce((function(e,t){return e+Number(t.value)}),0);var ke=ge>0||ve>0||Fe>0,Se=null,Ce=null;0!==ge&&ge<xe&&(Se="One of your viewers is playing your stream at ".concat(ge,"kbps, slower than ").concat(xe,"kbps, the lowest quality you made available. Consider adding a lower quality with a lower bitrate if the errors over time warrant this.")),ve>ce&&(Ce="Your viewers may be consuming your video slower than required. This may be due to slow networks or your latency configuration. You need to decrease the amount of time viewers are taking to consume your video. Consider adding a lower quality with a lower bitrate or experiment with increasing the latency buffer setting.");var Pe=Fe>0?"#B63FFF":"#FFFFFF",Te={display:"flex",alignItems:"center",justifyContent:"center",height:"80px"};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z.Title,{children:"Stream Performance"}),(0,i.jsx)(o.Z.Paragraph,{children:"This tool hopes to help you identify and troubleshoot problems you may be experiencing with your stream. It aims to aggregate experiences across your viewers, meaning one viewer with an exceptionally bad experience may throw off numbers for the whole, especially with a low number of viewers."}),(0,i.jsx)(o.Z.Paragraph,{children:"The data is only collected by those using the Owncast web interface and is unable to gain insight into external players people may be using such as VLC, MPV, QuickTime, etc."}),(0,i.jsxs)(c.Z,{direction:"vertical",size:"middle",children:[(0,i.jsx)(u.Z,{justify:"space-around",children:(0,i.jsx)(d.Z,{style:{width:"100%"},children:(0,i.jsx)(h.Z,{type:"inner",children:(0,i.jsx)(F.j,{showTroubleshootButton:!1})})})}),(0,i.jsxs)(u.Z,{gutter:[16,16],justify:"space-around",style:{display:ke?"flex":"none"},children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(h.Z,{type:"inner",children:(0,i.jsx)("div",{style:Te,children:(0,i.jsx)(p.Z,{title:"Viewer Playback Speed",value:"".concat(ge),prefix:(0,i.jsx)(x,{style:{marginRight:"5px"}}),precision:0,suffix:"kbps"})})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(h.Z,{type:"inner",children:(0,i.jsx)("div",{style:Te,children:(0,i.jsx)(p.Z,{title:"Viewer Latency",value:"".concat(Ze),prefix:(0,i.jsx)(w.Z,{style:{marginRight:"5px"}}),precision:0,suffix:"seconds"})})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(h.Z,{type:"inner",children:(0,i.jsx)("div",{style:Te,children:(0,i.jsx)(p.Z,{title:"Recent Playback Errors",value:"".concat(Fe||0),valueStyle:{color:Pe},prefix:(0,i.jsx)(j.Z,{style:{marginRight:"5px"}}),suffix:""})})})})]}),(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(k,{title:"Video Segment Download",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z.Paragraph,{children:"Once a video segment takes too long to download a viewer will experience buffering. If you see slow downloads you should offer a lower quality for your viewers, or find other ways, possibly an external storage provider, a CDN or a faster network, to improve your stream quality. Increasing your latency buffer can also help for some viewers."}),(0,i.jsx)(o.Z.Paragraph,{children:"In short, once the pink line consistently gets near the blue line, your stream is likely experiencing problems for viewers."})]})}),Ce&&(0,i.jsx)(s.Z,{message:"Slow downloads",description:Ce,type:"error",showIcon:!0}),(0,i.jsx)(Z.k,{title:"Seconds",dataCollections:me,color:"#FF7700",unit:"s",yLogarithmic:!0})]}),(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(k,{title:"Player Network Speed",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z.Paragraph,{children:"The playback bitrate of your viewers. Once somebody's bitrate drops below the lowest video variant bitrate they will experience buffering. If you see viewers with slow connections trying to play your video you should consider offering an additional, lower quality."}),(0,i.jsx)(o.Z.Paragraph,{children:"In short, once the pink line gets near the lowest blue line, your stream is likely experiencing problems for at least one of your viewers."})]})}),Se&&(0,i.jsx)(s.Z,{message:"Low bandwidth viewers",description:Se,type:"error",showIcon:!0}),(0,i.jsx)(Z.k,{title:"Lowest Player Bitrate",dataCollections:fe,color:"#FF7700",unit:"kbps",yLogarithmic:!0})]}),(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(k,{title:"Errors and Quality Changes",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z.Paragraph,{children:"Recent number of errors, including buffering, and quality changes from across all your viewers. Errors can occur for many reasons, including browser issues, plugins, wifi problems, and they don't all represent fatal issues or something you have control over."}),"A quality change is not necessarily a negative thing, but if it's excessive and coinciding with errors you should consider adding another quality variant.",(0,i.jsx)(o.Z.Paragraph,{})]})}),(0,i.jsx)(Z.k,{title:"#",dataCollections:pe,color:"#FF7700",unit:""})]}),(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(k,{title:"Viewer Latency",description:"An approximate number of seconds that your viewers are behind your live video. The largest cause of latency spikes is buffering. High latency itself is not a problem, and optimizing for low latency can result in buffering, resulting in even higher latency."}),(0,i.jsx)(Z.k,{title:"Seconds",dataCollections:ye,color:"#FF7700",unit:"s"})]})]})]})}}},function(e){e.O(0,[2757,7330,8091,2944,6265,428,2139,9774,2888,179],(function(){return t=16791,e(e.s=t);var t}));var t=e.O();_N_E=t}]);