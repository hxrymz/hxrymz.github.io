"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9669],{9669:(s,e,a)=>{a.r(e),a.d(e,{default:()=>f});var l=a(2791),d=a(2350),i=(a(4268),a(9760)),t=a(2647),c=a(24),n=a(184);const r=(0,t.Np)(),o=(0,c.f_)(),p="new_passport",x=s=>{var e,a,t,c;let{data:x,confirm:u,updObs:v}=s;const[m,h]=(0,l.useState)(!1),[j,N]=(0,l.useState)(0);(0,l.useEffect)((()=>{m||(h(!0),N((0,d.M5)()))}));const f=(s,e,a)=>{let l=(0,d.bh)(p)||{};a?(l[a]||(l[a]={}),l[a][s]=e):l[s]=e,(0,d.Rz)(p,l),N((0,d.M5)())},_=()=>{(null===x||void 0===x?void 0:x.modalID)&&(0,i.CloseModal)({id:null===x||void 0===x?void 0:x.modalID})};return(0,n.jsxs)("div",{style:{maxHeight:"80vh",width:"690px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",children:"Agregar Pasaporte"}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{marginTop:30},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(r,{init:null===(e=(0,d.bh)(p))||void 0===e?void 0:e.passportNumber,label:"Numero Pasaporte",width:120,updChanges:s=>f("passportNumber",s)}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(r,{init:null===(a=(0,d.bh)(p))||void 0===a?void 0:a.countryOfIssuance,label:"Pais que emite el pasaporte",width:260,updChanges:s=>f("countryOfIssuance",s)}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{style:{margin:"10px 10px 0 0"},children:(0,n.jsx)(o,{init:null===(t=(0,d.bh)(p))||void 0===t?void 0:t.expirationDate,label:"Fecha Expiracion",updDate:s=>f("expirationDate",s)})}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{style:{margin:"10px 10px 0 0"},children:(0,n.jsx)(o,{init:null===(c=(0,d.bh)(p))||void 0===c?void 0:c.issueDate,label:"Fecha Emision",updDate:s=>f("issueDate",s)})}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{className:"card",children:(0,n.jsx)("button",{onClick:async()=>{let s=(0,d.bh)(p);u&&u(s),_()},children:"Guardar"})})]})]})},u=(0,t.Np)(),v=(0,c.f_)(),m="upd_passport",h=s=>{var e,a,t,c,r;let{data:o,confirm:p,updObs:x}=s;const[h,j]=(0,l.useState)(!1),[N,f]=(0,l.useState)(0);(0,l.useEffect)((()=>{h||(j(!0),f((0,d.M5)()))}));const _=(s,e,a)=>{let l=(0,d.bh)(m)||{};a?(l[a]||(l[a]={}),l[a][s]=e):l[s]=e,(0,d.Rz)(m,l),f((0,d.M5)())},b=()=>{(null===o||void 0===o?void 0:o.modalID)&&(0,i.CloseModal)({id:null===o||void 0===o?void 0:o.modalID})};return(0,n.jsxs)("div",{style:{maxHeight:"80vh",width:"690px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",children:"Actualizar Entrada"}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{style:{margin:"10px 10px 0 0"},children:(0,n.jsx)(v,{init:null===(e=(0,d.bh)(m))||void 0===e?void 0:e.dateOfPassport,label:"Entrada a Usa",updDate:s=>_("dateOfPassport",s)})}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{style:{margin:"10px 10px 0 0"},children:(0,n.jsx)(v,{init:null===(a=(0,d.bh)(m))||void 0===a?void 0:a.dateOfLeft,label:"Salida de Usa",updDate:s=>_("dateOfLeft",s)})}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{style:{margin:"10px 10px 0 0"},children:(0,n.jsx)(v,{init:null===(t=(0,d.bh)(m))||void 0===t?void 0:t.lastLeftYourCountry,label:"Salida de su pais",updDate:s=>_("lastLeftYourCountry",s)})}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{marginTop:30},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(u,{init:null===(c=(0,d.bh)(m))||void 0===c?void 0:c.placeOfPassport,label:"Puerto de Entrada",width:200,updChanges:s=>_("placeOfPassport",s)}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(u,{init:null===(r=(0,d.bh)(m))||void 0===r?void 0:r.status,label:"Estatus",width:200,updChanges:s=>_("status",s)}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{className:"card",children:(0,n.jsx)("button",{onClick:async()=>{let s=(0,d.bh)(m);p&&p(s),b()},children:"Guardar"})})]})]})};var j=a(8383);const N=(0,t.PU)(),f=s=>{var e;let{openUpd:a,close:t}=s;const[c,r]=(0,l.useState)(!1),[o,p]=(0,l.useState)(0),[u,v]=(0,l.useState)(1),m=()=>{p((0,d.M5)())},h=async s=>{let e={...(0,d.bh)("upd_client")},a=(null===e||void 0===e?void 0:e.passportRecord)||[];a.push(s);let l={query:"updateClientNotary",params:{clientNotaryId:e.clientNotaryId},data2update:{passportRecord:a}};const i=(0,d.Bm)((0,d.uG)(),l),t=await i;t&&t.data&&(e.passportRecord=a,(0,d.Rz)("upd_client",e),(0,d.Rz)("new_passport",null),m())},j=async(s,e)=>{let a={...(0,d.bh)("upd_client")},l=(null===a||void 0===a?void 0:a.passportRecord)||[];l[e]=s;let i={query:"updateClientNotary",params:{clientNotaryId:a.clientNotaryId},data2update:{passportRecord:l}};const t=(0,d.Bm)((0,d.uG)(),i),c=await t;c&&c.data&&(a.passportRecord=l,(0,d.Rz)("upd_client",a),(0,d.Rz)("upd_passport",null),m())},N=async s=>{let e={...(0,d.bh)("upd_client")},a=(null===e||void 0===e?void 0:e.passportRecord)||[];a.splice(s,1);let l={query:"updateClientNotary",params:{clientNotaryId:e.clientNotaryId},data2update:{passportRecord:a}};const i=(0,d.Bm)((0,d.uG)(),l),t=await i;t&&t.data&&(e.passportRecord=a,(0,d.Rz)("upd_client",e),m())};(0,l.useEffect)((()=>{c||(r(!0),p((0,d.M5)()))}));let f=(null===(e=(0,d.bh)("upd_client"))||void 0===e?void 0:e.passportRecord)||[];return(0,n.jsxs)("div",{className:" ",children:[(0,n.jsx)("div",{className:"detailClient",children:(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",children:"Pasaportes"}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("p",{className:"group_title addBtn",onClick:()=>{let s={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};s.content=(0,n.jsx)(x,{confirm:h}),(0,i.OpenModal)(s)},children:"Agregar Pasaporte"})]})}),(0,n.jsx)("div",{className:" ",children:f.map(((s,e)=>(0,n.jsx)(_,{residence:s,index:e,updPassportRecord:j,deleteJob:N},e)))})]})},_=s=>{let{residence:e,updPassportRecord:a,index:t,deleteJob:c}=s;const[r,o]=(0,l.useState)(!1),[p,x]=(0,l.useState)(0),u=s=>{x((0,d.M5)())},v=s=>{(0,d.vQ)(s,u)},m=s=>{a(s,t)},f=s=>{c(t)};return(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsxs)("div",{className:"card_address modern ",children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"title_card",onClick:()=>v(e.passportNumber),children:e.passportNumber}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsxs)("div",{className:"icon_action _dsplFlx",children:[(0,n.jsxs)("div",{className:"menu_icon _dsplFlx",children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(N,{name:"more_vert"})]}),(0,n.jsxs)("div",{className:"menu_icon_acc _dsplFlx",children:[(0,n.jsx)("div",{onClick:()=>{(0,d.Rz)("upd_entry_usa",e),(0,d.Rz)("upd_entry_usa_bck",JSON.parse(JSON.stringify(e)));let s={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};s.content=(0,n.jsx)(h,{confirm:m}),(0,i.OpenModal)(s)},children:(0,n.jsx)(N,{name:"outline_edit"})}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{onClick:()=>{let s=(0,d.bh)("lastTimeCallModal")||0;if(Date.now()>s){(0,d.Rz)("lastTimeCallModal",Date.now()+320);let s={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};s.content=(0,n.jsx)(j.Z,{confirm:f,lbl_p:"Eliminar Pasaporte",lbl_span:"Una vez eliminado no podra ser recuperado"}),(0,i.OpenModal)(s)}},children:(0,n.jsx)(N,{name:"outline_delete"})})]})]})]}),(0,n.jsx)("div",{className:"body_card",children:(0,n.jsx)("div",{className:"_dsplFlx city_state",children:(0,n.jsx)("div",{className:"h4_gsans",onClick:()=>v(e.countryOfIssuance),children:e.countryOfIssuance})})}),(0,n.jsxs)("div",{className:"",style:{marginTop:15},children:[e.expirationDate?(0,n.jsxs)("div",{className:"_dsplFlx city_state",children:[(0,n.jsx)("div",{className:"h5_gsans",children:"Expira:  "}),(0,n.jsx)("div",{className:"h5_gsans",onClick:()=>v((0,d.sJ)(e.expirationDate)),children:(0,d.sG)(e.expirationDate)})]}):null,e.issueDate?(0,n.jsxs)("div",{className:"_dsplFlx city_state",children:[(0,n.jsx)("div",{className:"h5_gsans",children:"Emitido:  "}),(0,n.jsx)("div",{className:"h5_gsans",onClick:()=>v((0,d.sJ)(e.issueDate)),children:(0,d.sG)(e.issueDate)})]}):null]})]}),(0,n.jsx)("div",{className:"flexSpace"})]})}},8383:(s,e,a)=>{a.d(e,{Z:()=>i});a(2791),a(4268);var l=a(9760),d=a(184);const i=s=>{let{data:e,confirm:a,lbl_p:i,lbl_span:t}=s;const{modalID:c}=e,n=s=>{(0,l.CloseModal)({id:c})};return(0,d.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"form_title",children:i}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"_dsplFlx ",children:(0,d.jsx)("span",{children:t})}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn",onClick:n,children:"Cancelar"}),(0,d.jsx)("p",{className:"group_title addBtn red",onClick:()=>{a(),n()},children:"Eliminar"})]})]})}},4268:()=>{}}]);
//# sourceMappingURL=9669.c718c542.chunk.js.map