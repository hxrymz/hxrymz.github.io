"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3855,9760],{9760:(e,s,l)=>{l.r(s),l.d(s,{CloseModal:()=>c,OpenModal:()=>r,default:()=>n});var i=l(2791),o=l(5408),t=l(2350),d=l(184);const a="listDialog_mdh392",n=()=>{const e=(0,t.bh)("listDialog")||{};(0,o.Z)(a);let s=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:s.map(((s,l)=>{let o=e[s];if(o&&o.visible){let e={};o.height&&(e.heigth=o.height),o.width,o.zIndex&&(e.zIndex=o.zIndex-1);let l={zIndex:o.zIndex},t=null,a=o.data;return o.content&&(t=i.cloneElement(o.content,{data:a})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:l,id:s,children:t})}),o.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:()=>{var e;e=s,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},s)}}))})},r=e=>{let s=(0,t.bh)("listDialog")||{},l=(0,t.M5)();s[l]||(s[l]={}),s[l].visible=!0;let i={};e.props?(i=e.props,i.modalID=l):i.modalID=l;let o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),s[l].isView=e.isView,s[l].observeResize=e.observeResize,s[l].observeResize&&(s[l].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(l,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===s[l].width&&i.height===s[l].height||(s[l].height=i.height+10,s[l].width=i.width,(0,t.Rz)("listDialog",s),(0,t.wt)(a)))}),200)),s[l].display=!0,e.zIndex&&(s[l].zIndex=e.zIndex),e.height&&(s[l].height=e.height),e.width&&(s[l].width=e.width),e.content&&(s[l].content=e.content),s[l].data=i,(0,t.Rz)("listDialog",s),(0,t.wt)(a),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,t.Rz)("modalOpen",l),(0,t.wt)(a)}),125)},c=e=>{let s=(0,t.bh)("listDialog")||{},l=e.id;if(s[l]){var i,o,d;s[l].observeResize&&s[l].observeInterval&&clearInterval(s[l].observeInterval),s[l].display=!1,null===(i=s[l])||void 0===i||null===(o=i.data)||void 0===o||null===(d=o.closeEvent)||void 0===d||d.call(o),(0,t.Rz)("listDialog",s),delete s[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,t.wt)(a),setTimeout((()=>{delete s[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,t.Rz)("modalOpen",null)}),750)}}},7852:(e,s,l)=>{l.d(s,{Z:()=>t});l(2791),l(1534);var i=l(9760),o=l(184);const t=e=>{let{data:s,confirm:l,handleClick:t,close:d}=e;const{modalID:a}=s;return(0,o.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"_dsplFlx ",children:(0,o.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,i.CloseModal)({id:a})},children:"OK"})]})]})}},3855:(e,s,l)=>{l.r(s),l.d(s,{default:()=>m});var i=l(2791),o=(l(1534),l(2350)),t=l(713),d=l(7689),a=l(9760),n=l(7852),r=l(2647),c=l(184);const v=e=>{let{data:s,confirm:l,handleClick:i,close:o}=e;const{modalID:t}=s,d=e=>{(0,a.CloseModal)({id:t})};return(0,c.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Eliminar Registro del Inventario"}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:d,children:"Cancelar"}),(0,c.jsx)("p",{className:"group_title addBtn red",onClick:()=>{l(),d()},children:"Eliminar"})]})]})};var u=l(1087);const h=(0,r.PU)(),m=e=>{var s,l,n,r,v,u,h;let{data:m,item:b}=e;const[_,x]=(0,i.useState)(0);(0,i.useEffect)((()=>{(0,o.Rz)("inv_products_list",null),(0,o.Rz)("inv_products_stock",null),y(),(0,t.ZW)(b.productId,y)}),[b.productId]);const y=()=>{x((0,o.M5)())},I=((0,d.s0)(),e=>{(0,a.CloseModal)({id:m.modalID})});let g=isNaN((null===(s=(0,o.bh)("inv_products_stock"))||void 0===s?void 0:s.amount)/(null===(l=(0,o.bh)("inv_products_stock"))||void 0===l?void 0:l.qty))?0:(null===(n=(0,o.bh)("inv_products_stock"))||void 0===n?void 0:n.amount)/(null===(r=(0,o.bh)("inv_products_stock"))||void 0===r?void 0:r.qty),j=isNaN(null===(v=(0,o.bh)("inv_products_stock"))||void 0===v?void 0:v.qty)?0:null===(u=(0,o.bh)("inv_products_stock"))||void 0===u?void 0:u.qty;return(0,c.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)("p",{className:"title_collect",children:"SubMayor de Producto"})}),(0,c.jsx)("div",{className:" acc_dtls subMheader",style:{marginTop:10},children:(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===b||void 0===b?void 0:b.name}),(0,c.jsx)("div",{className:"name",children:null===b||void 0===b?void 0:b.unit}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Stock:"}),(0,c.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:null===j||void 0===j?void 0:j.toFixed(2)})]}),(0,c.jsx)("div",{className:"lineV"}),(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Precio Costo:"}),(0,c.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===g||void 0===g?void 0:g.toFixed(2)]})]})]})}),(0,c.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"_dsplFlx"})]}),(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,c.jsx)("div",{className:"tr_bar_20",children:"Comprobante"}),(0,c.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,c.jsx)("div",{className:"tr_bar_20",children:"Documento"}),(0,c.jsx)("div",{className:"tr_bar_15",children:"Qty"}),(0,c.jsx)("div",{className:"tr_bar_15",children:"Precio"}),(0,c.jsx)("div",{className:"tr_bar_5"})]}),(0,c.jsx)("div",{className:"scollVh subMHeight",children:(0,o.bh)("inv_products_list")&&(null===(h=(0,o.bh)("inv_products_list"))||void 0===h?void 0:h.map((e=>(0,c.jsx)(p,{element:e,idKey:e.inventoryId,close:I},e.inventoryId))))})]})},p=e=>{var s,l;let{element:i,idKey:d,close:r}=e;const m=()=>{(0,t.WA)(d,r)};return(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,c.jsx)("div",{className:"tr_bar_20 comprobante_id",onClick:()=>r(),children:(0,c.jsx)(u.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(i.comprobanteId)},children:i.comprobanteId})}),(0,c.jsx)("div",{className:"tr_bar_20",onClick:()=>(()=>{var e,s;let l={...null===(e=(0,o.bh)((0,o.hQ)()))||void 0===e?void 0:e.upd_inventory};l.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,inventoryId:i.inventoryId},l.data2update={comprobanteId:"20231-9759"},[].push(l)})(),children:i.date&&(0,o.sJ)(i.date)}),(0,c.jsx)("div",{className:"tr_bar_20",children:i.document}),(0,c.jsx)("div",{className:"tr_bar_15",children:1*i.qty?null===(s=1*i.qty)||void 0===s?void 0:s.toFixed(2):""}),(0,c.jsx)("div",{className:"tr_bar_15",children:1*i.price?null===(l=1*i.price)||void 0===l?void 0:l.toFixed(2):""}),(0,c.jsx)("div",{className:"tr_bar_5"}),(0,o.I0)()?(0,c.jsx)("div",{className:"tr_bar_5",children:(0,c.jsx)("div",{className:"icon",onClick:()=>{let e=(0,o.bh)("lastTimeCallModal")||0;if((0,o.I0)()){if(Date.now()>e){(0,o.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,c.jsx)(v,{confirm:m,item:i}),(0,a.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,c.jsx)(n.Z,{}),(0,a.OpenModal)(e)}},children:(0,c.jsx)(h,{name:"outline_delete",color:"#c62828"})})}):null]})}},713:(e,s,l)=>{l.d(s,{$P:()=>m,B8:()=>y,IR:()=>r,QJ:()=>h,Rd:()=>a,VI:()=>x,Ve:()=>u,WA:()=>_,ZW:()=>d,Zj:()=>p,fK:()=>o,ii:()=>v,nj:()=>b,qT:()=>n,qv:()=>c,yk:()=>t});var i=l(2350);const o=async(e,s)=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.scan_voucher_production};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search0":e};const d=(0,i.I7)(t),a=await d;a&&!a.error&&(0,i._2)(a)&&(0,i._2)(a).length>0?s&&s(a):s&&s(null)},t=async e=>{var s,l;let o={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.scan_voucher_production};if(o.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,limit:120},(0,i.bh)("searchVoucherQry")&&(0,i.bh)("searchVoucherQry").length>1){(0,i.bh)("searchVoucherQry").split(" ").map(((e,s)=>{e&&(o.params[":search"+s]=e.trim())}));const s=(0,i.I7)(o),l=await s;l&&((0,i.Rz)("voucher_production",l),(0,i.Rz)("vouchers_list",p((0,i.jQ)(l),"voucherId")),e&&e())}else(0,i.Rz)("vouchers_list",null),e&&e()},d=async(e,s)=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.get_inventory_prod};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":productId":e};const d=(0,i.I7)(t),a=await d;a&&((0,i.Rz)("inv_products_list",p((0,i.jQ)(a.list),"name")),(0,i.Rz)("inv_products_stock",a.stock),s&&s())},a=async(e,s)=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.get_prod_stock};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,productId:e};const d=(0,i.I7)(t),a=await d;if(a){let l={...(0,i.bh)("products_stock")};l[e]=a.stock,(0,i.Rz)("products_stock",l),s&&s()}},n=async e=>{var s,l;let o={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.all_prods};o.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId},o.subQuerys={},o.subQuerys.stock=1;const t=(0,i.I7)(o),d=await t;if(d){let s={},l=[],o=0;d.map((e=>{var t;if(null!==e&&void 0!==e&&null!==(t=e.inventory)&&void 0!==t&&t.qty){var d,a,n;if(o+=1*(0,i.Zv)(null===e||void 0===e||null===(d=e.inventory)||void 0===d?void 0:d.amount,2),s[e.unit])s[e.unit]+=null===e||void 0===e||null===(a=e.inventory)||void 0===a?void 0:a.qty;else s[e.unit]=null===e||void 0===e||null===(n=e.inventory)||void 0===n?void 0:n.qty;l.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,i.Ey)(e)&&e({list:p(l,"name"),total:o,units:s})}},r=async(e,s)=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.group_prod_stock};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId};const d=(0,i.I7)(t),a=await d;if(a){let l=(0,i._I)(a.comps),o=0,t=0,d=0,n=[],r=[];(0,i._2)(e).map((s=>{let c={...e[s]},v=("debit"===e[s].type?1:-1)*e[s].amount,u=1*(0,i.Zv)(v,2);if(o+=u,a.comps[e[s].comprobanteId]){c.inventory=a.comps[e[s].comprobanteId];let o=0;if((0,i._2)(a.comps[e[s].comprobanteId]).map((l=>{o=1*(0,i.Zv)(o,2)+1*(0,i.Zv)(a.comps[e[s].comprobanteId][l],2)})),o=o<0?-1*o:o,o=1*(0,i.Zv)(o,2),c.inventoryAmount=o,t+=o,u=u<0?-1*u:u,u-o!==0){let e=u-o;d+=e,r.push(c),console.log("diff",c,u,o,e)}else n.push(c);delete l[e[s].comprobanteId]}else d+=v,r.push(c)}));let c=0;(0,i._2)(l).map((e=>{let s=0;(0,i._2)(l[e]).map((o=>{s=1*(0,i.Zv)(s,2)+1*(0,i.Zv)(l[e][o],2)})),c+=s})),console.log("inventoryBack",l,"inventoryBackTotal",c),(0,i.Rz)("inv_comprobantes_compare",{hasError:r,success:n,inventoryBack:l}),(0,i.Ey)(s)&&s()}},c=async e=>{var s,l,o;let t={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.filter_search_opera};t.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,i.bh)("date_current_year"),":account":null===(o=(0,i.bh)("global_account_params"))||void 0===o?void 0:o.inventory.account};const d=(0,i.I7)(t),a=await d;a&&!a.error&&(0,i.Ey)(e)&&e(p((0,i.jQ)(a),"date"))},v=async e=>{var s,l;let o={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.all_prods};o.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId};const t=(0,i.I7)(o),d=await t;d&&((0,i.Rz)("products_list",p(d,"name")),(0,i.Rz)("products_ids",(0,i.ME)((0,i.jQ)(d),"productId")),e&&e())},u=async e=>{var s,l;let o={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.search_prod};if(o.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,limit:120},(0,i.bh)("searchQry").length>1){(0,i.bh)("searchQry").split(" ").map(((e,s)=>{e&&(o.params[":search"+s]=e.trim())}));const s=(0,i.I7)(o),l=await s;l&&((0,i.Rz)("products_list",p((0,i.jQ)(l),"code")),e&&e())}else(0,i.Rz)("products_list",null),e&&e()},h=async e=>{var s,l;let o={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.all_entry_invoices};o.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId};const t=(0,i.I7)(o),d=await t;d&&((0,i.Rz)("movements_list",p(d,"date")),(0,i.Rz)("movements_ids",(0,i.ME)((0,i.jQ)(d),"inventoryId")),e&&e())},m=async e=>{var s;if((null===(s=(0,i.bh)("searchMovQry"))||void 0===s?void 0:s.length)>1){var l,o;let s={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.search_inventory};s.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search0":(0,i.bh)("searchMovQry")};const t=(0,i.I7)(s),d=await t;d&&((0,i.Rz)("movements_list",function(e){var s={};let l=e&&(0,i._2)(e);l.length>0?l.map((l=>{let i=e[l];s[i.comprobanteId]||(s[i.comprobanteId]={},s[i.comprobanteId].amount=0,s[i.comprobanteId].document=i.document,s[i.comprobanteId].date=i.date,s[i.comprobanteId].comprobanteId=i.comprobanteId,s[i.comprobanteId].products=[]),s[i.comprobanteId].amount+=i.qty*i.price,s[i.comprobanteId].products.push({productId:i.productId,qty:i.qty,price:i.price,inventoryId:i.inventoryId})})):s=null;return s}(d)),(0,i.Rz)("movements_ids",d),e&&e())}else(0,i.Rz)("movements_list",[]),(0,i.Rz)("movements_ids",{}),e&&e()};const p=(e,s)=>(0,i.MV)("sortProducts",[e],(()=>e&&e.sort(((e,l)=>{let i=e[s],o=l[s];return i<o?-1:i>o?1:0})))),b=async(e,s)=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.delete_prod};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,productId:e};const d=(0,i.I7)(t);await d&&s&&s()},_=async(e,s)=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.delete_inventory};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,inventoryId:e};const d=(0,i.I7)(t);await d&&s&&s()},x=async(e,s)=>{var l,o;({...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.entry_invoice_acc_2}).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,entriesInvoiceId:e}},y=(e,s)=>(0,i.MV)("rangeProdArr",[e,s],(()=>e?(0,i._2)(e).slice(0,s):[]))},1534:()=>{}}]);
//# sourceMappingURL=3855.bd03faec.chunk.js.map