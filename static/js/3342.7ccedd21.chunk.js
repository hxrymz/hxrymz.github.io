"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3342,9760],{9760:(e,s,l)=>{l.r(s),l.d(s,{CloseModal:()=>c,OpenModal:()=>r,default:()=>d});var o=l(2791),t=l(5408),i=l(2350),n=l(184);const a="listDialog_mdh392",d=()=>{const e=(0,i.bh)("listDialog")||{};(0,t.Z)(a);let s=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:s.map(((s,l)=>{let t=e[s];if(t&&t.visible){let e={};t.height&&(e.heigth=t.height),t.width,t.zIndex&&(e.zIndex=t.zIndex-1);let l={zIndex:t.zIndex},i=null,a=t.data;return t.content&&(i=o.cloneElement(t.content,{data:a})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:l,id:s,children:i})}),t.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(t.visible?"active":""),onClick:()=>{var e;e=s,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},s)}}))})},r=e=>{let s=(0,i.bh)("listDialog")||{},l=(0,i.M5)();s[l]||(s[l]={}),s[l].visible=!0;let o={};e.props?(o=e.props,o.modalID=l):o.modalID=l;let t=document.getElementsByTagName("body")[0];null!==t&&void 0!==t&&t.style&&(t.style.overflowY="hidden"),s[l].isView=e.isView,s[l].observeResize=e.observeResize,s[l].observeResize&&(s[l].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(l,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===s[l].width&&o.height===s[l].height||(s[l].height=o.height+10,s[l].width=o.width,(0,i.Rz)("listDialog",s),(0,i.wt)(a)))}),200)),s[l].display=!0,e.zIndex&&(s[l].zIndex=e.zIndex),e.height&&(s[l].height=e.height),e.width&&(s[l].width=e.width),e.content&&(s[l].content=e.content),s[l].data=o,(0,i.Rz)("listDialog",s),(0,i.wt)(a),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",l),(0,i.wt)(a)}),125)},c=e=>{let s=(0,i.bh)("listDialog")||{},l=e.id;if(s[l]){var o,t,n;s[l].observeResize&&s[l].observeInterval&&clearInterval(s[l].observeInterval),s[l].display=!1,null===(o=s[l])||void 0===o||null===(t=o.data)||void 0===t||null===(n=t.closeEvent)||void 0===n||n.call(t),(0,i.Rz)("listDialog",s),delete s[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((()=>{delete s[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},7852:(e,s,l)=>{l.d(s,{Z:()=>i});l(2791),l(1534);var o=l(9760),t=l(184);const i=e=>{let{data:s,confirm:l,handleClick:i,close:n}=e;const{modalID:a}=s;return(0,t.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,t.jsx)("div",{className:"flexSpace"})]}),(0,t.jsx)("div",{className:"_dsplFlx ",children:(0,t.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,o.CloseModal)({id:a})},children:"OK"})]})]})}},3342:(e,s,l)=>{l.r(s),l.d(s,{default:()=>m});var o=l(2791),t=l(2350),i=(l(7889),l(24)),n=l(9760),a=l(713),d=l(2647),r=l(8779),c=l(7852),v=l(184);const u=(0,d.PU)(),h=(0,i.KP)(),p=(0,i.P3)(),m=((0,d.Jo)(),e=>{var s;let{data:l,elmId:i,handleRefreshAll:d}=e;const[m,b]=(0,o.useState)(!1),[I,y]=(0,o.useState)(0);(0,o.useEffect)((()=>{m||(b(!0),y((0,t.M5)()))}));const x=()=>{y((0,t.M5)())},_=()=>{(0,a.ii)(x)},g=()=>{(0,a.nj)(null===l||void 0===l?void 0:l.productId,d)};(0,a.Zj)(null===(s=(0,t.bh)("sub_product_group"))||void 0===s?void 0:s[l.productId],"subProduct");return(0,v.jsx)("div",{className:"item_acc",children:(0,v.jsxs)("div",{className:"_dsplFlx item_box product_header",children:[(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",onClick:()=>{(0,t.vQ)(null===l||void 0===l?void 0:l.productCode)}}),(0,v.jsx)("div",{className:"name",onClick:async()=>{if((0,t.I0)()){(0,t.Rz)("upd_product",l),(0,t.Rz)("upd_product_bck",JSON.parse(JSON.stringify(l)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,v.jsx)(h,{confirm:_}),(0,n.OpenModal)(e)}},children:null===l||void 0===l?void 0:l.name})]}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:" addSbAcc purple",onClick:()=>(e=>{let s={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};s.content=(0,v.jsx)(p,{confirm:_,item:l}),(0,n.OpenModal)(s)})(),children:"Submayor"}),(0,t.I0)()?(0,v.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:()=>{let e=(0,t.bh)("lastTimeCallModal")||0;if((0,t.I0)()){if(Date.now()>e){(0,t.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,v.jsx)(r.Z,{label:"Eliminar Producto",confirm:g,item:l}),(0,n.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,v.jsx)(c.Z,{}),(0,n.OpenModal)(e)}},children:(0,v.jsx)(u,{name:"outline_delete",color:"#c62828"})}):null]})})})},8779:(e,s,l)=>{l.d(s,{Z:()=>i});l(2791),l(1534);var o=l(9760),t=l(184);const i=e=>{let{data:s,confirm:l,label:i,close:n}=e;const{modalID:a}=s,d=e=>{(0,o.CloseModal)({id:a})};return(0,t.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title",children:i}),(0,t.jsx)("div",{className:"flexSpace"})]}),(0,t.jsx)("div",{className:"_dsplFlx ",children:(0,t.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("p",{className:"group_title addBtn",onClick:d,children:"Cancelar"}),(0,t.jsx)("p",{className:"group_title addBtn red",onClick:()=>{l(),d()},children:"Eliminar"})]})]})}},713:(e,s,l)=>{l.d(s,{$P:()=>h,B8:()=>y,IR:()=>d,QJ:()=>u,Rd:()=>n,VI:()=>I,Ve:()=>v,WA:()=>b,ZW:()=>i,Zj:()=>p,ii:()=>c,nj:()=>m,qT:()=>a,qv:()=>r,yk:()=>t});var o=l(2350);const t=async e=>{var s,l;let t={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.scan_voucher_production};if(t.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,limit:120},(0,o.bh)("searchVoucherQry")&&(0,o.bh)("searchVoucherQry").length>1){(0,o.bh)("searchVoucherQry").split(" ").map(((e,s)=>{e&&(t.params[":search"+s]=e.trim())}));const s=(0,o.I7)(t),l=await s;l&&((0,o.Rz)("voucher_production",l),(0,o.Rz)("vouchers_list",p((0,o.jQ)(l),"voucherId")),e&&e())}else(0,o.Rz)("vouchers_list",null),e&&e()},i=async(e,s)=>{var l,t;let i={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.get_inventory_prod};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,":productId":e};const n=(0,o.I7)(i),a=await n;a&&((0,o.Rz)("inv_products_list",p((0,o.jQ)(a.list),"name")),(0,o.Rz)("inv_products_stock",a.stock),s&&s())},n=async(e,s)=>{var l,t;let i={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.get_prod_stock};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,productId:e};const n=(0,o.I7)(i),a=await n;if(a){let l={...(0,o.bh)("products_stock")};l[e]=a.stock,(0,o.Rz)("products_stock",l),s&&s()}},a=async e=>{var s,l;let t={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.all_prods};t.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId},t.subQuerys={},t.subQuerys.stock=1;const i=(0,o.I7)(t),n=await i;if(n){let s={},l=[],t=0;n.map((e=>{var i;if(null!==e&&void 0!==e&&null!==(i=e.inventory)&&void 0!==i&&i.qty){var n,a,d;if(t+=1*(0,o.Zv)(null===e||void 0===e||null===(n=e.inventory)||void 0===n?void 0:n.amount,2),s[e.unit])s[e.unit]+=null===e||void 0===e||null===(a=e.inventory)||void 0===a?void 0:a.qty;else s[e.unit]=null===e||void 0===e||null===(d=e.inventory)||void 0===d?void 0:d.qty;l.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,o.Ey)(e)&&e({list:p(l,"name"),total:t,units:s})}},d=async(e,s)=>{var l,t;let i={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.group_prod_stock};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId};const n=(0,o.I7)(i),a=await n;if(a){let l=(0,o._I)(a.comps),t=0,i=0,n=0,d=[],r=[];(0,o._2)(e).map((s=>{let c={...e[s]},v=("debit"===e[s].type?1:-1)*e[s].amount,u=1*(0,o.Zv)(v,2);if(t+=u,a.comps[e[s].comprobanteId]){c.inventory=a.comps[e[s].comprobanteId];let t=0;if((0,o._2)(a.comps[e[s].comprobanteId]).map((l=>{t=1*(0,o.Zv)(t,2)+1*(0,o.Zv)(a.comps[e[s].comprobanteId][l],2)})),t=t<0?-1*t:t,t=1*(0,o.Zv)(t,2),c.inventoryAmount=t,i+=t,u=u<0?-1*u:u,u-t!==0){let e=u-t;n+=e,r.push(c),console.log("diff",c,u,t,e)}else d.push(c);delete l[e[s].comprobanteId]}else n+=v,r.push(c)}));let c=0;(0,o._2)(l).map((e=>{let s=0;(0,o._2)(l[e]).map((t=>{s=1*(0,o.Zv)(s,2)+1*(0,o.Zv)(l[e][t],2)})),c+=s})),console.log("inventoryBack",l,"inventoryBackTotal",c),(0,o.Rz)("inv_comprobantes_compare",{hasError:r,success:d,inventoryBack:l}),(0,o.Ey)(s)&&s()}},r=async e=>{var s,l,t;let i={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.filter_search_opera};i.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,o.bh)("date_current_year"),":account":null===(t=(0,o.bh)("global_account_params"))||void 0===t?void 0:t.inventory.account};const n=(0,o.I7)(i),a=await n;a&&!a.error&&(0,o.Ey)(e)&&e(p((0,o.jQ)(a),"date"))},c=async e=>{var s,l;let t={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.all_prods};t.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId};const i=(0,o.I7)(t),n=await i;n&&((0,o.Rz)("products_list",p(n,"name")),(0,o.Rz)("products_ids",(0,o.ME)((0,o.jQ)(n),"productId")),e&&e())},v=async e=>{var s,l;let t={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.search_prod};if(t.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,limit:120},(0,o.bh)("searchQry").length>1){(0,o.bh)("searchQry").split(" ").map(((e,s)=>{e&&(t.params[":search"+s]=e.trim())}));const s=(0,o.I7)(t),l=await s;l&&((0,o.Rz)("products_list",p((0,o.jQ)(l),"code")),e&&e())}else(0,o.Rz)("products_list",null),e&&e()},u=async e=>{var s,l;let t={...null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.all_entry_invoices};t.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId};const i=(0,o.I7)(t),n=await i;n&&((0,o.Rz)("movements_list",p(n,"date")),(0,o.Rz)("movements_ids",(0,o.ME)((0,o.jQ)(n),"inventoryId")),e&&e())},h=async e=>{var s;if((null===(s=(0,o.bh)("searchMovQry"))||void 0===s?void 0:s.length)>1){var l,t;let s={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.search_inventory};s.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,":search0":(0,o.bh)("searchMovQry")};const i=(0,o.I7)(s),n=await i;n&&((0,o.Rz)("movements_list",function(e){var s={};let l=e&&(0,o._2)(e);l.length>0?l.map((l=>{let o=e[l];s[o.comprobanteId]||(s[o.comprobanteId]={},s[o.comprobanteId].amount=0,s[o.comprobanteId].document=o.document,s[o.comprobanteId].date=o.date,s[o.comprobanteId].comprobanteId=o.comprobanteId,s[o.comprobanteId].products=[]),s[o.comprobanteId].amount+=o.qty*o.price,s[o.comprobanteId].products.push({productId:o.productId,qty:o.qty,price:o.price,inventoryId:o.inventoryId})})):s=null;return s}(n)),(0,o.Rz)("movements_ids",n),e&&e())}else(0,o.Rz)("movements_list",[]),(0,o.Rz)("movements_ids",{}),e&&e()};const p=(e,s)=>(0,o.MV)("sortProducts",[e],(()=>e&&e.sort(((e,l)=>{let o=e[s],t=l[s];return o<t?-1:o>t?1:0})))),m=async(e,s)=>{var l,t;let i={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.delete_prod};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,productId:e};const n=(0,o.I7)(i);await n&&s&&s()},b=async(e,s)=>{var l,t;let i={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.delete_inventory};i.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,inventoryId:e};const n=(0,o.I7)(i);await n&&s&&s()},I=async(e,s)=>{var l,t;({...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.entry_invoice_acc_2}).params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,entriesInvoiceId:e}},y=(e,s)=>(0,o.MV)("rangeProdArr",[e,s],(()=>e?(0,o._2)(e).slice(0,s):[]))},7889:()=>{},1534:()=>{}}]);
//# sourceMappingURL=3342.7ccedd21.chunk.js.map