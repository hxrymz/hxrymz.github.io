"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2018],{2018:(e,l,a)=>{a.r(l),a.d(l,{default:()=>u});var s=a(2791),d=(a(6794),a(2350)),i=a(2502),r=a(7689),o=a(9760),t=a(2647),n=a(1087),c=a(8779),v=a(3588),m=a(184);const h=(0,t.h0)(),p=(0,t.PU)(),u=e=>{var l,a,t,n,c;let{data:v,item:u}=e;const[,x]=(0,s.useState)(0);(0,s.useEffect)((()=>{}),[u]);const j=()=>{x((0,d.M5)())},y=((0,r.s0)(),e=>{(0,o.CloseModal)({id:v.modalID})}),g=e=>{if(null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){let l={...e};l.initDate=l.initDate-100,l.lastDate=l.lastDate+8638e4,(0,d.Rz)("date_range_comps",l)}(0,i.lG)(null===u||void 0===u?void 0:u.employeeId,j)};let N=(null===(l=(0,d.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)&&(0,d.sJ)(null===(a=(0,d.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)+"-"+(0,d.sJ)(null===(t=(0,d.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate);return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"title_collect",children:"Movimientos de Nomina"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:()=>{var e,l;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,m.jsx)(h,{onConfirm:g,init:null===(e=(0,d.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(l=(0,d.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,isRange:!0}),(0,o.OpenModal)(a)},children:[(0,m.jsx)("div",{className:"lbl date",children:N||"Fecha"}),(0,m.jsx)(p,{name:"calendar",color:"#66666"})]})})]}),(0,m.jsx)("div",{className:" acc_dtls",style:{marginTop:10},children:(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===u||void 0===u?void 0:u.name}),(0,m.jsx)("div",{className:"name",children:null===u||void 0===u?void 0:u.unit})]})}),(0,m.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Acumulado:"}),(0,m.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===(n=b((0,d.bh)("paystub_submayor_group")))||void 0===n?void 0:n.toFixed(2)]})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_30",children:"Comprobante"}),(0,m.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,m.jsx)("div",{className:"tr_bar_30",children:"Documento"}),(0,m.jsx)("div",{className:"tr_bar_20",children:"Amount"})]}),(0,m.jsx)("div",{className:"scollVh subMHeight",children:(0,d.bh)("paystub_submayor_group")&&(null===(c=(0,d._2)((0,d.bh)("paystub_submayor_group")))||void 0===c?void 0:c.map(((e,l)=>{let a=(0,d.bh)("paystub_submayor_group")[e];return(0,m.jsx)(_,{element:a,close:y,updObserve:j},l)})))})]})},_=e=>{var l;let{element:a,close:s,updObserve:i}=e;const r=()=>{(0,v.WB)(a.operations,s)};return null!==a&&void 0!==a&&a.comprobanteId&&0!==(null===a||void 0===a?void 0:a.balance)?(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_30 ",children:(0,m.jsx)(n.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(null===a||void 0===a?void 0:a.comprobanteId)},children:(0,m.jsx)("div",{className:" comprobante_id",onClick:()=>s(a),children:a.comprobanteId})})}),(0,m.jsx)("div",{className:"tr_bar_20",children:a.date&&(0,d.sJ)(a.date)}),(0,m.jsx)("div",{className:"tr_bar_30",children:a.document}),(0,m.jsxs)("div",{className:"tr_bar_20",children:["$",null===(l=1*a.balance)||void 0===l?void 0:l.toFixed(2)]})]}):(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_90",children:(0,m.jsx)("div",{className:"name comprobante_id",style:{color:"var(--hrm_palette-selected-nav-text)"},children:"El registro contiene errores"})}),(0,m.jsx)("div",{className:"tr_bar_10",children:(0,m.jsx)("div",{className:"icon",onClick:()=>(()=>{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}},l=(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"centerBx",children:(0,m.jsx)(p,{name:"alert",color:"var(--hrm_palette-selected-nav-text)"})}),(0,m.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Peligro va a eliminar registros contables!!!"})]});e.content=(0,m.jsx)(c.Z,{label:l,labelColor:"var(--hrm_palette-selected-nav-text)",body:"los registros estan corruptos pero debe saber que no podra recuperarlos",btnConfirm:"OK",confirm:r}),(0,o.OpenModal)(e)})(),children:(0,m.jsx)(p,{name:"outline_delete",color:"var(--hrm_palette-selected-nav-text)"})})})]})},b=e=>{var l;let a=0;return e&&(null===(l=(0,d._2)(e))||void 0===l||l.map(((l,s)=>{let i=1*e[l].balance;a=1*(0,d.Zv)(a,2)+1*(0,d.Zv)(i,2)}))),a}},2502:(e,l,a)=>{a.d(l,{Dy:()=>d,Oy:()=>o,kQ:()=>i,lG:()=>r});var s=a(2350);const d=async e=>{var l,a;let d={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.all_employee};d.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId};const i=(0,s.I7)(d),r=await i;r&&((0,s.Rz)("employees_list",t((0,s.jQ)(r),"code")),(0,s.Rz)("employees_ids",(0,s.ME)((0,s.jQ)(r),"employeeId")),e&&e())},i=async e=>{var l,a;let d={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.search_employee};d.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,s.bh)("searchQry")};const i=(0,s.I7)(d),r=await i;r&&((0,s.Rz)("employees_list",t((0,s.jQ)(r),"code")),e&&e())},r=async(e,l)=>{var a,d,i,r;let t={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.search_employee_paystub};t.params={businessId:null===(d=(0,s.bh)("profileUser"))||void 0===d?void 0:d.businessId,year:(0,s.bh)("date_current_year"),":date1":(null===(i=(0,s.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(r=(0,s.bh)("date_range_comps"))||void 0===r?void 0:r.lastDate,":employeeId":e};const n=(0,s.I7)(t),c=await n;c&&!c.error&&((0,s.Rz)("paystub_submayor_list",c),(0,s._2)(c).map((async e=>{var l,a;o(null===(l=c[e])||void 0===l?void 0:l.comprobanteId,null===(a=c[e])||void 0===a?void 0:a.employeeId)}))),l&&l()},o=async(e,l)=>{let a="get_compById_last"+e+"_"+l,d=(0,s.bh)(a)||0;if(Date.now()>d){var i,r;(0,s.Rz)(a,Date.now()+890);let d={...null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.filter_search_opera};d.params={businessId:null===(r=(0,s.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search0":e,":search1":l};const o=(0,s.I7)(d),t=await o;if(t){let l=(0,s.bh)("cmpByPayStubMayor");return l[e]=t,(0,s.Rz)("cmpByPayStubMayor",l),t}}return null};const t=(e,l)=>(0,s.MV)("sortEmployees",[e],(()=>e&&e.sort(((e,a)=>{let s=1*e[l],d=1*a[l];return s<d?-1:s>d?1:0}))))},8779:(e,l,a)=>{a.d(l,{Z:()=>i});a(2791),a(1534);var s=a(9760),d=a(184);const i=e=>{let{data:l,confirm:a,label:i,labelColor:r,body:o,btnConfirm:t,theme:n}=e;const{modalID:c}=l,v=e=>{(0,s.CloseModal)({id:c})};let m=n||"red";return(0,d.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",minWidth:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"form_title",style:r?{color:r}:null,children:i}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,d.jsx)("span",{children:o||"Una vez eliminado no podra ser recuperado"})}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn",onClick:v,children:"Cancelar"}),(0,d.jsx)("p",{className:"group_title addBtn ".concat(m),onClick:()=>{a&&a(),v()},children:t||"Eliminar"})]})]})}},6794:()=>{},1534:()=>{}}]);
//# sourceMappingURL=2018.61379aa7.chunk.js.map