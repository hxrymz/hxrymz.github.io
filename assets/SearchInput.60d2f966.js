import{r as t,u,j as m,a}from"./index.40abd184.js";import{U as x}from"./useDelayInput.6f72cb11.js";/* empty css                  */const j=({fetchData:f,width:s,loading:l,change:r,keyFlds:o,callempty:n,placeholder:c})=>{const[i,h]=t.exports.useState(""),d=t.exports.useRef();let e=x(i);return t.exports.useEffect(()=>(e?(u(o,e),f()):(u(o,""),n&&n()),()=>{}),[e]),m("div",{children:[a("input",{style:s?{width:s}:null,ref:d,className:"r7gAOb ",type:"text","aria-haspopup":"false","auto-capitalize":"off","auto-complete":"off","auto-correct":"off","spell-check":"false",placeholder:c||"buscar",onChange:p=>{h(p.target.value),typeof r=="function"&&r(p.target.value)}}),l?a("div",{className:"load_animation"}):a("div",{style:{height:2}})]})};export{j as default};
