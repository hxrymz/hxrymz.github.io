"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3368,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return s},OpenModal:function(){return i},default:function(){return u}});var r=t(2791),c=t(5408),o=t(2350),a=t(184),u=function(){var n=(0,o.bh)("listDialog")||{},e=((0,c.Z)("listDialog_h392"),Object.keys(n));return(0,a.jsx)(a.Fragment,{children:e.map((function(e,t){var c=n[e];if(c&&c.visible){var o={};c.height&&(o.heigth=c.height),c.width,c.zIndex&&(o.zIndex=c.zIndex-1);var u={zIndex:c.zIndex},i=null,l=c.data;return c.content&&(i=r.cloneElement(c.content,{data:l})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:u,id:e,children:i})}),c.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(c.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:n})}}):null]},e)}}))})},i=function(n){var e=(0,o.bh)("listDialog")||{},t=(0,o.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var c=document.getElementsByTagName("body")[0];null!==c&&void 0!==c&&c.style&&(c.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,o.Rz)("listDialog",e),(0,o.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,o.Rz)("listDialog",e),(0,o.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)("listDialog_h392")}),125)},s=function(n){var e,t,r,c=(0,o.bh)("listDialog")||{},a=n.id;c[a]&&(c[a].observeResize&&c[a].observeInterval&&clearInterval(c[a].observeInterval),c[a].display=!1,null===(e=c[a])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",c),delete c[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)("listDialog_h392"),setTimeout((function(){delete c[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},3368:function(n,e,t){t.r(e);var r=t(4165),c=t(5861),o=t(9439),a=t(2791),u=t(2350),i=(t(4363),t(4206)),s=t(9760),l=t(4050),d=t(184),v=(0,i.ps)(),f=(0,i.W4)(),p=(0,i.q3)(),h=(0,i.P3)();e.default=function(n){var e,t=n.data,i=(n.elmId,n.openUpdateView,(0,a.useState)(!1)),b=(0,o.Z)(i,2),m=b[0],_=b[1],g=(0,a.useState)(0),x=(0,o.Z)(g,2),y=(x[0],x[1]);(0,a.useEffect)((function(){m||(_(!0),y((0,u.M5)()))}));var I=function(){y((0,u.M5)())},w=function(){(0,l.ZX)(I)},Z=function(){(0,l._0)(I)},z=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,u.Rz)("upd_account",t),(0,u.Rz)("upd_account_bck",JSON.parse(JSON.stringify(t))),(e={}).zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=(0,d.jsx)(v,{confirm:Z}),(0,s.OpenModal)(e);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(n){var e={account:t.accountId};n&&(e.subAccount=n),(0,u.Rz)("account_sub_mayor",t);var r={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};r.content=(0,d.jsx)(h,{confirm:w,accountForm:e}),(0,s.OpenModal)(r)},O=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,u.Rz)("account_rel_subacc",t),(0,u.Rz)("upd_sub_account",e),(0,u.Rz)("upd_sub_account_bck",JSON.parse(JSON.stringify(e))),(c={}).zIndex=450,c.height="80vh",c.props={minHeight:"1vh",overlay:!0},c.content=(0,d.jsx)(p,{confirm:w}),(0,s.OpenModal)(c);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=(0,l.Y1)(null===(e=(0,u.bh)("sub_account_group"))||void 0===e?void 0:e[t.accountId],"subAccount");return(0,d.jsxs)("div",{className:"item_acc",children:[(0,d.jsxs)("div",{className:"_dsplFlx account_item_box account_header",children:[(0,d.jsxs)("div",{className:"_dsplFlx",onClick:z,children:[(0,d.jsx)("div",{className:"code",children:null===t||void 0===t?void 0:t.code}),(0,d.jsx)("div",{className:"name",children:null===t||void 0===t?void 0:t.name})]}),(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("div",{className:" addSbAcc purple",onClick:function(){(0,u.Rz)("account_rel_subacc",t);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,d.jsx)(f,{confirm:w}),(0,s.OpenModal)(n)},children:"Agregar SubCuenta"}),(0,d.jsx)("div",{className:" addSbAcc purple",onClick:function(){return j(null)},children:"Submayor"})]}),(null===N||void 0===N?void 0:N.length)&&(0,d.jsx)("div",{children:null===N||void 0===N?void 0:N.map((function(n){return n.subAccount?(0,d.jsxs)("div",{className:"_dsplFlx account_item_box",style:{marginLeft:"35px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx",onClick:function(){return O(n)},children:[(0,d.jsx)("div",{className:"code",children:n.subAccount}),(0,d.jsx)("div",{className:"name",children:n.subAccountName})]}),(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("div",{className:" addSbAcc purple",onClick:function(){return j(n.sub_accountId)},children:"Submayor"})]},n.sub_accountId):null}))})]})}},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return b},Jy:function(){return l},Mp:function(){return g},T7:function(){return h},TP:function(){return m},Y1:function(){return p},ZX:function(){return i},_0:function(){return u},rs:function(){return d}});var r=t(4165),c=t(1413),o=t(5861),a=t(2350),u=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,c.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},i=(0,a.I7)(u),n.next=5,i;case 5:(s=n.sent)&&((0,a.Rz)("account_list",f(s,"code")),(0,a.Rz)("account_ids",(0,a.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},l=(0,a.I7)(i),n.next=5,l;case 5:(d=n.sent)&&((0,a.Rz)("sub_account_list",p(d,"subAccount")),(0,a.Rz)("sub_account_group",s(d,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(d,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,c.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchQry")},i=(0,a.I7)(u),n.next=5,i;case 5:(s=n.sent)&&((0,a.Rz)("account_list",f((0,a.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,u,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.find_acc)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&(i.params[":sub_account"]=null===e||void 0===e?void 0:e.subAccount,i.queryString+=" AND subAccount contain :sub_account"),s=(0,a.I7)(i),n.next=6,s;case 6:(l=n.sent)&&!l.error&&((0,a.Rz)("submayor_list",l),(0,a.Rz)("submayor_group",v(l))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,a._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var f=function(n,e){return(0,a.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],c=1*t[e];return r<c?-1:r>c?1:0}))}))},p=function(n,e){return(0,a.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],c=1*t[e];return r<c?-1:r>c?1:0}))}))},h=function(n,e,t){return(0,a.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],c=t[e];return r<c?-1:r>c?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,c.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function b(){return f((0,a.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,u,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,c.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.get_balance_general_param),u=(0,a.I7)(o),n.next=4,u;case 4:(i=n.sent)&&(0,a.Rz)("balance_general_param",i),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,u,i,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.find_balances)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId,":type":e},s=(0,a.I7)(i),n.next=5,s;case 5:(l=n.sent)&&!l.error&&(d=(0,a._2)(l)[0],(0,a.Rz)("balance_params",l[d]),(0,a.Rz)("balance_params_bck",(0,c.Z)({},l[d]))),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,u,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.calc_balance_general)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId,balanceId:e},s=(0,a.I7)(i),n.next=5,s;case 5:(l=n.sent)&&!l.error?t&&t(l):t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},4942:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(9142);function c(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(4942);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=3368.f59ed0f5.chunk.js.map