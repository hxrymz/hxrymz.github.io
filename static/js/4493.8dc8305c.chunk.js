"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4493],{7852:(l,e,i)=>{i.d(e,{Z:()=>n});i(2791),i(1534);var d=i(9760),o=i(184);const n=l=>{let{data:e,confirm:i,handleClick:n,close:s}=l;const{modalID:a}=e;return(0,o.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"_dsplFlx ",children:(0,o.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,d.CloseModal)({id:a})},children:"OK"})]})]})}},4493:(l,e,i)=>{i.r(e),i.d(e,{default:()=>j});var d=i(2791),o=i(2350),n=(i(7889),i(24)),s=i(9760),a=i(713),c=i(2647),t=i(8779),r=i(7852),v=i(6824),u=(i(4622),i(7709)),p=i(184);const h=(0,c.PU)(),m=(0,n.qe)(),x=((0,n.P3)(),(0,c.tW)()),f="view_voucher",j=l=>{var e,i;let{data:n,elmId:c,handleRefreshAll:j}=l;const[N,g]=(0,d.useState)(!1),[_,b]=(0,d.useState)(0),[y,I]=(0,d.useState)(!1);(0,d.useEffect)((()=>{N||(g(!0),b((0,o.M5)()))}));const P=()=>{},k=()=>{};(0,a.Zj)(null===(e=(0,o.bh)("sub_product_group"))||void 0===e?void 0:e[n.productId],"subProduct");return(0,p.jsxs)("div",{className:"item_acc",children:[(0,p.jsxs)("div",{className:"_dsplFlx item_box product_header",children:[(0,p.jsxs)("div",{className:"_dsplFlx",children:[(0,p.jsx)("div",{className:"code centerBx",onClick:()=>(async()=>{if((0,o.I0)()){(0,o.Rz)(f,n),(0,o.Rz)(f+"_bck",JSON.parse(JSON.stringify(n))),(0,o.Rz)("productListOnVoucherCmp",n.products);let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,p.jsx)(m,{confirm:P,updateView:!0}),(0,s.OpenModal)(l)}})(),children:null===n||void 0===n?void 0:n.invoice}),(0,p.jsx)("div",{className:"name centerBx",children:null===n||void 0===n?void 0:n.clientName})]}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("div",{className:" addSbAcc purple centerBx",onClick:()=>(async()=>{I(!0),(0,o.Rz)("bluePrint",null);let l=n||{},e={invoice:null===l||void 0===l?void 0:l.invoice,date:null===l||void 0===l?void 0:l.date,clientAddress:null===l||void 0===l?void 0:l.clientAddress,clientName:null===l||void 0===l?void 0:l.clientName,products:[],locProdFinish:[]},i=(new Date).getTime()+800;if(e.date){i=new Date(e.date).getTime()||i}e.date=i;const d=(0,o.ye)((null===l||void 0===l?void 0:l.voucherId)+"");e.voucherIdQR=d;let s="";(null===n||void 0===n?void 0:n.locProdFinish)&&(0,o._2)(null===n||void 0===n?void 0:n.locProdFinish).map(((l,i)=>{var d,a;let c=null===(d=(0,o.bh)("locations_ids"))||void 0===d?void 0:d[l],t=null===n||void 0===n||null===(a=n.locProdFinish)||void 0===a?void 0:a[l];0===i?s+="".concat(null===c||void 0===c?void 0:c.areaId,"-").concat(null===c||void 0===c?void 0:c.location):i===(0,o._2)(null===n||void 0===n?void 0:n.locProdFinish).length-1?(t&&(s+="  |  ".concat(null===c||void 0===c?void 0:c.areaId,"-").concat(null===c||void 0===c?void 0:c.location)),e.locProdFinish.push(s),s=""):i>0&&i%6===0?(e.locProdFinish.push(s),s="",t&&(s+="".concat(null===c||void 0===c?void 0:c.areaId,"-").concat(null===c||void 0===c?void 0:c.location))):t&&(s+="  |  ".concat(null===c||void 0===c?void 0:c.areaId,"-").concat(null===c||void 0===c?void 0:c.location))}));const a=n.products.map((async l=>{var i,d;let n=null===(i=(0,o.bh)("products_ids"))||void 0===i?void 0:i[null===l||void 0===l?void 0:l.productId],s={};s.productName=null===n||void 0===n?void 0:n.name,s.qty=1*(null===l||void 0===l?void 0:l.qty),s.profile=null===l||void 0===l?void 0:l.profile,null!==l&&void 0!==l&&null!==(d=l.bluePrint)&&void 0!==d&&d.type,e.products.push(s)}));await Promise.all(a);let c=await(0,v.jD)(e);I(!1),window.open(c)})(),children:y?(0,p.jsxs)("div",{className:"icon_compr _dsplFlx centerBx",children:[(0,p.jsx)("div",{className:"lbl_saving ",children:"generating report ..."}),(0,p.jsx)(x,{stroke:"var(--partial-success)",size:24,strokeW:8})]}):(0,p.jsx)("div",{children:"Print"})}),(0,o.I0)()?(0,p.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:()=>{let l=(0,o.bh)("lastTimeCallModal")||0;if((0,o.I0)()){if(Date.now()>l){(0,o.Rz)("lastTimeCallModal",Date.now()+320);let l={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};l.content=(0,p.jsx)(t.Z,{label:"Eliminar Voucher",confirm:k,item:n}),(0,s.OpenModal)(l)}}else{let l={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};l.content=(0,p.jsx)(r.Z,{}),(0,s.OpenModal)(l)}},children:(0,p.jsx)(h,{name:"outline_delete",color:"#c62828"})}):null]}),(0,p.jsx)("div",{className:"rndImghidde",children:n.products&&(null===(i=n.products)||void 0===i?void 0:i.map(((l,e)=>{var i,d;const o={LL:(0,p.jsx)(u.gY,{item:l,svDm:null===l||void 0===l?void 0:l.bluePrint,addBlPr:()=>{},profile:null===l||void 0===l?void 0:l.profile},e+"_"+(null===l||void 0===l?void 0:l.productId)),U:(0,p.jsx)(u.Xu,{item:l,svDm:null===l||void 0===l?void 0:l.bluePrint,addBlPr:()=>{},profile:null===l||void 0===l?void 0:l.profile},e+"_"+(null===l||void 0===l?void 0:l.productId))};return null!==l&&void 0!==l&&null!==(i=l.bluePrint)&&void 0!==i&&i.type?o[null===l||void 0===l||null===(d=l.bluePrint)||void 0===d?void 0:d.type]:null})))})]})}},8779:(l,e,i)=>{i.d(e,{Z:()=>n});i(2791),i(1534);var d=i(9760),o=i(184);const n=l=>{let{data:e,confirm:i,label:n,body:s,btnConfirm:a}=l;const{modalID:c}=e,t=l=>{(0,d.CloseModal)({id:c})};return(0,o.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",children:n}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,o.jsx)("span",{children:s||"Una vez eliminado no podra ser recuperado"})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"group_title addBtn",onClick:t,children:"Cancelar"}),(0,o.jsx)("p",{className:"group_title addBtn red",onClick:()=>{i&&i(),t()},children:a||"Eliminar"})]})]})}}}]);
//# sourceMappingURL=4493.8dc8305c.chunk.js.map