"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7389,7766],{7389:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var t=s(2791),r=s(2350),i=s(2647),l=(s(1206),s(1573)),n=s(2502),o=s(4050),d=s(184);const u=(0,l.qQ)(),c=(0,l.MY)(),v=(0,i.DK)(),h=e=>{let{data:a,elmId:s,updObs:i}=e;const[l,h]=(0,t.useState)(!1),[,b]=(0,t.useState)(0),[m,_]=(0,t.useState)(1);(0,t.useEffect)((()=>{l||(h(!0),b((0,r.M5)()),(0,o.Ht)("global_accounts","global_account_params",y),(0,r.Rz)("cmpByPayStubMayor",{}))}));const y=e=>{(0,n.Dy)(I)},I=async(e,a)=>{b((0,r.M5)())};return(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("div",{style:{marginTop:45}}),(0,d.jsx)(v,{indexTab:m,data:[{key:1,label:"Empleados"},{key:2,label:"TimeCard"}],updateIndex:_}),(0,d.jsx)(p,{viewId:1,activeView:m,children:(0,d.jsx)(c,{})}),(0,d.jsx)(p,{viewId:2,activeView:m,children:(0,d.jsx)(u,{})})]})},p=e=>{let{viewId:a,activeView:s,children:t}=e;return(0,d.jsx)("div",{className:"opacityView",style:{opacity:a===s?1:0},children:a===s?t:null})}},2502:(e,a,s)=>{s.d(a,{$5:()=>u,Dy:()=>r,Oy:()=>h,Vu:()=>l,er:()=>d,fx:()=>n,hb:()=>c,iW:()=>v,kQ:()=>i,lG:()=>o,tM:()=>m});var t=s(2350);const r=async e=>{var a,s;let r={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};r.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search1":(0,t.bh)("employeeOut")?"":"in-job"};const i=(0,t.I7)(r),l=await i;l&&((0,t.Rz)("employees_list",p((0,t.jQ)(l),"name")),(0,t.Rz)("employees_ids",l),(0,t.Rz)("employees_ctIds",(0,t.ME)((0,t.jQ)(l),"userTC")),e&&e())},i=async e=>{var a,s;let r={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};r.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":(0,t.bh)("searchQry"),":search5":(0,t.bh)("employeeOut")?"":"in-job"};const i=(0,t.I7)(r),l=await i;l&&((0,t.Rz)("employees_list",p((0,t.jQ)(l),"name")),e&&e())},l=async e=>{var a,s;let r={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};r.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":e,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(r),l=await i;return l?y(l):[]},n=async e=>{var a,s;let r={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_prov_cust};r.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":e,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(r),l=await i;return l?y(l):[]},o=async(e,a)=>{var s,r,i,l;let n={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.search_employee_paystub};n.params={businessId:null===(r=(0,t.bh)("profileUser"))||void 0===r?void 0:r.businessId,year:(0,t.bh)("date_current_year"),":date1":(null===(i=(0,t.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(l=(0,t.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,":employeeId":e};const o=(0,t.I7)(n),d=await o;d&&!d.error&&((0,t.Rz)("paystub_submayor_list",d),(0,t._2)(d).map((async e=>{var a,s;h(null===(a=d[e])||void 0===a?void 0:a.comprobanteId,null===(s=d[e])||void 0===s?void 0:s.employeeId)}))),a&&a()},d=async e=>{var a,s;let r=(0,t.Qk)((0,t.bh)("datePeriodRs")),i={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee_paystub};i.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search2":"Wk_"+(1*r-1)};const l=(0,t.I7)(i),n=await l;return n&&!n.error&&(0,t._2)(n).length>0?n:null},u=async e=>{let a="get_all_timecard_last",s=(0,t.bh)(a)||0;if(Date.now()>s){var r,i;(0,t.Rz)(a,Date.now()+190);let s={...null===(r=(0,t.bh)((0,t.hQ)()))||void 0===r?void 0:r.scan_time_card};s.params={businessId:null===(i=(0,t.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":"00"};const l=(0,t.I7)(s),n=await l;n&&((0,t.Rz)("timecard_list",p((0,t.jQ)(n),"code")),(0,t.Rz)("timecard_gorups_week",b(n)),e&&e())}},c=async(e,a)=>{let s="get_search_timecard_last",r=(0,t.bh)(s)||0;if(Date.now()>r){var i,l;(0,t.Rz)(s,Date.now()+190);let r={...null===(i=(0,t.bh)((0,t.hQ)()))||void 0===i?void 0:i.scan_time_card};r.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId},e.map(((e,a)=>{e&&(r.params[":search"+a]=e.toString().trim())}));const n=(0,t.I7)(r),o=await n;o&&((0,t.Rz)("timecard_list",p((0,t.jQ)(o),"code")),a&&a())}},v=async e=>{let a="get_search_timecard_last",s=(0,t.bh)(a)||0;if(!(Date.now()>s))return null;{var r,i;(0,t.Rz)(a,Date.now()+190);let s={...null===(r=(0,t.bh)((0,t.hQ)()))||void 0===r?void 0:r.scan_time_card};s.params={businessId:null===(i=(0,t.bh)("profileUser"))||void 0===i?void 0:i.businessId},e.map(((e,a)=>{e&&(s.params[":search"+a]=e.toString().trim())}));const n=(0,t.I7)(s),o=await n;var l;if(o)return null===o||void 0===o?void 0:o[null===(l=(0,t._2)(o))||void 0===l?void 0:l[0]]}},h=async(e,a)=>{let s="get_compById_last"+e+"_"+a,r=(0,t.bh)(s)||0;if(Date.now()>r){var i,l;(0,t.Rz)(s,Date.now()+890);let r={...null===(i=(0,t.bh)((0,t.hQ)()))||void 0===i?void 0:i.filter_search_opera};r.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,":search0":e,":search1":a};const n=(0,t.I7)(r),o=await n;if(o){let a=(0,t.bh)("cmpByPayStubMayor");return a[e]=o,(0,t.Rz)("cmpByPayStubMayor",a),o}}return null};const p=(e,a)=>e&&e.sort(((e,s)=>{let t=1*e[a],r=1*s[a];return t<r?-1:t>r?1:0})),b=e=>{let a={};return e&&(0,t._2)(e).map((s=>{var t,r;let i=(null===(t=e[s])||void 0===t?void 0:t.week)+"_"+(null===(r=e[s])||void 0===r?void 0:r.userTC);a[i]||(a[i]=e[s])})),a},m=e=>{let a={},s=/\t/g;e&&e.split("\n").map(((e,r)=>{if((e=e.split("\r").join("")).indexOf("No")<0){let r=e.split(s);if(7===r.length){let e=r[2].trim(),s=r[6].split("  "),i=s[0],l=(e=>{let a=new Date(e),s=a.getDay(),r=0;(s>3||s<3)&&(r=s-3);let i=a.getDate()-r,l=new Date(a.setDate(i));return(0,t.Qk)(l)})(i),n=s[1].split(":"),o=60*n[0]+1*n[1],d=r[4].trim();a[e]||(a[e]={}),a[e][l]||(a[e][l]={}),a[e][l][i]||(a[e][l][i]={}),a[e][l][i][o]||(a[e][l][i][o]={}),a[e][l][i][o][d]||(a[e][l][i][o][d]=1)}}}));let r=Array.from(Array(7).keys()),i=[];return(0,t._2)(a).map((e=>{(0,t._2)(a[e]).map((s=>{let l={},n=null;r.map((e=>{l[e]={active:!1}})),(0,t._2)(a[e][s]).map((r=>{console.log({date:r});let i=_(a[e][s][r]),o=(0,t._2)(a[e][s][r][i[0]]),d=(0,t._2)(a[e][s][r][i[1]]);n=(0,t.qt)(new Date(r));let u={start:1*i[0],startMode:o,end:1*i[1],endMode:d,active:!0},c=new Date(r).getDay();l[c]=u}));let o={userTC:e,week:s,hourly:l,period:n};i.push(o)}))})),(0,t.Rz)("timeCard",i),i},_=e=>{let a=0,s=1e10;return(0,t._2)(e).map((e=>{let t=1*e;a<t&&(a=t),t<s&&(s=t)})),[s,a]},y=e=>{let a=[];return e&&(0,t._2)(e).map((s=>{var t;a.push({id:s,label:null===(t=e[s])||void 0===t?void 0:t.name})})),a}},1206:()=>{}}]);
//# sourceMappingURL=7389.4da6a093.chunk.js.map