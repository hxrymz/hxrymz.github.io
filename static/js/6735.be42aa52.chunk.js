"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6735,7766],{5174:(e,i,l)=>{l.r(i),l.d(i,{default:()=>g});var d=l(2791),s=l(2350),t=l(2647),c=(l(1534),l(9760)),a=l(7689),n=l(9661),r=l(24),o=l(6824),u=l(9715),p=l(184);const v=(0,t.PU)(),h=((0,t.YZ)(),(0,t.Np)()),m=(0,n.a)(),x=(0,t.JC)(),_=(0,n.LZ)(),b=(0,r.Az)(),j=(0,r.f_)(),N="new_product_entry_comprobante",g=e=>{var i,l,t,n,r,o,u,v,m,x;let{data:_,confirm:b}=e;const[g,f]=(0,d.useState)(!1),[k,I]=(0,d.useState)(0);(0,a.s0)();(0,d.useEffect)((()=>{g||(f(!0),(0,s.Rz)("accountPicker",{}),I((0,s.M5)()))}));const A=(e,i,l)=>{let d=(0,s.bh)(N)||{};l?(d[l]||(d[l]={}),d[l][e]=i):d[e]=i,(0,s.Rz)(N,d),I((0,s.M5)())};null===(i=(0,s.bh)("account_ids"))||void 0===i||i[null===(l=(0,s.bh)("accountPicker"))||void 0===l?void 0:l.account],null===(t=(0,s.bh)("sub_account_ids"))||void 0===t||t[null===(n=(0,s.bh)("accountPicker"))||void 0===n?void 0:n.subAccount];return(0,p.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"860px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("p",{className:"form_title",children:"Entrada de Mercancias"}),(0,p.jsx)("div",{className:"flexSpace"})]}),(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)(j,{init:null===(r=(0,s.bh)(N))||void 0===r?void 0:r.date,updDate:e=>A("date",e)}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)(h,{init:null===(o=(0,s.bh)(N))||void 0===o?void 0:o.document,label:"Documento",width:120,updChanges:e=>A("document",e)})]}),(0,p.jsx)(h,{init:null===(u=(0,s.bh)(N))||void 0===u?void 0:u.description,label:"Descripcion",width:520,updChanges:e=>A("description",e)}),(0,p.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)(C,{})]}),(0,p.jsx)(y,{}),(0,p.jsx)(L,{}),(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("div",{className:"flexSpace"}),null!==(v=(0,s.bh)(N))&&void 0!==v&&v.document&&null!==(m=(0,s.bh)("provider_picker"))&&void 0!==m&&m.account&&(null===(x=(0,s._2)((0,s.bh)("productListOnCmp")))||void 0===x?void 0:x.length)>0?(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("button",{onClick:async()=>{var e,i,l;let d=(0,s.bh)(N),t=(new Date).getTime()+800;if(d.date){let e=new Date(d.date).getTime();t=e||t}d.date=t;let a=0,n=[],r=[],o=[],u=(0,s.bh)("extraAccountListOnCmp")&&(0,s._2)((0,s.bh)("extraAccountListOnCmp"));u&&(null===u||void 0===u||u.map((async(e,i)=>{var l;let t={...d},c={...(0,s.bh)("extraAccountListOnCmp")[e]};t.account=c.account;let o=null===(l=(0,s.bh)("account_ids"))||void 0===l?void 0:l[c.account];o.payOrCollect&&(t.payOrCollect=o.payOrCollect),t.subAccount=c.subAccount,t.type=c.type,t.amount=1*c.amount,t.operationId=(0,s.M5)(),a+=1*c.amount,n.push(t),r.push(t)})));let p=0;if((0,s.bh)("productListOnCmp")&&(null===(e=(0,s.bh)("productListOnCmp"))||void 0===e||e.map((async(e,i)=>{let l={...e},s={...l},c=1*l.qty*(1*l.price);s.amount=c,s.document=d.document.trim(),s.date=t,a+=c,p+=c,o.push(s)}))),p>0){var v;let e={...d};e.type="debit",e.account=null===(v=(0,s.bh)("global_account_params"))||void 0===v?void 0:v.inventory.account,e.amount=p,e.operationId=(0,s.M5)(),r.push(e)}if(a>0&&(0,s.bh)("provider_picker").account){var h,m,x,j,g,C;let e={...d};e.type="credit",e.account=null===(h=(0,s.bh)("provider_picker"))||void 0===h?void 0:h.account,e.subAccount=null===(m=(0,s.bh)("provider_picker"))||void 0===m?void 0:m.subAccount,e.providerId=null===(x=(0,s.bh)("provider_picker"))||void 0===x?void 0:x.providerId,d.providerId=null===(j=(0,s.bh)("provider_picker"))||void 0===j?void 0:j.providerId,e.amount=1*a,e.operationId=(0,s.M5)();let i=null===(g=(0,s.bh)("account_ids"))||void 0===g?void 0:g[null===(C=(0,s.bh)("provider_picker"))||void 0===C?void 0:C.account];i&&i.payOrCollect&&(e.payOrCollect=i.payOrCollect),r.push(e)}d.extrasEntries=n,d.inventoryEntries=o,d.comprobantesEntries=r,d.entriesInvoiceId=(0,s.M5)();let y={...null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.add_entry_invoice};y.params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId},y.form=d;const f=(0,s.I7)(y);await f;(null===_||void 0===_?void 0:_.modalID)&&(0,c.CloseModal)({id:null===_||void 0===_?void 0:_.modalID}),setTimeout((()=>{(0,s.Rz)("extraAccountListOnCmp",null),(0,s.Rz)("productListOnCmp",null),(0,s.Rz)("provider_picker",null),(0,s.Rz)(N,null),I((0,s.M5)()),b&&b()}),400)},children:"Guardar"})}):null]})]})},C=e=>{var i,l;const[t,c]=(0,d.useState)(0);let a=null===(i=(0,s.bh)("providers_ids"))||void 0===i?void 0:i[null===(l=(0,s.bh)("provider_picker"))||void 0===l?void 0:l.providerId];return(0,p.jsx)("div",{children:null!==a&&void 0!==a&&a.name?(0,p.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,p.jsxs)("div",{className:" acc_dtls",children:[(0,p.jsx)("div",{className:"_dsplFlx",children:(0,p.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:()=>{(0,s.Rz)("provider_picker",null),c((0,s.M5)())},children:null===a||void 0===a?void 0:a.name})}),(0,p.jsx)("div",{className:"flexSpace"})]})}):(0,p.jsx)(_,{placeholder:"buscar una provedor",width:320,handleClick:e=>{let i={providerId:e.providerId,account:e.account,subAccount:e.subAccount};(0,s.Rz)("provider_picker",i),c((0,s.M5)())}})})},y=e=>{var i,l,t,c,a,n,r,u,m,x,_,j,g;let{}=e;const[C,y]=(0,d.useState)(0),I=()=>{y((0,s.M5)())};let A=null===(i=(0,s.bh)("products_ids"))||void 0===i?void 0:i[null===(l=(0,s.bh)("product_picker_in"))||void 0===l?void 0:l.productId];const L=(e,i,l)=>{let d=(0,s.bh)("product_picker_in")||{};l?(d[l]||(d[l]={}),d[l][e]=i):d[e]=i,(0,s.Rz)("product_picker_in",d),y((0,s.M5)())},O=e=>{let i=(0,s.bh)("productListOnCmp")||[];i.splice(e,1),(0,s.Rz)("productListOnCmp",i),y((0,s.M5)())};let M=(0,s.bh)("productListSelected")||{};return(0,p.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(t=(0,s.bh)("product_picker_in"))&&void 0!==t&&t.productId?(0,p.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,p.jsxs)("div",{className:" acc_dtls",children:[(0,p.jsxs)("div",{className:"_dsplFlx",onClick:e=>{(0,s.Rz)("product_picker_in",null),y((0,s.M5)())},children:[(0,p.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===A||void 0===A?void 0:A.upc_barcode}),(0,p.jsx)("div",{className:"name",children:null===A||void 0===A?void 0:A.name})]}),(0,p.jsx)("div",{className:"flexSpace"})]})}):(0,p.jsx)(b,{width:420,handleClick:e=>{let i={productId:e.productId,unit:e.unit};(0,s.Rz)("product_picker_in",i),y((0,s.M5)())}}),null!==(c=(0,s.bh)("product_picker_in"))&&void 0!==c&&c.productId?(0,p.jsxs)("div",{className:"_dsplFlx ",children:[A.hasDimension?(0,p.jsx)("div",{className:"",style:{width:270,marginLeft:18},children:(0,p.jsx)(h,{init:null===(a=(0,s.bh)("product_picker_in"))||void 0===a?void 0:a.dimension,label:"Dimension (width,height) in inch",width:100,updChanges:e=>L("dimension",e)})}):(0,p.jsx)(h,{init:null===(n=(0,s.bh)("product_picker_in"))||void 0===n?void 0:n.qty,label:"Cantidad",width:100,type:"number",updChanges:e=>L("qty",e)}),(0,p.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,p.jsx)(h,{init:null===(r=(0,s.bh)("product_picker_in"))||void 0===r?void 0:r.price,label:"Price",width:100,type:"number",updChanges:e=>L("price",e)})}),(0,p.jsx)("div",{className:"flexSpace"}),(null!==(u=(0,s.bh)("product_picker_in"))&&void 0!==u&&u.qty||null!==(m=(0,s.bh)("product_picker_in"))&&void 0!==m&&m.dimension)&&null!==(x=(0,s.bh)("product_picker_in"))&&void 0!==x&&x.price?(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("button",{onClick:()=>{var e;let i={...(0,s.bh)("product_picker_in")}||{},l={...(0,s.bh)("product_picker_in")}||{},d=(0,s.bh)("productListOnCmp")||[];i.dimension&&(i.qty=1,i.squareFeet=f(null===i||void 0===i?void 0:i.dimension.split(",")[0],null===i||void 0===i?void 0:i.dimension.split(",")[1]),i.pricePerSquareFeet=1*i.price/i.squareFeet*1),i.inventoryId=(0,s.M5)(),i.inventoryStatus=2,i.alphaCode=(0,s.Pb)();let t=(new Date).getTime()+800;if(null!==(e=(0,s.bh)(N))&&void 0!==e&&e.date){let e=new Date((0,s.bh)(N).date).getTime();t=e||t}i.date=t,d.push(i),(0,s.Rz)("productListOnCmp",d),l.productId=null,l.qty="",l.price="",(0,s.Rz)("product_picker_in",l),y((0,s.M5)())},children:"Agregar"})}):null]}):null,(0,s._2)(M).length>0?(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_5 align_itm",children:(0,p.jsx)("div",{className:"icon align_itm",onClick:()=>{let e=(0,s.bh)("productListSelected")||{};(0,s._2)(e).length<(0,s.bh)("productListOnCmp").length?((0,s.bh)("productListOnCmp").map((i=>{e[i.inventoryId]=1})),(0,s.Rz)("productListSelected",e)):(0,s.Rz)("productListSelected",{}),y((0,s.M5)())},children:(0,p.jsx)(v,{name:(0,s._2)(M).length<(0,s.bh)("productListOnCmp").length?"minus-circle-outline":"check_circle_outline",color:"#646cff"})})}),(0,p.jsxs)("div",{className:"tr_bar tr_bar_20 align_itm left_alg",children:[(0,s._2)(M).length," Seleccionado(s)"]}),(0,p.jsx)("div",{className:"tr_bar tr_bar_70"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_5 align_itm",children:(0,p.jsx)("div",{className:"icon align_itm",onClick:()=>{let e=(0,s.bh)("productListOnCmp").filter((e=>!M[e.inventoryId]));(0,s.Rz)("productListOnCmp",e),(0,s.Rz)("productListSelected",{}),y((0,s.M5)())},children:(0,p.jsx)(v,{name:"outline_delete",color:"#646cff"})})})]}):(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar purple align_itm",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_5",children:null!==(_=(0,s.bh)("productListOnCmp"))&&void 0!==_&&_.length?null===(j=(0,s.bh)("productListOnCmp"))||void 0===j?void 0:j.length:""}),(0,p.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:"Producto"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_10",children:"Dimension"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_15",children:"Precio"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_5",children:(0,p.jsx)("div",{className:"icon align_itm",onClick:()=>{(0,o.Hc)((0,s.bh)("productListOnCmp"))},children:(0,p.jsx)(v,{name:"printer",color:"#646cff"})})})]}),(0,s.bh)("productListOnCmp")&&(0,s.bh)("productListOnCmp").length>0&&(null===(g=(0,s.bh)("productListOnCmp"))||void 0===g?void 0:g.map(((e,i)=>(0,p.jsx)(k,{idKey:e.productId,index:i,data:e,deleteItem:O,updObs:I},e.productId+"_"+i))))]})},f=(e,i)=>{let l=e*i*.0069444444444;return(0,s.Zv)(l,2)},k=e=>{var i;let{data:l,deleteItem:t,updObs:a,index:n}=e;const[r,o]=(0,d.useState)(!1);let h=null===(i=(0,s.bh)("products_ids"))||void 0===i?void 0:i[null===l||void 0===l?void 0:l.productId],m=(null===l||void 0===l?void 0:l.dimension)&&(null===l||void 0===l?void 0:l.dimension.split(",")[0])+" X "+(null===l||void 0===l?void 0:l.dimension.split(",")[1]),_=(null===l||void 0===l?void 0:l.dimension)&&{lbl:m+" (inch)",hover:(null===l||void 0===l?void 0:l.squareFeet)+"S/F X $"+(0,s.Zv)(null===l||void 0===l?void 0:l.pricePerSquareFeet,2)};const b=(0,d.useRef)(null),j=e=>{var i;null===b||void 0===b||null===(i=b.current)||void 0===i||i.showw(e)},N=e=>{let i=(0,s.bh)("productListOnCmp");Array.from(Array(e).keys()).map((e=>{let d={...l};d.inventoryId=(0,s.M5)(),d.alphaCode=(0,s.Pb)(),i.push(d)})),(0,s.Rz)("productListOnCmp",i),a(),g()},g=()=>{j(!1)};let C=(0,s.bh)("productListSelected")||{};return(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_5 icon ",onClick:()=>{let e=(0,s.bh)("productListSelected")||{};e[l.inventoryId]?delete e[l.inventoryId]:e[l.inventoryId]=1,(0,s.Rz)("productListSelected",e),a()},children:(0,p.jsx)(v,{name:C[l.inventoryId]?"check_circle_outline":"radio_unchecked",color:C[l.inventoryId]?"var(--hrm_palette-blue-purple)":"var(--hrm_palette-imput-label_gray)"})}),(0,p.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:null===h||void 0===h?void 0:h.name}),(0,p.jsx)("div",{className:"tr_bar tr_bar_10",style:{marginTop:-4},children:null!==l&&void 0!==l&&l.dimension?(0,p.jsx)(x,{data:_,color:"#282828",labelField:"lbl",infoField:"hover"}):null}),(0,p.jsx)("div",{className:"tr_bar tr_bar_15",children:(0,s.Zv)(null===l||void 0===l?void 0:l.qty,2)}),(0,p.jsx)("div",{className:"tr_bar tr_bar_15",children:(0,s.Zv)(null===l||void 0===l?void 0:l.price,2)}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsxs)("div",{className:" relPos",children:[(0,p.jsx)(I,{ref:b,handleIcon1:()=>{let e={...l};e.inventoryId=(0,s.M5)(),e.alphaCode=(0,s.Pb)();let i=(0,s.bh)("productListOnCmp");i.push(e),(0,s.Rz)("productListOnCmp",i),a(),g()},handleIcon2:()=>{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,p.jsx)(u.Z,{label:"Copias Multiples",confirm:N,item:l}),(0,c.OpenModal)(e)},handleIcon3:()=>{t(n),g()}}),(0,p.jsx)("div",{className:"icon ",onClick:()=>{j(!0)},children:(0,p.jsx)(v,{name:"more_vert",color:"var(--hrm_palette-imput-txt_gray)"})})]})]})},I=(0,d.forwardRef)(((e,i)=>{let{handleIcon1:l,handleIcon2:s,handleIcon3:t,close:c}=e;const[a,n]=(0,d.useState)(0);return(0,d.useImperativeHandle)(i,(()=>({showw(e){n(e)}}))),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"c5dXqd",style:{display:a?"block":"none"},children:a?(0,p.jsxs)("div",{className:"rR9aKd",role:"list",children:[(0,p.jsx)("div",{className:"ef3QKd",children:(0,p.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",children:[(0,p.jsx)("span",{children:(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:"M5n4Ud",onClick:l,children:(0,p.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,p.jsx)(v,{name:"content-copy",size:16})})})})}),(0,p.jsx)("div",{id:"_6Wu4ZMz5NpepptQPlL2l4Aw_4"})]})}),(0,p.jsx)("div",{className:"ef3QKd",role:"listitem",children:(0,p.jsx)("div",{"aria-label":"Save",role:"button",tabIndex:"0",children:(0,p.jsx)("div",{className:"M5n4Ud",onClick:s,children:(0,p.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,p.jsx)(v,{name:"database-sync",size:16})})})})}),(0,p.jsx)("div",{className:"ef3QKd",children:(0,p.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",children:[(0,p.jsx)("span",{children:(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:"M5n4Ud",onClick:t,children:(0,p.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,p.jsx)(v,{name:"outline_delete",size:16})})})})}),(0,p.jsx)("div",{id:"_6Wu44fZMz5NpepptQPlL2l4Aw_4"})]})})]}):null}),a?(0,p.jsx)("div",{className:"Overlay_floatAct",onClick:()=>n(!1)}):null]})})),A=e=>{var i,l,t,a,n,r;let{data:o}=e;const[u,v]=(0,d.useState)(0);let x=null===(i=(0,s.bh)("account_ids"))||void 0===i?void 0:i[null===(l=(0,s.bh)("extraAccountPicker"))||void 0===l?void 0:l.account],_=null===(t=(0,s.bh)("sub_account_ids"))||void 0===t?void 0:t[null===(a=(0,s.bh)("extraAccountPicker"))||void 0===a?void 0:a.subAccount];return(0,p.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("p",{className:"form_title",children:"Agregar gastos extras"}),(0,p.jsx)("div",{className:"flexSpace"})]}),null!==(n=(0,s.bh)("extraAccountPicker"))&&void 0!==n&&n.account?(0,p.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,p.jsxs)("div",{className:" acc_dtls",children:[(0,p.jsxs)("div",{className:"_dsplFlx",onClick:()=>{(0,s.Rz)("extraAccountPicker",null),v((0,s.M5)())},children:[(0,p.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===x||void 0===x?void 0:x.code}),(0,p.jsx)("div",{className:"name",children:null===x||void 0===x?void 0:x.name})]}),_?(0,p.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,p.jsx)("div",{className:"code",children:null===_||void 0===_?void 0:_.subAccount}),(0,p.jsx)("div",{className:"name",children:null===_||void 0===_?void 0:_.subAccountName})]}):null,(0,p.jsx)("div",{className:"flexSpace"})]})}):(0,p.jsx)(m,{width:420,handleClick:(e,i)=>{let l={account:e,subAccount:i};(0,s.Rz)("extraAccountPicker",l),v((0,s.M5)())}}),(0,p.jsx)("div",{className:"",style:{maxWidth:130,marginLeft:7},children:(0,p.jsx)(h,{init:null===(r=(0,s.bh)("extraAccountPicker"))||void 0===r?void 0:r.amount,label:"Importe",width:120,type:"number",updChanges:e=>((e,i,l)=>{let d=(0,s.bh)("extraAccountPicker")||{};l?(d[l]||(d[l]={}),d[l][e]=i):d[e]=i,(0,s.Rz)("extraAccountPicker",d),v((0,s.M5)())})("amount",e)})}),(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("button",{onClick:()=>{let e={...(0,s.bh)("extraAccountPicker")}||{},i={...(0,s.bh)("extraAccountListOnCmp")}||{},l=e.account+"_"+e.subAccount;e.type="debit",i[l]=e,(0,s.Rz)("extraAccountListOnCmp",i),(0,s.Rz)("extraAccountPicker",null),v((0,s.M5)()),(0,c.CloseModal)({id:o.modalID})},children:"Agregar"})})]})},L=e=>{var i;let{}=e;const[l,t]=(0,d.useState)(0),a=e=>{let i=(0,s.bh)("extraAccountListOnCmp")||{};delete i[e],(0,s.Rz)("extraAccountListOnCmp",i),t((0,s.M5)())};return(0,p.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"_dsplFlx",children:(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,p.jsx)(A,{}),(0,c.OpenModal)(e)},children:"Agregar gastos"})}),(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Monto"})]}),(0,s.bh)("extraAccountListOnCmp")&&(null===(i=(0,s._2)((0,s.bh)("extraAccountListOnCmp")))||void 0===i?void 0:i.map(((e,i)=>(0,p.jsx)(O,{idKey:e,data:(0,s.bh)("extraAccountListOnCmp")[e],deleteItem:a},e))))]})},O=e=>{var i,l;let{data:d,deleteItem:t,idKey:c}=e,a=null===(i=(0,s.bh)("account_ids"))||void 0===i?void 0:i[null===d||void 0===d?void 0:d.account],n=null===(l=(0,s.bh)("sub_account_ids"))||void 0===l?void 0:l[null===d||void 0===d?void 0:d.subAccount];return(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,p.jsx)(x,{data:a,labelField:"name",infoField:"code"})}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,p.jsx)(x,{data:n,labelField:"subAccountName",infoField:"subAccount"})}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"debit"===(null===d||void 0===d?void 0:d.type)?(0,s.Zv)(null===d||void 0===d?void 0:d.amount,2):"0.00"}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("div",{className:"icon",onClick:()=>{t(c)},children:(0,p.jsx)(v,{name:"outline_delete",color:"#c62828"})})]})}},9715:(e,i,l)=>{l.d(i,{Z:()=>n});var d=l(2791),s=(l(1534),l(9760)),t=l(2647),c=l(184);const a=(0,t.Np)(),n=e=>{let{data:i,confirm:l,label:t,close:n}=e;const[r,o]=(0,d.useState)(0),{modalID:u}=i,p=e=>{(0,s.CloseModal)({id:u})};return(0,c.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:t}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)("span",{children:"Cuantas copias deseas hacer"})}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px 0"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(a,{init:r,width:100,type:"number",updChanges:e=>o(1*e)}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:p,children:"Cancelar"}),(0,c.jsx)("p",{className:"group_title addBtn ",onClick:()=>{l(1*r),p()},children:"Crear Copias"})]})]})}},1534:()=>{}}]);
//# sourceMappingURL=6735.be42aa52.chunk.js.map