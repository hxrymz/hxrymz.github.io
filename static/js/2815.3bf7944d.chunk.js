"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2815,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return s}});var i=n(2791),o=n(5408),l=n(2350),a=n(184),r="listDialog_mdh392",s=function(){var e=(0,l.bh)("listDialog")||{},t=((0,o.Z)(r),Object.keys(e));return(0,a.jsx)(a.Fragment,{children:t.map((function(t,n){var o=e[t];if(o&&o.visible){var l={};o.height&&(l.heigth=o.height),o.width,o.zIndex&&(l.zIndex=o.zIndex-1);var r={zIndex:o.zIndex},s=null,c=o.data;return o.content&&(s=i.cloneElement(o.content,{data:c})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:l,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:r,id:t,children:s})}),o.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},t)}}))})},c=function(e){var t=(0,l.bh)("listDialog")||{},n=(0,l.M5)();t[n]||(t[n]={}),t[n].visible=!0;var i={};e.props?(i=e.props).modalID=n:i.modalID=n;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===t[n].width&&i.height===t[n].height||(t[n].height=i.height+10,t[n].width=i.width,(0,l.Rz)("listDialog",t),(0,l.wt)(r)))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=i,(0,l.Rz)("listDialog",t),(0,l.wt)(r),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,l.Rz)("modalOpen",n),(0,l.wt)(r)}),125)},d=function(e){var t,n,i,o=(0,l.bh)("listDialog")||{},a=e.id;o[a]&&(o[a].observeResize&&o[a].observeInterval&&clearInterval(o[a].observeInterval),o[a].display=!1,null===(t=o[a])||void 0===t||null===(n=t.data)||void 0===n||null===(i=n.closeEvent)||void 0===i||i.call(n),(0,l.Rz)("listDialog",o),delete o[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,l.wt)(r),setTimeout((function(){delete o[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,l.Rz)("modalOpen",null)}),750))}},2815:function(e,t,n){n.r(t);var i=n(4165),o=n(5861),l=n(1413),a=n(9439),r=n(6459),s=n(2791),c=(n(5868),n(2647)),d=n(7689),v=n(1087),u=n(2350),m=n(5143),h=n(5882),f=n(9760),p=n(184),g=(0,c.PU)(),b=(0,h.i7)(),w=(0,c.pz)(),y=(0,h.oW)();t.default=function(e){var t,n;(0,r.Z)(e);var c=(0,s.useState)(1),h=(0,a.Z)(c,2)[1],j=(0,d.TH)(),z=(0,d.s0)(),I=null===(t=j.search)||void 0===t||null===(n=t.split("?"))||void 0===n?void 0:n[1],O=(0,u.mB)(I),_=null===O||void 0===O?void 0:O.cId,N=1*(null===O||void 0===O?void 0:O.view);null===O||void 0===O||O.view;(0,s.useEffect)((function(){(0,u.Rz)("preview_mov_dmz",null),(0,u.Rz)("image_preview_mov",null),(0,u.Rz)("image_url_mov",null),(0,u.Rz)("image_mov_text",null),(0,m.uB)(_,k)}),[_]);var R=function(){h((0,u.M5)())},k=function(){var e,t,n=(0,u.bh)((0,u.Ks)());(null===(e=(0,u.bh)("categories_ids"))||void 0===e||null===(t=e[null===n||void 0===n?void 0:n.categoryId])||void 0===t?void 0:t.name)?R():(0,m.bM)(R)},D=(0,u.bh)((0,u.Ks)()),T=function(){z({pathname:"/movements",search:"?tab=movements"})},E=function(e){var t,n,i=(0,l.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.delete__incms_expns);i.params={businessId:null===(n=(0,u.bh)("profileUser"))||void 0===n?void 0:n.businessId,movementId:null===D||void 0===D?void 0:D.movementId},C(i)},C=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,u.I7)(t),e.next=3,n;case 3:(o=e.sent)&&!o.error&&z({pathname:"/movements",search:"?tab=movements"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"customer_bx ",children:[(0,p.jsxs)("div",{className:"ebEwoI",children:[(0,p.jsx)("div",{className:"jKZvHt ",onClick:function(e){window.scrollTo(0,0)},children:(0,p.jsxs)(v.OL,{className:"bXnHIV ",to:{pathname:"/movements",search:"?tab=movements"},children:[(0,p.jsx)(g,{name:"arrowBack",size:22,color:"var(--light-200)"}),(0,p.jsx)("div",{className:"eULkqP"})]})}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("div",{className:"icon_action",onClick:function(){(0,u.Rz)((0,u.Ks)()+"_upd",D),(0,u.Rz)((0,u.Ks)()+"_upd_bck",JSON.parse(JSON.stringify(D)));var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,p.jsx)(y,{confirm:T}),(0,f.OpenModal)(e)},children:(0,p.jsx)(g,{name:"outline_edit",color:"var(--light-200)"})}),(0,p.jsx)("div",{className:"icon_action",onClick:function(){var e=(0,u.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,u.Rz)("lastTimeCallModal",Date.now()+320);var t={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};t.content=(0,p.jsx)(w,{confirm:E,lbl_p:"Delete",lbl_span:"Una vez eliminado no podra ser recuperado",colors:{"--alert-title-color":"var(--primary-blue--backg-30)","--alert-desc-color":"var(--light-300)"}}),(0,f.OpenModal)(t)}},children:(0,p.jsx)(g,{name:"outline_delete",color:"var(--light-200)"})})]}),(0,p.jsx)("div",{style:{paddingTop:4}}),(0,p.jsx)(x,{viewId:1,activeView:N,children:(0,p.jsx)(b,{updObPrnt:R})})]})};var x=function(e){var t=e.viewId,n=e.activeView,i=e.children;return(0,p.jsx)("div",{className:"opacityView",style:{opacity:t===n?1:0,marginTop:29},children:t===n?i:null})}},5868:function(){},6459:function(e,t,n){function i(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return i}})},1413:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=2815.3bf7944d.chunk.js.map