"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5919,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>r,OpenModal:()=>c,default:()=>o});var i=t(2791),a=t(5408),s=t(2350),d=t(184);const n="listDialog_mdh392",o=()=>{const e=(0,s.bh)("listDialog")||{};(0,a.Z)(n);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,t)=>{let a=e[l];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let t={zIndex:a.zIndex},s=null,n=a.data;return a.content&&(s=i.cloneElement(a.content,{data:n})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:s})}),a.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},c=e=>{let l=(0,s.bh)("listDialog")||{},t=(0,s.M5)();l[t]||(l[t]={}),l[t].visible=!0;let i={};e.props?(i=e.props,i.modalID=t):i.modalID=t;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===l[t].width&&i.height===l[t].height||(l[t].height=i.height+10,l[t].width=i.width,(0,s.Rz)("listDialog",l),(0,s.wt)(n)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=i,(0,s.Rz)("listDialog",l),(0,s.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,s.Rz)("modalOpen",t),(0,s.wt)(n)}),125)},r=e=>{let l=(0,s.bh)("listDialog")||{},t=e.id;if(l[t]){var i,a,d;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(i=l[t])||void 0===i||null===(a=i.data)||void 0===a||null===(d=a.closeEvent)||void 0===d||d.call(a),(0,s.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,s.wt)(n),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,s.Rz)("modalOpen",null)}),750)}}},5919:(e,l,t)=>{t.r(l),t.d(l,{default:()=>v});var i=t(2791),a=t(2350),s=t(2647),d=(t(5196),t(9760)),n=t(184);const o=(0,s.Np)(),c=(0,s.tL)(),r=(0,s.A5)(),h="upd_fromMobile",v=e=>{var l,t,s,v,m,p;let{data:u,confirm:b}=e;const[x,g]=(0,i.useState)(!1),[y,I]=(0,i.useState)(0);(0,i.useEffect)((()=>{x||(g(!0),I((0,a.M5)()))}));const w=(e,l,t)=>{let i=(0,a.bh)(h)||{};t?(i[t]||(i[t]={}),i[t][e]=l):i[e]=l,(0,a.Rz)(h,i),I((0,a.M5)())};let j=["type","title","description","amount","categoryId","comprobanteId"];let f=(0,a.vy)(j,(0,a.bh)(h),(0,a.bh)(h+"_bck"));return(0,n.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 25px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",children:"Actualizar Movimiento"}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsx)(o,{init:null===(l=(0,a.bh)(h))||void 0===l?void 0:l.title,label:"Nombre",width:520,updChanges:e=>w("title",e)}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,n.jsx)(o,{init:null===(t=(0,a.bh)(h))||void 0===t?void 0:t.amount,label:"Importe",width:120,type:"number",updChanges:e=>w("amount",e)})}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("div",{style:{marginTop:9},children:(0,n.jsx)(r,{init:null===(s=(0,a.bh)(h))||void 0===s?void 0:s.categoryId,lbl_empty:"Categorias",list:(0,a.bh)("categories_pick_data"),onSelect:e=>w("categoryId",e),direction:"right"})})]}),(0,n.jsx)(o,{init:null===(v=(0,a.bh)(h))||void 0===v?void 0:v.description,label:"Descripcion",width:520,updChanges:e=>w("description",e)}),(0,n.jsx)(o,{init:null===(m=(0,a.bh)(h))||void 0===m?void 0:m.comprobanteId,label:"comprobanteId",width:520,updChanges:e=>w("comprobanteId",e)}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)(c,{data:[{label:"Incomes",id:"income"},{label:"Expenses",id:"expense"}],active:null===(p=(0,a.bh)(h))||void 0===p?void 0:p.movementType,updSelect:e=>w("movementType",e)}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsx)("div",{style:{paddingTop:"38px"}}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"flexSpace"}),null!==f&&void 0!==f&&f.hasChange?(0,n.jsx)("div",{className:"card",children:(0,n.jsx)("button",{onClick:async()=>{var e,l;let t=(0,a.bh)(h),i=(0,a.vy)(j,(0,a.bh)(h),(0,a.bh)(h+"_bck")),s={...null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.upd__incms_expns};s.params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,movementId:t.movementId,year:(0,a.bh)("date_current_year")},s.data2update=i.data;const n=(0,a.I7)(s);await n&&((0,a.Rz)(h,{}),(0,a.Rz)(h+"_bck",{}),b&&b(),(null===u||void 0===u?void 0:u.modalID)&&(0,d.CloseModal)({id:null===u||void 0===u?void 0:u.modalID}))},children:"Actualizar"})}):null]})]})}},5196:()=>{}}]);
//# sourceMappingURL=5919.4aa64f2e.chunk.js.map