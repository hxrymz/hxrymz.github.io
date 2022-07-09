import{I as ee,b as se,w as te,M as ne,S as ie,r as w,j as e,z as ae,a as y,e as h,B as Q,D as O,E as M,p as L,h as C,O as D,H as F,J as $,k as le}from"./index.20bf7686.js";import{I}from"./LoginInput.8253be71.js";import"./validations.6c3f96aa.js";/* empty css                    */const G=ee(),re=se(),R=te();ne();const ce=ie(),d="ctscont",be=({view:s})=>{var m,v,o,x,b;const[i,r]=w.exports.useState(null),[t,u]=w.exports.useState(""),[g,N]=w.exports.useState(""),c=async()=>{let p={query:"getAllBusiness",params:{":isActive":!0},queryString:"isActive = :isActive"};const k=await M(L(),p);k&&k.data&&(k.data.error||(C("businessArr",k.data),C("businesslist",convertArray2Obj(k.data,"businessId"))))};if(w.exports.useEffect(()=>()=>{},[]),!ae())return e("div",{children:"No tiene privilegios para usar esta opcion"});const a=p=>{let _={};_.zIndex=450,_.props={item:p,minHeight:"1vh",overlay:!0},_.content=e(oe,{refreshlist:c}),D(_)},n=()=>Q("businessListFilter",[i,t,h("showAll_business")],()=>{var q,z;let p="name",_="code",k="subAccount";const Y=f=>{var E,H,T,U,j,J,V,W,P,K,X;let A=(t==null?void 0:t.toLowerCase())&&((T=(H=(E=i[f])==null?void 0:E[p])==null?void 0:H.toLowerCase())==null?void 0:T.indexOf(t.toLowerCase()))>=0,B=(t==null?void 0:t.toLowerCase())&&((V=(J=(j=(U=i[f])==null?void 0:U[_])==null?void 0:j.toString())==null?void 0:J.toLowerCase())==null?void 0:V.indexOf(t.toLowerCase()))>=0,S=(t==null?void 0:t.toLowerCase())&&((X=(K=(P=(W=i[f])==null?void 0:W[k])==null?void 0:P.toString())==null?void 0:K.toLowerCase())==null?void 0:X.indexOf(t.toLowerCase()))>=0;return h("showAll_business")||A||B||S?i[f]:null},Z=(f,A)=>{console.log(f);let B=f==null?void 0:f[_],S=A==null?void 0:A[_];return B<S?-1:B>S?1:0};return i&&((z=(q=O(i))==null?void 0:q.map(Y))==null?void 0:z.sort(Z))});w.exports.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0),c()},170)},[s]);const l=p=>{C("showAll_business",p),N(F())};return y("div",{className:"",style:{marginLeft:"2vw"},children:[e("div",{className:"login_title ",children:e("div",{children:"Business"})}),y("div",{className:"_dsplFlx ",children:[e("div",{className:"login_title ",children:e(re,{lbl:"Agregar Negocio",icon:"account",theme:"",updChanges:a})}),e("div",{className:"sendBtn _dsplFlx spaceAround ",style:{marginTop:8},children:y("div",{className:"in_stock_switch _dsplFlx",children:[e("div",{className:"in_stock_switch_btn",children:e(R,{initvalue:h("showAll_business"),keyCode:77,updChange:l})}),e("span",{className:"sw_rgh_span",children:"Mostrar Todas"})]})}),e("div",{className:"flexSpace"}),e("div",{className:"asientoqty",children:`${(m=n())==null?void 0:m.length} de ${(v=n())!=null&&v.length?((o=n())==null?void 0:o.length)-1:0}`})]}),e("div",{className:" _search_MrgV  ",children:h("showAll_business")?null:e("div",{className:"years_card ",style:{marginLeft:"2vw"},children:e(ce,{updChanges:u,placeholderCode:"buscar..."})})}),e("div",{className:"_dsplFlx  ",children:e("div",{className:"_dsplFlx asiento_bx_details header",children:y("div",{className:"_dsplFlx ",children:[e("div",{className:"in_stock_switch",style:{width:300},children:e("div",{children:"Nombre Negocio"})}),e("div",{className:"in_stock_switch",style:{width:300},children:e("div",{children:"descripcion"})})]})})}),e("div",{className:"businesslist",children:((x=n())==null?void 0:x.length)>0&&((b=n())==null?void 0:b.map(p=>p&&e(ue,{item:p,refreshlist:c})))})]})},oe=({data:s,refreshlist:i})=>{const{modalID:r}=s||{},[t,u]=w.exports.useState(!1),[g,N]=w.exports.useState(0),c=(n,l)=>{let m=h(d)||{};m[n]=l,C(d,m),t&&u(!1),N(F())};return e("div",{...r?{"dialog-key-id":r}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:y("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:"20px 68px 40px"},children:[e("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:e("div",{children:"Crear Negocio"})}),e(I,{validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",placeholder:"Nombre del negocio",updChange:n=>c("name",n)}),e(I,{validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",placeholder:"Descripcion",updChange:n=>c("description",n)}),e("button",{className:"btn login_button btn_submit btn_small",type:"submit",autocomplete:"off",tabindex:"0","data-uia":"login-submit-button",onClick:async()=>{let n=h(d)||{};n.businessId=F(),n.isActive=!0;let l={query:"addBusiness",form:n};const v=await M(L(),l);v&&v.data&&(C(d,{}),$({id:r}),i())},children:"Agregar"})]})})},de=({data:s,refreshlist:i})=>{var l,m,v;const{modalID:r}=s||{},[t,u]=w.exports.useState(!1),[g,N]=w.exports.useState(0),c=(o,x)=>{let b=h(d)||{};b[o]=x,C(d,b),t&&u(!1),N(F())};let a=["code","name","isDebt","subAccount","subAccountName"];const n=async()=>{var x,b;let o={query:"updateBusiness",params:{accountId:(x=h(d))==null?void 0:x.accountId},data2update:he(a,h(d),h(d+"_backUp"))};if((b=h(d))!=null&&b.accountId){const _=await M(L(),o);_&&_.data&&($({id:r}),i())}};return e("div",{...r?{"dialog-key-id":r}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:y("div",{className:"sendBtn  _mrgSwith  margin_form hybrid_login_form ",style:{minHeight:120,padding:"20px 68px 40px"},children:[e("div",{className:"login_title ",style:{marginLeft:1,textAlign:"left"},children:e("div",{children:"Actualizar"})}),e(I,{init:(l=h(d))==null?void 0:l.name,validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",placeholder:"Nombre del negocio",updChange:o=>c("name",o)}),e(I,{init:(m=h(d))==null?void 0:m.description,validationMsg:"debe contener entre 6 y 200 caracteres.",validation:{reqired:!0,minLength:6},type:"text",placeholder:"Descripcion",updChange:o=>c("description",o)}),y("div",{className:"in_stock_switch _dsplFlx",style:{marginTop:10},children:[e("div",{className:"in_stock_switch_btn",children:e(R,{initvalue:(v=h(d))==null?void 0:v.isActive,keyCode:77,updChange:o=>c("isActive",o)})}),e("span",{className:"sw_rgh_span",children:"Esta Activo"})]}),e("button",{className:"btn login_button btn_submit btn_small",type:"submit",autocomplete:"off",tabindex:"0","data-uia":"login-submit-button",onClick:n,children:"Actualizar"})]})})},ue=({item:s,refreshlist:i})=>{var N,c;const r=async(a,n)=>{};(N=s==null?void 0:s.sections)!=null&&N.active&&O((c=s==null?void 0:s.sections)==null?void 0:c.active).length>0,(()=>{var a;return Q("isWatching",[(a=s==null?void 0:s.sections)==null?void 0:a.watching],()=>{var v;let n="timeStamp",l=(v=s==null?void 0:s.sections)==null?void 0:v.watching,m=O(l).sort((o,x)=>{let b=l[o]&&l[o][n],p=l[x]&&l[x][n];return b<p?1:b>p?-1:0});return l==null?void 0:l[m==null?void 0:m[0]]})})();const u=()=>{C(d,s),C(d+"_backUp",JSON.stringify(s));let a={};a.zIndex=450,a.props={item:s,minHeight:"1vh",overlay:!0},a.content=e(de,{updBusiness:r,refreshlist:i}),D(a)},g=()=>{let a={};a.zIndex=450,a.props={item:s,minHeight:"1vh",overlay:!0},a.content=e(pe,{confirm:()=>i()}),D(a)};return e("div",{className:"_dsplFlx asiento_details ",style:{},children:y("div",{className:"_dsplFlx asiento_bx_details ",style:{},children:[y("div",{className:"_dsplFlx ",onClick:u,children:[e("div",{className:"in_stock_switch",style:{width:300},children:e("div",{className:"sw_rgh_span",children:s.name})}),e("div",{className:"in_stock_switch",style:{width:300},children:e("div",{className:"sw_rgh_span",children:s.description})})]}),e("div",{className:"flexSpace"}),y("div",{className:"_dsplFlx",children:[e("div",{className:"_dsplFlx delete_icon",children:e(G,{name:"edit",size:24,color:"#b00000"})}),e("div",{className:"_dsplFlx delete_icon",onClick:g,children:e(G,{name:"delete",size:24,color:"#b00000"})})]})]})})},pe=({data:s,confirm:i})=>{const{modalID:r,item:t}=s||{},u=async()=>{let g={query:"deleteBusiness",params:{id:t.id}};const c=await le(L(),g);c&&c.data&&($({id:r}),i(t))};return y("div",{...r?{"dialog-key-id":r}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:[e("div",{className:"login_title ",style:{margin:"1vw"},children:e("div",{children:`Borrar Asiento "${t.name}"`})}),e("div",{className:"delete_alert_t2 ",children:e("div",{children:"Una vez borrado no podras recuperarlo"})}),e("div",{className:"sendBtn _dsplFlx spaceAround",children:e("div",{className:"play-button-wrapper",style:{margin:"2vw 1vw 0"},children:e("div",{className:"play-button",onClick:u,children:e("div",{className:"lbl",children:"Borrar"})})})})]})};function he(s,i,r){let t=JSON.parse(r),u=null;return s&&s.map((g,N)=>{i[g]!==t[g]&&(u||(u={}),u[g]=i[g])}),u}export{he as compareJson,be as default};
