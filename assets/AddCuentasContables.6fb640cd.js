import{B as v,U as N,r as u,j as t,a as d,k as s,o as p,g,G as k,C as w,x as S}from"./index.2d0b3e7c.js";const h=v(),o=N(),n="ctscont",F=({data:_,refreshlist:b})=>{var c;const{modalID:i}=_||{},[x,y]=u.exports.useState(!1),[I,C]=u.exports.useState(0),a=(e,r)=>{let l=s(n)||{};l[e]=r,p(n,l),x&&y(!1),C(g())},f=async()=>{let e=s(n)||{};e.accountId=g();let r={query:"addAccounts",params:{businessId:s("businessId")},form:e};const m=await k(S(),r);m&&m.data&&(p(n,{}),w({id:i}),b())};return t("div",{...i?{"dialog-key-id":i}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:d("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:"20px 68px 40px",minWidth:560,marginBottom:1},children:[t("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:t("div",{children:"Crear Nueva Cuenta"})}),t(o,{validationMsg:"debe contener entre 3 y 5 caracteres numericos.",validation:{reqired:!0,minLength:3,maxLength:5},type:"number",placeholder:"Cuenta",field:"code",updChange:e=>a("code",e)}),t(o,{validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",field:"name",placeholder:"Nombre de cuenta",updChange:e=>a("name",e)}),d("div",{className:"in_stock_switch _dsplFlx",style:{marginTop:10},children:[t("div",{className:"in_stock_switch_btn",children:t(h,{initvalue:(c=s(n))==null?void 0:c.isDebt,keyCode:77,updChange:e=>a("isDebt",e)})}),t("span",{className:"sw_rgh_span",children:"Es una Cuenta de Debito"})]}),d("div",{className:"in_stock_switch _dsplFlx",style:{marginTop:10},children:[t("span",{className:"sw_rgh_span",style:{margin:"2px 5px 0 0"},children:"Real"}),t("div",{className:"in_stock_switch_btn",children:t(h,{keyCode:71,updChange:e=>a("isNominal",e)})}),t("span",{className:"sw_rgh_span",style:{margin:"2px 0 0 5px"},children:"Nominal"})]}),t(o,{validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minValue:0,maxValue:26},type:"number",field:"line",placeholder:"Fila en el balance",updChange:e=>a("line",e)}),t("button",{className:"btn login_button btn_submit btn_small",type:"submit",autocomplete:"off",tabindex:"0","data-uia":"login-submit-button",onClick:f,children:"Agregar"})]})})};export{F as default};
