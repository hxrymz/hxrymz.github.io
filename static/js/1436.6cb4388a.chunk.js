"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1436],{2658:(e,l,s)=>{s.r(l),s.d(l,{default:()=>v});var a=s(2791),d=(s(6021),s(2350)),i=s(7689),r=s(1087),c=s(9760),n=s(2647),o=s(8779),t=s(3588),m=s(184);const x=(0,n.PU)(),v=e=>{var l,s,a,r,n;let{data:o,item:t,accountForm:x}=e,v=null===(l=(0,d.bh)("account_ids"))||void 0===l?void 0:l[null===(s=(0,d.bh)(x))||void 0===s?void 0:s.account],p=null===(a=(0,d.bh)("sub_account_ids"))||void 0===a?void 0:a[null===(r=(0,d.bh)(x))||void 0===r?void 0:r.subAccount];(0,i.s0)();const _=e=>{(0,c.CloseModal)({id:o.modalID})};return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"660px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsx)("div",{className:"_dsplFlx ",children:(0,m.jsx)("p",{className:"title_collect",children:"Movimientos de la Cuenta"})}),(0,m.jsxs)("div",{className:" acc_dtls",style:{marginTop:10},children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===v||void 0===v?void 0:v.code}),(0,m.jsx)("div",{className:"name",children:null===v||void 0===v?void 0:v.name})]}),(0,m.jsx)("div",{className:"flexSpace"}),p?(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"code",children:null===p||void 0===p?void 0:p.subAccount}),(0,m.jsx)("div",{className:"name",children:null===p||void 0===p?void 0:p.subAccountName})]}):null]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"title_collect",children:"En el documento"}),(0,m.jsx)("p",{className:"form_title",children:null===t||void 0===t?void 0:t.document})]}),(0,m.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"_dsplFlx"})]}),(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_5"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Comprobante"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Fecha"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Debito"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Credito"})]}),null===t||void 0===t||null===(n=t.operations)||void 0===n?void 0:n.map(((e,l)=>(0,m.jsx)(h,{element:e,close:_},l)))]})},h=e=>{var l,s;let{element:a,close:i}=e;const n=()=>{(0,t.WB)([a],i)};return null!==a&&void 0!==a&&a.comprobanteId?(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_5",style:{marginLeft:1},children:(0,m.jsx)(p,{toolkitLabel:a.description,children:(0,m.jsx)(x,{name:"help",color:"#000",size:18})})}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25 comprobante_id",onClick:i,children:(0,m.jsx)(r.OL,{to:{pathname:"accounting-ledger",search:"?cId=".concat(a.comprobanteId)},children:a.comprobanteId})}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:a.date&&(0,d.sJ)(a.date)}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:null===(l=1*a.debit)||void 0===l?void 0:l.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:null===(s=1*a.credit)||void 0===s?void 0:s.toFixed(2)})]}):(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_90",children:(0,m.jsx)("div",{className:"name comprobante_id",style:{color:"var(--hrm_palette-selected-nav-text)"},children:"El registro contiene errores"})}),(0,m.jsx)("div",{className:"tr_bar_10",children:(0,m.jsx)("div",{className:"icon",onClick:()=>(()=>{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,m.jsx)(o.Z,{label:"Peligro va a eliminar un registro contable!!!",labelColor:"var(--hrm_palette-selected-nav-text)",body:"El registro estan corrupto pero debe saber que no podra recuperarlo",btnConfirm:"OK",confirm:n}),(0,c.OpenModal)(e)})(),children:(0,m.jsx)(x,{name:"outline_delete",color:"var(--hrm_palette-selected-nav-text)"})})})]})},p=e=>{let{color:l,children:s,toolkitLabel:d}=e;const[i,r]=(0,a.useState)(!0),[c,n]=(0,a.useState)(!0);let o=null===d||void 0===d?void 0:d.length;return(0,m.jsx)("div",{className:"lbl_dts _dsplFlx",style:{color:l},children:(0,m.jsxs)("div",{onMouseLeave:e=>{c&&(n(!1),setTimeout((()=>{r(!1)}),50))},children:[d?(0,m.jsx)("div",{className:"icon_info",onClick:e=>{c?(n(!1),setTimeout((()=>{r(!1)}),50)):(r(!0),setTimeout((()=>{n(!0)}),50))},children:i?(0,m.jsx)("div",{className:"boxOpenInfo",style:{opacity:c?1:0,maxWidth:9*o},children:(0,m.jsx)("div",{className:"boxInfo",children:(0,m.jsx)("span",{children:d})})}):null}):null,(0,m.jsx)("div",{onMouseMove:e=>{c||(r(!0),setTimeout((()=>{n(!0)}),50))},children:s})]})})}},8779:(e,l,s)=>{s.d(l,{Z:()=>i});s(2791),s(1534);var a=s(9760),d=s(184);const i=e=>{let{data:l,confirm:s,label:i,labelColor:r,body:c,btnConfirm:n}=e;const{modalID:o}=l,t=e=>{(0,a.CloseModal)({id:o})};return(0,d.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",minWidth:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"form_title",style:r?{color:r}:null,children:i}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,d.jsx)("span",{children:c||"Una vez eliminado no podra ser recuperado"})}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn",onClick:t,children:"Cancelar"}),(0,d.jsx)("p",{className:"group_title addBtn red",onClick:()=>{s&&s(),t()},children:n||"Eliminar"})]})]})}},6021:()=>{},1534:()=>{}}]);
//# sourceMappingURL=1436.6cb4388a.chunk.js.map