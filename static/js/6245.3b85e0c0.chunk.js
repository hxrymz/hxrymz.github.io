"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6245],{713:(e,n,o)=>{o.d(n,{$P:()=>w,B8:()=>j,Ex:()=>U,H9:()=>g,IR:()=>_,N0:()=>v,QJ:()=>R,Rd:()=>I,SI:()=>t,Tu:()=>O,VI:()=>S,Ve:()=>Q,WA:()=>k,ZW:()=>p,Zj:()=>z,_U:()=>i,a2:()=>d,fK:()=>h,g5:()=>s,id:()=>u,ii:()=>f,nj:()=>P,qT:()=>m,qv:()=>y,yJ:()=>c,yk:()=>b});var r=o(2350);const s={WH:"Almacen",PR:"Production",PT:"Patio"},i=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.scan_inv_location};s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,r.bh)("date_current_year")};let i=(0,r.bh)("date_range_inv_loc");if(null!==i&&void 0!==i&&i.initDate||(0,r.bh)("locationId2F")||(0,r.bh)("productId2F")||(0,r.bh)("searchLocationQry")&&(0,r.bh)("searchLocationQry").length>1){if((0,r.bh)("searchLocationQry").split(" ").map(((e,n)=>{e&&(s.params[":search"+n]=e.trim())})),(0,r.bh)("locationId2F")&&(s.params[":search5"]=(0,r.bh)("locationId2F").trim()),(0,r.bh)("productId2F")){let e=5;(0,r.bh)("locationId2F")&&(e=4),s.params[":search"+e]=(0,r.bh)("productId2F").trim()}null!==i&&void 0!==i&&i.initDate&&(s.params[":date1"]=null===i||void 0===i?void 0:i.initDate,s.params[":date2"]=null===i||void 0===i?void 0:i.lastDate);const n=(0,r.I7)(s),o=await n;o&&!o.error&&(a(o),(0,r.Rz)("inv_location_ids",o),(0,r.Rz)("inv_location_list",z((0,r.jQ)(o),"date",0)),e&&e())}else(0,r.Rz)("inv_location_list",null),e&&e()},a=async e=>{let n={},o={};e&&(0,r._2)(e).map((r=>{var s,i,a,t;n[null===(s=e[r])||void 0===s?void 0:s.inventoryId]||(n[null===(a=e[r])||void 0===a?void 0:a.inventoryId]=1);o[null===(i=e[r])||void 0===i?void 0:i.productId]||(o[null===(t=e[r])||void 0===t?void 0:t.productId]=1)}));const s=(0,r._2)(o).map((async e=>{await l(e)}));await Promise.all(s);return 1},t=async e=>{var n,o;if(null!==(n=(0,r.bh)("inventoryOnScanItems"))&&void 0!==n&&n[e])return null===(o=(0,r.bh)("inventoryOnScanItems"))||void 0===o?void 0:o[e];{var s,i;let n={...null===(s=(0,r.bh)((0,r.hQ)()))||void 0===s?void 0:s.search_inventory};n.params={businessId:null===(i=(0,r.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search1":e,year:(0,r.bh)("date_current_year")};const o=(0,r.I7)(n),a=await o;if(a){let n=(0,r.bh)("inventoryOnScanItems")||{};return n[e]=a[e],(0,r.Rz)("inventoryOnScanItems",n),a[e]}return null}},d=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.scan_inv_location};s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search0":e,year:(0,r.bh)("date_current_year")};const i=(0,r.I7)(s),a=await i;return a&&!a.error?a:null},l=async e=>{var n,o;if(null!==(n=(0,r.bh)("ProductsOnScanItems"))&&void 0!==n&&n[e])return null===(o=(0,r.bh)("ProductsOnScanItems"))||void 0===o?void 0:o[e];{var s,i;let n={...null===(s=(0,r.bh)((0,r.hQ)()))||void 0===s?void 0:s.search_prod};n.params={businessId:null===(i=(0,r.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":e,year:(0,r.bh)("date_current_year")};const o=(0,r.I7)(n),a=await o;if(a){let n=(0,r.bh)("ProductsOnScanItems")||{};return n[e]=a[e],(0,r.Rz)("ProductsOnScanItems",n),a[e]}return null}},c=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.search_prod};s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search0":e,year:(0,r.bh)("date_current_year")};const i=(0,r.I7)(s),a=await i;if(a){let e=(0,r.bh)("ProductsOnScanItems")||{},n=Object.assign({},e,a);return(0,r.Rz)("ProductsOnScanItems",n),F(a)}return[]},u=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.scan_inv_location};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":n,":search1":e};const a=(0,r.I7)(i),t=await a;if(t&&!t.error){let e=(0,r.bh)("inventoryOnScanItems")||{},n=Object.assign({},e,t);return(0,r.Rz)("inventoryOnScanItems",n),F(t)}return null},v=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.scan_area_location};s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120};const i=(0,r.I7)(s),a=await i;a?((0,r.Rz)("location_drpdwn",q(a)),(0,r.Rz)("locations_ids",a),(0,r.Rz)("locations_list",z((0,r.jQ)(a),"areaLocationId")),e&&e()):e&&e()},h=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.scan_voucher_production};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":e};const a=(0,r.I7)(i),t=await a;t&&!t.error&&(0,r._2)(t)&&(0,r._2)(t).length>0?n&&n(t):n&&n(null)},b=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.scan_voucher_production};if(s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120},(0,r.bh)("searchVoucherQry")&&(0,r.bh)("searchVoucherQry").length>1){(0,r.bh)("searchVoucherQry").split(" ").map(((e,n)=>{e&&(s.params[":search"+n]=e.trim())}));const n=(0,r.I7)(s),o=await n;console.log(s),console.log(o),o&&((0,r.Rz)("voucher_production",o),(0,r.Rz)("vouchers_list",z((0,r.jQ)(o),"voucherId")),e&&e())}else(0,r.Rz)("vouchers_list",null),e&&e()},p=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.get_inventory_prod};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,":productId":e,year:(0,r.bh)("date_current_year")};const a=(0,r.I7)(i),t=await a;t&&((0,r.Rz)("inv_products_list",z((0,r.jQ)(t.list),"name")),(0,r.Rz)("inv_products_stock",t.stock),n&&n())},I=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.get_prod_stock};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,productId:e,year:(0,r.bh)("date_current_year")};const a=(0,r.I7)(i),t=await a;if(t){let o={...(0,r.bh)("products_stock")};o[e]=t.stock,(0,r.Rz)("products_stock",o),n&&n()}},m=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.all_prods};s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId},s.subQuerys={},s.subQuerys.stock=1;const i=(0,r.I7)(s),a=await i;if(a){let n={},o=[],s=0;a.map((e=>{var i;if(null!==e&&void 0!==e&&null!==(i=e.inventory)&&void 0!==i&&i.qty){var a,t,d;if(s+=1*(0,r.Zv)(null===e||void 0===e||null===(a=e.inventory)||void 0===a?void 0:a.amount,2),n[e.unit])n[e.unit]+=null===e||void 0===e||null===(t=e.inventory)||void 0===t?void 0:t.qty;else n[e.unit]=null===e||void 0===e||null===(d=e.inventory)||void 0===d?void 0:d.qty;o.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,r.Ey)(e)&&e({list:z(o,"name"),total:s,units:n})}},_=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.group_prod_stock};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId};const a=(0,r.I7)(i),t=await a;if(t){let o=(0,r._I)(t.comps),s=0,i=0,a=0,d=[],l=[];(0,r._2)(e).map((n=>{let c={...e[n]},u=("debit"===e[n].type?1:-1)*e[n].amount,v=1*(0,r.Zv)(u,2);if(s+=v,t.comps[e[n].comprobanteId]){c.inventory=t.comps[e[n].comprobanteId];let s=0;if((0,r._2)(t.comps[e[n].comprobanteId]).map((o=>{s=1*(0,r.Zv)(s,2)+1*(0,r.Zv)(t.comps[e[n].comprobanteId][o],2)})),s=s<0?-1*s:s,s=1*(0,r.Zv)(s,2),c.inventoryAmount=s,i+=s,v=v<0?-1*v:v,v-s!==0){a+=v-s,l.push(c)}else d.push(c);delete o[e[n].comprobanteId]}else a+=u,l.push(c)}));let c=0;(0,r._2)(o).map((e=>{let n=0;(0,r._2)(o[e]).map((s=>{n=1*(0,r.Zv)(n,2)+1*(0,r.Zv)(o[e][s],2)})),c+=n})),(0,r.Rz)("inv_comprobantes_compare",{hasError:l,success:d,inventoryBack:o}),(0,r.Ey)(n)&&n()}},y=async e=>{var n,o,s;let i={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.filter_search_opera};i.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,r.bh)("date_current_year"),":account":null===(s=(0,r.bh)("global_account_params"))||void 0===s?void 0:s.inventory.account};const a=(0,r.I7)(i),t=await a;t&&!t.error&&(0,r.Ey)(e)&&e(z((0,r.jQ)(t),"date"))},f=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.all_prods};s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,r.bh)("date_current_year")};const i=(0,r.I7)(s),a=await i;a&&((0,r.Rz)("products_list",z(a,"name")),(0,r.Rz)("products_ids",(0,r.ME)((0,r.jQ)(a),"productId")),e&&e())},Q=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.search_prod};if(s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120,year:(0,r.bh)("date_current_year")},(0,r.bh)("searchQry").length>1){(0,r.bh)("searchQry").split(" ").map(((e,n)=>{e&&(s.params[":search"+n]=e.trim())}));const n=(0,r.I7)(s),o=await n;o&&((0,r.Rz)("products_list",z((0,r.jQ)(o),"code")),e&&e())}else(0,r.Rz)("products_list",null),e&&e()},R=async e=>{var n,o;let s={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.all_entry_invoices};s.params={businessId:null===(o=(0,r.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,r.bh)("date_current_year")};const i=(0,r.I7)(s),a=await i;a&&((0,r.Rz)("movements_list",z(a,"date")),(0,r.Rz)("movements_ids",(0,r.ME)((0,r.jQ)(a),"inventoryId")),e&&e())},w=async e=>{var n;if((null===(n=(0,r.bh)("searchMovQry"))||void 0===n?void 0:n.length)>1){var o,s;let n={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.search_inventory};n.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":(0,r.bh)("searchMovQry"),year:(0,r.bh)("date_current_year")};const i=(0,r.I7)(n),a=await i;a&&((0,r.Rz)("movements_list",function(e){var n={};let o=e&&(0,r._2)(e);o.length>0?o.map((o=>{let r=e[o];n[r.comprobanteId]||(n[r.comprobanteId]={},n[r.comprobanteId].amount=0,n[r.comprobanteId].document=r.document,n[r.comprobanteId].date=r.date,n[r.comprobanteId].comprobanteId=r.comprobanteId,n[r.comprobanteId].entriesInvoiceId=r.entriesInvoiceId,n[r.comprobanteId].products=[]),n[r.comprobanteId].amount+=r.qty*r.price,n[r.comprobanteId].products.push({productId:r.productId,qty:r.qty,price:r.price,inventoryId:r.inventoryId})})):n=null;return n}(a)),(0,r.Rz)("movements_ids",a),e&&e())}else(0,r.Rz)("movements_list",[]),(0,r.Rz)("movements_ids",{}),e&&e()};const z=function(e,n){let o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,r.MV)("sortProducts",[e],(()=>e&&e.sort(((e,r)=>{let s=e[n],i=r[n];return s<i?o?-1:1:s>i?o?1:-1:0}))))},U=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.rmv_area_location};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,areaLocationId:e,year:(0,r.bh)("date_current_year")};const a=(0,r.I7)(i);await a&&n&&n()},g=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.rmv_inv_location};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,inventoryLocationId:e,year:(0,r.bh)("date_current_year")};const a=(0,r.I7)(i);await a&&n&&n()},P=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.delete_prod};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,productId:e,year:(0,r.bh)("date_current_year")};const a=(0,r.I7)(i);await a&&n&&n()},k=async(e,n)=>{var o,s;let i={...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.delete_inventory};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,inventoryId:e,year:(0,r.bh)("date_current_year")};const a=(0,r.I7)(i);await a&&n&&n()},O=async(e,n)=>{let o=[];e.map((e=>{var n,s;let i={...null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.delete_inventory};i.params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,inventoryId:e,year:(0,r.bh)("date_current_year")},o.push(i)}));const s=o.map((async e=>{const n=(0,r.I7)(e);await n}));await Promise.all(s),n&&n()},S=async(e,n)=>{var o,s;({...null===(o=(0,r.bh)((0,r.hQ)()))||void 0===o?void 0:o.entry_invoice_acc_2}).params={businessId:null===(s=(0,r.bh)("profileUser"))||void 0===s?void 0:s.businessId,entriesInvoiceId:e,year:(0,r.bh)("date_current_year")}},j=(e,n)=>(0,r.MV)("rangeProdArr",[e,n],(()=>e?(0,r._2)(e).slice(0,n):[])),q=e=>{let n=[{id:null,label:"Location"}];return e&&(0,r._2)(e).map((o=>{var r,s;n.push({id:o,label:"".concat(null===(r=e[o])||void 0===r?void 0:r.areaId,"-").concat(null===(s=e[o])||void 0===s?void 0:s.location)})})),n},F=e=>{let n=[];return e&&(0,r._2)(e).map((o=>{var r;n.push({id:o,label:null===(r=e[o])||void 0===r?void 0:r.alphaCode})})),n}}}]);
//# sourceMappingURL=6245.3b85e0c0.chunk.js.map