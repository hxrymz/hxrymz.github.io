"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4050],{15:function(n,t,e){e.r(t),e.d(t,{CloseToast:function(){return s},OpenToast:function(){return i},default:function(){return c}});e(2791);var r=e(5408),o=e(2350),u=e(184),a="listToast_gLt754",c=function(){var n=(0,o.bh)("listToat")||{},t=((0,r.Z)(a),Object.keys(n));return(0,u.jsx)(u.Fragment,{children:n&&t.map((function(t,e){var r=n[t];if(r&&r.visible){r.display;var o=r.data,a={opacity:r.display?1:0},c=o&&o.text?o.text:"sdgfdsfgsdfg";return(0,u.jsx)("div",{id:t,className:"TtBase_Toast",children:(0,u.jsxs)("div",{className:r.display?"toast active":"toast",style:a,children:[(0,u.jsx)("div",{className:"text",children:c}),(0,u.jsx)("div",{className:"actions",children:(0,u.jsx)("button",{className:"md-button md-ink-ripple",type:"button",style:{},onClick:function(){s({id:t})},children:"Ok"})})]})})}}))})},i=function(n){var t=(0,o.bh)("listToat")||{},e=(0,o.M5)();n.Id&&(e=n.Id),t[e]||(t[e]={}),t[e].visible=!0;var r={};n.props?(r=n.props).modalID=e:r.modalID=e,r.text=n.text,t[e].data=r,t[e].display=!0,(0,o.Rz)("listToat",t),(0,o.wt)(a),setTimeout((function(){s({id:e})}),n.timeout||3e3)},s=function(n){var t=(0,o.bh)("listToat")||{},e=n.id;t&&t[e]&&(t[e].display=!1,(0,o.Rz)("listToat",t),(0,o.wt)(a),setTimeout((function(){delete t[e],(0,o.Rz)("listToat",t),(0,o.wt)(a)}),275))}},4050:function(n,t,e){e.d(t,{Ht:function(){return Z},Je:function(){return y},Jy:function(){return p},Mp:function(){return k},T7:function(){return _},TP:function(){return I},Y1:function(){return m},ZX:function(){return d},_0:function(){return s},bs:function(){return x},eK:function(){return i},h1:function(){return h},i_:function(){return w},rs:function(){return v},y1:function(){return g}});var r=e(4165),o=e(1413),u=e(5861),a=e(2350),c=e(15),i=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var e,u,i,s,d,l,p,v,b,f,m;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(e=(0,a.bh)("accounts_summary_by_months"))||void 0===e||!e.balanceId){n.next=10;break}return(d=(0,o.Z)({},null===(u=(0,a.bh)((0,a.hQ)()))||void 0===u?void 0:u.calc_sub_myr)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,balanceId:null===(s=(0,a.bh)("accounts_summary_by_months"))||void 0===s?void 0:s.balanceId},l=(0,a.I7)(d),n.next=6,l;case 6:n.sent&&((0,c.OpenToast)({text:"Accounts Summary Updated",timeout:3500}),t&&t()),n.next=21;break;case 10:return(b={}).balanceId=(0,a.M5)(),b.type="accounts_summary_by_months",(f=(0,o.Z)({},null===(p=(0,a.bh)((0,a.hQ)()))||void 0===p?void 0:p.add_balances)).params={businessId:null===(v=(0,a.bh)("profileUser"))||void 0===v?void 0:v.businessId},f.form=b,m=(0,a.I7)(f),n.next=19,m;case 19:n.sent&&((0,a.Rz)("accounts_summary_by_months",b),(0,c.OpenToast)({text:"Something went Wrong. try again later",timeout:3500}),t&&t());case 21:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var e,u,c,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.all_accounts)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId},i=(0,a.I7)(c),n.next=5,i;case 5:(s=n.sent)&&((0,a.Rz)("account_list",f(s,"code")),(0,a.Rz)("account_ids",(0,a.ME)(s,"accountId")),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var e,u,c,i,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.all_sub_account)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId},i=(0,a.I7)(c),n.next=5,i;case 5:(d=n.sent)&&((0,a.Rz)("sub_account_list",m(d,"subAccount")),(0,a.Rz)("sub_account_group",l(d,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(d,"sub_accountId")),s(),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function l(n,t){t=t||"id";var e={};return n.length>0?n.map((function(n){n.subAccount&&(e[n[t]]||(e[n[t]]=[]),e[n[t]].push(n))})):e=null,e}var p=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var e,u,c,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.search_account)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId,":search":(0,a.bh)("searchQry")},i=(0,a.I7)(c),n.next=5,i;case 5:(s=n.sent)&&((0,a.Rz)("account_list",f((0,a.jQ)(s),"code")),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t,e){var u,c,i,s,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(u=(0,a.bh)((0,a.hQ)()))||void 0===u?void 0:u.filter_search_opera)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId,":account":null===t||void 0===t?void 0:t.account,":subAccount":null===t||void 0===t?void 0:t.subAccount},s=(0,a.I7)(i),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,a.Rz)("submayor_list",d),(0,a.Rz)("submayor_group",b(d))),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();function b(n,t){var e={operations:[]},r=n&&(0,a._2)(n);return r.length>0?r.map((function(t){var r=n[t];r.type&&e.operations.push(function(n){var t,e,r={};r.account=null===(t=(0,a.bh)("account_ids"))||void 0===t?void 0:t[n.account],r.sub_account=null===(e=(0,a.bh)("sub_account_ids"))||void 0===e?void 0:e[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):e=null,e}var f=function(n,t){return(0,a.MV)("sortAccounts",[n,t],(function(){return n&&n.sort((function(n,e){var r=1*n[t],o=1*e[t];return r<o?-1:r>o?1:0}))}))},m=function(n,t){return(0,a.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,e){var r=1*n[t],o=1*e[t];return r<o?-1:r>o?1:0}))}))},h=function(n){return(0,a.MV)("sortComprobantesByDate",[n],(function(){var t="date";return n.sort((function(n,e){var r=n[t],o=e[t];return r<o?-1:r>o?1:0}))}))},_=function(n,t,e){return(0,a.MV)("calcSubmayor",[n,t,e],(function(){var t="date",e=n.sort((function(n,e){var r=n[t],o=e[t];return r<o?-1:r>o?1:0})),r=0;return e.map((function(n){return function(n){var t,e=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(t=n.account)||void 0===t?void 0:t.type)?e.saldo=r+1*e.credit-1*e.debit:e.saldo=r+1*e.debit-1*e.credit,r=e.saldo,e}(n)}))}))};function y(){return f((0,a.bh)("sub_account_list").map((function(n){var t,e=null===(t=(0,a.bh)("account_ids"))||void 0===t?void 0:t[n.accountId];return{cuenta:e.code+"",nombre:e.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var I=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var e,u,c,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=(0,o.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.get_balance_general_param),c=(0,a.I7)(u),n.next=4,c;case 4:(i=n.sent)&&!i.error&&((0,a.Rz)("balance_general_param",null===i||void 0===i?void 0:i.general),(0,a.Rz)("result_sheet_params",null===i||void 0===i?void 0:i.result),(0,a.Rz)("balance_general_upd_flds",null===i||void 0===i?void 0:i.general_flds),(0,a.Rz)("result_sheet_upd_flds",null===i||void 0===i?void 0:i.result_flds)),t&&t();case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t,e,u){var c,i,s,d,l,p,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(c=(0,a.bh)((0,a.hQ)()))||void 0===c?void 0:c.find_balances)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,":type":t},d=(0,a.I7)(s),n.next=5,d;case 5:(l=n.sent)&&!l.error&&(p=(0,a._2)(l)[0],v=l[p],(0,a.Rz)(e,v),(0,a.Rz)(e+"_bck",(0,o.Z)({},v))),u&&u();case 8:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),k=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t,e,u){var c,i,s,d,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(c=(0,a.bh)((0,a.hQ)()))||void 0===c?void 0:c.calc_balance_general)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,balanceId:t,resultId:e},d=(0,a.I7)(s),n.next=5,d;case 5:(l=n.sent)&&!l.error?u&&u(l):u&&u();case 7:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),x=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(){var t,e,u,c,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.calc_balance_comprobacion)).params={businessId:null===(e=(0,a.bh)("profileUser"))||void 0===e?void 0:e.businessId},c=(0,a.I7)(u),n.next=5,c;case 5:if(!(i=n.sent)||i.error){n.next=9;break}return s=function(n){var t,e,r,o,u=null===(t=(0,a.bh)("account_ids"))||void 0===t?void 0:t[n.accountId],c=n.subAccount?null===(e=i[n.accountId])||void 0===e||null===(r=e.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=i[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:u.code+"",nombre:u.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:c||0,type:u.type}},n.abrupt("return",f((0,a.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function w(n,t,e){return n.map((function(n){return{date:(0,a.Gv)(n.date),document:n.document,comprobante:n.comprobanteId,description:n.description,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:t,sub_cuenta:e||""}}))}var g=function(n,t,e){var r=z(n,"date"),o=function(n){var t={};for(var e in n)t[e]=n[e];return t}(r),u=function(n){var t={};for(var e in n)t[e]=A(n[e]);return t}(t),a={},c={},i={},s={},d=r,l=u;e&&(d=u,l=r);var p=function(n){if(a[n.comprobante]||(a[n.comprobante]=n),c[n.comprobante])return delete c[n.comprobante],1},v=function(n){if(!c[n.comprobante])return c[n.comprobante]=n,1},b=function(n,t){for(var e in o){var r,u,a=o[e],c=1*n.amount,d=c>0?1*a.debito:-1*a.credito;if(i[""+t])break;var l=null===(r=a.documento)||void 0===r?void 0:r.trim(),b=null===(u=n.checkOrSlip)||void 0===u?void 0:u.trim();if(b&&l===b&&d===c){i[""+t]=""+e,s[""+e]=""+t,p(a),delete o[e];break}if(d===c){i[""+t]=""+e,s[""+e]=""+t,p(a),delete o[e];break}v(a)}};for(var f in l){var m=l[f];m.checkOrSlip&&b(m,f)}for(var h in l){b(l[h],h)}var _=[];for(var y in l){var I=l[y];i[y]?(I.comprobante=d[i[y]].comprobante,I.document=d[i[y]].documento,_.push(I)):(I.comprobante="",I.document="",_.push(I))}return{ready:_,cmpbNotInBank:c}},z=function(n,t){return n&&n.sort((function(n,e){var r=(0,a.Vd)(n[t]),o=(0,a.Vd)(e[t]);return r<o?-1:r>o?1:0}))},A=function(n){var t=(0,o.Z)({},n);return t.hasOwnProperty("Date")&&(t.date=t.Date,delete t.Date),t.hasOwnProperty("Posting Date")&&(t.date=t["Posting Date"],delete t["Posting Date"]),t.hasOwnProperty("Check Number")&&(t.checkOrSlip=t["Check Number"],delete t["Check Number"]),t.hasOwnProperty('"Check Number"')&&(t.checkOrSlip=t['"Check Number"'],delete t['"Check Number"']),t.hasOwnProperty("Check or Slip #")&&(t.checkOrSlip=t["Check or Slip #"],delete t["Check or Slip #"]),t.hasOwnProperty("Amount")&&(t.amount=t.Amount,delete t.Amount),t.hasOwnProperty("Documento")&&(t.document=t.Documento,delete t.Documento),t.hasOwnProperty("Description")&&(t.description=t.Description,delete t.Description),t}}}]);
//# sourceMappingURL=4050.7b50ffc3.chunk.js.map