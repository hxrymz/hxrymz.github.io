"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1228,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return l},default:function(){return c}});var i=t(2791),o=t(5408),a=t(2350),r=t(184),s="listDialog_mdh392",c=function(){var e=(0,a.bh)("listDialog")||{},n=((0,o.Z)(s),Object.keys(e));return(0,r.jsx)(r.Fragment,{children:n.map((function(n,t){var o=e[n];if(o&&o.visible){var a={};o.height&&(a.heigth=o.height),o.width,o.zIndex&&(a.zIndex=o.zIndex-1);var s={zIndex:o.zIndex},c=null,l=o.data;return o.content&&(c=i.cloneElement(o.content,{data:l})),(0,r.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,r.jsx)("div",{className:"ltr-hoe9xz",children:(0,r.jsx)("div",{className:"ltr-1wao6ny",style:s,id:n,children:c})}),o.data.overlay?(0,r.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},l=function(e){var n=(0,a.bh)("listDialog")||{},t=(0,a.M5)();n[t]||(n[t]={}),n[t].visible=!0;var i={};e.props?(i=e.props).modalID=t:i.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===n[t].width&&i.height===n[t].height||(n[t].height=i.height+10,n[t].width=i.width,(0,a.Rz)("listDialog",n),(0,a.wt)(s)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=i,(0,a.Rz)("listDialog",n),(0,a.wt)(s),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",t),(0,a.wt)(s)}),125)},d=function(e){var n,t,i,o=(0,a.bh)("listDialog")||{},r=e.id;o[r]&&(o[r].observeResize&&o[r].observeInterval&&clearInterval(o[r].observeInterval),o[r].display=!1,null===(n=o[r])||void 0===n||null===(t=n.data)||void 0===t||null===(i=t.closeEvent)||void 0===i||i.call(t),(0,a.Rz)("listDialog",o),delete o[r],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(s),setTimeout((function(){delete o[r],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},1228:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});t(4165),t(5861);var i=t(9439),o=t(2791),a=t(2350),r=(t(3971),t(9760)),s=t(6496),c=t(2647),l=(t(261),t(184)),d=function(e){var n=e.data,t=e.confirm,i=(e.handleClick,e.close,n.modalID),o=function(e){(0,r.CloseModal)({id:i})};return(0,l.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,l.jsxs)("div",{className:"_dsplFlx ",children:[(0,l.jsx)("p",{className:"form_title",children:"Eliminar Invoice"}),(0,l.jsx)("div",{className:"flexSpace"})]}),(0,l.jsx)("div",{className:"_dsplFlx ",children:(0,l.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,l.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsx)("p",{className:"group_title addBtn",onClick:o,children:"Cancelar"}),(0,l.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),o()},children:"Eliminar"})]})]})},u=function(e){var n=e.data,t=(e.confirm,e.handleClick,e.close,n.modalID);return(0,l.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,l.jsxs)("div",{className:"_dsplFlx ",children:[(0,l.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,l.jsx)("div",{className:"flexSpace"})]}),(0,l.jsx)("div",{className:"_dsplFlx ",children:(0,l.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,l.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsx)("p",{className:"group_title addBtn blue",onClick:function(){(0,r.CloseModal)({id:t})},children:"OK"})]})]})},v=t(5986),p=(0,c.PU)(),m=(0,v.DY)(),h=function(e){var n,t=e.data,c=(e.elmId,e.handleRefreshAll),v=(0,o.useState)(!1),h=(0,i.Z)(v,2),f=h[0],x=h[1],b=(0,o.useState)(0),g=(0,i.Z)(b,2),y=(g[0],g[1]);(0,o.useEffect)((function(){f||(x(!0),y((0,a.M5)()))}));var j=function(){y((0,a.M5)())},I=function(){(0,s.p9)(j)},w=function(){(0,s.jB)(null===t||void 0===t?void 0:t.invoiceId,c)};(0,s.Hy)(null===(n=(0,a.bh)("sub_invoice_group"))||void 0===n?void 0:n[t.invoiceId],"subInvoice");return(0,l.jsx)("div",{className:"item_acc",children:(0,l.jsxs)("div",{className:"_dsplFlx item_box invoice_header",children:[(0,l.jsx)("div",{className:"name",children:(0,a.sJ)(null===t||void 0===t?void 0:t.date)}),(0,l.jsx)("div",{className:"code",style:{marginLeft:15},children:null===t||void 0===t?void 0:t.document}),(0,l.jsx)("div",{className:"description",style:{marginLeft:15},children:null===t||void 0===t?void 0:t.description}),(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsx)("div",{className:" addSbAcc purple",onClick:function(){return function(e){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,l.jsx)(m,{confirm:I,item:t}),(0,r.OpenModal)(n)}()},children:"See Details"}),(0,l.jsxs)("div",{className:"name hideOnHover",children:["$",(1*(null===t||void 0===t?void 0:t.amount)).toFixed(2)]}),(0,a.I0)()?(0,l.jsx)("div",{className:"icon",style:{marginLeft:19,zIndex:10},onClick:function(){var e=(0,a.bh)("lastTimeCallModal")||0;if((0,a.I0)()){if(Date.now()>e){(0,a.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,l.jsx)(d,{confirm:w,item:t}),(0,r.OpenModal)(n)}}else{var i={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};i.content=(0,l.jsx)(u,{}),(0,r.OpenModal)(i)}},children:(0,l.jsx)(p,{name:"outline_delete",color:"#c62828"})}):null]})})}},6496:function(e,n,t){t.d(n,{Hy:function(){return l},S$:function(){return u},_3:function(){return c},jB:function(){return d},p9:function(){return s}});var i=t(4165),o=t(1413),a=t(5861),r=t(2350),s=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a,s,c,d,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(0,r.bh)("getall_invoice_last")||0,!(Date.now()>t)){e.next=10;break}return(0,r.Rz)("getall_invoice_last",Date.now()+190),(c=(0,o.Z)({},null===(a=(0,r.bh)((0,r.hQ)()))||void 0===a?void 0:a.all_invoices)).params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId},d=(0,r.I7)(c),e.next=8,d;case 8:(u=e.sent)&&((0,r.Rz)("invoices_list",l(u,"date")),(0,r.Rz)("invoices_ids",(0,r.ME)((0,r.jQ)(u),"invoiceId")),n&&n());case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a,s,c,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(t=(0,r.bh)((0,r.hQ)()))||void 0===t?void 0:t.search_invoice)).params={businessId:null===(a=(0,r.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,r.bh)("searchQry")},c=(0,r.I7)(s),e.next=5,c;case 5:(d=e.sent)&&((0,r.Rz)("invoices_list",l((0,r.jQ)(d),"date")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(e,n){return(0,r.MV)("sortInvoices",[e],(function(){return e&&e.sort((function(e,t){var i=e[n],o=t[n];return i<o?-1:i>o?1:0}))}))},d=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n,t){var a,s,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(a=(0,r.bh)((0,r.hQ)()))||void 0===a?void 0:a.delete_invoice)).params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,invoiceId:n},l=(0,r.I7)(c),e.next=5,l;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a,s,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(t=(0,r.bh)((0,r.hQ)()))||void 0===t?void 0:t.all_invoices)).params={businessId:null===(a=(0,r.bh)("profileUser"))||void 0===a?void 0:a.businessId},c=(0,r.I7)(s),e.next=5,c;case 5:(l=e.sent)&&((0,r.Rz)("invoiceCmp",l),v("SSJsgB2uUqcuoagD",(function(){v("v5MkYLwPAbgci3wW",(function(){var e=p();(0,r.Rz)("invoiceCmpDocs",e),n&&n()}))})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n,t){var a,s,c,l,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(a=(0,r.bh)((0,r.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,year:(0,r.bh)("date_current_year"),":account":n},l=(0,r.I7)(c),e.next=5,l;case 5:(d=e.sent)&&!d.error?((0,r.Rz)("invoiceCmp"+n,d),t&&t()):t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.bh)("invoiceCmp"),n=(0,r.bh)("invoiceCmpSSJsgB2uUqcuoagD"),t=(0,r.bh)("invoiceCmpv5MkYLwPAbgci3wW"),i={};return(0,r._2)(e).map((function(n){var t=e[n].document.trim();i[t]||(i[t]={document:t,amount:0,saldo:0,hasAnticipo:0,cc_c:0,cc_d:0,comprobanteIds:{}}),i[t].amount+=e[n].amount,i[t].saldo+=1*e[n].amount,i[t].date=e[n].date})),(0,r._2)(n).map((function(e){var t,o,a,r=n[e].document.trim();i[r]||(i[r]={document:r,amount:0,saldo:0,hasAnticipo:0,cc_c:0,cc_d:0,comprobanteIds:{}}),i[r].cc_d+="debit"===(null===(t=n[e])||void 0===t?void 0:t.type)?1*n[e].amount:0,i[r].cc_c+="credit"===(null===(o=n[e])||void 0===o?void 0:o.type)?1*n[e].amount:0,i[r].saldo+="credit"===(null===(a=n[e])||void 0===a?void 0:a.type)?-1*n[e].amount:0,i[r].comprobanteIds[n[e].comprobanteId]={date:n[e].date,description:n[e].description}})),(0,r._2)(t).map((function(e){var n,o,a=t[e].document.trim();a.indexOf("A-")>=0&&(a=a.split("A-")[1]),i[a]||(i[a]={document:a,amount:0,hasAnticipo:0,cc_c:0,cc_d:0,saldo:0,comprobanteIds:{}}),i[a].hasAnticipo+="credit"===(null===(n=t[e])||void 0===n?void 0:n.type)?1*t[e].amount:-1*t[e].amount,i[a].saldo+=-1*("credit"===(null===(o=t[e])||void 0===o?void 0:o.type)?1*t[e].amount:-1*t[e].amount),i[a].comprobanteIds[t[e].comprobanteId]={date:t[e].date,description:t[e].description}})),i}},3971:function(){},261:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=1228.f73a44be.chunk.js.map