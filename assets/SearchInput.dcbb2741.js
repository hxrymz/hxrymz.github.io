import{I as p,r as t,j as h,a as e}from"./index.81185f1e.js";const m=p(),g=t.exports.forwardRef((a,l)=>{const{placeholderCode:r}=a,[i,u]=t.exports.useState(!1),[d,n]=t.exports.useState(""),o=t.exports.useRef("");t.exports.useEffect(()=>{i||u(!0)});const f=s=>{n(s.target.value),typeof a.updChanges=="function"&&a.updChanges(s.target.value)},c=s=>{n(""),document.getElementById("SREsRA").value="",o.current.value="",typeof a.updChanges=="function"&&a.updChanges("")};return t.exports.useImperativeHandle(l,()=>({clearTx(){c()}})),h("div",{className:"z86TMb ",children:[e("button",{className:"FrV7Ge",type:"button","aria-label":"Buscar con Google",children:e("div",{className:"kzJn9c",children:e("span",{className:"Vx3Zn",children:e(m,{name:"search"})})})}),e("input",{ref:o,className:"r7gAOb yyJm8b","max-length":"2048",id:"SREsRA",name:"q",type:"text","aria-haspopup":"false","auto-capitalize":"off","auto-complete":"off","auto-correct":"off","spell-check":"false",placeholder:r,onChange:f}),e("button",{className:"hxXCL",type:"button",style:{visibility:d.length>0?"":"hidden"},children:e("span",{"aria-label":"Borrar b\xFAsqueda",onClick:c,children:"\xD7"})})]})});export{g as default};
