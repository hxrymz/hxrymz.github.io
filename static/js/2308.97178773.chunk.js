"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2308],{62:function(e,n,l){l.r(n),l.d(n,{default:function(){return C}});var s=l(1413),i=l(4165),c=l(5861),t=l(9439),a=l(2791),r=l(2350),d=l(2647),o=l(9760),u=(l(7889),l(24)),p=l(713),h=l(4050),x=(l(1534),l(184)),v=(0,d.Jo)(),m=(0,d.PU)(),f=function(e){var n=e.data,l=e.confirm,s=(e.label,e.item),i=n.modalID,c=(0,a.useState)(1),r=(0,t.Z)(c,2),d=r[0],u=r[1],p=function(e){(0,o.CloseModal)({id:i})};return(0,x.jsxs)("div",{style:{maxHeight:"60vh",minHeight:"28vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"code_prod_header",children:null===s||void 0===s?void 0:s.productCode}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("p",{className:"lbl_prod_header",children:null===s||void 0===s?void 0:s.name})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{padding:9},children:[(0,x.jsx)("div",{children:(0,x.jsx)(v,{src:null===s||void 0===s?void 0:s.imageUrl,width:150,fontSize:[12,16]})}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:"_dsplFlx btns_control_2cart",children:[d-1>0?(0,x.jsx)("div",{className:"iconFlx ",children:(0,x.jsx)("div",{onClick:function(){d-1>=0&&u((function(e){return e-1}))},children:(0,x.jsx)(m,{name:"minus",color:"#80868b",size:48})})}):(0,x.jsx)("div",{className:"iconFlx ",children:(0,x.jsx)("div",{style:{width:52}})}),(0,x.jsx)("div",{className:"iconFlx lbl_prod_amount",children:d}),(0,x.jsx)("div",{className:"iconFlx",children:(0,x.jsx)("div",{onClick:function(){u((function(e){return e+1}))},children:(0,x.jsx)(m,{name:"plus",color:"#80868b",size:48})})})]})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{padding:"1px 10px"},children:[(0,x.jsxs)("p",{className:"lbl_prod_price",children:["$",null===s||void 0===s?void 0:s.price]}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"iconFlx",children:(0,x.jsx)("p",{className:"group_title addBtn iconFlx",onClick:p,children:"Cancelar"})}),(0,x.jsx)("div",{className:"iconFlx",children:(0,x.jsx)("p",{className:"group_title addBtn purple iconFlx",onClick:function(){l({productId:s.productId,amount:d,productName:s.name}),p()},children:"Agregar"})})]})]})]})},j=l(15),b=l(6824),_=(0,d.Vg)(),N=(0,u.Qz)(),g=(0,u.O6)(),y=((0,u.$d)(),(0,u.Y3)()),k=(0,d.Jo)(),O="coll2listprods",C=function(e){e.data,e.elmId;var n,l,d,u=e.updObs,v=(0,a.useState)(!1),m=(0,t.Z)(v,2),C=m[0],F=m[1],w=(0,a.useState)(0),S=(0,t.Z)(w,2),I=(S[0],S[1]),P=(0,a.useState)(0),Z=(0,t.Z)(P,2),z=Z[0],B=Z[1],M=(0,a.useState)(!1),D=(0,t.Z)(M,2),H=D[0],R=D[1],V=(0,a.useState)(128),U=(0,t.Z)(V,2),A=U[0],E=U[1];(0,a.useEffect)((function(){C||(F(!0),I((0,r.M5)()),(0,r.Rz)("products_list",null),(0,h.Ht)("global_accounts","global_account_params",u),Q())}));var T=function(){},q=function(e){(0,r.Rz)("products_list",null),Q()},J=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(n,l){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I((0,r.M5)()),R(!1);case 2:case"end":return e.stop()}}),e)})));return function(n,l){return e.apply(this,arguments)}}(),L=function(e){(0,j.OpenToast)({text:e.productName+"  added to cart",timeout:1500})},Q=function(){var e=(0,s.Z)({},(0,r.bh)("products_list"));(0,r.Rz)(O,e),J()},Y=function(e){(0,b.M9)(e)},$=function(e){var n=e.list;(0,r.eY)("export_products__"+(0,r.M5)()+".csv",n)};return(0,x.jsxs)("div",{className:"",children:[(0,x.jsxs)("div",{className:"accounts_header",children:[(0,x.jsx)("h2",{children:"Products"}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.I0)()?(0,x.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,x.jsx)(N,{}),(0,o.OpenModal)(e)},children:"Agregar Producto"}):null,(0,r.bh)("profileUser").isAdmin?(0,x.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:function(){return B(!z)},children:"Cambiar Vista"}):null,(0,r.I0)()?(0,x.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:function(){(0,p.qT)(Y)},children:"Listar Inventario"}):null,(0,r.I0)()?(0,x.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:function(){(0,p.qT)($)},children:"Exportar Inventario"}):null,(0,r.I0)()?(0,x.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:function(e){var n={zIndex:450,height:"90vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,x.jsx)(y,{item:e,confirm:L}),(0,o.OpenModal)(n)},children:"Comparar Inventario"}):null]})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,x.jsx)(_,{placeholder:"Buscar ....",width:560,obs:I,fetchData:function(e){R(!0),(0,p.Ve)(Q)},loading:H,change:function(e){!H&&R(!0)},callempty:q,keyFlds:"searchQry"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"total_comprobante_title",children:"No de Productos:"}),(0,x.jsx)("div",{className:"total_comprobante gray",children:(0,x.jsx)("span",{children:null===(n=(0,r._2)((0,r.bh)("products_list")))||void 0===n?void 0:n.length})})]})]}),z?(0,x.jsx)("div",{className:"products_container scollVh FlexList ",children:(0,r.bh)(O)&&(null===(l=(0,p.B8)((0,r.bh)(O),A))||void 0===l?void 0:l.map((function(e){var n=(0,r.bh)(O)[e];return(0,x.jsx)("div",{style:{padding:9},onClick:function(){return function(e){var n={zIndex:450,height:"90vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,x.jsx)(f,{item:e,confirm:L}),(0,o.OpenModal)(n)}(n)},children:(0,x.jsx)(k,{src:null===n||void 0===n?void 0:n.imageUrl,width:160,lbl:null===n||void 0===n?void 0:n.name,fontSize:[12,16]},e)})})))}):(0,x.jsxs)("div",{className:"products_container scollVh",children:[(0,r.bh)(O)&&(null===(d=(0,p.B8)((0,r.bh)(O),A))||void 0===d?void 0:d.map((function(e){return(0,x.jsx)(g,{data:(0,r.bh)(O)[e],elmId:e,openUpdateView:T,handleRefreshAll:q,updRvw:I},e)}))),(0,r.bh)(O)&&(0,r._2)((0,r.bh)(O),A).length>A?(0,x.jsxs)("div",{className:"_dsplFlx ",style:{margin:"15px 0 35px"},children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:function(){E((function(e){return e+128}))},children:"Cargar Mas"}),(0,x.jsx)("div",{className:"flexSpace"})]}):null]})]})}},7889:function(){},1534:function(){},1413:function(e,n,l){l.d(n,{Z:function(){return c}});var s=l(4942);function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,s)}return l}function c(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){(0,s.Z)(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}}}]);
//# sourceMappingURL=2308.97178773.chunk.js.map