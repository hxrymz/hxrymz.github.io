import{e as I,a7 as b,a8 as E,r as s,b as m,j as n,a as t,g as p,h as S}from"./index.921eeb0e.js";import{OpenModal as w}from"./DialogHRM.281c65d9.js";/* empty css                   */import{g as h,s as A}from"./server_fetching.9c52c580.js";/* empty css                  */const C=I(),N=b(),j=E(),R=({data:z,elmId:O,updObs:V})=>{var i;const[u,y]=s.exports.useState(!1),[k,a]=s.exports.useState(0),[B,_]=s.exports.useState(!1),[D,d]=s.exports.useState(!1),[c,l]=s.exports.useState(!1);s.exports.useEffect(()=>{u||(y(!0),a(m()),h(r))});const f=()=>{_(!1),d(!0)},g=()=>{d(!1);let e={};e.zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=t(N,{confimr:o}),w(e)},v=e=>{!c&&l(!0)},x=e=>{l(!0),A(r)},o=e=>{h(r)},r=async(e,F)=>{a(m()),l(!1)};return n("div",{className:"",children:[n("div",{className:"accounts_header",children:[t("h2",{children:"Empleados"}),n("div",{className:"_dsplFlx ",children:[t(C,{placeholder:"Buscar ....",width:360,obs:a,fetchData:x,loading:c,change:v,callempty:o,keyFlds:"searchQry"}),t("p",{className:"group_title addBtn purple",onClick:g,children:"Agregar Empleado"})]})]}),t("div",{className:"employees_container scollVh",children:p("employees_list")&&((i=S(p("employees_list")))==null?void 0:i.map(e=>t(j,{data:p("employees_list")[e],elmId:e,openUpdateView:f,handleRefreshAll:o},e)))})]})};export{R as default};
