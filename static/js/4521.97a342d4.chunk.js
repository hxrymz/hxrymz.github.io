"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4521],{4521:function(n,e,r){r.r(e);var t=r(9439),s=r(2791),i=r(2350),o=r(2647),u=(r(1534),r(713)),c=r(184),a=(0,o.kp)();e.default=function(n){var e,r=n.handleClick,o=(0,s.useState)(!1),l=(0,t.Z)(o,2),v=l[0],f=l[1],p=(0,s.useState)(0),h=(0,t.Z)(p,2),b=(h[0],h[1]),Z=(0,s.useState)(!1),m=(0,t.Z)(Z,2),I=m[0],_=m[1],x=(0,s.useState)([]),w=(0,t.Z)(x,2),y=w[0],j=w[1],k=(0,s.useRef)();(0,s.useEffect)((function(){v||(f(!0),(0,u.ii)(O),b((0,i.M5)()))}));var O=function(n){b((0,i.M5)())},Q=function(n,e){r(n,e),k.current.clearTx()};return(0,c.jsx)("div",{children:(0,c.jsx)(a,{placeholder:(0,i.zE)(12),width:420,fetchData:function(n){j(function(n,e){var r=e.toLowerCase(),t=[];n.length>0&&n.map((function(n){var e,s,i,o,u;((null===(e=n.name)||void 0===e||null===(s=e.toLowerCase())||void 0===s?void 0:s.indexOf(r))>=0||(null===(i=n.upc_barcode)||void 0===i||null===(o=i.toString())||void 0===o||null===(u=o.toLowerCase())||void 0===u?void 0:u.indexOf(r))>=0)&&t.push(n)}));return t}((0,i.bh)("products_list"),n)),I&&_(!1)},loading:I,change:function(n){!I&&_(!0)},callempty:function(n){j([]),I&&_(!1)},ref:k,children:(0,c.jsx)("div",{className:"",children:y&&(null===(e=(0,i._2)(y))||void 0===e?void 0:e.map((function(n){return(0,c.jsx)(d,{data:y[n],elmId:n,selectItem:Q},n)})))})})})};var d=function(n){var e=n.data,r=n.selectItem;return(0,c.jsx)("div",{className:"item_acc",children:(0,c.jsx)("div",{className:"_dsplFlx item_box account_header",children:(0,c.jsx)("div",{className:"_dsplFlx",onClick:function(){return r(e,null)},children:(0,c.jsx)("div",{className:"code",children:null===e||void 0===e?void 0:e.name})})})})}},713:function(n,e,r){r.d(e,{QJ:function(){return l},Rd:function(){return c},VI:function(){return Z},Ve:function(){return d},WA:function(){return h},ZW:function(){return u},Zj:function(){return f},dZ:function(){return v},ii:function(){return a},nj:function(){return p},tH:function(){return b}});var t=r(4165),s=r(1413),i=r(5861),o=r(2350),u=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.get_inventory_prod)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,":productId":e},a=(0,o.I7)(c),n.next=5,a;case 5:(d=n.sent)&&((0,o.Rz)("inv_products_list",f((0,o.jQ)(d.list),"name")),(0,o.Rz)("inv_products_stock",d.stock),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i,u,c,a,d,l;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.get_prod_stock)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,productId:e},a=(0,o.I7)(c),n.next=5,a;case 5:(d=n.sent)&&((l=(0,s.Z)({},(0,o.bh)("products_stock")))[e]=d.stock,(0,o.Rz)("products_stock",l),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),a=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,s.Z)({},null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.all_prods)).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,o.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,o.Rz)("products_list",f(a,"name")),(0,o.Rz)("products_ids",(0,o.ME)((0,o.jQ)(a),"productId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,s.Z)({},null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.search_prod)).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,o.bh)("searchQry")},c=(0,o.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,o.Rz)("products_list",f((0,o.jQ)(a),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,s.Z)({},null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.all_entry_invoices)).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,o.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,o.Rz)("movements_list",f(a,"date")),(0,o.Rz)("movements_ids",(0,o.ME)((0,o.jQ)(a),"inventoryId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,s.Z)({},null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.search_entry_invoice)).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,o.bh)("searchMovQry")},c=(0,o.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,o.Rz)("movements_list",f((0,o.jQ)(a),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var f=function(n,e){return(0,o.MV)("sortProducts",[n],(function(){return n&&n.sort((function(n,r){var t=n[e],s=r[e];return t<s?-1:t>s?1:0}))}))},p=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.delete_prod)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,productId:e},a=(0,o.I7)(c),n.next=5,a;case 5:n.sent&&r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.delete_inventory)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,inventoryId:e},a=(0,o.I7)(c),n.next=5,a;case 5:n.sent&&r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),b=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.delete_entry_invoice)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,entriesInvoiceId:e},a=(0,o.I7)(c),n.next=5,a;case 5:n.sent&&r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),Z=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.entry_invoice_acc_2)).params={businessId:null===(u=(0,o.bh)("profileUser"))||void 0===u?void 0:u.businessId,entriesInvoiceId:e},a=(0,o.I7)(c),n.next=5,a;case 5:(d=n.sent)&&r&&r(d);case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},1534:function(){},1413:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(4942);function s(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,t.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}}}]);
//# sourceMappingURL=4521.97a342d4.chunk.js.map