"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[297,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return r},OpenModal:function(){return d},default:function(){return a}});var o=t(2791),i=t(5408),c=t(2350),l=t(184),a=function(){var n=(0,c.bh)("listDialog")||{},e=((0,i.Z)("listDialog_h392"),Object.keys(n));return(0,l.jsx)(l.Fragment,{children:e.map((function(e,t){var i=n[e];if(i&&i.visible){var c={};i.height&&(c.heigth=i.height),i.width,i.zIndex&&(c.zIndex=i.zIndex-1);var a={zIndex:i.zIndex},d=null,u=i.data;return i.content&&(d=o.cloneElement(i.content,{data:u})),(0,l.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,l.jsx)("div",{className:"ltr-hoe9xz",children:(0,l.jsx)("div",{className:"ltr-1wao6ny",style:a,id:e,children:d})}),i.data.overlay?(0,l.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:n})}}):null]},e)}}))})},d=function(n){var e=(0,c.bh)("listDialog")||{},t=(0,c.M5)();e[t]||(e[t]={}),e[t].visible=!0;var o={};n.props?(o=n.props).modalID=t:o.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),o=n&&n.getBoundingClientRect();o&&(o.width===e[t].width&&o.height===e[t].height||(e[t].height=o.height+10,e[t].width=o.width,(0,c.Rz)("listDialog",e),(0,c.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=o,(0,c.Rz)("listDialog",e),(0,c.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",t),(0,c.wt)("listDialog_h392")}),125)},r=function(n){var e,t,o,i=(0,c.bh)("listDialog")||{},l=n.id;i[l]&&(i[l].observeResize&&i[l].observeInterval&&clearInterval(i[l].observeInterval),i[l].display=!1,null===(e=i[l])||void 0===e||null===(t=e.data)||void 0===t||null===(o=t.closeEvent)||void 0===o||o.call(t),(0,c.Rz)("listDialog",i),delete i[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)("listDialog_h392"),setTimeout((function(){delete i[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},297:function(n,e,t){t.r(e);var o=t(4165),i=t(1413),c=t(5861),l=t(9439),a=t(2791),d=t(2350),r=t(2647),u=(t(6021),t(9760)),s=t(9179),v=t(1232),h=t(9661),b=t(7689),m=t(184),p=(0,r.PU)(),f=((0,r.YZ)(),(0,r.Np)()),_=((0,r.tL)(),(0,s.NC)()),x=(0,h.LZ)(),y=((0,s.a)(),(0,r.JC)()),j="new_multi_pay_prov",g="Acc2MPay",N="multi_pay_by_prov_Doc",w="toPay_by_docM",A="multi_pay_2S";e.default=function(n){n.data,n.confirm;var e,t,r,s,v,h,p,x,y,Z,P,M,D,O,k,C,F,S,T,B,E,U,Q,L,H=(0,a.useState)(!1),K=(0,l.Z)(H,2),Y=K[0],G=K[1],V=(0,a.useState)(0),$=(0,l.Z)(V,2),q=($[0],$[1]),J=(0,b.s0)();(0,a.useEffect)((function(){Y||(G(!0),(0,d.Rz)("PaymentMethodAccount",null),(0,d.Rz)(A,null),(0,d.Rz)(w,null),(0,d.Rz)(N,null),(0,d.Rz)("accountPicker",{}),q((0,d.M5)()))}));var W=function(n,e,t){var o=(0,d.bh)(j)||{};t?(o[t]||(o[t]={}),o[t][n]=e):o[n]=e,(0,d.Rz)(j,o),q((0,d.M5)())},X=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(){var e,t,l,a,r,u,s,v,h,b,m,p,f,_;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,d.bh)(j)||{},r=[],u=new Date,a.date?(u=new Date(a.date),a.date=new Date(a.date).getTime()):a.date=Date.now(),s=u.getFullYear()+""+(u.getMonth()+1)+"-"+(0,d.KX)(),a.comprobanteId=s,v="",(h=(0,d.bh)(A)&&(0,d._2)((0,d.bh)(A)))&&(null===h||void 0===h||h.map((function(n,e){var t,o,c=(0,i.Z)({},a),l=(0,d.bh)(A)[n];c.document=null===l||void 0===l?void 0:l.document,v+=(null===l||void 0===l?void 0:l.document)+" ; ",c.account=null===l||void 0===l?void 0:l.account,c.subAccount=null===l||void 0===l?void 0:l.subAccount,c.providerId=null===l||void 0===l?void 0:l.providerId,c.type=null===l||void 0===l?void 0:l.type,c.amount=null===l||void 0===l?void 0:l.amount,c.payOrCollect="pay",c.operationId=(0,d.M5)();var u=(0,i.Z)({},null===(t=(0,d.bh)((0,d.hQ)()))||void 0===t?void 0:t.add_opera);u.params={businessId:null===(o=(0,d.bh)("profileUser"))||void 0===o?void 0:o.businessId},u.form=c,r.push(u)}))),b=(0,i.Z)({},a),m=R((0,d.bh)(A)),b.document=b.paymentDocument,b.paymentDocument=v,b.account=(0,d.bh)("PaymentMethodAccount").account,(p=null===(e=(0,d.bh)("account_ids"))||void 0===e?void 0:e[b.account]).payOrCollect&&(b.payOrCollect=p.payOrCollect),b.subAccount=(0,d.bh)("PaymentMethodAccount").subAccount,b.type="credit",b.amount=1*m,b.operationId=(0,d.M5)(),(f=(0,i.Z)({},null===(t=(0,d.bh)((0,d.hQ)()))||void 0===t?void 0:t.add_opera)).params={businessId:null===(l=(0,d.bh)("profileUser"))||void 0===l?void 0:l.businessId},f.form=b,r.push(f),_=r.map(function(){var n=(0,c.Z)((0,o.Z)().mark((function n(e){var t;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,d.I7)(e),n.next=3,t;case 3:n.sent;case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=27,Promise.all(_);case 27:setTimeout((function(){(0,d.Rz)(N,null),(0,d.Rz)(j,null),q((0,d.M5)()),J({pathname:"/accounting-ledger",search:"?cId=".concat(s)})}),400);case 28:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),nn=function(){var n=(0,i.Z)({},(0,d.bh)(N))||{},e=(0,i.Z)({},(0,d.bh)(A))||{};(0,d._2)(n).map((function(t){var o,c,l=(null===(o=(0,d.bh)(g))||void 0===o?void 0:o.account)+"_"+(null===(c=(0,d.bh)(g))||void 0===c?void 0:c.subAccount)+"_"+t,a=(0,i.Z)({},(0,d.bh)(g));e[l]={},e[l].amount=1*n[t],e[l].document=t,e[l].type="debit",e[l].account=null===a||void 0===a?void 0:a.account,e[l].providerId=null===a||void 0===a?void 0:a.providerId,e[l].subAccount=null===a||void 0===a?void 0:a.subAccount})),(0,d.Rz)(A,e),(0,d.Rz)(N,null),(0,d.Rz)(g,null),q((0,d.M5)())};return(0,m.jsxs)("div",{style:{overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Registrando Pago"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{style:{maxWidth:500,position:"relative"},children:(0,m.jsx)(_,{query:"Banco",type:null===(e=(0,d.bh)(j))||void 0===e?void 0:e.paymentType,handleClick:function(n,e){var t={account:n,subAccount:e};(0,d.Rz)("PaymentMethodAccount",t),q((0,d.M5)())}})}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),null!==(t=(0,d.bh)("PaymentMethodAccount"))&&void 0!==t&&t.account?(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(n){(0,d.Rz)("ComissionAccount",null),(0,d.Rz)("PaymentMethodAccount",null),W("paymentType",n),q((0,d.M5)())},children:null===(r=(0,d.bh)("account_ids"))||void 0===r||null===(s=r[null===(v=(0,d.bh)("PaymentMethodAccount"))||void 0===v?void 0:v.account])||void 0===s?void 0:s.code}),(0,m.jsx)("div",{className:"name",children:null===(h=(0,d.bh)("account_ids"))||void 0===h||null===(p=h[null===(x=(0,d.bh)("PaymentMethodAccount"))||void 0===x?void 0:x.account])||void 0===p?void 0:p.name})]}),(0,m.jsx)("div",{className:"flexSpace"}),null!==(y=(0,d.bh)("PaymentMethodAccount"))&&void 0!==y&&y.subAccount?(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"code",children:null===(Z=(0,d.bh)("sub_account_ids"))||void 0===Z||null===(P=Z[null===(M=(0,d.bh)("PaymentMethodAccount"))||void 0===M?void 0:M.subAccount])||void 0===P?void 0:P.subAccount}),(0,m.jsx)("div",{className:"name",children:null===(D=(0,d.bh)("sub_account_ids"))||void 0===D||null===(O=D[null===(k=(0,d.bh)("PaymentMethodAccount"))||void 0===k?void 0:k.subAccount])||void 0===O?void 0:O.subAccountName})]}):null]}):null]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)(f,{init:null===(C=(0,d.bh)(j))||void 0===C?void 0:C.date,label:"Fecha",width:120,updChanges:function(n){return W("date",n)}}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(f,{init:null===(F=(0,d.bh)(j))||void 0===F?void 0:F.paymentDocument,label:"Documento de Pago",width:200,updChanges:function(n){return W("paymentDocument",n)}})]}),(0,m.jsx)(f,{init:null===(S=(0,d.bh)(j))||void 0===S?void 0:S.description,label:"Descripcion",width:520,updChanges:function(n){return W("description",n)}}),null!==(T=(0,d.bh)("PaymentMethodAccount"))&&void 0!==T&&T.account?(0,m.jsxs)("div",{className:" _dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,m.jsx)(z,{updObs:q,confirm:nn}),(0,u.OpenModal)(n)},children:"Provedores"})]}):null,(0,d.bh)(A)&&(0,d._2)((0,d.bh)(A)).length>0?(0,m.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Balance"})]}),(0,d.bh)(A)&&(null===(B=(0,d._2)((0,d.bh)(A)))||void 0===B?void 0:B.map((function(n,e){return(0,m.jsx)(I,{idKey:n,data:(0,d.bh)(A)[n],updObs:q},n)}))),(0,m.jsx)(I,{data:{account:null===(E=(0,d.bh)("PaymentMethodAccount"))||void 0===E?void 0:E.account,subAccount:null===(U=(0,d.bh)("PaymentMethodAccount"))||void 0===U?void 0:U.subAccount,amount:R((0,d.bh)(A)),type:"credit",document:null===(Q=(0,d.bh)(j))||void 0===Q?void 0:Q.paymentDocument},updObs:q})]}):null,null!==(L=(0,d.bh)(j))&&void 0!==L&&L.paymentDocument&&R((0,d.bh)(A))>0?(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("button",{onClick:X,children:"Guardar"})})]}):null]})};var Z=function(n){var e=n.data,t=n.updObs,o=(n.idKey,(0,a.useState)(0)),i=(0,l.Z)(o,2),c=i[0],r=i[1],u=function(n,e,t){var o=(0,d.bh)(N)||{};t?(o[t]||(o[t]={}),o[t][n]=e):o[n]=e,(0,d.Rz)(N,o)};return 1*(null===e||void 0===e?void 0:e.amount)===0?null:(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null===e||void 0===e?void 0:e.document}),(0,m.jsxs)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:["$",(1*(null===e||void 0===e?void 0:e.amount)).toFixed(2)]}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:c>(null===e||void 0===e?void 0:e.amount)?(0,m.jsx)("div",{className:"icon",children:(0,m.jsx)(p,{name:"alert",color:"#c62828"})}):null}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,m.jsx)(f,{init:c,width:80,updChanges:function(n){return r(o=n),u(null===e||void 0===e?void 0:e.document,o),void t((0,d.M5)());var o}})})]})},I=function(n){var e,t,o=n.data;return 1*(null===o||void 0===o?void 0:o.amount)===0?null:(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:(0,m.jsx)(y,{data:null===(e=(0,d.bh)("account_ids"))||void 0===e?void 0:e[null===o||void 0===o?void 0:o.account],color:"debit"===o.type?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null!==o&&void 0!==o&&o.subAccount?(0,m.jsx)(y,{data:null===(t=(0,d.bh)("sub_account_ids"))||void 0===t?void 0:t[null===o||void 0===o?void 0:o.subAccount],color:"debit"===o.type?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"}):null}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null===o||void 0===o?void 0:o.document}),(0,m.jsxs)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:["$",(1*(null===o||void 0===o?void 0:o.amount)).toFixed(2)]})]})},z=function(n){var e,t,o,i,c,r,s,h,b,p,f,_,y,j,N,A,I=n.data,z=n.confirm,R=(0,a.useState)(0),P=(0,l.Z)(R,2),M=(P[0],P[1]),D=function(){M((0,d.M5)())};return(0,m.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Pagos por Provedores"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{style:{margin:"18px 0"},children:null!==(e=(0,d.bh)(g))&&void 0!==e&&e.account?(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(){(0,d.Rz)(g,null),M((0,d.M5)())},children:null===(t=(0,d.bh)("account_ids"))||void 0===t||null===(o=t[null===(i=(0,d.bh)(g))||void 0===i?void 0:i.account])||void 0===o?void 0:o.code}),(0,m.jsx)("div",{className:"name",children:null===(c=(0,d.bh)("account_ids"))||void 0===c||null===(r=c[null===(s=(0,d.bh)(g))||void 0===s?void 0:s.account])||void 0===r?void 0:r.name})]}),(0,m.jsx)("div",{className:"flexSpace"}),null!==(h=(0,d.bh)(g))&&void 0!==h&&h.subAccount?(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"code",children:null===(b=(0,d.bh)("sub_account_ids"))||void 0===b||null===(p=b[null===(f=(0,d.bh)(g))||void 0===f?void 0:f.subAccount])||void 0===p?void 0:p.subAccount}),(0,m.jsx)("div",{className:"name",children:null===(_=(0,d.bh)("sub_account_ids"))||void 0===_||null===(y=_[null===(j=(0,d.bh)(g))||void 0===j?void 0:j.subAccount])||void 0===y?void 0:y.subAccountName})]}):null]}),(0,m.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Balance"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Pagar"})]}),(0,d.bh)(w)&&(null===(N=(0,d._2)((0,d.bh)(w)))||void 0===N?void 0:N.map((function(n,e){return(0,m.jsx)(Z,{idKey:n,data:(0,d.bh)(w)[n],updObs:M},n)})))]})]}):(0,m.jsx)(x,{placeholder:"buscar un provedor",width:420,handleClick:function(n){var e={account:null===n||void 0===n?void 0:n.account,subAccount:null===n||void 0===n?void 0:n.subAccount,providerId:null===n||void 0===n?void 0:n.providerId};(0,d.Rz)(g,e),(0,v.nr)(e,D)}})}),null!==(A=(0,d.bh)(g))&&void 0!==A&&A.subAccount?(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:function(){z&&z(),(null===I||void 0===I?void 0:I.modalID)&&(0,u.CloseModal)({id:null===I||void 0===I?void 0:I.modalID})},children:"Guardar"})]}):null]})},R=function(n){var e,t=0;return n&&(null===(e=(0,d._2)(n))||void 0===e||e.map((function(e,o){var i;t+=(0,d.Zv)(null===(i=n[e])||void 0===i?void 0:i.amount,2)}))),t}},1232:function(n,e,t){t.d(e,{GP:function(){return s},N$:function(){return r},hF:function(){return b},i7:function(){return a},nr:function(){return d}});var o=t(4165),i=t(1413),c=t(5861),l=t(2350),a=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(e,t){var c,a,d,r,s,v;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(d=(0,i.Z)({},null===(c=(0,l.bh)((0,l.hQ)()))||void 0===c?void 0:c.find_acc_subacc)).params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},r=(0,l.I7)(d),n.next=5,r;case 5:(s=n.sent)&&!s.error&&((0,l.Rz)("collect_list",s),(0,l.Rz)("collect_by_doc",u(s)),(0,l.Rz)("collect_by_docM",u(s)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),h(s,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(e,t){var c,a,d,r,s,v;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(d=(0,i.Z)({},null===(c=(0,l.bh)((0,l.hQ)()))||void 0===c?void 0:c.find_acc_subacc)).params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},r=(0,l.I7)(d),n.next=5,r;case 5:(s=n.sent)&&!s.error&&((0,l.Rz)("toPay_list",s),(0,l.Rz)("toPay_by_doc",u(s,!0)),(0,l.Rz)("toPay_by_docM",u(s,!0)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),h(s,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),r=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(e){var t,c,a,d,r;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,i.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(c=(0,l.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,l.bh)("search_acc_record")},d=(0,l.I7)(a),n.next=5,d;case 5:(r=n.sent)&&!r.error&&((0,l.Rz)("comprobante_list",r),(0,l.Rz)("comprobante_by_doc",u(r))),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function u(n,e){var t={},o=n&&(0,l._2)(n);return o.length>0?o.map((function(o){var i=n[o],c=i.document;if(!t[c]){t[c]={};["date","description","document","entryName"].forEach((function(n){t[c][n]=i[n]})),t[c].amount=0,t[c].operations=[]}if(i.type){var a=(0,l.Zv)(i.amount,2),d=(0,l.Zv)(t[c].amount,2),r=0;r=e?d+("debit"===i.type?-1*a:a):d+("credit"===i.type?-1*a:a),t[c].amount=(0,l.Zv)(r,2),t[c].operations.push(function(n){var e,t,o={};o.account=null===(e=(0,l.bh)("account_ids"))||void 0===e?void 0:e[n.account],o.sub_account=null===(t=(0,l.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],o.comprobanteId=n.comprobanteId,o.date=n.date;var i=(0,l.Zv)(n.amount,2);"credit"===n.type?(o.debit=0,o.credit=i):"debit"===n.type&&(o.credit=0,o.debit=i);return o}(i))}})):t=null,t}var s=function(n,e,t){return(0,l.MV)("SumDocuments",[n,e,t],(function(){var t,o=0;return n&&(null===(t=(0,l._2)(n))||void 0===t||t.map((function(t,i){var c;o+=1*(null===(c=n[t])||void 0===c?void 0:c[e])}))),o}))},v=function(n,e,t){var o,i=0;return n&&(null===(o=(0,l._2)(n))||void 0===o||o.map((function(e,t){var o,c=(0,l.Zv)(n[e].amount,2);i+=c*("credit"===(null===(o=n[e])||void 0===o?void 0:o.type)?-1:1)}))),i},h=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(e,t,i){var c;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(c=(0,l.bh)("rec_by_acc")||{})[t]=v(e)||"no",(0,l.Rz)("rec_by_acc",c),i&&i();case 4:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}(),b=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(e,t,c){var a,d,r,u,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=(0,i.Z)({},null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.find_acc_subacc)).params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},u=(0,l.I7)(r),n.next=5,u;case 5:(s=n.sent)&&!s.error&&h(s,t),c&&c();case 8:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},6021:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return i}});var o=t(9142);function i(n,e,t){return(e=(0,o.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return c}});var o=t(4942);function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=297.cf6a46b8.chunk.js.map