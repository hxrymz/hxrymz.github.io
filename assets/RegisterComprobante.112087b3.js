import{k as M,d as R,T as j,I as q,r as I,u as f,g as C,b as i,j as d,a as s,O as D,J as B,p as G}from"./index.7f0cdf89.js";/* empty css                */import{CloseModal as K}from"./DialogHRM.f0bfb99f.js";/* empty css                  */M();R();const F=j(),P=q(),o="entry_operation_comprobante",X=({data:t,confirm:c,item:l})=>{var y,x,r,v,m;const[g,A]=I.exports.useState(!1),[a,b]=I.exports.useState(0);I.exports.useEffect(()=>{if(!g){A(!0),f("accountPicker",{}),_("description",l.name);let e=l.accountsToParameterize;f("multi_params",e),b(C())}});const _=(e,h,u)=>{let p=i(o)||{};u?(p[u]||(p[u]={}),p[u][e]=h):p[e]=h,f(o,p),b(C())},S=async()=>{var T;let e={...i(o)};e.date||(e.date=Date.now());let h=new Date;e.comprobanteId=h.getFullYear()+""+(h.getMonth()+1)+"-"+B();let u=[];i("multi_params")&&((T=D(i("multi_params")))==null||T.map(async(w,H)=>{var E,z;let n={...e},N=i("multi_params")[w];n.type="debit",n.account=N.account,n.subAccount=N.subAccount,n.type=N.type,n.amount=N.amount*1,n.operationId=C();let O=(E=i("account_ids"))==null?void 0:E[N.account];O.payOrCollect&&(n.payOrCollect=O.payOrCollect);let L={query:"addOperationsHRG",params:{businessId:(z=i("profileUser"))==null?void 0:z.businessId},form:n};u.push(L)}));const p=u.map(async w=>{await G(w)});await Promise.all(p),t!=null&&t.modalID&&K({id:t==null?void 0:t.modalID}),setTimeout(()=>{f("multi_params",null),f(o,null),b(C()),c&&c()},400)};return d("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[d("div",{className:"_dsplFlx ",children:[s("p",{className:"form_title",children:"Asiento Manual"}),s("div",{className:"flexSpace"})]}),d("div",{className:"_dsplFlx ",children:[s(F,{init:(y=i(o))==null?void 0:y.date,label:"Fecha",width:120,updChanges:e=>_("date",e)}),s("div",{className:"flexSpace"}),s(F,{init:(x=i(o))==null?void 0:x.document,label:"Documento",width:120,updChanges:e=>_("document",e)})]}),s(F,{init:(r=i(o))==null?void 0:r.description,label:"Descripcion",width:520,updChanges:e=>_("description",e)}),d("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[d("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[s("div",{className:"tr_bar",children:"Cuenta"}),s("div",{className:"tr_bar",children:"Sub Cuenta"}),s("div",{className:"tr_bar"}),s("div",{className:"tr_bar",children:"Importe"})]}),i("multi_params")&&((v=D(i("multi_params")))==null?void 0:v.map((e,h)=>s(J,{idKey:e,data:i("multi_params")[e],updObs:b},e)))]}),d("div",{className:"_dsplFlx ",children:[s("div",{className:"flexSpace"}),((m=i(o))==null?void 0:m.document)&&U(i("multi_params"))?s("div",{className:"card",children:s("button",{className:"group_title addBtn purple",onClick:S,children:"Guardar"})}):null]})]})},J=({data:t,updObs:c,idKey:l})=>{var y,x;const[g,A]=I.exports.useState(0),a=r=>{b("amount",r,l),c(C())},b=(r,v,m)=>{let e=i("multi_params")||{};m?(e[m]||(e[m]={}),e[m][r]=v):e[r]=v,f("multi_params",e)};let _=(y=i("account_ids"))==null?void 0:y[t==null?void 0:t.account],S=(x=i("sub_account_ids"))==null?void 0:x[t==null?void 0:t.subAccount];return d("div",{className:"_dsplFlx hdr_bar",children:[s("div",{className:"tr_bar",style:{marginTop:10,fontWeight:600,color:t.type==="debit"?"#009688":"#c62828"},children:s(P,{data:_,color:t.type==="debit"?"#009688":"#c62828",labelField:"code",infoField:"name"})}),s("div",{className:"tr_bar",style:{marginTop:10},children:s(P,{data:S,color:t.type==="debit"?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"})}),s("div",{className:"tr_bar",style:{marginTop:10}}),s("div",{className:"tr_bar",children:s(F,{init:g,width:80,init:t==null?void 0:t.amount,updChanges:a})})]})},U=t=>{let c=0,l=t&&D(t);return l&&(l==null||l.map((g,A)=>{let a=t[g];(a==null?void 0:a.type)==="debit"?c+=(a==null?void 0:a.amount)*1:(a==null?void 0:a.type)==="credit"&&(c-=(a==null?void 0:a.amount)*1)})),l&&(l==null?void 0:l.length)>0&&c===0};export{X as default};
