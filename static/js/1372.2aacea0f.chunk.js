"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1372,9760,4557],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return s},OpenModal:function(){return c},default:function(){return l}});var r=t(2791),o=t(5408),a=t(2350),i=t(184),l=function(){var e=(0,a.bh)("listDialog")||{},n=((0,o.Z)("listDialog_h392"),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:n.map((function(n,t){var o=e[n];if(o&&o.visible){var a={};o.height&&(a.heigth=o.height),o.width,o.zIndex&&(a.zIndex=o.zIndex-1);var l={zIndex:o.zIndex},c=null,d=o.data;return o.content&&(c=r.cloneElement(o.content,{data:d})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:l,id:n,children:c})}),o.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,a.bh)("listDialog")||{},t=(0,a.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,a.Rz)("listDialog",n),(0,a.wt)("listDialog_h392")))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,a.Rz)("listDialog",n),(0,a.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",t),(0,a.wt)("listDialog_h392")}),125)},s=function(e){var n,t,r,o=(0,a.bh)("listDialog")||{},i=e.id;o[i]&&(o[i].observeResize&&o[i].observeInterval&&clearInterval(o[i].observeInterval),o[i].display=!1,null===(n=o[i])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,a.Rz)("listDialog",o),delete o[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)("listDialog_h392"),setTimeout((function(){delete o[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},1372:function(e,n,t){t.r(n);var r=t(4165),o=t(1413),a=t(5861),i=t(9439),l=t(2791),c=t(2350),s=(t(1e3),t(9760)),d=t(3588),u=t(2692),v=t(7689),p=t(2647),h=t(4557),m=t(184),b=(0,u.t8)(),f=(0,p.PU)();n.default=function(e){var n,t,u=e.data,p=e.handleRefreshAll,_=e.hasError,x=(0,l.useState)(!1),w=(0,i.Z)(x,2),g=w[0],I=w[1],y=(0,l.useState)(0),j=(0,i.Z)(y,2),Z=(j[0],j[1]),z=(0,v.TH)(),R=(0,v.s0)();(0,l.useEffect)((function(){g||(I(!0),setTimeout((function(){var e,n,t=null===(e=z.search)||void 0===e||null===(n=e.split("?"))||void 0===n?void 0:n[1],r=(0,c.mB)(t);null!==r&&void 0!==r&&r.cId&&(null===r||void 0===r?void 0:r.cId)===u.comprobanteId&&(C(),window.scrollTo(0,0))}),350))}),[z.search]);var N=function(){Z((0,c.M5)())},D=function(){(0,d.ly)(N)},k=function(){p(),R({search:""})},O=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t,a,i,l,s,d,v,p,h,m,b,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=(0,c.bh)("comp_under_review"))||void 0===n||!n.balanceId){e.next=14;break}return l=(0,o.Z)({},(0,c.bh)("comp_under_review")),s=(0,o.Z)({},l.inReview),(d=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.upd_balances)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,balanceId:null===(i=(0,c.bh)("comp_under_review"))||void 0===i?void 0:i.balanceId},s[null===u||void 0===u?void 0:u.comprobanteId]?delete s[null===u||void 0===u?void 0:u.comprobanteId]:s[null===u||void 0===u?void 0:u.comprobanteId]=!0,d.data2update={inReview:s},v=(0,c.I7)(d),e.next=10,v;case 10:e.sent&&(l.inReview=s,(0,c.Rz)("comp_under_review",l),Z((0,c.M5)())),e.next=27;break;case 14:return(m=(0,o.Z)({},(0,c.bh)("comp_under_review"))).balanceId=(0,c.M5)(),m.type="comp_under_review",m.inReview={},m.inReview[null===u||void 0===u?void 0:u.comprobanteId]=!0,(b=(0,o.Z)({},null===(p=(0,c.bh)((0,c.hQ)()))||void 0===p?void 0:p.add_balances)).params={businessId:null===(h=(0,c.bh)("profileUser"))||void 0===h?void 0:h.businessId},b.form=m,f=(0,c.I7)(b),e.next=25,f;case 25:e.sent&&((0,c.Rz)("comp_under_review",m),Z((0,c.M5)()));case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,c.bh)("lastTimeCallModal")||0;if(Date.now()>e){var n,t;(0,c.Rz)("lastTimeCallModal",Date.now()+320);var r=null===(n=z.search)||void 0===n||null===(t=n.split("?"))||void 0===t?void 0:t[1],o=(0,c.mB)(r);null!==o&&void 0!==o&&o.cId&&(null===o||void 0===o?void 0:o.cId)===u.comprobanteId||R({search:"?cId=".concat(u.comprobanteId)}),(0,c.Rz)("show_comprobante",u);var a={zIndex:450,height:"80vh"};a.props={minHeight:"1vh",overlay:!0,closeEvent:k},a.content=(0,m.jsx)(b,{confirm:D,item:u}),(0,s.OpenModal)(a)}},E=function(){(0,d.WB)(null===u||void 0===u?void 0:u.operations,p)},M=null===(n=(0,c.bh)("comp_under_review"))||void 0===n||null===(t=n.inReview)||void 0===t?void 0:t[null===u||void 0===u?void 0:u.comprobanteId];return(0,c.bh)("has_filter_comp_error")&&_&&0===u.balance?null:(0,m.jsx)("div",{className:"item_acc",children:(0,m.jsxs)("div",{className:"_dsplFlx operation_item_box",children:[(0,m.jsx)("div",{className:"icon_revision",onClick:O,children:(0,m.jsx)(f,{name:0!==u.balance||M?"alert":"check_circle",color:0!==u.balance?"var(--hrm_palette-selected-nav-text)":M?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-success-fg)"})}),(0,m.jsxs)("div",{className:"_dsplFlx tr_bar_90",onClick:C,children:[(0,m.jsx)("div",{className:" tr_bar_15",children:(0,c.sJ)(null===u||void 0===u?void 0:u.date)}),(0,m.jsx)("div",{className:" tr_bar_25",style:0!==u.balance?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:null===u||void 0===u?void 0:u.comprobanteId}),(0,m.jsx)("div",{className:" tr_bar_55",style:{marginLeft:9},children:0!==u.balance?(0,m.jsx)("div",{className:"msg_alert_title",children:"El comprobante contiene errores"}):(0,m.jsx)("span",{children:null===u||void 0===u?void 0:u.description})})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"icon tr_bar_5",onClick:function(){var e=(0,c.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,c.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,m.jsx)(h.default,{confirm:E,item:u}),(0,s.OpenModal)(n)}},children:(0,m.jsx)(f,{name:"outline_delete",color:"#c62828"})})]})})}},4557:function(e,n,t){t.r(n);t(2791),t(1e3);var r=t(9760),o=t(184);n.default=function(e){var n=e.data,t=e.confirm,a=(e.handleClick,e.close,n.modalID),i=function(e){(0,r.CloseModal)({id:a})};return(0,o.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"_dsplFlx ",children:(0,o.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"group_title addBtn",onClick:i,children:"Cancelar"}),(0,o.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),i()},children:"Eliminar"})]})]})}},3588:function(e,n,t){t.d(n,{Eb:function(){return v},N$:function(){return c},Ng:function(){return s},WB:function(){return d},bx:function(){return m},ly:function(){return l},tS:function(){return h}});var r=t(4165),o=t(1413),a=t(5861),i=t(2350),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,c,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId},c=(0,i.I7)(l),e.next=5,c;case 5:(s=e.sent)&&!s.error&&((0,i.Rz)("comprobante_list",p(s,"date",1)),(0,i.Rz)("comprobante_by_doc",u(s)),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,c,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,i.bh)("search_acc_record")},c=(0,i.I7)(l),e.next=5,c;case 5:(s=e.sent)&&!s.error&&((0,i.Rz)("comprobante_list",s),(0,i.Rz)("comprobante_by_doc",u((0,i.jQ)(s))),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,c,s,d,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,i.bh)("search_acc_record"),":date1":null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.initDate,":date2":null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate},s.queryString="date > :date1 AND date < :date2",d=(0,i.I7)(s),e.next=6,d;case 6:(v=e.sent)&&!v.error&&((0,i.Rz)("comprobante_list",v),(0,i.Rz)("comprobante_by_doc",u((0,i.jQ)(v))),n&&n());case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var l,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=[],n.map((function(e){var n,t,r=(0,o.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.delete_opera);r.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,operationId:e.operationId},l.push(r)})),c=l.map(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(c);case 5:t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function u(e){var n={};return e.length>0?e.map((function(e){var t=new Date(e.date).getTime()+"_"+e.comprobanteId;if(!n[t]){n[t]={};["date","description","entryName","comprobanteId"].forEach((function(r){n[t][r]=e[r]})),n[t].amount=0,n[t].balance=0,n[t].operations=[]}e.type&&(n[t].balance=1*(0,i.Zv)(n[t].balance,2)+("credit"===e.type?-1*(0,i.Zv)(e.amount,2):1*(0,i.Zv)(e.amount,2)),n[t].operations.push(function(e){var n,t,r={};r.account=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.operationId=e.operationId,r.document=e.document,r.type=e.type;var o=(0,i.Zv)(e.amount,2);"credit"===e.type?(r.debit=0,r.credit=o):"debit"===e.type&&(r.credit=0,r.debit=o);return r}(e)))})):n=null,(0,i.Rz)("has_filter_review",null),(0,i.Rz)("has_filter_comp_error",null),(0,i._2)(n).map((function(e){var t,r;null!==(t=(0,i.bh)("comp_under_review"))&&void 0!==t&&null!==(r=t.inReview)&&void 0!==r&&r[e]&&(0,i.Rz)("has_filter_review",!0),0!==n[e].balance&&(0,i.Rz)("has_filter_comp_error",!0)})),n}var v=function(e){return(0,i.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,t){var r=e[n],o=t[n];return r===o?t[o]-e[r]:o>r?1:-1}))}))},p=function(e,n,t){return e&&e.sort((function(e,r){var o=e[n],a=r[n];return o<a?t?-1:1:o>a?t?1:-1:0}))},h=function(e,n){return(0,i.MV)("rangeArr",[e,n],(function(){return e?(0,i._2)(e).slice(0,n):[]}))};function m(){return(0,i.bh)("comprobante_list").map((function(e){var n,t,r=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],o=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],a={fecha:(0,i.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,tipo_cuenta:e.type,importe:e.amount,cuenta:r.code+"",nombre:r.name};return o&&o.subAccount&&(a.sub_cuenta=o.subAccount,a.nombre_sub_cuenta=o.subAccountName),a}))}},1e3:function(){},4942:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9142);function o(e,n,t){return(n=(0,r.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=1372.2aacea0f.chunk.js.map