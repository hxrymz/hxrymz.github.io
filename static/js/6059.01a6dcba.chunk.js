"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6059,9760],{9760:function(e,s,l){l.r(s),l.d(s,{CloseModal:function(){return o},OpenModal:function(){return d},default:function(){return c}});var t=l(2791),a=l(5408),n=l(2350),i=l(184),r="listDialog_mdh392",c=function(){var e=(0,n.bh)("listDialog")||{},s=((0,a.Z)(r),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:s.map((function(s,l){var a=e[s];if(a&&a.visible){var n={};a.height&&(n.heigth=a.height),a.width,a.zIndex&&(n.zIndex=a.zIndex-1);var r={zIndex:a.zIndex},c=null,d=a.data;return a.content&&(c=t.cloneElement(a.content,{data:d})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:n,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:r,id:s,children:c})}),a.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var e;e=s,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},s)}}))})},d=function(e){var s=(0,n.bh)("listDialog")||{},l=(0,n.M5)();s[l]||(s[l]={}),s[l].visible=!0;var t={};e.props?(t=e.props).modalID=l:t.modalID=l;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),s[l].isView=e.isView,s[l].observeResize=e.observeResize,s[l].observeResize&&(s[l].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(l,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===s[l].width&&t.height===s[l].height||(s[l].height=t.height+10,s[l].width=t.width,(0,n.Rz)("listDialog",s),(0,n.wt)(r)))}),200)),s[l].display=!0,e.zIndex&&(s[l].zIndex=e.zIndex),e.height&&(s[l].height=e.height),e.width&&(s[l].width=e.width),e.content&&(s[l].content=e.content),s[l].data=t,(0,n.Rz)("listDialog",s),(0,n.wt)(r),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,n.Rz)("modalOpen",l),(0,n.wt)(r)}),125)},o=function(e){var s,l,t,a=(0,n.bh)("listDialog")||{},i=e.id;a[i]&&(a[i].observeResize&&a[i].observeInterval&&clearInterval(a[i].observeInterval),a[i].display=!1,null===(s=a[i])||void 0===s||null===(l=s.data)||void 0===l||null===(t=l.closeEvent)||void 0===t||t.call(l),(0,n.Rz)("listDialog",a),delete a[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,n.wt)(r),setTimeout((function(){delete a[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,n.Rz)("modalOpen",null)}),750))}},6059:function(e,s,l){l.r(s);var t=l(4165),a=l(1413),n=l(5861),i=l(9439),r=l(2791),c=l(2350),d=l(2647),o=(l(3903),l(9760)),u=l(2887),v=l(184),h=(0,d.YZ)(),p=((0,d.Np)(),(0,d.tL)()),m=(0,u.Ph)(),x="upd_user";s.default=function(e){var s,l,d,u,b,f,g,j,y,N=e.data,w=e.confirm,k=(0,r.useState)(!1),I=(0,i.Z)(k,2),_=I[0],O=I[1],z=(0,r.useState)(0),S=(0,i.Z)(z,2),C=(S[0],S[1]);(0,r.useEffect)((function(){_||(O(!0),C((0,c.M5)()))}));var D=function(e,s,l){var t=(0,c.bh)(x)||{};l?(t[l]||(t[l]={}),t[l][e]=s):t[e]=s,(0,c.Rz)(x,t),C((0,c.M5)())},R=["businessId","isOwner","role","isqvmAgent","telegram_chat_id","isDelivery","allowInventory","phoneNumber","state","city","active","serviceState","serviceCity","hasNotaryAccess","hasSuperUserAccess"],A=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var s,l,n,i,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,c.bh)(x),l=(0,c.vy)(R,(0,c.bh)(x),(0,c.bh)(x+"_bck")),n=(0,a.Z)({},l.data),i={query:"updateUserDetails",params:{userId:s.userId},data2update:n},r=(0,c.I7)(i),e.next=7,r;case 7:e.sent&&((0,c.Rz)(x,{}),(0,c.Rz)(x+"_bck",{}),w&&w(),(null===N||void 0===N?void 0:N.modalID)&&(0,o.CloseModal)({id:null===N||void 0===N?void 0:N.modalID}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=(0,c.vy)(R,(0,c.bh)(x),(0,c.bh)(x+"_bck")),E=function(e){C((0,c.M5)())};return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Actualizar Usuario"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("p",{className:"group_title addBtn",onClick:function(e){(0,c.Rz)("upd_user",N),(0,c.Rz)("upd_user_bck",JSON.parse(JSON.stringify(N)));var s={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};s.content=(0,v.jsx)(m,{confirm:E}),(0,o.OpenModal)(s)},children:"Add Business"})]}),(0,v.jsx)("div",{className:"_dsplFlx acc_dtls",children:(0,v.jsxs)("div",{className:"",children:[(0,v.jsx)("div",{className:"code",children:null===(s=(0,c.bh)(x))||void 0===s?void 0:s.name}),(0,v.jsx)("div",{className:"name",style:{marginTop:9},children:null===(l=(0,c.bh)(x))||void 0===l?void 0:l.email})]})}),(0,v.jsx)("div",{className:"_dsplFlx ",children:(0,v.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)(p,{data:(0,c.bh)("bussines_list"),active:null===(d=(0,c.bh)(x))||void 0===d?void 0:d.businessId,updSelect:function(e){return D("businessId",e)}}),(0,v.jsx)("div",{className:"flexSpace"})]})}),(0,v.jsx)("div",{className:"_dsplFlx ",children:(0,v.jsxs)("div",{className:"_dsplFlx ",style:{padding:"18px"},children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)(p,{data:[{label:"Owner",id:"owner"},{label:"Lectura y Escritura",id:"write_read"},{label:"Solo Lectura",id:"read_only"}],active:null===(u=(0,c.bh)(x))||void 0===u?void 0:u.role,updSelect:function(e){return D("role",e)}}),(0,v.jsx)("div",{className:"flexSpace"})]})}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("span",{className:"checklabel",children:"Qvamarket Agente"}),(0,v.jsx)(h,{initvalue:null===(b=(0,c.bh)(x))||void 0===b?void 0:b.isqvmAgent,keyCode:77,updChange:function(e){return D("isqvmAgent",e)}}),(0,v.jsx)("span",{className:"checklabel"})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("span",{className:"checklabel",children:"Qvamarket Inventario"}),(0,v.jsx)(h,{initvalue:null===(f=(0,c.bh)(x))||void 0===f?void 0:f.allowInventory,keyCode:79,updChange:function(e){return D("allowInventory",e)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("span",{className:"checklabel",children:"Agente Activo"}),(0,v.jsx)(h,{initvalue:null===(g=(0,c.bh)(x))||void 0===g?void 0:g.active,keyCode:73,updChange:function(e){return D("active",e)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("span",{className:"checklabel",children:"Acceso a Notaria"}),(0,v.jsx)(h,{initvalue:null===(j=(0,c.bh)(x))||void 0===j?void 0:j.hasNotaryAccess,keyCode:36,updChange:function(e){return D("hasNotaryAccess",e)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("span",{className:"checklabel",children:"Supervisor"}),(0,v.jsx)(h,{initvalue:null===(y=(0,c.bh)(x))||void 0===y?void 0:y.hasSuperUserAccess,keyCode:36,updChange:function(e){return D("hasSuperUserAccess",e)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),null!==F&&void 0!==F&&F.hasChange?(0,v.jsx)("div",{className:"card",children:(0,v.jsx)("button",{onClick:A,children:"Actualizar"})}):null]})]})}},3903:function(){},1413:function(e,s,l){l.d(s,{Z:function(){return n}});var t=l(4942);function a(e,s){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),l.push.apply(l,t)}return l}function n(e){for(var s=1;s<arguments.length;s++){var l=null!=arguments[s]?arguments[s]:{};s%2?a(Object(l),!0).forEach((function(s){(0,t.Z)(e,s,l[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(l,s))}))}return e}}}]);
//# sourceMappingURL=6059.01a6dcba.chunk.js.map