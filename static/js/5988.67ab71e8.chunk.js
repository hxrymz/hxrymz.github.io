"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5988],{5988:(e,l,a)=>{a.r(l),a.d(l,{default:()=>o});var s=a(2791),i=(a(5868),a(2647)),t=a(7689),d=a(2350),n=a(5143),r=a(9760),c=a(184);(0,i.PU)();const o=e=>{var l,a,i,o,v,m,x,u,p,g,_,j,b;let{data:N,confirm:w,label:y,item:f}=e;const[C,k]=(0,s.useState)(1);let F=(0,t.TH)();(0,t.s0)();const D=null===(l=F.search)||void 0===l||null===(a=l.split("?"))||void 0===a?void 0:a[1],M=(0,d.mB)(D);let T=null===M||void 0===M?void 0:M.tab;(0,s.useEffect)((()=>{(0,n.bM)(U)}),[T]);const U=e=>{(0,n.o6)(z)},z=e=>{window.google.charts.load("current",{packages:["corechart","line"]}),window.google.charts.setOnLoadCallback(Y),k((0,d.M5)())},Y=e=>{!function(){var e=window.google.visualization.arrayToDataTable((0,d.bh)("graphDonutCMonth")),l={title:"",pieHole:.4},a=new window.google.visualization.PieChart(document.getElementById("donutchart"));a.draw(e,l)}();var l=window.google.visualization.arrayToDataTable((0,d.bh)("graphCurveLineMonth"));new window.google.visualization.LineChart(document.getElementById("curve_chart")).draw(l,{title:"",curveType:"function",legend:{position:"bottom"}})};let B=null!==(i=(0,d.bh)("resume_graph"))&&void 0!==i&&null!==(o=i[901])&&void 0!==o&&o.total?(1*(null===(v=(0,d.bh)("resume_graph"))||void 0===v||null===(m=v[901])||void 0===m?void 0:m.total)).toFixed(2):"0.00",S=null!==(x=(0,d.bh)("resume_graph"))&&void 0!==x&&null!==(u=x[902])&&void 0!==u&&u.total?(1*(null===(p=(0,d.bh)("resume_graph"))||void 0===p||null===(g=p[902])||void 0===g?void 0:g.total)).toFixed(2):"0.00";const H=e=>{(0,d.Rz)("date_current_year",e);let l=new Date("01/01/"+e).getTime(),a=new Date("01/01/"+(e+1)).getTime()-10;(0,d.Rz)("date_range_comps",{initDate:l,lastDate:a}),(0,d.Rz)("date_range_submayor",{initDate:l,lastDate:a}),(0,n.bM)(U)};return(0,c.jsxs)("div",{className:"mobile_version  ",style:{margin:"65px 0"},children:[(0,c.jsx)("div",{className:"listFlx  ",children:(0,c.jsx)("p",{className:"title_resume",onClick:()=>{let e=(0,d.bh)("lastTimeYYCallModal")||0;if(Date.now()>e){(0,d.Rz)("lastTimeYYCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,c.jsx)(h,{confirm:H}),(0,r.OpenModal)(e)}},children:(0,n.mU)(48)+" "+(0,d.bh)("date_current_year")})}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround  ",children:[(0,c.jsxs)("div",{className:"card_bx blue",children:[(0,c.jsx)("div",{className:"title",children:(0,n.mU)(42)}),(0,c.jsxs)("div",{className:"amount  ",children:["$",B]})]}),(0,c.jsxs)("div",{className:"card_bx red",children:[(0,c.jsx)("div",{className:"title",children:(0,n.mU)(40)}),(0,c.jsxs)("div",{className:"amount  ",children:["$",S]})]})]}),(0,c.jsxs)("div",{className:"_dsplFlx itm_bx hdr ",style:{margin:"40px auto 0"},children:[(0,c.jsx)("div",{children:(0,n.mU)(65)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"incomes",children:(0,n.mU)(42)}),(0,c.jsx)("div",{className:"expenses",children:(0,n.mU)(40)})]}),null===(_=(0,d.bh)("graphCurveLineMonth"))||void 0===_?void 0:_.map(((e,l)=>{if(0===l)return null;let a=e[1]?(1*e[1]).toFixed(2):"0.00",s=e[2]?(1*e[2]).toFixed(2):"0.00";return(0,c.jsxs)("div",{className:"_dsplFlx itm_bx  ".concat(l%2===0?"shdow":""," "),children:[(0,c.jsx)("div",{children:e[0]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"incomes",children:a}),(0,c.jsx)("div",{className:"expenses",children:s})]},"mnt_key_"+e[0])})),(0,c.jsx)("div",{id:"donutchart",style:{width:"99xvw",height:"50vw",margin:"20px auto"}}),(0,c.jsx)("div",{className:"listFlx  ",style:{margin:"40px auto 0"},children:(0,c.jsx)("p",{className:"title_resume",children:(0,n.mU)(47)})}),(0,c.jsxs)("div",{className:"_dsplFlx itm_bx hdr ",children:[(0,c.jsx)("div",{children:(0,n.mU)(54)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"expenses",children:(0,n.mU)(40)})]}),(null===(j=(0,d.bh)("resume_graph"))||void 0===j?void 0:j.categories)&&(null===(b=(0,d._2)((0,d.bh)("resume_graph").categories))||void 0===b?void 0:b.map(((e,l)=>{var a,s,i,t,n,r;let o=null!==(a=(0,d.bh)("resume_graph").categories)&&void 0!==a&&null!==(s=a[e])&&void 0!==s&&s.total?(1*(null===(i=(0,d.bh)("resume_graph").categories)||void 0===i||null===(t=i[e])||void 0===t?void 0:t.total)).toFixed(2):"0.00",h=null===(n=(0,d.bh)("categories_ids"))||void 0===n||null===(r=n[e])||void 0===r?void 0:r.name;return(0,c.jsxs)("div",{className:"_dsplFlx itm_bx  ".concat(l%2===0?"shdow":""," "),children:[(0,c.jsx)("div",{children:h}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"expenses",children:o})]},"categories_key_"+e)}))),(0,c.jsx)("div",{id:"curve_chart",style:{width:"99vw",height:"50vh",margin:"20px auto"}})]})},h=e=>{let{data:l,confirm:a,labelColor:s}=e;const{modalID:i}=l,t=e=>{a&&a(e),(0,r.CloseModal)({id:i})};return(0,c.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"30vh",minWidth:"260px",width:"93vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,border:"1px solid var(--partial-success)",padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",style:s?{color:s}:null,children:"Change Years"}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsxs)("div",{className:"_dsplFlx  spaceAround flxWrp",style:{margin:"35px 0 10px"},children:[(0,c.jsx)("div",{className:"yyBx ".concat(2022===(0,d.bh)("date_current_year")?"activeY":""),onClick:()=>t(2022),children:(0,c.jsx)("h4",{children:"2022"})}),(0,c.jsx)("div",{className:"yyBx ".concat(2023===(0,d.bh)("date_current_year")?"activeY":""),onClick:()=>t(2023),children:(0,c.jsx)("h4",{children:"2023"})}),(0,c.jsx)("div",{className:"yyBx ".concat(2024===(0,d.bh)("date_current_year")?"activeY":""),onClick:()=>t(2024),children:(0,c.jsx)("h4",{children:"2024"})})]})]})}},5868:()=>{}}]);
//# sourceMappingURL=5988.67ab71e8.chunk.js.map