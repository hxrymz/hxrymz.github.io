"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[791],{791:(e,l,a)=>{a.r(l),a.d(l,{default:()=>_});var s=a(2791),i=(a(6794),a(2350)),d=a(2502),t=a(7689),n=a(9760),r=a(2647),o=a(1087),c=a(8779),v=(a(3588),a(1459)),m=a(1573),h=a(184);const p=(0,r.h0)(),u=(0,r.PU)(),x=(0,m.uq)(),_=e=>{var l,a,r,o,c;let{data:v,item:m}=e;const[,x]=(0,s.useState)(0);(0,s.useEffect)((()=>{}),[m]);const _=()=>{x((0,i.M5)())},N=((0,t.s0)(),e=>{(0,n.CloseModal)({id:v.modalID})}),y=e=>{if(null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){let l={...e};l.initDate=l.initDate-100,l.lastDate=l.lastDate+8638e4,(0,i.Rz)("date_range_comps",l)}(0,d.lG)(null===m||void 0===m?void 0:m.employeeId,_)};let g=(null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)&&(0,i.sJ)(null===(a=(0,i.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)+"-"+(0,i.sJ)(null===(r=(0,i.bh)("date_range_comps"))||void 0===r?void 0:r.lastDate);return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"title_collect",children:"Movimientos de Nomina"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:()=>{var e,l;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,h.jsx)(p,{onConfirm:y,init:null===(e=(0,i.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,isRange:!0}),(0,n.OpenModal)(a)},children:[(0,h.jsx)("div",{className:"lbl date",children:g||"Fecha"}),(0,h.jsx)(u,{name:"calendar",color:"#66666"})]})})]}),(0,h.jsx)("div",{className:" acc_dtls",style:{marginTop:10},children:(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===m||void 0===m?void 0:m.name}),(0,h.jsx)("div",{className:"name",children:null===m||void 0===m?void 0:m.unit})]})}),(0,h.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Acumulado:"}),(0,h.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===(o=j((0,i.bh)("paystub_submayor_list")))||void 0===o?void 0:o.toFixed(2)]})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,h.jsx)("div",{className:"tr_bar_5"}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Comprobante"}),(0,h.jsx)("div",{className:"tr_bar_30",children:"Documento"}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Amount"}),(0,h.jsx)("div",{className:"tr_bar_5"})]}),(0,h.jsx)("div",{className:"scollVh subMHeight",children:(0,i.bh)("paystub_submayor_list")&&(null===(c=(0,i._2)((0,i.bh)("paystub_submayor_list")))||void 0===c?void 0:c.map(((e,l)=>{let a=(0,i.bh)("paystub_submayor_list")[e];return(0,h.jsx)(b,{element:a,close:N,updObserve:_},l)})))})]})},b=e=>{let{element:l,close:a,updObserve:s}=e;const d=async()=>{var e,s;let d={businessId:null===(e=(0,i.bh)("profileUser"))||void 0===e?void 0:e.businessId,year:new Date(l.date).getFullYear(),epaystubId:l.epaystubId},t={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.delete_employee_paystub};t.params=d,(async e=>{const l=(0,i.I7)(e);await l&&setTimeout((()=>{a()}),200)})(t)};let t=(0,v.jd)(null===l||void 0===l?void 0:l.hourly,null===l||void 0===l?void 0:l.payrate,null===l||void 0===l?void 0:l.lunchDuration,null===l||void 0===l?void 0:l.hasOvertime);return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar_5",children:(0,h.jsx)("div",{className:"icon_revision",onClick:()=>{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};const s="view_paystub_employee";(0,i.Rz)(s,l),(0,i.Rz)(s+"_bck",{...l}),e.content=(0,h.jsx)(x,{element:l}),a(),(0,n.OpenModal)(e)},children:(0,h.jsx)(u,{name:null!==l&&void 0!==l&&l.comprobanteId?"check_circle":"alert",color:null!==l&&void 0!==l&&l.comprobanteId?"var(--hrm_palette-success-fg)":"var(--hrm_palette-selected-nav-text)"})})}),(0,h.jsx)("div",{className:"tr_bar_20",children:l.date&&(0,i.sJ)(l.date)}),(0,h.jsx)("div",{className:"tr_bar_20 ",children:(0,h.jsx)(o.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(null===l||void 0===l?void 0:l.comprobanteId)},children:(0,h.jsx)("div",{className:" comprobante_id",onClick:()=>a(l),children:l.comprobanteId})})}),(0,h.jsx)("div",{className:"tr_bar_30",children:l.document}),(0,h.jsxs)("div",{className:"tr_bar_20",children:["$",(t.regularPayment+t.overtimePayment).toFixed(2)]}),(0,h.jsx)("div",{className:"tr_bar_5",children:(0,h.jsx)("div",{className:"icon tr_bar_5",onClick:()=>{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}},l=(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"centerBx",children:(0,h.jsx)(u,{name:"alert",color:"var(--hrm_palette-selected-nav-text)"})}),(0,h.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Peligro va a eliminar un Paystub!!!"})]});e.content=(0,h.jsx)(c.Z,{label:l,labelColor:"var(--hrm_palette-selected-nav-text)",body:"debe saber que no podra recuperarlo",btnConfirm:"OK",confirm:d}),(0,n.OpenModal)(e)},children:(0,h.jsx)(u,{name:"outline_delete",color:"#c62828"})})})]})},j=e=>{var l;let a=0;return e&&(null===(l=(0,i._2)(e))||void 0===l||l.map(((l,s)=>{let d=e[l],t=(0,v.jd)(null===d||void 0===d?void 0:d.hourly,null===d||void 0===d?void 0:d.payrate,null===d||void 0===d?void 0:d.lunchDuration,null===d||void 0===d?void 0:d.hasOvertime),n=t.regularPayment+t.overtimePayment;a=1*(0,i.Zv)(a,2)+1*(0,i.Zv)(n,2)}))),a}},8779:(e,l,a)=>{a.d(l,{Z:()=>d});a(2791),a(1534);var s=a(9760),i=a(184);const d=e=>{let{data:l,confirm:a,label:d,labelColor:t,body:n,btnConfirm:r,theme:o}=e;const{modalID:c}=l,v=e=>{(0,s.CloseModal)({id:c})};let m=o||"red";return(0,i.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",minWidth:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,i.jsxs)("div",{className:"_dsplFlx ",children:[(0,i.jsx)("p",{className:"form_title",style:t?{color:t}:null,children:d}),(0,i.jsx)("div",{className:"flexSpace"})]}),(0,i.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,i.jsx)("span",{children:n||"Una vez eliminado no podra ser recuperado"})}),(0,i.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,i.jsx)("div",{className:"flexSpace"}),(0,i.jsx)("p",{className:"group_title addBtn",onClick:v,children:"Cancelar"}),(0,i.jsx)("p",{className:"group_title addBtn ".concat(m),onClick:()=>{a&&a(),v()},children:r||"Eliminar"})]})]})}},1534:()=>{}}]);
//# sourceMappingURL=791.b3e1f0c8.chunk.js.map