import{b as a,p as s,u as c}from"./index.3f35067f.js";const b=async e=>{var r;let t={query:"getAllOperationsHRG",params:{limit:250,businessId:(r=a("profileUser"))==null?void 0:r.businessId},queryString:"!* contain :search"};const n=await s(t);n&&!n.error&&(c("comprobante_list",n),c("comprobante_by_doc",u(n)),e&&e())},l=async e=>{var r;let t={query:"getScanOperationsHRG",params:{limit:250,businessId:(r=a("profileUser"))==null?void 0:r.businessId,":search":a("search_acc_record")},queryString:"!* contain :search"};const n=await s(t);n&&!n.error&&(c("comprobante_list",n),c("comprobante_by_doc",u(n)),e&&e())};function u(e){var t={};return e.length>0?e.map(o=>{let r=new Date(o.date).getTime()+"_"+o.comprobanteId;t[r]||(t[r]={},["date","description","document","entryName","comprobanteId"].forEach(i=>{t[r][i]=o[i]}),t[r].amount=0,t[r].operations=[]),o.type?(t[r].amount+=o.type==="credit"?o.amount*1:0,t[r].operations.push(d(o))):t[r].amount+=o.creditAccount?o.amount*1:0}):t=null,t}function d(e){var o,n;let t={};return t.account=(o=a("account_ids"))==null?void 0:o[e.account],t.sub_account=(n=a("sub_account_ids"))==null?void 0:n[e.subAccount],t.comprobanteId=e.comprobanteId,e.type==="credit"?(t.debit=0,t.credit=e.amount):e.type==="debit"&&(t.credit=0,t.debit=e.amount),t}export{b as g,l as s};
