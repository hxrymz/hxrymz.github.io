"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8639,9760],{9760:(e,s,t)=>{t.r(s),t.d(s,{CloseModal:()=>c,OpenModal:()=>d,default:()=>r});var o=t(2791),i=t(5408),l=t(2350),n=t(184);const a="listDialog_mdh392",r=()=>{const e=(0,l.bh)("listDialog")||{};(0,i.Z)(a);let s=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:s.map(((s,t)=>{let i=e[s];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let t={zIndex:i.zIndex},l=null,a=i.data;return i.content&&(l=o.cloneElement(i.content,{data:a})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:t,id:s,children:l})}),i.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=s,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},s)}}))})},d=e=>{let s=(0,l.bh)("listDialog")||{},t=(0,l.M5)();s[t]||(s[t]={}),s[t].visible=!0;let o={};e.props?(o=e.props,o.modalID=t):o.modalID=t;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),s[t].isView=e.isView,s[t].observeResize=e.observeResize,s[t].observeResize&&(s[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===s[t].width&&o.height===s[t].height||(s[t].height=o.height+10,s[t].width=o.width,(0,l.Rz)("listDialog",s),(0,l.wt)(a)))}),200)),s[t].display=!0,e.zIndex&&(s[t].zIndex=e.zIndex),e.height&&(s[t].height=e.height),e.width&&(s[t].width=e.width),e.content&&(s[t].content=e.content),s[t].data=o,(0,l.Rz)("listDialog",s),(0,l.wt)(a),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,l.Rz)("modalOpen",t),(0,l.wt)(a)}),125)},c=e=>{let s=(0,l.bh)("listDialog")||{},t=e.id;if(s[t]){var o,i,n;s[t].observeResize&&s[t].observeInterval&&clearInterval(s[t].observeInterval),s[t].display=!1,null===(o=s[t])||void 0===o||null===(i=o.data)||void 0===i||null===(n=i.closeEvent)||void 0===n||n.call(i),(0,l.Rz)("listDialog",s),delete s[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,l.wt)(a),setTimeout((()=>{delete s[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,l.Rz)("modalOpen",null)}),750)}}},8639:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var o=t(2791),i=(t(1534),t(2350)),l=t(713),n=t(7689),a=t(9760),r=t(2647),d=t(1087),c=t(184);const v=(0,r.PU)(),u=(0,r.YZ)(),h=e=>{let{data:s,item:t}=e;const[r,d]=(0,o.useState)(!1),[v,h]=(0,o.useState)(0),[p,b]=(0,o.useState)(0),I=e=>{(0,l.IR)(e,_)};(0,o.useEffect)((()=>{r||(d(!0),_(),(0,l.qv)(I))}));const _=()=>{h((0,i.M5)())},y=((0,n.s0)(),e=>{(0,a.CloseModal)({id:s.modalID})});let g=(0,i.bh)("inv_comprobantes_compare"),x=null===g||void 0===g?void 0:g.hasError;return(0,c.jsxs)("div",{style:{maxHeight:"86vh",width:"1080px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"16px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"title_collect",children:"Comparacion Inventario y la cuenta de Inventario "}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:12},children:[(0,c.jsx)(u,{initvalue:p,keyCode:77,updChange:e=>b(e)}),(0,c.jsx)("span",{className:"checklabel",children:"Differencia mayor 1$"})]})]}),(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{marginTop:14},children:[(0,c.jsx)("div",{className:"tr_bar_5"}),(0,c.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,c.jsx)("div",{className:"tr_bar_15",children:"Date"}),(0,c.jsx)("div",{className:"tr_bar_20",children:"Document"}),(0,c.jsx)("div",{className:"tr_bar_15",children:"Amount"}),(0,c.jsx)("div",{className:"tr_bar_15",children:"Inventory Amount"}),(0,c.jsx)("div",{className:"tr_bar_15",children:"Difference"})]}),(0,c.jsx)("div",{className:"scollVh subMHeight",style:{height:"calc(85vh - 96px)"},children:x&&(null===x||void 0===x?void 0:x.map((e=>(0,c.jsx)(m,{element:e,idKey:e.inventoryId,close:y,ignoreSamllDiff:p},e.operationId))))})]})},m=e=>{let{element:s,idKey:t,close:o,ignoreSamllDiff:l}=e;let n=s.inventory,a=1*s.amount-1*s.inventoryAmount,r=a.toFixed(2);return l&&(a=a<0?-1*a:a,a<1)?null:(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,c.jsx)("div",{className:"icon_compr tr_bar_5",children:(0,c.jsx)(v,{name:n?"money":"alert",color:n?"var(--hrm_palette-color-orange-800)":"#c62828"})}),(0,c.jsx)("div",{className:"tr_bar_15 comprobante_id",onClick:()=>o(),children:(0,c.jsx)(d.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(s.comprobanteId)},children:s.comprobanteId})}),(0,c.jsx)("div",{className:"tr_bar_15",children:s.date&&(0,i.sJ)(s.date)}),(0,c.jsx)("div",{className:"tr_bar_20",children:s.document}),(0,c.jsx)("div",{className:"tr_bar_15",children:(0,i.fY)((1*s.amount).toFixed(2))}),(0,c.jsx)("div",{className:"tr_bar_15",children:(0,i.fY)(1*s.inventoryAmount)}),(0,c.jsx)("div",{className:"tr_bar_15",children:(0,i.fY)(1*r)}),(0,c.jsx)("div",{className:""})]})}},713:(e,s,t)=>{t.d(s,{$P:()=>b,B8:()=>x,IR:()=>v,N0:()=>l,QJ:()=>p,Rd:()=>d,VI:()=>g,Ve:()=>m,WA:()=>y,ZW:()=>r,Zj:()=>I,fK:()=>n,g5:()=>i,ii:()=>h,nj:()=>_,qT:()=>c,qv:()=>u,yk:()=>a});var o=t(2350);const i={WH:"Almacen",PR:"Production",PT:"Patio"},l=async e=>{var s,t;let i={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.scan_area_location};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,limit:120};const l=(0,o.I7)(i),n=await l;n?((0,o.Rz)("locations_ids",n),(0,o.Rz)("locations_list",I((0,o.jQ)(n),"areaLocationId")),e&&e()):e&&e()},n=async(e,s)=>{var t,i;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.scan_voucher_production};l.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":e};const n=(0,o.I7)(l),a=await n;a&&!a.error&&(0,o._2)(a)&&(0,o._2)(a).length>0?s&&s(a):s&&s(null)},a=async e=>{var s,t;let i={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.scan_voucher_production};if(i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,limit:120},(0,o.bh)("searchVoucherQry")&&(0,o.bh)("searchVoucherQry").length>1){(0,o.bh)("searchVoucherQry").split(" ").map(((e,s)=>{e&&(i.params[":search"+s]=e.trim())}));const s=(0,o.I7)(i),t=await s;t&&((0,o.Rz)("voucher_production",t),(0,o.Rz)("vouchers_list",I((0,o.jQ)(t),"voucherId")),e&&e())}else(0,o.Rz)("vouchers_list",null),e&&e()},r=async(e,s)=>{var t,i;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.get_inventory_prod};l.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":productId":e};const n=(0,o.I7)(l),a=await n;a&&((0,o.Rz)("inv_products_list",I((0,o.jQ)(a.list),"name")),(0,o.Rz)("inv_products_stock",a.stock),s&&s())},d=async(e,s)=>{var t,i;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.get_prod_stock};l.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,productId:e};const n=(0,o.I7)(l),a=await n;if(a){let t={...(0,o.bh)("products_stock")};t[e]=a.stock,(0,o.Rz)("products_stock",t),s&&s()}},c=async e=>{var s,t;let i={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.all_prods};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId},i.subQuerys={},i.subQuerys.stock=1;const l=(0,o.I7)(i),n=await l;if(n){let s={},t=[],i=0;n.map((e=>{var l;if(null!==e&&void 0!==e&&null!==(l=e.inventory)&&void 0!==l&&l.qty){var n,a,r;if(i+=1*(0,o.Zv)(null===e||void 0===e||null===(n=e.inventory)||void 0===n?void 0:n.amount,2),s[e.unit])s[e.unit]+=null===e||void 0===e||null===(a=e.inventory)||void 0===a?void 0:a.qty;else s[e.unit]=null===e||void 0===e||null===(r=e.inventory)||void 0===r?void 0:r.qty;t.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,o.Ey)(e)&&e({list:I(t,"name"),total:i,units:s})}},v=async(e,s)=>{var t,i;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.group_prod_stock};l.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId};const n=(0,o.I7)(l),a=await n;if(a){let t=(0,o._I)(a.comps),i=0,l=0,n=0,r=[],d=[];(0,o._2)(e).map((s=>{let c={...e[s]},v=("debit"===e[s].type?1:-1)*e[s].amount,u=1*(0,o.Zv)(v,2);if(i+=u,a.comps[e[s].comprobanteId]){c.inventory=a.comps[e[s].comprobanteId];let i=0;if((0,o._2)(a.comps[e[s].comprobanteId]).map((t=>{i=1*(0,o.Zv)(i,2)+1*(0,o.Zv)(a.comps[e[s].comprobanteId][t],2)})),i=i<0?-1*i:i,i=1*(0,o.Zv)(i,2),c.inventoryAmount=i,l+=i,u=u<0?-1*u:u,u-i!==0){let e=u-i;n+=e,d.push(c),console.log("diff",c,u,i,e)}else r.push(c);delete t[e[s].comprobanteId]}else n+=v,d.push(c)}));let c=0;(0,o._2)(t).map((e=>{let s=0;(0,o._2)(t[e]).map((i=>{s=1*(0,o.Zv)(s,2)+1*(0,o.Zv)(t[e][i],2)})),c+=s})),console.log("inventoryBack",t,"inventoryBackTotal",c),(0,o.Rz)("inv_comprobantes_compare",{hasError:d,success:r,inventoryBack:t}),(0,o.Ey)(s)&&s()}},u=async e=>{var s,t,i;let l={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.filter_search_opera};l.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,o.bh)("date_current_year"),":account":null===(i=(0,o.bh)("global_account_params"))||void 0===i?void 0:i.inventory.account};const n=(0,o.I7)(l),a=await n;a&&!a.error&&(0,o.Ey)(e)&&e(I((0,o.jQ)(a),"date"))},h=async e=>{var s,t;let i={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.all_prods};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId};const l=(0,o.I7)(i),n=await l;n&&((0,o.Rz)("products_list",I(n,"name")),(0,o.Rz)("products_ids",(0,o.ME)((0,o.jQ)(n),"productId")),e&&e())},m=async e=>{var s,t;let i={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.search_prod};if(i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,limit:120},(0,o.bh)("searchQry").length>1){(0,o.bh)("searchQry").split(" ").map(((e,s)=>{e&&(i.params[":search"+s]=e.trim())}));const s=(0,o.I7)(i),t=await s;t&&((0,o.Rz)("products_list",I((0,o.jQ)(t),"code")),e&&e())}else(0,o.Rz)("products_list",null),e&&e()},p=async e=>{var s,t;let i={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.all_entry_invoices};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId};const l=(0,o.I7)(i),n=await l;n&&((0,o.Rz)("movements_list",I(n,"date")),(0,o.Rz)("movements_ids",(0,o.ME)((0,o.jQ)(n),"inventoryId")),e&&e())},b=async e=>{var s;if((null===(s=(0,o.bh)("searchMovQry"))||void 0===s?void 0:s.length)>1){var t,i;let s={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_inventory};s.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":(0,o.bh)("searchMovQry")};const l=(0,o.I7)(s),n=await l;n&&((0,o.Rz)("movements_list",function(e){var s={};let t=e&&(0,o._2)(e);t.length>0?t.map((t=>{let o=e[t];s[o.comprobanteId]||(s[o.comprobanteId]={},s[o.comprobanteId].amount=0,s[o.comprobanteId].document=o.document,s[o.comprobanteId].date=o.date,s[o.comprobanteId].comprobanteId=o.comprobanteId,s[o.comprobanteId].products=[]),s[o.comprobanteId].amount+=o.qty*o.price,s[o.comprobanteId].products.push({productId:o.productId,qty:o.qty,price:o.price,inventoryId:o.inventoryId})})):s=null;return s}(n)),(0,o.Rz)("movements_ids",n),e&&e())}else(0,o.Rz)("movements_list",[]),(0,o.Rz)("movements_ids",{}),e&&e()};const I=(e,s)=>(0,o.MV)("sortProducts",[e],(()=>e&&e.sort(((e,t)=>{let o=e[s],i=t[s];return o<i?-1:o>i?1:0})))),_=async(e,s)=>{var t,i;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.delete_prod};l.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,productId:e};const n=(0,o.I7)(l);await n&&s&&s()},y=async(e,s)=>{var t,i;let l={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.delete_inventory};l.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,inventoryId:e};const n=(0,o.I7)(l);await n&&s&&s()},g=async(e,s)=>{var t,i;({...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.entry_invoice_acc_2}).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,entriesInvoiceId:e}},x=(e,s)=>(0,o.MV)("rangeProdArr",[e,s],(()=>e?(0,o._2)(e).slice(0,s):[]))},1534:()=>{}}]);
//# sourceMappingURL=8639.9a1992af.chunk.js.map