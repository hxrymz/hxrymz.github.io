"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9559,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>r,OpenModal:()=>c,default:()=>o});var s=t(2791),a=t(5408),i=t(2350),d=t(184);const n="listDialog_mdh392",o=()=>{const e=(0,i.bh)("listDialog")||{};(0,a.Z)(n);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,t)=>{let a=e[l];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let t={zIndex:a.zIndex},i=null,n=a.data;return a.content&&(i=s.cloneElement(a.content,{data:n})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:i})}),a.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},c=e=>{let l=(0,i.bh)("listDialog")||{},t=(0,i.M5)();l[t]||(l[t]={}),l[t].visible=!0;let s={};e.props?(s=e.props,s.modalID=t):s.modalID=t;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===l[t].width&&s.height===l[t].height||(l[t].height=s.height+10,l[t].width=s.width,(0,i.Rz)("listDialog",l),(0,i.wt)(n)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=s,(0,i.Rz)("listDialog",l),(0,i.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(n)}),125)},r=e=>{let l=(0,i.bh)("listDialog")||{},t=e.id;if(l[t]){var s,a,d;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(s=l[t])||void 0===s||null===(a=s.data)||void 0===a||null===(d=a.closeEvent)||void 0===d||d.call(a),(0,i.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(n),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},9559:(e,l,t)=>{t.r(l),t.d(l,{default:()=>v});var s=t(2791),a=t(2350),i=t(2647),d=(t(2052),t(9760)),n=t(9661),o=t(184);(0,i.YZ)();const c=(0,i.Np)(),r=(0,i.tL)(),h=(0,n.a)(),u="upd_provider",v=e=>{var l,t,i,n,v,m,b,p,x;let{data:g,confirm:y}=e;const[j,w]=(0,s.useState)(!1),[N,z]=(0,s.useState)(0);(0,s.useEffect)((()=>{j||(w(!0),z((0,a.M5)()))}));const f=(e,l,t)=>{let s=(0,a.bh)(u)||{};t?(s[t]||(s[t]={}),s[t][e]=l):s[e]=l,(0,a.Rz)(u,s),z((0,a.M5)())};let I=["type","name","description","account","subAccount"];let _=(0,a.vy)(I,(0,a.bh)(u),(0,a.bh)(u+"_bck"));return(0,o.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 25px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",children:"Actualizar Provedor o Cliente"}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)(c,{init:null===(l=(0,a.bh)(u))||void 0===l?void 0:l.name,label:"Nombre",width:520,updChanges:e=>f("name",e)}),(0,o.jsx)("div",{className:"extra_container",children:null!==(t=(0,a.bh)(u))&&void 0!==t&&t.account?(0,o.jsxs)("div",{className:"",children:[(0,o.jsxs)("div",{className:"_dsplFlx",children:[(0,o.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:()=>((e,l)=>{let t=(0,a.bh)(u)||{};t.account=null,t.subAccount=null,(0,a.Rz)(u,t),z((0,a.M5)())})(),children:"Cuenta:"}),(0,o.jsx)("div",{className:"employee_name",children:null===(i=(0,a.bh)("account_ids"))||void 0===i||null===(n=i[(0,a.bh)(u).account])||void 0===n?void 0:n.name})]}),null!==(v=(0,a.bh)(u))&&void 0!==v&&v.subAccount?(0,o.jsxs)("div",{className:"_dsplFlx",children:[(0,o.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},children:"SubCuenta:"}),(0,o.jsx)("div",{className:"employee_name",children:null===(m=(0,a.bh)("sub_account_ids"))||void 0===m||null===(b=m[(0,a.bh)(u).subAccount])||void 0===b?void 0:b.subAccountName})]}):null]}):(0,o.jsx)(h,{placeholder:"buscar una cuenta",width:420,handleClick:(e,l)=>{let t=(0,a.bh)(u)||{};t.account=e,t.subAccount=l,(0,a.Rz)(u,t),z((0,a.M5)())}})}),(0,o.jsx)(c,{init:null===(p=(0,a.bh)(u))||void 0===p?void 0:p.description,label:"Descripcion",width:520,updChanges:e=>f("description",e)}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)(r,{data:[{label:"Provedor",id:"provider"},{label:"Cliente",id:"customer"}],active:null===(x=(0,a.bh)(u))||void 0===x?void 0:x.type,updSelect:e=>f("type",e)}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("div",{className:"flexSpace"}),null!==_&&void 0!==_&&_.hasChange?(0,o.jsx)("div",{className:"card",children:(0,o.jsx)("button",{onClick:async()=>{var e,l;let t=(0,a.bh)(u),s=(0,a.vy)(I,(0,a.bh)(u),(0,a.bh)(u+"_bck")),i={...null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.upd_prov_cust};i.params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,providerId:t.providerId},i.data2update=s.data;const n=(0,a.I7)(i);await n&&((0,a.Rz)(u,{}),(0,a.Rz)(u+"_bck",{}),y&&y(),(null===g||void 0===g?void 0:g.modalID)&&(0,d.CloseModal)({id:null===g||void 0===g?void 0:g.modalID}))},children:"Actualizar"})}):null]})]})}},2052:()=>{}}]);
//# sourceMappingURL=9559.125f3589.chunk.js.map