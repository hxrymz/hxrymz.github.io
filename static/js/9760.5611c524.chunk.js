"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9760],{9760:function(e,t,l){l.r(t),l.d(t,{CloseModal:function(){return r},OpenModal:function(){return d},default:function(){return s}});var i=l(2791),n=l(5408),a=l(2350),o=l(184),s=function(){var e=(0,a.bh)("listDialog")||{},t=((0,n.Z)("listDialog_h392"),Object.keys(e));return(0,o.jsx)(o.Fragment,{children:t.map((function(t,l){var n=e[t];if(n&&n.visible){var a={};n.height&&(a.heigth=n.height),n.width,n.zIndex&&(a.zIndex=n.zIndex-1);var s={zIndex:n.zIndex},d=null,h=n.data;return n.content&&(d=i.cloneElement(n.content,{data:h})),(0,o.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,o.jsx)("div",{className:"ltr-hoe9xz",children:(0,o.jsx)("div",{className:"ltr-1wao6ny",style:s,id:t,children:d})}),n.data.overlay?(0,o.jsx)("div",{className:"DialogHRMOverlay ".concat(n.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},t)}}))})},d=function(e){var t=(0,a.bh)("listDialog")||{},l=(0,a.M5)();t[l]||(t[l]={}),t[l].visible=!0;var i={};e.props?(i=e.props).modalID=l:i.modalID=l;var n=document.getElementsByTagName("body")[0];null!==n&&void 0!==n&&n.style&&(n.style.overflowY="hidden"),t[l].isView=e.isView,t[l].observeResize=e.observeResize,t[l].observeResize&&(t[l].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(l,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===t[l].width&&i.height===t[l].height||(t[l].height=i.height+10,t[l].width=i.width,(0,a.Rz)("listDialog",t),(0,a.wt)("listDialog_h392")))}),200)),t[l].display=!0,e.zIndex&&(t[l].zIndex=e.zIndex),e.height&&(t[l].height=e.height),e.width&&(t[l].width=e.width),e.content&&(t[l].content=e.content),t[l].data=i,(0,a.Rz)("listDialog",t),(0,a.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",l),(0,a.wt)("listDialog_h392")}),125)},r=function(e){var t,l,i,n=(0,a.bh)("listDialog")||{},o=e.id;n[o]&&(n[o].observeResize&&n[o].observeInterval&&clearInterval(n[o].observeInterval),n[o].display=!1,null===(t=n[o])||void 0===t||null===(l=t.data)||void 0===l||null===(i=l.closeEvent)||void 0===i||i.call(l),(0,a.Rz)("listDialog",n),delete n[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)("listDialog_h392"),setTimeout((function(){delete n[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}}}]);
//# sourceMappingURL=9760.5611c524.chunk.js.map