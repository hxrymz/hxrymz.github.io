"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1879,9760],{9760:(e,o,t)=>{t.r(o),t.d(o,{CloseModal:()=>c,OpenModal:()=>a,default:()=>r});var l=t(2791),i=t(5408),d=t(2350),s=t(184);const n="listDialog_mdh392",r=()=>{const e=(0,d.bh)("listDialog")||{};(0,i.Z)(n);let o=Object.keys(e);return(0,s.jsx)(s.Fragment,{children:o.map(((o,t)=>{let i=e[o];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let t={zIndex:i.zIndex},d=null,n=i.data;return i.content&&(d=l.cloneElement(i.content,{data:n})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:t,id:o,children:d})}),i.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=o,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},o)}}))})},a=e=>{let o=(0,d.bh)("listDialog")||{},t=(0,d.M5)();o[t]||(o[t]={}),o[t].visible=!0;let l={};e.props?(l=e.props,l.modalID=t):l.modalID=t;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),o[t].isView=e.isView,o[t].observeResize=e.observeResize,o[t].observeResize&&(o[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),l=e&&e.getBoundingClientRect();l&&(l.width===o[t].width&&l.height===o[t].height||(o[t].height=l.height+10,o[t].width=l.width,(0,d.Rz)("listDialog",o),(0,d.wt)(n)))}),200)),o[t].display=!0,e.zIndex&&(o[t].zIndex=e.zIndex),e.height&&(o[t].height=e.height),e.width&&(o[t].width=e.width),e.content&&(o[t].content=e.content),o[t].data=l,(0,d.Rz)("listDialog",o),(0,d.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,d.Rz)("modalOpen",t),(0,d.wt)(n)}),125)},c=e=>{let o=(0,d.bh)("listDialog")||{},t=e.id;if(o[t]){var l,i,s;o[t].observeResize&&o[t].observeInterval&&clearInterval(o[t].observeInterval),o[t].display=!1,null===(l=o[t])||void 0===l||null===(i=l.data)||void 0===i||null===(s=i.closeEvent)||void 0===s||s.call(i),(0,d.Rz)("listDialog",o),delete o[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,d.wt)(n),setTimeout((()=>{delete o[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,d.Rz)("modalOpen",null)}),750)}}},1879:(e,o,t)=>{t.r(o),t.d(o,{default:()=>_});var l=t(2791),i=t(2350),d=t(2647),s=(t(1534),t(9760)),n=t(7689),r=t(9661),a=t(24),c=t(713),u=t(184);const v=(0,d.PU)(),p=(0,d.Np)(),h=(0,a.f_)(),m=(0,r.FC)(),b=(0,a.Az)(),I="new_product_out_comprobante",_=e=>{var o,t,d,r,a,c,v,m;let{data:b,confirm:_}=e;const[f,g]=(0,l.useState)(!1),[j,k]=(0,l.useState)(0),w=(0,n.s0)();(0,l.useEffect)((()=>{f||(g(!0),(0,i.Rz)("accountPicker",{}),k((0,i.M5)()))}));const z=(e,o,t)=>{let l=(0,i.bh)(I)||{};t?(l[t]||(l[t]={}),l[t][e]=o):l[e]=o,(0,i.Rz)(I,l),k((0,i.M5)())};return(0,u.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"750px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Salida de Mercancias"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(h,{init:null===(o=(0,i.bh)(I))||void 0===o?void 0:o.date,updDate:e=>z("date",e)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(p,{init:null===(t=(0,i.bh)(I))||void 0===t?void 0:t.document,label:"Documento",width:120,updChanges:e=>z("document",e)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(p,{init:null===(d=(0,i.bh)(I))||void 0===d?void 0:d.amount,label:"Importe de la venta",width:120,updChanges:e=>z("amount",e)})]}),(0,u.jsx)(p,{init:null===(r=(0,i.bh)(I))||void 0===r?void 0:r.description,label:"Descripcion",width:520,updChanges:e=>z("description",e)}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(y,{})]}),(0,u.jsx)(x,{}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),null!==(a=(0,i.bh)(I))&&void 0!==a&&a.document&&null!==(c=(0,i.bh)(I))&&void 0!==c&&c.amount&&null!==(v=(0,i.bh)("customerOutPicker"))&&void 0!==v&&v.account&&(null===(m=(0,i._2)((0,i.bh)("productListOnOut")))||void 0===m?void 0:m.length)>0?(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:async()=>{var e;let o=(0,i.bh)(I),t=(new Date).getTime()+800;if(o.date){let e=new Date(o.date).getTime();t=e||t}o.date=t;let l=[],d=await(0,i.fN)(o.date);o.comprobanteId=d;let n=0,r=0,a=(0,i.bh)("global_account_params"),c=(0,i.bh)("productListOnOut")&&(0,i._2)((0,i.bh)("productListOnOut"));if(c&&(null===c||void 0===c||c.map((async(e,d)=>{var s,a;let c={...(0,i.bh)("productListOnOut")[e]},u={...c};u.document=o.document.trim(),u.date=t,u.price=1*c.price,u.qty=-1*c.qty,u.comprobanteId=o.comprobanteId,u.inventoryId=(0,i.M5)(),delete u.product,delete u.account,delete u.subAccount;let v=1*c.qty*(1*c.price);n+=v,r+=v,u.amount=-1*v;let p={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.add_inventory};p.params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId},p.form=u,l.push(p)}))),r>0){var u,v,p,h,m,y;let e={...o};e.type="credit",e.account=null===a||void 0===a||null===(u=a.inventory)||void 0===u?void 0:u.account,e.amount=r,e.operationId=(0,i.M5)();let t={...null===(v=(0,i.bh)((0,i.hQ)()))||void 0===v?void 0:v.add_opera};t.params={businessId:null===(p=(0,i.bh)("profileUser"))||void 0===p?void 0:p.businessId},t.form=e,l.push(t);let d={...o};d.type="debit",d.account=null===a||void 0===a||null===(h=a.inventory_expensess)||void 0===h?void 0:h.account,d.amount=r,d.operationId=(0,i.M5)();let s={...null===(m=(0,i.bh)((0,i.hQ)()))||void 0===m?void 0:m.add_opera};s.params={businessId:null===(y=(0,i.bh)("profileUser"))||void 0===y?void 0:y.businessId},s.form=d,l.push(s)}if(n>0&&(0,i.bh)("customerOutPicker").account){var x,f,g,j,z,N,R;let e={...o};e.type="debit",e.account=null===(x=(0,i.bh)("customerOutPicker"))||void 0===x?void 0:x.account,e.subAccount=null===(f=(0,i.bh)("customerOutPicker"))||void 0===f?void 0:f.subAccount,e.providerId=null===(g=(0,i.bh)("customerOutPicker"))||void 0===g?void 0:g.providerId,e.operationId=(0,i.M5)();let t=null===(j=(0,i.bh)("account_ids"))||void 0===j?void 0:j[null===(z=(0,i.bh)("customerOutPicker"))||void 0===z?void 0:z.account];t&&t.payOrCollect&&(e.payOrCollect=t.payOrCollect),e.amount=1*e.amount;let d={...null===(N=(0,i.bh)((0,i.hQ)()))||void 0===N?void 0:N.add_opera};d.params={businessId:null===(R=(0,i.bh)("profileUser"))||void 0===R?void 0:R.businessId},d.form=e,l.push(d)}if(null!==a&&void 0!==a&&null!==(e=a.sales_income)&&void 0!==e&&e.account){var O,Q,P;let e={...o};e.type="credit",e.account=null===a||void 0===a||null===(O=a.sales_income)||void 0===O?void 0:O.account,e.operationId=(0,i.M5)(),e.amount=1*e.amount;let t={...null===(Q=(0,i.bh)((0,i.hQ)()))||void 0===Q?void 0:Q.add_opera};t.params={businessId:null===(P=(0,i.bh)("profileUser"))||void 0===P?void 0:P.businessId},t.form=e,l.push(t)}const M=l.map((async e=>{const o=(0,i.I7)(e);await o}));await Promise.all(M),(null===b||void 0===b?void 0:b.modalID)&&(0,s.CloseModal)({id:null===b||void 0===b?void 0:b.modalID}),setTimeout((()=>{(0,i.Rz)("extraAccountListOnCmp",null),(0,i.Rz)("productListOnOut",null),(0,i.Rz)("customerOutPicker",null),(0,i.Rz)(I,null),k((0,i.M5)()),_&&_(),w({pathname:"/accounting-ledger",search:"?cId=".concat(d)})}),400)},children:"Guardar"})}):null]})]})},y=e=>{var o,t;let{}=e;const[d,s]=(0,l.useState)(0);let n=null===(o=(0,i.bh)("providers_ids"))||void 0===o?void 0:o[null===(t=(0,i.bh)("customerOutPicker"))||void 0===t?void 0:t.providerId];return(0,u.jsx)("div",{children:null!==n&&void 0!==n&&n.name?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsx)("div",{className:"_dsplFlx",children:(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:()=>{(0,i.Rz)("customerOutPicker",null),s((0,i.M5)())},children:null===n||void 0===n?void 0:n.name})}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(m,{placeholder:"buscar una provedor",width:320,handleClick:e=>{let o={providerId:e.providerId,account:e.account,subAccount:e.subAccount};(0,i.Rz)("customerOutPicker",o),s((0,i.M5)())}})})},x=e=>{var o,t,d,s,n,r,a,v,h,m,I,_,y;let{}=e;const[x,g]=(0,l.useState)(0),j=()=>{g((0,i.M5)())};let k=null===(o=(0,i.bh)("products_ids"))||void 0===o?void 0:o[null===(t=(0,i.bh)("productPicker"))||void 0===t?void 0:t.productId];const w=e=>{let o=(0,i.bh)("productListOnOut")||{};delete o[e],(0,i.Rz)("productListOnOut",o),g((0,i.M5)())};return(0,u.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(d=(0,i.bh)("productPicker"))&&void 0!==d&&d.productId?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",onClick:e=>{(0,i.Rz)("productPicker",null),g((0,i.M5)())},children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===k||void 0===k?void 0:k.upc_barcode}),(0,u.jsx)("div",{className:"name",children:null===k||void 0===k?void 0:k.name})]}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(b,{width:420,handleClick:e=>{let o={productId:e.productId,product:e.product,subAccount:e.subAccount};(0,i.Rz)("productPicker",o),(0,c.Rd)(e.productId,j)}}),null!==(s=(0,i.bh)("products_stock"))&&void 0!==s&&null!==(n=s[null===(r=(0,i.bh)("productPicker"))||void 0===r?void 0:r.productId])&&void 0!==n&&n.qty?(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(p,{init:null===(a=(0,i.bh)("productPicker"))||void 0===a?void 0:a.qty,label:"Cantidad",width:120,type:"number",updChanges:e=>((e,o,t)=>{let l=(0,i.bh)("productPicker")||{};t?(l[t]||(l[t]={}),l[t][e]=o):l[e]=o,(0,i.Rz)("productPicker",l),g((0,i.M5)())})("qty",e)}),(0,u.jsx)("div",{className:"flexSpace"}),null!==(v=(0,i.bh)("productPicker"))&&void 0!==v&&v.qty&&(null===(h=(0,i.bh)("productPicker"))||void 0===h?void 0:h.qty)<=(null===(m=(0,i.bh)("products_stock"))||void 0===m||null===(I=m[null===(_=(0,i.bh)("productPicker"))||void 0===_?void 0:_.productId])||void 0===I?void 0:I.qty)?(0,u.jsx)("div",{style:{marginTop:38},children:(0,u.jsx)("button",{onClick:()=>{var e,o,t,l,d,s;let n={...(0,i.bh)("productPicker")}||{},r={...(0,i.bh)("productPicker")}||{},a={...(0,i.bh)("productListOnOut")}||{},c=n.productId,u=(null===(e=(0,i.bh)("products_stock"))||void 0===e||null===(o=e[null===(t=(0,i.bh)("productPicker"))||void 0===t?void 0:t.productId])||void 0===o?void 0:o.amount)/(null===(l=(0,i.bh)("products_stock"))||void 0===l||null===(d=l[null===(s=(0,i.bh)("productPicker"))||void 0===s?void 0:s.productId])||void 0===d?void 0:d.qty);n.price=u,a[c]=n,(0,i.Rz)("productListOnOut",a),r.productId=null,r.qty="",r.price="",(0,i.Rz)("productPicker",r),g((0,i.M5)())},children:"Agregar"})}):null]}):null,(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50 ",children:"Producto"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Qty"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Costo (un)"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_5"})]}),(0,i.bh)("productListOnOut")&&(null===(y=(0,i._2)((0,i.bh)("productListOnOut")))||void 0===y?void 0:y.map(((e,o)=>(0,u.jsx)(f,{idKey:e,data:(0,i.bh)("productListOnOut")[e],deleteItem:w},e))))]})},f=e=>{var o;let{data:t,deleteItem:l,idKey:d}=e,s=null===(o=(0,i.bh)("products_ids"))||void 0===o?void 0:o[null===t||void 0===t?void 0:t.productId];return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50",children:null===s||void 0===s?void 0:s.name}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,i.Zv)(null===t||void 0===t?void 0:t.qty,2)}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,i.Zv)(null===t||void 0===t?void 0:t.price,2)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon",onClick:()=>{l(d)},children:(0,u.jsx)(v,{name:"outline_delete",color:"#c62828"})})]})}},713:(e,o,t)=>{t.d(o,{$P:()=>h,B8:()=>y,IR:()=>a,QJ:()=>p,Rd:()=>n,VI:()=>_,Ve:()=>v,WA:()=>I,ZW:()=>s,Zj:()=>m,fK:()=>i,ii:()=>u,nj:()=>b,qT:()=>r,qv:()=>c,yk:()=>d});var l=t(2350);const i=async(e,o)=>{var t,i;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.scan_voucher_production};d.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":e};const s=(0,l.I7)(d),n=await s;n&&!n.error&&(0,l._2)(n)&&(0,l._2)(n).length>0?o&&o(n):o&&o(null)},d=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.scan_voucher_production};if(i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,limit:120},(0,l.bh)("searchVoucherQry")&&(0,l.bh)("searchVoucherQry").length>1){(0,l.bh)("searchVoucherQry").split(" ").map(((e,o)=>{e&&(i.params[":search"+o]=e.trim())}));const o=(0,l.I7)(i),t=await o;t&&((0,l.Rz)("voucher_production",t),(0,l.Rz)("vouchers_list",m((0,l.jQ)(t),"voucherId")),e&&e())}else(0,l.Rz)("vouchers_list",null),e&&e()},s=async(e,o)=>{var t,i;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.get_inventory_prod};d.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":productId":e};const s=(0,l.I7)(d),n=await s;n&&((0,l.Rz)("inv_products_list",m((0,l.jQ)(n.list),"name")),(0,l.Rz)("inv_products_stock",n.stock),o&&o())},n=async(e,o)=>{var t,i;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.get_prod_stock};d.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,productId:e};const s=(0,l.I7)(d),n=await s;if(n){let t={...(0,l.bh)("products_stock")};t[e]=n.stock,(0,l.Rz)("products_stock",t),o&&o()}},r=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.all_prods};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId},i.subQuerys={},i.subQuerys.stock=1;const d=(0,l.I7)(i),s=await d;if(s){let o={},t=[],i=0;s.map((e=>{var d;if(null!==e&&void 0!==e&&null!==(d=e.inventory)&&void 0!==d&&d.qty){var s,n,r;if(i+=1*(0,l.Zv)(null===e||void 0===e||null===(s=e.inventory)||void 0===s?void 0:s.amount,2),o[e.unit])o[e.unit]+=null===e||void 0===e||null===(n=e.inventory)||void 0===n?void 0:n.qty;else o[e.unit]=null===e||void 0===e||null===(r=e.inventory)||void 0===r?void 0:r.qty;t.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,l.Ey)(e)&&e({list:m(t,"name"),total:i,units:o})}},a=async(e,o)=>{var t,i;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.group_prod_stock};d.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId};const s=(0,l.I7)(d),n=await s;if(n){let t=(0,l._I)(n.comps),i=0,d=0,s=0,r=[],a=[];(0,l._2)(e).map((o=>{let c={...e[o]},u=("debit"===e[o].type?1:-1)*e[o].amount,v=1*(0,l.Zv)(u,2);if(i+=v,n.comps[e[o].comprobanteId]){c.inventory=n.comps[e[o].comprobanteId];let i=0;if((0,l._2)(n.comps[e[o].comprobanteId]).map((t=>{i=1*(0,l.Zv)(i,2)+1*(0,l.Zv)(n.comps[e[o].comprobanteId][t],2)})),i=i<0?-1*i:i,i=1*(0,l.Zv)(i,2),c.inventoryAmount=i,d+=i,v=v<0?-1*v:v,v-i!==0){let e=v-i;s+=e,a.push(c),console.log("diff",c,v,i,e)}else r.push(c);delete t[e[o].comprobanteId]}else s+=u,a.push(c)}));let c=0;(0,l._2)(t).map((e=>{let o=0;(0,l._2)(t[e]).map((i=>{o=1*(0,l.Zv)(o,2)+1*(0,l.Zv)(t[e][i],2)})),c+=o})),console.log("inventoryBack",t,"inventoryBackTotal",c),(0,l.Rz)("inv_comprobantes_compare",{hasError:a,success:r,inventoryBack:t}),(0,l.Ey)(o)&&o()}},c=async e=>{var o,t,i;let d={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.filter_search_opera};d.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,l.bh)("date_current_year"),":account":null===(i=(0,l.bh)("global_account_params"))||void 0===i?void 0:i.inventory.account};const s=(0,l.I7)(d),n=await s;n&&!n.error&&(0,l.Ey)(e)&&e(m((0,l.jQ)(n),"date"))},u=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.all_prods};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId};const d=(0,l.I7)(i),s=await d;s&&((0,l.Rz)("products_list",m(s,"name")),(0,l.Rz)("products_ids",(0,l.ME)((0,l.jQ)(s),"productId")),e&&e())},v=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.search_prod};if(i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,limit:120},(0,l.bh)("searchQry").length>1){(0,l.bh)("searchQry").split(" ").map(((e,o)=>{e&&(i.params[":search"+o]=e.trim())}));const o=(0,l.I7)(i),t=await o;t&&((0,l.Rz)("products_list",m((0,l.jQ)(t),"code")),e&&e())}else(0,l.Rz)("products_list",null),e&&e()},p=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.all_entry_invoices};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId};const d=(0,l.I7)(i),s=await d;s&&((0,l.Rz)("movements_list",m(s,"date")),(0,l.Rz)("movements_ids",(0,l.ME)((0,l.jQ)(s),"inventoryId")),e&&e())},h=async e=>{var o;if((null===(o=(0,l.bh)("searchMovQry"))||void 0===o?void 0:o.length)>1){var t,i;let o={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.search_inventory};o.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":(0,l.bh)("searchMovQry")};const d=(0,l.I7)(o),s=await d;s&&((0,l.Rz)("movements_list",function(e){var o={};let t=e&&(0,l._2)(e);t.length>0?t.map((t=>{let l=e[t];o[l.comprobanteId]||(o[l.comprobanteId]={},o[l.comprobanteId].amount=0,o[l.comprobanteId].document=l.document,o[l.comprobanteId].date=l.date,o[l.comprobanteId].comprobanteId=l.comprobanteId,o[l.comprobanteId].products=[]),o[l.comprobanteId].amount+=l.qty*l.price,o[l.comprobanteId].products.push({productId:l.productId,qty:l.qty,price:l.price,inventoryId:l.inventoryId})})):o=null;return o}(s)),(0,l.Rz)("movements_ids",s),e&&e())}else(0,l.Rz)("movements_list",[]),(0,l.Rz)("movements_ids",{}),e&&e()};const m=(e,o)=>(0,l.MV)("sortProducts",[e],(()=>e&&e.sort(((e,t)=>{let l=e[o],i=t[o];return l<i?-1:l>i?1:0})))),b=async(e,o)=>{var t,i;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.delete_prod};d.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,productId:e};const s=(0,l.I7)(d);await s&&o&&o()},I=async(e,o)=>{var t,i;let d={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.delete_inventory};d.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,inventoryId:e};const s=(0,l.I7)(d);await s&&o&&o()},_=async(e,o)=>{var t,i;({...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.entry_invoice_acc_2}).params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,entriesInvoiceId:e}},y=(e,o)=>(0,l.MV)("rangeProdArr",[e,o],(()=>e?(0,l._2)(e).slice(0,o):[]))},1534:()=>{}}]);
//# sourceMappingURL=1879.2aa0f09c.chunk.js.map