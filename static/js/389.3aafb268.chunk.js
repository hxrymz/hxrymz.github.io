"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[389],{4481:(e,s,a)=>{a.d(s,{Q:()=>m,Z:()=>h});var l=a(2791),i=(a(3513),a(9760)),d=a(2647),c=a(2350),n=a(184);const r=(0,d.PU)(),t=(0,d.YZ)(),o=(0,d.A5)(),h=e=>{let{data:s,confirm:a,handleClick:d,close:h}=e;const[,p]=(0,l.useState)(0),{modalID:x}=s,v=e=>{(0,i.CloseModal)({id:x})},u=e=>{(e&&!(0,c.bh)("modernFontReport")||!e&&(0,c.bh)("modernFontReport"))&&((0,c.Rz)("modernFontReport",e),p((0,c.M5)()))},_=async e=>{var s;let a=null===(s=(0,c.bh)((0,c.hQ)()))||void 0===s?void 0:s.add_hrm_years;if(e&&a){var l;a.params={businessId:null===(l=(0,c.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:e};const s=(0,c.I7)(a);await s&&m()}};return(0,n.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"40vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",children:"Settings"}),(0,n.jsx)("div",{className:"flexSpace"}),(0,c.ML)()?(0,n.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,n.jsx)(t,{initvalue:(0,c.bh)("showLog"),keyCode:77,updChange:e=>{return s=e,(0,c.Rz)("showLog",s),void p((0,c.M5)());var s}}),(0,n.jsx)("span",{className:"checklabel",children:"Show Logs"})]}):null]}),(0,n.jsx)("div",{className:"_dsplFlx ",children:(0,n.jsx)("span",{})}),(0,n.jsx)("div",{className:"theme_setting_box ",children:(0,n.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,n.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,n.jsx)(o,{init:(0,c.bh)("date_current_year"),lbl_empty:"Location",list:[{id:2022,label:2022},{id:2023,label:2023},{id:2024,label:2024}],onSelect:e=>(e=>{var s,a,l;(0,c.Rz)("date_current_year",e);let i=new Date("01/01/"+e).getTime(),d=new Date("01/01/"+(e+1)).getTime()-10;(0,c.Rz)("date_range_comps",{initDate:i,lastDate:d}),(0,c.Rz)("date_range_submayor",{initDate:i,lastDate:d}),console.log(null===(s=(0,c.bh)("YearAccBussines"))||void 0===s?void 0:s[e]),null!==(a=(0,c.bh)("YearAccBussines"))&&void 0!==a&&null!==(l=a[e])&&void 0!==l&&l.businessYearId||_(e),p((0,c.M5)()),(0,c.wt)("isLogged_987")})(e.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"220px"})}),(0,n.jsxs)("div",{className:"theme_style",onClick:()=>{let e=!!!(0,c.bh)("darkTheme");const s=document.querySelector('[theme*="92357239"]');s&&(s.className=e?"light_theme palette_body App ":"dark_theme  palette_body App "),document.children[0].style.backgroundColor=e?"#f1f1f1":"#212121",(0,c.Rz)("darkTheme",e),p((0,c.M5)())},children:[(0,n.jsx)(r,{name:"theme",color:"var(--hrm_palette-general-background-b)"}),(0,n.jsx)("div",{className:"title gSansFont",children:(0,c.bh)("darkTheme")?"Dark":"Light"})]})]})}),(0,n.jsxs)("div",{className:"print_setting_box ",children:[(0,n.jsx)("div",{className:"header ",children:(0,n.jsx)("span",{children:"Estilo de Impresion"})}),(0,n.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,n.jsxs)("div",{className:"print_style modern ".concat((0,c.bh)("modernFontReport")?"active":""),onClick:()=>u(!0),children:[(0,n.jsx)(r,{name:"check_circle"}),(0,n.jsx)("div",{className:"title",children:"Modern"}),(0,n.jsxs)("div",{className:"body",children:[(0,n.jsx)("h4",{children:"Fuente Normal"}),(0,n.jsx)("h5",{children:"Fuente Negrita"})]})]}),(0,n.jsxs)("div",{className:"print_style classic ".concat((0,c.bh)("modernFontReport")?"":"active"),onClick:()=>u(!1),children:[(0,n.jsx)(r,{name:"check_circle"}),(0,n.jsx)("div",{className:"title",children:"Classic"}),(0,n.jsxs)("div",{className:"body",children:[(0,n.jsx)("h4",{children:"Fuente Normal"}),(0,n.jsx)("h5",{children:"Fuente Negrita"})]})]})]})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("p",{className:"group_title addBtn",onClick:e=>{document.cookie="".concat((0,c.in)(),'=""'),document.cookie='hrm_access_tkn = ""',document.cookie='F2Atkn = ""',(0,c.Rz)("profileUser",null),(0,c.Rz)("isAdmin",null),v(),(0,c.wt)("isLogged_987")},children:"Logout"}),(0,n.jsx)("p",{className:"group_title addBtn",onClick:v,children:"Cerrar"}),(0,n.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{a(),v()},children:"Guardar"})]})]})},m=async()=>{var e;let s=null===(e=(0,c.bh)((0,c.hQ)()))||void 0===e?void 0:e.get_hrm_years;if(s){var a;s.params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId};const e=(0,c.I7)(s),l=await e;l&&((0,c.Rz)("YearAccBussines",l),(0,c.wt)("isLogged_987"))}}},389:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});a(2791),a(3513);var l=a(2647),i=a(2350),d=a(1087),c=a(9760),n=a(4481),r=a(184);const t=(0,l.PU)(),o=e=>{let{data:s,active:a,updTab:l}=e;const o=()=>{};return(0,r.jsx)("div",{className:"dashboard_menu",children:(0,r.jsxs)("div",{className:"dashboard_fixed",style:{margin:5,borderRight:"1px solid var(--ytcp-text-secondary);)"},children:[(0,r.jsx)("div",{className:"option_list",children:null===s||void 0===s?void 0:s.map((e=>(0,r.jsx)(d.OL,{to:{pathname:e.path},children:(0,r.jsxs)("div",{onClick:()=>null===l||void 0===l?void 0:l(e.index),className:"menu_item _dsplFlx",style:e.index===a?{"--ytcp-themed-red":"#b00000","--ytcp-text-secondary2":"#b00000","--ytcp-text-secondary":"var(--hrm_palette-blue-purple)","--ytcp-opacity_line":1,"--ytcp-general-background-z":"var(--hrm_palette-blue-purple_100)"}:{"--ytcp-text-secondary":"var(--hrm_palette-float-gray_5A)"},children:[(0,r.jsx)("div",{className:"side_mark"}),(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)(t,{name:e.icon,color:e.index===a?"var(--hrm_palette-blue-purple)":"var(--hrm_palette-float-gray_5A)"})}),(0,r.jsx)("div",{className:"lbl",children:e.label})]})},e.index)))}),(0,r.jsxs)("div",{className:"version_box_fixed",children:[(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("p",{className:"email_prf",children:(0,i.bh)("profileUser").email}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"icon",style:{marginTop:7},onClick:()=>{let e=(0,i.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,i.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,r.jsx)(n.Z,{confirm:o,item:s}),(0,c.OpenModal)(e)}},children:(0,r.jsx)(t,{name:"setting",size:20})}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"cpr_vrs",children:"@HrmFinance V24.1"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"cpr_Vseparator",children:"|"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"cpr_year",children:(0,i.bh)("date_current_year")}),(0,r.jsx)("div",{className:"flexSpace"})]})]})]})})}},3513:()=>{}}]);
//# sourceMappingURL=389.3aafb268.chunk.js.map