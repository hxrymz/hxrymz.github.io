"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8361,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>h,OpenModal:()=>c,default:()=>o});var s=t(2791),a=t(5408),i=t(2350),d=t(184);const n="listDialog_mdh392",o=()=>{const e=(0,i.bh)("listDialog")||{};(0,a.Z)(n);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,t)=>{let a=e[l];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let t={zIndex:a.zIndex},i=null,n=a.data;return a.content&&(i=s.cloneElement(a.content,{data:n})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:i})}),a.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),h({id:e})}}):null]},l)}}))})},c=e=>{let l=(0,i.bh)("listDialog")||{},t=(0,i.M5)();l[t]||(l[t]={}),l[t].visible=!0;let s={};e.props?(s=e.props,s.modalID=t):s.modalID=t;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===l[t].width&&s.height===l[t].height||(l[t].height=s.height+10,l[t].width=s.width,(0,i.Rz)("listDialog",l),(0,i.wt)(n)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=s,(0,i.Rz)("listDialog",l),(0,i.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(n)}),125)},h=e=>{let l=(0,i.bh)("listDialog")||{},t=e.id;if(l[t]){var s,a,d;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(s=l[t])||void 0===s||null===(a=s.data)||void 0===a||null===(d=a.closeEvent)||void 0===d||d.call(a),(0,i.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(n),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},8361:(e,l,t)=>{t.r(l),t.d(l,{default:()=>v});var s=t(2791),a=t(2350),i=t(2647),d=(t(9760),t(7889),t(24)),n=t(713),o=t(4050),c=t(184);const h=(0,i.Vg)(),r=(0,d.vt)(),v=e=>{var l,t;let{data:i,elmId:d,updObs:v}=e;const[m,u]=(0,s.useState)(!1),[g,x]=(0,s.useState)(0),[b,y]=(0,s.useState)(0),[p,w]=(0,s.useState)(!1);(0,s.useEffect)((()=>{m||(u(!0),x((0,a.M5)()),(0,n.yk)(z),(0,o.Ht)("global_accounts","global_account_params",v))}));const j=()=>{},N=e=>{(0,n.yk)(z)},z=async(e,l)=>{x((0,a.M5)()),w(!1)};return(0,c.jsxs)("div",{className:"",children:[(0,c.jsxs)("div",{className:"accounts_header",children:[(0,c.jsx)("h2",{children:"Production Voucher"}),(0,c.jsx)("div",{className:"_dsplFlx "})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,c.jsx)(h,{placeholder:"Buscar ....",width:560,obs:x,fetchData:e=>{w(!0),(0,n.yk)(z)},loading:p,change:e=>{!p&&w(!0)},callempty:N,keyFlds:"searchVoucherQry"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{className:"total_comprobante_title",children:"No de Vouchers:"}),(0,c.jsx)("div",{className:"total_comprobante gray",children:(0,c.jsx)("span",{children:null===(l=(0,a._2)((0,a.bh)("vouchers_list")))||void 0===l?void 0:l.length})})]})]}),(0,c.jsx)("div",{className:"movements_container scollVh",children:(0,a.bh)("vouchers_list")&&(null===(t=(0,a._2)((0,a.bh)("vouchers_list")))||void 0===t?void 0:t.map((e=>(0,c.jsx)(r,{data:(0,a.bh)("vouchers_list")[e],elmId:e,openUpdateView:j,handleRefreshAll:N},e))))})]})}},7889:()=>{}}]);
//# sourceMappingURL=8361.05d49094.chunk.js.map