"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3496,9760],{9760:(e,l,s)=>{s.r(l),s.d(l,{CloseModal:()=>o,OpenModal:()=>r,default:()=>c});var a=s(2791),t=s(5408),i=s(2350),d=s(184);const n="listDialog_mdh392",c=()=>{const e=(0,i.bh)("listDialog")||{};(0,t.Z)(n);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,s)=>{let t=e[l];if(t&&t.visible){let e={};t.height&&(e.heigth=t.height),t.width,t.zIndex&&(e.zIndex=t.zIndex-1);let s={zIndex:t.zIndex},i=null,n=t.data;return t.content&&(i=a.cloneElement(t.content,{data:n})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:s,id:l,children:i})}),t.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(t.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},l)}}))})},r=e=>{let l=(0,i.bh)("listDialog")||{},s=(0,i.M5)();l[s]||(l[s]={}),l[s].visible=!0;let a={};e.props?(a=e.props,a.modalID=s):a.modalID=s;let t=document.getElementsByTagName("body")[0];null!==t&&void 0!==t&&t.style&&(t.style.overflowY="hidden"),l[s].isView=e.isView,l[s].observeResize=e.observeResize,l[s].observeResize&&(l[s].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(s,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[s].width&&a.height===l[s].height||(l[s].height=a.height+10,l[s].width=a.width,(0,i.Rz)("listDialog",l),(0,i.wt)(n)))}),200)),l[s].display=!0,e.zIndex&&(l[s].zIndex=e.zIndex),e.height&&(l[s].height=e.height),e.width&&(l[s].width=e.width),e.content&&(l[s].content=e.content),l[s].data=a,(0,i.Rz)("listDialog",l),(0,i.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",s),(0,i.wt)(n)}),125)},o=e=>{let l=(0,i.bh)("listDialog")||{},s=e.id;if(l[s]){var a,t,d;l[s].observeResize&&l[s].observeInterval&&clearInterval(l[s].observeInterval),l[s].display=!1,null===(a=l[s])||void 0===a||null===(t=a.data)||void 0===t||null===(d=t.closeEvent)||void 0===d||d.call(t),(0,i.Rz)("listDialog",l),delete l[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(n),setTimeout((()=>{delete l[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},3496:(e,l,s)=>{s.r(l),s.d(l,{default:()=>x});var a=s(2791),t=s(2647),i=s(2350),d=s(1087),n=s(9760),c=s(184);const r=(0,t.PU)(),o=(0,t.YZ)(),h=e=>{let{data:l,confirm:s,handleClick:t,close:d}=e;const[h,m]=(0,a.useState)(0),{modalID:x}=l,p=e=>{(0,n.CloseModal)({id:x})},v=e=>{(e&&!(0,i.bh)("modernFontReport")||!e&&(0,i.bh)("modernFontReport"))&&((0,i.Rz)("modernFontReport",e),m((0,i.M5)()))};return(0,c.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"40vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Settings"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,i.ML)()?(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,c.jsx)(o,{initvalue:(0,i.bh)("showLog"),keyCode:77,updChange:e=>{return l=e,(0,i.Rz)("showLog",l),void m((0,i.M5)());var l}}),(0,c.jsx)("span",{className:"checklabel",children:"Show Logs"})]}):null]}),(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)("span",{})}),(0,c.jsx)("div",{className:"theme_setting_box ",children:(0,c.jsx)("div",{className:"_dsplFlx spaceAround ",children:(0,c.jsxs)("div",{className:"theme_style",onClick:()=>{let e=!!!(0,i.bh)("darkTheme");const l=document.querySelector('[theme*="92357239"]');l&&(l.className=e?"light_theme palette_body App ":"dark_theme  palette_body App "),document.children[0].style.backgroundColor=e?"#f1f1f1":"#212121",(0,i.Rz)("darkTheme",e),m((0,i.M5)())},children:[(0,c.jsx)(r,{name:"theme",color:"var(--hrm_palette-general-background-b)"}),(0,c.jsx)("div",{className:"title gSansFont",children:(0,i.bh)("darkTheme")?"Dark":"Light"})]})})}),(0,c.jsxs)("div",{className:"print_setting_box ",children:[(0,c.jsx)("div",{className:"header ",children:(0,c.jsx)("span",{children:"Estilo de Impresion"})}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,c.jsxs)("div",{className:"print_style modern ".concat((0,i.bh)("modernFontReport")?"active":""),onClick:()=>v(!0),children:[(0,c.jsx)(r,{name:"check_circle"}),(0,c.jsx)("div",{className:"title",children:"Modern"}),(0,c.jsxs)("div",{className:"body",children:[(0,c.jsx)("h4",{children:"Fuente Normal"}),(0,c.jsx)("h5",{children:"Fuente Negrita"})]})]}),(0,c.jsxs)("div",{className:"print_style classic ".concat((0,i.bh)("modernFontReport")?"":"active"),onClick:()=>v(!1),children:[(0,c.jsx)(r,{name:"check_circle"}),(0,c.jsx)("div",{className:"title",children:"Classic"}),(0,c.jsxs)("div",{className:"body",children:[(0,c.jsx)("h4",{children:"Fuente Normal"}),(0,c.jsx)("h5",{children:"Fuente Negrita"})]})]})]})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:e=>{document.cookie="".concat((0,i.in)(),'=""'),document.cookie='hrm_access_tkn = ""',(0,i.Rz)("profileUser",null),(0,i.Rz)("isAdmin",null),p(),(0,i.wt)("isLogged_987")},children:"Logout"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:p,children:"Cerrar"}),(0,c.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{s(),p()},children:"Guardar"})]})]})},m=(0,t.PU)(),x=e=>{let{data:l,active:s,updTab:a}=e;const t=()=>{};return(0,c.jsx)("div",{className:"dashboard_menu",children:(0,c.jsxs)("div",{className:"dashboard_fixed",style:{margin:5,borderRight:"1px solid var(--ytcp-text-secondary);)"},children:[(0,c.jsx)("div",{className:"option_list",children:null===l||void 0===l?void 0:l.map((e=>(0,c.jsx)(d.OL,{to:{pathname:e.path},children:(0,c.jsxs)("div",{onClick:()=>null===a||void 0===a?void 0:a(e.index),className:"menu_item _dsplFlx",style:e.index===s?{"--ytcp-themed-red":"#b00000","--ytcp-text-secondary2":"#b00000","--ytcp-text-secondary":"var(--hrm_palette-blue-purple)","--ytcp-opacity_line":1,"--ytcp-general-background-z":"var(--hrm_palette-blue-purple_100)"}:{"--ytcp-text-secondary":"var(--hrm_palette-float-gray_5A)"},children:[(0,c.jsx)("div",{className:"side_mark"}),(0,c.jsx)("div",{className:"icon",children:(0,c.jsx)(m,{name:e.icon,color:e.index===s?"var(--hrm_palette-blue-purple)":"var(--hrm_palette-float-gray_5A)"})}),(0,c.jsx)("div",{className:"lbl",children:e.label})]})},e.index)))}),(0,c.jsxs)("div",{className:"version_box_fixed",children:[(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("p",{className:"email_prf",children:(0,i.bh)("profileUser").email}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"icon",style:{marginTop:7},onClick:()=>{let e=(0,i.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,i.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,c.jsx)(h,{confirm:t,item:l}),(0,n.OpenModal)(e)}},children:(0,c.jsx)(m,{name:"setting",size:20})}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"cpr_vrs",children:"@HrmFinance V23.1"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"cpr_Vseparator",children:"|"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"cpr_year",children:(0,i.bh)("date_current_year")}),(0,c.jsx)("div",{className:"flexSpace"})]})]})]})})}}}]);
//# sourceMappingURL=3496.fb6e32fc.chunk.js.map