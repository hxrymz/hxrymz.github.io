import{B as D,k as o,Q as g}from"./index.2dd67c8e.js";const S=c=>D("submayorListFilter",[o("submayor_list")],()=>{var l;let u=[],i=0;const p=t=>{var s;let e=(s=o("submayor_list"))==null?void 0:s[t];return u.push(e),e},y=(t,e)=>{let s=t==null?void 0:t.date,r=e==null?void 0:e.date;return s<r?-1:s>r?1:0};(l=g(o("submayor_list")))==null||l.map(p);let _=u.sort(y);const A=t=>{var r,a,d,b,m,f;let e={...t},s=c;if((c===(t==null?void 0:t.creditSubAccount)||c===(t==null?void 0:t.debitSubAccount))&&(s=(a=(r=o("sub_cuentas_dict"))==null?void 0:r[c])==null?void 0:a.accountId),console.log("accnt",s),s===(t==null?void 0:t.creditAccount)){let n=(b=(d=o("cuentaslist"))==null?void 0:d[s])!=null&&b.isDebt?-1:1;e.credit=(t==null?void 0:t.amount)*n,i+=e.credit,e.saldo=i,console.log(e)}if(s===(t==null?void 0:t.debitAccount)){let n=(f=(m=o("cuentaslist"))==null?void 0:m[s])!=null&&f.isDebt?1:-1;e.debit=(t==null?void 0:t.amount)*n,i+=e.debit,e.saldo=i}return e};return _.map(A)});export{S as s};
