import{I as z,A as D,B as $,S as U,l as B,_ as E,r as I,a as d,j as e,k as l,E as T,G as C,o as h,J as F,H as O,O as S,x as k,C as P}from"./index.80f87a12.js";const L=z(),H=D(),J=$(),M=U(),V=B(()=>E(()=>import("./AddAsientosContables.02b87551.js"),["assets/AddAsientosContables.02b87551.js","assets/index.80f87a12.js","assets/index.1aca3d94.css"])),j=B(()=>E(()=>import("./UpdateAsientosContables.bfea6fef.js"),["assets/UpdateAsientosContables.bfea6fef.js","assets/index.80f87a12.js","assets/index.1aca3d94.css"])),q=B(()=>E(()=>import("./AsientosRegistro.6be487cf.js"),["assets/AsientosRegistro.6be487cf.js","assets/index.80f87a12.js","assets/index.1aca3d94.css"])),w="ctscont",G=({view:t})=>{var g,A;const[n,r]=I.exports.useState(""),[u,o]=I.exports.useState(""),c=async()=>{let a={query:"getAllAccountingEntries",params:{businessId:l("businessId")}};const _=await C(k(),a);_&&_.data&&(h("asientoslist",_.data),o(F()))},b=async()=>{let a={query:"getAllAccountsByUserId",params:{businessId:l("businessId")}};const _=await C(k(),a);_&&_.data&&h("cuentaslist",O(_.data,"accountId"));let f={query:"getAllSubAccounts",params:{businessId:l("businessId")}};const p=await C(k(),f);p&&p.data&&(h("sub_cuentas_list",p.data),h("sub_cuentas_dict",O(p.data,"sub_accountId")))};I.exports.useEffect(()=>()=>{},[]);const s=a=>{let m={};m.zIndex=450,m.props={item:a,minHeight:"700px",overlay:!0},m.content=e(V,{refreshlist:c}),S(m)},i=()=>T("asientosListFilter",[l("asientoslist"),n,l("showAll_asientos")],()=>{var f;let a="name";const m=v=>{var N,x;let p=(n==null?void 0:n.toLowerCase())&&((x=(N=v==null?void 0:v[a])==null?void 0:N.toLowerCase())==null?void 0:x.indexOf(n.toLowerCase()))>=0;if(l("showAll_asientos")||p)return v},_=(v,p)=>{let N=v[a],x=p[a];return N<x?-1:N>x?1:0};return(f=l("asientoslist"))==null?void 0:f.filter(m).sort(_)});I.exports.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0),b(),c()},170)},[t]);const y=a=>{h("showAll_asientos",a),o(F())};return d("div",{className:"",style:{marginLeft:"2vw"},children:[e("div",{className:"login_title ",children:e("div",{children:"Asientos Parametrizados"})}),d("div",{className:"_dsplFlx ",children:[e("div",{className:"login_title ",children:e(H,{lbl:"Agregar Asiento",icon:"account",theme:"",updChanges:s})}),e("div",{className:"sendBtn _dsplFlx spaceAround ",style:{marginTop:8},children:d("div",{className:"in_stock_switch _dsplFlx",children:[e("div",{className:"in_stock_switch_btn",children:e(J,{initvalue:l("showAll_asientos"),keyCode:77,updChange:y})}),e("span",{className:"sw_rgh_span",children:"Mostrar Todas"})]})}),e("div",{className:"flexSpace"})]}),e("div",{className:" _search_MrgV  ",children:l("showAll_asientos")?null:e("div",{className:"years_card ",style:{marginLeft:"2vw"},children:e(M,{updChanges:r,placeholderCode:"buscar..."})})}),e("div",{className:"_dsplFlx  ",children:e("div",{className:"_dsplFlx cuenta_bx_details header",children:d("div",{className:"_dsplFlx ",children:[e("div",{className:"_header_item",style:{width:300},children:e("div",{children:"Nombre Asiento"})}),e("div",{className:"_header_item",style:{width:450},children:d("div",{children:["Debito"," "]})}),e("div",{className:"_header_item",style:{width:450},children:e("div",{children:"Credito"})})]})})}),e("div",{className:"asientoslist",children:((g=i())==null?void 0:g.length)>0&&((A=i())==null?void 0:A.map(a=>a&&e(Q,{item:a,refreshlist:c})))})]})},Q=({item:t,refreshlist:n})=>{const r=async(s,i)=>{},u=s=>T("getSubAccountByK_"+s,[l("sub_cuentas_dict"),s],()=>{var g,A;let i=(g=l("sub_cuentas_dict"))==null?void 0:g[s],y=(A=l("cuentaslist"))==null?void 0:A[i==null?void 0:i.accountId];return`${y==null?void 0:y.name}${i!=null&&i.subAccountName?" - "+(i==null?void 0:i.subAccountName):""}`}),o=()=>{h(w,t),h(w+"_backUp",JSON.stringify(t));let s={};s.zIndex=450,s.props={item:t,minHeight:"1vh",overlay:!0},s.content=e(j,{updAsientos:r,refreshlist:n}),S(s)},c=()=>{h(w,t),h(w+"_backUp",JSON.stringify(t));let s={};s.zIndex=450,s.props={minHeight:"1vh",overlay:!0},s.content=e(q,{refreshlist:n,item:t}),S(s)},b=()=>{let s={};s.zIndex=450,s.props={minHeight:"1vh",overlay:!0},s.content=e(R,{confirm:()=>n(),item:t}),S(s)};return e("div",{className:"_dsplFlx cuenta_details ",style:{},children:d("div",{className:"_dsplFlx cuenta_bx_details ",style:{},children:[d("div",{className:"_dsplFlx ",onClick:o,children:[e("div",{className:"_asiento_item",style:{width:300},children:e("div",{children:t.name})}),e("div",{className:"_asiento_item",style:{width:450},children:d("div",{children:[u(t.debitAccount)," "]})}),e("div",{className:"_asiento_item",style:{width:450},children:e("div",{children:u(t.creditAccount)})})]}),e("div",{className:"flexSpace"}),d("div",{className:"_dsplFlx",children:[e("div",{className:"_dsplFlx delete_icon launcicon",style:{marginRight:17},onClick:c,children:e(L,{name:"send",size:24,color:"#fff"})}),e("div",{className:"_dsplFlx delete_icon",onClick:b,children:e(L,{name:"delete",size:24,color:"#b00000"})})]})]})})},R=({data:t,confirm:n,item:r})=>{const{modalID:u}=t||{},o=async()=>{let c={query:"deleteAccountingEntries",params:{accountingEntryId:r.accountingEntryId,businessId:l("businessId")}};const s=await C(k(),c);s&&s.data&&(P({id:u}),n(r))};return d("div",{...u?{"dialog-key-id":u}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:[e("div",{className:"login_title ",style:{margin:"1vw"},children:e("div",{children:`Borrar Asiento "${r.name}"`})}),e("div",{className:"delete_alert_t2 ",children:e("div",{children:"Una vez borrado no podras recuperarlo"})}),e("button",{className:"btn login_button btn_submit btn_small",type:"submit",autocomplete:"off",tabindex:"0","data-uia":"login-submit-button",onClick:o,children:"Borrar"})]})};function W(t,n,r){let u=JSON.parse(r),o=null;return t&&t.map((c,b)=>{n[c]!==u[c]&&(o||(o={}),o[c]=n[c])}),o}export{W as compareJson,G as default};
