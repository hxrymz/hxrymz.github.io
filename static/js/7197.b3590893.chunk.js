"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7197,9760],{9760:(e,l,a)=>{a.r(l),a.d(l,{CloseModal:()=>r,OpenModal:()=>c,default:()=>o});var i=a(2791),s=a(5408),t=a(2350),d=a(184);const n="listDialog_mdh392",o=()=>{const e=(0,t.bh)("listDialog")||{};(0,s.Z)(n);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,a)=>{let s=e[l];if(s&&s.visible){let e={};s.height&&(e.heigth=s.height),s.width,s.zIndex&&(e.zIndex=s.zIndex-1);let a={zIndex:s.zIndex},t=null,n=s.data;return s.content&&(t=i.cloneElement(s.content,{data:n})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:a,id:l,children:t})}),s.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(s.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},c=e=>{let l=(0,t.bh)("listDialog")||{},a=(0,t.M5)();l[a]||(l[a]={}),l[a].visible=!0;let i={};e.props?(i=e.props,i.modalID=a):i.modalID=a;let s=document.getElementsByTagName("body")[0];null!==s&&void 0!==s&&s.style&&(s.style.overflowY="hidden"),l[a].isView=e.isView,l[a].observeResize=e.observeResize,l[a].observeResize&&(l[a].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(a,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===l[a].width&&i.height===l[a].height||(l[a].height=i.height+10,l[a].width=i.width,(0,t.Rz)("listDialog",l),(0,t.wt)(n)))}),200)),l[a].display=!0,e.zIndex&&(l[a].zIndex=e.zIndex),e.height&&(l[a].height=e.height),e.width&&(l[a].width=e.width),e.content&&(l[a].content=e.content),l[a].data=i,(0,t.Rz)("listDialog",l),(0,t.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,t.Rz)("modalOpen",a),(0,t.wt)(n)}),125)},r=e=>{let l=(0,t.bh)("listDialog")||{},a=e.id;if(l[a]){var i,s,d;l[a].observeResize&&l[a].observeInterval&&clearInterval(l[a].observeInterval),l[a].display=!1,null===(i=l[a])||void 0===i||null===(s=i.data)||void 0===s||null===(d=s.closeEvent)||void 0===d||d.call(s),(0,t.Rz)("listDialog",l),delete l[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,t.wt)(n),setTimeout((()=>{delete l[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,t.Rz)("modalOpen",null)}),750)}}},7197:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var i=a(2791),s=a(2350),t=a(2647),d=(a(4363),a(9760)),n=a(184);(0,t.YZ)();const o=(0,t.Np)(),c=(0,t.tL)(),r="new_account",v=e=>{var l,a,t,v,h,m,u,x,p;let{data:b,confirm:g}=e;const[j,y]=(0,i.useState)(!1),[N,f]=(0,i.useState)(0);(0,i.useEffect)((()=>{j||(y(!0),f((0,s.M5)()))}));const w=(e,l,a)=>{let i=(0,s.bh)(r)||{};a?(i[a]||(i[a]={}),i[a][e]=l):i[e]=l,(0,s.Rz)(r,i),f((0,s.M5)())};return(0,n.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",children:"Agregar Cuenta"}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("p",{className:"group_title addBtn",onClick:e=>{(0,s.Rz)(r,{}),f((0,s.M5)())},children:"limpiar"})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)(o,{init:null===(l=(0,s.bh)(r))||void 0===l?void 0:l.code,label:"Codigo",width:120,updChanges:e=>w("code",e)}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(c,{data:[{label:"Real",id:"real"},{label:"Nominal",id:"nominal"}],active:null===(a=(0,s.bh)(r))||void 0===a?void 0:a.clasification,updSelect:e=>w("clasification",e)}),(0,n.jsx)("div",{className:"flexSpace"})]})]}),(0,n.jsx)(o,{init:null===(t=(0,s.bh)(r))||void 0===t?void 0:t.name,label:"Nombre",width:520,updChanges:e=>w("name",e)}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(c,{data:[{label:"Deudoras",id:"debit"},{label:"Acredoras",id:"credit"}],active:null===(v=(0,s.bh)(r))||void 0===v?void 0:v.type,updSelect:e=>w("type",e)}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(c,{data:[{label:"Regular",id:null},{label:"Pago",id:"pay"},{label:"Cobro",id:"collect"}],active:(null===(h=(0,s.bh)(r))||void 0===h?void 0:h.payOrCollect)||null,updSelect:e=>w("payOrCollect",e)}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"flexSpace"}),null!==(m=(0,s.bh)(r))&&void 0!==m&&m.code&&null!==(u=(0,s.bh)(r))&&void 0!==u&&u.name&&null!==(x=(0,s.bh)(r))&&void 0!==x&&x.type&&null!==(p=(0,s.bh)(r))&&void 0!==p&&p.clasification?(0,n.jsx)("div",{className:"card",children:(0,n.jsx)("button",{onClick:async()=>{var e,l;let a=(0,s.bh)(r);a.accountId=(0,s.M5)();let i={...null===(e=(0,s.bh)((0,s.hQ)()))||void 0===e?void 0:e.add_acc};i.params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId},i.form=a;const t=(0,s.I7)(i);await t&&((0,s.Rz)(r,{}),g&&g(),(null===b||void 0===b?void 0:b.modalID)&&(0,d.CloseModal)({id:null===b||void 0===b?void 0:b.modalID}))},children:"Guardar"})}):null]})]})}}}]);
//# sourceMappingURL=7197.b3590893.chunk.js.map