"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2862],{1142:(e,l,i)=>{i.d(l,{Z:()=>t});var d=i(2791),s=(i(6732),i(2647)),n=i(6245),a=i(184);const r=(0,s.PU)(),t=e=>{var l;let{init:i,onSelect:s,lbl_empty:t,direction:c,background:o,color:u,width:v,func:p}=e;const[h,m]=(0,d.useState)([]),[x,_]=(0,d.useState)(!1),[b,j]=(0,d.useState)(""),N=(0,d.useRef)(!1);let f=(0,n.Z)(b);(0,d.useEffect)((()=>(f?g(f):m([]),()=>{})),[f]);const g=async e=>{let l=await p(e);m(l)},y=e=>{N.current?(N.current=!1,_(!1),e&&s(e)):N.current||(_(!0),setTimeout((()=>{N.current=!0}),50))};let k=null===(l=h.filter((e=>e.id===i)))||void 0===l?void 0:l[0],I=c||"left",C={"--color-pck":u||null,"--backColor-pck":o||null,"--width-pck":v||"130px"};return(0,a.jsxs)("div",{id:"drpdwn_click_outside",open:x,style:C,children:[(0,a.jsxs)("div",{className:"filter_month_btn _dsplFlx",onClick:y,children:[(0,a.jsx)("div",{className:"lbl date",children:(null===k||void 0===k?void 0:k.label)||t}),(0,a.jsx)(r,{name:"arrow_drop_down",color:"var(--color-pck)"})]}),x?(0,a.jsxs)("div",{className:"OpenBoxContainer",style:o?{backgroundColor:o}:null,direction:"".concat(I),children:[(0,a.jsx)("input",{className:"OpenBoxInput",placeholder:"search",onChange:async e=>{j(e.target.value)}}),(0,a.jsx)("div",{className:"separator"}),(0,a.jsx)("div",{className:" monthList",style:{},children:h.map(((e,l)=>{let i=e.label;return i?(0,a.jsx)("div",{className:"filter_month_item _dsplFlx",onClick:()=>{y(e)},children:(0,a.jsx)("div",{className:"lbl tr_bar_90 ",style:{marginLeft:5},children:i})},i+"_"+l):null}))})]}):null]})}},2862:(e,l,i)=>{i.r(l),i.d(l,{default:()=>y});var d=i(2791),s=i(2350),n=i(2647),a=(i(1534),i(9760)),r=i(7689),t=i(9661),c=i(24),o=(i(6824),i(9715),i(7709)),u=i(873),v=(i(4622),i(713)),p=i(1142),h=i(184);const m=(0,n.PU)(),x=(0,n.A5)(),_=(0,n.Np)(),b=((0,t.a)(),(0,n.JC)(),(0,t.LZ)(),(0,c.Az)()),j=(0,c.f_)(),N="new_voucher",f="productListOnVoucherCmp",g="productList2VoucherSelected",y=e=>{var l,i,n,t,c;let{data:u,confirm:v,updateView:p}=e;const[m,x]=(0,d.useState)(!1),[b,g]=(0,d.useState)(0);(0,r.s0)();(0,d.useEffect)((()=>{m||(x(!0),(0,s.Rz)("accountPicker",null),(0,s.Rz)("productListOnVoucherCmp",null),(0,s.Rz)("productList2VoucherSelected",null),g((0,s.M5)()))}));const y=(e,l,i)=>{let d=(0,s.bh)(N)||{};i?(d[i]||(d[i]={}),d[i][e]=l):d[e]=l,(0,s.Rz)(N,d),g((0,s.M5)())};return(0,h.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"93vh",width:"1060px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title",children:"Crear Voucher"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("p",{className:"label",children:"Invoice"}),(0,h.jsx)("div",{className:"date2Upd",style:{padding:7,fontSize:18},children:null===(l=(0,s.bh)(N))||void 0===l?void 0:l.invoice})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(j,{init:null===(i=(0,s.bh)(N))||void 0===i?void 0:i.date,updDate:e=>y("date",e)}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsx)(k,{}),(0,h.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,h.jsx)(_,{init:null===(n=(0,s.bh)(N))||void 0===n?void 0:n.clientName,label:"Nombre Cliente",width:520,updChanges:e=>y("clientName",e)})}),(0,h.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,h.jsx)(_,{init:null===(t=(0,s.bh)(N))||void 0===t?void 0:t.clientAddress,label:"Direccion",width:520,updChanges:e=>y("clientAddress",e)})}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("button",{onClick:async()=>{(0,s.Rz)("bluePrint",null);let e=(0,s.bh)(N)||{},l={invoice:null===e||void 0===e?void 0:e.invoice,date:null===e||void 0===e?void 0:e.date,clientAddress:null===e||void 0===e?void 0:e.clientAddress,clientName:null===e||void 0===e?void 0:e.clientName,products:[]},i=(new Date).getTime()+800;if(l.date){let e=new Date(l.date).getTime();i=e||i}if(l.date=i,l.products=(0,s.bh)(f),l.voucherId=(0,s.M5)(),p);else{var d,n;let e={...null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.add_voucher_production};e.params={businessId:null===(n=(0,s.bh)("profileUser"))||void 0===n?void 0:n.businessId},e.form=l;const i=(0,s.I7)(e);await i}(null===u||void 0===u?void 0:u.modalID)&&(0,a.CloseModal)({id:null===u||void 0===u?void 0:u.modalID}),setTimeout((()=>{(0,s.Rz)(f,null),(0,s.Rz)("provider_picker",null),(0,s.Rz)(N,null),g((0,s.M5)()),v&&v()}),400)},children:p?"Actualizar":"Guardar"})})]}),(0,h.jsx)("div",{className:"rndImghidde",children:(0,s.bh)(f)&&(null===(c=(0,s.bh)(f))||void 0===c?void 0:c.map(((e,l)=>{var i,d;const s={LL:(0,h.jsx)(o.gY,{item:e,svDm:null===e||void 0===e?void 0:e.bluePrint,addBlPr:()=>{},profile:null===e||void 0===e?void 0:e.profile}),U:(0,h.jsx)(o.Xu,{item:e,svDm:null===e||void 0===e?void 0:e.bluePrint,addBlPr:()=>{},profile:null===e||void 0===e?void 0:e.profile})};return null!==e&&void 0!==e&&null!==(i=e.bluePrint)&&void 0!==i&&i.type?s[null===e||void 0===e||null===(d=e.bluePrint)||void 0===d?void 0:d.type]:null})))})]})},k=e=>{var l,i,n,a,r,t,c,o,u,j,y;let{}=e;const[k,w]=(0,d.useState)(0),S=()=>{w((0,s.M5)())};let z=null===(l=(0,s.bh)("products_ids"))||void 0===l?void 0:l[null===(i=(0,s.bh)("product_picker_in"))||void 0===i?void 0:i.productId];const R=(e,l,i)=>{let d=(0,s.bh)("product_picker_in")||{};i?(d[i]||(d[i]={}),d[i][e]=l):d[e]=l,(0,s.Rz)("product_picker_in",d),w((0,s.M5)())},F=e=>{let l=(0,s.bh)(f)||[];l.splice(e,1),(0,s.Rz)(f,l),w((0,s.M5)())};let P=(0,s.bh)(g)||{};return(0,h.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(n=(0,s.bh)("product_picker_in"))&&void 0!==n&&n.productId?(0,h.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,h.jsxs)("div",{className:" acc_dtls",children:[(0,h.jsxs)("div",{className:"_dsplFlx",onClick:e=>{(0,s.Rz)("product_picker_in",null),w((0,s.M5)())},children:[(0,h.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===z||void 0===z?void 0:z.upc_barcode}),(0,h.jsx)("div",{className:"name",children:null===z||void 0===z?void 0:z.name})]}),(0,h.jsx)("div",{className:"flexSpace"})]})}):(0,h.jsx)(b,{width:420,handleClick:e=>{let l={productId:e.productId,unit:e.unit};(0,s.Rz)("product_picker_in",l),w((0,s.M5)())}}),null!==(a=(0,s.bh)("product_picker_in"))&&void 0!==a&&a.productId?(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(_,{init:null===(r=(0,s.bh)("product_picker_in"))||void 0===r?void 0:r.qty,label:"Cantidad",width:100,type:"number",updChanges:e=>R("qty",e)}),(0,h.jsx)("div",{className:"centerBx",style:{maxWidth:130,marginLeft:17,marginTop:13},children:(0,h.jsx)(x,{init:null===(t=(0,s.bh)("product_picker_in"))||void 0===t?void 0:t.profile,lbl_empty:"Profile",list:[{label:"choseOne",id:null},{label:"No",id:"-"},{label:"FLAT",id:"FLAT"},{label:"PENCIL",id:"PENCIL"},{label:"BEVEL",id:"BEVEL"},{label:"DEMI",id:"DEMI"},{label:"OGEE",id:"OGEE"},{label:"COBE",id:"COBE"},{label:"BULLNOSE",id:"BULLNOSE"}],onSelect:e=>R("profile",e.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)"})}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround centerBx",style:{maxWidth:130,marginLeft:17,marginTop:13},children:(0,h.jsx)(p.Z,{init:null===(c=(0,s.bh)("product_picker_in"))||void 0===c?void 0:c.inventoryId,lbl_empty:"Inventory",func:v.id,onSelect:e=>{return R("inventoryId",(l=e).id),void R("alphaCode",l.label);var l},background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"280px"})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"centerBx",children:null!==(o=(0,s.bh)("product_picker_in"))&&void 0!==o&&o.qty?(0,h.jsx)("button",{onClick:()=>{var e;let l={...(0,s.bh)("product_picker_in")}||{},i={...(0,s.bh)("product_picker_in")}||{},d=(0,s.bh)(f)||[];l.dimension&&(l.qty=1,l.squareFeet=I(null===l||void 0===l?void 0:l.dimension.split(",")[0],null===l||void 0===l?void 0:l.dimension.split(",")[1]),l.pricePerSquareFeet=1*l.price/l.squareFeet*1);let n=(new Date).getTime()+800;if(null!==(e=(0,s.bh)(N))&&void 0!==e&&e.date){let e=new Date((0,s.bh)(N).date).getTime();n=e||n}l.date=n,d.push(l),(0,s.Rz)(f,d),i.productId=null,i.qty="",i.price="",(0,s.Rz)("product_picker_in",i),w((0,s.M5)())},children:"Agregar"}):null})]}):null,(0,s._2)(P).length>0?(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,h.jsx)("div",{className:"tr_bar tr_bar_5 align_itm",children:(0,h.jsx)("div",{className:"icon align_itm",onClick:()=>{let e=(0,s.bh)(g)||{};(0,s._2)(e).length<(0,s.bh)(f).length?((0,s.bh)(f).map((l=>{e[l.inventoryId]=1})),(0,s.Rz)(g,e)):(0,s.Rz)(g,{}),w((0,s.M5)())},children:(0,h.jsx)(m,{name:(0,s._2)(P).length<(0,s.bh)(f).length?"minus-circle-outline":"check_circle_outline",color:"#646cff"})})}),(0,h.jsxs)("div",{className:"tr_bar tr_bar_20 align_itm left_alg",children:[(0,s._2)(P).length," Seleccionado(s)"]}),(0,h.jsx)("div",{className:"tr_bar tr_bar_70"}),(0,h.jsx)("div",{className:"tr_bar tr_bar_5 align_itm",children:(0,h.jsx)("div",{className:"icon align_itm",onClick:()=>{let e=(0,s.bh)(f).filter((e=>!P[e.inventoryId]));(0,s.Rz)(f,e),(0,s.Rz)(g,{}),w((0,s.M5)())},children:(0,h.jsx)(m,{name:"outline_delete",color:"#646cff"})})})]}):(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple align_itm",style:{margin:"18px 0"},children:[(0,h.jsx)("div",{className:"tr_bar tr_bar_5",children:null!==(u=(0,s.bh)(f))&&void 0!==u&&u.length?null===(j=(0,s.bh)(f))||void 0===j?void 0:j.length:""}),(0,h.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:"Producto"}),(0,h.jsx)("div",{className:"tr_bar tr_bar_10",children:"Inventario"}),(0,h.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,h.jsx)("div",{className:"tr_bar tr_bar_15",children:"Profile"}),(0,h.jsx)("div",{className:"tr_bar tr_bar_5"})]}),(0,s.bh)(f)&&(0,s.bh)(f).length>0&&(null===(y=(0,s.bh)(f))||void 0===y?void 0:y.map(((e,l)=>(0,h.jsx)(C,{idKey:e.productId,index:l,data:e,deleteItem:F,updObs:S},e.productId+"_"+l))))]})},I=(e,l)=>{let i=e*l*.0069444444444;return(0,s.Zv)(i,2)},C=e=>{var l;let{data:i,deleteItem:n,updObs:r,index:t}=e;const[c,o]=(0,d.useState)(!1);let v=null===(l=(0,s.bh)("products_ids"))||void 0===l?void 0:l[null===i||void 0===i?void 0:i.productId],p=(null===i||void 0===i?void 0:i.dimension)&&(null===i||void 0===i?void 0:i.dimension.split(",")[0])+" X "+(null===i||void 0===i?void 0:i.dimension.split(",")[1]);(null===i||void 0===i?void 0:i.dimension)&&(null===i||void 0===i||i.squareFeet,(0,s.Zv)(null===i||void 0===i?void 0:i.pricePerSquareFeet,2));const x=(0,d.useRef)(null),_=e=>{var l;null===x||void 0===x||null===(l=x.current)||void 0===l||l.showw(e)},b=e=>{let l={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};l.content=(0,h.jsx)(u.Z,{comp2Render:e,confirm:j,item:i}),(0,a.OpenModal)(l),r(),N()},j=e=>{let l={...i};l.bluePrint=e;let d=(0,s.bh)(f),n=((e,l)=>{let i=null;return e.map(((e,d)=>{e.productId===l&&(i=d)})),i})(d,l.productId);d[n]=l,(0,s.Rz)(f,d),r()},N=()=>{_(!1)};let y=(0,s.bh)(g)||{};return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar centerBx",children:[(0,h.jsx)("div",{className:"tr_bar tr_bar_5 icon ",onClick:()=>{let e=(0,s.bh)(g)||{};e[i.inventoryId]?delete e[i.inventoryId]:e[i.inventoryId]=1,(0,s.Rz)(g,e),r()},children:(0,h.jsx)(m,{name:y[i.inventoryId]?"check_circle_outline":"radio_unchecked",color:y[i.inventoryId]?"var(--hrm_palette-blue-purple)":"var(--hrm_palette-imput-label_gray)"})}),(0,h.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:null===v||void 0===v?void 0:v.name}),(0,h.jsx)("div",{className:"tr_bar tr_bar_10 centerBx",style:{marginTop:-4},children:null===i||void 0===i?void 0:i.alphaCode}),(0,h.jsx)("div",{className:"tr_bar tr_bar_15 centerBx",children:(0,s.Zv)(null===i||void 0===i?void 0:i.qty,2)}),(0,h.jsx)("div",{className:"tr_bar tr_bar_15 centerBx",children:null===i||void 0===i?void 0:i.profile}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:" relPos",children:[(0,h.jsx)(w,{ref:x,handleIcon1:()=>b("LL"),handleIcon2:()=>b("I"),handleIcon3:()=>b("U")}),null!==i&&void 0!==i&&i.profile?(0,h.jsx)("div",{className:"icon centerBx",onClick:()=>{(0,s.Rz)("bluePrint",null),null!==i&&void 0!==i&&i.bluePrint?b(null===i||void 0===i?void 0:i.bluePrint.type):_(!0)},children:(0,h.jsx)(m,{name:"vector-polygon",color:"var(--hrm_palette-imput-txt_gray)"})}):null]})]})},w=(0,d.forwardRef)(((e,l)=>{let{handleIcon1:i,handleIcon2:s,handleIcon3:n,close:a}=e;const[r,t]=(0,d.useState)(0);return(0,d.useImperativeHandle)(l,(()=>({showw(e){t(e)}}))),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"c5dXqd",style:{display:r?"block":"none"},children:r?(0,h.jsxs)("div",{className:"rR9aKd",role:"list",children:[(0,h.jsx)("div",{className:"ef3QKd",children:(0,h.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",children:[(0,h.jsx)("span",{children:(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"M5n4Ud",onClick:i,children:(0,h.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,h.jsx)(m,{name:"size-l",size:16})})})})}),(0,h.jsx)("div",{id:"_6Wu4ZMz5NpepptQPlL2l4Aw_4"})]})}),(0,h.jsx)("div",{className:"ef3QKd",role:"listitem",children:(0,h.jsx)("div",{"aria-label":"Save",role:"button",tabIndex:"0",children:(0,h.jsx)("div",{className:"M5n4Ud",onClick:s,children:(0,h.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,h.jsx)(m,{name:"rectangle-outline",size:16})})})})}),(0,h.jsx)("div",{className:"ef3QKd",children:(0,h.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",children:[(0,h.jsx)("span",{children:(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"M5n4Ud",onClick:n,children:(0,h.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,h.jsx)(m,{name:"keyboard-space",size:16})})})})}),(0,h.jsx)("div",{id:"_6Wu44fZMz5NpepptQPlL2l4Aw_4"})]})})]}):null}),r?(0,h.jsx)("div",{className:"Overlay_floatAct",onClick:()=>t(!1)}):null]})}))},9715:(e,l,i)=>{i.d(l,{Z:()=>t});var d=i(2791),s=(i(1534),i(9760)),n=i(2647),a=i(184);const r=(0,n.Np)(),t=e=>{let{data:l,confirm:i,label:n,close:t}=e;const[c,o]=(0,d.useState)(0),{modalID:u}=l,v=e=>{(0,s.CloseModal)({id:u})};return(0,a.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,a.jsxs)("div",{className:"_dsplFlx ",children:[(0,a.jsx)("p",{className:"form_title",children:n}),(0,a.jsx)("div",{className:"flexSpace"})]}),(0,a.jsx)("div",{className:"_dsplFlx ",children:(0,a.jsx)("span",{children:"Cuantas copias deseas hacer"})}),(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px 0"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)(r,{init:c,width:100,type:"number",updChanges:e=>o(1*e)}),(0,a.jsx)("div",{className:"flexSpace"})]}),(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("p",{className:"group_title addBtn",onClick:v,children:"Cancelar"}),(0,a.jsx)("p",{className:"group_title addBtn ",onClick:()=>{i(1*c),v()},children:"Crear Copias"})]})]})}},873:(e,l,i)=>{i.d(l,{Z:()=>t});var d=i(2791),s=(i(7889),i(1534),i(2647),i(2350)),n=i(9760),a=i(7709),r=i(184);const t=e=>{let{data:l,wT:i,hT:t,svDm:c,vertice:o,item:u,comp2Render:v,confirm:p,disable:h}=e;const[,m]=(0,d.useState)(1);(0,d.useEffect)((()=>{m((0,s.M5)())}),[o]);const x=e=>{p(e),_()},_=()=>{(null===l||void 0===l?void 0:l.modalID)&&(0,n.CloseModal)({id:null===l||void 0===l?void 0:l.modalID})},b={LL:(0,r.jsx)(a.gY,{item:u,wT:i,hT:t,svDm:null===u||void 0===u?void 0:u.bluePrint,addBlPr:x,profile:null===u||void 0===u?void 0:u.profile,disable:h}),U:(0,r.jsx)(a.Xu,{item:u,wT:i,hT:t,svDm:null===u||void 0===u?void 0:u.bluePrint,addBlPr:x,profile:null===u||void 0===u?void 0:u.profile,disable:h})};return(0,r.jsx)("div",{style:{maxHeight:"86vh",minHeight:"65vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:b[v]})}},6245:(e,l,i)=>{i.d(l,{Z:()=>s});var d=i(2791);const s=e=>{const[l,i]=(0,d.useState)(null),[s,n]=(0,d.useState)(""),[a,r]=(0,d.useState)(null);return(0,d.useEffect)((()=>{l||n(e),l>0&&l<Date.now()||a&&clearTimeout(a);let d=setTimeout((()=>{l>0&&l<Date.now()&&e!==s&&n(e)}),250);return r(d),i(Date.now()+220),()=>{}}),[e]),s}},6732:()=>{}}]);
//# sourceMappingURL=2862.dc30cfa7.chunk.js.map