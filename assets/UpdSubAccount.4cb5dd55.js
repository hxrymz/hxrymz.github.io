import{d as F,T as w,t as k,r as m,g as p,b as t,v,j as o,a as e,u as b,p as z}from"./index.40abd184.js";/* empty css                   */import{CloseModal as B}from"./DialogHRM.db4736d1.js";/* empty css                  */F();const S=w();k();const s="upd_sub_account",H=({data:c,confirm:h})=>{var _,N;const[g,A]=m.exports.useState(!1),[j,r]=m.exports.useState(0);m.exports.useEffect(()=>{g||(A(!0),r(p()))});const x=(a,u,i)=>{let d=t(s)||{};i?(d[i]||(d[i]={}),d[i][a]=u):d[a]=u,b(s,d),r(p())},I=async()=>{var C;let a=t(s),u=v(f,t(s),t(s+"_bck")),i={query:"updateSubAccounts",params:{sub_accountId:a.sub_accountId,businessId:(C=t("profileUser"))==null?void 0:C.businessId},data2update:u.data};await z(i)&&(b(s,{}),h&&h(),c!=null&&c.modalID&&B({id:c==null?void 0:c.modalID}))},y=a=>{b(s,{}),r(p())};let l=t("account_rel_subacc"),f=["subAccount","subAccountName"],n=v(f,t(s),t(s+"_bck"));return o("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[o("div",{className:"_dsplFlx ",children:[e("p",{className:"form_title",children:"Actualizar Sub Cuenta"}),e("div",{className:"flexSpace"}),e("p",{className:"group_title addBtn",onClick:y,children:"limpiar"})]}),e("div",{className:"_dsplFlx acc_dtls",children:o("div",{className:"_dsplFlx",children:[e("div",{className:"code",children:l==null?void 0:l.code}),e("div",{className:"name",children:l==null?void 0:l.name})]})}),o("div",{className:"_dsplFlx ",children:[e(S,{init:(_=t(s))==null?void 0:_.subAccount,label:"Sub Cuenta",width:120,type:"number",updChanges:a=>x("subAccount",a)}),e("div",{className:"flexSpace"})]}),e(S,{init:(N=t(s))==null?void 0:N.subAccountName,label:"Nombre Sub Cuenta",width:520,updChanges:a=>x("subAccountName",a)}),o("div",{className:"_dsplFlx ",style:{marginBottom:n!=null&&n.hasChange?1:15},children:[e("div",{className:"flexSpace"}),n!=null&&n.hasChange?e("div",{className:"card",children:e("button",{onClick:I,children:"Actualizar"})}):null]})]})};export{H as default};
