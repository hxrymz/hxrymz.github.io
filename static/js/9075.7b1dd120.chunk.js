"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9075,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return l},OpenModal:function(){return c},default:function(){return d}});var r=t(2791),o=t(5408),i=t(2350),s=t(184),a="listDialog_mdh392",d=function(){var e=(0,i.bh)("listDialog")||{},n=((0,o.Z)(a),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:n.map((function(n,t){var o=e[n];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var a={zIndex:o.zIndex},d=null,c=o.data;return o.content&&(d=r.cloneElement(o.content,{data:c})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:d})}),o.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,i.bh)("listDialog")||{},t=(0,i.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,i.Rz)("listDialog",n),(0,i.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,i.Rz)("listDialog",n),(0,i.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(a)}),125)},l=function(e){var n,t,r,o=(0,i.bh)("listDialog")||{},s=e.id;o[s]&&(o[s].observeResize&&o[s].observeInterval&&clearInterval(o[s].observeInterval),o[s].display=!1,null===(n=o[s])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((function(){delete o[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},4050:function(e,n,t){t.d(n,{Ht:function(){return _},Je:function(){return m},Jy:function(){return l},Mp:function(){return g},T7:function(){return b},TP:function(){return x},Y1:function(){return h},ZX:function(){return d},_0:function(){return a},bs:function(){return y},h1:function(){return p},i_:function(){return w},rs:function(){return u},y1:function(){return I}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("account_list",f(c,"code")),(0,s.Rz)("account_ids",(0,s.ME)(c,"accountId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,d,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},l=(0,s.I7)(d),e.next=5,l;case 5:(u=e.sent)&&((0,s.Rz)("sub_account_list",h(u,"subAccount")),(0,s.Rz)("sub_account_group",c(u,"accountId")),(0,s.Rz)("sub_account_ids",(0,s.ME)(u,"sub_accountId")),a(),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function c(e,n){n=n||"id";var t={};return e.length>0?e.map((function(e){e.subAccount&&(t[e[n]]||(t[e[n]]=[]),t[e[n]].push(e))})):t=null,t}var l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry")},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("account_list",f((0,s.jQ)(c),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c,l,u,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.find_acc)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account},null!==n&&void 0!==n&&n.subAccount&&((d=(0,o.Z)({},null===(c=(0,s.bh)((0,s.hQ)()))||void 0===c?void 0:c.find_acc_subacc)).params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===n||void 0===n?void 0:n.subAccount}),console.log(d),u=(0,s.I7)(d),e.next=7,u;case 7:f=e.sent,console.log(f),f&&!f.error&&((0,s.Rz)("submayor_list",f),(0,s.Rz)("submayor_group",v(f))),t&&t();case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function v(e,n){var t={operations:[]},r=e&&(0,s._2)(e);return r.length>0?r.map((function(n){var r=e[n];r.type&&t.operations.push(function(e){var n,t,r={};r.account=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,s.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.document=e.document,r.date=e.date,"credit"===e.type?(r.debit=0,r.credit=e.amount):"debit"===e.type&&(r.credit=0,r.debit=e.amount);return r}(r))})):t=null,t}var f=function(e,n){return(0,s.MV)("sortAccounts",[e,n],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},h=function(e,n){return(0,s.MV)("sortSubAccounts",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},p=function(e){return(0,s.MV)("sortComprobantesByDate",[e],(function(){var n="date";return e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0}))}))},b=function(e,n,t){return(0,s.MV)("calcSubmayor",[e,n,t],(function(){var n="date",t=e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0})),r=0;return t.map((function(e){return function(e){var n,t=(0,o.Z)({},e);return"credit"===(null===e||void 0===e||null===(n=e.account)||void 0===n?void 0:n.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(e)}))}))};function m(){return f((0,s.bh)("sub_account_list").map((function(e){var n,t=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:e.subAccount+"",nombre_sub_cuenta:e.subAccountName}})),"cuenta")}var x=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.get_balance_general_param),a=(0,s.I7)(i),e.next=4,a;case 4:(d=e.sent)&&!d.error&&((0,s.Rz)("balance_general_param",null===d||void 0===d?void 0:d.general),(0,s.Rz)("result_sheet_params",null===d||void 0===d?void 0:d.result),(0,s.Rz)("balance_general_upd_flds",null===d||void 0===d?void 0:d.general_flds),(0,s.Rz)("result_sheet_upd_flds",null===d||void 0===d?void 0:d.result_flds)),n&&n();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a,d,c,l,u,v,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.find_balances)).params={businessId:null===(d=(0,s.bh)("profileUser"))||void 0===d?void 0:d.businessId,":type":n},l=(0,s.I7)(c),e.next=5,l;case 5:(u=e.sent)&&!u.error&&(v=(0,s._2)(u)[0],f=u[v],(0,s.Rz)(t,f),(0,s.Rz)(t+"_bck",(0,o.Z)({},f))),i&&i();case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),g=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a,d,c,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.calc_balance_general)).params={businessId:null===(d=(0,s.bh)("profileUser"))||void 0===d?void 0:d.businessId,balanceId:n,resultId:t},l=(0,s.I7)(c),e.next=5,l;case 5:(u=e.sent)&&!u.error?i&&i(u):i&&i();case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),y=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,o.Z)({},null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.calc_balance_comprobacion)).params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId},a=(0,s.I7)(i),e.next=5,a;case 5:if(!(d=e.sent)||d.error){e.next=9;break}return c=function(e){var n,t,r,o,i=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.accountId],a=e.subAccount?null===(t=d[e.accountId])||void 0===t||null===(r=t.sub[e.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=d[e.accountId])||void 0===o?void 0:o.saldo;return{cuenta:i.code+"",nombre:i.name,sub_cuenta:e.subAccount?e.subAccount:"",nombre_sub_cuenta:e.subAccount?e.subAccountName:"",saldo:a||0,type:i.type}},e.abrupt("return",f((0,s.bh)("sub_account_list").map(c),"cuenta"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function w(e,n,t){return e.map((function(e){return{fecha:(0,s.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,debito:e.debit,credito:e.credit,saldo:e.saldo,cuenta:n,sub_cuenta:t||""}}))}var I=function(e,n,t){var r=z(e,"fecha"),o=function(e){var n={};for(var t in e)n[t]=e[t];return n}(r),i=function(e){var n={};for(var t in e)n[t]=Z(e[t]);return n}(n),a={},d={},c={},l=r,u=i;t&&(l=i,u=r);var v=function(e,n){for(var t in o){var r,i,s,l,u=o[t],v=1*e.Amount,f=v>0?1*u.debito:-1*u.credito;if(a[""+n])break;null===(r=u.documento)||void 0===r||r.trim(),null===(i=e.checkOrSlip)||void 0===i||i.trim();if((null===(s=u.documento)||void 0===s?void 0:s.trim())===(null===(l=e.checkOrSlip)||void 0===l?void 0:l.trim())&&f===v){a[""+n]=""+t,d[""+t]=""+n,delete o[t],delete c[""+n];break}if(f===v){a[""+n]=""+t,d[""+t]=""+n,delete o[t],delete c[""+n];break}c[""+n]="NtF"}};for(var f in u){var h=u[f];h.checkOrSlip&&v(h,f)}for(var p in u){v(u[p],p)}var b=[];for(var m in(0,s._2)(c).map((function(e,n){})),u){var x=u[m];a[m]?(x.Comprobante=l[a[m]].comprobante,x.Documento=l[a[m]].documento,b.push(x)):(x.Comprobante="",x.Documento="",b.push(x))}return b},z=function(e,n){return e&&e.sort((function(e,t){var r=(0,s.Vd)(e[n]),o=(0,s.Vd)(t[n]);return r<o?-1:r>o?1:0}))},Z=function(e){var n=(0,o.Z)({},e);return n.hasOwnProperty("Date")&&(n.date=n.Date,delete n.Date),n.hasOwnProperty("Posting Date")&&(n.date=n["Posting Date"],delete n["Posting Date"]),n.hasOwnProperty("Check Number")&&(n.checkOrSlip=n["Check Number"],delete n["Check Number"]),n.hasOwnProperty('"Check Number"')&&(n.checkOrSlip=n['"Check Number"'],delete n['"Check Number"']),n.hasOwnProperty("Check or Slip #")&&(n.checkOrSlip=n["Check or Slip #"],delete n["Check or Slip #"]),n}},713:function(e,n,t){t.d(n,{QJ:function(){return u},Rd:function(){return d},VI:function(){return m},Ve:function(){return l},WA:function(){return p},ZW:function(){return a},Zj:function(){return f},dZ:function(){return v},ii:function(){return c},nj:function(){return h},tH:function(){return b}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.get_inventory_prod)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":productId":n},c=(0,s.I7)(d),e.next=5,c;case 5:(l=e.sent)&&((0,s.Rz)("inv_products_list",f((0,s.jQ)(l.list),"name")),(0,s.Rz)("inv_products_stock",l.stock),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.get_prod_stock)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:n},c=(0,s.I7)(d),e.next=5,c;case 5:(l=e.sent)&&((u=(0,o.Z)({},(0,s.bh)("products_stock")))[n]=l.stock,(0,s.Rz)("products_stock",u),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_prods)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("products_list",f(c,"name")),(0,s.Rz)("products_ids",(0,s.ME)((0,s.jQ)(c),"productId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_prod)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry")},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("products_list",f((0,s.jQ)(c),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_entry_invoices)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("movements_list",f(c,"date")),(0,s.Rz)("movements_ids",(0,s.ME)((0,s.jQ)(c),"inventoryId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_entry_invoice)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchMovQry")},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("movements_list",f((0,s.jQ)(c),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var f=function(e,n){return(0,s.MV)("sortProducts",[e],(function(){return e&&e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0}))}))},h=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_prod)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:n},c=(0,s.I7)(d),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_inventory)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,inventoryId:n},c=(0,s.I7)(d),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_entry_invoice)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,entriesInvoiceId:n},c=(0,s.I7)(d),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.entry_invoice_acc_2)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,entriesInvoiceId:n},c=(0,s.I7)(d),e.next=5,c;case 5:(l=e.sent)&&t&&t(l);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},9075:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(1413),o=t(9439),i=t(2791),s=(t(261),t(2350)),a=t(7689),d=t(9760),c=t(2647),l=t(4050),u=t(713),v=t(6677),f=t(4165),h=t(5861),p=t(6963),b=t(4e3),m=0,x=function(){var e=(0,h.Z)((0,f.Z)().mark((function e(n){var t,r,o,i,a,d,c,l,u,v,h,x,_,g,y,w,I,z,Z,T,S,k,N,j,F,A,R,O,Q,q,D,P,C,M,U,B,E,V,L,W,H,J,G,K,$,Y,X,ee,ne;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.PDFDocument.create();case 2:return(c=e.sent).registerFontkit(b.Z),e.next=6,c.embedFont(p.StandardFonts.TimesRoman);case 6:return l=e.sent,e.next=9,c.embedFont(p.StandardFonts.TimesRomanBold);case 9:return u=e.sent,e.next=12,c.embedFont(p.StandardFonts.TimesRomanBold);case 12:if(v=e.sent,!(0,s.bh)("modernFontReport")){e.next=35;break}return"https://qvamarkets.com/gql_api/getStatic?fileName=Roboto-Bold.ttf",e.next=17,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=Roboto-Bold.ttf").then((function(e){return e.arrayBuffer()}));case 17:return h=e.sent,e.next=20,c.embedFont(h);case 20:return u=e.sent,"https://qvamarkets.com/gql_api/getStatic?fileName=ggSans-Italic.ttf",e.next=24,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=ggSans-Italic.ttf").then((function(e){return e.arrayBuffer()}));case 24:return x=e.sent,e.next=27,c.embedFont(x);case 27:return l=e.sent,"https://qvamarkets.com/gql_api/getStatic?fileName=ggSans-Medium.ttf",e.next=31,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=ggSans-Medium.ttf").then((function(e){return e.arrayBuffer()}));case 31:return _=e.sent,e.next=34,c.embedFont(_);case 34:v=e.sent;case 35:return g=c.addPage(),y=g.getSize(),y.width,w=y.height,I=10,m=w-40,z=v.widthOfTextAtSize(null===n||void 0===n?void 0:n.document,12),Z=l.widthOfTextAtSize("Invoice: ",11),g.drawText("Invoice: ",{x:580-z-Z,y:m,size:11,font:l,color:(0,p.rgb)(0,0,0)}),g.drawText(null===n||void 0===n?void 0:n.document,{x:580-z,y:m,size:12,font:v,color:(0,p.rgb)(0,0,0)}),T=w-30,g.drawText("Granite Concepts",{x:20,y:T,size:13,font:u,color:(0,p.rgb)(0,0,0)}),g.drawText("4504 Poplar Level Rd",{x:20,y:T-15,size:10,font:l,color:(0,p.rgb)(0,0,0)}),g.drawText("Louisville, KY 40213",{x:20,y:T-30,size:10,font:l,color:(0,p.rgb)(0,0,0)}),g.drawText("(502) 742-2473",{x:20,y:T-45,size:10,font:u,color:(0,p.rgb)(0,0,0)}),g.drawText("graniteconceptsky@gmail.com",{x:20,y:T-60,size:10,font:l,color:(0,p.rgb)(0,0,0)}),g.drawText("graniteconceptsky.com",{x:20,y:T-75,size:10,font:l,color:(0,p.rgb)(0,0,0)}),m-=20,S=l.widthOfTextAtSize("Date: ",11),k=u.widthOfTextAtSize((0,s.Gv)(null===n||void 0===n?void 0:n.date)+"",12),g.drawText("Date: ",{x:580-S-k,y:m,size:11,font:l,color:(0,p.rgb)(0,0,0)}),g.drawText((0,s.Gv)(null===n||void 0===n?void 0:n.date)+"",{x:580-k,y:m,size:12,font:u,color:(0,p.rgb)(.06,.06,.06)}),m-=20,N=null===(t=(0,s.bh)("providers_ids"))||void 0===t||null===(r=t[null===n||void 0===n||null===(o=n.customer)||void 0===o?void 0:o.providerId])||void 0===r?void 0:r.name,j=l.widthOfTextAtSize("Bill To: ",11),F=u.widthOfTextAtSize(N+"",12),g.drawText("Bill To: ",{x:580-j-F,y:m,size:11,font:l,color:(0,p.rgb)(0,0,0)}),g.drawText(N+"",{x:580-F,y:m,size:12,font:u,color:(0,p.rgb)(0,0,0)}),m-=50,g.drawRectangle({x:15,y:m+1,width:560,height:.85,color:(0,p.rgb)(.53,.53,.53),borderColor:(0,p.rgb)(.53,.53,.53)}),g.drawText((null===n||void 0===n?void 0:n.description)+"",{x:20,y:m-11,size:10,font:l,color:(0,p.rgb)(0,0,0)}),m-=20,g.drawRectangle({x:15,y:m+1,width:560,height:.85,color:(0,p.rgb)(.53,.53,.53),borderColor:(0,p.rgb)(.53,.53,.53)}),m-=18,g.drawText((0,s.zE)(4)+"",{x:20,y:m,size:13,font:u,color:(0,p.rgb)(0,0,0)}),A=u.widthOfTextAtSize((0,s.zE)(14)+"",12),g.drawText((0,s.zE)(10)+"",{x:480-A,y:m,size:12,font:u,color:(0,p.rgb)(0,0,0)}),R=u.widthOfTextAtSize((0,s.zE)(14)+"",12),g.drawText((0,s.zE)(14)+"",{x:560-R,y:m,size:12,font:u,color:(0,p.rgb)(0,0,0)}),m-=8,g.drawRectangle({x:15,y:m+1,width:560,height:.95,color:(0,p.rgb)(.53,.53,.53),borderColor:(0,p.rgb)(.53,.53,.53)}),O=(null===n||void 0===n?void 0:n.products)||[],Array.isArray(O)&&O.map((function(e,n){var t,r,o,i,a=null===(t=(0,s.bh)("products_ids"))||void 0===t||null===(r=t[null===e||void 0===e?void 0:e.product])||void 0===r?void 0:r.name;m-=16,a&&g.drawText(a+"",{x:20,y:m,size:I,font:l,color:(0,p.rgb)(0,0,0)});var d=null!==e&&void 0!==e&&e.qty?null===(o=1*(null===e||void 0===e?void 0:e.qty))||void 0===o?void 0:o.toFixed(2):"0.00",c=l.widthOfTextAtSize(d+"",I);g.drawText(d+"",{x:480-c,y:m,size:I,font:l,color:(0,p.rgb)(0,0,0)});var u=null!==e&&void 0!==e&&e.qty?null===(i=(null===e||void 0===e?void 0:e.salePrice)*(null===e||void 0===e?void 0:e.qty)*1)||void 0===i?void 0:i.toFixed(2):"0.00",v=l.widthOfTextAtSize(u+"",I);g.drawText(u+"",{x:560-v,y:m,size:I,font:l,color:(0,p.rgb)(0,0,0)})})),Q=(0,s._2)(null===n||void 0===n?void 0:n.extras)||[],Array.isArray(Q)&&Q.map((function(e,t){var r,o,i,s=null===(r=n.extras)||void 0===r?void 0:r[e],a=s.description;m-=16,a&&g.drawText(a+"",{x:20,y:m,size:I,font:l,color:(0,p.rgb)(0,0,0)});var d=null!==s&&void 0!==s&&s.qty?null===(o=1*(null===s||void 0===s?void 0:s.qty))||void 0===o?void 0:o.toFixed(2):"0.00",c=l.widthOfTextAtSize(d+"",I);g.drawText(d+"",{x:480-c,y:m,size:I,font:l,color:(0,p.rgb)(0,0,0)});var u=null!==s&&void 0!==s&&s.qty?null===(i=(null===s||void 0===s?void 0:s.salePrice)*(null===s||void 0===s?void 0:s.qty)*1)||void 0===i?void 0:i.toFixed(2):"0.00",v=l.widthOfTextAtSize(u+"",I);g.drawText(u+"",{x:560-v,y:m,size:I,font:l,color:(0,p.rgb)(0,0,0)})})),m-=28,g.drawRectangle({x:15,y:m+1,width:560,height:.85,color:(0,p.rgb)(.53,.53,.53),borderColor:(0,p.rgb)(.53,.53,.53)}),q=500,m-=20,D=null!==n&&void 0!==n&&n.amount?null===n||void 0===n||null===(i=n.amount)||void 0===i?void 0:i.toFixed(2):"0.00",P=l.widthOfTextAtSize(D+"",I),g.drawText(D+"",{x:560-P,y:m,size:I,font:l,color:(0,p.rgb)(.13,.13,.13)}),C=l.widthOfTextAtSize("SubTotal",I),g.drawText("SubTotal",{x:q-C,y:m,size:I,font:l,color:(0,p.rgb)(0,0,0)}),m-=16,M=null!==n&&void 0!==n&&n.hasTax?null===n||void 0===n||null===(a=n.hasTax)||void 0===a?void 0:a.toFixed(2):"0.00",U=l.widthOfTextAtSize(M+"",I),g.drawText(M+"",{x:560-U,y:m,size:I,font:l,color:(0,p.rgb)(.13,.13,.13)}),B=l.widthOfTextAtSize("Taxes",I),g.drawText("Taxes",{x:q-B,y:m,size:I,font:l,color:(0,p.rgb)(0,0,0)}),E=null!==n&&void 0!==n&&n.hasTax?(null===n||void 0===n?void 0:n.hasTax)+(null===n||void 0===n?void 0:n.amount):1*(null===n||void 0===n?void 0:n.amount),m-=16,V=E?null===E||void 0===E?void 0:E.toFixed(2):"0.00",L=v.widthOfTextAtSize(V+"",11),g.drawText(V+"",{x:560-L,y:m,size:11,font:v,color:(0,p.rgb)(0,0,0)}),W=v.widthOfTextAtSize("Total",11),g.drawText("Total",{x:q-W,y:m,size:11,font:v,color:(0,p.rgb)(0,0,0)}),m-=16,H=null!==n&&void 0!==n&&n.hasAdvancePay?null===(d=-1*(null===n||void 0===n?void 0:n.hasAdvancePay))||void 0===d?void 0:d.toFixed(2):"0.00",J=l.widthOfTextAtSize(""+H,11),g.drawText(""+H,{x:560-J,y:m,size:11,font:l,color:(0,p.rgb)(.13,.13,.13)}),G=l.widthOfTextAtSize("Advance Payment",11),g.drawText("Advance Payment",{x:q-G,y:m,size:11,font:l,color:(0,p.rgb)(0,0,0)}),m-=16,$=(K=E+1*H)?null===K||void 0===K?void 0:K.toFixed(2):"0.00",Y=v.widthOfTextAtSize($+"",11),g.drawText($+"",{x:560-Y,y:m,size:11,font:v,color:(0,p.rgb)(0,0,0)}),X=v.widthOfTextAtSize("Balance Due",11),g.drawText("Balance Due",{x:q-X,y:m,size:11,font:v,color:(0,p.rgb)(0,0,0)}),e.next=115,c.save();case 115:ee=e.sent,ne=(0,s.ou)(ee),window.open(ne);case 118:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=t(184),g=(0,c.PU)(),y=function(e){var n,t,c,f,h,p,b,m,y,z=e.data,Z=e.item,T=(0,i.useState)(0),S=(0,o.Z)(T,2),k=(S[0],S[1]);(0,i.useEffect)((function(){var e,n,t;(0,s.Rz)("inv_products_list",null),(0,s.Rz)("inv_products_stock",null),null!==(e=(0,s.bh)("providers_ids"))&&void 0!==e&&null!==(n=e[null===Z||void 0===Z||null===(t=Z.customer)||void 0===t?void 0:t.providerId])&&void 0!==n&&n.name||(0,v.Je)(N),(0,s.bh)("products_ids")||(0,u.ii)(N),(0,l.Ht)("global_accounts","global_account_params",N),N()}),[Z.productId]);var N=function(){k((0,s.M5)())},j=((0,a.s0)(),function(e){(0,d.CloseModal)({id:z.modalID})}),F=null!==Z&&void 0!==Z&&Z.hasTax?(null===Z||void 0===Z?void 0:Z.hasTax)+(null===Z||void 0===Z?void 0:Z.amount):1*(null===Z||void 0===Z?void 0:Z.amount);return(0,_.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("p",{className:"title_collect gSansFont",children:"Invoice:"}),(0,_.jsx)("p",{className:"title_collect fntW600 gSansFont",style:{color:"#646cff"},children:null===Z||void 0===Z?void 0:Z.document}),(0,_.jsx)("div",{className:"flexSpace"}),(0,s.I0)()?(0,_.jsx)("div",{className:"code comprobante_id  gSansFont",style:{color:"#646cff",paddingTop:10},children:null===Z||void 0===Z?void 0:Z.comprobanteId}):null,(0,_.jsx)("div",{className:"icon_print",onClick:function(){var e=(0,r.Z)({},Z);x(e)},children:(0,_.jsx)(g,{name:"printer",color:"var(--hrm_palette-inverse-background-b)"})})]}),(0,_.jsx)("div",{className:"acc_dtls",style:{marginTop:10,marginLeft:2},children:(0,_.jsxs)("div",{className:"_dsplFlx",children:[(0,_.jsx)("div",{className:"name",children:(0,_.jsx)("div",{className:" code gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)"},children:(0,s.sJ)(null===Z||void 0===Z?void 0:Z.date)})}),(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsxs)("div",{className:"_dsplFlx",children:[(0,_.jsx)("div",{className:"name gSansFont",style:{marginRight:5,color:"var(--hrm_palette-item_coll_gray)"},children:"Bill To:"}),(0,_.jsx)("div",{className:"code gSansFont",style:{color:"#646cff"},children:null===(n=(0,s.bh)("providers_ids"))||void 0===n||null===(t=n[null===Z||void 0===Z||null===(c=Z.customer)||void 0===c?void 0:c.providerId])||void 0===t?void 0:t.name})]})]})}),(0,_.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:8},children:[(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("div",{className:"_dsplFlx",children:(0,_.jsx)("div",{className:"name gSansFont",style:{color:"var(--hrm_palette-item_coll_gray)"},children:null===Z||void 0===Z?void 0:Z.description})})]}),(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,_.jsx)("div",{className:"tr_bar_70",style:{textAlign:"left",paddingLeft:14},children:(0,s.zE)(4)}),(0,_.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,s.zE)(10)}),(0,_.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,s.zE)(14)})]}),(0,_.jsxs)("div",{className:"scollVh subMHeight",children:[Z.products&&(null===(f=Z.products)||void 0===f?void 0:f.map((function(e){return(0,_.jsx)(w,{element:e,idKey:e.inventoryId,close:j},e.inventoryId)}))),Z.extras&&(null===(h=(0,s._2)(Z.extras))||void 0===h?void 0:h.map((function(e){return(0,_.jsx)(I,{element:Z.extras[e],idKey:e,close:j},e)}))),(0,_.jsxs)("div",{className:"_dsplFlx totalsGrid",style:{margin:"19px 15px 10px"},children:[(0,_.jsx)("div",{className:"tr_bar_70"}),(0,_.jsxs)("div",{className:"tr_bar_30 brdTp",children:[(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"Subtotal:"}),(0,_.jsxs)("div",{className:"name tr_bar_30 gSansFont",children:["$",null===Z||void 0===Z||null===(p=Z.amount)||void 0===p?void 0:p.toFixed(2)]})]}),(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"tax:"}),(0,_.jsxs)("div",{className:"name tr_bar_30 gSansFont",children:["$",null===Z||void 0===Z||null===(b=Z.hasTax)||void 0===b?void 0:b.toFixed(2)]})]}),(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70 fntW600 gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)"},children:"Total:"}),(0,_.jsxs)("div",{className:"name tr_bar_30  gSansFont fntW600",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===F||void 0===F?void 0:F.toFixed(2)]})]}),(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"Advance Payment:"}),(0,_.jsxs)("div",{className:"name tr_bar_30  gSansFont",children:["$",null===Z||void 0===Z||null===(m=Z.hasAdvancePay)||void 0===m?void 0:m.toFixed(2)]})]}),(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70 fntW600 gSansFont",style:{color:"#646cff"},children:"Balance Due:"}),(0,_.jsxs)("div",{className:"name tr_bar_30 fntW600 gSansFont",style:{color:"#646cff"},children:["$",null===(y=F-(null===Z||void 0===Z?void 0:Z.hasAdvancePay))||void 0===y?void 0:y.toFixed(2)]})]})]})]})]})]})},w=function(e){var n,t,r=e.element,o=(e.idKey,e.close,null===(n=(0,s.bh)("products_ids"))||void 0===n?void 0:n[null===r||void 0===r?void 0:r.product]),i=1*r.qty?1*r.qty*r.salePrice:0;return(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,_.jsx)("div",{className:"tr_bar_70 gSansFont",style:{textAlign:"left",paddingLeft:14},children:null===o||void 0===o?void 0:o.name}),(0,_.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(t=r.qty)||void 0===t?void 0:t.toFixed(2)}),(0,_.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===i||void 0===i?void 0:i.toFixed(2)})]})},I=function(e){var n,t,r=e.element;e.idKey,e.close;return(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,_.jsx)("div",{className:"tr_bar_70  gSansFont",style:{textAlign:"left",paddingLeft:14},children:null===r||void 0===r?void 0:r.description}),(0,_.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(n=1*r.qty)||void 0===n?void 0:n.toFixed(2)}),(0,_.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:1*r.qty?null===(t=1*r.qty*r.salePrice*1)||void 0===t?void 0:t.toFixed(2):""})]})}},6677:function(e,n,t){t.d(n,{Je:function(){return a},Qn:function(){return u},UO:function(){return d},mQ:function(){return l}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_prov_cust)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},d=(0,s.I7)(a),e.next=5,d;case 5:(l=e.sent)&&((0,s.Rz)("providers_list",c((0,s.jQ)(l),"code")),(0,s.Rz)("providers_ids",(0,s.ME)((0,s.jQ)(l),"providerId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_prov_cust)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("search_prov")},d=(0,s.I7)(a),e.next=5,d;case 5:(l=e.sent)&&((0,s.Rz)("providers_list",c((0,s.jQ)(l),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var c=function(e,n){return(0,s.MV)("sortProviders",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},l=function(e,n){return(0,s.MV)("sortSubProviders",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_prov_cust)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,providerId:n},c=(0,s.I7)(d),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},261:function(){}}]);
//# sourceMappingURL=9075.7b1dd120.chunk.js.map