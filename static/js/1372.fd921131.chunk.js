"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1372,9760,4557],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return s},OpenModal:function(){return l},default:function(){return c}});var o=t(2791),r=t(5408),i=t(2350),a=t(184),c=function(){var e=(0,i.bh)("listDialog")||{},n=((0,r.Z)("listDialog_h392"),Object.keys(e));return(0,a.jsx)(a.Fragment,{children:n.map((function(n,t){var r=e[n];if(r&&r.visible){var i={};r.height&&(i.heigth=r.height),r.width,r.zIndex&&(i.zIndex=r.zIndex-1);var c={zIndex:r.zIndex},l=null,d=r.data;return r.content&&(l=o.cloneElement(r.content,{data:d})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:c,id:n,children:l})}),r.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:e})}}):null]},n)}}))})},l=function(e){var n=(0,i.bh)("listDialog")||{},t=(0,i.M5)();n[t]||(n[t]={}),n[t].visible=!0;var o={};e.props?(o=e.props).modalID=t:o.modalID=t;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===n[t].width&&o.height===n[t].height||(n[t].height=o.height+10,n[t].width=o.width,(0,i.Rz)("listDialog",n),(0,i.wt)("listDialog_h392")))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=o,(0,i.Rz)("listDialog",n),(0,i.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)("listDialog_h392")}),125)},s=function(e){var n,t,o,r=(0,i.bh)("listDialog")||{},a=e.id;r[a]&&(r[a].observeResize&&r[a].observeInterval&&clearInterval(r[a].observeInterval),r[a].display=!1,null===(n=r[a])||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.closeEvent)||void 0===o||o.call(t),(0,i.Rz)("listDialog",r),delete r[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)("listDialog_h392"),setTimeout((function(){delete r[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},1372:function(e,n,t){t.r(n);var o=t(9439),r=t(2791),i=t(2350),a=(t(1e3),t(9760)),c=t(3588),l=t(2692),s=t(7689),d=t(2647),u=t(4557),v=t(184),p=(0,l.t8)(),m=(0,d.PU)();n.default=function(e){var n=e.data,t=(e.elmId,e.handleRefreshAll),l=(0,r.useState)(!1),d=(0,o.Z)(l,2),h=d[0],f=d[1],b=(0,r.useState)(0),x=(0,o.Z)(b,2),g=(x[0],x[1]),y=(0,s.TH)(),w=(0,s.s0)();(0,r.useEffect)((function(){h||(f(!0),setTimeout((function(){var e,t,o=null===(e=y.search)||void 0===e||null===(t=e.split("?"))||void 0===t?void 0:t[1],r=(0,i.mB)(o);null!==r&&void 0!==r&&r.cId&&(null===r||void 0===r?void 0:r.cId)===n.comprobanteId&&(N(),window.scrollTo(0,0))}),350))}),[y.search]);var I=function(){g((0,i.M5)())},j=function(){(0,c.ly)(I)},_=function(){w({search:""})},N=function(){var e=(0,i.bh)("lastTimeCallModal")||0;if(Date.now()>e){var t,o;(0,i.Rz)("lastTimeCallModal",Date.now()+320);var r=null===(t=y.search)||void 0===t||null===(o=t.split("?"))||void 0===o?void 0:o[1],c=(0,i.mB)(r);null!==c&&void 0!==c&&c.cId&&(null===c||void 0===c?void 0:c.cId)===n.comprobanteId||w({search:"?cId=".concat(n.comprobanteId)}),(0,i.Rz)("show_comprobante",n);var l={zIndex:450,height:"80vh"};l.props={minHeight:"1vh",overlay:!0,closeEvent:_},l.content=(0,v.jsx)(p,{confirm:j,item:n}),(0,a.OpenModal)(l)}},z=function(){(0,c.WB)(null===n||void 0===n?void 0:n.operations,t)};return(0,v.jsx)("div",{className:"item_acc",children:(0,v.jsxs)("div",{className:"_dsplFlx operation_item_box",children:[(0,v.jsxs)("div",{className:"_dsplFlx ",onClick:N,children:[(0,v.jsx)("div",{className:"date",children:(0,i.sJ)(null===n||void 0===n?void 0:n.date)}),(0,v.jsx)("div",{className:"name",children:null===n||void 0===n?void 0:n.comprobanteId}),(0,v.jsx)("div",{className:"entryName",children:null===n||void 0===n?void 0:n.description}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"code",style:{marginLeft:9},children:null===n||void 0===n?void 0:n.document})]}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"icon",onClick:function(){var e=(0,i.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,i.Rz)("lastTimeCallModal",Date.now()+320);var t={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};t.content=(0,v.jsx)(u.default,{confirm:z,item:n}),(0,a.OpenModal)(t)}},children:(0,v.jsx)(m,{name:"outline_delete",color:"#c62828"})})]})})}},4557:function(e,n,t){t.r(n);t(2791),t(1e3);var o=t(9760),r=t(184);n.default=function(e){var n=e.data,t=e.confirm,i=(e.handleClick,e.close,n.modalID),a=function(e){(0,o.CloseModal)({id:i})};return(0,r.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"group_title addBtn",onClick:a,children:"Cancelar"}),(0,r.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),a()},children:"Eliminar"})]})]})}},3588:function(e,n,t){t.d(n,{Eb:function(){return u},N$:function(){return l},WB:function(){return s},bx:function(){return m},ly:function(){return c},tS:function(){return p}});var o=t(4165),r=t(1413),i=t(5861),a=t(2350),c=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n){var t,i,c,l,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,r.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_opera)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId},l=(0,a.I7)(c),e.next=5,l;case 5:(s=e.sent)&&!s.error&&((0,a.Rz)("comprobante_list",v(s,"date",1)),(0,a.Rz)("comprobante_by_doc",d(s)),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n){var t,i,c,l,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,r.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,a.bh)("search_acc_record")},l=(0,a.I7)(c),e.next=5,l;case 5:(s=e.sent)&&!s.error&&((0,a.Rz)("comprobante_list",s),(0,a.Rz)("comprobante_by_doc",d((0,a.jQ)(s))),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n,t){var c,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],n.map((function(e){var n,t,o=(0,r.Z)({},null===(n=(0,a.bh)((0,a.hQ)()))||void 0===n?void 0:n.delete_opera);o.params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId,operationId:e.operationId},c.push(o)})),l=c.map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,a.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(l);case 5:t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function d(e){var n={};return e.length>0?e.map((function(e){var t=new Date(e.date).getTime()+"_"+e.comprobanteId;if(!n[t]){n[t]={};["date","description","document","entryName","comprobanteId"].forEach((function(o){n[t][o]=e[o]})),n[t].amount=0,n[t].operations=[]}e.type&&(n[t].amount+="credit"===e.type?(0,a.Zv)(e.amount,2):0,n[t].operations.push(function(e){var n,t,o={};o.account=null===(n=(0,a.bh)("account_ids"))||void 0===n?void 0:n[e.account],o.sub_account=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],o.comprobanteId=e.comprobanteId,o.operationId=e.operationId,o.type=e.type;var r=(0,a.Zv)(e.amount,2);"credit"===e.type?(o.debit=0,o.credit=r):"debit"===e.type&&(o.credit=0,o.debit=r);return o}(e)))})):n=null,n}var u=function(e){return(0,a.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,t){var o=e[n],r=t[n];return o===r?t[r]-e[o]:r>o?1:-1}))}))},v=function(e,n,t){return e&&e.sort((function(e,o){var r=e[n],i=o[n];return r<i?t?-1:1:r>i?t?1:-1:0}))},p=function(e,n){return(0,a.MV)("rangeArr",[e,n],(function(){return e?(0,a._2)(e).slice(0,n):[]}))};function m(){return(0,a.bh)("comprobante_list").map((function(e){var n,t,o=null===(n=(0,a.bh)("account_ids"))||void 0===n?void 0:n[e.account],r=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],i={fecha:(0,a.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,tipo_cuenta:e.type,importe:e.amount,cuenta:o.code+"",nombre:o.name};return r&&r.subAccount&&(i.sub_cuenta=r.subAccount,i.nombre_sub_cuenta=r.subAccountName),i}))}},1e3:function(){},4942:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(9142);function r(e,n,t){return(n=(0,o.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(4942);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=1372.fd921131.chunk.js.map