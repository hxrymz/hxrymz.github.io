"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4493],{7852:(e,l,i)=>{i.d(l,{Z:()=>n});i(2791),i(1534);var d=i(9760),s=i(184);const n=e=>{let{data:l,confirm:i,handleClick:n,close:a}=e;const{modalID:o}=l;return(0,s.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,s.jsxs)("div",{className:"_dsplFlx ",children:[(0,s.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,s.jsx)("div",{className:"flexSpace"})]}),(0,s.jsx)("div",{className:"_dsplFlx ",children:(0,s.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,s.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,s.jsx)("div",{className:"flexSpace"}),(0,s.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,d.CloseModal)({id:o})},children:"OK"})]})]})}},4493:(e,l,i)=>{i.r(l),i.d(l,{default:()=>N});var d=i(2791),s=i(2350),n=(i(7889),i(24)),a=i(9760),o=i(713),t=i(2647),c=i(8779),r=i(7852),v=i(6824),p=i(4622),u=i(7709),m=i(184);const x=(0,t.PU)(),h=(0,n.AA)(),f=((0,n.P3)(),(0,t.tW)()),j="new_product_entry_comprobante",N=e=>{var l,i;let{data:n,elmId:t,handleRefreshAll:N}=e;const[g,_]=(0,d.useState)(!1),[b,y]=(0,d.useState)(0),[I,k]=(0,d.useState)(!1);(0,d.useEffect)((()=>{g||(_(!0),y((0,s.M5)()))}));const w=()=>{},C=()=>{};(0,o.Zj)(null===(l=(0,s.bh)("sub_product_group"))||void 0===l?void 0:l[n.productId],"subProduct");return(0,m.jsxs)("div",{className:"item_acc",children:[(0,m.jsxs)("div",{className:"_dsplFlx item_box product_header",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code centerBx",onClick:()=>(async()=>{if((0,s.I0)()){(0,s.Rz)(j,n),(0,s.Rz)(j+"_bck",JSON.parse(JSON.stringify(n))),(0,s.Rz)("productListOnVoucherCmp",n.products);let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(h,{confirm:w,updateView:!0}),(0,a.OpenModal)(e)}})(),children:null===n||void 0===n?void 0:n.invoice}),(0,m.jsx)("div",{className:"name centerBx",children:null===n||void 0===n?void 0:n.clientName})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:" addSbAcc purple centerBx",onClick:()=>(async()=>{k(!0),(0,s.Rz)("bluePrint",null);let e=n||{},l={invoice:null===e||void 0===e?void 0:e.invoice,date:null===e||void 0===e?void 0:e.date,clientAddress:null===e||void 0===e?void 0:e.clientAddress,clientName:null===e||void 0===e?void 0:e.clientName,products:[]},i=(new Date).getTime()+800;if(l.date){i=new Date(l.date).getTime()||i}l.date=i;const d=n.products.map((async e=>{var i,d;let n=null===(i=(0,s.bh)("products_ids"))||void 0===i?void 0:i[null===e||void 0===e?void 0:e.productId],a={};if(a.productName=null===n||void 0===n?void 0:n.name,a.qty=1*(null===e||void 0===e?void 0:e.qty),a.profile=null===e||void 0===e?void 0:e.profile,null!==e&&void 0!==e&&null!==(d=e.bluePrint)&&void 0!==d&&d.type){var o;let l=document.getElementById(e.productId+"_"+(null===e||void 0===e||null===(o=e.bluePrint)||void 0===o?void 0:o.type)),i=await p.YM(l);a.pngId=i}l.products.push(a)}));await Promise.all(d);let a=await(0,v.jD)(l);k(!1),window.open(a)})(),children:I?(0,m.jsxs)("div",{className:"icon_compr _dsplFlx centerBx",children:[(0,m.jsx)("div",{className:"lbl_saving ",children:"generating report ..."}),(0,m.jsx)(f,{stroke:"var(--partial-success)",size:24,strokeW:8})]}):(0,m.jsx)("div",{children:"Print"})}),(0,s.I0)()?(0,m.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:()=>{let e=(0,s.bh)("lastTimeCallModal")||0;if((0,s.I0)()){if(Date.now()>e){(0,s.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,m.jsx)(c.Z,{label:"Eliminar Voucher",confirm:C,item:n}),(0,a.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,m.jsx)(r.Z,{}),(0,a.OpenModal)(e)}},children:(0,m.jsx)(x,{name:"outline_delete",color:"#c62828"})}):null]}),(0,m.jsx)("div",{className:"rndImghidde",children:n.products&&(null===(i=n.products)||void 0===i?void 0:i.map(((e,l)=>{var i,d;const s={LL:(0,m.jsx)(u.gY,{item:e,svDm:null===e||void 0===e?void 0:e.bluePrint,addBlPr:()=>{},profile:null===e||void 0===e?void 0:e.profile},l+"_"+(null===e||void 0===e?void 0:e.productId)),U:(0,m.jsx)(u.Xu,{item:e,svDm:null===e||void 0===e?void 0:e.bluePrint,addBlPr:()=>{},profile:null===e||void 0===e?void 0:e.profile},l+"_"+(null===e||void 0===e?void 0:e.productId))};return null!==e&&void 0!==e&&null!==(i=e.bluePrint)&&void 0!==i&&i.type?s[null===e||void 0===e||null===(d=e.bluePrint)||void 0===d?void 0:d.type]:null})))})]})}},8779:(e,l,i)=>{i.d(l,{Z:()=>n});i(2791),i(1534);var d=i(9760),s=i(184);const n=e=>{let{data:l,confirm:i,label:n,close:a}=e;const{modalID:o}=l,t=e=>{(0,d.CloseModal)({id:o})};return(0,s.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,s.jsxs)("div",{className:"_dsplFlx ",children:[(0,s.jsx)("p",{className:"form_title",children:n}),(0,s.jsx)("div",{className:"flexSpace"})]}),(0,s.jsx)("div",{className:"_dsplFlx ",children:(0,s.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,s.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,s.jsx)("div",{className:"flexSpace"}),(0,s.jsx)("p",{className:"group_title addBtn",onClick:t,children:"Cancelar"}),(0,s.jsx)("p",{className:"group_title addBtn red",onClick:()=>{i(),t()},children:"Eliminar"})]})]})}}}]);
//# sourceMappingURL=4493.8a5b34d8.chunk.js.map