"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6001,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return l},OpenModal:function(){return s},default:function(){return c}});var r=t(2791),o=t(5408),u=t(2350),i=t(184),a="listDialog_mdh392",c=function(){var n=(0,u.bh)("listDialog")||{},e=((0,o.Z)(a),Object.keys(n));return(0,i.jsx)(i.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var u={};o.height&&(u.heigth=o.height),o.width,o.zIndex&&(u.zIndex=o.zIndex-1);var a={zIndex:o.zIndex},c=null,s=o.data;return o.content&&(c=r.cloneElement(o.content,{data:s})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:u,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:a,id:e,children:c})}),o.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:n})}}):null]},e)}}))})},s=function(n){var e=(0,u.bh)("listDialog")||{},t=(0,u.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,u.Rz)("listDialog",e),(0,u.wt)(a)))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,u.Rz)("listDialog",e),(0,u.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,u.Rz)("modalOpen",t),(0,u.wt)(a)}),125)},l=function(n){var e,t,r,o=(0,u.bh)("listDialog")||{},i=n.id;o[i]&&(o[i].observeResize&&o[i].observeInterval&&clearInterval(o[i].observeInterval),o[i].display=!1,null===(e=o[i])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,u.Rz)("listDialog",o),delete o[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,u.wt)(a),setTimeout((function(){delete o[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,u.Rz)("modalOpen",null)}),750))}},6001:function(n,e,t){t.r(e);var r=t(4165),o=t(5861),u=t(9439),i=t(2791),a=t(2350),c=t(2647),s=t(9760),l=(t(4719),t(9661)),d=t(3728),v=t(4050),f=t(7689),p=t(184),h=(0,c.Vg)(),b=(0,l.tv)(),m=(0,l._F)(),_=(0,l.dO)();e.default=function(n){n.data,n.elmId,n.updObs;var e,t=(0,i.useState)(!1),c=(0,u.Z)(t,2),l=c[0],y=c[1],g=(0,i.useState)(0),I=(0,u.Z)(g,2),w=(I[0],I[1]),Z=(0,i.useState)(!1),x=(0,u.Z)(Z,2),k=x[0],z=x[1],O=(0,i.useState)(!1),j=(0,u.Z)(O,2),R=j[0],N=j[1],D=(0,i.useState)(!1),C=(0,u.Z)(D,2),P=C[0],S=C[1],A=(0,f.s0)();(0,i.useEffect)((function(){l||(y(!0),w((0,a.M5)()),(0,v.ZX)(U))}));var M=function(){z(!1),N(!0)},E=function(){A({pathname:"/accounting-ledger"})},Q=function(n){(0,d.ph)(U)},U=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:w((0,a.M5)()),S(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"",children:[(0,p.jsxs)("div",{className:"accounts_header",children:[(0,p.jsx)("h2",{children:"Comprobantes Parametrizados"}),(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)(h,{placeholder:"Buscar",width:360,obs:w,fetchData:function(n){S(!0),(0,d.yq)(U)},loading:P,change:function(n){!P&&S(!0)},callempty:Q,keyFlds:"search_entry_qry"}),(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){N(!1);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,p.jsx)(b,{confirm:Q}),(0,s.OpenModal)(n)},children:"Parametrizar"}),(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,p.jsx)(_,{confirm:E}),(0,s.OpenModal)(n)},children:"Agregar Comprobante Manual"})]})]}),!R&&!k&&(0,p.jsx)("div",{className:"accounts_container scollVh",children:(0,a.bh)("entries_list")&&(null===(e=(0,a._2)((0,a.bh)("entries_list")))||void 0===e?void 0:e.map((function(n){return(0,p.jsx)(m,{data:(0,a.bh)("entries_list")[n],elmId:n,openUpdateView:M,handleRefreshAll:Q},n)})))})]})}},3728:function(n,e,t){t.d(e,{NA:function(){return s},g5:function(){return c},ph:function(){return i},yq:function(){return a}});var r=t(4165),o=t(5861),u=t(2350),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_entries).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},a=(0,u.I7)(i),n.next=5,a;case 5:(c=n.sent)&&((0,u.Rz)("entries_list",c),(0,u.Rz)("entries_ids",(0,u.ME)(c,"accountingEntryId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.search_entries).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,u.bh)("search_entry_qry")},a=(0,u.I7)(i),n.next=5,a;case 5:(c=n.sent)&&((0,u.Rz)("entries_list",c),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,i,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=null===(o=(0,u.bh)((0,u.hQ)()))||void 0===o?void 0:o.delete_entries).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,accountingEntryId:e},c=(0,u.I7)(a),n.next=5,c;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,u.I7)({query:"getLastSequence"}),n.next=3,t;case 3:if(!(o=n.sent)){n.next=6;break}return n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4050:function(n,e,t){t.d(e,{Ht:function(){return y},Je:function(){return m},Jy:function(){return l},Mp:function(){return g},T7:function(){return b},TP:function(){return _},Y1:function(){return p},ZX:function(){return c},_0:function(){return a},bs:function(){return I},h1:function(){return h},i_:function(){return w},rs:function(){return d},y1:function(){return Z}});var r=t(4165),o=t(1413),u=t(5861),i=t(2350),a=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e){var t,u,a,c,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId},c=(0,i.I7)(a),n.next=5,c;case 5:(s=n.sent)&&((0,i.Rz)("account_list",f(s,"code")),(0,i.Rz)("account_ids",(0,i.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e){var t,u,c,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId},l=(0,i.I7)(c),n.next=5,l;case 5:(d=n.sent)&&((0,i.Rz)("sub_account_list",p(d,"subAccount")),(0,i.Rz)("sub_account_group",s(d,"accountId")),(0,i.Rz)("sub_account_ids",(0,i.ME)(d,"sub_accountId")),a(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e){var t,u,a,c,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":search":(0,i.bh)("searchQry")},c=(0,i.I7)(a),n.next=5,c;case 5:(s=n.sent)&&((0,i.Rz)("account_list",f((0,i.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e,t){var u,a,c,s,l,d,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.find_acc)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((c=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.find_acc_subacc)).params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,i.I7)(c),n.next=6,d;case 6:(f=n.sent)&&!f.error&&((0,i.Rz)("submayor_list",f),(0,i.Rz)("submayor_group",v(f))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,i._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var f=function(n,e){return(0,i.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},p=function(n,e){return(0,i.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},h=function(n){return(0,i.MV)("sortComprobantesByDate",[n],(function(){var e="date";return n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0}))}))},b=function(n,e,t){return(0,i.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function m(){return f((0,i.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var _=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e){var t,u,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.get_balance_general_param),a=(0,i.I7)(u),n.next=4,a;case 4:(c=n.sent)&&!c.error&&((0,i.Rz)("balance_general_param",null===c||void 0===c?void 0:c.general),(0,i.Rz)("result_sheet_params",null===c||void 0===c?void 0:c.result),(0,i.Rz)("balance_general_upd_flds",null===c||void 0===c?void 0:c.general_flds),(0,i.Rz)("result_sheet_upd_flds",null===c||void 0===c?void 0:c.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),y=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e,t,u){var a,c,s,l,d,v,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.find_balances)).params={businessId:null===(c=(0,i.bh)("profileUser"))||void 0===c?void 0:c.businessId,":type":e},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,i._2)(d)[0],f=d[v],(0,i.Rz)(t,f),(0,i.Rz)(t+"_bck",(0,o.Z)({},f))),u&&u();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e,t,u){var a,c,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.calc_balance_general)).params={businessId:null===(c=(0,i.bh)("profileUser"))||void 0===c?void 0:c.businessId,balanceId:e,resultId:t},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?u&&u(d):u&&u();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),I=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(){var e,t,u,a,c,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId},a=(0,i.I7)(u),n.next=5,a;case 5:if(!(c=n.sent)||c.error){n.next=9;break}return s=function(n){var e,t,r,o,u=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],a=n.subAccount?null===(t=c[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=c[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:u.code+"",nombre:u.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:a||0,type:u.type}},n.abrupt("return",f((0,i.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function w(n,e,t){return n.map((function(n){return{fecha:(0,i.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var Z=function(n,e,t){var r=x(n,"fecha"),o=function(n){var e={};for(var t in n)e[t]=n[t];return e}(r),u=function(n){var e={};for(var t in n)e[t]=k(n[t]);return e}(e),a={},c={},s={},l=r,d=u;t&&(l=u,d=r);var v=function(n,e){for(var t in o){var r,u,i,l,d=o[t],v=1*n.Amount,f=v>0?1*d.debito:-1*d.credito;if(a[""+e])break;null===(r=d.documento)||void 0===r||r.trim(),null===(u=n.checkOrSlip)||void 0===u||u.trim();if((null===(i=d.documento)||void 0===i?void 0:i.trim())===(null===(l=n.checkOrSlip)||void 0===l?void 0:l.trim())&&f===v){a[""+e]=""+t,c[""+t]=""+e,delete o[t],delete s[""+e];break}if(f===v){a[""+e]=""+t,c[""+t]=""+e,delete o[t],delete s[""+e];break}s[""+e]="NtF"}};for(var f in d){var p=d[f];p.checkOrSlip&&v(p,f)}for(var h in d){v(d[h],h)}var b=[];for(var m in(0,i._2)(s).map((function(n,e){})),d){var _=d[m];a[m]?(_.Comprobante=l[a[m]].comprobante,_.Documento=l[a[m]].documento,b.push(_)):(_.Comprobante="",_.Documento="",b.push(_))}return b},x=function(n,e){return n&&n.sort((function(n,t){var r=(0,i.Vd)(n[e]),o=(0,i.Vd)(t[e]);return r<o?-1:r>o?1:0}))},k=function(n){var e=(0,o.Z)({},n);return e.hasOwnProperty("Date")&&(e.date=e.Date,delete e.Date),e.hasOwnProperty("Posting Date")&&(e.date=e["Posting Date"],delete e["Posting Date"]),e.hasOwnProperty("Check Number")&&(e.checkOrSlip=e["Check Number"],delete e["Check Number"]),e.hasOwnProperty('"Check Number"')&&(e.checkOrSlip=e['"Check Number"'],delete e['"Check Number"']),e.hasOwnProperty("Check or Slip #")&&(e.checkOrSlip=e["Check or Slip #"],delete e["Check or Slip #"]),e}},4719:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(9142);function o(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=6001.6e0195fc.chunk.js.map