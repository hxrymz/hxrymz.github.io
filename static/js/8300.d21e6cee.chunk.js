"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8300],{1877:function(n,l,d){d.r(l);var a=d(4165),i=d(1413),o=d(5861),e=d(9439),c=d(2791),s=d(2350),t=d(2647),u=(d(6021),d(9760)),r=d(1232),v=d(9661),m=d(7689),p=d(24),h=d(3990),b=d(4050),x=d(184),_=(0,t.PU)(),f=(0,t.Np)(),j=(0,v.LZ)(),N=(0,p.f_)(),y=(0,t.JC)(),g="new_multi_pay_prov",I="Acc2MPay",A="multi_pay_by_prov_Doc",Z="toPay_by_docM",D="multi_pay_2S",F="extraAccountListOnPay";l.default=function(n){var l,d,t,r,v,p,_,j,y,k,R,S=n.data,z=(n.confirm,(0,c.useState)(!1)),P=(0,e.Z)(z,2),O=P[0],T=P[1],H=(0,c.useState)(0),U=(0,e.Z)(H,2),B=(U[0],U[1]),Q=(0,m.s0)(),K=function(){B((0,s.M5)())};(0,c.useEffect)((function(){O||(T(!0),(0,b.Ht)("global_accounts","global_account_params",K),(0,s.Rz)(D,null),(0,s.Rz)(Z,null),(0,s.Rz)(A,null),(0,s.Rz)("accountPicker",{}),B((0,s.M5)()))}));var G=function(n,l,d){var a=(0,s.bh)(g)||{};d?(a[d]||(a[d]={}),a[d][n]=l):a[n]=l,(0,s.Rz)(g,a),B((0,s.M5)())},L=null===(l=(0,s.bh)("global_account_params"))||void 0===l?void 0:l.cash_bank,$=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(){var l,d,e,c,t,r,v,m,p,h,b,x,_,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=(0,s.bh)(g)||{},t=[],c.date?c.date=new Date(c.date).getTime():c.date=(new Date).getTime()+800,n.next=5,(0,s.fN)(c.date);case 5:return r=n.sent,c.comprobanteId=r,v="",(m=(0,s.bh)(D)&&(0,s._2)((0,s.bh)(D)))&&(null===m||void 0===m||m.map((function(n,l){var d,a,o=(0,i.Z)({},c),e=(0,s.bh)(D)[n];o.document=null===e||void 0===e?void 0:e.document,v+=(null===e||void 0===e?void 0:e.document)+" ; ",o.account=null===e||void 0===e?void 0:e.account,o.subAccount=null===e||void 0===e?void 0:e.subAccount,o.providerId=null===e||void 0===e?void 0:e.providerId,o.type=null===e||void 0===e?void 0:e.type,o.amount=null===e||void 0===e?void 0:e.amount,o.payOrCollect="pay",o.operationId=(0,s.M5)();var u=(0,i.Z)({},null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.add_opera);u.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId},u.form=o,t.push(u)}))),(p=(0,s.bh)(F)&&(0,s._2)((0,s.bh)(F)))&&(null===p||void 0===p||p.map((function(n,l){var d,a,o,e,u=(0,i.Z)({},c),r=(0,s.bh)(F)[n];u.document=u.paymentDocument,u.account=null===r||void 0===r?void 0:r.account,u.subAccount=null===r||void 0===r?void 0:r.subAccount,u.type="debit",u.amount=null===r||void 0===r?void 0:r.amount,u.operationId=(0,s.M5)();var m=(0,i.Z)({},null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.add_opera);m.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId},m.form=u,t.push(m);var p=(0,i.Z)({},c);p.document=p.paymentDocument,p.paymentDocument=v,p.account=null===L||void 0===L?void 0:L.account,p.type="credit",p.amount=1*(null===r||void 0===r?void 0:r.amount),p.operationId=(0,s.M5)();var h=(0,i.Z)({},null===(o=(0,s.bh)((0,s.hQ)()))||void 0===o?void 0:o.add_opera);h.params={businessId:null===(e=(0,s.bh)("profileUser"))||void 0===e?void 0:e.businessId},h.form=p,t.push(h)}))),h=(0,i.Z)({},c),b=M((0,s.bh)(D)),h.document=h.paymentDocument,h.paymentDocument=v,h.account=null===L||void 0===L?void 0:L.account,(x=null===(l=(0,s.bh)("account_ids"))||void 0===l?void 0:l[h.account]).payOrCollect&&(h.payOrCollect=x.payOrCollect),h.type="credit",h.amount=1*b,h.operationId=(0,s.M5)(),(_=(0,i.Z)({},null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.add_opera)).params={businessId:null===(e=(0,s.bh)("profileUser"))||void 0===e?void 0:e.businessId},_.form=h,t.push(_),f=t.map(function(){var n=(0,o.Z)((0,a.Z)().mark((function n(l){var d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=(0,s.I7)(l),n.next=3,d;case 3:n.sent;case 5:case"end":return n.stop()}}),n)})));return function(l){return n.apply(this,arguments)}}()),n.next=29,Promise.all(f);case 29:setTimeout((function(){(0,s.Rz)(A,null),(0,s.Rz)(g,null),(null===S||void 0===S?void 0:S.modalID)&&(0,u.CloseModal)({id:null===S||void 0===S?void 0:S.modalID}),Q({pathname:"/accounting-ledger",search:"?cId=".concat(r)})}),400);case 30:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),E=function(){var n=(0,i.Z)({},(0,s.bh)(A))||{},l=(0,i.Z)({},(0,s.bh)(D))||{};(0,s._2)(n).map((function(d){var a,o,e=(null===(a=(0,s.bh)(I))||void 0===a?void 0:a.account)+"_"+(null===(o=(0,s.bh)(I))||void 0===o?void 0:o.subAccount)+"_"+d,c=(0,i.Z)({},(0,s.bh)(I));l[e]={},l[e].amount=1*n[d],l[e].document=d,l[e].type="debit",l[e].account=null===c||void 0===c?void 0:c.account,l[e].providerId=null===c||void 0===c?void 0:c.providerId,l[e].subAccount=null===c||void 0===c?void 0:c.subAccount})),(0,s.Rz)(D,l),(0,s.Rz)(A,null),(0,s.Rz)(I,null),B((0,s.M5)())};return(0,x.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"720px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"form_title",children:"Registrando Pago"}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"_dsplFlx",children:[(0,x.jsx)("div",{className:"flexSpace"}),null!==L&&void 0!==L&&L.account?(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsxs)("div",{className:"_dsplFlx",children:[(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(d=(0,s.bh)("account_ids"))||void 0===d||null===(t=d[null===L||void 0===L?void 0:L.account])||void 0===t?void 0:t.code}),(0,x.jsx)("div",{className:"name",children:null===(r=(0,s.bh)("account_ids"))||void 0===r||null===(v=r[null===L||void 0===L?void 0:L.account])||void 0===v?void 0:v.name})]}),(0,x.jsx)("div",{className:"flexSpace"})]}):null]}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)(N,{init:null===(p=(0,s.bh)(g))||void 0===p?void 0:p.date,updDate:function(n){return G("date",n)}}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(f,{init:null===(_=(0,s.bh)(g))||void 0===_?void 0:_.paymentDocument,label:"Documento de Pago",width:200,updChanges:function(n){return G("paymentDocument",n)}})]}),(0,x.jsx)(f,{init:null===(j=(0,s.bh)(g))||void 0===j?void 0:j.description,label:"Descripcion",width:520,updChanges:function(n){return G("description",n)}}),(0,x.jsxs)("div",{className:" _dsplFlx",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,x.jsx)(w,{updObs:B,confirm:E}),(0,u.OpenModal)(n)},children:"Provedores"})]}),(0,s.bh)(D)&&(0,s._2)((0,s.bh)(D)).length>0?(0,x.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Balance"})]}),(0,s.bh)(D)&&(null===(y=(0,s._2)((0,s.bh)(D)))||void 0===y?void 0:y.map((function(n,l){return(0,x.jsx)(C,{idKey:n,data:(0,s.bh)(D)[n],updObs:B},n)}))),(0,x.jsx)(C,{data:{account:null===L||void 0===L?void 0:L.account,amount:M((0,s.bh)(D)),type:"credit",document:null===(k=(0,s.bh)(g))||void 0===k?void 0:k.paymentDocument},updObs:B})]}):null,(0,x.jsx)(h.Z,{collectionName:F}),null!==(R=(0,s.bh)(g))&&void 0!==R&&R.paymentDocument&&M((0,s.bh)(D))>0?(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:$,children:"Guardar"})})]}):null]})};var C=function(n){var l,d,a=n.data;return 1*(null===a||void 0===a?void 0:a.amount)===0?null:(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:(0,x.jsx)(y,{data:null===(l=(0,s.bh)("account_ids"))||void 0===l?void 0:l[null===a||void 0===a?void 0:a.account],color:"debit"===a.type?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null!==a&&void 0!==a&&a.subAccount?(0,x.jsx)(y,{data:null===(d=(0,s.bh)("sub_account_ids"))||void 0===d?void 0:d[null===a||void 0===a?void 0:a.subAccount],color:"debit"===a.type?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"}):null}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null===a||void 0===a?void 0:a.document}),(0,x.jsxs)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:["$",(1*(null===a||void 0===a?void 0:a.amount)).toFixed(2)]})]})},w=function(n){var l,d,a,i,o,t,v,m,p,h,b,_,f,N,y,g,A=n.data,D=n.confirm,F=(0,c.useState)(0),C=(0,e.Z)(F,2),w=(C[0],C[1]),M=function(){w((0,s.M5)())};return(0,x.jsxs)("div",{style:{maxHeight:"92vh",minHeight:"90vh",width:"720px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"form_title",children:"Pagos por Provedores"}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsx)("div",{style:{margin:"18px 0"},children:null!==(l=(0,s.bh)(I))&&void 0!==l&&l.account?(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsxs)("div",{className:"_dsplFlx",children:[(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(){(0,s.Rz)(I,null),w((0,s.M5)())},children:null===(d=(0,s.bh)("account_ids"))||void 0===d||null===(a=d[null===(i=(0,s.bh)(I))||void 0===i?void 0:i.account])||void 0===a?void 0:a.code}),(0,x.jsx)("div",{className:"name",children:null===(o=(0,s.bh)("account_ids"))||void 0===o||null===(t=o[null===(v=(0,s.bh)(I))||void 0===v?void 0:v.account])||void 0===t?void 0:t.name})]}),(0,x.jsx)("div",{className:"flexSpace"}),null!==(m=(0,s.bh)(I))&&void 0!==m&&m.subAccount?(0,x.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,x.jsx)("div",{className:"code",children:null===(p=(0,s.bh)("sub_account_ids"))||void 0===p||null===(h=p[null===(b=(0,s.bh)(I))||void 0===b?void 0:b.subAccount])||void 0===h?void 0:h.subAccount}),(0,x.jsx)("div",{className:"name",children:null===(_=(0,s.bh)("sub_account_ids"))||void 0===_||null===(f=_[null===(N=(0,s.bh)(I))||void 0===N?void 0:N.subAccount])||void 0===f?void 0:f.subAccountName})]}):null]}),(0,x.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_50",children:"Documento"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_20",children:"Balance"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_5"}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Pagar"})]}),(0,s.bh)(Z)&&(null===(y=(0,s._2)((0,s.bh)(Z)))||void 0===y?void 0:y.map((function(n,l){return(0,x.jsx)(k,{idKey:n,data:(0,s.bh)(Z)[n],updObs:w},n)})))]})]}):(0,x.jsx)(j,{placeholder:"buscar un provedor",width:420,handleClick:function(n){var l={account:null===n||void 0===n?void 0:n.account,subAccount:null===n||void 0===n?void 0:n.subAccount,providerId:null===n||void 0===n?void 0:n.providerId};(0,s.Rz)(I,l),(0,r.nr)(l,M)}})}),null!==(g=(0,s.bh)(I))&&void 0!==g&&g.subAccount?(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("p",{className:"group_title addBtn purple",onClick:function(){D&&D(),(null===A||void 0===A?void 0:A.modalID)&&(0,u.CloseModal)({id:null===A||void 0===A?void 0:A.modalID})},children:"Guardar"})]}):null]})},k=function(n){var l=n.data,d=n.updObs,a=(n.idKey,(0,c.useState)(0)),i=(0,e.Z)(a,2),o=i[0],t=i[1],u=function(n,l,d){var a=(0,s.bh)(A)||{};d?(a[d]||(a[d]={}),a[d][n]=l):a[n]=l,(0,s.Rz)(A,a)};return 1*(null===l||void 0===l?void 0:l.amount)===0?null:(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,x.jsx)("div",{className:"tr_bar tr_bar_50",style:{marginTop:10},children:null===l||void 0===l?void 0:l.document}),(0,x.jsxs)("div",{className:"tr_bar tr_bar_20",style:{marginTop:10},children:["$",(1*(null===l||void 0===l?void 0:l.amount)).toFixed(2)]}),(0,x.jsx)("div",{className:"tr_bar tr_bar_5",style:{marginTop:10},children:o>(null===l||void 0===l?void 0:l.amount)?(0,x.jsx)("div",{className:"icon",children:(0,x.jsx)(_,{name:"alert",color:"#c62828"})}):null}),(0,x.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,x.jsx)(f,{init:o,width:80,updChanges:function(n){return t(a=n),u(null===l||void 0===l?void 0:l.document,a),void d((0,s.M5)());var a}})})]})},M=function(n){var l,d=0;return n&&(null===(l=(0,s._2)(n))||void 0===l||l.map((function(l,a){var i;d+=1*(0,s.Zv)(null===(i=n[l])||void 0===i?void 0:i.amount,2)}))),d}}}]);
//# sourceMappingURL=8300.d21e6cee.chunk.js.map