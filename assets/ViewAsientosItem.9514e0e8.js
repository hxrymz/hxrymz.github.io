import{r,a as e,j as a,P as s,Q as m}from"./index.81185f1e.js";import{b as l}from"./index.ef9b372c.js";const N=({data:n,refreshlist:c,item:i})=>(r.exports.useState(!1),r.exports.useState(0),e("div",{className:"",style:{background:"var(--color_backgrond_input)",borderRadius:"13px",maxWidth:"90vw",marginBottom:15},children:a("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:s()?"20px 8px 40px":"20px 68px 40px",minWidth:s()?360:720},children:[e("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:e("div",{children:i.entryName})}),a("div",{className:"_dsplFlx",style:{marginTop:10},children:[a("div",{className:"_dsplFlx",style:{marginTop:10},children:[e("span",{className:"sw_rgh_span",children:"Fecha: "}),e("span",{className:"sw_rgh_span",children:m(i.date)})]}),e("div",{className:"flexSpace"}),a("div",{className:"_dsplFlx",style:{marginTop:10},children:[e("span",{className:"sw_rgh_span",children:"Documento: "}),e("span",{className:"sw_rgh_span",children:i.document})]})]}),a("div",{children:[a("div",{className:"_dsplFlx cuenta_asiento",style:{margin:"20px 0 10px"},children:[e("div",{className:"",style:{width:s()?60:120,padding:7},children:"Cuenta"}),e("div",{className:"",style:{width:s()?60:150,padding:7},children:"Sub Cuenta"}),e("div",{className:"",style:{width:s()?60:150,padding:7},children:"Debito"}),e("div",{className:"",style:{width:s()?60:150,padding:7},children:"Credito"})]}),a("div",{className:"_dsplFlx ",children:[e("div",{className:"_asiento_item",style:{width:s()?60:120},children:l(i.debitSubAccount)}),e("div",{className:"_asiento_item",style:{width:s()?60:150},children:l(i.debitSubAccount)}),a("div",{className:"_asiento_item",style:{width:s()?60:150},children:["$",(i.amount*1).toFixed(2)]}),e("div",{className:"_asiento_item",style:{width:s()?60:150}})]}),a("div",{className:"_dsplFlx ",children:[e("div",{className:"_asiento_item",style:{width:s()?60:120},children:l(i.creditSubAccount)}),e("div",{className:"_asiento_item",style:{width:s()?60:150},children:l(i.creditSubAccount)}),e("div",{className:"_asiento_item",style:{width:s()?60:150}}),a("div",{className:"_asiento_item",style:{width:s()?60:150},children:["$",(i.amount*1).toFixed(2)]})]})]}),a("div",{style:{minWidth:"50%",borderTop:"1px solid #333"},children:[e("div",{className:"in_stock_switch _dsplFlx",style:{marginTop:10},children:e("span",{className:"sw_rgh_span",children:"Descripcion:"})}),e("div",{className:"_asiento_item",style:{marginLeft:20},children:i.description})]})]})}));function u(n,c,i){let o=JSON.parse(i),t=null;return n&&n.map((d,h)=>{c[d]!==o[d]&&(t||(t={}),t[d]=c[d])}),t}export{u as compareJson,N as default};
