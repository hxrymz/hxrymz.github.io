import{e as N,a3 as P,a4 as y,r as s,b as h,j as o,a as t,g as l,h as A}from"./index.b7d6b41c.js";import{OpenModal as j}from"./DialogHRM.7a3190e8.js";/* empty css                   */import{g as m,s as k}from"./server_fetching.e6c5f735.js";/* empty css                  */const B=N(),z=P(),O=y(),R=({data:V,elmId:D,updObs:E})=>{var i;const[_,g]=s.exports.useState(!1),[F,a]=s.exports.useState(0),[v,x]=s.exports.useState(!1),[I,c]=s.exports.useState(!1),[n,r]=s.exports.useState(!1);s.exports.useEffect(()=>{_||(g(!0),a(h()),m(d))});const S=()=>{x(!1),c(!0)},b=()=>{c(!1);let e={};e.zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=t(z,{handleClick:u=>handlePick(u,f)}),j(e)},w=e=>{!n&&r(!0)},C=e=>{r(!0),k(d)},p=e=>{m(d)},d=async(e,u)=>{a(h()),r(!1)};return o("div",{className:"",children:[o("div",{className:"products_header",children:[t("h2",{children:"Inventario"}),o("div",{className:"_dsplFlx ",children:[t(B,{placeholder:"Buscar cuenta",width:360,obs:a,fetchData:C,loading:n,change:w,callempty:p,keyFlds:"searchQry"}),t("p",{className:"group_title addBtn purple",onClick:b,children:"Agregar Producto"}),t("p",{className:"group_title addBtn purple",children:"Entradas"}),t("p",{className:"group_title addBtn purple",children:"Salidas"})]})]}),!I&&!v&&t("div",{className:"products_container scollVh",children:l("products_list")&&((i=A(l("products_list")))==null?void 0:i.map(e=>t(O,{data:l("products_list")[e],elmId:e,openUpdateView:S,handleRefreshAll:p},e)))})]})};export{R as default};
