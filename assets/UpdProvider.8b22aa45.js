import{C as P,T,o as q,a0 as E,r as h,b as p,p as k,g as c,j as i,a as s,u as d,i as H}from"./index.d7d73e67.js";/* empty css                   */import{CloseModal as R}from"./DialogHRM.96df4305.js";/* empty css                  */P();const w=T(),U=q(),G=E(),e="upd_provider",V=({data:o,confirm:f})=>{var v,x,_,N,C,y,S,A,g;const[F,D]=h.exports.useState(!1),[J,r]=h.exports.useState(0);h.exports.useEffect(()=>{F||(D(!0),r(p()))});const u=(l,a,t)=>{let n=c(e)||{};t?(n[t]||(n[t]={}),n[t][l]=a):n[l]=a,d(e,n),r(p())};let b=["type","name","description","account","subAccount"];const z=async()=>{var I;let l=c(e),a=k(b,c(e),c(e+"_bck")),t={query:"updateProvidersHRG",params:{providerId:l.providerId,businessId:(I=c("profileUser"))==null?void 0:I.businessId},data2update:a.data};await H(t)&&(d(e,{}),d(e+"_bck",{}),f&&f(),o!=null&&o.modalID&&R({id:o==null?void 0:o.modalID}))};let m=k(b,c(e),c(e+"_bck"));const j=(l,a)=>{let t=c(e)||{};t.account=l,t.subAccount=a,d(e,t),r(p())},B=(l,a)=>{let t=c(e)||{};t.account=null,t.subAccount=null,d(e,t),r(p())};return i("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 25px"},children:[i("div",{className:"_dsplFlx ",children:[s("p",{className:"form_title",children:"Actualizar Provedor o Cliente"}),s("div",{className:"flexSpace"})]}),s(w,{init:(v=c(e))==null?void 0:v.name,label:"Nombre",width:520,updChanges:l=>u("name",l)}),s("div",{className:"extra_container",children:(x=c(e))!=null&&x.account?i("div",{className:"",children:[i("div",{className:"_dsplFlx",children:[s("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:()=>B(),children:"Cuenta:"}),s("div",{className:"employee_name",children:(N=(_=c("account_ids"))==null?void 0:_[c(e).account])==null?void 0:N.name})]}),(C=c(e))!=null&&C.subAccount?i("div",{className:"_dsplFlx",children:[s("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},children:"SubCuenta:"}),s("div",{className:"employee_name",children:(S=(y=c("sub_account_ids"))==null?void 0:y[c(e).subAccount])==null?void 0:S.subAccountName})]}):null]}):s(G,{placeholder:"buscar una cuenta",width:420,handleClick:j})}),s(w,{init:(A=c(e))==null?void 0:A.description,label:"Descripcion",width:520,updChanges:l=>u("description",l)}),i("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[s("div",{className:"flexSpace"}),s(U,{data:[{label:"Provedor",id:"provider"},{label:"Cliente",id:"customer"}],active:(g=c(e))==null?void 0:g.type,updSelect:l=>u("type",l)}),s("div",{className:"flexSpace"})]}),i("div",{className:"_dsplFlx ",children:[s("div",{className:"flexSpace"}),m!=null&&m.hasChange?s("div",{className:"card",children:s("button",{onClick:z,children:"Actualizar"})}):null]})]})};export{V as default};
