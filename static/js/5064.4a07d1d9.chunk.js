"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5064,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return c},OpenModal:function(){return s},default:function(){return d}});var i=n(2791),r=n(5408),o=n(2350),l=n(184),a="listDialog_mdh392",d=function(){var e=(0,o.bh)("listDialog")||{},t=((0,r.Z)(a),Object.keys(e));return(0,l.jsx)(l.Fragment,{children:t.map((function(t,n){var r=e[t];if(r&&r.visible){var o={};r.height&&(o.heigth=r.height),r.width,r.zIndex&&(o.zIndex=r.zIndex-1);var a={zIndex:r.zIndex},d=null,s=r.data;return r.content&&(d=i.cloneElement(r.content,{data:s})),(0,l.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,l.jsx)("div",{className:"ltr-hoe9xz",children:(0,l.jsx)("div",{className:"ltr-1wao6ny",style:a,id:t,children:d})}),r.data.overlay?(0,l.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},s=function(e){var t=(0,o.bh)("listDialog")||{},n=(0,o.M5)();t[n]||(t[n]={}),t[n].visible=!0;var i={};e.props?(i=e.props).modalID=n:i.modalID=n;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===t[n].width&&i.height===t[n].height||(t[n].height=i.height+10,t[n].width=i.width,(0,o.Rz)("listDialog",t),(0,o.wt)(a)))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=i,(0,o.Rz)("listDialog",t),(0,o.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",n),(0,o.wt)(a)}),125)},c=function(e){var t,n,i,r=(0,o.bh)("listDialog")||{},l=e.id;r[l]&&(r[l].observeResize&&r[l].observeInterval&&clearInterval(r[l].observeInterval),r[l].display=!1,null===(t=r[l])||void 0===t||null===(n=t.data)||void 0===n||null===(i=n.closeEvent)||void 0===i||i.call(n),(0,o.Rz)("listDialog",r),delete r[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(a),setTimeout((function(){delete r[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},5064:function(e,t,n){n.r(t);var i=n(4942),r=n(1413),o=n(4165),l=n(5861),a=n(9439),d=n(2791),s=n(2350),c=n(2647),u=(n(4719),n(9661)),v=n(9760),p=n(24),m=(n(3728),n(7689)),h=n(184),b=(0,c.Np)(),f=(0,c.JC)(),x=(0,u.Uk)(),_=(0,u.LZ)(),y=(0,u.FC)(),j=(0,p.f_)(),I="entry_operation_comprobante";t.default=function(e){var t,n,i,c,u,p,f,O,C,k,z,F,R,D,T,A=e.data,E=(e.confirm,e.item),M=(0,d.useState)(!1),P=(0,a.Z)(M,2),S=P[0],B=P[1],U=(0,d.useState)(0),Q=(0,a.Z)(U,2),q=(Q[0],Q[1]),K=(0,m.s0)();(0,d.useEffect)((function(){if(!S){B(!0),(0,s.Rz)("accountPicker",{}),L("description",E.name),L("customerId",null),L("providerId",null);var e=E.accountsToParameterize;(0,s.Rz)("multi_params",e),q((0,s.M5)())}}));var L=function(e,t,n){var i=(0,s.bh)(I)||{};n?(i[n]||(i[n]={}),i[n][e]=t):i[e]=t,(0,s.Rz)(I,i),q((0,s.M5)())},H=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,n,i,a,d,c,u,p,m,h,b,f,x,_,y,j,g,w,Z,O,C,k;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,r.Z)({},(0,s.bh)(I))).date?d.date=new Date(d.date).getTime():d.date=(new Date).getTime()+800,e.next=4,(0,s.fN)(d.date);case 4:return c=e.sent,d.comprobanteId=c,d.document=null===(t=d.document)||void 0===t?void 0:t.trim(),u=[],(0,s.bh)("multi_params")&&(null===(n=(0,s._2)((0,s.bh)("multi_params")))||void 0===n||n.map(function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var i,l,a,c,v,p,m;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,s.bh)("multi_params")[t],!isNaN(1*i.amount)&&1*i.amount>0&&(v=(0,r.Z)({},d),"recurrent"===(null===E||void 0===E?void 0:E.extra)&&(v.document=i.document),v.account=i.account,v.subAccount=i.subAccount,v.type=i.type,v.amount=1*i.amount,v.operationId=(0,s.M5)(),delete v.providerId,(p=null===(l=(0,s.bh)("account_ids"))||void 0===l?void 0:l[i.account]).payOrCollect&&(v.payOrCollect=p.payOrCollect),(m=(0,r.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.add_opera)).params={businessId:null===(c=(0,s.bh)("profileUser"))||void 0===c?void 0:c.businessId},m.form=v,u.push(m));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())),"provider"===(null===E||void 0===E?void 0:E.extra)&&null!==(i=(0,s.bh)(I))&&void 0!==i&&i.providerId&&((b=(0,r.Z)({},d)).type="credit",f=(0,s.bh)("providers_ids")[(0,s.bh)(I).providerId],b.account=f.account,b.subAccount=f.subAccount,b.amount=N((0,s.bh)("multi_params")),b.operationId=(0,s.M5)(),(x=null===(p=(0,s.bh)("account_ids"))||void 0===p?void 0:p[f.account]).payOrCollect&&(b.payOrCollect=x.payOrCollect),(_=(0,r.Z)({},null===(m=(0,s.bh)((0,s.hQ)()))||void 0===m?void 0:m.add_opera)).params={businessId:null===(h=(0,s.bh)("profileUser"))||void 0===h?void 0:h.businessId},_.form=b,u.push(_)),"customer"===(null===E||void 0===E?void 0:E.extra)&&null!==(a=(0,s.bh)(I))&&void 0!==a&&a.customerId&&((w=(0,r.Z)({},d)).type="debit",Z=(0,s.bh)("providers_ids")[(0,s.bh)(I).customerId],w.account=Z.account,w.subAccount=Z.subAccount,w.amount=-1*N((0,s.bh)("multi_params")),w.operationId=(0,s.M5)(),(O=null===(y=(0,s.bh)("account_ids"))||void 0===y?void 0:y[Z.account]).payOrCollect&&(w.payOrCollect=O.payOrCollect),(C=(0,r.Z)({},null===(j=(0,s.bh)((0,s.hQ)()))||void 0===j?void 0:j.add_opera)).params={businessId:null===(g=(0,s.bh)("profileUser"))||void 0===g?void 0:g.businessId},C.form=w,u.push(C)),k=u.map(function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,s.I7)(t),e.next=3,n;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=14,Promise.all(k);case 14:setTimeout((function(){(0,s.Rz)("multi_params",null),(0,s.Rz)(I,null),(null===A||void 0===A?void 0:A.modalID)&&(0,v.CloseModal)({id:null===A||void 0===A?void 0:A.modalID}),K({pathname:"/accounting-ledger",search:"?cId=".concat(c)})}),400);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=("provider"===(null===E||void 0===E?void 0:E.extra)&&(null===(t=(0,s.bh)(I))||void 0===t?void 0:t.providerId)||"customer"===(null===E||void 0===E?void 0:E.extra)&&(null===(n=(0,s.bh)(I))||void 0===n?void 0:n.customerId))&&0!==N((0,s.bh)("multi_params")),W="recurrent"===(null===E||void 0===E?void 0:E.extra)||(null===(i=(0,s.bh)(I))||void 0===i?void 0:i.document);return(0,h.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title",children:"Asiento Manual"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(j,{init:null===(c=(0,s.bh)(I))||void 0===c?void 0:c.date,updDate:function(e){return L("date",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),"recurrent"===(null===E||void 0===E?void 0:E.extra)?null:(0,h.jsx)(b,{init:null===(u=(0,s.bh)(I))||void 0===u?void 0:u.document,label:"Documento",width:120,updChanges:function(e){return L("document",e)}})]}),(0,h.jsx)(b,{init:null===(p=(0,s.bh)(I))||void 0===p?void 0:p.description,label:"Descripcion",width:520,updChanges:function(e){return L("description",e)}}),"employee"===(null===E||void 0===E?void 0:E.extra)?(0,h.jsx)("div",{className:"extra_container",children:null!==(f=(0,s.bh)(I))&&void 0!==f&&f.employeeId?(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:function(){return L("employeeId",null)},children:"Empleado:"}),(0,h.jsx)("div",{className:"employee_name",children:null===(O=(0,s.bh)("employees_ids")[(0,s.bh)(I).employeeId])||void 0===O?void 0:O.name})]}):(0,h.jsx)(x,{width:420,handleClick:function(e){return L("employeeId",e)}})}):null,"provider"===(null===E||void 0===E?void 0:E.extra)?(0,h.jsx)("div",{className:"extra_container",children:null!==(C=(0,s.bh)(I))&&void 0!==C&&C.providerId?(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:function(){return L("providerId",null)},children:"Provedor:"}),(0,h.jsx)("div",{className:"employee_name",children:null===(k=(0,s.bh)("providers_ids")[(0,s.bh)(I).providerId])||void 0===k?void 0:k.name})]}):(0,h.jsx)(_,{width:420,handleClick:function(e){return L("providerId",null===e||void 0===e?void 0:e.providerId)}})}):null,"customer"===(null===E||void 0===E?void 0:E.extra)?(0,h.jsx)("div",{className:"extra_container",children:null!==(z=(0,s.bh)(I))&&void 0!==z&&z.customerId?(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:function(){return L("customerId",null)},children:"Cliente:"}),(0,h.jsx)("div",{className:"employee_name",children:null===(F=(0,s.bh)("providers_ids")[(0,s.bh)(I).customerId])||void 0===F?void 0:F.name})]}):(0,h.jsx)(y,{width:420,handleClick:function(e){return L("customerId",null===e||void 0===e?void 0:e.providerId)}})}):null,(0,h.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,h.jsx)("div",{className:"tr_bar_25",children:"Cuenta"}),(0,h.jsx)("div",{className:"tr_bar_25",children:"Sub Cuenta"}),(0,h.jsx)("div",{className:"tr_bar_25",children:"recurrent"===(null===E||void 0===E?void 0:E.extra)?"Documento":""}),(0,h.jsx)("div",{className:"tr_bar_25",children:"Importe"})]}),null!==(R=(0,s.bh)(I))&&void 0!==R&&R.customerId?(0,h.jsx)(w,{idKey:(0,s.bh)(I).customerId,data:(0,s.bh)("providers_ids")[(0,s.bh)(I).customerId],total:N((0,s.bh)("multi_params")),type:"debit"}):null,(0,s.bh)("multi_params")&&(null===(D=(0,s._2)((0,s.bh)("multi_params")))||void 0===D?void 0:D.map((function(e,t){return(0,h.jsx)(g,{idKey:e,data:(0,s.bh)("multi_params")[e],updObs:q,isRecurrent:"recurrent"===(null===E||void 0===E?void 0:E.extra)},e)}))),null!==(T=(0,s.bh)(I))&&void 0!==T&&T.providerId?(0,h.jsx)(w,{idKey:(0,s.bh)(I).providerId,data:(0,s.bh)("providers_ids")[(0,s.bh)(I).providerId],total:N((0,s.bh)("multi_params")),type:"credit"}):null]}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),W&&(V||Z((0,s.bh)("multi_params")))?(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("button",{className:"group_title addBtn purple",onClick:H,children:"Guardar"})}):null]})]})};var g=function(e){var t,n,r,o=e.data,l=e.updObs,c=e.idKey,u=e.isRecurrent,v=(0,d.useState)(0),p=(0,a.Z)(v,2),m=p[0],x=(p[1],function(e,t,n){var i=(0,s.bh)("multi_params")||{};n?(i[n]||(i[n]={}),i[n][e]=t):i[e]=t,(0,s.Rz)("multi_params",i)}),_=null===(t=(0,s.bh)("account_ids"))||void 0===t?void 0:t[null===o||void 0===o?void 0:o.account],y=null===(n=(0,s.bh)("sub_account_ids"))||void 0===n?void 0:n[null===o||void 0===o?void 0:o.subAccount];return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10,fontWeight:600,color:"debit"===o.type?"#009688":"#c62828"},children:(0,h.jsx)(f,{data:_,color:"debit"===o.type?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10},children:(0,h.jsx)(f,{data:y,color:"debit"===o.type?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"})}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10},children:u?(0,h.jsx)(b,{width:120,init:null===o||void 0===o?void 0:o.document,updChanges:function(e){x("document",e,c),l((0,s.M5)())}}):null}),(0,h.jsx)("div",{className:"tr_bar_25",children:(0,h.jsx)(b,(r={init:m,type:"number",width:80},(0,i.Z)(r,"init",null===o||void 0===o?void 0:o.amount),(0,i.Z)(r,"updChanges",(function(e){x("amount",e,c),l((0,s.M5)())})),r))})]})},w=function(e){var t,n,i=e.data,r=(e.idKey,e.total),o=e.type,l=(0,d.useState)(0),c=(0,a.Z)(l,2),u=(c[0],c[1],null===(t=(0,s.bh)("account_ids"))||void 0===t?void 0:t[null===i||void 0===i?void 0:i.account]),v=null===(n=(0,s.bh)("sub_account_ids"))||void 0===n?void 0:n[null===i||void 0===i?void 0:i.subAccount];return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10,fontWeight:600,color:"debit"===o?"#009688":"#c62828"},children:(0,h.jsx)(f,{data:u,color:"debit"===o?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10},children:(0,h.jsx)(f,{data:v,color:"debit"===o?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"})}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10}}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10},children:(0,h.jsx)("div",{className:"total_cntra",children:r*("debit"===o?-1:1).toFixed(2)})})]})},N=function(e){var t=0,n=e&&(0,s._2)(e);return n&&(null===n||void 0===n||n.map((function(n,i){var r=e[n],o=t.toFixed(2),l=null!==r&&void 0!==r&&r.amount?"debit"===(null===r||void 0===r?void 0:r.type)?parseFloat(r.amount):-1*parseFloat(r.amount):0;t=l+parseFloat(o)}))),t},Z=function(e){var t=0,n=e&&(0,s._2)(e);return n&&(null===n||void 0===n||n.map((function(n,i){var r=e[n],o=t.toFixed(2),l=null!==r&&void 0!==r&&r.amount?"debit"===(null===r||void 0===r?void 0:r.type)?parseFloat(r.amount):-1*parseFloat(r.amount):0;t=l+parseFloat(o)}))),n&&(null===n||void 0===n?void 0:n.length)>0&&0===t}},3728:function(e,t,n){n.d(t,{NA:function(){return s},g5:function(){return d},ph:function(){return l},yq:function(){return a}});var i=n(4165),r=n(5861),o=n(2350),l=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r,l,a,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.all_entries).params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId},a=(0,o.I7)(l),e.next=5,a;case 5:(d=e.sent)&&((0,o.Rz)("entries_list",d),(0,o.Rz)("entries_ids",(0,o.ME)(d,"accountingEntryId")),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r,l,a,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.search_entries).params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,o.bh)("search_entry_qry")},a=(0,o.I7)(l),e.next=5,a;case 5:(d=e.sent)&&((0,o.Rz)("entries_list",d),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t,n){var r,l,a,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.delete_entries).params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,accountingEntryId:t},d=(0,o.I7)(a),e.next=5,d;case 5:e.sent&&n&&n();case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.I7)({query:"getLastSequence"}),e.next=3,n;case 3:if(!(r=e.sent)){e.next=6;break}return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4719:function(){},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=5064.4a07d1d9.chunk.js.map