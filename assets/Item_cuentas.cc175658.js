import{I as S,l as f,_ as g,X as k,j as n,a as e,k as c,o as d,O as N}from"./index.0d0fbac8.js";import{s as w}from"./calbacks.5be84657.js";const E=S(),F=f(()=>g(()=>import("./UpdateCuentasContables.2f836266.js"),["assets/UpdateCuentasContables.2f836266.js","assets/index.0d0fbac8.js","assets/index.5da7cfb4.css","assets/calbacks.5be84657.js"])),O=f(()=>g(()=>import("./UpdateSubCuentasContables.729f78bc.js"),["assets/UpdateSubCuentasContables.729f78bc.js","assets/index.0d0fbac8.js","assets/index.5da7cfb4.css","assets/calbacks.5be84657.js"])),I="ctscont",x="sub_ctscont",L=({item:s,refreshlist:u})=>{var r,i,_,h,p,v,b,y;let C=k();const A=()=>{d(x,s),d(x+"_backUp",JSON.stringify(s));let a={};a.zIndex=450,a.props={item:s,minHeight:"1vh",overlay:!0},a.content=n(O,{refreshlist:u}),N(a)},D=()=>{var t,l,o;d(I,(t=c("cuentaslist"))==null?void 0:t[s==null?void 0:s.accountId]),d(I+"_backUp",JSON.stringify((l=c("cuentaslist"))==null?void 0:l[s==null?void 0:s.accountId]));let a={};a.zIndex=450,a.props={item:(o=c("cuentaslist"))==null?void 0:o[s==null?void 0:s.accountId],minHeight:"1vh",overlay:!0},a.content=n(F,{refreshlist:u}),N(a)};return n("div",{className:"_dsplFlx cuenta_details ",style:{},children:e("div",{className:"_dsplFlx cuenta_bx_details ",style:{},children:[n("div",{className:"_dsplFlx",children:n("div",{className:"_dsplFlx delete_icon launcicon",style:{marginRight:17},onClick:async()=>{var o;let a=(o=c("cuentaslist"))==null?void 0:o[s==null?void 0:s.accountId],t=a==null?void 0:a.accountId;s!=null&&s.subAccount&&(t=s==null?void 0:s.sub_accountId),d("submayor_list",{});let l={...s};l.code=a==null?void 0:a.code,l.name=a==null?void 0:a.name,l.isDebt=a==null?void 0:a.isDebt,d("submayor_item",l),w(""),C({search:`?view=submayor&acc=${t}`})},children:n(E,{name:"text",size:24,color:"#fff",tip:!0,tipMessage:"Submayor",backgroundColorTooltip:"#080808"})})}),s.subAccount?n("div",{className:"_asiento_item",style:{width:220}}):e("div",{className:"_dsplFlx ",onClick:D,children:[n("div",{className:"_asiento_item",style:{width:140},children:n("div",{className:(i=(r=c("cuentaslist"))==null?void 0:r[s==null?void 0:s.accountId])!=null&&i.isDebt?"_deb":"_cred",children:(h=(_=c("cuentaslist"))==null?void 0:_[s==null?void 0:s.accountId])!=null&&h.isDebt?"Cuenta de Debito":"Cuenta de Credito"})}),n("div",{className:"_asiento_item",style:{width:50},children:n("div",{children:(v=(p=c("cuentaslist"))==null?void 0:p[s==null?void 0:s.accountId])==null?void 0:v.code})}),n("div",{className:"_asiento_item",style:{width:300},children:n("div",{children:(y=(b=c("cuentaslist"))==null?void 0:b[s==null?void 0:s.accountId])==null?void 0:y.name})})]}),s.subAccount?e("div",{className:"_dsplFlx ",onClick:A,children:[n("div",{className:"_asiento_item",style:{width:100},children:e("div",{children:[s.subAccount," "]})}),n("div",{className:"_asiento_item",style:{width:300},children:n("div",{children:s.subAccountName})})]}):null,n("div",{className:"flexSpace"})]})})};export{L as default};
