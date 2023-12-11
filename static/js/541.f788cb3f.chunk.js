"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[541],{7541:function(e,t,i){i.r(t),i.d(t,{default:function(){return he}});var n=i(7313),r=i(9019),s=i(5662),a=i(7592),l=i(9860),o=i(7829),c=i(8119),d=i(9601),h=i(1405),x=i(1113),j=i(3497),m=i(3428),p=i(3405),u=i(4488),Z=i(6417);var g=()=>(0,Z.jsx)(m.Z,{children:(0,Z.jsx)(p.Z,{children:(0,Z.jsxs)(r.ZP,{container:!0,direction:"column",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",width:44,height:44})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",width:34,height:34})})]})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",sx:{my:2},height:40})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:30})})]})})}),v=i(6618),P=i(912),b=i(6691),y=i(8005),f=i(9459),w=i(2495);const k=(0,a.ZP)(j.Z)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.secondary.dark,color:"#fff",overflow:"hidden",position:"relative","&>div":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",width:210,zIndex:1,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",width:210,height:210,zIndex:1,background:t.palette.secondary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var C=e=>{var t,i,a;let{isLoading:j}=e;const m=(0,l.Z)(),[p,u]=(0,n.useState)([]),[C,I]=(0,n.useState)(null),[z,M]=(0,n.useState)("temperature"),S=e=>{I(null),M(e)},R=(0,n.useCallback)((async e=>{try{const t=await s.Z.get(`https://rasp-pi:9096/api/metrics/resource/${e}`);u(t.data)}catch(t){console.log(t)}}),[]);return(0,n.useEffect)((()=>{R(z)}),[z]),(0,Z.jsx)(Z.Fragment,{children:j?(0,Z.jsx)(g,{}):(0,Z.jsx)(k,{border:!1,content:!1,children:(0,Z.jsx)(o.Z,{sx:{p:2.25},children:(0,Z.jsxs)(r.ZP,{container:!0,direction:"column",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:"Raspberry Pi"}),(0,Z.jsxs)(r.ZP,{item:!0,children:[(0,Z.jsx)(c.Z,{variant:"rounded",sx:{...m.typography.commonAvatar,...m.typography.mediumAvatar,backgroundColor:m.palette.secondary.dark,color:m.palette.secondary[200],zIndex:1},"aria-controls":"menu-raspberry-card","aria-haspopup":"true",onClick:e=>{I(e.currentTarget)},children:(0,Z.jsx)(v.Z,{fontSize:"inherit"})}),(0,Z.jsxs)(d.Z,{id:"menu-raspberry-card",anchorEl:C,keepMounted:!0,open:Boolean(C),onClose:S,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,Z.jsxs)(h.Z,{onClick:()=>S("temperature"),children:[(0,Z.jsx)(f.Z,{sx:{mr:1.75}})," Temperature"]}),(0,Z.jsxs)(h.Z,{onClick:()=>S("disk"),children:[(0,Z.jsx)(b.Z,{sx:{mr:1.75}})," Disk"]}),(0,Z.jsxs)(h.Z,{onClick:()=>S("memory"),children:[(0,Z.jsx)(y.Z,{sx:{mr:1.75}})," Memory"]}),(0,Z.jsxs)(h.Z,{onClick:()=>S("backups"),children:[(0,Z.jsx)(P.Z,{sx:{mr:1.75}})," Backups"]}),(0,Z.jsxs)(h.Z,{onClick:()=>S("cpu"),children:[(0,Z.jsx)(w.Z,{sx:{mr:1.75}})," Cpu"]})]})]})]})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,Z.jsx)(r.ZP,{item:!0,sx:{zIndex:1},children:(0,Z.jsxs)(x.Z,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:["temperature"===z&&(null===p||void 0===p?void 0:p.value)," ","temperature"===z&&"Celsius"===(null===p||void 0===p?void 0:p.unit)&&"\xb0C","disk"===z&&(null===p||void 0===p||null===(t=p.free_in_gb)||void 0===t?void 0:t.toFixed(2))," ","disk"===z&&"gb free","memory"===z&&(null===(i=1e3*(null===p||void 0===p?void 0:p.used_in_gb))||void 0===i?void 0:i.toFixed(2))," ","memory"===z&&"mb free","backups"===z&&p&&p.length>0?p[p.length-1]:null,"cpu"===z&&(null===p||void 0===p||null===(a=p.idle)||void 0===a?void 0:a.toFixed(2))," ","cpu"===z&&"idle"]})})})}),(0,Z.jsx)(r.ZP,{item:!0,sx:{mb:1.25},children:(0,Z.jsx)(x.Z,{sx:{fontSize:"1rem",fontWeight:500,color:m.palette.secondary[200]},children:"backups"===z?"Last backup":z.charAt(0).toUpperCase()+z.slice(1)})})]})})})})},I=i(9536),z=i(6104),M=i(9099),S=i(5554),R=i(7910),L=i.n(R),T=i(8446);var A={type:"area",height:95,options:{chart:{id:"support-chart",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:"Ticket "},marker:{show:!1}}},series:[{data:[0,15,10,50,30,40,25]}]};var E=()=>{const e=(0,l.Z)(),t=(0,S.v9)((e=>e.customization)),{navType:i}=t,s=e.palette.secondary[800];return(0,n.useEffect)((()=>{const e={...A.options,colors:[s],tooltip:{theme:"light"}};L().exec("support-chart","updateOptions",e)}),[i,s]),(0,Z.jsxs)(m.Z,{sx:{bgcolor:"secondary.light"},children:[(0,Z.jsxs)(r.ZP,{container:!0,sx:{p:2,pb:0,color:"#fff"},children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",sx:{color:e.palette.secondary.dark},children:"Bajaj Finery"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"h4",sx:{color:e.palette.grey[800]},children:"$1839.00"})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(x.Z,{variant:"subtitle2",sx:{color:e.palette.grey[800]},children:"10% Profit"})})]}),(0,Z.jsx)(T.Z,{...A})]})},F=i(2401);var W=()=>(0,Z.jsxs)(m.Z,{children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20,width:20})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:150})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",spacing:F.dv,justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})})]})})]})}),(0,Z.jsx)(p.Z,{sx:{p:1.25,display:"flex",pt:0,justifyContent:"center"},children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:25,width:75})})]}),$=i(2163),B=i(8398),_=i(2882),N=i(6859);var O=e=>{let{isLoading:t}=e;const i=(0,l.Z)(),[s,a]=(0,n.useState)(null),o=()=>{a(null)};return(0,Z.jsx)(Z.Fragment,{children:t?(0,Z.jsx)(W,{}):(0,Z.jsxs)(j.Z,{content:!1,children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignContent:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"h4",children:"Popular Stocks"})}),(0,Z.jsxs)(r.ZP,{item:!0,children:[(0,Z.jsx)(B.Z,{fontSize:"small",sx:{color:i.palette.primary[200],cursor:"pointer"},"aria-controls":"menu-popular-card","aria-haspopup":"true",onClick:e=>{a(e.currentTarget)}}),(0,Z.jsxs)(d.Z,{id:"menu-popular-card",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:o,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,Z.jsx)(h.Z,{onClick:o,children:" Today"}),(0,Z.jsx)(h.Z,{onClick:o,children:" This Month"}),(0,Z.jsx)(h.Z,{onClick:o,children:" This Year "})]})]})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,sx:{pt:"16px !important"},children:(0,Z.jsx)(E,{})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsxs)(r.ZP,{container:!0,direction:"column",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"Bajaj Finery"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"$1839.00"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(c.Z,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:i.palette.success.light,color:i.palette.success.dark,ml:2},children:(0,Z.jsx)(_.Z,{fontSize:"small",color:"inherit"})})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle2",sx:{color:"success.dark"},children:"10% Profit"})})]}),(0,Z.jsx)(I.Z,{sx:{my:1.5}}),(0,Z.jsxs)(r.ZP,{container:!0,direction:"column",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"TTML"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"$100.00"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(c.Z,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:i.palette.orange.light,color:i.palette.orange.dark,marginLeft:1.875},children:(0,Z.jsx)(N.Z,{fontSize:"small",color:"inherit"})})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle2",sx:{color:i.palette.orange.dark},children:"10% loss"})})]}),(0,Z.jsx)(I.Z,{sx:{my:1.5}}),(0,Z.jsxs)(r.ZP,{container:!0,direction:"column",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"Reliance"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"$200.00"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(c.Z,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:i.palette.success.light,color:i.palette.success.dark,ml:2},children:(0,Z.jsx)(_.Z,{fontSize:"small",color:"inherit"})})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle2",sx:{color:i.palette.success.dark},children:"10% Profit"})})]}),(0,Z.jsx)(I.Z,{sx:{my:1.5}}),(0,Z.jsxs)(r.ZP,{container:!0,direction:"column",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"TTML"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"$189.00"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(c.Z,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:i.palette.orange.light,color:i.palette.orange.dark,ml:2},children:(0,Z.jsx)(N.Z,{fontSize:"small",color:"inherit"})})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle2",sx:{color:i.palette.orange.dark},children:"10% loss"})})]}),(0,Z.jsx)(I.Z,{sx:{my:1.5}}),(0,Z.jsxs)(r.ZP,{container:!0,direction:"column",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"Stolon"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle1",color:"inherit",children:"$189.00"})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(c.Z,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:i.palette.orange.light,color:i.palette.orange.dark,ml:2},children:(0,Z.jsx)(N.Z,{fontSize:"small",color:"inherit"})})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle2",sx:{color:i.palette.orange.dark},children:"10% loss"})})]})]})]})}),(0,Z.jsx)(z.Z,{sx:{p:1.25,pt:0,justifyContent:"center"},children:(0,Z.jsxs)(M.Z,{size:"small",disableElevation:!0,children:["View All",(0,Z.jsx)($.Z,{})]})})]})})};var U=e=>({type:"line",height:90,options:{chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#fff"],fill:{type:"solid",opacity:1},stroke:{curve:"smooth",width:3},yaxis:{min:Math.min.apply(Math,e)-.3,max:Math.min.apply(Math,e)+.3,show:!1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:"Value",show:!1},marker:{show:!1}}},series:[{name:"Euro - Real",data:e}]});const D=(0,a.ZP)(j.Z)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.dark,color:"#fff",overflow:"hidden",position:"relative","&>div":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",zIndex:1,top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",zIndex:1,width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var G=e=>{let{isLoading:t}=e;const i=(0,l.Z)(),[a,c]=(0,n.useState)(""),[d,h]=(0,n.useState)(U([])),j=(0,n.useCallback)((async()=>{try{const e=await s.Z.get("https://economia.awesomeapi.com.br/json/daily/EUR-BRL/10"),t=await s.Z.get("https://economia.awesomeapi.com.br/last/EUR-BRL"),i=e.data.reverse();i.push(t.data.EURBRL);let n=-1;const r=[];for(let s=0;s<i.length;s++){const e=Math.round(100*(parseFloat(i[s].bid)+Number.EPSILON))/100;n!==e&&(r.push(e),n=e)}h(U(r)),c(parseFloat(t.data.EURBRL.bid).toFixed(2))}catch(e){console.log(e)}}),[]);return(0,n.useEffect)((()=>{j()}),[]),(0,Z.jsx)(Z.Fragment,{children:t?(0,Z.jsx)(g,{}):(0,Z.jsx)(D,{border:!1,content:!1,children:(0,Z.jsx)(o.Z,{sx:{p:2.25},children:(0,Z.jsx)(r.ZP,{container:!0,direction:"column",children:(0,Z.jsx)(r.ZP,{item:!0,sx:{mb:.75},children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",sx:{height:"124px"},children:[(0,Z.jsx)(r.ZP,{item:!0,xs:6,display:"flex",justifyContent:"space-between",sx:{height:"100%"},children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(x.Z,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:["R$ ",a]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(x.Z,{sx:{fontSize:"1rem",fontWeight:500,color:i.palette.primary[200]},children:"Euro Real"})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:6,sx:{height:"100%"},alignItems:"center",display:"flex",children:(0,Z.jsx)(T.Z,{...d})})]})})})})})})},H=i(8310),V=i(194),X=i(2600),Y=i(3213);var q=()=>(0,Z.jsx)(m.Z,{sx:{p:2},children:(0,Z.jsx)(H.Z,{sx:{py:0},children:(0,Z.jsxs)(V.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,Z.jsx)(X.Z,{children:(0,Z.jsx)(u.Z,{variant:"rectangular",width:44,height:44})}),(0,Z.jsx)(Y.Z,{sx:{py:0},primary:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20}),secondary:(0,Z.jsx)(u.Z,{variant:"text"})})]})})}),J=i(9862);const K=(0,a.ZP)(j.Z)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.dark,color:t.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${t.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${t.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}}}));var Q=e=>{let{isLoading:t}=e;const i=(0,l.Z)();return(0,Z.jsx)(Z.Fragment,{children:t?(0,Z.jsx)(q,{}):(0,Z.jsx)(K,{border:!1,content:!1,children:(0,Z.jsx)(o.Z,{sx:{p:2},children:(0,Z.jsx)(H.Z,{sx:{py:0},children:(0,Z.jsxs)(V.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,Z.jsx)(X.Z,{children:(0,Z.jsx)(c.Z,{variant:"rounded",sx:{...i.typography.commonAvatar,...i.typography.largeAvatar,backgroundColor:i.palette.primary[800],color:"#fff"},children:(0,Z.jsx)(J.Z,{fontSize:"inherit"})})}),(0,Z.jsx)(Y.Z,{sx:{py:0,mt:.45,mb:.45},primary:(0,Z.jsx)(x.Z,{variant:"h4",sx:{color:"#fff"},children:"$203k"}),secondary:(0,Z.jsx)(x.Z,{variant:"subtitle2",sx:{color:"primary.light",mt:.25},children:"Total Income"})})]})})})})})},ee=i(2947);const te=(0,a.ZP)(j.Z)((e=>{let{theme:t}=e;return{overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${t.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${t.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,borderRadius:"50%",top:-160,right:-130}}}));var ie=e=>{let{isLoading:t}=e;const i=(0,l.Z)();return(0,Z.jsx)(Z.Fragment,{children:t?(0,Z.jsx)(q,{}):(0,Z.jsx)(te,{border:!1,content:!1,children:(0,Z.jsx)(o.Z,{sx:{p:2},children:(0,Z.jsx)(H.Z,{sx:{py:0},children:(0,Z.jsxs)(V.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,Z.jsx)(X.Z,{children:(0,Z.jsx)(c.Z,{variant:"rounded",sx:{...i.typography.commonAvatar,...i.typography.largeAvatar,backgroundColor:i.palette.warning.light,color:i.palette.warning.dark},children:(0,Z.jsx)(ee.Z,{fontSize:"inherit"})})}),(0,Z.jsx)(Y.Z,{sx:{py:0,mt:.45,mb:.45},primary:(0,Z.jsx)(x.Z,{variant:"h4",children:"$203k"}),secondary:(0,Z.jsx)(x.Z,{variant:"subtitle2",sx:{color:i.palette.grey[500],mt:.5},children:"Total Income"})})]})})})})})},ne=i(2042),re=i(3905),se=i(816),ae=i.n(se);var le=()=>(0,Z.jsx)(m.Z,{children:(0,Z.jsx)(p.Z,{children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(u.Z,{variant:"text"})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:20})})]})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:50,width:80})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(u.Z,{variant:"rectangular",height:530})})]})})});var oe=e=>{var t,i,n,r,s,a,l,o,c,d;const h=Math.min(Math.min.apply(Math,null===e||void 0===e||null===(t=e.hourly)||void 0===t?void 0:t.temperature2m),Math.min.apply(Math,null===e||void 0===e||null===(i=e.hourly)||void 0===i?void 0:i.apparentTemperature))-3,x=Math.max(Math.max.apply(Math,null===e||void 0===e||null===(n=e.hourly)||void 0===n?void 0:n.temperature2m),Math.max.apply(Math,null===e||void 0===e||null===(r=e.hourly)||void 0===r?void 0:r.apparentTemperature))+3;return{height:480,type:"line",options:{chart:{id:"bar-chart",stacked:!1,toolbar:{show:!0,tools:{reset:!1,pan:!1,download:!1}},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],stroke:{dashArray:[0,0,2],width:[1.5,1.5,1]},xaxis:{type:"category",categories:null===e||void 0===e||null===(s=e.hourly)||void 0===s?void 0:s.time,tickAmount:(null===e||void 0===e||null===(a=e.hourly)||void 0===a?void 0:a.time.length)/4},legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:20,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},fill:{type:"solid"},dataLabels:{enabled:!1},grid:{show:!0},yaxis:[{seriesName:"Temperature",min:h,max:x,title:{text:"\xb0C"}},{seriesName:"Apparent Temperature",show:!1,min:h,max:x},{seriesName:"Precipitation Probability",opposite:!0,min:0,max:100,title:{text:"%"}},{seriesName:"Precipitation",show:!0,title:{text:"ml"},min:0,max:5}]},series:[{name:"Temperature",type:"line",data:null===e||void 0===e||null===(l=e.hourly)||void 0===l?void 0:l.temperature2m},{name:"Apparent Temperature",type:"line",data:null===e||void 0===e||null===(o=e.hourly)||void 0===o?void 0:o.apparentTemperature},{name:"Precipitation Probability",type:"line",data:null===e||void 0===e||null===(c=e.hourly)||void 0===c?void 0:c.precipitationProbability},{name:"Precipitation",type:"column",data:null===e||void 0===e||null===(d=e.hourly)||void 0===d?void 0:d.precipitation}]}};const ce=[{value:"wolfsburg",options:{latitude:52.4245,longitude:10.7815,timezone:"Europe/Berlin"},label:"Wolfsburg"},{value:"sorocaba",options:{latitude:-23.5017,longitude:-47.4581,timezone:"America/Sao_Paulo"},label:"Sorocaba"}];var de=e=>{let{isLoading:t}=e;const[i,s]=(0,n.useState)("wolfsburg"),[a,l]=(0,n.useState)(oe(void 0)),o=(0,n.useCallback)((async e=>{const t={...ce.filter((t=>t.value===e))[0].options,hourly:["temperature_2m","apparent_temperature","precipitation_probability","precipitation"],forecast_days:3},i=await(0,re.fetchWeatherApi)("https://api.open-meteo.com/v1/forecast",t),n=i[0],r=n.utcOffsetSeconds(),s=n.hourly(),a={hourly:{time:(o=Number(s.time()),c=Number(s.timeEnd()),d=s.interval(),Array.from({length:(c-o)/d},((e,t)=>o+t*d))).map((e=>(e=>ae().unix(e+r).format("DD/MM HH:mm"))(e))),temperature2m:s.variables(0).valuesArray().map(Math.round),apparentTemperature:s.variables(1).valuesArray().map(Math.round),precipitationProbability:s.variables(2).valuesArray(),precipitation:s.variables(3).valuesArray().map(Math.round)}};var o,c,d;l(oe(a))}),[]);return(0,n.useEffect)((()=>{o(i)}),[]),(0,n.useEffect)((()=>{o(i)}),[i]),(0,Z.jsx)(Z.Fragment,{children:t?(0,Z.jsx)(le,{}):(0,Z.jsx)(j.Z,{children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(r.ZP,{container:!0,direction:"column",spacing:1,children:(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{variant:"subtitle2",children:"Weather"})})})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(ne.Z,{id:"standard-select-currency",select:!0,value:i,onChange:e=>s(e.target.value),children:ce.map((e=>(0,Z.jsx)(h.Z,{value:e.value,children:e.label},e.value)))})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(T.Z,{...a})})]})})})};var he=()=>{const[e,t]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{t(!1)}),[]),(0,Z.jsxs)(r.ZP,{container:!0,spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,Z.jsx)(C,{isLoading:e})}),(0,Z.jsx)(r.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,Z.jsx)(G,{isLoading:e})}),(0,Z.jsx)(r.ZP,{item:!0,lg:4,md:12,sm:12,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,sm:6,xs:12,md:6,lg:12,children:(0,Z.jsx)(Q,{isLoading:e})}),(0,Z.jsx)(r.ZP,{item:!0,sm:6,xs:12,md:6,lg:12,children:(0,Z.jsx)(ie,{isLoading:e})})]})})]})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:F.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,md:8,children:(0,Z.jsx)(de,{isLoading:e})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,Z.jsx)(O,{isLoading:e})})]})})]})}}}]);