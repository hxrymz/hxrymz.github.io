"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8807,7766],{8807:(e,a,s)=>{s.r(a),s.d(a,{default:()=>v});var l=s(2791),t=s(2350),r=s(2647),i=(s(9760),s(1206),s(1573)),d=s(2502),n=s(4050),o=s(184);const c=(0,r.Vg)(),h=(0,i.sm)(),u="time_cards_list",v=e=>{var a,s,r;let{data:i,elmId:v,updObs:m}=e;const[p,b]=(0,l.useState)(!1),[,_]=(0,l.useState)(0),[y,I]=(0,l.useState)(64),[f,w]=(0,l.useState)(!1);(0,l.useEffect)((()=>{p||(b(!0),_((0,t.M5)()),(0,n.Ht)("global_accounts","global_account_params",g),(0,t.Rz)("cmpByPayStubMayor",{}))}));const g=()=>{(0,d.$5)(x)},j=()=>{I((e=>e+64))},x=()=>{let e=(0,t.bh)("timecard_list");(0,t.Rz)(u,e),(async(e,a)=>{64!==y?I(64):_((0,t.M5)())})();let a=Math.ceil(e.length/64);(0,t.Z$)(j,1250,a),setTimeout((()=>{w(!1)}),230)};return(0,o.jsxs)("div",{className:"",children:[(0,o.jsxs)("div",{className:"accounts_header",children:[(0,o.jsx)("h2",{children:"TimeCard"}),(0,o.jsx)("div",{className:"_dsplFlx ",children:(0,o.jsxs)("div",{className:"group_title addBtn purple upl",children:["Importar Time Card",(0,o.jsx)("input",{id:"fileupload",type:"file",onChange:e=>{var a=new FileReader;a.onload=function(e){var a=e.target.result;(0,d.tM)(a),x()},a.readAsText(e.target.files[0],"UTF-8")}})]})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,o.jsx)(c,{placeholder:"Buscar ....",width:360,obs:_,fetchData:e=>{w(!0);let a=(0,t.bh)("searchQryTC").split(" ");(0,d.hb)(a,x)},loading:f,change:e=>{!f&&w(!0)},callempty:g,keyFlds:"searchQryTC"}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("div",{className:"total_comprobante_title",children:"No:"}),(0,o.jsx)("div",{className:"total_comprobante gray",children:(0,o.jsx)("span",{children:null===(a=(0,t._2)((0,t.bh)(u)))||void 0===a?void 0:a.length})})]})]})]}),(0,o.jsxs)("div",{className:"timeCard_container scollVh",children:[(0,t.bh)("timeCard")&&(null===(s=(0,t._2)((0,t.bh)("timeCard")))||void 0===s?void 0:s.map((e=>(0,o.jsx)(h,{data:(0,t.bh)("timeCard")[e],elmId:e,handleRefreshAll:g,add:!0},e)))),(0,t.bh)(u)&&(null===(r=(0,t._2)((0,t.bh)(u)))||void 0===r?void 0:r.map((e=>(0,o.jsx)(h,{data:(0,t.bh)(u)[e],elmId:e,handleRefreshAll:g},e))))]})]})}},2502:(e,a,s)=>{s.d(a,{$5:()=>c,Dy:()=>t,Oy:()=>v,Vu:()=>i,er:()=>o,fx:()=>d,hb:()=>h,iW:()=>u,kQ:()=>r,lG:()=>n,tM:()=>b});var l=s(2350);const t=async e=>{var a,s;let t={...null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.search_employee};t.params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search1":(0,l.bh)("employeeOut")?"":"in-job"};const r=(0,l.I7)(t),i=await r;i&&((0,l.Rz)("employees_list",m((0,l.jQ)(i),"name")),(0,l.Rz)("employees_ids",i),(0,l.Rz)("employees_ctIds",(0,l.ME)((0,l.jQ)(i),"userTC")),e&&e())},r=async e=>{var a,s;let t={...null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.search_employee};t.params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":(0,l.bh)("searchQry"),":search5":(0,l.bh)("employeeOut")?"":"in-job"};const r=(0,l.I7)(t),i=await r;i&&((0,l.Rz)("employees_list",m((0,l.jQ)(i),"name")),e&&e())},i=async e=>{var a,s;let t={...null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.search_employee};t.params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":e,year:(0,l.bh)("date_current_year")};const r=(0,l.I7)(t),i=await r;return i?y(i):[]},d=async e=>{var a,s;let t={...null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.search_prov_cust};t.params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":e,year:(0,l.bh)("date_current_year")};const r=(0,l.I7)(t),i=await r;return i?y(i):[]},n=async(e,a)=>{var s,t,r,i;let d={...null===(s=(0,l.bh)((0,l.hQ)()))||void 0===s?void 0:s.search_employee_paystub};d.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,l.bh)("date_current_year"),":date1":(null===(r=(0,l.bh)("date_range_comps"))||void 0===r?void 0:r.initDate)-10,":date2":null===(i=(0,l.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate,":employeeId":e};const n=(0,l.I7)(d),o=await n;o&&!o.error&&((0,l.Rz)("paystub_submayor_list",o),(0,l._2)(o).map((async e=>{var a,s;v(null===(a=o[e])||void 0===a?void 0:a.comprobanteId,null===(s=o[e])||void 0===s?void 0:s.employeeId)}))),a&&a()},o=async e=>{var a,s;let t=(0,l.Qk)((0,l.bh)("datePeriodRs")),r={...null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.search_employee_paystub};r.params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search2":"Wk_"+(1*t-1)};const i=(0,l.I7)(r),d=await i;return d&&!d.error&&(0,l._2)(d).length>0?d:null},c=async e=>{let a="get_all_timecard_last",s=(0,l.bh)(a)||0;if(Date.now()>s){var t,r;(0,l.Rz)(a,Date.now()+190);let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.scan_time_card};s.params={businessId:null===(r=(0,l.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search0":"00"};const i=(0,l.I7)(s),d=await i;d&&((0,l.Rz)("timecard_list",m((0,l.jQ)(d),"code")),(0,l.Rz)("timecard_gorups_week",p(d)),e&&e())}},h=async(e,a)=>{let s="get_search_timecard_last",t=(0,l.bh)(s)||0;if(Date.now()>t){var r,i;(0,l.Rz)(s,Date.now()+190);let t={...null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.scan_time_card};t.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId},e.map(((e,a)=>{e&&(t.params[":search"+a]=e.toString().trim())}));const d=(0,l.I7)(t),n=await d;n&&((0,l.Rz)("timecard_list",m((0,l.jQ)(n),"code")),a&&a())}},u=async e=>{let a="get_search_timecard_last",s=(0,l.bh)(a)||0;if(!(Date.now()>s))return null;{var t,r;(0,l.Rz)(a,Date.now()+190);let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.scan_time_card};s.params={businessId:null===(r=(0,l.bh)("profileUser"))||void 0===r?void 0:r.businessId},e.map(((e,a)=>{e&&(s.params[":search"+a]=e.toString().trim())}));const d=(0,l.I7)(s),n=await d;var i;if(n)return null===n||void 0===n?void 0:n[null===(i=(0,l._2)(n))||void 0===i?void 0:i[0]]}},v=async(e,a)=>{let s="get_compById_last"+e+"_"+a,t=(0,l.bh)(s)||0;if(Date.now()>t){var r,i;(0,l.Rz)(s,Date.now()+890);let t={...null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.filter_search_opera};t.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":e,":search1":a};const d=(0,l.I7)(t),n=await d;if(n){let a=(0,l.bh)("cmpByPayStubMayor");return a[e]=n,(0,l.Rz)("cmpByPayStubMayor",a),n}}return null};const m=(e,a)=>e&&e.sort(((e,s)=>{let l=1*e[a],t=1*s[a];return l<t?-1:l>t?1:0})),p=e=>{let a={};return e&&(0,l._2)(e).map((s=>{var l,t;let r=(null===(l=e[s])||void 0===l?void 0:l.week)+"_"+(null===(t=e[s])||void 0===t?void 0:t.userTC);a[r]||(a[r]=e[s])})),a},b=e=>{let a={},s=/\t/g;e&&e.split("\n").map(((e,t)=>{if(e.indexOf("No")<0){let t=e.split(s);if(7===t.length){let e=t[2].trim(),s=t[6].split("  "),r=s[0],i=(0,l.Qk)(new Date(r)),d=s[1].split(":"),n=60*d[0]+1*d[1],o=t[4].trim();a[e]||(a[e]={}),a[e][i]||(a[e][i]={}),a[e][i][r]||(a[e][i][r]={}),a[e][i][r][n]||(a[e][i][r][n]={}),a[e][i][r][n][o]||(a[e][i][r][n][o]=1)}}}));let t=[];return(0,l._2)(a).map((e=>{(0,l._2)(a[e]).map((s=>{let r={},i=null;(0,l._2)(a[e][s]).map((t=>{let d=_(a[e][s][t]),n=(0,l._2)(a[e][s][t][d[0]]),o=(0,l._2)(a[e][s][t][d[1]]);i=(0,l.qt)(new Date(t));let c={start:1*d[0],startMode:n,end:1*d[1],endMode:o,active:!0},h=new Date(t).getDay();r[h]=c}));let d={userTC:e,week:s,hourly:r,period:i};t.push(d)}))})),(0,l.Rz)("timeCard",t),t},_=e=>{let a=0,s=1e10;return(0,l._2)(e).map((e=>{let l=1*e;a<l&&(a=l),l<s&&(s=l)})),[s,a]},y=e=>{let a=[];return e&&(0,l._2)(e).map((s=>{var l;a.push({id:s,label:null===(l=e[s])||void 0===l?void 0:l.name})})),a}},1206:()=>{}}]);
//# sourceMappingURL=8807.1e4ee2e6.chunk.js.map