"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8603,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>r,OpenModal:()=>s,default:()=>n});var o=t(2791),a=t(5408),d=t(2350),i=t(184);const c="listDialog_mdh392",n=()=>{const e=(0,d.bh)("listDialog")||{};(0,a.Z)(c);let l=Object.keys(e);return(0,i.jsx)(i.Fragment,{children:l.map(((l,t)=>{let a=e[l];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let t={zIndex:a.zIndex},d=null,c=a.data;return a.content&&(d=o.cloneElement(a.content,{data:c})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:d})}),a.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},s=e=>{let l=(0,d.bh)("listDialog")||{},t=(0,d.M5)();l[t]||(l[t]={}),l[t].visible=!0;let o={};e.props?(o=e.props,o.modalID=t):o.modalID=t;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===l[t].width&&o.height===l[t].height||(l[t].height=o.height+10,l[t].width=o.width,(0,d.Rz)("listDialog",l),(0,d.wt)(c)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=o,(0,d.Rz)("listDialog",l),(0,d.wt)(c),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,d.Rz)("modalOpen",t),(0,d.wt)(c)}),125)},r=e=>{let l=(0,d.bh)("listDialog")||{},t=e.id;if(l[t]){var o,a,i;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(o=l[t])||void 0===o||null===(a=o.data)||void 0===a||null===(i=a.closeEvent)||void 0===i||i.call(a),(0,d.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,d.wt)(c),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,d.Rz)("modalOpen",null)}),750)}}},8603:(e,l,t)=>{t.r(l),t.d(l,{default:()=>_});var o=t(2791),a=t(2350),d=t(2647),i=(t(6021),t(9760)),c=(t(9179),t(1232)),n=t(24),s=t(7689),r=t(184);const u=(0,d.PU)(),v=(0,n.f_)(),b=(0,d.Np)(),h=(0,d.tL)(),m="new_cobro2_comprobante",_=e=>{var l,t,d,n,u;let{data:_,confirm:g}=e;const[I,j]=(0,o.useState)(!1),[f,w]=(0,o.useState)(0),N=(0,s.s0)();(0,o.useEffect)((()=>{I||(j(!0),(0,a.Rz)("accountPicker",{}),w((0,a.M5)()))}));const z=(e,l,t)=>{let o=(0,a.bh)(m)||{};t?(o[t]||(o[t]={}),o[t][e]=l):o[e]=l,(0,a.Rz)(m,o),w((0,a.M5)())};let R=(0,c.GP)((0,a.bh)("collect_by_doc"),"amount");return(0,r.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"720px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Registrando Cobro"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(h,{data:[{label:"Cheque",id:"check"},{label:"Tarjeta",id:"card"}],active:null===(l=(0,a.bh)(m))||void 0===l?void 0:l.paymentType,updSelect:e=>z("paymentType",e)}),(0,r.jsx)("div",{className:"flexSpace"})]})}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)(v,{init:null===(t=(0,a.bh)(m))||void 0===t?void 0:t.date,updDate:e=>z("date",e)}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(b,{init:null===(d=(0,a.bh)(m))||void 0===d?void 0:d.collectDocument,label:"Documento de Cobro",width:200,updChanges:e=>z("collectDocument",e)})]}),(0,r.jsx)(b,{init:null===(n=(0,a.bh)(m))||void 0===n?void 0:n.description,label:"Descripcion",width:520,updChanges:e=>z("description",e)}),R?(0,r.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,r.jsx)("div",{className:"tr_bar tr_bar_40",children:"Documento"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"Balance"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_10"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Cobrar"})]}),(0,a.bh)("collect_by_doc")&&(null===(u=(0,a._2)((0,a.bh)("collect_by_doc")))||void 0===u?void 0:u.map(((e,l)=>(0,r.jsx)(p,{idKey:e,data:(0,a.bh)("collect_by_doc")[e],updObs:w},e))))]}):null,x((0,a.bh)("collect_by_doc"))?(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("button",{onClick:async()=>{var e,l,t,o;let d=(0,a.bh)(m),n=[];d.date?d.date=new Date(d.date).getTime():d.date=(new Date).getTime()+800;let s=await(0,a.fN)(d.date),r={date:d.date,comprobanteId:s,description:d.description,businessId:null===(e=(0,a.bh)("profileUser"))||void 0===e?void 0:e.businessId,year:new Date(d.date).getFullYear()};delete d.date;let u="",v=(0,a.bh)("multi_collect_by_doc")&&(0,a._2)((0,a.bh)("multi_collect_by_doc"));v&&(null===v||void 0===v||v.map(((e,l)=>{var t,o,i;let c={...d},s=(0,a.bh)("multi_collect_by_doc")[e];c.document=e,u+=e+" ; ",c.account=null===(t=(0,a.bh)("Acc2Collect"))||void 0===t?void 0:t.account,c.subAccount=null===(o=(0,a.bh)("Acc2Collect"))||void 0===o?void 0:o.subAccount,c.customerId=null===(i=(0,a.bh)("Acc2Collect"))||void 0===i?void 0:i.customerId,c.type="credit",c.amount=1*s,c.payOrCollect="collect",c.operationId=(0,a.M5)(),n.push(c)})));let b={...d},h=y((0,a.bh)("multi_collect_by_doc"));b.document=b.collectDocument,b.collectDocument=u,b.PaymentMethodType=b.paymentType,b.account=null===(l=(0,a.bh)("global_account_params"))||void 0===l||null===(t=l.cash_bank)||void 0===t?void 0:t.account,b.type="debit",b.amount=1*h,b.operationId=(0,a.M5)(),n.push(b);let p={...null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.add_multi_opera};p.params=r,p.form=n;const x=(0,a.I7)(p);await x&&setTimeout((()=>{(0,a.Rz)("multi_collect_by_doc",null),(0,a.Rz)(m,null),w((0,a.M5)()),g&&g(),(0,a.I0)()?((null===_||void 0===_?void 0:_.modalID)&&(0,i.CloseModal)({id:null===_||void 0===_?void 0:_.modalID}),N({pathname:"/accounting-ledger",search:"?cId=".concat(s)})):(0,c.i7)((0,a.bh)("Acc2Collect"),(()=>{(null===_||void 0===_?void 0:_.modalID)&&(0,i.CloseModal)({id:null===_||void 0===_?void 0:_.modalID})}))}),400)},children:"Guardar"})})]}):null]})},p=e=>{let{data:l,updObs:t,idKey:d}=e;const[i,c]=(0,o.useState)(0),n=(e,l,t)=>{let o=(0,a.bh)("multi_collect_by_doc")||{};t?(o[t]||(o[t]={}),o[t][e]=l):o[e]=l,(0,a.Rz)("multi_collect_by_doc",o)};return 1*(null===l||void 0===l?void 0:l.amount)==0?null:(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,r.jsx)("div",{className:"tr_bar tr_bar_40",style:{marginTop:10},children:null===l||void 0===l?void 0:l.document}),(0,r.jsxs)("div",{className:"tr_bar tr_bar_20",style:{marginTop:10},children:["$",(1*(null===l||void 0===l?void 0:l.amount)).toFixed(2)]}),(0,r.jsx)("div",{className:"tr_bar tr_bar_10",style:{marginTop:10},children:i>1*(null===l||void 0===l?void 0:l.amount)?(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)(u,{name:"alert",color:"#c62828"})}):null}),(0,r.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,r.jsx)(b,{init:i,width:80,type:"number",updChanges:e=>{return c(o=e),n(null===l||void 0===l?void 0:l.document,o),void t((0,a.M5)());var o}})})]})},y=e=>{var l;let t=0;return e&&(null===(l=(0,a._2)(e))||void 0===l||l.map(((l,o)=>{t=1*(0,a.Zv)(t,2)+1*(0,a.Zv)(e[l],2)}))),t},x=e=>{let l=e&&(0,a._2)(e),t=(0,a.bh)("multi_collect_by_doc"),o=!0;return l&&(null===l||void 0===l||l.map(((l,d)=>{let i=e[l],c=(0,a.Zv)(1*(null===i||void 0===i?void 0:i.amount),2),n=null!==t&&void 0!==t&&t[i.document]?(0,a.Zv)(1*t[i.document],2):0;n&&n-c>0&&(o=!1)}))),o}},1232:(e,l,t)=>{t.d(l,{GP:()=>n,N$:()=>i,hF:()=>r,i7:()=>a,nr:()=>d,pj:()=>u});var o=t(2350);const a=async(e,l)=>{var t,a;let d={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.filter_search_opera};d.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(d),n=await i;if(n&&!n.error){(0,o.Rz)("collect_list",n),(0,o.Rz)("collect_by_doc",c(n)),(0,o.Rz)("collect_by_docM",c(n));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);s(n,l)}l&&l()},d=async(e,l)=>{var t,a;let d={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.filter_search_opera};d.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(d),n=await i;if(n&&!n.error){(0,o.Rz)("toPay_list",n),(0,o.Rz)("toPay_by_doc",c(n,!0)),(0,o.Rz)("toPay_by_docM",c(n,!0));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);s(n,l)}l&&l()},i=async e=>{var l,t;let a={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.search_opera};a.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,":search":(0,o.bh)("search_acc_record"),year:(0,o.bh)("date_current_year")};const d=(0,o.I7)(a),i=await d;i&&!i.error&&((0,o.Rz)("comprobante_list",i),(0,o.Rz)("comprobante_by_doc",c(i))),e&&e()};function c(e,l){var t={};let a=e&&(0,o._2)(e);return a.length>0?a.map((a=>{var d;let i=e[a],c=null===(d=i.document)||void 0===d?void 0:d.trim();if(!t[c]){t[c]={},["date","description","document","entryName"].forEach((e=>{t[c][e]=i[e]})),t[c].amount=0,t[c].operations=[]}if(i.type){let e=(0,o.Zv)(i.amount,2),a=(0,o.Zv)(t[c].amount,2),d=0;d=l?1*a+e*("debit"===i.type?-1:1):1*a+e*("credit"===i.type?-1:1),t[c].amount=(0,o.Zv)(d,2),t[c].operations.push(function(e){var l,t;let a={};a.account=null===(l=(0,o.bh)("account_ids"))||void 0===l?void 0:l[e.account],a.sub_account=null===(t=(0,o.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],a.comprobanteId=e.comprobanteId,a.operationId=e.operationId,a.date=e.date,a.description=e.description;let d=(0,o.Zv)(e.amount,2);"credit"===e.type?(a.debit=0,a.credit=d):"debit"===e.type&&(a.credit=0,a.debit=d);return a}(i))}})):t=null,t}const n=(e,l,t)=>(0,o.MV)("SumDocuments",[e,l,t],(()=>{var t;let a=0;return e&&(null===(t=(0,o._2)(e))||void 0===t||t.map(((t,o)=>{var d;a+=1*(null===(d=e[t])||void 0===d?void 0:d[l])}))),a})),s=async(e,l,t)=>{let a=(0,o.bh)("rec_by_acc")||{};a[l]=((e,l,t)=>{var a;let d=0;return e&&(null===(a=(0,o._2)(e))||void 0===a||a.map(((l,t)=>{var a;let i=(0,o.Zv)(e[l].amount,2);d+=i*("credit"===(null===(a=e[l])||void 0===a?void 0:a.type)?-1:1)}))),d})(e)||"no",(0,o.Rz)("rec_by_acc",a),t&&t()},r=async(e,l,t)=>{var a,d;let i={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.filter_search_opera};i.params={businessId:null===(d=(0,o.bh)("profileUser"))||void 0===d?void 0:d.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,o.bh)("date_current_year")};const c=(0,o.I7)(i),n=await c;n&&!n.error&&s(n,l),t&&t()},u=async(e,l,t)=>{var a,d;let i={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.search_subacc_acc};i.params={businessId:null===(d=(0,o.bh)("profileUser"))||void 0===d?void 0:d.businessId,":account":e,":search":l,year:(0,o.bh)("date_current_year")};const c=(0,o.I7)(i),n=await c;if(n&&!n.error){var s;let e=null===(s=(0,o._2)(n))||void 0===s?void 0:s[0];t&&t(n[e])}}},6021:()=>{}}]);
//# sourceMappingURL=8603.75ce61aa.chunk.js.map