"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4050],{4050:function(n,r,t){t.d(r,{EK:function(){return z},Ht:function(){return w},Jy:function(){return b},K_:function(){return s},Pe:function(){return v},S:function(){return C},T7:function(){return k},TP:function(){return Z},Y1:function(){return y},ZX:function(){return l},_0:function(){return d},bs:function(){return g},eK:function(){return c},fp:function(){return U},h1:function(){return I},i_:function(){return O},k4:function(){return Q},rs:function(){return m},y1:function(){return S}});var e=t(4165),u=t(1413),o=t(5861),a=t(2350),i=t(15),c=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r){var t,o,c,d,l;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,u.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.calc_sub_myr)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,a.bh)("date_current_year")},d=(0,a.I7)(c),n.next=5,d;case 5:(l=n.sent)&&((0,a.Rz)("accounts_summary_by_months",l.summary),(0,i.OpenToast)({text:"Accounts Summary Updated",timeout:3500}),s(r));case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r){var t,o,i,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.get_sub_bal_myr)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,a.bh)("date_current_year")},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("accounts_summary_by_months",s.summary),r&&r(s));case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r){var t,o,i,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("account_list",_(s,"code")),(0,a.Rz)("account_ids",(0,a.ME)(s,"accountId")),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r){var t,o,i,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("sub_account_list",y(s,"subAccount")),(0,a.Rz)("sub_account_group",p(s,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(s,"sub_accountId")),d(),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r){var t,o,i,c,s,d;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_bank_bUp)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("ourBank",y(s,"date")),(0,a.Rz)("ourBank_ids",(0,a.ME)(s,"bankRecordId")),d=f(s,(0,a.bh)("submayor_list")),(0,a.Rz)("ourBank_filtered",d),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(n,r){var t=[],e=(0,u.Z)({},r),o=[],i=(0,a.bh)("date_range_submayor"),c=(0,u.Z)({},(0,a.bh)("submayor_list")),s={},d={};for(var l in n){var v=n[l];v.date>=(null===i||void 0===i?void 0:i.initDate)&&v.date<=(null===i||void 0===i?void 0:i.lastDate)&&(v.linkId&&9===v.status?(o.push(v),s[v.linkId]?d[v.bankRecordId]=v:(s[v.linkId]=1,c[v.linkId]&&delete c[v.linkId]),delete e[v.linkId]):t.push(v))}var f=[],p=[];for(var b in c){0!==1*c[b].amount?f.push(c[b]):p.push(c[b])}return{pending:y(t,"date"),verified:y(o,"date"),sub_mayor:j((0,a.jQ)(e),"date"),verified_duplicatedLink:d,bankSubLeft:f,bankSubLeft_wZr:p}};function p(n,r){r=r||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[r]]||(t[n[r]]=[]),t[n[r]].push(n))})):t=null,t}var b=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r){var t,o,i,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchQry")},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("account_list",_((0,a.jQ)(s),"code")),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),m=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r,t){var o,i,c,s,d,l,v;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(d=(0,u.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.filter_search_opera)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,year:(0,a.bh)("date_current_year"),":account":null===r||void 0===r?void 0:r.account,":subAccount":null===r||void 0===r?void 0:r.subAccount,":date1":null===(c=(0,a.bh)("date_range_submayor"))||void 0===c?void 0:c.initDate,":date2":null===(s=(0,a.bh)("date_range_submayor"))||void 0===s?void 0:s.lastDate},l=(0,a.I7)(d),n.next=5,l;case 5:(v=n.sent)&&!v.error&&((0,a.Rz)("submayor_list",v),(0,a.Rz)("submayor_group",h(v))),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}();function h(n,r){var t={operations:[]},e=n&&(0,a._2)(n);return e.length>0?e.map((function(r){var e=n[r];e.type&&t.operations.push(function(n){var r,t,e={};e.account=null===(r=(0,a.bh)("account_ids"))||void 0===r?void 0:r[n.account],e.sub_account=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],e.comprobanteId=n.comprobanteId,e.operationId=n.operationId,e.document=n.document,e.date=n.date,"credit"===n.type?(e.debit=0,e.credit=n.amount):"debit"===n.type&&(e.credit=0,e.debit=n.amount);return e}(e))})):t=null,t}var _=function(n,r){return(0,a.MV)("sortAccounts",[n,r],(function(){return n&&n.sort((function(n,t){var e=1*n[r],u=1*t[r];return e<u?-1:e>u?1:0}))}))},y=function(n,r){return(0,a.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var e=1*n[r],u=1*t[r];return e<u?-1:e>u?1:0}))}))},I=function(n){return(0,a.MV)("sortComprobantesByDate",[n],(function(){var r="date";return n.sort((function(n,t){var e=n[r],u=t[r];return e<u?-1:e>u?1:0}))}))},k=function(n,r,t,e){return(0,a.MV)("calcSubmayor",[n,r,t,e],(function(){var e,o,i="date",c=new Date(null===(e=(0,a.bh)("date_range_submayor"))||void 0===e?void 0:e.initDate).getMonth(),s=C(c,{account:r,subAccount:t},"calcSubmayor"),d=null===(o=(0,a.bh)("account_ids"))||void 0===o?void 0:o[r],l=s||0;"credit"===(null===d||void 0===d?void 0:d.type)&&(l*=-1);var v=n&&n.sort((function(n,r){var t=n[i],e=r[i];return t<e?-1:t>e?1:0}));return v.map((function(n){return function(n){var r,t=(0,u.Z)({},n);return"credit"===(null===n||void 0===n||null===(r=n.account)||void 0===r?void 0:r.type)?t.saldo=1*l+(1*t.credit-1*t.debit):t.saldo=1*l+(1*t.debit-1*t.credit),l=t.saldo,t}(n)}))}))};var Z=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r){var t,o,i,c;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,u.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.get_balance_general_param),i=(0,a.I7)(o),n.next=4,i;case 4:(c=n.sent)&&!c.error&&((0,a.Rz)("balance_general_param",null===c||void 0===c?void 0:c.general),(0,a.Rz)("result_sheet_params",null===c||void 0===c?void 0:c.result),(0,a.Rz)("balance_general_upd_flds",null===c||void 0===c?void 0:c.general_flds),(0,a.Rz)("result_sheet_upd_flds",null===c||void 0===c?void 0:c.result_flds)),r&&r();case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),w=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r,t,o){var i,c,s,d,l,v,f;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,u.Z)({},null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.find_balances)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId,":type":r},d=(0,a.I7)(s),n.next=5,d;case 5:(l=n.sent)&&!l.error&&(v=(0,a._2)(l)[0],f=l[v],(0,a.Rz)(t,f),(0,a.Rz)(t+"_bck",(0,u.Z)({},f))),o&&o();case 8:case"end":return n.stop()}}),n)})));return function(r,t,e){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(){var r,t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={},t=function(n){var t,e=null===(t=(0,a.bh)("account_ids"))||void 0===t?void 0:t[n.accountId],u=n.subAccount?n.accountId+"_"+n.sub_accountId:n.accountId;if(r[u])return{};var o,i=new Date(null===(o=(0,a.bh)("date_range_submayor"))||void 0===o?void 0:o.initDate).getMonth()+1,c=C(i,{account:u}),s={cuenta:e.code+"",nombre:e.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:c||0,type:e.type};return r[u]=1,s},n.abrupt("return",_((0,a.bh)("sub_account_list").map(t),"cuenta"));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function O(n,r,t){return n.map((function(n){return{date:(0,a.Gv)(n.date),document:n.document,comprobante:n.comprobanteId,description:n.description,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:r,sub_cuenta:t||"",operationId:n.operationId}}))}var D=function(n){var r={};for(var t in n)r[t]=n[t];return r},R=function(n,r,t){return(0,a.MV)("sortAmountWDate",[n,r,t],(function(){return n&&n.sort((function(n,e){var u=r(n),o=r(e),a=t(n),i=t(e);if(u==o){if(a<i)return-1;if(a>i)return 1}return u<o?-1:u>o?1:0}))}))},x=function(n){return n.date?1*n.date:999999999999},P=function(n){return n.amount?1*n.amount:999999999999},A=function(n){return 1*n.amount<0?-1*n.amount:1*n.amount},z=function(){var n=(0,a.bh)("ourBank_filtered"),r=(0,a.jQ)((0,a.bh)("submayor_list")),t=R(r,P,x),e=R(n.verified,A,x),u=0;for(var o in e){var i=e[o],c=1*o+1*u,s=t[c];if(s){var d=1*i.amount<0?-1*i.amount:1*i.amount,l=null!==s&&void 0!==s&&s.amount?1*s.amount:0;if(d!==l){(0,a.wL)(d,l),(0,a.wL)(s);var v=t[c+1];d===(null!==v&&void 0!==v&&v.amount?1*v.amount:0)&&(u+=1)}}}},S=function(n,r){var t=(0,a.bh)("ourBank_filtered"),e=t.sub_mayor,u=D(e),o=D(t.pending),i={},c={},s={},d={},l=e,v=o,f=function(n){if(i[n.comprobantId]||(i[n.comprobantId]=n),c[n.comprobantId])return delete c[n.comprobantId],1},p=function(n){if(!c[n.comprobantId])return c[n.comprobantId]=n,1},b=function(n,r){for(var t in u){var e,o,a=u[t],i=1*n.amount,c=a.amount*(i<0?-1:1);if(s[""+r])break;var l=null===(e=a.document)||void 0===e?void 0:e.trim(),v=null===(o=n.checkOrSlip)||void 0===o?void 0:o.trim();if(v&&l===v&&c===i){s[""+r]=""+t,d[""+t]=""+r,f(a),delete u[t];break}if(c===i){s[""+r]=""+t,d[""+t]=""+r,f(a),delete u[t];break}p(a)}};for(var m in v){var h=v[m];h.checkOrSlip&&b(h,m)}for(var _ in v){b(v[_],_)}var y=[];for(var I in v){var k=v[I];s[I]?(k.comprobanteId=l[s[I]].comprobanteId,k.document=l[s[I]].document,k.operationId=l[s[I]].operationId,y.push(k)):(k.comprobanteId="",k.document="",k.operationId="",y.push(k))}return{ready:y,cmpbNotInBank:c}},j=function(n,r){return n&&n.sort((function(n,t){var e=(0,a.Vd)(n[r]),u=(0,a.Vd)(t[r]);return e<u?-1:e>u?1:0}))},M=function(n){var r,t,e,o,a,i,c=(0,u.Z)({},n);(c.hasOwnProperty("Date")&&(c.date=new Date(c.Date).getTime()+65e3,c.dateDDMMYYYY=c.Date,delete c.Date),c.hasOwnProperty("Posting Date")&&(c.date=c["Posting Date"],delete c["Posting Date"]),c.hasOwnProperty("Check Number")||c.hasOwnProperty('"Check Number"'))&&(c.checkOrSlip=null===(r=c["Check Number"])||void 0===r?void 0:r.trim(),delete c["Check Number"]);c.hasOwnProperty('"Check Number"')&&(c.checkOrSlip=null===(t=c['"Check Number"'])||void 0===t?void 0:t.trim(),delete c['"Check Number"']);c.hasOwnProperty("Check or Slip #")&&(c.checkOrSlip=null===(e=c["Check or Slip #"])||void 0===e?void 0:e.trim(),delete c["Check or Slip #"]);(c.hasOwnProperty("Amount")&&(c.amount=1*c.Amount,delete c.Amount),c.hasOwnProperty("Documento")&&(c.document=c.Documento.trim(),delete c.Documento),c.hasOwnProperty("Description"))&&(c.description=null===(o=c.Description)||void 0===o||null===(a=o.split('"'))||void 0===a||null===(i=a.join(""))||void 0===i?void 0:i.trim(),delete c.Description);return c},C=function(n,r,t){return(0,a.MV)("getPrevBalance",[n,r,t],(function(){var t,e=r.account;r.subAccount&&(e=r.account+"_"+r.subAccount);var u=null===(t=(0,a.bh)("accounts_summary_by_months"))||void 0===t?void 0:t[e],o=n-1,i=0;if((0,a.UE)(null===u||void 0===u?void 0:u[o])){var c=0;Array.from(Array(n).keys()).map((function(n){var r=(0,a.Zv)(u[n],2);c=1*c+1*r})),i=c}return i}))},Q=function(n,r){var t=[],e={},u=[],o=(0,a.bh)("date_range_submayor");for(var i in r){var c=r[i];c.date>=(null===o||void 0===o?void 0:o.initDate)&&c.date<=(null===o||void 0===o?void 0:o.lastDate)&&u.push(c)}for(var s in n){var d=M(n[s]);if(d.date){var l=!1;for(var v in u){var f=u[v];e[f.bankRecordId]||f.description!==d.description||f.amount!==d.amount||f.checkOrSlip!==d.checkOrSlip||(l=!0,e[f.bankRecordId]=1)}l||(d.bankRecordId=(0,a.M5)(),t.push(d))}}return t},U=function(n,r){(0,a.DF)(n,N,r)},N=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(r,t,u,o){var i,c;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,a.I7)(r),n.next=3,i;case 3:if(!(c=n.sent)){n.next=7;break}return o&&u.length-1===t&&o(),n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(r,t,e,u){return n.apply(this,arguments)}}()},1413:function(n,r,t){t.d(r,{Z:function(){return o}});var e=t(4942);function u(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function o(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,e.Z)(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}}}]);
//# sourceMappingURL=4050.dc718cc6.chunk.js.map