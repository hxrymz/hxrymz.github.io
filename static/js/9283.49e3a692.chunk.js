"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9283],{1130:(i,d,e)=>{e.r(d),e.d(d,{default:()=>_});var s=e(2791),l=e(2350),a=e(2647),r=(e(1534),e(7689)),n=e(6824),o=e(4050),v=e(6677),c=e(713),t=e(9760),u=e(15),p=e(1087),m=e(184);const h=(0,a.PU)(),x=(0,a.JC)(),b=(0,a.YZ)(),_=i=>{let{data:d,confirm:e,item:a}=i;const[n,u]=(0,s.useState)(!1),[,h]=(0,s.useState)(0),[x,b]=(0,s.useState)(null);(0,r.s0)();(0,s.useEffect)((()=>{var i,d;n||(u(!0),(0,l.Rz)("accountPicker",{}),h((0,l.M5)()),(0,l.bh)("account_ids")||(0,o.ZX)(_),null!==(i=(0,l.bh)("providers_ids"))&&void 0!==i&&null!==(d=i[null===a||void 0===a?void 0:a.providerId])&&void 0!==d&&d.name||(0,v.Je)(_),(0,l.bh)("products_ids")||(0,c.ii)(_));(null===a||void 0===a?void 0:a.entriesInvoiceId)&&I(null===a||void 0===a?void 0:a.entriesInvoiceId,_)}),[a.providerId,null===a||void 0===a?void 0:a.entriesInvoiceId,n]);const _=async()=>{h((0,l.M5)())},I=async(i,d)=>{var e,s;let a={...null===(e=(0,l.bh)((0,l.hQ)()))||void 0===e?void 0:e.search_entry_invoice};if(a.params={businessId:null===(s=(0,l.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":i},i){var r;const e=(0,l.I7)(a),s=await e;var n,o,v;if(null!==s&&void 0!==s&&null!==(r=s[i])&&void 0!==r&&r.description)b(null===(n=(0,l.bh)("providers_ids"))||void 0===n||null===(o=n[null===s||void 0===s||null===(v=s[i])||void 0===v?void 0:v.providerId])||void 0===o?void 0:o.name),d&&d()}},N=()=>{};return(0,m.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"58vh",width:"860px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsxs)("p",{className:"form_title",children:[a.amount<0?"Salida":"Entrada"," de Mercancias"]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:"date2Upd",children:(0,l.sG)(null===a||void 0===a?void 0:a.date)})})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),null!==a&&void 0!==a&&a.comprobanteId?(0,m.jsxs)("div",{className:" ",onClick:async()=>{},children:[(0,m.jsx)("p",{className:"label",children:"Comprobante"}),(0,m.jsx)(p.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(null===a||void 0===a?void 0:a.comprobanteId)},children:(0,m.jsx)("div",{className:"date2Upd",onClick:()=>{d.modalID&&(0,t.CloseModal)({id:d.modalID})},children:null===a||void 0===a?void 0:a.comprobanteId})})]}):(0,m.jsx)("p",{className:"group_title addBtn purple",children:"Enviar a contabilidad"})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"label",children:"Documento"}),(0,m.jsx)("div",{className:"date2Upd",onClick:()=>{return i=null===a||void 0===a?void 0:a.document,void(0,l.vQ)(i,N);var i},children:null===a||void 0===a?void 0:a.document})]})]}),(0,m.jsx)(j,{data:a.products,entriesInvoiceId:null===a||void 0===a?void 0:a.entriesInvoiceId,prov:x}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{margin:"4px 1px 5px 10px"},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"date2Upd",style:{margin:"0px 7px"},children:"Balance:"}),"$",a.amount.toFixed(2)]})]})},j=i=>{let{data:d,entriesInvoiceId:e,prov:a}=i;const[r,o]=(0,s.useState)(!1);return(0,m.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:17},children:[(0,m.jsx)(b,{initvalue:r,keyCode:77,updChange:o}),(0,m.jsx)("span",{className:"checklabel",children:"Labels 2X4"})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:"Producto"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_15",children:"Dimension"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_15",children:"Precio"}),(0,m.jsx)("div",{className:"tr_bar tr_bar_5",children:(0,m.jsx)("div",{className:"icon",onClick:()=>{let i=[];d.map((d=>{var e;i.push(null===(e=(0,l.bh)("movements_ids"))||void 0===e?void 0:e[d.inventoryId])})),r?(0,n.Hc)(i):(0,n.z6)(i,a||"")},children:(0,m.jsx)(h,{name:"printer",color:"#646cff"})})})]}),d&&d.length>0&&(null===d||void 0===d?void 0:d.map(((i,d)=>(0,m.jsx)(I,{idKey:i.productId,index:d,data:i},i.productId+"_"+d))))]})},I=i=>{var d;let{data:e,index:s}=i,a=null===(d=(0,l.bh)("products_ids"))||void 0===d?void 0:d[null===e||void 0===e?void 0:e.productId],r=(null===e||void 0===e?void 0:e.dimension)&&(null===e||void 0===e?void 0:e.dimension.split(",")[0])+" X "+(null===e||void 0===e?void 0:e.dimension.split(",")[1]),n=(null===e||void 0===e?void 0:e.dimension)&&{lbl:r+" (inch)",hover:(null===e||void 0===e?void 0:e.squareFeet)+"S/F X $"+(0,l.Zv)(null===e||void 0===e?void 0:e.pricePerSquareFeet,2)};const o=()=>{(0,u.OpenToast)({text:"Copied to clipobard",timeout:1500})},v=i=>{(0,l.vQ)(i,o)};return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar tr_bar_50 left_alg",children:null===a||void 0===a?void 0:a.name}),(0,m.jsx)("div",{className:"tr_bar tr_bar_15",style:{marginTop:-4},children:null!==e&&void 0!==e&&e.dimension?(0,m.jsx)(x,{data:n,color:"#282828",labelField:"lbl",infoField:"hover"}):null}),(0,m.jsx)("div",{className:"tr_bar tr_bar_15",onClick:()=>v((0,l.Zv)(null===e||void 0===e?void 0:e.qty,2)),children:(0,l.Zv)(null===e||void 0===e?void 0:e.qty,2)}),(0,m.jsx)("div",{className:"tr_bar tr_bar_15",onClick:()=>v((0,l.Zv)(null===e||void 0===e?void 0:e.price,2)),children:(0,l.Zv)(null===e||void 0===e?void 0:e.price,2)}),(0,m.jsx)("div",{className:"flexSpace"})]})}},6677:(i,d,e)=>{e.d(d,{Je:()=>l,Qn:()=>o,UO:()=>a,mQ:()=>n});var s=e(2350);const l=async i=>{var d,e;let l={...null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.all_prov_cust};l.params={businessId:null===(e=(0,s.bh)("profileUser"))||void 0===e?void 0:e.businessId};const a=(0,s.I7)(l),n=await a;n&&((0,s.Rz)("providers_list",r((0,s.jQ)(n),"name",1)),(0,s.Rz)("providers_ids",(0,s.ME)((0,s.jQ)(n),"providerId")),i&&i())},a=async i=>{var d,e;let l={...null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.search_prov_cust};l.params={businessId:null===(e=(0,s.bh)("profileUser"))||void 0===e?void 0:e.businessId,":search":(0,s.bh)("search_prov")};const a=(0,s.I7)(l),n=await a;n&&((0,s.Rz)("providers_list",r((0,s.jQ)(n),"name",1)),i&&i())};const r=(i,d,e)=>(0,s.MV)("sortProviders",[i],(()=>i&&i.sort(((i,s)=>{let l=1*i[d],a=1*s[d];return l<a?e?-1:1:l>a?e?1:-1:0})))),n=(i,d)=>(0,s.MV)("sortSubProviders",[i],(()=>i&&i.sort(((i,e)=>{let s=1*i[d],l=1*e[d];return s<l?-1:s>l?1:0})))),o=async(i,d)=>{var e,l;let a={...null===(e=(0,s.bh)((0,s.hQ)()))||void 0===e?void 0:e.delete_prov_cust};a.params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId,providerId:i};const r=(0,s.I7)(a);await r&&d&&d()}},1534:()=>{}}]);
//# sourceMappingURL=9283.49e3a692.chunk.js.map