"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2018,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return c},OpenModal:function(){return d},default:function(){return l}});var a=n(2791),r=n(5408),i=n(2350),s=n(184),o="listDialog_mdh392",l=function(){var e=(0,i.bh)("listDialog")||{},t=((0,r.Z)(o),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:t.map((function(t,n){var r=e[t];if(r&&r.visible){var i={};r.height&&(i.heigth=r.height),r.width,r.zIndex&&(i.zIndex=r.zIndex-1);var o={zIndex:r.zIndex},l=null,d=r.data;return r.content&&(l=a.cloneElement(r.content,{data:d})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:o,id:t,children:l})}),r.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},d=function(e){var t=(0,i.bh)("listDialog")||{},n=(0,i.M5)();t[n]||(t[n]={}),t[n].visible=!0;var a={};e.props?(a=e.props).modalID=n:a.modalID=n;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===t[n].width&&a.height===t[n].height||(t[n].height=a.height+10,t[n].width=a.width,(0,i.Rz)("listDialog",t),(0,i.wt)(o)))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=a,(0,i.Rz)("listDialog",t),(0,i.wt)(o),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",n),(0,i.wt)(o)}),125)},c=function(e){var t,n,a,r=(0,i.bh)("listDialog")||{},s=e.id;r[s]&&(r[s].observeResize&&r[s].observeInterval&&clearInterval(r[s].observeInterval),r[s].display=!1,null===(t=r[s])||void 0===t||null===(n=t.data)||void 0===n||null===(a=n.closeEvent)||void 0===a||a.call(n),(0,i.Rz)("listDialog",r),delete r[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(o),setTimeout((function(){delete r[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},2018:function(e,t,n){n.r(t);var a=n(1413),r=n(9439),i=n(2791),s=(n(6794),n(2350)),o=n(2502),l=n(7689),d=n(9760),c=n(2647),u=n(1087),v=n(184),m=(0,c.h0)(),h=(0,c.PU)();t.default=function(e){var t,n,c,b,f,y=e.data,_=e.item,x=(0,i.useState)(0),g=(0,r.Z)(x,2),j=(g[0],g[1]);(0,i.useEffect)((function(){}),[_]);var I=function(){j((0,s.M5)())},w=((0,l.s0)(),function(e){if(null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){var t=(0,a.Z)({},e);t.initDate=t.initDate-100,t.lastDate=t.lastDate+8638e4,(0,s.Rz)("date_range_comps",t)}(0,o.lG)(null===_||void 0===_?void 0:_.employeeId,I)}),N=(null===(t=(0,s.bh)("date_range_comps"))||void 0===t?void 0:t.initDate)&&(0,s.sJ)(null===(n=(0,s.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)+"-"+(0,s.sJ)(null===(c=(0,s.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate);return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"title_collect",children:"Movimientos de Nomina"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:function(){var e,t,n={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,v.jsx)(m,{onConfirm:w,init:null===(e=(0,s.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(t=(0,s.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate,isRange:!0}),(0,d.OpenModal)(n)},children:[(0,v.jsx)("div",{className:"lbl date",children:N||"Fecha"}),(0,v.jsx)(h,{name:"calendar",color:"#66666"})]})})]}),(0,v.jsx)("div",{className:" acc_dtls",style:{marginTop:10},children:(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===_||void 0===_?void 0:_.name}),(0,v.jsx)("div",{className:"name",children:null===_||void 0===_?void 0:_.unit})]})}),(0,v.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Acumulado:"}),(0,v.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===(b=p((0,s.bh)("paystub_submayor_group")))||void 0===b?void 0:b.toFixed(2)]})]})]}),(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,v.jsx)("div",{className:"tr_bar_30",children:"Comprobante"}),(0,v.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,v.jsx)("div",{className:"tr_bar_30",children:"Documento"}),(0,v.jsx)("div",{className:"tr_bar_20",children:"Amount"})]}),(0,v.jsx)("div",{className:"scollVh subMHeight",children:(0,s.bh)("paystub_submayor_group")&&(null===(f=(0,s._2)((0,s.bh)("paystub_submayor_group")))||void 0===f?void 0:f.map((function(e,t){var n,a=(0,s.bh)("paystub_submayor_group")[e];return(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,v.jsx)("div",{className:"tr_bar_30 ",children:(0,v.jsx)(u.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(null===a||void 0===a?void 0:a.comprobanteId)},children:(0,v.jsx)("div",{className:" comprobante_id",onClick:function(){(0,d.CloseModal)({id:y.modalID})},children:a.comprobanteId})})}),(0,v.jsx)("div",{className:"tr_bar_20",children:a.date&&(0,s.sJ)(a.date)}),(0,v.jsx)("div",{className:"tr_bar_30",children:a.document}),(0,v.jsxs)("div",{className:"tr_bar_20",children:["$",null===(n=1*a.balance)||void 0===n?void 0:n.toFixed(2)]})]},t)})))})]})};var p=function(e){var t,n=0;return e&&(null===(t=(0,s._2)(e))||void 0===t||t.map((function(t,a){var r=1*e[t].balance;n=1*(0,s.Zv)(n,2)+1*(0,s.Zv)(r,2)}))),n}},2502:function(e,t,n){n.d(t,{Dy:function(){return o},G:function(){return v},aU:function(){return u},kQ:function(){return l},lG:function(){return d}});var a=n(4165),r=n(1413),i=n(5861),s=n(2350),o=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,o,l,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=(0,r.Z)({},null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.all_employee)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},l=(0,s.I7)(o),e.next=5,l;case 5:(d=e.sent)&&((0,s.Rz)("employees_list",u((0,s.jQ)(d),"code")),(0,s.Rz)("employees_ids",(0,s.ME)((0,s.jQ)(d),"employeeId")),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,o,l,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=(0,r.Z)({},null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.search_employee)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry")},l=(0,s.I7)(o),e.next=5,l;case 5:(d=e.sent)&&((0,s.Rz)("employees_list",u((0,s.jQ)(d),"code")),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var i,o,l,d,u,v,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,r.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.filter_search_opera)).params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId,":date1":(null===(l=(0,s.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)-10,":date2":null===(d=(0,s.bh)("date_range_comps"))||void 0===d?void 0:d.lastDate,":search0":t},v=(0,s.I7)(u),e.next=5,v;case 5:(m=e.sent)&&!m.error&&((0,s.Rz)("paystub_submayor_list",m),(0,s.Rz)("paystub_submayor_group",c((0,s.jQ)(m)))),n&&n();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function c(e){var t={};return e.length>0?e.map((function(e){var n=e.date+"_"+e.comprobanteId;if(!t[n]){t[n]={};["date","description","entryName","comprobanteId","employeeId","document"].forEach((function(a){t[n][a]=e[a]})),t[n].amount=0,t[n].balance=0,t[n].operations=[]}e.type&&(t[n].balance=1*(0,s.Zv)(t[n].balance,2)+("debit"===e.type?1*(0,s.Zv)(e.amount,2):0),t[n].operations.push(function(e){var t,n={};n.employeeId=null===(t=(0,s.bh)("employees_ids"))||void 0===t?void 0:t[e.employeeId],n.comprobanteId=e.comprobanteId,n.document=e.document,n.date=e.date,"credit"===e.type?(n.debit=0,n.credit=e.amount):"debit"===e.type&&(n.credit=0,n.debit=e.amount);return n}(e)))})):t=null,t}var u=function(e,t){return(0,s.MV)("sortEmployees",[e],(function(){return e&&e.sort((function(e,n){var a=1*e[t],r=1*n[t];return a<r?-1:a>r?1:0}))}))},v=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={query:"deleteEmployeesHRG",params:{businessId:null===(r=(0,s.bh)("profileUser"))||void 0===r?void 0:r.businessId,employeeId:t}},o=(0,s.I7)(i),e.next=4,o;case 4:e.sent&&n&&n();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},6794:function(){},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=2018.208d6cfd.chunk.js.map