"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1879],{1879:(d,e,l)=>{l.r(e),l.d(e,{default:()=>_});var t=l(2791),i=l(2350),c=l(2647),o=(l(1534),l(9760)),s=l(7689),r=l(9661),a=l(24),n=l(713),u=l(184);const v=(0,c.PU)(),p=(0,c.Np)(),h=(0,a.f_)(),m=(0,r.FC)(),b=(0,a.Az)(),x="new_product_out_comprobante",_=d=>{var e,l,c,r,a,v,m,b;let{data:_,confirm:y}=d;const[N,O]=(0,t.useState)(!1),[I,f]=(0,t.useState)(0),P=(0,s.s0)();(0,t.useEffect)((()=>{N||(O(!0),(0,i.Rz)("accountPicker",{}),f((0,i.M5)()))}));const g=(d,e,l)=>{let t=(0,i.bh)(x)||{};l?(t[l]||(t[l]={}),t[l][d]=e):t[d]=e,(0,i.Rz)(x,t),f((0,i.M5)())};return(0,u.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"750px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Salida de Mercancias"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(h,{init:null===(e=(0,i.bh)(x))||void 0===e?void 0:e.date,updDate:d=>g("date",d)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(p,{init:null===(l=(0,i.bh)(x))||void 0===l?void 0:l.document,label:"Documento",width:120,updChanges:d=>g("document",d)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(p,{init:null===(c=(0,i.bh)(x))||void 0===c?void 0:c.amount,label:"Importe de la venta",width:120,updChanges:d=>g("amount",d)})]}),(0,u.jsx)(p,{init:null===(r=(0,i.bh)(x))||void 0===r?void 0:r.description,label:"Descripcion",width:520,updChanges:d=>g("description",d)}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(j,{})]}),(0,u.jsx)(k,{}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),null!==(a=(0,i.bh)(x))&&void 0!==a&&a.document&&null!==(v=(0,i.bh)(x))&&void 0!==v&&v.amount&&null!==(m=(0,i.bh)("customerOutPicker"))&&void 0!==m&&m.account&&(null===(b=(0,i._2)((0,i.bh)("productListOnOut")))||void 0===b?void 0:b.length)>0?(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:async()=>{var d,e,l;let t=(0,i.bh)(x),c=(new Date).getTime()+800;if(t.date){let d=new Date(t.date).getTime();c=d||c}t.date=c;let s=[],r=await(0,i.fN)(t.date),a={date:t.date,comprobanteId:r,description:t.description,businessId:null===(d=(0,i.bh)("profileUser"))||void 0===d?void 0:d.businessId,year:new Date(t.date).getFullYear()};delete t.date;let u=0,v=0,p=[],h=(0,i.bh)("global_account_params"),m=(0,i.bh)("productListOnOut")&&(0,i._2)((0,i.bh)("productListOnOut"));if(m&&(null===m||void 0===m||m.map((async(d,e)=>{var l,o;let s={...(0,i.bh)("productListOnOut")[d]},r={...s};r.document=t.document.trim(),r.date=c,r.price=1*s.price,r.qty=-1*s.qty,r.comprobanteId=t.comprobanteId,r.inventoryId=(0,i.M5)(),delete r.product,delete r.account,delete r.subAccount;let a=1*s.qty*(1*s.price);u+=a,v+=a,r.amount=-1*a;let n={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.add_inventory};n.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId},n.form=r,p.push(n)}))),v>0){var b,j;let d={...t};d.type="credit",d.account=null===h||void 0===h||null===(b=h.inventory)||void 0===b?void 0:b.account,d.amount=v,d.operationId=(0,i.M5)(),s.push(d);let e={...t};e.type="debit",e.account=null===h||void 0===h||null===(j=h.inventory_expensess)||void 0===j?void 0:j.account,e.amount=v,e.operationId=(0,i.M5)(),s.push(e)}if(u>0&&(0,i.bh)("customerOutPicker").account){var k,N,O,I,g;let d={...t};d.type="debit",d.account=null===(k=(0,i.bh)("customerOutPicker"))||void 0===k?void 0:k.account,d.subAccount=null===(N=(0,i.bh)("customerOutPicker"))||void 0===N?void 0:N.subAccount,d.providerId=null===(O=(0,i.bh)("customerOutPicker"))||void 0===O?void 0:O.providerId,d.operationId=(0,i.M5)();let e=null===(I=(0,i.bh)("account_ids"))||void 0===I?void 0:I[null===(g=(0,i.bh)("customerOutPicker"))||void 0===g?void 0:g.account];e&&e.payOrCollect&&(d.payOrCollect=e.payOrCollect),d.amount=1*d.amount,s.push(d)}if(null!==h&&void 0!==h&&null!==(e=h.sales_income)&&void 0!==e&&e.account){var C;let d={...t};d.type="credit",d.account=null===h||void 0===h||null===(C=h.sales_income)||void 0===C?void 0:C.account,d.operationId=(0,i.M5)(),d.amount=1*d.amount,s.push(d)}let M={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.add_multi_opera};M.params=a,M.form=s;const w=(0,i.I7)(M);await w&&((0,i.DF)(p,n.pg),(null===_||void 0===_?void 0:_.modalID)&&(0,o.CloseModal)({id:null===_||void 0===_?void 0:_.modalID}),setTimeout((()=>{(0,i.Rz)("extraAccountListOnCmp",null),(0,i.Rz)("productListOnOut",null),(0,i.Rz)("customerOutPicker",null),(0,i.Rz)(x,null),f((0,i.M5)()),y&&y(),P({pathname:"/accounting-ledger",search:"?cId=".concat(r)})}),400))},children:"Guardar"})}):null]})]})},j=d=>{var e,l;let{}=d;const[c,o]=(0,t.useState)(0);let s=null===(e=(0,i.bh)("providers_ids"))||void 0===e?void 0:e[null===(l=(0,i.bh)("customerOutPicker"))||void 0===l?void 0:l.providerId];return(0,u.jsx)("div",{children:null!==s&&void 0!==s&&s.name?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsx)("div",{className:"_dsplFlx",children:(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:()=>{(0,i.Rz)("customerOutPicker",null),o((0,i.M5)())},children:null===s||void 0===s?void 0:s.name})}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(m,{placeholder:"buscar una provedor",width:320,handleClick:d=>{let e={providerId:d.providerId,account:d.account,subAccount:d.subAccount};(0,i.Rz)("customerOutPicker",e),o((0,i.M5)())}})})},k=d=>{var e,l,c,o,s,r,a,v,h,m,x,_,j;let{}=d;const[k,N]=(0,t.useState)(0),O=()=>{N((0,i.M5)())};let I=null===(e=(0,i.bh)("products_ids"))||void 0===e?void 0:e[null===(l=(0,i.bh)("productPicker"))||void 0===l?void 0:l.productId];const f=d=>{let e=(0,i.bh)("productListOnOut")||{};delete e[d],(0,i.Rz)("productListOnOut",e),N((0,i.M5)())};return(0,u.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(c=(0,i.bh)("productPicker"))&&void 0!==c&&c.productId?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",onClick:d=>{(0,i.Rz)("productPicker",null),N((0,i.M5)())},children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===I||void 0===I?void 0:I.upc_barcode}),(0,u.jsx)("div",{className:"name",children:null===I||void 0===I?void 0:I.name})]}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(b,{width:420,handleClick:d=>{let e={productId:d.productId,product:d.product,subAccount:d.subAccount};(0,i.Rz)("productPicker",e),(0,n.Rd)(d.productId,O)}}),null!==(o=(0,i.bh)("products_stock"))&&void 0!==o&&null!==(s=o[null===(r=(0,i.bh)("productPicker"))||void 0===r?void 0:r.productId])&&void 0!==s&&s.qty?(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(p,{init:null===(a=(0,i.bh)("productPicker"))||void 0===a?void 0:a.qty,label:"Cantidad",width:120,type:"number",updChanges:d=>((d,e,l)=>{let t=(0,i.bh)("productPicker")||{};l?(t[l]||(t[l]={}),t[l][d]=e):t[d]=e,(0,i.Rz)("productPicker",t),N((0,i.M5)())})("qty",d)}),(0,u.jsx)("div",{className:"flexSpace"}),null!==(v=(0,i.bh)("productPicker"))&&void 0!==v&&v.qty&&(null===(h=(0,i.bh)("productPicker"))||void 0===h?void 0:h.qty)<=(null===(m=(0,i.bh)("products_stock"))||void 0===m||null===(x=m[null===(_=(0,i.bh)("productPicker"))||void 0===_?void 0:_.productId])||void 0===x?void 0:x.qty)?(0,u.jsx)("div",{style:{marginTop:38},children:(0,u.jsx)("button",{onClick:()=>{var d,e,l,t,c,o;let s={...(0,i.bh)("productPicker")}||{},r={...(0,i.bh)("productPicker")}||{},a={...(0,i.bh)("productListOnOut")}||{},n=s.productId,u=(null===(d=(0,i.bh)("products_stock"))||void 0===d||null===(e=d[null===(l=(0,i.bh)("productPicker"))||void 0===l?void 0:l.productId])||void 0===e?void 0:e.amount)/(null===(t=(0,i.bh)("products_stock"))||void 0===t||null===(c=t[null===(o=(0,i.bh)("productPicker"))||void 0===o?void 0:o.productId])||void 0===c?void 0:c.qty);s.price=u,a[n]=s,(0,i.Rz)("productListOnOut",a),r.productId=null,r.qty="",r.price="",(0,i.Rz)("productPicker",r),N((0,i.M5)())},children:"Agregar"})}):null]}):null,(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50 ",children:"Producto"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Qty"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"Costo (un)"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_5"})]}),(0,i.bh)("productListOnOut")&&(null===(j=(0,i._2)((0,i.bh)("productListOnOut")))||void 0===j?void 0:j.map(((d,e)=>(0,u.jsx)(y,{idKey:d,data:(0,i.bh)("productListOnOut")[d],deleteItem:f},d))))]})},y=d=>{var e;let{data:l,deleteItem:t,idKey:c}=d,o=null===(e=(0,i.bh)("products_ids"))||void 0===e?void 0:e[null===l||void 0===l?void 0:l.productId];return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50",children:null===o||void 0===o?void 0:o.name}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,i.Zv)(null===l||void 0===l?void 0:l.qty,2)}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:(0,i.Zv)(null===l||void 0===l?void 0:l.price,2)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon",onClick:()=>{t(c)},children:(0,u.jsx)(v,{name:"outline_delete",color:"#c62828"})})]})}},1534:()=>{}}]);
//# sourceMappingURL=1879.ae307474.chunk.js.map