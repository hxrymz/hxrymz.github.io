import{b as u,p as d,u as l,O as p}from"./index.3f35067f.js";const g=async t=>{var s,c,r;let e={query:"getScanOperationsHRG",params:{limit:250,businessId:(s=u("profileUser"))==null?void 0:s.businessId,":collect":"collect",":account":(c=u("Acc2Collect"))==null?void 0:c.account,":sub_account":(r=u("Acc2Collect"))==null?void 0:r.subAccount},queryString:"payOrCollect = :collect  AND account = :account AND subAccount contain :sub_account"};const a=await d(e);a&&!a.error&&(l("collect_list",a),l("collect_by_doc",b(a))),t&&t()},f=async t=>{var s,c,r;let e={query:"getScanOperationsHRG",params:{limit:250,businessId:(s=u("profileUser"))==null?void 0:s.businessId,":collect":"pay",":account":(c=u("Acc2Pay"))==null?void 0:c.account,":sub_account":(r=u("Acc2Pay"))==null?void 0:r.subAccount},queryString:"payOrCollect = :collect  AND account = :account AND subAccount contain :sub_account"};const a=await d(e);a&&!a.error&&(l("toPay_list",a),l("toPay_by_doc",b(a,!0))),t&&t()};function b(t,e){var o={};let a=t&&p(t);return a.length>0?a.map(s=>{let c=t[s],n=new Date(c.date).getTime()+"_"+c.comprobanteId;o[n]||(o[n]={},["date","description","document","entryName"].forEach(i=>{o[n][i]=c[i]}),o[n].amount=0,o[n].operations=[]),c.type&&(e?o[n].amount+=c.type==="debit"?c.amount*-1:c.amount*1:o[n].amount+=c.type==="credit"?c.amount*-1:c.amount*1,o[n].operations.push(y(c)))}):o=null,o}function y(t){var o,a;let e={};return e.account=(o=u("account_ids"))==null?void 0:o[t.account],e.sub_account=(a=u("sub_account_ids"))==null?void 0:a[t.subAccount],e.comprobanteId=t.comprobanteId,e.date=t.date,t.type==="credit"?(e.debit=0,e.credit=t.amount):t.type==="debit"&&(e.credit=0,e.debit=t.amount),e}export{f as a,g};
