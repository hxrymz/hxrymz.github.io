"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9733],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return l},OpenModal:function(){return s},default:function(){return a}});var r=t(2791),c=t(5408),o=t(2350),u=t(184),i="listDialog_mdh392",a=function(){var n=(0,o.bh)("listDialog")||{},e=((0,c.Z)(i),Object.keys(n));return(0,u.jsx)(u.Fragment,{children:e.map((function(e,t){var c=n[e];if(c&&c.visible){var o={};c.height&&(o.heigth=c.height),c.width,c.zIndex&&(o.zIndex=c.zIndex-1);var i={zIndex:c.zIndex},a=null,s=c.data;return c.content&&(a=r.cloneElement(c.content,{data:s})),(0,u.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,u.jsx)("div",{className:"ltr-hoe9xz",children:(0,u.jsx)("div",{className:"ltr-1wao6ny",style:i,id:e,children:a})}),c.data.overlay?(0,u.jsx)("div",{className:"DialogHRMOverlay ".concat(c.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:n})}}):null]},e)}}))})},s=function(n){var e=(0,o.bh)("listDialog")||{},t=(0,o.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var c=document.getElementsByTagName("body")[0];null!==c&&void 0!==c&&c.style&&(c.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,o.Rz)("listDialog",e),(0,o.wt)(i)))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,o.Rz)("listDialog",e),(0,o.wt)(i),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)(i)}),125)},l=function(n){var e,t,r,c=(0,o.bh)("listDialog")||{},u=n.id;c[u]&&(c[u].observeResize&&c[u].observeInterval&&clearInterval(c[u].observeInterval),c[u].display=!1,null===(e=c[u])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",c),delete c[u],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(i),setTimeout((function(){delete c[u],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},3990:function(n,e,t){var r=t(1413),c=t(9439),o=t(2791),u=t(2350),i=t(2647),a=(t(6021),t(9760)),s=t(9661),l=t(184),d=(0,i.PU)(),v=(0,i.Np)(),b=(0,s.a)(),p=(0,i.JC)(),h=function(n){var e,t,i,s,d,p,h=n.data,f=n.collectionName,m=n.confirm,_=(0,o.useState)(0),x=(0,c.Z)(_,2),y=(x[0],x[1]),g=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[null===(t=(0,u.bh)("extraAccountPicker"))||void 0===t?void 0:t.account],Z=null===(i=(0,u.bh)("sub_account_ids"))||void 0===i?void 0:i[null===(s=(0,u.bh)("extraAccountPicker"))||void 0===s?void 0:s.subAccount];return(0,l.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,l.jsxs)("div",{className:"_dsplFlx ",children:[(0,l.jsx)("p",{className:"form_title",children:"Agregar gastos extras"}),(0,l.jsx)("div",{className:"flexSpace"})]}),null!==(d=(0,u.bh)("extraAccountPicker"))&&void 0!==d&&d.account?(0,l.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,l.jsxs)("div",{className:" acc_dtls",children:[(0,l.jsxs)("div",{className:"_dsplFlx",onClick:function(){(0,u.Rz)("extraAccountPicker",null),y((0,u.M5)())},children:[(0,l.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===g||void 0===g?void 0:g.upc_barcode}),(0,l.jsx)("div",{className:"name",children:null===g||void 0===g?void 0:g.name})]}),Z?(0,l.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,l.jsx)("div",{className:"code",children:null===Z||void 0===Z?void 0:Z.subAccount}),(0,l.jsx)("div",{className:"name",children:null===Z||void 0===Z?void 0:Z.subAccountName})]}):null,(0,l.jsx)("div",{className:"flexSpace"})]})}):(0,l.jsx)(b,{width:420,handleClick:function(n,e){var t={account:n,subAccount:e};(0,u.Rz)("extraAccountPicker",t),y((0,u.M5)())}}),(0,l.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,l.jsx)(v,{init:null===(p=(0,u.bh)("extraAccountPicker"))||void 0===p?void 0:p.amount,label:"Importe",width:120,type:"number",updChanges:function(n){return function(n,e,t){var r=(0,u.bh)("extraAccountPicker")||{};t?(r[t]||(r[t]={}),r[t][n]=e):r[n]=e,(0,u.Rz)("extraAccountPicker",r),y((0,u.M5)())}("amount",n)}})}),(0,l.jsx)("div",{className:"card",children:(0,l.jsx)("button",{onClick:function(){var n=(0,r.Z)({},(0,u.bh)("extraAccountPicker"))||{},e=(0,r.Z)({},(0,u.bh)(f))||{},t=n.account+"_"+n.subAccount;n.type="debit",e[t]=n,(0,u.Rz)(f,e),(0,u.Rz)("extraAccountPicker",null),y((0,u.M5)()),m&&m(),(0,a.CloseModal)({id:h.modalID})},children:"Agregar"})})]})},f=function(n){var e,t,r=n.data,c=n.deleteItem,o=n.idKey,i=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[null===r||void 0===r?void 0:r.account],a=null===(t=(0,u.bh)("sub_account_ids"))||void 0===t?void 0:t[null===r||void 0===r?void 0:r.subAccount];return(0,l.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,l.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,l.jsx)(p,{data:i,labelField:"code",infoField:"name"})}),(0,l.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,l.jsx)(p,{data:a,labelField:"subAccount",infoField:"subAccountName"})}),(0,l.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,l.jsx)("div",{className:"tr_bar tr_bar_25",children:"debit"===(null===r||void 0===r?void 0:r.type)?(0,u.Zv)(null===r||void 0===r?void 0:r.amount,2):"0.00"}),(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsx)("div",{className:"icon",onClick:function(){c(o)},children:(0,l.jsx)(d,{name:"outline_delete",color:"#c62828"})})]})};e.Z=function(n){var e,t=n.collectionName,r=(0,o.useState)(0),i=(0,c.Z)(r,2),s=(i[0],i[1]),d=function(){s((0,u.M5)())},v=function(n){var e=(0,u.bh)(t)||{};delete e[n],(0,u.Rz)(t,e),s((0,u.M5)())};return(0,l.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,l.jsx)("div",{className:"_dsplFlx",children:(0,l.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,l.jsx)(h,{collectionName:t,confirm:d}),(0,a.OpenModal)(n)},children:"Agregar gastos"})}),(0,l.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,l.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,l.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,l.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,l.jsx)("div",{className:"tr_bar tr_bar_25",children:"Monto"})]}),(0,u.bh)(t)&&(null===(e=(0,u._2)((0,u.bh)(t)))||void 0===e?void 0:e.map((function(n,e){return(0,l.jsx)(f,{idKey:n,data:(0,u.bh)(t)[n],deleteItem:v},n)})))]})}},1232:function(n,e,t){t.d(e,{GP:function(){return d},N$:function(){return s},hF:function(){return p},i7:function(){return i},nr:function(){return a},pj:function(){return h}});var r=t(4165),c=t(1413),o=t(5861),u=t(2350),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,i,a,s,d,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(o=(0,u.bh)((0,u.hQ)()))||void 0===o?void 0:o.find_acc_subacc)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},s=(0,u.I7)(a),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,u.Rz)("collect_list",d),(0,u.Rz)("collect_by_doc",l(d)),(0,u.Rz)("collect_by_docM",l(d)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),b(d,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),a=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,i,a,s,d,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(o=(0,u.bh)((0,u.hQ)()))||void 0===o?void 0:o.find_acc_subacc)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},s=(0,u.I7)(a),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,u.Rz)("toPay_list",d),(0,u.Rz)("toPay_by_doc",l(d,!0)),(0,u.Rz)("toPay_by_docM",l(d,!0)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),b(d,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,a,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,u.bh)("search_acc_record")},a=(0,u.I7)(i),n.next=5,a;case 5:(s=n.sent)&&!s.error&&((0,u.Rz)("comprobante_list",s),(0,u.Rz)("comprobante_by_doc",l(s))),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function l(n,e){var t={},r=n&&(0,u._2)(n);return r.length>0?r.map((function(r){var c=n[r],o=c.document.trim();if(!t[o]){t[o]={};["date","description","document","entryName"].forEach((function(n){t[o][n]=c[n]})),t[o].amount=0,t[o].operations=[]}if(c.type){var i=(0,u.Zv)(c.amount,2),a=(0,u.Zv)(t[o].amount,2),s=0;s=e?1*a+i*("debit"===c.type?-1:1):1*a+i*("credit"===c.type?-1:1),t[o].amount=(0,u.Zv)(s,2),t[o].operations.push(function(n){var e,t,r={};r.account=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,u.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.date=n.date;var c=(0,u.Zv)(n.amount,2);"credit"===n.type?(r.debit=0,r.credit=c):"debit"===n.type&&(r.credit=0,r.debit=c);return r}(c))}})):t=null,t}var d=function(n,e,t){return(0,u.MV)("SumDocuments",[n,e,t],(function(){var t,r=0;return n&&(null===(t=(0,u._2)(n))||void 0===t||t.map((function(t,c){var o;r+=1*(null===(o=n[t])||void 0===o?void 0:o[e])}))),r}))},v=function(n,e,t){var r,c=0;return n&&(null===(r=(0,u._2)(n))||void 0===r||r.map((function(e,t){var r,o=(0,u.Zv)(n[e].amount,2);c+=o*("credit"===(null===(r=n[e])||void 0===r?void 0:r.type)?-1:1)}))),c},b=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,c){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(o=(0,u.bh)("rec_by_acc")||{})[t]=v(e)||"no",(0,u.Rz)("rec_by_acc",o),c&&c();case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var i,a,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(i=(0,u.bh)((0,u.hQ)()))||void 0===i?void 0:i.find_acc_subacc)).params={businessId:null===(a=(0,u.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},l=(0,u.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&b(d,t),o&&o();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var i,a,s,l,d,v,b;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(i=(0,u.bh)((0,u.hQ)()))||void 0===i?void 0:i.search_subacc_acc)).params={businessId:null===(a=(0,u.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":e,":search":t},l=(0,u.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(b=null===(v=(0,u._2)(d))||void 0===v?void 0:v[0],o&&o(d[b]));case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return f},Jy:function(){return l},Mp:function(){return x},T7:function(){return h},TP:function(){return m},Y1:function(){return p},ZX:function(){return a},_0:function(){return i},bs:function(){return y},i_:function(){return g},rs:function(){return d},y1:function(){return Z}});var r=t(4165),c=t(1413),o=t(5861),u=t(2350),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,a,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},a=(0,u.I7)(i),n.next=5,a;case 5:(s=n.sent)&&((0,u.Rz)("account_list",b(s,"code")),(0,u.Rz)("account_ids",(0,u.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},l=(0,u.I7)(a),n.next=5,l;case 5:(d=n.sent)&&((0,u.Rz)("sub_account_list",p(d,"subAccount")),(0,u.Rz)("sub_account_group",s(d,"accountId")),(0,u.Rz)("sub_account_ids",(0,u.ME)(d,"sub_accountId")),i(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,a,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,u.bh)("searchQry")},a=(0,u.I7)(i),n.next=5,a;case 5:(s=n.sent)&&((0,u.Rz)("account_list",b((0,u.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,i,a,s,l,d,b;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(o=(0,u.bh)((0,u.hQ)()))||void 0===o?void 0:o.find_acc)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((a=(0,c.Z)({},null===(s=(0,u.bh)((0,u.hQ)()))||void 0===s?void 0:s.find_acc_subacc)).params={businessId:null===(l=(0,u.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,u.I7)(a),n.next=6,d;case 6:(b=n.sent)&&!b.error&&((0,u.Rz)("submayor_list",b),(0,u.Rz)("submayor_group",v(b))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,u._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,u.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var b=function(n,e){return(0,u.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],c=1*t[e];return r<c?-1:r>c?1:0}))}))},p=function(n,e){return(0,u.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],c=1*t[e];return r<c?-1:r>c?1:0}))}))},h=function(n,e,t){return(0,u.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],c=t[e];return r<c?-1:r>c?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,c.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function f(){return b((0,u.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.get_balance_general_param),i=(0,u.I7)(o),n.next=4,i;case 4:(a=n.sent)&&!a.error&&((0,u.Rz)("balance_general_param",null===a||void 0===a?void 0:a.general),(0,u.Rz)("result_sheet_params",null===a||void 0===a?void 0:a.result),(0,u.Rz)("balance_general_upd_flds",null===a||void 0===a?void 0:a.general_flds),(0,u.Rz)("result_sheet_upd_flds",null===a||void 0===a?void 0:a.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var i,a,s,l,d,v,b;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(i=(0,u.bh)((0,u.hQ)()))||void 0===i?void 0:i.find_balances)).params={businessId:null===(a=(0,u.bh)("profileUser"))||void 0===a?void 0:a.businessId,":type":e},l=(0,u.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,u._2)(d)[0],b=d[v],(0,u.Rz)(t,b),(0,u.Rz)(t+"_bck",(0,c.Z)({},b))),o&&o();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),x=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var i,a,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(i=(0,u.bh)((0,u.hQ)()))||void 0===i?void 0:i.calc_balance_general)).params={businessId:null===(a=(0,u.bh)("profileUser"))||void 0===a?void 0:a.businessId,balanceId:e,resultId:t},l=(0,u.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?o&&o(d):o&&o();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var e,t,o,i,a,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=(0,c.Z)({},null===(e=(0,u.bh)((0,u.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,u.bh)("profileUser"))||void 0===t?void 0:t.businessId},i=(0,u.I7)(o),n.next=5,i;case 5:if(!(a=n.sent)||a.error){n.next=9;break}return s=function(n){var e,t,r,c,o=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],i=n.subAccount?null===(t=a[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(c=a[n.accountId])||void 0===c?void 0:c.saldo;return{cuenta:o.code+"",nombre:o.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:i||0,type:o.type}},n.abrupt("return",b((0,u.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function g(n,e,t){return n.map((function(n){return{fecha:(0,u.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var Z=function(n,e){var t=I(n,"fecha"),r=I((0,u.JO)(e),"Date"),o={},i={};r.map((function(n,e){!function(n,e){for(var r=0;r<t.length;r++){var c=t[r];if(n===(n>0?1*c.debito:-1*c.credito)&&!o[""+e]&&!i[""+r]){o[""+e]=""+r,i[""+r]=""+e;break}}}(1*n.Amount,e)}));var a=[];return r.map((function(n,e){var r=w((0,c.Z)({},n));o[e]?(r.Comprobante=t[o[e]].comprobante,r.Documento=t[o[e]].documento,a.push(r)):(r.Comprobante="",r.Documento="",a.push(r))})),a},I=function(n,e){return n&&n.sort((function(n,t){var r=(0,u.Vd)(n[e]),c=(0,u.Vd)(t[e]);return r<c?-1:r>c?1:0}))},w=function(n){return n.hasOwnProperty("Date")&&(n.date=n.Date,delete n.Date),n.hasOwnProperty("Posting Date")&&(n.date=n["Posting Date"],delete n["Posting Date"]),n.hasOwnProperty("Check Number")&&(n.checkOrSlip=n["Check Number"],delete n["Check Number"]),n.hasOwnProperty('"Check Number"')&&(n.checkOrSlip=n['"Check Number"'],delete n['"Check Number"']),n.hasOwnProperty("Check or Slip #")&&(n.checkOrSlip=n["Check or Slip #"],delete n["Check or Slip #"]),n}},6021:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(9142);function c(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(4942);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=9733.fd262582.chunk.js.map