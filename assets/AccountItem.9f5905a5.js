import{U as x,q as N,s as y,V as I,r as i,b as _,g as C,j as u,a as e,u as o}from"./index.921eeb0e.js";import{OpenModal as l}from"./DialogHRM.281c65d9.js";import{b as k,g as z,a as O}from"./server_fetching.935ffc26.js";/* empty css                  */const U=x(),F=N(),H=y(),J=I(),B=({data:n,elmId:M,openUpdateView:V})=>{var h;const[b,v]=i.exports.useState(!1),[j,d]=i.exports.useState(0);i.exports.useEffect(()=>{b||(v(!0),d(_()))});const p=()=>{d(_())},r=()=>{z(p)},S=()=>{O(p)},f=async()=>{o("upd_account",n),o("upd_account_bck",JSON.parse(JSON.stringify(n)));let c={};c.zIndex=450,c.height="80vh",c.props={minHeight:"1vh",overlay:!0},c.content=e(U,{confirm:S}),l(c)},g=()=>{o("account_rel_subacc",n);let c={};c.zIndex=450,c.height="80vh",c.props={minHeight:"1vh",overlay:!0},c.content=e(F,{confirm:r}),l(c)},m=c=>{let t={account:n.accountId};c&&(t.subAccount=c),o("account_sub_mayor",n);let a={};a.zIndex=450,a.height="80vh",a.props={minHeight:"1vh",overlay:!0},a.content=e(J,{confirm:r,accountForm:t}),l(a)},A=async c=>{o("account_rel_subacc",n),o("upd_sub_account",c),o("upd_sub_account_bck",JSON.parse(JSON.stringify(c)));let t={};t.zIndex=450,t.height="80vh",t.props={minHeight:"1vh",overlay:!0},t.content=e(H,{confirm:r}),l(t)};let s=k((h=C("sub_account_group"))==null?void 0:h[n.accountId],"subAccount");return u("div",{className:"item_acc",children:[u("div",{className:"_dsplFlx account_item_box account_header",children:[u("div",{className:"_dsplFlx",onClick:f,children:[e("div",{className:"code",children:n==null?void 0:n.code}),e("div",{className:"name",children:n==null?void 0:n.name})]}),e("div",{className:"flexSpace"}),e("div",{className:" addSbAcc purple",onClick:g,children:"Agregar SubCuenta"}),e("div",{className:" addSbAcc purple",onClick:()=>m(null),children:"Submayor"})]}),(s==null?void 0:s.length)&&e("div",{children:s==null?void 0:s.map(c=>c.subAccount?u("div",{className:"_dsplFlx account_item_box",style:{marginLeft:"35px"},children:[u("div",{className:"_dsplFlx",onClick:()=>A(c),children:[e("div",{className:"code",children:c.subAccount}),e("div",{className:"name",children:c.subAccountName})]}),e("div",{className:"flexSpace"}),e("div",{className:" addSbAcc purple",onClick:()=>m(c.sub_accountId),children:"Submayor"})]},c.sub_accountId):null)})]})};export{B as default};
