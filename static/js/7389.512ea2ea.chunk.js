"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7389,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return c},OpenModal:function(){return o},default:function(){return a}});var r=n(2791),i=n(5408),s=n(2350),l=n(184),a=function(){var e=(0,s.bh)("listDialog")||{},t=((0,i.Z)("listDialog_h392"),Object.keys(e));return(0,l.jsx)(l.Fragment,{children:t.map((function(t,n){var i=e[t];if(i&&i.visible){var s={};i.height&&(s.heigth=i.height),i.width,i.zIndex&&(s.zIndex=i.zIndex-1);var a={zIndex:i.zIndex},o=null,u=i.data;return i.content&&(o=r.cloneElement(i.content,{data:u})),(0,l.jsxs)("div",{className:"ltr-1kbnjow",style:s,children:[(0,l.jsx)("div",{className:"ltr-hoe9xz",children:(0,l.jsx)("div",{className:"ltr-1wao6ny",style:a,id:t,children:o})}),i.data.overlay?(0,l.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},o=function(e){var t=(0,s.bh)("listDialog")||{},n=(0,s.M5)();t[n]||(t[n]={}),t[n].visible=!0;var r={};e.props?(r=e.props).modalID=n:r.modalID=n;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===t[n].width&&r.height===t[n].height||(t[n].height=r.height+10,t[n].width=r.width,(0,s.Rz)("listDialog",t),(0,s.wt)("listDialog_h392")))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=r,(0,s.Rz)("listDialog",t),(0,s.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,s.Rz)("modalOpen",n),(0,s.wt)("listDialog_h392")}),125)},c=function(e){var t,n,r,i=(0,s.bh)("listDialog")||{},l=e.id;i[l]&&(i[l].observeResize&&i[l].observeInterval&&clearInterval(i[l].observeInterval),i[l].display=!1,null===(t=i[l])||void 0===t||null===(n=t.data)||void 0===n||null===(r=n.closeEvent)||void 0===r||r.call(n),(0,s.Rz)("listDialog",i),delete i[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,s.wt)("listDialog_h392"),setTimeout((function(){delete i[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,s.Rz)("modalOpen",null)}),750))}},7389:function(e,t,n){n.r(t);var r=n(4165),i=n(5861),s=n(9439),l=n(2791),a=n(2350),o=n(2647),c=n(9760),u=(n(1206),n(1573)),d=n(2502),h=n(184),v=(0,o.Vg)(),p=(0,u.mi)(),f=(0,u.vj)();t.default=function(e){e.data,e.elmId,e.updObs;var t,n,o=(0,l.useState)(!1),u=(0,s.Z)(o,2),m=u[0],y=u[1],b=(0,l.useState)(0),g=(0,s.Z)(b,2),x=(g[0],g[1]),w=(0,l.useState)(!1),j=(0,s.Z)(w,2),I=(j[0],j[1]),O=(0,l.useState)(!1),_=(0,s.Z)(O,2),Z=(_[0],_[1]),z=(0,l.useState)(!1),D=(0,s.Z)(z,2),N=D[0],k=D[1];(0,l.useEffect)((function(){m||(y(!0),x((0,a.M5)()),(0,d.Dy)(M))}));var E=function(){I(!1),Z(!0)},R=function(e){(0,d.Dy)(M)},M=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x((0,a.M5)()),k(!1);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"",children:[(0,h.jsxs)("div",{className:"accounts_header",children:[(0,h.jsx)("h2",{children:"Empleados"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(v,{placeholder:"Buscar ....",width:360,obs:x,fetchData:function(e){k(!0),(0,d.kQ)(M)},loading:N,change:function(e){!N&&k(!0)},callempty:R,keyFlds:"searchQry"}),(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:function(){Z(!1);var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(p,{confimr:R}),(0,c.OpenModal)(e)},children:"Agregar Empleado"})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"total_comprobante_title",children:"No de Empleados:"}),(0,h.jsx)("div",{className:"total_comprobante gray",children:(0,h.jsx)("span",{children:null===(t=(0,a._2)((0,a.bh)("employees_list")))||void 0===t?void 0:t.length})})]})]}),(0,h.jsx)("div",{className:"employees_container scollVh",children:(0,a.bh)("employees_list")&&(null===(n=(0,a._2)((0,a.bh)("employees_list")))||void 0===n?void 0:n.map((function(e){return(0,h.jsx)(f,{data:(0,a.bh)("employees_list")[e],elmId:e,openUpdateView:E,handleRefreshAll:R},e)})))})]})}},2502:function(e,t,n){n.d(t,{Dy:function(){return a},G:function(){return u},aU:function(){return c},kQ:function(){return o}});var r=n(4165),i=n(1413),s=n(5861),l=n(2350),a=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s,a,o,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(n=(0,l.bh)((0,l.hQ)()))||void 0===n?void 0:n.all_employee)).params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId},o=(0,l.I7)(a),e.next=5,o;case 5:(u=e.sent)&&((0,l.Rz)("employees_list",c((0,l.jQ)(u),"code")),(0,l.Rz)("employees_ids",(0,l.ME)((0,l.jQ)(u),"employeeId")),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s,a,o,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(n=(0,l.bh)((0,l.hQ)()))||void 0===n?void 0:n.search_employee)).params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":(0,l.bh)("searchQry")},o=(0,l.I7)(a),e.next=5,o;case 5:(u=e.sent)&&((0,l.Rz)("employees_list",c((0,l.jQ)(u),"code")),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var c=function(e,t){return(0,l.MV)("sortEmployees",[e],(function(){return e&&e.sort((function(e,n){var r=1*e[t],i=1*n[t];return r<i?-1:r>i?1:0}))}))},u=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,n){var i,s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={query:"deleteEmployeesHRG",params:{businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,employeeId:t}},a=(0,l.I7)(s),e.next=4,a;case 4:e.sent&&n&&n();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},1206:function(){},4942:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9142);function i(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=7389.512ea2ea.chunk.js.map