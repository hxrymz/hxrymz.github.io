"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8603,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return s},OpenModal:function(){return u},default:function(){return l}});var o=t(2791),r=t(5408),c=t(2350),i=t(184),a="listDialog_mdh392",l=function(){var e=(0,c.bh)("listDialog")||{},n=((0,r.Z)(a),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:n.map((function(n,t){var r=e[n];if(r&&r.visible){var c={};r.height&&(c.heigth=r.height),r.width,r.zIndex&&(c.zIndex=r.zIndex-1);var a={zIndex:r.zIndex},l=null,u=r.data;return r.content&&(l=o.cloneElement(r.content,{data:u})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:l})}),r.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:e})}}):null]},n)}}))})},u=function(e){var n=(0,c.bh)("listDialog")||{},t=(0,c.M5)();n[t]||(n[t]={}),n[t].visible=!0;var o={};e.props?(o=e.props).modalID=t:o.modalID=t;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===n[t].width&&o.height===n[t].height||(n[t].height=o.height+10,n[t].width=o.width,(0,c.Rz)("listDialog",n),(0,c.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=o,(0,c.Rz)("listDialog",n),(0,c.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",t),(0,c.wt)(a)}),125)},s=function(e){var n,t,o,r=(0,c.bh)("listDialog")||{},i=e.id;r[i]&&(r[i].observeResize&&r[i].observeInterval&&clearInterval(r[i].observeInterval),r[i].display=!1,null===(n=r[i])||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.closeEvent)||void 0===o||o.call(t),(0,c.Rz)("listDialog",r),delete r[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)(a),setTimeout((function(){delete r[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},8603:function(e,n,t){t.r(n);var o=t(4165),r=t(1413),c=t(5861),i=t(9439),a=t(2791),l=t(2350),u=t(2647),s=(t(6021),t(9760)),d=(t(9179),t(1232)),v=t(24),h=t(7689),p=t(184),b=(0,u.PU)(),m=(0,v.f_)(),f=(0,u.Np)(),_=(0,u.tL)(),y="new_cobro2_comprobante";n.default=function(e){var n,t,u,v,b,w=e.data,I=e.confirm,Z=(0,a.useState)(!1),N=(0,i.Z)(Z,2),z=N[0],D=N[1],R=(0,a.useState)(0),O=(0,i.Z)(R,2),k=(O[0],O[1]),C=(0,h.s0)();(0,a.useEffect)((function(){z||(D(!0),(0,l.Rz)("accountPicker",{}),k((0,l.M5)()))}));var P=function(e,n,t){var o=(0,l.bh)(y)||{};t?(o[t]||(o[t]={}),o[t][e]=n):o[e]=n,(0,l.Rz)(y,o),k((0,l.M5)())},T=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var n,t,i,a,u,v,h,p,b,m,f,_;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,l.bh)(y),u=[],a.date?a.date=new Date(a.date).getTime():a.date=(new Date).getTime()+800,e.next=5,(0,l.fN)();case 5:return v=e.sent,a.comprobanteId=v,h="",(p=(0,l.bh)("multi_collect_by_doc")&&(0,l._2)((0,l.bh)("multi_collect_by_doc")))&&(null===p||void 0===p||p.map((function(e,n){var t,o,c,i,s,d=(0,r.Z)({},a),v=(0,l.bh)("multi_collect_by_doc")[e];d.document=e,h+=e+" ; ",d.account=null===(t=(0,l.bh)("Acc2Collect"))||void 0===t?void 0:t.account,d.subAccount=null===(o=(0,l.bh)("Acc2Collect"))||void 0===o?void 0:o.subAccount,d.customerId=null===(c=(0,l.bh)("Acc2Collect"))||void 0===c?void 0:c.customerId,d.type="credit",d.amount=1*v,d.payOrCollect="collect",d.operationId=(0,l.M5)();var p=(0,r.Z)({},null===(i=(0,l.bh)((0,l.hQ)()))||void 0===i?void 0:i.add_opera);p.params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId},p.form=d,u.push(p)}))),b=(0,r.Z)({},a),m=g((0,l.bh)("multi_collect_by_doc")),b.document=b.collectDocument,b.collectDocument=h,b.PaymentMethodType=b.paymentType,b.account=null===(n=(0,l.bh)("global_account_params"))||void 0===n?void 0:n.cash_bank,b.type="debit",b.amount=1*m,b.operationId=(0,l.M5)(),(f=(0,r.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.add_opera)).params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId},f.form=b,u.push(f),_=u.map(function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=26,Promise.all(_);case 26:setTimeout((function(){(0,l.Rz)("multi_collect_by_doc",null),(0,l.Rz)(y,null),k((0,l.M5)()),I&&I(),(0,l.I0)()?((null===w||void 0===w?void 0:w.modalID)&&(0,s.CloseModal)({id:null===w||void 0===w?void 0:w.modalID}),C({pathname:"/accounting-ledger",search:"?cId=".concat(v)})):(0,d.i7)((0,l.bh)("Acc2Collect"),(function(){(null===w||void 0===w?void 0:w.modalID)&&(0,s.CloseModal)({id:null===w||void 0===w?void 0:w.modalID})}))}),400);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=(0,d.GP)((0,l.bh)("collect_by_doc"),"amount");return(0,p.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"720px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("p",{className:"form_title",children:"Registrando Cobro"}),(0,p.jsx)("div",{className:"flexSpace"})]}),(0,p.jsx)("div",{className:"_dsplFlx ",children:(0,p.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)(_,{data:[{label:"Cheque",id:"check"},{label:"Tarjeta",id:"card"}],active:null===(n=(0,l.bh)(y))||void 0===n?void 0:n.paymentType,updSelect:function(e){return P("paymentType",e)}}),(0,p.jsx)("div",{className:"flexSpace"})]})}),(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)(m,{init:null===(t=(0,l.bh)(y))||void 0===t?void 0:t.date,updDate:function(e){return P("date",e)}}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)(f,{init:null===(u=(0,l.bh)(y))||void 0===u?void 0:u.collectDocument,label:"Documento de Cobro",width:200,updChanges:function(e){return P("collectDocument",e)}})]}),(0,p.jsx)(f,{init:null===(v=(0,l.bh)(y))||void 0===v?void 0:v.description,label:"Descripcion",width:520,updChanges:function(e){return P("description",e)}}),A?(0,p.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_40",children:"Documento"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_20",children:"Balance"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_10"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Cobrar"})]}),(0,l.bh)("collect_by_doc")&&(null===(b=(0,l._2)((0,l.bh)("collect_by_doc")))||void 0===b?void 0:b.map((function(e,n){return(0,p.jsx)(x,{idKey:e,data:(0,l.bh)("collect_by_doc")[e],updObs:k},e)})))]}):null,j((0,l.bh)("collect_by_doc"))?(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("button",{onClick:T,children:"Guardar"})})]}):null]})};var x=function(e){var n=e.data,t=e.updObs,o=(e.idKey,(0,a.useState)(0)),r=(0,i.Z)(o,2),c=r[0],u=r[1],s=function(e,n,t){var o=(0,l.bh)("multi_collect_by_doc")||{};t?(o[t]||(o[t]={}),o[t][e]=n):o[e]=n,(0,l.Rz)("multi_collect_by_doc",o)};return 1*(null===n||void 0===n?void 0:n.amount)==0?null:(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_40",style:{marginTop:10},children:null===n||void 0===n?void 0:n.document}),(0,p.jsxs)("div",{className:"tr_bar tr_bar_20",style:{marginTop:10},children:["$",(1*(null===n||void 0===n?void 0:n.amount)).toFixed(2)]}),(0,p.jsx)("div",{className:"tr_bar tr_bar_10",style:{marginTop:10},children:c>1*(null===n||void 0===n?void 0:n.amount)?(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)(b,{name:"alert",color:"#c62828"})}):null}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,p.jsx)(f,{init:c,width:80,type:"number",updChanges:function(e){return u(o=e),s(null===n||void 0===n?void 0:n.document,o),void t((0,l.M5)());var o}})})]})},g=function(e){var n,t=0;return e&&(null===(n=(0,l._2)(e))||void 0===n||n.map((function(n,o){t=1*(0,l.Zv)(t,2)+1*(0,l.Zv)(e[n],2)}))),t},j=function(e){var n=e&&(0,l._2)(e),t=(0,l.bh)("multi_collect_by_doc"),o=!0;return n&&(null===n||void 0===n||n.map((function(n,r){var c=e[n],i=(0,l.Zv)(1*(null===c||void 0===c?void 0:c.amount),2),a=null!==t&&void 0!==t&&t[c.document]?(0,l.Zv)(1*t[c.document],2):0;a&&a-i>0&&(o=!1)}))),o}},1232:function(e,n,t){t.d(n,{GP:function(){return d},N$:function(){return u},hF:function(){return p},i7:function(){return a},nr:function(){return l},pj:function(){return b}});var o=t(4165),r=t(1413),c=t(5861),i=t(2350),a=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t){var c,a,l,u,d,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,r.Z)({},null===(c=(0,i.bh)((0,i.hQ)()))||void 0===c?void 0:c.filter_search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},u=(0,i.I7)(l),e.next=5,u;case 5:(d=e.sent)&&!d.error&&((0,i.Rz)("collect_list",d),(0,i.Rz)("collect_by_doc",s(d)),(0,i.Rz)("collect_by_docM",s(d)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),h(d,v)),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t){var c,a,l,u,d,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,r.Z)({},null===(c=(0,i.bh)((0,i.hQ)()))||void 0===c?void 0:c.filter_search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},u=(0,i.I7)(l),e.next=5,u;case 5:(d=e.sent)&&!d.error&&((0,i.Rz)("toPay_list",d),(0,i.Rz)("toPay_by_doc",s(d,!0)),(0,i.Rz)("toPay_by_docM",s(d,!0)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),h(d,v)),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n){var t,c,a,l,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,r.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(c=(0,i.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,i.bh)("search_acc_record")},l=(0,i.I7)(a),e.next=5,l;case 5:(u=e.sent)&&!u.error&&((0,i.Rz)("comprobante_list",u),(0,i.Rz)("comprobante_by_doc",s(u))),n&&n();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function s(e,n){var t={},o=e&&(0,i._2)(e);return o.length>0?o.map((function(o){var r,c=e[o],a=null===(r=c.document)||void 0===r?void 0:r.trim();if(!t[a]){t[a]={};["date","description","document","entryName"].forEach((function(e){t[a][e]=c[e]})),t[a].amount=0,t[a].operations=[]}if(c.type){var l=(0,i.Zv)(c.amount,2),u=(0,i.Zv)(t[a].amount,2),s=0;s=n?1*u+l*("debit"===c.type?-1:1):1*u+l*("credit"===c.type?-1:1),t[a].amount=(0,i.Zv)(s,2),t[a].operations.push(function(e){var n,t,o={};o.account=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],o.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],o.comprobanteId=e.comprobanteId,o.date=e.date;var r=(0,i.Zv)(e.amount,2);"credit"===e.type?(o.debit=0,o.credit=r):"debit"===e.type&&(o.credit=0,o.debit=r);return o}(c))}})):t=null,t}var d=function(e,n,t){return(0,i.MV)("SumDocuments",[e,n,t],(function(){var t,o=0;return e&&(null===(t=(0,i._2)(e))||void 0===t||t.map((function(t,r){var c;o+=1*(null===(c=e[t])||void 0===c?void 0:c[n])}))),o}))},v=function(e,n,t){var o,r=0;return e&&(null===(o=(0,i._2)(e))||void 0===o||o.map((function(n,t){var o,c=(0,i.Zv)(e[n].amount,2);r+=c*("credit"===(null===(o=e[n])||void 0===o?void 0:o.type)?-1:1)}))),r},h=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t,r){var c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(c=(0,i.bh)("rec_by_acc")||{})[t]=v(n)||"no",(0,i.Rz)("rec_by_acc",c),r&&r();case 4:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t,c){var a,l,u,s,d;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,r.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},s=(0,i.I7)(u),e.next=5,s;case 5:(d=e.sent)&&!d.error&&h(d,t),c&&c();case 8:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}(),b=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t,c){var a,l,u,s,d,v,h;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,r.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.search_subacc_acc)).params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":n,":search":t},s=(0,i.I7)(u),e.next=5,s;case 5:(d=e.sent)&&!d.error&&(h=null===(v=(0,i._2)(d))||void 0===v?void 0:v[0],c&&c(d[h]));case 7:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}()},6021:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(4942);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=8603.62bb211d.chunk.js.map