"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1832,9760],{9760:(e,l,o)=>{o.r(l),o.d(l,{CloseModal:()=>u,OpenModal:()=>s,default:()=>d});var t=o(2791),a=o(5408),c=o(2350),i=o(184);const n="listDialog_mdh392",d=()=>{const e=(0,c.bh)("listDialog")||{};(0,a.Z)(n);let l=Object.keys(e);return(0,i.jsx)(i.Fragment,{children:l.map(((l,o)=>{let a=e[l];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let o={zIndex:a.zIndex},c=null,n=a.data;return a.content&&(c=t.cloneElement(a.content,{data:n})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:o,id:l,children:c})}),a.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:e})}}):null]},l)}}))})},s=e=>{let l=(0,c.bh)("listDialog")||{},o=(0,c.M5)();l[o]||(l[o]={}),l[o].visible=!0;let t={};e.props?(t=e.props,t.modalID=o):t.modalID=o;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[o].isView=e.isView,l[o].observeResize=e.observeResize,l[o].observeResize&&(l[o].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(o,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===l[o].width&&t.height===l[o].height||(l[o].height=t.height+10,l[o].width=t.width,(0,c.Rz)("listDialog",l),(0,c.wt)(n)))}),200)),l[o].display=!0,e.zIndex&&(l[o].zIndex=e.zIndex),e.height&&(l[o].height=e.height),e.width&&(l[o].width=e.width),e.content&&(l[o].content=e.content),l[o].data=t,(0,c.Rz)("listDialog",l),(0,c.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",o),(0,c.wt)(n)}),125)},u=e=>{let l=(0,c.bh)("listDialog")||{},o=e.id;if(l[o]){var t,a,i;l[o].observeResize&&l[o].observeInterval&&clearInterval(l[o].observeInterval),l[o].display=!1,null===(t=l[o])||void 0===t||null===(a=t.data)||void 0===a||null===(i=a.closeEvent)||void 0===i||i.call(a),(0,c.Rz)("listDialog",l),delete l[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)(n),setTimeout((()=>{delete l[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750)}}},1832:(e,l,o)=>{o.r(l),o.d(l,{default:()=>y});var t=o(2791),a=o(2350),c=o(2647),i=(o(6021),o(9760)),n=o(9179),d=o(1232),s=o(24),u=o(184);const r=(0,c.PU)(),v=(0,s.f_)(),h=(0,c.Np)(),m=(0,c.tL)(),b=(0,n.NC)(),p=(0,n.a)(),_="new_cobro_comprobante",y=e=>{var l,o,c,n,s,r,y,N,A,g,f,I,C,w,z,R,M,P,D,T,k,F,S,O,E,B,U,Z,Q,q,L,G,H,V,Y,K,$,W,J;let{data:X,confirm:ee}=e;const[le,oe]=(0,t.useState)(!1),[te,ae]=(0,t.useState)(0);(0,t.useEffect)((()=>{le||(oe(!0),(0,a.Rz)("PaymentMethodAccount",null),(0,a.Rz)("accountPicker",{}),ae((0,a.M5)()))}));const ce=(e,l,o)=>{let t=(0,a.bh)(_)||{};o?(t[o]||(t[o]={}),t[o][e]=l):t[e]=l,(0,a.Rz)(_,t),ae((0,a.M5)())},ie=(e,l)=>{let o={account:e,subAccount:l};(0,a.Rz)("PaymentMethodAccount",o),ae((0,a.M5)())};let ne=(0,d.GP)((0,a.bh)("toPay_by_doc"),"amount");return(0,u.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Registrando Pago"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(m,{data:[{label:"Cheque",id:"check"},{label:"Tarjeta",id:"card"}],active:(null===(l=(0,a.bh)(_))||void 0===l?void 0:l.paymentType)||"check",updSelect:e=>(e=>{(0,a.Rz)("ComissionAccount",null),(0,a.Rz)("PaymentMethodAccount",null),ce("paymentType",e),ae((0,a.M5)())})(e)}),(0,u.jsx)("div",{className:"flexSpace"})]})}),"card"===(null===(o=(0,a.bh)(_))||void 0===o?void 0:o.paymentType)?(0,u.jsx)(b,{query:"Cred",type:null===(c=(0,a.bh)(_))||void 0===c?void 0:c.paymentType,handleClick:ie}):(0,u.jsx)(b,{query:"Efectivo",type:null===(n=(0,a.bh)(_))||void 0===n?void 0:n.paymentType,handleClick:ie}),(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"flexSpace"}),null!==(s=(0,a.bh)("PaymentMethodAccount"))&&void 0!==s&&s.account?(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(r=(0,a.bh)("account_ids"))||void 0===r||null===(y=r[null===(N=(0,a.bh)("PaymentMethodAccount"))||void 0===N?void 0:N.account])||void 0===y?void 0:y.code}),(0,u.jsx)("div",{className:"name",children:null===(A=(0,a.bh)("account_ids"))||void 0===A||null===(g=A[null===(f=(0,a.bh)("PaymentMethodAccount"))||void 0===f?void 0:f.account])||void 0===g?void 0:g.name})]}),(0,u.jsx)("div",{className:"flexSpace"}),null!==(I=(0,a.bh)("PaymentMethodAccount"))&&void 0!==I&&I.subAccount?(0,u.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,u.jsx)("div",{className:"code",children:null===(C=(0,a.bh)("sub_account_ids"))||void 0===C||null===(w=C[null===(z=(0,a.bh)("PaymentMethodAccount"))||void 0===z?void 0:z.subAccount])||void 0===w?void 0:w.subAccount}),(0,u.jsx)("div",{className:"name",children:null===(R=(0,a.bh)("sub_account_ids"))||void 0===R||null===(M=R[null===(P=(0,a.bh)("PaymentMethodAccount"))||void 0===P?void 0:P.subAccount])||void 0===M?void 0:M.subAccountName})]}):null]}):null]}),"card"===(null===(D=(0,a.bh)(_))||void 0===D?void 0:D.paymentType)&&null!==(T=(0,a.bh)("PaymentMethodAccount"))&&void 0!==T&&T.account?(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("div",{className:"separator"}),null!==(k=(0,a.bh)("ComissionAccount"))&&void 0!==k&&k.account?(0,u.jsxs)("div",{className:"",children:[(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(F=(0,a.bh)("account_ids"))||void 0===F||null===(S=F[null===(O=(0,a.bh)("ComissionAccount"))||void 0===O?void 0:O.account])||void 0===S?void 0:S.code}),(0,u.jsx)("div",{className:"name",children:null===(E=(0,a.bh)("account_ids"))||void 0===E||null===(B=E[null===(U=(0,a.bh)("ComissionAccount"))||void 0===U?void 0:U.account])||void 0===B?void 0:B.name})]}),(0,u.jsx)("div",{className:"flexSpace"}),null!==(Z=(0,a.bh)("ComissionAccount"))&&void 0!==Z&&Z.subAccount?(0,u.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,u.jsx)("div",{className:"code",children:null===(Q=(0,a.bh)("sub_account_ids"))||void 0===Q||null===(q=Q[null===(L=(0,a.bh)("ComissionAccount"))||void 0===L?void 0:L.subAccount])||void 0===q?void 0:q.subAccount}),(0,u.jsx)("div",{className:"name",children:null===(G=(0,a.bh)("sub_account_ids"))||void 0===G||null===(H=G[null===(V=(0,a.bh)("ComissionAccount"))||void 0===V?void 0:V.subAccount])||void 0===H?void 0:H.subAccountName})]}):null]}),(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{style:{maxWidth:120},children:(0,u.jsx)(h,{init:null===(Y=(0,a.bh)("ComissionAccount"))||void 0===Y?void 0:Y.amount,label:"comision",width:80,updChanges:e=>((e,l,o)=>{let t=(0,a.bh)("ComissionAccount")||{};o?(t[o]||(t[o]={}),t[o][e]=l):t[e]=l,(0,a.Rz)("ComissionAccount",t),ae((0,a.M5)())})("amount",e)})}),(0,u.jsx)("div",{className:"flexSpace"})]})]}):(0,u.jsx)(p,{placeholder:"buscar cuenta de comision bancaria ",handleClick:(e,l)=>{let o={account:e,subAccount:l};(0,a.Rz)("ComissionAccount",o),ae((0,a.M5)())}}),(0,u.jsx)("div",{className:"separator"})]}):null,(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(v,{init:null===(K=(0,a.bh)(_))||void 0===K?void 0:K.date,updDate:e=>ce("date",e)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(h,{init:null===($=(0,a.bh)(_))||void 0===$?void 0:$.collectDocument,label:"Documento de Cobro",width:200,updChanges:e=>ce("collectDocument",e)})]}),(0,u.jsx)(h,{init:null===(W=(0,a.bh)(_))||void 0===W?void 0:W.description,label:"Descripcion",width:520,updChanges:e=>ce("description",e)}),ne?(0,u.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_40",children:"Documento"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Balance"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_10"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Pagar"})]}),ne&&(0,a.bh)("toPay_by_doc")&&(null===(J=(0,a._2)((0,a.bh)("toPay_by_doc")))||void 0===J?void 0:J.map(((e,l)=>(0,u.jsx)(x,{idKey:e,data:(0,a.bh)("toPay_by_doc")[e],updObs:ae},e))))]}):null,(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:async()=>{var e,l,o,t,c;let n=(0,a.bh)(_),d=[];n.date?n.date=new Date(n.date).getTime():n.date=(new Date).getTime()+800;let s=await(0,a.fN)(n.date),u={date:n.date,comprobanteId:s,description:n.description,businessId:null===(e=(0,a.bh)("profileUser"))||void 0===e?void 0:e.businessId,year:new Date(n.date).getFullYear()};delete n.date;let r="",v=(0,a.bh)("multi_pay_by_doc")&&(0,a._2)((0,a.bh)("multi_pay_by_doc"));if(v&&(null===v||void 0===v||v.map(((e,l)=>{var o,t,c;let i={...n},s=(0,a.bh)("multi_pay_by_doc")[e];i.document=e,r+=e+" ; ",i.account=null===(o=(0,a.bh)("Acc2Pay"))||void 0===o?void 0:o.account,i.subAccount=null===(t=(0,a.bh)("Acc2Pay"))||void 0===t?void 0:t.subAccount,i.providerId=null===(c=(0,a.bh)("Acc2Pay"))||void 0===c?void 0:c.providerId,i.type="debit",i.amount=1*s,i.payOrCollect="pay",i.operationId=(0,a.M5)(),d.push(i)}))),null!==(l=(0,a.bh)("ComissionAccount"))&&void 0!==l&&l.account){var h;let e={...n};e.document=e.collectDocument,e.collectDocument=r,e.account=(0,a.bh)("ComissionAccount").account;let l=null===(h=(0,a.bh)("account_ids"))||void 0===h?void 0:h[e.account];l.payOrCollect&&(e.payOrCollect=l.payOrCollect),e.subAccount=(0,a.bh)("ComissionAccount").subAccount,e.type="debit",e.amount=1*(0,a.bh)("ComissionAccount").amount,e.operationId=(0,a.M5)(),d.push(e)}let m={...n},b=j((0,a.bh)("multi_pay_by_doc"));m.document=m.collectDocument,m.collectDocument=r,m.account=(0,a.bh)("PaymentMethodAccount").account;let p=null===(o=(0,a.bh)("account_ids"))||void 0===o?void 0:o[m.account];p.payOrCollect&&(m.payOrCollect=p.payOrCollect),m.subAccount=(0,a.bh)("PaymentMethodAccount").subAccount,m.type="credit",m.amount=1*b,null!==(t=(0,a.bh)("ComissionAccount"))&&void 0!==t&&t.amount&&(m.amount+=1*(0,a.bh)("ComissionAccount").amount),m.operationId=(0,a.M5)(),d.push(m);let y={...null===(c=(0,a.bh)((0,a.hQ)()))||void 0===c?void 0:c.add_multi_opera};y.params=u,y.form=d;const x=(0,a.I7)(y);await x&&((null===X||void 0===X?void 0:X.modalID)&&(0,i.CloseModal)({id:null===X||void 0===X?void 0:X.modalID}),setTimeout((()=>{(0,a.Rz)("multi_pay_by_doc",null),(0,a.Rz)(_,null),ae((0,a.M5)()),ee&&ee()}),400))},children:"Guardar"})})]})]})},x=e=>{let{data:l,updObs:o,idKey:c}=e;const[i,n]=(0,t.useState)(0),d=(e,l,o)=>{let t=(0,a.bh)("multi_pay_by_doc")||{};o?(t[o]||(t[o]={}),t[o][e]=l):t[e]=l,(0,a.Rz)("multi_pay_by_doc",t)};return 1*(null===l||void 0===l?void 0:l.amount)===0?null:(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_40",style:{marginTop:10},children:null===l||void 0===l?void 0:l.document}),(0,u.jsxs)("div",{className:"tr_bar tr_bar_20",style:{marginTop:10},children:["$",(1*(null===l||void 0===l?void 0:l.amount)).toFixed(2)]}),(0,u.jsx)("div",{className:"tr_bar tr_bar_10",style:{marginTop:10},children:i>(null===l||void 0===l?void 0:l.amount)?(0,u.jsx)("div",{className:"icon",children:(0,u.jsx)(r,{name:"alert",color:"#c62828"})}):null}),(0,u.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,u.jsx)(h,{init:i,width:80,updChanges:e=>{return n(t=e),d(null===l||void 0===l?void 0:l.document,t),void o((0,a.M5)());var t}})})]})},j=e=>{var l;let o=0;return e&&(null===(l=(0,a._2)(e))||void 0===l||l.map(((l,t)=>{o+=(0,a.Zv)(e[l],2)}))),o}},1232:(e,l,o)=>{o.d(l,{GP:()=>d,N$:()=>i,hF:()=>u,i7:()=>a,nr:()=>c,pj:()=>r});var t=o(2350);const a=async(e,l)=>{var o,a;let c={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.filter_search_opera};c.params={businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(c),d=await i;if(d&&!d.error){(0,t.Rz)("collect_list",d),(0,t.Rz)("collect_by_doc",n(d)),(0,t.Rz)("collect_by_docM",n(d));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);s(d,l)}l&&l()},c=async(e,l)=>{var o,a;let c={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.filter_search_opera};c.params={businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(c),d=await i;if(d&&!d.error){(0,t.Rz)("toPay_list",d),(0,t.Rz)("toPay_by_doc",n(d,!0)),(0,t.Rz)("toPay_by_docM",n(d,!0));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);s(d,l)}l&&l()},i=async e=>{var l,o;let a={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.search_opera};a.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,t.bh)("search_acc_record"),year:(0,t.bh)("date_current_year")};const c=(0,t.I7)(a),i=await c;i&&!i.error&&((0,t.Rz)("comprobante_list",i),(0,t.Rz)("comprobante_by_doc",n(i))),e&&e()};function n(e,l){var o={};let a=e&&(0,t._2)(e);return a.length>0?a.map((a=>{var c;let i=e[a],n=null===(c=i.document)||void 0===c?void 0:c.trim();if(!o[n]){o[n]={},["date","description","document","entryName"].forEach((e=>{o[n][e]=i[e]})),o[n].amount=0,o[n].operations=[]}if(i.type){let e=(0,t.Zv)(i.amount,2),a=(0,t.Zv)(o[n].amount,2),c=0;c=l?1*a+e*("debit"===i.type?-1:1):1*a+e*("credit"===i.type?-1:1),o[n].amount=(0,t.Zv)(c,2),o[n].operations.push(function(e){var l,o;let a={};a.account=null===(l=(0,t.bh)("account_ids"))||void 0===l?void 0:l[e.account],a.sub_account=null===(o=(0,t.bh)("sub_account_ids"))||void 0===o?void 0:o[e.subAccount],a.comprobanteId=e.comprobanteId,a.operationId=e.operationId,a.date=e.date,a.description=e.description;let c=(0,t.Zv)(e.amount,2);"credit"===e.type?(a.debit=0,a.credit=c):"debit"===e.type&&(a.credit=0,a.debit=c);return a}(i))}})):o=null,o}const d=(e,l,o)=>(0,t.MV)("SumDocuments",[e,l,o],(()=>{var o;let a=0;return e&&(null===(o=(0,t._2)(e))||void 0===o||o.map(((o,t)=>{var c;a+=1*(null===(c=e[o])||void 0===c?void 0:c[l])}))),a})),s=async(e,l,o)=>{let a=(0,t.bh)("rec_by_acc")||{};a[l]=((e,l,o)=>{var a;let c=0;return e&&(null===(a=(0,t._2)(e))||void 0===a||a.map(((l,o)=>{var a;let i=(0,t.Zv)(e[l].amount,2);c+=i*("credit"===(null===(a=e[l])||void 0===a?void 0:a.type)?-1:1)}))),c})(e)||"no",(0,t.Rz)("rec_by_acc",a),o&&o()},u=async(e,l,o)=>{var a,c;let i={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.filter_search_opera};i.params={businessId:null===(c=(0,t.bh)("profileUser"))||void 0===c?void 0:c.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,t.bh)("date_current_year")};const n=(0,t.I7)(i),d=await n;d&&!d.error&&s(d,l),o&&o()},r=async(e,l,o)=>{var a,c;let i={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_subacc_acc};i.params={businessId:null===(c=(0,t.bh)("profileUser"))||void 0===c?void 0:c.businessId,":account":e,":search":l,year:(0,t.bh)("date_current_year")};const n=(0,t.I7)(i),d=await n;if(d&&!d.error){var s;let e=null===(s=(0,t._2)(d))||void 0===s?void 0:s[0];o&&o(d[e])}}},6021:()=>{}}]);
//# sourceMappingURL=1832.a6a9f618.chunk.js.map