"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9540,9760],{9760:function(e,t,i){i.r(t),i.d(t,{CloseModal:function(){return c},OpenModal:function(){return d},default:function(){return o}});var n=i(2791),l=i(5408),a=i(2350),r=i(184),s="listDialog_mdh392",o=function(){var e=(0,a.bh)("listDialog")||{},t=((0,l.Z)(s),Object.keys(e));return(0,r.jsx)(r.Fragment,{children:t.map((function(t,i){var l=e[t];if(l&&l.visible){var a={};l.height&&(a.heigth=l.height),l.width,l.zIndex&&(a.zIndex=l.zIndex-1);var s={zIndex:l.zIndex},o=null,d=l.data;return l.content&&(o=n.cloneElement(l.content,{data:d})),(0,r.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,r.jsx)("div",{className:"ltr-hoe9xz",children:(0,r.jsx)("div",{className:"ltr-1wao6ny",style:s,id:t,children:o})}),l.data.overlay?(0,r.jsx)("div",{className:"DialogHRMOverlay ".concat(l.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},d=function(e){var t=(0,a.bh)("listDialog")||{},i=(0,a.M5)();t[i]||(t[i]={}),t[i].visible=!0;var n={};e.props?(n=e.props).modalID=i:n.modalID=i;var l=document.getElementsByTagName("body")[0];null!==l&&void 0!==l&&l.style&&(l.style.overflowY="hidden"),t[i].isView=e.isView,t[i].observeResize=e.observeResize,t[i].observeResize&&(t[i].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(i,"']")),n=e&&e.getBoundingClientRect();n&&(n.width===t[i].width&&n.height===t[i].height||(t[i].height=n.height+10,t[i].width=n.width,(0,a.Rz)("listDialog",t),(0,a.wt)(s)))}),200)),t[i].display=!0,e.zIndex&&(t[i].zIndex=e.zIndex),e.height&&(t[i].height=e.height),e.width&&(t[i].width=e.width),e.content&&(t[i].content=e.content),t[i].data=n,(0,a.Rz)("listDialog",t),(0,a.wt)(s),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",i),(0,a.wt)(s)}),125)},c=function(e){var t,i,n,l=(0,a.bh)("listDialog")||{},r=e.id;l[r]&&(l[r].observeResize&&l[r].observeInterval&&clearInterval(l[r].observeInterval),l[r].display=!1,null===(t=l[r])||void 0===t||null===(i=t.data)||void 0===i||null===(n=i.closeEvent)||void 0===n||n.call(i),(0,a.Rz)("listDialog",l),delete l[r],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(s),setTimeout((function(){delete l[r],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},9540:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var n=i(4165),l=i(5861),a=i(9439),r=i(2791),s=(i(9760),i(7689)),o=i(2350),d=(i(1413),i(2647)),c=i(184),v=((0,d.LA)(),(0,d.Vg)(),(0,d.Np)(),(0,d.YZ)(),(0,d.A5)(),(0,o.Ks)(),i(5143)),u=function(e){e.tabs,e.active,e.updTab;var t,i=(0,r.useState)(1),d=(0,a.Z)(i,2),u=(d[0],d[1]),m=((0,s.s0)(),(0,o.bh)((0,o.Ks)()));(0,r.useEffect)((function(){var e;(null===(e=(0,o.bh)((0,o.Ks)()))||void 0===e?void 0:e.imagePath)&&x()}),[null===m||void 0===m?void 0:m.movementId]);var f=function(e){var t=new Image;t.onload=function(){var e={oh:t.height,ow:t.width,h:t.height,w:t.width};(0,o.Rz)("preview_mov_dmz",e),u((0,o.M5)())},e&&(t.src=e)},g=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,o.bh)((0,o.Ks)()).imagePath,(0,v.Qq)(t,(function(e){(0,v.JG)(e,t);var i=(0,o.LH)(t);w(e,i)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(t,i,l){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t?w(t,i,l):g();case 1:case"end":return e.stop()}}),e)})));return function(t,i,n){return e.apply(this,arguments)}}(),x=function(){var e=(0,o.bh)((0,o.Ks)()).imagePath;e=e.split(".png")[0]+".webp";var t=(0,o.LH)(e);(0,v.Qq)(e,(function(i){return p(i,t,e)}))},w=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(t,i,l){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Em)(t,i);case 2:a=e.sent,(0,o.Rz)("image_fileName",l),(0,o.Rz)("image_url_mov",t),(0,o.Rz)("image_preview_mov",a),f(a);case 7:case"end":return e.stop()}}),e)})));return function(t,i,n){return e.apply(this,arguments)}}(),y=null!==m&&void 0!==m&&m.amount?"$"+(1*(null===m||void 0===m?void 0:m.amount)).toFixed(2):"$0.00";return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{paddingTop:30}}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{className:"iMTYiw",style:{margin:"8px 0 0 12px",fontSize:20},children:null!==m&&void 0!==m&&m.date?(0,o.sG)(1*(null===m||void 0===m?void 0:m.date)):""}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" btn_filter y2 ".concat("expense"===(null===m||void 0===m?void 0:m.movementType)?"red":"blue"," "),children:(0,c.jsx)("span",{children:null===m||void 0===m?void 0:m.movementType})}),(0,c.jsx)("div",{style:{marginRight:12}})]}),(0,c.jsxs)("div",{style:{marginLeft:6,padding:"20px 0 0 4px"},children:[(0,c.jsx)("div",{className:"client_item_box gWXAaj jlytmu ",style:{marginBottom:14},children:(0,c.jsx)("div",{className:"title_cardheader l300 category",children:null===m||void 0===m||null===(t=m.categoryInfo)||void 0===t?void 0:t.name})}),(0,c.jsxs)("div",{className:"client_item_box gWXAaj jlytmu ",style:{marginBottom:14},children:[(0,c.jsx)("div",{className:"title_cardheader fS16",children:"Amount:"}),(0,c.jsx)("div",{className:"title_cardheader l300 ",children:y})]}),(0,c.jsxs)("div",{className:"client_item_box gWXAaj jlytmu ",style:{marginBottom:14},children:[(0,c.jsx)("div",{className:"title_cardheader fS16",children:"Title:"}),(0,c.jsx)("div",{className:"title_cardheader l300 ",children:null===m||void 0===m?void 0:m.title})]}),(0,c.jsxs)("div",{className:"client_item_box gWXAaj jlytmu",style:{marginBottom:14},children:[(0,c.jsx)("div",{className:"title_cardheader fS16",children:"Document:"}),(0,c.jsx)("div",{className:"title_cardheader l300 fS14",children:null===m||void 0===m?void 0:m.document})]}),(0,c.jsxs)("div",{className:"client_item_box gWXAaj jlytmu",style:{marginBottom:14},children:[(0,c.jsx)("div",{className:"title_cardheader fS16",children:"Description:"}),(0,c.jsx)("div",{className:"title_cardheader l300 fS14",children:null===m||void 0===m?void 0:m.description})]}),(0,c.jsx)("div",{className:"imagePreview",style:{},children:(0,o.bh)("preview_mov_dmz")?(0,c.jsx)(h,{image:(0,o.bh)("image_preview_mov")}):null})]})]})},h=function(e){var t=e.image,i=(0,o.bh)("preview_mov_dmz");return(0,c.jsxs)("svg",{id:"ssg_business_card_front",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 ".concat(null===i||void 0===i?void 0:i.w," ").concat(null===i||void 0===i?void 0:i.h),preserveAspectRatio:"xMidYMid meet",children:[(0,c.jsx)("style",{type:"text/css",children:'@font-face {\n\t\t\t\tfont-family: "Google Sans";\n\t\t\t\tsrc: url(http://fonts.gstatic.com/s/googlesans/v14/4UabrENHsxJlGDuGo1OIlLU94YtzCwY.woff2)\n\n\t\t\t}'}),(0,c.jsx)("rect",{width:null===i||void 0===i?void 0:i.w,height:null===i||void 0===i?void 0:i.h,fill:"#ffffff"}),(0,c.jsx)("image",{width:null===i||void 0===i?void 0:i.w,height:null===i||void 0===i?void 0:i.h,x:0,y:0,xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:t})]})}},1413:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(4942);function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}}}]);
//# sourceMappingURL=9540.b617a64b.chunk.js.map