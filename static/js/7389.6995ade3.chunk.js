"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7389,7766],{7389:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var t=s(2791),l=s(2350),r=s(2647),i=(s(1206),s(1573)),n=s(2502),o=s(4050),d=s(184);const u=(0,i.qQ)(),c=(0,i.MY)(),v=(0,r.DK)(),h=e=>{let{data:a,elmId:s,updObs:r}=e;const[i,h]=(0,t.useState)(!1),[,b]=(0,t.useState)(0),[m,_]=(0,t.useState)(1);(0,t.useEffect)((()=>{i||(h(!0),b((0,l.M5)()),(0,o.Ht)("global_accounts","global_account_params",y),(0,l.Rz)("cmpByPayStubMayor",{}))}));const y=e=>{(0,n.Dy)(I)},I=async(e,a)=>{b((0,l.M5)())};return(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("div",{style:{marginTop:45}}),(0,d.jsx)(v,{indexTab:m,data:[{key:1,label:"Empleados"},{key:2,label:"TimeCard"}],updateIndex:_}),(0,d.jsx)(p,{viewId:1,activeView:m,children:(0,d.jsx)(c,{})}),(0,d.jsx)(p,{viewId:2,activeView:m,children:(0,d.jsx)(u,{})})]})},p=e=>{let{viewId:a,activeView:s,children:t}=e;return(0,d.jsx)("div",{className:"opacityView",style:{opacity:a===s?1:0},children:a===s?t:null})}},2502:(e,a,s)=>{s.d(a,{$5:()=>u,Dy:()=>l,Oy:()=>h,Vu:()=>i,er:()=>d,fx:()=>n,hb:()=>c,iW:()=>v,kQ:()=>r,lG:()=>o,tM:()=>m});var t=s(2350);const l=async e=>{var a,s;let l={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};l.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search1":(0,t.bh)("employeeOut")?"":"in-job"};const r=(0,t.I7)(l),i=await r;i&&((0,t.Rz)("employees_list",p((0,t.jQ)(i),"name")),(0,t.Rz)("employees_ids",i),(0,t.Rz)("employees_ctIds",(0,t.ME)((0,t.jQ)(i),"userTC")),e&&e())},r=async e=>{var a,s;let l={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};l.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":(0,t.bh)("searchQry"),":search5":(0,t.bh)("employeeOut")?"":"in-job"};const r=(0,t.I7)(l),i=await r;i&&((0,t.Rz)("employees_list",p((0,t.jQ)(i),"name")),e&&e())},i=async e=>{var a,s;let l={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};l.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":e,year:(0,t.bh)("date_current_year")};const r=(0,t.I7)(l),i=await r;return i?y(i):[]},n=async e=>{var a,s;let l={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_prov_cust};l.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":e,year:(0,t.bh)("date_current_year")};const r=(0,t.I7)(l),i=await r;return i?y(i):[]},o=async(e,a)=>{var s,l,r,i;let n={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.search_employee_paystub};n.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,t.bh)("date_current_year"),":date1":(null===(r=(0,t.bh)("date_range_comps"))||void 0===r?void 0:r.initDate)-10,":date2":null===(i=(0,t.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate,":employeeId":e},console.log(n);const o=(0,t.I7)(n),d=await o;console.log(d),d&&!d.error&&((0,t.Rz)("paystub_submayor_list",d),(0,t._2)(d).map((async e=>{var a,s;h(null===(a=d[e])||void 0===a?void 0:a.comprobanteId,null===(s=d[e])||void 0===s?void 0:s.employeeId)}))),a&&a()},d=async e=>{var a,s;let l=(0,t.Qk)((0,t.bh)("datePeriodRs")),r={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee_paystub};r.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search2":"Wk_"+(1*l-1)};const i=(0,t.I7)(r),n=await i;return n&&!n.error&&(0,t._2)(n).length>0?n:null},u=async e=>{let a="get_all_timecard_last",s=(0,t.bh)(a)||0;if(Date.now()>s){var l,r;(0,t.Rz)(a,Date.now()+190);let s={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.scan_time_card};s.params={businessId:null===(r=(0,t.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search0":"00"};const i=(0,t.I7)(s),n=await i;n&&((0,t.Rz)("timecard_list",p((0,t.jQ)(n),"code")),(0,t.Rz)("timecard_gorups_week",b(n)),e&&e())}},c=async(e,a)=>{let s="get_search_timecard_last",l=(0,t.bh)(s)||0;if(Date.now()>l){var r,i;(0,t.Rz)(s,Date.now()+190);let l={...null===(r=(0,t.bh)((0,t.hQ)()))||void 0===r?void 0:r.scan_time_card};l.params={businessId:null===(i=(0,t.bh)("profileUser"))||void 0===i?void 0:i.businessId},e.map(((e,a)=>{e&&(l.params[":search"+a]=e.toString().trim())}));const n=(0,t.I7)(l),o=await n;o&&((0,t.Rz)("timecard_list",p((0,t.jQ)(o),"code")),a&&a())}},v=async e=>{let a="get_search_timecard_last",s=(0,t.bh)(a)||0;if(!(Date.now()>s))return null;{var l,r;(0,t.Rz)(a,Date.now()+190);let s={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.scan_time_card};s.params={businessId:null===(r=(0,t.bh)("profileUser"))||void 0===r?void 0:r.businessId},e.map(((e,a)=>{e&&(s.params[":search"+a]=e.toString().trim())}));const n=(0,t.I7)(s),o=await n;var i;if(o)return null===o||void 0===o?void 0:o[null===(i=(0,t._2)(o))||void 0===i?void 0:i[0]]}},h=async(e,a)=>{let s="get_compById_last"+e+"_"+a,l=(0,t.bh)(s)||0;if(Date.now()>l){var r,i;(0,t.Rz)(s,Date.now()+890);let l={...null===(r=(0,t.bh)((0,t.hQ)()))||void 0===r?void 0:r.filter_search_opera};l.params={businessId:null===(i=(0,t.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":e,":search1":a};const n=(0,t.I7)(l),o=await n;if(o){let a=(0,t.bh)("cmpByPayStubMayor");return a[e]=o,(0,t.Rz)("cmpByPayStubMayor",a),o}}return null};const p=(e,a)=>e&&e.sort(((e,s)=>{let t=1*e[a],l=1*s[a];return t<l?-1:t>l?1:0})),b=e=>{let a={};return e&&(0,t._2)(e).map((s=>{var t,l;let r=(null===(t=e[s])||void 0===t?void 0:t.week)+"_"+(null===(l=e[s])||void 0===l?void 0:l.userTC);a[r]||(a[r]=e[s])})),a},m=e=>{let a={},s=/\t/g;e&&e.split("\n").map(((e,l)=>{if((e=e.split("\r").join("")).indexOf("No")<0){let l=e.split(s);if(7===l.length){let e=l[2].trim(),s=l[6].split("  "),r=s[0],i=(e=>{let a=new Date(e),s=a.getDay(),l=0;(s>3||s<3)&&(l=s-3);let r=a.getDate()-l,i=new Date(a.setDate(r));return(0,t.Qk)(i)})(r),n=s[1].split(":"),o=60*n[0]+1*n[1],d=l[4].trim();a[e]||(a[e]={}),a[e][i]||(a[e][i]={}),a[e][i][r]||(a[e][i][r]={}),a[e][i][r][o]||(a[e][i][r][o]={}),a[e][i][r][o][d]||(a[e][i][r][o][d]=1)}}}));let l=Array.from(Array(7).keys()),r=[];return(0,t._2)(a).map((e=>{(0,t._2)(a[e]).map((s=>{let i={},n=null;l.map((e=>{i[e]={active:!1}})),(0,t._2)(a[e][s]).map((l=>{let r=_(a[e][s][l]),o=(0,t._2)(a[e][s][l][r[0]]),d=(0,t._2)(a[e][s][l][r[1]]);n=(0,t.qt)(new Date(l));let u={start:1*r[0],startMode:o,end:1*r[1],endMode:d,active:!0},c=new Date(l).getDay();i[c]=u}));let o={userTC:e,week:s,hourly:i,period:n};r.push(o)}))})),(0,t.Rz)("timeCard",r),r},_=e=>{let a=0,s=1e10;return(0,t._2)(e).map((e=>{let t=1*e;a<t&&(a=t),t<s&&(s=t)})),[s,a]},y=e=>{let a=[];return e&&(0,t._2)(e).map((s=>{var t;a.push({id:s,label:null===(t=e[s])||void 0===t?void 0:t.name})})),a}},1206:()=>{}}]);
//# sourceMappingURL=7389.6995ade3.chunk.js.map