import{b as n,p as d,u as c}from"./index.8616bca9.js";const l=async t=>{var o;let e={query:"getAllOperationsHRG",params:{limit:250,businessId:(o=n("profileUser"))==null?void 0:o.businessId},queryString:"!* contain :search"};const r=await d(e);r&&!r.error&&(c("comprobante_list",r),c("comprobante_by_doc",p(r)),t&&t())},b=async t=>{var o;let e={query:"getScanOperationsHRG",params:{limit:250,businessId:(o=n("profileUser"))==null?void 0:o.businessId,":search":n("search_acc_record")},queryString:"!* contain :search"};const r=await d(e);r&&!r.error&&(c("comprobante_list",r),c("comprobante_by_doc",p(r)),t&&t())},y=async(t,e)=>{let a=[];t.map(o=>{var s;let i={query:"deleteOperationsHRG",params:{businessId:(s=n("profileUser"))==null?void 0:s.businessId,operationId:o.operationId}};a.push(i)});const r=a.map(async o=>{await d(o)});await Promise.all(r),e&&e()};function p(t){var e={};return t.length>0?t.map(a=>{let o=new Date(a.date).getTime()+"_"+a.comprobanteId;e[o]||(e[o]={},["date","description","document","entryName","comprobanteId"].forEach(s=>{e[o][s]=a[s]}),e[o].amount=0,e[o].operations=[]),a.type?(e[o].amount+=a.type==="credit"?a.amount*1:0,e[o].operations.push(u(a))):e[o].amount+=a.creditAccount?a.amount*1:0}):e=null,e}function u(t){var a,r;let e={};return e.account=(a=n("account_ids"))==null?void 0:a[t.account],e.sub_account=(r=n("sub_account_ids"))==null?void 0:r[t.subAccount],e.comprobanteId=t.comprobanteId,e.operationId=t.operationId,t.type==="credit"?(e.debit=0,e.credit=t.amount):t.type==="debit"&&(e.credit=0,e.debit=t.amount),e}export{y as d,l as g,b as s};