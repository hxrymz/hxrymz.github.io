"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4151,791],{4151:(e,l,a)=>{a.r(l),a.d(l,{default:()=>j});var s=a(2791),d=a(2350),i=a(2647),t=a(9760),n=(a(1206),a(1573)),o=a(2502),r=a(4050),c=a(791),v=a(24),m=a(15),h=a(184);const p=(0,i.YZ)(),u=(0,i.Vg)(),x=(0,n.mi)(),_=(0,v.f_)(),b=(0,n.vj)(),j=e=>{var l,a;let{data:i,elmId:n,updObs:v}=e;const[j,y]=(0,s.useState)(!1),[g,N]=(0,s.useState)(0),[f,D]=(0,s.useState)(!1),[I,F]=(0,s.useState)(!1);(0,s.useEffect)((()=>{j||(y(!0),N((0,d.M5)()),(0,r.Ht)("global_accounts","global_account_params",k),(0,d.Rz)("cmpByPayStubMayor",{}))}));const k=e=>{(0,o.Dy)(C)},C=async(e,l)=>{N((0,d.M5)()),F(!1)},S=async e=>{(0,d.Rz)("datePeriodRs",e),N((0,d.M5)()),(async e=>{let l={};(0,m.OpenToast)({text:"Generarando reporte de pago ",timeout:1500});let a=await(0,o.er)();a&&(0,d._2)(a).map((e=>{var s,i,t;let n=null===(s=a[e])||void 0===s?void 0:s.employeeId;var o,r;null!==(i=(0,d.bh)("employees_ids"))&&void 0!==i&&null!==(t=i[n])&&void 0!==t&&t.hasW2||(l[n]={payTo:null===(o=(0,d.bh)("employees_ids"))||void 0===o||null===(r=o[n])||void 0===r?void 0:r.name,netPay:(0,c.SumBalanceItm)(a[e]).toFixed(2)})}));let s=(0,d.jQ)(l);s.length>0?(0,d.eY)("export_payroll_".concat(e,"_").concat((0,d.M5)(),".csv"),s):(0,m.OpenToast)({text:"No se pudo generar el reporte",timeout:1500})})(e)};return(0,h.jsxs)("div",{className:"",children:[(0,h.jsxs)("div",{className:"accounts_header",children:[(0,h.jsx)("h2",{children:"Empleados"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"centerBx",children:(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(x,{confimr:k}),(0,t.OpenModal)(e)},style:{margin:0},children:"Agregar Empleado"})}),(0,h.jsxs)("div",{className:"_dsplFlx centerBx",children:[(0,h.jsx)("span",{className:"checklabel",children:"All"}),(0,h.jsx)(p,{initvalue:(0,d.bh)("employeeOut"),keyCode:57,updChange:e=>(async e=>{(0,d.Rz)("employeeOut",e),(0,o.Dy)(C)})(e)})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{style:{margin:"14px 10px 0px 0"},children:(0,h.jsx)(_,{init:(0,d.bh)("datePeriodRs"),label:"Exportar Periodo de Pago",updDate:e=>S(e)})})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,h.jsx)(u,{placeholder:"Buscar ....",width:360,obs:N,fetchData:e=>{F(!0),(0,o.kQ)(C)},loading:I,change:e=>{!I&&F(!0)},callempty:k,keyFlds:"searchQry"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"total_comprobante_title",children:"No de Empleados:"}),(0,h.jsx)("div",{className:"total_comprobante gray",children:(0,h.jsx)("span",{children:null===(l=(0,d._2)((0,d.bh)("employees_list")))||void 0===l?void 0:l.length})})]})]})]}),(0,h.jsx)("div",{className:"employees_container scollVh",children:(0,d.bh)("employees_list")&&(null===(a=(0,d._2)((0,d.bh)("employees_list")))||void 0===a?void 0:a.map((e=>(0,h.jsx)(b,{data:(0,d.bh)("employees_list")[e],elmId:e,handleRefreshAll:k},e))))})]})}},791:(e,l,a)=>{a.r(l),a.d(l,{SumBalanceItm:()=>j,SumBalancePS:()=>y,default:()=>_});var s=a(2791),d=(a(6794),a(2350)),i=a(2502),t=a(7689),n=a(9760),o=a(2647),r=a(1087),c=a(8779),v=(a(3588),a(1459)),m=a(1573),h=a(184);const p=(0,o.h0)(),u=(0,o.PU)(),x=(0,m.uq)(),_=e=>{var l,a,o,r,c;let{data:v,item:m}=e;const[,x]=(0,s.useState)(0);(0,s.useEffect)((()=>{}),[m]);const _=()=>{x((0,d.M5)())},j=((0,t.s0)(),e=>{(0,n.CloseModal)({id:v.modalID})}),g=e=>{if(null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){let l={...e};l.initDate=l.initDate-100,l.lastDate=l.lastDate+8638e4,(0,d.Rz)("date_range_comps",l)}(0,i.lG)(null===m||void 0===m?void 0:m.employeeId,_)};let N=(null===(l=(0,d.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)&&(0,d.sJ)(null===(a=(0,d.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)+"-"+(0,d.sJ)(null===(o=(0,d.bh)("date_range_comps"))||void 0===o?void 0:o.lastDate);return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"title_collect",children:"Movimientos de Nomina"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:()=>{var e,l;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,h.jsx)(p,{onConfirm:g,init:null===(e=(0,d.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(l=(0,d.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,isRange:!0}),(0,n.OpenModal)(a)},children:[(0,h.jsx)("div",{className:"lbl date",children:N||"Fecha"}),(0,h.jsx)(u,{name:"calendar",color:"#66666"})]})})]}),(0,h.jsx)("div",{className:" acc_dtls",style:{marginTop:10},children:(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===m||void 0===m?void 0:m.name}),(0,h.jsx)("div",{className:"name",children:null===m||void 0===m?void 0:m.unit})]})}),(0,h.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Acumulado:"}),(0,h.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===(r=y((0,d.bh)("paystub_submayor_list")))||void 0===r?void 0:r.toFixed(2)]})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,h.jsx)("div",{className:"tr_bar_5"}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Comprobante"}),(0,h.jsx)("div",{className:"tr_bar_30",children:"Documento"}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Amount"}),(0,h.jsx)("div",{className:"tr_bar_5"})]}),(0,h.jsx)("div",{className:"scollVh subMHeight",children:(0,d.bh)("paystub_submayor_list")&&(null===(c=(0,d._2)((0,d.bh)("paystub_submayor_list")))||void 0===c?void 0:c.map(((e,l)=>{let a=(0,d.bh)("paystub_submayor_list")[e];return(0,h.jsx)(b,{element:a,close:j,updObserve:_},l)})))})]})},b=e=>{var l;let{element:a,close:s,updObserve:i}=e;const t=async()=>{var e,l;let i={businessId:null===(e=(0,d.bh)("profileUser"))||void 0===e?void 0:e.businessId,year:new Date(a.date).getFullYear(),epaystubId:a.epaystubId},t={...null===(l=(0,d.bh)((0,d.hQ)()))||void 0===l?void 0:l.delete_employee_paystub};t.params=i,(async e=>{const l=(0,d.I7)(e);await l&&setTimeout((()=>{s()}),200)})(t)};let o=(null===a||void 0===a?void 0:a.comprobanteId)&&(null===(l=(0,d.bh)("cmpByPayStubMayor"))||void 0===l?void 0:l[null===a||void 0===a?void 0:a.comprobanteId]),v=o&&(0,d._2)(o).length;return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar_5",children:(0,h.jsx)("div",{className:"icon_revision",onClick:()=>{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};const l="view_paystub_employee";(0,d.Rz)(l,a),(0,d.Rz)(l+"_bck",(0,d._I)(a)),e.content=(0,h.jsx)(x,{element:a}),s(),(0,n.OpenModal)(e)},children:(0,h.jsx)(u,{name:v?"check_circle":"alert",color:v?"var(--hrm_palette-success-fg)":"var(--hrm_palette-selected-nav-text)"})})}),(0,h.jsx)("div",{className:"tr_bar_20",children:a.date&&(0,d.sJ)(a.date)}),(0,h.jsx)("div",{className:"tr_bar_20 ",children:(0,h.jsx)(r.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(null===a||void 0===a?void 0:a.comprobanteId)},children:(0,h.jsx)("div",{className:" comprobante_id",onClick:()=>s(a),children:a.comprobanteId})})}),(0,h.jsx)("div",{className:"tr_bar_30",children:v?a.document:""}),(0,h.jsxs)("div",{className:"tr_bar_20",children:["$",j(a).toFixed(2)]}),(0,h.jsx)("div",{className:"tr_bar_5",children:(0,h.jsx)("div",{className:"icon tr_bar_5",onClick:()=>{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}},l=(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"centerBx",children:(0,h.jsx)(u,{name:"alert",color:"var(--hrm_palette-selected-nav-text)"})}),(0,h.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Peligro va a eliminar un Paystub!!!"})]});e.content=(0,h.jsx)(c.Z,{label:l,labelColor:"var(--hrm_palette-selected-nav-text)",body:"debe saber que no podra recuperarlo",btnConfirm:"OK",confirm:t}),(0,n.OpenModal)(e)},children:(0,h.jsx)(u,{name:"outline_delete",color:"#c62828"})})})]})},j=e=>{let l=0,a=(0,v.jd)(null===e||void 0===e?void 0:e.hourly,null===e||void 0===e?void 0:e.payrate,null===e||void 0===e?void 0:e.lunchDuration,null===e||void 0===e?void 0:e.hasOvertime),s=a.regularPayment+a.overtimePayment,i=g(null===e||void 0===e?void 0:e.otherDeductions);return l=1*(0,d.Zv)(l,2)+1*(0,d.Zv)(s,2)+1*(0,d.Zv)(i,2),l},y=e=>{var l;let a=0;return e&&(null===(l=(0,d._2)(e))||void 0===l||l.map(((l,s)=>{let i=e[l],t=(0,v.jd)(null===i||void 0===i?void 0:i.hourly,null===i||void 0===i?void 0:i.payrate,null===i||void 0===i?void 0:i.lunchDuration,null===i||void 0===i?void 0:i.hasOvertime),n=t.regularPayment+t.overtimePayment,o=g(null===i||void 0===i?void 0:i.otherDeductions);a=1*(0,d.Zv)(a,2)+1*(0,d.Zv)(n,2)+1*(0,d.Zv)(o,2)}))),a},g=e=>{var l;let a=0;return e&&(null===(l=(0,d._2)(e))||void 0===l||l.map(((l,s)=>{let i=e[l].amount;a=1*(0,d.Zv)(a,2)+1*(0,d.Zv)(i,2)}))),a}},8779:(e,l,a)=>{a.d(l,{Z:()=>i});a(2791),a(1534);var s=a(9760),d=a(184);const i=e=>{let{data:l,confirm:a,label:i,labelColor:t,body:n,btnConfirm:o,theme:r}=e;const{modalID:c}=l,v=e=>{(0,s.CloseModal)({id:c})};let m=r||"red";return(0,d.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",minWidth:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"form_title",style:t?{color:t}:null,children:i}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,d.jsx)("span",{children:n||"Una vez eliminado no podra ser recuperado"})}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn",onClick:v,children:"Cancelar"}),(0,d.jsx)("p",{className:"group_title addBtn ".concat(m),onClick:()=>{a&&a(),v()},children:o||"Eliminar"})]})]})}},1534:()=>{}}]);
//# sourceMappingURL=4151.66149dcd.chunk.js.map