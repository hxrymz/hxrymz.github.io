"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7809,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return c},OpenModal:function(){return r},default:function(){return o}});var i=n(2791),l=n(5408),a=n(2350),s=n(184),o=function(){var e=(0,a.bh)("listDialog")||{},t=((0,l.Z)("listDialog_h392"),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:t.map((function(t,n){var l=e[t];if(l&&l.visible){var a={};l.height&&(a.heigth=l.height),l.width,l.zIndex&&(a.zIndex=l.zIndex-1);var o={zIndex:l.zIndex},r=null,d=l.data;return l.content&&(r=i.cloneElement(l.content,{data:d})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:o,id:t,children:r})}),l.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(l.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},r=function(e){var t=(0,a.bh)("listDialog")||{},n=(0,a.M5)();t[n]||(t[n]={}),t[n].visible=!0;var i={};e.props?(i=e.props).modalID=n:i.modalID=n;var l=document.getElementsByTagName("body")[0];null!==l&&void 0!==l&&l.style&&(l.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===t[n].width&&i.height===t[n].height||(t[n].height=i.height+10,t[n].width=i.width,(0,a.Rz)("listDialog",t),(0,a.wt)("listDialog_h392")))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=i,(0,a.Rz)("listDialog",t),(0,a.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",n),(0,a.wt)("listDialog_h392")}),125)},c=function(e){var t,n,i,l=(0,a.bh)("listDialog")||{},s=e.id;l[s]&&(l[s].observeResize&&l[s].observeInterval&&clearInterval(l[s].observeInterval),l[s].display=!1,null===(t=l[s])||void 0===t||null===(n=t.data)||void 0===n||null===(i=n.closeEvent)||void 0===i||i.call(n),(0,a.Rz)("listDialog",l),delete l[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)("listDialog_h392"),setTimeout((function(){delete l[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},7809:function(e,t,n){n.r(t);var i=n(4165),l=n(5861),a=n(9439),s=n(2791),o=n(2350),r=n(2647),c=(n(4268),n(3796)),d=n(9760),u=n(184),h=(0,r.Vg)(),v=(0,c.VU)(),m=(0,c.XX)(),g=(0,c.cC)();t.default=function(e){e.data,e.elmId,e.updObs;var t,n,r=(0,s.useState)(!1),c=(0,a.Z)(r,2),f=c[0],p=c[1],x=(0,s.useState)(0),y=(0,a.Z)(x,2),b=(y[0],y[1]),w=(0,s.useState)(!1),z=(0,a.Z)(w,2),j=z[0],I=z[1],D=(0,s.useState)(!1),N=(0,a.Z)(D,2),_=N[0],R=N[1],k=(0,s.useState)(!1),C=(0,a.Z)(k,2),B=C[0],Z=C[1];(0,s.useEffect)((function(){f||(p(!0),b((0,o.M5)()))}));var E=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(t,n){var l,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),l={query:"getScanClientNotary",params:{limit:250,":search":(0,o.bh)("searchQry")},queryString:"!* contain :search"},a=(0,o.Bm)((0,o.uG)(),l),e.next=5,a;case 5:(s=e.sent)&&s.data&&((0,o.Rz)("client_list",s.data),b((0,o.M5)())),setTimeout((function(){return Z(!1)}),50);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){I(!1),R(!0)};return(0,u.jsxs)("div",{className:"",children:[(0,u.jsxs)("div",{className:"clients_header",children:[(0,u.jsx)("h2",{children:"Clientes"}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)(h,{label:"Buscar un cliente",width:360,obs:b,fetchData:E,loading:B,change:function(e){!B&&Z(!0)},keyFlds:"searchQry"}),(0,u.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,u.jsx)(v,{}),(0,d.OpenModal)(e)},children:"Agregar Cliente"})]})]}),j&&(0,u.jsx)(v,{close:function(){return I(!1)}}),_&&(0,u.jsx)(m,{close:function(){return R(!1)}}),!_&&!j&&(0,u.jsx)("div",{className:"clients_container",children:(null===(t=(0,o.bh)("searchQry"))||void 0===t?void 0:t.length)>0&&(0,o.bh)("client_list")&&(null===(n=(0,o._2)((0,o.bh)("client_list")))||void 0===n?void 0:n.map((function(e){return(0,u.jsx)(g,{data:(0,o.bh)("client_list")[e],elmId:e,openUpdateView:S},e)})))})]})}},4268:function(){}}]);
//# sourceMappingURL=7809.65634704.chunk.js.map