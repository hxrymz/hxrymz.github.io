import{e as M,E as z,G as H,S as O,P,r as n,b as i,g as l,j as o,a as c,h as V,u as f}from"./index.822d4baa.js";import{OpenModal as E}from"./DialogHRM.168a5d43.js";/* empty css               */import{S as U,g as N}from"./server_fetching.71c07b5c.js";import{g as B}from"./server_fetching.75805ff5.js";/* empty css                  */M();const G=z(),K=H(),L=O(),t="Acc2Collect",W=P(),ee=({data:S,elmId:q,updObs:J})=>{var m,p,u,h,_,x,g,C;const[v,y]=n.exports.useState(!1),[Q,d]=n.exports.useState(0),[R,I]=n.exports.useState(!1);n.exports.useEffect(()=>{v||(y(!0),d(i()),B())});const A=()=>{setAddview(!1),setUpdview(!0)},w=()=>{let e={};e.zIndex=450,e.height="93vh",e.props={minHeight:"1vh",overlay:!0},e.content=c(K,{confirm:j,item:S}),E(e)},j=e=>{N(r)},r=async(e,b)=>{d(i()),I(!1)},k=e=>{let b={account:e==null?void 0:e.account,subAccount:e==null?void 0:e.subAccount,customerId:e==null?void 0:e.customerId};f(t,b),N(r)},F=()=>{f(t,null),d(i())};let a=(p=l("account_ids"))==null?void 0:p[(m=l(t))==null?void 0:m.account],s=(h=l("sub_account_ids"))==null?void 0:h[(u=l(t))==null?void 0:u.subAccount];return o("div",{className:"",children:[c("div",{className:"accounts_header",children:c("h2",{children:"Cobros"})}),c("div",{className:"",style:{maxWidth:"720px",padding:16},children:(_=l(t))!=null&&_.account?o("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[o("div",{className:" acc_dtls",children:[o("div",{className:"_dsplFlx",children:[c("div",{className:"code",style:{color:"#646cff"},children:a==null?void 0:a.code}),c("div",{className:"name",children:a==null?void 0:a.name})]}),c("div",{className:"flexSpace"}),s?o("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[c("div",{className:"code",children:s==null?void 0:s.subAccount}),c("div",{className:"name",children:s==null?void 0:s.subAccountName})]}):null,((x=l(t))==null?void 0:x.account)&&U(l("collect_by_doc"),"amount")?o("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[c("div",{className:"flexSpace"}),c("p",{className:"group_title addBtn purple",onClick:w,children:"Hacer un Cobro"})]}):null]}),c("div",{className:"flexSpace"}),c("div",{className:"icon",onClick:F,children:c(L,{name:"outline_edit",color:"#1a73e8"})})]}):c(W,{placeholder:"buscar un cliente",width:420,handleClick:k})}),c("div",{className:"accounts_container scollVh scoll_CP_Height",children:((g=l(t))==null?void 0:g.account)&&l("collect_by_doc")&&((C=V(l("collect_by_doc")))==null?void 0:C.map(e=>c(G,{data:l("collect_by_doc")[e],elmId:e,openUpdateView:A},e)))})]})};export{ee as default};