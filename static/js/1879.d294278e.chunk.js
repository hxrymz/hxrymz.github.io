"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1879,9760],{9760:(e,t,o)=>{o.r(t),o.d(t,{CloseModal:()=>c,OpenModal:()=>a,default:()=>r});var l=o(2791),d=o(5408),i=o(2350),s=o(184);const n="listDialog_mdh392",r=()=>{const e=(0,i.bh)("listDialog")||{};(0,d.Z)(n);let t=Object.keys(e);return(0,s.jsx)(s.Fragment,{children:t.map(((t,o)=>{let d=e[t];if(d&&d.visible){let e={};d.height&&(e.heigth=d.height),d.width,d.zIndex&&(e.zIndex=d.zIndex-1);let o={zIndex:d.zIndex},i=null,n=d.data;return d.content&&(i=l.cloneElement(d.content,{data:n})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:o,id:t,children:i})}),d.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(d.visible?"active":""),onClick:()=>{var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},a=e=>{let t=(0,i.bh)("listDialog")||{},o=(0,i.M5)();t[o]||(t[o]={}),t[o].visible=!0;let l={};e.props?(l=e.props,l.modalID=o):l.modalID=o;let d=document.getElementsByTagName("body")[0];null!==d&&void 0!==d&&d.style&&(d.style.overflowY="hidden"),t[o].isView=e.isView,t[o].observeResize=e.observeResize,t[o].observeResize&&(t[o].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(o,"']")),l=e&&e.getBoundingClientRect();l&&(l.width===t[o].width&&l.height===t[o].height||(t[o].height=l.height+10,t[o].width=l.width,(0,i.Rz)("listDialog",t),(0,i.wt)(n)))}),200)),t[o].display=!0,e.zIndex&&(t[o].zIndex=e.zIndex),e.height&&(t[o].height=e.height),e.width&&(t[o].width=e.width),e.content&&(t[o].content=e.content),t[o].data=l,(0,i.Rz)("listDialog",t),(0,i.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",o),(0,i.wt)(n)}),125)},c=e=>{let t=(0,i.bh)("listDialog")||{},o=e.id;if(t[o]){var l,d,s;t[o].observeResize&&t[o].observeInterval&&clearInterval(t[o].observeInterval),t[o].display=!1,null===(l=t[o])||void 0===l||null===(d=l.data)||void 0===d||null===(s=d.closeEvent)||void 0===s||s.call(d),(0,i.Rz)("listDialog",t),delete t[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(n),setTimeout((()=>{delete t[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},1879:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var l=o(2791),d=o(2350),i=o(2647),s=(o(1534),o(9760)),n=o(7689),r=o(9661),a=o(24),c=o(713),u=o(184);const v=(0,i.PU)(),p=(0,i.Np)(),h=(0,a.f_)(),m=(0,r.FC)(),b=(0,a.Az)(),I="new_product_out_comprobante",y=e=>{var t,o,i,r,a,c,v,m;let{data:b,confirm:y}=e;const[f,g]=(0,l.useState)(!1),[j,k]=(0,l.useState)(0),z=(0,n.s0)();(0,l.useEffect)((()=>{f||(g(!0),(0,d.Rz)("accountPicker",{}),k((0,d.M5)()))}));const w=(e,t,o)=>{let l=(0,d.bh)(I)||{};o?(l[o]||(l[o]={}),l[o][e]=t):l[e]=t,(0,d.Rz)(I,l),k((0,d.M5)())};return(0,u.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"750px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Salida de Mercancias"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(h,{init:null===(t=(0,d.bh)(I))||void 0===t?void 0:t.date,updDate:e=>w("date",e)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(p,{init:null===(o=(0,d.bh)(I))||void 0===o?void 0:o.document,label:"Documento",width:120,updChanges:e=>w("document",e)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(p,{init:null===(i=(0,d.bh)(I))||void 0===i?void 0:i.amount,label:"Importe de la venta",width:120,updChanges:e=>w("amount",e)})]}),(0,u.jsx)(p,{init:null===(r=(0,d.bh)(I))||void 0===r?void 0:r.description,label:"Descripcion",width:520,updChanges:e=>w("description",e)}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(_,{})]}),(0,u.jsx)(x,{}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),null!==(a=(0,d.bh)(I))&&void 0!==a&&a.document&&null!==(c=(0,d.bh)(I))&&void 0!==c&&c.amount&&null!==(v=(0,d.bh)("customerOutPicker"))&&void 0!==v&&v.account&&(null===(m=(0,d._2)((0,d.bh)("productListOnOut")))||void 0===m?void 0:m.length)>0?(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:async()=>{var e;let t=(0,d.bh)(I),o=(new Date).getTime()+800;if(t.date){let e=new Date(t.date).getTime();o=e||o}t.date=o;let l=[],i=await(0,d.fN)(t.date);t.comprobanteId=i;let n=0,r=0,a=(0,d.bh)("global_account_params"),c=(0,d.bh)("productListOnOut")&&(0,d._2)((0,d.bh)("productListOnOut"));if(c&&(null===c||void 0===c||c.map((async(e,i)=>{var s,a;let c={...(0,d.bh)("productListOnOut")[e]},u={...c};u.document=t.document.trim(),u.date=o,u.price=1*c.price,u.qty=-1*c.qty,u.comprobanteId=t.comprobanteId,u.inventoryId=(0,d.M5)(),delete u.product,delete u.account,delete u.subAccount;let v=1*c.qty*(1*c.price);n+=v,r+=v,u.amount=-1*v;let p={...null===(s=(0,d.bh)((0,d.hQ)()))||void 0===s?void 0:s.add_inventory};p.params={businessId:null===(a=(0,d.bh)("profileUser"))||void 0===a?void 0:a.businessId},p.form=u,l.push(p)}))),r>0){var u,v,p,h,m,_;let e={...t};e.type="credit",e.account=null===a||void 0===a||null===(u=a.inventory)||void 0===u?void 0:u.account,e.amount=r,e.operationId=(0,d.M5)();let o={...null===(v=(0,d.bh)((0,d.hQ)()))||void 0===v?void 0:v.add_opera};o.params={businessId:null===(p=(0,d.bh)("profileUser"))||void 0===p?void 0:p.businessId},o.form=e,l.push(o);let i={...t};i.type="debit",i.account=null===a||void 0===a||null===(h=a.inventory_expensess)||void 0===h?void 0:h.account,i.amount=r,i.operationId=(0,d.M5)();let s={...null===(m=(0,d.bh)((0,d.hQ)()))||void 0===m?void 0:m.add_opera};s.params={businessId:null===(_=(0,d.bh)("profileUser"))||void 0===_?void 0:_.businessId},s.form=i,l.push(s)}if(n>0&&(0,d.bh)("customerOutPicker").account){var x,f,g,j,w,N,R;let e={...t};e.type="debit",e.account=null===(x=(0,d.bh)("customerOutPicker"))||void 0===x?void 0:x.account,e.subAccount=null===(f=(0,d.bh)("customerOutPicker"))||void 0===f?void 0:f.subAccount,e.providerId=null===(g=(0,d.bh)("customerOutPicker"))||void 0===g?void 0:g.providerId,e.operationId=(0,d.M5)();let o=null===(j=(0,d.bh)("account_ids"))||void 0===j?void 0:j[null===(w=(0,d.bh)("customerOutPicker"))||void 0===w?void 0:w.account];o&&o.payOrCollect&&(e.payOrCollect=o.payOrCollect),e.amount=1*e.amount;let i={...null===(N=(0,d.bh)((0,d.hQ)()))||void 0===N?void 0:N.add_opera};i.params={businessId:null===(R=(0,d.bh)("profileUser"))||void 0===R?void 0:R.businessId},i.form=e,l.push(i)}if(null!==a&&void 0!==a&&null!==(e=a.sales_income)&&void 0!==e&&e.account){var O,Q,P;let e={...t};e.type="credit",e.account=null===a||void 0===a||null===(O=a.sales_income)||void 0===O?void 0:O.account,e.operationId=(0,d.M5)(),e.amount=1*e.amount;let o={...null===(Q=(0,d.bh)((0,d.hQ)()))||void 0===Q?void 0:Q.add_opera};o.params={businessId:null===(P=(0,d.bh)("profileUser"))||void 0===P?void 0:P.businessId},o.form=e,l.push(o)}const M=l.map((async e=>{const t=(0,d.I7)(e);await t}));await Promise.all(M),(null===b||void 0===b?void 0:b.modalID)&&(0,s.CloseModal)({id:null===b||void 0===b?void 0:b.modalID}),setTimeout((()=>{(0,d.Rz)("extraAccountListOnCmp",null),(0,d.Rz)("productListOnOut",null),(0,d.Rz)("customerOutPicker",null),(0,d.Rz)(I,null),k((0,d.M5)()),y&&y(),z({pathname:"/accounting-ledger",search:"?cId=".concat(i)})}),400)},children:"Guardar"})}):null]})]})},_=e=>{var t,o;let{}=e;const[i,s]=(0,l.useState)(0);let n=null===(t=(0,d.bh)("providers_ids"))||void 0===t?void 0:t[null===(o=(0,d.bh)("customerOutPicker"))||void 0===o?void 0:o.providerId];return(0,u.jsx)("div",{children:null!==n&&void 0!==n&&n.name?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsx)("div",{className:"_dsplFlx",children:(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:()=>{(0,d.Rz)("customerOutPicker",null),s((0,d.M5)())},children:null===n||void 0===n?void 0:n.name})}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(m,{placeholder:"buscar una provedor",width:320,handleClick:e=>{let t={providerId:e.providerId,account:e.account,subAccount:e.subAccount};(0,d.Rz)("customerOutPicker",t),s((0,d.M5)())}})})},x=e=>{var t,o,i,s,n,r,a,v,h,m,I,y,_;let{}=e;const[x,g]=(0,l.useState)(0),j=()=>{g((0,d.M5)())};let k=null===(t=(0,d.bh)("products_ids"))||void 0===t?void 0:t[null===(o=(0,d.bh)("productPicker"))||void 0===o?void 0:o.productId];const z=e=>{let t=(0,d.bh)("productListOnOut")||{};delete t[e],(0,d.Rz)("productListOnOut",t),g((0,d.M5)())};return(0,u.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(i=(0,d.bh)("productPicker"))&&void 0!==i&&i.productId?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",onClick:e=>{(0,d.Rz)("productPicker",null),g((0,d.M5)())},children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===k||void 0===k?void 0:k.upc_barcode}),(0,u.jsx)("div",{className:"name",children:null===k||void 0===k?void 0:k.name})]}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(b,{width:420,handleClick:e=>{let t={productId:e.productId,product:e.product,subAccount:e.subAccount};(0,d.Rz)("productPicker",t),(0,c.Rd)(e.productId,j)}}),null!==(s=(0,d.bh)("products_stock"))&&void 0!==s&&null!==(n=s[null===(r=(0,d.bh)("productPicker"))||void 0===r?void 0:r.productId])&&void 0!==n&&n.qty?(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(p,{init:null===(a=(0,d.bh)("productPicker"))||void 0===a?void 0:a.qty,label:"Cantidad",width:120,type:"number",updChanges:e=>((e,t,o)=>{let l=(0,d.bh)("productPicker")||{};o?(l[o]||(l[o]={}),l[o][e]=t):l[e]=t,(0,d.Rz)("productPicker",l),g((0,d.M5)())})("qty",e)}),(0,u.jsx)("div",{className:"flexSpace"}),null!==(v=(0,d.bh)("productPicker"))&&void 0!==v&&v.qty&&(null===(h=(0,d.bh)("productPicker"))||void 0===h?void 0:h.qty)<=(null===(m=(0,d.bh)("products_stock"))||void 0===m||null===(I=m[null===(y=(0,d.bh)("productPicker"))||void 0===y?void 0:y.productId])||void 0===I?void 0:I.qty)?(0,u.jsx)("div",{style:{marginTop:38},children:(0,u.jsx)("button",{onClick:()=>{var e,t,o,l,i,s;let n={...(0,d.bh)("productPicker")}||{},r={...(0,d.bh)("productPicker")}||{},a={...(0,d.bh)("productListOnOut")}||{},c=n.productId,u=(null===(e=(0,d.bh)("products_stock"))||void 0===e||null===(t=e[null===(o=(0,d.bh)("productPicker"))||void 0===o?void 0:o.productId])||void 0===t?void 0:t.amount)/(null===(l=(0,d.bh)("products_stock"))||void 0===l||null===(i=l[null===(s=(0,d.bh)("productPicker"))||void 0===s?void 0:s.productId])||void 0===i?void 0:i.qty);n.price=u,a[c]=n,(0,d.Rz)("productListOnOut",a),r.productId=null,r.qty="",r.price="",(0,d.Rz)("productPicker",r),g((0,d.M5)())},children:"Agregar"})}):null]}):null,(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50 ",children:"Producto"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Qty"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Costo (un)"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_5"})]}),(0,d.bh)("productListOnOut")&&(null===(_=(0,d._2)((0,d.bh)("productListOnOut")))||void 0===_?void 0:_.map(((e,t)=>(0,u.jsx)(f,{idKey:e,data:(0,d.bh)("productListOnOut")[e],deleteItem:z},e))))]})},f=e=>{var t;let{data:o,deleteItem:l,idKey:i}=e,s=null===(t=(0,d.bh)("products_ids"))||void 0===t?void 0:t[null===o||void 0===o?void 0:o.productId];return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50",children:null===s||void 0===s?void 0:s.name}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,d.Zv)(null===o||void 0===o?void 0:o.qty,2)}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,d.Zv)(null===o||void 0===o?void 0:o.price,2)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon",onClick:()=>{l(i)},children:(0,u.jsx)(v,{name:"outline_delete",color:"#c62828"})})]})}},713:(e,t,o)=>{o.d(t,{$P:()=>p,B8:()=>y,IR:()=>r,QJ:()=>v,Rd:()=>s,VI:()=>I,Ve:()=>u,WA:()=>b,ZW:()=>i,Zj:()=>h,ii:()=>c,nj:()=>m,qT:()=>n,qv:()=>a,yk:()=>d});var l=o(2350);const d=async e=>{var t,o;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.scan_voucher_production};if(d.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120},(0,l.bh)("searchVoucherQry")&&(0,l.bh)("searchVoucherQry").length>1){(0,l.bh)("searchVoucherQry").split(" ").map(((e,t)=>{e&&(d.params[":search"+t]=e.trim())}));const t=(0,l.I7)(d),o=await t;o&&((0,l.Rz)("voucher_production",o),(0,l.Rz)("vouchers_list",h((0,l.jQ)(o),"voucherId")),e&&e())}else(0,l.Rz)("vouchers_list",null),e&&e()},i=async(e,t)=>{var o,d;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.get_inventory_prod};i.params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId,":productId":e};const s=(0,l.I7)(i),n=await s;n&&((0,l.Rz)("inv_products_list",h((0,l.jQ)(n.list),"name")),(0,l.Rz)("inv_products_stock",n.stock),t&&t())},s=async(e,t)=>{var o,d;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.get_prod_stock};i.params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId,productId:e};const s=(0,l.I7)(i),n=await s;if(n){let o={...(0,l.bh)("products_stock")};o[e]=n.stock,(0,l.Rz)("products_stock",o),t&&t()}},n=async e=>{var t,o;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.all_prods};d.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId},d.subQuerys={},d.subQuerys.stock=1;const i=(0,l.I7)(d),s=await i;if(s){let t={},o=[],d=0;s.map((e=>{var i;if(null!==e&&void 0!==e&&null!==(i=e.inventory)&&void 0!==i&&i.qty){var s,n,r;if(d+=1*(0,l.Zv)(null===e||void 0===e||null===(s=e.inventory)||void 0===s?void 0:s.amount,2),t[e.unit])t[e.unit]+=null===e||void 0===e||null===(n=e.inventory)||void 0===n?void 0:n.qty;else t[e.unit]=null===e||void 0===e||null===(r=e.inventory)||void 0===r?void 0:r.qty;o.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,l.Ey)(e)&&e({list:h(o,"name"),total:d,units:t})}},r=async(e,t)=>{var o,d;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.group_prod_stock};i.params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId};const s=(0,l.I7)(i),n=await s;if(n){let o=(0,l._I)(n.comps),d=0,i=0,s=0,r=[],a=[];(0,l._2)(e).map((t=>{let c={...e[t]},u=("debit"===e[t].type?1:-1)*e[t].amount,v=1*(0,l.Zv)(u,2);if(d+=v,n.comps[e[t].comprobanteId]){c.inventory=n.comps[e[t].comprobanteId];let d=0;if((0,l._2)(n.comps[e[t].comprobanteId]).map((o=>{d=1*(0,l.Zv)(d,2)+1*(0,l.Zv)(n.comps[e[t].comprobanteId][o],2)})),d=d<0?-1*d:d,d=1*(0,l.Zv)(d,2),c.inventoryAmount=d,i+=d,v=v<0?-1*v:v,v-d!==0){let e=v-d;s+=e,a.push(c),console.log("diff",c,v,d,e)}else r.push(c);delete o[e[t].comprobanteId]}else s+=u,a.push(c)}));let c=0;(0,l._2)(o).map((e=>{let t=0;(0,l._2)(o[e]).map((d=>{t=1*(0,l.Zv)(t,2)+1*(0,l.Zv)(o[e][d],2)})),c+=t})),console.log("inventoryBack",o,"inventoryBackTotal",c),(0,l.Rz)("inv_comprobantes_compare",{hasError:a,success:r,inventoryBack:o}),(0,l.Ey)(t)&&t()}},a=async e=>{var t,o,d;let i={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.filter_search_opera};i.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,l.bh)("date_current_year"),":account":null===(d=(0,l.bh)("global_account_params"))||void 0===d?void 0:d.inventory.account};const s=(0,l.I7)(i),n=await s;n&&!n.error&&(0,l.Ey)(e)&&e(h((0,l.jQ)(n),"date"))},c=async e=>{var t,o;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.all_prods};d.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId};const i=(0,l.I7)(d),s=await i;s&&((0,l.Rz)("products_list",h(s,"name")),(0,l.Rz)("products_ids",(0,l.ME)((0,l.jQ)(s),"productId")),e&&e())},u=async e=>{var t,o;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.search_prod};if(d.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,limit:120},(0,l.bh)("searchQry").length>1){(0,l.bh)("searchQry").split(" ").map(((e,t)=>{e&&(d.params[":search"+t]=e.trim())}));const t=(0,l.I7)(d),o=await t;o&&((0,l.Rz)("products_list",h((0,l.jQ)(o),"code")),e&&e())}else(0,l.Rz)("products_list",null),e&&e()},v=async e=>{var t,o;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.all_entry_invoices};d.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId};const i=(0,l.I7)(d),s=await i;s&&((0,l.Rz)("movements_list",h(s,"date")),(0,l.Rz)("movements_ids",(0,l.ME)((0,l.jQ)(s),"inventoryId")),e&&e())},p=async e=>{var t;if((null===(t=(0,l.bh)("searchMovQry"))||void 0===t?void 0:t.length)>1){var o,d;let t={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.search_inventory};t.params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId,":search0":(0,l.bh)("searchMovQry")};const i=(0,l.I7)(t),s=await i;s&&((0,l.Rz)("movements_list",function(e){var t={};let o=e&&(0,l._2)(e);o.length>0?o.map((o=>{let l=e[o];t[l.comprobanteId]||(t[l.comprobanteId]={},t[l.comprobanteId].amount=0,t[l.comprobanteId].document=l.document,t[l.comprobanteId].date=l.date,t[l.comprobanteId].comprobanteId=l.comprobanteId,t[l.comprobanteId].products=[]),t[l.comprobanteId].amount+=l.qty*l.price,t[l.comprobanteId].products.push({productId:l.productId,qty:l.qty,price:l.price,inventoryId:l.inventoryId})})):t=null;return t}(s)),(0,l.Rz)("movements_ids",s),e&&e())}else(0,l.Rz)("movements_list",[]),(0,l.Rz)("movements_ids",{}),e&&e()};const h=(e,t)=>(0,l.MV)("sortProducts",[e],(()=>e&&e.sort(((e,o)=>{let l=e[t],d=o[t];return l<d?-1:l>d?1:0})))),m=async(e,t)=>{var o,d;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.delete_prod};i.params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId,productId:e};const s=(0,l.I7)(i);await s&&t&&t()},b=async(e,t)=>{var o,d;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.delete_inventory};i.params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId,inventoryId:e};const s=(0,l.I7)(i);await s&&t&&t()},I=async(e,t)=>{var o,d;({...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.entry_invoice_acc_2}).params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId,entriesInvoiceId:e}},y=(e,t)=>(0,l.MV)("rangeProdArr",[e,t],(()=>e?(0,l._2)(e).slice(0,t):[]))},1534:()=>{}}]);
//# sourceMappingURL=1879.d294278e.chunk.js.map