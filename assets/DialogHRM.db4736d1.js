import{b as m,e as v,a as d,F as f,R as u,j as y,g as p,u as a,h}from"./index.40abd184.js";/* empty css                  */const D=()=>{const l=m("listDialog")||{};v("listDialog_h392");let t=Object.keys(l);const e=s=>{document.getElementsByTagName("html")[0].classList.remove("has-level-two"),I({id:s})};return d(f,{children:t.map((s,n)=>{let i=l[s];if(i&&i.visible){let o={};i.height&&(o.heigth=i.height),i.width,i.zIndex&&(o.zIndex=i.zIndex-1);let c={zIndex:i.zIndex},r=null,g=i.data;return i.content&&(r=u.cloneElement(i.content,{data:g})),y("div",{className:"ltr-1kbnjow",style:o,children:[d("div",{className:"ltr-hoe9xz",children:d("div",{className:"ltr-1wao6ny",style:c,id:s,children:r||null})}),i.data.overlay?d("div",{className:`DialogHRMOverlay ${i.visible?"active":""}`,onClick:()=>e(s)}):null]},s)}})})},z=l=>{let t=m("listDialog")||{},e=p();t[e]||(t[e]={}),t[e].visible=!0;let s={};l.props&&(s=l.props),s.modalID=e;let n=document.getElementsByTagName("body")[0];n!=null&&n.style&&(n.style.overflowY="hidden"),t[e].isView=l.isView,t[e].observeResize=l.observeResize,t[e].observeResize&&(t[e].observeInterval=setInterval(()=>{let i=document.querySelector(`[dialog-key-id='${e}']`),o=i&&i.getBoundingClientRect();o&&(o.width!==t[e].width||o.height!==t[e].height)&&(t[e].height=o.height+10,t[e].width=o.width,a("listDialog",t),h("listDialog_h392"))},200)),t[e].display=!0,l.zIndex&&(t[e].zIndex=l.zIndex),l.height&&(t[e].height=l.height),l.width&&(t[e].width=l.width),l.content&&(t[e].content=l.content),t[e].data=s,a("listDialog",t),h("listDialog_h392"),setTimeout(()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),a("modalOpen",e),h("listDialog_h392")},125)},I=l=>{let t=m("listDialog")||{},e=l.id;if(t[e]){t[e].observeResize&&t[e].observeInterval&&clearInterval(t[e].observeInterval),t[e].display=!1,a("listDialog",t),delete t[e];let s=document.getElementsByTagName("body")[0];s.style.overflowY=null,h("listDialog_h392"),setTimeout(()=>{delete t[e],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),a("modalOpen",null)},750)}};export{I as CloseModal,z as OpenModal,D as default};
