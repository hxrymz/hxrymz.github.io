import{V as S,l as w,_ as E,r as f,j as e,a as m,k as a,E as $,o as k,J as I,G as B,C as O,O as j,x as P}from"./index.80f87a12.js";const W=S(),s="ctscont",F=w(()=>E(()=>import("./PickAccount.94b4ea22.js"),["assets/PickAccount.94b4ea22.js","assets/index.80f87a12.js","assets/index.1aca3d94.css"])),M=({data:l,refreshlist:u})=>{var y,N,v,x;const{modalID:o}=l||{},[_,i]=f.exports.useState(!1),[r,p]=f.exports.useState(0),b=(n,t)=>{let c=a(s)||{};c[n]=t,k(s,c),_&&i(!1),p(I())},C=async()=>{let n=a(s)||{};n.accountingEntryId=I();let t={query:"addAccountingEntries",params:{businessId:a("businessId")},form:n};const d=await B(P(),t);d&&d.data&&(k(s,{}),O({id:o}),u())},h=n=>{let t={};t.zIndex=450,t.props={zIndex:999,minHeight:"1vh",overlay:!0},t.content=e(F,{updFrm:b,field:n}),j(t)},g=n=>$("getSubAccountNameByK"+n,[a("sub_cuentas_dict"),n],()=>{var d,A;let t=(d=a("sub_cuentas_dict"))==null?void 0:d[n],c=(A=a("cuentaslist"))==null?void 0:A[t==null?void 0:t.accountId];return`${c==null?void 0:c.name}${t!=null&&t.subAccountName?" - "+(t==null?void 0:t.subAccountName):""}`});return e("div",{...o?{"dialog-key-id":o}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:m("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:"20px 68px 40px",minWidth:720},children:[e("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:e("div",{children:"Parametrizar Asiento Contable"})}),e(W,{validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",placeholder:"Nombre de asiento",updChange:n=>b("name",n)}),m("div",{className:" ",children:[m("div",{style:{minWidth:"50%"},children:[e("div",{className:"in_stock_switch _dsplFlx",style:{marginTop:10},children:e("span",{className:"sw_rgh_span",children:"Asociar cuenta a Debito"})}),e("div",{className:" year_container  ",style:{maxWidth:"fit-content",marginBottom:25},children:e("div",{className:"cuenta_asiento",onClick:()=>h("debitAccount"),children:(y=a(s))!=null&&y.debitAccount?g((N=a(s))==null?void 0:N.debitAccount):"escoja una cuenta"})})]}),m("div",{style:{minWidth:"50%"},children:[e("div",{className:"in_stock_switch _dsplFlx",style:{marginTop:10},children:e("span",{className:"sw_rgh_span",children:"Asociar cuenta a Credito"})}),e("div",{className:" year_container  ",style:{maxWidth:"fit-content",marginBottom:25},children:e("div",{className:"cuenta_asiento",onClick:()=>h("creditAccount"),children:(v=a(s))!=null&&v.creditAccount?g((x=a(s))==null?void 0:x.creditAccount):"escoja una cuenta"})})]})]}),e("button",{className:"btn login_button btn_submit btn_small",type:"submit",autocomplete:"off",tabindex:"0","data-uia":"login-submit-button",onClick:C,children:"Agregar"})]})})};function z(l,u,o){let _=JSON.parse(o),i=null;return l&&l.map((r,p)=>{u[r]!==_[r]&&(i||(i={}),i[r]=u[r])}),i}export{z as compareJson,M as default};
