import{m as d,g as a,i as y,u as l,h as m}from"./index.9d80a6be.js";const f=async c=>{var s,e,u;let o={query:"getScanOperationsHRG",params:{limit:250,businessId:(s=a("profileUser"))==null?void 0:s.businessId,":collect":"collect",":account":(e=a("Acc2Collect"))==null?void 0:e.account,":sub_account":(u=a("Acc2Collect"))==null?void 0:u.subAccount},queryString:"account = :account AND subAccount contain :sub_account"};const t=await y(o);if(t&&!t.error){l("collect_list",t),l("collect_by_doc",b(t));let r=a("Acc2Collect").account+"_"+a("Acc2Collect").subAccount;p(t,r)}c&&c()},S=async c=>{var s,e,u,r;let o={query:"getScanOperationsHRG",params:{limit:250,businessId:(s=a("profileUser"))==null?void 0:s.businessId,":collect":"pay",":account":(e=a("Acc2Pay"))==null?void 0:e.account,":sub_account":(u=a("Acc2Pay"))==null?void 0:u.subAccount,":providerId":(r=a("Acc2Pay"))==null?void 0:r.providerId},queryString:"account = :account AND subAccount contain :sub_account"};const t=await y(o);if(console.log(o),console.log(t),t&&!t.error){l("toPay_list",t),l("toPay_by_doc",b(t,!0));let i=a("Acc2Pay").account+"_"+a("Acc2Pay").subAccount;p(t,i)}c&&c()};function b(c,o){var n={};let t=c&&m(c);return t.length>0?t.map(s=>{let e=c[s],u=e.document;n[u]||(n[u]={},["date","description","document","entryName"].forEach(i=>{n[u][i]=e[i]}),n[u].amount=0,n[u].operations=[]),e.type&&(o?n[u].amount+=e.type==="debit"?e.amount*-1:e.amount*1:n[u].amount+=e.type==="credit"?e.amount*-1:e.amount*1,n[u].operations.push(_(e)))}):n=null,n}function _(c){var n,t;let o={};return o.account=(n=a("account_ids"))==null?void 0:n[c.account],o.sub_account=(t=a("sub_account_ids"))==null?void 0:t[c.subAccount],o.comprobanteId=c.comprobanteId,o.date=c.date,c.type==="credit"?(o.debit=0,o.credit=c.amount):c.type==="debit"&&(o.credit=0,o.debit=c.amount),o}const I=(c,o,n)=>d("SumDocuments",[c,o,n],()=>{var s;let t=0;return c&&((s=m(c))==null||s.map((e,u)=>{var r;t+=((r=c[e])==null?void 0:r[o])*1})),t}),g=(c,o,n)=>{var s;let t=0;return c&&((s=m(c))==null||s.map((e,u)=>{var r,i;t+=((r=c[e])==null?void 0:r.amount)*(((i=c[e])==null?void 0:i.type)==="credit"?-1:1)})),t},p=async(c,o,n)=>{let t=a("rec_by_acc")||{};t[o]=g(c)||"no",l("rec_by_acc",t),n&&n()},q=async(c,o,n)=>{var u;let t={query:"getScanOperationsHRG",params:{limit:250,businessId:(u=a("profileUser"))==null?void 0:u.businessId,":account":c==null?void 0:c.account,":sub_account":c==null?void 0:c.subAccount},queryString:"account = :account AND subAccount contain :sub_account"};const e=await y(t);e&&!e.error&&p(e,o),n&&n()};export{I as S,S as a,q as b,f as g};