"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1181,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>r,OpenModal:()=>d,default:()=>c});var a=t(2791),s=t(5408),n=t(2350),i=t(184);const o="listDialog_mdh392",c=()=>{const e=(0,n.bh)("listDialog")||{};(0,s.Z)(o);let l=Object.keys(e);return(0,i.jsx)(i.Fragment,{children:l.map(((l,t)=>{let s=e[l];if(s&&s.visible){let e={};s.height&&(e.heigth=s.height),s.width,s.zIndex&&(e.zIndex=s.zIndex-1);let t={zIndex:s.zIndex},n=null,o=s.data;return s.content&&(n=a.cloneElement(s.content,{data:o})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:n})}),s.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(s.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},d=e=>{let l=(0,n.bh)("listDialog")||{},t=(0,n.M5)();l[t]||(l[t]={}),l[t].visible=!0;let a={};e.props?(a=e.props,a.modalID=t):a.modalID=t;let s=document.getElementsByTagName("body")[0];null!==s&&void 0!==s&&s.style&&(s.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[t].width&&a.height===l[t].height||(l[t].height=a.height+10,l[t].width=a.width,(0,n.Rz)("listDialog",l),(0,n.wt)(o)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=a,(0,n.Rz)("listDialog",l),(0,n.wt)(o),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,n.Rz)("modalOpen",t),(0,n.wt)(o)}),125)},r=e=>{let l=(0,n.bh)("listDialog")||{},t=e.id;if(l[t]){var a,s,i;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(a=l[t])||void 0===a||null===(s=a.data)||void 0===s||null===(i=s.closeEvent)||void 0===i||i.call(s),(0,n.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,n.wt)(o),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,n.Rz)("modalOpen",null)}),750)}}},3585:(e,l,t)=>{t.r(l),t.d(l,{default:()=>p});var a=t(2791),s=t(2350),n=t(2647),i=t(9760),o=(t(4363),t(4206)),c=t(4050),d=t(7689),r=t(184);const h=(0,n.Vg)(),m=(0,o.yu)(),u=(0,n.tW)(),v=(0,o.vH)(),g=(0,o.G3)(),p=e=>{var l;let{}=e;const[t,n]=(0,a.useState)(!1),[o,p]=(0,a.useState)(0),[b,x]=(0,a.useState)(!1),[y,_]=(0,a.useState)(!1);(0,a.useEffect)((()=>{t||(n(!0),p((0,s.M5)()),I(),(0,c.Ht)("global_accounts","global_account_params",N),(0,c.ZX)(N))}));const j=(0,d.s0)(),w=()=>{},z=()=>{let e=(0,s.bh)("global_account_params");e&&(0,s.Rz)("global_account_params_bck",(0,s._I)(e));let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,r.jsx)(g,{}),(0,i.OpenModal)(l)},N=async(e,l)=>{p((0,s.M5)()),x(!1),_(!1)},I=()=>{(0,c.K_)(N)};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"accounts_header",children:[(0,r.jsx)("h2",{children:"Cuentas"}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,r.jsx)(m,{}),(0,i.OpenModal)(e)},children:"Agregar Cuenta"}),(0,r.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{(0,c.Ht)("global_accounts","global_account_params",z)},children:"Cuentas Globales"}),(0,r.jsx)("p",{className:"group_title addBtn purple",onClick:e=>{j({pathname:"/parameterize-balance"})},children:"Parametrizar Balances"}),y?(0,r.jsxs)("div",{className:"icon_compr _dsplFlx",style:{marginTop:10,marginRight:15},children:[(0,r.jsx)("div",{className:"lbl_saving ",children:"Calculando SubMayor ..."}),(0,r.jsx)(u,{stroke:"var(--hrm_palette-blue-purple)",size:24,strokeW:8})]}):(0,r.jsx)("div",{children:(0,r.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{_(!0),(0,c.eK)(N)},children:"Calcular SubMayor de Cuentas"})})]}),(0,r.jsx)("div",{className:"_dsplFlx ",style:{marginTop:14},children:(0,r.jsx)(h,{placeholder:"Buscar ....",width:360,obs:p,fetchData:e=>{x(!0),(0,c.Jy)(N)},loading:b,change:e=>{!b&&x(!0)},callempty:e=>{(0,c._0)(N)},keyFlds:"searchQry"})})]}),(0,r.jsx)("div",{className:"accounts_container scollVh",children:(0,s.bh)("account_list")&&(null===(l=(0,s._2)((0,s.bh)("account_list")))||void 0===l?void 0:l.map((e=>(0,r.jsx)(v,{data:(0,s.bh)("account_list")[e],elmId:e,openUpdateView:w},e))))})]})}}}]);
//# sourceMappingURL=1181.308eb851.chunk.js.map