"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8969],{8969:(e,l,i)=>{i.r(l),i.d(l,{default:()=>y});var d=i(2791),n=i(2350),s=i(2647),r=(i(1534),i(9760)),a=i(7689),t=i(9661),o=i(24),c=(i(6824),i(9715),i(7709)),v=(i(7889),i(184));const h=e=>{let{data:l,wT:i,hT:s,svDm:a,vertice:t,item:o,comp2Render:h,confirm:u}=e;const[,p]=(0,d.useState)(1);(0,d.useEffect)((()=>{p((0,n.M5)())}),[t]);const m=e=>{u(e),x()},x=()=>{(null===l||void 0===l?void 0:l.modalID)&&(0,r.CloseModal)({id:null===l||void 0===l?void 0:l.modalID})},b={LL:(0,v.jsx)(c.gY,{item:o,wT:i,hT:s,svDm:null===o||void 0===o?void 0:o.bluePrint,addBlPr:m,profile:null===o||void 0===o?void 0:o.profile}),U:(0,v.jsx)(c.Xu,{item:o,wT:i,hT:s,svDm:null===o||void 0===o?void 0:o.bluePrint,addBlPr:m,profile:null===o||void 0===o?void 0:o.profile})};return(0,v.jsx)("div",{style:{maxHeight:"86vh",minHeight:"65vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:b[h]})};i(4622);const u=(0,s.PU)(),p=((0,s.YZ)(),(0,s.A5)()),m=(0,s.Np)(),x=((0,t.a)(),(0,s.JC)()),b=((0,t.LZ)(),(0,o.Az)()),_=(0,o.f_)(),j="new_product_entry_comprobante",f="productListOnVoucherCmp",N="productList2VoucherSelected";let g=[{productId:"hH2lVnw7JAiY0Ulg",unit:"S/F",qty:"1",profile:"COBE",inventoryId:"kYrHYgG11eflsVeJ",alphaCode:"MT-2548",date:1697818423967,bluePrint:{type:"U",vertices:{1:{vertice:1,isWall:1,width:92,profile:null},2:{vertice:2,needProfile:1,width:24,profile:"COBE"},3:{vertice:3,isWall:1,width:52,profile:null},4:{vertice:4,width:24,needProfile:1,profile:"COBE"},5:{vertice:5,needProfile:1,profile:"COBE"},6:{vertice:6,isWall:1,profile:null},8:{vertice:8,width:24,needProfile:1,profile:"COBE"},sink:{vertice:"sink",needProfile:1,width:28,height:18,xPos:32,yPos:"6",profile:"COBE"}}}},{productId:"P9ZnIAVrEq3zI1aJ",unit:"Uno",qty:"1",inventoryId:"ZANy7sILcOpt2QvF",alphaCode:"MT-0072",date:1697818507142},{productId:"ohQordOGWnhgRpIF",unit:"S/F",qty:"1",profile:"PENCIL",inventoryId:"EQrhQWOhHSEAWvJB",alphaCode:"MT-4886",date:1697818569508,bluePrint:{type:"LL",vertices:{1:{vertice:1,needProfile:0,isWall:1,width:92,profile:null},2:{vertice:2,width:24,needProfile:1,profile:"PENCIL"},3:{vertice:3,isWall:1,width:52,profile:null},4:{vertice:4,needProfile:1,width:24,profile:"PENCIL"},5:{vertice:5,needProfile:1,profile:"PENCIL"},6:{vertice:6,isWall:1,profile:null},sink:{vertice:"sink",needProfile:1,width:28,height:18,xPos:32,yPos:"6",profile:"PENCIL"}}}}];const y=e=>{var l,i,s,t,o,h,u,p,x;let{data:b,confirm:N,updateView:y}=e;const[C,P]=(0,d.useState)(!1),[k,w]=(0,d.useState)(0);(0,a.s0)();(0,d.useEffect)((()=>{C||(P(!0),(0,n.Rz)("accountPicker",{}),(0,n.Rz)(f,g),w((0,n.M5)()))}));const F=(e,l,i)=>{let d=(0,n.bh)(j)||{};i?(d[i]||(d[i]={}),d[i][e]=l):d[e]=l,(0,n.Rz)(j,d),w((0,n.M5)())};null===(l=(0,n.bh)("account_ids"))||void 0===l||l[null===(i=(0,n.bh)("accountPicker"))||void 0===i?void 0:i.account],null===(s=(0,n.bh)("sub_account_ids"))||void 0===s||s[null===(t=(0,n.bh)("accountPicker"))||void 0===t?void 0:t.subAccount];return(0,v.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"93vh",width:"1060px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Crear Voucher"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)(_,{init:null===(o=(0,n.bh)(j))||void 0===o?void 0:o.date,updDate:e=>F("date",e)}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)(m,{init:null===(h=(0,n.bh)(j))||void 0===h?void 0:h.invoice,label:"No Factura",width:120,updChanges:e=>F("invoice",e)})]}),(0,v.jsx)(I,{}),(0,v.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,v.jsx)(m,{init:null===(u=(0,n.bh)(j))||void 0===u?void 0:u.clientName,label:"Nombre Cliente",width:520,updChanges:e=>F("clientName",e)})}),(0,v.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,v.jsx)(m,{init:null===(p=(0,n.bh)(j))||void 0===p?void 0:p.clientAddress,label:"Direccion",width:520,updChanges:e=>F("clientAddress",e)})}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"card",children:(0,v.jsx)("button",{onClick:async()=>{(0,n.Rz)("bluePrint",null);let e=(0,n.bh)(j)||{},l={invoice:null===e||void 0===e?void 0:e.invoice,date:null===e||void 0===e?void 0:e.date,clientAddress:null===e||void 0===e?void 0:e.clientAddress,clientName:null===e||void 0===e?void 0:e.clientName,products:[]},i=(new Date).getTime()+800;if(l.date){let e=new Date(l.date).getTime();i=e||i}if(l.date=i,l.products=(0,n.bh)(f),l.voucherId=(0,n.M5)(),console.log(l),y);else{var d,s;let e={...null===(d=(0,n.bh)((0,n.hQ)()))||void 0===d?void 0:d.add_voucher_production};e.params={businessId:null===(s=(0,n.bh)("profileUser"))||void 0===s?void 0:s.businessId},e.form=l;const i=(0,n.I7)(e);await i}(null===b||void 0===b?void 0:b.modalID)&&(0,r.CloseModal)({id:null===b||void 0===b?void 0:b.modalID}),setTimeout((()=>{(0,n.Rz)(f,null),(0,n.Rz)("provider_picker",null),(0,n.Rz)(j,null),w((0,n.M5)()),N&&N()}),400)},children:y?"Actualizar":"Guardar"})})]}),(0,v.jsx)("div",{className:"rndImghidde",children:(0,n.bh)(f)&&(null===(x=(0,n.bh)(f))||void 0===x?void 0:x.map(((e,l)=>{var i,d;const n={LL:(0,v.jsx)(c.gY,{item:e,svDm:null===e||void 0===e?void 0:e.bluePrint,addBlPr:()=>{},profile:null===e||void 0===e?void 0:e.profile}),U:(0,v.jsx)(c.Xu,{item:e,svDm:null===e||void 0===e?void 0:e.bluePrint,addBlPr:()=>{},profile:null===e||void 0===e?void 0:e.profile})};return null!==e&&void 0!==e&&null!==(i=e.bluePrint)&&void 0!==i&&i.type?n[null===e||void 0===e||null===(d=e.bluePrint)||void 0===d?void 0:d.type]:null})))})]})},I=e=>{var l,i,s,r,a,t,o,c,h,x,_;let{}=e;const[g,y]=(0,d.useState)(0),I=()=>{y((0,n.M5)())};let k=null===(l=(0,n.bh)("products_ids"))||void 0===l?void 0:l[null===(i=(0,n.bh)("product_picker_in"))||void 0===i?void 0:i.productId];const w=(e,l,i)=>{let d=(0,n.bh)("product_picker_in")||{};i?(d[i]||(d[i]={}),d[i][e]=l):d[e]=l,(0,n.Rz)("product_picker_in",d),y((0,n.M5)())},F=e=>{let l=(0,n.bh)(f)||[];l.splice(e,1),(0,n.Rz)(f,l),y((0,n.M5)())};let z=(0,n.bh)(N)||{};return(0,v.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[null!==(s=(0,n.bh)("product_picker_in"))&&void 0!==s&&s.productId?(0,v.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,v.jsxs)("div",{className:" acc_dtls",children:[(0,v.jsxs)("div",{className:"_dsplFlx",onClick:e=>{(0,n.Rz)("product_picker_in",null),y((0,n.M5)())},children:[(0,v.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===k||void 0===k?void 0:k.upc_barcode}),(0,v.jsx)("div",{className:"name",children:null===k||void 0===k?void 0:k.name})]}),(0,v.jsx)("div",{className:"flexSpace"})]})}):(0,v.jsx)(b,{width:420,handleClick:e=>{let l={productId:e.productId,unit:e.unit};(0,n.Rz)("product_picker_in",l),y((0,n.M5)())}}),null!==(r=(0,n.bh)("product_picker_in"))&&void 0!==r&&r.productId?(0,v.jsxs)("div",{className:"_dsplFlx ",children:[k.hasDimension?(0,v.jsx)("div",{className:"",style:{width:270,marginLeft:18},children:(0,v.jsx)(m,{init:null===(a=(0,n.bh)("product_picker_in"))||void 0===a?void 0:a.dimension,label:"Dimension (width,height) in inch",width:100,updChanges:e=>w("dimension",e)})}):(0,v.jsx)(m,{init:null===(t=(0,n.bh)("product_picker_in"))||void 0===t?void 0:t.qty,label:"Cantidad",width:100,type:"number",updChanges:e=>w("qty",e)}),(0,v.jsx)("div",{className:"centerBx",style:{maxWidth:130,marginLeft:7},children:(0,v.jsx)(p,{init:null===(o=(0,n.bh)("product_picker_in"))||void 0===o?void 0:o.profile,lbl_empty:"Profile",list:[{label:"choseOne",id:null},{label:"No",id:"-"},{label:"FLAT",id:"FLAT"},{label:"PENCIL",id:"PENCIL"},{label:"BEVEL",id:"BEVEL"},{label:"DEMI",id:"DEMI"},{label:"OGEE",id:"OGEE"},{label:"COBE",id:"COBE"},{label:"BULLNOSE",id:"BULLNOSE"}],onSelect:e=>w("profile",e)})}),(0,v.jsx)("div",{className:"flexSpace"}),null!==(c=(0,n.bh)("product_picker_in"))&&void 0!==c&&c.qty?(0,v.jsx)("div",{className:"card",children:(0,v.jsx)("button",{onClick:()=>{var e;let l={...(0,n.bh)("product_picker_in")}||{},i={...(0,n.bh)("product_picker_in")}||{},d=(0,n.bh)(f)||[];l.dimension&&(l.qty=1,l.squareFeet=C(null===l||void 0===l?void 0:l.dimension.split(",")[0],null===l||void 0===l?void 0:l.dimension.split(",")[1]),l.pricePerSquareFeet=1*l.price/l.squareFeet*1),l.inventoryId=(0,n.M5)(),l.alphaCode=(0,n.Pb)();let s=(new Date).getTime()+800;if(null!==(e=(0,n.bh)(j))&&void 0!==e&&e.date){let e=new Date((0,n.bh)(j).date).getTime();s=e||s}l.date=s,d.push(l),(0,n.Rz)(f,d),i.productId=null,i.qty="",i.price="",(0,n.Rz)("product_picker_in",i),y((0,n.M5)())},children:"Agregar"})}):null]}):null,(0,n._2)(z).length>0?(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,v.jsx)("div",{className:"tr_bar tr_bar_5 align_itm",children:(0,v.jsx)("div",{className:"icon align_itm",onClick:()=>{let e=(0,n.bh)(N)||{};(0,n._2)(e).length<(0,n.bh)(f).length?((0,n.bh)(f).map((l=>{e[l.inventoryId]=1})),(0,n.Rz)(N,e)):(0,n.Rz)(N,{}),y((0,n.M5)())},children:(0,v.jsx)(u,{name:(0,n._2)(z).length<(0,n.bh)(f).length?"minus-circle-outline":"check_circle_outline",color:"#646cff"})})}),(0,v.jsxs)("div",{className:"tr_bar tr_bar_20 align_itm left_alg",children:[(0,n._2)(z).length," Seleccionado(s)"]}),(0,v.jsx)("div",{className:"tr_bar tr_bar_70"}),(0,v.jsx)("div",{className:"tr_bar tr_bar_5 align_itm",children:(0,v.jsx)("div",{className:"icon align_itm",onClick:()=>{let e=(0,n.bh)(f).filter((e=>!z[e.inventoryId]));(0,n.Rz)(f,e),(0,n.Rz)(N,{}),y((0,n.M5)())},children:(0,v.jsx)(u,{name:"outline_delete",color:"#646cff"})})})]}):(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar purple align_itm",style:{margin:"18px 0"},children:[(0,v.jsx)("div",{className:"tr_bar tr_bar_5",children:null!==(h=(0,n.bh)(f))&&void 0!==h&&h.length?null===(x=(0,n.bh)(f))||void 0===x?void 0:x.length:""}),(0,v.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:"Producto"}),(0,v.jsx)("div",{className:"tr_bar tr_bar_10",children:"Dimension"}),(0,v.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,v.jsx)("div",{className:"tr_bar tr_bar_15",children:"Profile"}),(0,v.jsx)("div",{className:"tr_bar tr_bar_5"})]}),(0,n.bh)(f)&&(0,n.bh)(f).length>0&&(null===(_=(0,n.bh)(f))||void 0===_?void 0:_.map(((e,l)=>(0,v.jsx)(P,{idKey:e.productId,index:l,data:e,deleteItem:F,updObs:I},e.productId+"_"+l))))]})},C=(e,l)=>{let i=e*l*.0069444444444;return(0,n.Zv)(i,2)},P=e=>{var l;let{data:i,deleteItem:s,updObs:a,index:t}=e;const[o,c]=(0,d.useState)(!1);let p=null===(l=(0,n.bh)("products_ids"))||void 0===l?void 0:l[null===i||void 0===i?void 0:i.productId],m=(null===i||void 0===i?void 0:i.dimension)&&(null===i||void 0===i?void 0:i.dimension.split(",")[0])+" X "+(null===i||void 0===i?void 0:i.dimension.split(",")[1]),b=(null===i||void 0===i?void 0:i.dimension)&&{lbl:m+" (inch)",hover:(null===i||void 0===i?void 0:i.squareFeet)+"S/F X $"+(0,n.Zv)(null===i||void 0===i?void 0:i.pricePerSquareFeet,2)};const _=(0,d.useRef)(null),j=e=>{var l;null===_||void 0===_||null===(l=_.current)||void 0===l||l.showw(e)},g=e=>{let l={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};l.content=(0,v.jsx)(h,{comp2Render:e,confirm:y,item:i}),(0,r.OpenModal)(l),a(),I()},y=e=>{let l={...i};console.log(l),l.bluePrint=e;let d=(0,n.bh)(f),s=((e,l)=>{let i=null;return e.map(((e,d)=>{e.productId===l&&(i=d)})),i})(d,l.productId);d[s]=l,console.log(s),console.log(d),(0,n.Rz)(f,d),console.log((0,n.bh)(f)),a()},I=()=>{j(!1)};let C=(0,n.bh)(N)||{};return(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar centerBx",children:[(0,v.jsx)("div",{className:"tr_bar tr_bar_5 icon ",onClick:()=>{let e=(0,n.bh)(N)||{};e[i.inventoryId]?delete e[i.inventoryId]:e[i.inventoryId]=1,(0,n.Rz)(N,e),a()},children:(0,v.jsx)(u,{name:C[i.inventoryId]?"check_circle_outline":"radio_unchecked",color:C[i.inventoryId]?"var(--hrm_palette-blue-purple)":"var(--hrm_palette-imput-label_gray)"})}),(0,v.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:null===p||void 0===p?void 0:p.name}),(0,v.jsx)("div",{className:"tr_bar tr_bar_10 centerBx",style:{marginTop:-4},children:null!==i&&void 0!==i&&i.dimension?(0,v.jsx)(x,{data:b,color:"#282828",labelField:"lbl",infoField:"hover"}):null}),(0,v.jsx)("div",{className:"tr_bar tr_bar_15 centerBx",children:(0,n.Zv)(null===i||void 0===i?void 0:i.qty,2)}),(0,v.jsx)("div",{className:"tr_bar tr_bar_15 centerBx",children:null===i||void 0===i?void 0:i.profile}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:" relPos",children:[(0,v.jsx)(k,{ref:_,handleIcon1:()=>g("LL"),handleIcon2:()=>g("I"),handleIcon3:()=>g("U")}),null!==i&&void 0!==i&&i.profile?(0,v.jsx)("div",{className:"icon centerBx",onClick:()=>{(0,n.Rz)("bluePrint",null),null!==i&&void 0!==i&&i.bluePrint?g(null===i||void 0===i?void 0:i.bluePrint.type):j(!0)},children:(0,v.jsx)(u,{name:"vector-polygon",color:"var(--hrm_palette-imput-txt_gray)"})}):null]})]})},k=(0,d.forwardRef)(((e,l)=>{let{handleIcon1:i,handleIcon2:n,handleIcon3:s,close:r}=e;const[a,t]=(0,d.useState)(0);return(0,d.useImperativeHandle)(l,(()=>({showw(e){t(e)}}))),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"c5dXqd",style:{display:a?"block":"none"},children:a?(0,v.jsxs)("div",{className:"rR9aKd",role:"list",children:[(0,v.jsx)("div",{className:"ef3QKd",children:(0,v.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",children:[(0,v.jsx)("span",{children:(0,v.jsx)("div",{children:(0,v.jsx)("div",{className:"M5n4Ud",onClick:i,children:(0,v.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,v.jsx)(u,{name:"size-l",size:16})})})})}),(0,v.jsx)("div",{id:"_6Wu4ZMz5NpepptQPlL2l4Aw_4"})]})}),(0,v.jsx)("div",{className:"ef3QKd",role:"listitem",children:(0,v.jsx)("div",{"aria-label":"Save",role:"button",tabIndex:"0",children:(0,v.jsx)("div",{className:"M5n4Ud",onClick:n,children:(0,v.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,v.jsx)(u,{name:"rectangle-outline",size:16})})})})}),(0,v.jsx)("div",{className:"ef3QKd",children:(0,v.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",children:[(0,v.jsx)("span",{children:(0,v.jsx)("div",{children:(0,v.jsx)("div",{className:"M5n4Ud",onClick:s,children:(0,v.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,v.jsx)(u,{name:"keyboard-space",size:16})})})})}),(0,v.jsx)("div",{id:"_6Wu44fZMz5NpepptQPlL2l4Aw_4"})]})})]}):null}),a?(0,v.jsx)("div",{className:"Overlay_floatAct",onClick:()=>t(!1)}):null]})}))},9715:(e,l,i)=>{i.d(l,{Z:()=>t});var d=i(2791),n=(i(1534),i(9760)),s=i(2647),r=i(184);const a=(0,s.Np)(),t=e=>{let{data:l,confirm:i,label:s,close:t}=e;const[o,c]=(0,d.useState)(0),{modalID:v}=l,h=e=>{(0,n.CloseModal)({id:v})};return(0,r.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:s}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("span",{children:"Cuantas copias deseas hacer"})}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px 0"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(a,{init:o,width:100,type:"number",updChanges:e=>c(1*e)}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"group_title addBtn",onClick:h,children:"Cancelar"}),(0,r.jsx)("p",{className:"group_title addBtn ",onClick:()=>{i(1*o),h()},children:"Crear Copias"})]})]})}}}]);
//# sourceMappingURL=8969.6827b465.chunk.js.map