import{S as Oc,C as qc,T as Ec,o as Hc,K as Rc,M as Bc,r as S,u as r,b as p,g as c,j as t,a as e,h as I,L as Gc,i as Kc}from"./index.9d80a6be.js";/* empty css               */import{CloseModal as jc}from"./DialogHRM.691362e1.js";import{S as Uc}from"./server_fetching.d11ad7c6.js";/* empty css                  */const kc=Oc();qc();const N=Ec(),zc=Hc(),Sc=Rc(),Lc=Bc(),m="new_cobro_comprobante",Zc=({data:o,confirm:_})=>{var M,w,T,O,q,E,H,R,B,G,K,j,U,k,z,L,W,Y,$,J,Q,V,X,Z,cc,ec,nc,oc,tc,sc,ac,lc,ic,dc,uc,mc,rc,pc,hc;const[f,A]=S.exports.useState(!1),[D,h]=S.exports.useState(0);S.exports.useEffect(()=>{f||(A(!0),r("PaymentMethodAccount",null),r("accountPicker",{}),h(p()))});const C=(n,s,a)=>{let l=c(m)||{};a?(l[a]||(l[a]={}),l[a][n]=s):l[n]=s,r(m,l),h(p())},y=async()=>{var _c,bc,vc,Ac,Cc,fc;let n=c(m),s=[],a=new Date;n.date?(a=new Date(n.date),n.date=new Date(n.date).getTime()):n.date=Date.now(),n.comprobanteId=a.getFullYear()+""+(a.getMonth()+1)+"-"+Gc();let l="",g=c("multi_pay_by_doc")&&I(c("multi_pay_by_doc"));if(g&&(g==null||g.map((d,P)=>{var Nc,xc,gc,Pc;let u={...n},wc=c("multi_pay_by_doc")[d];u.document=d,l+=d+"  ",u.account=(Nc=c("Acc2Pay"))==null?void 0:Nc.account,u.subAccount=(xc=c("Acc2Pay"))==null?void 0:xc.subAccount,u.providerId=(gc=c("Acc2Pay"))==null?void 0:gc.providerId,u.type="debit",u.amount=wc*1,u.payOrCollect="pay",u.operationId=p();let Tc={query:"addOperationsHRG",params:{businessId:(Pc=c("profileUser"))==null?void 0:Pc.businessId},form:u};s.push(Tc)})),(_c=c("ComissionAccount"))!=null&&_c.account){let d={...n};i.document=i.collectDocument,i.collectDocument=l,d.account=c("ComissionAccount").account;let P=(bc=c("account_ids"))==null?void 0:bc[d.account];P.payOrCollect&&(d.payOrCollect=P.payOrCollect),d.subAccount=c("ComissionAccount").subAccount,d.type="debit",d.amount=c("ComissionAccount").amount*1,d.operationId=p();let u={query:"addOperationsHRG",params:{businessId:(vc=c("profileUser"))==null?void 0:vc.businessId},form:d};s.push(u)}let i={...n},Ic=Yc(c("multi_pay_by_doc"));i.document=i.collectDocument,i.collectDocument=l,i.account=c("PaymentMethodAccount").account;let yc=(Ac=c("account_ids"))==null?void 0:Ac[i.account];yc.payOrCollect&&(i.payOrCollect=yc.payOrCollect),i.subAccount=c("PaymentMethodAccount").subAccount,i.type="credit",i.amount=Ic*1,(Cc=c("ComissionAccount"))!=null&&Cc.amount&&(i.amount+=c("ComissionAccount").amount*1),i.operationId=p();let Fc={query:"addOperationsHRG",params:{businessId:(fc=c("profileUser"))==null?void 0:fc.businessId},form:i};s.push(Fc),console.log(s);const Mc=s.map(async d=>{const u=await Kc(d);u&&console.log(u)});await Promise.all(Mc),o!=null&&o.modalID&&jc({id:o==null?void 0:o.modalID}),setTimeout(()=>{r("multi_pay_by_doc",null),r(m,null),h(p()),_&&_()},400)},x=n=>{r("ComissionAccount",null),r("PaymentMethodAccount",null),C("paymentType",n),h(p())},b=(n,s)=>{r("PaymentMethodAccount",{account:n,subAccount:s}),h(p())},v=(n,s)=>{r("ComissionAccount",{account:n,subAccount:s}),h(p())},Dc=(n,s,a)=>{let l=c("ComissionAccount")||{};a?(l[a]||(l[a]={}),l[a][n]=s):l[n]=s,r("ComissionAccount",l),h(p())};let F=Uc(c("toPay_by_doc"),"amount");return t("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[t("div",{className:"_dsplFlx ",children:[e("p",{className:"form_title",children:"Registrando Pago"}),e("div",{className:"flexSpace"})]}),e("div",{className:"_dsplFlx ",children:t("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[e("div",{className:"flexSpace"}),e(zc,{data:[{label:"Cheque",id:"check"},{label:"Tarjeta",id:"card"}],active:((M=c(m))==null?void 0:M.paymentType)||"check",updSelect:n=>x(n)}),e("div",{className:"flexSpace"})]})}),((w=c(m))==null?void 0:w.paymentType)==="card"?e(Sc,{query:"Cred",type:(T=c(m))==null?void 0:T.paymentType,handleClick:b}):e(Sc,{query:"Efectivo",type:(O=c(m))==null?void 0:O.paymentType,handleClick:b}),t("div",{className:"_dsplFlx",children:[e("div",{className:"flexSpace"}),(q=c("PaymentMethodAccount"))!=null&&q.account?t("div",{className:" acc_dtls",children:[t("div",{className:"_dsplFlx",children:[e("div",{className:"code",style:{color:"#646cff"},children:(R=(H=c("account_ids"))==null?void 0:H[(E=c("PaymentMethodAccount"))==null?void 0:E.account])==null?void 0:R.code}),e("div",{className:"name",children:(K=(G=c("account_ids"))==null?void 0:G[(B=c("PaymentMethodAccount"))==null?void 0:B.account])==null?void 0:K.name})]}),e("div",{className:"flexSpace"}),(j=c("PaymentMethodAccount"))!=null&&j.subAccount?t("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[e("div",{className:"code",children:(z=(k=c("sub_account_ids"))==null?void 0:k[(U=c("PaymentMethodAccount"))==null?void 0:U.subAccount])==null?void 0:z.subAccount}),e("div",{className:"name",children:(Y=(W=c("sub_account_ids"))==null?void 0:W[(L=c("PaymentMethodAccount"))==null?void 0:L.subAccount])==null?void 0:Y.subAccountName})]}):null]}):null]}),(($=c(m))==null?void 0:$.paymentType)==="card"&&((J=c("PaymentMethodAccount"))==null?void 0:J.account)?t("div",{className:"",children:[e("div",{className:"separator"}),(Q=c("ComissionAccount"))!=null&&Q.account?t("div",{className:"",children:[t("div",{className:" acc_dtls",children:[t("div",{className:"_dsplFlx",children:[e("div",{className:"code",style:{color:"#646cff"},children:(Z=(X=c("account_ids"))==null?void 0:X[(V=c("ComissionAccount"))==null?void 0:V.account])==null?void 0:Z.code}),e("div",{className:"name",children:(nc=(ec=c("account_ids"))==null?void 0:ec[(cc=c("ComissionAccount"))==null?void 0:cc.account])==null?void 0:nc.name})]}),e("div",{className:"flexSpace"}),(oc=c("ComissionAccount"))!=null&&oc.subAccount?t("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[e("div",{className:"code",children:(ac=(sc=c("sub_account_ids"))==null?void 0:sc[(tc=c("ComissionAccount"))==null?void 0:tc.subAccount])==null?void 0:ac.subAccount}),e("div",{className:"name",children:(dc=(ic=c("sub_account_ids"))==null?void 0:ic[(lc=c("ComissionAccount"))==null?void 0:lc.subAccount])==null?void 0:dc.subAccountName})]}):null]}),t("div",{className:"_dsplFlx",children:[e("div",{className:"flexSpace"}),e("div",{style:{maxWidth:120},children:e(N,{init:(uc=c("ComissionAccount"))==null?void 0:uc.amount,label:"comision",width:80,updChanges:n=>Dc("amount",n)})}),e("div",{className:"flexSpace"})]})]}):e(Lc,{placeholder:"buscar cuenta de comision bancaria ",handleClick:v}),e("div",{className:"separator"})]}):null,t("div",{className:"_dsplFlx ",children:[e(N,{init:(mc=c(m))==null?void 0:mc.date,label:"Fecha",width:120,updChanges:n=>C("date",n)}),e("div",{className:"flexSpace"}),e(N,{init:(rc=c(m))==null?void 0:rc.collectDocument,label:"Documento de Cobro",width:200,updChanges:n=>C("collectDocument",n)})]}),e(N,{init:(pc=c(m))==null?void 0:pc.description,label:"Descripcion",width:520,updChanges:n=>C("description",n)}),F?t("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[t("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[e("div",{className:"tr_bar",children:"Documento"}),e("div",{className:"tr_bar",children:"Balance"}),e("div",{className:"tr_bar"}),e("div",{className:"tr_bar",children:"Por Pagar"})]}),F&&c("toPay_by_doc")&&((hc=I(c("toPay_by_doc")))==null?void 0:hc.map((n,s)=>e(Wc,{idKey:n,data:c("toPay_by_doc")[n],updObs:h},n)))]}):null,t("div",{className:"_dsplFlx ",children:[e("div",{className:"flexSpace"}),e("div",{className:"card",children:e("button",{onClick:y,children:"Guardar"})})]})]})},Wc=({data:o,updObs:_,idKey:f})=>{const[A,D]=S.exports.useState(0),h=y=>{D(y),C(o==null?void 0:o.document,y),_(p())},C=(y,x,b)=>{let v=c("multi_pay_by_doc")||{};b?(v[b]||(v[b]={}),v[b][y]=x):v[y]=x,r("multi_pay_by_doc",v)};return(o==null?void 0:o.amount)*1===0?null:t("div",{className:"_dsplFlx hdr_bar",children:[e("div",{className:"tr_bar",style:{marginTop:10},children:o==null?void 0:o.document}),t("div",{className:"tr_bar",style:{marginTop:10},children:["$",((o==null?void 0:o.amount)*1).toFixed(2)]}),e("div",{className:"tr_bar",style:{marginTop:10},children:A>(o==null?void 0:o.amount)?e("div",{className:"icon",children:e(kc,{name:"alert",color:"#c62828"})}):null}),e("div",{className:"tr_bar",children:e(N,{init:A,width:80,updChanges:y=>h(y)})})]})},Yc=o=>{var f;let _=0;return o&&((f=I(o))==null||f.map((A,D)=>{_+=o[A]*1})),_};export{Zc as default};
