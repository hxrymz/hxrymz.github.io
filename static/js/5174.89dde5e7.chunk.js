"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5174,9760],{9760:function(e,i,n){n.r(i),n.d(i,{CloseModal:function(){return s},OpenModal:function(){return c},default:function(){return a}});var t=n(2791),r=n(5408),d=n(2350),o=n(184),l="listDialog_mdh392",a=function(){var e=(0,d.bh)("listDialog")||{},i=((0,r.Z)(l),Object.keys(e));return(0,o.jsx)(o.Fragment,{children:i.map((function(i,n){var r=e[i];if(r&&r.visible){var d={};r.height&&(d.heigth=r.height),r.width,r.zIndex&&(d.zIndex=r.zIndex-1);var l={zIndex:r.zIndex},a=null,c=r.data;return r.content&&(a=t.cloneElement(r.content,{data:c})),(0,o.jsxs)("div",{className:"ltr-1kbnjow",style:d,children:[(0,o.jsx)("div",{className:"ltr-hoe9xz",children:(0,o.jsx)("div",{className:"ltr-1wao6ny",style:l,id:i,children:a})}),r.data.overlay?(0,o.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=i,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:e})}}):null]},i)}}))})},c=function(e){var i=(0,d.bh)("listDialog")||{},n=(0,d.M5)();i[n]||(i[n]={}),i[n].visible=!0;var t={};e.props?(t=e.props).modalID=n:t.modalID=n;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),i[n].isView=e.isView,i[n].observeResize=e.observeResize,i[n].observeResize&&(i[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===i[n].width&&t.height===i[n].height||(i[n].height=t.height+10,i[n].width=t.width,(0,d.Rz)("listDialog",i),(0,d.wt)(l)))}),200)),i[n].display=!0,e.zIndex&&(i[n].zIndex=e.zIndex),e.height&&(i[n].height=e.height),e.width&&(i[n].width=e.width),e.content&&(i[n].content=e.content),i[n].data=t,(0,d.Rz)("listDialog",i),(0,d.wt)(l),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,d.Rz)("modalOpen",n),(0,d.wt)(l)}),125)},s=function(e){var i,n,t,r=(0,d.bh)("listDialog")||{},o=e.id;r[o]&&(r[o].observeResize&&r[o].observeInterval&&clearInterval(r[o].observeInterval),r[o].display=!1,null===(i=r[o])||void 0===i||null===(n=i.data)||void 0===n||null===(t=n.closeEvent)||void 0===t||t.call(n),(0,d.Rz)("listDialog",r),delete r[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,d.wt)(l),setTimeout((function(){delete r[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,d.Rz)("modalOpen",null)}),750))}},5174:function(e,i,n){n.r(i);var t=n(4296),r=n(4165),d=n(1413),o=n(5861),l=n(9439),a=n(2791),c=n(2350),s=n(2647),u=(n(1534),n(9760)),v=n(7689),p=n(9661),h=n(24),m=n(6824),x=n(184),b=(0,s.PU)(),f=((0,s.YZ)(),(0,s.Np)()),_=(0,p.a)(),g=(0,s.JC)(),j=(0,p.LZ)(),y=(0,h.Az)(),N=(0,h.f_)(),w="new_product_entry_comprobante";i.default=function(e){var i,n,t,s,p,h,m,b,_,g,j=e.data,y=e.confirm,I=(0,a.useState)(!1),z=(0,l.Z)(I,2),A=z[0],F=z[1],O=(0,a.useState)(0),R=(0,l.Z)(O,2),S=(R[0],R[1]);(0,v.s0)();(0,a.useEffect)((function(){A||(F(!0),(0,c.Rz)("accountPicker",{}),S((0,c.M5)()))}));var L=function(e,i,n){var t=(0,c.bh)(w)||{};n?(t[n]||(t[n]={}),t[n][e]=i):t[e]=i,(0,c.Rz)(w,t),S((0,c.M5)())},D=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var i,n,t,l,a,s,v,p,h,m,x,b,f,_,g,N,k,C,I,z,A,Z,F,O;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=(0,c.bh)(w),a=Date.now(),l.date&&(s=new Date(l.date).getTime(),a=s||a),l.date=a,[],v=0,p=[],h=[],m=[],(x=(0,c.bh)("extraAccountListOnCmp")&&(0,c._2)((0,c.bh)("extraAccountListOnCmp")))&&(null===x||void 0===x||x.map(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(i,n){var t,o,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=(0,d.Z)({},l),a=(0,d.Z)({},(0,c.bh)("extraAccountListOnCmp")[i]),o.account=a.account,(s=null===(t=(0,c.bh)("account_ids"))||void 0===t?void 0:t[a.account]).payOrCollect&&(o.payOrCollect=s.payOrCollect),o.subAccount=a.subAccount,o.type=a.type,o.amount=1*a.amount,o.operationId=(0,c.M5)(),v+=1*a.amount,p.push(o),h.push(o);case 12:case"end":return e.stop()}}),e)})));return function(i,n){return e.apply(this,arguments)}}())),b=0,(0,c.bh)("productListOnCmp")&&(null===(i=(0,c.bh)("productListOnCmp"))||void 0===i||i.map(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(i,n){var t,o,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,d.Z)({},i),o=(0,d.Z)({},t),c=1*t.qty*(1*t.price),o.amount=c,o.document=l.document.trim(),o.date=a,v+=c,b+=c,m.push(o);case 9:case"end":return e.stop()}}),e)})));return function(i,n){return e.apply(this,arguments)}}())),b>0&&((_=(0,d.Z)({},l)).type="debit",_.account=null===(f=(0,c.bh)("global_account_params"))||void 0===f?void 0:f.inventory,_.amount=b,_.operationId=(0,c.M5)(),h.push(_)),v>0&&(0,c.bh)("provider_picker").account&&((A=(0,d.Z)({},l)).type="credit",A.account=null===(g=(0,c.bh)("provider_picker"))||void 0===g?void 0:g.account,A.subAccount=null===(N=(0,c.bh)("provider_picker"))||void 0===N?void 0:N.subAccount,A.providerId=null===(k=(0,c.bh)("provider_picker"))||void 0===k?void 0:k.providerId,l.providerId=null===(C=(0,c.bh)("provider_picker"))||void 0===C?void 0:C.providerId,A.amount=1*v,A.operationId=(0,c.M5)(),(Z=null===(I=(0,c.bh)("account_ids"))||void 0===I?void 0:I[null===(z=(0,c.bh)("provider_picker"))||void 0===z?void 0:z.account])&&Z.payOrCollect&&(A.payOrCollect=Z.payOrCollect),h.push(A)),l.extrasEntries=p,l.inventoryEntries=m,l.comprobantesEntries=h,l.entriesInvoiceId=(0,c.M5)(),(F=(0,d.Z)({},null===(n=(0,c.bh)((0,c.hQ)()))||void 0===n?void 0:n.add_entry_invoice)).params={businessId:null===(t=(0,c.bh)("profileUser"))||void 0===t?void 0:t.businessId},F.form=l,O=(0,c.I7)(F),e.next=25,O;case 25:e.sent,(null===j||void 0===j?void 0:j.modalID)&&(0,u.CloseModal)({id:null===j||void 0===j?void 0:j.modalID}),setTimeout((function(){(0,c.Rz)("extraAccountListOnCmp",null),(0,c.Rz)("productListOnCmp",null),(0,c.Rz)("provider_picker",null),(0,c.Rz)(w,null),S((0,c.M5)()),y&&y()}),400);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null===(i=(0,c.bh)("account_ids"))||void 0===i||i[null===(n=(0,c.bh)("accountPicker"))||void 0===n?void 0:n.account],null===(t=(0,c.bh)("sub_account_ids"))||void 0===t||t[null===(s=(0,c.bh)("accountPicker"))||void 0===s?void 0:s.subAccount];return(0,x.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"860px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"form_title",children:"Entrada de Mercancias"}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)(N,{init:null===(p=(0,c.bh)(w))||void 0===p?void 0:p.date,updDate:function(e){return L("date",e)}}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(f,{init:null===(h=(0,c.bh)(w))||void 0===h?void 0:h.document,label:"Documento",width:120,updChanges:function(e){return L("document",e)}})]}),(0,x.jsx)(f,{init:null===(m=(0,c.bh)(w))||void 0===m?void 0:m.description,label:"Descripcion",width:520,updChanges:function(e){return L("description",e)}}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(k,{})]}),(0,x.jsx)(C,{}),(0,x.jsx)(Z,{}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),null!==(b=(0,c.bh)(w))&&void 0!==b&&b.document&&null!==(_=(0,c.bh)("provider_picker"))&&void 0!==_&&_.account&&(null===(g=(0,c._2)((0,c.bh)("productListOnCmp")))||void 0===g?void 0:g.length)>0?(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:D,children:"Guardar"})}):null]})]})};var k=function(e){var i,n,t=(0,a.useState)(0),r=(0,l.Z)(t,2),d=(r[0],r[1]),o=null===(i=(0,c.bh)("providers_ids"))||void 0===i?void 0:i[null===(n=(0,c.bh)("provider_picker"))||void 0===n?void 0:n.providerId];return(0,x.jsx)("div",{children:null!==o&&void 0!==o&&o.name?(0,x.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsx)("div",{className:"_dsplFlx",children:(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(){(0,c.Rz)("provider_picker",null),d((0,c.M5)())},children:null===o||void 0===o?void 0:o.name})}),(0,x.jsx)("div",{className:"flexSpace"})]})}):(0,x.jsx)(j,{placeholder:"buscar una provedor",width:320,handleClick:function(e){var i={providerId:e.providerId,account:e.account,subAccount:e.subAccount};(0,c.Rz)("provider_picker",i),d((0,c.M5)())}})})},C=function(e){var i,n,r,o,s,u,v,p,h,_,g;(0,t.Z)(e);var j=(0,a.useState)(0),N=(0,l.Z)(j,2),k=(N[0],N[1]),C=null===(i=(0,c.bh)("products_ids"))||void 0===i?void 0:i[null===(n=(0,c.bh)("product_picker_in"))||void 0===n?void 0:n.productId],A=function(e,i,n){var t=(0,c.bh)("product_picker_in")||{};n?(t[n]||(t[n]={}),t[n][e]=i):t[e]=i,(0,c.Rz)("product_picker_in",t),k((0,c.M5)())},Z=function(e){var i=(0,c.bh)("productListOnCmp")||[];i.splice(e,1),(0,c.Rz)("productListOnCmp",i),k((0,c.M5)())};return(0,x.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(r=(0,c.bh)("product_picker_in"))&&void 0!==r&&r.productId?(0,x.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsxs)("div",{className:"_dsplFlx",onClick:function(e){(0,c.Rz)("product_picker_in",null),k((0,c.M5)())},children:[(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===C||void 0===C?void 0:C.upc_barcode}),(0,x.jsx)("div",{className:"name",children:null===C||void 0===C?void 0:C.name})]}),(0,x.jsx)("div",{className:"flexSpace"})]})}):(0,x.jsx)(y,{width:420,handleClick:function(e){var i={productId:e.productId};(0,c.Rz)("product_picker_in",i),k((0,c.M5)())}}),null!==(o=(0,c.bh)("product_picker_in"))&&void 0!==o&&o.productId?(0,x.jsxs)("div",{className:"_dsplFlx ",children:[C.hasDimension?(0,x.jsx)("div",{className:"",style:{width:270,marginLeft:18},children:(0,x.jsx)(f,{init:null===(s=(0,c.bh)("product_picker_in"))||void 0===s?void 0:s.dimension,label:"Dimension (width,height) in inch",width:100,updChanges:function(e){return A("dimension",e)}})}):(0,x.jsx)(f,{init:null===(u=(0,c.bh)("product_picker_in"))||void 0===u?void 0:u.qty,label:"Cantidad",width:100,type:"number",updChanges:function(e){return A("qty",e)}}),(0,x.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,x.jsx)(f,{init:null===(v=(0,c.bh)("product_picker_in"))||void 0===v?void 0:v.price,label:"Price",width:100,type:"number",updChanges:function(e){return A("price",e)}})}),(0,x.jsx)("div",{className:"flexSpace"}),(null!==(p=(0,c.bh)("product_picker_in"))&&void 0!==p&&p.qty||null!==(h=(0,c.bh)("product_picker_in"))&&void 0!==h&&h.dimension)&&null!==(_=(0,c.bh)("product_picker_in"))&&void 0!==_&&_.price?(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:function(){var e,i=(0,d.Z)({},(0,c.bh)("product_picker_in"))||{},n=(0,d.Z)({},(0,c.bh)("product_picker_in"))||{},t=(0,c.bh)("productListOnCmp")||[];i.dimension&&(i.qty=1,i.squareFeet=I(null===i||void 0===i?void 0:i.dimension.split(",")[0],null===i||void 0===i?void 0:i.dimension.split(",")[1]),i.pricePerSquareFeet=1*i.price/i.squareFeet*1),i.inventoryId=(0,c.M5)(),i.alphaCode=(0,c.Pb)();var r=Date.now();if(null!==(e=(0,c.bh)(w))&&void 0!==e&&e.date){var o=new Date((0,c.bh)(w).date).getTime();r=o||r}i.date=r,t.push(i),(0,c.Rz)("productListOnCmp",t),n.productId=null,n.qty="",n.price="",(0,c.Rz)("product_picker_in",n),k((0,c.M5)())},children:"Agregar"})}):null]}):null,(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:"Producto"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:"Dimension"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:"Precio"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_5",children:(0,x.jsx)("div",{className:"icon",onClick:function(){(0,m.H)((0,c.bh)("productListOnCmp"))},children:(0,x.jsx)(b,{name:"printer",color:"#646cff"})})})]}),(0,c.bh)("productListOnCmp")&&(0,c.bh)("productListOnCmp").length>0&&(null===(g=(0,c.bh)("productListOnCmp"))||void 0===g?void 0:g.map((function(e,i){return(0,x.jsx)(z,{idKey:e.productId,index:i,data:e,deleteItem:Z},e.productId+"_"+i)})))]})},I=function(e,i){var n=e*i*.0069444444444;return(0,c.Zv)(n,2)},z=function(e){var i,n=e.data,t=e.deleteItem,r=(e.idKey,e.index),d=null===(i=(0,c.bh)("products_ids"))||void 0===i?void 0:i[null===n||void 0===n?void 0:n.productId],o=(null===n||void 0===n?void 0:n.dimension)&&(null===n||void 0===n?void 0:n.dimension.split(",")[0])+" X "+(null===n||void 0===n?void 0:n.dimension.split(",")[1]),l=(null===n||void 0===n?void 0:n.dimension)&&{lbl:o+" (inch)",hover:(null===n||void 0===n?void 0:n.squareFeet)+"S/F X $"+(0,c.Zv)(null===n||void 0===n?void 0:n.pricePerSquareFeet,2)};return(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:null===d||void 0===d?void 0:d.name}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",style:{marginTop:-4},children:null!==n&&void 0!==n&&n.dimension?(0,x.jsx)(g,{data:l,color:"#282828",labelField:"lbl",infoField:"hover"}):null}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:(0,c.Zv)(null===n||void 0===n?void 0:n.qty,2)}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:(0,c.Zv)(null===n||void 0===n?void 0:n.price,2)}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"icon",onClick:function(){t(r)},children:(0,x.jsx)(b,{name:"outline_delete",color:"#c62828"})})]})},A=function(e){var i,n,t,r,o,s,v=e.data,p=(0,a.useState)(0),h=(0,l.Z)(p,2),m=(h[0],h[1]),b=null===(i=(0,c.bh)("account_ids"))||void 0===i?void 0:i[null===(n=(0,c.bh)("extraAccountPicker"))||void 0===n?void 0:n.account],g=null===(t=(0,c.bh)("sub_account_ids"))||void 0===t?void 0:t[null===(r=(0,c.bh)("extraAccountPicker"))||void 0===r?void 0:r.subAccount];return(0,x.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"form_title",children:"Agregar gastos extras"}),(0,x.jsx)("div",{className:"flexSpace"})]}),null!==(o=(0,c.bh)("extraAccountPicker"))&&void 0!==o&&o.account?(0,x.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsxs)("div",{className:"_dsplFlx",onClick:function(){(0,c.Rz)("extraAccountPicker",null),m((0,c.M5)())},children:[(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===b||void 0===b?void 0:b.upc_barcode}),(0,x.jsx)("div",{className:"name",children:null===b||void 0===b?void 0:b.name})]}),g?(0,x.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,x.jsx)("div",{className:"code",children:null===g||void 0===g?void 0:g.subAccount}),(0,x.jsx)("div",{className:"name",children:null===g||void 0===g?void 0:g.subAccountName})]}):null,(0,x.jsx)("div",{className:"flexSpace"})]})}):(0,x.jsx)(_,{width:420,handleClick:function(e,i){var n={account:e,subAccount:i};(0,c.Rz)("extraAccountPicker",n),m((0,c.M5)())}}),(0,x.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,x.jsx)(f,{init:null===(s=(0,c.bh)("extraAccountPicker"))||void 0===s?void 0:s.amount,label:"Importe",width:120,type:"number",updChanges:function(e){return function(e,i,n){var t=(0,c.bh)("extraAccountPicker")||{};n?(t[n]||(t[n]={}),t[n][e]=i):t[e]=i,(0,c.Rz)("extraAccountPicker",t),m((0,c.M5)())}("amount",e)}})}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:function(){var e=(0,d.Z)({},(0,c.bh)("extraAccountPicker"))||{},i=(0,d.Z)({},(0,c.bh)("extraAccountListOnCmp"))||{},n=e.account+"_"+e.subAccount;e.type="debit",i[n]=e,(0,c.Rz)("extraAccountListOnCmp",i),(0,c.Rz)("extraAccountPicker",null),m((0,c.M5)()),(0,u.CloseModal)({id:v.modalID})},children:"Agregar"})})]})},Z=function(e){var i;(0,t.Z)(e);var n=(0,a.useState)(0),r=(0,l.Z)(n,2),d=(r[0],r[1]),o=function(e){var i=(0,c.bh)("extraAccountListOnCmp")||{};delete i[e],(0,c.Rz)("extraAccountListOnCmp",i),d((0,c.M5)())};return(0,x.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"_dsplFlx",children:(0,x.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,x.jsx)(A,{}),(0,u.OpenModal)(e)},children:"Agregar gastos"})}),(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Monto"})]}),(0,c.bh)("extraAccountListOnCmp")&&(null===(i=(0,c._2)((0,c.bh)("extraAccountListOnCmp")))||void 0===i?void 0:i.map((function(e,i){return(0,x.jsx)(F,{idKey:e,data:(0,c.bh)("extraAccountListOnCmp")[e],deleteItem:o},e)})))]})},F=function(e){var i,n,t=e.data,r=e.deleteItem,d=e.idKey,o=null===(i=(0,c.bh)("account_ids"))||void 0===i?void 0:i[null===t||void 0===t?void 0:t.account],l=null===(n=(0,c.bh)("sub_account_ids"))||void 0===n?void 0:n[null===t||void 0===t?void 0:t.subAccount];return(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,x.jsx)(g,{data:o,labelField:"name",infoField:"code"})}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,x.jsx)(g,{data:l,labelField:"subAccountName",infoField:"subAccount"})}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"debit"===(null===t||void 0===t?void 0:t.type)?(0,c.Zv)(null===t||void 0===t?void 0:t.amount,2):"0.00"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"icon",onClick:function(){r(d)},children:(0,x.jsx)(b,{name:"outline_delete",color:"#c62828"})})]})}},6824:function(e,i,n){n.d(i,{H:function(){return a}});var t=n(4165),r=n(5861),d=n(6963),o=n(2350),l=n(4e3),a=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(i){var n,a,c,s,u,v,p,h;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.PDFDocument.create();case 2:return(n=e.sent).registerFontkit(l.Z),e.next=6,n.embedFont(d.StandardFonts.TimesRoman);case 6:return a=e.sent,e.next=9,n.embedFont(d.StandardFonts.TimesRomanBold);case 9:if(c=e.sent,!(0,o.bh)("modernFontReport")){e.next=25;break}return"https://qvamarkets.com/gql_api/getStatic?fileName=Roboto-Bold.ttf",e.next=14,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=Roboto-Bold.ttf").then((function(e){return e.arrayBuffer()}));case 14:return s=e.sent,e.next=17,n.embedFont(s);case 17:return c=e.sent,"https://qvamarkets.com/gql_api/getStatic?fileName=gSans-Italic.otf",e.next=21,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=gSans-Italic.otf").then((function(e){return e.arrayBuffer()}));case 21:return u=e.sent,e.next=24,n.embedFont(u);case 24:a=e.sent;case 25:return v=i.map(function(){var e=(0,r.Z)((0,t.Z)().mark((function e(i,r){var l,s,u,v,p,h,m,x,b,f,_,g,j,y,N,w,k,C;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=n.addPage([288,162]),v=u.getSize(),v.width,p=v.height,h=p-14,m=(0,o.ye)((null===i||void 0===i?void 0:i.inventoryId)+""),e.next=6,fetch(m).then((function(e){return e.arrayBuffer()}));case 6:return x=e.sent,e.next=9,n.embedPng(x);case 9:(b=e.sent)&&u.drawImage(b,{x:10,y:80,width:80,height:80}),f=c.widthOfTextAtSize((null===i||void 0===i?void 0:i.inventoryId)+"",12),_=a.widthOfTextAtSize("ID: ",11),u.drawText("ID: ",{x:270-f-_,y:h,size:11,font:a,color:(0,d.rgb)(0,0,0)}),u.drawText((null===i||void 0===i?void 0:i.inventoryId)+"",{x:270-f,y:h,size:12,font:c,color:(0,d.rgb)(0,0,0)}),h-=20,g=null!==i&&void 0!==i&&i.dimension?(null===i||void 0===i?void 0:i.dimension.split(",")[0])+" X "+(null===i||void 0===i?void 0:i.dimension.split(",")[1])+" inch":"",j=c.widthOfTextAtSize(g+"",19),u.drawText(g+"",{x:270-j,y:h-24,size:19,font:c,color:(0,d.rgb)(.06,.06,.06)}),y=null!==i&&void 0!==i&&i.squareFeet?(null===i||void 0===i?void 0:i.squareFeet)+" S/F":"1 Unit",N=c.widthOfTextAtSize(y+"",19),u.drawText(y+"",{x:270-N,y:h-44,size:19,font:c,color:(0,d.rgb)(.06,.06,.06)}),h-=65,u.drawRectangle({x:15,y:h+1,width:560,height:.85,color:(0,d.rgb)(.53,.53,.53),borderColor:(0,d.rgb)(.53,.53,.53)}),w=null===(l=(0,o.bh)("products_ids"))||void 0===l||null===(s=l[null===i||void 0===i?void 0:i.productId])||void 0===s?void 0:s.name,u.drawText(w+"",{x:20,y:h-15,size:14,font:a,color:(0,d.rgb)(0,0,0)}),h-=25,u.drawRectangle({x:15,y:h+1,width:560,height:.85,color:(0,d.rgb)(.53,.53,.53),borderColor:(0,d.rgb)(.53,.53,.53)}),h-=10,h-=20,k=a.widthOfTextAtSize("Date: ",11),C=c.widthOfTextAtSize((0,o.Gv)(null===i||void 0===i?void 0:i.date)+"",12),u.drawText("Date: ",{x:270-k-C,y:h,size:11,font:a,color:(0,d.rgb)(0,0,0)}),u.drawText((0,o.Gv)(null===i||void 0===i?void 0:i.date)+"",{x:270-C,y:h,size:12,font:c,color:(0,d.rgb)(.06,.06,.06)}),u.drawText((null===i||void 0===i?void 0:i.alphaCode)+"",{x:20,y:h+4,size:22,font:c,color:(0,d.rgb)(.06,.06,.06)});case 35:case"end":return e.stop()}}),e)})));return function(i,n){return e.apply(this,arguments)}}()),e.next=28,Promise.all(v);case 28:return e.sent,e.next=31,n.save();case 31:p=e.sent,h=(0,o.ou)(p),window.open(h);case 34:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}()},1534:function(){},4296:function(e,i,n){function t(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(i,{Z:function(){return t}})}}]);
//# sourceMappingURL=5174.89dde5e7.chunk.js.map