import{A as Z,B as k,S as Q,I as ee,l as b,_ as N,r as d,D as se,j as e,a as u,k as n,E as te,G as H,o as g,H as M,O as R,g as ae,x as U}from"./index.f1592be0.js";const q=Z(),le=k(),ne=Q();ee();const ie=b(()=>N(()=>import("./AddCuentasContables.6fd8b753.js"),["assets/AddCuentasContables.6fd8b753.js","assets/index.f1592be0.js","assets/index.4b84795f.css"])),oe=b(()=>N(()=>import("./AddSubCuentasContables.b2481c0d.js"),["assets/AddSubCuentasContables.b2481c0d.js","assets/index.f1592be0.js","assets/index.4b84795f.css"])),re=b(()=>N(()=>import("./Item_cuentas.88c1b2d3.js"),["assets/Item_cuentas.88c1b2d3.js","assets/index.f1592be0.js","assets/index.4b84795f.css","assets/calbacks.49c8c6d2.js"])),ce=b(()=>N(()=>import("./CuentasSubmayor.45ed9b5d.js"),["assets/CuentasSubmayor.45ed9b5d.js","assets/index.f1592be0.js","assets/index.4b84795f.css","assets/calbacks.49c8c6d2.js"])),he=({view:z})=>{var I,A;const[h,G]=d.exports.useState(null),[t,$]=d.exports.useState(""),[de,J]=d.exports.useState(""),K=window.location.hash.split("?")[1]?window.location.hash.split("?")[1]:null,f=se(K),_=async()=>{let s={query:"getAllAccountsByUserId",params:{businessId:n("businessId")}};const o=await H(U(),s);o&&o.data&&g("cuentaslist",M(o.data,"accountId"));let x={query:"getAllSubAccounts",params:{businessId:n("businessId")}};const i=await H(U(),x);i&&i.data&&(G(i.data),g("sub_cuentas_list",i.data),g("sub_cuentas_dict",M(i.data,"sub_accountId")))};d.exports.useEffect(()=>()=>{},[]);const W=()=>{let s={};s.zIndex=450,s.props={minHeight:"1vh",overlay:!0},s.content=e(ie,{refreshlist:_}),R(s)},X=()=>{let s={};s.zIndex=450,s.props={minHeight:"1vh",overlay:!0},s.content=e(oe,{refreshlist:_}),R(s)},y=()=>te("cuentasListFilter",[h,t,n("showAll")],()=>{let s="name",m="code",o="subAccount",x="subAccountName";const S=a=>{var r,c,L,O,E,T,V,B,F,D,P,j;let l=(r=n("cuentaslist"))==null?void 0:r[a==null?void 0:a.accountId],p=(t==null?void 0:t.toLowerCase())&&((L=(c=l==null?void 0:l[s])==null?void 0:c.toLowerCase())==null?void 0:L.indexOf(t.toLowerCase()))>=0,C=(t==null?void 0:t.toLowerCase())&&((T=(E=(O=l==null?void 0:l[m])==null?void 0:O.toString())==null?void 0:E.toLowerCase())==null?void 0:T.indexOf(t.toLowerCase()))>=0,v=(t==null?void 0:t.toLowerCase())&&((F=(B=(V=a==null?void 0:a[o])==null?void 0:V.toString())==null?void 0:B.toLowerCase())==null?void 0:F.indexOf(t.toLowerCase()))>=0,w=(t==null?void 0:t.toLowerCase())&&((j=(P=(D=a==null?void 0:a[x])==null?void 0:D.toString())==null?void 0:P.toLowerCase())==null?void 0:j.indexOf(t.toLowerCase()))>=0;if(n("showAll")||p||C||v||w)return a},i=(a,l)=>{var v,w,r,c;let p=(w=(v=n("cuentaslist"))==null?void 0:v[a==null?void 0:a.accountId])==null?void 0:w[m],C=(c=(r=n("cuentaslist"))==null?void 0:r[l==null?void 0:l.accountId])==null?void 0:c[m];return p<C?-1:p>C?1:0};return h==null?void 0:h.filter(S).sort(i)});d.exports.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0),_()},170)},[z]);const Y=s=>{g("showAll",s),J(ae())};return(f==null?void 0:f.view)==="submayor"?e(ce,{}):u("div",{className:"",children:[e("div",{className:"login_title ",children:e("div",{children:"Cuentas"})}),u("div",{className:"_dsplFlx ",children:[e("div",{className:"login_title ",children:e(q,{lbl:"Agregar Cuenta",icon:"account",theme:"",updChanges:W})}),e("div",{className:"sendBtn _dsplFlx spaceAround ",style:{marginTop:8},children:u("div",{className:"in_stock_switch _dsplFlx",children:[e("div",{className:"in_stock_switch_btn",children:e(le,{initvalue:n("showAll"),keyCode:77,updChange:Y})}),e("span",{className:"sw_rgh_span",children:"Mostrar Todas"})]})}),e("div",{className:"login_title ",children:e(q,{lbl:"Agregar SubCuenta",icon:"account",theme:"",updChanges:X})}),e("div",{className:"flexSpace"})]}),e("div",{className:" _search_MrgV  ",children:n("showAll")?null:e("div",{className:"years_card ",style:{marginLeft:"2vw"},children:e(ne,{updChanges:$,placeholderCode:"buscar..."})})}),e("div",{className:"_dsplFlx  ",children:u("div",{className:"_dsplFlx cuenta_bx_details header",children:[e("div",{className:"_header_item",style:{width:42,padding:"7px 0"},children:e("div",{className:""})}),u("div",{className:"_dsplFlx ",children:[e("div",{className:"_header_item",style:{width:140},children:e("div",{className:"",children:"Tipo de Cuenta"})}),e("div",{className:"_header_item",style:{width:50},children:e("div",{children:"Cuenta"})}),e("div",{className:"_header_item",style:{width:300},children:e("div",{children:"Nombre Cuenta"})})]})]})}),e("div",{className:"cuentaslist",children:((I=y())==null?void 0:I.length)>0&&((A=y())==null?void 0:A.map(s=>s&&e(re,{item:s,refreshlist:_},s.sub_accountId)))})]})};export{he as default};
