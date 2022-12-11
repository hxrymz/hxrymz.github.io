import{r as n,j as l,F as s,a as e}from"./index.5e7d3da0.js";const d=t=>{const[o,a]=n.exports.useState(!1),[i,r]=n.exports.useState(!1),c=b(t.keyCode);n.exports.useEffect(()=>{i||(a(t.initvalue),r(!0)),t.initvalue!==o&&a(t.initvalue)});const g=()=>{t.disabled||(typeof t.updChange=="function"&&t.updChange(!o),a(!o))};return l(s,{children:[l("div",{className:`toggle-container ptoggle-button_${t.keyCode} ${o?"_active":""}`,onClick:()=>g(),children:[e("div",{className:`toggle-bar ptoggle-button_${t.keyCode}`}),l("div",{className:`toggle-button ptoggle-button_${t.keyCode}`,children:[e("div",{className:"pripple",style:{opacity:.00448}}),e("div",{className:"pripple"})]}),e("div",{className:`toggle-label ptoggle-button_${t.keyCode}`})]}),e("style",{children:c})]})},b=t=>`

.toggle-container.ptoggle-button_${t} {
  display: inline-block;
  position: relative;
  width: 36px;
  height: 14px;
  margin: 4px 1px;
  cursor: pointer;
  --checkBox--button--color:rgb(24, 128, 56);
  --checkBox--button--Active--color: rgb(24, 128, 56);
}

.toggle-label.ptoggle-button_${t} {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  pointer-events: none;
  color: navy;
}


.toggle-bar.ptoggle-button_${t} {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  pointer-events: none;
  opacity: 0.4;
  transition: background-color linear .08s;
  background-color: #d3d3d3;
  
}

.toggle-button.ptoggle-button_${t} {
  -webkit-transform: translate(0px, 0);
  transform: translate(0px, 0);
  background-color: var(--checkBox--button--color,#1a73e8);
}

.toggle-button.ptoggle-button_${t} {
  position: absolute;
  top: -3px;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
  transition: -webkit-transform linear .08s, background-color linear .08s;
  transition: transform linear .08s, background-color linear .08s;
  will-change: transform;
  background-color: #fafafa;
}

.toggle-container._active .toggle-button.ptoggle-button_${t} {
  -webkit-transform: translate(16px, 0);
  transform: translate(16px, 0);
  background-color:var(--checkBox--button--Active--color,#1a73e8);
}


.toggle-container._active .toggle-bar.ptoggle-button_${t} {
  opacity: 0.5;
  background-color: var(--checkBox--button--Active--color,#1a73e8);
}



/*
--checkBox--button--color
--checkBox--button--Active--color
*/
`;export{d as default};
