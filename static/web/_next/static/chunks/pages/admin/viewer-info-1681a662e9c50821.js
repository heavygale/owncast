(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6109],{87547:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(1413),a=r(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},i=r(42135),o=function(e,t){return a.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};o.displayName="UserOutlined";var u=a.forwardRef(o)},77349:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(83946),a=r(19013),s=r(13882);function i(e,t){(0,s.Z)(2,arguments);var r=(0,a.Z)(e),i=(0,n.Z)(t);return isNaN(i)?new Date(NaN):i?(r.setDate(r.getDate()+i),r):r}},11640:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(83946),a=r(19013),s=r(13882);function i(e,t){(0,s.Z)(2,arguments);var r=(0,a.Z)(e),i=(0,n.Z)(t);if(isNaN(i))return new Date(NaN);if(!i)return r;var o=r.getDate(),u=new Date(r.getTime());u.setMonth(r.getMonth()+i+1,0);var c=u.getDate();return o>=c?u:(r.setFullYear(u.getFullYear(),u.getMonth(),o),r)}},92794:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/viewer-info",function(){return r(80961)}])},51222:function(e,t,r){"use strict";r.d(t,{k:function(){return l}});var n=r(85893),a=r(29217),s=r(92616),i=r.n(s),o=r(58091),u=r(60727);function c(e){var t={};return e.forEach((function(e){var r=new Date(e.time),n=(0,o.Z)(r,"H:mma");t[n]=e.value})),t}i().use(a.Z);var l=function(e){var t=e.data,r=e.title,a=e.color,s=e.unit,i=e.dataCollections,o=e.yFlipped,l=e.yLogarithmic,d=[];t&&t.length>0&&d.push({name:r,color:a,data:c(t)}),i.forEach((function(e){d.push({name:e.name,data:c(e.data),color:e.color,dataset:e.options})}));var f={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return f.scales.y.reverse=o,f.scales.y.type=l?"logarithmic":"linear",(0,n.jsx)("div",{className:"line-chart-container",children:(0,n.jsx)(u.wW,{xtitle:"Time",ytitle:r,suffix:s,legend:"bottom",color:a,data:d,download:r,library:f})})};l.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},97206:function(e,t,r){"use strict";r.d(t,{m:function(){return h}});var n=r(26042),a=r(85893),s=r(84485),i=r(97910),o=r(74763),u=r(59652),c=s.Z.Text,l={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},d=function(e){var t=e.prefix,r=e.value,n=e.suffix,s=e.title;return(0,a.jsxs)("div",{children:[t,(0,a.jsx)("div",{children:(0,a.jsx)(c,{type:"secondary",children:s})}),(0,a.jsx)("div",{children:(0,a.jsxs)(c,{type:"secondary",children:[r,n||"%"]})})]})},f=function(e){var t=e.title,r=e.value,n=e.prefix,s=e.suffix,o=e.color,u=r>90?"red":o,c=(0,a.jsx)(d,{prefix:n,value:r,suffix:s,title:t});return(0,a.jsx)(i.Z,{type:"dashboard",percent:r,width:120,strokeColor:{"0%":o,"90%":u},format:function(){return c}})};f.defaultProps=l;var v=function(e){var t=e.title,r=e.value,n=e.prefix,s=e.formatter;return(0,a.jsx)(o.Z,{title:t,value:r,prefix:n,formatter:s})};v.defaultProps=l;var h=function(e){var t=e.progress,r=e.centered,s=t?f:v,i=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,a.jsx)(u.Z,{type:"inner",children:(0,a.jsx)("div",{style:i,children:(0,a.jsx)(s,(0,n.Z)({},e))})})};h.defaultProps=l},80961:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(47568),a=r(70655),s=r(85893),i=r(67294),o=r(66516),u=r(84485),c=r(25968),l=r(6226),d=r(14670),f=r(11382),v=r(38504),h=r(87547),x=r(80882),m=r(77349),Z=r(13882),p=r(83946);function g(e,t){(0,Z.Z)(2,arguments);var r=(0,p.Z)(t);return(0,m.Z)(e,-r)}var y=r(11640);function w(e,t){(0,Z.Z)(2,arguments);var r=(0,p.Z)(t);return(0,y.Z)(e,-r)}function j(e,t){if((0,Z.Z)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var r=t.years?(0,p.Z)(t.years):0,n=t.months?(0,p.Z)(t.months):0,a=t.weeks?(0,p.Z)(t.weeks):0,s=t.days?(0,p.Z)(t.days):0,i=t.hours?(0,p.Z)(t.hours):0,o=t.minutes?(0,p.Z)(t.minutes):0,u=t.seconds?(0,p.Z)(t.seconds):0,c=w(e,n+12*r),l=g(c,s+7*a),d=o+60*i,f=u+60*d,v=1e3*f,h=new Date(l.getTime()-v);return h}var D=r(19013);function N(e){(0,Z.Z)(1,arguments);var t=(0,D.Z)(e),r=t.getTime();return r}var S=r(51222),k=r(97206),C=r(10355),b=r(45938),_=r(2766);var T=function(e){var t=e.data,r=[{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:function(e){return(0,_.AB)(e)}},{title:"Location",dataIndex:"geo",key:"geo",render:function(e){return e?"".concat(e.regionName,", ").concat(e.countryCode):"-"}},{title:"Watch Time",dataIndex:"firstSeen",key:"firstSeen",defaultSortOrder:"ascend",render:function(e){return(0,b.Z)(new Date(e))},sorter:function(e,t){return new Date(e.firstSeen).getTime()-new Date(t.firstSeen).getTime()},sortDirections:["descend","ascend"]}];return(0,s.jsx)(C.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:r,dataSource:t,size:"small",rowKey:"id"})},E=r(35159),P=r(58827);function I(){var e,t=(0,i.useContext)(E.aC)||{},r=t.online,m=t.broadcaster,p=t.viewerCount,g=t.overallPeakViewerCount,y=t.sessionPeakViewerCount;m&&m.time&&(e=new Date(m.time));var w=[{title:"Current stream",start:e},{title:"Last 12 hours",start:j(new Date,{hours:12})},{title:"Last 24 hours",start:j(new Date,{hours:24})},{title:"Last 7 days",start:j(new Date,{days:7})},{title:"Last 30 days",start:j(new Date,{days:30})},{title:"Last 3 months",start:j(new Date,{months:3})},{title:"Last 6 months",start:j(new Date,{months:6})}],D=(0,i.useState)(!0),C=D[0],b=D[1],_=(0,i.useState)([]),I=_[0],L=_[1],M=(0,i.useState)([]),A=M[0],F=M[1],O=(0,i.useState)(w[1]),V=O[0],z=O[1],B=function(){var e=(0,n.Z)((function(){var e,t,r,n,s;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),e="".concat(P.iV,"?windowStart=").concat(function(e){return(0,Z.Z)(1,arguments),Math.floor(N(e)/1e3)}(V.start)),[4,(0,P.rQ)(e)];case 1:return t=a.sent(),L(t),b(!1),[3,3];case 2:return r=a.sent(),console.log("==== error",r),[3,3];case 3:return a.trys.push([3,5,,6]),[4,(0,P.rQ)(P.a_)];case 4:return n=a.sent(),F(n),[3,6];case 5:return s=a.sent(),console.log("==== error",s),[3,6];case 6:return[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){var e=null;return B(),r?(e=setInterval(B,6e4),function(){clearInterval(e)}):function(){return[]}}),[r,V]);var Q=function(e){var t=e.key;z(w[t])},U=(0,s.jsxs)(o.Z,{children:[r&&e&&(0,s.jsx)(o.Z.Item,{onClick:Q,children:w[0].title},"0"),w.slice(1).map((function(e,t){return(0,s.jsx)(o.Z.Item,{onClick:Q,children:e.title},t+1)}))]});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z.Title,{children:"Viewer Info"}),(0,s.jsx)("br",{}),(0,s.jsxs)(c.Z,{gutter:[16,16],justify:"space-around",children:[r&&(0,s.jsx)(l.Z,{span:8,md:8,children:(0,s.jsx)(k.m,{title:"Current viewers",value:p.toString(),prefix:(0,s.jsx)(h.Z,{})})}),(0,s.jsx)(l.Z,{md:r?8:12,children:(0,s.jsx)(k.m,{title:r?"Max viewers this stream":"Max viewers last stream",value:y.toString(),prefix:(0,s.jsx)(h.Z,{})})}),(0,s.jsx)(l.Z,{md:r?8:12,children:(0,s.jsx)(k.m,{title:"All-time max viewers",value:g.toString(),prefix:(0,s.jsx)(h.Z,{})})})]}),!I.length&&(0,s.jsx)(d.Z,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No viewer data has been collected yet.",type:"info"}),(0,s.jsxs)(f.Z,{spinning:!I.length||C,children:[(0,s.jsx)(v.Z,{overlay:U,trigger:["click"],children:(0,s.jsxs)("button",{type:"button",style:{float:"right",background:"transparent",border:"unset"},children:[V.title," ",(0,s.jsx)(x.Z,{})]})}),I.length>0&&(0,s.jsx)(S.k,{title:"Viewers",data:I,color:"#2087E2",unit:""}),(0,s.jsx)(T,{data:A})]})]})}}},function(e){e.O(0,[2757,7330,7266,355,8091,2944,6265,5938,428,2139,7910,9774,2888,179],(function(){return t=92794,e(e.s=t);var t}));var t=e.O();_N_E=t}]);