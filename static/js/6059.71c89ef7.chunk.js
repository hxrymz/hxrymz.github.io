"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6059,9760],{9760:function(e,s,l){l.r(s),l.d(s,{CloseModal:function(){return o},OpenModal:function(){return d},default:function(){return c}});var t=l(2791),a=l(5408),n=l(2350),i=l(184),r="listDialog_mdh392",c=function(){var e=(0,n.bh)("listDialog")||{},s=((0,a.Z)(r),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:s.map((function(s,l){var a=e[s];if(a&&a.visible){var n={};a.height&&(n.heigth=a.height),a.width,a.zIndex&&(n.zIndex=a.zIndex-1);var r={zIndex:a.zIndex},c=null,d=a.data;return a.content&&(c=t.cloneElement(a.content,{data:d})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:n,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:r,id:s,children:c})}),a.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var e;e=s,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},s)}}))})},d=function(e){var s=(0,n.bh)("listDialog")||{},l=(0,n.M5)();s[l]||(s[l]={}),s[l].visible=!0;var t={};e.props?(t=e.props).modalID=l:t.modalID=l;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),s[l].isView=e.isView,s[l].observeResize=e.observeResize,s[l].observeResize&&(s[l].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(l,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===s[l].width&&t.height===s[l].height||(s[l].height=t.height+10,s[l].width=t.width,(0,n.Rz)("listDialog",s),(0,n.wt)(r)))}),200)),s[l].display=!0,e.zIndex&&(s[l].zIndex=e.zIndex),e.height&&(s[l].height=e.height),e.width&&(s[l].width=e.width),e.content&&(s[l].content=e.content),s[l].data=t,(0,n.Rz)("listDialog",s),(0,n.wt)(r),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,n.Rz)("modalOpen",l),(0,n.wt)(r)}),125)},o=function(e){var s,l,t,a=(0,n.bh)("listDialog")||{},i=e.id;a[i]&&(a[i].observeResize&&a[i].observeInterval&&clearInterval(a[i].observeInterval),a[i].display=!1,null===(s=a[i])||void 0===s||null===(l=s.data)||void 0===l||null===(t=l.closeEvent)||void 0===t||t.call(l),(0,n.Rz)("listDialog",a),delete a[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,n.wt)(r),setTimeout((function(){delete a[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,n.Rz)("modalOpen",null)}),750))}},6059:function(e,s,l){l.r(s);var t=l(4165),a=l(1413),n=l(5861),i=l(9439),r=l(2791),c=l(2350),d=l(2647),o=(l(3903),l(9760)),u=l(184),v=(0,d.YZ)(),h=((0,d.Np)(),(0,d.tL)()),m="upd_user";s.default=function(e){var s,l,d,p,x,b,f,g,j,y=e.data,N=e.confirm,w=(0,r.useState)(!1),k=(0,i.Z)(w,2),I=k[0],O=k[1],_=(0,r.useState)(0),z=(0,i.Z)(_,2),C=(z[0],z[1]);(0,r.useEffect)((function(){I||(O(!0),C((0,c.M5)()))}));var S=function(e,s,l){var t=(0,c.bh)(m)||{};l?(t[l]||(t[l]={}),t[l][e]=s):t[e]=s,(0,c.Rz)(m,t),C((0,c.M5)())},D=["businessId","isOwner","role","isqvmAgent","telegram_chat_id","isDelivery","allowInventory","phoneNumber","state","city","active","serviceState","serviceCity","hasNotaryAccess","hasSuperUserAccess"],R=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var s,l,n,i,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,c.bh)(m),l=(0,c.vy)(D,(0,c.bh)(m),(0,c.bh)(m+"_bck")),n=(0,a.Z)({},l.data),i={query:"updateUserDetails",params:{userId:s.userId},data2update:n},r=(0,c.I7)(i),e.next=7,r;case 7:e.sent&&((0,c.Rz)(m,{}),(0,c.Rz)(m+"_bck",{}),N&&N(),(null===y||void 0===y?void 0:y.modalID)&&(0,o.CloseModal)({id:null===y||void 0===y?void 0:y.modalID}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=(0,c.vy)(D,(0,c.bh)(m),(0,c.bh)(m+"_bck"));return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Actualizar Usuario"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"group_title addBtn",onClick:function(e){(0,c.Rz)(m,{}),C((0,c.M5)())},children:"limpiar"})]}),(0,u.jsx)("div",{className:"_dsplFlx acc_dtls",children:(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("div",{className:"code",children:null===(s=(0,c.bh)(m))||void 0===s?void 0:s.name}),(0,u.jsx)("div",{className:"name",style:{marginTop:9},children:null===(l=(0,c.bh)(m))||void 0===l?void 0:l.email})]})}),(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(h,{data:(0,c.bh)("bussines_list"),active:null===(d=(0,c.bh)(m))||void 0===d?void 0:d.businessId,updSelect:function(e){return S("businessId",e)}}),(0,u.jsx)("div",{className:"flexSpace"})]})}),(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(h,{data:[{label:"Owner",id:"owner"},{label:"Lectura y Escritura",id:"write_read"},{label:"Solo Lectura",id:"read_only"}],active:null===(p=(0,c.bh)(m))||void 0===p?void 0:p.role,updSelect:function(e){return S("role",e)}}),(0,u.jsx)("div",{className:"flexSpace"})]})}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("span",{className:"checklabel",children:"Qvamarket Agente"}),(0,u.jsx)(v,{initvalue:null===(x=(0,c.bh)(m))||void 0===x?void 0:x.isqvmAgent,keyCode:77,updChange:function(e){return S("isqvmAgent",e)}}),(0,u.jsx)("span",{className:"checklabel"})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("span",{className:"checklabel",children:"Qvamarket Inventario"}),(0,u.jsx)(v,{initvalue:null===(b=(0,c.bh)(m))||void 0===b?void 0:b.allowInventory,keyCode:79,updChange:function(e){return S("allowInventory",e)}})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("span",{className:"checklabel",children:"Agente Activo"}),(0,u.jsx)(v,{initvalue:null===(f=(0,c.bh)(m))||void 0===f?void 0:f.active,keyCode:73,updChange:function(e){return S("active",e)}})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("span",{className:"checklabel",children:"Acceso a Notaria"}),(0,u.jsx)(v,{initvalue:null===(g=(0,c.bh)(m))||void 0===g?void 0:g.hasNotaryAccess,keyCode:36,updChange:function(e){return S("hasNotaryAccess",e)}})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("span",{className:"checklabel",children:"Supervisor"}),(0,u.jsx)(v,{initvalue:null===(j=(0,c.bh)(m))||void 0===j?void 0:j.hasSuperUserAccess,keyCode:36,updChange:function(e){return S("hasSuperUserAccess",e)}})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),null!==A&&void 0!==A&&A.hasChange?(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:R,children:"Actualizar"})}):null]})]})}},3903:function(){},4942:function(e,s,l){l.d(s,{Z:function(){return a}});var t=l(9142);function a(e,s,l){return(s=(0,t.Z)(s))in e?Object.defineProperty(e,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[s]=l,e}},1413:function(e,s,l){l.d(s,{Z:function(){return n}});var t=l(4942);function a(e,s){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),l.push.apply(l,t)}return l}function n(e){for(var s=1;s<arguments.length;s++){var l=null!=arguments[s]?arguments[s]:{};s%2?a(Object(l),!0).forEach((function(s){(0,t.Z)(e,s,l[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(l,s))}))}return e}}}]);
//# sourceMappingURL=6059.71c89ef7.chunk.js.map