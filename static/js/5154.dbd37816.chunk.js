"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5154],{9760:(o,t,e)=>{e.r(t),e.d(t,{CloseModal:()=>c,OpenModal:()=>s,default:()=>r});var l=e(2791),d=e(5408),a=e(2350),n=e(184);const i="listDialog_mdh392",r=()=>{const o=(0,a.bh)("listDialog")||{};(0,d.Z)(i);let t=Object.keys(o);return(0,n.jsx)(n.Fragment,{children:t.map(((t,e)=>{let d=o[t];if(d&&d.visible){let o={};d.height&&(o.heigth=d.height),d.width,d.zIndex&&(o.zIndex=d.zIndex-1);let e={zIndex:d.zIndex},a=null,i=d.data;return d.content&&(a=l.cloneElement(d.content,{data:i})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:e,id:t,children:a})}),d.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(d.visible?"active":""),onClick:()=>{var o;o=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:o})}}):null]},t)}}))})},s=o=>{let t=(0,a.bh)("listDialog")||{},e=(0,a.M5)();t[e]||(t[e]={}),t[e].visible=!0;let l={};o.props?(l=o.props,l.modalID=e):l.modalID=e;let d=document.getElementsByTagName("body")[0];null!==d&&void 0!==d&&d.style&&(d.style.overflowY="hidden"),t[e].isView=o.isView,t[e].observeResize=o.observeResize,t[e].observeResize&&(t[e].observeInterval=setInterval((()=>{let o=document.querySelector("[dialog-key-id='".concat(e,"']")),l=o&&o.getBoundingClientRect();l&&(l.width===t[e].width&&l.height===t[e].height||(t[e].height=l.height+10,t[e].width=l.width,(0,a.Rz)("listDialog",t),(0,a.wt)(i)))}),200)),t[e].display=!0,o.zIndex&&(t[e].zIndex=o.zIndex),o.height&&(t[e].height=o.height),o.width&&(t[e].width=o.width),o.content&&(t[e].content=o.content),t[e].data=l,(0,a.Rz)("listDialog",t),(0,a.wt)(i),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",e),(0,a.wt)(i)}),125)},c=o=>{let t=(0,a.bh)("listDialog")||{},e=o.id;if(t[e]){var l,d,n;t[e].observeResize&&t[e].observeInterval&&clearInterval(t[e].observeInterval),t[e].display=!1,null===(l=t[e])||void 0===l||null===(d=l.data)||void 0===d||null===(n=d.closeEvent)||void 0===n||n.call(d),(0,a.Rz)("listDialog",t),delete t[e],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(i),setTimeout((()=>{delete t[e],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750)}}},6824:(o,t,e)=>{e.d(t,{Hc:()=>i,M9:()=>s,cg:()=>c,jD:()=>r});var l=e(6963),d=e(2350),a=e(4e3);async function n(o){const t=await o.embedFont(l.StandardFonts.Helvetica);let e=await o.embedFont(l.StandardFonts.TimesRomanBold),a=await o.embedFont(l.StandardFonts.TimesRoman),n=(0,d.bh)("Roboto-Bold.ttf");const i=await fetch(n).then((o=>o.arrayBuffer())),r=await o.embedFont(i,{subset:!0});let s=(0,d.bh)("ggSans-Medium.ttf");const c=await fetch(s).then((o=>o.arrayBuffer())),x=await o.embedFont(c,{subset:!0});let w=(0,d.bh)("Roboto-Regular.ttf");const b=await fetch(w).then((o=>o.arrayBuffer())),g=await o.embedFont(b,{subset:!0});let h=(0,d.bh)("arial_bold.ttf");const f=await fetch(h).then((o=>o.arrayBuffer()));return{GSansBold:x,helveticaFont:t,RobotoBold:r,RobotoRegular:g,aria_regurlar:await o.embedFont(f,{subset:!0}),TimesRomanBold:e,TimesRomanItalic:a}}const i=async o=>{const t=await l.PDFDocument.create();t.registerFontkit(a.Z);const e=await n(t),i=o.map((async(o,a)=>{var n,i;const r=t.addPage([288,162]),{width:s,height:c}=r.getSize();let x=c-14;const w=(0,d.ye)((null===o||void 0===o?void 0:o.inventoryId)+""),b=await fetch(w).then((o=>o.arrayBuffer()));let g=await t.embedPng(b);g&&r.drawImage(g,{x:10,y:80,width:80,height:80});const h=e.GSansBold.widthOfTextAtSize((null===o||void 0===o?void 0:o.inventoryId)+"",12),f=e.GSansBold.widthOfTextAtSize("ID: ",11);r.drawText("ID: ",{x:270-h-f,y:x,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),r.drawText((null===o||void 0===o?void 0:o.inventoryId)+"",{x:270-h,y:x,size:12,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),x-=20;const u=e.RobotoBold.widthOfTextAtSize("Date: ",11),v=e.GSansBold.widthOfTextAtSize((0,d.Gv)(null===o||void 0===o?void 0:o.date)+"",12);r.drawText("Date: ",{x:270-u-v,y:x,size:11,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText((0,d.Gv)(null===o||void 0===o?void 0:o.date)+"",{x:270-v,y:x,size:12,font:e.GSansBold,color:(0,l.rgb)(.06,.06,.06)});let y=null!==o&&void 0!==o&&o.dimension?(null===o||void 0===o?void 0:o.dimension.split(",")[0])+" X "+(null===o||void 0===o?void 0:o.dimension.split(",")[1])+" inch":"";const z=e.GSansBold.widthOfTextAtSize(y+"",19);r.drawText(y+"",{x:270-z,y:x+4,size:19,font:e.GSansBold,color:(0,l.rgb)(.06,.06,.06)});let B=(null===o||void 0===o?void 0:o.qty)+" "+(null!==o&&void 0!==o&&o.unit?null===o||void 0===o?void 0:o.unit:"");const m=e.GSansBold.widthOfTextAtSize(B+"",19);r.drawText(B+"",{x:270-m,y:x-54,size:19,font:e.GSansBold,color:(0,l.rgb)(.06,.06,.06)}),x-=65,r.drawRectangle({x:15,y:x+1,width:560,height:.85,color:(0,l.rgb)(.53,.53,.53),borderColor:(0,l.rgb)(.53,.53,.53)});let S=null===(n=(0,d.bh)("products_ids"))||void 0===n||null===(i=n[null===o||void 0===o?void 0:o.productId])||void 0===i?void 0:i.name;r.drawText(S+"",{x:20,y:x-15,size:14,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),x-=25,r.drawRectangle({x:15,y:x+1,width:560,height:.85,color:(0,l.rgb)(.53,.53,.53),borderColor:(0,l.rgb)(.53,.53,.53)}),x-=10,x-=20,r.drawText(B+"",{x:270-m,y:x+4,size:19,font:e.GSansBold,color:(0,l.rgb)(.06,.06,.06)}),r.drawText((null===o||void 0===o?void 0:o.alphaCode)+"",{x:20,y:x+4,size:22,font:e.RobotoBold,color:(0,l.rgb)(.06,.06,.06)})})),r=(await Promise.all(i),await t.save());let s=(0,d.ou)(r);window.open(s)},r=async o=>{const t=await l.PDFDocument.create();t.registerFontkit(a.Z);const e=await n(t),i=t.addPage(),{width:r,height:s}=i.getSize();let c=s-34;const x=e.GSansBold.widthOfTextAtSize((null===o||void 0===o?void 0:o.invoice)+"",12),w=e.GSansBold.widthOfTextAtSize("Invoice: ",11);i.drawText("Production Voucher: ",{x:40,y:c,size:16,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText("Invoice: ",{x:520-x-w,y:c,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText((null===o||void 0===o?void 0:o.invoice)+"",{x:520-x,y:c,size:12,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),c-=30;const b=e.GSansBold.widthOfTextAtSize("Customer: ",11);i.drawText("Customer: ",{x:20,y:c,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText((null===o||void 0===o?void 0:o.clientName)+"",{x:30+b,y:c,size:12,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),c-=15;const g=e.GSansBold.widthOfTextAtSize("Address: ",11);i.drawText("Address: ",{x:20,y:c,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText((null===o||void 0===o?void 0:o.clientAddress)+"",{x:30+g,y:c,size:12,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),c-=45,i.drawText("Materials: ",{x:50,y:c,size:14,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),c-=25,i.drawRectangle({x:15,y:c-6,width:560,height:.85,color:(0,l.rgb)(.53,.53,.53),borderColor:(0,l.rgb)(.53,.53,.53)}),i.drawText("PROFILE",{x:480,y:c,size:12,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText("QTY",{x:400,y:c,size:12,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText("PRODUCT",{x:40,y:c,size:12,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),c-=5,o.products.map((async(o,t)=>{c-=20,i.drawText(null!==o&&void 0!==o&&o.profile?(null===o||void 0===o?void 0:o.profile)+"":"",{x:480,y:c,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText((null===o||void 0===o?void 0:o.qty)+"",{x:410,y:c,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText((null===o||void 0===o?void 0:o.productName)+"",{x:50,y:c,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)})})),c-=450;const h=o.products.filter((o=>o.pngId)).map((async(o,d)=>{const a=o.pngId,n=await fetch(a).then((o=>o.arrayBuffer()));let r=await t.embedPng(n);c-=280*d,i.drawText((null===o||void 0===o?void 0:o.productName)+"",{x:118,y:c+310,size:8,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),r&&i.drawImage(r,{x:60,y:c,width:650,height:400})})),f=(await Promise.all(h),[null].map((async(d,a)=>{const n=t.addPage([432,288]),{width:i,height:r}=n.getSize();let s=r-24;const c=e.GSansBold.widthOfTextAtSize((null===o||void 0===o?void 0:o.invoice)+"",14),x=e.GSansBold.widthOfTextAtSize("Invoice: ",11);n.drawText("Production Voucher: ",{x:10,y:s,size:16,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),n.drawText("Invoice: ",{x:400-c-x,y:s,size:10,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),n.drawText((null===o||void 0===o?void 0:o.invoice)+"",{x:400-c,y:s-3,size:18,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),s-=30;const w=e.GSansBold.widthOfTextAtSize("Customer: ",8);n.drawText("Customer: ",{x:10,y:s,size:8,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),n.drawText((null===o||void 0===o?void 0:o.clientName)+"",{x:10+w,y:s,size:7,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),s-=15;const b=e.GSansBold.widthOfTextAtSize("Address: ",8);n.drawText("Address: ",{x:12,y:s,size:8,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),n.drawText((null===o||void 0===o?void 0:o.clientAddress)+"",{x:12+b,y:s,size:7,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),s-=25,n.drawRectangle({x:5,y:s-6,width:410,height:.85,color:(0,l.rgb)(.53,.53,.53),borderColor:(0,l.rgb)(.53,.53,.53)}),n.drawText("PROFILE",{x:360,y:s,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),n.drawText("QTY",{x:320,y:s,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),n.drawText("PRODUCT",{x:20,y:s,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),s-=5,o.products.map((async(o,t)=>{s-=20,n.drawText(null!==o&&void 0!==o&&o.profile?(null===o||void 0===o?void 0:o.profile)+"":"",{x:360,y:s,size:8,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),n.drawText((null===o||void 0===o?void 0:o.qty)+"",{x:325,y:s,size:9,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),n.drawText((null===o||void 0===o?void 0:o.productName)+"",{x:8,y:s,size:8,font:e.GSansBold,color:(0,l.rgb)(0,0,0)})}))}))),u=(await Promise.all(f),await t.save());return(0,d.ou)(u)},s=async o=>{const t=await l.PDFDocument.create();t.registerFontkit(a.Z);const e=await n(t);let i=t.addPage();const{width:r,height:s}=i.getSize();let c=s-26;i.drawText("Inventario",{x:20,y:c,size:16,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),i.drawText("Date: "+(0,d.Gv)(Date.now()),{x:500,y:c,size:11,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),c-=20;let x=13;i.drawText("Product",{x:20,y:c,size:x,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)});const w=e.RobotoBold.widthOfTextAtSize("Qty",x);i.drawText("Qty",{x:430-w,y:c,size:x,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)});const b=e.RobotoBold.widthOfTextAtSize("Cost",x);i.drawText("Cost",{x:500-b,y:c,size:x,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)});const g=e.RobotoBold.widthOfTextAtSize("Amount",x);i.drawText("Amount",{x:580-g,y:c,size:x,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)}),c-=1;let h=((o,t)=>{var e,a;let n=[];const i=10;let r=0;o&&o.map(((o,e)=>{let a=o.amount;if(a){let s={},c="("+o.unit+")              "+o.qty;const x=t.GSansBold.widthOfTextAtSize((0,d.fY)(a),i),w=t.GSansBold.widthOfTextAtSize((0,d.fY)(c),i),b=t.GSansBold.widthOfTextAtSize((0,d.fY)(o.cost),i);r+=1*a,s={yInc:19,back:e%2===0?{x:22,y:-25,width:564,height:18,color:(0,l.rgb)(.78,.78,.78)}:null,name:{value:(0,d.fY)(o.name),x:30,size:i,font:t.GSansBold},qty:{value:(0,d.fY)(c),x:440-w,size:i,font:t.GSansBold},cost:{value:(0,d.fY)(o.cost),x:500-b,size:i,font:t.GSansBold},amount:{value:(0,d.fY)(a),x:580-x,size:i,font:t.GSansBold}},n.push(s)}}));const s=t.GSansBold.widthOfTextAtSize((null===(e=r)||void 0===e?void 0:e.toFixed(2))+"",12);let c={yInc:23,line:{x:396,y:12.3,width:192,height:.5,borderColor:(0,l.rgb)(0,0,0)},cost:{value:(0,d.fY)("Total"),x:400,size:12,font:t.GSansBold},amount:{value:(0,d.fY)(null===(a=r)||void 0===a?void 0:a.toFixed(2)),x:580-s,size:12,font:t.GSansBold}};return n.push(c),n})(o.list,e),f=Math.ceil(h.length/36);Array.from(Array(f).keys()).map((o=>{if(o>0){i=t.addPage(),c=s-26,i.drawText("Product",{x:20,y:c,size:x,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)});const o=e.RobotoBold.widthOfTextAtSize("Qty",x);i.drawText("Qty",{x:430-o,y:c,size:x,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)});const d=e.RobotoBold.widthOfTextAtSize("Cost",x);i.drawText("Cost",{x:500-d,y:c,size:x,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)});const a=e.RobotoBold.widthOfTextAtSize("Amount",x);i.drawText("Amount",{x:580-a,y:c,size:x,font:e.RobotoBold,color:(0,l.rgb)(0,0,0)}),c-=2}let d=h.slice(36*o,36*(o+1));d&&d.map(((o,t)=>{c-=o.yInc,o.back&&i.drawRectangle({x:o.back.x,y:c+o.back.y,width:o.back.width,height:o.back.height,color:o.back.color,blendMode:l.BlendMode.Normal}),o.line&&i.drawRectangle({x:o.line.x,y:c+o.line.y,width:o.line.width,height:o.line.height,borderColor:(0,l.rgb)(0,0,0)}),o.name&&i.drawText(o.name.value,{x:o.name.x,y:c,size:o.name.size,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),o.qty&&i.drawText(o.qty.value,{x:o.qty.x,y:c,size:o.qty.size,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),o.cost&&i.drawText(o.cost.value,{x:o.cost.x,y:c,size:o.cost.size,font:e.GSansBold,color:(0,l.rgb)(0,0,0)}),o.amount&&i.drawText(o.amount.value,{x:o.amount.x,y:c,size:o.amount.size,font:e.GSansBold,color:(0,l.rgb)(0,0,0)})}))}));const u=await t.save();let v=(0,d.ou)(u);window.open(v)},c=async o=>{const t=[792,612],e=await l.PDFDocument.create();e.registerFontkit(a.Z);const i=await n(e);let r=e.addPage(t);const{width:s,height:c}=r.getSize();let x=440,w=c-26;r.drawText("Invoices",{x:20,y:w,size:16,font:i.GSansBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Fecha del reporte: "+(0,d.Gv)(Date.now()),{x:620,y:w,size:11,font:i.GSansBold,color:(0,l.rgb)(0,0,0)}),w-=35;let b=13;r.drawText("Fecha",{x:20,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Documento",{x:100,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Importe",{x:x,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Vendido",{x:510,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Anticipo",{x:580,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Cobrado",{x:650,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Saldo",{x:720,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),w-=1;let g=((o,t)=>{let e=[];const a=10;let n=446;return o&&o.map(((o,i)=>{let r={};r={yInc:19,back:i%2===0?{x:22,y:-25,width:764,height:18,color:(0,l.rgb)(.78,.78,.78)}:null,date:{value:o.date?(0,d.sJ)(o.date):"",x:30,size:a,font:t.GSansBold},document:{value:(0,d.fY)(o.document),x:110,size:a,font:t.GSansBold},import:{value:(0,d.fY)(o.amount),x:n,size:a,font:t.GSansBold},vendido:{value:(0,d.fY)(o.cc_d),x:516,size:a,font:t.GSansBold},anticipo:{value:(0,d.fY)(o.hasAnticipo),x:586,size:a,font:t.GSansBold},cobrado:{value:(0,d.fY)(o.cc_c),x:656,size:a,font:t.GSansBold},saldo:{value:(0,d.fY)(o.cc_c),x:726,size:a,font:t.GSansBold}},e.push(r)})),e})(o,i),h=Math.ceil(g.length/28);Array.from(Array(h).keys()).map((o=>{o>0&&(r=e.addPage(t),w=c-26,r.drawText("Fecha",{x:20,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Documento",{x:100,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Importe",{x:x,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Vendido",{x:510,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Anticipo",{x:580,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Cobrado",{x:650,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),r.drawText("Saldo",{x:720,y:w,size:b,font:i.RobotoBold,color:(0,l.rgb)(0,0,0)}),w-=2);let d=g.slice(28*o,28*(o+1));d&&d.map(((o,t)=>{w-=o.yInc,o.back&&r.drawRectangle({x:o.back.x,y:w+o.back.y,width:o.back.width,height:o.back.height,color:o.back.color,blendMode:l.BlendMode.Normal}),o.line&&r.drawRectangle({x:o.line.x,y:w+o.line.y,width:o.line.width,height:o.line.height,borderColor:(0,l.rgb)(0,0,0)}),o.date&&r.drawText(o.date.value,{x:o.date.x,y:w,size:o.date.size,font:i.GSansBold,color:(0,l.rgb)(0,0,0)}),o.document&&r.drawText(o.document.value,{x:o.document.x,y:w,size:o.document.size,font:i.GSansBold,color:(0,l.rgb)(0,0,0)}),o.import&&r.drawText(o.import.value,{x:o.import.x,y:w,size:o.import.size,font:i.GSansBold,color:(0,l.rgb)(0,0,0)}),o.vendido&&r.drawText(o.vendido.value,{x:o.vendido.x,y:w,size:o.vendido.size,font:i.GSansBold,color:(0,l.rgb)(0,0,0)}),o.anticipo&&r.drawText(o.anticipo.value,{x:o.anticipo.x,y:w,size:o.anticipo.size,font:i.GSansBold,color:(0,l.rgb)(0,0,0)}),o.cobrado&&r.drawText(o.cobrado.value,{x:o.cobrado.x,y:w,size:o.cobrado.size,font:i.GSansBold,color:(0,l.rgb)(0,0,0)}),o.saldo&&r.drawText(o.saldo.value,{x:o.saldo.x,y:w,size:o.saldo.size,font:i.GSansBold,color:(0,l.rgb)(0,0,0)})}))}));const f=await e.save();let u=(0,d.ou)(f);window.open(u)}}}]);
//# sourceMappingURL=5154.dbd37816.chunk.js.map