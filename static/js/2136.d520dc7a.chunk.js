"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2136],{5639:function(l,n,a){a.r(n);var o=a(4165),d=a(1413),i=a(5861),e=a(9439),c=a(2791),s=a(2350),t=a(2647),u=(a(6021),a(9760)),r=a(9179),v=a(1232),m=a(9661),b=a(7689),h=a(24),p=a(3990),_=a(184),x=(0,t.PU)(),f=((0,t.YZ)(),(0,t.Np)()),j=((0,t.tL)(),(0,r.NC)(),(0,m.FC)()),N=(0,h.f_)(),y=(0,t.JC)(),g="new_multi_collect_prov",A="Acc2MPay",C="multi_collect_by_prov_Doc",I="collect_by_docM",Z="multi_collect_2S",F="extraAccountListOnCollect";n.default=function(l){l.data,l.confirm;var n,a,t,r,v,m,h,x,j,y,D,R,z,S,O=(0,c.useState)(!1),T=(0,e.Z)(O,2),P=T[0],U=T[1],B=(0,c.useState)(0),K=(0,e.Z)(B,2),Q=(K[0],K[1]),H=(0,b.s0)();(0,c.useEffect)((function(){P||(U(!0),(0,s.Rz)("PamentMethodAccount",null),(0,s.Rz)(Z,null),(0,s.Rz)(I,null),(0,s.Rz)(C,null),(0,s.Rz)("accountPicker",{}),Q((0,s.M5)()))}));var G=function(l,n,a){var o=(0,s.bh)(g)||{};a?(o[a]||(o[a]={}),o[a][l]=n):o[l]=n,(0,s.Rz)(g,o),Q((0,s.M5)())},L=function(){var l=(0,i.Z)((0,o.Z)().mark((function l(){var n,a,e,c,t,u,r,v,m,b,h,p,_,x,f,j;return(0,o.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=(0,s.bh)(g)||{},u=[],r=new Date,t.date?(r=new Date(t.date),t.date=new Date(t.date).getTime()):t.date=Date.now(),v=r.getFullYear()+""+(r.getMonth()+1)+"-"+(0,s.KX)(),t.comprobanteId=v,m="",(b=(0,s.bh)(Z)&&(0,s._2)((0,s.bh)(Z)))&&(null===b||void 0===b||b.map((function(l,n){var a,o,i=(0,d.Z)({},t),e=(0,s.bh)(Z)[l];i.document=null===e||void 0===e?void 0:e.document,m+=(null===e||void 0===e?void 0:e.document)+" ; ",i.account=null===e||void 0===e?void 0:e.account,i.subAccount=null===e||void 0===e?void 0:e.subAccount,i.providerId=null===e||void 0===e?void 0:e.providerId,i.customerId=null===e||void 0===e?void 0:e.customerId,i.type=null===e||void 0===e?void 0:e.type,i.amount=null===e||void 0===e?void 0:e.amount,i.collectOrCollect="collect",i.operationId=(0,s.M5)();var c=(0,d.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.add_opera);c.params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId},c.form=i,u.push(c)}))),(h=(0,s.bh)(F)&&(0,s._2)((0,s.bh)(F)))&&(null===h||void 0===h||h.map((function(l,n){var a,o,i,e,c,r=(0,d.Z)({},t),v=(0,s.bh)(F)[l];r.document=r.paymentDocument,r.account=null===v||void 0===v?void 0:v.account,r.subAccount=null===v||void 0===v?void 0:v.subAccount,r.type="debit",r.amount=null===v||void 0===v?void 0:v.amount,r.operationId=(0,s.M5)();var b=(0,d.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.add_opera);b.params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId},b.form=r,u.push(b);var h=(0,d.Z)({},t);h.document=h.paymentDocument,h.paymentDocument=m,h.account=null===(i=(0,s.bh)("global_account_params"))||void 0===i?void 0:i.cash_bank,h.type="credit",h.amount=1*(null===v||void 0===v?void 0:v.amount),h.operationId=(0,s.M5)();var p=(0,d.Z)({},null===(e=(0,s.bh)((0,s.hQ)()))||void 0===e?void 0:e.add_opera);p.params={businessId:null===(c=(0,s.bh)("profileUser"))||void 0===c?void 0:c.businessId},p.form=h,u.push(p)}))),p=(0,d.Z)({},t),_=M((0,s.bh)(Z)),p.document=p.paymentDocument,p.paymentDocument=m,p.account=null===(n=(0,s.bh)("global_account_params"))||void 0===n?void 0:n.cash_bank,(x=null===(a=(0,s.bh)("account_ids"))||void 0===a?void 0:a[p.account]).collectOrCollect&&(p.collectOrCollect=x.collectOrCollect),p.type="debit",p.amount=1*_,p.operationId=(0,s.M5)(),(f=(0,d.Z)({},null===(e=(0,s.bh)((0,s.hQ)()))||void 0===e?void 0:e.add_opera)).params={businessId:null===(c=(0,s.bh)("profileUser"))||void 0===c?void 0:c.businessId},f.form=p,u.push(f),j=u.map(function(){var l=(0,i.Z)((0,o.Z)().mark((function l(n){var a;return(0,o.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return a=(0,s.I7)(n),l.next=3,a;case 3:l.sent;case 5:case"end":return l.stop()}}),l)})));return function(n){return l.apply(this,arguments)}}()),l.next=28,Promise.all(j);case 28:setTimeout((function(){(0,s.Rz)(C,null),(0,s.Rz)(g,null),Q((0,s.M5)()),H({pathname:"/accounting-ledger",search:"?cId=".concat(v)})}),400);case 29:case"end":return l.stop()}}),l)})));return function(){return l.apply(this,arguments)}}(),Y=function(){var l=(0,d.Z)({},(0,s.bh)(C))||{},n=(0,d.Z)({},(0,s.bh)(Z))||{};(0,s._2)(l).map((function(a){var o,i,e=(null===(o=(0,s.bh)(A))||void 0===o?void 0:o.account)+"_"+(null===(i=(0,s.bh)(A))||void 0===i?void 0:i.subAccount)+"_"+a,c=(0,d.Z)({},(0,s.bh)(A));n[e]={},n[e].amount=1*l[a],n[e].document=a,n[e].type="credit",n[e].account=null===c||void 0===c?void 0:c.account,n[e].subAccount=null===c||void 0===c?void 0:c.subAccount,n[e].customerId=null===c||void 0===c?void 0:c.customerId})),(0,s.Rz)(Z,n),(0,s.Rz)(C,null),(0,s.Rz)(A,null),Q((0,s.M5)())};return(0,_.jsxs)("div",{style:{overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("p",{className:"form_title",children:"Registrando Cobro"}),(0,_.jsx)("div",{className:"flexSpace"})]}),(0,_.jsxs)("div",{className:"_dsplFlx",children:[(0,_.jsx)("div",{className:"flexSpace"}),null!==(n=(0,s.bh)("global_account_params"))&&void 0!==n&&n.cash_bank?(0,_.jsxs)("div",{className:" acc_dtls",children:[(0,_.jsxs)("div",{className:"_dsplFlx",children:[(0,_.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(a=(0,s.bh)("account_ids"))||void 0===a||null===(t=a[null===(r=(0,s.bh)("global_account_params"))||void 0===r?void 0:r.cash_bank])||void 0===t?void 0:t.code}),(0,_.jsx)("div",{className:"name",children:null===(v=(0,s.bh)("account_ids"))||void 0===v||null===(m=v[null===(h=(0,s.bh)("global_account_params"))||void 0===h?void 0:h.cash_bank])||void 0===m?void 0:m.name})]}),(0,_.jsx)("div",{className:"flexSpace"})]}):null]}),(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)(N,{init:null===(x=(0,s.bh)(g))||void 0===x?void 0:x.date,updDate:function(l){return G("date",l)}}),(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)(f,{init:null===(j=(0,s.bh)(g))||void 0===j?void 0:j.paymentDocument,label:"Documento de Cobro",width:200,updChanges:function(l){return G("paymentDocument",l)}})]}),(0,_.jsx)(f,{init:null===(y=(0,s.bh)(g))||void 0===y?void 0:y.description,label:"Descripcion",width:520,updChanges:function(l){return G("description",l)}}),(0,_.jsxs)("div",{className:" _dsplFlx",children:[(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var l={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,_.jsx)(w,{updObs:Q,confirm:Y}),(0,u.OpenModal)(l)},children:"Clientes"})]}),(0,s.bh)(Z)&&(0,s._2)((0,s.bh)(Z)).length>0?(0,_.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,_.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,_.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,_.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,_.jsx)("div",{className:"tr_bar tr_bar_25",children:"Balance"})]}),(0,_.jsx)(k,{data:{account:null===(D=(0,s.bh)("global_account_params"))||void 0===D?void 0:D.cash_bank,amount:M((0,s.bh)(Z)),type:"debit",document:null===(R=(0,s.bh)(g))||void 0===R?void 0:R.paymentDocument},updObs:Q}),(0,s.bh)(Z)&&(null===(z=(0,s._2)((0,s.bh)(Z)))||void 0===z?void 0:z.map((function(l,n){return(0,_.jsx)(k,{idKey:l,data:(0,s.bh)(Z)[l],updObs:Q},l)})))]}):null,(0,_.jsx)(p.Z,{collectionName:F}),null!==(S=(0,s.bh)(g))&&void 0!==S&&S.paymentDocument&&M((0,s.bh)(Z))>0?(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("div",{className:"card",children:(0,_.jsx)("button",{onClick:L,children:"Guardar"})})]}):null]})};var D=function(l){var n=l.data,a=l.updObs,o=(l.idKey,(0,c.useState)(0)),d=(0,e.Z)(o,2),i=d[0],t=d[1],u=function(l,n,a){var o=(0,s.bh)(C)||{};a?(o[a]||(o[a]={}),o[a][l]=n):o[l]=n,(0,s.Rz)(C,o)};return 1*(null===n||void 0===n?void 0:n.amount)===0?null:(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,_.jsx)("div",{className:" tr_bar_25",style:{marginTop:10},children:null===n||void 0===n?void 0:n.document}),(0,_.jsxs)("div",{className:" tr_bar_25",style:{marginTop:10},children:["$",(1*(null===n||void 0===n?void 0:n.amount)).toFixed(2)]}),(0,_.jsx)("div",{className:"tr_bar",style:{marginTop:10},children:i>(null===n||void 0===n?void 0:n.amount)?(0,_.jsx)("div",{className:"icon",children:(0,_.jsx)(x,{name:"alert",color:"#c62828"})}):null}),(0,_.jsx)("div",{className:" tr_bar_25",children:(0,_.jsx)(f,{init:i,width:80,updChanges:function(l){return t(o=l),u(null===n||void 0===n?void 0:n.document,o),void a((0,s.M5)());var o}})})]})},k=function(l){var n,a,o=l.data;return 1*(null===o||void 0===o?void 0:o.amount)===0?null:(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,_.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:(0,_.jsx)(y,{data:null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[null===o||void 0===o?void 0:o.account],color:"debit"===o.type?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,_.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null!==o&&void 0!==o&&o.subAccount?(0,_.jsx)(y,{data:null===(a=(0,s.bh)("sub_account_ids"))||void 0===a?void 0:a[null===o||void 0===o?void 0:o.subAccount],color:"debit"===o.type?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"}):null}),(0,_.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null===o||void 0===o?void 0:o.document}),(0,_.jsxs)("div",{className:"tr_bar  tr_bar_25",style:{marginTop:10},children:["$",(1*(null===o||void 0===o?void 0:o.amount)).toFixed(2)]})]})},w=function(l){var n,a,o,d,i,t,r,m,b,h,p,x,f,N,y,g,C=l.data,Z=l.confirm,F=(0,c.useState)(0),k=(0,e.Z)(F,2),w=(k[0],k[1]),M=function(){w((0,s.M5)())};return(0,_.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("p",{className:"form_title",children:"Cobros por Clientes"}),(0,_.jsx)("div",{className:"flexSpace"})]}),(0,_.jsx)("div",{style:{margin:"18px 0"},children:null!==(n=(0,s.bh)(A))&&void 0!==n&&n.account?(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:" acc_dtls",children:[(0,_.jsxs)("div",{className:"_dsplFlx",children:[(0,_.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(){(0,s.Rz)(A,null),w((0,s.M5)())},children:null===(a=(0,s.bh)("account_ids"))||void 0===a||null===(o=a[null===(d=(0,s.bh)(A))||void 0===d?void 0:d.account])||void 0===o?void 0:o.code}),(0,_.jsx)("div",{className:"name",children:null===(i=(0,s.bh)("account_ids"))||void 0===i||null===(t=i[null===(r=(0,s.bh)(A))||void 0===r?void 0:r.account])||void 0===t?void 0:t.name})]}),(0,_.jsx)("div",{className:"flexSpace"}),null!==(m=(0,s.bh)(A))&&void 0!==m&&m.subAccount?(0,_.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,_.jsx)("div",{className:"code",children:null===(b=(0,s.bh)("sub_account_ids"))||void 0===b||null===(h=b[null===(p=(0,s.bh)(A))||void 0===p?void 0:p.subAccount])||void 0===h?void 0:h.subAccount}),(0,_.jsx)("div",{className:"name",children:null===(x=(0,s.bh)("sub_account_ids"))||void 0===x||null===(f=x[null===(N=(0,s.bh)(A))||void 0===N?void 0:N.subAccount])||void 0===f?void 0:f.subAccountName})]}):null]}),(0,_.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,_.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,_.jsx)("div",{className:"tr_bar tr_bar_25",children:"Balance"}),(0,_.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,_.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Pagar"})]}),(0,s.bh)(I)&&(null===(y=(0,s._2)((0,s.bh)(I)))||void 0===y?void 0:y.map((function(l,n){return(0,_.jsx)(D,{idKey:l,data:(0,s.bh)(I)[l],updObs:w},l)})))]})]}):(0,_.jsx)(j,{placeholder:"buscar un provedor",width:420,handleClick:function(l){var n={account:null===l||void 0===l?void 0:l.account,subAccount:null===l||void 0===l?void 0:l.subAccount,customerId:null===l||void 0===l?void 0:l.customerId};(0,s.Rz)(A,n),(0,v.i7)(n,M)}})}),null!==(g=(0,s.bh)(A))&&void 0!==g&&g.subAccount?(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(){Z&&Z(),(null===C||void 0===C?void 0:C.modalID)&&(0,u.CloseModal)({id:null===C||void 0===C?void 0:C.modalID})},children:"Guardar"})]}):null]})},M=function(l){var n,a=0;return l&&(null===(n=(0,s._2)(l))||void 0===n||n.map((function(n,o){var d;a+=1*(0,s.Zv)(null===(d=l[n])||void 0===d?void 0:d.amount,2)}))),a}}}]);
//# sourceMappingURL=2136.d520dc7a.chunk.js.map