"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4050],{4050:function(n,t,r){r.d(t,{EK:function(){return S},Ht:function(){return w},Jy:function(){return b},K_:function(){return s},Pe:function(){return v},S:function(){return Q},T7:function(){return I},TP:function(){return Z},Y1:function(){return y},ZX:function(){return l},_0:function(){return d},bs:function(){return O},eK:function(){return c},fp:function(){return N},h1:function(){return k},i_:function(){return g},k4:function(){return U},rs:function(){return m},y1:function(){return z}});var e=r(4165),u=r(1413),o=r(5861),a=r(2350),i=r(15),c=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t){var r,o,c,d,l;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,u.Z)({},null===(r=(0,a.bh)((0,a.hQ)()))||void 0===r?void 0:r.calc_sub_myr)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,a.bh)("date_current_year")},d=(0,a.I7)(c),n.next=5,d;case 5:(l=n.sent)&&((0,a.Rz)("accounts_summary_by_months",l.summary),(0,i.OpenToast)({text:"Accounts Summary Updated",timeout:3500}),s(t));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t){var r,o,i,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(r=(0,a.bh)((0,a.hQ)()))||void 0===r?void 0:r.get_sub_bal_myr)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,a.bh)("date_current_year")},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("accounts_summary_by_months",s.summary),t&&t(s));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t){var r,o,i,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(r=(0,a.bh)((0,a.hQ)()))||void 0===r?void 0:r.all_accounts)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("account_list",_(s,"code")),(0,a.Rz)("account_ids",(0,a.ME)(s,"accountId")),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t){var r,o,i,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(r=(0,a.bh)((0,a.hQ)()))||void 0===r?void 0:r.all_sub_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("sub_account_list",y(s,"subAccount")),(0,a.Rz)("sub_account_group",p(s,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(s,"sub_accountId")),d(),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t){var r,o,i,c,s,d,l,v;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(r=(0,a.bh)((0,a.hQ)()))||void 0===r?void 0:r.all_bank_bUp)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&(d={},l=[],0,(s&&s.sort((function(n,t){var r=n.status,e=t.status;return r<e?1:r>e?-1:0}))).map((function(n){var t=n.date+"_"+n.amount+"_"+n.checkOrSlip;d[t]||(l.push(n),d[t]=1)})),(0,a.Rz)("ourBank",y(l,"date")),(0,a.Rz)("ourBank_ids",(0,a.ME)(l,"bankRecordId")),v=f(l,(0,a.bh)("submayor_list")),(0,a.Rz)("ourBank_filtered",v),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(n,t){var r=[],e=(0,u.Z)({},t),o=[],i=(0,a.bh)("date_range_submayor"),c=(0,u.Z)({},(0,a.bh)("submayor_list")),s={},d={};for(var l in n){var v=n[l];v.date>=(null===i||void 0===i?void 0:i.initDate)&&v.date<=(null===i||void 0===i?void 0:i.lastDate)&&(v.linkId&&9===v.status?(o.push(v),s[v.linkId]?d[v.bankRecordId]=v:(s[v.linkId]=1,c[v.linkId]&&delete c[v.linkId]),delete e[v.linkId]):r.push(v))}var f=[],p=[];for(var b in c){0!==1*c[b].amount?f.push(c[b]):p.push(c[b])}return{pending:y(r,"date"),verified:y(o,"date"),sub_mayor:M((0,a.jQ)(e),"date"),verified_duplicatedLink:d,bankSubLeft:f,bankSubLeft_wZr:p}};function p(n,t){t=t||"id";var r={};return n.length>0?n.map((function(n){n.subAccount&&(r[n[t]]||(r[n[t]]=[]),r[n[t]].push(n))})):r=null,r}var b=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t){var r,o,i,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,u.Z)({},null===(r=(0,a.bh)((0,a.hQ)()))||void 0===r?void 0:r.search_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchQry")},c=(0,a.I7)(i),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("account_list",_((0,a.jQ)(s),"code")),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t,r){var o,i,c,s,d,l,v;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(d=(0,u.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.filter_search_opera)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,year:(0,a.bh)("date_current_year"),":account":null===t||void 0===t?void 0:t.account,":subAccount":null===t||void 0===t?void 0:t.subAccount,":date1":null===(c=(0,a.bh)("date_range_submayor"))||void 0===c?void 0:c.initDate,":date2":null===(s=(0,a.bh)("date_range_submayor"))||void 0===s?void 0:s.lastDate},l=(0,a.I7)(d),n.next=5,l;case 5:(v=n.sent)&&!v.error&&((0,a.Rz)("submayor_list",v),(0,a.Rz)("submayor_group",h(v))),r&&r();case 8:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}();function h(n,t){var r={operations:[]},e=n&&(0,a._2)(n);return e.length>0?e.map((function(t){var e=n[t];e.type&&r.operations.push(function(n){var t,r,e={};e.account=null===(t=(0,a.bh)("account_ids"))||void 0===t?void 0:t[n.account],e.sub_account=null===(r=(0,a.bh)("sub_account_ids"))||void 0===r?void 0:r[n.subAccount],e.comprobanteId=n.comprobanteId,e.operationId=n.operationId,e.document=n.document,e.description=n.description,e.date=n.date,"credit"===n.type?(e.debit=0,e.credit=n.amount):"debit"===n.type&&(e.credit=0,e.debit=n.amount);return e}(e))})):r=null,r}var _=function(n,t){return(0,a.MV)("sortAccounts",[n,t],(function(){return n&&n.sort((function(n,r){var e=1*n[t],u=1*r[t];return e<u?-1:e>u?1:0}))}))},y=function(n,t){return(0,a.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,r){var e=1*n[t],u=1*r[t];return e<u?-1:e>u?1:0}))}))},k=function(n){return(0,a.MV)("sortComprobantesByDate",[n],(function(){var t="date";return n.sort((function(n,r){var e=n[t],u=r[t];return e<u?-1:e>u?1:0}))}))},I=function(n,t,r,e){return(0,a.MV)("calcSubmayor",[n,t,r,e],(function(){var e,o,i="date",c=new Date(null===(e=(0,a.bh)("date_range_submayor"))||void 0===e?void 0:e.initDate).getMonth(),s=Q(c,{account:t,subAccount:r},"calcSubmayor"),d=null===(o=(0,a.bh)("account_ids"))||void 0===o?void 0:o[t],l=s||0;"credit"===(null===d||void 0===d?void 0:d.type)&&(l*=-1);var v=n&&n.sort((function(n,t){var r=n[i],e=t[i];return r<e?-1:r>e?1:0}));return v.map((function(n){return function(n){var t,r=(0,u.Z)({},n);return"credit"===(null===n||void 0===n||null===(t=n.account)||void 0===t?void 0:t.type)?r.saldo=1*l+(1*r.credit-1*r.debit):r.saldo=1*l+(1*r.debit-1*r.credit),l=r.saldo,r}(n)}))}))};var Z=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t){var r,o,i,c;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,u.Z)({},null===(r=(0,a.bh)((0,a.hQ)()))||void 0===r?void 0:r.get_balance_general_param),i=(0,a.I7)(o),n.next=4,i;case 4:(c=n.sent)&&!c.error&&((0,a.Rz)("balance_general_param",null===c||void 0===c?void 0:c.general),(0,a.Rz)("result_sheet_params",null===c||void 0===c?void 0:c.result),(0,a.Rz)("balance_general_upd_flds",null===c||void 0===c?void 0:c.general_flds),(0,a.Rz)("result_sheet_upd_flds",null===c||void 0===c?void 0:c.result_flds)),t&&t();case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),w=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t,r,o){var i,c,s,d,l,v,f;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,u.Z)({},null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.find_balances)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId,":type":t},d=(0,a.I7)(s),n.next=5,d;case 5:(l=n.sent)&&!l.error&&(v=(0,a._2)(l)[0],f=l[v],(0,a.Rz)(r,f),(0,a.Rz)(r+"_bck",(0,u.Z)({},f))),o&&o();case 8:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),O=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(){var t,r,u;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={},r=[],u=function(n){var e,u=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],o=n.subAccount?n.accountId+"_"+n.sub_accountId:n.accountId;if(t[o])return{};var i,c=new Date(null===(i=(0,a.bh)("date_range_submayor"))||void 0===i?void 0:i.initDate).getMonth()+1,s=Q(c,{account:o}),d={cuenta:u.code+"",nombre:u.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:s||0,type:u.type};return t[o]=1,r.push(d),d},(0,a.bh)("sub_account_list").map(u),n.abrupt("return",j(r,"cuenta"));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function g(n,t,r){return n.map((function(n){return{date:(0,a.Gv)(n.date),document:n.document,comprobante:n.comprobanteId,description:n.description,debito:n.debit,credito:n.credit,saldo:n.saldo}}))}var D=function(n){var t={};for(var r in n)t[r]=n[r];return t},R=function(n,t,r){return(0,a.MV)("sortAmountWDate",[n,t,r],(function(){return n&&n.sort((function(n,e){var u=t(n),o=t(e),a=r(n),i=r(e);if(u==o){if(a<i)return-1;if(a>i)return 1}return u<o?-1:u>o?1:0}))}))},x=function(n){return n.date?1*n.date:999999999999},P=function(n){return n.amount?1*n.amount:999999999999},A=function(n){return 1*n.amount<0?-1*n.amount:1*n.amount},S=function(){var n=(0,a.bh)("ourBank_filtered"),t=(0,a.jQ)((0,a.bh)("submayor_list")),r=R(t,P,x),e=R(n.verified,A,x),u=0;for(var o in e){var i=e[o],c=1*o+1*u,s=r[c];if(s){var d=1*i.amount<0?-1*i.amount:1*i.amount,l=null!==s&&void 0!==s&&s.amount?1*s.amount:0;if(d!==l){(0,a.wL)(d,l),(0,a.wL)(s);var v=r[c+1];d===(null!==v&&void 0!==v&&v.amount?1*v.amount:0)&&(u+=1)}}}},z=function(n,t){var r=(0,a.bh)("ourBank_filtered"),e=r.sub_mayor,u=D(e),o=D(r.pending),i={},c={},s={},d={},l=e,v=o,f=function(n){if(i[n.comprobantId]||(i[n.comprobantId]=n),c[n.comprobantId])return delete c[n.comprobantId],1},p=function(n){if(!c[n.comprobantId])return c[n.comprobantId]=n,1},b=function(n,t){for(var r in u){var e,o,a=u[r],i=1*n.amount,c=a.amount*(i<0?-1:1);if(s[""+t])break;var l=null===(e=a.document)||void 0===e?void 0:e.trim(),v=null===(o=n.checkOrSlip)||void 0===o?void 0:o.trim();if(v&&l===v&&c===i){s[""+t]=""+r,d[""+r]=""+t,f(a),delete u[r];break}if(c===i){s[""+t]=""+r,d[""+r]=""+t,f(a),delete u[r];break}p(a)}};for(var m in v){var h=v[m];h.checkOrSlip&&b(h,m)}for(var _ in v){b(v[_],_)}var y=[];for(var k in v){var I=v[k];s[k]?(I.comprobanteId=l[s[k]].comprobanteId,I.document=l[s[k]].document,I.operationId=l[s[k]].operationId,y.push(I)):(I.comprobanteId="",I.document="",I.operationId="",y.push(I))}return{ready:y,cmpbNotInBank:c}},j=function(n,t){return n&&n.sort((function(n,r){var e=n[t],u=r[t];return e<u?-1:e>u?1:0}))},M=function(n,t){return n&&n.sort((function(n,r){var e=(0,a.Vd)(n[t]),u=(0,a.Vd)(r[t]);return e<u?-1:e>u?1:0}))},C=function(n){var t,r,e,o,a,i,c=(0,u.Z)({},n);(c.hasOwnProperty("Date")&&(c.date=new Date(c.Date).getTime()+65e3,c.dateDDMMYYYY=c.Date,delete c.Date),c.hasOwnProperty("Posting Date")&&(c.date=c["Posting Date"],delete c["Posting Date"]),c.hasOwnProperty("Check Number")||c.hasOwnProperty('"Check Number"'))&&(c.checkOrSlip=null===(t=c["Check Number"])||void 0===t?void 0:t.trim(),delete c["Check Number"]);c.hasOwnProperty('"Check Number"')&&(c.checkOrSlip=null===(r=c['"Check Number"'])||void 0===r?void 0:r.trim(),delete c['"Check Number"']);c.hasOwnProperty("Check or Slip #")&&(c.checkOrSlip=null===(e=c["Check or Slip #"])||void 0===e?void 0:e.trim(),delete c["Check or Slip #"]);(c.hasOwnProperty("Amount")&&(c.amount=1*c.Amount,delete c.Amount),c.hasOwnProperty("Documento")&&(c.document=c.Documento.trim(),delete c.Documento),c.hasOwnProperty("Description"))&&(c.description=null===(o=c.Description)||void 0===o||null===(a=o.split('"'))||void 0===a||null===(i=a.join(""))||void 0===i?void 0:i.trim(),delete c.Description);return c},Q=function(n,t,r){return(0,a.MV)("getPrevBalance",[n,t,r],(function(){var r,e=t.account;t.subAccount&&(e=t.account+"_"+t.subAccount);var u=null===(r=(0,a.bh)("accounts_summary_by_months"))||void 0===r?void 0:r[e],o=n-1,i=0;if((0,a.UE)(null===u||void 0===u?void 0:u[o])){var c=0;Array.from(Array(n).keys()).map((function(n){var t=(0,a.Zv)(u[n],2);c=1*c+1*t})),i=c}return i}))},U=function(n,t){var r=[],e={},u=[],o=(0,a.bh)("date_range_submayor");for(var i in t){var c=t[i];c.date>=(null===o||void 0===o?void 0:o.initDate)&&c.date<=(null===o||void 0===o?void 0:o.lastDate)&&u.push(c)}for(var s in n){var d=C(n[s]);if(d.date){var l=!1;for(var v in u){var f=u[v];e[f.bankRecordId]||f.description!==d.description||f.amount!==d.amount||f.checkOrSlip!==d.checkOrSlip||(l=!0,e[f.bankRecordId]=1)}l||(d.bankRecordId=(0,a.M5)(),r.push(d))}}return r},N=function(n,t){(0,a.DF)(n,B,t)},B=function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t,r,u,o){var i,c;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,a.I7)(t),n.next=3,i;case 3:if(!(c=n.sent)){n.next=7;break}return o&&u.length-1===r&&o(),n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(t,r,e,u){return n.apply(this,arguments)}}()},1413:function(n,t,r){r.d(t,{Z:function(){return o}});var e=r(4942);function u(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function o(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,e.Z)(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}}}]);
//# sourceMappingURL=4050.207be498.chunk.js.map