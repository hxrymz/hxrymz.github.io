"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[619,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return u},OpenModal:function(){return o},default:function(){return l}});var i=t(2791),a=t(5408),c=t(2350),r=t(184),s="listDialog_mdh392",l=function(){var e=(0,c.bh)("listDialog")||{},n=((0,a.Z)(s),Object.keys(e));return(0,r.jsx)(r.Fragment,{children:n.map((function(n,t){var a=e[n];if(a&&a.visible){var c={};a.height&&(c.heigth=a.height),a.width,a.zIndex&&(c.zIndex=a.zIndex-1);var s={zIndex:a.zIndex},l=null,o=a.data;return a.content&&(l=i.cloneElement(a.content,{data:o})),(0,r.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,r.jsx)("div",{className:"ltr-hoe9xz",children:(0,r.jsx)("div",{className:"ltr-1wao6ny",style:s,id:n,children:l})}),a.data.overlay?(0,r.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:e})}}):null]},n)}}))})},o=function(e){var n=(0,c.bh)("listDialog")||{},t=(0,c.M5)();n[t]||(n[t]={}),n[t].visible=!0;var i={};e.props?(i=e.props).modalID=t:i.modalID=t;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===n[t].width&&i.height===n[t].height||(n[t].height=i.height+10,n[t].width=i.width,(0,c.Rz)("listDialog",n),(0,c.wt)(s)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=i,(0,c.Rz)("listDialog",n),(0,c.wt)(s),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",t),(0,c.wt)(s)}),125)},u=function(e){var n,t,i,a=(0,c.bh)("listDialog")||{},r=e.id;a[r]&&(a[r].observeResize&&a[r].observeInterval&&clearInterval(a[r].observeInterval),a[r].display=!1,null===(n=a[r])||void 0===n||null===(t=n.data)||void 0===t||null===(i=t.closeEvent)||void 0===i||i.call(t),(0,c.Rz)("listDialog",a),delete a[r],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)(s),setTimeout((function(){delete a[r],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},619:function(e,n,t){t.r(n);var i=t(4165),a=t(1413),c=t(5861),r=t(9439),s=t(2791),l=t(2350),o=t(2647),u=(t(4719),t(9760)),d=t(9661),v=t(7689),h=t(24),m=(t(3728),t(184)),p=(0,o.PU)(),b=(0,o.Np)(),f=(0,o.tL)(),x=(0,d.a)(),j=(0,o.JC)(),_=(0,h.f_)(),y="new_operation_comprobante";n.default=function(e){var n,t,o,d,h,j,w,k,I,O,C,Z,z,P,R,D,F=e.data,L=e.confirm,S=(0,s.useState)(!1),M=(0,r.Z)(S,2),A=M[0],E=M[1],T=(0,s.useState)(0),B=(0,r.Z)(T,2),q=(B[0],B[1]),U=(0,v.s0)();(0,s.useEffect)((function(){A||(E(!0),(0,l.Rz)("accountPicker",{}),q((0,l.M5)()))}));var Q=function(e,n,t){var i=(0,l.bh)(y)||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,l.Rz)(y,i),q((0,l.M5)())},H=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var n,t,r,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=(0,l.bh)(y)).date?n.date=new Date(n.date).getTime():n.date=(new Date).getTime()+800,t=[],e.next=5,(0,l.fN)(n.date);case 5:return r=e.sent,n.comprobanteId=r,(s=(0,l.bh)("accountListOnCmp")&&(0,l._2)((0,l.bh)("accountListOnCmp")))&&(null===s||void 0===s||s.map(function(){var e=(0,c.Z)((0,i.Z)().mark((function e(c,r){var s,o,u,d,v,h,m;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=(0,a.Z)({},n),v=(0,a.Z)({},(0,l.bh)("accountListOnCmp")[c]),d.account=v.account,(h=null===(s=(0,l.bh)("account_ids"))||void 0===s?void 0:s[v.account]).payOrCollect&&(d.payOrCollect=h.payOrCollect),d.subAccount=v.subAccount,d.type=v.type,d.document=v.document.trim(),d.amount=1*v.amount,d.operationId=(0,l.M5)(),(m=(0,a.Z)({},null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.add_opera)).params={businessId:null===(u=(0,l.bh)("profileUser"))||void 0===u?void 0:u.businessId},m.form=d,t.push(m);case 14:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())),o=t.map(function(){var e=(0,c.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=12,Promise.all(o);case 12:(null===F||void 0===F?void 0:F.modalID)&&(0,u.CloseModal)({id:null===F||void 0===F?void 0:F.modalID}),setTimeout((function(){(0,l.Rz)("accountListOnCmp",null),(0,l.Rz)(y,null),q((0,l.M5)()),L&&L(),U({pathname:"/accounting-ledger",search:"?cId=".concat(r)})}),400);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e,n,t){var i=(0,l.bh)("accountPicker")||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,l.Rz)("accountPicker",i),q((0,l.M5)())},V=function(e){var n=(0,l.bh)("accountListOnCmp")||{};delete n[e],(0,l.Rz)("accountListOnCmp",n),q((0,l.M5)())},Y=null===(n=(0,l.bh)("account_ids"))||void 0===n?void 0:n[null===(t=(0,l.bh)("accountPicker"))||void 0===t?void 0:t.account],G=null===(o=(0,l.bh)("sub_account_ids"))||void 0===o?void 0:o[null===(d=(0,l.bh)("accountPicker"))||void 0===d?void 0:d.subAccount];return(0,m.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"760px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Asiento Manual"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)(_,{init:null===(h=(0,l.bh)(y))||void 0===h?void 0:h.date,updDate:function(e){return Q("date",e)}}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)(b,{init:null===(j=(0,l.bh)(y))||void 0===j?void 0:j.description,label:"Descripcion",width:520,updChanges:function(e){return Q("description",e)}}),(0,m.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(w=(0,l.bh)("accountPicker"))&&void 0!==w&&w.account?(0,m.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===Y||void 0===Y?void 0:Y.code}),(0,m.jsx)("div",{className:"name",children:null===Y||void 0===Y?void 0:Y.name})]}),(0,m.jsx)("div",{className:"flexSpace"}),G?(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"code",children:null===G||void 0===G?void 0:G.subAccount}),(0,m.jsx)("div",{className:"name",children:null===G||void 0===G?void 0:G.subAccountName})]}):null]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"icon",onClick:function(){(0,l.Rz)("accountPicker",null),q((0,l.M5)())},children:(0,m.jsx)(p,{name:"outline_edit",color:"#1a73e8"})})]}):(0,m.jsx)(x,{placeholder:"buscar una cuenta",width:420,handleClick:function(e,n){var t={account:e,subAccount:n};(0,l.Rz)("accountPicker",t),q((0,l.M5)())}}),null!==(k=(0,l.bh)("accountPicker"))&&void 0!==k&&k.account?(0,m.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(f,{data:[{label:"Debito",id:"debit"},{label:"Credito",id:"credit"}],active:null===(I=(0,l.bh)("accountPicker"))||void 0===I?void 0:I.type,updSelect:function(e){return K("type",e)}}),(0,m.jsx)("div",{className:"flexSpace"})]}):null,null!==(O=(0,l.bh)("accountPicker"))&&void 0!==O&&O.account&&null!==(C=(0,l.bh)("accountPicker"))&&void 0!==C&&C.type?(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)(b,{init:null===(Z=(0,l.bh)("accountPicker"))||void 0===Z?void 0:Z.document,label:"Documento",width:120,updChanges:function(e){return K("document",e)}}),(0,m.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,m.jsx)(b,{init:null===(z=(0,l.bh)("accountPicker"))||void 0===z?void 0:z.amount,label:"Importe",width:120,type:"number",updChanges:function(e){return K("amount",e)}})}),(0,m.jsx)("div",{className:"flexSpace"}),null!==(P=(0,l.bh)("accountPicker"))&&void 0!==P&&P.amount&&null!==(R=(0,l.bh)("accountPicker"))&&void 0!==R&&R.document?(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("button",{onClick:function(){var e=(0,a.Z)({},(0,l.bh)("accountPicker"))||{},n=(0,a.Z)({},(0,l.bh)("accountPicker"))||{},t=(0,a.Z)({},(0,l.bh)("accountListOnCmp"))||{};t[e.account+"_"+e.subAccount+"_"+e.document]=e,(0,l.Rz)("accountListOnCmp",t),n.document="",n.amount="",n.type="",(0,l.Rz)("accountPicker",n),q((0,l.M5)())},children:"Agregar"})}):null]}):null,(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Cuenta"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Sub Cuenta"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Documento"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Debito"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"Credito"})]}),(0,l.bh)("accountListOnCmp")&&(null===(D=(0,l._2)((0,l.bh)("accountListOnCmp")))||void 0===D?void 0:D.map((function(e,n){return(0,m.jsx)(g,{idKey:e,data:(0,l.bh)("accountListOnCmp")[e],deleteItem:V},e)})))]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),N((0,l.bh)("accountListOnCmp"))?(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("button",{onClick:H,children:"Guardar"})}):null]})]})};var g=function(e){var n,t,i=e.data,a=e.deleteItem,c=e.idKey,r=null===(n=(0,l.bh)("account_ids"))||void 0===n?void 0:n[null===i||void 0===i?void 0:i.account],s=null===(t=(0,l.bh)("sub_account_ids"))||void 0===t?void 0:t[null===i||void 0===i?void 0:i.subAccount];return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,m.jsx)(j,{data:r,labelField:"code",infoField:"name"})}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,m.jsx)(j,{data:s,labelField:"subAccount",infoField:"subAccountName"})}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:null!==i&&void 0!==i&&i.document?i.document:""}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"debit"===(null===i||void 0===i?void 0:i.type)?i.amount:0}),(0,m.jsx)("div",{className:"tr_bar tr_bar_20",children:"credit"===(null===i||void 0===i?void 0:i.type)?i.amount:0}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"icon",onClick:function(){a(c)},children:(0,m.jsx)(p,{name:"outline_delete",color:"#c62828"})})]})},N=function(e){var n=0,t=e&&(0,l._2)(e);return t&&(null===t||void 0===t||t.map((function(t,i){var a=e[t],c=n.toFixed(2),r=null!==a&&void 0!==a&&a.amount?"debit"===(null===a||void 0===a?void 0:a.type)?parseFloat(a.amount):-1*parseFloat(a.amount):0;n=r+parseFloat(c)}))),t&&(null===t||void 0===t?void 0:t.length)>0&&0===n}},3728:function(e,n,t){t.d(n,{NA:function(){return o},g5:function(){return l},ph:function(){return r},yq:function(){return s}});var i=t(4165),a=t(5861),c=t(2350),r=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a,r,s,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.all_entries).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId},s=(0,c.I7)(r),e.next=5,s;case 5:(l=e.sent)&&((0,c.Rz)("entries_list",l),(0,c.Rz)("entries_ids",(0,c.ME)(l,"accountingEntryId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a,r,s,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.search_entries).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,c.bh)("search_entry_qry")},s=(0,c.I7)(r),e.next=5,s;case 5:(l=e.sent)&&((0,c.Rz)("entries_list",l),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n,t){var a,r,s,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.delete_entries).params={businessId:null===(r=(0,c.bh)("profileUser"))||void 0===r?void 0:r.businessId,accountingEntryId:n},l=(0,c.I7)(s),e.next=5,l;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,c.I7)({query:"getLastSequence"}),e.next=3,t;case 3:if(!(a=e.sent)){e.next=6;break}return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4719:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=619.1553353e.chunk.js.map