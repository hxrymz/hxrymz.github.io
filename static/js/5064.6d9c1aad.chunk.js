"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5064,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return d},OpenModal:function(){return s},default:function(){return l}});var i=n(2791),r=n(5408),o=n(2350),a=n(184),l=function(){var e=(0,o.bh)("listDialog")||{},t=((0,r.Z)("listDialog_h392"),Object.keys(e));return(0,a.jsx)(a.Fragment,{children:t.map((function(t,n){var r=e[t];if(r&&r.visible){var o={};r.height&&(o.heigth=r.height),r.width,r.zIndex&&(o.zIndex=r.zIndex-1);var l={zIndex:r.zIndex},s=null,c=r.data;return r.content&&(s=i.cloneElement(r.content,{data:c})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:l,id:t,children:s})}),r.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},t)}}))})},s=function(e){var t=(0,o.bh)("listDialog")||{},n=(0,o.M5)();t[n]||(t[n]={}),t[n].visible=!0;var i={};e.props?(i=e.props).modalID=n:i.modalID=n;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===t[n].width&&i.height===t[n].height||(t[n].height=i.height+10,t[n].width=i.width,(0,o.Rz)("listDialog",t),(0,o.wt)("listDialog_h392")))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=i,(0,o.Rz)("listDialog",t),(0,o.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",n),(0,o.wt)("listDialog_h392")}),125)},d=function(e){var t,n,i,r=(0,o.bh)("listDialog")||{},a=e.id;r[a]&&(r[a].observeResize&&r[a].observeInterval&&clearInterval(r[a].observeInterval),r[a].display=!1,null===(t=r[a])||void 0===t||null===(n=t.data)||void 0===n||null===(i=n.closeEvent)||void 0===i||i.call(n),(0,o.Rz)("listDialog",r),delete r[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)("listDialog_h392"),setTimeout((function(){delete r[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},5064:function(e,t,n){n.r(t);var i=n(4942),r=n(1413),o=n(4165),a=n(5861),l=n(9439),s=n(2791),d=n(2350),c=n(2647),u=(n(4719),n(9661)),v=n(9760),p=n(24),m=(n(3728),n(7689)),h=n(184),b=(0,c.Np)(),f=(0,c.JC)(),x=(0,u.Uk)(),_=(0,u.LZ)(),y=(0,u.FC)(),j=(0,p.f_)(),g="entry_operation_comprobante";t.default=function(e){var t,n,i,c,u,p,f,O,C,z,F,k,D,R,T,A=e.data,E=(e.confirm,e.item),M=(0,s.useState)(!1),P=(0,l.Z)(M,2),S=P[0],B=P[1],U=(0,s.useState)(0),Q=(0,l.Z)(U,2),q=(Q[0],Q[1]),K=(0,m.s0)();(0,s.useEffect)((function(){if(!S){B(!0),(0,d.Rz)("accountPicker",{}),L("description",E.name),L("customerId",null),L("providerId",null);var e=E.accountsToParameterize;(0,d.Rz)("multi_params",e),q((0,d.M5)())}}));var L=function(e,t,n){var i=(0,d.bh)(g)||{};n?(i[n]||(i[n]={}),i[n][e]=t):i[e]=t,(0,d.Rz)(g,i),q((0,d.M5)())},H=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var t,n,i,l,s,c,u,p,m,h,b,f,x,_,y,j,I,w,Z,O,C,z;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,r.Z)({},(0,d.bh)(g))).date?s.date=new Date(s.date).getTime():s.date=Date.now(),e.next=4,(0,d.fN)();case 4:return c=e.sent,s.comprobanteId=c,s.document=null===(t=s.document)||void 0===t?void 0:t.trim(),u=[],(0,d.bh)("multi_params")&&(null===(n=(0,d._2)((0,d.bh)("multi_params")))||void 0===n||n.map(function(){var e=(0,a.Z)((0,o.Z)().mark((function e(t,n){var i,a,l,c,v,p,m;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,d.bh)("multi_params")[t],!isNaN(1*i.amount)&&1*i.amount>0&&((v=(0,r.Z)({},s)).account=i.account,v.subAccount=i.subAccount,v.type=i.type,v.amount=1*i.amount,v.operationId=(0,d.M5)(),delete v.providerId,(p=null===(a=(0,d.bh)("account_ids"))||void 0===a?void 0:a[i.account]).payOrCollect&&(v.payOrCollect=p.payOrCollect),(m=(0,r.Z)({},null===(l=(0,d.bh)((0,d.hQ)()))||void 0===l?void 0:l.add_opera)).params={businessId:null===(c=(0,d.bh)("profileUser"))||void 0===c?void 0:c.businessId},m.form=v,u.push(m));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())),"provider"===(null===E||void 0===E?void 0:E.extra)&&null!==(i=(0,d.bh)(g))&&void 0!==i&&i.providerId&&((b=(0,r.Z)({},s)).type="credit",f=(0,d.bh)("providers_ids")[(0,d.bh)(g).providerId],b.account=f.account,b.subAccount=f.subAccount,b.amount=N((0,d.bh)("multi_params")),b.operationId=(0,d.M5)(),(x=null===(p=(0,d.bh)("account_ids"))||void 0===p?void 0:p[f.account]).payOrCollect&&(b.payOrCollect=x.payOrCollect),(_=(0,r.Z)({},null===(m=(0,d.bh)((0,d.hQ)()))||void 0===m?void 0:m.add_opera)).params={businessId:null===(h=(0,d.bh)("profileUser"))||void 0===h?void 0:h.businessId},_.form=b,u.push(_)),"customer"===(null===E||void 0===E?void 0:E.extra)&&null!==(l=(0,d.bh)(g))&&void 0!==l&&l.customerId&&((w=(0,r.Z)({},s)).type="debit",Z=(0,d.bh)("providers_ids")[(0,d.bh)(g).customerId],w.account=Z.account,w.subAccount=Z.subAccount,w.amount=-1*N((0,d.bh)("multi_params")),w.operationId=(0,d.M5)(),(O=null===(y=(0,d.bh)("account_ids"))||void 0===y?void 0:y[Z.account]).payOrCollect&&(w.payOrCollect=O.payOrCollect),(C=(0,r.Z)({},null===(j=(0,d.bh)((0,d.hQ)()))||void 0===j?void 0:j.add_opera)).params={businessId:null===(I=(0,d.bh)("profileUser"))||void 0===I?void 0:I.businessId},C.form=w,u.push(C)),z=u.map(function(){var e=(0,a.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,d.I7)(t),e.next=3,n;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=14,Promise.all(z);case 14:setTimeout((function(){(0,d.Rz)("multi_params",null),(0,d.Rz)(g,null),(null===A||void 0===A?void 0:A.modalID)&&(0,v.CloseModal)({id:null===A||void 0===A?void 0:A.modalID}),K({pathname:"/accounting-ledger",search:"?cId=".concat(c)})}),400);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=("provider"===(null===E||void 0===E?void 0:E.extra)&&(null===(t=(0,d.bh)(g))||void 0===t?void 0:t.providerId)||"customer"===(null===E||void 0===E?void 0:E.extra)&&(null===(n=(0,d.bh)(g))||void 0===n?void 0:n.customerId))&&0!==N((0,d.bh)("multi_params"));return(0,h.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title",children:"Asiento Manual"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(j,{init:null===(i=(0,d.bh)(g))||void 0===i?void 0:i.date,updDate:function(e){return L("date",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(b,{init:null===(c=(0,d.bh)(g))||void 0===c?void 0:c.document,label:"Documento",width:120,updChanges:function(e){return L("document",e)}})]}),(0,h.jsx)(b,{init:null===(u=(0,d.bh)(g))||void 0===u?void 0:u.description,label:"Descripcion",width:520,updChanges:function(e){return L("description",e)}}),"employee"===(null===E||void 0===E?void 0:E.extra)?(0,h.jsx)("div",{className:"extra_container",children:null!==(p=(0,d.bh)(g))&&void 0!==p&&p.employeeId?(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:function(){return L("employeeId",null)},children:"Empleado:"}),(0,h.jsx)("div",{className:"employee_name",children:null===(f=(0,d.bh)("employees_ids")[(0,d.bh)(g).employeeId])||void 0===f?void 0:f.name})]}):(0,h.jsx)(x,{width:420,handleClick:function(e){return L("employeeId",e)}})}):null,"provider"===(null===E||void 0===E?void 0:E.extra)?(0,h.jsx)("div",{className:"extra_container",children:null!==(O=(0,d.bh)(g))&&void 0!==O&&O.providerId?(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:function(){return L("providerId",null)},children:"Provedor:"}),(0,h.jsx)("div",{className:"employee_name",children:null===(C=(0,d.bh)("providers_ids")[(0,d.bh)(g).providerId])||void 0===C?void 0:C.name})]}):(0,h.jsx)(_,{width:420,handleClick:function(e){return L("providerId",null===e||void 0===e?void 0:e.providerId)}})}):null,"customer"===(null===E||void 0===E?void 0:E.extra)?(0,h.jsx)("div",{className:"extra_container",children:null!==(z=(0,d.bh)(g))&&void 0!==z&&z.customerId?(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"employee_title",style:{color:"#646cff",cursor:"pointer"},onClick:function(){return L("customerId",null)},children:"Cliente:"}),(0,h.jsx)("div",{className:"employee_name",children:null===(F=(0,d.bh)("providers_ids")[(0,d.bh)(g).customerId])||void 0===F?void 0:F.name})]}):(0,h.jsx)(y,{width:420,handleClick:function(e){return L("customerId",null===e||void 0===e?void 0:e.providerId)}})}):null,(0,h.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,h.jsx)("div",{className:"tr_bar_25",children:"Cuenta"}),(0,h.jsx)("div",{className:"tr_bar_25",children:"Sub Cuenta"}),(0,h.jsx)("div",{className:"tr_bar_25"}),(0,h.jsx)("div",{className:"tr_bar_25",children:"Importe"})]}),null!==(k=(0,d.bh)(g))&&void 0!==k&&k.customerId?(0,h.jsx)(w,{idKey:(0,d.bh)(g).customerId,data:(0,d.bh)("providers_ids")[(0,d.bh)(g).customerId],total:N((0,d.bh)("multi_params")),type:"debit"}):null,(0,d.bh)("multi_params")&&(null===(D=(0,d._2)((0,d.bh)("multi_params")))||void 0===D?void 0:D.map((function(e,t){return(0,h.jsx)(I,{idKey:e,data:(0,d.bh)("multi_params")[e],updObs:q},e)}))),null!==(R=(0,d.bh)(g))&&void 0!==R&&R.providerId?(0,h.jsx)(w,{idKey:(0,d.bh)(g).providerId,data:(0,d.bh)("providers_ids")[(0,d.bh)(g).providerId],total:N((0,d.bh)("multi_params")),type:"credit"}):null]}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),null!==(T=(0,d.bh)(g))&&void 0!==T&&T.document&&(V||Z((0,d.bh)("multi_params")))?(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("button",{className:"group_title addBtn purple",onClick:H,children:"Guardar"})}):null]})]})};var I=function(e){var t,n,r,o=e.data,a=e.updObs,c=e.idKey,u=(0,s.useState)(0),v=(0,l.Z)(u,2),p=v[0],m=(v[1],function(e,t,n){var i=(0,d.bh)("multi_params")||{};n?(i[n]||(i[n]={}),i[n][e]=t):i[e]=t,(0,d.Rz)("multi_params",i)}),x=null===(t=(0,d.bh)("account_ids"))||void 0===t?void 0:t[null===o||void 0===o?void 0:o.account],_=null===(n=(0,d.bh)("sub_account_ids"))||void 0===n?void 0:n[null===o||void 0===o?void 0:o.subAccount];return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10,fontWeight:600,color:"debit"===o.type?"#009688":"#c62828"},children:(0,h.jsx)(f,{data:x,color:"debit"===o.type?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10},children:(0,h.jsx)(f,{data:_,color:"debit"===o.type?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"})}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10}}),(0,h.jsx)("div",{className:"tr_bar_25",children:(0,h.jsx)(b,(r={init:p,type:"number",width:80},(0,i.Z)(r,"init",null===o||void 0===o?void 0:o.amount),(0,i.Z)(r,"updChanges",(function(e){m("amount",e,c),a((0,d.M5)())})),r))})]})},w=function(e){var t,n,i=e.data,r=(e.idKey,e.total),o=e.type,a=(0,s.useState)(0),c=(0,l.Z)(a,2),u=(c[0],c[1],null===(t=(0,d.bh)("account_ids"))||void 0===t?void 0:t[null===i||void 0===i?void 0:i.account]),v=null===(n=(0,d.bh)("sub_account_ids"))||void 0===n?void 0:n[null===i||void 0===i?void 0:i.subAccount];return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10,fontWeight:600,color:"debit"===o?"#009688":"#c62828"},children:(0,h.jsx)(f,{data:u,color:"debit"===o?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10},children:(0,h.jsx)(f,{data:v,color:"debit"===o?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"})}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10}}),(0,h.jsx)("div",{className:"tr_bar_25",style:{marginTop:10},children:(0,h.jsx)("div",{className:"total_cntra",children:r*("debit"===o?-1:1).toFixed(2)})})]})},N=function(e){var t=0,n=e&&(0,d._2)(e);return n&&(null===n||void 0===n||n.map((function(n,i){var r=e[n],o=t.toFixed(2),a=null!==r&&void 0!==r&&r.amount?"debit"===(null===r||void 0===r?void 0:r.type)?parseFloat(r.amount):-1*parseFloat(r.amount):0;t=a+parseFloat(o)}))),t},Z=function(e){var t=0,n=e&&(0,d._2)(e);return n&&(null===n||void 0===n||n.map((function(n,i){var r=e[n],o=t.toFixed(2),a=null!==r&&void 0!==r&&r.amount?"debit"===(null===r||void 0===r?void 0:r.type)?parseFloat(r.amount):-1*parseFloat(r.amount):0;t=a+parseFloat(o)}))),n&&(null===n||void 0===n?void 0:n.length)>0&&0===t}},3728:function(e,t,n){n.d(t,{NA:function(){return d},g5:function(){return s},ph:function(){return a},yq:function(){return l}});var i=n(4165),r=n(5861),o=n(2350),a=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r,a,l,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.all_entries).params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId},l=(0,o.I7)(a),e.next=5,l;case 5:(s=e.sent)&&((0,o.Rz)("entries_list",s),(0,o.Rz)("entries_ids",(0,o.ME)(s,"accountingEntryId")),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r,a,l,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.search_entries).params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,o.bh)("search_entry_qry")},l=(0,o.I7)(a),e.next=5,l;case 5:(s=e.sent)&&((0,o.Rz)("entries_list",s),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t,n){var r,a,l,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.delete_entries).params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,accountingEntryId:t},s=(0,o.I7)(l),e.next=5,s;case 5:e.sent&&n&&n();case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.I7)({query:"getLastSequence"}),e.next=3,n;case 3:if(!(r=e.sent)){e.next=7;break}return t&&t(r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4719:function(){},4942:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(9142);function r(e,t,n){return(t=(0,i.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=5064.6d9c1aad.chunk.js.map