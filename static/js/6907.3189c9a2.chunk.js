"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6907],{9868:(e,o,a)=>{a.r(o),a.d(o,{default:()=>b,hourlyParse:()=>B,parseTimeH:()=>T,parseWeekrange:()=>G});var t=a(2791),l=a(2350),d=a(2647),i=(a(1206),a(9760)),s=a(6824),n=a(1573),r=a(1087),c=a(184);const x=(0,d.Np)(),v=(0,n.aT)(),h=(0,d.PU)(),u="view_paystub_employee",m=["w2Taxes","grossPay"],b=e=>{var o,a,d,n,x,b,g,p,z,T,j,N,F,P,I,R,_,k;let{data:O,item:A}=e;const[C,D]=(0,t.useState)(!1),[H,U]=(0,t.useState)(0);(0,t.useEffect)((()=>{if(!C){var e,o,a;D(!0);let r=(0,l.bh)(u)||{};var t;if(null!==(e=(0,l.bh)("employees_ids"))&&void 0!==e&&null!==(o=e[null===(a=(0,l.bh)(u))||void 0===a?void 0:a.employeeId])&&void 0!==o&&o.hasW2&&!r.w2Taxes)Y("w2Taxes",null===(t=(0,l.bh)("global_account_params"))||void 0===t?void 0:t.w2_params);if(!r.grossPay){var d,i,s,n;let e=B(null===(d=(0,l.bh)(u))||void 0===d?void 0:d.hourly,null===(i=(0,l.bh)(u))||void 0===i?void 0:i.payrate,null===(s=(0,l.bh)(u))||void 0===s?void 0:s.lunchDuration,null===(n=(0,l.bh)(u))||void 0===n?void 0:n.hasOvertime),o=e.regularPayment+e.overtimePayment;Y("grossPay",o)}U((0,l.M5)())}}));const Y=(e,o,a)=>{let t=(0,l.bh)(u)||{};a?(t[a]||(t[a]={}),t[a][e]=o):t[e]=o,(0,l.Rz)(u,t),U((0,l.M5)())},M=async e=>{const o=(0,l.I7)(e);await o&&setTimeout((()=>{(0,l.Rz)(u,null),(0,l.Rz)("paystub_W2_manual",null),(null===O||void 0===O?void 0:O.modalID)&&(0,i.CloseModal)({id:null===O||void 0===O?void 0:O.modalID})}),400)};let W=B(null===(o=(0,l.bh)(u))||void 0===o?void 0:o.hourly,null===(a=(0,l.bh)(u))||void 0===a?void 0:a.payrate,null===(d=(0,l.bh)(u))||void 0===d?void 0:d.lunchDuration,null===(n=(0,l.bh)(u))||void 0===n?void 0:n.hasOvertime),q=null===(x=(0,l.bh)("employees_ids"))||void 0===x?void 0:x[null===(b=(0,l.bh)(u))||void 0===b?void 0:b.employeeId],L=W.regularPayment+W.overtimePayment,E=(0,l.vy)(m,(0,l.bh)(u),(0,l.bh)(u+"_bck"));const Q=async(e,o)=>{var a,t;let d=(0,l.bh)(u)||{},i={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:new Date(d.date).getFullYear(),epaystubId:d.epaystubId},s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.upd_employee_paystub};s.params=i,s.data2update={comprobanteId:e,document:o},M(s)};return(0,c.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"80vh",width:"1040px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 25px"},className:"payStub ",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Nomina"}),null!==(g=(0,l.bh)(u))&&void 0!==g&&g.comprobanteId?(0,c.jsx)("div",{style:{padding:"16px 0 0 12px"},children:(0,c.jsx)(r.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(null===(p=(0,l.bh)(u))||void 0===p?void 0:p.comprobanteId)},children:(0,c.jsx)("div",{className:"comprobante_id",onClick:()=>{(null===O||void 0===O?void 0:O.modalID)&&(0,i.CloseModal)({id:null===O||void 0===O?void 0:O.modalID})},children:(0,l.bh)(u).comprobanteId})})}):(0,c.jsx)("div",{className:"_dsplFlx spaceAround flxWrp card_dark",children:(0,c.jsx)("p",{className:"group_title addBtn purple",onClick:async e=>{let o={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};o.content=(0,c.jsx)(v,{item:(0,l.bh)(u),confirm:Q}),(0,i.OpenModal)(o)},children:"Enviar a contabilidad"})}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"employee_name",children:null===q||void 0===q?void 0:q.name}),(0,c.jsx)("div",{className:"icon",onClick:async()=>{(0,s.z_)((0,l.bh)(u))},style:{margin:"0px 10px 0px 10px"},children:(0,c.jsx)(h,{name:"printer",color:"#282828"})})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{margin:"10px 10px 10px 0"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"label",children:"Fecha"}),(0,c.jsxs)("p",{className:"value2Upd",children:[(0,l.sG)(1*(null===(z=(0,l.bh)(u))||void 0===z?void 0:z.date))," "]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"label",children:"Periodo"}),(0,c.jsxs)("p",{className:"value2Prd ",children:[G(1*(null===(T=(0,l.bh)(u))||void 0===T?void 0:T.datePeriod))," "]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"label",children:"Pago X Hora"}),(0,c.jsxs)("p",{className:"value2Upd",children:[(1*(null===(j=(0,l.bh)(u))||void 0===j?void 0:j.payrate)).toFixed(2)," "]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"label",children:"Lunch Duration"}),(0,c.jsxs)("p",{className:"value2Upd",children:[(1*(null===(N=(0,l.bh)(u))||void 0===N?void 0:N.lunchDuration)).toFixed(1)," "]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{style:{margin:"30px 0px 0px 0"},children:(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{className:"icon_revision",children:(0,c.jsx)(h,{name:null!==(F=(0,l.bh)(u))&&void 0!==F&&F.hasOvertime?"check_circle":"alert",color:null!==(P=(0,l.bh)(u))&&void 0!==P&&P.hasOvertime?"var(--hrm_palette-success-fg)":"var(--hrm_palette-selected-nav-text)"})}),(0,c.jsx)("span",{className:"checklabel",children:"Overtime"})]})}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx spaceAround flxWrp card_dark",style:{margin:"56px 0 56px"},children:(null===(I=(0,l.bh)(u))||void 0===I?void 0:I.hourly)&&(0,l._2)(null===(R=(0,l.bh)(u))||void 0===R?void 0:R.hourly).map(((e,o)=>{var a,t,d,i,s;let n=null===(a=(0,l.bh)(u))||void 0===a||null===(t=a.hourly)||void 0===t?void 0:t[e];return(0,c.jsx)(S,{dayName:e,index:o,data:n,payrate:1*(null===(d=(0,l.bh)(u))||void 0===d?void 0:d.payrate),lunch:1*(null===(i=(0,l.bh)(u))||void 0===i?void 0:i.lunchDuration),overtime:null===(s=(0,l.bh)(u))||void 0===s?void 0:s.overtime},e)}))}),W.regularPayment+W.overtimePayment>0&&(null===q||void 0===q||!q.hasW2)?(0,c.jsx)(w,{hourlyP:W}):null,W.regularPayment+W.overtimePayment>0&&null!==q&&void 0!==q&&q.hasW2?(0,c.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp card_dark",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(f,{hourlyP:W}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(y,{grossPay:L,isCompleted:null===(_=(0,l.bh)(u))||void 0===_?void 0:_.comprobanteId}),(0,c.jsx)("div",{className:"flexSpace"})]}):null,null!==(k=(0,l.bh)(u))&&void 0!==k&&k.comprobanteId||null===q||void 0===q||!q.hasW2||!E.hasChange?null:(0,c.jsx)("div",{className:"_dsplFlx spaceAround flxWrp card_dark",children:(0,c.jsx)("p",{className:"group_title addBtn purple",onClick:async e=>{var o,a;let t=(0,l.bh)(u)||{},d={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:new Date(t.date).getFullYear(),epaystubId:t.epaystubId},i=(0,l.vy)(m,(0,l.bh)(u),(0,l.bh)(u+"_bck")),s={...null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.upd_employee_paystub};s.params=d,s.data2update=i.data,M(s)},children:"Actualizar"})})]})},y=e=>{let{grossPay:o,isCompleted:a}=e;const[d,i]=(0,t.useState)(0),s=()=>{i((0,l.M5)())};return(0,c.jsx)("div",{className:" ",children:(0,c.jsx)("div",{children:l.gu.map((e=>(0,c.jsx)(p,{fldTx:e,grossPay:o,updObserve:s,isCompleted:a},e)))})})};let g={medicareTax:1,socialSecurity:1};const p=e=>{var o,a,t,d,s,n;let{fldTx:r,grossPay:x,updObserve:v,isCompleted:h}=e;return(0,c.jsxs)("div",{className:"_dsplFlx ",onClick:()=>{if(!g[r]&&!h){let e={zIndex:450,height:"40vh"};e.props={minHeight:"1vh",overlay:!0,closeEvent:()=>{v()}},e.content=(0,c.jsx)(j,{fldTx:r,grossPay:x}),(0,i.OpenModal)(e)}},children:[(0,c.jsxs)("span",{className:"checklabel",children:[l.Cz[r],":"]}),(0,c.jsxs)("div",{className:"date2Upd ",children:[(1*(null===(o=(0,l.bh)(u))||void 0===o||null===(a=o.w2Taxes)||void 0===a||null===(t=a[r])||void 0===t?void 0:t.percent)).toFixed(2),"%"]}),(0,c.jsxs)("span",{className:"checklabel",style:{marginLeft:19},children:["$",(x*(null===(d=(0,l.bh)(u))||void 0===d||null===(s=d.w2Taxes)||void 0===s||null===(n=s[r])||void 0===n?void 0:n.percent)/100).toFixed(2)]})]})},w=e=>{let{hourlyP:o}=e;return(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Regular Payments: "}),(0,c.jsx)("div",{className:"date2Upd ",children:o.regularPayment.toFixed(2)})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Regular Hours: "}),(0,c.jsx)("div",{className:"date2Upd ",children:(o.regularHours/60).toFixed(2)})]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Overtime Payments: "}),(0,c.jsx)("div",{className:"date2Upd ",children:o.overtimePayment.toFixed(2)})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Overtime Hours: "}),(0,c.jsx)("div",{className:"date2Upd ",children:(o.overtimeHours/60).toFixed(2)})]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Gross Payment: "}),(0,c.jsx)("div",{className:"date2Upd ",children:(o.regularPayment+o.overtimePayment).toFixed(2)})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:""}),(0,c.jsx)("div",{className:"date2Upd "})]})]}),(0,c.jsx)("div",{className:"flexSpace"})]})},f=e=>{let{hourlyP:o}=e;return(0,c.jsxs)("div",{className:" ",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Regular Payments: "}),(0,c.jsxs)("div",{className:"date2Upd ",children:["$",o.regularPayment.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Regular Hours: "}),(0,c.jsx)("div",{className:"date2Upd ",children:(o.regularHours/60).toFixed(2)})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Overtime Payments: "}),(0,c.jsxs)("div",{className:"date2Upd ",children:["$",o.overtimePayment.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Overtime Hours: "}),(0,c.jsx)("div",{className:"date2Upd ",children:(o.overtimeHours/60).toFixed(2)})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:"Gross Payment: "}),(0,c.jsxs)("div",{className:"date2Upd ",children:["$",(o.regularPayment+o.overtimePayment).toFixed(2)]})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("span",{className:"checklabel",children:""}),(0,c.jsx)("div",{className:"date2Upd "})]})]})},S=e=>{let{data:o,lunch:a,index:t,dayName:d,payrate:i}=e,s=o.end-o.start-a,n=i/60*s,r=T(s);return(0,c.jsxs)(c.Fragment,{children:[t>0?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"left_border"}),(0,c.jsx)("div",{className:"flexSpace"})]}):null,(0,c.jsxs)("div",{className:"lbl_h_dtls",style:{marginTop:8,textAlign:"left"},children:[(0,c.jsxs)("div",{className:"dayHour _dsplFlx",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{style:{marginRight:12},children:"".concat(l.ID[d])}),(0,c.jsx)("div",{className:"flexSpace"})]}),null!==o&&void 0!==o&&o.active?(0,c.jsx)("div",{className:"dayHour",children:(0,c.jsx)("div",{children:"".concat(r," - $").concat(n?n.toFixed(2):"0.00")})}):null,null!==o&&void 0!==o&&o.active?(0,c.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(z,{data:o,field:"start"}),(0,c.jsx)("div",{className:"flexSpace"}),"-",(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(z,{data:o,field:"end"}),(0,c.jsx)("div",{className:"flexSpace"})]}):null]})]})},z=e=>{let{data:o,field:a}=e;return(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:" payments hour",children:[(0,c.jsx)(h,{name:"timer_outline2",size:22,color:"#757575"}),T(null===o||void 0===o?void 0:o[a])]})})},T=e=>{if(!e)return null;let o=Math.floor(e/60),a=e-60*o;return"".concat(o>9?o:"0"+o,":").concat(a>9?a:"0"+a)},B=(e,o,a,t)=>{let d=0,i=0,s=0,n=o/60;return(0,l._2)(e).map(((o,t)=>{var l;if(null!==e&&void 0!==e&&null!==(l=e[o])&&void 0!==l&&l.active){var s,n;let t=(null===e||void 0===e||null===(s=e[o])||void 0===s?void 0:s.end)-(null===e||void 0===e||null===(n=e[o])||void 0===n?void 0:n.start);d+=t,i+=t-1*a}})),t&&i>2400&&(s=i-2400,i=2400),{hoursTt:d,regularHours:i,regularPayment:i*n,overtimeHours:s,overtimePayment:s*n*1.5}},j=e=>{var o,a,d,i,s,n;let{fldTx:r,grossPay:v}=e;const[h,m]=(0,t.useState)(0),[b,y]=(0,t.useState)(!1);(0,t.useEffect)((()=>{if(!b){var e,o;y(!0);let d=(0,l.bh)(u)||{};if(null===(e=d.w2Taxes)||void 0===e||null===(o=e[r])||void 0===o||!o.amount){var a,t;let e=(null===(a=d.w2Taxes)||void 0===a||null===(t=a[r])||void 0===t?void 0:t.percent)/100*v;g("amount",e)}m((0,l.M5)())}}));const g=(e,o)=>{var a;let t=(0,l.bh)(u)||{},d=null===(a=(0,l.bh)(u))||void 0===a?void 0:a.w2Taxes;d[r][e]=o,t.w2Taxes=d,(0,l.Rz)(u,t),m((0,l.M5)())};return(0,c.jsxs)("div",{style:{maxHeight:"76vh",minHeight:"43vh",width:"540px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 25px"},className:"payStub ",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsxs)("p",{className:"form_title",children:[l.Cz[r],":"]}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp card_dark",style:{margin:"26px 0 26px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(x,{init:null===(o=(0,l.bh)(u))||void 0===o||null===(a=o.w2Taxes)||void 0===a||null===(d=a[r])||void 0===d?void 0:d.percent,label:"Tax %",width:120,type:"number",updChanges:e=>{return g("amount",(o=e)/100*v),void g("percent",1*o);var o}}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(x,{init:null===(i=(0,l.bh)(u))||void 0===i||null===(s=i.w2Taxes)||void 0===s||null===(n=s[r])||void 0===n?void 0:n.amount,label:"Amount",width:120,type:"number",updChanges:e=>{return g("percent",100*(o=e)/v),void g("amount",1*o);var o}}),(0,c.jsx)("div",{className:"flexSpace"})]})]})},G=(e,o)=>{let a=(0,l.qt)(e),t=72e5;return o?"".concat((0,l.sJ)(a.stWk)," - ").concat((0,l.sJ)(a.endWk-t)):"".concat((0,l.kj)(a.stWk)," - ").concat((0,l.kj)(a.endWk-t))}},6824:(e,o,a)=>{a.d(o,{Hc:()=>r,M9:()=>h,cg:()=>u,eR:()=>x,h2:()=>n,jD:()=>v,z6:()=>c,z_:()=>m});var t=a(6963),l=a(2350),d=a(4e3),i=a(713),s=a(9868);async function n(e){(0,l.Pn)("helvetica");const o=await e.embedFont(t.StandardFonts.Helvetica),a=await e.embedFont(t.StandardFonts.HelveticaBold);let d=await e.embedFont(t.StandardFonts.TimesRomanBold),i=await e.embedFont(t.StandardFonts.TimesRoman);(0,l.cO)("helvetica",o),(0,l.cO)("helveticaBold",a),(0,l.cO)("TimesRomanBold",d),(0,l.cO)("TimesRomanItalic",i);const s=(0,l._2)(l.ty).map((async o=>{let a=(0,l.bh)(l.ty[o]);const t=await fetch(a).then((e=>e.arrayBuffer())),d=await e.embedFont(t,{subset:!0});(0,l.cO)(o,d)}));return await Promise.all(s),(0,l.Pn)()}const r=async e=>{const o=await t.PDFDocument.create();o.registerFontkit(d.Z);const a=await n(o),i=e.map((async(e,d)=>{var i,s;const n=o.addPage([288,162]),{width:r,height:c}=n.getSize();let x=c-14;const v=(0,l.ye)((null===e||void 0===e?void 0:e.inventoryId)+""),h=await fetch(v).then((e=>e.arrayBuffer()));let u=await o.embedPng(h);u&&n.drawImage(u,{x:10,y:80,width:80,height:80});const m=a.GSansBold.widthOfTextAtSize((null===e||void 0===e?void 0:e.inventoryId)+"",12),b=a.GSansBold.widthOfTextAtSize("ID: ",11);n.drawText("ID: ",{x:270-m-b,y:x,size:11,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),n.drawText((null===e||void 0===e?void 0:e.inventoryId)+"",{x:270-m,y:x,size:12,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),x-=20;const y=a.RobotoBold.widthOfTextAtSize("Date: ",11),g=a.GSansBold.widthOfTextAtSize((0,l.Gv)(null===e||void 0===e?void 0:e.date)+"",12);n.drawText("Date: ",{x:270-y-g,y:x,size:11,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)}),n.drawText((0,l.Gv)(null===e||void 0===e?void 0:e.date)+"",{x:270-g,y:x,size:12,font:a.GSansBold,color:(0,t.rgb)(.06,.06,.06)});let p=null!==e&&void 0!==e&&e.dimension?(null===e||void 0===e?void 0:e.dimension.split(",")[0])+" X "+(null===e||void 0===e?void 0:e.dimension.split(",")[1])+" inch":"";const w=a.GSansBold.widthOfTextAtSize(p+"",19);n.drawText(p+"",{x:270-w,y:x+4,size:19,font:a.GSansBold,color:(0,t.rgb)(.06,.06,.06)});let f=(null===e||void 0===e?void 0:e.qty)+" "+(null!==e&&void 0!==e&&e.unit?null===e||void 0===e?void 0:e.unit:"");const S=a.GSansBold.widthOfTextAtSize(f+"",19);n.drawText(f+"",{x:270-S,y:x-54,size:19,font:a.GSansBold,color:(0,t.rgb)(.06,.06,.06)}),x-=65,n.drawRectangle({x:5,y:x+1,width:275,height:.85,color:(0,t.rgb)(0,0,0),borderColor:(0,t.rgb)(0,0,0)});let z=null===(i=(0,l.bh)("products_ids"))||void 0===i||null===(s=i[null===e||void 0===e?void 0:e.productId])||void 0===s?void 0:s.name;n.drawText(z+"",{x:20,y:x-15,size:14,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),x-=25,n.drawRectangle({x:5,y:x+1,width:275,height:.85,color:(0,t.rgb)(0,0,0),borderColor:(0,t.rgb)(0,0,0)}),x-=10,x-=20,n.drawText(f+"",{x:270-S,y:x+4,size:19,font:a.GSansBold,color:(0,t.rgb)(.06,.06,.06)}),n.drawText((null===e||void 0===e?void 0:e.alphaCode)+"",{x:20,y:x+4,size:22,font:a.RobotoBold,color:(0,t.rgb)(.06,.06,.06)})})),s=(await Promise.all(i),await o.save());let r=(0,l.ou)(s);window.open(r)},c=async(e,o)=>{const a=await t.PDFDocument.create();a.registerFontkit(d.Z);const i=await n(a);let s={x:9,y:23,width:38,height:38};const r=e.map((async(e,d)=>{var n,r;const c=a.addPage([187,72]),{width:x,height:v}=c.getSize();let h=v-19,u=x;const m=(0,l.ye)((null===e||void 0===e?void 0:e.inventoryId)+""),b=await fetch(m).then((e=>e.arrayBuffer()));let y=await a.embedPng(b);y&&c.drawImage(y,s);const g=i.GSansBold.widthOfTextAtSize((null===e||void 0===e?void 0:e.alphaCode)+"",14);c.drawText((null===e||void 0===e?void 0:e.alphaCode)+"",{x:u-6-g,y:h,size:14,font:i.GSansBold,color:(0,t.rgb)(0,0,0)});const p=i.GSansBold.widthOfTextAtSize(o,9);c.drawText(o,{x:u-6-p,y:h-16,size:9,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),h-=16;let w=(null===e||void 0===e?void 0:e.qty)+" "+(null!==e&&void 0!==e&&e.unit?null===e||void 0===e?void 0:e.unit:"");c.drawText(w+"",{x:83,y:h-17,size:12,font:i.GSansBold,color:(0,t.rgb)(.06,.06,.06)}),h-=25;let f=null===(n=(0,l.bh)("products_ids"))||void 0===n||null===(r=n[null===e||void 0===e?void 0:e.productId])||void 0===r?void 0:r.name;c.drawText(f+"",{x:6,y:h-6,size:10,font:i.GSansBold,color:(0,t.rgb)(0,0,0)})})),c=(await Promise.all(r),await a.save());let x=(0,l.ou)(c);window.open(x)},x=async e=>{const o=await t.PDFDocument.create();o.registerFontkit(d.Z);const a=await n(o),s=e.map((async(e,d)=>{const s=o.addPage([288,162]),{width:n,height:r}=s.getSize();let c=r-14;const x=(0,l.ye)((null===e||void 0===e?void 0:e.areaLocationId)+""),v=await fetch(x).then((e=>e.arrayBuffer()));let h=await o.embedPng(v);h&&s.drawImage(h,{x:10,y:80,width:80,height:80});const u=(0,l.vF)((null===e||void 0===e?void 0:e.areaLocationId)+""),m=await fetch(u).then((e=>e.arrayBuffer()));let b=await o.embedPng(m);const y=a.GSansBold.widthOfTextAtSize((null===e||void 0===e?void 0:e.areaLocationId)+"",12),g=a.GSansBold.widthOfTextAtSize("ID: ",11);s.drawText("ID: ",{x:270-y-g,y:c,size:11,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),s.drawText((null===e||void 0===e?void 0:e.areaLocationId)+"",{x:270-y,y:c,size:12,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),c-=20;let p=null!==e&&void 0!==e&&e.dimension?(null===e||void 0===e?void 0:e.dimension.split(",")[0])+" X "+(null===e||void 0===e?void 0:e.dimension.split(",")[1])+" inch":"";const w=a.GSansBold.widthOfTextAtSize(p+"",19);s.drawText(p+"",{x:270-w,y:c+4,size:19,font:a.GSansBold,color:(0,t.rgb)(.06,.06,.06)});let f=(null===e||void 0===e?void 0:e.areaId)+"-"+(null===e||void 0===e?void 0:e.location);const S=a.GSansBold.widthOfTextAtSize(f+"",23);s.drawText(f+"",{x:270-S,y:c-54,size:23,font:a.GSansBold,color:(0,t.rgb)(.06,.06,.06)}),c-=65,s.drawRectangle({x:5,y:c+1,width:275,height:.85,color:(0,t.rgb)(0,0,0),borderColor:(0,t.rgb)(0,0,0)});let z=i.g5[null===e||void 0===e?void 0:e.areaId];s.drawText(z+"",{x:20,y:c-15,size:14,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),c-=25,s.drawRectangle({x:5,y:c+1,width:275,height:.85,color:(0,t.rgb)(0,0,0),borderColor:(0,t.rgb)(0,0,0)}),c-=10,c-=20,b&&s.drawImage(b,{x:90,y:c-6,width:190,height:34}),s.drawText(f+"",{x:6,y:c+4,size:16,font:a.RobotoBold,color:(0,t.rgb)(.06,.06,.06)})})),r=(await Promise.all(s),await o.save());let c=(0,l.ou)(r);window.open(c)},v=async e=>{const o=await t.PDFDocument.create();o.registerFontkit(d.Z);const a=await n(o);const i=[null].map((async(l,d)=>{const i=o.addPage([432,288]),{width:s,height:n}=i.getSize();let r=n-24;const c=a.GSansBold.widthOfTextAtSize((null===e||void 0===e?void 0:e.invoice)+"",18),x=a.GSansBold.widthOfTextAtSize("Invoice: ",15);i.drawText("Production Voucher",{x:60,y:r-14,size:16,font:a.GSansBold,color:(0,t.rgb)(0,0,0)});const v=await fetch(null===e||void 0===e?void 0:e.voucherIdQR).then((e=>e.arrayBuffer()));let h=await o.embedPng(v);h&&i.drawImage(h,{x:10,y:r-28,width:40,height:40}),i.drawText("Invoice: ",{x:400-c-x,y:r,size:15,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),i.drawText((null===e||void 0===e?void 0:e.invoice)+"",{x:400-c,y:r-2,size:18,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),r-=50;const u=a.GSansBold.widthOfTextAtSize("Customer: ",13);i.drawText("Customer: ",{x:10,y:r,size:13,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),i.drawText((null===e||void 0===e?void 0:e.clientName)+"",{x:10+u,y:r,size:10,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),r-=15;const m=a.GSansBold.widthOfTextAtSize("Address: ",13);i.drawText("Address: ",{x:12,y:r,size:13,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),i.drawText((null===e||void 0===e?void 0:e.clientAddress)+"",{x:12+m,y:r,size:10,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),r-=30,i.drawRectangle({x:5,y:r-6,width:410,height:.85,color:(0,t.rgb)(0,0,0),borderColor:(0,t.rgb)(0,0,0)}),i.drawText("PROFILE",{x:350,y:r,size:14,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),i.drawText("QTY",{x:310,y:r,size:14,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),i.drawText("PRODUCT",{x:20,y:r,size:14,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),r-=5,e.products.map((async(e,o)=>{r-=24,i.drawText(null!==e&&void 0!==e&&e.profile?(null===e||void 0===e?void 0:e.profile)+"":"",{x:350,y:r,size:14,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),i.drawText((null===e||void 0===e?void 0:e.qty)+"",{x:316,y:r,size:16,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),i.drawText((null===e||void 0===e?void 0:e.productName)+"",{x:5,y:r,size:11,font:a.GSansBold,color:(0,t.rgb)(0,0,0)})})),r=0,e.locProdFinish.map((async(e,o)=>{r+=16,i.drawText(e+"",{x:16,y:r,size:12,font:a.GSansBold,color:(0,t.rgb)(0,0,0)})}))})),s=(await Promise.all(i),await o.save());return(0,l.ou)(s)},h=async e=>{const o=await t.PDFDocument.create();o.registerFontkit(d.Z);const a=await n(o);let i=o.addPage();const{width:s,height:r}=i.getSize();let c=r-26;i.drawText("Inventario",{x:20,y:c,size:16,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),i.drawText("Date: "+(0,l.Gv)(Date.now()),{x:500,y:c,size:11,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),c-=20;let x=13;i.drawText("Product",{x:20,y:c,size:x,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)});const v=a.RobotoBold.widthOfTextAtSize("Qty",x);i.drawText("Qty",{x:430-v,y:c,size:x,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)});const h=a.RobotoBold.widthOfTextAtSize("Cost",x);i.drawText("Cost",{x:500-h,y:c,size:x,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)});const u=a.RobotoBold.widthOfTextAtSize("Amount",x);i.drawText("Amount",{x:580-u,y:c,size:x,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)}),c-=1;let m=((e,o)=>{var a,d;let i=[];const s=10;let n=0;e&&e.map(((e,a)=>{let d=e.amount;if(d){let r={},c="("+e.unit+")              "+e.qty;const x=o.GSansBold.widthOfTextAtSize((0,l.fY)(d),s),v=o.GSansBold.widthOfTextAtSize((0,l.fY)(c),s),h=o.GSansBold.widthOfTextAtSize((0,l.fY)(e.cost),s);n+=1*d,r={yInc:19,back:a%2===0?{x:22,y:-25,width:564,height:18,color:(0,t.rgb)(.78,.78,.78)}:null,name:{value:(0,l.fY)(e.name),x:30,size:s,font:o.GSansBold},qty:{value:(0,l.fY)(c),x:440-v,size:s,font:o.GSansBold},cost:{value:(0,l.fY)(e.cost),x:500-h,size:s,font:o.GSansBold},amount:{value:(0,l.fY)(d),x:580-x,size:s,font:o.GSansBold}},i.push(r)}}));const r=o.GSansBold.widthOfTextAtSize((null===(a=n)||void 0===a?void 0:a.toFixed(2))+"",12);let c={yInc:23,line:{x:396,y:12.3,width:192,height:.5,borderColor:(0,t.rgb)(0,0,0)},cost:{value:(0,l.fY)("Total"),x:400,size:12,font:o.GSansBold},amount:{value:(0,l.fY)(null===(d=n)||void 0===d?void 0:d.toFixed(2)),x:580-r,size:12,font:o.GSansBold}};return i.push(c),i})(e.list,a),b=Math.ceil(m.length/36);Array.from(Array(b).keys()).map((e=>{if(e>0){i=o.addPage(),c=r-26,i.drawText("Product",{x:20,y:c,size:x,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)});const e=a.RobotoBold.widthOfTextAtSize("Qty",x);i.drawText("Qty",{x:430-e,y:c,size:x,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)});const l=a.RobotoBold.widthOfTextAtSize("Cost",x);i.drawText("Cost",{x:500-l,y:c,size:x,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)});const d=a.RobotoBold.widthOfTextAtSize("Amount",x);i.drawText("Amount",{x:580-d,y:c,size:x,font:a.RobotoBold,color:(0,t.rgb)(0,0,0)}),c-=2}let l=m.slice(36*e,36*(e+1));l&&l.map(((e,o)=>{c-=e.yInc,e.back&&i.drawRectangle({x:e.back.x,y:c+e.back.y,width:e.back.width,height:e.back.height,color:e.back.color,blendMode:t.BlendMode.Normal}),e.line&&i.drawRectangle({x:e.line.x,y:c+e.line.y,width:e.line.width,height:e.line.height,borderColor:(0,t.rgb)(0,0,0)}),e.name&&i.drawText(e.name.value,{x:e.name.x,y:c,size:e.name.size,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),e.qty&&i.drawText(e.qty.value,{x:e.qty.x,y:c,size:e.qty.size,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),e.cost&&i.drawText(e.cost.value,{x:e.cost.x,y:c,size:e.cost.size,font:a.GSansBold,color:(0,t.rgb)(0,0,0)}),e.amount&&i.drawText(e.amount.value,{x:e.amount.x,y:c,size:e.amount.size,font:a.GSansBold,color:(0,t.rgb)(0,0,0)})}))}));const y=await o.save();let g=(0,l.ou)(y);window.open(g)},u=async e=>{const o=[792,612],a=await t.PDFDocument.create();a.registerFontkit(d.Z);const i=await n(a);let s=a.addPage(o);const{width:r,height:c}=s.getSize();let x=440,v=c-26;s.drawText("Invoices",{x:20,y:v,size:16,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Fecha del reporte: "+(0,l.Gv)(Date.now()),{x:620,y:v,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),v-=35;let h=13;s.drawText("Fecha",{x:20,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Documento",{x:100,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Importe",{x:x,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Vendido",{x:510,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Anticipo",{x:580,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Cobrado",{x:650,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Saldo",{x:720,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),v-=1;let u=((e,o)=>{let a=[];const d=10;let i=446;return e&&e.map(((e,s)=>{let n={};n={yInc:19,back:s%2===0?{x:22,y:-25,width:764,height:18,color:(0,t.rgb)(.78,.78,.78)}:null,date:{value:e.date?(0,l.sJ)(e.date):"",x:30,size:d,font:o.GSansBold},document:{value:(0,l.fY)(e.document),x:110,size:d,font:o.GSansBold},import:{value:(0,l.fY)(e.amount),x:i,size:d,font:o.GSansBold},vendido:{value:(0,l.fY)(e.cc_d),x:516,size:d,font:o.GSansBold},anticipo:{value:(0,l.fY)(e.hasAnticipo),x:586,size:d,font:o.GSansBold},cobrado:{value:(0,l.fY)(e.cc_c),x:656,size:d,font:o.GSansBold},saldo:{value:(0,l.fY)(e.cc_c),x:726,size:d,font:o.GSansBold}},a.push(n)})),a})(e,i),m=Math.ceil(u.length/28);Array.from(Array(m).keys()).map((e=>{e>0&&(s=a.addPage(o),v=c-26,s.drawText("Fecha",{x:20,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Documento",{x:100,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Importe",{x:x,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Vendido",{x:510,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Anticipo",{x:580,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Cobrado",{x:650,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),s.drawText("Saldo",{x:720,y:v,size:h,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),v-=2);let l=u.slice(28*e,28*(e+1));l&&l.map(((e,o)=>{v-=e.yInc,e.back&&s.drawRectangle({x:e.back.x,y:v+e.back.y,width:e.back.width,height:e.back.height,color:e.back.color,blendMode:t.BlendMode.Normal}),e.line&&s.drawRectangle({x:e.line.x,y:v+e.line.y,width:e.line.width,height:e.line.height,borderColor:(0,t.rgb)(0,0,0)}),e.date&&s.drawText(e.date.value,{x:e.date.x,y:v,size:e.date.size,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),e.document&&s.drawText(e.document.value,{x:e.document.x,y:v,size:e.document.size,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),e.import&&s.drawText(e.import.value,{x:e.import.x,y:v,size:e.import.size,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),e.vendido&&s.drawText(e.vendido.value,{x:e.vendido.x,y:v,size:e.vendido.size,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),e.anticipo&&s.drawText(e.anticipo.value,{x:e.anticipo.x,y:v,size:e.anticipo.size,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),e.cobrado&&s.drawText(e.cobrado.value,{x:e.cobrado.x,y:v,size:e.cobrado.size,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),e.saldo&&s.drawText(e.saldo.value,{x:e.saldo.x,y:v,size:e.saldo.size,font:i.GSansBold,color:(0,t.rgb)(0,0,0)})}))}));const b=await a.save();let y=(0,l.ou)(b);window.open(y)},m=async e=>{var o;const a=await t.PDFDocument.create();a.registerFontkit(d.Z);const i=await n(a);let r=a.addPage();const{width:c,height:x}=r.getSize();let v=x-30;r.drawText("Granite Concepts",{x:20,y:v,size:13,font:i.TimesRomanBold,color:(0,t.rgb)(0,0,0)}),r.drawText("4504 Poplar Level Rd",{x:20,y:v-15,size:10,font:i.timesRomanFont,color:(0,t.rgb)(0,0,0)}),r.drawText("Louisville, KY 40213",{x:20,y:v-30,size:10,font:i.timesRomanFont,color:(0,t.rgb)(0,0,0)}),r.drawText("(502) 742-2473",{x:20,y:v-45,size:10,font:i.TimesRomanBold,color:(0,t.rgb)(0,0,0)}),r.drawText("graniteconceptsky@gmail.com",{x:20,y:v-60,size:10,font:i.timesRomanFont,color:(0,t.rgb)(0,0,0)}),r.drawText("graniteconceptsky.com",{x:20,y:v-75,size:10,font:i.timesRomanFont,color:(0,t.rgb)(0,0,0)});let h=(0,s.parseWeekrange)(1*(null===e||void 0===e?void 0:e.datePeriod),1);const u=i.GSansBold.widthOfTextAtSize(h+"",10);r.drawText(h+"",{x:580-u,y:v,size:10,font:i.GSansBold,color:(0,t.rgb)(0,0,0)});let m="Period:  ";const g=i.GSansItalic.widthOfTextAtSize(m+"",10);r.drawText(m+"",{x:580-u-g,y:v,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)});let p=(0,l.sJ)(1*(null===e||void 0===e?void 0:e.datePeriod));const w=i.gSans.widthOfTextAtSize(p+"",10);r.drawText(p+"",{x:580-w,y:v-20,size:10,font:i.GSansBold,color:(0,t.rgb)(0,0,0)});let f="Pay date:  ";const S=i.GSansItalic.widthOfTextAtSize(f+"",10);r.drawText(f+"",{x:580-w-S,y:v-20,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)});let z=null===(o=(0,l.bh)("employees_ids"))||void 0===o?void 0:o[null===e||void 0===e?void 0:e.employeeId];const T=i.gSans.widthOfTextAtSize((null===z||void 0===z?void 0:z.name)+"",12);r.drawText((null===z||void 0===z?void 0:z.name)+"",{x:580-T,y:v-40,size:12,font:i.GSansBold,color:(0,t.rgb)(0,0,0)});let B=v-100;r.drawText("Earnings Statements",{x:200,y:B,size:21,font:i.RobotoBold,color:(0,t.rgb)(0,0,0)}),B-=40;let j=b(e.hourly);j&&j.map(((o,a)=>{let l=e.hourly[o],d=c/j.length;if(l.active){let n=l.end-l.start-e.lunchDuration,c=e.payrate/60*n,x=(0,s.parseTimeH)(n);a>0&&r.drawRectangle({x:a*d-10,y:B-20,width:.5,height:20,borderColor:(0,t.rgb)(0,0,0)}),r.drawText(o+"",{x:a*d+25,y:B,size:10,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText(x+" - $"+c.toFixed(2),{x:a*d+20,y:B-12,size:8,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText((0,s.parseTimeH)(l.start)+" - "+(0,s.parseTimeH)(l.end),{x:a*d+20,y:B-24,size:8,font:i.GSansBold,color:(0,t.rgb)(0,0,0)})}})),B-=90;let G=(0,s.hourlyParse)(null===e||void 0===e?void 0:e.hourly,null===e||void 0===e?void 0:e.payrate,null===e||void 0===e?void 0:e.lunchDuration,null===e||void 0===e?void 0:e.hasOvertime);r.drawText("Earnings",{x:15,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText("rate",{x:85,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText("hours",{x:155,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText("this period",{x:220,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText("year to date",{x:300,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawRectangle({x:10,y:B-5,width:370,height:.5,borderColor:(0,t.rgb)(0,0,0)}),B-=20,r.drawText("Regular ",{x:15,y:B,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)}),r.drawText(e.payrate.toFixed(2)+"",{x:85,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)}),r.drawText((G.regularHours/60).toFixed(2)+"",{x:155,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)});const N=(G.regularHours/60*e.payrate).toFixed(2)+"",F=i.gSans.widthOfTextAtSize(N,10);r.drawText(N,{x:270-F,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)}),r.drawText("",{x:300,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)}),B-=20,r.drawText("Overtime ",{x:15,y:B,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)}),r.drawText((1.5*e.payrate).toFixed(2)+"",{x:85,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)}),r.drawText((G.overtimeHours/60).toFixed(2)+"",{x:155,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)});const P=(G.overtimeHours/60*(1.5*e.payrate)).toFixed(2)+"",I=i.gSans.widthOfTextAtSize(P,10);r.drawText(P,{x:270-I,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)}),r.drawText("",{x:300,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)}),r.drawRectangle({x:68,y:B-8,width:220,height:.5,borderColor:(0,t.rgb)(0,0,0)}),r.drawRectangle({x:68,y:B-25,width:220,height:.5,borderColor:(0,t.rgb)(0,0,0)}),r.drawText("Gross Pay ",{x:75,y:B-19,size:10,font:i.GSansBold,color:(0,t.rgb)(0,0,0)});const R=e.grossPay.toFixed(2)+"",_=i.gSans.widthOfTextAtSize(R,10);if(r.drawText(R,{x:270-_,y:B-19,size:10,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),B-=50,z.hasW2){r.drawText("Deductions",{x:15,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText("Statutory",{x:85,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText("",{x:220,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawText("",{x:300,y:B,size:11,font:i.GSansBold,color:(0,t.rgb)(0,0,0)}),r.drawRectangle({x:10,y:B-5,width:370,height:.5,borderColor:(0,t.rgb)(0,0,0)}),e.w2Taxes&&l.gu.map(((o,a)=>{B-=20;let d=e.w2Taxes[o],s=l.Cz[o];r.drawText(s+"",{x:85,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)});let n=d.amount?d.amount:d.percent/100*e.grossPay;const c=i.gSans.widthOfTextAtSize(n.toFixed(2)+"",10);r.drawText(n.toFixed(2)+"",{x:270-c,y:B-0,size:10,font:i.GSansItalic,color:(0,t.rgb)(0,0,0)})})),r.drawRectangle({x:68,y:B-8,width:220,height:.5,borderColor:(0,t.rgb)(0,0,0)}),r.drawRectangle({x:68,y:B-25,width:220,height:.5,borderColor:(0,t.rgb)(0,0,0)}),r.drawText("Net Pay ",{x:75,y:B-19,size:10,font:i.GSansBold,color:(0,t.rgb)(0,0,0)});const o=(e.grossPay-y(e.w2Taxes,e.grossPay)).toFixed(2)+"",a=i.gSans.widthOfTextAtSize(o,10);r.drawText(o,{x:270-a,y:B-19,size:10,font:i.GSansBold,color:(0,t.rgb)(0,0,0)})}const k=await a.save();let O=(0,l.ou)(k);window.open(O)},b=e=>{let o=[];return e&&(0,l._2)(e).map(((a,t)=>{e[a].active&&o.push(a)})),o},y=(e,o)=>{let a=0;return e&&(0,l._2)(e).map(((t,l)=>{let d=e[t],i=d.amount?d.amount:d.percent/100*o;a+=i})),a}},1206:()=>{}}]);
//# sourceMappingURL=6907.3189c9a2.chunk.js.map