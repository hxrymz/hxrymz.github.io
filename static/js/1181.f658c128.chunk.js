"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1181,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return s},OpenModal:function(){return i},default:function(){return a}});var r=t(2791),u=t(5408),o=t(2350),c=t(184),a=function(){var n=(0,o.bh)("listDialog")||{},e=((0,u.Z)("listDialog_h392"),Object.keys(n));return(0,c.jsx)(c.Fragment,{children:e.map((function(e,t){var u=n[e];if(u&&u.visible){var o={};u.height&&(o.heigth=u.height),u.width,u.zIndex&&(o.zIndex=u.zIndex-1);var a={zIndex:u.zIndex},i=null,l=u.data;return u.content&&(i=r.cloneElement(u.content,{data:l})),(0,c.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,c.jsx)("div",{className:"ltr-hoe9xz",children:(0,c.jsx)("div",{className:"ltr-1wao6ny",style:a,id:e,children:i})}),u.data.overlay?(0,c.jsx)("div",{className:"DialogHRMOverlay ".concat(u.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:n})}}):null]},e)}}))})},i=function(n){var e=(0,o.bh)("listDialog")||{},t=(0,o.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var u=document.getElementsByTagName("body")[0];null!==u&&void 0!==u&&u.style&&(u.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,o.Rz)("listDialog",e),(0,o.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,o.Rz)("listDialog",e),(0,o.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)("listDialog_h392")}),125)},s=function(n){var e,t,r,u=(0,o.bh)("listDialog")||{},c=n.id;u[c]&&(u[c].observeResize&&u[c].observeInterval&&clearInterval(u[c].observeInterval),u[c].display=!1,null===(e=u[c])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",u),delete u[c],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)("listDialog_h392"),setTimeout((function(){delete u[c],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},3585:function(n,e,t){t.r(e);var r=t(4165),u=t(5861),o=t(9439),c=t(2791),a=t(2350),i=t(2647),s=t(9760),l=(t(4363),t(4206)),d=t(4050),v=t(7689),f=t(184),h=(0,i.Vg)(),p=(0,l.yu)(),b=(0,l.vH)();(0,i.h0)();e.default=function(n){n.data,n.elmId,n.updObs;var e,t=(0,c.useState)(!1),i=(0,o.Z)(t,2),l=i[0],m=i[1],_=(0,c.useState)(0),g=(0,o.Z)(_,2),y=(g[0],g[1]),I=(0,c.useState)(!1),w=(0,o.Z)(I,2),x=w[0],Z=w[1];(0,c.useEffect)((function(){l||(m(!0),y((0,a.M5)()),(0,d.ZX)(O))}));var z=(0,v.s0)(),j=function(){},O=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:y((0,a.M5)()),Z(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Cuentas"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)(h,{placeholder:"Buscar cuenta",width:360,obs:y,fetchData:function(n){Z(!0),(0,d.Jy)(O)},loading:x,change:function(n){!x&&Z(!0)},callempty:function(n){(0,d._0)(O)},keyFlds:"searchQry"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,f.jsx)(p,{}),(0,s.OpenModal)(n)},children:"Agregar Cuenta"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,a.eY)("export_accounts_list_"+(0,a.M5)()+".csv",(0,d.Je)())},children:"Exportar a CSV"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(n){z({pathname:"/parameterize-balance"})},children:"Parametrizar Balances"})]})]}),(0,f.jsx)("div",{className:"accounts_container scollVh",children:(0,a.bh)("account_list")&&(null===(e=(0,a._2)((0,a.bh)("account_list")))||void 0===e?void 0:e.map((function(n){return(0,f.jsx)(b,{data:(0,a.bh)("account_list")[n],elmId:n,openUpdateView:j},n)})))})]})}},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return b},Jy:function(){return l},Mp:function(){return g},T7:function(){return p},TP:function(){return m},Y1:function(){return h},ZX:function(){return i},_0:function(){return a},bs:function(){return y},rs:function(){return d}});var r=t(4165),u=t(1413),o=t(5861),c=t(2350),a=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,u.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(o=(0,c.bh)("profileUser"))||void 0===o?void 0:o.businessId},i=(0,c.I7)(a),n.next=5,i;case 5:(s=n.sent)&&((0,c.Rz)("account_list",f(s,"code")),(0,c.Rz)("account_ids",(0,c.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(o=(0,c.bh)("profileUser"))||void 0===o?void 0:o.businessId},l=(0,c.I7)(i),n.next=5,l;case 5:(d=n.sent)&&((0,c.Rz)("sub_account_list",h(d,"subAccount")),(0,c.Rz)("sub_account_group",s(d,"accountId")),(0,c.Rz)("sub_account_ids",(0,c.ME)(d,"sub_accountId")),a(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,u.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(o=(0,c.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,c.bh)("searchQry")},i=(0,c.I7)(a),n.next=5,i;case 5:(s=n.sent)&&((0,c.Rz)("account_list",f((0,c.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,a,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(o=(0,c.bh)((0,c.hQ)()))||void 0===o?void 0:o.find_acc)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&(i.params[":sub_account"]=null===e||void 0===e?void 0:e.subAccount,i.queryString+=" AND subAccount contain :sub_account"),s=(0,c.I7)(i),n.next=6,s;case 6:(l=n.sent)&&!l.error&&((0,c.Rz)("submayor_list",l),(0,c.Rz)("submayor_group",v(l))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,c._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,c.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var f=function(n,e){return(0,c.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],u=1*t[e];return r<u?-1:r>u?1:0}))}))},h=function(n,e){return(0,c.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],u=1*t[e];return r<u?-1:r>u?1:0}))}))},p=function(n,e,t){return(0,c.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],u=t[e];return r<u?-1:r>u?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,u.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function b(){return f((0,c.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,u.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.get_balance_general_param),a=(0,c.I7)(o),n.next=4,a;case 4:(i=n.sent)&&!i.error&&(s=null===i||void 0===i?void 0:i.general,l=null===i||void 0===i?void 0:i.result,(0,c.Rz)("balance_general_param",s),(0,c.Rz)("result_sheet_params",l)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var a,i,s,l,d,v,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,u.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.find_balances)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,":type":e},l=(0,c.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,c._2)(d)[0],f=d[v],(0,c.Rz)(t,f),(0,c.Rz)(t+"_bck",(0,u.Z)({},f))),o&&o();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var a,i,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,u.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.calc_balance_general)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,balanceId:e,resultId:t},l=(0,c.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?o&&o(d):o&&o();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var e,t,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=(0,u.Z)({},null===(e=(0,c.bh)((0,c.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,c.bh)("profileUser"))||void 0===t?void 0:t.businessId},a=(0,c.I7)(o),n.next=5,a;case 5:if(!(i=n.sent)||i.error){n.next=9;break}return s=function(n){var e,t,r,u,o=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],a=n.subAccount?null===(t=i[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(u=i[n.accountId])||void 0===u?void 0:u.saldo;return{cuenta:o.code+"",nombre:o.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:a||0}},n.abrupt("return",f((0,c.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},4942:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(9142);function u(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(4942);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=1181.f658c128.chunk.js.map