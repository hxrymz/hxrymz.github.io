import{S as k,C as B,T as q,o as G,G as K,r as f,b as d,g as a,j as i,a as e,h as H,u as o,i as M}from"./index.b7d6b41c.js";/* empty css                */import{CloseModal as R}from"./DialogHRM.7a3190e8.js";/* empty css                  */const F=k();B();const U=q(),J=G(),Q=K(),h="new_entry_comprobante",$=({data:s,confirm:v})=>{var P,S,g,C,y,A,L,I;const[N,p]=f.exports.useState(!1),[b,r]=f.exports.useState(0);f.exports.useEffect(()=>{N||(p(!0),r(d()))});const x=(c,t,n)=>{let l=a(h)||{};n?(l[n]||(l[n]={}),l[n][c]=t):l[c]=t,o(h,l),r(d())},_=async()=>{var O;let c=a(h);c.accountingEntryId=d(),c.accountsToParameterize=a("accountListOnParam");let t={query:"addAccountingEntries",params:{businessId:(O=a("profileUser"))==null?void 0:O.businessId},form:c};await M(t)&&(o(h,{}),o("accountListOnParam",null),v&&v(),s!=null&&s.modalID&&R({id:s==null?void 0:s.modalID}))},w=(c,t)=>{o("account2Param",{account:c,subAccount:t}),r(d())},T=()=>{o("account2Param",null),r(d())},E=(c,t,n)=>{let l={...a("account2Param")};n?(l[n]||(l[n]={}),l[n][c]=t):l[c]=t,o("account2Param",l),r(d())},j=()=>{let c={...a("account2Param")};c.type||(c.type="debit");let t={...a("accountListOnParam")},n=c.account+"_"+c.subAccount;t[n]=c,o("accountListOnParam",t),o("account2Param",null),r(d())},z=c=>{let t={...a("accountListOnParam")};delete t[c],o("accountListOnParam",t),r(d())};let u=(S=a("account_ids"))==null?void 0:S[(P=a("account2Param"))==null?void 0:P.account],m=(C=a("sub_account_ids"))==null?void 0:C[(g=a("account2Param"))==null?void 0:g.subAccount];return i("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[i("div",{className:"_dsplFlx ",children:[e("p",{className:"form_title",children:"Agregar Comprobante Parametrizado"}),e("div",{className:"flexSpace"})]}),e(U,{init:(y=a(h))==null?void 0:y.name,label:"Nombre",width:520,updChanges:c=>x("name",c)}),e("div",{className:" ",style:{paddingTop:"18px"},children:(A=a("account2Param"))!=null&&A.account?i("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[i("div",{className:" acc_dtls",children:[i("div",{className:"_dsplFlx",children:[e("div",{className:"code",style:{color:"#646cff"},children:u==null?void 0:u.code}),e("div",{className:"name",children:u==null?void 0:u.name})]}),e("div",{className:"flexSpace"}),m?i("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[e("div",{className:"code",children:m==null?void 0:m.subAccount}),e("div",{className:"name",children:m==null?void 0:m.subAccountName})]}):null]}),e("div",{className:"flexSpace"}),e("div",{className:"icon",onClick:T,children:e(F,{name:"outline_edit",color:"#1a73e8"})})]}):e(Q,{placeholder:"buscar una cuenta",width:420,handleClick:w})}),i("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[e("div",{className:"flexSpace"}),e(J,{data:[{label:"Deudoras",id:"debit"},{label:"Acredoras",id:"credit"}],active:((L=a("account2Param"))==null?void 0:L.type)||"debit",updSelect:c=>E("type",c)}),e("div",{className:"flexSpace"}),e("button",{onClick:j,children:"Agregar"})]}),i("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[e("div",{className:"tr_bar",children:"Cuenta"}),e("div",{className:"tr_bar",children:"Sub Cuenta"}),e("div",{className:"tr_bar",children:"Tipo de cuenta"})]}),a("accountListOnParam")&&((I=H(a("accountListOnParam")))==null?void 0:I.map((c,t)=>e(V,{idKey:c,data:a("accountListOnParam")[c],deleteItem:z},c))),i("div",{className:"_dsplFlx ",children:[e("div",{className:"flexSpace"}),e("div",{className:"card",children:e("button",{onClick:_,children:"Guardar"})})]})]})},V=({data:s,deleteItem:v,idKey:N})=>{var x,_;let p=(x=a("account_ids"))==null?void 0:x[s==null?void 0:s.account],b=(_=a("sub_account_ids"))==null?void 0:_[s==null?void 0:s.subAccount];const r=()=>{v(N)};return i("div",{className:"_dsplFlx hdr_bar",children:[e("div",{className:"tr_bar",children:p==null?void 0:p.code}),e("div",{className:"tr_bar",children:b==null?void 0:b.subAccount}),e("div",{className:"tr_bar",children:s==null?void 0:s.type}),e("div",{className:"tr_bar"}),e("div",{className:"flexSpace"}),e("div",{className:"icon",onClick:r,children:e(F,{name:"outline_delete",color:"#c62828"})})]})};export{$ as default};
