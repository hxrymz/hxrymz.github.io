"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3342,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>r,OpenModal:()=>c,default:()=>o});var s=t(2791),a=t(5408),i=t(2350),d=t(184);const n="listDialog_mdh392",o=()=>{const e=(0,i.bh)("listDialog")||{};(0,a.Z)(n);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,t)=>{let a=e[l];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let t={zIndex:a.zIndex},i=null,n=a.data;return a.content&&(i=s.cloneElement(a.content,{data:n})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:i})}),a.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},c=e=>{let l=(0,i.bh)("listDialog")||{},t=(0,i.M5)();l[t]||(l[t]={}),l[t].visible=!0;let s={};e.props?(s=e.props,s.modalID=t):s.modalID=t;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===l[t].width&&s.height===l[t].height||(l[t].height=s.height+10,l[t].width=s.width,(0,i.Rz)("listDialog",l),(0,i.wt)(n)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=s,(0,i.Rz)("listDialog",l),(0,i.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(n)}),125)},r=e=>{let l=(0,i.bh)("listDialog")||{},t=e.id;if(l[t]){var s,a,d;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(s=l[t])||void 0===s||null===(a=s.data)||void 0===a||null===(d=a.closeEvent)||void 0===d||d.call(a),(0,i.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(n),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},7852:(e,l,t)=>{t.d(l,{Z:()=>i});t(2791),t(1534);var s=t(9760),a=t(184);const i=e=>{let{data:l,confirm:t,handleClick:i,close:d}=e;const{modalID:n}=l;return(0,a.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,a.jsxs)("div",{className:"_dsplFlx ",children:[(0,a.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,a.jsx)("div",{className:"flexSpace"})]}),(0,a.jsx)("div",{className:"_dsplFlx ",children:(0,a.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,s.CloseModal)({id:n})},children:"OK"})]})]})}},3342:(e,l,t)=>{t.r(l),t.d(l,{default:()=>x});var s=t(2791),a=t(2350),i=(t(7889),t(24)),d=t(9760),n=t(713),o=t(2647),c=t(8779),r=t(7852),h=t(184);const m=(0,o.PU)(),v=(0,i.KP)(),p=(0,i.P3)(),x=((0,o.Jo)(),e=>{var l,t;let{data:i,elmId:o,handleRefreshAll:x}=e;const[u,g]=(0,s.useState)(!1),[j,b]=(0,s.useState)(0);(0,s.useEffect)((()=>{u||(g(!0),b((0,a.M5)()))}));const f=()=>{b((0,a.M5)())},y=()=>{(0,n.ii)(f)},N=()=>{(0,n.nj)(null===i||void 0===i?void 0:i.productId,x)};(0,n.Zj)(null===(l=(0,a.bh)("sub_product_group"))||void 0===l?void 0:l[i.productId],"subProduct");return(0,h.jsx)("div",{className:"item_acc","item-product-id":"".concat(null===i||void 0===i?void 0:i.productId),children:(0,h.jsxs)("div",{className:"_dsplFlx item_box product_header",children:[(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"code",onClick:()=>{(0,a.vQ)(null===i||void 0===i?void 0:i.productCode)}}),(0,h.jsx)("div",{className:"name",onClick:async()=>{if((0,a.I0)()){(0,a.Rz)("upd_product",i),(0,a.Rz)("upd_product_bck",JSON.parse(JSON.stringify(i)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(v,{confirm:y}),(0,d.OpenModal)(e)}},children:null===i||void 0===i?void 0:i.name})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:" addSbAcc purple",onClick:()=>(e=>{let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,h.jsx)(p,{confirm:y,item:i}),(0,d.OpenModal)(l)})(),children:"Submayor"}),(0,a.I0)()?null!==(t=(0,a.Ch)()[(0,a.bh)("date_current_year")])&&void 0!==t&&t.isClosed?null:(0,h.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:()=>{let e=(0,a.bh)("lastTimeCallModal")||0;if((0,a.I0)()){if(Date.now()>e){(0,a.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,h.jsx)(c.Z,{label:"Eliminar Producto",confirm:N,item:i}),(0,d.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,h.jsx)(r.Z,{}),(0,d.OpenModal)(e)}},children:(0,h.jsx)(m,{name:"outline_delete",color:"#c62828"})}):null]})})})},8779:(e,l,t)=>{t.d(l,{Z:()=>i});t(2791),t(1534);var s=t(9760),a=t(184);const i=e=>{let{data:l,confirm:t,label:i,labelColor:d,body:n,btnConfirm:o}=e;const{modalID:c}=l,r=e=>{(0,s.CloseModal)({id:c})};return(0,a.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",minWidth:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,a.jsxs)("div",{className:"_dsplFlx ",children:[(0,a.jsx)("p",{className:"form_title",style:d?{color:d}:null,children:i}),(0,a.jsx)("div",{className:"flexSpace"})]}),(0,a.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,a.jsx)("span",{children:n||"Una vez eliminado no podra ser recuperado"})}),(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("p",{className:"group_title addBtn",onClick:r,children:"Cancelar"}),(0,a.jsx)("p",{className:"group_title addBtn red",onClick:()=>{t&&t(),r()},children:o||"Eliminar"})]})]})}},7889:()=>{},1534:()=>{}}]);
//# sourceMappingURL=3342.4cd34672.chunk.js.map