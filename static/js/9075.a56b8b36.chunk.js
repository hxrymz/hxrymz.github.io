"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9075,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return l},OpenModal:function(){return d},default:function(){return c}});var r=t(2791),o=t(5408),i=t(2350),s=t(184),a="listDialog_mdh392",c=function(){var e=(0,i.bh)("listDialog")||{},n=((0,o.Z)(a),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:n.map((function(n,t){var o=e[n];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var a={zIndex:o.zIndex},c=null,d=o.data;return o.content&&(c=r.cloneElement(o.content,{data:d})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:c})}),o.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:e})}}):null]},n)}}))})},d=function(e){var n=(0,i.bh)("listDialog")||{},t=(0,i.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,i.Rz)("listDialog",n),(0,i.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,i.Rz)("listDialog",n),(0,i.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(a)}),125)},l=function(e){var n,t,r,o=(0,i.bh)("listDialog")||{},s=e.id;o[s]&&(o[s].observeResize&&o[s].observeInterval&&clearInterval(o[s].observeInterval),o[s].display=!1,null===(n=o[s])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((function(){delete o[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},4050:function(e,n,t){t.d(n,{Ht:function(){return _},Je:function(){return x},Jy:function(){return l},Mp:function(){return y},T7:function(){return b},TP:function(){return m},Y1:function(){return h},ZX:function(){return c},_0:function(){return a},bs:function(){return w},h1:function(){return p},i_:function(){return g},rs:function(){return u},y1:function(){return I}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,s.I7)(a),e.next=5,c;case 5:(d=e.sent)&&((0,s.Rz)("account_list",f(d,"code")),(0,s.Rz)("account_ids",(0,s.ME)(d,"accountId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,c,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},l=(0,s.I7)(c),e.next=5,l;case 5:(u=e.sent)&&((0,s.Rz)("sub_account_list",h(u,"subAccount")),(0,s.Rz)("sub_account_group",d(u,"accountId")),(0,s.Rz)("sub_account_ids",(0,s.ME)(u,"sub_accountId")),a(),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function d(e,n){n=n||"id";var t={};return e.length>0?e.map((function(e){e.subAccount&&(t[e[n]]||(t[e[n]]=[]),t[e[n]].push(e))})):t=null,t}var l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry")},c=(0,s.I7)(a),e.next=5,c;case 5:(d=e.sent)&&((0,s.Rz)("account_list",f((0,s.jQ)(d),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,c,d,l,u,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.find_acc)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account},null!==n&&void 0!==n&&n.subAccount&&((c=(0,o.Z)({},null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.find_acc_subacc)).params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===n||void 0===n?void 0:n.account,":sub_account":null===n||void 0===n?void 0:n.subAccount}),u=(0,s.I7)(c),e.next=6,u;case 6:(f=e.sent)&&!f.error&&((0,s.Rz)("submayor_list",f),(0,s.Rz)("submayor_group",v(f))),t&&t();case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function v(e,n){var t={operations:[]},r=e&&(0,s._2)(e);return r.length>0?r.map((function(n){var r=e[n];r.type&&t.operations.push(function(e){var n,t,r={};r.account=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,s.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.document=e.document,r.date=e.date,"credit"===e.type?(r.debit=0,r.credit=e.amount):"debit"===e.type&&(r.credit=0,r.debit=e.amount);return r}(r))})):t=null,t}var f=function(e,n){return(0,s.MV)("sortAccounts",[e,n],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},h=function(e,n){return(0,s.MV)("sortSubAccounts",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},p=function(e){return(0,s.MV)("sortComprobantesByDate",[e],(function(){var n="date";return e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0}))}))},b=function(e,n,t){return(0,s.MV)("calcSubmayor",[e,n,t],(function(){var n="date",t=e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0})),r=0;return t.map((function(e){return function(e){var n,t=(0,o.Z)({},e);return"credit"===(null===e||void 0===e||null===(n=e.account)||void 0===n?void 0:n.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(e)}))}))};function x(){return f((0,s.bh)("sub_account_list").map((function(e){var n,t=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:e.subAccount+"",nombre_sub_cuenta:e.subAccountName}})),"cuenta")}var m=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.get_balance_general_param),a=(0,s.I7)(i),e.next=4,a;case 4:(c=e.sent)&&!c.error&&((0,s.Rz)("balance_general_param",null===c||void 0===c?void 0:c.general),(0,s.Rz)("result_sheet_params",null===c||void 0===c?void 0:c.result),(0,s.Rz)("balance_general_upd_flds",null===c||void 0===c?void 0:c.general_flds),(0,s.Rz)("result_sheet_upd_flds",null===c||void 0===c?void 0:c.result_flds)),n&&n();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a,c,d,l,u,v,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.find_balances)).params={businessId:null===(c=(0,s.bh)("profileUser"))||void 0===c?void 0:c.businessId,":type":n},l=(0,s.I7)(d),e.next=5,l;case 5:(u=e.sent)&&!u.error&&(v=(0,s._2)(u)[0],f=u[v],(0,s.Rz)(t,f),(0,s.Rz)(t+"_bck",(0,o.Z)({},f))),i&&i();case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),y=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a,c,d,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.calc_balance_general)).params={businessId:null===(c=(0,s.bh)("profileUser"))||void 0===c?void 0:c.businessId,balanceId:n,resultId:t},l=(0,s.I7)(d),e.next=5,l;case 5:(u=e.sent)&&!u.error?i&&i(u):i&&i();case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),w=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,o.Z)({},null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.calc_balance_comprobacion)).params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId},a=(0,s.I7)(i),e.next=5,a;case 5:if(!(c=e.sent)||c.error){e.next=9;break}return d=function(e){var n,t,r,o,i=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.accountId],a=e.subAccount?null===(t=c[e.accountId])||void 0===t||null===(r=t.sub[e.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=c[e.accountId])||void 0===o?void 0:o.saldo;return{cuenta:i.code+"",nombre:i.name,sub_cuenta:e.subAccount?e.subAccount:"",nombre_sub_cuenta:e.subAccount?e.subAccountName:"",saldo:a||0,type:i.type}},e.abrupt("return",f((0,s.bh)("sub_account_list").map(d),"cuenta"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function g(e,n,t){return e.map((function(e){return{fecha:(0,s.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,debito:e.debit,credito:e.credit,saldo:e.saldo,cuenta:n,sub_cuenta:t||""}}))}var I=function(e,n,t){var r=z(e,"fecha"),o=function(e){var n={};for(var t in e)n[t]=e[t];return n}(r),i=function(e){var n={};for(var t in e)n[t]=Z(e[t]);return n}(n),a={},c={},d={},l=r,u=i;t&&(l=i,u=r);var v=function(e,n){for(var t in o){var r,i,s,l,u=o[t],v=1*e.Amount,f=v>0?1*u.debito:-1*u.credito;if(a[""+n])break;null===(r=u.documento)||void 0===r||r.trim(),null===(i=e.checkOrSlip)||void 0===i||i.trim();if((null===(s=u.documento)||void 0===s?void 0:s.trim())===(null===(l=e.checkOrSlip)||void 0===l?void 0:l.trim())&&f===v){a[""+n]=""+t,c[""+t]=""+n,delete o[t],delete d[""+n];break}if(f===v){a[""+n]=""+t,c[""+t]=""+n,delete o[t],delete d[""+n];break}d[""+n]="NtF"}};for(var f in u){var h=u[f];h.checkOrSlip&&v(h,f)}for(var p in u){v(u[p],p)}var b=[];for(var x in(0,s._2)(d).map((function(e,n){})),u){var m=u[x];a[x]?(m.Comprobante=l[a[x]].comprobante,m.Documento=l[a[x]].documento,b.push(m)):(m.Comprobante="",m.Documento="",b.push(m))}return b},z=function(e,n){return e&&e.sort((function(e,t){var r=(0,s.Vd)(e[n]),o=(0,s.Vd)(t[n]);return r<o?-1:r>o?1:0}))},Z=function(e){var n=(0,o.Z)({},e);return n.hasOwnProperty("Date")&&(n.date=n.Date,delete n.Date),n.hasOwnProperty("Posting Date")&&(n.date=n["Posting Date"],delete n["Posting Date"]),n.hasOwnProperty("Check Number")&&(n.checkOrSlip=n["Check Number"],delete n["Check Number"]),n.hasOwnProperty('"Check Number"')&&(n.checkOrSlip=n['"Check Number"'],delete n['"Check Number"']),n.hasOwnProperty("Check or Slip #")&&(n.checkOrSlip=n["Check or Slip #"],delete n["Check or Slip #"]),n}},713:function(e,n,t){t.d(n,{QJ:function(){return u},Rd:function(){return c},VI:function(){return x},Ve:function(){return l},WA:function(){return p},ZW:function(){return a},Zj:function(){return f},dZ:function(){return v},ii:function(){return d},nj:function(){return h},tH:function(){return b}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,c,d,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.get_inventory_prod)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":productId":n},d=(0,s.I7)(c),e.next=5,d;case 5:(l=e.sent)&&((0,s.Rz)("inv_products_list",f((0,s.jQ)(l.list),"name")),(0,s.Rz)("inv_products_stock",l.stock),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,c,d,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.get_prod_stock)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:n},d=(0,s.I7)(c),e.next=5,d;case 5:(l=e.sent)&&((u=(0,o.Z)({},(0,s.bh)("products_stock")))[n]=l.stock,(0,s.Rz)("products_stock",u),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_prods)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,s.I7)(a),e.next=5,c;case 5:(d=e.sent)&&((0,s.Rz)("products_list",f(d,"name")),(0,s.Rz)("products_ids",(0,s.ME)((0,s.jQ)(d),"productId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_prod)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry")},c=(0,s.I7)(a),e.next=5,c;case 5:(d=e.sent)&&((0,s.Rz)("products_list",f((0,s.jQ)(d),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_entry_invoices)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,s.I7)(a),e.next=5,c;case 5:(d=e.sent)&&((0,s.Rz)("movements_list",f(d,"date")),(0,s.Rz)("movements_ids",(0,s.ME)((0,s.jQ)(d),"inventoryId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_entry_invoice)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchMovQry")},c=(0,s.I7)(a),e.next=5,c;case 5:(d=e.sent)&&((0,s.Rz)("movements_list",f((0,s.jQ)(d),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var f=function(e,n){return(0,s.MV)("sortProducts",[e],(function(){return e&&e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0}))}))},h=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_prod)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:n},d=(0,s.I7)(c),e.next=5,d;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_inventory)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,inventoryId:n},d=(0,s.I7)(c),e.next=5,d;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_entry_invoice)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,entriesInvoiceId:n},d=(0,s.I7)(c),e.next=5,d;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),x=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,c,d,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.entry_invoice_acc_2)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,entriesInvoiceId:n},d=(0,s.I7)(c),e.next=5,d;case 5:(l=e.sent)&&t&&t(l);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},9075:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(1413),o=t(9439),i=t(2791),s=(t(261),t(2350)),a=t(7689),c=t(9760),d=t(2647),l=t(4050),u=t(713),v=t(6677),f=t(4165),h=t(5861),p=t(6963),b=t(4e3),x=0,m=function(){var e=(0,h.Z)((0,f.Z)().mark((function e(n){var t,r,o,i,a,c,d,l,u,v,h,m,_,y,w,g,I,z,Z,T,j,N,k,A,R,S,F,O,Q,D,P,C,q,U,E,M,B,V,L,W,H,J,K,$,G,Y,X;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.PDFDocument.create();case 2:return(d=e.sent).registerFontkit(b.Z),e.next=6,d.embedFont(p.StandardFonts.TimesRoman);case 6:return l=e.sent,e.next=9,d.embedFont(p.StandardFonts.TimesRomanBold);case 9:if(u=e.sent,!(0,s.bh)("modernFontReport")){e.next=25;break}return"https://qvamarkets.com/gql_api/getStatic?fileName=Roboto-BoldItalic.otf",e.next=14,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=Roboto-BoldItalic.otf").then((function(e){return e.arrayBuffer()}));case 14:return v=e.sent,e.next=17,d.embedFont(v);case 17:return u=e.sent,"https://qvamarkets.com/gql_api/getStatic?fileName=gSans-medium.otf",e.next=21,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=gSans-medium.otf").then((function(e){return e.arrayBuffer()}));case 21:return h=e.sent,e.next=24,d.embedFont(h);case 24:l=e.sent;case 25:return m=d.addPage(),_=m.getSize(),_.width,y=_.height,w=10,x=y-40,g=u.widthOfTextAtSize(null===n||void 0===n?void 0:n.document,12),I=l.widthOfTextAtSize("Invoice: ",11),m.drawText("Invoice: ",{x:580-g-I,y:x,size:11,font:l,color:(0,p.rgb)(0,0,0)}),m.drawText(null===n||void 0===n?void 0:n.document,{x:580-g,y:x,size:12,font:u,color:(0,p.rgb)(0,0,0)}),z=y-30,m.drawText("Granite Concepts",{x:20,y:z,size:13,font:u,color:(0,p.rgb)(0,0,0)}),m.drawText("4504 Poplar Level Rd",{x:20,y:z-15,size:10,font:l,color:(0,p.rgb)(0,0,0)}),m.drawText("Louisville, KY 40213",{x:20,y:z-30,size:10,font:l,color:(0,p.rgb)(0,0,0)}),m.drawText("(502) 742-2473",{x:20,y:z-45,size:10,font:u,color:(0,p.rgb)(0,0,0)}),m.drawText("graniteconceptsky@gmail.com",{x:20,y:z-60,size:10,font:l,color:(0,p.rgb)(0,0,0)}),m.drawText("graniteconceptsky.com",{x:20,y:z-75,size:10,font:l,color:(0,p.rgb)(0,0,0)}),x-=20,Z=l.widthOfTextAtSize("Date: ",11),T=u.widthOfTextAtSize((0,s.Gv)(null===n||void 0===n?void 0:n.date)+"",12),m.drawText("Date: ",{x:580-Z-T,y:x,size:11,font:l,color:(0,p.rgb)(0,0,0)}),m.drawText((0,s.Gv)(null===n||void 0===n?void 0:n.date)+"",{x:580-T,y:x,size:12,font:u,color:(0,p.rgb)(.06,.06,.06)}),x-=20,j=null===(t=(0,s.bh)("providers_ids"))||void 0===t||null===(r=t[null===n||void 0===n||null===(o=n.customer)||void 0===o?void 0:o.providerId])||void 0===r?void 0:r.name,N=l.widthOfTextAtSize("Bill To: ",11),k=u.widthOfTextAtSize(j+"",12),m.drawText("Bill To: ",{x:580-N-k,y:x,size:11,font:l,color:(0,p.rgb)(0,0,0)}),m.drawText(j+"",{x:580-k,y:x,size:12,font:u,color:(0,p.rgb)(0,0,0)}),x-=50,m.drawRectangle({x:15,y:x+1,width:560,height:.85,color:(0,p.rgb)(.53,.53,.53),borderColor:(0,p.rgb)(.53,.53,.53)}),m.drawText((null===n||void 0===n?void 0:n.description)+"",{x:20,y:x-11,size:10,font:l,color:(0,p.rgb)(0,0,0)}),x-=20,m.drawRectangle({x:15,y:x+1,width:560,height:.85,color:(0,p.rgb)(.53,.53,.53),borderColor:(0,p.rgb)(.53,.53,.53)}),x-=18,m.drawText((0,s.zE)(4)+"",{x:20,y:x,size:13,font:u,color:(0,p.rgb)(0,0,0)}),A=u.widthOfTextAtSize((0,s.zE)(14)+"",12),m.drawText((0,s.zE)(10)+"",{x:480-A,y:x,size:12,font:u,color:(0,p.rgb)(0,0,0)}),R=u.widthOfTextAtSize((0,s.zE)(14)+"",12),m.drawText((0,s.zE)(14)+"",{x:560-R,y:x,size:12,font:u,color:(0,p.rgb)(0,0,0)}),x-=8,m.drawRectangle({x:15,y:x+1,width:560,height:.95,color:(0,p.rgb)(.53,.53,.53),borderColor:(0,p.rgb)(.53,.53,.53)}),S=(null===n||void 0===n?void 0:n.products)||[],Array.isArray(S)&&S.map((function(e,n){var t,r,o,i,a=null===(t=(0,s.bh)("products_ids"))||void 0===t||null===(r=t[null===e||void 0===e?void 0:e.product])||void 0===r?void 0:r.name;x-=16,a&&m.drawText(a+"",{x:20,y:x,size:w,font:l,color:(0,p.rgb)(0,0,0)});var c=null!==e&&void 0!==e&&e.qty?null===(o=1*(null===e||void 0===e?void 0:e.qty))||void 0===o?void 0:o.toFixed(2):"0.00",d=l.widthOfTextAtSize(c+"",w);m.drawText(c+"",{x:480-d,y:x,size:w,font:l,color:(0,p.rgb)(0,0,0)});var u=null!==e&&void 0!==e&&e.qty?null===(i=(null===e||void 0===e?void 0:e.salePrice)*(null===e||void 0===e?void 0:e.qty)*1)||void 0===i?void 0:i.toFixed(2):"0.00",v=l.widthOfTextAtSize(u+"",w);m.drawText(u+"",{x:560-v,y:x,size:w,font:l,color:(0,p.rgb)(0,0,0)})})),F=(0,s._2)(null===n||void 0===n?void 0:n.extras)||[],Array.isArray(F)&&F.map((function(e,t){var r,o,i,s=null===(r=n.extras)||void 0===r?void 0:r[e],a=s.description;x-=16,a&&m.drawText(a+"",{x:20,y:x,size:w,font:l,color:(0,p.rgb)(0,0,0)});var c=null!==s&&void 0!==s&&s.qty?null===(o=1*(null===s||void 0===s?void 0:s.qty))||void 0===o?void 0:o.toFixed(2):"0.00",d=l.widthOfTextAtSize(c+"",w);m.drawText(c+"",{x:480-d,y:x,size:w,font:l,color:(0,p.rgb)(0,0,0)});var u=null!==s&&void 0!==s&&s.qty?null===(i=(null===s||void 0===s?void 0:s.salePrice)*(null===s||void 0===s?void 0:s.qty)*1)||void 0===i?void 0:i.toFixed(2):"0.00",v=l.widthOfTextAtSize(u+"",w);m.drawText(u+"",{x:560-v,y:x,size:w,font:l,color:(0,p.rgb)(0,0,0)})})),x-=28,m.drawRectangle({x:15,y:x+1,width:560,height:.85,color:(0,p.rgb)(.53,.53,.53),borderColor:(0,p.rgb)(.53,.53,.53)}),O=500,x-=20,Q=null!==n&&void 0!==n&&n.amount?null===n||void 0===n||null===(i=n.amount)||void 0===i?void 0:i.toFixed(2):"0.00",D=l.widthOfTextAtSize(Q+"",w),m.drawText(Q+"",{x:560-D,y:x,size:w,font:l,color:(0,p.rgb)(.13,.13,.13)}),P=l.widthOfTextAtSize("SubTotal",w),m.drawText("SubTotal",{x:O-P,y:x,size:w,font:l,color:(0,p.rgb)(0,0,0)}),x-=16,C=null!==n&&void 0!==n&&n.hasTax?null===n||void 0===n||null===(a=n.hasTax)||void 0===a?void 0:a.toFixed(2):"0.00",q=l.widthOfTextAtSize(C+"",w),m.drawText(C+"",{x:560-q,y:x,size:w,font:l,color:(0,p.rgb)(.13,.13,.13)}),U=l.widthOfTextAtSize("Taxes",w),m.drawText("Taxes",{x:O-U,y:x,size:w,font:l,color:(0,p.rgb)(0,0,0)}),E=null!==n&&void 0!==n&&n.hasTax?(null===n||void 0===n?void 0:n.hasTax)+(null===n||void 0===n?void 0:n.amount):1*(null===n||void 0===n?void 0:n.amount),x-=16,M=E?null===E||void 0===E?void 0:E.toFixed(2):"0.00",B=u.widthOfTextAtSize(M+"",11),m.drawText(M+"",{x:560-B,y:x,size:11,font:u,color:(0,p.rgb)(0,0,0)}),V=u.widthOfTextAtSize("Total",11),m.drawText("Total",{x:O-V,y:x,size:11,font:u,color:(0,p.rgb)(0,0,0)}),x-=16,L=null!==n&&void 0!==n&&n.hasAdvancePay?null===(c=-1*(null===n||void 0===n?void 0:n.hasAdvancePay))||void 0===c?void 0:c.toFixed(2):"0.00",W=l.widthOfTextAtSize(""+L,11),m.drawText(""+L,{x:560-W,y:x,size:11,font:l,color:(0,p.rgb)(.13,.13,.13)}),H=l.widthOfTextAtSize("Advance Payment",11),m.drawText("Advance Payment",{x:O-H,y:x,size:11,font:l,color:(0,p.rgb)(0,0,0)}),x-=16,K=(J=E+1*L)?null===J||void 0===J?void 0:J.toFixed(2):"0.00",$=u.widthOfTextAtSize(K+"",11),m.drawText(K+"",{x:560-$,y:x,size:11,font:u,color:(0,p.rgb)(0,0,0)}),G=u.widthOfTextAtSize("Balance Due",11),m.drawText("Balance Due",{x:O-G,y:x,size:11,font:u,color:(0,p.rgb)(0,0,0)}),e.next=105,d.save();case 105:Y=e.sent,X=(0,s.ou)(Y),window.open(X);case 108:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=t(184),y=(0,d.PU)(),w=function(e){var n,t,d,f,h,p,b,x,w,z=e.data,Z=e.item,T=(0,i.useState)(0),j=(0,o.Z)(T,2),N=(j[0],j[1]);(0,i.useEffect)((function(){var e,n,t;(0,s.Rz)("inv_products_list",null),(0,s.Rz)("inv_products_stock",null),null!==(e=(0,s.bh)("providers_ids"))&&void 0!==e&&null!==(n=e[null===Z||void 0===Z||null===(t=Z.customer)||void 0===t?void 0:t.providerId])&&void 0!==n&&n.name||(0,v.Je)(k),(0,s.bh)("products_ids")||(0,u.ii)(k),(0,l.Ht)("global_accounts","global_account_params",k),k()}),[Z.productId]);var k=function(){N((0,s.M5)())},A=((0,a.s0)(),function(e){(0,c.CloseModal)({id:z.modalID})}),R=null!==Z&&void 0!==Z&&Z.hasTax?(null===Z||void 0===Z?void 0:Z.hasTax)+(null===Z||void 0===Z?void 0:Z.amount):1*(null===Z||void 0===Z?void 0:Z.amount);return(0,_.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("p",{className:"title_collect",children:"Invoice"}),(0,_.jsx)("p",{className:"title_collect fntW600",style:{color:"#646cff"},children:null===Z||void 0===Z?void 0:Z.document}),(0,_.jsx)("div",{className:"flexSpace"}),(0,s.I0)()?(0,_.jsx)("div",{className:"code comprobante_id",style:{color:"#646cff",paddingTop:10},children:null===Z||void 0===Z?void 0:Z.comprobanteId}):null,(0,_.jsx)("div",{className:"icon_print",onClick:function(){var e=(0,r.Z)({},Z);m(e)},children:(0,_.jsx)(y,{name:"printer",color:"#282828"})})]}),(0,_.jsx)("div",{className:"acc_dtls",style:{marginTop:10,marginLeft:2},children:(0,_.jsxs)("div",{className:"_dsplFlx",children:[(0,_.jsx)("div",{className:"name",children:(0,_.jsx)("div",{className:"code",children:(0,s.sJ)(null===Z||void 0===Z?void 0:Z.date)})}),(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(n=(0,s.bh)("providers_ids"))||void 0===n||null===(t=n[null===Z||void 0===Z||null===(d=Z.customer)||void 0===d?void 0:d.providerId])||void 0===t?void 0:t.name})]})}),(0,_.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:8},children:[(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("div",{className:"_dsplFlx",children:(0,_.jsx)("div",{className:"name",style:{color:"#4c4c4c"},children:null===Z||void 0===Z?void 0:Z.description})})]}),(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,_.jsx)("div",{className:"tr_bar_70",style:{textAlign:"left",paddingLeft:14},children:(0,s.zE)(4)}),(0,_.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,s.zE)(10)}),(0,_.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,s.zE)(14)})]}),(0,_.jsxs)("div",{className:"scollVh subMHeight",children:[Z.products&&(null===(f=Z.products)||void 0===f?void 0:f.map((function(e){return(0,_.jsx)(g,{element:e,idKey:e.inventoryId,close:A},e.inventoryId)}))),Z.extras&&(null===(h=(0,s._2)(Z.extras))||void 0===h?void 0:h.map((function(e){return(0,_.jsx)(I,{element:Z.extras[e],idKey:e,close:A},e)}))),(0,_.jsxs)("div",{className:"_dsplFlx",style:{margin:"19px 15px 10px"},children:[(0,_.jsx)("div",{className:"tr_bar_70"}),(0,_.jsxs)("div",{className:"tr_bar_30 brdTp",children:[(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70",children:"Subtotal:"}),(0,_.jsxs)("div",{className:"name tr_bar_30",style:{color:"#4c4c4c"},children:["$",null===Z||void 0===Z||null===(p=Z.amount)||void 0===p?void 0:p.toFixed(2)]})]}),(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70",children:"tax:"}),(0,_.jsxs)("div",{className:"name tr_bar_30",style:{color:"#4c4c4c"},children:["$",null===Z||void 0===Z||null===(b=Z.hasTax)||void 0===b?void 0:b.toFixed(2)]})]}),(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70 fntW600",style:{color:"#0c0c0c"},children:"Total:"}),(0,_.jsxs)("div",{className:"name tr_bar_30  fntW600",children:["$",null===R||void 0===R?void 0:R.toFixed(2)]})]}),(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70",children:"Advance Payment:"}),(0,_.jsxs)("div",{className:"name tr_bar_30 ",children:["$",null===Z||void 0===Z||null===(x=Z.hasAdvancePay)||void 0===x?void 0:x.toFixed(2)]})]}),(0,_.jsxs)("div",{className:"_dsplFlx totals",children:[(0,_.jsx)("div",{className:"code tr_bar_70 fntW600",style:{color:"#0c0c0c"},children:"Balance Due:"}),(0,_.jsxs)("div",{className:"name tr_bar_30 fntW600",style:{color:"#646cff"},children:["$",null===(w=R-(null===Z||void 0===Z?void 0:Z.hasAdvancePay))||void 0===w?void 0:w.toFixed(2)]})]})]})]})]})]})},g=function(e){var n,t,r=e.element,o=(e.idKey,e.close,null===(n=(0,s.bh)("products_ids"))||void 0===n?void 0:n[null===r||void 0===r?void 0:r.product]),i=1*r.qty?1*r.qty*r.salePrice:0;return(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,_.jsx)("div",{className:"tr_bar_70 ",style:{textAlign:"left",paddingLeft:14},children:null===o||void 0===o?void 0:o.name}),(0,_.jsx)("div",{className:"tr_bar_15 numbAlign",children:null===(t=r.qty)||void 0===t?void 0:t.toFixed(2)}),(0,_.jsx)("div",{className:"tr_bar_15 numbAlign",children:null===i||void 0===i?void 0:i.toFixed(2)})]})},I=function(e){var n,t,r=e.element;e.idKey,e.close;return(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,_.jsx)("div",{className:"tr_bar_70 ",style:{textAlign:"left",paddingLeft:14},children:null===r||void 0===r?void 0:r.description}),(0,_.jsx)("div",{className:"tr_bar_15 numbAlign",children:null===(n=1*r.qty)||void 0===n?void 0:n.toFixed(2)}),(0,_.jsx)("div",{className:"tr_bar_15 numbAlign",children:1*r.qty?null===(t=1*r.qty*r.salePrice*1)||void 0===t?void 0:t.toFixed(2):""})]})}},6677:function(e,n,t){t.d(n,{Je:function(){return a},Qn:function(){return u},UO:function(){return c},mQ:function(){return l}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_prov_cust)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,s.I7)(a),e.next=5,c;case 5:(l=e.sent)&&((0,s.Rz)("providers_list",d((0,s.jQ)(l),"code")),(0,s.Rz)("providers_ids",(0,s.ME)((0,s.jQ)(l),"providerId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_prov_cust)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("search_prov")},c=(0,s.I7)(a),e.next=5,c;case 5:(l=e.sent)&&((0,s.Rz)("providers_list",d((0,s.jQ)(l),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var d=function(e,n){return(0,s.MV)("sortProviders",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},l=function(e,n){return(0,s.MV)("sortSubProviders",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_prov_cust)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,providerId:n},d=(0,s.I7)(c),e.next=5,d;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},261:function(){}}]);
//# sourceMappingURL=9075.a56b8b36.chunk.js.map