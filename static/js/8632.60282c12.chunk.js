"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8632,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return a},OpenModal:function(){return c},default:function(){return s}});var r=t(2791),o=t(5408),i=t(2350),u=t(184),s=function(){var n=(0,i.bh)("listDialog")||{},e=((0,o.Z)("listDialog_h392"),Object.keys(n));return(0,u.jsx)(u.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var s={zIndex:o.zIndex},c=null,l=o.data;return o.content&&(c=r.cloneElement(o.content,{data:l})),(0,u.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,u.jsx)("div",{className:"ltr-hoe9xz",children:(0,u.jsx)("div",{className:"ltr-1wao6ny",style:s,id:e,children:c})}),o.data.overlay?(0,u.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),a({id:n})}}):null]},e)}}))})},c=function(n){var e=(0,i.bh)("listDialog")||{},t=(0,i.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,i.Rz)("listDialog",e),(0,i.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,i.Rz)("listDialog",e),(0,i.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)("listDialog_h392")}),125)},a=function(n){var e,t,r,o=(0,i.bh)("listDialog")||{},u=n.id;o[u]&&(o[u].observeResize&&o[u].observeInterval&&clearInterval(o[u].observeInterval),o[u].display=!1,null===(e=o[u])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[u],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)("listDialog_h392"),setTimeout((function(){delete o[u],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return b},Jy:function(){return l},Mp:function(){return g},T7:function(){return h},TP:function(){return m},Y1:function(){return p},ZX:function(){return c},_0:function(){return s},rs:function(){return d}});var r=t(4165),o=t(1413),i=t(5861),u=t(2350),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,c,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,u.I7)(s),n.next=5,c;case 5:(a=n.sent)&&((0,u.Rz)("account_list",f(a,"code")),(0,u.Rz)("account_ids",(0,u.ME)(a,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId},l=(0,u.I7)(c),n.next=5,l;case 5:(d=n.sent)&&((0,u.Rz)("sub_account_list",p(d,"subAccount")),(0,u.Rz)("sub_account_group",a(d,"accountId")),(0,u.Rz)("sub_account_ids",(0,u.ME)(d,"sub_accountId")),s(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function a(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,c,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,u.bh)("searchQry")},c=(0,u.I7)(s),n.next=5,c;case 5:(a=n.sent)&&((0,u.Rz)("account_list",f((0,u.jQ)(a),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,s,c,a,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(i=(0,u.bh)((0,u.hQ)()))||void 0===i?void 0:i.find_acc)).params={businessId:null===(s=(0,u.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&(c.params[":sub_account"]=null===e||void 0===e?void 0:e.subAccount,c.queryString+=" AND subAccount contain :sub_account"),a=(0,u.I7)(c),n.next=6,a;case 6:(l=n.sent)&&!l.error&&((0,u.Rz)("submayor_list",l),(0,u.Rz)("submayor_group",v(l))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,u._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,u.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var f=function(n,e){return(0,u.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},p=function(n,e){return(0,u.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},h=function(n,e,t){return(0,u.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function b(){return f((0,u.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,c,a,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.get_balance_general_param),s=(0,u.I7)(i),n.next=4,s;case 4:(c=n.sent)&&!c.error&&(a=null===c||void 0===c?void 0:c.general,l=null===c||void 0===c?void 0:c.result,(0,u.Rz)("balance_general_param",a),(0,u.Rz)("result_sheet_params",l)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var s,c,a,l,d,v,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(s=(0,u.bh)((0,u.hQ)()))||void 0===s?void 0:s.find_balances)).params={businessId:null===(c=(0,u.bh)("profileUser"))||void 0===c?void 0:c.businessId,":type":e},l=(0,u.I7)(a),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,u._2)(d)[0],f=d[v],(0,u.Rz)(t,f),(0,u.Rz)(t+"_bck",(0,o.Z)({},f))),i&&i();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var s,c,a,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(s=(0,u.bh)((0,u.hQ)()))||void 0===s?void 0:s.calc_balance_general)).params={businessId:null===(c=(0,u.bh)("profileUser"))||void 0===c?void 0:c.businessId,balanceId:e,resultId:t},l=(0,u.I7)(a),n.next=5,l;case 5:(d=n.sent)&&!d.error?i&&i(d):i&&i();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},8632:function(n,e,t){t.r(e);var r=t(4165),o=t(5861),i=t(9439),u=t(2791),s=t(2350),c=t(2647),a=t(9760),l=(t(2052),t(5114)),d=t(6677),v=t(4050),f=t(184),p=(0,c.Vg)(),h=(0,l.V)(),b=(0,l.nU)();e.default=function(n){n.data,n.elmId,n.updObs;var e,t=(0,u.useState)(!1),c=(0,i.Z)(t,2),l=c[0],m=c[1],_=(0,u.useState)(0),g=(0,i.Z)(_,2),y=(g[0],g[1]),Z=(0,u.useState)(!1),I=(0,i.Z)(Z,2),w=(I[0],I[1]),x=(0,u.useState)(!1),z=(0,i.Z)(x,2),j=(z[0],z[1]),O=(0,u.useState)(!1),R=(0,i.Z)(O,2),k=R[0],D=R[1];(0,u.useEffect)((function(){l||(m(!0),y((0,s.M5)()),(0,v.ZX)(N),(0,d.Je)(N))}));var Q=function(){w(!1),j(!0)},M=function(n){(0,d.Je)(N)},N=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:y((0,s.M5)()),D(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Provedores o Clientes"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)(p,{placeholder:"Buscar ....",width:360,obs:y,fetchData:function(n){D(!0),(0,d.UO)(N)},loading:k,change:function(n){!k&&D(!0)},callempty:M,keyFlds:"search_prov"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){j(!1);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,f.jsx)(h,{confimr:M}),(0,a.OpenModal)(n)},children:"Agregar"})]})]}),(0,f.jsx)("div",{className:"providers_container scollVh",children:(0,s.bh)("providers_list")&&(null===(e=(0,s._2)((0,s.bh)("providers_list")))||void 0===e?void 0:e.map((function(n){return(0,f.jsx)(b,{data:(0,s.bh)("providers_list")[n],elmId:n,openUpdateView:Q,handleRefreshAll:M},n)})))})]})}},6677:function(n,e,t){t.d(e,{Je:function(){return s},Qn:function(){return d},UO:function(){return c},mQ:function(){return l}});var r=t(4165),o=t(1413),i=t(5861),u=t(2350),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,c,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_prov_cust)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,u.I7)(s),n.next=5,c;case 5:(l=n.sent)&&((0,u.Rz)("providers_list",a((0,u.jQ)(l),"code")),(0,u.Rz)("providers_ids",(0,u.ME)((0,u.jQ)(l),"providerId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,c,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.search_prov_cust)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,u.bh)("search_prov")},c=(0,u.I7)(s),n.next=5,c;case 5:(l=n.sent)&&((0,u.Rz)("providers_list",a((0,u.jQ)(l),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var a=function(n,e){return(0,u.MV)("sortProviders",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},l=function(n,e){return(0,u.MV)("sortSubProviders",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,s,c,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(i=(0,u.bh)((0,u.hQ)()))||void 0===i?void 0:i.delete_prov_cust)).params={businessId:null===(s=(0,u.bh)("profileUser"))||void 0===s?void 0:s.businessId,providerId:e},a=(0,u.I7)(c),n.next=5,a;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},2052:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(9142);function o(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=8632.60282c12.chunk.js.map