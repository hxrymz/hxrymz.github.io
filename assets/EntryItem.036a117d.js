import{j as a,a as e,a2 as f,S as C,r as t,w as _,b as N,g as b}from"./index.d92c6cda.js";/* empty css                */import{CloseModal as S,OpenModal as h}from"./DialogHRM.05c7f368.js";import{d as I}from"./server_fetching.a08d342e.js";/* empty css                  */const y=({data:n,confirm:c,handleClick:i,close:r})=>{const{modalID:l}=n,s=m=>{S({id:l})};return a("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[a("div",{className:"_dsplFlx ",children:[e("p",{className:"form_title",children:"Eliminar Parametrizacion de Comprobante"}),e("div",{className:"flexSpace"})]}),e("div",{className:"_dsplFlx ",children:e("span",{children:"Una vez eliminado no podra ser recuperado"})}),a("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[e("div",{className:"flexSpace"}),e("p",{className:"group_title addBtn",onClick:s,children:"Cancelar"}),e("p",{className:"group_title addBtn red",onClick:()=>{c(),s()},children:"Eliminar"})]})]})},z=f(),k=C(),D=({data:n,elmId:c,handleRefreshAll:i})=>{var p;const[r,l]=t.exports.useState(!1),[s,d]=t.exports.useState(0),m=_();t.exports.useEffect(()=>{r||(l(!0),d(N()))});const v=()=>{m({pathname:"/accounting-ledger"})},u=()=>{let o={};o.zIndex=450,o.height="80vh",o.props={minHeight:"1vh",overlay:!0},o.content=e(z,{confirm:v,item:n}),h(o)},g=()=>{I(n==null?void 0:n.accountingEntryId,i)},x=()=>{let o={};o.zIndex=450,o.height="80vh",o.props={minHeight:"1vh",overlay:!0},o.content=e(y,{confirm:g,item:n}),h(o)};return(p=b("sub_account_group"))==null||p[n.accountId],e("div",{className:"item_acc",children:a("div",{className:"_dsplFlx account_item_box account_header",children:[a("div",{className:"_dsplFlx",children:[e("div",{className:"name",children:n==null?void 0:n.name}),e("div",{className:"code"})]}),e("div",{className:"flexSpace"}),e("div",{className:" addSbAcc purple",onClick:u,children:"Lanzar Comprobante"}),e("div",{className:"flexSpace"}),e("div",{className:"icon",onClick:x,children:e(k,{name:"outline_delete",color:"#c62828"})})]})})};export{D as default};
