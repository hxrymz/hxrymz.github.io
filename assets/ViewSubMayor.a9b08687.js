import{r as _,b as c,g as x,D as f,j as l,a,E as g}from"./index.3f35067f.js";import{c as y,d as C}from"./server_fetching.271dc31e.js";import{CloseModal as u}from"./DialogHRM.569f666c.js";/* empty css                  */const w=({data:n,accountForm:s})=>{var t,p,o;const[I,m]=_.exports.useState(0);let r=c("submayor_group");_.exports.useEffect(()=>{y(s,b)},[s]);const b=()=>{m(x())};let i=(t=c("account_ids"))==null?void 0:t[s==null?void 0:s.account],d=(p=c("sub_account_ids"))==null?void 0:p[s==null?void 0:s.subAccount];const h=f(),v=e=>{u({id:n.modalID}),h({pathname:"accounting-ledger",search:`?cId=${e.comprobanteId}`})};return l("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[a("div",{className:"_dsplFlx ",children:a("p",{className:"title_collect",children:"SubMayor de la Cuenta"})}),l("div",{className:" acc_dtls",style:{marginTop:10},children:[l("div",{className:"_dsplFlx",children:[a("div",{className:"code",style:{color:"#646cff"},children:i==null?void 0:i.code}),a("div",{className:"name",children:i==null?void 0:i.name})]}),a("div",{className:"flexSpace"}),d?l("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[a("div",{className:"code",children:d==null?void 0:d.subAccount}),a("div",{className:"name",children:d==null?void 0:d.subAccountName})]}):null]}),l("div",{className:"_dsplFlx cmp_dtls",children:[a("div",{className:"flexSpace"}),a("div",{className:"_dsplFlx"})]}),l("div",{className:"_dsplFlx hdr_bar purple",children:[a("div",{className:"tr_bar_20",children:"Comprobante"}),a("div",{className:"tr_bar_20",children:"Fecha"}),a("div",{className:"tr_bar_20"}),a("div",{className:"tr_bar_20",children:"Debito"}),a("div",{className:"tr_bar_20",children:"Credito"})]}),(r==null?void 0:r.operations)&&((o=C(r==null?void 0:r.operations))==null?void 0:o.map((e,N)=>l("div",{className:"_dsplFlx hdr_bar",children:[a("div",{className:"tr_bar comprobante_id",onClick:()=>v(e),children:e.comprobanteId}),a("div",{className:"tr_bar",children:e.date&&g(e.date)}),a("div",{className:"tr_bar"}),a("div",{className:"tr_bar_20",children:(e.debit*1).toFixed(2)}),a("div",{className:"tr_bar_20",children:(e.credit*1).toFixed(2)})]},N)))]})};export{w as default};
