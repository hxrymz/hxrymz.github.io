"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1066,7766],{2964:(e,l,a)=>{a.r(l),a.d(l,{default:()=>m});var s=a(2791),d=a(2350),i=(a(7889),a(9760)),n=a(713),t=a(2647),o=a(8779),c=a(7852),r=(a(6824),a(184));const v=(0,t.PU)(),m=e=>{var l,a,t,m,x,h,p;let{data:u,handleRefreshAll:_}=e;const[f,j]=(0,s.useState)(!1),[b,N]=(0,s.useState)(0);(0,s.useEffect)((()=>{f||(j(!0),N((0,d.M5)()))}));const g=async()=>{if((0,d.I0)()){(0,d.Rz)("upd_product",u),(0,d.Rz)("upd_product_bck",JSON.parse(JSON.stringify(u)))}},C=()=>{(0,n.H9)(null===u||void 0===u?void 0:u.inventoryLocationId,_)};let y="".concat(null===(l=(0,d.bh)("locations_ids"))||void 0===l||null===(a=l[null===u||void 0===u?void 0:u.locationId])||void 0===a?void 0:a.areaId,"-").concat(null===(t=(0,d.bh)("locations_ids"))||void 0===t||null===(m=t[null===u||void 0===u?void 0:u.locationId])||void 0===m?void 0:m.location);return(0,r.jsx)("div",{className:"item_acc",children:(0,r.jsxs)("div",{className:"_dsplFlx item_box product_header",children:[(0,r.jsxs)("div",{className:"_dsplFlx tr_bar_90 ",children:[(0,r.jsx)("div",{className:"name tr_bar tr_bar_20 centerBx",children:"".concat((0,d.sJ)(null===u||void 0===u?void 0:u.date)," ").concat((0,d.Of)(null===u||void 0===u?void 0:u.date,1))}),(0,r.jsx)("div",{className:"name tr_bar tr_bar_20 centerBx",style:{marginLeft:14},children:y}),(0,r.jsx)("div",{className:"code tr_bar tr_bar_20 centerBx",style:{marginLeft:19},onClick:g,children:null===u||void 0===u?void 0:u.alphaCode}),(0,r.jsx)("div",{className:"name tr_bar tr_bar_20 centerBx",style:{marginLeft:19},onClick:g,children:null===(x=(0,d.bh)("ProductsOnScanItems"))||void 0===x||null===(h=x[null===u||void 0===u?void 0:u.productId])||void 0===h?void 0:h.name})]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,d.I0)()?null!==(p=(0,d.Ch)()[(0,d.bh)("date_current_year")])&&void 0!==p&&p.isClosed?null:(0,r.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:()=>{let e=(0,d.bh)("lastTimeCallModal")||0;if((0,d.I0)()){if(Date.now()>e){(0,d.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,r.jsx)(o.Z,{label:"Eliminar Registro",confirm:C,item:u}),(0,i.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,r.jsx)(c.Z,{}),(0,i.OpenModal)(e)}},children:(0,r.jsx)(v,{name:"outline_delete",color:"#c62828"})}):null]})})}},7852:(e,l,a)=>{a.d(l,{Z:()=>i});a(2791),a(1534);var s=a(9760),d=a(184);const i=e=>{let{data:l,confirm:a,handleClick:i,close:n}=e;const{modalID:t}=l;return(0,d.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"_dsplFlx ",children:(0,d.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,s.CloseModal)({id:t})},children:"OK"})]})]})}},8779:(e,l,a)=>{a.d(l,{Z:()=>i});a(2791),a(1534);var s=a(9760),d=a(184);const i=e=>{let{data:l,confirm:a,label:i,labelColor:n,body:t,btnConfirm:o,theme:c}=e;const{modalID:r}=l,v=e=>{(0,s.CloseModal)({id:r})};let m=c||"red";return(0,d.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",minWidth:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"form_title",style:n?{color:n}:null,children:i}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,d.jsx)("span",{children:t||"Una vez eliminado no podra ser recuperado"})}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn",onClick:v,children:"Cancelar"}),(0,d.jsx)("p",{className:"group_title addBtn ".concat(m),onClick:()=>{a&&a(),v()},children:o||"Eliminar"})]})]})}},7889:()=>{},1534:()=>{}}]);
//# sourceMappingURL=1066.e18a8b1d.chunk.js.map