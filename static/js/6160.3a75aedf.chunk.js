"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6160,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return u},OpenModal:function(){return a},default:function(){return s}});var r=t(2791),o=t(5408),i=t(2350),c=t(184),s=function(){var n=(0,i.bh)("listDialog")||{},e=((0,o.Z)("listDialog_h392"),Object.keys(n));return(0,c.jsx)(c.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var s={zIndex:o.zIndex},a=null,l=o.data;return o.content&&(a=r.cloneElement(o.content,{data:l})),(0,c.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,c.jsx)("div",{className:"ltr-hoe9xz",children:(0,c.jsx)("div",{className:"ltr-1wao6ny",style:s,id:e,children:a})}),o.data.overlay?(0,c.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:n})}}):null]},e)}}))})},a=function(n){var e=(0,i.bh)("listDialog")||{},t=(0,i.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,i.Rz)("listDialog",e),(0,i.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,i.Rz)("listDialog",e),(0,i.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)("listDialog_h392")}),125)},u=function(n){var e,t,r,o=(0,i.bh)("listDialog")||{},c=n.id;o[c]&&(o[c].observeResize&&o[c].observeInterval&&clearInterval(o[c].observeInterval),o[c].display=!1,null===(e=o[c])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[c],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)("listDialog_h392"),setTimeout((function(){delete o[c],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},6160:function(n,e,t){t.r(e);var r=t(9439),o=t(2791),i=(t(1636),t(2350)),c=t(4050),s=t(7689),a=t(9760),u=t(184);e.default=function(n){var e,t,l,d=n.data,v=n.accountForm,b=(0,o.useState)(0),h=(0,r.Z)(b,2),p=(h[0],h[1]),f=(0,i.bh)("submayor_group");(0,o.useEffect)((function(){(0,c.rs)(v,m)}),[v]);var m=function(){p((0,i.M5)())},_=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[null===v||void 0===v?void 0:v.account],x=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[null===v||void 0===v?void 0:v.subAccount],g=(0,s.s0)();return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"title_collect",children:"SubMayor de la Cuenta"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,i.eY)("export_submayor_"+(null===_||void 0===_?void 0:_.code)+"_"+(null!==x&&void 0!==x&&x.subAccount?(null===x||void 0===x?void 0:x.subAccount)+"_":"")+(0,i.M5)()+".csv",(0,c.i_)((0,c.T7)(null===f||void 0===f?void 0:f.operations,null===_||void 0===_?void 0:_.code,null===x||void 0===x?void 0:x.subAccount),null===_||void 0===_?void 0:_.code,null===x||void 0===x?void 0:x.subAccount))},children:"Exportar a CSV"})]}),(0,u.jsxs)("div",{className:" acc_dtls",style:{marginTop:10},children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===_||void 0===_?void 0:_.code}),(0,u.jsx)("div",{className:"name",children:null===_||void 0===_?void 0:_.name})]}),(0,u.jsx)("div",{className:"flexSpace"}),x?(0,u.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,u.jsx)("div",{className:"code",children:null===x||void 0===x?void 0:x.subAccount}),(0,u.jsx)("div",{className:"name",children:null===x||void 0===x?void 0:x.subAccountName})]}):null]}),(0,u.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"_dsplFlx"})]}),(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,u.jsx)("div",{className:"tr_bar_s6",children:"Comprobante"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Fecha"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Documento"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Debito"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Credito"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Saldo"})]}),(0,u.jsx)("div",{className:"scollVh subMHeight",children:(null===f||void 0===f?void 0:f.operations)&&(null===(l=(0,c.T7)(null===f||void 0===f?void 0:f.operations,null===_||void 0===_?void 0:_.code,null===x||void 0===x?void 0:x.subAccount))||void 0===l?void 0:l.map((function(n,e){var t,r,o;return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar_s6 comprobante_id",onClick:function(){return function(n){(0,a.CloseModal)({id:d.modalID}),g({pathname:"accounting-ledger",search:"?cId=".concat(n.comprobanteId)})}(n)},children:n.comprobanteId}),(0,u.jsx)("div",{className:"tr_bar_s6",children:n.date&&(0,i.sJ)(n.date)}),(0,u.jsx)("div",{className:"tr_bar_s6",children:n.document}),(0,u.jsx)("div",{className:"tr_bar_s6",children:null===(t=1*n.debit)||void 0===t?void 0:t.toFixed(2)}),(0,u.jsx)("div",{className:"tr_bar_s6",children:null===(r=1*n.credit)||void 0===r?void 0:r.toFixed(2)}),(0,u.jsx)("div",{className:"tr_bar_s6",children:null===(o=1*n.saldo)||void 0===o?void 0:o.toFixed(2)})]},e)})))})]})}},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return f},Jy:function(){return l},Mp:function(){return x},T7:function(){return p},TP:function(){return m},Y1:function(){return h},ZX:function(){return a},_0:function(){return s},bs:function(){return g},i_:function(){return y},rs:function(){return d}});var r=t(4165),o=t(1413),i=t(5861),c=t(2350),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,a,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId},a=(0,c.I7)(s),n.next=5,a;case 5:(u=n.sent)&&((0,c.Rz)("account_list",b(u,"code")),(0,c.Rz)("account_ids",(0,c.ME)(u,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId},l=(0,c.I7)(a),n.next=5,l;case 5:(d=n.sent)&&((0,c.Rz)("sub_account_list",h(d,"subAccount")),(0,c.Rz)("sub_account_group",u(d,"accountId")),(0,c.Rz)("sub_account_ids",(0,c.ME)(d,"sub_accountId")),s(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function u(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,a,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,c.bh)("searchQry")},a=(0,c.I7)(s),n.next=5,a;case 5:(u=n.sent)&&((0,c.Rz)("account_list",b((0,c.jQ)(u),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,s,a,u,l,d,b;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.find_acc)).params={businessId:null===(s=(0,c.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((a=(0,o.Z)({},null===(u=(0,c.bh)((0,c.hQ)()))||void 0===u?void 0:u.find_acc_subacc)).params={businessId:null===(l=(0,c.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,c.I7)(a),n.next=6,d;case 6:(b=n.sent)&&!b.error&&((0,c.Rz)("submayor_list",b),(0,c.Rz)("submayor_group",v(b))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,c._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,c.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var b=function(n,e){return(0,c.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},h=function(n,e){return(0,c.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},p=function(n,e,t){return(0,c.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function f(){return b((0,c.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.get_balance_general_param),s=(0,c.I7)(i),n.next=4,s;case 4:(a=n.sent)&&!a.error&&((0,c.Rz)("balance_general_param",null===a||void 0===a?void 0:a.general),(0,c.Rz)("result_sheet_params",null===a||void 0===a?void 0:a.result),(0,c.Rz)("balance_general_upd_flds",null===a||void 0===a?void 0:a.general_flds),(0,c.Rz)("result_sheet_upd_flds",null===a||void 0===a?void 0:a.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var s,a,u,l,d,v,b;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(s=(0,c.bh)((0,c.hQ)()))||void 0===s?void 0:s.find_balances)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":type":e},l=(0,c.I7)(u),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,c._2)(d)[0],b=d[v],(0,c.Rz)(t,b),(0,c.Rz)(t+"_bck",(0,o.Z)({},b))),i&&i();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),x=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var s,a,u,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(s=(0,c.bh)((0,c.hQ)()))||void 0===s?void 0:s.calc_balance_general)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,balanceId:e,resultId:t},l=(0,c.I7)(u),n.next=5,l;case 5:(d=n.sent)&&!d.error?i&&i(d):i&&i();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t,i,s,a,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(e=(0,c.bh)((0,c.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,c.bh)("profileUser"))||void 0===t?void 0:t.businessId},s=(0,c.I7)(i),n.next=5,s;case 5:if(!(a=n.sent)||a.error){n.next=9;break}return u=function(n){var e,t,r,o,i=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],s=n.subAccount?null===(t=a[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=a[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:i.code+"",nombre:i.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:s||0}},n.abrupt("return",b((0,c.bh)("sub_account_list").map(u),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function y(n,e,t){return n.map((function(n){return{fecha:(0,c.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}},1636:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(9142);function o(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=6160.3a75aedf.chunk.js.map