"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1372,9760,4557],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return s},OpenModal:function(){return d},default:function(){return c}});var o=t(2791),r=t(5408),a=t(2350),i=t(184),l="listDialog_mdh392",c=function(){var e=(0,a.bh)("listDialog")||{},n=((0,r.Z)(l),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:n.map((function(n,t){var r=e[n];if(r&&r.visible){var a={};r.height&&(a.heigth=r.height),r.width,r.zIndex&&(a.zIndex=r.zIndex-1);var l={zIndex:r.zIndex},c=null,d=r.data;return r.content&&(c=o.cloneElement(r.content,{data:d})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:l,id:n,children:c})}),r.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:e})}}):null]},n)}}))})},d=function(e){var n=(0,a.bh)("listDialog")||{},t=(0,a.M5)();n[t]||(n[t]={}),n[t].visible=!0;var o={};e.props?(o=e.props).modalID=t:o.modalID=t;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===n[t].width&&o.height===n[t].height||(n[t].height=o.height+10,n[t].width=o.width,(0,a.Rz)("listDialog",n),(0,a.wt)(l)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=o,(0,a.Rz)("listDialog",n),(0,a.wt)(l),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",t),(0,a.wt)(l)}),125)},s=function(e){var n,t,o,r=(0,a.bh)("listDialog")||{},i=e.id;r[i]&&(r[i].observeResize&&r[i].observeInterval&&clearInterval(r[i].observeInterval),r[i].display=!1,null===(n=r[i])||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.closeEvent)||void 0===o||o.call(t),(0,a.Rz)("listDialog",r),delete r[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(l),setTimeout((function(){delete r[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},1372:function(e,n,t){t.r(n);var o=t(4165),r=t(1413),a=t(5861),i=t(9439),l=t(2791),c=t(2350),d=(t(1e3),t(9760)),s=t(3588),u=t(2692),v=t(7689),p=t(2647),m=t(4557),h=t(1087),b=t(184),f=(0,u.t8)(),_=(0,p.PU)();n.default=function(e){var n,t,u,p,I,x=e.data,w=e.handleRefreshAll,g=e.updRvw,y=(0,l.useState)(!1),j=(0,i.Z)(y,2),z=j[0],R=j[1],Z=(0,l.useState)(0),N=(0,i.Z)(Z,2),k=(N[0],N[1]),D=(0,v.TH)(),O=(0,v.s0)();(0,l.useEffect)((function(){z||(R(!0),setTimeout((function(){var e,n,t=null===(e=D.search)||void 0===e||null===(n=e.split("?"))||void 0===n?void 0:n[1],o=(0,c.mB)(t);null!==o&&void 0!==o&&o.cId&&(null===o||void 0===o?void 0:o.cId)===x.comprobanteId&&(B(),window.scrollTo(0,0))}),350))}),[D.search]);var E=function(){k((0,c.M5)())},C=function(){(0,s.ly)(E)},M=function(){w(),O({search:""})},T=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var n,t,a,i,l,d,u,v,p,m,h,b,f;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=(0,c.bh)("comp_under_review"))||void 0===n||!n.balanceId){e.next=14;break}return l=(0,r.Z)({},(0,c.bh)("comp_under_review")),d=(0,r.Z)({},l.inReview),(u=(0,r.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.upd_balances)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,balanceId:null===(i=(0,c.bh)("comp_under_review"))||void 0===i?void 0:i.balanceId},d[null===x||void 0===x?void 0:x.comprobanteId]?delete d[null===x||void 0===x?void 0:x.comprobanteId]:d[null===x||void 0===x?void 0:x.comprobanteId]=!0,u.data2update={inReview:d},v=(0,c.I7)(u),e.next=10,v;case 10:e.sent&&(l.inReview=d,(0,c.Rz)("comp_under_review",l),k((0,c.M5)())),e.next=27;break;case 14:return(h=(0,r.Z)({},(0,c.bh)("comp_under_review"))).balanceId=(0,c.M5)(),h.type="comp_under_review",h.inReview={},h.inReview[null===x||void 0===x?void 0:x.comprobanteId]=!0,(b=(0,r.Z)({},null===(p=(0,c.bh)((0,c.hQ)()))||void 0===p?void 0:p.add_balances)).params={businessId:null===(m=(0,c.bh)("profileUser"))||void 0===m?void 0:m.businessId},b.form=h,f=(0,c.I7)(b),e.next=25,f;case 25:e.sent&&((0,c.Rz)("comp_under_review",h),k((0,c.M5)()));case 27:(0,s.Gg)((0,c.bh)("comprobante_by_doc")),g((0,c.M5)());case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=(0,c.bh)("lastTimeCallModal")||0;if(Date.now()>e){var n,t;(0,c.Rz)("lastTimeCallModal",Date.now()+320);var o=null===(n=D.search)||void 0===n||null===(t=n.split("?"))||void 0===t?void 0:t[1],r=(0,c.mB)(o);null!==r&&void 0!==r&&r.cId&&(null===r||void 0===r?void 0:r.cId)===x.comprobanteId||O({search:"?cId=".concat(x.comprobanteId)}),(0,c.Rz)("show_comprobante",x);var a={zIndex:450,height:"80vh"};a.props={minHeight:"1vh",overlay:!0,closeEvent:M},a.content=(0,b.jsx)(f,{confirm:C,item:x}),(0,d.OpenModal)(a)}},P=function(){(0,s.WB)(null===x||void 0===x?void 0:x.operations,w)},U=null===(n=(0,c.bh)("comp_under_review"))||void 0===n||null===(t=n.inReview)||void 0===t?void 0:t[null===x||void 0===x?void 0:x.comprobanteId],S=(null===(u=(0,c.bh)("comp_under_review"))||void 0===u||null===(p=u.hasError)||void 0===p?void 0:p[null===x||void 0===x?void 0:x.comprobanteId])||(null===(I=(0,c.bh)("comprobante_w_erros"))||void 0===I?void 0:I[null===x||void 0===x?void 0:x.comprobanteId]);return(0,b.jsx)("div",{className:"item_acc",children:(0,b.jsxs)("div",{className:"_dsplFlx operation_item_box",children:[(0,b.jsx)("div",{className:"icon_revision",onClick:T,children:(0,b.jsx)(_,{name:S||U?"alert":"check_circle",color:S?"var(--hrm_palette-selected-nav-text)":U?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-success-fg)"})}),(0,b.jsxs)("div",{className:"_dsplFlx tr_bar_90",onClick:B,children:[(0,b.jsx)("div",{className:" tr_bar_15",children:(0,c.sJ)(null===x||void 0===x?void 0:x.date)}),(0,b.jsx)("div",{className:" tr_bar_25",style:S?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:(0,b.jsx)(h.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(x.comprobanteId)},children:null===x||void 0===x?void 0:x.comprobanteId})}),(0,b.jsx)("div",{className:" tr_bar_55",style:{marginLeft:9},children:S?(0,b.jsx)("div",{className:"msg_alert_title",children:"El comprobante contiene errores"}):(0,b.jsx)("span",{children:null===x||void 0===x?void 0:x.description})})]}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsx)("div",{className:"icon tr_bar_5",onClick:function(){var e=(0,c.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,c.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,b.jsx)(m.default,{confirm:P,item:x}),(0,d.OpenModal)(n)}},children:(0,b.jsx)(_,{name:"outline_delete",color:"#c62828"})})]})})}},4557:function(e,n,t){t.r(n);t(2791),t(1e3);var o=t(9760),r=t(184);n.default=function(e){var n=e.data,t=e.confirm,a=(e.handleClick,e.close,n.modalID),i=function(e){(0,o.CloseModal)({id:a})};return(0,r.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"group_title addBtn",onClick:i,children:"Cancelar"}),(0,r.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),i()},children:"Eliminar"})]})]})}},3588:function(e,n,t){t.d(n,{Eb:function(){return m},Gg:function(){return p},N$:function(){return c},Ng:function(){return s},WB:function(){return u},ly:function(){return l},tS:function(){return h}});var o=t(4165),r=t(1413),a=t(5861),i=t(2350),l=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t,a,l,c,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,r.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year")},c=(0,i.I7)(l),e.next=5,c;case 5:(s=e.sent)&&!s.error&&(d(s),(0,i.bh)("showAllCmpbnt")&&((0,i.Rz)("comprobante_list",s),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(s)))),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t,a,l,c,d,s,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((0,i.bh)("search_acc_record").length>3)){e.next=11;break}return(d=(0,r.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year"),":date1":null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.initDate,":date2":null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate},(0,i.bh)("search_acc_record").split(" ").map((function(e,n){e&&(d.params[":search"+n]=e.trim())})),s=(0,i.I7)(d),e.next=7,s;case 7:(u=e.sent)&&!u.error&&((0,i.Rz)("comprobante_list",u),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(u))),n&&n()),e.next=14;break;case 11:(0,i.Rz)("comprobante_list",null),(0,i.Rz)("comprobante_by_doc",null),n&&n();case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t,r,a,l,c,d,s,u,v,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l in 0,t={},r={},a={},n)d=n[l],(s=null===(c=(0,i.bh)("account_ids"))||void 0===c?void 0:c[d.account])&&((0,i.UE)(a[null===s||void 0===s?void 0:s.accountId])||(a[null===s||void 0===s?void 0:s.accountId]={saldo:0,name:(null===s||void 0===s?void 0:s.code)+" - "+(null===s||void 0===s?void 0:s.name),list:[]}),(0,i.UE)(t[d.comprobanteId])||(t[d.comprobanteId]=0,r[d.comprobanteId]=[]),u=1*(0,i.Zv)(("debit"===d.type?1:-1)*d.amount,2),a[null===s||void 0===s?void 0:s.accountId].saldo=1*(0,i.Zv)(a[s.accountId].saldo,2)+1*u,a[null===s||void 0===s?void 0:s.accountId].list.push([d.comprobanteId,u]),t[d.comprobanteId]=1*(0,i.Zv)(t[d.comprobanteId],2)+u,r[d.comprobanteId].push({ammount:u,operationId:d.comprobanteId}));for(p in v=null,t)t[p]&&(v||(v={}),v[p]=1);v&&((0,i.Rz)("comprobante_w_erros",v),(0,i.Rz)("has_filter_comp_error",!0));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t,a,l,c,s,u,p,m;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,r.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year"),":date1":(null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)-10,":date2":null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate},u=(0,i.I7)(s),e.next=5,u;case 5:(p=e.sent)&&!p.error&&((0,i.Rz)("comprobante_list",p),m=[],(0,i.bh)("comprobante_all_list")&&(0,i.bh)("comprobante_all_list").map((function(e){p[e.operationId]||console.log(e)})),p&&(0,i._2)(p).map((function(e){var n,t;p[e].account&&p[e].date>(null===(n=(0,i.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)-10&&p[e].date<=(null===(t=(0,i.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate)&&m.push(p[e])})),(0,i.Rz)("comprobante_by_doc",v(m)),d(m),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n,t){var l,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=[],n.map((function(e){var n,t,o=(0,r.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.delete_opera);o.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,i.bh)("date_current_year"),operationId:e.operationId},l.push(o)})),c=l.map(function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(c);case 5:t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function v(e){var n={};return e.length>0?e.map((function(e){var t=e.date;if(t&&e.account){var o=t+"_"+e.comprobanteId;if(!n[o]){n[o]={};["date","description","entryName","comprobanteId","employeeId"].forEach((function(t){n[o][t]=e[t]})),n[o].amount=0,n[o].balance=0,n[o].operations=[]}e.type&&n[o].operations.push(function(e){var n,t,o={};o.account=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],o.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],o.comprobanteId=e.comprobanteId,o.operationId=e.operationId,o.document=e.document,o.type=e.type;var r=(0,i.Zv)(e.amount,2);"credit"===e.type?(o.debit=0,o.credit=r):"debit"===e.type&&(o.credit=0,o.debit=r);return o}(e))}})):n=null,n}function p(e){(0,i.Rz)("has_filter_review",null),(0,i.Rz)("has_filter_comp_error",null),(0,i._2)(e).map((function(n){var t,o,r,a;null!==(t=(0,i.bh)("comp_under_review"))&&void 0!==t&&null!==(o=t.inReview)&&void 0!==o&&o[e[n].comprobanteId]&&(0,i.Rz)("has_filter_review",!0),null!==(r=(0,i.bh)("comp_under_review"))&&void 0!==r&&null!==(a=r.hasError)&&void 0!==a&&a[e[n].comprobanteId]&&(0,i.Rz)("has_filter_comp_error",!0)}))}var m=function(e){return(0,i.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,t){var o=e[n],r=t[n];return o===r?t[r]-e[o]:r>o?1:-1}))}))},h=function(e,n){return(0,i.MV)("rangeArr",[e,n],(function(){return e?(0,i._2)(e).slice(0,n):[]}))}},1e3:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(4942);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=1372.1a3e745c.chunk.js.map