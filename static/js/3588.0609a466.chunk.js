"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3588],{3588:(e,o,t)=>{t.d(o,{Eb:()=>m,Gg:()=>_,N$:()=>r,Ng:()=>v,WB:()=>p,g5:()=>l,ly:()=>d});var a=t(15),i=t(2350),n=t(4050);const d=async e=>{var o,t;let a={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.all_opera};a.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,i.bh)("date_current_year")};const n=(0,i.I7)(a),d=await n;d&&!d.error&&(u(d),(0,i.bh)("showAllCmpbnt")&&((0,i.Rz)("comprobante_list",d),(0,i.Rz)("comprobante_by_doc",b((0,i.jQ)(d)))),e&&e())},r=async e=>{if((0,i.bh)("search_acc_record").length>3){var o,t,a,n;let d={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.filter_search_opera};d.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,i.bh)("date_current_year"),":date1":null===(a=(0,i.bh)("date_range_comps"))||void 0===a?void 0:a.initDate,":date2":null===(n=(0,i.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate},(0,i.bh)("search_acc_record").split(" ").map(((e,o)=>{e&&(d.params[":search"+o]=e.trim())}));const r=(0,i.I7)(d),l=await r;if(l&&!l.error){(0,i.Rz)("comprobante_list",l);let o=b((0,i.jQ)(l));(0,i.Rz)("comprobante_by_doc",o),e&&e()}}else(0,i.Rz)("comprobante_list",null),(0,i.Rz)("comprobante_by_doc",null),e&&e()},l=async e=>{const o=(0,i.bh)("accounts_summary_by_docs");if(o){var t,a;let n=s(o),d={description:"Apertura year 2024 - 1000-AP24",document:"AP-24"},r=new Date("01/01/2024").getTime()+800,l="20241-A00001";d.date=r,d.comprobanteId=l,d.operations=n.resp;let u={operationId:(0,i.M5)()},v=c();v<0?(u.debit=0,u.credit=-1*v,u.document="Perdidas del ".concat((0,i.bh)("date_current_year"))):(u.credit=0,u.debit=1*v,u.document="Ganancias del ".concat((0,i.bh)("date_current_year")));let p=null===(t=(0,i.bh)("global_account_params"))||void 0===t?void 0:t.yearProfitOrLoss.account;u.account=null===(a=(0,i.bh)("account_ids"))||void 0===a?void 0:a[p],d.operations.push(u),d.balance=function(e){let o=0,t=0,a=0,n={};return e&&e.map((e=>{let o=e.account.accountId+"_"+e.account.code+"_"+e.account.type;n[o]||(n[o]=0);let d=1*(null===e||void 0===e?void 0:e.debit)-1*(null===e||void 0===e?void 0:e.credit);t+=1*(null===e||void 0===e?void 0:e.debit),a+=1*(null===e||void 0===e?void 0:e.credit);let r=1*(0,i.Zv)(d,2);n[o]=1*(0,i.Zv)(n[o],2)+1*(0,i.Zv)(r,2)})),o=t-a,o}(d.operations),console.log(d.operations.length),e&&e(d)}else e&&e({})};const c=()=>{let e=(0,i.bh)("result_params_value"),o={},t=0,a={};return(0,i.bh)("result_sheet_upd_flds").map((d=>{if(!o[d]){var r;o[d]=1;let l=e[d],c=null===(r=(0,i.bh)("account_ids"))||void 0===r?void 0:r[l];if("nominal"===(null===c||void 0===c?void 0:c.clasification)&&!a[c.code]){let e=1*(0,n.S)(12,{account:l});e="credit"===(null===c||void 0===c?void 0:c.type)?-1*e:e,t+=e,a[c.code]=e}}})),1*(0,i.Zv)(t,2)};function s(e){var o={};let t=[],a=0;(0,i._2)(e).map((n=>{var d;let r=n,l=null;n.indexOf("_")>=0&&(r=n.split("_")[0],l=n.split("_")[1]);let c=null===(d=(0,i.bh)("account_ids"))||void 0===d?void 0:d[r];(null===e||void 0===e?void 0:e[n])&&(0,i._2)(null===e||void 0===e?void 0:e[n]).map((d=>{if("saldo"!==d){var r;let u=1*(0,i.Zv)(null===e||void 0===e||null===(r=e[n])||void 0===r?void 0:r[d],2),v={debit:0,credit:0};if(v.document=d,"debit"===c.type?(v.debit=u,u<0&&(v.credit=-1*u,v.debit=0)):"credit"===c.type&&(v.credit=u,u<0&&(v.debit=-1*u,v.credit=0)),o[d]){let e=1*(0,i.Zv)(o[d],2)+1*(0,i.Zv)(u,2);o[d]=1*(0,i.Zv)(e,2)}else o[d]=1*(0,i.Zv)(u,2);var s;if(a=1*(0,i.Zv)(a,2)+1*(0,i.Zv)(u,2),v.account=c,l)v.sub_account=null===(s=(0,i.bh)("sub_account_ids"))||void 0===s?void 0:s[l];t.push(v)}}))}));let n=[];return t.map((e=>{o[e.document]&&e.debit+e.credit!==0&&n.push(e)})),t={...[]},o={},{resp:n,balance:a}}const u=async e=>{let o={},t={},a={};for(let r in e){var n;let d=e[r],l=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[d.account];if(l){(0,i.UE)(a[null===l||void 0===l?void 0:l.accountId])||(a[null===l||void 0===l?void 0:l.accountId]={saldo:0,name:(null===l||void 0===l?void 0:l.code)+" - "+(null===l||void 0===l?void 0:l.name),list:[]}),(0,i.UE)(o[d.comprobanteId])||(o[d.comprobanteId]=0,t[d.comprobanteId]=[]);let e=1*(0,i.Zv)(("debit"===d.type?1:-1)*d.amount,2);a[null===l||void 0===l?void 0:l.accountId].saldo=1*(0,i.Zv)(a[l.accountId].saldo,2)+1*e,a[null===l||void 0===l?void 0:l.accountId].list.push([d.comprobanteId,e]),o[d.comprobanteId]=1*(0,i.Zv)(o[d.comprobanteId],2)+e,t[d.comprobanteId].push({ammount:e,operationId:d.comprobanteId})}}let d=null;for(let i in o)o[i]&&(d||(d={}),d[i]=1);d&&((0,i.Rz)("comprobante_w_erros",d),(0,i.Rz)("has_filter_comp_error",!0))},v=async e=>{var o,t,a,n;let d={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.filter_search_opera};d.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,i.bh)("date_current_year"),":date1":(null===(a=(0,i.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)-10,":date2":null===(n=(0,i.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate};const r=(0,i.I7)(d),l=await r;if(l&&!l.error){(0,i.Rz)("comprobante_list",l);var c=[];(0,i.bh)("comprobante_all_list")&&(0,i.bh)("comprobante_all_list").map((e=>{l[e.operationId]})),l&&(0,i._2)(l).map((e=>{var o,t;l[e].account&&l[e].date>(null===(o=(0,i.bh)("date_range_comps"))||void 0===o?void 0:o.initDate)-10&&l[e].date<=(null===(t=(0,i.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate)&&c.push(l[e])})),(0,i.Rz)("comprobante_by_doc",b(c)),u(c),e&&e()}},p=async(e,o)=>{var t;if(null!==(t=(0,i.Ch)()[(0,i.bh)("date_current_year")])&&void 0!==t&&t.isClosed)(0,a.OpenToast)({text:"No puede eliminar este registro, El a\xf1o contable al que pertenece esta cerrado",timeout:3500});else{let t=[];e.map((e=>{var o,a;let n={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.delete_opera};n.params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year"),operationId:e.operationId},t.push(n)}));const a=t.map((async e=>{const o=(0,i.I7)(e);await o}));await Promise.all(a),o&&o()}};function b(e){var o={};return e.length>0?e.map((e=>{let t=e.date;if(t&&e.account){let a=t+"_"+e.comprobanteId;if(!o[a]){o[a]={},["date","description","entryName","comprobanteId","employeeId"].forEach((t=>{o[a][t]=e[t]})),o[a].amount=0,o[a].balance=0,o[a].operations=[]}if(e.type){let t=function(e){var o,t;let a={};a.account=null===(o=(0,i.bh)("account_ids"))||void 0===o?void 0:o[e.account],a.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],a.comprobanteId=e.comprobanteId,a.operationId=e.operationId,a.document=e.document,a.type=e.type;let n=1*(0,i.Zv)(e.amount,2);"credit"===e.type?(a.debit=0,a.credit=n):"debit"===e.type&&(a.credit=0,a.debit=n);return a}(e);t.debit=1*t.debit,t.credit=1*t.credit,o[a].balance+=t.debit-t.credit,1*t.debit!==1*t.credit&&o[a].operations.push(t)}}})):o=null,o}function _(e){(0,i.Rz)("has_filter_review",null),(0,i.Rz)("has_filter_comp_error",null),(0,i._2)(e).map((o=>{var t,a,n,d;null!==(t=(0,i.bh)("comp_under_review"))&&void 0!==t&&null!==(a=t.inReview)&&void 0!==a&&a[e[o].comprobanteId]&&(0,i.Rz)("has_filter_review",!0),null!==(n=(0,i.bh)("comp_under_review"))&&void 0!==n&&null!==(d=n.hasError)&&void 0!==d&&d[e[o].comprobanteId]&&(0,i.Rz)("has_filter_comp_error",!0)}))}const m=e=>(0,i.MV)("sortComprobantesByType",[e],(()=>{let o="type";return e&&e.sort(((e,t)=>{let a=e[o],i=t[o];return a===i?t[i]-e[a]:i>a?1:-1}))}))}}]);
//# sourceMappingURL=3588.0609a466.chunk.js.map