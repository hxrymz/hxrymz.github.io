"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5944],{5944:function(e,r,n){n.r(r),n.d(r,{filterArr:function(){return d}});var t=n(9439),i=n(2791),o=n(2350),u=n(2647),c=(n(4719),n(6677)),s=n(184),a=(0,u.kp)();r.default=function(e){var r,n=e.handleClick,u=(0,i.useState)(!1),f=(0,t.Z)(u,2),v=f[0],p=f[1],h=(0,i.useState)(0),b=(0,t.Z)(h,2),m=(b[0],b[1]),j=(0,i.useState)(!1),x=(0,t.Z)(j,2),O=x[0],Z=x[1],w=(0,i.useState)([]),_=(0,t.Z)(w,2),y=_[0],I=_[1],k=(0,i.useRef)();(0,i.useEffect)((function(){v||(p(!0),(0,c.Je)(g),m((0,o.M5)()))}));var g=function(e){m((0,o.M5)())},P=function(e,r){n(e,r),k.current.clearTx()};return(0,s.jsx)("div",{children:(0,s.jsx)(a,{placeholder:"buscar provedor",width:420,fetchData:function(e){I(d((0,o.bh)("providers_list"),e)),O&&Z(!1)},loading:O,change:function(e){!O&&Z(!0)},callempty:function(e){I([]),O&&Z(!1)},ref:k,children:(0,s.jsx)("div",{className:"",children:y&&(null===(r=(0,o._2)(y))||void 0===r?void 0:r.map((function(e){return(0,s.jsx)(l,{data:y[e],elmId:e,selectItem:P},e)})))})})})};var l=function(e){var r=e.data,n=e.selectItem;return(0,s.jsx)("div",{className:"item_acc",children:(0,s.jsx)("div",{className:"_dsplFlx item_box account_header",children:(0,s.jsx)("div",{className:"_dsplFlx",onClick:function(){return n(r,null)},children:(0,s.jsx)("div",{className:"code",children:null===r||void 0===r?void 0:r.name})})})})};function d(e,r){var n=r.toLowerCase(),t=[];return e.length>0&&e.map((function(e){var r,i;"provider"===e.type&&(null===(r=e.name)||void 0===r||null===(i=r.toLowerCase())||void 0===i?void 0:i.indexOf(n))>=0&&t.push(e)})),t}},6677:function(e,r,n){n.d(r,{Je:function(){return c},Qn:function(){return d},UO:function(){return s},mQ:function(){return l}});var t=n(4165),i=n(1413),o=n(5861),u=n(2350),c=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(r){var n,o,c,s,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,i.Z)({},null===(n=(0,u.bh)((0,u.hQ)()))||void 0===n?void 0:n.all_prov_cust)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId},s=(0,u.I7)(c),e.next=5,s;case 5:(l=e.sent)&&((0,u.Rz)("providers_list",a((0,u.jQ)(l),"name",1)),(0,u.Rz)("providers_ids",(0,u.ME)((0,u.jQ)(l),"providerId")),r&&r());case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),s=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(r){var n,o,c,s,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,i.Z)({},null===(n=(0,u.bh)((0,u.hQ)()))||void 0===n?void 0:n.search_prov_cust)).params={businessId:null===(o=(0,u.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,u.bh)("search_prov")},s=(0,u.I7)(c),e.next=5,s;case 5:(l=e.sent)&&((0,u.Rz)("providers_list",a((0,u.jQ)(l),"name",1)),r&&r());case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();var a=function(e,r,n){return(0,u.MV)("sortProviders",[e],(function(){return e&&e.sort((function(e,t){var i=1*e[r],o=1*t[r];return i<o?n?-1:1:i>o?n?1:-1:0}))}))},l=function(e,r){return(0,u.MV)("sortSubProviders",[e],(function(){return e&&e.sort((function(e,n){var t=1*e[r],i=1*n[r];return t<i?-1:t>i?1:0}))}))},d=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(r,n){var o,c,s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,i.Z)({},null===(o=(0,u.bh)((0,u.hQ)()))||void 0===o?void 0:o.delete_prov_cust)).params={businessId:null===(c=(0,u.bh)("profileUser"))||void 0===c?void 0:c.businessId,providerId:r},a=(0,u.I7)(s),e.next=5,a;case 5:e.sent&&n&&n();case 7:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()},4719:function(){},1413:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(4942);function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}}}]);
//# sourceMappingURL=5944.81997076.chunk.js.map