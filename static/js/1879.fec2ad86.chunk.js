"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1879,9760],{9760:(e,t,l)=>{l.r(t),l.d(t,{CloseModal:()=>r,OpenModal:()=>n,default:()=>a});var d=l(2791),i=l(5408),o=l(2350),c=l(184);const s="listDialog_mdh392",a=()=>{const e=(0,o.bh)("listDialog")||{};(0,i.Z)(s);let t=Object.keys(e);return(0,c.jsx)(c.Fragment,{children:t.map(((t,l)=>{let i=e[t];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let l={zIndex:i.zIndex},o=null,s=i.data;return i.content&&(o=d.cloneElement(i.content,{data:s})),(0,c.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,c.jsx)("div",{className:"ltr-hoe9xz",children:(0,c.jsx)("div",{className:"ltr-1wao6ny",style:l,id:t,children:o})}),i.data.overlay?(0,c.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},t)}}))})},n=e=>{let t=(0,o.bh)("listDialog")||{},l=(0,o.M5)();t[l]||(t[l]={}),t[l].visible=!0;let d={};e.props?(d=e.props,d.modalID=l):d.modalID=l;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),t[l].isView=e.isView,t[l].observeResize=e.observeResize,t[l].observeResize&&(t[l].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(l,"']")),d=e&&e.getBoundingClientRect();d&&(d.width===t[l].width&&d.height===t[l].height||(t[l].height=d.height+10,t[l].width=d.width,(0,o.Rz)("listDialog",t),(0,o.wt)(s)))}),200)),t[l].display=!0,e.zIndex&&(t[l].zIndex=e.zIndex),e.height&&(t[l].height=e.height),e.width&&(t[l].width=e.width),e.content&&(t[l].content=e.content),t[l].data=d,(0,o.Rz)("listDialog",t),(0,o.wt)(s),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",l),(0,o.wt)(s)}),125)},r=e=>{let t=(0,o.bh)("listDialog")||{},l=e.id;if(t[l]){var d,i,c;t[l].observeResize&&t[l].observeInterval&&clearInterval(t[l].observeInterval),t[l].display=!1,null===(d=t[l])||void 0===d||null===(i=d.data)||void 0===i||null===(c=i.closeEvent)||void 0===c||c.call(i),(0,o.Rz)("listDialog",t),delete t[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(s),setTimeout((()=>{delete t[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750)}}},1879:(e,t,l)=>{l.r(t),l.d(t,{default:()=>_});var d=l(2791),i=l(2350),o=l(2647),c=(l(1534),l(9760)),s=l(7689),a=l(9661),n=l(24),r=l(713),u=l(184);const v=(0,o.PU)(),h=(0,o.Np)(),p=(0,n.f_)(),m=(0,a.FC)(),b=(0,n.Az)(),x="new_product_out_comprobante",_=e=>{var t,l,o,a,n,r,v,m;let{data:b,confirm:_}=e;const[g,I]=(0,d.useState)(!1),[k,N]=(0,d.useState)(0),O=(0,s.s0)();(0,d.useEffect)((()=>{g||(I(!0),(0,i.Rz)("accountPicker",{}),N((0,i.M5)()))}));const w=(e,t,l)=>{let d=(0,i.bh)(x)||{};l?(d[l]||(d[l]={}),d[l][e]=t):d[e]=t,(0,i.Rz)(x,d),N((0,i.M5)())};return(0,u.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"750px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Salida de Mercancias"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(p,{init:null===(t=(0,i.bh)(x))||void 0===t?void 0:t.date,updDate:e=>w("date",e)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(h,{init:null===(l=(0,i.bh)(x))||void 0===l?void 0:l.document,label:"Documento",width:120,updChanges:e=>w("document",e)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(h,{init:null===(o=(0,i.bh)(x))||void 0===o?void 0:o.amount,label:"Importe de la venta",width:120,updChanges:e=>w("amount",e)})]}),(0,u.jsx)(h,{init:null===(a=(0,i.bh)(x))||void 0===a?void 0:a.description,label:"Descripcion",width:520,updChanges:e=>w("description",e)}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(j,{})]}),(0,u.jsx)(y,{}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),null!==(n=(0,i.bh)(x))&&void 0!==n&&n.document&&null!==(r=(0,i.bh)(x))&&void 0!==r&&r.amount&&null!==(v=(0,i.bh)("customerOutPicker"))&&void 0!==v&&v.account&&(null===(m=(0,i._2)((0,i.bh)("productListOnOut")))||void 0===m?void 0:m.length)>0?(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:async()=>{var e,t,l;let d=(0,i.bh)(x),o=(new Date).getTime()+800;if(d.date){let e=new Date(d.date).getTime();o=e||o}d.date=o;let s=[],a=await(0,i.fN)(d.date),n={date:d.date,comprobanteId:a,description:d.description,businessId:null===(e=(0,i.bh)("profileUser"))||void 0===e?void 0:e.businessId,year:new Date(d.date).getFullYear()};delete d.date;let r=0,u=0,v=(0,i.bh)("global_account_params"),h=(0,i.bh)("productListOnOut")&&(0,i._2)((0,i.bh)("productListOnOut"));if(h&&(null===h||void 0===h||h.map((async(e,t)=>{let l={...(0,i.bh)("productListOnOut")[e]},c={...l};c.document=d.document.trim(),c.date=o,c.price=1*l.price,c.qty=-1*l.qty,c.comprobanteId=d.comprobanteId,c.inventoryId=(0,i.M5)(),delete c.product,delete c.account,delete c.subAccount;let a=1*l.qty*(1*l.price);r+=a,u+=a,c.amount=-1*a,s.push(c)}))),u>0){var p,m;let e={...d};e.type="credit",e.account=null===v||void 0===v||null===(p=v.inventory)||void 0===p?void 0:p.account,e.amount=u,e.operationId=(0,i.M5)(),s.push(e);let t={...d};t.type="debit",t.account=null===v||void 0===v||null===(m=v.inventory_expensess)||void 0===m?void 0:m.account,t.amount=u,t.operationId=(0,i.M5)(),s.push(t)}if(r>0&&(0,i.bh)("customerOutPicker").account){var j,y,g,I,k;let e={...d};e.type="debit",e.account=null===(j=(0,i.bh)("customerOutPicker"))||void 0===j?void 0:j.account,e.subAccount=null===(y=(0,i.bh)("customerOutPicker"))||void 0===y?void 0:y.subAccount,e.providerId=null===(g=(0,i.bh)("customerOutPicker"))||void 0===g?void 0:g.providerId,e.operationId=(0,i.M5)();let t=null===(I=(0,i.bh)("account_ids"))||void 0===I?void 0:I[null===(k=(0,i.bh)("customerOutPicker"))||void 0===k?void 0:k.account];t&&t.payOrCollect&&(e.payOrCollect=t.payOrCollect),e.amount=1*e.amount,s.push(e)}if(null!==v&&void 0!==v&&null!==(t=v.sales_income)&&void 0!==t&&t.account){var w;let e={...d};e.type="credit",e.account=null===v||void 0===v||null===(w=v.sales_income)||void 0===w?void 0:w.account,e.operationId=(0,i.M5)(),e.amount=1*e.amount,s.push(e)}let f={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.add_multi_opera};f.params=n,f.form=s;const z=(0,i.I7)(f);await z&&((null===b||void 0===b?void 0:b.modalID)&&(0,c.CloseModal)({id:null===b||void 0===b?void 0:b.modalID}),setTimeout((()=>{(0,i.Rz)("extraAccountListOnCmp",null),(0,i.Rz)("productListOnOut",null),(0,i.Rz)("customerOutPicker",null),(0,i.Rz)(x,null),N((0,i.M5)()),_&&_(),O({pathname:"/accounting-ledger",search:"?cId=".concat(a)})}),400))},children:"Guardar"})}):null]})]})},j=e=>{var t,l;let{}=e;const[o,c]=(0,d.useState)(0);let s=null===(t=(0,i.bh)("providers_ids"))||void 0===t?void 0:t[null===(l=(0,i.bh)("customerOutPicker"))||void 0===l?void 0:l.providerId];return(0,u.jsx)("div",{children:null!==s&&void 0!==s&&s.name?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsx)("div",{className:"_dsplFlx",children:(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:()=>{(0,i.Rz)("customerOutPicker",null),c((0,i.M5)())},children:null===s||void 0===s?void 0:s.name})}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(m,{placeholder:"buscar una provedor",width:320,handleClick:e=>{let t={providerId:e.providerId,account:e.account,subAccount:e.subAccount};(0,i.Rz)("customerOutPicker",t),c((0,i.M5)())}})})},y=e=>{var t,l,o,c,s,a,n,v,p,m,x,_,j;let{}=e;const[y,I]=(0,d.useState)(0),k=()=>{I((0,i.M5)())};let N=null===(t=(0,i.bh)("products_ids"))||void 0===t?void 0:t[null===(l=(0,i.bh)("productPicker"))||void 0===l?void 0:l.productId];const O=e=>{let t=(0,i.bh)("productListOnOut")||{};delete t[e],(0,i.Rz)("productListOnOut",t),I((0,i.M5)())};return(0,u.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(o=(0,i.bh)("productPicker"))&&void 0!==o&&o.productId?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",onClick:e=>{(0,i.Rz)("productPicker",null),I((0,i.M5)())},children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===N||void 0===N?void 0:N.upc_barcode}),(0,u.jsx)("div",{className:"name",children:null===N||void 0===N?void 0:N.name})]}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(b,{width:420,handleClick:e=>{let t={productId:e.productId,product:e.product,subAccount:e.subAccount};(0,i.Rz)("productPicker",t),(0,r.Rd)(e.productId,k)}}),null!==(c=(0,i.bh)("products_stock"))&&void 0!==c&&null!==(s=c[null===(a=(0,i.bh)("productPicker"))||void 0===a?void 0:a.productId])&&void 0!==s&&s.qty?(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(h,{init:null===(n=(0,i.bh)("productPicker"))||void 0===n?void 0:n.qty,label:"Cantidad",width:120,type:"number",updChanges:e=>((e,t,l)=>{let d=(0,i.bh)("productPicker")||{};l?(d[l]||(d[l]={}),d[l][e]=t):d[e]=t,(0,i.Rz)("productPicker",d),I((0,i.M5)())})("qty",e)}),(0,u.jsx)("div",{className:"flexSpace"}),null!==(v=(0,i.bh)("productPicker"))&&void 0!==v&&v.qty&&(null===(p=(0,i.bh)("productPicker"))||void 0===p?void 0:p.qty)<=(null===(m=(0,i.bh)("products_stock"))||void 0===m||null===(x=m[null===(_=(0,i.bh)("productPicker"))||void 0===_?void 0:_.productId])||void 0===x?void 0:x.qty)?(0,u.jsx)("div",{style:{marginTop:38},children:(0,u.jsx)("button",{onClick:()=>{var e,t,l,d,o,c;let s={...(0,i.bh)("productPicker")}||{},a={...(0,i.bh)("productPicker")}||{},n={...(0,i.bh)("productListOnOut")}||{},r=s.productId,u=(null===(e=(0,i.bh)("products_stock"))||void 0===e||null===(t=e[null===(l=(0,i.bh)("productPicker"))||void 0===l?void 0:l.productId])||void 0===t?void 0:t.amount)/(null===(d=(0,i.bh)("products_stock"))||void 0===d||null===(o=d[null===(c=(0,i.bh)("productPicker"))||void 0===c?void 0:c.productId])||void 0===o?void 0:o.qty);s.price=u,n[r]=s,(0,i.Rz)("productListOnOut",n),a.productId=null,a.qty="",a.price="",(0,i.Rz)("productPicker",a),I((0,i.M5)())},children:"Agregar"})}):null]}):null,(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50 ",children:"Producto"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Qty"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Costo (un)"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_5"})]}),(0,i.bh)("productListOnOut")&&(null===(j=(0,i._2)((0,i.bh)("productListOnOut")))||void 0===j?void 0:j.map(((e,t)=>(0,u.jsx)(g,{idKey:e,data:(0,i.bh)("productListOnOut")[e],deleteItem:O},e))))]})},g=e=>{var t;let{data:l,deleteItem:d,idKey:o}=e,c=null===(t=(0,i.bh)("products_ids"))||void 0===t?void 0:t[null===l||void 0===l?void 0:l.productId];return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50",children:null===c||void 0===c?void 0:c.name}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,i.Zv)(null===l||void 0===l?void 0:l.qty,2)}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,i.Zv)(null===l||void 0===l?void 0:l.price,2)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon",onClick:()=>{d(o)},children:(0,u.jsx)(v,{name:"outline_delete",color:"#c62828"})})]})}},1534:()=>{}}]);
//# sourceMappingURL=1879.fec2ad86.chunk.js.map