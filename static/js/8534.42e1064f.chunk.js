"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8534,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return r}});var l=n(2791),i=n(5408),a=n(2350),s=n(184),o="listDialog_mdh392",r=function(){var e=(0,a.bh)("listDialog")||{},t=((0,i.Z)(o),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:t.map((function(t,n){var i=e[t];if(i&&i.visible){var a={};i.height&&(a.heigth=i.height),i.width,i.zIndex&&(a.zIndex=i.zIndex-1);var o={zIndex:i.zIndex},r=null,c=i.data;return i.content&&(r=l.cloneElement(i.content,{data:c})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:o,id:t,children:r})}),i.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},t)}}))})},c=function(e){var t=(0,a.bh)("listDialog")||{},n=(0,a.M5)();t[n]||(t[n]={}),t[n].visible=!0;var l={};e.props?(l=e.props).modalID=n:l.modalID=n;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),l=e&&e.getBoundingClientRect();l&&(l.width===t[n].width&&l.height===t[n].height||(t[n].height=l.height+10,t[n].width=l.width,(0,a.Rz)("listDialog",t),(0,a.wt)(o)))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=l,(0,a.Rz)("listDialog",t),(0,a.wt)(o),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",n),(0,a.wt)(o)}),125)},d=function(e){var t,n,l,i=(0,a.bh)("listDialog")||{},s=e.id;i[s]&&(i[s].observeResize&&i[s].observeInterval&&clearInterval(i[s].observeInterval),i[s].display=!1,null===(t=i[s])||void 0===t||null===(n=t.data)||void 0===n||null===(l=n.closeEvent)||void 0===l||l.call(n),(0,a.Rz)("listDialog",i),delete i[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(o),setTimeout((function(){delete i[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},8534:function(e,t,n){n.r(t);var l=n(4165),i=n(1413),a=n(5861),s=n(9439),o=n(2791),r=n(2350),c=n(2647),d=(n(4363),n(9760)),u=n(184),v=((0,c.YZ)(),(0,c.Np)()),h=((0,c.tL)(),"new_sub_account");t.default=function(e){var t,n,c=e.data,m=e.confirm,b=(0,o.useState)(!1),f=(0,s.Z)(b,2),p=f[0],g=f[1],x=(0,o.useState)(0),w=(0,s.Z)(x,2),j=(w[0],w[1]);(0,o.useEffect)((function(){p||(g(!0),j((0,r.M5)()))}));var y=function(e,t,n){var l=(0,r.bh)(h)||{};n?(l[n]||(l[n]={}),l[n][e]=t):l[e]=t,(0,r.Rz)(h,l),j((0,r.M5)())},N=function(){var e=(0,a.Z)((0,l.Z)().mark((function e(){var t,n,a,s,o,u;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,r.bh)(h)).sub_accountId=(0,r.M5)(),s.accountId=null===(t=(0,r.bh)("account_rel_subacc"))||void 0===t?void 0:t.accountId,(o=(0,i.Z)({},null===(n=(0,r.bh)((0,r.hQ)()))||void 0===n?void 0:n.add_sub_acc)).params={businessId:null===(a=(0,r.bh)("profileUser"))||void 0===a?void 0:a.businessId},o.form=s,u=(0,r.I7)(o),e.next=9,u;case 9:e.sent&&((0,r.Rz)(h,{}),m&&m(),(null===c||void 0===c?void 0:c.modalID)&&(0,d.CloseModal)({id:null===c||void 0===c?void 0:c.modalID}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=(0,r.bh)("account_rel_subacc");return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Agregar Sub Cuenta a"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"group_title addBtn",onClick:function(e){(0,r.Rz)(h,{}),j((0,r.M5)())},children:"limpiar"})]}),(0,u.jsx)("div",{className:"_dsplFlx acc_dtls",children:(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",children:null===I||void 0===I?void 0:I.code}),(0,u.jsx)("div",{className:"name",children:null===I||void 0===I?void 0:I.name})]})}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(v,{init:null===(t=(0,r.bh)(h))||void 0===t?void 0:t.subAccount,label:"Sub Cuenta",width:120,type:"number",updChanges:function(e){return y("subAccount",e)}}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)(v,{init:null===(n=(0,r.bh)(h))||void 0===n?void 0:n.subAccountName,label:"Nombre Sub Cuenta",width:520,updChanges:function(e){return y("subAccountName",e)}}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:N,children:"Guardar"})})]})]})}},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=8534.42e1064f.chunk.js.map