"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3855,9760],{9760:(e,l,s)=>{s.r(l),s.d(l,{CloseModal:()=>r,OpenModal:()=>c,default:()=>n});var a=s(2791),d=s(5408),i=s(2350),t=s(184);const o="listDialog_mdh392",n=()=>{const e=(0,i.bh)("listDialog")||{};(0,d.Z)(o);let l=Object.keys(e);return(0,t.jsx)(t.Fragment,{children:l.map(((l,s)=>{let d=e[l];if(d&&d.visible){let e={};d.height&&(e.heigth=d.height),d.width,d.zIndex&&(e.zIndex=d.zIndex-1);let s={zIndex:d.zIndex},i=null,o=d.data;return d.content&&(i=a.cloneElement(d.content,{data:o})),(0,t.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,t.jsx)("div",{className:"ltr-hoe9xz",children:(0,t.jsx)("div",{className:"ltr-1wao6ny",style:s,id:l,children:i})}),d.data.overlay?(0,t.jsx)("div",{className:"DialogHRMOverlay ".concat(d.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},c=e=>{let l=(0,i.bh)("listDialog")||{},s=(0,i.M5)();l[s]||(l[s]={}),l[s].visible=!0;let a={};e.props?(a=e.props,a.modalID=s):a.modalID=s;let d=document.getElementsByTagName("body")[0];null!==d&&void 0!==d&&d.style&&(d.style.overflowY="hidden"),l[s].isView=e.isView,l[s].observeResize=e.observeResize,l[s].observeResize&&(l[s].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(s,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[s].width&&a.height===l[s].height||(l[s].height=a.height+10,l[s].width=a.width,(0,i.Rz)("listDialog",l),(0,i.wt)(o)))}),200)),l[s].display=!0,e.zIndex&&(l[s].zIndex=e.zIndex),e.height&&(l[s].height=e.height),e.width&&(l[s].width=e.width),e.content&&(l[s].content=e.content),l[s].data=a,(0,i.Rz)("listDialog",l),(0,i.wt)(o),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",s),(0,i.wt)(o)}),125)},r=e=>{let l=(0,i.bh)("listDialog")||{},s=e.id;if(l[s]){var a,d,t;l[s].observeResize&&l[s].observeInterval&&clearInterval(l[s].observeInterval),l[s].display=!1,null===(a=l[s])||void 0===a||null===(d=a.data)||void 0===d||null===(t=d.closeEvent)||void 0===t||t.call(d),(0,i.Rz)("listDialog",l),delete l[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(o),setTimeout((()=>{delete l[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},7852:(e,l,s)=>{s.d(l,{Z:()=>i});s(2791),s(1534);var a=s(9760),d=s(184);const i=e=>{let{data:l,confirm:s,handleClick:i,close:t}=e;const{modalID:o}=l;return(0,d.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"_dsplFlx ",children:(0,d.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,a.CloseModal)({id:o})},children:"OK"})]})]})}},3855:(e,l,s)=>{s.r(l),s.d(l,{default:()=>x});var a=s(2791),d=(s(1534),s(2350)),i=s(713),t=s(7689),o=s(9760),n=s(7852),c=s(2647),r=s(184);const v=e=>{let{data:l,confirm:s,handleClick:a,close:d}=e;const{modalID:i}=l,t=e=>{(0,o.CloseModal)({id:i})};return(0,r.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Eliminar Registro del Inventario"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"group_title addBtn",onClick:t,children:"Cancelar"}),(0,r.jsx)("p",{className:"group_title addBtn red",onClick:()=>{s(),t()},children:"Eliminar"})]})]})};var h=s(1087);const m=(0,c.PU)(),x=e=>{var l,s,n,c,v,h,m;let{data:x,item:u}=e;const[_,b]=(0,a.useState)(0);(0,a.useEffect)((()=>{(0,d.Rz)("inv_products_list",null),(0,d.Rz)("inv_products_stock",null),j(),(0,i.ZW)(u.productId,j)}),[u.productId]);const j=()=>{b((0,d.M5)())},g=((0,t.s0)(),e=>{(0,o.CloseModal)({id:x.modalID})});let N=isNaN((null===(l=(0,d.bh)("inv_products_stock"))||void 0===l?void 0:l.amount)/(null===(s=(0,d.bh)("inv_products_stock"))||void 0===s?void 0:s.qty))?0:(null===(n=(0,d.bh)("inv_products_stock"))||void 0===n?void 0:n.amount)/(null===(c=(0,d.bh)("inv_products_stock"))||void 0===c?void 0:c.qty),y=isNaN(null===(v=(0,d.bh)("inv_products_stock"))||void 0===v?void 0:v.qty)?0:null===(h=(0,d.bh)("inv_products_stock"))||void 0===h?void 0:h.qty;return(0,r.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("p",{className:"title_collect",children:"SubMayor de Producto"})}),(0,r.jsx)("div",{className:" acc_dtls subMheader",style:{marginTop:10},children:(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===u||void 0===u?void 0:u.name}),(0,r.jsx)("div",{className:"name",children:null===u||void 0===u?void 0:u.unit}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Stock:"}),(0,r.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:null===y||void 0===y?void 0:y.toFixed(2)})]}),(0,r.jsx)("div",{className:"lineV"}),(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Precio Costo:"}),(0,r.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===N||void 0===N?void 0:N.toFixed(2)]})]})]})}),(0,r.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"_dsplFlx"})]}),(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,r.jsx)("div",{className:"tr_bar_20",children:"Comprobante"}),(0,r.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,r.jsx)("div",{className:"tr_bar_20",children:"Documento"}),(0,r.jsx)("div",{className:"tr_bar_15",children:"Qty"}),(0,r.jsx)("div",{className:"tr_bar_15",children:"Precio"}),(0,r.jsx)("div",{className:"tr_bar_5"})]}),(0,r.jsx)("div",{className:"scollVh subMHeight",children:(0,d.bh)("inv_products_list")&&(null===(m=(0,d.bh)("inv_products_list"))||void 0===m?void 0:m.map((e=>(0,r.jsx)(p,{element:e,idKey:e.inventoryId,close:g},e.inventoryId))))})]})},p=e=>{var l,s;let{element:a,idKey:t,close:c}=e;const x=()=>{(0,i.WA)(t,c)};return(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,r.jsx)("div",{className:"tr_bar_20 comprobante_id",onClick:()=>c(),children:(0,r.jsx)(h.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(a.comprobanteId)},children:a.comprobanteId})}),(0,r.jsx)("div",{className:"tr_bar_20",onClick:()=>(()=>{var e,l;let s={...null===(e=(0,d.bh)((0,d.hQ)()))||void 0===e?void 0:e.upd_inventory};s.params={businessId:null===(l=(0,d.bh)("profileUser"))||void 0===l?void 0:l.businessId,inventoryId:a.inventoryId},s.data2update={comprobanteId:"20231-9759"},[].push(s)})(),children:a.date&&(0,d.sJ)(a.date)}),(0,r.jsx)("div",{className:"tr_bar_20",children:a.document}),(0,r.jsx)("div",{className:"tr_bar_15",children:1*a.qty?null===(l=1*a.qty)||void 0===l?void 0:l.toFixed(2):""}),(0,r.jsx)("div",{className:"tr_bar_15",children:1*a.price?null===(s=1*a.price)||void 0===s?void 0:s.toFixed(2):""}),(0,r.jsx)("div",{className:"tr_bar_5"}),(0,d.I0)()?(0,r.jsx)("div",{className:"tr_bar_5",children:(0,r.jsx)("div",{className:"icon",onClick:()=>{let e=(0,d.bh)("lastTimeCallModal")||0;if((0,d.I0)()){if(Date.now()>e){(0,d.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,r.jsx)(v,{confirm:x,item:a}),(0,o.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,r.jsx)(n.Z,{}),(0,o.OpenModal)(e)}},children:(0,r.jsx)(m,{name:"outline_delete",color:"#c62828"})})}):null]})}},1534:()=>{}}]);
//# sourceMappingURL=3855.ffb2699e.chunk.js.map