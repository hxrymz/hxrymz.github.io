import{G as I,I as S,l as h,_ as g,r as i,a as d,j as s,k as a,n as _,O as w,o as r,g as f,q as b,t as u}from"./index.9c26ac31.js";const B=I(),C=S(),A=h(()=>g(()=>import("./profit_loss_parametrizar.16037fb7.js"),["assets/profit_loss_parametrizar.16037fb7.js","assets/index.9c26ac31.js","assets/index.6ae0e3ca.css"])),N=h(()=>g(()=>import("./profit_loss_preview.2fd61dc0.js"),["assets/profit_loss_preview.2fd61dc0.js","assets/index.9c26ac31.js","assets/index.6ae0e3ca.css"])),T=({view:y})=>{const[k,p]=i.exports.useState(""),m=async()=>{var c,n;let o={query:"getScanBalanceSheet",params:{businessId:a("businessId"),":type":"PLS"},queryString:"type = :type"};const e=await _(u(),o);if(e&&e.data){let t=(c=w(e.data||{}))==null?void 0:c[0];r("profit_lose_frm",(n=e.data)==null?void 0:n[t]),p(f())}},x=async()=>{let o={query:"getAllAccountsByUserId",params:{businessId:a("businessId")}};const e=await _(u(),o);e&&e.data&&r("cuentaslist",b(e.data,"accountId"));let c={query:"getAllSubAccounts",params:{businessId:a("businessId")}};const t=await _(u(),c);t&&t.data&&(r("sub_cuentas_list",t.data),r("sub_cuentas_dict",b(t.data,"sub_accountId")))};i.exports.useEffect(()=>()=>{},[]),i.exports.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0),x(),m()},170)},[y]);const v=o=>{r("show_bal_form",o);let l=a("profit_lose_frm")||{};r("profit_lose_frm_backUp",{...l}),p(f())};return d("div",{className:"",children:[d("div",{className:"_dsplFlx ",style:{margin:"5px 15px 35px 0"},children:[s("div",{className:"_dsplFlx delete_icon launcicon",style:{marginRight:15,marginTop:5},children:s(C,{name:"printer",size:24,color:"#fff",tip:!0,tipMessage:"Imprimir",backgroundColorTooltip:"#f8f8f8",textColorTooltip:"#080808"})}),s("div",{className:"balance_title ",children:s("div",{children:"Balance Resultado"})}),s("div",{className:"flexSpace"}),s("div",{className:"sendBtn _dsplFlx spaceAround ",style:{marginTop:4},children:d("div",{className:"in_stock_switch _dsplFlx",children:[s("div",{className:"in_stock_switch_btn",children:s(B,{initvalue:a("show_bal_form"),keyCode:77,updChange:v})}),s("span",{className:"sw_rgh_span",children:"Parametrizar Balance Resultado"})]})})]}),a("show_bal_form")?s(A,{refreshlist:m}):s(N,{})]})};export{T as default};
