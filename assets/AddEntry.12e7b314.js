import{S as q,C as K,T as G,o as H,a1 as M,r as f,b as o,g as a,j as i,a as e,h as R,u as d,i as U}from"./index.d92c6cda.js";/* empty css                */import{CloseModal as J}from"./DialogHRM.05c7f368.js";/* empty css                  */const E=q();K();const Q=G(),w=H(),V=M(),p="new_entry_comprobante",D=({data:s,confirm:x})=>{var S,g,P,y,A,C,L,I,O;const[_,h]=f.exports.useState(!1),[N,r]=f.exports.useState(0);f.exports.useEffect(()=>{_||(h(!0),r(o()))});const v=(c,t,l)=>{let n=a(p)||{};l?(n[l]||(n[l]={}),n[l][c]=t):n[c]=t,d(p,n),r(o())},b=async()=>{var F;let c=a(p);c.accountingEntryId=o(),c.accountsToParameterize=a("accountListOnParam");let t={query:"addAccountingEntries",params:{businessId:(F=a("profileUser"))==null?void 0:F.businessId},form:c};await U(t)&&(d(p,{}),d("accountListOnParam",null),x&&x(),s!=null&&s.modalID&&J({id:s==null?void 0:s.modalID}))},T=(c,t)=>{d("account2Param",{account:c,subAccount:t}),r(o())},j=()=>{d("account2Param",null),r(o())},z=(c,t,l)=>{let n={...a("account2Param")};l?(n[l]||(n[l]={}),n[l][c]=t):n[c]=t,d("account2Param",n),r(o())},k=()=>{let c={...a("account2Param")};c.type||(c.type="debit");let t={...a("accountListOnParam")},l=c.account+"_"+c.subAccount;t[l]=c,d("accountListOnParam",t),d("account2Param",null),r(o())},B=c=>{let t={...a("accountListOnParam")};delete t[c],d("accountListOnParam",t),r(o())};let u=(g=a("account_ids"))==null?void 0:g[(S=a("account2Param"))==null?void 0:S.account],m=(y=a("sub_account_ids"))==null?void 0:y[(P=a("account2Param"))==null?void 0:P.subAccount];return i("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[i("div",{className:"_dsplFlx ",children:[e("p",{className:"form_title",children:"Agregar Comprobante Parametrizado"}),e("div",{className:"flexSpace"})]}),e(Q,{init:(A=a(p))==null?void 0:A.name,label:"Nombre",width:520,updChanges:c=>v("name",c)}),i("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[e("div",{className:"flexSpace"}),i("div",{children:[e("div",{className:"label",children:"Agregar extras"}),e(w,{data:[{label:"Empleados",id:"employee"},{label:"Provedores",id:"provider"}],active:(C=a(p))==null?void 0:C.extra,updSelect:c=>v("extra",c)})]}),e("div",{className:"flexSpace"})]}),e("div",{className:"separator"}),e("div",{className:" ",style:{paddingTop:"18px"},children:(L=a("account2Param"))!=null&&L.account?i("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[i("div",{className:" acc_dtls",children:[i("div",{className:"_dsplFlx",children:[e("div",{className:"code",style:{color:"#646cff"},children:u==null?void 0:u.code}),e("div",{className:"name",children:u==null?void 0:u.name})]}),e("div",{className:"flexSpace"}),m?i("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[e("div",{className:"code",children:m==null?void 0:m.subAccount}),e("div",{className:"name",children:m==null?void 0:m.subAccountName})]}):null]}),e("div",{className:"flexSpace"}),e("div",{className:"icon",onClick:j,children:e(E,{name:"outline_edit",color:"#1a73e8"})})]}):e(V,{placeholder:"buscar una cuenta",width:420,handleClick:T})}),i("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[e("div",{className:"flexSpace"}),e(w,{data:[{label:"Deudoras",id:"debit"},{label:"Acredoras",id:"credit"}],active:((I=a("account2Param"))==null?void 0:I.type)||"debit",updSelect:c=>z("type",c)}),e("div",{className:"flexSpace"}),e("button",{onClick:k,children:"Agregar"})]}),i("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[e("div",{className:"tr_bar",children:"Cuenta"}),e("div",{className:"tr_bar",children:"Sub Cuenta"}),e("div",{className:"tr_bar",children:"Tipo de cuenta"})]}),a("accountListOnParam")&&((O=R(a("accountListOnParam")))==null?void 0:O.map((c,t)=>e(W,{idKey:c,data:a("accountListOnParam")[c],deleteItem:B},c))),i("div",{className:"_dsplFlx ",children:[e("div",{className:"flexSpace"}),e("div",{className:"card",children:e("button",{onClick:b,children:"Guardar"})})]})]})},W=({data:s,deleteItem:x,idKey:_})=>{var v,b;let h=(v=a("account_ids"))==null?void 0:v[s==null?void 0:s.account],N=(b=a("sub_account_ids"))==null?void 0:b[s==null?void 0:s.subAccount];const r=()=>{x(_)};return i("div",{className:"_dsplFlx hdr_bar",children:[e("div",{className:"tr_bar",children:h==null?void 0:h.code}),e("div",{className:"tr_bar",children:N==null?void 0:N.subAccount}),e("div",{className:"tr_bar",children:s==null?void 0:s.type}),e("div",{className:"tr_bar"}),e("div",{className:"flexSpace"}),e("div",{className:"icon",onClick:r,children:e(E,{name:"outline_delete",color:"#c62828"})})]})};export{D as default};
