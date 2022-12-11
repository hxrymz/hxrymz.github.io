import{b as u,p as i,u as a,q as b,s as y,t as l,v as p,O as A}from"./index.8616bca9.js";const _=async t=>{var c;let e={query:"getAllAccountsByUserId",params:{limit:250,businessId:(c=u("profileUser"))==null?void 0:c.businessId,":search":u("searchQry")},queryString:"!* contain :search"};const s=await i(e);s&&(a("account_list",d(s,"code")),a("account_ids",b(s,"accountId")),t&&t())},q=async t=>{var c;let e={query:"getAllSubAccounts",params:{limit:250,businessId:(c=u("profileUser"))==null?void 0:c.businessId},queryString:"!* contain :search"};const s=await i(e);s&&(a("sub_account_list",f(s,"subAccount")),a("sub_account_group",y(s,"accountId")),a("sub_account_ids",b(s,"sub_accountId")),_(),t&&t())},S=async t=>{var c;let e={query:"getScanAccounts",params:{limit:250,businessId:(c=u("profileUser"))==null?void 0:c.businessId,":search":u("searchQry")},queryString:"!* contain :search"};const s=await i(e);s&&(a("account_list",d(p(s),"code")),t&&t())},h=async(t,e)=>{let r={query:"getScanOperationsHRG",params:{limit:250,businessId:u("profileUser").businessId,":account":t.account},queryString:"account = :account"};t!=null&&t.subAccount&&(r.params[":sub_account"]=t==null?void 0:t.subAccount,r.queryString+=" AND subAccount contain :sub_account");const c=await i(r);c&&!c.error&&(a("submayor_list",c),a("submayor_group",g(c))),e&&e()};function g(t,e){var r={operations:[]};let s=0,c=t&&A(t);return c.length>0?c.map(o=>{let n=t[o];n.type&&(e?s+=n.type==="debit"?n.amount*-1:n.amount*1:s+=n.type==="credit"?n.amount*-1:n.amount*1,r.operations.push(m(n)))}):r=null,r}function m(t){var r,s;let e={};return e.account=(r=u("account_ids"))==null?void 0:r[t.account],e.sub_account=(s=u("sub_account_ids"))==null?void 0:s[t.subAccount],e.comprobanteId=t.comprobanteId,e.date=t.date,t.type==="credit"?(e.debit=0,e.credit=t.amount):t.type==="debit"&&(e.credit=0,e.debit=t.amount),e}const d=(t,e)=>l("sortAccounts",[t],()=>t.sort((s,c)=>{let o=s[e]*1,n=c[e]*1;return o<n?-1:o>n?1:0})),f=(t,e)=>l("sortSubAccounts",[t],()=>t.sort((s,c)=>{let o=s[e]*1,n=c[e]*1;return o<n?-1:o>n?1:0})),O=t=>l("sortComprobantesByDate",[t],()=>{let e="date";return t.sort((s,c)=>{let o=new Date(s[e]).getTime(),n=new Date(c[e]).getTime();return o<n?-1:o>n?1:0})});export{_ as a,f as b,h as c,O as d,q as g,S as s};
