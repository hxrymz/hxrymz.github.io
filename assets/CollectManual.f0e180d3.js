import{S as $,C as J,T as V,o as W,M as X,r as N,u as y,b as f,g as c,j as r,a as t,h as A,Q as Z,i as ee}from"./index.1ea4e0d9.js";/* empty css               */import{CloseModal as ce}from"./DialogHRM.70227492.js";import{S as te}from"./server_fetching.340b1b6f.js";/* empty css                  */const le=$();J();const S=V(),oe=W(),G=X(),s="new_cobro_comprobante",ue=({data:e,confirm:u})=>{var d,D,T,w,F,M,O,P;const[x,p]=N.exports.useState(!1),[I,_]=N.exports.useState(0);N.exports.useEffect(()=>{x||(p(!0),y("accountPicker",{}),_(f()))});const h=(l,i,m)=>{let o=c(s)||{};m?(o[m]||(o[m]={}),o[m][l]=i):o[l]=i,y(s,o),_(f())},n=async()=>{var E,k;let l=c(s),i=[];l.date?l.date=new Date(l.date).getTime():l.date=Date.now();let m=new Date;l.comprobanteId=m.getFullYear()+""+(m.getMonth()+1)+"-"+Z();let o={...l},K=ne(c("multi_collect_by_doc"));o.document=o.collectDocument,o.account=c("PaymentMethodAccount").account;let q=(E=c("account_ids"))==null?void 0:E[o.account];q.payOrCollect&&(o.payOrCollect=q.payOrCollect),o.subAccount=c("PaymentMethodAccount").subAccount,o.type="debit",o.amount=K*1,o.operationId=f();let z={query:"addOperationsHRG",params:{businessId:(k=c("profileUser"))==null?void 0:k.businessId},form:o};i.push(z);let v=c("multi_collect_by_doc")&&A(c("multi_collect_by_doc"));v&&(v==null||v.map((g,L)=>{var B,H,R,j;let a={...l},Q=c("multi_collect_by_doc")[g];a.document=g,a.account=(B=c("Acc2Collect"))==null?void 0:B.account,a.subAccount=(H=c("Acc2Collect"))==null?void 0:H.subAccount,a.customerId=(R=c("Acc2Collect"))==null?void 0:R.customerId,a.type="credit",a.amount=Q*1,a.payOrCollect="collect",a.operationId=f();let Y={query:"addOperationsHRG",params:{businessId:(j=c("profileUser"))==null?void 0:j.businessId},form:a};i.push(Y)}));const U=i.map(async g=>{await ee(g)});await Promise.all(U),e!=null&&e.modalID&&ce({id:e==null?void 0:e.modalID}),setTimeout(()=>{y("multi_collect_by_doc",null),y(s,null),_(f()),u&&u()},400)},C=(l,i)=>{y("PaymentMethodAccount",{account:l,subAccount:i})};let b=te(c("collect_by_doc"),"amount");return r("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[r("div",{className:"_dsplFlx ",children:[t("p",{className:"form_title",children:"Registrando Cobro"}),t("div",{className:"flexSpace"})]}),t("div",{className:"_dsplFlx ",children:r("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[t("div",{className:"flexSpace"}),t(oe,{data:[{label:"Cheque",id:"check"},{label:"Tarjeta",id:"card"}],active:((d=c(s))==null?void 0:d.paymentType)||"check",updSelect:l=>h("paymentType",l)}),t("div",{className:"flexSpace"})]})}),((D=c(s))==null?void 0:D.paymentType)==="card"?t(G,{query:"Cred",type:(T=c(s))==null?void 0:T.paymentType,handleClick:C}):t(G,{query:"Efectivo",type:(w=c(s))==null?void 0:w.paymentType,handleClick:C}),r("div",{className:"_dsplFlx ",children:[t(S,{init:(F=c(s))==null?void 0:F.date,label:"Fecha",width:120,updChanges:l=>h("date",l)}),t("div",{className:"flexSpace"}),t(S,{init:(M=c(s))==null?void 0:M.collectDocument,label:"Documento de Cobro",width:200,updChanges:l=>h("collectDocument",l)})]}),t(S,{init:(O=c(s))==null?void 0:O.description,label:"Descripcion",width:520,updChanges:l=>h("description",l)}),b?r("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[r("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[t("div",{className:"tr_bar",children:"Documento"}),t("div",{className:"tr_bar",children:"Balance"}),t("div",{className:"tr_bar"}),t("div",{className:"tr_bar",children:"Por Cobrar"})]}),c("collect_by_doc")&&((P=A(c("collect_by_doc")))==null?void 0:P.map((l,i)=>t(se,{idKey:l,data:c("collect_by_doc")[l],updObs:_},l)))]}):null,r("div",{className:"_dsplFlx ",children:[t("div",{className:"flexSpace"}),t("div",{className:"card",children:t("button",{onClick:n,children:"Guardar"})})]})]})},se=({data:e,updObs:u,idKey:x})=>{const[p,I]=N.exports.useState(0),_=n=>{I(n),h(e==null?void 0:e.document,n),u(f())},h=(n,C,b)=>{let d=c("multi_collect_by_doc")||{};b?(d[b]||(d[b]={}),d[b][n]=C):d[n]=C,y("multi_collect_by_doc",d)};return(e==null?void 0:e.amount)*1==0?null:r("div",{className:"_dsplFlx hdr_bar",children:[t("div",{className:"tr_bar",style:{marginTop:10},children:e==null?void 0:e.document}),r("div",{className:"tr_bar",style:{marginTop:10},children:["$",((e==null?void 0:e.amount)*1).toFixed(2)]}),t("div",{className:"tr_bar",style:{marginTop:10},children:p>(e==null?void 0:e.amount)?t("div",{className:"icon",children:t(le,{name:"alert",color:"#c62828"})}):null}),t("div",{className:"tr_bar",children:t(S,{init:p,width:80,updChanges:n=>_(n)})})]})},ne=e=>{var x;let u=0;return e&&((x=A(e))==null||x.map((p,I)=>{u+=e[p]*1})),u};export{ue as default};
