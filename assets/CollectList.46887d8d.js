import{S as M,$ as O,a0 as z,a1 as H,k as V,r as n,g as i,b as l,j as o,a as e,O as U,u as C}from"./index.77dade03.js";import{OpenModal as B}from"./DialogHRM.f69351dd.js";/* empty css                */import{S as E,g as N}from"./server_fetching.54997b73.js";import{g as K}from"./server_fetching.2b6adb7c.js";/* empty css                  */M();const L=O(),P=z(),W=H(),$=V(),t="Acc2Collect",ce=({data:b,elmId:q,updObs:G})=>{var m,p,u,h,_,v,x,g;const[S,y]=n.exports.useState(!1),[J,d]=n.exports.useState(0),[Q,A]=n.exports.useState(!1);n.exports.useEffect(()=>{S||(y(!0),d(i()),K())});const I=()=>{setAddview(!1),setUpdview(!0)},w=()=>{let c={};c.zIndex=450,c.height="93vh",c.props={minHeight:"1vh",overlay:!0},c.content=e(P,{confirm:j,item:b}),B(c)},j=c=>{N(r)},r=async(c,f)=>{d(i()),A(!1)},k=(c,f)=>{C(t,{account:c,subAccount:f}),N(r)},F=()=>{C(t,null),d(i())};let s=(p=l("account_ids"))==null?void 0:p[(m=l(t))==null?void 0:m.account],a=(h=l("sub_account_ids"))==null?void 0:h[(u=l(t))==null?void 0:u.subAccount];return o("div",{className:"",children:[e("div",{className:"accounts_header",children:e("h2",{children:"Cobros"})}),e("div",{className:"",style:{maxWidth:"720px",padding:16},children:(_=l(t))!=null&&_.account?o("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[o("div",{className:" acc_dtls",children:[o("div",{className:"_dsplFlx",children:[e("div",{className:"code",style:{color:"#646cff"},children:s==null?void 0:s.code}),e("div",{className:"name",children:s==null?void 0:s.name})]}),e("div",{className:"flexSpace"}),a?o("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[e("div",{className:"code",children:a==null?void 0:a.subAccount}),e("div",{className:"name",children:a==null?void 0:a.subAccountName})]}):null,((v=l(t))==null?void 0:v.account)&&E(l("collect_by_doc"),"amount")?o("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[e("div",{className:"flexSpace"}),e("p",{className:"group_title addBtn purple",onClick:w,children:"Hacer un Cobro"})]}):null]}),e("div",{className:"flexSpace"}),e("div",{className:"icon",onClick:F,children:e($,{name:"outline_edit",color:"#1a73e8"})})]}):e(W,{placeholder:"buscar una cuenta",width:420,handleClick:k})}),e("div",{className:"accounts_container scollVh scoll_CP_Height",children:((x=l(t))==null?void 0:x.account)&&l("collect_by_doc")&&((g=U(l("collect_by_doc")))==null?void 0:g.map(c=>e(L,{data:l("collect_by_doc")[c],elmId:c,openUpdateView:I},c)))})]})};export{ce as default};
