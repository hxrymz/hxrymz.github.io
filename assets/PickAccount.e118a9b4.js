import{j as r,a as m,D as p,e as d,J as f}from"./index.20bf7686.js";const x=({data:u,updFrm:_,field:b})=>{var i;const{modalID:a}=u||{},o=()=>{const c=s=>{var t,n;let e=(t=d("sub_cuentas_list"))==null?void 0:t[s],l=(n=d("cuentaslist"))==null?void 0:n[e==null?void 0:e.accountId];return{id:e==null?void 0:e.sub_accountId,lbl:`${l==null?void 0:l.name}${e!=null&&e.subAccountName?" - "+(e==null?void 0:e.subAccountName):""}`}},g=(s,e)=>{let l=!0,t=s==null?void 0:s.lbl,n=e==null?void 0:e.lbl;return t<n?l?-1:1:t>n?l?1:-1:0};return p(d("sub_cuentas_list")).map(c).sort(g)};return r("div",{...a?{"dialog-key-id":a}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:m("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:"20px 8px 40px"},children:[r("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:r("div",{children:"Escoja Cuenta"})}),r("div",{className:"list_account ",children:(i=o==null?void 0:o())==null?void 0:i.map(c=>r("div",{className:"lbl",onClick:()=>{_(b,c.id),f({id:a})},children:c.lbl}))})]})})};export{x as default};
