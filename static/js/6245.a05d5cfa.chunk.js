"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6245],{713:function(n,r,e){e.d(r,{B8:function(){return _},IR:function(){return d},QJ:function(){return f},Rd:function(){return c},VI:function(){return y},Ve:function(){return l},WA:function(){return Z},ZW:function(){return u},Zj:function(){return b},dZ:function(){return h},ii:function(){return p},nj:function(){return m},qT:function(){return a},qv:function(){return v},tH:function(){return I}});var t=e(4165),o=e(1413),s=e(5861),i=e(2350),u=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r,e){var s,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.get_inventory_prod)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":productId":r},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&((0,i.Rz)("inv_products_list",b((0,i.jQ)(d.list),"name")),(0,i.Rz)("inv_products_stock",d.stock),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),c=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r,e){var s,u,c,a,d,v;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.get_prod_stock)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,productId:r},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&((v=(0,o.Z)({},(0,i.bh)("products_stock")))[r]=d.stock,(0,i.Rz)("products_stock",v),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),a=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r){var e,s,u,c,a,d,v,p;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.all_prods)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId},u.subQuerys={},u.subQuerys.stock=1,c=(0,i.I7)(u),n.next=7,c;case 7:(a=n.sent)&&(d={},v=[],p=0,a.map((function(n){var r;if(null!==n&&void 0!==n&&null!==(r=n.inventory)&&void 0!==r&&r.qty){var e,t,o;if(p+=1*(0,i.Zv)(null===n||void 0===n||null===(e=n.inventory)||void 0===e?void 0:e.amount,2),d[n.unit])d[n.unit]+=null===n||void 0===n||null===(t=n.inventory)||void 0===t?void 0:t.qty;else d[n.unit]=null===n||void 0===n||null===(o=n.inventory)||void 0===o?void 0:o.qty;v.push({productId:n.productId,name:n.name,unit:n.unit,qty:(1*n.inventory.qty).toFixed(2),amount:(1*n.inventory.amount).toFixed(2),cost:(n.inventory.amount/n.inventory.qty*1).toFixed(2)})}})),(0,i.Ey)(r)&&r({list:b(v,"name"),total:p,units:d}));case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r,e){var s,u,c,a,d,v,p,l,f;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.group_prod_stock)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&(v=(0,i._I)(d.comps),0,0,0,p=[],l=[],(0,i._2)(r).map((function(n){var e=(0,o.Z)({},r[n]),t=("debit"===r[n].type?1:-1)*r[n].amount,s=1*(0,i.Zv)(t,2);if(s,d.comps[r[n].comprobanteId]){e.inventory=d.comps[r[n].comprobanteId];var u=0;if((0,i._2)(d.comps[r[n].comprobanteId]).map((function(e){u=1*(0,i.Zv)(u,2)+1*(0,i.Zv)(d.comps[r[n].comprobanteId][e],2)})),u=u<0?-1*u:u,u=1*(0,i.Zv)(u,2),e.inventoryAmount=u,u,(s=s<0?-1*s:s)-u!==0){var c=s-u;c,l.push(e),console.log("diff",e,s,u,c)}else p.push(e);delete v[r[n].comprobanteId]}else t,l.push(e)})),f=0,(0,i._2)(v).map((function(n){var r=0;(0,i._2)(v[n]).map((function(e){r=1*(0,i.Zv)(r,2)+1*(0,i.Zv)(v[n][e],2)})),f+=r})),console.log("inventoryBack",v,"inventoryBackTotal",f),(0,i.Rz)("inv_comprobantes_compare",{hasError:l,success:p,inventoryBack:v}),(0,i.Ey)(e)&&e());case 7:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),v=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r){var e,s,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.filter_search_opera)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId,year:(0,i.bh)("date_current_year"),":account":null===(u=(0,i.bh)("global_account_params"))||void 0===u?void 0:u.inventory.account},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&!d.error&&(0,i.Ey)(r)&&r(b((0,i.jQ)(d),"date"));case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r){var e,s,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.all_prods)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId},c=(0,i.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,i.Rz)("products_list",b(a,"name")),(0,i.Rz)("products_ids",(0,i.ME)((0,i.jQ)(a),"productId")),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r){var e,s,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((u=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.search_prod)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId,limit:120},!((0,i.bh)("searchQry").length>1)){n.next=11;break}return(0,i.bh)("searchQry").split(" ").map((function(n,r){n&&(u.params[":search"+r]=n.trim())})),c=(0,i.I7)(u),n.next=7,c;case 7:(a=n.sent)&&((0,i.Rz)("products_list",b((0,i.jQ)(a),"code")),r&&r()),n.next=13;break;case 11:(0,i.Rz)("products_list",null),r&&r();case 13:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r){var e,s,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.all_entry_invoices)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId},c=(0,i.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,i.Rz)("movements_list",b(a,"date")),(0,i.Rz)("movements_ids",(0,i.ME)((0,i.jQ)(a),"inventoryId")),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r){var e,s,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.search_entry_invoice)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":(0,i.bh)("searchMovQry")},c=(0,i.I7)(u),n.next=5,c;case 5:(a=n.sent)&&((0,i.Rz)("movements_list",b((0,i.jQ)(a),"code")),r&&r());case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}();var b=function(n,r){return(0,i.MV)("sortProducts",[n],(function(){return n&&n.sort((function(n,e){var t=n[r],o=e[r];return t<o?-1:t>o?1:0}))}))},m=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r,e){var s,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.delete_prod)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,productId:r},a=(0,i.I7)(c),n.next=5,a;case 5:n.sent&&e&&e();case 7:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),Z=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r,e){var s,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.delete_inventory)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,inventoryId:r},a=(0,i.I7)(c),n.next=5,a;case 5:n.sent&&e&&e();case 7:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),I=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r,e){var s,u,c,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.delete_entry_invoice)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,entriesInvoiceId:r},a=(0,i.I7)(c),n.next=5,a;case 5:n.sent&&e&&e();case 7:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),y=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r,e){var s,u,c,a,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.entry_invoice_acc_2)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,entriesInvoiceId:r},a=(0,i.I7)(c),n.next=5,a;case 5:(d=n.sent)&&e&&e(d);case 7:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),_=function(n,r){return(0,i.MV)("rangeProdArr",[n,r],(function(){return n?(0,i._2)(n).slice(0,r):[]}))}}}]);
//# sourceMappingURL=6245.a05d5cfa.chunk.js.map