"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[619,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>r,OpenModal:()=>o,default:()=>d});var a=t(2791),i=t(5408),s=t(2350),n=t(184);const c="listDialog_mdh392",d=()=>{const e=(0,s.bh)("listDialog")||{};(0,i.Z)(c);let l=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:l.map(((l,t)=>{let i=e[l];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let t={zIndex:i.zIndex},s=null,c=i.data;return i.content&&(s=a.cloneElement(i.content,{data:c})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:s})}),i.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},o=e=>{let l=(0,s.bh)("listDialog")||{},t=(0,s.M5)();l[t]||(l[t]={}),l[t].visible=!0;let a={};e.props?(a=e.props,a.modalID=t):a.modalID=t;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[t].width&&a.height===l[t].height||(l[t].height=a.height+10,l[t].width=a.width,(0,s.Rz)("listDialog",l),(0,s.wt)(c)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=a,(0,s.Rz)("listDialog",l),(0,s.wt)(c),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,s.Rz)("modalOpen",t),(0,s.wt)(c)}),125)},r=e=>{let l=(0,s.bh)("listDialog")||{},t=e.id;if(l[t]){var a,i,n;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(a=l[t])||void 0===a||null===(i=a.data)||void 0===i||null===(n=i.closeEvent)||void 0===n||n.call(i),(0,s.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,s.wt)(c),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,s.Rz)("modalOpen",null)}),750)}}},619:(e,l,t)=>{t.r(l),t.d(l,{default:()=>_});var a=t(2791),i=t(2350),s=t(2647),n=(t(4719),t(9760)),c=t(9661),d=t(7689),o=t(24),r=(t(3728),t(184));const u=(0,s.PU)(),v=(0,s.Np)(),h=(0,s.tL)(),m=(0,c.a)(),b=(0,s.JC)(),p=(0,o.f_)(),x="new_operation_comprobante",_=e=>{var l,t,s,c,o,b,_,y,N,w,I,f,k,C,z,R;let{data:D,confirm:F}=e;const[O,P]=(0,a.useState)(!1),[L,M]=(0,a.useState)(0),A=(0,d.s0)();(0,a.useEffect)((()=>{O||(P(!0),(0,i.Rz)("accountPicker",{}),M((0,i.M5)()))}));const S=(e,l,t)=>{let a=(0,i.bh)(x)||{};t?(a[t]||(a[t]={}),a[t][e]=l):a[e]=l,(0,i.Rz)(x,a),M((0,i.M5)())},E=(e,l,t)=>{let a=(0,i.bh)("accountPicker")||{};t?(a[t]||(a[t]={}),a[t][e]=l):a[e]=l,(0,i.Rz)("accountPicker",a),M((0,i.M5)())},T=e=>{let l=(0,i.bh)("accountListOnCmp")||{};delete l[e],(0,i.Rz)("accountListOnCmp",l),M((0,i.M5)())};let B=null===(l=(0,i.bh)("account_ids"))||void 0===l?void 0:l[null===(t=(0,i.bh)("accountPicker"))||void 0===t?void 0:t.account],q=null===(s=(0,i.bh)("sub_account_ids"))||void 0===s?void 0:s[null===(c=(0,i.bh)("accountPicker"))||void 0===c?void 0:c.subAccount];return(0,r.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"760px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Asiento Manual"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)(p,{init:null===(o=(0,i.bh)(x))||void 0===o?void 0:o.date,updDate:e=>S("date",e)}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)(v,{init:null===(b=(0,i.bh)(x))||void 0===b?void 0:b.description,label:"Descripcion",width:520,updChanges:e=>S("description",e)}),(0,r.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(_=(0,i.bh)("accountPicker"))&&void 0!==_&&_.account?(0,r.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,r.jsxs)("div",{className:" acc_dtls",children:[(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===B||void 0===B?void 0:B.code}),(0,r.jsx)("div",{className:"name",children:null===B||void 0===B?void 0:B.name})]}),(0,r.jsx)("div",{className:"flexSpace"}),q?(0,r.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,r.jsx)("div",{className:"code",children:null===q||void 0===q?void 0:q.subAccount}),(0,r.jsx)("div",{className:"name",children:null===q||void 0===q?void 0:q.subAccountName})]}):null]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"icon",onClick:()=>{(0,i.Rz)("accountPicker",null),M((0,i.M5)())},children:(0,r.jsx)(u,{name:"outline_edit",color:"#1a73e8"})})]}):(0,r.jsx)(m,{placeholder:"buscar una cuenta",width:420,handleClick:(e,l)=>{let t={account:e,subAccount:l};(0,i.Rz)("accountPicker",t),M((0,i.M5)())}}),null!==(y=(0,i.bh)("accountPicker"))&&void 0!==y&&y.account?(0,r.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(h,{data:[{label:"Debito",id:"debit"},{label:"Credito",id:"credit"}],active:null===(N=(0,i.bh)("accountPicker"))||void 0===N?void 0:N.type,updSelect:e=>E("type",e)}),(0,r.jsx)("div",{className:"flexSpace"})]}):null,null!==(w=(0,i.bh)("accountPicker"))&&void 0!==w&&w.account&&null!==(I=(0,i.bh)("accountPicker"))&&void 0!==I&&I.type?(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)(v,{init:null===(f=(0,i.bh)("accountPicker"))||void 0===f?void 0:f.document,label:"Documento",width:120,updChanges:e=>E("document",e)}),(0,r.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,r.jsx)(v,{init:null===(k=(0,i.bh)("accountPicker"))||void 0===k?void 0:k.amount,label:"Importe",width:120,type:"number",updChanges:e=>E("amount",e)})}),(0,r.jsx)("div",{className:"flexSpace"}),null!==(C=(0,i.bh)("accountPicker"))&&void 0!==C&&C.amount&&null!==(z=(0,i.bh)("accountPicker"))&&void 0!==z&&z.document?(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("button",{onClick:()=>{let e={...(0,i.bh)("accountPicker")}||{},l={...(0,i.bh)("accountPicker")}||{},t={...(0,i.bh)("accountListOnCmp")}||{};t[e.account+"_"+e.subAccount+"_"+e.document]=e,(0,i.Rz)("accountListOnCmp",t),l.document="",l.amount="",l.type="",(0,i.Rz)("accountPicker",l),M((0,i.M5)())},children:"Agregar"})}):null]}):null,(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"Cuenta"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"Sub Cuenta"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"Documento"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"Debito"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"Credito"})]}),(0,i.bh)("accountListOnCmp")&&(null===(R=(0,i._2)((0,i.bh)("accountListOnCmp")))||void 0===R?void 0:R.map(((e,l)=>(0,r.jsx)(j,{idKey:e,data:(0,i.bh)("accountListOnCmp")[e],deleteItem:T},e))))]}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),g((0,i.bh)("accountListOnCmp"))?(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("button",{onClick:async()=>{var e,l;let t=(0,i.bh)(x);t.date?t.date=new Date(t.date).getTime():t.date=(new Date).getTime()+800;let a=[],s=await(0,i.fN)(t.date),c={date:t.date,comprobanteId:s,description:t.description,businessId:null===(e=(0,i.bh)("profileUser"))||void 0===e?void 0:e.businessId,year:new Date(t.date).getFullYear()};delete t.date;let d=(0,i.bh)("accountListOnCmp")&&(0,i._2)((0,i.bh)("accountListOnCmp"));d&&(null===d||void 0===d||d.map((async(e,l)=>{var s;let n={...t},c={...(0,i.bh)("accountListOnCmp")[e]};n.account=c.account;let d=null===(s=(0,i.bh)("account_ids"))||void 0===s?void 0:s[c.account];d.payOrCollect&&(n.payOrCollect=d.payOrCollect),n.subAccount=c.subAccount,n.type=c.type,n.document=c.document.trim(),n.amount=1*c.amount,n.operationId=(0,i.M5)(),a.push(n)})));let o={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.add_multi_opera};o.params=c,o.form=a;const r=(0,i.I7)(o);await r&&((null===D||void 0===D?void 0:D.modalID)&&(0,n.CloseModal)({id:null===D||void 0===D?void 0:D.modalID}),setTimeout((()=>{(0,i.Rz)("accountListOnCmp",null),(0,i.Rz)(x,null),M((0,i.M5)()),F&&F(),A({pathname:"/accounting-ledger",search:"?cId=".concat(s)})}),400))},children:"Guardar"})}):null]})]})},j=e=>{var l,t;let{data:a,deleteItem:s,idKey:n}=e,c=null===(l=(0,i.bh)("account_ids"))||void 0===l?void 0:l[null===a||void 0===a?void 0:a.account],d=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[null===a||void 0===a?void 0:a.subAccount];return(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,r.jsx)(b,{data:c,labelField:"code",infoField:"name"})}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,r.jsx)(b,{data:d,labelField:"subAccount",infoField:"subAccountName"})}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:null!==a&&void 0!==a&&a.document?a.document:""}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"debit"===(null===a||void 0===a?void 0:a.type)?a.amount:0}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"credit"===(null===a||void 0===a?void 0:a.type)?a.amount:0}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"icon",onClick:()=>{s(n)},children:(0,r.jsx)(u,{name:"outline_delete",color:"#c62828"})})]})},g=e=>{let l=0,t=e&&(0,i._2)(e);return t&&(null===t||void 0===t||t.map(((t,a)=>{let i=e[t],s=l.toFixed(2),n=null!==i&&void 0!==i&&i.amount?"debit"===(null===i||void 0===i?void 0:i.type)?parseFloat(i.amount):-1*parseFloat(i.amount):0;l=n+parseFloat(s)}))),t&&(null===t||void 0===t?void 0:t.length)>0&&0===l}},3728:(e,l,t)=>{t.d(l,{NA:()=>c,g5:()=>n,ph:()=>i,yq:()=>s});var a=t(2350);const i=async e=>{var l,t;let i=null===(l=(0,a.bh)((0,a.hQ)()))||void 0===l?void 0:l.all_entries;i.params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId};const s=(0,a.I7)(i),n=await s;n&&((0,a.Rz)("entries_list",n),(0,a.Rz)("entries_ids",(0,a.ME)(n,"accountingEntryId")),e&&e())},s=async e=>{var l,t;let i=null===(l=(0,a.bh)((0,a.hQ)()))||void 0===l?void 0:l.search_entries;i.params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId,":search":(0,a.bh)("search_entry_qry")};const s=(0,a.I7)(i),n=await s;n&&((0,a.Rz)("entries_list",n),e&&e())},n=async(e,l)=>{var t,i;let s=null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.delete_entries;s.params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,accountingEntryId:e};const n=(0,a.I7)(s);await n&&l&&l()},c=async e=>{const l=(0,a.I7)({query:"getLastSequence"}),t=await l;if(t)return t}},4719:()=>{}}]);
//# sourceMappingURL=619.c06cd805.chunk.js.map