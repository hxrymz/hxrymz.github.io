"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3500],{7852:(s,e,o)=>{o.d(e,{Z:()=>a});o(2791),o(1534);var i=o(9760),n=o(184);const a=s=>{let{data:e,confirm:o,handleClick:a,close:d}=s;const{modalID:l}=e;return(0,n.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsx)("div",{className:"_dsplFlx ",children:(0,n.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,i.CloseModal)({id:l})},children:"OK"})]})]})}},8779:(s,e,o)=>{o.d(e,{Z:()=>a});o(2791),o(1534);var i=o(9760),n=o(184);const a=s=>{let{data:e,confirm:o,label:a,close:d}=s;const{modalID:l}=e,r=s=>{(0,i.CloseModal)({id:l})};return(0,n.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",children:a}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsx)("div",{className:"_dsplFlx ",children:(0,n.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("p",{className:"group_title addBtn",onClick:r,children:"Cancelar"}),(0,n.jsx)("p",{className:"group_title addBtn red",onClick:()=>{o(),r()},children:"Eliminar"})]})]})}},713:(s,e,o)=>{o.d(e,{$P:()=>h,B8:()=>y,IR:()=>t,QJ:()=>p,Rd:()=>l,VI:()=>_,Ve:()=>u,WA:()=>I,ZW:()=>d,Zj:()=>m,fK:()=>n,ii:()=>v,nj:()=>b,qT:()=>r,qv:()=>c,yk:()=>a});var i=o(2350);const n=async(s,e)=>{var o,n;let a={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.scan_voucher_production};a.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,":search0":s};const d=(0,i.I7)(a),l=await d;l&&!l.error&&(0,i._2)(l)&&(0,i._2)(l).length>0?e&&e(l):e&&e(null)},a=async s=>{var e,o;let n={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.scan_voucher_production};if(n.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120},(0,i.bh)("searchVoucherQry")&&(0,i.bh)("searchVoucherQry").length>1){(0,i.bh)("searchVoucherQry").split(" ").map(((s,e)=>{s&&(n.params[":search"+e]=s.trim())}));const e=(0,i.I7)(n),o=await e;o&&((0,i.Rz)("voucher_production",o),(0,i.Rz)("vouchers_list",m((0,i.jQ)(o),"voucherId")),s&&s())}else(0,i.Rz)("vouchers_list",null),s&&s()},d=async(s,e)=>{var o,n;let a={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.get_inventory_prod};a.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,":productId":s};const d=(0,i.I7)(a),l=await d;l&&((0,i.Rz)("inv_products_list",m((0,i.jQ)(l.list),"name")),(0,i.Rz)("inv_products_stock",l.stock),e&&e())},l=async(s,e)=>{var o,n;let a={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.get_prod_stock};a.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,productId:s};const d=(0,i.I7)(a),l=await d;if(l){let o={...(0,i.bh)("products_stock")};o[s]=l.stock,(0,i.Rz)("products_stock",o),e&&e()}},r=async s=>{var e,o;let n={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.all_prods};n.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId},n.subQuerys={},n.subQuerys.stock=1;const a=(0,i.I7)(n),d=await a;if(d){let e={},o=[],n=0;d.map((s=>{var a;if(null!==s&&void 0!==s&&null!==(a=s.inventory)&&void 0!==a&&a.qty){var d,l,r;if(n+=1*(0,i.Zv)(null===s||void 0===s||null===(d=s.inventory)||void 0===d?void 0:d.amount,2),e[s.unit])e[s.unit]+=null===s||void 0===s||null===(l=s.inventory)||void 0===l?void 0:l.qty;else e[s.unit]=null===s||void 0===s||null===(r=s.inventory)||void 0===r?void 0:r.qty;o.push({productId:s.productId,name:s.name,unit:s.unit,qty:(1*s.inventory.qty).toFixed(2),amount:(1*s.inventory.amount).toFixed(2),cost:(s.inventory.amount/s.inventory.qty*1).toFixed(2)})}})),(0,i.Ey)(s)&&s({list:m(o,"name"),total:n,units:e})}},t=async(s,e)=>{var o,n;let a={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.group_prod_stock};a.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId};const d=(0,i.I7)(a),l=await d;if(l){let o=(0,i._I)(l.comps),n=0,a=0,d=0,r=[],t=[];(0,i._2)(s).map((e=>{let c={...s[e]},v=("debit"===s[e].type?1:-1)*s[e].amount,u=1*(0,i.Zv)(v,2);if(n+=u,l.comps[s[e].comprobanteId]){c.inventory=l.comps[s[e].comprobanteId];let n=0;if((0,i._2)(l.comps[s[e].comprobanteId]).map((o=>{n=1*(0,i.Zv)(n,2)+1*(0,i.Zv)(l.comps[s[e].comprobanteId][o],2)})),n=n<0?-1*n:n,n=1*(0,i.Zv)(n,2),c.inventoryAmount=n,a+=n,u=u<0?-1*u:u,u-n!==0){let s=u-n;d+=s,t.push(c),console.log("diff",c,u,n,s)}else r.push(c);delete o[s[e].comprobanteId]}else d+=v,t.push(c)}));let c=0;(0,i._2)(o).map((s=>{let e=0;(0,i._2)(o[s]).map((n=>{e=1*(0,i.Zv)(e,2)+1*(0,i.Zv)(o[s][n],2)})),c+=e})),console.log("inventoryBack",o,"inventoryBackTotal",c),(0,i.Rz)("inv_comprobantes_compare",{hasError:t,success:r,inventoryBack:o}),(0,i.Ey)(e)&&e()}},c=async s=>{var e,o,n;let a={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.filter_search_opera};a.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,i.bh)("date_current_year"),":account":null===(n=(0,i.bh)("global_account_params"))||void 0===n?void 0:n.inventory.account};const d=(0,i.I7)(a),l=await d;l&&!l.error&&(0,i.Ey)(s)&&s(m((0,i.jQ)(l),"date"))},v=async s=>{var e,o;let n={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.all_prods};n.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId};const a=(0,i.I7)(n),d=await a;d&&((0,i.Rz)("products_list",m(d,"name")),(0,i.Rz)("products_ids",(0,i.ME)((0,i.jQ)(d),"productId")),s&&s())},u=async s=>{var e,o;let n={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.search_prod};if(n.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120},(0,i.bh)("searchQry").length>1){(0,i.bh)("searchQry").split(" ").map(((s,e)=>{s&&(n.params[":search"+e]=s.trim())}));const e=(0,i.I7)(n),o=await e;o&&((0,i.Rz)("products_list",m((0,i.jQ)(o),"code")),s&&s())}else(0,i.Rz)("products_list",null),s&&s()},p=async s=>{var e,o;let n={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.all_entry_invoices};n.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId};const a=(0,i.I7)(n),d=await a;d&&((0,i.Rz)("movements_list",m(d,"date")),(0,i.Rz)("movements_ids",(0,i.ME)((0,i.jQ)(d),"inventoryId")),s&&s())},h=async s=>{var e;if((null===(e=(0,i.bh)("searchMovQry"))||void 0===e?void 0:e.length)>1){var o,n;let e={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.search_inventory};e.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,":search0":(0,i.bh)("searchMovQry")};const a=(0,i.I7)(e),d=await a;d&&((0,i.Rz)("movements_list",function(s){var e={};let o=s&&(0,i._2)(s);o.length>0?o.map((o=>{let i=s[o];e[i.comprobanteId]||(e[i.comprobanteId]={},e[i.comprobanteId].amount=0,e[i.comprobanteId].document=i.document,e[i.comprobanteId].date=i.date,e[i.comprobanteId].comprobanteId=i.comprobanteId,e[i.comprobanteId].products=[]),e[i.comprobanteId].amount+=i.qty*i.price,e[i.comprobanteId].products.push({productId:i.productId,qty:i.qty,price:i.price,inventoryId:i.inventoryId})})):e=null;return e}(d)),(0,i.Rz)("movements_ids",d),s&&s())}else(0,i.Rz)("movements_list",[]),(0,i.Rz)("movements_ids",{}),s&&s()};const m=(s,e)=>(0,i.MV)("sortProducts",[s],(()=>s&&s.sort(((s,o)=>{let i=s[e],n=o[e];return i<n?-1:i>n?1:0})))),b=async(s,e)=>{var o,n;let a={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.delete_prod};a.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,productId:s};const d=(0,i.I7)(a);await d&&e&&e()},I=async(s,e)=>{var o,n;let a={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.delete_inventory};a.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,inventoryId:s};const d=(0,i.I7)(a);await d&&e&&e()},_=async(s,e)=>{var o,n;({...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.entry_invoice_acc_2}).params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,entriesInvoiceId:s}},y=(s,e)=>(0,i.MV)("rangeProdArr",[s,e],(()=>s?(0,i._2)(s).slice(0,e):[]))},7889:()=>{},1534:()=>{}}]);
//# sourceMappingURL=3500.5b2bf876.chunk.js.map