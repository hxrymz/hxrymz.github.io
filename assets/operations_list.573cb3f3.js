import{e as C,w as y,r as t,x as I,t as S,b as m,j as s,a as e,h,g as o}from"./index.822d4baa.js";/* empty css                  */import{g as w,s as j}from"./server_fetching.8afdfb24.js";import{a as A,g as F}from"./server_fetching.75805ff5.js";const V=C(),k=y(),q=({data:z,elmId:B,updObs:E})=>{var i,p;const[_,u]=t.exports.useState(!1),[L,c]=t.exports.useState(0),[d,n]=t.exports.useState(!1);let b=I();const g=S();t.exports.useEffect(()=>{},[b]),t.exports.useEffect(()=>{_||(u(!0),c(m()),A(r),F(l))});const v=()=>{setAddview(!1),setUpdview(!0)},f=a=>{g({pathname:"/entries"})},x=a=>{!d&&n(!0)},N=a=>{n(!0),j(r)},l=a=>{w(r)},r=async(a,O)=>{c(m()),n(!1)};return s("div",{className:"",children:[s("div",{className:"accounts_header",children:[e("h2",{children:"Comprobantes"}),s("div",{className:"_dsplFlx ",children:[e(V,{placeholder:"Buscar comprobantes",width:360,obs:c,fetchData:N,loading:d,change:x,callempty:l,keyFlds:"search_acc_record"}),e("p",{className:"group_title addBtn purple",onClick:f,children:"Agregar Comprobantes"})]})]}),s("div",{className:"_dsplFlx ",children:[e("div",{className:"flexSpace"}),s("div",{className:"_dsplFlx ",children:[e("div",{className:"total_comprobante_title",children:"No de comprobantes:"}),e("div",{className:"total_comprobante",children:e("span",{children:(i=h(o("comprobante_by_doc")))==null?void 0:i.length})})]})]}),e("div",{className:"accounts_container scollVh",children:o("comprobante_by_doc")&&((p=h(o("comprobante_by_doc")))==null?void 0:p.map(a=>e(k,{data:o("comprobante_by_doc")[a],elmId:a,openUpdateView:v,handleRefreshAll:l},a)))})]})};export{q as default};