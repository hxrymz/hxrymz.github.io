import{r as e,j as d,a as f}from"./index.8616bca9.js";/* empty css                  */const E=e.exports.forwardRef(({placeholderCode:u,label:l,updChanges:s,init:t,width:c,type:p},n)=>{const[i,x]=e.exports.useState(!1),[m,r]=e.exports.useState(""),o=e.exports.useRef("");e.exports.useEffect(()=>{i||x(!0)}),e.exports.useEffect(()=>{t&&t!==m&&(r(t),o.current.value=t)},[t]);const v=a=>{r(a.target.value),typeof s=="function"&&s(a.target.value)},y=a=>{r(""),document.getElementById("SREsRA").value="",o.current.value="",typeof s=="function"&&s("")};return e.exports.useImperativeHandle(n,()=>({clearTx(){y()},init(a){r(a)}})),d("div",{children:[l?f("p",{className:"label",children:l}):null,f("input",{style:c?{width:c}:null,ref:o,className:"r7gAOb yyJm8b",type:p||"text","aria-haspopup":"false","auto-capitalize":"off","auto-complete":"off","auto-correct":"off","spell-check":"false",placeholder:u,onChange:v})]})});export{E as default};