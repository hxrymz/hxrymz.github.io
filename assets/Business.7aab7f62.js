import{I as G,x as K,l as Q,T as R,S as W,U as Y,r as f,a as e,n as Z,j as g,k as a,o as ee,q as y,t as q,v as I,w as se,A as F,g as S,C as D,D as te}from"./index.81185f1e.js";const J=G(),ie=K(),P=Q();R();const ne=W(),k=Y(),o="ctscont",ue=({view:i})=>{var u,v,b,x,h;const[s,n]=f.exports.useState(""),[p,d]=f.exports.useState(""),t=async()=>{let l=a("getAllBusiness_last_request")||0;if(console.log("getAllBusiness",l),l<Date.now()){y("getAllBusiness_last_request",Date.now()+150);let r={query:"getAllBusiness",params:{":isActive":!0},queryString:"isActive = :isActive"};const _=await q(I(),r);console.log(_),_&&_.data&&(_.data.error||(y("businessArr",_.data),y("businesslist",se(_.data,"businessId"))))}};if(f.exports.useEffect(()=>()=>{},[]),!Z())return e("div",{children:"No tiene privilegios para usar esta opcion"});const N=l=>{let r={};r.zIndex=450,r.props={item:l,minHeight:"1vh",overlay:!0},r.content=e(ae,{refreshlist:t}),F(r)},c=()=>ee("businessListFilter",[a("businessArr"),s,a("showAll_business")],()=>{var $,M;let l="name",r="code",L="subAccount";const _=m=>{var O,z,T,E,U,H,j,V;let w=(s==null?void 0:s.toLowerCase())&&((z=(O=m==null?void 0:m[l])==null?void 0:O.toLowerCase())==null?void 0:z.indexOf(s.toLowerCase()))>=0,A=(s==null?void 0:s.toLowerCase())&&((U=(E=(T=m==null?void 0:m[r])==null?void 0:T.toString())==null?void 0:E.toLowerCase())==null?void 0:U.indexOf(s.toLowerCase()))>=0,B=(s==null?void 0:s.toLowerCase())&&((V=(j=(H=m==null?void 0:m[L])==null?void 0:H.toString())==null?void 0:j.toLowerCase())==null?void 0:V.indexOf(s.toLowerCase()))>=0;return a("showAll_business")||w||A||B?m:null},X=(m,w)=>{let A=m==null?void 0:m[r],B=w==null?void 0:w[r];return A<B?-1:A>B?1:0};return(M=($=a("businessArr"))==null?void 0:$.map(_))==null?void 0:M.sort(X)});f.exports.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0),t()},170)},[i]);const C=l=>{y("showAll_business",l),d(S())};return g("div",{className:"",style:{marginLeft:"2vw"},children:[e("div",{className:"login_title ",children:e("div",{children:"Business"})}),g("div",{className:"_dsplFlx ",children:[e("div",{className:"login_title ",children:e(ie,{lbl:"Agregar Negocio",icon:"account",theme:"",updChanges:N})}),e("div",{className:"sendBtn _dsplFlx spaceAround ",style:{marginTop:8},children:g("div",{className:"in_stock_switch _dsplFlx",children:[e("div",{className:"in_stock_switch_btn",children:e(P,{initvalue:a("showAll_business"),keyCode:77,updChange:C})}),e("span",{className:"sw_rgh_span",children:"Mostrar Todas"})]})}),e("div",{className:"flexSpace"}),e("div",{className:"asientoqty",children:`${(u=c())==null?void 0:u.length} de ${(v=c())!=null&&v.length?((b=c())==null?void 0:b.length)-1:0}`})]}),e("div",{className:" _search_MrgV  ",children:a("showAll_business")?null:e("div",{className:"years_card ",style:{marginLeft:"2vw"},children:e(ne,{updChanges:n,placeholderCode:"buscar..."})})}),e("div",{className:"_dsplFlx  ",children:e("div",{className:"_dsplFlx asiento_bx_details header",children:g("div",{className:"_dsplFlx ",children:[e("div",{className:"in_stock_switch",style:{width:300},children:e("div",{children:"Nombre Negocio"})}),e("div",{className:"in_stock_switch",style:{width:300},children:e("div",{children:"descripcion"})})]})})}),e("div",{className:"businesslist",children:((x=c())==null?void 0:x.length)>0&&((h=c())==null?void 0:h.map(l=>l&&e(re,{item:l,refreshlist:t})))})]})},ae=({data:i,refreshlist:s})=>{const{modalID:n}=i||{},[p,d]=f.exports.useState(!1),[t,N]=f.exports.useState(0),c=(u,v)=>{let b=a(o)||{};b[u]=v,y(o,b),p&&d(!1),N(S())};return e("div",{...n?{"dialog-key-id":n}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:g("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:"20px 68px 40px"},children:[e("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:e("div",{children:"Crear Negocio"})}),e(k,{validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",field:"name",placeholder:"Nombre del negocio",updChange:u=>c("name",u)}),e(k,{validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",field:"description",placeholder:"Descripcion",updChange:u=>c("description",u)}),e("button",{className:"btn login_button btn_submit btn_small",type:"submit",autocomplete:"off",tabindex:"0","data-uia":"login-submit-button",onClick:async()=>{let u=a(o)||{};u.businessId=S(),u.isActive=!0;let v={query:"addBusiness",form:u};const x=await q(I(),v);x&&x.data&&(y(o,{}),D({id:n}),s())},children:"Agregar"})]})})},le=({data:i,refreshlist:s})=>{var v,b,x;const{modalID:n}=i||{},[p,d]=f.exports.useState(!1),[t,N]=f.exports.useState(0),c=(h,l)=>{let r=a(o)||{};r[h]=l,y(o,r),p&&d(!1),N(S())};let C=["code","name","isDebt","subAccount","subAccountName"];const u=async()=>{var l,r;let h={query:"updateBusiness",params:{accountId:(l=a(o))==null?void 0:l.accountId},data2update:oe(C,a(o),a(o+"_backUp"))};if((r=a(o))!=null&&r.accountId){const _=await q(I(),h);_&&_.data&&(D({id:n}),s())}};return e("div",{...n?{"dialog-key-id":n}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:g("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:"20px 68px 40px"},children:[e("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:e("div",{children:"Actualizar"})}),e(k,{init:(v=a(o))==null?void 0:v.name,validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",field:"name",placeholder:"Nombre del negocio",updChange:h=>c("name",h)}),e(k,{init:(b=a(o))==null?void 0:b.description,validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",field:"description",placeholder:"Descripcion",updChange:h=>c("description",h)}),g("div",{className:"in_stock_switch _dsplFlx",style:{marginTop:10},children:[e("div",{className:"in_stock_switch_btn",children:e(P,{initvalue:(x=a(o))==null?void 0:x.isActive,keyCode:77,updChange:h=>c("isActive",h)})}),e("span",{className:"sw_rgh_span",children:"Esta Activo"})]}),e("button",{className:"btn login_button btn_submit btn_small",type:"submit",autocomplete:"off",tabindex:"0","data-uia":"login-submit-button",onClick:u,children:"Actualizar"})]})})},re=({item:i,refreshlist:s})=>{const n=async(t,N)=>{},p=()=>{y(o,i),y(o+"_backUp",JSON.stringify(i));let t={};t.zIndex=450,t.props={item:i,minHeight:"1vh",overlay:!0},t.content=e(le,{updBusiness:n,refreshlist:s}),F(t)},d=()=>{let t={};t.zIndex=450,t.props={item:i,minHeight:"1vh",overlay:!0},t.content=e(ce,{confirm:()=>s()}),F(t)};return e("div",{className:"_dsplFlx asiento_details ",style:{},children:g("div",{className:"_dsplFlx asiento_bx_details ",style:{},children:[g("div",{className:"_dsplFlx ",onClick:p,children:[e("div",{className:"in_stock_switch",style:{width:300},children:e("div",{className:"sw_rgh_span",children:i.name})}),e("div",{className:"in_stock_switch",style:{width:300},children:e("div",{className:"sw_rgh_span",children:i.description})})]}),e("div",{className:"flexSpace"}),g("div",{className:"_dsplFlx",children:[e("div",{className:"_dsplFlx delete_icon",children:e(J,{name:"edit",size:24,color:"#b00000"})}),e("div",{className:"_dsplFlx delete_icon",onClick:d,children:e(J,{name:"delete",size:24,color:"#b00000"})})]})]})})},ce=({data:i,confirm:s})=>{const{modalID:n,item:p}=i||{},d=async()=>{let t={query:"deleteBusiness",params:{id:p.id}};const c=await te(I(),t);c&&c.data&&(D({id:n}),s(p))};return g("div",{...n?{"dialog-key-id":n}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:[e("div",{className:"login_title ",style:{margin:"1vw"},children:e("div",{children:`Borrar Asiento "${p.name}"`})}),e("div",{className:"delete_alert_t2 ",children:e("div",{children:"Una vez borrado no podras recuperarlo"})}),e("div",{className:"sendBtn _dsplFlx spaceAround",children:e("div",{className:"play-button-wrapper",style:{margin:"2vw 1vw 0"},children:e("div",{className:"play-button",onClick:d,children:e("div",{className:"lbl",children:"Borrar"})})})})]})};function oe(i,s,n){let p=JSON.parse(n),d=null;return i&&i.map((t,N)=>{s[t]!==p[t]&&(d||(d={}),d[t]=s[t])}),d}export{oe as compareJson,ue as default};
