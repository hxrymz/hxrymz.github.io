"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5686],{5686:function(n,t,e){e.r(t);var r=e(4165),c=e(5861),o=e(9439),u=e(2791),a=e(2350),i=e(2647),s=(e(1e3),e(3588)),d=e(2692),l=e(4050),p=e(7689),f=e(184),b=(0,i.Vg)(),v=(0,d.LO)();t.default=function(n){n.data,n.elmId,n.updObs;var t,e,i=(0,u.useState)(!1),d=(0,o.Z)(i,2),h=d[0],m=d[1],_=(0,u.useState)(0),y=(0,o.Z)(_,2),Z=(y[0],y[1]),x=(0,u.useState)(32),I=(0,o.Z)(x,2),j=I[0],w=I[1],g=(0,u.useState)(!1),N=(0,o.Z)(g,2),O=N[0],k=N[1],A=(0,p.TH)(),S=(0,p.s0)();(0,u.useEffect)((function(){}),[A]),(0,u.useEffect)((function(){h||(m(!0),Z((0,a.M5)()),(0,l._0)(M),(0,l.ZX)(z))}));var R=function(){},z=function(n){(0,s.ly)(M)},M=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Z((0,a.M5)()),k(!1);case 2:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Comprobantes"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)(b,{placeholder:"Buscar comprobantes",width:360,obs:Z,fetchData:function(n){k(!0),(0,s.N$)(M)},loading:O,change:function(n){!O&&k(!0)},callempty:z,keyFlds:"search_acc_record"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(n){S({pathname:"/entries"})},children:"Agregar Comprobantes"})]})]}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("div",{className:"total_comprobante_title",children:"No de comprobantes:"}),(0,f.jsx)("div",{className:"total_comprobante",children:(0,f.jsx)("span",{children:null===(t=(0,a._2)((0,a.bh)("comprobante_by_doc")))||void 0===t?void 0:t.length})})]})]}),(0,f.jsxs)("div",{className:"accounts_container scollVh",style:{height:"calc(100vh - 230px)"},children:[(0,a.bh)("comprobante_by_doc")&&(null===(e=(0,s.tS)((0,a.bh)("comprobante_by_doc"),j))||void 0===e?void 0:e.map((function(n){return(0,f.jsx)(v,{data:(0,a.bh)("comprobante_by_doc")[n],elmId:n,openUpdateView:R,handleRefreshAll:z},n)}))),(0,a.bh)("comprobante_by_doc")&&(0,a._2)((0,a.bh)("comprobante_by_doc"),j).length>j?(0,f.jsxs)("div",{className:"_dsplFlx ",style:{margin:"15px 0 35px"},children:[(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){w((function(n){return n+32}))},children:"Cargar Mas"}),(0,f.jsx)("div",{className:"flexSpace"})]}):null]})]})}},3588:function(n,t,e){e.d(t,{Eb:function(){return l},N$:function(){return i},WB:function(){return s},ly:function(){return a},tS:function(){return p}});var r=e(4165),c=e(1413),o=e(5861),u=e(2350),a=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var e,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(e=(0,u.bh)((0,u.hQ)()))||void 0===e?void 0:e.all_opera)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},i=(0,u.I7)(a),n.next=5,i;case 5:(s=n.sent)&&!s.error&&((0,u.Rz)("comprobante_list",s),(0,u.Rz)("comprobante_by_doc",d(s)),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var e,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(e=(0,u.bh)((0,u.hQ)()))||void 0===e?void 0:e.search_opera)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,u.bh)("search_acc_record")},i=(0,u.I7)(a),n.next=5,i;case 5:(s=n.sent)&&!s.error&&((0,u.Rz)("comprobante_list",s),(0,u.Rz)("comprobante_by_doc",d((0,u.jQ)(s))),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t,e){var a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=[],t.map((function(n){var t,e,r=(0,c.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.delete_opera);r.params={businessId:null===(e=(0,u.bh)("profileUser"))||void 0===e?void 0:e.businessId,operationId:n.operationId},a.push(r)})),i=a.map(function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,u.I7)(t),n.next=3,e;case 3:n.sent;case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),n.next=5,Promise.all(i);case 5:e&&e();case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();function d(n){var t={};return n.length>0?n.map((function(n){var e=new Date(n.date).getTime()+"_"+n.comprobanteId;if(!t[e]){t[e]={};["date","description","document","entryName","comprobanteId"].forEach((function(r){t[e][r]=n[r]})),t[e].amount=0,t[e].operations=[]}n.type&&(t[e].amount+="credit"===n.type?(0,u.Zv)(n.amount,2):0,t[e].operations.push(function(n){var t,e,r={};r.account=null===(t=(0,u.bh)("account_ids"))||void 0===t?void 0:t[n.account],r.sub_account=null===(e=(0,u.bh)("sub_account_ids"))||void 0===e?void 0:e[n.subAccount],r.comprobanteId=n.comprobanteId,r.operationId=n.operationId,r.type=n.type;var c=(0,u.Zv)(n.amount,2);"credit"===n.type?(r.debit=0,r.credit=c):"debit"===n.type&&(r.credit=0,r.debit=c);return r}(n)))})):t=null,t}var l=function(n){return(0,u.MV)("sortComprobantesByType",[n],(function(){var t="type";return n&&n.sort((function(n,e){var r=n[t],c=e[t];return r===c?e[c]-n[r]:c>r?1:-1}))}))},p=function(n,t){return(0,u.MV)("rangeArr",[n,t],(function(){return n?(0,u._2)(n).slice(0,t):[]}))}},4050:function(n,t,e){e.d(t,{Je:function(){return v},Jy:function(){return s},T7:function(){return b},Y1:function(){return f},ZX:function(){return i},_0:function(){return a},rs:function(){return d}});var r=e(4165),c=e(1413),o=e(5861),u=e(2350),a=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var e,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(e=(0,u.bh)((0,u.hQ)()))||void 0===e?void 0:e.all_accounts)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},i=(0,u.I7)(a),n.next=5,i;case 5:(s=n.sent)&&((0,u.Rz)("account_list",p(s,"code")),(0,u.Rz)("account_ids",(0,u.ME)(s,"accountId")),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var e,o,i,s,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(e=(0,u.bh)((0,u.hQ)()))||void 0===e?void 0:e.all_sub_account)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},s=(0,u.I7)(i),n.next=5,s;case 5:(d=n.sent)&&((0,u.Rz)("sub_account_list",f(d,"subAccount")),(0,u.Rz)("sub_account_group",(0,u._U)(d,"accountId")),(0,u.Rz)("sub_account_ids",(0,u.ME)(d,"sub_accountId")),a(),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var e,o,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(e=(0,u.bh)((0,u.hQ)()))||void 0===e?void 0:e.search_account)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,u.bh)("searchQry")},i=(0,u.I7)(a),n.next=5,i;case 5:(s=n.sent)&&((0,u.Rz)("account_list",p((0,u.jQ)(s),"code")),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t,e){var o,a,i,s,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,c.Z)({},null===(o=(0,u.bh)((0,u.hQ)()))||void 0===o?void 0:o.find_acc)).params={businessId:null===(a=(0,u.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===t||void 0===t?void 0:t.account},null!==t&&void 0!==t&&t.subAccount&&(i.params[":sub_account"]=null===t||void 0===t?void 0:t.subAccount,i.queryString+=" AND subAccount contain :sub_account"),s=(0,u.I7)(i),n.next=6,s;case 6:(d=n.sent)&&!d.error&&((0,u.Rz)("submayor_list",d),(0,u.Rz)("submayor_group",l(d))),e&&e();case 9:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();function l(n,t){var e={operations:[]},r=n&&(0,u._2)(n);return r.length>0?r.map((function(r){var c=n[r];c.type&&(t?"debit"===c.type?-1*c.amount:1*c.amount:"credit"===c.type?-1*c.amount:1*c.amount,e.operations.push(function(n){var t,e,r={};r.account=null===(t=(0,u.bh)("account_ids"))||void 0===t?void 0:t[n.account],r.sub_account=null===(e=(0,u.bh)("sub_account_ids"))||void 0===e?void 0:e[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(c)))})):e=null,e}var p=function(n,t){return(0,u.MV)("sortAccounts",[n,t],(function(){return n.sort((function(n,e){var r=1*n[t],c=1*e[t];return r<c?-1:r>c?1:0}))}))},f=function(n,t){return(0,u.MV)("sortSubAccounts",[n],(function(){return n.sort((function(n,e){var r=1*n[t],c=1*e[t];return r<c?-1:r>c?1:0}))}))},b=function(n,t,e){return(0,u.MV)("calcSubmayor",[n,t,e],(function(){var t="date",e=n.sort((function(n,e){var r=new Date(n[t]).getTime(),c=new Date(e[t]).getTime();return r<c?-1:r>c?1:0})),r=0;return e.map((function(n){return function(n){var t,e=(0,c.Z)({},n);return"credit"===(null===n||void 0===n||null===(t=n.account)||void 0===t?void 0:t.type)?e.saldo=r+1*e.credit-1*e.debit:e.saldo=r+1*e.debit-1*e.credit,r=e.saldo,e}(n)}))}))};function v(){return p((0,u.bh)("sub_account_list").map((function(n){var t,e=null===(t=(0,u.bh)("account_ids"))||void 0===t?void 0:t[n.accountId];return{cuenta:e.code+"",nombre:e.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}},1e3:function(){},4942:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(9142);function c(n,t,e){return(t=(0,r.Z)(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},1413:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(4942);function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}}}]);
//# sourceMappingURL=5686.bc3f8881.chunk.js.map