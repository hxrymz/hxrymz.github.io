import{u as m,s as h,j as l,F as v,R as u,a as x,c as y,C as f}from"./index.2dd67c8e.js";const p=()=>{const a=y().listDialog||{};m(h);let i=Object.keys(a);const o=t=>{document.getElementsByTagName("html")[0].classList.remove("has-level-two"),f({id:t})};return l(v,{children:i.map((t,c)=>{let e=a[t];if(e&&e.visible){let n={};e.height,e.width,e.zIndex&&(n.zIndex=e.zIndex-1);let r={zIndex:e.zIndex},s=null,d=e.data;return e.content&&(s=u.cloneElement(e.content,{data:d})),x("div",{className:"ltr-1kbnjow",style:n,children:[l("div",{className:"ltr-hoe9xz",children:l("div",{className:"ltr-1wao6ny",style:r,id:t,children:s||null})}),e.data.overlay?l("div",{className:`DialogHRMOverlay ${e.visible?"active":""}`,onClick:()=>o(t)}):null]},t)}})})};export{p as default};
