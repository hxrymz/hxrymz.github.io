"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1243,9760],{9760:(e,l,t)=>{t.r(l),t.d(l,{CloseModal:()=>c,OpenModal:()=>o,default:()=>s});var a=t(2791),i=t(5408),r=t(2350),n=t(184);const d="listDialog_mdh392",s=()=>{const e=(0,r.bh)("listDialog")||{};(0,i.Z)(d);let l=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:l.map(((l,t)=>{let i=e[l];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let t={zIndex:i.zIndex},r=null,d=i.data;return i.content&&(r=a.cloneElement(i.content,{data:d})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:r})}),i.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},l)}}))})},o=e=>{let l=(0,r.bh)("listDialog")||{},t=(0,r.M5)();l[t]||(l[t]={}),l[t].visible=!0;let a={};e.props?(a=e.props,a.modalID=t):a.modalID=t;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),l[t].isView=e.isView,l[t].observeResize=e.observeResize,l[t].observeResize&&(l[t].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(t,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[t].width&&a.height===l[t].height||(l[t].height=a.height+10,l[t].width=a.width,(0,r.Rz)("listDialog",l),(0,r.wt)(d)))}),200)),l[t].display=!0,e.zIndex&&(l[t].zIndex=e.zIndex),e.height&&(l[t].height=e.height),e.width&&(l[t].width=e.width),e.content&&(l[t].content=e.content),l[t].data=a,(0,r.Rz)("listDialog",l),(0,r.wt)(d),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,r.Rz)("modalOpen",t),(0,r.wt)(d)}),125)},c=e=>{let l=(0,r.bh)("listDialog")||{},t=e.id;if(l[t]){var a,i,n;l[t].observeResize&&l[t].observeInterval&&clearInterval(l[t].observeInterval),l[t].display=!1,null===(a=l[t])||void 0===a||null===(i=a.data)||void 0===i||null===(n=i.closeEvent)||void 0===n||n.call(i),(0,r.Rz)("listDialog",l),delete l[t],document.getElementsByTagName("body")[0].style.overflowY=null,(0,r.wt)(d),setTimeout((()=>{delete l[t],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,r.Rz)("modalOpen",null)}),750)}}},1243:(e,l,t)=>{t.r(l),t.d(l,{default:()=>s});var a=t(9760),i=t(2647),r=t(2350),n=t(184);const d=(0,i.LA)(),s=e=>{let{init:l,label:t,updDate:i}=e;const s=e=>{i(e.initDate+800)};return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"label",children:t||"Fecha"}),(0,n.jsx)("div",{className:"date2Upd",onClick:()=>{let e={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,n.jsx)(d,{onConfirm:s,init:l,colors:{"--calendar-primary-color":"var(--hrm_palette-blue-purple)","--calendar-primary-backcolor":"var(--primary-light)","--calendar-light-backcolor":"var(--hrm_palette-general-background-b)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--disabled)","--calendar-light-200":"var(--dark-800)","--calendar-light-100":"var(--dark-900)","--calendar-dark-800":"var(--hrm_palette-blue-purple_100)","--calendar-white-100":"var(--light-100)","--calendar-white":"var(--dark-700)","--calendar-selected_lbl_color":"var(--light-400)","--calendar-selected_lbl_color":"var(--primary-blue--color-30)"}}),(0,a.OpenModal)(e)},children:l?(0,r.sG)(l):(0,r.sG)((new Date).getTime())})]})}}}]);
//# sourceMappingURL=1243.92573cb0.chunk.js.map