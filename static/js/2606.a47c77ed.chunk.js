"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2606],{3855:function(e,l,s){s.r(l),s.d(l,{default:function(){return x}});var i=s(9439),a=s(2791),d=(s(1534),s(2350)),c=s(713),n=s(7689),r=s(9760),o=s(7852),t=s(2647),v=s(184),m=function(e){var l=e.data,s=e.confirm,i=(e.handleClick,e.close,l.modalID),a=function(e){(0,r.CloseModal)({id:i})};return(0,v.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Eliminar Registro del Inventario"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsx)("div",{className:"_dsplFlx ",children:(0,v.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("p",{className:"group_title addBtn",onClick:a,children:"Cancelar"}),(0,v.jsx)("p",{className:"group_title addBtn red",onClick:function(){s(),a()},children:"Eliminar"})]})]})},h=(0,t.PU)(),x=function(e){var l,s,o,t,m,h,x,_=e.data,p=e.item,j=(0,a.useState)(0),N=(0,i.Z)(j,2),b=(N[0],N[1]);(0,a.useEffect)((function(){(0,d.Rz)("inv_products_list",null),(0,d.Rz)("inv_products_stock",null),f(),(0,c.ZW)(p.productId,f)}),[p.productId]);var f=function(){b((0,d.M5)())},y=((0,n.s0)(),function(e){(0,r.CloseModal)({id:_.modalID})}),g=isNaN((null===(l=(0,d.bh)("inv_products_stock"))||void 0===l?void 0:l.amount)/(null===(s=(0,d.bh)("inv_products_stock"))||void 0===s?void 0:s.qty))?0:(null===(o=(0,d.bh)("inv_products_stock"))||void 0===o?void 0:o.amount)/(null===(t=(0,d.bh)("inv_products_stock"))||void 0===t?void 0:t.qty),k=isNaN(null===(m=(0,d.bh)("inv_products_stock"))||void 0===m?void 0:m.qty)?0:null===(h=(0,d.bh)("inv_products_stock"))||void 0===h?void 0:h.qty;return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,v.jsx)("div",{className:"_dsplFlx ",children:(0,v.jsx)("p",{className:"title_collect",children:"SubMayor de Producto"})}),(0,v.jsx)("div",{className:" acc_dtls subMheader",style:{marginTop:10},children:(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===p||void 0===p?void 0:p.name}),(0,v.jsx)("div",{className:"name",children:null===p||void 0===p?void 0:p.unit}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Stock:"}),(0,v.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:null===k||void 0===k?void 0:k.toFixed(2)})]}),(0,v.jsx)("div",{className:"lineV"}),(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Precio Costo:"}),(0,v.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===g||void 0===g?void 0:g.toFixed(2)]})]})]})}),(0,v.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"_dsplFlx"})]}),(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,v.jsx)("div",{className:"tr_bar_20",children:"Comprobante"}),(0,v.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,v.jsx)("div",{className:"tr_bar_20",children:"Documento"}),(0,v.jsx)("div",{className:"tr_bar_15",children:"Qty"}),(0,v.jsx)("div",{className:"tr_bar_15",children:"Precio"}),(0,v.jsx)("div",{className:"tr_bar_5"})]}),(0,v.jsx)("div",{className:"scollVh subMHeight",children:(0,d.bh)("inv_products_list")&&(null===(x=(0,d.bh)("inv_products_list"))||void 0===x?void 0:x.map((function(e){return(0,v.jsx)(u,{element:e,idKey:e.inventoryId,close:y},e.inventoryId)})))})]})},u=function(e){var l,s,i=e.element,a=e.idKey,n=e.close,t=function(){(0,c.WA)(a,n)};return(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,v.jsx)("div",{className:"tr_bar_20 comprobante_id",children:i.comprobanteId}),(0,v.jsx)("div",{className:"tr_bar_20",children:i.date&&(0,d.sJ)(i.date)}),(0,v.jsx)("div",{className:"tr_bar_20",children:i.document}),(0,v.jsx)("div",{className:"tr_bar_15",children:1*i.qty?null===(l=1*i.qty)||void 0===l?void 0:l.toFixed(2):""}),(0,v.jsx)("div",{className:"tr_bar_15",children:1*i.price?null===(s=1*i.price)||void 0===s?void 0:s.toFixed(2):""}),(0,v.jsx)("div",{className:"tr_bar_5"}),(0,d.I0)()?(0,v.jsx)("div",{className:"tr_bar_5",children:(0,v.jsx)("div",{className:"icon",onClick:function(){var e=(0,d.bh)("lastTimeCallModal")||0;if((0,d.I0)()){if(Date.now()>e){(0,d.Rz)("lastTimeCallModal",Date.now()+320);var l={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};l.content=(0,v.jsx)(m,{confirm:t,item:i}),(0,r.OpenModal)(l)}}else{var s={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};s.content=(0,v.jsx)(o.Z,{}),(0,r.OpenModal)(s)}},children:(0,v.jsx)(h,{name:"outline_delete",color:"#c62828"})})}):null]})}}}]);
//# sourceMappingURL=2606.a47c77ed.chunk.js.map