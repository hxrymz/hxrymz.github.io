"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3855,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return o}});var s=t(2791),i=t(5408),r=t(2350),l=t(184),a="listDialog_mdh392",o=function(){var e=(0,r.bh)("listDialog")||{},n=((0,i.Z)(a),Object.keys(e));return(0,l.jsx)(l.Fragment,{children:n.map((function(n,t){var i=e[n];if(i&&i.visible){var r={};i.height&&(r.heigth=i.height),i.width,i.zIndex&&(r.zIndex=i.zIndex-1);var a={zIndex:i.zIndex},o=null,c=i.data;return i.content&&(o=s.cloneElement(i.content,{data:c})),(0,l.jsxs)("div",{className:"ltr-1kbnjow",style:r,children:[(0,l.jsx)("div",{className:"ltr-hoe9xz",children:(0,l.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:o})}),i.data.overlay?(0,l.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,r.bh)("listDialog")||{},t=(0,r.M5)();n[t]||(n[t]={}),n[t].visible=!0;var s={};e.props?(s=e.props).modalID=t:s.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===n[t].width&&s.height===n[t].height||(n[t].height=s.height+10,n[t].width=s.width,(0,r.Rz)("listDialog",n),(0,r.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=s,(0,r.Rz)("listDialog",n),(0,r.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,r.Rz)("modalOpen",t),(0,r.wt)(a)}),125)},d=function(e){var n,t,s,i=(0,r.bh)("listDialog")||{},l=e.id;i[l]&&(i[l].observeResize&&i[l].observeInterval&&clearInterval(i[l].observeInterval),i[l].display=!1,null===(n=i[l])||void 0===n||null===(t=n.data)||void 0===t||null===(s=t.closeEvent)||void 0===s||s.call(t),(0,r.Rz)("listDialog",i),delete i[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,r.wt)(a),setTimeout((function(){delete i[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,r.Rz)("modalOpen",null)}),750))}},7852:function(e,n,t){t(2791),t(1534);var s=t(9760),i=t(184);n.Z=function(e){var n=e.data,t=(e.confirm,e.handleClick,e.close,n.modalID);return(0,i.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,i.jsxs)("div",{className:"_dsplFlx ",children:[(0,i.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,i.jsx)("div",{className:"flexSpace"})]}),(0,i.jsx)("div",{className:"_dsplFlx ",children:(0,i.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,i.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,i.jsx)("div",{className:"flexSpace"}),(0,i.jsx)("p",{className:"group_title addBtn blue",onClick:function(){(0,s.CloseModal)({id:t})},children:"OK"})]})]})}},3855:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var s=t(9439),i=t(2791),r=(t(1534),t(2350)),l=t(713),a=t(7689),o=t(9760),c=t(7852),d=t(2647),u=t(184),v=function(e){var n=e.data,t=e.confirm,s=(e.handleClick,e.close,n.modalID),i=function(e){(0,o.CloseModal)({id:s})};return(0,u.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Eliminar Registro del Inventario"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"group_title addBtn",onClick:i,children:"Cancelar"}),(0,u.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),i()},children:"Eliminar"})]})]})},h=(0,d.PU)(),p=function(e){var n,t,c,d,v,h,p,f=e.data,x=e.item,b=(0,i.useState)(0),_=(0,s.Z)(b,2),j=(_[0],_[1]);(0,i.useEffect)((function(){(0,r.Rz)("inv_products_list",null),(0,r.Rz)("inv_products_stock",null),y(),(0,l.ZW)(x.productId,y)}),[x.productId]);var y=function(){j((0,r.M5)())},g=((0,a.s0)(),function(e){(0,o.CloseModal)({id:f.modalID})}),N=isNaN((null===(n=(0,r.bh)("inv_products_stock"))||void 0===n?void 0:n.amount)/(null===(t=(0,r.bh)("inv_products_stock"))||void 0===t?void 0:t.qty))?0:(null===(c=(0,r.bh)("inv_products_stock"))||void 0===c?void 0:c.amount)/(null===(d=(0,r.bh)("inv_products_stock"))||void 0===d?void 0:d.qty),I=isNaN(null===(v=(0,r.bh)("inv_products_stock"))||void 0===v?void 0:v.qty)?0:null===(h=(0,r.bh)("inv_products_stock"))||void 0===h?void 0:h.qty;return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("p",{className:"title_collect",children:"SubMayor de Producto"})}),(0,u.jsx)("div",{className:" acc_dtls",style:{marginTop:10},children:(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===x||void 0===x?void 0:x.name}),(0,u.jsx)("div",{className:"name",children:null===x||void 0===x?void 0:x.unit}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",children:"Stock:"}),(0,u.jsx)("div",{className:"name",style:{color:"#4c4c4c"},children:null===I||void 0===I?void 0:I.toFixed(2)})]}),(0,u.jsx)("div",{className:"lineV"}),(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",children:"Precio Costo:"}),(0,u.jsxs)("div",{className:"name",style:{color:"#4c4c4c"},children:["$",null===N||void 0===N?void 0:N.toFixed(2)]})]})]})}),(0,u.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"_dsplFlx"})]}),(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,u.jsx)("div",{className:"tr_bar_20",children:"Comprobante"}),(0,u.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,u.jsx)("div",{className:"tr_bar_20",children:"Documento"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Qty"}),(0,u.jsx)("div",{className:"tr_bar_15",children:"Precio"}),(0,u.jsx)("div",{className:"tr_bar_5"})]}),(0,u.jsx)("div",{className:"scollVh subMHeight",children:(0,r.bh)("inv_products_list")&&(null===(p=(0,r.bh)("inv_products_list"))||void 0===p?void 0:p.map((function(e){return(0,u.jsx)(m,{element:e,idKey:e.inventoryId,close:g},e.inventoryId)})))})]})},m=function(e){var n,t,s=e.element,i=e.idKey,a=e.close,d=function(){(0,l.WA)(i,a)};return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar_20 comprobante_id",children:s.comprobanteId}),(0,u.jsx)("div",{className:"tr_bar_20",children:s.date&&(0,r.sJ)(s.date)}),(0,u.jsx)("div",{className:"tr_bar_20",children:s.document}),(0,u.jsx)("div",{className:"tr_bar_15",children:1*s.qty?null===(n=1*s.qty)||void 0===n?void 0:n.toFixed(2):""}),(0,u.jsx)("div",{className:"tr_bar_15",children:1*s.price?null===(t=1*s.price)||void 0===t?void 0:t.toFixed(2):""}),(0,u.jsx)("div",{className:"tr_bar_5"}),(0,u.jsx)("div",{className:"tr_bar_5",children:(0,u.jsx)("div",{className:"icon",onClick:function(){var e=(0,r.bh)("lastTimeCallModal")||0;if((0,r.I0)()){if(Date.now()>e){(0,r.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,u.jsx)(v,{confirm:d,item:s}),(0,o.OpenModal)(n)}}else{var t={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};t.content=(0,u.jsx)(c.Z,{}),(0,o.OpenModal)(t)}},children:(0,u.jsx)(h,{name:"outline_delete",color:"#c62828"})})})]})}},713:function(e,n,t){t.d(n,{Rd:function(){return o},Ve:function(){return d},WA:function(){return h},ZW:function(){return a},Zj:function(){return u},ii:function(){return c},nj:function(){return v}});var s=t(4165),i=t(1413),r=t(5861),l=t(2350),a=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n,t){var r,a,o,c,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=(0,i.Z)({},null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.get_inventory_prod)).params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,":productId":n},c=(0,l.I7)(o),e.next=5,c;case 5:(d=e.sent)&&((0,l.Rz)("inv_products_list",u((0,l.jQ)(d.list),"name")),(0,l.Rz)("inv_products_stock",d.stock),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n,t){var r,a,o,c,d,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=(0,i.Z)({},null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.get_prod_stock)).params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:n},c=(0,l.I7)(o),e.next=5,c;case 5:(d=e.sent)&&((u=(0,i.Z)({},(0,l.bh)("products_stock")))[n]=d.stock,(0,l.Rz)("products_stock",u),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){var t,r,a,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.all_prods)).params={businessId:null===(r=(0,l.bh)("profileUser"))||void 0===r?void 0:r.businessId},o=(0,l.I7)(a),e.next=5,o;case 5:(c=e.sent)&&((0,l.Rz)("products_list",u(c,"name")),(0,l.Rz)("products_ids",(0,l.ME)((0,l.jQ)(c),"productId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){var t,r,a,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.search_prod)).params={businessId:null===(r=(0,l.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,l.bh)("searchQry")},o=(0,l.I7)(a),e.next=5,o;case 5:(c=e.sent)&&((0,l.Rz)("products_list",u((0,l.jQ)(c),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var u=function(e,n){return(0,l.MV)("sortProducts",[e],(function(){return e&&e.sort((function(e,t){var s=e[n],i=t[n];return s<i?-1:s>i?1:0}))}))},v=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n,t){var r,a,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=(0,i.Z)({},null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.delete_prod)).params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:n},c=(0,l.I7)(o),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n,t){var r,a,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=(0,i.Z)({},null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.delete_inventory)).params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,inventoryId:n},c=(0,l.I7)(o),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},1534:function(){},4942:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(9142);function i(e,n,t){return(n=(0,s.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return r}});var s=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=3855.66c651a6.chunk.js.map