"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1243,9760],{9760:function(e,l,t){t.r(l),t.d(l,{CloseModal:function(){return s},OpenModal:function(){return c},default:function(){return d}});var a=t(2791),n=t(5408),i=t(2350),r=t(184),o="listDialog_mdh392",d=function(){var e=(0,i.bh)("listDialog")||{},l=((0,n.Z)(o),Object.keys(e));return(0,r.jsx)(r.Fragment,{children:l.map((function(l,t){var n=e[l];if(n&&n.visible){var i={};n.height&&(i.heigth=n.height),n.width,n.zIndex&&(i.zIndex=n.zIndex-1);var o={zIndex:n.zIndex},d=null,c=n.data;return n.content&&(d=a.cloneElement(n.content,{data:c})),(0,r.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,r.jsx)("div",{className:"ltr-hoe9xz",children:(0,r.jsx)("div",{className:"ltr-1wao6ny",style:o,id:l,children:d})}),n.data.overlay?(0,r.jsx)("div",{className:"DialogHRMOverlay ".concat(n.visible?"active":""),onClick:function(){var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:e})}}):null]},l)}}))})},c=function(e){var l=(0,i.bh)("listDialog")||{},t=(0,i.M5)();l[t]||(l[t]={}),l[t].visible=!0;var a={};e.props?(a=e.props).modalID=t:a.modalID=t;var n=document.getElementsByTagName("body")[0];null!==n&&void 0!==n&&n.style&&(n.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[t].width&&a.height===l[t].height||(l[t].height=a.height+10,l[t].width=a.width,(0,i.Rz)("listDialog",l),(0,i.wt)(o)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=a,(0,i.Rz)("listDialog",l),(0,i.wt)(o),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(o)}),125)},s=function(e){var l,t,a,n=(0,i.bh)("listDialog")||{},r=e.id;n[r]&&(n[r].observeResize&&n[r].observeInterval&&clearInterval(n[r].observeInterval),n[r].display=!1,null===(l=n[r])||void 0===l||null===(t=l.data)||void 0===t||null===(a=t.closeEvent)||void 0===a||a.call(t),(0,i.Rz)("listDialog",n),delete n[r],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(o),setTimeout((function(){delete n[r],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},1243:function(e,l,t){t.r(l);var a=t(4942),n=t(9760),i=t(2647),r=t(2350),o=t(184),d=(0,i.LA)();l.default=function(e){var l=e.init,t=e.label,i=e.updDate,c=function(e){i(e.initDate+800)};return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"label",children:t||"Fecha"}),(0,o.jsx)("div",{className:"date2Upd",onClick:function(){var e={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,o.jsx)(d,{onConfirm:c,init:l,colors:(0,a.Z)({"--calendar-primary-color":"var(--hrm_palette-blue-purple)","--calendar-primary-backcolor":"var(--primary-light)","--calendar-light-backcolor":"var(--hrm_palette-general-background-b)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--disabled)","--calendar-light-200":"var(--dark-800)","--calendar-light-100":"var(--dark-900)","--calendar-dark-800":"var(--hrm_palette-blue-purple_100)","--calendar-white-100":"var(--light-100)","--calendar-white":"var(--dark-700)","--calendar-selected_lbl_color":"var(--light-400)"},"--calendar-selected_lbl_color","var(--primary-blue--color-30)")}),(0,n.OpenModal)(e)},children:l?(0,r.sG)(l):(0,r.sG)((new Date).getTime())})]})}}}]);
//# sourceMappingURL=1243.24ff2b72.chunk.js.map