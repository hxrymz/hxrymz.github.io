"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8553],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return u},OpenModal:function(){return s},default:function(){return l}});var r=t(2791),i=t(5408),c=t(2350),o=t(184),a="listDialog_mdh392",l=function(){var e=(0,c.bh)("listDialog")||{},n=((0,i.Z)(a),Object.keys(e));return(0,o.jsx)(o.Fragment,{children:n.map((function(n,t){var i=e[n];if(i&&i.visible){var c={};i.height&&(c.heigth=i.height),i.width,i.zIndex&&(c.zIndex=i.zIndex-1);var a={zIndex:i.zIndex},l=null,s=i.data;return i.content&&(l=r.cloneElement(i.content,{data:s})),(0,o.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,o.jsx)("div",{className:"ltr-hoe9xz",children:(0,o.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:l})}),i.data.overlay?(0,o.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:e})}}):null]},n)}}))})},s=function(e){var n=(0,c.bh)("listDialog")||{},t=(0,c.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,c.Rz)("listDialog",n),(0,c.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,c.Rz)("listDialog",n),(0,c.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",t),(0,c.wt)(a)}),125)},u=function(e){var n,t,r,i=(0,c.bh)("listDialog")||{},o=e.id;i[o]&&(i[o].observeResize&&i[o].observeInterval&&clearInterval(i[o].observeInterval),i[o].display=!1,null===(n=i[o])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,c.Rz)("listDialog",i),delete i[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)(a),setTimeout((function(){delete i[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},3990:function(e,n,t){var r=t(1413),i=t(9439),c=t(2791),o=t(2350),a=t(2647),l=(t(6021),t(9760)),s=t(9661),u=t(184),d=(0,a.PU)(),v=(0,a.Np)(),h=(0,s.a)(),b=(0,a.JC)(),m=function(e){var n,t,a,s,d,b,m=e.data,p=e.collectionName,f=e.confirm,x=(0,c.useState)(0),_=(0,i.Z)(x,2),y=(_[0],_[1]),g=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[null===(t=(0,o.bh)("extraAccountPicker"))||void 0===t?void 0:t.account],j=null===(a=(0,o.bh)("sub_account_ids"))||void 0===a?void 0:a[null===(s=(0,o.bh)("extraAccountPicker"))||void 0===s?void 0:s.subAccount];return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Agregar gastos extras"}),(0,u.jsx)("div",{className:"flexSpace"})]}),null!==(d=(0,o.bh)("extraAccountPicker"))&&void 0!==d&&d.account?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",onClick:function(){(0,o.Rz)("extraAccountPicker",null),y((0,o.M5)())},children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===g||void 0===g?void 0:g.upc_barcode}),(0,u.jsx)("div",{className:"name",children:null===g||void 0===g?void 0:g.name})]}),j?(0,u.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,u.jsx)("div",{className:"code",children:null===j||void 0===j?void 0:j.subAccount}),(0,u.jsx)("div",{className:"name",children:null===j||void 0===j?void 0:j.subAccountName})]}):null,(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(h,{width:420,handleClick:function(e,n){var t={account:e,subAccount:n};(0,o.Rz)("extraAccountPicker",t),y((0,o.M5)())}}),(0,u.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,u.jsx)(v,{init:null===(b=(0,o.bh)("extraAccountPicker"))||void 0===b?void 0:b.amount,label:"Importe",width:120,type:"number",updChanges:function(e){return function(e,n,t){var r=(0,o.bh)("extraAccountPicker")||{};t?(r[t]||(r[t]={}),r[t][e]=n):r[e]=n,(0,o.Rz)("extraAccountPicker",r),y((0,o.M5)())}("amount",e)}})}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:function(){var e=(0,r.Z)({},(0,o.bh)("extraAccountPicker"))||{},n=(0,r.Z)({},(0,o.bh)(p))||{},t=e.account+"_"+e.subAccount;e.type="debit",n[t]=e,(0,o.Rz)(p,n),(0,o.Rz)("extraAccountPicker",null),y((0,o.M5)()),f&&f(),(0,l.CloseModal)({id:m.modalID})},children:"Agregar"})})]})},p=function(e){var n,t,r=e.data,i=e.deleteItem,c=e.idKey,a=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[null===r||void 0===r?void 0:r.account],l=null===(t=(0,o.bh)("sub_account_ids"))||void 0===t?void 0:t[null===r||void 0===r?void 0:r.subAccount];return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,u.jsx)(b,{data:a,labelField:"code",infoField:"name"})}),(0,u.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,u.jsx)(b,{data:l,labelField:"subAccount",infoField:"subAccountName"})}),(0,u.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_25",children:"debit"===(null===r||void 0===r?void 0:r.type)?(0,o.Zv)(null===r||void 0===r?void 0:r.amount,2):"0.00"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon",onClick:function(){i(c)},children:(0,u.jsx)(d,{name:"outline_delete",color:"#c62828"})})]})};n.Z=function(e){var n,t=e.collectionName,r=(0,c.useState)(0),a=(0,i.Z)(r,2),s=(a[0],a[1]),d=function(){s((0,o.M5)())},v=function(e){var n=(0,o.bh)(t)||{};delete n[e],(0,o.Rz)(t,n),s((0,o.M5)())};return(0,u.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"_dsplFlx",children:(0,u.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,u.jsx)(m,{collectionName:t,confirm:d}),(0,l.OpenModal)(e)},children:"Agregar gastos"})}),(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_25",children:"Monto"})]}),(0,o.bh)(t)&&(null===(n=(0,o._2)((0,o.bh)(t)))||void 0===n?void 0:n.map((function(e,n){return(0,u.jsx)(p,{idKey:e,data:(0,o.bh)(t)[e],deleteItem:v},e)})))]})}},1232:function(e,n,t){t.d(n,{GP:function(){return d},N$:function(){return s},hF:function(){return b},i7:function(){return a},nr:function(){return l},pj:function(){return m}});var r=t(4165),i=t(1413),c=t(5861),o=t(2350),a=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,t){var c,a,l,s,d,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,i.Z)({},null===(c=(0,o.bh)((0,o.hQ)()))||void 0===c?void 0:c.filter_search_opera)).params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},s=(0,o.I7)(l),e.next=5,s;case 5:d=e.sent,(0,o.wL)("getall_collects"),(0,o.wL)(l),(0,o.wL)(d),d&&!d.error&&((0,o.Rz)("collect_list",d),(0,o.Rz)("collect_by_doc",u(d)),(0,o.Rz)("collect_by_docM",u(d)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),h(d,v)),t&&t();case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,t){var c,a,l,s,d,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,i.Z)({},null===(c=(0,o.bh)((0,o.hQ)()))||void 0===c?void 0:c.filter_search_opera)).params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},s=(0,o.I7)(l),e.next=5,s;case 5:d=e.sent,(0,o.wL)("getall_toPay"),(0,o.wL)(l),(0,o.wL)(d),d&&!d.error&&((0,o.Rz)("toPay_list",d),(0,o.Rz)("toPay_by_doc",u(d,!0)),(0,o.Rz)("toPay_by_docM",u(d,!0)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),h(d,v)),t&&t();case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var t,c,a,l,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(c=(0,o.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,o.bh)("search_acc_record")},l=(0,o.I7)(a),e.next=5,l;case 5:(s=e.sent)&&!s.error&&((0,o.Rz)("comprobante_list",s),(0,o.Rz)("comprobante_by_doc",u(s))),n&&n();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function u(e,n){var t={},r=e&&(0,o._2)(e);return r.length>0?r.map((function(r){var i,c=e[r],a=null===(i=c.document)||void 0===i?void 0:i.trim();if(!t[a]){t[a]={};["date","description","document","entryName"].forEach((function(e){t[a][e]=c[e]})),t[a].amount=0,t[a].operations=[]}if(c.type){var l=(0,o.Zv)(c.amount,2),s=(0,o.Zv)(t[a].amount,2),u=0;u=n?1*s+l*("debit"===c.type?-1:1):1*s+l*("credit"===c.type?-1:1),t[a].amount=(0,o.Zv)(u,2),t[a].operations.push(function(e){var n,t,r={};r.account=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,o.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.date=e.date;var i=(0,o.Zv)(e.amount,2);"credit"===e.type?(r.debit=0,r.credit=i):"debit"===e.type&&(r.credit=0,r.debit=i);return r}(c))}})):t=null,t}var d=function(e,n,t){return(0,o.MV)("SumDocuments",[e,n,t],(function(){var t,r=0;return e&&(null===(t=(0,o._2)(e))||void 0===t||t.map((function(t,i){var c;r+=1*(null===(c=e[t])||void 0===c?void 0:c[n])}))),r}))},v=function(e,n,t){var r,i=0;return e&&(null===(r=(0,o._2)(e))||void 0===r||r.map((function(n,t){var r,c=(0,o.Zv)(e[n].amount,2);i+=c*("credit"===(null===(r=e[n])||void 0===r?void 0:r.type)?-1:1)}))),i},h=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,t,i){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(c=(0,o.bh)("rec_by_acc")||{})[t]=v(n)||"no",(0,o.Rz)("rec_by_acc",c),i&&i();case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,t,c){var a,l,s,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,i.Z)({},null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},u=(0,o.I7)(s),e.next=5,u;case 5:(d=e.sent)&&!d.error&&h(d,t),c&&c();case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,t,c){var a,l,s,u,d,v,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,i.Z)({},null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.search_subacc_acc)).params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":n,":search":t},u=(0,o.I7)(s),e.next=5,u;case 5:d=e.sent,(0,o.wL)("searchSubAccbyCode"),(0,o.wL)(s),(0,o.wL)(d),d&&!d.error&&(h=null===(v=(0,o._2)(d))||void 0===v?void 0:v[0],c&&c(d[h]));case 10:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},6021:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=8553.6999527e.chunk.js.map