"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9816],{1142:(e,l,d)=>{d.d(l,{Z:()=>o});var s=d(2791),a=(d(6732),d(2647)),i=d(6245),n=d(184);const t=(0,a.PU)(),o=e=>{var l;let{init:d,onSelect:a,lbl_empty:o,direction:r,background:c,color:v,width:u,func:h,extraParam:p}=e;const[x,m]=(0,s.useState)([]),[b,j]=(0,s.useState)(!1),[_,f]=(0,s.useState)(""),N=(0,s.useRef)(!1);let g=(0,i.Z)(_);(0,s.useEffect)((()=>(g?y(g):m([]),()=>{})),[g]);const y=async e=>{let l=await h(e,p);m(l)},I=e=>{N.current?(N.current=!1,j(!1),e&&a(e)):N.current||(j(!0),setTimeout((()=>{N.current=!0}),50))};let k=null===(l=x.filter((e=>e.id===d)))||void 0===l?void 0:l[0],S=r||"left",C={"--color-pck":v||null,"--backColor-pck":c||null,"--width-pck":u||"130px"};return(0,n.jsxs)("div",{id:"drpdwn_click_outside",open:b,style:C,children:[(0,n.jsxs)("div",{className:"filter_month_btn _dsplFlx",onClick:I,children:[(0,n.jsx)("div",{className:"lbl date",children:(null===k||void 0===k?void 0:k.label)||o}),(0,n.jsx)(t,{name:"arrow_drop_down",color:"var(--color-pck)"})]}),b?(0,n.jsxs)("div",{className:"OpenBoxContainer",style:c?{backgroundColor:c}:null,direction:"".concat(S),children:[(0,n.jsx)("input",{className:"OpenBoxInput",placeholder:"search",onChange:async e=>{f(e.target.value)}}),(0,n.jsx)("div",{className:"separator"}),(0,n.jsx)("div",{className:" monthList",style:{},children:x.map(((e,l)=>{let d=e.label;return d?(0,n.jsx)("div",{className:"filter_month_item _dsplFlx",onClick:()=>{I(e)},children:(0,n.jsx)("div",{className:"lbl tr_bar_90 ",style:{marginLeft:5},children:d})},d+"_"+l):null}))})]}):null]})}},3885:(e,l,d)=>{d.d(l,{Z:()=>i});d(2791),d(1534);var s=d(9760),a=d(184);const i=e=>{let{data:l,confirm:d,title:i,msg:n}=e;const{modalID:t}=l;return(0,a.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,a.jsxs)("div",{className:"_dsplFlx ",children:[(0,a.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:i||"Lo sentimos"}),(0,a.jsx)("div",{className:"flexSpace"})]}),n,(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{d&&d(),(0,s.CloseModal)({id:t})},children:"OK"})]})]})}},7852:(e,l,d)=>{d.d(l,{Z:()=>i});d(2791),d(1534);var s=d(9760),a=d(184);const i=e=>{let{data:l,confirm:d,handleClick:i,close:n}=e;const{modalID:t}=l;return(0,a.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,a.jsxs)("div",{className:"_dsplFlx ",children:[(0,a.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,a.jsx)("div",{className:"flexSpace"})]}),(0,a.jsx)("div",{className:"_dsplFlx ",children:(0,a.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,s.CloseModal)({id:t})},children:"OK"})]})]})}},9816:(e,l,d)=>{d.r(l),d.d(l,{default:()=>m});var s=d(2791),a=d(2350),i=d(2647),n=(d(1534),d(9760)),t=d(7689),o=(d(9661),d(24),d(6824),d(7709),d(873),d(4622),d(1142)),r=d(713),c=d(7852),v=d(3885),u=d(184);const h=(0,i.PU)(),p="view_voucher";let x=["clientAddress","clientName","date","invoice","locProdFinish","products","userId","voucherId"];const m=e=>{var l,d,i,r,h,m,_,N,g,y;let{data:I,confirm:k,updateView:S,voucherItem:C}=e;const[F,w]=(0,s.useState)(!1),[D,P]=(0,s.useState)(0);(0,t.s0)();(0,s.useEffect)((()=>{F||(w(!0),(0,a.Rz)("accountPicker",{}),P((0,a.M5)()))}));const B=async e=>{const l=(0,a.I7)(e);await l&&((0,a.Rz)(p,{}),(0,a.Rz)(p+"_bck",{}),P((0,a.M5)()),k&&k(),(null===I||void 0===I?void 0:I.modalID)&&(0,n.CloseModal)({id:null===I||void 0===I?void 0:I.modalID}))},M=async(e,l)=>{let d=(0,a.bh)(p)||{},s=(null===d||void 0===d?void 0:d.locProdFinish)||{};l?s[e]=0:s[e.id]=1,d.locProdFinish=s,(0,a.Rz)(p,d),P((0,a.M5)())},R=async()=>{var e,l;let d=(0,a.bh)(p)||{},s={...null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.upd_voucher_production};s.params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,voucherId:d.voucherId},s.data2update={voucherStatus:99},B(s)};let T=(0,a.vy)(x,(0,a.bh)(p),(0,a.bh)(p+"_bck"));return(0,u.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"93vh",width:"1060px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Voucher"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"label",children:"Invoice"}),(0,u.jsx)("div",{className:"date2Upd",style:{padding:7,fontSize:18},children:null===(l=(0,a.bh)(p))||void 0===l?void 0:l.invoice})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"label",children:"Fecha:"}),(0,u.jsx)("div",{className:"valueFontC9",children:(0,a.sJ)(null===(d=(0,a.bh)(p))||void 0===d?void 0:d.date)}),(0,u.jsx)("div",{className:"flexSpace"}),99!==(null===(i=(0,a.bh)(p))||void 0===i?void 0:i.voucherStatus)?(0,u.jsx)("button",{onClick:()=>{let e=(0,a.bh)("lastTimeCallModal")||0;if((0,a.I0)()){if(Date.now()>e){(0,a.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}},l=(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("span",{children:"Desea marcar el voucher como entregado"})});e.content=(0,u.jsx)(v.Z,{msg:l,title:"Esta seguro que? ",confirm:R}),(0,n.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,u.jsx)(c.Z,{}),(0,n.OpenModal)(e)}},children:"Instalado"}):(0,u.jsx)("div",{className:"date2Upd",style:{padding:7,fontSize:18},children:"Instalado"})]}),(0,u.jsx)(j,{list:null===(r=(0,a.bh)(p))||void 0===r?void 0:r.products,updList:async e=>{let l=(0,a.bh)(p)||{};l.products=e,(0,a.Rz)(p,l),P((0,a.M5)())}}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"label",children:"Locaciones del trabajo terminado:"}),(0,u.jsx)("div",{className:"flexSpace"}),99!==(null===(h=(0,a.bh)(p))||void 0===h?void 0:h.voucherStatus)?(0,u.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,u.jsx)(o.Z,{lbl_empty:"Location",func:async e=>f((0,a.bh)("location_drpdwn"),e),onSelect:e=>M(e),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"280px"})}):null,(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)("div",{className:"",children:(null===(m=(0,a.bh)(p))||void 0===m?void 0:m.locProdFinish)&&(null===(_=(0,a._2)(null===(N=(0,a.bh)(p))||void 0===N?void 0:N.locProdFinish))||void 0===_?void 0:_.map(((e,l)=>{var d,s,i;let n=null===(d=(0,a.bh)("locations_ids"))||void 0===d?void 0:d[e];return(null===(s=(0,a.bh)(p))||void 0===s||null===(i=s.locProdFinish)||void 0===i?void 0:i[e])?(0,u.jsx)(b,{locId:e,locItm:n,updlocDrop:M},e):null})))}),(0,u.jsx)("div",{className:"separator"}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"2px 0"},children:[(0,u.jsx)("p",{className:"label",children:"Nombre Cliente:"}),(0,u.jsx)("div",{className:"valueFontC9",children:null===(g=(0,a.bh)(p))||void 0===g?void 0:g.clientName})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"1px 0"},children:[(0,u.jsx)("p",{className:"label",children:"Direccion:"}),(0,u.jsx)("div",{className:"valueFontC9",children:null===(y=(0,a.bh)(p))||void 0===y?void 0:y.clientAddress})]}),null!==T&&void 0!==T&&T.hasChange?(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:async()=>{var e,l;let d=(0,a.bh)(p)||{},s=(0,a.vy)(x,d,(0,a.bh)(p+"_bck")),i={...null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.upd_voucher_production};i.params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,voucherId:d.voucherId},i.data2update=s.data,B(i)},children:"Actualizar"})}):null,(0,u.jsx)("div",{style:{padding:20}})]})},b=e=>{var l;let{locId:d,locItm:s,updlocDrop:i}=e;return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx centerBx locatKrt",children:[(0,u.jsx)("div",{style:{padding:"0 7px"},className:" centerBx",children:r.g5[null===s||void 0===s?void 0:s.areaId]}),(0,u.jsx)("div",{style:{padding:"0 7px"},className:"date2Upd centerBx",children:"".concat(null===s||void 0===s?void 0:s.areaId,"-").concat(null===s||void 0===s?void 0:s.location)}),(0,u.jsx)("div",{className:"flexSpace"}),99!==(null===(l=(0,a.bh)(p))||void 0===l?void 0:l.voucherStatus)?(0,u.jsx)("div",{className:"icon centerBx",onClick:()=>{i(d,1)},children:(0,u.jsx)(h,{name:"outline_delete",color:"#c62828"})}):null]}),(0,u.jsx)("div",{className:"flexSpace"})]})})},j=e=>{let{list:l,updList:d}=e;const[i,n]=(0,s.useState)(0),t=()=>{n((0,a.M5)())},o=e=>{let s="productId",a=N(l,s,e[s]),i=l;i[a]=e,d(i)};return(0,u.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple align_itm",style:{margin:"18px 0"},children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:"Producto"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20",children:"InventoryTag"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,u.jsx)("div",{className:"tr_bar tr_bar_15",children:"Profile"})]}),l&&l.length>0&&(null===l||void 0===l?void 0:l.map(((e,l)=>(0,u.jsx)(_,{idKey:e.productId,index:l,data:e,updObs:t,updItem:o},e.productId+"_"+l))))]})},_=e=>{var l,d;let{data:i,updItem:n,updObs:t,index:c}=e,v=null===(l=(0,a.bh)("products_ids"))||void 0===l?void 0:l[null===i||void 0===i?void 0:i.productId];(0,s.useRef)(null);return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar centerBx",children:[(0,u.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:null===v||void 0===v?void 0:v.name}),(0,u.jsx)("div",{className:"tr_bar tr_bar_20 centerBx",style:{marginTop:-4},children:null!==i&&void 0!==i&&i.inventoryId?(0,u.jsx)("div",{style:{padding:"0 7px"},className:"date2Upd",onClick:e=>{let l={...i};l.inventoryId=null,l.alphaCode=null,n(l)},children:null===i||void 0===i?void 0:i.alphaCode}):(0,u.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:99!==(null===(d=(0,a.bh)(p))||void 0===d?void 0:d.voucherStatus)?(0,u.jsx)(o.Z,{init:null===i||void 0===i?void 0:i.inventoryId,lbl_empty:"Inventory",func:r.id,onSelect:e=>(e=>{let l={...i};l.inventoryId=e.id,l.alphaCode=e.label,n(l)})(e),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"280px",extraParam:null===i||void 0===i?void 0:i.productId}):null})}),(0,u.jsx)("div",{className:"tr_bar tr_bar_15 centerBx",children:(0,a.Zv)(null===i||void 0===i?void 0:i.qty,2)}),(0,u.jsx)("div",{className:"tr_bar tr_bar_15 centerBx",children:null===i||void 0===i?void 0:i.profile})]})},f=(e,l)=>{let d=[];return e&&e.map((e=>{e.label.indexOf(l)>=0&&d.push(e)})),d},N=(e,l,d)=>{let s=null;return e&&e.map(((e,a)=>{e[l]===d&&(s=a)})),s}},873:(e,l,d)=>{d.d(l,{Z:()=>o});var s=d(2791),a=(d(7889),d(1534),d(2647),d(2350)),i=d(9760),n=d(7709),t=d(184);const o=e=>{let{data:l,wT:d,hT:o,svDm:r,vertice:c,item:v,comp2Render:u,confirm:h,disable:p}=e;const[,x]=(0,s.useState)(1);(0,s.useEffect)((()=>{x((0,a.M5)())}),[c]);const m=e=>{h(e),b()},b=()=>{(null===l||void 0===l?void 0:l.modalID)&&(0,i.CloseModal)({id:null===l||void 0===l?void 0:l.modalID})},j={LL:(0,t.jsx)(n.gY,{item:v,wT:d,hT:o,svDm:null===v||void 0===v?void 0:v.bluePrint,addBlPr:m,profile:null===v||void 0===v?void 0:v.profile,disable:p}),U:(0,t.jsx)(n.Xu,{item:v,wT:d,hT:o,svDm:null===v||void 0===v?void 0:v.bluePrint,addBlPr:m,profile:null===v||void 0===v?void 0:v.profile,disable:p})};return(0,t.jsx)("div",{style:{maxHeight:"86vh",minHeight:"65vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:j[u]})}},6245:(e,l,d)=>{d.d(l,{Z:()=>a});var s=d(2791);const a=e=>{const[l,d]=(0,s.useState)(null),[a,i]=(0,s.useState)(""),[n,t]=(0,s.useState)(null);return(0,s.useEffect)((()=>{l||i(e),l>0&&l<Date.now()||n&&clearTimeout(n);let s=setTimeout((()=>{l>0&&l<Date.now()&&e!==a&&i(e)}),250);return t(s),d(Date.now()+220),()=>{}}),[e]),a}},6732:()=>{}}]);
//# sourceMappingURL=9816.83254bae.chunk.js.map