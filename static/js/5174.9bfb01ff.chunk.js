"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5174,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return s},OpenModal:function(){return a},default:function(){return l}});var i=t(2791),r=t(5408),o=t(2350),d=t(184),c="listDialog_mdh392",l=function(){var e=(0,o.bh)("listDialog")||{},n=((0,r.Z)(c),Object.keys(e));return(0,d.jsx)(d.Fragment,{children:n.map((function(n,t){var r=e[n];if(r&&r.visible){var o={};r.height&&(o.heigth=r.height),r.width,r.zIndex&&(o.zIndex=r.zIndex-1);var c={zIndex:r.zIndex},l=null,a=r.data;return r.content&&(l=i.cloneElement(r.content,{data:a})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:c,id:n,children:l})}),r.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:e})}}):null]},n)}}))})},a=function(e){var n=(0,o.bh)("listDialog")||{},t=(0,o.M5)();n[t]||(n[t]={}),n[t].visible=!0;var i={};e.props?(i=e.props).modalID=t:i.modalID=t;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===n[t].width&&i.height===n[t].height||(n[t].height=i.height+10,n[t].width=i.width,(0,o.Rz)("listDialog",n),(0,o.wt)(c)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=i,(0,o.Rz)("listDialog",n),(0,o.wt)(c),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)(c)}),125)},s=function(e){var n,t,i,r=(0,o.bh)("listDialog")||{},d=e.id;r[d]&&(r[d].observeResize&&r[d].observeInterval&&clearInterval(r[d].observeInterval),r[d].display=!1,null===(n=r[d])||void 0===n||null===(t=n.data)||void 0===t||null===(i=t.closeEvent)||void 0===i||i.call(t),(0,o.Rz)("listDialog",r),delete r[d],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(c),setTimeout((function(){delete r[d],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},5174:function(e,n,t){t.r(n);var i=t(6459),r=t(4165),o=t(1413),d=t(5861),c=t(9439),l=t(2791),a=t(2350),s=t(2647),u=(t(1534),t(9760)),v=t(7689),p=t(9661),h=t(24),m=t(6824),x=t(184),b=(0,s.PU)(),f=((0,s.YZ)(),(0,s.Np)()),_=(0,p.a)(),g=(0,s.JC)(),j=(0,p.LZ)(),y=(0,h.Az)(),w=(0,h.f_)(),N="new_product_entry_comprobante";n.default=function(e){var n,t,i,s,p,h,m,b,_,g,j=e.data,y=e.confirm,I=(0,l.useState)(!1),O=(0,c.Z)(I,2),z=O[0],Z=O[1],F=(0,l.useState)(0),R=(0,c.Z)(F,2),S=(R[0],R[1]);(0,v.s0)();(0,l.useEffect)((function(){z||(Z(!0),(0,a.Rz)("accountPicker",{}),S((0,a.M5)()))}));var D=function(e,n,t){var i=(0,a.bh)(N)||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,a.Rz)(N,i),S((0,a.M5)())},P=function(){var e=(0,d.Z)((0,r.Z)().mark((function e(){var n,t,i,c,l,s,v,p,h,m,x,b,f,_,g,w,k,C,I,O,z,A,Z,F;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(0,a.bh)(N),l=(new Date).getTime()+800,c.date&&(s=new Date(c.date).getTime(),l=s||l),c.date=l,[],v=0,p=[],h=[],m=[],(x=(0,a.bh)("extraAccountListOnCmp")&&(0,a._2)((0,a.bh)("extraAccountListOnCmp")))&&(null===x||void 0===x||x.map(function(){var e=(0,d.Z)((0,r.Z)().mark((function e(n,t){var i,d,l,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=(0,o.Z)({},c),l=(0,o.Z)({},(0,a.bh)("extraAccountListOnCmp")[n]),d.account=l.account,(s=null===(i=(0,a.bh)("account_ids"))||void 0===i?void 0:i[l.account]).payOrCollect&&(d.payOrCollect=s.payOrCollect),d.subAccount=l.subAccount,d.type=l.type,d.amount=1*l.amount,d.operationId=(0,a.M5)(),v+=1*l.amount,p.push(d),h.push(d);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())),b=0,(0,a.bh)("productListOnCmp")&&(null===(n=(0,a.bh)("productListOnCmp"))||void 0===n||n.map(function(){var e=(0,d.Z)((0,r.Z)().mark((function e(n,t){var i,d,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,o.Z)({},n),d=(0,o.Z)({},i),a=1*i.qty*(1*i.price),d.amount=a,d.document=c.document.trim(),d.date=l,v+=a,b+=a,m.push(d);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())),b>0&&((_=(0,o.Z)({},c)).type="debit",_.account=null===(f=(0,a.bh)("global_account_params"))||void 0===f?void 0:f.inventory.account,_.amount=b,_.operationId=(0,a.M5)(),h.push(_)),v>0&&(0,a.bh)("provider_picker").account&&((z=(0,o.Z)({},c)).type="credit",z.account=null===(g=(0,a.bh)("provider_picker"))||void 0===g?void 0:g.account,z.subAccount=null===(w=(0,a.bh)("provider_picker"))||void 0===w?void 0:w.subAccount,z.providerId=null===(k=(0,a.bh)("provider_picker"))||void 0===k?void 0:k.providerId,c.providerId=null===(C=(0,a.bh)("provider_picker"))||void 0===C?void 0:C.providerId,z.amount=1*v,z.operationId=(0,a.M5)(),(A=null===(I=(0,a.bh)("account_ids"))||void 0===I?void 0:I[null===(O=(0,a.bh)("provider_picker"))||void 0===O?void 0:O.account])&&A.payOrCollect&&(z.payOrCollect=A.payOrCollect),h.push(z)),c.extrasEntries=p,c.inventoryEntries=m,c.comprobantesEntries=h,c.entriesInvoiceId=(0,a.M5)(),(Z=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.add_entry_invoice)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId},Z.form=c,(0,a.wL)(Z),F=(0,a.I7)(Z),e.next=26,F;case 26:e.sent,(null===j||void 0===j?void 0:j.modalID)&&(0,u.CloseModal)({id:null===j||void 0===j?void 0:j.modalID}),setTimeout((function(){(0,a.Rz)("extraAccountListOnCmp",null),(0,a.Rz)("productListOnCmp",null),(0,a.Rz)("provider_picker",null),(0,a.Rz)(N,null),S((0,a.M5)()),y&&y()}),400);case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null===(n=(0,a.bh)("account_ids"))||void 0===n||n[null===(t=(0,a.bh)("accountPicker"))||void 0===t?void 0:t.account],null===(i=(0,a.bh)("sub_account_ids"))||void 0===i||i[null===(s=(0,a.bh)("accountPicker"))||void 0===s?void 0:s.subAccount];return(0,x.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"860px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"form_title",children:"Entrada de Mercancias"}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)(w,{init:null===(p=(0,a.bh)(N))||void 0===p?void 0:p.date,updDate:function(e){return D("date",e)}}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(f,{init:null===(h=(0,a.bh)(N))||void 0===h?void 0:h.document,label:"Documento",width:120,updChanges:function(e){return D("document",e)}})]}),(0,x.jsx)(f,{init:null===(m=(0,a.bh)(N))||void 0===m?void 0:m.description,label:"Descripcion",width:520,updChanges:function(e){return D("description",e)}}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(k,{})]}),(0,x.jsx)(C,{}),(0,x.jsx)(A,{}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),null!==(b=(0,a.bh)(N))&&void 0!==b&&b.document&&null!==(_=(0,a.bh)("provider_picker"))&&void 0!==_&&_.account&&(null===(g=(0,a._2)((0,a.bh)("productListOnCmp")))||void 0===g?void 0:g.length)>0?(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:P,children:"Guardar"})}):null]})]})};var k=function(e){var n,t,i=(0,l.useState)(0),r=(0,c.Z)(i,2),o=(r[0],r[1]),d=null===(n=(0,a.bh)("providers_ids"))||void 0===n?void 0:n[null===(t=(0,a.bh)("provider_picker"))||void 0===t?void 0:t.providerId];return(0,x.jsx)("div",{children:null!==d&&void 0!==d&&d.name?(0,x.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsx)("div",{className:"_dsplFlx",children:(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(){(0,a.Rz)("provider_picker",null),o((0,a.M5)())},children:null===d||void 0===d?void 0:d.name})}),(0,x.jsx)("div",{className:"flexSpace"})]})}):(0,x.jsx)(j,{placeholder:"buscar una provedor",width:320,handleClick:function(e){var n={providerId:e.providerId,account:e.account,subAccount:e.subAccount};(0,a.Rz)("provider_picker",n),o((0,a.M5)())}})})},C=function(e){var n,t,r,d,s,u,v,p,h,_,g;(0,i.Z)(e);var j=(0,l.useState)(0),w=(0,c.Z)(j,2),k=(w[0],w[1]),C=null===(n=(0,a.bh)("products_ids"))||void 0===n?void 0:n[null===(t=(0,a.bh)("product_picker_in"))||void 0===t?void 0:t.productId],z=function(e,n,t){var i=(0,a.bh)("product_picker_in")||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,a.Rz)("product_picker_in",i),k((0,a.M5)())},A=function(e){var n=(0,a.bh)("productListOnCmp")||[];n.splice(e,1),(0,a.Rz)("productListOnCmp",n),k((0,a.M5)())};return(0,x.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(r=(0,a.bh)("product_picker_in"))&&void 0!==r&&r.productId?(0,x.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsxs)("div",{className:"_dsplFlx",onClick:function(e){(0,a.Rz)("product_picker_in",null),k((0,a.M5)())},children:[(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===C||void 0===C?void 0:C.upc_barcode}),(0,x.jsx)("div",{className:"name",children:null===C||void 0===C?void 0:C.name})]}),(0,x.jsx)("div",{className:"flexSpace"})]})}):(0,x.jsx)(y,{width:420,handleClick:function(e){var n={productId:e.productId};(0,a.Rz)("product_picker_in",n),k((0,a.M5)())}}),null!==(d=(0,a.bh)("product_picker_in"))&&void 0!==d&&d.productId?(0,x.jsxs)("div",{className:"_dsplFlx ",children:[C.hasDimension?(0,x.jsx)("div",{className:"",style:{width:270,marginLeft:18},children:(0,x.jsx)(f,{init:null===(s=(0,a.bh)("product_picker_in"))||void 0===s?void 0:s.dimension,label:"Dimension (width,height) in inch",width:100,updChanges:function(e){return z("dimension",e)}})}):(0,x.jsx)(f,{init:null===(u=(0,a.bh)("product_picker_in"))||void 0===u?void 0:u.qty,label:"Cantidad",width:100,type:"number",updChanges:function(e){return z("qty",e)}}),(0,x.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,x.jsx)(f,{init:null===(v=(0,a.bh)("product_picker_in"))||void 0===v?void 0:v.price,label:"Price",width:100,type:"number",updChanges:function(e){return z("price",e)}})}),(0,x.jsx)("div",{className:"flexSpace"}),(null!==(p=(0,a.bh)("product_picker_in"))&&void 0!==p&&p.qty||null!==(h=(0,a.bh)("product_picker_in"))&&void 0!==h&&h.dimension)&&null!==(_=(0,a.bh)("product_picker_in"))&&void 0!==_&&_.price?(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:function(){var e,n=(0,o.Z)({},(0,a.bh)("product_picker_in"))||{},t=(0,o.Z)({},(0,a.bh)("product_picker_in"))||{},i=(0,a.bh)("productListOnCmp")||[];n.dimension&&(n.qty=1,n.squareFeet=I(null===n||void 0===n?void 0:n.dimension.split(",")[0],null===n||void 0===n?void 0:n.dimension.split(",")[1]),n.pricePerSquareFeet=1*n.price/n.squareFeet*1),n.inventoryId=(0,a.M5)(),n.alphaCode=(0,a.Pb)();var r=(new Date).getTime()+800;if(null!==(e=(0,a.bh)(N))&&void 0!==e&&e.date){var d=new Date((0,a.bh)(N).date).getTime();r=d||r}n.date=r,i.push(n),(0,a.Rz)("productListOnCmp",i),t.productId=null,t.qty="",t.price="",(0,a.Rz)("product_picker_in",t),k((0,a.M5)())},children:"Agregar"})}):null]}):null,(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:"Producto"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:"Dimension"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:"Precio"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_5",children:(0,x.jsx)("div",{className:"icon",onClick:function(){(0,m.H)((0,a.bh)("productListOnCmp"))},children:(0,x.jsx)(b,{name:"printer",color:"#646cff"})})})]}),(0,a.bh)("productListOnCmp")&&(0,a.bh)("productListOnCmp").length>0&&(null===(g=(0,a.bh)("productListOnCmp"))||void 0===g?void 0:g.map((function(e,n){return(0,x.jsx)(O,{idKey:e.productId,index:n,data:e,deleteItem:A},e.productId+"_"+n)})))]})},I=function(e,n){var t=e*n*.0069444444444;return(0,a.Zv)(t,2)},O=function(e){var n,t=e.data,i=e.deleteItem,r=(e.idKey,e.index),o=null===(n=(0,a.bh)("products_ids"))||void 0===n?void 0:n[null===t||void 0===t?void 0:t.productId],d=(null===t||void 0===t?void 0:t.dimension)&&(null===t||void 0===t?void 0:t.dimension.split(",")[0])+" X "+(null===t||void 0===t?void 0:t.dimension.split(",")[1]),c=(null===t||void 0===t?void 0:t.dimension)&&{lbl:d+" (inch)",hover:(null===t||void 0===t?void 0:t.squareFeet)+"S/F X $"+(0,a.Zv)(null===t||void 0===t?void 0:t.pricePerSquareFeet,2)};return(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:null===o||void 0===o?void 0:o.name}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",style:{marginTop:-4},children:null!==t&&void 0!==t&&t.dimension?(0,x.jsx)(g,{data:c,color:"#282828",labelField:"lbl",infoField:"hover"}):null}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:(0,a.Zv)(null===t||void 0===t?void 0:t.qty,2)}),(0,x.jsx)("div",{className:"tr_bar tr_bar_15",children:(0,a.Zv)(null===t||void 0===t?void 0:t.price,2)}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"icon",onClick:function(){i(r)},children:(0,x.jsx)(b,{name:"outline_delete",color:"#c62828"})})]})},z=function(e){var n,t,i,r,d,s,v=e.data,p=(0,l.useState)(0),h=(0,c.Z)(p,2),m=(h[0],h[1]),b=null===(n=(0,a.bh)("account_ids"))||void 0===n?void 0:n[null===(t=(0,a.bh)("extraAccountPicker"))||void 0===t?void 0:t.account],g=null===(i=(0,a.bh)("sub_account_ids"))||void 0===i?void 0:i[null===(r=(0,a.bh)("extraAccountPicker"))||void 0===r?void 0:r.subAccount];return(0,x.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"form_title",children:"Agregar gastos extras"}),(0,x.jsx)("div",{className:"flexSpace"})]}),null!==(d=(0,a.bh)("extraAccountPicker"))&&void 0!==d&&d.account?(0,x.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsxs)("div",{className:"_dsplFlx",onClick:function(){(0,a.Rz)("extraAccountPicker",null),m((0,a.M5)())},children:[(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===b||void 0===b?void 0:b.code}),(0,x.jsx)("div",{className:"name",children:null===b||void 0===b?void 0:b.name})]}),g?(0,x.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,x.jsx)("div",{className:"code",children:null===g||void 0===g?void 0:g.subAccount}),(0,x.jsx)("div",{className:"name",children:null===g||void 0===g?void 0:g.subAccountName})]}):null,(0,x.jsx)("div",{className:"flexSpace"})]})}):(0,x.jsx)(_,{width:420,handleClick:function(e,n){var t={account:e,subAccount:n};(0,a.Rz)("extraAccountPicker",t),m((0,a.M5)())}}),(0,x.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,x.jsx)(f,{init:null===(s=(0,a.bh)("extraAccountPicker"))||void 0===s?void 0:s.amount,label:"Importe",width:120,type:"number",updChanges:function(e){return function(e,n,t){var i=(0,a.bh)("extraAccountPicker")||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,a.Rz)("extraAccountPicker",i),m((0,a.M5)())}("amount",e)}})}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:function(){var e=(0,o.Z)({},(0,a.bh)("extraAccountPicker"))||{},n=(0,o.Z)({},(0,a.bh)("extraAccountListOnCmp"))||{},t=e.account+"_"+e.subAccount;e.type="debit",n[t]=e,(0,a.Rz)("extraAccountListOnCmp",n),(0,a.Rz)("extraAccountPicker",null),m((0,a.M5)()),(0,u.CloseModal)({id:v.modalID})},children:"Agregar"})})]})},A=function(e){var n;(0,i.Z)(e);var t=(0,l.useState)(0),r=(0,c.Z)(t,2),o=(r[0],r[1]),d=function(e){var n=(0,a.bh)("extraAccountListOnCmp")||{};delete n[e],(0,a.Rz)("extraAccountListOnCmp",n),o((0,a.M5)())};return(0,x.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"_dsplFlx",children:(0,x.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,x.jsx)(z,{}),(0,u.OpenModal)(e)},children:"Agregar gastos"})}),(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Monto"})]}),(0,a.bh)("extraAccountListOnCmp")&&(null===(n=(0,a._2)((0,a.bh)("extraAccountListOnCmp")))||void 0===n?void 0:n.map((function(e,n){return(0,x.jsx)(Z,{idKey:e,data:(0,a.bh)("extraAccountListOnCmp")[e],deleteItem:d},e)})))]})},Z=function(e){var n,t,i=e.data,r=e.deleteItem,o=e.idKey,d=null===(n=(0,a.bh)("account_ids"))||void 0===n?void 0:n[null===i||void 0===i?void 0:i.account],c=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[null===i||void 0===i?void 0:i.subAccount];return(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,x.jsx)(g,{data:d,labelField:"name",infoField:"code"})}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,x.jsx)(g,{data:c,labelField:"subAccountName",infoField:"subAccount"})}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"debit"===(null===i||void 0===i?void 0:i.type)?(0,a.Zv)(null===i||void 0===i?void 0:i.amount,2):"0.00"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"icon",onClick:function(){r(o)},children:(0,x.jsx)(b,{name:"outline_delete",color:"#c62828"})})]})}},6824:function(e,n,t){t.d(n,{H:function(){return l}});var i=t(4165),r=t(5861),o=t(6963),d=t(2350),c=t(4e3),l=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t,l,a,s,u,v,p,h,m;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.PDFDocument.create();case 2:return(t=e.sent).registerFontkit(c.Z),e.next=6,t.embedFont(o.StandardFonts.TimesRoman);case 6:return l=e.sent,e.next=9,t.embedFont(o.StandardFonts.TimesRomanBold);case 9:if(a=e.sent,!(0,d.bh)("modernFontReport")){e.next=25;break}return s=(0,d.bh)("Roboto-Bold.ttf"),e.next=14,fetch(s).then((function(e){return e.arrayBuffer()}));case 14:return u=e.sent,e.next=17,t.embedFont(u);case 17:return a=e.sent,"https://qvamarkets.com/gql_api/getStatic?fileName=gSans-Italic.otf",e.next=21,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=gSans-Italic.otf").then((function(e){return e.arrayBuffer()}));case 21:return v=e.sent,e.next=24,t.embedFont(v);case 24:l=e.sent;case 25:return p=n.map(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n,r){var c,s,u,v,p,h,m,x,b,f,_,g,j,y,w,N,k,C;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.addPage([288,162]),v=u.getSize(),v.width,p=v.height,h=p-14,m=(0,d.ye)((null===n||void 0===n?void 0:n.inventoryId)+""),e.next=6,fetch(m).then((function(e){return e.arrayBuffer()}));case 6:return x=e.sent,e.next=9,t.embedPng(x);case 9:(b=e.sent)&&u.drawImage(b,{x:10,y:80,width:80,height:80}),f=a.widthOfTextAtSize((null===n||void 0===n?void 0:n.inventoryId)+"",12),_=l.widthOfTextAtSize("ID: ",11),u.drawText("ID: ",{x:270-f-_,y:h,size:11,font:l,color:(0,o.rgb)(0,0,0)}),u.drawText((null===n||void 0===n?void 0:n.inventoryId)+"",{x:270-f,y:h,size:12,font:a,color:(0,o.rgb)(0,0,0)}),h-=20,g=null!==n&&void 0!==n&&n.dimension?(null===n||void 0===n?void 0:n.dimension.split(",")[0])+" X "+(null===n||void 0===n?void 0:n.dimension.split(",")[1])+" inch":"",j=a.widthOfTextAtSize(g+"",19),u.drawText(g+"",{x:270-j,y:h-24,size:19,font:a,color:(0,o.rgb)(.06,.06,.06)}),y=null!==n&&void 0!==n&&n.squareFeet?(null===n||void 0===n?void 0:n.squareFeet)+" S/F":"1 Unit",w=a.widthOfTextAtSize(y+"",19),u.drawText(y+"",{x:270-w,y:h-44,size:19,font:a,color:(0,o.rgb)(.06,.06,.06)}),h-=65,u.drawRectangle({x:15,y:h+1,width:560,height:.85,color:(0,o.rgb)(.53,.53,.53),borderColor:(0,o.rgb)(.53,.53,.53)}),N=null===(c=(0,d.bh)("products_ids"))||void 0===c||null===(s=c[null===n||void 0===n?void 0:n.productId])||void 0===s?void 0:s.name,u.drawText(N+"",{x:20,y:h-15,size:14,font:l,color:(0,o.rgb)(0,0,0)}),h-=25,u.drawRectangle({x:15,y:h+1,width:560,height:.85,color:(0,o.rgb)(.53,.53,.53),borderColor:(0,o.rgb)(.53,.53,.53)}),h-=10,h-=20,k=l.widthOfTextAtSize("Date: ",11),C=a.widthOfTextAtSize((0,d.Gv)(null===n||void 0===n?void 0:n.date)+"",12),u.drawText("Date: ",{x:270-k-C,y:h,size:11,font:l,color:(0,o.rgb)(0,0,0)}),u.drawText((0,d.Gv)(null===n||void 0===n?void 0:n.date)+"",{x:270-C,y:h,size:12,font:a,color:(0,o.rgb)(.06,.06,.06)}),u.drawText((null===n||void 0===n?void 0:n.alphaCode)+"",{x:20,y:h+4,size:22,font:a,color:(0,o.rgb)(.06,.06,.06)});case 35:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),e.next=28,Promise.all(p);case 28:return e.sent,e.next=31,t.save();case 31:h=e.sent,m=(0,d.ou)(h),window.open(m);case 34:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},1534:function(){},6459:function(e,n,t){function i(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(n,{Z:function(){return i}})},1413:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(4942);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=5174.9bfb01ff.chunk.js.map