"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5614],{5614:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(2791),o=s(2350),i=(s(1e3),s(2647)),l=s(3588),r=s(1702),d=s(9760),n=s(2692),c=s(2502),u=s(6677),v=s(4481),h=s(184);const m=(0,i.JC)(),b=(0,n.dz)(),p=(0,n.Ax)(),_=(0,i.PU)(),x=e=>{var a,s,i,n,m;let{data:b,item:x,confirmYearClose:f}=e;const[g,w]=(0,t.useState)(!1),[,j]=(0,t.useState)(0);(0,t.useEffect)((()=>{if(!g){var e;if(w(!0),null!==x&&void 0!==x&&x.employeeId)null!==(e=(0,o.bh)("employees_ids"))&&void 0!==e&&e[null===x||void 0===x?void 0:x.employeeId]||(0,c.Dy)(R);(0,o.bh)("providers_ids")||(0,u.Je)(R),j((0,o.M5)())}}));const I=()=>{let e=(0,o.M5)();setTimeout((()=>{z(e)}),1750),f(e)},N=e=>{e?(0,d.CloseModal)({id:e}):(null===b||void 0===b?void 0:b.modalID)&&(0,d.CloseModal)({id:null===b||void 0===b?void 0:b.modalID})},z=e=>{var a,s,t,i;let l=(0,o.bh)("date_current_year"),r={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,date:x.date,comprobanteId:x.comprobanteId,description:x.description,year:1*l+1,businessYearId:null===(s=(0,o.bh)("YearAccBussines"))||void 0===s||null===(t=s[l])||void 0===t?void 0:t.businessYearId},d=[];x.operations.map((e=>{var a,s;let t={};var i,l,r,n,c;(null!==e&&void 0!==e&&e.debit?(t.amount=null===e||void 0===e?void 0:e.debit,t.type="debit"):null!==e&&void 0!==e&&e.credit&&(t.amount=null===e||void 0===e?void 0:e.credit,t.type="credit"),t.account=null===e||void 0===e||null===(a=e.account)||void 0===a?void 0:a.accountId,null!==e&&void 0!==e&&null!==(s=e.sub_account)&&void 0!==s&&s.sub_accountId)&&(t.subAccount=null===e||void 0===e||null===(i=e.sub_account)||void 0===i?void 0:i.sub_accountId,null!==(l=(0,o.bh)("providers_subacc"))&&void 0!==l&&null!==(r=l[t.subAccount])&&void 0!==r&&r.providerId&&(t.providerId=null===(n=(0,o.bh)("providers_subacc"))||void 0===n||null===(c=n[t.subAccount])||void 0===c?void 0:c.providerId));t.document=null===e||void 0===e?void 0:e.document,t.operationId=(0,o.M5)(),d.push(t)}));let n={...null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.close_hrm_years};n.params=r,n.form=d,C(n,e)},C=async(e,a)=>{const s=(0,o.I7)(e),t=await s;t&&!t.error&&(k(a),(0,v.Q)())},k=e=>{setTimeout((()=>{N(e),N()}),2500)},R=()=>{j((0,o.M5)())};let T=null===(a=(0,o.bh)("employees_ids"))||void 0===a||null===(s=a[null===x||void 0===x?void 0:x.employeeId])||void 0===s?void 0:s.name,D=1*(null===(i=x.balance)||void 0===i?void 0:i.toFixed(2))!==0;return(0,h.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"90vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsx)("div",{className:"_dsplFlx ",children:(0,h.jsx)("div",{className:"flexSpace"})}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsxs)("div",{className:"_dsplFlx",style:{marginTop:20},children:[(0,h.jsx)("div",{className:"desc_lbl",children:"Comprobante:"}),(0,h.jsx)("div",{className:"name comprobante_id",style:D?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:null===x||void 0===x?void 0:x.comprobanteId})]}),D?(0,h.jsx)("div",{className:"msg_alert",children:(0,h.jsxs)("div",{className:"msg_alert_title",children:["El comprobante no esta cuadrado ",null===x||void 0===x||null===(n=x.balance)||void 0===n?void 0:n.toFixed(2)]})}):(0,h.jsx)("div",{className:"msg_alert hrm_themecolor green darkwgreen",onClick:async()=>{var e,a,s;let t={...null===(e=(0,o.bh)((0,o.hQ)()))||void 0===e?void 0:e.ask_notf_code},i=(0,o.M5)();t.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,phoneNumber:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.phoneNumber,log:i};const l=(0,o.I7)(t),r=await l;if(r&&!r.error){let e={zIndex:480,height:"40vh"};e.content=(0,h.jsx)(p,{info:r,tmk:i,confirm:I}),(0,d.OpenModal)(e)}},children:(0,h.jsx)("div",{className:"msg_alert_title",children:"El comprobante esta listo y verificado para la apertura del 2024"})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"icon",onClick:()=>{var e;let a=[];x.operations&&(null===(e=x.operations)||void 0===e||e.map(((e,s)=>{let t={...e};t.description=x.description,t.comprobanteId=x.comprobanteId,t.date=(0,o.sJ)(x.date),t.description=x.description;let i=e.account.code+" - "+e.account.name;if(t.account=i,t.sub_account){let a=e.sub_account.subAccount+" - "+e.sub_account.subAccountName;t.sub_account=a}a.push(t)}))),(0,o.eY)("export_compobante_"+x.comprobanteId+"_"+(0,o.M5)()+".csv",a)},style:{marginRight:17},children:(0,h.jsx)(_,{name:"google-spreadsheet",color:"#282828"})}),(0,h.jsx)("div",{className:"icon",onClick:()=>{(0,r.C)(x)},children:(0,h.jsx)(_,{name:"printer",color:"#282828"})})]}),(0,h.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"desc_lbl"}),(0,h.jsx)("div",{className:"name",children:(0,o.sG)(null===x||void 0===x?void 0:x.date)})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,h.jsx)("div",{className:"tr_bar_15",children:"Cuenta"}),(0,h.jsx)("div",{className:"tr_bar_15",children:"Sub Cuenta"}),(0,h.jsx)("div",{className:"tr_bar_40",children:"Documento"}),(0,h.jsx)("div",{className:"tr_bar_15",children:"Debito"}),(0,h.jsx)("div",{className:"tr_bar_15",children:"Credito"})]}),null===(m=(0,l.Eb)(null===x||void 0===x?void 0:x.operations))||void 0===m?void 0:m.map(((e,a)=>(0,h.jsx)(y,{element:e,in2D:a},a))),(0,h.jsxs)("div",{className:"cmp_desc",children:[(0,h.jsx)("div",{className:"desc_lbl",children:"Detalles:"}),(0,h.jsxs)("div",{className:"description",children:[null===x||void 0===x?void 0:x.description," ",T]})]}),(0,h.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("span",{className:"entryType",children:x.entryName||"Comprobante Manual"})]})]})},y=e=>{var a,s;let{element:t,in2D:i}=e;return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar_15",children:(0,h.jsx)(m,{data:t.account,labelField:"code",infoField:"name"})}),(0,h.jsx)("div",{className:"tr_bar_15",children:(0,h.jsx)(m,{data:t.sub_account,labelField:"subAccount",infoField:"subAccountName"})}),(0,h.jsx)("div",{className:"tr_bar_40",onClick:()=>{var e;if(null!==(e=(0,o.Ch)()[(0,o.bh)("date_current_year")])&&void 0!==e&&e.isClosed);else if((0,o.ML)()){let e=(0,o.bh)("lastTimeCallModal")||0;if(Date.now()>e){let e=["document","amount","type","description","account","subAccount","comprobanteId"],a=(0,o.Ld)({...(0,o.bh)("comprobante_list")[t.operationId]},e);(0,o.Rz)("upd_comprobantebyId",a),(0,o.Rz)("upd_comprobantebyId_bck",JSON.parse(JSON.stringify(a))),(0,o.Rz)("lastTimeCallModal",Date.now()+320);let s={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};s.content=(0,h.jsx)(b,{confirm:()=>{},item:t}),(0,d.OpenModal)(s)}}},children:t.document}),(0,h.jsx)("div",{className:"tr_bar_15",children:null===(a=1*t.debit)||void 0===a?void 0:a.toFixed(2)}),(0,h.jsx)("div",{className:"tr_bar_15",children:null===(s=1*t.credit)||void 0===s?void 0:s.toFixed(2)})]},i)}},1702:(e,a,s)=>{s.d(a,{C:()=>n});var t=s(6963),o=s(2350),i=s(4e3);let l=0,r=null,d=null;const n=async e=>{const a=await t.PDFDocument.create();if(a.registerFontkit(i.Z),r=await a.embedFont(t.StandardFonts.TimesRoman,{subset:!0}),d=await a.embedFont(t.StandardFonts.TimesRomanBold,{subset:!0}),(0,o.bh)("modernFontReport")){let e=(0,o.bh)("Roboto-Bold.ttf"),s=(0,o.bh)("ggSans-Italic.ttf"),t=(0,o.bh)("ggSans-Medium.ttf");const i=await fetch(e).then((e=>e.arrayBuffer()));d=await a.embedFont(i,{subset:!0});await fetch(s).then((e=>e.arrayBuffer()));const l=await fetch(t).then((e=>e.arrayBuffer()));r=await a.embedFont(l,{subset:!0})}let s=a.addPage();const{width:n,height:c}=s.getSize(),u=10;let v=0,h=44;l=c-40,s.drawText(e.entryName||"Comprobante Manual",{x:50,y:l,size:14,font:d,color:(0,t.rgb)(0,0,0)});const m=d.widthOfTextAtSize(e.comprobanteId,14),b=r.widthOfTextAtSize("Comprobante:  ",13);s.drawText("Comprobante:  ",{x:580-b-m,y:l,size:13,font:r,color:(0,t.rgb)(0,0,0)}),s.drawText(e.comprobanteId+"",{x:580-m,y:l,size:14,font:d,color:(0,t.rgb)(0,0,0)}),l-=25;const p=r.widthOfTextAtSize("Fecha:  ",13),_=d.widthOfTextAtSize((0,o.Gv)(e.date)+"",14);s.drawText("Fecha:  ",{x:580-p-_,y:l,size:13,font:r,color:(0,t.rgb)(0,0,0)}),s.drawText((0,o.Gv)(e.date)+"",{x:580-_,y:l,size:14,font:d,color:(0,t.rgb)(0,0,0)}),l-=15;let x=(null===e||void 0===e?void 0:e.operations)||[];l-=18,s.drawText("Cuenta",{x:20,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)}),s.drawText("Sub Cuenta",{x:205,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)}),s.drawText("Documento",{x:360,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)});const y=d.widthOfTextAtSize("Debito",13);s.drawText("Debito",{x:500-y,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)});const f=d.widthOfTextAtSize("Credito",13);s.drawText("Credito",{x:580-f,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)}),l-=8,s.drawRectangle({x:15,y:l+1,width:570,height:.95,color:(0,t.rgb)(0,0,0),borderColor:(0,t.rgb)(0,0,0)});let g=Math.ceil(x.length/40);Array.from(Array(g).keys()).map((e=>{if(e>0){s=a.addPage(),l=c-26,s.drawText("Cuenta",{x:20,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)}),s.drawText("Sub Cuenta",{x:205,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)}),s.drawText("Documento",{x:360,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)});const e=d.widthOfTextAtSize("Debito",13);s.drawText("Debito",{x:500-e,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)});const o=d.widthOfTextAtSize("Credito",13);s.drawText("Credito",{x:580-o,y:l,size:13,font:d,color:(0,t.rgb)(0,0,0)}),l-=8,s.drawRectangle({x:15,y:l+1,width:570,height:.95,color:(0,t.rgb)(0,0,0),borderColor:(0,t.rgb)(0,0,0)}),l-=2}let o=x.slice(v,h);e>0&&(v=h+1,h=v+48),Array.isArray(o)&&o.map(((e,a)=>{var o,i,d,n,c;(l-=16,null!==e&&void 0!==e&&null!==(o=e.account)&&void 0!==o&&o.name)&&s.drawText((null===e||void 0===e||null===(c=e.account)||void 0===c?void 0:c.name)+"",{x:20,y:l,size:u,font:r,color:(0,t.rgb)(0,0,0)});if(null!==e&&void 0!==e&&null!==(i=e.sub_account)&&void 0!==i&&i.subAccountName){var v;let a=null===e||void 0===e||null===(v=e.sub_account)||void 0===v?void 0:v.subAccountName.substring(0,32);s.drawText(a+"",{x:205,y:l,size:u,font:r,color:(0,t.rgb)(0,0,0)})}s.drawText((null===e||void 0===e?void 0:e.document)+"",{x:360,y:l,size:u,font:r,color:(0,t.rgb)(0,0,0)});let h=null!==e&&void 0!==e&&e.debit?null===(d=1*(null===e||void 0===e?void 0:e.debit))||void 0===d?void 0:d.toFixed(2):"0.00";const m=r.widthOfTextAtSize(h+"",u);s.drawText(h+"",{x:500-m,y:l,size:u,font:r,color:(0,t.rgb)(0,0,0)});let b=null!==e&&void 0!==e&&e.credit?null===(n=1*(null===e||void 0===e?void 0:e.credit))||void 0===n?void 0:n.toFixed(2):"0.00";const p=r.widthOfTextAtSize(b+"",u);s.drawText(b+"",{x:580-p,y:l,size:u,font:r,color:(0,t.rgb)(0,0,0)})}))})),l-=28,s.drawRectangle({x:15,y:l+1,width:570,height:.85,color:(0,t.rgb)(0,0,0),borderColor:(0,t.rgb)(0,0,0)}),l-=18,s.drawText("Detalles: ",{x:50,y:l,size:12,font:r,color:(0,t.rgb)(0,0,0)}),l-=18,s.drawText(e.description?e.description:"",{x:70,y:l,size:11,font:r,color:(0,t.rgb)(0,0,0)});let w=function(e){let a=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(a)}(await a.save());window.open(w)}},2502:(e,a,s)=>{s.d(a,{$5:()=>c,Dy:()=>o,Oy:()=>h,Vu:()=>l,er:()=>n,fx:()=>r,hb:()=>u,iW:()=>v,kQ:()=>i,lG:()=>d,tM:()=>p});var t=s(2350);const o=async e=>{var a,s;let o={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search1":(0,t.bh)("employeeOut")?"":"in-job"};const i=(0,t.I7)(o),l=await i;l&&((0,t.Rz)("employees_list",m((0,t.jQ)(l),"name")),(0,t.Rz)("employees_ids",l),(0,t.Rz)("employees_ctIds",(0,t.ME)((0,t.jQ)(l),"userTC")),e&&e())},i=async e=>{var a,s;let o={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":(0,t.bh)("searchQry"),":search5":(0,t.bh)("employeeOut")?"":"in-job"};const i=(0,t.I7)(o),l=await i;l&&((0,t.Rz)("employees_list",m((0,t.jQ)(l),"name")),e&&e())},l=async e=>{var a,s;let o={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":e,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(o),l=await i;return l?x(l):[]},r=async e=>{var a,s;let o={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_prov_cust};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":e,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(o),l=await i;return l?x(l):[]},d=async(e,a)=>{var s,o,i,l;let r={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.search_employee_paystub};r.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,t.bh)("date_current_year"),":date1":(null===(i=(0,t.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(l=(0,t.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,":employeeId":e},console.log(r);const d=(0,t.I7)(r),n=await d;console.log(n),n&&!n.error&&((0,t.Rz)("paystub_submayor_list",n),(0,t._2)(n).map((async e=>{var a,s;h(null===(a=n[e])||void 0===a?void 0:a.comprobanteId,null===(s=n[e])||void 0===s?void 0:s.employeeId)}))),a&&a()},n=async e=>{var a,s;let o=(0,t.Qk)((0,t.bh)("datePeriodRs")),i={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_employee_paystub};i.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search2":"Wk_"+(1*o-1)};const l=(0,t.I7)(i),r=await l;return r&&!r.error&&(0,t._2)(r).length>0?r:null},c=async e=>{let a="get_all_timecard_last",s=(0,t.bh)(a)||0;if(Date.now()>s){var o,i;(0,t.Rz)(a,Date.now()+190);let s={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.scan_time_card};s.params={businessId:null===(i=(0,t.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":"00"};const l=(0,t.I7)(s),r=await l;r&&((0,t.Rz)("timecard_list",m((0,t.jQ)(r),"code")),(0,t.Rz)("timecard_gorups_week",b(r)),e&&e())}},u=async(e,a)=>{let s="get_search_timecard_last",o=(0,t.bh)(s)||0;if(Date.now()>o){var i,l;(0,t.Rz)(s,Date.now()+190);let o={...null===(i=(0,t.bh)((0,t.hQ)()))||void 0===i?void 0:i.scan_time_card};o.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId},e.map(((e,a)=>{e&&(o.params[":search"+a]=e.toString().trim())}));const r=(0,t.I7)(o),d=await r;d&&((0,t.Rz)("timecard_list",m((0,t.jQ)(d),"code")),a&&a())}},v=async e=>{let a="get_search_timecard_last",s=(0,t.bh)(a)||0;if(!(Date.now()>s))return null;{var o,i;(0,t.Rz)(a,Date.now()+190);let s={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.scan_time_card};s.params={businessId:null===(i=(0,t.bh)("profileUser"))||void 0===i?void 0:i.businessId},e.map(((e,a)=>{e&&(s.params[":search"+a]=e.toString().trim())}));const r=(0,t.I7)(s),d=await r;var l;if(d)return null===d||void 0===d?void 0:d[null===(l=(0,t._2)(d))||void 0===l?void 0:l[0]]}},h=async(e,a)=>{let s="get_compById_last"+e+"_"+a,o=(0,t.bh)(s)||0;if(Date.now()>o){var i,l;(0,t.Rz)(s,Date.now()+890);let o={...null===(i=(0,t.bh)((0,t.hQ)()))||void 0===i?void 0:i.filter_search_opera};o.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,":search0":e,":search1":a};const r=(0,t.I7)(o),d=await r;if(d){let a=(0,t.bh)("cmpByPayStubMayor");return a[e]=d,(0,t.Rz)("cmpByPayStubMayor",a),d}}return null};const m=(e,a)=>e&&e.sort(((e,s)=>{let t=1*e[a],o=1*s[a];return t<o?-1:t>o?1:0})),b=e=>{let a={};return e&&(0,t._2)(e).map((s=>{var t,o;let i=(null===(t=e[s])||void 0===t?void 0:t.week)+"_"+(null===(o=e[s])||void 0===o?void 0:o.userTC);a[i]||(a[i]=e[s])})),a},p=e=>{let a={},s=/\t/g;e&&e.split("\n").map(((e,o)=>{if((e=e.split("\r").join("")).indexOf("No")<0){let o=e.split(s);if(7===o.length){let e=o[2].trim(),s=o[6].split("  "),i=s[0],l=(e=>{let a=new Date(e),s=a.getDay(),o=0;(s>3||s<3)&&(o=s-3);let i=a.getDate()-o,l=new Date(a.setDate(i));return(0,t.Qk)(l)})(i),r=s[1].split(":"),d=60*r[0]+1*r[1],n=o[4].trim();a[e]||(a[e]={}),a[e][l]||(a[e][l]={}),a[e][l][i]||(a[e][l][i]={}),a[e][l][i][d]||(a[e][l][i][d]={}),a[e][l][i][d][n]||(a[e][l][i][d][n]=1)}}}));let o=Array.from(Array(7).keys()),i=[];return(0,t._2)(a).map((e=>{(0,t._2)(a[e]).map((s=>{let l={},r=null;o.map((e=>{l[e]={active:!1}})),(0,t._2)(a[e][s]).map((o=>{let i=_(a[e][s][o]),d=(0,t._2)(a[e][s][o][i[0]]),n=(0,t._2)(a[e][s][o][i[1]]);r=(0,t.qt)(new Date(o));let c={start:1*i[0],startMode:d,end:1*i[1],endMode:n,active:!0},u=new Date(o).getDay();l[u]=c}));let d={userTC:e,week:s,hourly:l,period:r};i.push(d)}))})),(0,t.Rz)("timeCard",i),i},_=e=>{let a=0,s=1e10;return(0,t._2)(e).map((e=>{let t=1*e;a<t&&(a=t),t<s&&(s=t)})),[s,a]},x=e=>{let a=[];return e&&(0,t._2)(e).map((s=>{var t;a.push({id:s,label:null===(t=e[s])||void 0===t?void 0:t.name})})),a}},4481:(e,a,s)=>{s.d(a,{Q:()=>h,Z:()=>v});var t=s(2791),o=(s(3513),s(9760)),i=s(2647),l=s(2350),r=s(2692),d=s(184);const n=(0,i.PU)(),c=(0,i.YZ)(),u=(0,i.A5)(),v=((0,r.Ax)(),e=>{let{data:a,confirm:s,handleClick:i,close:r}=e;const[,v]=(0,t.useState)(0),{modalID:m}=a,b=e=>{(0,o.CloseModal)({id:m})},p=e=>{(e&&!(0,l.bh)("modernFontReport")||!e&&(0,l.bh)("modernFontReport"))&&((0,l.Rz)("modernFontReport",e),v((0,l.M5)()))},_=async e=>{var a;let s=null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.add_hrm_years;if(e&&s){var t;s.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:e};const a=(0,l.I7)(s);await a&&h()}};return(0,d.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"40vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"form_title",children:"Settings"}),(0,d.jsx)("div",{className:"flexSpace"}),(0,l.ML)()?(0,d.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,d.jsx)(c,{initvalue:(0,l.bh)("showLog"),keyCode:77,updChange:e=>{return a=e,(0,l.Rz)("showLog",a),void v((0,l.M5)());var a}}),(0,d.jsx)("span",{className:"checklabel",children:"Show Logs"})]}):null]}),(0,d.jsx)("div",{className:"theme_setting_box ",style:{margin:"13px 0"},s:!0,children:(0,d.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,d.jsx)(u,{init:(0,l.bh)("date_current_year"),lbl_empty:"Location",list:[{id:2022,label:2022},{id:2023,label:2023},{id:2024,label:2024}],onSelect:e=>(e=>{var a,s;(0,l.Rz)("date_current_year",e);let t=new Date("01/01/"+e).getTime(),o=new Date("01/01/"+(e+1)).getTime()-10;(0,l.Rz)("date_range_comps",{initDate:t,lastDate:o}),(0,l.Rz)("date_range_submayor",{initDate:t,lastDate:o}),null!==(a=(0,l.bh)("YearAccBussines"))&&void 0!==a&&null!==(s=a[e])&&void 0!==s&&s.businessYearId||_(e),v((0,l.M5)()),(0,l.wt)("dimention_hash")})(e.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"220px"})})}),(0,d.jsxs)("div",{className:"theme_style",onClick:()=>{let e=!!!(0,l.bh)("darkTheme");const a=document.querySelector('[theme*="92357239"]');a&&(a.className=e?"light_theme palette_body App ":"dark_theme  palette_body App "),document.children[0].style.backgroundColor=e?"#f1f1f1":"#212121",(0,l.Rz)("darkTheme",e),v((0,l.M5)())},children:[(0,d.jsx)(n,{name:"theme",color:"var(--hrm_palette-general-background-b)"}),(0,d.jsx)("div",{className:"title gSansFont",children:(0,l.bh)("darkTheme")?"Dark":"Light"})]})]})}),(0,d.jsxs)("div",{className:"print_setting_box ",children:[(0,d.jsx)("div",{className:"header ",children:(0,d.jsx)("span",{children:"Estilo de Impresion"})}),(0,d.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,d.jsxs)("div",{className:"print_style modern ".concat((0,l.bh)("modernFontReport")?"active":""),onClick:()=>p(!0),children:[(0,d.jsx)(n,{name:"check_circle"}),(0,d.jsx)("div",{className:"title",children:"Modern"}),(0,d.jsxs)("div",{className:"body",children:[(0,d.jsx)("h4",{children:"Fuente Normal"}),(0,d.jsx)("h5",{children:"Fuente Negrita"})]})]}),(0,d.jsxs)("div",{className:"print_style classic ".concat((0,l.bh)("modernFontReport")?"":"active"),onClick:()=>p(!1),children:[(0,d.jsx)(n,{name:"check_circle"}),(0,d.jsx)("div",{className:"title",children:"Classic"}),(0,d.jsxs)("div",{className:"body",children:[(0,d.jsx)("h4",{children:"Fuente Normal"}),(0,d.jsx)("h5",{children:"Fuente Negrita"})]})]})]})]}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn",onClick:e=>{document.cookie="".concat((0,l.in)(),'=""'),document.cookie='hrm_access_tkn = ""',document.cookie='F2Atkn = ""',(0,l.Rz)("profileUser",null),(0,l.Rz)("isAdmin",null),b(),(0,l.wt)("dimention_hash")},children:"Logout"}),(0,d.jsx)("p",{className:"group_title addBtn",onClick:b,children:"Cerrar"}),(0,d.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{s(),b()},children:"Guardar"})]})]})}),h=async e=>{var a;let s=null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.get_hrm_years;if(s){var t;s.params={businessId:e||(null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId)};const a=(0,l.I7)(s),o=await a;o&&((0,l.Rz)("YearAccBussines",o),(0,l.wt)("dimention_hash"))}}},6677:(e,a,s)=>{s.d(a,{Je:()=>o,Qn:()=>d,UO:()=>i,mQ:()=>r});var t=s(2350);const o=async e=>{var a,s;let o={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.all_prov_cust};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(o),r=await i;r&&((0,t.Rz)("providers_list",l((0,t.jQ)(r),"name",1)),(0,t.Rz)("providers_ids",(0,t.ME)((0,t.jQ)(r),"providerId")),(0,t.Rz)("providers_subacc",(0,t.ME)((0,t.jQ)(r),"subAccount")),e&&e())},i=async e=>{var a,s;let o={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_prov_cust};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":(0,t.bh)("search_prov"),year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(o),r=await i;r&&((0,t.Rz)("providers_list",l((0,t.jQ)(r),"name",1)),e&&e())};const l=(e,a,s)=>(0,t.MV)("sortProviders",[e],(()=>e&&e.sort(((e,t)=>{let o=1*e[a],i=1*t[a];return o<i?s?-1:1:o>i?s?1:-1:0})))),r=(e,a)=>(0,t.MV)("sortSubProviders",[e],(()=>e&&e.sort(((e,s)=>{let t=1*e[a],o=1*s[a];return t<o?-1:t>o?1:0})))),d=async(e,a)=>{var s,o;let i={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.delete_prov_cust};i.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,providerId:e,year:(0,t.bh)("date_current_year")};const l=(0,t.I7)(i);await l&&a&&a()}},1e3:()=>{},3513:()=>{}}]);
//# sourceMappingURL=5614.e1b1fc38.chunk.js.map