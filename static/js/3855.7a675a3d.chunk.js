"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3855,9760],{9760:function(e,l,i){i.r(l),i.d(l,{CloseModal:function(){return c},OpenModal:function(){return r},default:function(){return o}});var s=i(2791),t=i(5408),n=i(2350),a=i(184),d="listDialog_mdh392",o=function(){var e=(0,n.bh)("listDialog")||{},l=((0,t.Z)(d),Object.keys(e));return(0,a.jsx)(a.Fragment,{children:l.map((function(l,i){var t=e[l];if(t&&t.visible){var n={};t.height&&(n.heigth=t.height),t.width,t.zIndex&&(n.zIndex=t.zIndex-1);var d={zIndex:t.zIndex},o=null,r=t.data;return t.content&&(o=s.cloneElement(t.content,{data:r})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:n,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:d,id:l,children:o})}),t.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(t.visible?"active":""),onClick:function(){var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},l)}}))})},r=function(e){var l=(0,n.bh)("listDialog")||{},i=(0,n.M5)();l[i]||(l[i]={}),l[i].visible=!0;var s={};e.props?(s=e.props).modalID=i:s.modalID=i;var t=document.getElementsByTagName("body")[0];null!==t&&void 0!==t&&t.style&&(t.style.overflowY="hidden"),l[i].isView=e.isView,l[i].observeResize=e.observeResize,l[i].observeResize&&(l[i].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(i,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===l[i].width&&s.height===l[i].height||(l[i].height=s.height+10,l[i].width=s.width,(0,n.Rz)("listDialog",l),(0,n.wt)(d)))}),200)),l[i].display=!0,e.zIndex&&(l[i].zIndex=e.zIndex),e.height&&(l[i].height=e.height),e.width&&(l[i].width=e.width),e.content&&(l[i].content=e.content),l[i].data=s,(0,n.Rz)("listDialog",l),(0,n.wt)(d),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,n.Rz)("modalOpen",i),(0,n.wt)(d)}),125)},c=function(e){var l,i,s,t=(0,n.bh)("listDialog")||{},a=e.id;t[a]&&(t[a].observeResize&&t[a].observeInterval&&clearInterval(t[a].observeInterval),t[a].display=!1,null===(l=t[a])||void 0===l||null===(i=l.data)||void 0===i||null===(s=i.closeEvent)||void 0===s||s.call(i),(0,n.Rz)("listDialog",t),delete t[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,n.wt)(d),setTimeout((function(){delete t[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,n.Rz)("modalOpen",null)}),750))}},7852:function(e,l,i){i(2791),i(1534);var s=i(9760),t=i(184);l.Z=function(e){var l=e.data,i=(e.confirm,e.handleClick,e.close,l.modalID);return(0,t.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,t.jsx)("div",{className:"flexSpace"})]}),(0,t.jsx)("div",{className:"_dsplFlx ",children:(0,t.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("p",{className:"group_title addBtn blue",onClick:function(){(0,s.CloseModal)({id:i})},children:"OK"})]})]})}},3855:function(e,l,i){i.r(l),i.d(l,{default:function(){return x}});var s=i(1413),t=(i(4165),i(5861),i(9439)),n=i(2791),a=(i(1534),i(2350)),d=i(713),o=i(7689),r=i(9760),c=i(7852),v=i(2647),u=i(184),h=function(e){var l=e.data,i=e.confirm,s=(e.handleClick,e.close,l.modalID),t=function(e){(0,r.CloseModal)({id:s})};return(0,u.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Eliminar Registro del Inventario"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"group_title addBtn",onClick:t,children:"Cancelar"}),(0,u.jsx)("p",{className:"group_title addBtn red",onClick:function(){i(),t()},children:"Eliminar"})]})]})},m=i(1087),p=(0,v.PU)(),x=function(e){var l,i,s,c,v,h,m,p=e.data,x=e.item,_=(0,n.useState)(0),b=(0,t.Z)(_,2),j=(b[0],b[1]);(0,n.useEffect)((function(){(0,a.Rz)("inv_products_list",null),(0,a.Rz)("inv_products_stock",null),g(),(0,d.ZW)(x.productId,g)}),[x.productId]);var g=function(){j((0,a.M5)())},y=((0,o.s0)(),function(e){(0,r.CloseModal)({id:p.modalID})}),N=isNaN((null===(l=(0,a.bh)("inv_products_stock"))||void 0===l?void 0:l.amount)/(null===(i=(0,a.bh)("inv_products_stock"))||void 0===i?void 0:i.qty))?0:(null===(s=(0,a.bh)("inv_products_stock"))||void 0===s?void 0:s.amount)/(null===(c=(0,a.bh)("inv_products_stock"))||void 0===c?void 0:c.qty),w=isNaN(null===(v=(0,a.bh)("inv_products_stock"))||void 0===v?void 0:v.qty)?0:null===(h=(0,a.bh)("inv_products_stock"))||void 0===h?void 0:h.qty;return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("p",{className:"title_collect",children:"SubMayor de Producto"})}),(0,u.jsx)("div",{className:" acc_dtls subMheader",style:{marginTop:10},children:(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===x||void 0===x?void 0:x.name}),(0,u.jsx)("div",{className:"name",children:null===x||void 0===x?void 0:x.unit}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Stock:"}),(0,u.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:null===w||void 0===w?void 0:w.toFixed(2)})]}),(0,u.jsx)("div",{className:"lineV"}),(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Precio Costo:"}),(0,u.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===N||void 0===N?void 0:N.toFixed(2)]})]})]})}),(0,u.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"_dsplFlx"})]}),(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,u.jsx)("div",{className:"tr_bar_20",children:"Comprobante"}),(0,u.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,u.jsx)("div",{className:"tr_bar_20",children:"Documento"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Qty"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Precio"}),(0,u.jsx)("div",{className:"tr_bar_5"})]}),(0,u.jsx)("div",{className:"scollVh subMHeight",children:(0,a.bh)("inv_products_list")&&(null===(m=(0,a.bh)("inv_products_list"))||void 0===m?void 0:m.map((function(e){return(0,u.jsx)(f,{element:e,idKey:e.inventoryId,close:y},e.inventoryId)})))})]})},f=function(e){var l,i,t=e.element,n=e.idKey,o=e.close,v=function(){(0,d.WA)(n,o)};return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar_20 comprobante_id",onClick:function(){return o()},children:(0,u.jsx)(m.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(t.comprobanteId)},children:t.comprobanteId})}),(0,u.jsx)("div",{className:"tr_bar_20",onClick:function(){return function(){var e,l,i=(0,s.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.upd_inventory);i.params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,inventoryId:t.inventoryId},i.data2update={comprobanteId:"20231-9759"},[].push(i)}()},children:t.date&&(0,a.sJ)(t.date)}),(0,u.jsx)("div",{className:"tr_bar_20",children:t.document}),(0,u.jsx)("div",{className:"tr_bar_15",children:1*t.qty?null===(l=1*t.qty)||void 0===l?void 0:l.toFixed(2):""}),(0,u.jsx)("div",{className:"tr_bar_15",children:1*t.price?null===(i=1*t.price)||void 0===i?void 0:i.toFixed(2):""}),(0,u.jsx)("div",{className:"tr_bar_5"}),(0,a.I0)()?(0,u.jsx)("div",{className:"tr_bar_5",children:(0,u.jsx)("div",{className:"icon",onClick:function(){var e=(0,a.bh)("lastTimeCallModal")||0;if((0,a.I0)()){if(Date.now()>e){(0,a.Rz)("lastTimeCallModal",Date.now()+320);var l={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};l.content=(0,u.jsx)(h,{confirm:v,item:t}),(0,r.OpenModal)(l)}}else{var i={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};i.content=(0,u.jsx)(c.Z,{}),(0,r.OpenModal)(i)}},children:(0,u.jsx)(p,{name:"outline_delete",color:"#c62828"})})}):null]})}},1534:function(){},1413:function(e,l,i){i.d(l,{Z:function(){return n}});var s=i(4942);function t(e,l){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);l&&(s=s.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),i.push.apply(i,s)}return i}function n(e){for(var l=1;l<arguments.length;l++){var i=null!=arguments[l]?arguments[l]:{};l%2?t(Object(i),!0).forEach((function(l){(0,s.Z)(e,l,i[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(i,l))}))}return e}}}]);
//# sourceMappingURL=3855.7a675a3d.chunk.js.map