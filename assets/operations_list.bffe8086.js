import{S as C,E as x,G as I,r as a,H as y,g as i,j as c,a as t,b as l,O as S}from"./index.ff191f77.js";import{OpenModal as w}from"./DialogHRM.a57a3a07.js";/* empty css               */import{g as A,s as N}from"./server_fetching.e374eb66.js";import{a as j,g as M}from"./server_fetching.7ca3487a.js";/* empty css                  */const O=C(),z=x(),E=I(),q=({data:m,elmId:k,updObs:B})=>{var d;const[u,h]=a.exports.useState(!1),[F,o]=a.exports.useState(0),[p,s]=a.exports.useState(!1);let _=y();a.exports.useEffect(()=>{},[_]),a.exports.useEffect(()=>{u||(h(!0),o(i()),j(r),M(n))});const b=()=>{setAddview(!1),setUpdview(!0)},g=()=>{let e={};e.zIndex=450,e.height="93vh",e.props={minHeight:"1vh",overlay:!0},e.content=t(E,{confirm:n,item:m}),w(e)},f=e=>{!p&&s(!0)},v=e=>{s(!0),N(r)},n=e=>{A(r)},r=async(e,H)=>{o(i()),s(!1)};return c("div",{className:"",children:[c("div",{className:"accounts_header",children:[t("h2",{children:"Comprobantes"}),c("div",{className:"_dsplFlx ",children:[t(O,{placeholder:"Buscar comprobantes",width:360,obs:o,fetchData:v,loading:p,change:f,callempty:n,keyFlds:"search_acc_record"}),t("p",{className:"group_title addBtn purple",onClick:g,children:"Agregar Comprobantes"})]})]}),t("div",{className:"accounts_container",children:l("comprobante_by_doc")&&((d=S(l("comprobante_by_doc")))==null?void 0:d.map(e=>t(z,{data:l("comprobante_by_doc")[e],elmId:e,openUpdateView:b},e)))})]})};export{q as default};
