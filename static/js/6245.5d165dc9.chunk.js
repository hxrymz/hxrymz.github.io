"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6245],{713:(e,n,r)=>{r.d(n,{$P:()=>w,B8:()=>j,Ex:()=>U,H9:()=>g,IR:()=>y,N0:()=>v,QJ:()=>R,Rd:()=>I,SI:()=>t,Tu:()=>O,VI:()=>S,Ve:()=>Q,WA:()=>k,ZW:()=>p,Zj:()=>z,_U:()=>s,a2:()=>d,fK:()=>h,g5:()=>a,id:()=>u,ii:()=>f,nj:()=>P,qT:()=>_,qv:()=>m,yJ:()=>c,yk:()=>b});var o=r(2350);const a={WH:"Almacen",PR:"Production",PT:"Patio"},s=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.scan_inv_location};a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,year:(0,o.bh)("date_current_year")};let s=(0,o.bh)("date_range_inv_loc");if(null!==s&&void 0!==s&&s.initDate||(0,o.bh)("locationId2F")||(0,o.bh)("productId2F")||(0,o.bh)("searchLocationQry")&&(0,o.bh)("searchLocationQry").length>1){if((0,o.bh)("searchLocationQry").split(" ").map(((e,n)=>{e&&(a.params[":search"+n]=e.trim())})),(0,o.bh)("locationId2F")&&(a.params[":search5"]=(0,o.bh)("locationId2F").trim()),(0,o.bh)("productId2F")){let e=5;(0,o.bh)("locationId2F")&&(e=4),a.params[":search"+e]=(0,o.bh)("productId2F").trim()}null!==s&&void 0!==s&&s.initDate&&(a.params[":date1"]=null===s||void 0===s?void 0:s.initDate,a.params[":date2"]=null===s||void 0===s?void 0:s.lastDate);const n=(0,o.I7)(a),r=await n;r&&!r.error&&(i(r),(0,o.Rz)("inv_location_ids",r),(0,o.Rz)("inv_location_list",z((0,o.jQ)(r),"date",0)),e&&e())}else(0,o.Rz)("inv_location_list",null),e&&e()},i=async e=>{let n={},r={};e&&(0,o._2)(e).map((o=>{var a,s,i,t;n[null===(a=e[o])||void 0===a?void 0:a.inventoryId]||(n[null===(i=e[o])||void 0===i?void 0:i.inventoryId]=1);r[null===(s=e[o])||void 0===s?void 0:s.productId]||(r[null===(t=e[o])||void 0===t?void 0:t.productId]=1)}));const a=(0,o._2)(r).map((async e=>{await l(e)}));await Promise.all(a);return 1},t=async e=>{var n,r;if(null!==(n=(0,o.bh)("inventoryOnScanItems"))&&void 0!==n&&n[e])return null===(r=(0,o.bh)("inventoryOnScanItems"))||void 0===r?void 0:r[e];{var a,s;let n={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.search_inventory};n.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search1":e,year:(0,o.bh)("date_current_year")};const r=(0,o.I7)(n),i=await r;if(i){let n=(0,o.bh)("inventoryOnScanItems")||{};return n[e]=i[e],(0,o.Rz)("inventoryOnScanItems",n),i[e]}return null}},d=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.scan_inv_location};a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search0":e,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(a),i=await s;return i&&!i.error?i:null},l=async e=>{var n,r;if(null!==(n=(0,o.bh)("ProductsOnScanItems"))&&void 0!==n&&n[e])return null===(r=(0,o.bh)("ProductsOnScanItems"))||void 0===r?void 0:r[e];{var a,s;let n={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.search_prod};n.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search0":e,year:(0,o.bh)("date_current_year")};const r=(0,o.I7)(n),i=await r;if(i){let n=(0,o.bh)("ProductsOnScanItems")||{};return n[e]=i[e],(0,o.Rz)("ProductsOnScanItems",n),i[e]}return null}},c=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.search_prod};a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search0":e,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(a),i=await s;if(i){let e=(0,o.bh)("ProductsOnScanItems")||{},n=Object.assign({},e,i);return(0,o.Rz)("ProductsOnScanItems",n),F(i)}return[]},u=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.scan_inv_location};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search0":n,":search1":e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(s),t=await i;if(t&&!t.error){let e=(0,o.bh)("inventoryOnScanItems")||{},n=Object.assign({},e,t);return(0,o.Rz)("inventoryOnScanItems",n),F(t)}return null},v=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.scan_area_location};a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,limit:120,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(a),i=await s;i?((0,o.Rz)("location_drpdwn",q(i)),(0,o.Rz)("locations_ids",i),(0,o.Rz)("locations_list",z((0,o.jQ)(i),"areaLocationId")),e&&e()):e&&e()},h=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.scan_voucher_production};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search0":e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(s),t=await i;t&&!t.error&&(0,o._2)(t)&&(0,o._2)(t).length>0?n&&n(t):n&&n(null)},b=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.scan_voucher_production};if(a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,limit:120,year:(0,o.bh)("date_current_year")},(0,o.bh)("searchVoucherQry")&&(0,o.bh)("searchVoucherQry").length>1){(0,o.bh)("searchVoucherQry").split(" ").map(((e,n)=>{e&&(a.params[":search"+n]=e.trim())}));const n=(0,o.I7)(a),r=await n;r&&((0,o.Rz)("voucher_production",r),(0,o.Rz)("vouchers_list",z((0,o.jQ)(r),"voucherId")),e&&e())}else(0,o.Rz)("vouchers_list",null),e&&e()},p=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.get_inventory_prod};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":productId":e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(s),t=await i;t&&((0,o.Rz)("inv_products_list",z((0,o.jQ)(t.list),"name")),(0,o.Rz)("inv_products_stock",t.stock),n&&n())},I=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.get_prod_stock};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(s),t=await i;if(t){let r={...(0,o.bh)("products_stock")};r[e]=t.stock,(0,o.Rz)("products_stock",r),n&&n()}},_=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.all_prods};a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId},a.subQuerys={},a.subQuerys.stock=1;const s=(0,o.I7)(a),i=await s;if(i){let n={},r=[],a=0;i.map((e=>{var s;if(null!==e&&void 0!==e&&null!==(s=e.inventory)&&void 0!==s&&s.qty){var i,t,d;if(a+=1*(0,o.Zv)(null===e||void 0===e||null===(i=e.inventory)||void 0===i?void 0:i.amount,2),n[e.unit])n[e.unit]+=null===e||void 0===e||null===(t=e.inventory)||void 0===t?void 0:t.qty;else n[e.unit]=null===e||void 0===e||null===(d=e.inventory)||void 0===d?void 0:d.qty;r.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,o.Ey)(e)&&e({list:z(r,"name"),total:a,units:n})}},y=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.group_prod_stock};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId};const i=(0,o.I7)(s),t=await i;if(t){let r=(0,o._I)(t.comps),a=0,s=0,i=0,d=[],l=[];(0,o._2)(e).map((n=>{let c={...e[n]},u=("debit"===e[n].type?1:-1)*e[n].amount,v=1*(0,o.Zv)(u,2);if(a+=v,t.comps[e[n].comprobanteId]){c.inventory=t.comps[e[n].comprobanteId];let a=0;if((0,o._2)(t.comps[e[n].comprobanteId]).map((r=>{a=1*(0,o.Zv)(a,2)+1*(0,o.Zv)(t.comps[e[n].comprobanteId][r],2)})),a=a<0?-1*a:a,a=1*(0,o.Zv)(a,2),c.inventoryAmount=a,s+=a,v=v<0?-1*v:v,v-a!==0){i+=v-a,l.push(c)}else d.push(c);delete r[e[n].comprobanteId]}else i+=u,l.push(c)}));let c=0;(0,o._2)(r).map((e=>{let n=0;(0,o._2)(r[e]).map((a=>{n=1*(0,o.Zv)(n,2)+1*(0,o.Zv)(r[e][a],2)})),c+=n})),(0,o.Rz)("inv_comprobantes_compare",{hasError:l,success:d,inventoryBack:r}),(0,o.Ey)(n)&&n()}},m=async e=>{var n,r,a;let s={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.filter_search_opera};s.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,year:(0,o.bh)("date_current_year"),":account":null===(a=(0,o.bh)("global_account_params"))||void 0===a?void 0:a.inventory.account};const i=(0,o.I7)(s),t=await i;t&&!t.error&&(0,o.Ey)(e)&&e(z((0,o.jQ)(t),"date"))},f=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.all_prods};a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(a),i=await s;i&&((0,o.Rz)("products_list",z(i,"name")),(0,o.Rz)("products_ids",(0,o.ME)((0,o.jQ)(i),"productId")),e&&e())},Q=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.search_prod};if(a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,limit:120,year:(0,o.bh)("date_current_year")},(0,o.bh)("searchQry").length>1){(0,o.bh)("searchQry").split(" ").map(((e,n)=>{e&&(a.params[":search"+n]=e.trim())}));const n=(0,o.I7)(a),r=await n;r&&((0,o.Rz)("products_list",z((0,o.jQ)(r),"code")),e&&e())}else(0,o.Rz)("products_list",null),e&&e()},R=async e=>{var n,r;let a={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.all_entry_invoices};a.params={businessId:null===(r=(0,o.bh)("profileUser"))||void 0===r?void 0:r.businessId,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(a),i=await s;i&&((0,o.Rz)("movements_list",z(i,"date")),(0,o.Rz)("movements_ids",(0,o.ME)((0,o.jQ)(i),"inventoryId")),e&&e())},w=async e=>{var n;if((null===(n=(0,o.bh)("searchMovQry"))||void 0===n?void 0:n.length)>1){var r,a;let n={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.search_inventory};n.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search0":(0,o.bh)("searchMovQry"),year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(n),i=await s;i&&((0,o.Rz)("movements_list",function(e){var n={};let r=e&&(0,o._2)(e);r.length>0?r.map((r=>{let o=e[r];n[o.comprobanteId]||(n[o.comprobanteId]={},n[o.comprobanteId].amount=0,n[o.comprobanteId].document=o.document,n[o.comprobanteId].date=o.date,n[o.comprobanteId].comprobanteId=o.comprobanteId,n[o.comprobanteId].entriesInvoiceId=o.entriesInvoiceId,n[o.comprobanteId].products=[]),n[o.comprobanteId].amount+=o.qty*o.price,n[o.comprobanteId].products.push({productId:o.productId,qty:o.qty,price:o.price,inventoryId:o.inventoryId})})):n=null;return n}(i)),(0,o.Rz)("movements_ids",i),e&&e())}else(0,o.Rz)("movements_list",[]),(0,o.Rz)("movements_ids",{}),e&&e()};const z=function(e,n){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,o.MV)("sortProducts",[e],(()=>e&&e.sort(((e,o)=>{let a=e[n],s=o[n];return a<s?r?-1:1:a>s?r?1:-1:0}))))},U=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.rmv_area_location};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,areaLocationId:e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(s);await i&&n&&n()},g=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.rmv_inv_location};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,inventoryLocationId:e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(s);await i&&n&&n()},P=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.delete_prod};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(s);await i&&n&&n()},k=async(e,n)=>{var r,a;let s={...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.delete_inventory};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,inventoryId:e,year:(0,o.bh)("date_current_year")};const i=(0,o.I7)(s);await i&&n&&n()},O=async(e,n)=>{let r=[];e.map((e=>{var n,a;let s={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.delete_inventory};s.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,inventoryId:e,year:(0,o.bh)("date_current_year")},r.push(s)}));const a=r.map((async e=>{const n=(0,o.I7)(e);await n}));await Promise.all(a),n&&n()},S=async(e,n)=>{var r,a;({...null===(r=(0,o.bh)((0,o.hQ)()))||void 0===r?void 0:r.entry_invoice_acc_2}).params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,entriesInvoiceId:e,year:(0,o.bh)("date_current_year")}},j=(e,n)=>(0,o.MV)("rangeProdArr",[e,n],(()=>e?(0,o._2)(e).slice(0,n):[])),q=e=>{let n=[{id:null,label:"Location"}];return e&&(0,o._2)(e).map((r=>{var o,a;n.push({id:r,label:"".concat(null===(o=e[r])||void 0===o?void 0:o.areaId,"-").concat(null===(a=e[r])||void 0===a?void 0:a.location)})})),n},F=e=>{let n=[];return e&&(0,o._2)(e).map((r=>{var o;n.push({id:r,label:null===(o=e[r])||void 0===o?void 0:o.alphaCode})})),n}}}]);
//# sourceMappingURL=6245.5d165dc9.chunk.js.map