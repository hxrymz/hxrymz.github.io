"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1228,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return o}});var i=t(2791),s=t(5408),l=t(2350),r=t(184),a="listDialog_mdh392",o=function(){var e=(0,l.bh)("listDialog")||{},n=((0,s.Z)(a),Object.keys(e));return(0,r.jsx)(r.Fragment,{children:n.map((function(n,t){var s=e[n];if(s&&s.visible){var l={};s.height&&(l.heigth=s.height),s.width,s.zIndex&&(l.zIndex=s.zIndex-1);var a={zIndex:s.zIndex},o=null,c=s.data;return s.content&&(o=i.cloneElement(s.content,{data:c})),(0,r.jsxs)("div",{className:"ltr-1kbnjow",style:l,children:[(0,r.jsx)("div",{className:"ltr-hoe9xz",children:(0,r.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:o})}),s.data.overlay?(0,r.jsx)("div",{className:"DialogHRMOverlay ".concat(s.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,l.bh)("listDialog")||{},t=(0,l.M5)();n[t]||(n[t]={}),n[t].visible=!0;var i={};e.props?(i=e.props).modalID=t:i.modalID=t;var s=document.getElementsByTagName("body")[0];null!==s&&void 0!==s&&s.style&&(s.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===n[t].width&&i.height===n[t].height||(n[t].height=i.height+10,n[t].width=i.width,(0,l.Rz)("listDialog",n),(0,l.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=i,(0,l.Rz)("listDialog",n),(0,l.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,l.Rz)("modalOpen",t),(0,l.wt)(a)}),125)},d=function(e){var n,t,i,s=(0,l.bh)("listDialog")||{},r=e.id;s[r]&&(s[r].observeResize&&s[r].observeInterval&&clearInterval(s[r].observeInterval),s[r].display=!1,null===(n=s[r])||void 0===n||null===(t=n.data)||void 0===t||null===(i=t.closeEvent)||void 0===i||i.call(t),(0,l.Rz)("listDialog",s),delete s[r],document.getElementsByTagName("body")[0].style.overflowY=null,(0,l.wt)(a),setTimeout((function(){delete s[r],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,l.Rz)("modalOpen",null)}),750))}},1228:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(4165),t(5861);var i=t(9439),s=t(2791),l=t(2350),r=(t(3971),t(9760)),a=t(6496),o=t(2647),c=(t(261),t(184)),d=function(e){var n=e.data,t=e.confirm,i=(e.handleClick,e.close,n.modalID),s=function(e){(0,r.CloseModal)({id:i})};return(0,c.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Eliminar Producto"}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:s,children:"Cancelar"}),(0,c.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),s()},children:"Eliminar"})]})]})},u=function(e){var n=e.data,t=(e.confirm,e.handleClick,e.close,n.modalID);return(0,c.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn blue",onClick:function(){(0,r.CloseModal)({id:t})},children:"OK"})]})]})},v=t(5986),h=(0,o.PU)(),f=(0,v.DY)(),m=function(e){var n,t=e.data,o=(e.elmId,e.handleRefreshAll),v=(0,s.useState)(!1),m=(0,i.Z)(v,2),p=m[0],x=m[1],g=(0,s.useState)(0),b=(0,i.Z)(g,2),j=(b[0],b[1]);(0,s.useEffect)((function(){p||(x(!0),j((0,l.M5)()))}));var y=function(){j((0,l.M5)())},w=function(){(0,a.p9)(y)},I=function(){(0,a.jB)(null===t||void 0===t?void 0:t.invoiceId,o)};(0,a.Hy)(null===(n=(0,l.bh)("sub_invoice_group"))||void 0===n?void 0:n[t.invoiceId],"subInvoice");return(0,c.jsx)("div",{className:"item_acc",children:(0,c.jsxs)("div",{className:"_dsplFlx item_box invoice_header",children:[(0,c.jsx)("div",{className:"name",children:(0,l.sJ)(null===t||void 0===t?void 0:t.date)}),(0,c.jsx)("div",{className:"code",style:{marginLeft:15},children:null===t||void 0===t?void 0:t.document}),(0,c.jsx)("div",{className:"description",style:{marginLeft:15},children:null===t||void 0===t?void 0:t.description}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" addSbAcc purple",onClick:function(){return function(e){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,c.jsx)(f,{confirm:w,item:t}),(0,r.OpenModal)(n)}()},children:"See Details"}),(0,c.jsxs)("div",{className:"name hideOnHover",children:["$",(1*(null===t||void 0===t?void 0:t.amount)).toFixed(2)]}),(0,l.I0)()?(0,c.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:function(){var e=(0,l.bh)("lastTimeCallModal")||0;if((0,l.I0)()){if(Date.now()>e){(0,l.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,c.jsx)(d,{confirm:I,item:t}),(0,r.OpenModal)(n)}}else{var i={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};i.content=(0,c.jsx)(u,{}),(0,r.OpenModal)(i)}},children:(0,c.jsx)(h,{name:"outline_delete",color:"#c62828"})}):null]})})}},6496:function(e,n,t){t.d(n,{Hy:function(){return c},_3:function(){return o},jB:function(){return d},p9:function(){return a}});var i=t(4165),s=t(1413),l=t(5861),r=t(2350),a=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n){var t,l,a,o,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,s.Z)({},null===(t=(0,r.bh)((0,r.hQ)()))||void 0===t?void 0:t.all_invoices)).params={businessId:null===(l=(0,r.bh)("profileUser"))||void 0===l?void 0:l.businessId},o=(0,r.I7)(a),e.next=5,o;case 5:(d=e.sent)&&((0,r.Rz)("invoices_list",c(d,"date")),(0,r.Rz)("invoices_ids",(0,r.ME)((0,r.jQ)(d),"invoiceId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n){var t,l,a,o,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,s.Z)({},null===(t=(0,r.bh)((0,r.hQ)()))||void 0===t?void 0:t.search_invoice)).params={businessId:null===(l=(0,r.bh)("profileUser"))||void 0===l?void 0:l.businessId,":search":(0,r.bh)("searchQry")},o=(0,r.I7)(a),e.next=5,o;case 5:(d=e.sent)&&((0,r.Rz)("invoices_list",c((0,r.jQ)(d),"date")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(e,n){return(0,r.MV)("sortInvoices",[e],(function(){return e&&e.sort((function(e,t){var i=e[n],s=t[n];return i<s?-1:i>s?1:0}))}))},d=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n,t){var l,a,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=(0,s.Z)({},null===(l=(0,r.bh)((0,r.hQ)()))||void 0===l?void 0:l.delete_prod)).params={businessId:null===(a=(0,r.bh)("profileUser"))||void 0===a?void 0:a.businessId,invoiceId:n},c=(0,r.I7)(o),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},3971:function(){},261:function(){},4942:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(9142);function s(e,n,t){return(n=(0,i.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(4942);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=1228.3d19e958.chunk.js.map