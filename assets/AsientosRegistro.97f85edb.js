import{I as k,V as M,Q as L,r as v,j as t,a as m,k as o,p as y,o as _,J as f,G as q,C as w,O as B,x as F}from"./index.99da3eb9.js";import{b as A}from"./index.8bfbd684.js";const O=k(),g=M(),W=L(),n="add_entries",z=({data:c,refreshlist:l,item:a})=>{var h,b;const{modalID:r}=c||{},[i,s]=v.exports.useState(!1),[I,N]=v.exports.useState(0),u=(e,d)=>{let p=o(n)||{};p[e]=d,_(n,p),i&&s(!1),N(f())},S=async()=>{let e=o(n)||{};e.operationId=f(),e.creditSubAccount=a.creditAccount,e.debitSubAccount=a.debitAccount,e.creditAccount=A(a.creditAccount),e.debitAccount=A(a.debitAccount),e.entryName=a.name,e!=null&&e.date||(e.date=Date.now());let d={query:"addOperationsHRG",params:{businessId:o("businessId")},form:e};const x=await q(F(),d);x&&x.data&&(_(n,{}),w({id:r}),l())},C=e=>{u("date",new Date(e).getTime())},D=()=>{var d;let e={};e.zIndex=450,e.props={minHeight:"1vh",overlay:!0,zIndex:99999},e.content=t(W,{valueUpdate:C,initValue:(d=o(n))==null?void 0:d.date}),B(e)};return t("div",{...r?{"dialog-key-id":r}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:m("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:"20px 68px 40px",minWidth:720,marginBottom:1},children:[t("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:t("div",{children:"Registrando asiento"})}),t("div",{className:"login_title ",style:{marginLeft:1,textAlign:"right"},children:t("div",{children:a==null?void 0:a.name})}),m("div",{className:"_dsplFlx  ",children:[t("div",{style:{margin:"0px 0 20px ",maxWidth:"40%"},children:m("div",{className:"cuenta_asiento _dsplFlx",onClick:D,children:[t("div",{style:{padding:"2px 7px 2px 0"},children:t(O,{name:"calendar",size:24,color:"#b00000"})}),t("div",{children:(h=o(n))!=null&&h.date?y((b=o(n))==null?void 0:b.date):y(Date.now())})]})}),t("div",{className:"flexSpace"}),t("div",{style:{maxWidth:"28%"},children:t(g,{validationMsg:"debe contener entre 6 y 50 caracteres.",validation:{reqired:!0,minLength:6,maxLength:50},type:"text",placeholder:"Documento",updChange:e=>u("document",e)})}),t("div",{className:"flexSpace"}),t("div",{style:{maxWidth:"28%"},children:t(g,{validationMsg:"debe ser mayor que 0.",validation:{reqired:!0,minValue:.01,number:!0},type:"number",placeholder:"Importe",updChange:e=>u("amount",e)})})]}),t(g,{validationMsg:"debe contener menos de 200 caracteres.",validation:{reqired:!0,maxLength:200},type:"text",placeholder:"Descripcion",updChange:e=>u("description",e)}),t("button",{className:"btn login_button btn_submit btn_small",type:"submit",autocomplete:"off",tabindex:"0","data-uia":"login-submit-button",onClick:S,children:"Agregar"})]})})};function H(c,l,a){let r=JSON.parse(a),i=null;return c&&c.map((s,I)=>{l[s]!==r[s]&&(i||(i={}),i[s]=l[s])}),i}export{H as compareJson,z as default};
