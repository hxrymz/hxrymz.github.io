import{I as k,l as D,_ as S,Y as w,j as n,a as i,k as c,o as e,O as C}from"./index.80f87a12.js";import{s as O}from"./calbacks.1d1358f3.js";const E=k(),F=D(()=>S(()=>import("./UpdateCuentasContables.10f5dcd5.js"),["assets/UpdateCuentasContables.10f5dcd5.js","assets/index.80f87a12.js","assets/index.1aca3d94.css"])),U=D(()=>S(()=>import("./UpdateSubCuentasContables.dca60252.js"),["assets/UpdateSubCuentasContables.dca60252.js","assets/index.80f87a12.js","assets/index.1aca3d94.css"])),g="ctscont",A="sub_ctscont",z=({item:s,refreshlist:t})=>{var h,v,b,y,N,I,x,f;let _=w();const p=()=>{e(A,s),e(A+"_backUp",JSON.stringify(s));let a={};a.zIndex=450,a.props={item:s,minHeight:"1vh",overlay:!0},a.content=n(U,{refreshlist:t}),C(a)},d=()=>{var u,l,r;e(g,(u=c("cuentaslist"))==null?void 0:u[s==null?void 0:s.accountId]),e(g+"_backUp",JSON.stringify((l=c("cuentaslist"))==null?void 0:l[s==null?void 0:s.accountId]));let a={};a.zIndex=450,a.props={item:(r=c("cuentaslist"))==null?void 0:r[s==null?void 0:s.accountId],minHeight:"1vh",overlay:!0},a.content=n(F,{refreshlist:t}),C(a)};return n("div",{className:"_dsplFlx cuenta_details ",style:{},children:i("div",{className:"_dsplFlx cuenta_bx_details ",style:{},children:[n("div",{className:"_dsplFlx",children:n("div",{className:"_dsplFlx delete_icon launcicon",style:{marginRight:17},onClick:async()=>{var r;let a=(r=c("cuentaslist"))==null?void 0:r[s==null?void 0:s.accountId],u=a==null?void 0:a.accountId;s!=null&&s.subAccount&&(u=s==null?void 0:s.sub_accountId),e("submayor_list",{});let l={...s};l.code=a==null?void 0:a.code,l.name=a==null?void 0:a.name,l.isDebt=a==null?void 0:a.isDebt,e("submayor_item",l),O(""),_({search:`?view=submayor&acc=${u}`})},children:n(E,{name:"send",size:24,color:"#fff"})})}),s.subAccount?n("div",{className:"_asiento_item",style:{width:220}}):i("div",{className:"_dsplFlx ",onClick:d,children:[n("div",{className:"_asiento_item",style:{width:140},children:n("div",{className:(v=(h=c("cuentaslist"))==null?void 0:h[s==null?void 0:s.accountId])!=null&&v.isDebt?"_deb":"_cred",children:(y=(b=c("cuentaslist"))==null?void 0:b[s==null?void 0:s.accountId])!=null&&y.isDebt?"Cuenta de Debito":"Cuenta de Credito"})}),n("div",{className:"_asiento_item",style:{width:50},children:n("div",{children:(I=(N=c("cuentaslist"))==null?void 0:N[s==null?void 0:s.accountId])==null?void 0:I.code})}),n("div",{className:"_asiento_item",style:{width:300},children:n("div",{children:(f=(x=c("cuentaslist"))==null?void 0:x[s==null?void 0:s.accountId])==null?void 0:f.name})})]}),s.subAccount?i("div",{className:"_dsplFlx ",onClick:p,children:[n("div",{className:"_asiento_item",style:{width:100},children:i("div",{children:[s.subAccount," "]})}),n("div",{className:"_asiento_item",style:{width:300},children:n("div",{children:s.subAccountName})})]}):null,n("div",{className:"flexSpace"})]})})};function L(s,t,_){let p=JSON.parse(_),d=null;return s&&s.map((o,h)=>{t[o]!==p[o]&&(d||(d={}),d[o]=t[o])}),d}export{L as compareJson,z as default};
