"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8361,9760],{9760:(e,s,o)=>{o.r(s),o.d(s,{CloseModal:()=>c,OpenModal:()=>r,default:()=>d});var t=o(2791),l=o(5408),i=o(2350),n=o(184);const a="listDialog_mdh392",d=()=>{const e=(0,i.bh)("listDialog")||{};(0,l.Z)(a);let s=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:s.map(((s,o)=>{let l=e[s];if(l&&l.visible){let e={};l.height&&(e.heigth=l.height),l.width,l.zIndex&&(e.zIndex=l.zIndex-1);let o={zIndex:l.zIndex},i=null,a=l.data;return l.content&&(i=t.cloneElement(l.content,{data:a})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:o,id:s,children:i})}),l.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(l.visible?"active":""),onClick:()=>{var e;e=s,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},s)}}))})},r=e=>{let s=(0,i.bh)("listDialog")||{},o=(0,i.M5)();s[o]||(s[o]={}),s[o].visible=!0;let t={};e.props?(t=e.props,t.modalID=o):t.modalID=o;let l=document.getElementsByTagName("body")[0];null!==l&&void 0!==l&&l.style&&(l.style.overflowY="hidden"),s[o].isView=e.isView,s[o].observeResize=e.observeResize,s[o].observeResize&&(s[o].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(o,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===s[o].width&&t.height===s[o].height||(s[o].height=t.height+10,s[o].width=t.width,(0,i.Rz)("listDialog",s),(0,i.wt)(a)))}),200)),s[o].display=!0,e.zIndex&&(s[o].zIndex=e.zIndex),e.height&&(s[o].height=e.height),e.width&&(s[o].width=e.width),e.content&&(s[o].content=e.content),s[o].data=t,(0,i.Rz)("listDialog",s),(0,i.wt)(a),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",o),(0,i.wt)(a)}),125)},c=e=>{let s=(0,i.bh)("listDialog")||{},o=e.id;if(s[o]){var t,l,n;s[o].observeResize&&s[o].observeInterval&&clearInterval(s[o].observeInterval),s[o].display=!1,null===(t=s[o])||void 0===t||null===(l=t.data)||void 0===l||null===(n=l.closeEvent)||void 0===n||n.call(l),(0,i.Rz)("listDialog",s),delete s[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((()=>{delete s[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},8361:(e,s,o)=>{o.r(s),o.d(s,{default:()=>u});var t=o(2791),l=o(2350),i=o(2647),n=(o(9760),o(7889),o(24)),a=o(713),d=o(4050),r=o(184);const c=(0,i.Vg)(),v=(0,n.vt)(),u=e=>{var s,o;let{data:i,elmId:n,updObs:u}=e;const[h,m]=(0,t.useState)(!1),[p,b]=(0,t.useState)(0),[I,y]=(0,t.useState)(0),[_,g]=(0,t.useState)(!1);(0,t.useEffect)((()=>{h||(m(!0),b((0,l.M5)()),(0,a.yk)(z),(0,d.Ht)("global_accounts","global_account_params",u))}));const f=()=>{},w=e=>{(0,a.yk)(z)},z=async(e,s)=>{b((0,l.M5)()),g(!1)};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"accounts_header",children:[(0,r.jsx)("h2",{children:"Production Voucher"}),(0,r.jsx)("div",{className:"_dsplFlx "})]}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,r.jsx)(c,{placeholder:"Buscar ....",width:560,obs:b,fetchData:e=>{g(!0),(0,a.yk)(z)},loading:_,change:e=>{!_&&g(!0)},callempty:w,keyFlds:"searchVoucherQry"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"total_comprobante_title",children:"No de Vouchers:"}),(0,r.jsx)("div",{className:"total_comprobante gray",children:(0,r.jsx)("span",{children:null===(s=(0,l._2)((0,l.bh)("vouchers_list")))||void 0===s?void 0:s.length})})]})]}),(0,r.jsx)("div",{className:"movements_container scollVh",children:(0,l.bh)("vouchers_list")&&(null===(o=(0,l._2)((0,l.bh)("vouchers_list")))||void 0===o?void 0:o.map((e=>(0,r.jsx)(v,{data:(0,l.bh)("vouchers_list")[e],elmId:e,openUpdateView:f,handleRefreshAll:w},e))))})]})}},713:(e,s,o)=>{o.d(s,{$P:()=>b,B8:()=>f,IR:()=>v,N0:()=>i,QJ:()=>p,Rd:()=>r,VI:()=>g,Ve:()=>m,WA:()=>_,ZW:()=>d,Zj:()=>I,fK:()=>n,g5:()=>l,ii:()=>h,nj:()=>y,qT:()=>c,qv:()=>u,yk:()=>a});var t=o(2350);const l={WH:"Almacen",PR:"Production",PT:"Patio"},i=async e=>{var s,o;let l={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.scan_area_location};l.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120};const i=(0,t.I7)(l),n=await i;n?((0,t.Rz)("locations_ids",n),(0,t.Rz)("locations_list",I((0,t.jQ)(n),"areaLocationId")),e&&e()):e&&e()},n=async(e,s)=>{var o,l;let i={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.scan_voucher_production};i.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,":search0":e};const n=(0,t.I7)(i),a=await n;a&&!a.error&&(0,t._2)(a)&&(0,t._2)(a).length>0?s&&s(a):s&&s(null)},a=async e=>{var s,o;let l={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.scan_voucher_production};if(l.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120},(0,t.bh)("searchVoucherQry")&&(0,t.bh)("searchVoucherQry").length>1){(0,t.bh)("searchVoucherQry").split(" ").map(((e,s)=>{e&&(l.params[":search"+s]=e.trim())}));const s=(0,t.I7)(l),o=await s;o&&((0,t.Rz)("voucher_production",o),(0,t.Rz)("vouchers_list",I((0,t.jQ)(o),"voucherId")),e&&e())}else(0,t.Rz)("vouchers_list",null),e&&e()},d=async(e,s)=>{var o,l;let i={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.get_inventory_prod};i.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,":productId":e};const n=(0,t.I7)(i),a=await n;a&&((0,t.Rz)("inv_products_list",I((0,t.jQ)(a.list),"name")),(0,t.Rz)("inv_products_stock",a.stock),s&&s())},r=async(e,s)=>{var o,l;let i={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.get_prod_stock};i.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,productId:e};const n=(0,t.I7)(i),a=await n;if(a){let o={...(0,t.bh)("products_stock")};o[e]=a.stock,(0,t.Rz)("products_stock",o),s&&s()}},c=async e=>{var s,o;let l={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.all_prods};l.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId},l.subQuerys={},l.subQuerys.stock=1;const i=(0,t.I7)(l),n=await i;if(n){let s={},o=[],l=0;n.map((e=>{var i;if(null!==e&&void 0!==e&&null!==(i=e.inventory)&&void 0!==i&&i.qty){var n,a,d;if(l+=1*(0,t.Zv)(null===e||void 0===e||null===(n=e.inventory)||void 0===n?void 0:n.amount,2),s[e.unit])s[e.unit]+=null===e||void 0===e||null===(a=e.inventory)||void 0===a?void 0:a.qty;else s[e.unit]=null===e||void 0===e||null===(d=e.inventory)||void 0===d?void 0:d.qty;o.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,t.Ey)(e)&&e({list:I(o,"name"),total:l,units:s})}},v=async(e,s)=>{var o,l;let i={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.group_prod_stock};i.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId};const n=(0,t.I7)(i),a=await n;if(a){let o=(0,t._I)(a.comps),l=0,i=0,n=0,d=[],r=[];(0,t._2)(e).map((s=>{let c={...e[s]},v=("debit"===e[s].type?1:-1)*e[s].amount,u=1*(0,t.Zv)(v,2);if(l+=u,a.comps[e[s].comprobanteId]){c.inventory=a.comps[e[s].comprobanteId];let l=0;if((0,t._2)(a.comps[e[s].comprobanteId]).map((o=>{l=1*(0,t.Zv)(l,2)+1*(0,t.Zv)(a.comps[e[s].comprobanteId][o],2)})),l=l<0?-1*l:l,l=1*(0,t.Zv)(l,2),c.inventoryAmount=l,i+=l,u=u<0?-1*u:u,u-l!==0){let e=u-l;n+=e,r.push(c),console.log("diff",c,u,l,e)}else d.push(c);delete o[e[s].comprobanteId]}else n+=v,r.push(c)}));let c=0;(0,t._2)(o).map((e=>{let s=0;(0,t._2)(o[e]).map((l=>{s=1*(0,t.Zv)(s,2)+1*(0,t.Zv)(o[e][l],2)})),c+=s})),console.log("inventoryBack",o,"inventoryBackTotal",c),(0,t.Rz)("inv_comprobantes_compare",{hasError:r,success:d,inventoryBack:o}),(0,t.Ey)(s)&&s()}},u=async e=>{var s,o,l;let i={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.filter_search_opera};i.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,t.bh)("date_current_year"),":account":null===(l=(0,t.bh)("global_account_params"))||void 0===l?void 0:l.inventory.account};const n=(0,t.I7)(i),a=await n;a&&!a.error&&(0,t.Ey)(e)&&e(I((0,t.jQ)(a),"date"))},h=async e=>{var s,o;let l={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.all_prods};l.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId};const i=(0,t.I7)(l),n=await i;n&&((0,t.Rz)("products_list",I(n,"name")),(0,t.Rz)("products_ids",(0,t.ME)((0,t.jQ)(n),"productId")),e&&e())},m=async e=>{var s,o;let l={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.search_prod};if(l.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120},(0,t.bh)("searchQry").length>1){(0,t.bh)("searchQry").split(" ").map(((e,s)=>{e&&(l.params[":search"+s]=e.trim())}));const s=(0,t.I7)(l),o=await s;o&&((0,t.Rz)("products_list",I((0,t.jQ)(o),"code")),e&&e())}else(0,t.Rz)("products_list",null),e&&e()},p=async e=>{var s,o;let l={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.all_entry_invoices};l.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId};const i=(0,t.I7)(l),n=await i;n&&((0,t.Rz)("movements_list",I(n,"date")),(0,t.Rz)("movements_ids",(0,t.ME)((0,t.jQ)(n),"inventoryId")),e&&e())},b=async e=>{var s;if((null===(s=(0,t.bh)("searchMovQry"))||void 0===s?void 0:s.length)>1){var o,l;let s={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.search_inventory};s.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,":search0":(0,t.bh)("searchMovQry")};const i=(0,t.I7)(s),n=await i;n&&((0,t.Rz)("movements_list",function(e){var s={};let o=e&&(0,t._2)(e);o.length>0?o.map((o=>{let t=e[o];s[t.comprobanteId]||(s[t.comprobanteId]={},s[t.comprobanteId].amount=0,s[t.comprobanteId].document=t.document,s[t.comprobanteId].date=t.date,s[t.comprobanteId].comprobanteId=t.comprobanteId,s[t.comprobanteId].products=[]),s[t.comprobanteId].amount+=t.qty*t.price,s[t.comprobanteId].products.push({productId:t.productId,qty:t.qty,price:t.price,inventoryId:t.inventoryId})})):s=null;return s}(n)),(0,t.Rz)("movements_ids",n),e&&e())}else(0,t.Rz)("movements_list",[]),(0,t.Rz)("movements_ids",{}),e&&e()};const I=(e,s)=>(0,t.MV)("sortProducts",[e],(()=>e&&e.sort(((e,o)=>{let t=e[s],l=o[s];return t<l?-1:t>l?1:0})))),y=async(e,s)=>{var o,l;let i={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.delete_prod};i.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,productId:e};const n=(0,t.I7)(i);await n&&s&&s()},_=async(e,s)=>{var o,l;let i={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.delete_inventory};i.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,inventoryId:e};const n=(0,t.I7)(i);await n&&s&&s()},g=async(e,s)=>{var o,l;({...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.entry_invoice_acc_2}).params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,entriesInvoiceId:e}},f=(e,s)=>(0,t.MV)("rangeProdArr",[e,s],(()=>e?(0,t._2)(e).slice(0,s):[]))},7889:()=>{}}]);
//# sourceMappingURL=8361.2b098a6e.chunk.js.map