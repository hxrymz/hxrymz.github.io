import{$ as u,r as o,g as r,b as h,a as e,j as n}from"./index.31b09617.js";/* empty css                */import{OpenModal as b}from"./DialogHRM.d8036a1f.js";import{a as f}from"./server_fetching.fc87ff90.js";/* empty css                  */const x=u(),j=({data:s,elmId:_,openUpdateView:v})=>{var c;const[i,l]=o.exports.useState(!1),[g,a]=o.exports.useState(0);o.exports.useEffect(()=>{i||(l(!0),a(r()))});const m=()=>{a(r())},p=()=>{f(m)},d=()=>{let t={};t.zIndex=450,t.height="80vh",t.props={minHeight:"1vh",overlay:!0},t.content=e(x,{confirm:p,item:s}),b(t)};return(c=h("sub_account_group"))==null||c[s.accountId],e("div",{className:"item_acc",children:n("div",{className:"_dsplFlx account_item_box account_header",children:[n("div",{className:"_dsplFlx",children:[e("div",{className:"name",children:s==null?void 0:s.name}),e("div",{className:"code"})]}),e("div",{className:"flexSpace"}),e("div",{className:" addSbAcc purple",onClick:d,children:"Lanzar Comprobante"})]})})};export{j as default};
