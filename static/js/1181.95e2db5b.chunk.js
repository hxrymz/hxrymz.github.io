"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1181,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return s},OpenModal:function(){return i},default:function(){return u}});var r=t(2791),a=t(5408),c=t(2350),o=t(184),u=function(){var n=(0,c.bh)("listDialog")||{},e=((0,a.Z)("listDialog_h392"),Object.keys(n));return(0,o.jsx)(o.Fragment,{children:e.map((function(e,t){var a=n[e];if(a&&a.visible){var c={};a.height&&(c.heigth=a.height),a.width,a.zIndex&&(c.zIndex=a.zIndex-1);var u={zIndex:a.zIndex},i=null,l=a.data;return a.content&&(i=r.cloneElement(a.content,{data:l})),(0,o.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,o.jsx)("div",{className:"ltr-hoe9xz",children:(0,o.jsx)("div",{className:"ltr-1wao6ny",style:u,id:e,children:i})}),a.data.overlay?(0,o.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:n})}}):null]},e)}}))})},i=function(n){var e=(0,c.bh)("listDialog")||{},t=(0,c.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,c.Rz)("listDialog",e),(0,c.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,c.Rz)("listDialog",e),(0,c.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",t),(0,c.wt)("listDialog_h392")}),125)},s=function(n){var e,t,r,a=(0,c.bh)("listDialog")||{},o=n.id;a[o]&&(a[o].observeResize&&a[o].observeInterval&&clearInterval(a[o].observeInterval),a[o].display=!1,null===(e=a[o])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,c.Rz)("listDialog",a),delete a[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)("listDialog_h392"),setTimeout((function(){delete a[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},3585:function(n,e,t){t.r(e);var r=t(4165),a=t(5861),c=t(9439),o=t(2791),u=t(2350),i=t(2647),s=t(9760),l=(t(4363),t(4206)),d=t(4050),v=t(7689),f=t(184),h=(0,i.Vg)(),p=(0,l.yu)(),b=(0,l.vH)();(0,i.h0)();e.default=function(n){n.data,n.elmId,n.updObs;var e,t=(0,o.useState)(!1),i=(0,c.Z)(t,2),l=i[0],m=i[1],g=(0,o.useState)(0),_=(0,c.Z)(g,2),y=(_[0],_[1]),w=(0,o.useState)(!1),x=(0,c.Z)(w,2),I=x[0],Z=x[1];(0,o.useEffect)((function(){l||(m(!0),y((0,u.M5)()),(0,d.ZX)(O))}));var z=(0,v.s0)(),j=function(){},O=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:y((0,u.M5)()),Z(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Cuentas"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)(h,{placeholder:"Buscar cuenta",width:360,obs:y,fetchData:function(n){Z(!0),(0,d.Jy)(O)},loading:I,change:function(n){!I&&Z(!0)},callempty:function(n){(0,d._0)(O)},keyFlds:"searchQry"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,f.jsx)(p,{}),(0,s.OpenModal)(n)},children:"Agregar Cuenta"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,u.eY)("export_accounts_list_"+(0,u.M5)()+".csv",(0,d.Je)())},children:"Exportar a CSV"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(n){z({pathname:"/parameterize-balance"})},children:"Parametrizar Balances"})]})]}),(0,f.jsx)("div",{className:"accounts_container scollVh",children:(0,u.bh)("account_list")&&(null===(e=(0,u._2)((0,u.bh)("account_list")))||void 0===e?void 0:e.map((function(n){return(0,f.jsx)(b,{data:(0,u.bh)("account_list")[n],elmId:n,openUpdateView:j},n)})))})]})}},4050:function(n,e,t){t.d(e,{Ht:function(){return g},Je:function(){return b},Jy:function(){return l},Mp:function(){return _},T7:function(){return p},TP:function(){return m},Y1:function(){return h},ZX:function(){return i},_0:function(){return u},rs:function(){return d}});var r=t(4165),a=t(1413),c=t(5861),o=t(2350),u=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,a.Z)({},null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(c=(0,o.bh)("profileUser"))||void 0===c?void 0:c.businessId},i=(0,o.I7)(u),n.next=5,i;case 5:(s=n.sent)&&((0,o.Rz)("account_list",f(s,"code")),(0,o.Rz)("account_ids",(0,o.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,i,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,a.Z)({},null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(c=(0,o.bh)("profileUser"))||void 0===c?void 0:c.businessId},l=(0,o.I7)(i),n.next=5,l;case 5:(d=n.sent)&&((0,o.Rz)("sub_account_list",h(d,"subAccount")),(0,o.Rz)("sub_account_group",s(d,"accountId")),(0,o.Rz)("sub_account_ids",(0,o.ME)(d,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,a.Z)({},null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(c=(0,o.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,o.bh)("searchQry")},i=(0,o.I7)(u),n.next=5,i;case 5:(s=n.sent)&&((0,o.Rz)("account_list",f((0,o.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){var c,u,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,a.Z)({},null===(c=(0,o.bh)((0,o.hQ)()))||void 0===c?void 0:c.find_acc)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&(i.params[":sub_account"]=null===e||void 0===e?void 0:e.subAccount,i.queryString+=" AND subAccount contain :sub_account"),s=(0,o.I7)(i),n.next=6,s;case 6:(l=n.sent)&&!l.error&&((0,o.Rz)("submayor_list",l),(0,o.Rz)("submayor_group",v(l))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,o._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,o.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,o.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var f=function(n,e){return(0,o.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],a=1*t[e];return r<a?-1:r>a?1:0}))}))},h=function(n,e){return(0,o.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],a=1*t[e];return r<a?-1:r>a?1:0}))}))},p=function(n,e,t){return(0,o.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],a=t[e];return r<a?-1:r>a?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,a.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function b(){return f((0,o.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,o.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=(0,a.Z)({},null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.get_balance_general_param),u=(0,o.I7)(c),n.next=4,u;case 4:(i=n.sent)&&(0,o.Rz)("balance_general_param",i),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){var c,u,i,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,a.Z)({},null===(c=(0,o.bh)((0,o.hQ)()))||void 0===c?void 0:c.find_balances)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,":type":e},s=(0,o.I7)(i),n.next=5,s;case 5:(l=n.sent)&&!l.error&&(d=(0,o._2)(l)[0],(0,o.Rz)("balance_params",l[d]),(0,o.Rz)("balance_params_bck",(0,a.Z)({},l[d]))),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),_=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){var c,u,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,a.Z)({},null===(c=(0,o.bh)((0,o.hQ)()))||void 0===c?void 0:c.calc_balance_general)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,balanceId:e},s=(0,o.I7)(i),n.next=5,s;case 5:(l=n.sent)&&!l.error?t&&t(l):t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},4942:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(9142);function a(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(4942);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=1181.95e2db5b.chunk.js.map