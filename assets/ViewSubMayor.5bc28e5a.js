import{r as l,t,j as c,a,v as _}from"./index.921eeb0e.js";/* empty css                */import{c as p}from"./server_fetching.230c7688.js";import{CloseModal as h}from"./DialogHRM.281c65d9.js";/* empty css                  */const x=({data:e,item:s})=>{var d;l.exports.useState(0),l.exports.useEffect(()=>{},[s]);const o=t(),i=r=>{h({id:e.modalID}),o({pathname:"accounting-ledger",search:`?cId=${r.comprobanteId}`})};return c("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[a("div",{className:"_dsplFlx ",children:a("p",{className:"title_collect",children:"SubMayor de Producto"})}),a("div",{className:" acc_dtls",style:{marginTop:10},children:c("div",{className:"_dsplFlx",children:[a("div",{className:"code",style:{color:"#646cff"},children:s==null?void 0:s.name}),a("div",{className:"name",children:s==null?void 0:s.unit})]})}),c("div",{className:"_dsplFlx cmp_dtls",children:[a("div",{className:"flexSpace"}),a("div",{className:"_dsplFlx"})]}),c("div",{className:"_dsplFlx hdr_bar purple",children:[a("div",{className:"tr_bar_s6",children:"Comprobante"}),a("div",{className:"tr_bar_s6",children:"Fecha"}),a("div",{className:"tr_bar_s6",children:"Documento"}),a("div",{className:"tr_bar_s6",children:"Debito"}),a("div",{className:"tr_bar_s6",children:"Credito"}),a("div",{className:"tr_bar_s6",children:"Saldo"})]}),a("div",{className:"scollVh subMHeight",children:(s==null?void 0:s.operations)&&((d=p(s==null?void 0:s.operations,accountD==null?void 0:accountD.code,subaccountD==null?void 0:subaccountD.subAccount))==null?void 0:d.map((r,n)=>c("div",{className:"_dsplFlx hdr_bar",children:[a("div",{className:"tr_bar_s6 comprobante_id",onClick:()=>i(r),children:r.comprobanteId}),a("div",{className:"tr_bar_s6",children:r.date&&_(r.date)}),a("div",{className:"tr_bar_s6",children:r.document}),a("div",{className:"tr_bar_s6",children:(r.debit*1).toFixed(2)}),a("div",{className:"tr_bar_s6",children:(r.credit*1).toFixed(2)}),a("div",{className:"tr_bar_s6",children:(r.saldo*1).toFixed(2)})]},n)))})]})};export{x as default};
