"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9118,9760],{9760:(e,t,s)=>{s.r(t),s.d(t,{CloseModal:()=>c,OpenModal:()=>r,default:()=>d});var o=s(2791),i=s(5408),n=s(2350),l=s(184);const a="listDialog_mdh392",d=()=>{const e=(0,n.bh)("listDialog")||{};(0,i.Z)(a);let t=Object.keys(e);return(0,l.jsx)(l.Fragment,{children:t.map(((t,s)=>{let i=e[t];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let s={zIndex:i.zIndex},n=null,a=i.data;return i.content&&(n=o.cloneElement(i.content,{data:a})),(0,l.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,l.jsx)("div",{className:"ltr-hoe9xz",children:(0,l.jsx)("div",{className:"ltr-1wao6ny",style:s,id:t,children:n})}),i.data.overlay?(0,l.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},r=e=>{let t=(0,n.bh)("listDialog")||{},s=(0,n.M5)();t[s]||(t[s]={}),t[s].visible=!0;let o={};e.props?(o=e.props,o.modalID=s):o.modalID=s;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),t[s].isView=e.isView,t[s].observeResize=e.observeResize,t[s].observeResize&&(t[s].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(s,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===t[s].width&&o.height===t[s].height||(t[s].height=o.height+10,t[s].width=o.width,(0,n.Rz)("listDialog",t),(0,n.wt)(a)))}),200)),t[s].display=!0,e.zIndex&&(t[s].zIndex=e.zIndex),e.height&&(t[s].height=e.height),e.width&&(t[s].width=e.width),e.content&&(t[s].content=e.content),t[s].data=o,(0,n.Rz)("listDialog",t),(0,n.wt)(a),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,n.Rz)("modalOpen",s),(0,n.wt)(a)}),125)},c=e=>{let t=(0,n.bh)("listDialog")||{},s=e.id;if(t[s]){var o,i,l;t[s].observeResize&&t[s].observeInterval&&clearInterval(t[s].observeInterval),t[s].display=!1,null===(o=t[s])||void 0===o||null===(i=o.data)||void 0===i||null===(l=i.closeEvent)||void 0===l||l.call(i),(0,n.Rz)("listDialog",t),delete t[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,n.wt)(a),setTimeout((()=>{delete t[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,n.Rz)("modalOpen",null)}),750)}}},9118:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var o=s(2791),i=s(2350),n=s(2647),l=(s(9760),s(7889),s(24)),a=s(713),d=s(4050),r=s(184);(0,n.Vg)(),(0,l.Qz)();const c=(0,l.B1)(),v=(0,n.DK)(),u=(0,l.FB)(),h=(0,l.vM)(),m=e=>{let{data:t,elmId:s,updObs:n}=e;const[l,m]=(0,o.useState)(!1),[b,I]=(0,o.useState)(0),[y,_]=(0,o.useState)(1),[g,w]=(0,o.useState)(!1);(0,o.useEffect)((()=>{l||(m(!0),I((0,i.M5)()),(0,a.ii)(n),(0,d.Ht)("global_accounts","global_account_params",n))}));return(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(v,{indexTab:y,data:[{key:1,label:"Movements"},{key:2,label:"Products"},{key:3,label:"Vouchers"}],updateIndex:_}),(0,r.jsx)(p,{viewId:1,activeView:y,children:(0,r.jsx)(h,{})}),(0,r.jsx)(p,{viewId:2,activeView:y,children:(0,r.jsx)(u,{})}),(0,r.jsx)(p,{viewId:3,activeView:y,children:(0,r.jsx)(c,{})})]})},p=e=>{let{viewId:t,activeView:s,children:o}=e;return(0,r.jsx)("div",{className:"opacityView",style:{opacity:t===s?1:0},children:t===s?o:null})}},713:(e,t,s)=>{s.d(t,{$P:()=>h,B8:()=>y,IR:()=>d,QJ:()=>u,Rd:()=>l,VI:()=>I,Ve:()=>v,WA:()=>b,ZW:()=>n,Zj:()=>m,ii:()=>c,nj:()=>p,qT:()=>a,qv:()=>r,yk:()=>i});var o=s(2350);const i=async e=>{var t,s;let i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.scan_voucher_production};if(i.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,limit:120},(0,o.bh)("searchVoucherQry")&&(0,o.bh)("searchVoucherQry").length>1){(0,o.bh)("searchVoucherQry").split(" ").map(((e,t)=>{e&&(i.params[":search"+t]=e.trim())}));const t=(0,o.I7)(i),s=await t;s&&((0,o.Rz)("voucher_production",s),(0,o.Rz)("vouchers_list",m((0,o.jQ)(s),"voucherId")),e&&e())}else(0,o.Rz)("vouchers_list",null),e&&e()},n=async(e,t)=>{var s,i;let n={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.get_inventory_prod};n.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":productId":e};const l=(0,o.I7)(n),a=await l;a&&((0,o.Rz)("inv_products_list",m((0,o.jQ)(a.list),"name")),(0,o.Rz)("inv_products_stock",a.stock),t&&t())},l=async(e,t)=>{var s,i;let n={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.get_prod_stock};n.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,productId:e};const l=(0,o.I7)(n),a=await l;if(a){let s={...(0,o.bh)("products_stock")};s[e]=a.stock,(0,o.Rz)("products_stock",s),t&&t()}},a=async e=>{var t,s;let i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.all_prods};i.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId},i.subQuerys={},i.subQuerys.stock=1;const n=(0,o.I7)(i),l=await n;if(l){let t={},s=[],i=0;l.map((e=>{var n;if(null!==e&&void 0!==e&&null!==(n=e.inventory)&&void 0!==n&&n.qty){var l,a,d;if(i+=1*(0,o.Zv)(null===e||void 0===e||null===(l=e.inventory)||void 0===l?void 0:l.amount,2),t[e.unit])t[e.unit]+=null===e||void 0===e||null===(a=e.inventory)||void 0===a?void 0:a.qty;else t[e.unit]=null===e||void 0===e||null===(d=e.inventory)||void 0===d?void 0:d.qty;s.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,o.Ey)(e)&&e({list:m(s,"name"),total:i,units:t})}},d=async(e,t)=>{var s,i;let n={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.group_prod_stock};n.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId};const l=(0,o.I7)(n),a=await l;if(a){let s=(0,o._I)(a.comps),i=0,n=0,l=0,d=[],r=[];(0,o._2)(e).map((t=>{let c={...e[t]},v=("debit"===e[t].type?1:-1)*e[t].amount,u=1*(0,o.Zv)(v,2);if(i+=u,a.comps[e[t].comprobanteId]){c.inventory=a.comps[e[t].comprobanteId];let i=0;if((0,o._2)(a.comps[e[t].comprobanteId]).map((s=>{i=1*(0,o.Zv)(i,2)+1*(0,o.Zv)(a.comps[e[t].comprobanteId][s],2)})),i=i<0?-1*i:i,i=1*(0,o.Zv)(i,2),c.inventoryAmount=i,n+=i,u=u<0?-1*u:u,u-i!==0){let e=u-i;l+=e,r.push(c),console.log("diff",c,u,i,e)}else d.push(c);delete s[e[t].comprobanteId]}else l+=v,r.push(c)}));let c=0;(0,o._2)(s).map((e=>{let t=0;(0,o._2)(s[e]).map((i=>{t=1*(0,o.Zv)(t,2)+1*(0,o.Zv)(s[e][i],2)})),c+=t})),console.log("inventoryBack",s,"inventoryBackTotal",c),(0,o.Rz)("inv_comprobantes_compare",{hasError:r,success:d,inventoryBack:s}),(0,o.Ey)(t)&&t()}},r=async e=>{var t,s,i;let n={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.filter_search_opera};n.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,year:(0,o.bh)("date_current_year"),":account":null===(i=(0,o.bh)("global_account_params"))||void 0===i?void 0:i.inventory.account};const l=(0,o.I7)(n),a=await l;a&&!a.error&&(0,o.Ey)(e)&&e(m((0,o.jQ)(a),"date"))},c=async e=>{var t,s;let i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.all_prods};i.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId};const n=(0,o.I7)(i),l=await n;l&&((0,o.Rz)("products_list",m(l,"name")),(0,o.Rz)("products_ids",(0,o.ME)((0,o.jQ)(l),"productId")),e&&e())},v=async e=>{var t,s;let i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_prod};if(i.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,limit:120},(0,o.bh)("searchQry").length>1){(0,o.bh)("searchQry").split(" ").map(((e,t)=>{e&&(i.params[":search"+t]=e.trim())}));const t=(0,o.I7)(i),s=await t;s&&((0,o.Rz)("products_list",m((0,o.jQ)(s),"code")),e&&e())}else(0,o.Rz)("products_list",null),e&&e()},u=async e=>{var t,s;let i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.all_entry_invoices};i.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId};const n=(0,o.I7)(i),l=await n;l&&((0,o.Rz)("movements_list",m(l,"date")),(0,o.Rz)("movements_ids",(0,o.ME)((0,o.jQ)(l),"inventoryId")),e&&e())},h=async e=>{var t;if((null===(t=(0,o.bh)("searchMovQry"))||void 0===t?void 0:t.length)>1){var s,i;let t={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.search_inventory};t.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":(0,o.bh)("searchMovQry")};const n=(0,o.I7)(t),l=await n;l&&((0,o.Rz)("movements_list",function(e){var t={};let s=e&&(0,o._2)(e);s.length>0?s.map((s=>{let o=e[s];t[o.comprobanteId]||(t[o.comprobanteId]={},t[o.comprobanteId].amount=0,t[o.comprobanteId].document=o.document,t[o.comprobanteId].date=o.date,t[o.comprobanteId].comprobanteId=o.comprobanteId,t[o.comprobanteId].products=[]),t[o.comprobanteId].amount+=o.qty*o.price,t[o.comprobanteId].products.push({productId:o.productId,qty:o.qty,price:o.price,inventoryId:o.inventoryId})})):t=null;return t}(l)),(0,o.Rz)("movements_ids",l),e&&e())}else(0,o.Rz)("movements_list",[]),(0,o.Rz)("movements_ids",{}),e&&e()};const m=(e,t)=>(0,o.MV)("sortProducts",[e],(()=>e&&e.sort(((e,s)=>{let o=e[t],i=s[t];return o<i?-1:o>i?1:0})))),p=async(e,t)=>{var s,i;let n={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.delete_prod};n.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,productId:e};const l=(0,o.I7)(n);await l&&t&&t()},b=async(e,t)=>{var s,i;let n={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.delete_inventory};n.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,inventoryId:e};const l=(0,o.I7)(n);await l&&t&&t()},I=async(e,t)=>{var s,i;({...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.entry_invoice_acc_2}).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,entriesInvoiceId:e}},y=(e,t)=>(0,o.MV)("rangeProdArr",[e,t],(()=>e?(0,o._2)(e).slice(0,t):[]))},7889:()=>{}}]);
//# sourceMappingURL=9118.42102a87.chunk.js.map