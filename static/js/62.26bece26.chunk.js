"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[62,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return c},OpenModal:function(){return d},default:function(){return s}});var o=n(2791),r=n(5408),a=n(2350),i=n(184),l="listDialog_mdh392",s=function(){var e=(0,a.bh)("listDialog")||{},t=((0,r.Z)(l),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:t.map((function(t,n){var r=e[t];if(r&&r.visible){var a={};r.height&&(a.heigth=r.height),r.width,r.zIndex&&(a.zIndex=r.zIndex-1);var l={zIndex:r.zIndex},s=null,d=r.data;return r.content&&(s=o.cloneElement(r.content,{data:d})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:l,id:t,children:s})}),r.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},d=function(e){var t=(0,a.bh)("listDialog")||{},n=(0,a.M5)();t[n]||(t[n]={}),t[n].visible=!0;var o={};e.props?(o=e.props).modalID=n:o.modalID=n;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===t[n].width&&o.height===t[n].height||(t[n].height=o.height+10,t[n].width=o.width,(0,a.Rz)("listDialog",t),(0,a.wt)(l)))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=o,(0,a.Rz)("listDialog",t),(0,a.wt)(l),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",n),(0,a.wt)(l)}),125)},c=function(e){var t,n,o,r=(0,a.bh)("listDialog")||{},i=e.id;r[i]&&(r[i].observeResize&&r[i].observeInterval&&clearInterval(r[i].observeInterval),r[i].display=!1,null===(t=r[i])||void 0===t||null===(n=t.data)||void 0===n||null===(o=n.closeEvent)||void 0===o||o.call(n),(0,a.Rz)("listDialog",r),delete r[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(l),setTimeout((function(){delete r[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},62:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var o=n(1413),r=n(4165),a=n(5861),i=n(9439),l=n(2791),s=n(2350),d=n(2647),c=n(9760),u=(n(7889),n(24)),h=n(713),x=n(4050),f=(n(1534),n(184)),v=(0,d.Jo)(),m=(0,d.PU)(),p=function(e){var t=e.data,n=e.confirm,o=(e.label,e.item),r=t.modalID,a=(0,l.useState)(1),s=(0,i.Z)(a,2),d=s[0],u=s[1],h=function(e){(0,c.CloseModal)({id:r})};return(0,f.jsxs)("div",{style:{maxHeight:"60vh",minHeight:"28vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("p",{className:"code_prod_header",children:null===o||void 0===o?void 0:o.productCode}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsx)("p",{className:"lbl_prod_header",children:null===o||void 0===o?void 0:o.name})]}),(0,f.jsxs)("div",{className:"_dsplFlx ",style:{padding:9},children:[(0,f.jsx)("div",{children:(0,f.jsx)(v,{src:null===o||void 0===o?void 0:o.imageUrl,width:150,fontSize:[12,16]})}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsxs)("div",{className:"_dsplFlx btns_control_2cart",children:[d-1>0?(0,f.jsx)("div",{className:"iconFlx ",children:(0,f.jsx)("div",{onClick:function(){d-1>=0&&u((function(e){return e-1}))},children:(0,f.jsx)(m,{name:"minus",color:"#80868b",size:48})})}):(0,f.jsx)("div",{className:"iconFlx ",children:(0,f.jsx)("div",{style:{width:52}})}),(0,f.jsx)("div",{className:"iconFlx lbl_prod_amount",children:d}),(0,f.jsx)("div",{className:"iconFlx",children:(0,f.jsx)("div",{onClick:function(){u((function(e){return e+1}))},children:(0,f.jsx)(m,{name:"plus",color:"#80868b",size:48})})})]})]}),(0,f.jsxs)("div",{className:"_dsplFlx ",style:{padding:"1px 10px"},children:[(0,f.jsxs)("p",{className:"lbl_prod_price",children:["$",null===o||void 0===o?void 0:o.price]}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("div",{className:"iconFlx",children:(0,f.jsx)("p",{className:"group_title addBtn iconFlx",onClick:h,children:"Cancelar"})}),(0,f.jsx)("div",{className:"iconFlx",children:(0,f.jsx)("p",{className:"group_title addBtn purple iconFlx",onClick:function(){n({productId:o.productId,amount:d,productName:o.name}),h()},children:"Agregar"})})]})]})]})},g=n(15),b=n(6824),w=(0,d.Vg)(),y=(0,u.Qz)(),z=(0,u.O6)(),j=((0,u.$d)(),(0,u.Y3)()),B=(0,d.Jo)(),S="coll2listprods",T=function(e){e.data,e.elmId;var t,n,d,u=e.updObs,v=(0,l.useState)(!1),m=(0,i.Z)(v,2),T=m[0],N=m[1],_=(0,l.useState)(0),R=(0,i.Z)(_,2),F=(R[0],R[1]),I=(0,l.useState)(0),k=(0,i.Z)(I,2),C=k[0],O=k[1],A=(0,l.useState)(!1),Z=(0,i.Z)(A,2),D=Z[0],G=Z[1],M=(0,l.useState)(128),q=(0,i.Z)(M,2),P=q[0],Y=q[1];(0,l.useEffect)((function(){T||(N(!0),F((0,s.M5)()),(0,s.Rz)("products_list",null),(0,x.Ht)("global_accounts","global_account_params",u),U())}));var E=function(){},H=function(e){(0,s.Rz)("products_list",null),U()},V=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F((0,s.M5)()),G(!1);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(e){(0,g.OpenToast)({text:e.productName+"  added to cart",timeout:1500})},U=function(){var e=(0,o.Z)({},(0,s.bh)("products_list"));(0,s.Rz)(S,e),V()},L=function(e){(0,b.M9)(e)},J=function(e){var t=e.list;(0,s.eY)("export_products__"+(0,s.M5)()+".csv",t)};return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Products"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,s.I0)()?(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,f.jsx)(y,{}),(0,c.OpenModal)(e)},children:"Agregar Producto"}):null,(0,s.bh)("profileUser").isAdmin?(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){return O(!C)},children:"Cambiar Vista"}):null,(0,s.I0)()?(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,h.qT)(L)},children:"Listar Inventario"}):null,(0,s.I0)()?(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,h.qT)(J)},children:"Exportar Inventario"}):null,(0,s.I0)()?(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){var t={zIndex:450,height:"90vh",props:{minHeight:"1vh",overlay:!0}};t.content=(0,f.jsx)(j,{item:e,confirm:Q}),(0,c.OpenModal)(t)},children:"Comparar Inventario"}):null]})]}),(0,f.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,f.jsx)(w,{placeholder:"Buscar ....",width:560,obs:F,fetchData:function(e){G(!0),(0,h.Ve)(U)},loading:D,change:function(e){!D&&G(!0)},callempty:H,keyFlds:"searchQry"}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("div",{className:"total_comprobante_title",children:"No de Productos:"}),(0,f.jsx)("div",{className:"total_comprobante gray",children:(0,f.jsx)("span",{children:null===(t=(0,s._2)((0,s.bh)("products_list")))||void 0===t?void 0:t.length})})]})]}),C?(0,f.jsx)("div",{className:"products_container scollVh FlexList ",children:(0,s.bh)(S)&&(null===(n=(0,h.B8)((0,s.bh)(S),P))||void 0===n?void 0:n.map((function(e){var t=(0,s.bh)(S)[e];return(0,f.jsx)("div",{style:{padding:9},onClick:function(){return function(e){var t={zIndex:450,height:"90vh",props:{minHeight:"1vh",overlay:!0}};t.content=(0,f.jsx)(p,{item:e,confirm:Q}),(0,c.OpenModal)(t)}(t)},children:(0,f.jsx)(B,{src:null===t||void 0===t?void 0:t.imageUrl,width:160,lbl:null===t||void 0===t?void 0:t.name,fontSize:[12,16]},e)})})))}):(0,f.jsxs)("div",{className:"products_container scollVh",children:[(0,s.bh)(S)&&(null===(d=(0,h.B8)((0,s.bh)(S),P))||void 0===d?void 0:d.map((function(e){return(0,f.jsx)(z,{data:(0,s.bh)(S)[e],elmId:e,openUpdateView:E,handleRefreshAll:H,updRvw:F},e)}))),(0,s.bh)(S)&&(0,s._2)((0,s.bh)(S),P).length>P?(0,f.jsxs)("div",{className:"_dsplFlx ",style:{margin:"15px 0 35px"},children:[(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){Y((function(e){return e+128}))},children:"Cargar Mas"}),(0,f.jsx)("div",{className:"flexSpace"})]}):null]})]})}},6824:function(e,t,n){n.d(t,{Hc:function(){return c},M9:function(){return h}});var o=n(4165),r=n(5861),a=n(6963),i=n(2350),l=n(4e3);function s(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((0,o.Z)().mark((function e(t){var n,r,l,s,d,c,u,h,x,f,v,m,p,g,b;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.embedFont(a.StandardFonts.Helvetica);case 2:return n=e.sent,e.next=5,t.embedFont(a.StandardFonts.TimesRomanBold);case 5:return r=e.sent,e.next=8,t.embedFont(a.StandardFonts.TimesRoman);case 8:return l=e.sent,s=(0,i.bh)("Roboto-Bold.ttf"),e.next=12,fetch(s).then((function(e){return e.arrayBuffer()}));case 12:return d=e.sent,e.next=15,t.embedFont(d,{subset:!0});case 15:return c=e.sent,u=(0,i.bh)("ggSans-Medium.ttf"),e.next=19,fetch(u).then((function(e){return e.arrayBuffer()}));case 19:return h=e.sent,e.next=22,t.embedFont(h,{subset:!0});case 22:return x=e.sent,f=(0,i.bh)("Roboto-Regular.ttf"),e.next=26,fetch(f).then((function(e){return e.arrayBuffer()}));case 26:return v=e.sent,e.next=29,t.embedFont(v,{subset:!0});case 29:return m=e.sent,p=(0,i.bh)("arial_bold.ttf"),e.next=33,fetch(p).then((function(e){return e.arrayBuffer()}));case 33:return g=e.sent,e.next=36,t.embedFont(g,{subset:!0});case 36:return b=e.sent,e.abrupt("return",{GSansBold:x,helveticaFont:n,RobotoBold:c,RobotoRegular:m,aria_regurlar:b,TimesRomanBold:r,TimesRomanItalic:l});case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var c=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var n,s,d,c,u,h,x,f,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.PDFDocument.create();case 2:return(n=e.sent).registerFontkit(l.Z),e.next=6,n.embedFont(a.StandardFonts.TimesRoman);case 6:return s=e.sent,e.next=9,n.embedFont(a.StandardFonts.TimesRomanBold);case 9:if(d=e.sent,!(0,i.bh)("modernFontReport")){e.next=25;break}return c=(0,i.bh)("Roboto-Bold.ttf"),e.next=14,fetch(c).then((function(e){return e.arrayBuffer()}));case 14:return u=e.sent,e.next=17,n.embedFont(u);case 17:return d=e.sent,"https://qvamarkets.com/gql_api/getStatic?fileName=gSans-Italic.otf",e.next=21,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=gSans-Italic.otf").then((function(e){return e.arrayBuffer()}));case 21:return h=e.sent,e.next=24,n.embedFont(h);case 24:s=e.sent;case 25:return x=t.map(function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t,r){var l,c,u,h,x,f,v,m,p,g,b,w,y,z,j,B,S,T;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=n.addPage([288,162]),h=u.getSize(),h.width,x=h.height,f=x-14,v=(0,i.ye)((null===t||void 0===t?void 0:t.inventoryId)+""),e.next=6,fetch(v).then((function(e){return e.arrayBuffer()}));case 6:return m=e.sent,e.next=9,n.embedPng(m);case 9:(p=e.sent)&&u.drawImage(p,{x:10,y:80,width:80,height:80}),g=d.widthOfTextAtSize((null===t||void 0===t?void 0:t.inventoryId)+"",12),b=s.widthOfTextAtSize("ID: ",11),u.drawText("ID: ",{x:270-g-b,y:f,size:11,font:s,color:(0,a.rgb)(0,0,0)}),u.drawText((null===t||void 0===t?void 0:t.inventoryId)+"",{x:270-g,y:f,size:12,font:d,color:(0,a.rgb)(0,0,0)}),f-=20,w=null!==t&&void 0!==t&&t.dimension?(null===t||void 0===t?void 0:t.dimension.split(",")[0])+" X "+(null===t||void 0===t?void 0:t.dimension.split(",")[1])+" inch":"",y=d.widthOfTextAtSize(w+"",19),u.drawText(w+"",{x:270-y,y:f-24,size:19,font:d,color:(0,a.rgb)(.06,.06,.06)}),z=null!==t&&void 0!==t&&t.squareFeet?(null===t||void 0===t?void 0:t.squareFeet)+" S/F":"1 Unit",j=d.widthOfTextAtSize(z+"",19),u.drawText(z+"",{x:270-j,y:f-44,size:19,font:d,color:(0,a.rgb)(.06,.06,.06)}),f-=65,u.drawRectangle({x:15,y:f+1,width:560,height:.85,color:(0,a.rgb)(.53,.53,.53),borderColor:(0,a.rgb)(.53,.53,.53)}),B=null===(l=(0,i.bh)("products_ids"))||void 0===l||null===(c=l[null===t||void 0===t?void 0:t.productId])||void 0===c?void 0:c.name,u.drawText(B+"",{x:20,y:f-15,size:14,font:s,color:(0,a.rgb)(0,0,0)}),f-=25,u.drawRectangle({x:15,y:f+1,width:560,height:.85,color:(0,a.rgb)(.53,.53,.53),borderColor:(0,a.rgb)(.53,.53,.53)}),f-=10,f-=20,S=s.widthOfTextAtSize("Date: ",11),T=d.widthOfTextAtSize((0,i.Gv)(null===t||void 0===t?void 0:t.date)+"",12),u.drawText("Date: ",{x:270-S-T,y:f,size:11,font:s,color:(0,a.rgb)(0,0,0)}),u.drawText((0,i.Gv)(null===t||void 0===t?void 0:t.date)+"",{x:270-T,y:f,size:12,font:d,color:(0,a.rgb)(.06,.06,.06)}),u.drawText((null===t||void 0===t?void 0:t.alphaCode)+"",{x:20,y:f+4,size:22,font:d,color:(0,a.rgb)(.06,.06,.06)});case 35:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=28,Promise.all(x);case 28:return e.sent,e.next=31,n.save();case 31:f=e.sent,v=(0,i.ou)(f),window.open(v);case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t){var n,o,r=[],l=10,s=0;e&&e.map((function(e,n){var o=e.amount;if(o){var d,c="("+e.unit+")              "+e.qty,u=t.GSansBold.widthOfTextAtSize((0,i.fY)(o),l),h=t.GSansBold.widthOfTextAtSize((0,i.fY)(c),l),x=t.GSansBold.widthOfTextAtSize((0,i.fY)(e.cost),l);s+=1*o,d={yInc:19,back:n%2===0?{x:22,y:-25,width:564,height:18,color:(0,a.rgb)(.78,.78,.78)}:null,name:{value:(0,i.fY)(e.name),x:30,size:l,font:t.GSansBold},qty:{value:(0,i.fY)(c),x:440-h,size:l,font:t.GSansBold},cost:{value:(0,i.fY)(e.cost),x:500-x,size:l,font:t.GSansBold},amount:{value:(0,i.fY)(o),x:580-u,size:l,font:t.GSansBold}},r.push(d)}}));var d=t.GSansBold.widthOfTextAtSize((null===(n=s)||void 0===n?void 0:n.toFixed(2))+"",12),c={yInc:23,line:{x:396,y:12.3,width:192,height:.5,borderColor:(0,a.rgb)(0,0,0)},cost:{value:(0,i.fY)("Total"),x:400,size:12,font:t.GSansBold},amount:{value:(0,i.fY)(null===(o=s)||void 0===o?void 0:o.toFixed(2)),x:580-d,size:12,font:t.GSansBold}};return r.push(c),r},h=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var n,r,d,c,h,x,f,v,m,p,g,b,w,y;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.PDFDocument.create();case 2:return(n=e.sent).registerFontkit(l.Z),e.next=6,s(n);case 6:return r=e.sent,d=n.addPage(),c=d.getSize(),c.width,h=c.height,x=h-26,36,d.drawText("Inventario",{x:20,y:x,size:16,font:r.GSansBold,color:(0,a.rgb)(0,0,0)}),d.drawText("Date: "+(0,i.Gv)(Date.now()),{x:500,y:x,size:11,font:r.GSansBold,color:(0,a.rgb)(0,0,0)}),x-=20,f=13,d.drawText("Product",{x:20,y:x,size:f,font:r.RobotoBold,color:(0,a.rgb)(0,0,0)}),v=r.RobotoBold.widthOfTextAtSize("Qty",f),d.drawText("Qty",{x:430-v,y:x,size:f,font:r.RobotoBold,color:(0,a.rgb)(0,0,0)}),m=r.RobotoBold.widthOfTextAtSize("Cost",f),d.drawText("Cost",{x:500-m,y:x,size:f,font:r.RobotoBold,color:(0,a.rgb)(0,0,0)}),p=r.RobotoBold.widthOfTextAtSize("Amount",f),d.drawText("Amount",{x:580-p,y:x,size:f,font:r.RobotoBold,color:(0,a.rgb)(0,0,0)}),x-=1,g=u(t.list,r),b=Math.ceil(g.length/36),Array.from(Array(b).keys()).map((function(e){if(e>0){d=n.addPage(),x=h-26,d.drawText("Product",{x:20,y:x,size:f,font:r.RobotoBold,color:(0,a.rgb)(0,0,0)});var t=r.RobotoBold.widthOfTextAtSize("Qty",f);d.drawText("Qty",{x:430-t,y:x,size:f,font:r.RobotoBold,color:(0,a.rgb)(0,0,0)});var o=r.RobotoBold.widthOfTextAtSize("Cost",f);d.drawText("Cost",{x:500-o,y:x,size:f,font:r.RobotoBold,color:(0,a.rgb)(0,0,0)});var i=r.RobotoBold.widthOfTextAtSize("Amount",f);d.drawText("Amount",{x:580-i,y:x,size:f,font:r.RobotoBold,color:(0,a.rgb)(0,0,0)}),x-=2}var l=g.slice(36*e,36*(e+1));l&&l.map((function(e,t){x-=e.yInc,e.back&&d.drawRectangle({x:e.back.x,y:x+e.back.y,width:e.back.width,height:e.back.height,color:e.back.color,blendMode:a.BlendMode.Normal}),e.line&&d.drawRectangle({x:e.line.x,y:x+e.line.y,width:e.line.width,height:e.line.height,borderColor:(0,a.rgb)(0,0,0)}),e.name&&d.drawText(e.name.value,{x:e.name.x,y:x,size:e.name.size,font:r.GSansBold,color:(0,a.rgb)(0,0,0)}),e.qty&&d.drawText(e.qty.value,{x:e.qty.x,y:x,size:e.qty.size,font:r.GSansBold,color:(0,a.rgb)(0,0,0)}),e.cost&&d.drawText(e.cost.value,{x:e.cost.x,y:x,size:e.cost.size,font:r.GSansBold,color:(0,a.rgb)(0,0,0)}),e.amount&&d.drawText(e.amount.value,{x:e.amount.x,y:x,size:e.amount.size,font:r.GSansBold,color:(0,a.rgb)(0,0,0)})}))})),e.next=28,n.save();case 28:w=e.sent,y=(0,i.ou)(w),window.open(y);case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7889:function(){},1534:function(){}}]);
//# sourceMappingURL=62.26bece26.chunk.js.map