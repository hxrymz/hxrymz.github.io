"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1792],{1792:(e,t,l)=>{l.r(t),l.d(t,{default:()=>x});var d=l(2791),i=(l(1839),l(2350)),o=l(9760),a=l(2647),s=l(6963),n=l(4e3);l(6824);let r=0;var c=l(184);const v=(0,a.PU)(),x=e=>{var t,l,a,x,u;let{data:_,item:g}=e;const[,b]=(0,d.useState)(0);(0,d.useEffect)((()=>{(0,i.Rz)("inv_products_list",null),(0,i.Rz)("inv_products_stock",null),f()}),[g.productId]);const f=()=>{b((0,i.M5)())},p=e=>{(0,o.CloseModal)({id:_.modalID})};let y=(null===g||void 0===g?void 0:g.tax)+(null===g||void 0===g?void 0:g.sales)-(null===g||void 0===g?void 0:g.cost)-(null===g||void 0===g?void 0:g.estimated_monthly_storage_fee);return(0,c.jsxs)("div",{style:{maxHeight:"98vh",minHeight:"92vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"title_collect gSansFont",children:"ASIN:"}),(0,c.jsx)("p",{className:"title_collect fntW600 gSansFont",style:{color:"#646cff"},children:null===g||void 0===g?void 0:g.asin}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"icon_print",onClick:()=>{(async e=>{var t,l,d,o,a,c;const v=await s.PDFDocument.create();v.registerFontkit(n.Z);var x=await v.embedFont(s.StandardFonts.TimesRoman),m=await v.embedFont(s.StandardFonts.TimesRomanBold),h=await v.embedFont(s.StandardFonts.TimesRomanBold);if((0,i.bh)("modernFontReport")){let e=(0,i.bh)("Roboto-Bold.ttf");const t=await fetch(e).then((e=>e.arrayBuffer()));m=await v.embedFont(t);let l=(0,i.bh)("ggSans-Italic.ttf");const d=await fetch(l).then((e=>e.arrayBuffer()));x=await v.embedFont(d);let o=(0,i.bh)("ggSans-Medium.ttf");const a=await fetch(o).then((e=>e.arrayBuffer()));h=await v.embedFont(a)}let u=v.addPage();const{width:_,height:g}=u.getSize(),b=10;r=g-40;const f=h.widthOfTextAtSize(null===e||void 0===e?void 0:e.document,12),p=x.widthOfTextAtSize("Invoice: ",11);u.drawText("Invoice: ",{x:580-f-p,y:r,size:11,font:x,color:(0,s.rgb)(0,0,0)}),u.drawText(null===e||void 0===e?void 0:e.document,{x:580-f,y:r,size:12,font:h,color:(0,s.rgb)(0,0,0)});let y=g-30;u.drawText("Granite Concepts",{x:20,y:y,size:13,font:m,color:(0,s.rgb)(0,0,0)}),u.drawText("4504 Poplar Level Rd",{x:20,y:y-15,size:10,font:x,color:(0,s.rgb)(0,0,0)}),u.drawText("Louisville, KY 40213",{x:20,y:y-30,size:10,font:x,color:(0,s.rgb)(0,0,0)}),u.drawText("(502) 742-2473",{x:20,y:y-45,size:10,font:m,color:(0,s.rgb)(0,0,0)}),u.drawText("graniteconceptsky@gmail.com",{x:20,y:y-60,size:10,font:x,color:(0,s.rgb)(0,0,0)}),u.drawText("graniteconceptsky.com",{x:20,y:y-75,size:10,font:x,color:(0,s.rgb)(0,0,0)}),r-=20;const w=x.widthOfTextAtSize("Date: ",11),F=m.widthOfTextAtSize((0,i.Gv)(null===e||void 0===e?void 0:e.date)+"",12);u.drawText("Date: ",{x:580-w-F,y:r,size:11,font:x,color:(0,s.rgb)(0,0,0)}),u.drawText((0,i.Gv)(null===e||void 0===e?void 0:e.date)+"",{x:580-F,y:r,size:12,font:m,color:(0,s.rgb)(.06,.06,.06)}),r-=20;let T=null===(t=(0,i.bh)("providers_ids"))||void 0===t||null===(l=t[null===e||void 0===e||null===(d=e.customer)||void 0===d?void 0:d.providerId])||void 0===l?void 0:l.name;const j=x.widthOfTextAtSize("Bill To: ",11),S=m.widthOfTextAtSize(T+"",12);u.drawText("Bill To: ",{x:580-j-S,y:r,size:11,font:x,color:(0,s.rgb)(0,0,0)}),u.drawText(T+"",{x:580-S,y:r,size:12,font:m,color:(0,s.rgb)(0,0,0)}),r-=50,u.drawRectangle({x:15,y:r+1,width:560,height:.85,color:(0,s.rgb)(.53,.53,.53),borderColor:(0,s.rgb)(.53,.53,.53)}),u.drawText((null===e||void 0===e?void 0:e.description)+"",{x:20,y:r-11,size:10,font:x,color:(0,s.rgb)(0,0,0)}),r-=20,u.drawRectangle({x:15,y:r+1,width:560,height:.85,color:(0,s.rgb)(.53,.53,.53),borderColor:(0,s.rgb)(.53,.53,.53)}),r-=18,u.drawText((0,i.zE)(4)+"",{x:20,y:r,size:13,font:m,color:(0,s.rgb)(0,0,0)});const z=m.widthOfTextAtSize((0,i.zE)(14)+"",12);u.drawText((0,i.zE)(10)+"",{x:480-z,y:r,size:12,font:m,color:(0,s.rgb)(0,0,0)});const N=m.widthOfTextAtSize((0,i.zE)(14)+"",12);u.drawText((0,i.zE)(14)+"",{x:560-N,y:r,size:12,font:m,color:(0,s.rgb)(0,0,0)}),r-=8,u.drawRectangle({x:15,y:r+1,width:560,height:.95,color:(0,s.rgb)(.53,.53,.53),borderColor:(0,s.rgb)(.53,.53,.53)});let A=(null===e||void 0===e?void 0:e.products)||[];Array.isArray(A)&&A.map(((e,t)=>{var l,d,o,a;const n=null===(l=(0,i.bh)("products_ids"))||void 0===l||null===(d=l[null===e||void 0===e?void 0:e.product])||void 0===d?void 0:d.name;r-=16,n&&u.drawText(n+"",{x:20,y:r,size:b,font:x,color:(0,s.rgb)(0,0,0)});let c=null!==e&&void 0!==e&&e.qty?null===(o=1*(null===e||void 0===e?void 0:e.qty))||void 0===o?void 0:o.toFixed(2):"0.00";const v=x.widthOfTextAtSize(c+"",b);u.drawText(c+"",{x:480-v,y:r,size:b,font:x,color:(0,s.rgb)(0,0,0)});let m=null!==e&&void 0!==e&&e.qty?null===(a=(null===e||void 0===e?void 0:e.salePrice)*(null===e||void 0===e?void 0:e.qty)*1)||void 0===a?void 0:a.toFixed(2):"0.00";const h=x.widthOfTextAtSize(m+"",b);u.drawText(m+"",{x:560-h,y:r,size:b,font:x,color:(0,s.rgb)(0,0,0)})}));let O=(0,i._2)(null===e||void 0===e?void 0:e.extras)||[];Array.isArray(O)&&O.map(((t,l)=>{var d,i,o;let a=null===(d=e.extras)||void 0===d?void 0:d[t];const n=a.description;r-=16,n&&u.drawText(n+"",{x:20,y:r,size:b,font:x,color:(0,s.rgb)(0,0,0)});let c=null!==a&&void 0!==a&&a.qty?null===(i=1*(null===a||void 0===a?void 0:a.qty))||void 0===i?void 0:i.toFixed(2):"0.00";const v=x.widthOfTextAtSize(c+"",b);u.drawText(c+"",{x:480-v,y:r,size:b,font:x,color:(0,s.rgb)(0,0,0)});let m=null!==a&&void 0!==a&&a.qty?null===(o=(null===a||void 0===a?void 0:a.salePrice)*(null===a||void 0===a?void 0:a.qty)*1)||void 0===o?void 0:o.toFixed(2):"0.00";const h=x.widthOfTextAtSize(m+"",b);u.drawText(m+"",{x:560-h,y:r,size:b,font:x,color:(0,s.rgb)(0,0,0)})})),r-=28,u.drawRectangle({x:15,y:r+1,width:560,height:.85,color:(0,s.rgb)(.53,.53,.53),borderColor:(0,s.rgb)(.53,.53,.53)});let k=500;r-=20;let R=null!==e&&void 0!==e&&e.amount?null===e||void 0===e||null===(o=e.amount)||void 0===o?void 0:o.toFixed(2):"0.00";const P=x.widthOfTextAtSize(R+"",b);u.drawText(R+"",{x:560-P,y:r,size:b,font:x,color:(0,s.rgb)(.13,.13,.13)});const B=x.widthOfTextAtSize("SubTotal",b);u.drawText("SubTotal",{x:k-B,y:r,size:b,font:x,color:(0,s.rgb)(0,0,0)}),r-=16;let C=null!==e&&void 0!==e&&e.hasTax?null===e||void 0===e||null===(a=e.hasTax)||void 0===a?void 0:a.toFixed(2):"0.00";const q=x.widthOfTextAtSize(C+"",b);u.drawText(C+"",{x:560-q,y:r,size:b,font:x,color:(0,s.rgb)(.13,.13,.13)});const D=x.widthOfTextAtSize("Taxes",b);u.drawText("Taxes",{x:k-D,y:r,size:b,font:x,color:(0,s.rgb)(0,0,0)});let $=null!==e&&void 0!==e&&e.hasTax?(null===e||void 0===e?void 0:e.hasTax)+(null===e||void 0===e?void 0:e.amount):1*(null===e||void 0===e?void 0:e.amount);r-=16;let I=$?null===$||void 0===$?void 0:$.toFixed(2):"0.00";const E=h.widthOfTextAtSize(I+"",11);u.drawText(I+"",{x:560-E,y:r,size:11,font:h,color:(0,s.rgb)(0,0,0)});const L=h.widthOfTextAtSize("Total",11);u.drawText("Total",{x:k-L,y:r,size:11,font:h,color:(0,s.rgb)(0,0,0)}),r-=16;let W=null!==e&&void 0!==e&&e.hasAdvancePay?null===(c=-1*(null===e||void 0===e?void 0:e.hasAdvancePay))||void 0===c?void 0:c.toFixed(2):"0.00";const G=x.widthOfTextAtSize(""+W,11);u.drawText(""+W,{x:560-G,y:r,size:11,font:x,color:(0,s.rgb)(.13,.13,.13)});const K=x.widthOfTextAtSize("Advance Payment",11);u.drawText("Advance Payment",{x:k-K,y:r,size:11,font:x,color:(0,s.rgb)(0,0,0)});let M=$+1*W;r-=16;let H=M?null===M||void 0===M?void 0:M.toFixed(2):"0.00";const V=h.widthOfTextAtSize(H+"",11);u.drawText(H+"",{x:560-V,y:r,size:11,font:h,color:(0,s.rgb)(0,0,0)});const J=h.widthOfTextAtSize("Balance Due",11);u.drawText("Balance Due",{x:k-J,y:r,size:11,font:h,color:(0,s.rgb)(0,0,0)});const Q=await v.save();let U=(0,i.ou)(Q);window.open(U)})({...g})},children:(0,c.jsx)(v,{name:"printer",color:"var(--hrm_palette-inverse-background-b)"})})]}),(0,c.jsx)("div",{className:"acc_dtls",style:{marginTop:10,marginLeft:2},children:(0,c.jsx)("div",{className:"_dsplFlx",children:(0,c.jsx)("div",{className:"name",children:(0,c.jsx)("div",{className:" code gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)",fontSize:14},children:null===g||void 0===g?void 0:g.title})})})}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:8},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"_dsplFlx",children:(0,c.jsx)("div",{className:"name gSansFont",style:{color:"var(--hrm_palette-item_coll_gray)"},children:null===g||void 0===g?void 0:g.description})})]}),(0,c.jsxs)("div",{className:"scollVh subMHeight amzn-hdr",style:{height:"calc(94svh - 130px)"},children:[(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,c.jsx)("div",{className:"tr_bar_20",style:{textAlign:"left",paddingLeft:14},children:"Warehouse"}),(0,c.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:"Stock"}),(0,c.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:"Vendidos"}),(0,c.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:"Transferidos"}),(0,c.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:"Recibidos"}),(0,c.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:"Perdidos"}),(0,c.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:"Encontrados"})]}),g.locations&&(null===(t=(0,i._2)(g.locations))||void 0===t?void 0:t.map((e=>(0,c.jsx)(h,{element:g.locations[e],idKey:e,close:p},e)))),(0,c.jsx)("div",{style:{margin:30}}),(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar purple ",children:[(0,c.jsx)("div",{className:"tr_bar_25",style:{textAlign:"left",paddingLeft:14},children:"Order ID"}),(0,c.jsx)("div",{className:"tr_bar_10 txt_alg_padd",children:"Fecha"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:"Status"}),(0,c.jsx)("div",{className:"tr_bar_10 txt_alg_padd",children:"Price"}),(0,c.jsx)("div",{className:"tr_bar_10 txt_alg_padd",children:"Quantity"})]}),g.orders&&(null===(l=g.orders)||void 0===l?void 0:l.map((e=>(0,c.jsx)(m,{element:e,idKey:e["amazon-order-id"],close:p},e["amazon-order-id"])))),(0,c.jsxs)("div",{className:"_dsplFlx totalsGrid",style:{margin:"19px 15px 10px"},children:[(0,c.jsx)("div",{className:"tr_bar_60"}),(0,c.jsxs)("div",{className:"tr_bar_40 brdTp",children:[(0,c.jsxs)("div",{className:"_dsplFlx totals",children:[(0,c.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"Subtotal:"}),(0,c.jsxs)("div",{className:"name tr_bar_30 gSansFont",children:["$",null===g||void 0===g||null===(a=g.sales)||void 0===a?void 0:a.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"_dsplFlx totals",children:[(0,c.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"tax:"}),(0,c.jsxs)("div",{className:"name tr_bar_30 gSansFont",children:["$",null!==g&&void 0!==g&&g.tax?null===g||void 0===g?void 0:g.tax.toFixed(2):"0.00"]})]}),(0,c.jsxs)("div",{className:"_dsplFlx totals",children:[(0,c.jsx)("div",{className:"code tr_bar_70 fntW600 gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)"},children:"Total:"}),(0,c.jsxs)("div",{className:"name tr_bar_30  gSansFont fntW600",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===(x=1*((null===g||void 0===g?void 0:g.tax)+(null===g||void 0===g?void 0:g.sales)))||void 0===x?void 0:x.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"_dsplFlx totals",children:[(0,c.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"Costo:"}),(0,c.jsxs)("div",{className:"name tr_bar_30 gSansFont",children:["$",(-1*(null===g||void 0===g?void 0:g.cost)).toFixed(2)]})]}),(0,c.jsxs)("div",{className:"_dsplFlx totals",children:[(0,c.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"Almacenaje:"}),(0,c.jsxs)("div",{className:"name tr_bar_30 gSansFont",children:["$",(-1*(null===g||void 0===g?void 0:g.estimated_monthly_storage_fee)).toFixed(2)]})]}),(0,c.jsxs)("div",{className:"_dsplFlx totals",children:[(0,c.jsx)("div",{className:"code tr_bar_70 fntW600 gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)"},children:y>=0?"Ganancia:":"Perdida:"}),(0,c.jsxs)("div",{className:"name tr_bar_30  gSansFont fntW600 ",style:{color:y>=0?"#3fb950":"rgb(198, 40, 40)"},children:["$",null===(u=1*y)||void 0===u?void 0:u.toFixed(2)]})]})]})]})]})]})},m=e=>{var t,l;let{element:d,idKey:o,close:a}=e;return(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,c.jsx)("div",{className:"tr_bar_25 gSansFont",style:{textAlign:"left",paddingLeft:14},children:null===d||void 0===d?void 0:d["amazon-order-id"]}),(0,c.jsx)("div",{className:"tr_bar_10 numbAlign gSansFont",children:(0,i.sJ)(new Date(null===d||void 0===d?void 0:d.purchase_date).getTime())}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===d||void 0===d?void 0:d.item_status}),(0,c.jsxs)("div",{className:"tr_bar_10 numbAlign gSansFont",children:["$",null===(t=1*(null===d||void 0===d?void 0:d.item_price))||void 0===t?void 0:t.toFixed(2)]}),(0,c.jsx)("div",{className:"tr_bar_10 numbAlign gSansFont",children:null===(l=1*(null===d||void 0===d?void 0:d.quantity))||void 0===l?void 0:l.toFixed(2)})]})},h=e=>{var t,l,d,i,o;let{element:a,idKey:s,close:n}=e;return(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,c.jsx)("div",{className:"tr_bar_20 gSansFont",style:{textAlign:"left",paddingLeft:14},children:s}),(0,c.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont"}),(0,c.jsxs)("div",{className:"tr_bar_15 numbAlign gSansFont",children:["$",null===(t=1*(null===a||void 0===a?void 0:a.shipped))||void 0===t?void 0:t.toFixed(2)]}),(0,c.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(l=1*(null===a||void 0===a?void 0:a.transfer))||void 0===l?void 0:l.toFixed(2)}),(0,c.jsxs)("div",{className:"tr_bar_15 numbAlign gSansFont",children:["$",null===(d=1*(null===a||void 0===a?void 0:a.receipts))||void 0===d?void 0:d.toFixed(2)]}),(0,c.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(i=1*(null===a||void 0===a?void 0:a.lost))||void 0===i?void 0:i.toFixed(2)}),(0,c.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(o=1*(null===a||void 0===a?void 0:a.found))||void 0===o?void 0:o.toFixed(2)})]})}},1839:()=>{}}]);
//# sourceMappingURL=1792.84291b6a.chunk.js.map