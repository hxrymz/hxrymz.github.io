"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9346,9760],{9760:(e,l,s)=>{s.r(l),s.d(l,{CloseModal:()=>c,OpenModal:()=>r,default:()=>o});var a=s(2791),i=s(5408),d=s(2350),t=s(184);const n="listDialog_mdh392",o=()=>{const e=(0,d.bh)("listDialog")||{};(0,i.Z)(n);let l=Object.keys(e);return(0,t.jsx)(t.Fragment,{children:l.map(((l,s)=>{let i=e[l];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let s={zIndex:i.zIndex},d=null,n=i.data;return i.content&&(d=a.cloneElement(i.content,{data:n})),(0,t.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,t.jsx)("div",{className:"ltr-hoe9xz",children:(0,t.jsx)("div",{className:"ltr-1wao6ny",style:s,id:l,children:d})}),i.data.overlay?(0,t.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},l)}}))})},r=e=>{let l=(0,d.bh)("listDialog")||{},s=(0,d.M5)();l[s]||(l[s]={}),l[s].visible=!0;let a={};e.props?(a=e.props,a.modalID=s):a.modalID=s;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),l[s].isView=e.isView,l[s].observeResize=e.observeResize,l[s].observeResize&&(l[s].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(s,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[s].width&&a.height===l[s].height||(l[s].height=a.height+10,l[s].width=a.width,(0,d.Rz)("listDialog",l),(0,d.wt)(n)))}),200)),l[s].display=!0,e.zIndex&&(l[s].zIndex=e.zIndex),e.height&&(l[s].height=e.height),e.width&&(l[s].width=e.width),e.content&&(l[s].content=e.content),l[s].data=a,(0,d.Rz)("listDialog",l),(0,d.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,d.Rz)("modalOpen",s),(0,d.wt)(n)}),125)},c=e=>{let l=(0,d.bh)("listDialog")||{},s=e.id;if(l[s]){var a,i,t;l[s].observeResize&&l[s].observeInterval&&clearInterval(l[s].observeInterval),l[s].display=!1,null===(a=l[s])||void 0===a||null===(i=a.data)||void 0===i||null===(t=i.closeEvent)||void 0===t||t.call(i),(0,d.Rz)("listDialog",l),delete l[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,d.wt)(n),setTimeout((()=>{delete l[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,d.Rz)("modalOpen",null)}),750)}}},7852:(e,l,s)=>{s.d(l,{Z:()=>d});s(2791),s(1534);var a=s(9760),i=s(184);const d=e=>{let{data:l,confirm:s,handleClick:d,close:t}=e;const{modalID:n}=l;return(0,i.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,i.jsxs)("div",{className:"_dsplFlx ",children:[(0,i.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,i.jsx)("div",{className:"flexSpace"})]}),(0,i.jsx)("div",{className:"_dsplFlx ",children:(0,i.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,i.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,i.jsx)("div",{className:"flexSpace"}),(0,i.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,a.CloseModal)({id:n})},children:"OK"})]})]})}},9346:(e,l,s)=>{s.r(l),s.d(l,{default:()=>u});var a=s(2791),i=(s(1534),s(2350)),d=s(713),t=s(7689),n=s(9760),o=s(7852),r=s(2647),c=s(8098),v=s(1087),h=s(184);const m=(0,r.PU)();var x="productSubMListSelected",_="inv_products_list";const u=e=>{var l,s,o,r,c,v,u,b,g,j,N,y;let{data:f,item:I}=e;const[,k]=(0,a.useState)(0);(0,a.useEffect)((()=>{(0,i.Rz)(_,null),(0,i.Rz)("inv_products_stock",null),w(),(0,d.ZW)(I.productId,w)}),[I.productId]);const w=()=>{k((0,i.M5)())},C=((0,t.s0)(),e=>{(0,n.CloseModal)({id:f.modalID})});let z=isNaN((null===(l=(0,i.bh)("inv_products_stock"))||void 0===l?void 0:l.amount)/(null===(s=(0,i.bh)("inv_products_stock"))||void 0===s?void 0:s.qty))?0:(null===(o=(0,i.bh)("inv_products_stock"))||void 0===o?void 0:o.amount)/(null===(r=(0,i.bh)("inv_products_stock"))||void 0===r?void 0:r.qty),F=isNaN(null===(c=(0,i.bh)("inv_products_stock"))||void 0===c?void 0:c.qty)?0:null===(v=(0,i.bh)("inv_products_stock"))||void 0===v?void 0:v.qty,R=(0,i.bh)(x)||{};return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,h.jsx)("div",{className:"_dsplFlx ",children:(0,h.jsx)("p",{className:"title_collect",children:"SubMayor de Producto"})}),(0,h.jsx)("div",{className:" acc_dtls subMheader",style:{marginTop:10},children:(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===I||void 0===I?void 0:I.name}),(0,h.jsx)("div",{className:"name",children:null===I||void 0===I?void 0:I.unit}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Stock:"}),(0,h.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:null===F||void 0===F?void 0:F.toFixed(2)})]}),(0,h.jsx)("div",{className:"lineV"}),(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Precio Costo:"}),(0,h.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===z||void 0===z?void 0:z.toFixed(2)]})]})]})}),(0,h.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"_dsplFlx"})]}),(0,i._2)(R).length>0?(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,h.jsx)("div",{className:"tr_bar tr_bar_5 align_itm",children:(0,h.jsx)("div",{className:"icon align_itm",onClick:()=>{let e=(0,i.bh)(x)||{};(0,i._2)(e).length<(0,i.bh)(_).length?((0,i.bh)(_).map((l=>{e[l.inventoryId]=1})),(0,i.Rz)(x,e)):(0,i.Rz)(x,{}),w()},children:(0,h.jsx)(m,{name:(null===(u=(0,i._2)(R))||void 0===u?void 0:u.length)<(null===(b=(0,i.bh)(_))||void 0===b?void 0:b.length)?"minus-circle-outline":"check_circle_outline",color:"#646cff"})})}),(0,h.jsxs)("div",{className:"tr_bar tr_bar_20 align_itm left_alg",children:[(0,i._2)(R).length," Seleccionado(s)"]}),(0,h.jsx)("div",{className:"tr_bar tr_bar_70"}),(0,h.jsx)("div",{className:"tr_bar tr_bar_5 align_itm",children:null!==(g=(0,i.Ch)()[(0,i.bh)("date_current_year")])&&void 0!==g&&g.isClosed?null:(0,h.jsx)("div",{className:"icon align_itm",onClick:()=>{(0,d.Tu)((0,i._2)(R),w)},children:(0,h.jsx)(m,{name:"outline_delete",color:"#646cff"})})})]}):(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,h.jsx)("div",{className:"tr_bar tr_bar_5",children:null!==(j=(0,i.bh)(_))&&void 0!==j&&j.length?null===(N=(0,i.bh)(_))||void 0===N?void 0:N.length:""}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Comprobante"}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,h.jsx)("div",{className:"tr_bar_20",children:"Documento"}),(0,h.jsx)("div",{className:"tr_bar_15",children:"Qty"}),(0,h.jsx)("div",{className:"tr_bar_15",children:"Precio"}),(0,h.jsx)("div",{className:"tr_bar_5"})]}),(0,h.jsx)("div",{className:"scollVh subMHeight",children:(0,i.bh)(_)&&(null===(y=(0,i.bh)(_))||void 0===y?void 0:y.map((e=>(0,h.jsx)(p,{element:e,idKey:e.inventoryId,close:C,updObs:w},e.inventoryId))))})]})},p=e=>{var l,s,a;let{element:d,idKey:t,close:r,updObs:_}=e;const u=()=>{};let p=(0,i.bh)(x)||{};return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar tr_bar_5 icon ",onClick:()=>{let e=(0,i.bh)(x)||{};e[d.inventoryId]?delete e[d.inventoryId]:e[d.inventoryId]=1,(0,i.Rz)(x,e),_()},children:(0,h.jsx)(m,{name:p[d.inventoryId]?"check_circle_outline":"radio_unchecked",color:p[d.inventoryId]?"var(--hrm_palette-blue-purple)":"var(--hrm_palette-imput-label_gray)"})}),(0,h.jsx)("div",{className:"tr_bar_20 comprobante_id",onClick:()=>r(),children:(0,h.jsx)(v.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(d.comprobanteId)},children:d.comprobanteId})}),(0,h.jsx)("div",{className:"tr_bar_20",onClick:()=>(()=>{var e,l;let s={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.upd_inventory};s.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,inventoryId:d.inventoryId},s.data2update={comprobanteId:"20231-9759"},[].push(s)})(),children:d.date&&(0,i.sJ)(d.date)}),(0,h.jsx)("div",{className:"tr_bar_20",children:d.document}),(0,h.jsx)("div",{className:"tr_bar_15",children:1*d.qty?null===(l=1*d.qty)||void 0===l?void 0:l.toFixed(2):""}),(0,h.jsx)("div",{className:"tr_bar_15",children:1*d.price?null===(s=1*d.price)||void 0===s?void 0:s.toFixed(2):""}),(0,i.I0)()?null!==(a=(0,i.Ch)()[(0,i.bh)("date_current_year")])&&void 0!==a&&a.isClosed?null:(0,h.jsx)("div",{className:"tr_bar_5",children:(0,h.jsx)("div",{className:"icon",onClick:()=>{let e=(0,i.bh)("lastTimeCallModal")||0;if((0,i.I0)()){if(Date.now()>e){(0,i.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,h.jsx)(c.Z,{confirm:u,item:d}),(0,n.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,h.jsx)(o.Z,{}),(0,n.OpenModal)(e)}},children:(0,h.jsx)(m,{name:"outline_delete",color:"#c62828"})})}):null]})}},8098:(e,l,s)=>{s.d(l,{Z:()=>d});s(2791),s(1534);var a=s(9760),i=s(184);const d=e=>{let{data:l,confirm:s,handleClick:d,close:t}=e;const{modalID:n}=l,o=e=>{(0,a.CloseModal)({id:n})};return(0,i.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,i.jsxs)("div",{className:"_dsplFlx ",children:[(0,i.jsx)("p",{className:"form_title",children:"Eliminar Registro del Inventario"}),(0,i.jsx)("div",{className:"flexSpace"})]}),(0,i.jsx)("div",{className:"_dsplFlx ",children:(0,i.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,i.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,i.jsx)("div",{className:"flexSpace"}),(0,i.jsx)("p",{className:"group_title addBtn",onClick:o,children:"Cancelar"}),(0,i.jsx)("p",{className:"group_title addBtn red",onClick:()=>{s(),o()},children:"Eliminar"})]})]})}},1534:()=>{}}]);
//# sourceMappingURL=9346.4de84cad.chunk.js.map