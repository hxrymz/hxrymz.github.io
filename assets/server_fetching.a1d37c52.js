import{b as u,p as r,u as o,q as d,s as i,O as l}from"./index.7f0cdf89.js";const y=async t=>{var e;let c={query:"getAllAccountsByUserId",params:{limit:250,businessId:(e=u("profileUser"))==null?void 0:e.businessId,":search":u("searchQry")},queryString:"!* contain :search"};const s=await r(c);s&&(o("account_list",s),o("account_ids",i(s,"accountId")),t&&t())},I=async t=>{var e;let c={query:"getAllSubAccounts",params:{limit:250,businessId:(e=u("profileUser"))==null?void 0:e.businessId},queryString:"!* contain :search"};const s=await r(c);s&&(o("sub_account_list",s),o("sub_account_group",d(s,"accountId")),o("sub_account_ids",i(s,"sub_accountId")),y(),t&&t())},m=async t=>{var e;let c={query:"getScanAccounts",params:{limit:250,businessId:(e=u("profileUser"))==null?void 0:e.businessId,":search":u("searchQry")},queryString:"!* contain :search"};const s=await r(c);s&&(o("account_list",s),t&&t())},q=async(t,c)=>{let a={query:"getScanOperationsHRG",params:{limit:250,businessId:u("profileUser").businessId,":account":t.account},queryString:"account = :account"};t!=null&&t.subAccount&&(a.params[":sub_account"]=t==null?void 0:t.subAccount,a.queryString+=" AND subAccount contain :sub_account");const e=await r(a);e&&!e.error&&(o("submayor_list",e),o("submayor_group",p(e))),c&&c()};function p(t,c){var a={operations:[]};let s=0,e=t&&l(t);return e.length>0?e.map(b=>{let n=t[b];n.type&&(c?s+=n.type==="debit"?n.amount*-1:n.amount*1:s+=n.type==="credit"?n.amount*-1:n.amount*1,a.operations.push(_(n)))}):a=null,a}function _(t){var a,s;let c={};return c.account=(a=u("account_ids"))==null?void 0:a[t.account],c.sub_account=(s=u("sub_account_ids"))==null?void 0:s[t.subAccount],c.comprobanteId=t.comprobanteId,c.date=t.date,t.type==="credit"?(c.debit=0,c.credit=t.amount):t.type==="debit"&&(c.credit=0,c.debit=t.amount),c}export{y as a,q as b,I as g,m as s};
