"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9522,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return o},OpenModal:function(){return s},default:function(){return c}});var i=n(2791),l=n(5408),a=n(2350),r=n(184),c=function(){var e=(0,a.bh)("listDialog")||{},t=((0,l.Z)("listDialog_h392"),Object.keys(e));return(0,r.jsx)(r.Fragment,{children:t.map((function(t,n){var l=e[t];if(l&&l.visible){var a={};l.height&&(a.heigth=l.height),l.width,l.zIndex&&(a.zIndex=l.zIndex-1);var c={zIndex:l.zIndex},s=null,d=l.data;return l.content&&(s=i.cloneElement(l.content,{data:d})),(0,r.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,r.jsx)("div",{className:"ltr-hoe9xz",children:(0,r.jsx)("div",{className:"ltr-1wao6ny",style:c,id:t,children:s})}),l.data.overlay?(0,r.jsx)("div",{className:"DialogHRMOverlay ".concat(l.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},t)}}))})},s=function(e){var t=(0,a.bh)("listDialog")||{},n=(0,a.M5)();t[n]||(t[n]={}),t[n].visible=!0;var i={};e.props?(i=e.props).modalID=n:i.modalID=n;var l=document.getElementsByTagName("body")[0];null!==l&&void 0!==l&&l.style&&(l.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===t[n].width&&i.height===t[n].height||(t[n].height=i.height+10,t[n].width=i.width,(0,a.Rz)("listDialog",t),(0,a.wt)("listDialog_h392")))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=i,(0,a.Rz)("listDialog",t),(0,a.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",n),(0,a.wt)("listDialog_h392")}),125)},o=function(e){var t,n,i,l=(0,a.bh)("listDialog")||{},r=e.id;l[r]&&(l[r].observeResize&&l[r].observeInterval&&clearInterval(l[r].observeInterval),l[r].display=!1,null===(t=l[r])||void 0===t||null===(n=t.data)||void 0===n||null===(i=n.closeEvent)||void 0===i||i.call(n),(0,a.Rz)("listDialog",l),delete l[r],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)("listDialog_h392"),setTimeout((function(){delete l[r],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},9522:function(e,t,n){n.r(t);var i=n(1413),l=n(4165),a=n(5861),r=n(9439),c=n(2791),s=n(2350),o=n(2647),d=(n(4268),n(9760)),u=n(184),h=(0,o.Vg)();t.default=function(e){var t,n,o=e.data,m=(e.elmId,e.handleClick),f=(e.close,o.modalID),g=(0,c.useState)(!1),p=(0,r.Z)(g,2),b=p[0],y=p[1],j=(0,c.useState)(0),w=(0,r.Z)(j,2),x=(w[0],w[1]),k=(0,c.useState)(!1),O=(0,r.Z)(k,2),N=O[0],_=O[1];(0,c.useEffect)((function(){b||(y(!0),x((0,s.M5)()))}));var D=function(){var e=(0,a.Z)((0,l.Z)().mark((function e(t,n){var i,a,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),i={query:"getScanClientNotary",params:{limit:250,":search":(0,s.bh)("searchPckQry")},queryString:"!* contain :search"},a=(0,s.Bm)((0,s.uG)(),i),e.next=5,a;case 5:(r=e.sent)&&r.data&&((0,s.Rz)("client_list_2pck",r.data),x((0,s.M5)())),setTimeout((function(){return _(!1)}),50);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(e){m(e),(0,d.CloseModal)({id:f})};return(0,u.jsxs)("div",(0,i.Z)((0,i.Z)({className:"pickBx"},f?{"dialog-key-id":f}:""),{},{children:[(0,u.jsxs)("div",{className:"header",children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Escoje un cliente"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)(h,{label:"Buscar un cliente",width:360,obs:x,fetchData:D,change:function(e){!N&&_(!0)},keyFlds:"searchPckQry"}),(0,u.jsx)("div",{className:"bottom_loading ".concat(N?"animate":"")})]}),(0,u.jsx)("div",{children:(0,u.jsx)("div",{className:"list_pick_scroll",children:(null===(t=(0,s.bh)("searchPckQry"))||void 0===t?void 0:t.length)>0&&(0,s.bh)("client_list_2pck")&&(null===(n=(0,s._2)((0,s.bh)("client_list_2pck")))||void 0===n?void 0:n.map((function(e){return(0,u.jsx)(v,{data:(0,s.bh)("client_list_2pck")[e],elmId:e,handleClick:z},e)})))})})]}))};var v=function(e){var t=e.data,n=(e.elmId,e.handleClick),i=(0,c.useState)(!1),l=(0,r.Z)(i,2),a=l[0],o=l[1],d=(0,c.useState)(0),h=(0,r.Z)(d,2),v=(h[0],h[1]);return(0,c.useEffect)((function(){a||(o(!0),v((0,s.M5)()))})),(0,u.jsx)("div",{className:"client_item_pck",onClick:function(){return n(t)},children:(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("div",{className:"name",children:"".concat(null===t||void 0===t?void 0:t.firstName," ").concat(null===t||void 0===t?void 0:t.lastName)})})})}},4268:function(){},4942:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(9142);function l(e,t,n){return(t=(0,i.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(4942);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=9522.45f2dfa9.chunk.js.map