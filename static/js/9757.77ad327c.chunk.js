"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9757],{9757:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var a=o(2791),i=o(2350),l=(o(1e3),o(2647)),d=o(3588),n=o(1702),s=o(9760),r=o(2692),c=o(2502),u=o(184);const b=(0,l.JC)(),m=(0,r.dz)(),v=(0,l.PU)(),p=e=>{var t,o,l,s,r;let{data:b,item:m}=e;const[p,h]=(0,a.useState)(!1),[y,_]=(0,a.useState)(0);(0,a.useEffect)((()=>{if(!p){var e;if(h(!0),null!==m&&void 0!==m&&m.employeeId)null!==(e=(0,i.bh)("employees_ids"))&&void 0!==e&&e[null===m||void 0===m?void 0:m.employeeId]||(0,c.Dy)(f);_((0,i.M5)())}}));const f=()=>{_((0,i.M5)())};let g=null===(t=(0,i.bh)("employees_ids"))||void 0===t||null===(o=t[null===m||void 0===m?void 0:m.employeeId])||void 0===o?void 0:o.name,w=1*(null===(l=m.balance)||void 0===l?void 0:l.toFixed(2))!==0;return(0,u.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"90vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("div",{className:"flexSpace"})}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsxs)("div",{className:"_dsplFlx",style:{marginTop:20},children:[(0,u.jsx)("div",{className:"desc_lbl",children:"Comprobante:"}),(0,u.jsx)("div",{className:"name comprobante_id",style:w?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:null===m||void 0===m?void 0:m.comprobanteId})]}),w?(0,u.jsx)("div",{className:"msg_alert red",children:(0,u.jsxs)("div",{className:"msg_alert_title",children:["El comprobante no esta cuadrado tiene una diferencia de ",null===m||void 0===m||null===(s=m.balance)||void 0===s?void 0:s.toFixed(2)]})}):null,(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon",onClick:()=>{var e;let t=[];m.operations&&(null===(e=m.operations)||void 0===e||e.map(((e,o)=>{let a={...e};a.description=m.description,a.comprobanteId=m.comprobanteId,a.date=(0,i.sJ)(m.date),a.description=m.description;let l=e.account.code+" - "+e.account.name;if(a.account=l,a.sub_account){let t=e.sub_account.subAccount+" - "+e.sub_account.subAccountName;a.sub_account=t}t.push(a)}))),(0,i.eY)("export_compobante_"+m.comprobanteId+"_"+(0,i.M5)()+".csv",t)},style:{marginRight:17},children:(0,u.jsx)(v,{name:"google-spreadsheet",color:"#282828"})}),(0,u.jsx)("div",{className:"icon",onClick:()=>{(0,n.C)(m)},children:(0,u.jsx)(v,{name:"printer",color:"#282828"})})]}),(0,u.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"desc_lbl"}),(0,u.jsx)("div",{className:"name",children:(0,i.sG)(null===m||void 0===m?void 0:m.date)})]})]}),(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,u.jsx)("div",{className:"tr_bar_15",children:"Cuenta"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Sub Cuenta"}),(0,u.jsx)("div",{className:"tr_bar_40",children:"Documento"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Debito"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Credito"})]}),null===(r=(0,d.Eb)(null===m||void 0===m?void 0:m.operations))||void 0===r?void 0:r.map(((e,t)=>(0,u.jsx)(x,{element:e,in2D:t},t))),(0,u.jsxs)("div",{className:"cmp_desc",children:[(0,u.jsx)("div",{className:"desc_lbl",children:"Detalles:"}),(0,u.jsxs)("div",{className:"description",children:[null===m||void 0===m?void 0:m.description," ",g]})]}),(0,u.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("span",{className:"entryType",children:m.entryName||"Comprobante Manual"})]})]})},x=e=>{var t,o,a,l;let{element:d,in2D:n}=e;let r="".concat(null===d||void 0===d||null===(t=d.account)||void 0===t?void 0:t.accountId).concat(null!==d&&void 0!==d&&d.sub_account?"_"+(null===d||void 0===d||null===(o=d.sub_account)||void 0===o?void 0:o.sub_accountId):"");return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar","item-key":"".concat(r),children:[(0,u.jsx)("div",{className:"tr_bar_15",children:(0,u.jsx)(b,{data:d.account,labelField:"code",infoField:"name"})}),(0,u.jsx)("div",{className:"tr_bar_15",children:(0,u.jsx)(b,{data:d.sub_account,labelField:"subAccount",infoField:"subAccountName"})}),(0,u.jsx)("div",{className:"tr_bar_40",onClick:()=>{var e,t;if(null!==(e=(0,i.bh)("profileUser"))&&void 0!==e&&e.isAdmin||null===(t=(0,i.Ch)()[(0,i.bh)("date_current_year")])||void 0===t||!t.isClosed){if((0,i.ML)()){let e=(0,i.bh)("lastTimeCallModal")||0;if(Date.now()>e){let e=["document","amount","type","description","account","subAccount","comprobanteId"],t=(0,i.Ld)({...(0,i.bh)("comprobante_list")[d.operationId]},e);(0,i.Rz)("upd_comprobantebyId",t),(0,i.Rz)("upd_comprobantebyId_bck",JSON.parse(JSON.stringify(t))),(0,i.Rz)("lastTimeCallModal",Date.now()+320);let o={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};o.content=(0,u.jsx)(m,{confirm:()=>{},item:d}),(0,s.OpenModal)(o)}}}else;},children:d.document}),(0,u.jsx)("div",{className:"tr_bar_15",children:null===(a=1*d.debit)||void 0===a?void 0:a.toFixed(2)}),(0,u.jsx)("div",{className:"tr_bar_15",children:null===(l=1*d.credit)||void 0===l?void 0:l.toFixed(2)})]},n)}},1702:(e,t,o)=>{o.d(t,{C:()=>r});var a=o(6963),i=o(2350),l=o(4e3);let d=0,n=null,s=null;const r=async e=>{const t=await a.PDFDocument.create();if(t.registerFontkit(l.Z),n=await t.embedFont(a.StandardFonts.TimesRoman,{subset:!0}),s=await t.embedFont(a.StandardFonts.TimesRomanBold,{subset:!0}),(0,i.bh)("modernFontReport")){let e=(0,i.bh)("Roboto-Bold.ttf"),o=(0,i.bh)("ggSans-Italic.ttf"),a=(0,i.bh)("ggSans-Medium.ttf");const l=await fetch(e).then((e=>e.arrayBuffer()));s=await t.embedFont(l,{subset:!0});await fetch(o).then((e=>e.arrayBuffer()));const d=await fetch(a).then((e=>e.arrayBuffer()));n=await t.embedFont(d,{subset:!0})}let o=t.addPage();const{width:r,height:c}=o.getSize(),u=10;let b=0,m=44;d=c-40,o.drawText(e.entryName||"Comprobante Manual",{x:50,y:d,size:14,font:s,color:(0,a.rgb)(0,0,0)});const v=s.widthOfTextAtSize(e.comprobanteId,14),p=n.widthOfTextAtSize("Comprobante:  ",13);o.drawText("Comprobante:  ",{x:580-p-v,y:d,size:13,font:n,color:(0,a.rgb)(0,0,0)}),o.drawText(e.comprobanteId+"",{x:580-v,y:d,size:14,font:s,color:(0,a.rgb)(0,0,0)}),d-=25;const x=n.widthOfTextAtSize("Fecha:  ",13),h=s.widthOfTextAtSize((0,i.Gv)(e.date)+"",14);o.drawText("Fecha:  ",{x:580-x-h,y:d,size:13,font:n,color:(0,a.rgb)(0,0,0)}),o.drawText((0,i.Gv)(e.date)+"",{x:580-h,y:d,size:14,font:s,color:(0,a.rgb)(0,0,0)}),d-=15;let y=(null===e||void 0===e?void 0:e.operations)||[];d-=18,o.drawText("Cuenta",{x:20,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)}),o.drawText("Sub Cuenta",{x:205,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)}),o.drawText("Documento",{x:360,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)});const _=s.widthOfTextAtSize("Debito",13);o.drawText("Debito",{x:500-_,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)});const f=s.widthOfTextAtSize("Credito",13);o.drawText("Credito",{x:580-f,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)}),d-=8,o.drawRectangle({x:15,y:d+1,width:570,height:.95,color:(0,a.rgb)(0,0,0),borderColor:(0,a.rgb)(0,0,0)});let g=Math.ceil(y.length/40);Array.from(Array(g).keys()).map((e=>{if(e>0){o=t.addPage(),d=c-26,o.drawText("Cuenta",{x:20,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)}),o.drawText("Sub Cuenta",{x:205,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)}),o.drawText("Documento",{x:360,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)});const e=s.widthOfTextAtSize("Debito",13);o.drawText("Debito",{x:500-e,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)});const i=s.widthOfTextAtSize("Credito",13);o.drawText("Credito",{x:580-i,y:d,size:13,font:s,color:(0,a.rgb)(0,0,0)}),d-=8,o.drawRectangle({x:15,y:d+1,width:570,height:.95,color:(0,a.rgb)(0,0,0),borderColor:(0,a.rgb)(0,0,0)}),d-=2}let i=y.slice(b,m);e>0&&(b=m+1,m=b+48),Array.isArray(i)&&i.map(((e,t)=>{var i,l,s,r,c;(d-=16,null!==e&&void 0!==e&&null!==(i=e.account)&&void 0!==i&&i.name)&&o.drawText((null===e||void 0===e||null===(c=e.account)||void 0===c?void 0:c.name)+"",{x:20,y:d,size:u,font:n,color:(0,a.rgb)(0,0,0)});if(null!==e&&void 0!==e&&null!==(l=e.sub_account)&&void 0!==l&&l.subAccountName){var b;let t=null===e||void 0===e||null===(b=e.sub_account)||void 0===b?void 0:b.subAccountName.substring(0,32);o.drawText(t+"",{x:205,y:d,size:u,font:n,color:(0,a.rgb)(0,0,0)})}o.drawText((null===e||void 0===e?void 0:e.document)+"",{x:360,y:d,size:u,font:n,color:(0,a.rgb)(0,0,0)});let m=null!==e&&void 0!==e&&e.debit?null===(s=1*(null===e||void 0===e?void 0:e.debit))||void 0===s?void 0:s.toFixed(2):"0.00";const v=n.widthOfTextAtSize(m+"",u);o.drawText(m+"",{x:500-v,y:d,size:u,font:n,color:(0,a.rgb)(0,0,0)});let p=null!==e&&void 0!==e&&e.credit?null===(r=1*(null===e||void 0===e?void 0:e.credit))||void 0===r?void 0:r.toFixed(2):"0.00";const x=n.widthOfTextAtSize(p+"",u);o.drawText(p+"",{x:580-x,y:d,size:u,font:n,color:(0,a.rgb)(0,0,0)})}))})),d-=28,o.drawRectangle({x:15,y:d+1,width:570,height:.85,color:(0,a.rgb)(0,0,0),borderColor:(0,a.rgb)(0,0,0)}),d-=18,o.drawText("Detalles: ",{x:50,y:d,size:12,font:n,color:(0,a.rgb)(0,0,0)}),d-=18,o.drawText(e.description?e.description:"",{x:70,y:d,size:11,font:n,color:(0,a.rgb)(0,0,0)});let w=function(e){let t=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(t)}(await t.save());window.open(w)}},2502:(e,t,o)=>{o.d(t,{Dy:()=>i,kQ:()=>l,lG:()=>d});var a=o(2350);const i=async e=>{var t,o;let i={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_employee};i.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId};const l=(0,a.I7)(i),d=await l;d&&((0,a.Rz)("employees_list",n((0,a.jQ)(d),"code")),(0,a.Rz)("employees_ids",(0,a.ME)((0,a.jQ)(d),"employeeId")),e&&e())},l=async e=>{var t,o;let i={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_employee};i.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchQry")};const l=(0,a.I7)(i),d=await l;d&&((0,a.Rz)("employees_list",n((0,a.jQ)(d),"code")),e&&e())},d=async(e,t)=>{var o,i,l,d;let n={...null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.filter_search_opera};n.params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,year:(0,a.bh)("date_current_year"),":date1":(null===(l=(0,a.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)-10,":date2":null===(d=(0,a.bh)("date_range_comps"))||void 0===d?void 0:d.lastDate,":search0":e};const s=(0,a.I7)(n),r=await s;r&&!r.error&&((0,a.Rz)("paystub_submayor_list",r),(0,a.Rz)("paystub_submayor_group",function(e){var t={};e.length>0?e.map((e=>{let o=e.date+"_"+e.comprobanteId;if(!t[o]){t[o]={},["date","description","entryName","comprobanteId","employeeId","document"].forEach((a=>{t[o][a]=e[a]})),t[o].amount=0,t[o].balance=0,t[o].operations=[]}e.type&&(t[o].balance=1*(0,a.Zv)(t[o].balance,2)+("debit"===e.type?1*(0,a.Zv)(e.amount,2):0),t[o].operations.push(function(e){var t;let o={};o.employeeId=null===(t=(0,a.bh)("employees_ids"))||void 0===t?void 0:t[e.employeeId],o.comprobanteId=e.comprobanteId,o.operationId=e.operationId,o.document=e.document,o.date=e.date,"credit"===e.type?(o.debit=0,o.credit=e.amount):"debit"===e.type&&(o.credit=0,o.debit=e.amount);return o}(e)))})):t=null;return t}((0,a.jQ)(r)))),t&&t()};const n=(e,t)=>(0,a.MV)("sortEmployees",[e],(()=>e&&e.sort(((e,o)=>{let a=1*e[t],i=1*o[t];return a<i?-1:a>i?1:0}))))},1e3:()=>{}}]);
//# sourceMappingURL=9757.77ad327c.chunk.js.map