"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9816],{1142:(l,e,d)=>{d.d(e,{Z:()=>t});var a=d(2791),i=(d(6732),d(2647)),s=d(6245),n=d(184);const r=(0,i.PU)(),t=l=>{var e;let{init:d,onSelect:i,lbl_empty:t,direction:c,background:o,color:v,width:u,func:p,extraParam:h}=l;const[x,m]=(0,a.useState)([]),[b,_]=(0,a.useState)(!1),[j,f]=(0,a.useState)(""),N=(0,a.useRef)(!1);let g=(0,s.Z)(j);(0,a.useEffect)((()=>(g?y(g):m([]),()=>{})),[g]);const y=async l=>{let e=await p(l,h);m(e)},I=l=>{N.current?(N.current=!1,_(!1),l&&i(l)):N.current||(_(!0),setTimeout((()=>{N.current=!0}),50))};let k=null===(e=x.filter((l=>l.id===d)))||void 0===e?void 0:e[0],w=c||"left",F={"--color-pck":v||null,"--backColor-pck":o||null,"--width-pck":u||"130px"};return(0,n.jsxs)("div",{id:"drpdwn_click_outside",open:b,style:F,children:[(0,n.jsxs)("div",{className:"filter_month_btn _dsplFlx",onClick:I,children:[(0,n.jsx)("div",{className:"lbl date",children:(null===k||void 0===k?void 0:k.label)||t}),(0,n.jsx)(r,{name:"arrow_drop_down",color:"var(--color-pck)"})]}),b?(0,n.jsxs)("div",{className:"OpenBoxContainer",style:o?{backgroundColor:o}:null,direction:"".concat(w),children:[(0,n.jsx)("input",{className:"OpenBoxInput",placeholder:"search",onChange:async l=>{f(l.target.value)}}),(0,n.jsx)("div",{className:"separator"}),(0,n.jsx)("div",{className:" monthList",style:{},children:x.map(((l,e)=>{let d=l.label;return d?(0,n.jsx)("div",{className:"filter_month_item _dsplFlx",onClick:()=>{I(l)},children:(0,n.jsx)("div",{className:"lbl tr_bar_90 ",style:{marginLeft:5},children:d})},d+"_"+e):null}))})]}):null]})}},9816:(l,e,d)=>{d.r(e),d.d(e,{default:()=>p});var a=d(2791),i=d(2350),s=d(2647),n=(d(1534),d(9760)),r=d(7689),t=(d(9661),d(24),d(6824),d(7709),d(873),d(4622),d(1142)),c=d(713),o=d(184);(0,s.PU)();const v="view_voucher";let u=["clientAddress","clientName","date","invoice","locProdFinish","products","userId","voucherId"];const p=l=>{var e,d,s,p,x,b,_,j;let{data:f,confirm:N,updateView:g,voucherItem:y}=l;const[I,k]=(0,a.useState)(!1),[w,F]=(0,a.useState)(0);(0,r.s0)();(0,a.useEffect)((()=>{I||(k(!0),(0,i.Rz)("accountPicker",{}),F((0,i.M5)()))}));const S=async l=>{const e=(0,i.I7)(l);await e&&((0,i.Rz)(v,{}),(0,i.Rz)(v+"_bck",{}),F((0,i.M5)()),N&&N(),(null===f||void 0===f?void 0:f.modalID)&&(0,n.CloseModal)({id:null===f||void 0===f?void 0:f.modalID}))};let C=(0,i.vy)(u,(0,i.bh)(v),(0,i.bh)(v+"_bck"));return(0,o.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"93vh",width:"1060px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",children:"Voucher"}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"label",children:"Invoice"}),(0,o.jsx)("div",{className:"date2Upd",style:{padding:7,fontSize:18},children:null===(e=(0,i.bh)(v))||void 0===e?void 0:e.invoice})]}),(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"label",children:"Fecha:"}),(0,o.jsx)("div",{className:"valueFontC9",children:(0,i.sJ)(null===(d=(0,i.bh)(v))||void 0===d?void 0:d.date)}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)(h,{list:null===(s=(0,i.bh)(v))||void 0===s?void 0:s.products,updList:async l=>{let e=(0,i.bh)(v)||{};e.products=l,(0,i.Rz)(v,e),F((0,i.M5)())}}),(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"label",children:"Locaciones del trabajo terminado:"}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,o.jsx)(t.Z,{lbl_empty:"Location",func:async l=>m((0,i.bh)("location_drpdwn"),l),onSelect:l=>(async l=>{let e=(0,i.bh)(v)||{},d=(null===e||void 0===e?void 0:e.locProdFinish)||{};d[l.id]=l,e.locProdFinish=d,(0,i.Rz)(v,e),F((0,i.M5)())})(l),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"280px"})}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"",children:(null===(p=(0,i.bh)(v))||void 0===p?void 0:p.locProdFinish)&&(null===(x=(0,i._2)(null===(b=(0,i.bh)(v))||void 0===b?void 0:b.locProdFinish))||void 0===x?void 0:x.map(((l,e)=>{var d;let a=null===(d=(0,i.bh)("locations_ids"))||void 0===d?void 0:d[l];return null!==a&&void 0!==a&&a.areaId?(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("div",{className:"flexSpace"}),c.g5[null===a||void 0===a?void 0:a.areaId],(0,o.jsx)("div",{style:{padding:"0 7px"},className:"date2Upd",children:"".concat(null===a||void 0===a?void 0:a.areaId,"-").concat(null===a||void 0===a?void 0:a.location)}),(0,o.jsx)("div",{className:"flexSpace"})]})},l):null})))}),(0,o.jsx)("div",{className:"separator"}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{margin:"2px 0"},children:[(0,o.jsx)("p",{className:"label",children:"Nombre Cliente:"}),(0,o.jsx)("div",{className:"valueFontC9",children:null===(_=(0,i.bh)(v))||void 0===_?void 0:_.clientName})]}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{margin:"1px 0"},children:[(0,o.jsx)("p",{className:"label",children:"Direccion:"}),(0,o.jsx)("div",{className:"valueFontC9",children:null===(j=(0,i.bh)(v))||void 0===j?void 0:j.clientAddress})]}),null!==C&&void 0!==C&&C.hasChange?(0,o.jsx)("div",{className:"card",children:(0,o.jsx)("button",{onClick:async()=>{var l,e;let d=(0,i.bh)(v)||{},a=(0,i.vy)(u,d,(0,i.bh)(v+"_bck")),s={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.upd_voucher_production};s.params={businessId:null===(e=(0,i.bh)("profileUser"))||void 0===e?void 0:e.businessId,voucherId:d.voucherId},s.data2update=a.data,S(s)},children:"Actualizar"})}):null,(0,o.jsx)("div",{style:{padding:20}})]})},h=l=>{let{list:e,updList:d}=l;const[s,n]=(0,a.useState)(0),r=()=>{n((0,i.M5)())},t=l=>{let a="productId",i=b(e,a,l[a]),s=e;s[i]=l,d(s)};return(0,o.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,o.jsxs)("div",{className:"_dsplFlx hdr_bar purple align_itm",style:{margin:"18px 0"},children:[(0,o.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:"Producto"}),(0,o.jsx)("div",{className:"tr_bar tr_bar_20",children:"InventoryTag"}),(0,o.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,o.jsx)("div",{className:"tr_bar tr_bar_15",children:"Profile"})]}),e&&e.length>0&&(null===e||void 0===e?void 0:e.map(((l,e)=>(0,o.jsx)(x,{idKey:l.productId,index:e,data:l,updObs:r,updItem:t},l.productId+"_"+e))))]})},x=l=>{var e;let{data:d,updItem:s,updObs:n,index:r}=l,v=null===(e=(0,i.bh)("products_ids"))||void 0===e?void 0:e[null===d||void 0===d?void 0:d.productId];(0,a.useRef)(null);return(0,o.jsxs)("div",{className:"_dsplFlx hdr_bar centerBx",children:[(0,o.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:null===v||void 0===v?void 0:v.name}),(0,o.jsx)("div",{className:"tr_bar tr_bar_20 centerBx",style:{marginTop:-4},children:null!==d&&void 0!==d&&d.inventoryId?(0,o.jsx)("div",{style:{padding:"0 7px"},className:"date2Upd",onClick:l=>{let e={...d};e.inventoryId=null,e.alphaCode=null,s(e)},children:null===d||void 0===d?void 0:d.alphaCode}):(0,o.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,o.jsx)(t.Z,{init:null===d||void 0===d?void 0:d.inventoryId,lbl_empty:"Inventory",func:c.id,onSelect:l=>(l=>{let e={...d};e.inventoryId=l.id,e.alphaCode=l.label,s(e)})(l),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"280px",extraParam:null===d||void 0===d?void 0:d.productId})})}),(0,o.jsx)("div",{className:"tr_bar tr_bar_15 centerBx",children:(0,i.Zv)(null===d||void 0===d?void 0:d.qty,2)}),(0,o.jsx)("div",{className:"tr_bar tr_bar_15 centerBx",children:null===d||void 0===d?void 0:d.profile})]})},m=(l,e)=>{let d=[];return l&&l.map((l=>{l.label.indexOf(e)>=0&&d.push(l)})),d},b=(l,e,d)=>{let a=null;return l&&l.map(((l,i)=>{l[e]===d&&(a=i)})),a}},873:(l,e,d)=>{d.d(e,{Z:()=>t});var a=d(2791),i=(d(7889),d(1534),d(2647),d(2350)),s=d(9760),n=d(7709),r=d(184);const t=l=>{let{data:e,wT:d,hT:t,svDm:c,vertice:o,item:v,comp2Render:u,confirm:p,disable:h}=l;const[,x]=(0,a.useState)(1);(0,a.useEffect)((()=>{x((0,i.M5)())}),[o]);const m=l=>{p(l),b()},b=()=>{(null===e||void 0===e?void 0:e.modalID)&&(0,s.CloseModal)({id:null===e||void 0===e?void 0:e.modalID})},_={LL:(0,r.jsx)(n.gY,{item:v,wT:d,hT:t,svDm:null===v||void 0===v?void 0:v.bluePrint,addBlPr:m,profile:null===v||void 0===v?void 0:v.profile,disable:h}),U:(0,r.jsx)(n.Xu,{item:v,wT:d,hT:t,svDm:null===v||void 0===v?void 0:v.bluePrint,addBlPr:m,profile:null===v||void 0===v?void 0:v.profile,disable:h})};return(0,r.jsx)("div",{style:{maxHeight:"86vh",minHeight:"65vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:_[u]})}},6245:(l,e,d)=>{d.d(e,{Z:()=>i});var a=d(2791);const i=l=>{const[e,d]=(0,a.useState)(null),[i,s]=(0,a.useState)(""),[n,r]=(0,a.useState)(null);return(0,a.useEffect)((()=>{e||s(l),e>0&&e<Date.now()||n&&clearTimeout(n);let a=setTimeout((()=>{e>0&&e<Date.now()&&l!==i&&s(l)}),250);return r(a),d(Date.now()+220),()=>{}}),[l]),i}},6732:()=>{}}]);
//# sourceMappingURL=9816.5c02a0a2.chunk.js.map