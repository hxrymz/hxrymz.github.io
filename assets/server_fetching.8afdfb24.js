import{g as c,i as p,u as i,n as u,m}from"./index.822d4baa.js";const b=async t=>{var o;let e={query:"getAllOperationsHRG",params:{limit:250,businessId:(o=c("profileUser"))==null?void 0:o.businessId},queryString:"!* contain :search"};const r=await p(e);r&&!r.error&&(i("comprobante_list",r),i("comprobante_by_doc",d(r)),t&&t())},g=async t=>{var o;let e={query:"getScanOperationsHRG",params:{limit:250,businessId:(o=c("profileUser"))==null?void 0:o.businessId,":search":c("search_acc_record")},queryString:"!* contain :search"};const r=await p(e);r&&!r.error&&(i("comprobante_list",r),i("comprobante_by_doc",d(u(r))),t&&t())},I=async(t,e)=>{let a=[];t.map(o=>{var n;let s={query:"deleteOperationsHRG",params:{businessId:(n=c("profileUser"))==null?void 0:n.businessId,operationId:o.operationId}};a.push(s)});const r=a.map(async o=>{await p(o)});await Promise.all(r),e&&e()};function d(t){var e={};return t.length>0?t.map(a=>{let o=new Date(a.date).getTime()+"_"+a.comprobanteId;e[o]||(e[o]={},["date","description","document","entryName","comprobanteId"].forEach(n=>{e[o][n]=a[n]}),e[o].amount=0,e[o].operations=[]),a.type&&(e[o].amount+=a.type==="credit"?a.amount*1:0,e[o].operations.push(l(a)))}):e=null,e}function l(t){var a,r;let e={};return e.account=(a=c("account_ids"))==null?void 0:a[t.account],e.sub_account=(r=c("sub_account_ids"))==null?void 0:r[t.subAccount],e.comprobanteId=t.comprobanteId,e.operationId=t.operationId,e.type=t.type,t.type==="credit"?(e.debit=0,e.credit=t.amount):t.type==="debit"&&(e.credit=0,e.debit=t.amount),e}const _=t=>m("sortComprobantesByType",[t],()=>{let e="type";return t&&t.sort((r,o)=>{let s=r[e],n=o[e];return s===n?o[n]-r[s]:n>s?1:-1})});export{_ as a,I as d,b as g,g as s};
