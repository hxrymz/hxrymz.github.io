"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5207,9760],{9760:(e,l,a)=>{a.r(l),a.d(l,{CloseModal:()=>r,OpenModal:()=>c,default:()=>n});var s=a(2791),t=a(5408),i=a(2350),d=a(184);const o="listDialog_mdh392",n=()=>{const e=(0,i.bh)("listDialog")||{};(0,t.Z)(o);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,a)=>{let t=e[l];if(t&&t.visible){let e={};t.height&&(e.heigth=t.height),t.width,t.zIndex&&(e.zIndex=t.zIndex-1);let a={zIndex:t.zIndex},i=null,o=t.data;return t.content&&(i=s.cloneElement(t.content,{data:o})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:a,id:l,children:i})}),t.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(t.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},c=e=>{let l=(0,i.bh)("listDialog")||{},a=(0,i.M5)();l[a]||(l[a]={}),l[a].visible=!0;let s={};e.props?(s=e.props,s.modalID=a):s.modalID=a;let t=document.getElementsByTagName("body")[0];null!==t&&void 0!==t&&t.style&&(t.style.overflowY="hidden"),l[a].isView=e.isView,l[a].observeResize=e.observeResize,l[a].observeResize&&(l[a].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(a,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===l[a].width&&s.height===l[a].height||(l[a].height=s.height+10,l[a].width=s.width,(0,i.Rz)("listDialog",l),(0,i.wt)(o)))}),200)),l[a].display=!0,e.zIndex&&(l[a].zIndex=e.zIndex),e.height&&(l[a].height=e.height),e.width&&(l[a].width=e.width),e.content&&(l[a].content=e.content),l[a].data=s,(0,i.Rz)("listDialog",l),(0,i.wt)(o),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",a),(0,i.wt)(o)}),125)},r=e=>{let l=(0,i.bh)("listDialog")||{},a=e.id;if(l[a]){var s,t,d;l[a].observeResize&&l[a].observeInterval&&clearInterval(l[a].observeInterval),l[a].display=!1,null===(s=l[a])||void 0===s||null===(t=s.data)||void 0===t||null===(d=t.closeEvent)||void 0===d||d.call(t),(0,i.Rz)("listDialog",l),delete l[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(o),setTimeout((()=>{delete l[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},1232:(e,l,a)=>{a.d(l,{GP:()=>n,N$:()=>d,hF:()=>r,i7:()=>t,nr:()=>i,pj:()=>u});var s=a(2350);const t=async(e,l)=>{var a,t;let i={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.filter_search_opera};i.params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,s.bh)("date_current_year")};const d=(0,s.I7)(i),n=await d;if(n&&!n.error){(0,s.Rz)("collect_list",n),(0,s.Rz)("collect_by_doc",o(n)),(0,s.Rz)("collect_by_docM",o(n));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);c(n,l)}l&&l()},i=async(e,l)=>{var a,t;let i={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.filter_search_opera};i.params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,s.bh)("date_current_year")};const d=(0,s.I7)(i),n=await d;if(n&&!n.error){(0,s.Rz)("toPay_list",n),(0,s.Rz)("toPay_by_doc",o(n,!0)),(0,s.Rz)("toPay_by_docM",o(n,!0));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);c(n,l)}l&&l()},d=async e=>{var l,a;let t={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.search_opera};t.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,s.bh)("search_acc_record"),year:(0,s.bh)("date_current_year")};const i=(0,s.I7)(t),d=await i;d&&!d.error&&((0,s.Rz)("comprobante_list",d),(0,s.Rz)("comprobante_by_doc",o(d))),e&&e()};function o(e,l){var a={};let t=e&&(0,s._2)(e);return t.length>0?t.map((t=>{var i;let d=e[t],o=null===(i=d.document)||void 0===i?void 0:i.trim();if(!a[o]){a[o]={},["date","description","document","entryName"].forEach((e=>{a[o][e]=d[e]})),a[o].amount=0,a[o].operations=[]}if(d.type){let e=(0,s.Zv)(d.amount,2),t=(0,s.Zv)(a[o].amount,2),i=0;i=l?1*t+e*("debit"===d.type?-1:1):1*t+e*("credit"===d.type?-1:1),a[o].amount=(0,s.Zv)(i,2),a[o].operations.push(function(e){var l,a;let t={};t.account=null===(l=(0,s.bh)("account_ids"))||void 0===l?void 0:l[e.account],t.sub_account=null===(a=(0,s.bh)("sub_account_ids"))||void 0===a?void 0:a[e.subAccount],t.comprobanteId=e.comprobanteId,t.operationId=e.operationId,t.date=e.date,t.description=e.description;let i=(0,s.Zv)(e.amount,2);"credit"===e.type?(t.debit=0,t.credit=i):"debit"===e.type&&(t.credit=0,t.debit=i);return t}(d))}})):a=null,a}const n=(e,l,a)=>(0,s.MV)("SumDocuments",[e,l,a],(()=>{var a;let t=0;return e&&(null===(a=(0,s._2)(e))||void 0===a||a.map(((a,s)=>{var i;t+=1*(null===(i=e[a])||void 0===i?void 0:i[l])}))),t})),c=async(e,l,a)=>{let t=(0,s.bh)("rec_by_acc")||{};t[l]=((e,l,a)=>{var t;let i=0;return e&&(null===(t=(0,s._2)(e))||void 0===t||t.map(((l,a)=>{var t;let d=(0,s.Zv)(e[l].amount,2);i+=d*("credit"===(null===(t=e[l])||void 0===t?void 0:t.type)?-1:1)}))),i})(e)||"no",(0,s.Rz)("rec_by_acc",t),a&&a()},r=async(e,l,a)=>{var t,i;let d={...null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.filter_search_opera};d.params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,s.bh)("date_current_year")};const o=(0,s.I7)(d),n=await o;n&&!n.error&&c(n,l),a&&a()},u=async(e,l,a)=>{var t,i;let d={...null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_subacc_acc};d.params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":e,":search":l,year:(0,s.bh)("date_current_year")};const o=(0,s.I7)(d),n=await o;if(n&&!n.error){var c;let e=null===(c=(0,s._2)(n))||void 0===c?void 0:c[0];a&&a(n[e])}}},5207:(e,l,a)=>{a.r(l),a.d(l,{default:()=>z});var s=a(2791),t=a(2350),i=a(2647),d=a(9760),o=a(1475),n=a(4050),c=a(7689),r=a(184);const u=e=>{let{data:l,confirm:a,handleClick:s,close:t}=e;const{modalID:i}=l,o=e=>{(0,d.CloseModal)({id:i})};return(0,r.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"group_title addBtn",onClick:o,children:"Cancelar"}),(0,r.jsx)("p",{className:"group_title addBtn red",onClick:()=>{a(),o()},children:"Eliminar"})]})]})};a(1232);var v=a(9661);(0,i.YZ)();const h=(0,i.Np)(),m=(0,i.tL)(),p=(0,v.a)(),b="upd_categoriesM",_=e=>{var l,a,i,o,n,c,u,v,_;let{data:x,confirm:y}=e;const[g,f]=(0,s.useState)(!1),[I,j]=(0,s.useState)(0);(0,s.useEffect)((()=>{g||(f(!0),j((0,t.M5)()))}));const N=(e,l,a)=>{let s=(0,t.bh)(b)||{};a?(s[a]||(s[a]={}),s[a][e]=l):s[e]=l,(0,t.Rz)(b,s),j((0,t.M5)())};let w=["type","name","description","account","subAccount"];let z=(0,t.vy)(w,(0,t.bh)(b),(0,t.bh)(b+"_bck"));return(0,r.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 25px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Actualizar Provedor o Cliente"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"extra_container",children:null!==(l=(0,t.bh)(b))&&void 0!==l&&l.account?(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:()=>((e,l)=>{let a=(0,t.bh)(b)||{};a.account=null,a.subAccount=null,(0,t.Rz)(b,a),j((0,t.M5)())})(),children:"Cuenta:"}),(0,r.jsx)("div",{className:"employee_name",children:null===(a=(0,t.bh)("account_ids"))||void 0===a||null===(i=a[(0,t.bh)(b).account])||void 0===i?void 0:i.name})]}),null!==(o=(0,t.bh)(b))&&void 0!==o&&o.subAccount?(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},children:"SubCuenta:"}),(0,r.jsx)("div",{className:"employee_name",children:null===(n=(0,t.bh)("sub_account_ids"))||void 0===n||null===(c=n[(0,t.bh)(b).subAccount])||void 0===c?void 0:c.subAccountName})]}):null]}):(0,r.jsx)(p,{placeholder:"buscar una cuenta",width:420,handleClick:(e,l)=>{let a=(0,t.bh)(b)||{};a.account=e,a.subAccount=l,(0,t.Rz)(b,a),j((0,t.M5)())}})}),(0,r.jsx)(h,{init:null===(u=(0,t.bh)(b))||void 0===u?void 0:u.name,label:"Nombre",width:520,updChanges:e=>N("name",e)}),(0,r.jsx)(h,{init:null===(v=(0,t.bh)(b))||void 0===v?void 0:v.description,label:"Descripcion",width:520,updChanges:e=>N("description",e)}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(m,{data:[{label:"Gastos",id:"expenses"},{label:"Ingresos",id:"incomes"}],active:null===(_=(0,t.bh)(b))||void 0===_?void 0:_.type,updSelect:e=>N("type",e)}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),null!==z&&void 0!==z&&z.hasChange?(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("button",{onClick:async()=>{var e,l;let a=(0,t.bh)(b),s=(0,t.vy)(w,(0,t.bh)(b),(0,t.bh)(b+"_bck")),i={...null===(e=(0,t.bh)((0,t.hQ)()))||void 0===e?void 0:e.upd_categapp};i.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,categoryId:a.categoryId},i.data2update=s.data;const o=(0,t.I7)(i);await o&&((0,t.Rz)(b,{}),(0,t.Rz)(b+"_bck",{}),y&&y(),(null===x||void 0===x?void 0:x.modalID)&&(0,d.CloseModal)({id:null===x||void 0===x?void 0:x.modalID}))},children:"Actualizar"})}):null]})]})},x=(0,i.PU)(),y=e=>{let{data:l,elmId:a,handleRefreshAll:i}=e;const[n,v]=(0,s.useState)(!1),[h,m]=(0,s.useState)(0),[p,b]=(0,s.useState)(0);(0,c.s0)();(0,s.useEffect)((()=>{n||(v(!0),m((0,t.M5)()))}));const y=()=>{m((0,t.M5)())},g=()=>{(0,o.MX)(y)},f=()=>{(0,o.M_)(null===l||void 0===l?void 0:l.movementId,i)};return(0,r.jsx)("div",{className:"item_acc",children:(0,r.jsxs)("div",{className:"_dsplFlx operation_item_box",children:[(0,r.jsx)("div",{className:"icon_revision",children:(0,r.jsx)(x,{name:l.account?"success":"alert",color:l.account?"var(--hrm_palette-success-fg)":"var(--hrm_palette-selected-nav-text)"})}),(0,r.jsxs)("div",{className:"_dsplFlx tr_bar_90",onClick:async()=>{if((0,t.I0)()){(0,t.Rz)("upd_categoriesM",l),(0,t.Rz)("upd_categoriesM_bck",{...l});let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,r.jsx)(_,{confirm:g}),(0,d.OpenModal)(e)}},children:[(0,r.jsx)("div",{className:" tr_bar_25",children:null===l||void 0===l?void 0:l.name}),(0,r.jsx)("div",{className:" tr_bar_45  font_onm",style:{marginLeft:9}}),(0,r.jsx)("div",{className:" tr_bar_15",style:{color:"expense"===l.movementType?"var(--hrm_palette-selected-nav-text)":"var( --hrm_palette-blue-purple)"},children:null===l||void 0===l?void 0:l.type})]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"icon tr_bar_5",onClick:()=>{let e=(0,t.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,t.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,r.jsx)(u,{confirm:f,item:l}),(0,d.OpenModal)(e)}},children:(0,r.jsx)(x,{name:"outline_delete",color:"#c62828"})})]})})},g=(0,i.Np)(),f=(0,i.tL)(),I=(0,v.a)(),j="new_mobile_categories",N=e=>{var l,a,i,o,n,c,u,v,h;let{data:m,confirm:p}=e;const[b,_]=(0,s.useState)(!1),[x,y]=(0,s.useState)(0);(0,s.useEffect)((()=>{b||(_(!0),y((0,t.M5)()))}));const N=(e,l,a)=>{let s=(0,t.bh)(j)||{};a?(s[a]||(s[a]={}),s[a][e]=l):s[e]=l,(0,t.Rz)(j,s),y((0,t.M5)())};return(0,r.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Agregar Categories"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"extra_container",children:null!==(l=(0,t.bh)(j))&&void 0!==l&&l.account?(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:()=>((e,l)=>{let a=(0,t.bh)(j)||{};a.account=null,a.subAccount=null,(0,t.Rz)(j,a),y((0,t.M5)())})(),children:"Cuenta:"}),(0,r.jsx)("div",{className:"employee_name",children:null===(a=(0,t.bh)("account_ids"))||void 0===a||null===(i=a[(0,t.bh)(j).account])||void 0===i?void 0:i.name})]}),null!==(o=(0,t.bh)(j))&&void 0!==o&&o.subAccount?(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},children:"SubCuenta:"}),(0,r.jsx)("div",{className:"employee_name",children:null===(n=(0,t.bh)("sub_account_ids"))||void 0===n||null===(c=n[(0,t.bh)(j).subAccount])||void 0===c?void 0:c.subAccountName})]}):null]}):(0,r.jsx)(I,{placeholder:"buscar una cuenta",width:420,handleClick:(e,l)=>{let a=(0,t.bh)(j)||{};a.account=e,a.subAccount=l,(0,t.Rz)(j,a),y((0,t.M5)())}})}),(0,r.jsx)(g,{init:null===(u=(0,t.bh)(j))||void 0===u?void 0:u.name,label:"Nombre",width:520,updChanges:e=>N("name",e)}),(0,r.jsx)(g,{init:null===(v=(0,t.bh)(j))||void 0===v?void 0:v.description,label:"Descripcion",width:520,updChanges:e=>N("description",e)}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(f,{data:[{label:"Expenses",id:"expenses"},{label:"Incomes",id:"incomes"}],active:null===(h=(0,t.bh)(j))||void 0===h?void 0:h.type,updSelect:e=>N("type",e)})]}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("button",{onClick:async()=>{var e,l;let a=(0,t.bh)(j);a.categoryId=(0,t.M5)();let s={...null===(e=(0,t.bh)((0,t.hQ)()))||void 0===e?void 0:e.add_categapp};s.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId},s.form=a;const i=(0,t.I7)(s);await i&&((0,t.Rz)(j,{}),p&&p(),(null===m||void 0===m?void 0:m.modalID)&&(0,d.CloseModal)({id:null===m||void 0===m?void 0:m.modalID}))},children:"Guardar"})})]})]})},w=(0,i.Vg)(),z=e=>{var l,a;let{data:i,elmId:u,updObs:v}=e;const[h,m]=(0,s.useState)(!1),[p,b]=(0,s.useState)(0),[_,x]=(0,s.useState)(!1);(0,c.s0)();(0,s.useEffect)((()=>{h||(m(!0),b((0,t.M5)()),(0,n.Ht)("global_accounts","global_account_params",g),f())}));const g=()=>{(0,n.ZX)(f)},f=()=>{(0,o.bM)(j)},I=e=>{(0,o.bM)(j)},j=async(e,l)=>{b((0,t.M5)()),x(!1)};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"accounts_header",children:[(0,r.jsx)("h2",{children:"Categorias"}),(0,t.I0)()?(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("p",{className:"group_title addBtn purple",onClick:e=>{let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,r.jsx)(N,{}),(0,d.OpenModal)(l)},children:"Agregar"})}):null,(0,r.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,r.jsx)(w,{placeholder:"Buscar ....",width:360,obs:b,fetchData:e=>{x(!0),(0,o.vC)(j)},loading:_,change:e=>{!_&&x(!0)},callempty:I,keyFlds:"search_categories"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"total_comprobante_title",children:"No de categorias:"}),(0,r.jsx)("div",{className:"total_comprobante gray",children:(0,r.jsx)("span",{children:null===(l=(0,t._2)((0,t.bh)("categories_list")))||void 0===l?void 0:l.length})})]})]})]}),(0,r.jsx)("div",{className:"providers_container scollVh",children:(0,t.bh)("categories_list")&&(null===(a=(0,t._2)((0,t.bh)("categories_list")))||void 0===a?void 0:a.map((e=>(0,r.jsx)(y,{data:(0,t.bh)("categories_list")[e],elmId:e,handleRefreshAll:I},e))))})]})}},1475:(e,l,a)=>{a.d(l,{Je:()=>d,MX:()=>t,M_:()=>h,Qq:()=>i,bM:()=>u,lG:()=>n,p8:()=>c,sV:()=>o,tS:()=>m,vC:()=>r});var s=a(2350);const t=async e=>{e&&e()},i=async(e,l)=>{var a;let t={query:"getSignedUrl",params:{userId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,fileName:e}};const i=(0,s.I7)(t),d=await i;null!==d&&void 0!==d&&d.url?(0,s.Ey)(l)&&l(null===d||void 0===d?void 0:d.url):(0,s.Ey)(l)&&l(null)},d=async(e,l,a)=>{var t;let i={query:"ProccessImage",params:{userId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId,fileName:l,url:e}};const d=(0,s.I7)(i),o=await d;null!==o&&void 0!==o&&o.url?(0,s.Ey)(a)&&a(null===o||void 0===o?void 0:o.url):(0,s.Ey)(a)&&a(null)},o=async(e,l)=>{let a={query:"detectLandMark",params:{url:e}};const t=(0,s.I7)(a),i=await t;l(e,i||null)},n=async e=>{var l,a,t,i;let d={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.search_incms_expns};d.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,s.bh)("date_current_year"),":date1":null===(t=(0,s.bh)("date_range_comps"))||void 0===t?void 0:t.initDate,":date2":null===(i=(0,s.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate},(0,s.bh)("search_acc_record").split(" ").map(((e,l)=>{e&&(d.params[":search"+l]=e.trim())}));const o=(0,s.I7)(d),n=await o;n&&((0,s.Rz)("feedfMbls_ids",n),(0,s.Rz)("feedfMbls_list",v((0,s.jQ)(n),"date")),e&&e())},c=async()=>{let e=[];(0,s.bh)("feedfMbls_list").map((async(l,a)=>{var t,i,d,o,n,c;if(l.comprobanteId)return;let r={...l},u={...l},v="debit",h="credit";"expense"===(null===u||void 0===u?void 0:u.movementType)&&(v="credit",h="debit");let m=(null===u||void 0===u?void 0:u.title)+"; "+(null===u||void 0===u?void 0:u.description),p=null===(t=(0,s.bh)("categories_ids"))||void 0===t?void 0:t[null===u||void 0===u?void 0:u.categoryId],b={};b.amount=null===u||void 0===u?void 0:u.amount,b.movementId=null===u||void 0===u?void 0:u.movementId,b.description=m,b.date=null===u||void 0===u?void 0:u.date;let _={...b};b.account=null===(i=(0,s.bh)("global_account_params"))||void 0===i?void 0:i.cash_bank.account,b.type=v,_.account=null===p||void 0===p?void 0:p.account,null!==p&&void 0!==p&&p.subAccount&&(_.subAccount=null===p||void 0===p?void 0:p.subAccount),_.type=h;let x=[_,b];r.date?r.date=new Date(r.date).getTime():r.date=(new Date).getTime()+800;let y=await(0,s.V_)(r.date,1*a+4);r.comprobanteId=y,r.document=null===(d=r.document)||void 0===d?void 0:d.trim(),x&&(null===(o=(0,s._2)(x))||void 0===o||o.map((async(a,t)=>{let i=x[a];if(!isNaN(1*i.amount)&&1*i.amount>0){var d,o;let a={...r};a.account=i.account,i.subAccount&&(a.subAccount=i.subAccount),a.movementRef=l.movementId,a.type=i.type,a.amount=1*i.amount,a.operationId=(0,s.M5)(),a.document=(0,s.LO)()+"_"+(0,s.UG)(r.date);let t={...null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.add_opera};t.params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:new Date(r.date).getFullYear()},t.form=a,e.push(t)}})));let g={...null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.upd__incms_expns};g.params={businessId:null===(c=(0,s.bh)("profileUser"))||void 0===c?void 0:c.businessId,movementId:l.movementId,year:(0,s.bh)("date_current_year")},g.data2update={comprobanteId:y},e.push(g)})),setTimeout((()=>{}),4e3)},r=async e=>{var l,a;let t={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.search_categapp};t.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId},(0,s.bh)("search_categories").split(" ").map(((e,l)=>{e&&(t.params[":search"+l]=e.trim())}));const i=(0,s.I7)(t),d=await i;d&&((0,s.Rz)("categories_ids",d),(0,s.Rz)("categories_list",v((0,s.jQ)(d),"name")),e&&e())},u=async e=>{var l,a;let t={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.all_categapp};t.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId};const i=(0,s.I7)(t),d=await i;d&&(!function(e){const l=e=>({label:e.name,id:e.categoryId});(0,s.Rz)("categories_pick_data",e.map(l))}(d),(0,s.Rz)("categories_list",v(d,"name")),(0,s.Rz)("categories_ids",(0,s.ME)(d,"categoryId"))),e&&e()};const v=(e,l)=>(0,s.MV)("sort_feedfMbl",[e],(()=>e&&e.sort(((e,a)=>{let s=1*e[l],t=1*a[l];return s<t?-1:s>t?1:0})))),h=async(e,l)=>{var a,t;let i={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.delete__incms_expns};i.params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId,movementId:e};const d=(0,s.I7)(i);await d&&l&&l()},m=(e,l)=>(0,s.MV)("rangeArr",[e,l],(()=>e?(0,s._2)(e).slice(0,l):[]))}}]);
//# sourceMappingURL=5207.2979b151.chunk.js.map