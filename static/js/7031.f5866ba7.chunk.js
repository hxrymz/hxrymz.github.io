"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7031,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>r,OpenModal:()=>s,default:()=>n});var o=t(2791),a=t(5408),i=t(2350),d=t(184);const c="listDialog_mdh392",n=()=>{const e=(0,i.bh)("listDialog")||{};(0,a.Z)(c);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,t)=>{let a=e[l];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let t={zIndex:a.zIndex},i=null,c=a.data;return a.content&&(i=o.cloneElement(a.content,{data:c})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:i})}),a.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},s=e=>{let l=(0,i.bh)("listDialog")||{},t=(0,i.M5)();l[t]||(l[t]={}),l[t].visible=!0;let o={};e.props?(o=e.props,o.modalID=t):o.modalID=t;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===l[t].width&&o.height===l[t].height||(l[t].height=o.height+10,l[t].width=o.width,(0,i.Rz)("listDialog",l),(0,i.wt)(c)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=o,(0,i.Rz)("listDialog",l),(0,i.wt)(c),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(c)}),125)},r=e=>{let l=(0,i.bh)("listDialog")||{},t=e.id;if(l[t]){var o,a,d;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(o=l[t])||void 0===o||null===(a=o.data)||void 0===a||null===(d=a.closeEvent)||void 0===d||d.call(a),(0,i.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(c),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},7031:(e,l,t)=>{t.r(l),t.d(l,{default:()=>_});var o=t(2791),a=t(2350),i=t(2647),d=(t(6021),t(9760)),c=t(9179),n=t(1232),s=t(24),r=t(184);const u=(0,i.PU)(),v=(0,s.f_)(),b=(0,i.Np)(),h=(0,i.tL)(),m=(0,c.NC)(),p="new_cobro_comprobante",_=e=>{var l,t,i,c,s,u,_,g;let{data:w,confirm:I}=e;const[j,f]=(0,o.useState)(!1),[N,z]=(0,o.useState)(0);(0,o.useEffect)((()=>{j||(f(!0),(0,a.Rz)("accountPicker",{}),z((0,a.M5)()))}));const R=(e,l,t)=>{let o=(0,a.bh)(p)||{};t?(o[t]||(o[t]={}),o[t][e]=l):o[e]=l,(0,a.Rz)(p,o),z((0,a.M5)())},C=(e,l)=>{let t={account:e,subAccount:l};(0,a.Rz)("PaymentMethodAccount",t)};let D=(0,n.GP)((0,a.bh)("collect_by_doc"),"amount");return(0,r.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Registrando Cobro"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(h,{data:[{label:"Cheque",id:"check"},{label:"Tarjeta",id:"card"}],active:(null===(l=(0,a.bh)(p))||void 0===l?void 0:l.paymentType)||"check",updSelect:e=>R("paymentType",e)}),(0,r.jsx)("div",{className:"flexSpace"})]})}),"card"===(null===(t=(0,a.bh)(p))||void 0===t?void 0:t.paymentType)?(0,r.jsx)(m,{query:"Cred",type:null===(i=(0,a.bh)(p))||void 0===i?void 0:i.paymentType,handleClick:C}):(0,r.jsx)(m,{query:"Efectivo",type:null===(c=(0,a.bh)(p))||void 0===c?void 0:c.paymentType,handleClick:C}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)(v,{init:null===(s=(0,a.bh)(p))||void 0===s?void 0:s.date,updDate:e=>R("date",e)}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(b,{init:null===(u=(0,a.bh)(p))||void 0===u?void 0:u.collectDocument,label:"Documento de Cobro",width:200,updChanges:e=>R("collectDocument",e)})]}),(0,r.jsx)(b,{init:null===(_=(0,a.bh)(p))||void 0===_?void 0:_.description,label:"Descripcion",width:520,updChanges:e=>R("description",e)}),D?(0,r.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,r.jsx)("div",{className:"tr_bar tr_bar_40",children:"Documento"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_20",children:"Balance"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_10"}),(0,r.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Cobrar"})]}),(0,a.bh)("collect_by_doc")&&(null===(g=(0,a._2)((0,a.bh)("collect_by_doc")))||void 0===g?void 0:g.map(((e,l)=>(0,r.jsx)(y,{idKey:e,data:(0,a.bh)("collect_by_doc")[e],updObs:z},e))))]}):null,(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("button",{onClick:async()=>{var e,l,t;let o=(0,a.bh)(p),i=[];o.date?o.date=new Date(o.date).getTime():o.date=(new Date).getTime()+800;let c=await(0,a.fN)(o.date);o.comprobanteId=c;let n="",s=(0,a.bh)("multi_collect_by_doc")&&(0,a._2)((0,a.bh)("multi_collect_by_doc"));s&&(null===s||void 0===s||s.map(((e,l)=>{var t,d,c,s,r;let u={...o},v=(0,a.bh)("multi_collect_by_doc")[e];u.document=e,n+=e+" ; ",u.account=null===(t=(0,a.bh)("Acc2Collect"))||void 0===t?void 0:t.account,u.subAccount=null===(d=(0,a.bh)("Acc2Collect"))||void 0===d?void 0:d.subAccount,u.customerId=null===(c=(0,a.bh)("Acc2Collect"))||void 0===c?void 0:c.customerId,u.type="credit",u.amount=1*v,u.payOrCollect="collect",u.operationId=(0,a.M5)();let b={...null===(s=(0,a.bh)((0,a.hQ)()))||void 0===s?void 0:s.add_opera};b.params={businessId:null===(r=(0,a.bh)("profileUser"))||void 0===r?void 0:r.businessId,year:new Date(o.date).getFullYear()},b.form=u,i.push(b)})));let r={...o},u=x((0,a.bh)("multi_collect_by_doc"));r.document=r.collectDocument,r.collectDocument=n,r.account=(0,a.bh)("PaymentMethodAccount").account;let v=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[r.account];v.payOrCollect&&(r.payOrCollect=v.payOrCollect),r.subAccount=(0,a.bh)("PaymentMethodAccount").subAccount,r.type="debit",r.amount=1*u,r.operationId=(0,a.M5)();let b={...null===(l=(0,a.bh)((0,a.hQ)()))||void 0===l?void 0:l.add_opera};b.params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:new Date(o.date).getFullYear()},b.form=r,i.push(b);const h=i.map((async e=>{const l=(0,a.I7)(e);await l}));await Promise.all(h),(null===w||void 0===w?void 0:w.modalID)&&(0,d.CloseModal)({id:null===w||void 0===w?void 0:w.modalID}),setTimeout((()=>{(0,a.Rz)("multi_collect_by_doc",null),(0,a.Rz)(p,null),z((0,a.M5)()),I&&I()}),400)},children:"Guardar"})})]})]})},y=e=>{let{data:l,updObs:t,idKey:i}=e;const[d,c]=(0,o.useState)(0),n=(e,l,t)=>{let o=(0,a.bh)("multi_collect_by_doc")||{};t?(o[t]||(o[t]={}),o[t][e]=l):o[e]=l,(0,a.Rz)("multi_collect_by_doc",o)};return 1*(null===l||void 0===l?void 0:l.amount)==0?null:(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,r.jsx)("div",{className:"tr_bar tr_bar_40",style:{marginTop:10},children:null===l||void 0===l?void 0:l.document}),(0,r.jsxs)("div",{className:"tr_bar tr_bar_20",style:{marginTop:10},children:["$",(1*(null===l||void 0===l?void 0:l.amount)).toFixed(2)]}),(0,r.jsx)("div",{className:"tr_bar tr_bar_10",style:{marginTop:10},children:d>(null===l||void 0===l?void 0:l.amount)?(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)(u,{name:"alert",color:"#c62828"})}):null}),(0,r.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,r.jsx)(b,{init:d,width:80,updChanges:e=>{return c(o=e),n(null===l||void 0===l?void 0:l.document,o),void t((0,a.M5)());var o}})})]})},x=e=>{var l;let t=0;return e&&(null===(l=(0,a._2)(e))||void 0===l||l.map(((l,o)=>{t+=(0,a.Zv)(e[l],2)}))),t}},1232:(e,l,t)=>{t.d(l,{GP:()=>n,N$:()=>d,hF:()=>r,i7:()=>a,nr:()=>i,pj:()=>u});var o=t(2350);const a=async(e,l)=>{var t,a;let i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.filter_search_opera};i.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount};const d=(0,o.I7)(i),n=await d;if((0,o.wL)("getall_collects"),(0,o.wL)(i),(0,o.wL)(n),n&&!n.error){(0,o.Rz)("collect_list",n),(0,o.Rz)("collect_by_doc",c(n)),(0,o.Rz)("collect_by_docM",c(n));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);s(n,l)}l&&l()},i=async(e,l)=>{var t,a;let i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.filter_search_opera};i.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount};const d=(0,o.I7)(i),n=await d;if(n&&!n.error){(0,o.Rz)("toPay_list",n),(0,o.Rz)("toPay_by_doc",c(n,!0)),(0,o.Rz)("toPay_by_docM",c(n,!0));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);s(n,l)}l&&l()},d=async e=>{var l,t;let a={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.search_opera};a.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,":search":(0,o.bh)("search_acc_record")};const i=(0,o.I7)(a),d=await i;d&&!d.error&&((0,o.Rz)("comprobante_list",d),(0,o.Rz)("comprobante_by_doc",c(d))),e&&e()};function c(e,l){var t={};let a=e&&(0,o._2)(e);return a.length>0?a.map((a=>{var i;let d=e[a],c=null===(i=d.document)||void 0===i?void 0:i.trim();if(!t[c]){t[c]={},["date","description","document","entryName"].forEach((e=>{t[c][e]=d[e]})),t[c].amount=0,t[c].operations=[]}if(d.type){let e=(0,o.Zv)(d.amount,2),a=(0,o.Zv)(t[c].amount,2),i=0;i=l?1*a+e*("debit"===d.type?-1:1):1*a+e*("credit"===d.type?-1:1),t[c].amount=(0,o.Zv)(i,2),t[c].operations.push(function(e){var l,t;let a={};a.account=null===(l=(0,o.bh)("account_ids"))||void 0===l?void 0:l[e.account],a.sub_account=null===(t=(0,o.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],a.comprobanteId=e.comprobanteId,a.operationId=e.operationId,a.date=e.date,a.description=e.description;let i=(0,o.Zv)(e.amount,2);"credit"===e.type?(a.debit=0,a.credit=i):"debit"===e.type&&(a.credit=0,a.debit=i);return a}(d))}})):t=null,t}const n=(e,l,t)=>(0,o.MV)("SumDocuments",[e,l,t],(()=>{var t;let a=0;return e&&(null===(t=(0,o._2)(e))||void 0===t||t.map(((t,o)=>{var i;a+=1*(null===(i=e[t])||void 0===i?void 0:i[l])}))),a})),s=async(e,l,t)=>{let a=(0,o.bh)("rec_by_acc")||{};a[l]=((e,l,t)=>{var a;let i=0;return e&&(null===(a=(0,o._2)(e))||void 0===a||a.map(((l,t)=>{var a;let d=(0,o.Zv)(e[l].amount,2);i+=d*("credit"===(null===(a=e[l])||void 0===a?void 0:a.type)?-1:1)}))),i})(e)||"no",(0,o.Rz)("rec_by_acc",a),t&&t()},r=async(e,l,t)=>{var a,i;let d={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.filter_search_opera};d.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount};const c=(0,o.I7)(d),n=await c;n&&!n.error&&s(n,l),t&&t()},u=async(e,l,t)=>{var a,i;let d={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.search_subacc_acc};d.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":e,":search":l};const c=(0,o.I7)(d),n=await c;if((0,o.wL)("searchSubAccbyCode"),(0,o.wL)(d),(0,o.wL)(n),n&&!n.error){var s;let e=null===(s=(0,o._2)(n))||void 0===s?void 0:s[0];t&&t(n[e])}}},6021:()=>{}}]);
//# sourceMappingURL=7031.f5866ba7.chunk.js.map