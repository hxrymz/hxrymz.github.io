import{C as F,T as w,o as A,r as m,b as r,j as i,a as e,g as s,u,i as B}from"./index.388c4500.js";import{CloseModal as j}from"./DialogHRM.b2e60c12.js";/* empty css                  */F();const g=w(),x=A(),a="new_account",z=({data:c,confirm:f})=>{var b,h,v,N,C;const[y,_]=m.exports.useState(!1),[k,p]=m.exports.useState(0);m.exports.useEffect(()=>{y||(_(!0),p(r()))});const t=(l,n,o)=>{let d=s(a)||{};o?(d[o]||(d[o]={}),d[o][l]=n):d[l]=n,u(a,d),p(r())},I=async()=>{var S;let l=s(a);l.accountId=r();let n={query:"addAccounts",params:{businessId:(S=s("profileUser"))==null?void 0:S.businessId},form:l};await B(n)&&(u(a,{}),f&&f(),c!=null&&c.modalID&&j({id:c==null?void 0:c.modalID}))};return i("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[i("div",{className:"_dsplFlx ",children:[e("p",{className:"form_title",children:"Agregar Cuenta"}),e("div",{className:"flexSpace"}),e("p",{className:"group_title addBtn",onClick:l=>{u(a,{}),p(r())},children:"limpiar"})]}),i("div",{className:"_dsplFlx ",children:[e(g,{init:(b=s(a))==null?void 0:b.code,label:"Codigo",width:120,updChanges:l=>t("code",l)}),e("div",{className:"flexSpace"}),i("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[e("div",{className:"flexSpace"}),e(x,{data:[{label:"Real",id:"real"},{label:"Nominal",id:"nominal"}],active:((h=s(a))==null?void 0:h.clasification)||"real",updSelect:l=>t("clasification",l)}),e("div",{className:"flexSpace"})]})]}),e(g,{init:(v=s(a))==null?void 0:v.name,label:"Nombre",width:520,updChanges:l=>t("name",l)}),i("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[e("div",{className:"flexSpace"}),e(x,{data:[{label:"Deudoras",id:"debit"},{label:"Acredoras",id:"credit"}],active:((N=s(a))==null?void 0:N.type)||"debit",updSelect:l=>t("type",l)}),e("div",{className:"flexSpace"})]}),i("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[e("div",{className:"flexSpace"}),e(x,{data:[{label:"Regular",id:null},{label:"Pago",id:"pay"},{label:"Cobro",id:"collect"}],active:((C=s(a))==null?void 0:C.payOrCollect)||null,updSelect:l=>t("payOrCollect",l)}),e("div",{className:"flexSpace"})]}),i("div",{className:"_dsplFlx ",children:[e("div",{className:"flexSpace"}),e("div",{className:"card",children:e("button",{onClick:I,children:"Guardar"})})]})]})};export{z as default};