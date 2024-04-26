"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[380],{1380:function(e,t,i){i.r(t),i.d(t,{default:function(){return V}});var r=i(7313),n=i(9019),a=i(5662),s=i(8564),o=i(9860),l=i(7829),d=i(8119),c=i(9601),h=i(1405),x=i(1113),m=i(3428),u=i(4641),p=i(9536),j=i(3405),v=i(6417);const Z={"& .MuiCardHeader-action":{mr:0}};var g=(0,r.forwardRef)(((e,t)=>{let{border:i=!0,boxShadow:r,children:n,content:a=!0,contentClass:s="",contentSX:l={},darkTitle:d,secondary:c,shadow:h,sx:g={},title:b,...y}=e;const f=(0,o.Z)();return(0,v.jsxs)(m.Z,{ref:t,...y,sx:{border:i?"1px solid":"none",borderColor:f.palette.primary[200]+25,":hover":{boxShadow:r?h||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...g},children:[b&&(0,v.jsx)(u.Z,{sx:Z,title:d?(0,v.jsx)(x.Z,{variant:"h3",children:b}):b,action:c}),b&&(0,v.jsx)(p.Z,{}),a&&(0,v.jsx)(j.Z,{sx:l,className:s,children:n}),!a&&n]})})),b=i(4488);var y=()=>(0,v.jsx)(m.Z,{children:(0,v.jsx)(j.Z,{children:(0,v.jsxs)(n.ZP,{container:!0,direction:"column",children:[(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsxs)(n.ZP,{container:!0,justifyContent:"space-between",children:[(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(b.Z,{variant:"rectangular",width:44,height:44})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(b.Z,{variant:"rectangular",width:34,height:34})})]})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(b.Z,{variant:"rectangular",sx:{my:2},height:40})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(b.Z,{variant:"rectangular",height:30})})]})})}),f=i(6618),P=i(912),w=i(6691),k=i(8005),C=i(9459),M=i(2495),S=i(7512),z=i(7890),L=i(2902);const R=(0,s.ZP)(g)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.secondary.dark,color:"#fff",overflow:"hidden",position:"relative","&>div":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",width:210,zIndex:1,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",width:210,height:210,zIndex:1,background:t.palette.secondary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var E=e=>{var t,i,s;let{isLoading:m}=e;const u=(0,o.Z)(),[p,j]=(0,r.useState)([]),[Z,g]=(0,r.useState)(null),[b,E]=(0,r.useState)({name:"temperature",value:"temperature"}),{search:I}=(0,z.TH)(),F=e=>{g(null),E(e)};return(0,r.useEffect)((()=>{(async e=>{try{const t=L.parse(I.replace("?","")),i=t.domain?t.domain:"pi-desktop",r=await a.Z.get(`https://${i}:9096/api/metrics/resource/${e.value}`);j(r.data)}catch(t){console.log(t)}})(b)}),[b]),(0,v.jsx)(v.Fragment,{children:m?(0,v.jsx)(y,{}):(0,v.jsx)(R,{border:!1,content:!1,children:(0,v.jsx)(l.Z,{sx:{p:2.25},children:(0,v.jsxs)(n.ZP,{container:!0,direction:"column",children:[(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsxs)(n.ZP,{container:!0,justifyContent:"space-between",children:[(0,v.jsx)(n.ZP,{item:!0,children:"Raspberry Pi"}),(0,v.jsxs)(n.ZP,{item:!0,children:[(0,v.jsx)(d.Z,{variant:"rounded",sx:{...u.typography.commonAvatar,...u.typography.mediumAvatar,backgroundColor:u.palette.secondary.dark,color:u.palette.secondary[200],zIndex:1},"aria-controls":"menu-raspberry-card","aria-haspopup":"true",onClick:e=>{g(e.currentTarget)},children:(0,v.jsx)(f.Z,{fontSize:"inherit"})}),(0,v.jsxs)(c.Z,{id:"menu-raspberry-card",anchorEl:Z,keepMounted:!0,open:Boolean(Z),onClose:F,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,v.jsxs)(h.Z,{onClick:()=>F({name:"Temperature",value:"temperature"}),children:[(0,v.jsx)(C.Z,{sx:{mr:1.75}})," Temperature"]}),(0,v.jsxs)(h.Z,{onClick:()=>F({name:"Disk",value:"disk"}),children:[(0,v.jsx)(w.Z,{sx:{mr:1.75}})," Disk"]}),(0,v.jsxs)(h.Z,{onClick:()=>F({name:"Memory",value:"memory"}),children:[(0,v.jsx)(k.Z,{sx:{mr:1.75}})," Memory"]}),(0,v.jsxs)(h.Z,{onClick:()=>F({name:"Last backup",value:"backups"}),children:[(0,v.jsx)(P.Z,{sx:{mr:1.75}})," Backups"]}),(0,v.jsxs)(h.Z,{onClick:()=>F({name:"Cpu",value:"cpu"}),children:[(0,v.jsx)(M.Z,{sx:{mr:1.75}})," Cpu"]}),(0,v.jsxs)(h.Z,{onClick:()=>F({name:"SSH accesses",value:"ssh_accesses"}),children:[(0,v.jsx)(S.Z,{sx:{mr:1.75}})," Ssh"]})]})]})]})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(n.ZP,{container:!0,alignItems:"center",children:(0,v.jsx)(n.ZP,{item:!0,sx:{zIndex:1},children:(0,v.jsxs)(x.Z,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:["temperature"===b.value&&(null===p||void 0===p?void 0:p.value)," ","temperature"===b.value&&"Celsius"===(null===p||void 0===p?void 0:p.unit)&&"\xb0C","disk"===b.value&&(null===p||void 0===p||null===(t=p.free_in_gb)||void 0===t?void 0:t.toFixed(2))," ","disk"===b.value&&"gb free","memory"===b.value&&(null===(i=1e3*(null===p||void 0===p?void 0:p.used_in_gb))||void 0===i?void 0:i.toFixed(2))," ","memory"===b.value&&"mb free","backups"===b.value&&p&&p.length>0?p[p.length-1]:null,"cpu"===b.value&&(null===p||void 0===p||null===(s=p.idle)||void 0===s?void 0:s.toFixed(2))," ","cpu"===b.value&&"idle","ssh_accesses"===b.value&&(null===p||void 0===p?void 0:p.length)," ","ssh_accesses"===b.value&&"accesses"]})})})}),(0,v.jsx)(n.ZP,{item:!0,sx:{mb:1.25},children:(0,v.jsx)(x.Z,{sx:{fontSize:"1rem",fontWeight:500,color:u.palette.secondary[200]},children:b.name})})]})})})})},I=i(2401),F=i(1601),A=i(816),T=i.n(A);var _=e=>{let{isLoading:t}=e;const[i,a]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=await(0,F.Kl)("https://thingproxy.freeboard.io/fetch/https://www.waz-online.de/arc/outboundfeeds/rss/");a(e.entries)})()}),[]),(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)("div",{}):(0,v.jsx)(g,{content:!1,children:(0,v.jsx)(j.Z,{children:(0,v.jsxs)(n.ZP,{container:!0,spacing:I.dv,sx:{height:400,overflowX:"hidden"},children:[(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsx)(n.ZP,{container:!0,alignContent:"center",justifyContent:"space-between",children:(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(x.Z,{variant:"h4",children:"Waz Online"})})})}),(0,v.jsx)(n.ZP,{item:!0,xs:12,sx:{pt:"16px !important"}}),i.map((e=>{var t;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(n.ZP,{item:!0,xs:12,children:[(0,v.jsxs)(n.ZP,{container:!0,direction:"column",children:[(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:e.title})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsxs)(x.Z,{variant:"subtitle2",children:[e.description," ",(0,v.jsx)("a",{href:e.link,children:"link"})]})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(x.Z,{variant:"subtitle2",children:null===(t=T()(e.published))||void 0===t?void 0:t.format("DD/MM HH:mm")})})]}),(0,v.jsx)(p.Z,{sx:{my:1.5}})]})})}))]})})})})},H=i(8446);var N=e=>({type:"line",height:90,options:{chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#fff"],fill:{type:"solid",opacity:1},stroke:{curve:"smooth",width:3},yaxis:{min:Math.min.apply(Math,e)-.3,max:Math.min.apply(Math,e)+.3,show:!1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:"Value",show:!1},marker:{show:!1}}},series:[{name:"Euro - Real",data:e}]});const W=(0,s.ZP)(g)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.dark,color:"#fff",overflow:"hidden",position:"relative","&>div":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",zIndex:1,top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",zIndex:1,width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var D=e=>{let{isLoading:t}=e;const i=(0,o.Z)(),[s,d]=(0,r.useState)(""),[c,h]=(0,r.useState)(N([])),m=(0,r.useCallback)((async()=>{try{const e=await a.Z.get("https://economia.awesomeapi.com.br/json/daily/EUR-BRL/10"),t=await a.Z.get("https://economia.awesomeapi.com.br/last/EUR-BRL"),i=e.data.reverse();i.push(t.data.EURBRL);let r=-1;const n=[];for(let a=0;a<i.length;a++){const e=Math.round(100*(parseFloat(i[a].bid)+Number.EPSILON))/100;r!==e&&(n.push(e),r=e)}h(N(n)),d(parseFloat(t.data.EURBRL.bid).toFixed(2))}catch(e){console.log(e)}}),[]);return(0,r.useEffect)((()=>{m()}),[]),(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)(y,{}):(0,v.jsx)(W,{border:!1,content:!1,children:(0,v.jsx)(l.Z,{sx:{p:2.25},children:(0,v.jsx)(n.ZP,{container:!0,direction:"column",children:(0,v.jsx)(n.ZP,{item:!0,sx:{mb:.75},children:(0,v.jsxs)(n.ZP,{container:!0,alignItems:"center",sx:{height:"124px"},children:[(0,v.jsx)(n.ZP,{item:!0,xs:6,display:"flex",justifyContent:"space-between",sx:{height:"100%"},children:(0,v.jsxs)(n.ZP,{container:!0,alignItems:"center",children:[(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsxs)(x.Z,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:["R$ ",s]})}),(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsx)(x.Z,{sx:{fontSize:"1rem",fontWeight:500,color:i.palette.primary[200]},children:"Euro Real"})})]})}),(0,v.jsx)(n.ZP,{item:!0,xs:6,sx:{height:"100%"},alignItems:"center",display:"flex",children:(0,v.jsx)(H.Z,{...c})})]})})})})})})},B=i(6937),O=i(3905);var X=()=>(0,v.jsx)(m.Z,{children:(0,v.jsx)(j.Z,{children:(0,v.jsxs)(n.ZP,{container:!0,spacing:I.dv,children:[(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsxs)(n.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:I.dv,children:[(0,v.jsx)(n.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,v.jsxs)(n.ZP,{container:!0,spacing:1,children:[(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsx)(b.Z,{variant:"text"})}),(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsx)(b.Z,{variant:"rectangular",height:20})})]})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(b.Z,{variant:"rectangular",height:50,width:80})})]})}),(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsx)(b.Z,{variant:"rectangular",height:530})})]})})});var U=e=>{var t,i,r,n,a,s,o,l,d,c;const h=Math.min(Math.min.apply(Math,null===e||void 0===e||null===(t=e.hourly)||void 0===t?void 0:t.temperature2m),Math.min.apply(Math,null===e||void 0===e||null===(i=e.hourly)||void 0===i?void 0:i.apparentTemperature))-3,x=Math.max(Math.max.apply(Math,null===e||void 0===e||null===(r=e.hourly)||void 0===r?void 0:r.temperature2m),Math.max.apply(Math,null===e||void 0===e||null===(n=e.hourly)||void 0===n?void 0:n.apparentTemperature))+3;return{height:480,type:"line",options:{chart:{id:"bar-chart",stacked:!1,toolbar:{show:!0,tools:{reset:!1,pan:!1,download:!1}},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],stroke:{dashArray:[0,0,2],width:[1.5,1.5,1]},xaxis:{type:"category",categories:null===e||void 0===e||null===(a=e.hourly)||void 0===a?void 0:a.time,tickAmount:(null===e||void 0===e||null===(s=e.hourly)||void 0===s?void 0:s.time.length)/4},legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:20,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},fill:{type:"solid"},dataLabels:{enabled:!1},grid:{show:!0},yaxis:[{seriesName:"Temperature",min:h,max:x,title:{text:"\xb0C"}},{seriesName:"Apparent Temperature",show:!1,min:h,max:x},{seriesName:"Precipitation Probability",opposite:!0,min:0,max:100,title:{text:"%"}},{seriesName:"Precipitation",show:!0,title:{text:"ml"},min:0,max:5}]},series:[{name:"Temperature",type:"line",data:null===e||void 0===e||null===(o=e.hourly)||void 0===o?void 0:o.temperature2m},{name:"Apparent Temperature",type:"line",data:null===e||void 0===e||null===(l=e.hourly)||void 0===l?void 0:l.apparentTemperature},{name:"Precipitation Probability",type:"line",data:null===e||void 0===e||null===(d=e.hourly)||void 0===d?void 0:d.precipitationProbability},{name:"Precipitation",type:"column",data:null===e||void 0===e||null===(c=e.hourly)||void 0===c?void 0:c.precipitation}]}};const $=[{value:"wolfsburg",options:{latitude:52.4245,longitude:10.7815,timezone:"Europe/Berlin"},label:"Wolfsburg"},{value:"sorocaba",options:{latitude:-23.5017,longitude:-47.4581,timezone:"America/Sao_Paulo"},label:"Sorocaba"}];var K=e=>{let{isLoading:t}=e;const[i,a]=(0,r.useState)("wolfsburg"),[s,o]=(0,r.useState)(U(void 0)),l=(0,r.useCallback)((async e=>{const t={...$.filter((t=>t.value===e))[0].options,hourly:["temperature_2m","apparent_temperature","precipitation_probability","precipitation"],forecast_days:3},i=await(0,O.fetchWeatherApi)("https://api.open-meteo.com/v1/forecast",t),r=i[0],n=r.utcOffsetSeconds(),a=r.hourly(),s={hourly:{time:(l=Number(a.time()),d=Number(a.timeEnd()),c=a.interval(),Array.from({length:(d-l)/c},((e,t)=>l+t*c))).map((e=>(e=>T().unix(e+n).format("DD/MM HH:mm"))(e))),temperature2m:a.variables(0).valuesArray().map(Math.round),apparentTemperature:a.variables(1).valuesArray().map(Math.round),precipitationProbability:a.variables(2).valuesArray(),precipitation:a.variables(3).valuesArray().map(Math.round)}};var l,d,c;o(U(s))}),[]);return(0,r.useEffect)((()=>{l(i)}),[]),(0,r.useEffect)((()=>{l(i)}),[i]),(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)(X,{}):(0,v.jsx)(g,{children:(0,v.jsxs)(n.ZP,{container:!0,spacing:I.dv,children:[(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsxs)(n.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(n.ZP,{container:!0,direction:"column",spacing:1,children:(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(x.Z,{variant:"subtitle2",children:"Weather"})})})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(B.Z,{id:"standard-select-currency",select:!0,value:i,onChange:e=>a(e.target.value),children:$.map((e=>(0,v.jsx)(h.Z,{value:e.value,children:e.label},e.value)))})})]})}),(0,v.jsx)(n.ZP,{item:!0,xs:12,sx:{pl:0},children:(0,v.jsx)(H.Z,{...s})})]})})})};var G=e=>{let{isLoading:t}=e;const[i,a]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=await(0,F.Kl)("https://thingproxy.freeboard.io/fetch/?https://g1.globo.com/rss/g1/");a(e.entries)})()}),[]),(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)("div",{}):(0,v.jsx)(g,{content:!1,children:(0,v.jsx)(j.Z,{children:(0,v.jsxs)(n.ZP,{container:!0,spacing:I.dv,sx:{height:400,overflowX:"hidden"},children:[(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsx)(n.ZP,{container:!0,alignContent:"center",justifyContent:"space-between",children:(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(x.Z,{variant:"h4",children:"G1"})})})}),(0,v.jsx)(n.ZP,{item:!0,xs:12,sx:{pt:"16px !important"}}),i.map((e=>{var t;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(n.ZP,{item:!0,xs:12,children:[(0,v.jsxs)(n.ZP,{container:!0,direction:"column",children:[(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:e.title})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsxs)(x.Z,{variant:"subtitle2",children:[e.description," ",(0,v.jsx)("a",{href:e.link,children:"link"})]})}),(0,v.jsx)(n.ZP,{item:!0,children:(0,v.jsx)(x.Z,{variant:"subtitle2",children:null===(t=T()(e.published))||void 0===t?void 0:t.format("DD/MM HH:mm")})})]}),(0,v.jsx)(p.Z,{sx:{my:1.5}})]})})}))]})})})})};var V=()=>{const[e,t]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{t(!1)}),[]),(0,v.jsxs)(n.ZP,{container:!0,spacing:I.dv,children:[(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsxs)(n.ZP,{container:!0,spacing:I.dv,children:[(0,v.jsx)(n.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,v.jsx)(G,{isLoading:e})}),(0,v.jsx)(n.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,v.jsx)(_,{isLoading:e})}),(0,v.jsx)(n.ZP,{item:!0,lg:4,md:12,sm:12,xs:12,children:(0,v.jsxs)(n.ZP,{container:!0,spacing:I.dv,children:[(0,v.jsx)(n.ZP,{item:!0,sm:6,xs:12,md:6,lg:12,children:(0,v.jsx)(E,{isLoading:e})}),(0,v.jsx)(n.ZP,{item:!0,sm:6,xs:12,md:6,lg:12,children:(0,v.jsx)(D,{isLoading:e})})]})})]})}),(0,v.jsx)(n.ZP,{item:!0,xs:12,children:(0,v.jsx)(K,{isLoading:e})})]})}}}]);