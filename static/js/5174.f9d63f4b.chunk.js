"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5174,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return o},OpenModal:function(){return d},default:function(){return a}});var i=t(2791),r=t(5408),c=t(2350),l=t(184),a=function(){var e=(0,c.bh)("listDialog")||{},n=((0,r.Z)("listDialog_h392"),Object.keys(e));return(0,l.jsx)(l.Fragment,{children:n.map((function(n,t){var r=e[n];if(r&&r.visible){var c={};r.height&&(c.heigth=r.height),r.width,r.zIndex&&(c.zIndex=r.zIndex-1);var a={zIndex:r.zIndex},d=null,s=r.data;return r.content&&(d=i.cloneElement(r.content,{data:s})),(0,l.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,l.jsx)("div",{className:"ltr-hoe9xz",children:(0,l.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:d})}),r.data.overlay?(0,l.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},n)}}))})},d=function(e){var n=(0,c.bh)("listDialog")||{},t=(0,c.M5)();n[t]||(n[t]={}),n[t].visible=!0;var i={};e.props?(i=e.props).modalID=t:i.modalID=t;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===n[t].width&&i.height===n[t].height||(n[t].height=i.height+10,n[t].width=i.width,(0,c.Rz)("listDialog",n),(0,c.wt)("listDialog_h392")))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=i,(0,c.Rz)("listDialog",n),(0,c.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",t),(0,c.wt)("listDialog_h392")}),125)},o=function(e){var n,t,i,r=(0,c.bh)("listDialog")||{},l=e.id;r[l]&&(r[l].observeResize&&r[l].observeInterval&&clearInterval(r[l].observeInterval),r[l].display=!1,null===(n=r[l])||void 0===n||null===(t=n.data)||void 0===t||null===(i=t.closeEvent)||void 0===i||i.call(t),(0,c.Rz)("listDialog",r),delete r[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)("listDialog_h392"),setTimeout((function(){delete r[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},5174:function(e,n,t){t.r(n);var i=t(4296),r=t(4165),c=t(1413),l=t(5861),a=t(9439),d=t(2791),o=t(2350),s=t(2647),u=(t(1534),t(9760)),v=t(7689),p=t(9661),h=t(24),m=t(184),b=(0,s.PU)(),x=((0,s.YZ)(),(0,s.Np)()),_=((0,s.tL)(),(0,p.a)()),f=(0,s.JC)(),j=(0,p.LZ)(),g=(0,h.Az)(),y="new_product_entry_comprobante";n.default=function(e){var n,t,i,s,p,h,b,_,f,j,g=e.data,C=e.confirm,w=(0,d.useState)(!1),O=(0,a.Z)(w,2),A=O[0],Z=O[1],z=(0,d.useState)(0),R=(0,a.Z)(z,2),L=(R[0],R[1]),M=(0,v.s0)();(0,d.useEffect)((function(){A||(Z(!0),(0,o.Rz)("accountPicker",{}),L((0,o.M5)()))}));var P=function(e,n,t){var i=(0,o.bh)(y)||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,o.Rz)(y,i),L((0,o.M5)())},D=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(){var n,t,i,a,d,s,v,p,h,m,b,x,_,f,j,N,k,w,I,O,A,Z,z;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=(0,o.bh)(y)).date?n.date=new Date(n.date).getTime():n.date=Date.now(),t=[],i=new Date,a=i.getFullYear()+""+(i.getMonth()+1)+"-"+(0,o.KX)(),n.comprobanteId=a,d=0,(s=(0,o.bh)("extraAccountListOnCmp")&&(0,o._2)((0,o.bh)("extraAccountListOnCmp")))&&(null===s||void 0===s||s.map(function(){var e=(0,l.Z)((0,r.Z)().mark((function e(i,l){var a,s,u,v,p,h,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v=(0,c.Z)({},n),p=(0,c.Z)({},(0,o.bh)("extraAccountListOnCmp")[i]),v.account=p.account,(h=null===(a=(0,o.bh)("account_ids"))||void 0===a?void 0:a[p.account]).payOrCollect&&(v.payOrCollect=h.payOrCollect),v.subAccount=p.subAccount,v.type=p.type,v.amount=1*p.amount,v.operationId=(0,o.M5)(),d+=1*p.amount,(m=(0,c.Z)({},null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.add_opera)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId},m.form=v,t.push(m);case 14:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())),v=0,(p=(0,o.bh)("productListOnCmp")&&(0,o._2)((0,o.bh)("productListOnCmp")))&&(null===p||void 0===p||p.map(function(){var e=(0,l.Z)((0,r.Z)().mark((function e(i,l){var a,s,u,p,h,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=(0,c.Z)({},(0,o.bh)("productListOnCmp")[i]),p=(0,c.Z)({},u),h=1*u.qty*(1*u.price),p.amount=h,p.document=n.document,p.date=n.date,p.price=1*u.price,p.qty=1*u.qty,p.comprobanteId=n.comprobanteId,p.inventoryId=(0,o.M5)(),delete p.product,delete p.account,delete p.subAccount,d+=h,v+=h,(m=(0,c.Z)({},null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.add_inventory)).params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId},m.form=p,t.push(m);case 19:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())),v>0&&((b=(0,c.Z)({},n)).type="debit",b.account="r4t1KO2r3s6LUC88",b.amount=v,b.operationId=(0,o.M5)(),(x=(0,c.Z)({},null===(h=(0,o.bh)((0,o.hQ)()))||void 0===h?void 0:h.add_opera)).params={businessId:null===(m=(0,o.bh)("profileUser"))||void 0===m?void 0:m.businessId},x.form=b,t.push(x)),d>0&&(0,o.bh)("provider_picker").account&&((O=(0,c.Z)({},n)).type="credit",O.account=null===(_=(0,o.bh)("provider_picker"))||void 0===_?void 0:_.account,O.subAccount=null===(f=(0,o.bh)("provider_picker"))||void 0===f?void 0:f.subAccount,O.providerId=null===(j=(0,o.bh)("provider_picker"))||void 0===j?void 0:j.providerId,O.amount=1*d,O.operationId=(0,o.M5)(),(A=null===(N=(0,o.bh)("account_ids"))||void 0===N?void 0:N[null===(k=(0,o.bh)("provider_picker"))||void 0===k?void 0:k.account])&&A.payOrCollect&&(O.payOrCollect=A.payOrCollect),(Z=(0,c.Z)({},null===(w=(0,o.bh)((0,o.hQ)()))||void 0===w?void 0:w.add_opera)).params={businessId:null===(I=(0,o.bh)("profileUser"))||void 0===I?void 0:I.businessId},Z.form=O,t.push(Z)),z=t.map(function(){var e=(0,l.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,o.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=17,Promise.all(z);case 17:(null===g||void 0===g?void 0:g.modalID)&&(0,u.CloseModal)({id:null===g||void 0===g?void 0:g.modalID}),setTimeout((function(){(0,o.Rz)("extraAccountListOnCmp",null),(0,o.Rz)("productListOnCmp",null),(0,o.Rz)("provider_picker",null),(0,o.Rz)(y,null),L((0,o.M5)()),C&&C(),M({pathname:"/accounting-ledger",search:"?cId=".concat(a)})}),400);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null===(n=(0,o.bh)("account_ids"))||void 0===n||n[null===(t=(0,o.bh)("accountPicker"))||void 0===t?void 0:t.account],null===(i=(0,o.bh)("sub_account_ids"))||void 0===i||i[null===(s=(0,o.bh)("accountPicker"))||void 0===s?void 0:s.subAccount];return(0,m.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Entrada de Mercancias"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)(x,{init:null===(p=(0,o.bh)(y))||void 0===p?void 0:p.date,label:"Fecha",width:120,updChanges:function(e){return P("date",e)}}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(x,{init:null===(h=(0,o.bh)(y))||void 0===h?void 0:h.document,label:"Documento",width:120,updChanges:function(e){return P("document",e)}})]}),(0,m.jsx)(x,{init:null===(b=(0,o.bh)(y))||void 0===b?void 0:b.description,label:"Descripcion",width:520,updChanges:function(e){return P("description",e)}}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(N,{})]}),(0,m.jsx)(k,{}),(0,m.jsx)(I,{}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),null!==(_=(0,o.bh)(y))&&void 0!==_&&_.document&&null!==(f=(0,o.bh)("provider_picker"))&&void 0!==f&&f.account&&(null===(j=(0,o._2)((0,o.bh)("productListOnCmp")))||void 0===j?void 0:j.length)>0?(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("button",{onClick:D,children:"Guardar"})}):null]})]})};var N=function(e){var n,t,i=(0,d.useState)(0),r=(0,a.Z)(i,2),c=(r[0],r[1]),l=null===(n=(0,o.bh)("providers_ids"))||void 0===n?void 0:n[null===(t=(0,o.bh)("provider_picker"))||void 0===t?void 0:t.providerId];return(0,m.jsx)("div",{children:null!==l&&void 0!==l&&l.name?(0,m.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(){(0,o.Rz)("provider_picker",null),c((0,o.M5)())},children:null===l||void 0===l?void 0:l.name})}),(0,m.jsx)("div",{className:"flexSpace"})]})}):(0,m.jsx)(j,{placeholder:"buscar una provedor",width:320,handleClick:function(e){var n={providerId:e.providerId,account:e.account,subAccount:e.subAccount};(0,o.Rz)("provider_picker",n),c((0,o.M5)())}})})},k=function(e){var n,t,r,l,s,u,v,p,h;(0,i.Z)(e);var b=(0,d.useState)(0),_=(0,a.Z)(b,2),f=(_[0],_[1]),j=null===(n=(0,o.bh)("products_ids"))||void 0===n?void 0:n[null===(t=(0,o.bh)("product_picker_in"))||void 0===t?void 0:t.productId],y=function(e,n,t){var i=(0,o.bh)("product_picker_in")||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,o.Rz)("product_picker_in",i),f((0,o.M5)())},N=function(e){var n=(0,o.bh)("productListOnCmp")||{};delete n[e],(0,o.Rz)("productListOnCmp",n),f((0,o.M5)())};return(0,m.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(r=(0,o.bh)("product_picker_in"))&&void 0!==r&&r.productId?(0,m.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsxs)("div",{className:"_dsplFlx",onClick:function(e){(0,o.Rz)("product_picker_in",null),f((0,o.M5)())},children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===j||void 0===j?void 0:j.upc_barcode}),(0,m.jsx)("div",{className:"name",children:null===j||void 0===j?void 0:j.name})]}),(0,m.jsx)("div",{className:"flexSpace"})]})}):(0,m.jsx)(g,{width:420,handleClick:function(e){var n={productId:e.productId};(0,o.Rz)("product_picker_in",n),f((0,o.M5)())}}),null!==(l=(0,o.bh)("product_picker_in"))&&void 0!==l&&l.productId?(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)(x,{init:null===(s=(0,o.bh)("product_picker_in"))||void 0===s?void 0:s.qty,label:"Cantidad",width:120,type:"number",updChanges:function(e){return y("qty",e)}}),(0,m.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,m.jsx)(x,{init:null===(u=(0,o.bh)("product_picker_in"))||void 0===u?void 0:u.price,label:"Precio",width:120,type:"number",updChanges:function(e){return y("price",e)}})}),(0,m.jsx)("div",{className:"flexSpace"}),null!==(v=(0,o.bh)("product_picker_in"))&&void 0!==v&&v.qty&&null!==(p=(0,o.bh)("product_picker_in"))&&void 0!==p&&p.price?(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("button",{onClick:function(){var e=(0,c.Z)({},(0,o.bh)("product_picker_in"))||{},n=(0,c.Z)({},(0,o.bh)("product_picker_in"))||{},t=(0,c.Z)({},(0,o.bh)("productListOnCmp"))||{};t[e.productId]=e,(0,o.Rz)("productListOnCmp",t),n.productId=null,n.qty="",n.price="",(0,o.Rz)("product_picker_in",n),f((0,o.M5)())},children:"Agregar"})}):null]}):null,(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_50 ",children:"Producto"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Qty"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Precio"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_5"})]}),(0,o.bh)("productListOnCmp")&&(null===(h=(0,o._2)((0,o.bh)("productListOnCmp")))||void 0===h?void 0:h.map((function(e,n){return(0,m.jsx)(C,{idKey:e,data:(0,o.bh)("productListOnCmp")[e],deleteItem:N},e)})))]})},C=function(e){var n,t=e.data,i=e.deleteItem,r=e.idKey,c=null===(n=(0,o.bh)("products_ids"))||void 0===n?void 0:n[null===t||void 0===t?void 0:t.productId];return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_50",children:null===c||void 0===c?void 0:c.name}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,o.Zv)(null===t||void 0===t?void 0:t.qty,2)}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,o.Zv)(null===t||void 0===t?void 0:t.price,2)}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"icon",onClick:function(){i(r)},children:(0,m.jsx)(b,{name:"outline_delete",color:"#c62828"})})]})},w=function(e){var n,t,i,r,l,s,v=e.data,p=(0,d.useState)(0),h=(0,a.Z)(p,2),b=(h[0],h[1]),f=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[null===(t=(0,o.bh)("extraAccountPicker"))||void 0===t?void 0:t.account],j=null===(i=(0,o.bh)("sub_account_ids"))||void 0===i?void 0:i[null===(r=(0,o.bh)("extraAccountPicker"))||void 0===r?void 0:r.subAccount];return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Agregar gastos extras"}),(0,m.jsx)("div",{className:"flexSpace"})]}),null!==(l=(0,o.bh)("extraAccountPicker"))&&void 0!==l&&l.account?(0,m.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsxs)("div",{className:"_dsplFlx",onClick:function(){(0,o.Rz)("extraAccountPicker",null),b((0,o.M5)())},children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===f||void 0===f?void 0:f.upc_barcode}),(0,m.jsx)("div",{className:"name",children:null===f||void 0===f?void 0:f.name})]}),j?(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"code",children:null===j||void 0===j?void 0:j.subAccount}),(0,m.jsx)("div",{className:"name",children:null===j||void 0===j?void 0:j.subAccountName})]}):null,(0,m.jsx)("div",{className:"flexSpace"})]})}):(0,m.jsx)(_,{width:420,handleClick:function(e,n){var t={account:e,subAccount:n};(0,o.Rz)("extraAccountPicker",t),b((0,o.M5)())}}),(0,m.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,m.jsx)(x,{init:null===(s=(0,o.bh)("extraAccountPicker"))||void 0===s?void 0:s.amount,label:"Importe",width:120,type:"number",updChanges:function(e){return function(e,n,t){var i=(0,o.bh)("extraAccountPicker")||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,o.Rz)("extraAccountPicker",i),b((0,o.M5)())}("amount",e)}})}),(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("button",{onClick:function(){var e=(0,c.Z)({},(0,o.bh)("extraAccountPicker"))||{},n=(0,c.Z)({},(0,o.bh)("extraAccountListOnCmp"))||{},t=e.account+"_"+e.subAccount;e.type="debit",n[t]=e,(0,o.Rz)("extraAccountListOnCmp",n),(0,o.Rz)("extraAccountPicker",null),b((0,o.M5)()),(0,u.CloseModal)({id:v.modalID})},children:"Agregar"})})]})},I=function(e){var n;(0,i.Z)(e);var t=(0,d.useState)(0),r=(0,a.Z)(t,2),c=(r[0],r[1]),l=function(e){var n=(0,o.bh)("extraAccountListOnCmp")||{};delete n[e],(0,o.Rz)("extraAccountListOnCmp",n),c((0,o.M5)())};return(0,m.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(w,{}),(0,u.OpenModal)(e)},children:"Agregar gastos"})}),(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Monto"})]}),(0,o.bh)("extraAccountListOnCmp")&&(null===(n=(0,o._2)((0,o.bh)("extraAccountListOnCmp")))||void 0===n?void 0:n.map((function(e,n){return(0,m.jsx)(O,{idKey:e,data:(0,o.bh)("extraAccountListOnCmp")[e],deleteItem:l},e)})))]})},O=function(e){var n,t,i=e.data,r=e.deleteItem,c=e.idKey,l=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[null===i||void 0===i?void 0:i.account],a=null===(t=(0,o.bh)("sub_account_ids"))||void 0===t?void 0:t[null===i||void 0===i?void 0:i.subAccount];return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,m.jsx)(f,{data:l,labelField:"code",infoField:"name"})}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,m.jsx)(f,{data:a,labelField:"subAccount",infoField:"subAccountName"})}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"debit"===(null===i||void 0===i?void 0:i.type)?(0,o.Zv)(null===i||void 0===i?void 0:i.amount,2):"0.00"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"icon",onClick:function(){r(c)},children:(0,m.jsx)(b,{name:"outline_delete",color:"#c62828"})})]})}},1534:function(){},4942:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(9142);function r(e,n,t){return(n=(0,i.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},4296:function(e,n,t){function i(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(n,{Z:function(){return i}})},1413:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(4942);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=5174.f9d63f4b.chunk.js.map