import{i as g,u as p,g as c,e as q,Z as C,r as a,b as y,j as d,a as r,h as U}from"./index.b7d6b41c.js";/* empty css                  *//* empty css                  */const N=async t=>{let l={query:"getUsersByParams",params:{limit:250,":search":c("searchQry")},queryString:"!* contain :search"};const e=await g(l);e&&!e.error&&(p("users_list",e),t&&t())},j=async t=>{const e=await g({query:"getAllBusiness",params:{limit:250}});if(e&&!e.error){let n=[];e.map(i=>[n.push({label:i.name,id:i.businessId})]),p("bussines_list",n),t&&t()}},A=q(),B=C(),k=({data:t,elmId:l,updObs:h})=>{var f;const[e,n]=a.exports.useState(!1),[i,o]=a.exports.useState(0),[z,b]=a.exports.useState(!1),[D,v]=a.exports.useState(!1),[m,u]=a.exports.useState(!1);a.exports.useEffect(()=>{e||(n(!0),o(y()),p("users_list",null),j(_))});const S=()=>{b(!1),v(!0)},x=s=>{!m&&u(!0)},w=s=>{u(!0),N(_)},I=s=>{},_=async(s,E)=>{o(y()),u(!1)};return d("div",{className:"",children:[d("div",{className:"accounts_header",children:[r("h2",{children:"Cuentas"}),d("div",{className:"_dsplFlx ",children:[r(A,{placeholder:"Buscar cuenta",width:360,obs:o,fetchData:w,loading:m,change:x,callempty:I,keyFlds:"searchQry"}),r("p",{className:"group_title addBtn purple",children:"Agregar Cuenta"})]})]}),r("div",{className:"accounts_container",children:c("users_list")&&((f=U(c("users_list")))==null?void 0:f.map(s=>r(B,{data:c("users_list")[s],elmId:s,openUpdateView:S},s)))})]})};export{k as default};
