"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4521],{4521:function(n,e,r){r.r(e);var t=r(9439),s=r(2791),o=r(2350),i=r(2647),u=(r(1534),r(713)),c=r(184),a=(0,i.kp)();e.default=function(n){var e,r=n.handleClick,i=(0,s.useState)(!1),l=(0,t.Z)(i,2),p=l[0],v=l[1],f=(0,s.useState)(0),h=(0,t.Z)(f,2),b=(h[0],h[1]),m=(0,s.useState)(!1),Z=(0,t.Z)(m,2),I=Z[0],y=Z[1],_=(0,s.useState)([]),x=(0,t.Z)(_,2),w=x[0],k=x[1],j=(0,s.useRef)();(0,s.useEffect)((function(){p||(v(!0),(0,u.ii)(Q),b((0,o.M5)()))}));var Q=function(n){b((0,o.M5)())},O=function(n,e){r(n,e),j.current.clearTx()};return(0,c.jsx)("div",{children:(0,c.jsx)(a,{placeholder:(0,o.zE)(12),width:420,fetchData:function(n){k(function(n,e){var r=e.toLowerCase(),t=[];n.length>0&&n.map((function(n){var e,s,o,i,u;((null===(e=n.name)||void 0===e||null===(s=e.toLowerCase())||void 0===s?void 0:s.indexOf(r))>=0||(null===(o=n.upc_barcode)||void 0===o||null===(i=o.toString())||void 0===i||null===(u=i.toLowerCase())||void 0===u?void 0:u.indexOf(r))>=0)&&t.push(n)}));return t}((0,o.bh)("products_list"),n)),I&&y(!1)},loading:I,change:function(n){!I&&y(!0)},callempty:function(n){k([]),I&&y(!1)},ref:j,children:(0,c.jsx)("div",{className:"",children:w&&(null===(e=(0,o._2)(w))||void 0===e?void 0:e.map((function(n){return(0,c.jsx)(d,{data:w[n],elmId:n,selectItem:O},n)})))})})})};var d=function(n){var e=n.data,r=n.selectItem;return(0,c.jsx)("div",{className:"item_acc",children:(0,c.jsx)("div",{className:"_dsplFlx item_box account_header",children:(0,c.jsx)("div",{className:"_dsplFlx",onClick:function(){return r(e,null)},children:(0,c.jsx)("div",{className:"code",children:null===e||void 0===e?void 0:e.name})})})})}},713:function(n,e,r){r.d(e,{B8:function(){return _},IR:function(){return d},QJ:function(){return f},Rd:function(){return c},VI:function(){return y},Ve:function(){return v},WA:function(){return Z},ZW:function(){return u},Zj:function(){return b},dZ:function(){return h},ii:function(){return p},nj:function(){return m},qT:function(){return a},qv:function(){return l},tH:function(){return I}});var t=r(4165),s=r(1413),o=r(5861),i=r(2350),u=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e,r){var o,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.get_inventory_prod)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":productId":e},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&((0,i.Rz)("inv_products_list",b((0,i.jQ)(d.list),"name")),(0,i.Rz)("inv_products_stock",d.stock),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e,r){var o,u,c,a,d,l;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.get_prod_stock)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,productId:e},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&((l=(0,s.Z)({},(0,i.bh)("products_stock")))[e]=d.stock,(0,i.Rz)("products_stock",l),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),a=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,s.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.all_prods)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId},u.subQuerys={},u.subQuerys.stock=1,c=(0,i.I7)(u),n.next=7,c;case 7:(a=n.sent)&&(d=[],a.map((function(n){var e;null!==n&&void 0!==n&&null!==(e=n.inventory)&&void 0!==e&&e.qty&&d.push({productId:n.productId,name:n.name,unit:n.unit,qty:(1*n.inventory.qty).toFixed(2),amount:(1*n.inventory.amount).toFixed(2),cost:(n.inventory.amount/n.inventory.qty*1).toFixed(2)})})),(0,i.Ey)(e)&&e(b(d,"name")));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e,r){var o,u,c,a,d,l,p;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.group_prod_stock)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&(0,l=[],p=[],(0,i._2)(e).map((function(n){var r=(0,s.Z)({},e[n]);if(d.comps[e[n].comprobanteId]){r.inventory=d.comps[e[n].comprobanteId];var t=("debit"===e[n].type?1:-1)*e[n].amount,o=1*(0,i.Zv)(t,2),u=0;if((0,i._2)(d.comps[e[n].comprobanteId]).map((function(r){u+=1*d.comps[e[n].comprobanteId][r]})),u=1*(0,i.Zv)(u,2),r.inventoryAmount=u,o-u!==0)o-u,p.push(r);else l.push(r)}else{var c=("debit"===e[n].type?1:-1)*e[n].amount;c,p.push(r)}})),(0,i.Rz)("inv_comprobantes_compare",{hasError:p,success:l}),(0,i.Ey)(r)&&r());case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.filter_search_opera)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,i.bh)("date_current_year"),":account":null===(u=(0,i.bh)("global_account_params"))||void 0===u?void 0:u.inventory.account},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&!d.error&&(0,i.Ey)(e)&&e(d);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,s.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.all_prods)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,i.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,i.Rz)("products_list",b(a,"name")),(0,i.Rz)("products_ids",(0,i.ME)((0,i.jQ)(a),"productId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((u=(0,s.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.search_prod)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120},!((0,i.bh)("searchQry").length>1)){n.next=11;break}return(0,i.bh)("searchQry").split(" ").map((function(n,e){n&&(u.params[":search"+e]=n.trim())})),c=(0,i.I7)(u),n.next=7,c;case 7:(a=n.sent)&&((0,i.Rz)("products_list",b((0,i.jQ)(a),"code")),e&&e()),n.next=13;break;case 11:(0,i.Rz)("products_list",null),e&&e();case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,s.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.all_entry_invoices)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,i.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,i.Rz)("movements_list",b(a,"date")),(0,i.Rz)("movements_ids",(0,i.ME)((0,i.jQ)(a),"inventoryId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,s.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.search_entry_invoice)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,i.bh)("searchMovQry")},c=(0,i.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,i.Rz)("movements_list",b((0,i.jQ)(a),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var b=function(n,e){return(0,i.MV)("sortProducts",[n],(function(){return n&&n.sort((function(n,r){var t=n[e],s=r[e];return t<s?-1:t>s?1:0}))}))},m=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e,r){var o,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.delete_prod)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,productId:e},a=(0,i.I7)(c),n.next=5,a;case 5:n.sent&&r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),Z=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e,r){var o,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.delete_inventory)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,inventoryId:e},a=(0,i.I7)(c),n.next=5,a;case 5:n.sent&&r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),I=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e,r){var o,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.delete_entry_invoice)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,entriesInvoiceId:e},a=(0,i.I7)(c),n.next=5,a;case 5:n.sent&&r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e,r){var o,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,s.Z)({},null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.entry_invoice_acc_2)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,entriesInvoiceId:e},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&r&&r(d);case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),_=function(n,e){return(0,i.MV)("rangeProdArr",[n,e],(function(){return n?(0,i._2)(n).slice(0,e):[]}))}},1534:function(){},1413:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(4942);function s(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,t.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}}}]);
//# sourceMappingURL=4521.5e21f5b8.chunk.js.map