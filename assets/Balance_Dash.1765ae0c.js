import{l as k,_ as x,m as C,k as r,I as N,n as O,r as h,v as T,a as I,j as _,o as y,q as p,t as A,O as P,g as v,w as b}from"./index.c1b80de8.js";function j(){return k(()=>x(()=>import("./balance_sheet.1b90bca1.js").then(function(n){return n.b}),["assets/balance_sheet.1b90bca1.js","assets/index.c1b80de8.js","assets/index.ed13fd6f.css"]))}function m(){return k(()=>x(()=>import("./profit_loss.4778a9bb.js"),["assets/profit_loss.4778a9bb.js","assets/index.c1b80de8.js","assets/index.ed13fd6f.css"]))}const J=()=>C("accountList2pl",[r("sub_cuentas_list")],()=>{const n=e=>{var o;let s=(o=r("cuentaslist"))==null?void 0:o[e==null?void 0:e.accountId];if(console.log(s),s!=null&&s.isNominal){let g=e!=null&&e.subAccountName?e==null?void 0:e.sub_accountId:e==null?void 0:e.accountId,i=`${s==null?void 0:s.name}${e!=null&&e.subAccountName?" - "+(e==null?void 0:e.subAccountName):""}`;return{id:g,lbl:i}}return null},a=e=>e;return r("sub_cuentas_list").map(n).filter(a)}),Q=(n,a)=>C("sumArrayKeys_"+n,[a,r("profit_lose_result")],()=>{var o;let e=0;const s=g=>{var i,S;(i=r("profit_lose_result"))!=null&&i[g]&&(e+=(S=r("profit_lose_result"))==null?void 0:S[g])};return a.map(s),(o=e==null?void 0:e.toFixed)==null?void 0:o.call(e,2)});function K(n,a,e){let s=null;return n&&n.map(o=>{(a==null?void 0:a[o])!==(e==null?void 0:e[o])&&(s||(s={}),s[o]=a[o])}),s}function U(n,a){let e=null;return n&&n.map(s=>{a!=null&&a[s]&&(e||(e={}),e[s]=a[s])}),e}N();const D=O(),E=j(),F=m(),R=n=>{const[a,e]=h.exports.useState(!1),[s,o]=h.exports.useState(0),[g,i]=h.exports.useState(""),S=async()=>{let c={query:"getAllAccountsByUserId",params:{businessId:r("businessId")}};const t=await y(b(),c);t&&t.data&&p("cuentaslist",A(t.data,"accountId"));let l={query:"getAllSubAccounts",params:{businessId:r("businessId")}};const d=await y(b(),l);d&&d.data&&(p("sub_cuentas_list",d.data),p("sub_cuentas_dict",A(d.data,"sub_accountId")))},q=async()=>{var l,u;let c={query:"getScanBalanceSheet",params:{businessId:r("businessId"),":type":"PLS"},queryString:"type = :type"};const t=await y(b(),c);if(t&&t.data){let d=(l=P(t.data||{}))==null?void 0:l[0];p("profit_lose_frm",(u=t.data)==null?void 0:u[d]),i(v())}},w=async()=>{var l,u;let c={query:"getScanBalanceSheet",params:{businessId:r("businessId"),":type":"GBS"},queryString:"type = :type"};const t=await y(b(),c);if(t&&t.data){let d=(l=P(t.data||{}))==null?void 0:l[0];p("balance_sheet_frm",(u=t.data)==null?void 0:u[d]),i(v())}},L=async()=>{let c={query:"calcBalanceSheetByPeriod",params:{businessId:r("businessId"),":type":"GBS"},queryString:"type = :type"};const t=await y(b(),c);if(t&&t.data){let l=Q("gastosResultado",["key_g_1","key_g_2","key_g_3","key_g_4","key_g_5","key_g_6","key_g_7","key_g_8","key_g_9","key_g_10","key_g_11","key_g_12","key_g_13","key_g_14"]),u={...t.data};u.key_c_6=l*-1,p("general_balance",u),i(v()),o(1)}},B=async()=>{let c={query:"calcBalanceSheetByPeriod",params:{businessId:r("businessId"),":type":"PLS"},queryString:"type = :type"};const t=await y(b(),c);t&&t.data&&(p("profit_lose_result",t.data),L())};return h.exports.useEffect(()=>{a||(e(!0),S(),w(),q(),B(),T())},[a]),I("div",{children:[_("div",{className:"login_title ",children:I("div",{className:"_dsplFlx ",children:[_("div",{children:"Balances"}),_("div",{className:"login_title ",children:_(D,{lbl:"Calcular Balances",icon:"account",theme:"",updChanges:B})})]})}),I("div",{className:"_dsplFlx spaceAround _flxWrp ",children:[_("div",{className:"formContainer ",style:{opacity:s===1?1:0,width:"720px",marginBottom:75,borderTop:"1px solid #bbbbbb",paddingTop:25},children:s===1&&_(E,{})}),_("div",{className:"formContainer ",style:{opacity:s===1?1:0,width:"720px",marginBottom:75,borderTop:"1px solid #bbbbbb",paddingTop:25},children:s===1&&_(F,{})})]})]})};var V=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{V as B,J as a,K as c,Q as s,U as v};
