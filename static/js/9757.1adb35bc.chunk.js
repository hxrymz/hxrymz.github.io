"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9757],{9757:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var o=a(2791),l=a(2350),i=(a(1e3),a(2647)),s=a(3588),r=a(1702),d=a(9760),n=a(2692),c=a(2502),u=a(184);const v=(0,i.JC)(),b=(0,n.dz)(),m=(0,i.PU)(),h=e=>{var t,a,i,n,v;let{data:b,item:h}=e;const[_,x]=(0,o.useState)(!1),[y,f]=(0,o.useState)(0);(0,o.useEffect)((()=>{if(!_){var e;if(x(!0),null!==h&&void 0!==h&&h.employeeId)null!==(e=(0,l.bh)("employees_ids"))&&void 0!==e&&e[null===h||void 0===h?void 0:h.employeeId]||(0,c.Dy)(g);f((0,l.M5)())}}));const w=()=>{(null===b||void 0===b?void 0:b.modalID)&&(0,d.CloseModal)({id:null===b||void 0===b?void 0:b.modalID})},g=()=>{f((0,l.M5)())};let I=null===(t=(0,l.bh)("employees_ids"))||void 0===t||null===(a=t[null===h||void 0===h?void 0:h.employeeId])||void 0===a?void 0:a.name,z=1*(null===(i=h.balance)||void 0===i?void 0:i.toFixed(2))!==0;return(0,u.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"90vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("div",{className:"flexSpace"})}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsxs)("div",{className:"_dsplFlx",style:{marginTop:20},children:[(0,u.jsx)("div",{className:"desc_lbl",children:"Comprobante:"}),(0,u.jsx)("div",{className:"name comprobante_id",style:z?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:null===h||void 0===h?void 0:h.comprobanteId})]}),z?(0,u.jsx)("div",{className:"msg_alert red",children:(0,u.jsxs)("div",{className:"msg_alert_title",children:["El comprobante no esta cuadrado tiene una diferencia de ",null===h||void 0===h||null===(n=h.balance)||void 0===n?void 0:n.toFixed(2)]})}):null,(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon",onClick:()=>{var e;let t=[];h.operations&&(null===(e=h.operations)||void 0===e||e.map(((e,a)=>{let o={...e};o.description=h.description,o.comprobanteId=h.comprobanteId,o.date=(0,l.sJ)(h.date),o.description=h.description;let i=e.account.code+" - "+e.account.name;if(o.account=i,o.sub_account){let t=e.sub_account.subAccount+" - "+e.sub_account.subAccountName;o.sub_account=t}t.push(o)}))),(0,l.eY)("export_compobante_"+h.comprobanteId+"_"+(0,l.M5)()+".csv",t)},style:{marginRight:17},children:(0,u.jsx)(m,{name:"google-spreadsheet",color:"#282828"})}),(0,u.jsx)("div",{className:"icon",onClick:()=>{(0,r.C)(h)},children:(0,u.jsx)(m,{name:"printer",color:"#282828"})})]}),(0,u.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"desc_lbl"}),(0,u.jsx)("div",{className:"name",children:(0,l.sG)(null===h||void 0===h?void 0:h.date)})]})]}),(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,u.jsx)("div",{className:"tr_bar_15",children:"Cuenta"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Sub Cuenta"}),(0,u.jsx)("div",{className:"tr_bar_40",children:"Documento"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Debito"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Credito"})]}),null===(v=(0,s.Eb)(null===h||void 0===h?void 0:h.operations))||void 0===v?void 0:v.map(((e,t)=>(0,u.jsx)(p,{element:e,in2D:t,close:w},t))),(0,u.jsxs)("div",{className:"cmp_desc",children:[(0,u.jsx)("div",{className:"desc_lbl",children:"Detalles:"}),(0,u.jsxs)("div",{className:"description",children:[null===h||void 0===h?void 0:h.description," ",I]})]}),(0,u.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("span",{className:"entryType",children:h.entryName||"Comprobante Manual"})]})]})},p=e=>{var t,a,o,i;let{element:s,in2D:r,close:n}=e;let c="".concat(null===s||void 0===s||null===(t=s.account)||void 0===t?void 0:t.accountId).concat(null!==s&&void 0!==s&&s.sub_account?"_"+(null===s||void 0===s||null===(a=s.sub_account)||void 0===a?void 0:a.sub_accountId):"");return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar","item-key":"".concat(c),children:[(0,u.jsx)("div",{className:"tr_bar_15",children:(0,u.jsx)(v,{data:s.account,labelField:"code",infoField:"name"})}),(0,u.jsx)("div",{className:"tr_bar_15",children:(0,u.jsx)(v,{data:s.sub_account,labelField:"subAccount",infoField:"subAccountName"})}),(0,u.jsx)("div",{className:"tr_bar_40",onClick:()=>{var e,t;if(null!==(e=(0,l.bh)("profileUser"))&&void 0!==e&&e.isAdmin||null===(t=(0,l.Ch)()[(0,l.bh)("date_current_year")])||void 0===t||!t.isClosed){if((0,l.ML)()){let e=(0,l.bh)("lastTimeCallModal")||0;if(Date.now()>e){let e=["document","amount","type","description","account","subAccount","comprobanteId"],t=(0,l.Ld)({...(0,l.bh)("comprobante_list")[s.operationId]},e);(0,l.Rz)("upd_comprobantebyId",t),(0,l.Rz)("upd_comprobantebyId_bck",JSON.parse(JSON.stringify(t))),(0,l.Rz)("lastTimeCallModal",Date.now()+320);let a={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};a.content=(0,u.jsx)(b,{confirm:()=>{n()},item:s}),(0,d.OpenModal)(a)}}}else;},children:s.document}),(0,u.jsx)("div",{className:"tr_bar_15",children:null===(o=1*s.debit)||void 0===o?void 0:o.toFixed(2)}),(0,u.jsx)("div",{className:"tr_bar_15",children:null===(i=1*s.credit)||void 0===i?void 0:i.toFixed(2)})]},r)}},1702:(e,t,a)=>{a.d(t,{C:()=>n});var o=a(6963),l=a(2350),i=a(4e3);let s=0,r=null,d=null;const n=async e=>{const t=await o.PDFDocument.create();if(t.registerFontkit(i.Z),r=await t.embedFont(o.StandardFonts.TimesRoman,{subset:!0}),d=await t.embedFont(o.StandardFonts.TimesRomanBold,{subset:!0}),(0,l.bh)("modernFontReport")){let e=(0,l.bh)("Roboto-Bold.ttf"),a=(0,l.bh)("ggSans-Italic.ttf"),o=(0,l.bh)("ggSans-Medium.ttf");const i=await fetch(e).then((e=>e.arrayBuffer()));d=await t.embedFont(i,{subset:!0});await fetch(a).then((e=>e.arrayBuffer()));const s=await fetch(o).then((e=>e.arrayBuffer()));r=await t.embedFont(s,{subset:!0})}let a=t.addPage();const{width:n,height:c}=a.getSize(),u=10;let v=0,b=44;s=c-40,a.drawText(e.entryName||"Comprobante Manual",{x:50,y:s,size:14,font:d,color:(0,o.rgb)(0,0,0)});const m=d.widthOfTextAtSize(e.comprobanteId,14),h=r.widthOfTextAtSize("Comprobante:  ",13);a.drawText("Comprobante:  ",{x:580-h-m,y:s,size:13,font:r,color:(0,o.rgb)(0,0,0)}),a.drawText(e.comprobanteId+"",{x:580-m,y:s,size:14,font:d,color:(0,o.rgb)(0,0,0)}),s-=25;const p=r.widthOfTextAtSize("Fecha:  ",13),_=d.widthOfTextAtSize((0,l.Gv)(e.date)+"",14);a.drawText("Fecha:  ",{x:580-p-_,y:s,size:13,font:r,color:(0,o.rgb)(0,0,0)}),a.drawText((0,l.Gv)(e.date)+"",{x:580-_,y:s,size:14,font:d,color:(0,o.rgb)(0,0,0)}),s-=15;let x=(null===e||void 0===e?void 0:e.operations)||[];s-=18,a.drawText("Cuenta",{x:20,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)}),a.drawText("Sub Cuenta",{x:205,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)}),a.drawText("Documento",{x:360,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)});const y=d.widthOfTextAtSize("Debito",13);a.drawText("Debito",{x:500-y,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)});const f=d.widthOfTextAtSize("Credito",13);a.drawText("Credito",{x:580-f,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)}),s-=8,a.drawRectangle({x:15,y:s+1,width:570,height:.95,color:(0,o.rgb)(0,0,0),borderColor:(0,o.rgb)(0,0,0)});let w=Math.ceil(x.length/40);Array.from(Array(w).keys()).map((e=>{if(e>0){a=t.addPage(),s=c-26,a.drawText("Cuenta",{x:20,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)}),a.drawText("Sub Cuenta",{x:205,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)}),a.drawText("Documento",{x:360,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)});const e=d.widthOfTextAtSize("Debito",13);a.drawText("Debito",{x:500-e,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)});const l=d.widthOfTextAtSize("Credito",13);a.drawText("Credito",{x:580-l,y:s,size:13,font:d,color:(0,o.rgb)(0,0,0)}),s-=8,a.drawRectangle({x:15,y:s+1,width:570,height:.95,color:(0,o.rgb)(0,0,0),borderColor:(0,o.rgb)(0,0,0)}),s-=2}let l=x.slice(v,b);e>0&&(v=b+1,b=v+48),Array.isArray(l)&&l.map(((e,t)=>{var l,i,d,n,c;(s-=16,null!==e&&void 0!==e&&null!==(l=e.account)&&void 0!==l&&l.name)&&a.drawText((null===e||void 0===e||null===(c=e.account)||void 0===c?void 0:c.name)+"",{x:20,y:s,size:u,font:r,color:(0,o.rgb)(0,0,0)});if(null!==e&&void 0!==e&&null!==(i=e.sub_account)&&void 0!==i&&i.subAccountName){var v;let t=null===e||void 0===e||null===(v=e.sub_account)||void 0===v?void 0:v.subAccountName.substring(0,32);a.drawText(t+"",{x:205,y:s,size:u,font:r,color:(0,o.rgb)(0,0,0)})}a.drawText((null===e||void 0===e?void 0:e.document)+"",{x:360,y:s,size:u,font:r,color:(0,o.rgb)(0,0,0)});let b=null!==e&&void 0!==e&&e.debit?null===(d=1*(null===e||void 0===e?void 0:e.debit))||void 0===d?void 0:d.toFixed(2):"0.00";const m=r.widthOfTextAtSize(b+"",u);a.drawText(b+"",{x:500-m,y:s,size:u,font:r,color:(0,o.rgb)(0,0,0)});let h=null!==e&&void 0!==e&&e.credit?null===(n=1*(null===e||void 0===e?void 0:e.credit))||void 0===n?void 0:n.toFixed(2):"0.00";const p=r.widthOfTextAtSize(h+"",u);a.drawText(h+"",{x:580-p,y:s,size:u,font:r,color:(0,o.rgb)(0,0,0)})}))})),s-=28,a.drawRectangle({x:15,y:s+1,width:570,height:.85,color:(0,o.rgb)(0,0,0),borderColor:(0,o.rgb)(0,0,0)}),s-=18,a.drawText("Detalles: ",{x:50,y:s,size:12,font:r,color:(0,o.rgb)(0,0,0)}),s-=18,a.drawText(e.description?e.description:"",{x:70,y:s,size:11,font:r,color:(0,o.rgb)(0,0,0)});let g=function(e){let t=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(t)}(await t.save());window.open(g)}},2502:(e,t,a)=>{a.d(t,{$5:()=>c,Dy:()=>l,Oy:()=>b,Vu:()=>s,er:()=>n,fx:()=>r,hb:()=>u,iW:()=>v,kQ:()=>i,lG:()=>d,tM:()=>p});var o=a(2350);const l=async e=>{var t,a;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_employee};l.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search1":(0,o.bh)("employeeOut")?"":"in-job"};const i=(0,o.I7)(l),s=await i;s&&((0,o.Rz)("employees_list",m((0,o.jQ)(s),"name")),(0,o.Rz)("employees_ids",s),(0,o.Rz)("employees_ctIds",(0,o.ME)((0,o.jQ)(s),"userTC")),e&&e())},i=async e=>{var t,a;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_employee};l.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search0":(0,o.bh)("searchQry"),":search5":(0,o.bh)("employeeOut")?"":"in-job"};const i=(0,o.I7)(l),s=await i;s&&((0,o.Rz)("employees_list",m((0,o.jQ)(s),"name")),e&&e())},s=async e=>{var t,a;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_employee};l.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search0":e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(l),s=await i;return s?x(s):[]},r=async e=>{var t,a;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_prov_cust};l.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(l),s=await i;return s?x(s):[]},d=async(e,t)=>{var a,l,i,s;let r={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.search_employee_paystub};r.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,o.bh)("date_current_year"),":date1":(null===(i=(0,o.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(s=(0,o.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate,":employeeId":e};const d=(0,o.I7)(r),n=await d;n&&!n.error&&((0,o.Rz)("paystub_submayor_list",n),(0,o._2)(n).map((async e=>{var t,a;b(null===(t=n[e])||void 0===t?void 0:t.comprobanteId,null===(a=n[e])||void 0===a?void 0:a.employeeId)}))),t&&t()},n=async e=>{var t,a;let l=(0,o.Qk)((0,o.bh)("datePeriodRs")),i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_employee_paystub};i.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search2":"Wk_"+(1*l-1)};const s=(0,o.I7)(i),r=await s;return r&&!r.error&&(0,o._2)(r).length>0?r:null},c=async e=>{let t="get_all_timecard_last",a=(0,o.bh)(t)||0;if(Date.now()>a){var l,i;(0,o.Rz)(t,Date.now()+190);let a={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.scan_time_card};a.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":"00"};const s=(0,o.I7)(a),r=await s;r&&((0,o.Rz)("timecard_list",m((0,o.jQ)(r),"code")),(0,o.Rz)("timecard_gorups_week",h(r)),e&&e())}},u=async(e,t)=>{let a="get_search_timecard_last",l=(0,o.bh)(a)||0;if(Date.now()>l){var i,s;(0,o.Rz)(a,Date.now()+190);let l={...null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.scan_time_card};l.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId},e.map(((e,t)=>{e&&(l.params[":search"+t]=e.toString().trim())}));const r=(0,o.I7)(l),d=await r;d&&((0,o.Rz)("timecard_list",m((0,o.jQ)(d),"code")),t&&t())}},v=async e=>{let t="get_search_timecard_last",a=(0,o.bh)(t)||0;if(!(Date.now()>a))return null;{var l,i;(0,o.Rz)(t,Date.now()+190);let a={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.scan_time_card};a.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId},e.map(((e,t)=>{e&&(a.params[":search"+t]=e.toString().trim())}));const r=(0,o.I7)(a),d=await r;var s;if(d)return null===d||void 0===d?void 0:d[null===(s=(0,o._2)(d))||void 0===s?void 0:s[0]]}},b=async(e,t)=>{let a="get_compById_last"+e+"_"+t,l=(0,o.bh)(a)||0;if(Date.now()>l){var i,s;(0,o.Rz)(a,Date.now()+890);let l={...null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.filter_search_opera};l.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":e,":search1":t};const r=(0,o.I7)(l),d=await r;if(d){let t=(0,o.bh)("cmpByPayStubMayor");return t[e]=d,(0,o.Rz)("cmpByPayStubMayor",t),d}}return null};const m=(e,t)=>e&&e.sort(((e,a)=>{let o=1*e[t],l=1*a[t];return o<l?-1:o>l?1:0})),h=e=>{let t={};return e&&(0,o._2)(e).map((a=>{var o,l;let i=(null===(o=e[a])||void 0===o?void 0:o.week)+"_"+(null===(l=e[a])||void 0===l?void 0:l.userTC);t[i]||(t[i]=e[a])})),t},p=e=>{let t={},a=/\t/g;e&&e.split("\n").map(((e,l)=>{if((e=e.split("\r").join("")).indexOf("No")<0){let l=e.split(a);if(7===l.length){let e=l[2].trim(),a=l[6].split("  "),i=a[0],s=(e=>{let t=new Date(e),a=t.getDay(),l=0;(a>3||a<3)&&(l=a-3);let i=t.getDate()-l,s=new Date(t.setDate(i));return(0,o.Qk)(s)})(i),r=a[1].split(":"),d=60*r[0]+1*r[1],n=l[4].trim();t[e]||(t[e]={}),t[e][s]||(t[e][s]={}),t[e][s][i]||(t[e][s][i]={}),t[e][s][i][d]||(t[e][s][i][d]={}),t[e][s][i][d][n]||(t[e][s][i][d][n]=1)}}}));let l=Array.from(Array(7).keys()),i=[];return(0,o._2)(t).map((e=>{(0,o._2)(t[e]).map((a=>{let s={},r=null;l.map((e=>{s[e]={active:!1}})),(0,o._2)(t[e][a]).map((l=>{console.log({date:l});let i=_(t[e][a][l]),d=(0,o._2)(t[e][a][l][i[0]]),n=(0,o._2)(t[e][a][l][i[1]]);r=(0,o.qt)(new Date(l));let c={start:1*i[0],startMode:d,end:1*i[1],endMode:n,active:!0},u=new Date(l).getDay();s[u]=c}));let d={userTC:e,week:a,hourly:s,period:r};i.push(d)}))})),(0,o.Rz)("timeCard",i),i},_=e=>{let t=0,a=1e10;return(0,o._2)(e).map((e=>{let o=1*e;t<o&&(t=o),o<a&&(a=o)})),[a,t]},x=e=>{let t=[];return e&&(0,o._2)(e).map((a=>{var o;t.push({id:a,label:null===(o=e[a])||void 0===o?void 0:o.name})})),t}},1e3:()=>{}}]);
//# sourceMappingURL=9757.1adb35bc.chunk.js.map