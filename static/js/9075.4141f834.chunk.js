"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9075,9760],{9760:(e,o,t)=>{t.r(o),t.d(o,{CloseModal:()=>c,OpenModal:()=>r,default:()=>a});var l=t(2791),i=t(5408),s=t(2350),d=t(184);const n="listDialog_mdh392",a=()=>{const e=(0,s.bh)("listDialog")||{};(0,i.Z)(n);let o=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:o.map(((o,t)=>{let i=e[o];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let t={zIndex:i.zIndex},s=null,n=i.data;return i.content&&(s=l.cloneElement(i.content,{data:n})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:t,id:o,children:s})}),i.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=o,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},o)}}))})},r=e=>{let o=(0,s.bh)("listDialog")||{},t=(0,s.M5)();o[t]||(o[t]={}),o[t].visible=!0;let l={};e.props?(l=e.props,l.modalID=t):l.modalID=t;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),o[t].isView=e.isView,o[t].observeResize=e.observeResize,o[t].observeResize&&(o[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),l=e&&e.getBoundingClientRect();l&&(l.width===o[t].width&&l.height===o[t].height||(o[t].height=l.height+10,o[t].width=l.width,(0,s.Rz)("listDialog",o),(0,s.wt)(n)))}),200)),o[t].display=!0,e.zIndex&&(o[t].zIndex=e.zIndex),e.height&&(o[t].height=e.height),e.width&&(o[t].width=e.width),e.content&&(o[t].content=e.content),o[t].data=l,(0,s.Rz)("listDialog",o),(0,s.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,s.Rz)("modalOpen",t),(0,s.wt)(n)}),125)},c=e=>{let o=(0,s.bh)("listDialog")||{},t=e.id;if(o[t]){var l,i,d;o[t].observeResize&&o[t].observeInterval&&clearInterval(o[t].observeInterval),o[t].display=!1,null===(l=o[t])||void 0===l||null===(i=l.data)||void 0===i||null===(d=i.closeEvent)||void 0===d||d.call(i),(0,s.Rz)("listDialog",o),delete o[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,s.wt)(n),setTimeout((()=>{delete o[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,s.Rz)("modalOpen",null)}),750)}}},713:(e,o,t)=>{t.d(o,{$P:()=>x,B8:()=>f,IR:()=>v,N0:()=>s,QJ:()=>b,Rd:()=>r,VI:()=>g,Ve:()=>m,WA:()=>_,ZW:()=>a,Zj:()=>p,fK:()=>d,g5:()=>i,ii:()=>h,nj:()=>y,qT:()=>c,qv:()=>u,yk:()=>n});var l=t(2350);const i={WH:"Almacen",PR:"Production",PT:"Patio"},s=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.scan_area_location};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,limit:120};const s=(0,l.I7)(i),d=await s;d?((0,l.Rz)("locations_ids",d),(0,l.Rz)("locations_list",p((0,l.jQ)(d),"areaLocationId")),e&&e()):e&&e()},d=async(e,o)=>{var t,i;let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.scan_voucher_production};s.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":e};const d=(0,l.I7)(s),n=await d;n&&!n.error&&(0,l._2)(n)&&(0,l._2)(n).length>0?o&&o(n):o&&o(null)},n=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.scan_voucher_production};if(i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,limit:120},(0,l.bh)("searchVoucherQry")&&(0,l.bh)("searchVoucherQry").length>1){(0,l.bh)("searchVoucherQry").split(" ").map(((e,o)=>{e&&(i.params[":search"+o]=e.trim())}));const o=(0,l.I7)(i),t=await o;t&&((0,l.Rz)("voucher_production",t),(0,l.Rz)("vouchers_list",p((0,l.jQ)(t),"voucherId")),e&&e())}else(0,l.Rz)("vouchers_list",null),e&&e()},a=async(e,o)=>{var t,i;let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.get_inventory_prod};s.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":productId":e};const d=(0,l.I7)(s),n=await d;n&&((0,l.Rz)("inv_products_list",p((0,l.jQ)(n.list),"name")),(0,l.Rz)("inv_products_stock",n.stock),o&&o())},r=async(e,o)=>{var t,i;let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.get_prod_stock};s.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,productId:e};const d=(0,l.I7)(s),n=await d;if(n){let t={...(0,l.bh)("products_stock")};t[e]=n.stock,(0,l.Rz)("products_stock",t),o&&o()}},c=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.all_prods};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId},i.subQuerys={},i.subQuerys.stock=1;const s=(0,l.I7)(i),d=await s;if(d){let o={},t=[],i=0;d.map((e=>{var s;if(null!==e&&void 0!==e&&null!==(s=e.inventory)&&void 0!==s&&s.qty){var d,n,a;if(i+=1*(0,l.Zv)(null===e||void 0===e||null===(d=e.inventory)||void 0===d?void 0:d.amount,2),o[e.unit])o[e.unit]+=null===e||void 0===e||null===(n=e.inventory)||void 0===n?void 0:n.qty;else o[e.unit]=null===e||void 0===e||null===(a=e.inventory)||void 0===a?void 0:a.qty;t.push({productId:e.productId,name:e.name,unit:e.unit,qty:(1*e.inventory.qty).toFixed(2),amount:(1*e.inventory.amount).toFixed(2),cost:(e.inventory.amount/e.inventory.qty*1).toFixed(2)})}})),(0,l.Ey)(e)&&e({list:p(t,"name"),total:i,units:o})}},v=async(e,o)=>{var t,i;let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.group_prod_stock};s.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId};const d=(0,l.I7)(s),n=await d;if(n){let t=(0,l._I)(n.comps),i=0,s=0,d=0,a=[],r=[];(0,l._2)(e).map((o=>{let c={...e[o]},v=("debit"===e[o].type?1:-1)*e[o].amount,u=1*(0,l.Zv)(v,2);if(i+=u,n.comps[e[o].comprobanteId]){c.inventory=n.comps[e[o].comprobanteId];let i=0;if((0,l._2)(n.comps[e[o].comprobanteId]).map((t=>{i=1*(0,l.Zv)(i,2)+1*(0,l.Zv)(n.comps[e[o].comprobanteId][t],2)})),i=i<0?-1*i:i,i=1*(0,l.Zv)(i,2),c.inventoryAmount=i,s+=i,u=u<0?-1*u:u,u-i!==0){let e=u-i;d+=e,r.push(c),console.log("diff",c,u,i,e)}else a.push(c);delete t[e[o].comprobanteId]}else d+=v,r.push(c)}));let c=0;(0,l._2)(t).map((e=>{let o=0;(0,l._2)(t[e]).map((i=>{o=1*(0,l.Zv)(o,2)+1*(0,l.Zv)(t[e][i],2)})),c+=o})),console.log("inventoryBack",t,"inventoryBackTotal",c),(0,l.Rz)("inv_comprobantes_compare",{hasError:r,success:a,inventoryBack:t}),(0,l.Ey)(o)&&o()}},u=async e=>{var o,t,i;let s={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.filter_search_opera};s.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,l.bh)("date_current_year"),":account":null===(i=(0,l.bh)("global_account_params"))||void 0===i?void 0:i.inventory.account};const d=(0,l.I7)(s),n=await d;n&&!n.error&&(0,l.Ey)(e)&&e(p((0,l.jQ)(n),"date"))},h=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.all_prods};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId};const s=(0,l.I7)(i),d=await s;d&&((0,l.Rz)("products_list",p(d,"name")),(0,l.Rz)("products_ids",(0,l.ME)((0,l.jQ)(d),"productId")),e&&e())},m=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.search_prod};if(i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,limit:120},(0,l.bh)("searchQry").length>1){(0,l.bh)("searchQry").split(" ").map(((e,o)=>{e&&(i.params[":search"+o]=e.trim())}));const o=(0,l.I7)(i),t=await o;t&&((0,l.Rz)("products_list",p((0,l.jQ)(t),"code")),e&&e())}else(0,l.Rz)("products_list",null),e&&e()},b=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.all_entry_invoices};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId};const s=(0,l.I7)(i),d=await s;d&&((0,l.Rz)("movements_list",p(d,"date")),(0,l.Rz)("movements_ids",(0,l.ME)((0,l.jQ)(d),"inventoryId")),e&&e())},x=async e=>{var o;if((null===(o=(0,l.bh)("searchMovQry"))||void 0===o?void 0:o.length)>1){var t,i;let o={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.search_inventory};o.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":(0,l.bh)("searchMovQry")};const s=(0,l.I7)(o),d=await s;d&&((0,l.Rz)("movements_list",function(e){var o={};let t=e&&(0,l._2)(e);t.length>0?t.map((t=>{let l=e[t];o[l.comprobanteId]||(o[l.comprobanteId]={},o[l.comprobanteId].amount=0,o[l.comprobanteId].document=l.document,o[l.comprobanteId].date=l.date,o[l.comprobanteId].comprobanteId=l.comprobanteId,o[l.comprobanteId].products=[]),o[l.comprobanteId].amount+=l.qty*l.price,o[l.comprobanteId].products.push({productId:l.productId,qty:l.qty,price:l.price,inventoryId:l.inventoryId})})):o=null;return o}(d)),(0,l.Rz)("movements_ids",d),e&&e())}else(0,l.Rz)("movements_list",[]),(0,l.Rz)("movements_ids",{}),e&&e()};const p=(e,o)=>(0,l.MV)("sortProducts",[e],(()=>e&&e.sort(((e,t)=>{let l=e[o],i=t[o];return l<i?-1:l>i?1:0})))),y=async(e,o)=>{var t,i;let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.delete_prod};s.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,productId:e};const d=(0,l.I7)(s);await d&&o&&o()},_=async(e,o)=>{var t,i;let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.delete_inventory};s.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,inventoryId:e};const d=(0,l.I7)(s);await d&&o&&o()},g=async(e,o)=>{var t,i;({...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.entry_invoice_acc_2}).params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,entriesInvoiceId:e}},f=(e,o)=>(0,l.MV)("rangeProdArr",[e,o],(()=>e?(0,l._2)(e).slice(0,o):[]))},9075:(e,o,t)=>{t.r(o),t.d(o,{default:()=>x});var l=t(2791),i=(t(261),t(2350)),s=t(7689),d=t(9760),n=t(2647),a=t(4050),r=t(713),c=t(6677),v=t(6963),u=t(4e3);let h=0;var m=t(184);const b=(0,n.PU)(),x=e=>{var o,t,n,x,_,g,f;let{data:w,item:I}=e;const[z,T]=(0,l.useState)(0);(0,l.useEffect)((()=>{var e,o,t;(0,i.Rz)("inv_products_list",null),(0,i.Rz)("inv_products_stock",null),null!==(e=(0,i.bh)("providers_ids"))&&void 0!==e&&null!==(o=e[null===I||void 0===I||null===(t=I.customer)||void 0===t?void 0:t.providerId])&&void 0!==o&&o.name||(0,c.Je)(j),(0,i.bh)("products_ids")||(0,r.ii)(j),(0,a.Ht)("global_accounts","global_account_params",j),j()}),[I.productId]);const j=()=>{T((0,i.M5)())},F=((0,s.s0)(),e=>{(0,d.CloseModal)({id:w.modalID})});let S=null!==I&&void 0!==I&&I.hasTax?(null===I||void 0===I?void 0:I.hasTax)+(null===I||void 0===I?void 0:I.amount):1*(null===I||void 0===I?void 0:I.amount);let N=null!==I&&void 0!==I&&I.hasAdvancePay?null===I||void 0===I?void 0:I.hasAdvancePay:0;return(0,m.jsxs)("div",{style:{maxHeight:"94vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"title_collect gSansFont",children:"Invoice:"}),(0,m.jsx)("p",{className:"title_collect fntW600 gSansFont",style:{color:"#646cff"},children:null===I||void 0===I?void 0:I.document}),(0,m.jsx)("div",{className:"flexSpace"}),(0,i.I0)()?(0,m.jsx)("div",{className:"code comprobante_id  gSansFont",style:{color:"#646cff",paddingTop:10},children:null===I||void 0===I?void 0:I.comprobanteId}):null,(0,m.jsx)("div",{className:"icon_print",onClick:()=>{(async e=>{var o,t,l,s,d,n;const a=await v.PDFDocument.create();a.registerFontkit(u.Z);var r=await a.embedFont(v.StandardFonts.TimesRoman),c=await a.embedFont(v.StandardFonts.TimesRomanBold),m=await a.embedFont(v.StandardFonts.TimesRomanBold);if((0,i.bh)("modernFontReport")){let e=(0,i.bh)("Roboto-Bold.ttf");const o=await fetch(e).then((e=>e.arrayBuffer()));c=await a.embedFont(o);let t=(0,i.bh)("ggSans-Italic.ttf");const l=await fetch(t).then((e=>e.arrayBuffer()));r=await a.embedFont(l);let s=(0,i.bh)("ggSans-Medium.ttf");const d=await fetch(s).then((e=>e.arrayBuffer()));m=await a.embedFont(d)}let b=a.addPage();const{width:x,height:p}=b.getSize(),y=10;h=p-40;const _=m.widthOfTextAtSize(null===e||void 0===e?void 0:e.document,12),g=r.widthOfTextAtSize("Invoice: ",11);b.drawText("Invoice: ",{x:580-_-g,y:h,size:11,font:r,color:(0,v.rgb)(0,0,0)}),b.drawText(null===e||void 0===e?void 0:e.document,{x:580-_,y:h,size:12,font:m,color:(0,v.rgb)(0,0,0)});let f=p-30;b.drawText("Granite Concepts",{x:20,y:f,size:13,font:c,color:(0,v.rgb)(0,0,0)}),b.drawText("4504 Poplar Level Rd",{x:20,y:f-15,size:10,font:r,color:(0,v.rgb)(0,0,0)}),b.drawText("Louisville, KY 40213",{x:20,y:f-30,size:10,font:r,color:(0,v.rgb)(0,0,0)}),b.drawText("(502) 742-2473",{x:20,y:f-45,size:10,font:c,color:(0,v.rgb)(0,0,0)}),b.drawText("graniteconceptsky@gmail.com",{x:20,y:f-60,size:10,font:r,color:(0,v.rgb)(0,0,0)}),b.drawText("graniteconceptsky.com",{x:20,y:f-75,size:10,font:r,color:(0,v.rgb)(0,0,0)}),h-=20;const w=r.widthOfTextAtSize("Date: ",11),I=c.widthOfTextAtSize((0,i.Gv)(null===e||void 0===e?void 0:e.date)+"",12);b.drawText("Date: ",{x:580-w-I,y:h,size:11,font:r,color:(0,v.rgb)(0,0,0)}),b.drawText((0,i.Gv)(null===e||void 0===e?void 0:e.date)+"",{x:580-I,y:h,size:12,font:c,color:(0,v.rgb)(.06,.06,.06)}),h-=20;let z=null===(o=(0,i.bh)("providers_ids"))||void 0===o||null===(t=o[null===e||void 0===e||null===(l=e.customer)||void 0===l?void 0:l.providerId])||void 0===t?void 0:t.name;const T=r.widthOfTextAtSize("Bill To: ",11),j=c.widthOfTextAtSize(z+"",12);b.drawText("Bill To: ",{x:580-T-j,y:h,size:11,font:r,color:(0,v.rgb)(0,0,0)}),b.drawText(z+"",{x:580-j,y:h,size:12,font:c,color:(0,v.rgb)(0,0,0)}),h-=50,b.drawRectangle({x:15,y:h+1,width:560,height:.85,color:(0,v.rgb)(.53,.53,.53),borderColor:(0,v.rgb)(.53,.53,.53)}),b.drawText((null===e||void 0===e?void 0:e.description)+"",{x:20,y:h-11,size:10,font:r,color:(0,v.rgb)(0,0,0)}),h-=20,b.drawRectangle({x:15,y:h+1,width:560,height:.85,color:(0,v.rgb)(.53,.53,.53),borderColor:(0,v.rgb)(.53,.53,.53)}),h-=18,b.drawText((0,i.zE)(4)+"",{x:20,y:h,size:13,font:c,color:(0,v.rgb)(0,0,0)});const F=c.widthOfTextAtSize((0,i.zE)(14)+"",12);b.drawText((0,i.zE)(10)+"",{x:480-F,y:h,size:12,font:c,color:(0,v.rgb)(0,0,0)});const S=c.widthOfTextAtSize((0,i.zE)(14)+"",12);b.drawText((0,i.zE)(14)+"",{x:560-S,y:h,size:12,font:c,color:(0,v.rgb)(0,0,0)}),h-=8,b.drawRectangle({x:15,y:h+1,width:560,height:.95,color:(0,v.rgb)(.53,.53,.53),borderColor:(0,v.rgb)(.53,.53,.53)});let N=(null===e||void 0===e?void 0:e.products)||[];Array.isArray(N)&&N.map(((e,o)=>{var t,l,s,d;const n=null===(t=(0,i.bh)("products_ids"))||void 0===t||null===(l=t[null===e||void 0===e?void 0:e.product])||void 0===l?void 0:l.name;h-=16,n&&b.drawText(n+"",{x:20,y:h,size:y,font:r,color:(0,v.rgb)(0,0,0)});let a=null!==e&&void 0!==e&&e.qty?null===(s=1*(null===e||void 0===e?void 0:e.qty))||void 0===s?void 0:s.toFixed(2):"0.00";const c=r.widthOfTextAtSize(a+"",y);b.drawText(a+"",{x:480-c,y:h,size:y,font:r,color:(0,v.rgb)(0,0,0)});let u=null!==e&&void 0!==e&&e.qty?null===(d=(null===e||void 0===e?void 0:e.salePrice)*(null===e||void 0===e?void 0:e.qty)*1)||void 0===d?void 0:d.toFixed(2):"0.00";const m=r.widthOfTextAtSize(u+"",y);b.drawText(u+"",{x:560-m,y:h,size:y,font:r,color:(0,v.rgb)(0,0,0)})}));let R=(0,i._2)(null===e||void 0===e?void 0:e.extras)||[];Array.isArray(R)&&R.map(((o,t)=>{var l,i,s;let d=null===(l=e.extras)||void 0===l?void 0:l[o];const n=d.description;h-=16,n&&b.drawText(n+"",{x:20,y:h,size:y,font:r,color:(0,v.rgb)(0,0,0)});let a=null!==d&&void 0!==d&&d.qty?null===(i=1*(null===d||void 0===d?void 0:d.qty))||void 0===i?void 0:i.toFixed(2):"0.00";const c=r.widthOfTextAtSize(a+"",y);b.drawText(a+"",{x:480-c,y:h,size:y,font:r,color:(0,v.rgb)(0,0,0)});let u=null!==d&&void 0!==d&&d.qty?null===(s=(null===d||void 0===d?void 0:d.salePrice)*(null===d||void 0===d?void 0:d.qty)*1)||void 0===s?void 0:s.toFixed(2):"0.00";const m=r.widthOfTextAtSize(u+"",y);b.drawText(u+"",{x:560-m,y:h,size:y,font:r,color:(0,v.rgb)(0,0,0)})})),h-=28,b.drawRectangle({x:15,y:h+1,width:560,height:.85,color:(0,v.rgb)(.53,.53,.53),borderColor:(0,v.rgb)(.53,.53,.53)});let A=500;h-=20;let Q=null!==e&&void 0!==e&&e.amount?null===e||void 0===e||null===(s=e.amount)||void 0===s?void 0:s.toFixed(2):"0.00";const k=r.widthOfTextAtSize(Q+"",y);b.drawText(Q+"",{x:560-k,y:h,size:y,font:r,color:(0,v.rgb)(.13,.13,.13)});const O=r.widthOfTextAtSize("SubTotal",y);b.drawText("SubTotal",{x:A-O,y:h,size:y,font:r,color:(0,v.rgb)(0,0,0)}),h-=16;let q=null!==e&&void 0!==e&&e.hasTax?null===e||void 0===e||null===(d=e.hasTax)||void 0===d?void 0:d.toFixed(2):"0.00";const P=r.widthOfTextAtSize(q+"",y);b.drawText(q+"",{x:560-P,y:h,size:y,font:r,color:(0,v.rgb)(.13,.13,.13)});const B=r.widthOfTextAtSize("Taxes",y);b.drawText("Taxes",{x:A-B,y:h,size:y,font:r,color:(0,v.rgb)(0,0,0)});let E=null!==e&&void 0!==e&&e.hasTax?(null===e||void 0===e?void 0:e.hasTax)+(null===e||void 0===e?void 0:e.amount):1*(null===e||void 0===e?void 0:e.amount);h-=16;let U=E?null===E||void 0===E?void 0:E.toFixed(2):"0.00";const D=m.widthOfTextAtSize(U+"",11);b.drawText(U+"",{x:560-D,y:h,size:11,font:m,color:(0,v.rgb)(0,0,0)});const M=m.widthOfTextAtSize("Total",11);b.drawText("Total",{x:A-M,y:h,size:11,font:m,color:(0,v.rgb)(0,0,0)}),h-=16;let C=null!==e&&void 0!==e&&e.hasAdvancePay?null===(n=-1*(null===e||void 0===e?void 0:e.hasAdvancePay))||void 0===n?void 0:n.toFixed(2):"0.00";const V=r.widthOfTextAtSize(""+C,11);b.drawText(""+C,{x:560-V,y:h,size:11,font:r,color:(0,v.rgb)(.13,.13,.13)});const Z=r.widthOfTextAtSize("Advance Payment",11);b.drawText("Advance Payment",{x:A-Z,y:h,size:11,font:r,color:(0,v.rgb)(0,0,0)});let L=E+1*C;h-=16;let W=L?null===L||void 0===L?void 0:L.toFixed(2):"0.00";const K=m.widthOfTextAtSize(W+"",11);b.drawText(W+"",{x:560-K,y:h,size:11,font:m,color:(0,v.rgb)(0,0,0)});const $=m.widthOfTextAtSize("Balance Due",11);b.drawText("Balance Due",{x:A-$,y:h,size:11,font:m,color:(0,v.rgb)(0,0,0)});const H=await a.save();let G=(0,i.ou)(H);window.open(G)})({...I})},children:(0,m.jsx)(b,{name:"printer",color:"var(--hrm_palette-inverse-background-b)"})})]}),(0,m.jsx)("div",{className:"acc_dtls",style:{marginTop:10,marginLeft:2},children:(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"name",children:(0,m.jsx)("div",{className:" code gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)"},children:(0,i.sJ)(null===I||void 0===I?void 0:I.date)})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"name gSansFont",style:{marginRight:5,color:"var(--hrm_palette-item_coll_gray)"},children:"Bill To:"}),(0,m.jsx)("div",{className:"code gSansFont",style:{color:"#646cff"},children:null===(o=(0,i.bh)("providers_ids"))||void 0===o||null===(t=o[null===I||void 0===I||null===(n=I.customer)||void 0===n?void 0:n.providerId])||void 0===t?void 0:t.name})]})]})}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:8},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("div",{className:"name gSansFont",style:{color:"var(--hrm_palette-item_coll_gray)"},children:null===I||void 0===I?void 0:I.description})})]}),(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_70",style:{textAlign:"left",paddingLeft:14},children:(0,i.zE)(4)}),(0,m.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,i.zE)(10)}),(0,m.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,i.zE)(14)})]}),(0,m.jsxs)("div",{className:"scollVh subMHeight",style:{height:"calc(84vh - 142px)"},children:[I.products&&(null===(x=I.products)||void 0===x?void 0:x.map((e=>(0,m.jsx)(p,{element:e,idKey:e.inventoryId,close:F},e.inventoryId)))),I.extras&&(null===(_=(0,i._2)(I.extras))||void 0===_?void 0:_.map((e=>(0,m.jsx)(y,{element:I.extras[e],idKey:e,close:F},e)))),(0,m.jsxs)("div",{className:"_dsplFlx totalsGrid",style:{margin:"19px 15px 10px"},children:[(0,m.jsx)("div",{className:"tr_bar_70"}),(0,m.jsxs)("div",{className:"tr_bar_30 brdTp",children:[(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_70 gSansFont",children:"Subtotal:"}),(0,m.jsxs)("div",{className:"name tr_bar_30 gSansFont",children:["$",null===I||void 0===I||null===(g=I.amount)||void 0===g?void 0:g.toFixed(2)]})]}),(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_60 gSansFont",children:"tax:"}),(0,m.jsxs)("div",{className:"name tr_bar_40 gSansFont",children:["$",null!==I&&void 0!==I&&I.hasTax?null===I||void 0===I?void 0:I.hasTax.toFixed(2):"0.00"]})]}),(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_60 fntW600 gSansFont",style:{color:"var(--hrm_palette-inverse-background-b)"},children:"Total:"}),(0,m.jsxs)("div",{className:"name tr_bar_40  gSansFont fntW600",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===S||void 0===S?void 0:S.toFixed(2)]})]}),(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_60 gSansFont",children:"Advance Payment:"}),(0,m.jsxs)("div",{className:"name tr_bar_40  gSansFont",children:["$",null===N||void 0===N?void 0:N.toFixed(2)]})]}),(0,m.jsxs)("div",{className:"_dsplFlx totals",children:[(0,m.jsx)("div",{className:"code tr_bar_60 fntW600 gSansFont",style:{color:"#646cff"},children:"Balance Due:"}),(0,m.jsxs)("div",{className:"name tr_bar_40 fntW600 gSansFont",style:{color:"#646cff"},children:["$",null===(f=S-N)||void 0===f?void 0:f.toFixed(2)]})]})]})]})]})]})},p=e=>{var o,t;let{element:l,idKey:s,close:d}=e,n=null===(o=(0,i.bh)("products_ids"))||void 0===o?void 0:o[null===l||void 0===l?void 0:l.product],a=1*l.qty?1*l.qty*l.salePrice:0;return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_70 gSansFont",style:{textAlign:"left",paddingLeft:14},children:null===n||void 0===n?void 0:n.name}),(0,m.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(t=l.qty)||void 0===t?void 0:t.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===a||void 0===a?void 0:a.toFixed(2)})]})},y=e=>{var o,t;let{element:l,idKey:i,close:s}=e;return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_70  gSansFont",style:{textAlign:"left",paddingLeft:14},children:null===l||void 0===l?void 0:l.description}),(0,m.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:null===(o=1*l.qty)||void 0===o?void 0:o.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar_15 numbAlign gSansFont",children:1*l.qty?null===(t=1*l.qty*l.salePrice*1)||void 0===t?void 0:t.toFixed(2):""})]})}},6677:(e,o,t)=>{t.d(o,{Je:()=>i,Qn:()=>a,UO:()=>s,mQ:()=>n});var l=t(2350);const i=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.all_prov_cust};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId};const s=(0,l.I7)(i),n=await s;n&&((0,l.Rz)("providers_list",d((0,l.jQ)(n),"name",1)),(0,l.Rz)("providers_ids",(0,l.ME)((0,l.jQ)(n),"providerId")),e&&e())},s=async e=>{var o,t;let i={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.search_prov_cust};i.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,":search":(0,l.bh)("search_prov")};const s=(0,l.I7)(i),n=await s;n&&((0,l.Rz)("providers_list",d((0,l.jQ)(n),"name",1)),e&&e())};const d=(e,o,t)=>(0,l.MV)("sortProviders",[e],(()=>e&&e.sort(((e,l)=>{let i=1*e[o],s=1*l[o];return i<s?t?-1:1:i>s?t?1:-1:0})))),n=(e,o)=>(0,l.MV)("sortSubProviders",[e],(()=>e&&e.sort(((e,t)=>{let l=1*e[o],i=1*t[o];return l<i?-1:l>i?1:0})))),a=async(e,o)=>{var t,i;let s={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.delete_prov_cust};s.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,providerId:e};const d=(0,l.I7)(s);await d&&o&&o()}},261:()=>{}}]);
//# sourceMappingURL=9075.4141f834.chunk.js.map