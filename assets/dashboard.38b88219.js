import{S,Y as y,Z as w,r as t,g as u,j as c,a as s,b as o,O as A}from"./index.31b09617.js";import{OpenModal as C}from"./DialogHRM.d8036a1f.js";/* empty css                */import{g as z,s as N,a as j}from"./server_fetching.fc87ff90.js";/* empty css                  */const O=S(),E=y(),k=w(),Y=({data:B,elmId:D,updObs:F})=>{var p;const[h,m]=t.exports.useState(!1),[P,a]=t.exports.useState(0),[_,f]=t.exports.useState(!1),[v,l]=t.exports.useState(!1),[i,n]=t.exports.useState(!1);t.exports.useEffect(()=>{h||(m(!0),a(u()),z(r))});const g=()=>{f(!1),l(!0)},x=()=>{l(!1);let e={};e.zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=s(E,{confirm:d}),C(e)},b=e=>{!i&&n(!0)},I=e=>{n(!0),N(r)},d=e=>{j(r)},r=async(e,U)=>{a(u()),n(!1)};return c("div",{className:"",children:[c("div",{className:"accounts_header",children:[s("h2",{children:"Parametrizar Comprobantes"}),c("div",{className:"_dsplFlx ",children:[s(O,{placeholder:"Buscar cuenta",width:360,obs:a,fetchData:I,loading:i,change:b,callempty:d,keyFlds:"searchQry"}),s("p",{className:"group_title addBtn purple",onClick:x,children:"Parametrizar"})]})]}),!v&&!_&&s("div",{className:"accounts_container",children:o("entries_list")&&((p=A(o("entries_list")))==null?void 0:p.map(e=>s(k,{data:o("entries_list")[e],elmId:e,openUpdateView:g},e)))})]})};export{Y as default};
