import{e as S,Z as N,$ as z,a0 as M,r as a,w as j,b as u,j as c,a as t,g as l,h as k}from"./index.d92c6cda.js";import{OpenModal as h}from"./DialogHRM.05c7f368.js";/* empty css                */import{s as B,g as E}from"./server_fetching.a08d342e.js";import{g as O}from"./server_fetching.10c6b0ff.js";/* empty css                  */const V=S(),D=N(),F=z(),H=M(),Q=({data:P,elmId:U,updObs:q})=>{var p;const[m,g]=a.exports.useState(!1),[K,s]=a.exports.useState(0),[_,f]=a.exports.useState(!1),[v,d]=a.exports.useState(!1),[i,n]=a.exports.useState(!1),b=j();a.exports.useEffect(()=>{m||(g(!0),s(u()),O(r))});const C=()=>{f(!1),d(!0)},x=()=>{b({pathname:"/accounting-ledger"})},A=()=>{let e={};e.zIndex=450,e.height="93vh",e.props={minHeight:"1vh",overlay:!0},e.content=t(H,{confirm:x}),h(e)},y=()=>{d(!1);let e={};e.zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=t(D,{confirm:o}),h(e)},I=e=>{!i&&n(!0)},w=e=>{n(!0),B(r)},o=e=>{E(r)},r=async(e,R)=>{s(u()),n(!1)};return c("div",{className:"",children:[c("div",{className:"accounts_header",children:[t("h2",{children:"Comprobantes Parametrizados"}),c("div",{className:"_dsplFlx ",children:[t(V,{placeholder:"Buscar",width:360,obs:s,fetchData:w,loading:i,change:I,callempty:o,keyFlds:"search_entry_qry"}),t("p",{className:"group_title addBtn purple",onClick:y,children:"Parametrizar"}),t("p",{className:"group_title addBtn purple",onClick:A,children:"Agregar Comprobante Manual"})]})]}),!v&&!_&&t("div",{className:"accounts_container scollVh",children:l("entries_list")&&((p=k(l("entries_list")))==null?void 0:p.map(e=>t(F,{data:l("entries_list")[e],elmId:e,openUpdateView:C,handleRefreshAll:o},e)))})]})};export{Q as default};
