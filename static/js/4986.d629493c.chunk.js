"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4986,7766],{7174:(l,s,e)=>{e.r(s),e.d(s,{default:()=>_});var a=e(2791),d=(e(261),e(2350)),i=e(7689),n=e(9760),t=e(2647),o=e(4050),r=e(713),c=e(6677),v=e(1894),m=e(184);const x=(0,t.PU)(),_=l=>{var s,e,t,_,p,g,j,b;let{data:N,item:F}=l;const[y,f]=(0,a.useState)(0);(0,a.useEffect)((()=>{var l,s,e;(0,d.Rz)("inv_products_list",null),(0,d.Rz)("inv_products_stock",null),null!==(l=(0,d.bh)("providers_ids"))&&void 0!==l&&null!==(s=l[null===F||void 0===F||null===(e=F.customer)||void 0===e?void 0:e.providerId])&&void 0!==s&&s.name||(0,c.Je)(S),(0,d.bh)("products_ids")||(0,r.ii)(S),(0,o.Ht)("global_accounts","global_account_params",S),S()}),[F.productId]);const S=()=>{f((0,d.M5)())},k=((0,i.s0)(),l=>{(0,n.CloseModal)({id:N.modalID})});let A=null!==F&&void 0!==F&&F.hasTax?(null===F||void 0===F?void 0:F.hasTax)+(null===F||void 0===F?void 0:F.amount):1*(null===F||void 0===F?void 0:F.amount);let I=null!==F&&void 0!==F&&F.hasAdvancePay?null===F||void 0===F?void 0:F.hasAdvancePay:0;return(0,m.jsxs)("div",{style:{maxHeight:"94vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"title_collect gSansFont",children:"Invoice:"}),(0,m.jsx)("p",{className:"title_collect fntW600 gSansFont",style:{color:"#646cff"},children:null===F||void 0===F?void 0:F.document}),(0,m.jsx)("div",{className:"flexSpace"}),(0,d.I0)()?(0,m.jsx)("div",{className:"code comprobante_id  gSansFont",style:{color:"#646cff",paddingTop:10},children:null===F||void 0===F?void 0:F.comprobanteId}):null,(0,m.jsx)("div",{className:"icon_print",onClick:()=>{let l={...F};(0,v.C)([l])},children:(0,m.jsx)(x,{name:"printer",color:"var(--hrm_palette-static-ad-yellow)"})}),(0,m.jsx)("div",{className:"icon_print",onClick:()=>{let l={...F};(0,v.n)(l)},children:(0,m.jsx)(x,{name:"printer",color:"var(--hrm_palette-inverse-background-b)"})})]}),(0,m.jsx)("div",{className:"acc_dtls",style:{marginTop:10,marginLeft:2},children:(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"name",children:(0,m.jsx)("div",{className:" code gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)"},children:(0,d.sJ)(null===F||void 0===F?void 0:F.date)})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"name gSansFont",style:{marginRight:5,color:"var(--hrm_palette-item_coll_gray)"},children:"Bill To:"}),(0,m.jsx)("div",{className:"code gSansFont",style:{color:"#646cff"},children:null===(s=(0,d.bh)("providers_ids"))||void 0===s||null===(e=s[null===F||void 0===F||null===(t=F.customer)||void 0===t?void 0:t.providerId])||void 0===e?void 0:e.name})]})]})}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:8},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("div",{className:"name gSansFont",style:{color:"var(--hrm_palette-item_coll_gray)"},children:null===F||void 0===F?void 0:F.description})})]}),(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_70",style:{textAlign:"left",paddingLeft:14},children:(0,d.zE)(4)}),(0,m.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,d.zE)(10)}),(0,m.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,d.zE)(14)})]}),(0,m.jsxs)("div",{className:"scollVh subMHeight",style:{height:"calc(84vh - 142px)"},children:[F.products&&(null===(_=F.products)||void 0===_?void 0:_.map((l=>(0,m.jsx)(h,{element:l,idKey:l.inventoryId,close:k},l.inventoryId)))),F.extras&&(null===(p=(0,d._2)(F.extras))||void 0===p?void 0:p.map((l=>(0,m.jsx)(u,{element:F.extras[l],idKey:l,close:k},l)))),(0,m.jsxs)("div",{className:"_dsplFlx totalsGrid",style:{margin:"19px 15px 10px"},children:[(0,m.jsx)("div",{className:"tr_bar_70"}),(0,m.jsxs)("div",{className:"tr_bar_30 brdTp",children:[(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"Subtotal:"}),(0,m.jsxs)("div",{className:"name tr_bar_30 gSansFont",children:["$",null===F||void 0===F||null===(g=F.amount)||void 0===g?void 0:g.toFixed(2)]})]}),(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_60 gSansFont",children:"tax:"}),(0,m.jsxs)("div",{className:"name tr_bar_40 gSansFont",children:["$",null!==F&&void 0!==F&&F.hasTax?null===F||void 0===F||null===(j=F.hasTax)||void 0===j?void 0:j.toFixed(2):"0.00"]})]}),(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_60 fntW600 gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)"},children:"Total:"}),(0,m.jsxs)("div",{className:"name tr_bar_40  gSansFont fntW600",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===A||void 0===A?void 0:A.toFixed(2)]})]}),(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_60 gSansFont",children:"Advance Payment:"}),(0,m.jsxs)("div",{className:"name tr_bar_40  gSansFont",children:["$",null===I||void 0===I?void 0:I.toFixed(2)]})]}),(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_60 fntW600 gSansFont",style:{color:"#646cff"},children:"Balance Due:"}),(0,m.jsxs)("div",{className:"name tr_bar_40 fntW600 gSansFont",style:{color:"#646cff"},children:["$",null===(b=A-I)||void 0===b?void 0:b.toFixed(2)]})]})]})]})]})]})},h=l=>{var s,e;let{element:a,idKey:i,close:n}=l,t=null===(s=(0,d.bh)("products_ids"))||void 0===s?void 0:s[null===a||void 0===a?void 0:a.product],o=1*a.qty?1*a.qty*a.salePrice:0;return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_70 gSansFont",style:{textAlign:"left",paddingLeft:14},children:null===t||void 0===t?void 0:t.name}),(0,m.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(e=a.qty)||void 0===e?void 0:e.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===o||void 0===o?void 0:o.toFixed(2)})]})},u=l=>{var s,e;let{element:a,idKey:d,close:i}=l;return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_70  gSansFont",style:{textAlign:"left",paddingLeft:14},children:null===a||void 0===a?void 0:a.description}),(0,m.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(s=1*a.qty)||void 0===s?void 0:s.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:1*a.qty?null===(e=1*a.qty*a.salePrice*1)||void 0===e?void 0:e.toFixed(2):""})]})}}}]);
//# sourceMappingURL=4986.d629493c.chunk.js.map