"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3368,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return s},OpenModal:function(){return i},default:function(){return a}});var r=t(2791),c=t(5408),o=t(2350),u=t(184),a=function(){var n=(0,o.bh)("listDialog")||{},e=((0,c.Z)("listDialog_h392"),Object.keys(n));return(0,u.jsx)(u.Fragment,{children:e.map((function(e,t){var c=n[e];if(c&&c.visible){var o={};c.height&&(o.heigth=c.height),c.width,c.zIndex&&(o.zIndex=c.zIndex-1);var a={zIndex:c.zIndex},i=null,l=c.data;return c.content&&(i=r.cloneElement(c.content,{data:l})),(0,u.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,u.jsx)("div",{className:"ltr-hoe9xz",children:(0,u.jsx)("div",{className:"ltr-1wao6ny",style:a,id:e,children:i})}),c.data.overlay?(0,u.jsx)("div",{className:"DialogHRMOverlay ".concat(c.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:n})}}):null]},e)}}))})},i=function(n){var e=(0,o.bh)("listDialog")||{},t=(0,o.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var c=document.getElementsByTagName("body")[0];null!==c&&void 0!==c&&c.style&&(c.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,o.Rz)("listDialog",e),(0,o.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,o.Rz)("listDialog",e),(0,o.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)("listDialog_h392")}),125)},s=function(n){var e,t,r,c=(0,o.bh)("listDialog")||{},u=n.id;c[u]&&(c[u].observeResize&&c[u].observeInterval&&clearInterval(c[u].observeInterval),c[u].display=!1,null===(e=c[u])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",c),delete c[u],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)("listDialog_h392"),setTimeout((function(){delete c[u],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},3368:function(n,e,t){t.r(e);var r=t(4165),c=t(5861),o=t(9439),u=t(2791),a=t(2350),i=(t(4363),t(1636),t(4206)),s=t(9760),l=t(4050),d=t(2647),v=t(184),p=(0,i.ps)(),h=(0,i.W4)(),b=(0,i.q3)(),f=(0,i.P3)(),m=(0,d.PU)();e.default=function(n){var e,t=n.data,i=(n.elmId,n.openUpdateView,(0,u.useState)(!1)),d=(0,o.Z)(i,2),_=d[0],y=d[1],g=(0,u.useState)(0),x=(0,o.Z)(g,2),I=(x[0],x[1]);(0,u.useEffect)((function(){_||(y(!0),I((0,a.M5)()))}));var w=function(){I((0,a.M5)())},Z=function(){(0,l.ZX)(w)},z=function(){(0,l._0)(w)},j=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,a.Rz)("upd_account",t),(0,a.Rz)("upd_account_bck",JSON.parse(JSON.stringify(t))),(e={}).zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=(0,v.jsx)(p,{confirm:z}),(0,s.OpenModal)(e);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(n){(0,a.Rz)("submayor_list",null),(0,a.Rz)("submayor_group",null);var e={account:t.accountId};n&&(e.subAccount=n),(0,a.Rz)("account_sub_mayor",t);var r={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};r.content=(0,v.jsx)(f,{confirm:Z,accountForm:e}),(0,s.OpenModal)(r)},O=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,a.Rz)("account_rel_subacc",t),(0,a.Rz)("upd_sub_account",e),(0,a.Rz)("upd_sub_account_bck",JSON.parse(JSON.stringify(e))),(c={}).zIndex=450,c.height="80vh",c.props={minHeight:"1vh",overlay:!0},c.content=(0,v.jsx)(b,{confirm:Z}),(0,s.OpenModal)(c);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=(0,l.Y1)(null===(e=(0,a.bh)("sub_account_group"))||void 0===e?void 0:e[t.accountId],"subAccount");return(0,v.jsxs)("div",{className:"item_account",style:{"--hrm_palette_acc_type_color":"debit"===t.type?"var(--hrm_palette-success-fg)":"credit"===t.type?"var(--hrm_palette-blue-purple)":"#c62828"},children:[(0,v.jsxs)("div",{className:"_dsplFlx account_item_bx2 account_header",children:[(0,v.jsxs)("div",{className:"_dsplFlx",style:{minWidth:350,padding:"5px 0 0"},onClick:j,children:[(0,v.jsx)("div",{className:"icon_acc_type",children:(0,v.jsx)(m,{name:"debit"===(null===t||void 0===t?void 0:t.type)?"alpha-d-circle":"credit"===(null===t||void 0===t?void 0:t.type)?"alpha-c-circle":"alert",color:"var(--hrm_palette_acc_type_color)",size:30})}),(0,v.jsx)("div",{className:"code",children:null===t||void 0===t?void 0:t.code}),(0,v.jsx)("div",{className:"name",children:null===t||void 0===t?void 0:t.name})]}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:" addSbAcc purple",onClick:function(){(0,a.Rz)("account_rel_subacc",t);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,v.jsx)(h,{confirm:Z}),(0,s.OpenModal)(n)},children:"Agregar SubCuenta"}),(0,v.jsx)("div",{className:" addSbAcc purple",onClick:function(){return k(null)},children:"Submayor"})]}),(null===N||void 0===N?void 0:N.length)&&(0,v.jsx)("div",{children:null===N||void 0===N?void 0:N.map((function(n){return n.subAccount?(0,v.jsxs)("div",{className:"_dsplFlx account_item_bx2",style:{marginLeft:"65px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx",onClick:function(){return O(n)},children:[(0,v.jsx)("div",{className:"code",children:n.subAccount}),(0,v.jsx)("div",{className:"name",children:n.subAccountName})]}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:" addSbAcc purple",onClick:function(){return k(n.sub_accountId)},children:"Submayor"})]},n.sub_accountId):null}))})]})}},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return f},Jy:function(){return l},Mp:function(){return y},T7:function(){return b},TP:function(){return m},Y1:function(){return h},ZX:function(){return i},_0:function(){return a},bs:function(){return g},i_:function(){return x},rs:function(){return d},y1:function(){return I}});var r=t(4165),c=t(1413),o=t(5861),u=t(2350),a=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},i=(0,u.I7)(a),n.next=5,i;case 5:(s=n.sent)&&((0,u.Rz)("account_list",p(s,"code")),(0,u.Rz)("account_ids",(0,u.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,i,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},l=(0,u.I7)(i),n.next=5,l;case 5:(d=n.sent)&&((0,u.Rz)("sub_account_list",h(d,"subAccount")),(0,u.Rz)("sub_account_group",s(d,"accountId")),(0,u.Rz)("sub_account_ids",(0,u.ME)(d,"sub_accountId")),a(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,u.bh)("searchQry")},i=(0,u.I7)(a),n.next=5,i;case 5:(s=n.sent)&&((0,u.Rz)("account_list",p((0,u.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,a,i,s,l,d,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(o=(0,u.bh)((0,u.hQ)()))||void 0===o?void 0:o.find_acc)).params={businessId:null===(a=(0,u.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((i=(0,c.Z)({},null===(s=(0,u.bh)((0,u.hQ)()))||void 0===s?void 0:s.find_acc_subacc)).params={businessId:null===(l=(0,u.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,u.I7)(i),n.next=6,d;case 6:(p=n.sent)&&!p.error&&((0,u.Rz)("submayor_list",p),(0,u.Rz)("submayor_group",v(p))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,u._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,u.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var p=function(n,e){return(0,u.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],c=1*t[e];return r<c?-1:r>c?1:0}))}))},h=function(n,e){return(0,u.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],c=1*t[e];return r<c?-1:r>c?1:0}))}))},b=function(n,e,t){return(0,u.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],c=t[e];return r<c?-1:r>c?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,c.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function f(){return p((0,u.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.get_balance_general_param),a=(0,u.I7)(o),n.next=4,a;case 4:(i=n.sent)&&!i.error&&((0,u.Rz)("balance_general_param",null===i||void 0===i?void 0:i.general),(0,u.Rz)("result_sheet_params",null===i||void 0===i?void 0:i.result),(0,u.Rz)("balance_general_upd_flds",null===i||void 0===i?void 0:i.general_flds),(0,u.Rz)("result_sheet_upd_flds",null===i||void 0===i?void 0:i.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var a,i,s,l,d,v,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(a=(0,u.bh)((0,u.hQ)()))||void 0===a?void 0:a.find_balances)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,":type":e},l=(0,u.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,u._2)(d)[0],p=d[v],(0,u.Rz)(t,p),(0,u.Rz)(t+"_bck",(0,c.Z)({},p))),o&&o();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var a,i,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(a=(0,u.bh)((0,u.hQ)()))||void 0===a?void 0:a.calc_balance_general)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,balanceId:e,resultId:t},l=(0,u.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?o&&o(d):o&&o();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var e,t,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=(0,c.Z)({},null===(e=(0,u.bh)((0,u.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,u.bh)("profileUser"))||void 0===t?void 0:t.businessId},a=(0,u.I7)(o),n.next=5,a;case 5:if(!(i=n.sent)||i.error){n.next=9;break}return s=function(n){var e,t,r,c,o=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],a=n.subAccount?null===(t=i[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(c=i[n.accountId])||void 0===c?void 0:c.saldo;return{cuenta:o.code+"",nombre:o.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:a||0,type:o.type}},n.abrupt("return",p((0,u.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function x(n,e,t){return n.map((function(n){return{fecha:(0,u.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var I=function(n,e){var t=w(n,"fecha"),r=w((0,u.JO)(e),"Date"),o={},a={};r.map((function(n,e){!function(n,e){for(var r=0;r<t.length;r++){var c=t[r];if(n===(n>0?1*c.debito:-1*c.credito)&&!o[""+e]&&!a[""+r]){o[""+e]=""+r,a[""+r]=""+e;break}}}(1*n.Amount,e)}));var i=[];return r.map((function(n,e){var r=Z((0,c.Z)({},n));o[e]?(r.Comprobante=t[o[e]].comprobante,r.Documento=t[o[e]].documento,i.push(r)):i.push(r)})),i},w=function(n,e){return n&&n.sort((function(n,t){var r=(0,u.Vd)(n[e]),c=(0,u.Vd)(t[e]);return r<c?-1:r>c?1:0}))},Z=function(n){return n.hasOwnProperty("Date")&&(n.date=n.Date,delete n.Date),n.hasOwnProperty("Posting Date")&&(n.date=n["Posting Date"],delete n["Posting Date"]),n.hasOwnProperty("Check Number")&&(n.checkOrSlip=n["Check Number"],delete n["Check Number"]),n.hasOwnProperty('"Check Number"')&&(n.checkOrSlip=n['"Check Number"'],delete n['"Check Number"']),n.hasOwnProperty("Check or Slip #")&&(n.checkOrSlip=n["Check or Slip #"],delete n["Check or Slip #"]),n}},1636:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(9142);function c(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(4942);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=3368.f0f1d4bc.chunk.js.map