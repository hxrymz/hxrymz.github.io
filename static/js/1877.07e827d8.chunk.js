"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1877,9760],{9760:(e,l,a)=>{a.r(l),a.d(l,{CloseModal:()=>r,OpenModal:()=>s,default:()=>c});var d=a(2791),i=a(5408),o=a(2350),t=a(184);const n="listDialog_mdh392",c=()=>{const e=(0,o.bh)("listDialog")||{};(0,i.Z)(n);let l=Object.keys(e);return(0,t.jsx)(t.Fragment,{children:l.map(((l,a)=>{let i=e[l];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let a={zIndex:i.zIndex},o=null,n=i.data;return i.content&&(o=d.cloneElement(i.content,{data:n})),(0,t.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,t.jsx)("div",{className:"ltr-hoe9xz",children:(0,t.jsx)("div",{className:"ltr-1wao6ny",style:a,id:l,children:o})}),i.data.overlay?(0,t.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},s=e=>{let l=(0,o.bh)("listDialog")||{},a=(0,o.M5)();l[a]||(l[a]={}),l[a].visible=!0;let d={};e.props?(d=e.props,d.modalID=a):d.modalID=a;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),l[a].isView=e.isView,l[a].observeResize=e.observeResize,l[a].observeResize&&(l[a].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(a,"']")),d=e&&e.getBoundingClientRect();d&&(d.width===l[a].width&&d.height===l[a].height||(l[a].height=d.height+10,l[a].width=d.width,(0,o.Rz)("listDialog",l),(0,o.wt)(n)))}),200)),l[a].display=!0,e.zIndex&&(l[a].zIndex=e.zIndex),e.height&&(l[a].height=e.height),e.width&&(l[a].width=e.width),e.content&&(l[a].content=e.content),l[a].data=d,(0,o.Rz)("listDialog",l),(0,o.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",a),(0,o.wt)(n)}),125)},r=e=>{let l=(0,o.bh)("listDialog")||{},a=e.id;if(l[a]){var d,i,t;l[a].observeResize&&l[a].observeInterval&&clearInterval(l[a].observeInterval),l[a].display=!1,null===(d=l[a])||void 0===d||null===(i=d.data)||void 0===i||null===(t=i.closeEvent)||void 0===t||t.call(i),(0,o.Rz)("listDialog",l),delete l[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(n),setTimeout((()=>{delete l[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750)}}},3990:(e,l,a)=>{a.d(l,{Z:()=>x});var d=a(2791),i=a(2350),o=a(2647),t=(a(6021),a(9760)),n=a(9661),c=a(184);const s=(0,o.PU)(),r=(0,o.Np)(),u=(0,n.a)(),v=(0,o.JC)(),m=(0,o.tL)(),h=(0,o.YZ)(),b=e=>{var l,a,o,n,s,v,b,p,x;let{data:_,collectionName:j,confirm:y}=e;const[,N]=(0,d.useState)(0);let g=null===(l=(0,i.bh)("account_ids"))||void 0===l?void 0:l[null===(a=(0,i.bh)("extraAccountPicker"))||void 0===a?void 0:a.account],f=null===(o=(0,i.bh)("sub_account_ids"))||void 0===o?void 0:o[null===(n=(0,i.bh)("extraAccountPicker"))||void 0===n?void 0:n.subAccount];const A=(e,l,a)=>{let d=(0,i.bh)("extraAccountPicker")||{};a?(d[a]||(d[a]={}),d[a][e]=l):d[e]=l,(0,i.Rz)("extraAccountPicker",d),N((0,i.M5)())};return(0,c.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Agregar gastos extras"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,c.jsx)(h,{initvalue:null===(s=(0,i.bh)("extraAccountPicker"))||void 0===s?void 0:s.deducefromBank,keyCode:57,updChange:e=>A("deducefromBank",e)}),(0,c.jsx)("span",{className:"checklabel",children:"Deducir del Banco"})]})]}),null!==(v=(0,i.bh)("extraAccountPicker"))&&void 0!==v&&v.account?(0,c.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,c.jsxs)("div",{className:" acc_dtls",children:[(0,c.jsxs)("div",{className:"_dsplFlx",onClick:()=>{(0,i.Rz)("extraAccountPicker",null),N((0,i.M5)())},children:[(0,c.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===g||void 0===g?void 0:g.upc_barcode}),(0,c.jsx)("div",{className:"name",children:null===g||void 0===g?void 0:g.name})]}),f?(0,c.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,c.jsx)("div",{className:"code",children:null===f||void 0===f?void 0:f.subAccount}),(0,c.jsx)("div",{className:"name",children:null===f||void 0===f?void 0:f.subAccountName})]}):null,(0,c.jsx)("div",{className:"flexSpace"})]})}):(0,c.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,c.jsx)(u,{width:420,handleClick:(e,l)=>{let a={account:e,subAccount:l};(0,i.Rz)("extraAccountPicker",a),N((0,i.M5)())}})}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginLeft:7},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(m,{data:[{label:"Deudoras",id:"debit"},{label:"Acredoras",id:"credit"}],active:null===(b=(0,i.bh)("extraAccountPicker"))||void 0===b?void 0:b.type,updSelect:e=>A("type",e)}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)(r,{init:null===(p=(0,i.bh)("extraAccountPicker"))||void 0===p?void 0:p.document,label:"Documento",width:220,updChanges:e=>A("document",e)}),(0,c.jsx)(r,{init:null===(x=(0,i.bh)("extraAccountPicker"))||void 0===x?void 0:x.amount,label:"Importe",width:120,type:"number",updChanges:e=>A("amount",e)})]}),(0,c.jsx)("div",{className:"card",children:(0,c.jsx)("button",{onClick:()=>{let e={...(0,i.bh)("extraAccountPicker")}||{},l={...(0,i.bh)(j)}||{},a=(0,i.M5)();e.type||(e.type="debit"),e.amount=1*e.amount,l[a]=e,(0,i.Rz)(j,l),(0,i.Rz)("extraAccountPicker",null),N((0,i.M5)()),y&&y(),(0,t.CloseModal)({id:_.modalID})},children:"Agregar"})})]})},p=e=>{var l,a;let{data:d,deleteItem:o,idKey:t}=e,n=null===(l=(0,i.bh)("account_ids"))||void 0===l?void 0:l[null===d||void 0===d?void 0:d.account],r=null===(a=(0,i.bh)("sub_account_ids"))||void 0===a?void 0:a[null===d||void 0===d?void 0:d.subAccount];return(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,c.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,c.jsx)(v,{data:n,labelField:"code",infoField:"name"})}),(0,c.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,c.jsx)(v,{data:r,labelField:"subAccount",infoField:"subAccountName"})}),(0,c.jsx)("div",{className:"tr_bar tr_bar_25",children:null===d||void 0===d?void 0:d.document}),(0,c.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,i.Zv)(null===d||void 0===d?void 0:d.amount,2)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"icon",onClick:()=>{o(t)},children:(0,c.jsx)(s,{name:"outline_delete",color:"#c62828"})})]})},x=e=>{var l;let{collectionName:a}=e;const[,o]=(0,d.useState)(0),n=()=>{o((0,i.M5)())},s=e=>{let l=(0,i.bh)(a)||{};delete l[e],(0,i.Rz)(a,l),o((0,i.M5)())};return(0,c.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,c.jsx)("div",{className:"_dsplFlx",children:(0,c.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,c.jsx)(b,{collectionName:a,confirm:n}),(0,t.OpenModal)(e)},children:"Agregar gastos"})}),(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,c.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,c.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,c.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,c.jsx)("div",{className:"tr_bar tr_bar_25",children:"Monto"})]}),(0,i.bh)(a)&&(null===(l=(0,i._2)((0,i.bh)(a)))||void 0===l?void 0:l.map(((e,l)=>(0,c.jsx)(p,{idKey:e,data:(0,i.bh)(a)[e],deleteItem:s},e))))]})}},1877:(e,l,a)=>{a.r(l),a.d(l,{default:()=>I});var d=a(2791),i=a(2350),o=a(2647),t=(a(6021),a(9760)),n=a(1232),c=a(9661),s=a(7689),r=a(24),u=a(3990),v=a(4050),m=a(184);const h=(0,o.PU)(),b=(0,o.Np)(),p=(0,c.LZ)(),x=(0,r.f_)(),_=(0,o.JC)(),j="new_multi_pay_prov",y="Acc2MPay",N="multi_pay_by_prov_Doc",g="toPay_by_docM",f="multi_pay_2S",A="extraAccountListOnPay",I=e=>{var l,a,o,n,c,r,h,p,_,I,R;let{data:D,confirm:F}=e;const[C,M]=(0,d.useState)(!1),[P,S]=(0,d.useState)(0),T=(0,s.s0)(),O=()=>{S((0,i.M5)())};(0,d.useEffect)((()=>{C||(M(!0),(0,v.Ht)("global_accounts","global_account_params",O),(0,i.Rz)(f,null),(0,i.Rz)(g,null),(0,i.Rz)(N,null),(0,i.Rz)("accountPicker",{}),S((0,i.M5)()))}));const B=(e,l,a)=>{let d=(0,i.bh)(j)||{};a?(d[a]||(d[a]={}),d[a][e]=l):d[e]=l,(0,i.Rz)(j,d),S((0,i.M5)())};let Z=null===(l=(0,i.bh)("global_account_params"))||void 0===l?void 0:l.cash_bank;const E=()=>{let e={...(0,i.bh)(N)}||{},l={...(0,i.bh)(f)}||{};(0,i._2)(e).map((a=>{var d,o;let t=(null===(d=(0,i.bh)(y))||void 0===d?void 0:d.account)+"_"+(null===(o=(0,i.bh)(y))||void 0===o?void 0:o.subAccount)+"_"+a,n={...(0,i.bh)(y)};l[t]={},l[t].amount=1*e[a],l[t].document=a,l[t].type="debit",l[t].account=null===n||void 0===n?void 0:n.account,l[t].providerId=null===n||void 0===n?void 0:n.providerId,l[t].subAccount=null===n||void 0===n?void 0:n.subAccount})),(0,i.Rz)(f,l),(0,i.Rz)(N,null),(0,i.Rz)(y,null),S((0,i.M5)())};return(0,m.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"720px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Registrando Pago"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),null!==Z&&void 0!==Z&&Z.account?(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(a=(0,i.bh)("account_ids"))||void 0===a||null===(o=a[null===Z||void 0===Z?void 0:Z.account])||void 0===o?void 0:o.code}),(0,m.jsx)("div",{className:"name",children:null===(n=(0,i.bh)("account_ids"))||void 0===n||null===(c=n[null===Z||void 0===Z?void 0:Z.account])||void 0===c?void 0:c.name})]}),(0,m.jsx)("div",{className:"flexSpace"})]}):null]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)(x,{init:null===(r=(0,i.bh)(j))||void 0===r?void 0:r.date,updDate:e=>B("date",e)}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(b,{init:null===(h=(0,i.bh)(j))||void 0===h?void 0:h.paymentDocument,label:"Documento de Pago",width:200,updChanges:e=>B("paymentDocument",e)})]}),(0,m.jsx)(b,{init:null===(p=(0,i.bh)(j))||void 0===p?void 0:p.description,label:"Descripcion",width:520,updChanges:e=>B("description",e)}),(0,m.jsxs)("div",{className:" _dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(w,{updObs:S,confirm:E}),(0,t.OpenModal)(e)},children:"Provedores"})]}),(0,i.bh)(f)&&(0,i._2)((0,i.bh)(f)).length>0?(0,m.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Balance"})]}),(0,i.bh)(f)&&(null===(_=(0,i._2)((0,i.bh)(f)))||void 0===_?void 0:_.map(((e,l)=>(0,m.jsx)(z,{idKey:e,data:(0,i.bh)(f)[e],updObs:S},e)))),(0,m.jsx)(z,{data:{account:null===Z||void 0===Z?void 0:Z.account,amount:k((0,i.bh)(f)),type:"credit",document:null===(I=(0,i.bh)(j))||void 0===I?void 0:I.paymentDocument},updObs:S})]}):null,(0,m.jsx)(u.Z,{collectionName:A}),null!==(R=(0,i.bh)(j))&&void 0!==R&&R.paymentDocument&&k((0,i.bh)(f))>0?(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("button",{onClick:async()=>{var e,l,a;let d=(0,i.bh)(j)||{},o=[];d.date?d.date=new Date(d.date).getTime():d.date=(new Date).getTime()+800;let n=await(0,i.fN)(d.date),c={date:d.date,comprobanteId:n,description:d.description,businessId:null===(e=(0,i.bh)("profileUser"))||void 0===e?void 0:e.businessId,year:new Date(d.date).getFullYear()};delete d.date;let s="",r=(0,i.bh)(f)&&(0,i._2)((0,i.bh)(f));r&&(null===r||void 0===r||r.map(((e,l)=>{let a={...d},t=(0,i.bh)(f)[e];a.document=null===t||void 0===t?void 0:t.document,s+=(null===t||void 0===t?void 0:t.document)+" ; ",a.account=null===t||void 0===t?void 0:t.account,a.subAccount=null===t||void 0===t?void 0:t.subAccount,a.providerId=null===t||void 0===t?void 0:t.providerId,a.type=null===t||void 0===t?void 0:t.type,a.amount=null===t||void 0===t?void 0:t.amount,a.payOrCollect="pay",a.operationId=(0,i.M5)(),o.push(a)})));let u=(0,i.bh)(A)&&(0,i._2)((0,i.bh)(A));u&&(null===u||void 0===u||u.map(((e,l)=>{let a={...d},t=(0,i.bh)(A)[e];a.document=a.paymentDocument,a.account=null===t||void 0===t?void 0:t.account,a.subAccount=null===t||void 0===t?void 0:t.subAccount,a.type="debit",a.amount=null===t||void 0===t?void 0:t.amount,a.operationId=(0,i.M5)(),o.push(a);let n={...d};n.document=n.paymentDocument,n.paymentDocument=s,n.account=null===Z||void 0===Z?void 0:Z.account,n.type="credit",n.amount=1*(null===t||void 0===t?void 0:t.amount),n.operationId=(0,i.M5)(),o.push(n)})));let v={...d},m=k((0,i.bh)(f));v.document=v.paymentDocument,v.paymentDocument=s,v.account=null===Z||void 0===Z?void 0:Z.account;let h=null===(l=(0,i.bh)("account_ids"))||void 0===l?void 0:l[v.account];h.payOrCollect&&(v.payOrCollect=h.payOrCollect),v.type="credit",v.amount=1*m,v.operationId=(0,i.M5)(),o.push(v);let b={...null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.add_multi_opera};b.params=c,b.form=o;const p=(0,i.I7)(b);await p&&setTimeout((()=>{(0,i.Rz)(N,null),(0,i.Rz)(j,null),(null===D||void 0===D?void 0:D.modalID)&&(0,t.CloseModal)({id:null===D||void 0===D?void 0:D.modalID}),T({pathname:"/accounting-ledger",search:"?cId=".concat(n)})}),400)},children:"Guardar"})})]}):null]})},z=e=>{var l,a;let{data:d}=e;return 1*(null===d||void 0===d?void 0:d.amount)===0?null:(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:(0,m.jsx)(_,{data:null===(l=(0,i.bh)("account_ids"))||void 0===l?void 0:l[null===d||void 0===d?void 0:d.account],color:"debit"===d.type?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null!==d&&void 0!==d&&d.subAccount?(0,m.jsx)(_,{data:null===(a=(0,i.bh)("sub_account_ids"))||void 0===a?void 0:a[null===d||void 0===d?void 0:d.subAccount],color:"debit"===d.type?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"}):null}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null===d||void 0===d?void 0:d.document}),(0,m.jsxs)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:["$",(1*(null===d||void 0===d?void 0:d.amount)).toFixed(2)]})]})},w=e=>{var l,a,o,c,s,r,u,v,h,b,x,_,j,N,f,A;let{data:I,confirm:z}=e;const[w,k]=(0,d.useState)(0),D=()=>{k((0,i.M5)())};return(0,m.jsxs)("div",{style:{maxHeight:"92vh",minHeight:"90vh",width:"720px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Pagos por Provedores"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{style:{margin:"18px 0"},children:null!==(l=(0,i.bh)(y))&&void 0!==l&&l.account?(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:()=>{(0,i.Rz)(y,null),k((0,i.M5)())},children:null===(a=(0,i.bh)("account_ids"))||void 0===a||null===(o=a[null===(c=(0,i.bh)(y))||void 0===c?void 0:c.account])||void 0===o?void 0:o.code}),(0,m.jsx)("div",{className:"name",children:null===(s=(0,i.bh)("account_ids"))||void 0===s||null===(r=s[null===(u=(0,i.bh)(y))||void 0===u?void 0:u.account])||void 0===r?void 0:r.name})]}),(0,m.jsx)("div",{className:"flexSpace"}),null!==(v=(0,i.bh)(y))&&void 0!==v&&v.subAccount?(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"code",children:null===(h=(0,i.bh)("sub_account_ids"))||void 0===h||null===(b=h[null===(x=(0,i.bh)(y))||void 0===x?void 0:x.subAccount])||void 0===b?void 0:b.subAccount}),(0,m.jsx)("div",{className:"name",children:null===(_=(0,i.bh)("sub_account_ids"))||void 0===_||null===(j=_[null===(N=(0,i.bh)(y))||void 0===N?void 0:N.subAccount])||void 0===j?void 0:j.subAccountName})]}):null]}),(0,m.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_50",children:"Documento"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Balance"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_5"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Pagar"})]}),(0,i.bh)(g)&&(null===(f=(0,i._2)((0,i.bh)(g)))||void 0===f?void 0:f.map(((e,l)=>(0,m.jsx)(R,{idKey:e,data:(0,i.bh)(g)[e],updObs:k},e))))]})]}):(0,m.jsx)(p,{placeholder:"buscar un provedor",width:420,handleClick:e=>{let l={account:null===e||void 0===e?void 0:e.account,subAccount:null===e||void 0===e?void 0:e.subAccount,providerId:null===e||void 0===e?void 0:e.providerId};(0,i.Rz)(y,l),(0,n.nr)(l,D)}})}),null!==(A=(0,i.bh)(y))&&void 0!==A&&A.subAccount?(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{z&&z(),(null===I||void 0===I?void 0:I.modalID)&&(0,t.CloseModal)({id:null===I||void 0===I?void 0:I.modalID})},children:"Guardar"})]}):null]})},R=e=>{let{data:l,updObs:a,idKey:o}=e;const[t,n]=(0,d.useState)(0),c=(e,l,a)=>{let d=(0,i.bh)(N)||{};a?(d[a]||(d[a]={}),d[a][e]=l):d[e]=l,(0,i.Rz)(N,d)};return 1*(null===l||void 0===l?void 0:l.amount)===0?null:(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_50",style:{marginTop:10},children:null===l||void 0===l?void 0:l.document}),(0,m.jsxs)("div",{className:"tr_bar tr_bar_20",style:{marginTop:10},children:["$",(1*(null===l||void 0===l?void 0:l.amount)).toFixed(2)]}),(0,m.jsx)("div",{className:"tr_bar tr_bar_5",style:{marginTop:10},children:t>(null===l||void 0===l?void 0:l.amount)?(0,m.jsx)("div",{className:"icon",children:(0,m.jsx)(h,{name:"alert",color:"#c62828"})}):null}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,m.jsx)(b,{init:t,width:80,updChanges:e=>{return n(d=e),c(null===l||void 0===l?void 0:l.document,d),void a((0,i.M5)());var d}})})]})},k=e=>{var l;let a=0;return e&&(null===(l=(0,i._2)(e))||void 0===l||l.map(((l,d)=>{var o;a+=1*(0,i.Zv)(null===(o=e[l])||void 0===o?void 0:o.amount,2)}))),a}},1232:(e,l,a)=>{a.d(l,{GP:()=>c,N$:()=>t,hF:()=>r,i7:()=>i,nr:()=>o,pj:()=>u});var d=a(2350);const i=async(e,l)=>{var a,i;let o={...null===(a=(0,d.bh)((0,d.hQ)()))||void 0===a?void 0:a.filter_search_opera};o.params={businessId:null===(i=(0,d.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,d.bh)("date_current_year")};const t=(0,d.I7)(o),c=await t;if(c&&!c.error){(0,d.Rz)("collect_list",c),(0,d.Rz)("collect_by_doc",n(c)),(0,d.Rz)("collect_by_docM",n(c));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);s(c,l)}l&&l()},o=async(e,l)=>{var a,i;let o={...null===(a=(0,d.bh)((0,d.hQ)()))||void 0===a?void 0:a.filter_search_opera};o.params={businessId:null===(i=(0,d.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,d.bh)("date_current_year")};const t=(0,d.I7)(o),c=await t;if(c&&!c.error){(0,d.Rz)("toPay_list",c),(0,d.Rz)("toPay_by_doc",n(c,!0)),(0,d.Rz)("toPay_by_docM",n(c,!0));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);s(c,l)}l&&l()},t=async e=>{var l,a;let i={...null===(l=(0,d.bh)((0,d.hQ)()))||void 0===l?void 0:l.search_opera};i.params={businessId:null===(a=(0,d.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,d.bh)("search_acc_record"),year:(0,d.bh)("date_current_year")};const o=(0,d.I7)(i),t=await o;t&&!t.error&&((0,d.Rz)("comprobante_list",t),(0,d.Rz)("comprobante_by_doc",n(t))),e&&e()};function n(e,l){var a={};let i=e&&(0,d._2)(e);return i.length>0?i.map((i=>{var o;let t=e[i],n=null===(o=t.document)||void 0===o?void 0:o.trim();if(!a[n]){a[n]={},["date","description","document","entryName"].forEach((e=>{a[n][e]=t[e]})),a[n].amount=0,a[n].operations=[]}if(t.type){let e=(0,d.Zv)(t.amount,2),i=(0,d.Zv)(a[n].amount,2),o=0;o=l?1*i+e*("debit"===t.type?-1:1):1*i+e*("credit"===t.type?-1:1),a[n].amount=(0,d.Zv)(o,2),a[n].operations.push(function(e){var l,a;let i={};i.account=null===(l=(0,d.bh)("account_ids"))||void 0===l?void 0:l[e.account],i.sub_account=null===(a=(0,d.bh)("sub_account_ids"))||void 0===a?void 0:a[e.subAccount],i.comprobanteId=e.comprobanteId,i.operationId=e.operationId,i.date=e.date,i.description=e.description;let o=(0,d.Zv)(e.amount,2);"credit"===e.type?(i.debit=0,i.credit=o):"debit"===e.type&&(i.credit=0,i.debit=o);return i}(t))}})):a=null,a}const c=(e,l,a)=>(0,d.MV)("SumDocuments",[e,l,a],(()=>{var a;let i=0;return e&&(null===(a=(0,d._2)(e))||void 0===a||a.map(((a,d)=>{var o;i+=1*(null===(o=e[a])||void 0===o?void 0:o[l])}))),i})),s=async(e,l,a)=>{let i=(0,d.bh)("rec_by_acc")||{};i[l]=((e,l,a)=>{var i;let o=0;return e&&(null===(i=(0,d._2)(e))||void 0===i||i.map(((l,a)=>{var i;let t=(0,d.Zv)(e[l].amount,2);o+=t*("credit"===(null===(i=e[l])||void 0===i?void 0:i.type)?-1:1)}))),o})(e)||"no",(0,d.Rz)("rec_by_acc",i),a&&a()},r=async(e,l,a)=>{var i,o;let t={...null===(i=(0,d.bh)((0,d.hQ)()))||void 0===i?void 0:i.filter_search_opera};t.params={businessId:null===(o=(0,d.bh)("profileUser"))||void 0===o?void 0:o.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,d.bh)("date_current_year")};const n=(0,d.I7)(t),c=await n;c&&!c.error&&s(c,l),a&&a()},u=async(e,l,a)=>{var i,o;let t={...null===(i=(0,d.bh)((0,d.hQ)()))||void 0===i?void 0:i.search_subacc_acc};t.params={businessId:null===(o=(0,d.bh)("profileUser"))||void 0===o?void 0:o.businessId,":account":e,":search":l,year:(0,d.bh)("date_current_year")};const n=(0,d.I7)(t),c=await n;if(c&&!c.error){var s;let e=null===(s=(0,d._2)(c))||void 0===s?void 0:s[0];a&&a(c[e])}}},6021:()=>{}}]);
//# sourceMappingURL=1877.07e827d8.chunk.js.map