import{l as b,_ as y,W as N,I as k,u as z,m as P,r as o,a as s,F as I,j as e,N as _,k as p,O as v}from"./index.2dd67c8e.js";const R=b(()=>y(()=>import("./profileModal.d981d285.js"),["assets/profileModal.d981d285.js","assets/index.2dd67c8e.js","assets/index.1aca3d94.css"])),G=b(()=>y(()=>import("./downloadModal.628e104b.js"),["assets/downloadModal.628e104b.js","assets/index.2dd67c8e.js","assets/index.1aca3d94.css"])),L=N(),w=k(),j=()=>{var m,g,u,x;z(P);const[c,t]=o.exports.useState(!1);o.exports.useState(0);const[n,h]=o.exports.useState(!0),[l,d]=o.exports.useState(!0);o.exports.useEffect(()=>{c||t(!0)});const f=r=>{d(r.pos),r.show!==null&&h(r.show)},a=r=>{let i={};i.zIndex=450,i.props={item:r,minHeight:"1vh",overlay:!0},i.content=e(R,{}),v(i)},S=r=>{let i={};i.zIndex=450,i.props={item:r,minHeight:"1vh",overlay:!0},i.content=e(G,{}),v(i)};return s(I,{children:[s("div",{className:`header-default header-default--transparent ${n?"":"header-default--fixed header-default--hidden header-default--in-transition"} ${n&&l&&l>35?"white_before":""}`,style:n?{}:{transform:" translateY(-70px)"},children:[e(A,{updScrollPosition:f}),e("div",{className:"header-default__wrapper",children:e("div",{className:"header-default__grid ",children:s("div",{className:"_dsplFlx ",children:[s("div",{className:"_dsplFlx ",children:[e("div",{className:"logo ",children:e("img",{src:"/favicon.png",alt:"hlgflix"})}),e(_,{to:{pathname:"/"},className:"cta cta--is-3 elevation",style:{margin:"20px 0 0 17px"},children:e("div",{className:"tab_header",children:"Inicio"})})]}),e("div",{className:"flexSpace"}),s("div",{className:"_dsplFlx elevation",children:[((m=p("userProfile"))==null?void 0:m.username)&&e(_,{to:{pathname:"search"},style:{marginRight:7},children:e("div",{className:"setting_icon ",children:e(w,{name:"search"})})}),((g=p("userProfile"))==null?void 0:g.username)&&e("div",{style:{marginLeft:7},onClick:S,children:e("div",{className:"setting_icon ",children:e(w,{name:"cellphone-arrow-down"})})}),e("div",{className:"flexSpace"}),e("div",{className:"header-default__primary-item",style:{"--item-order":99,float:"right"},children:((u=p("userProfile"))==null?void 0:u.username)&&s("div",{className:"_dsplFlx",children:[e("div",{className:"flexSpace"}),e("div",{className:"profile_icon",onClick:a,children:e("div",{children:e("h5",{children:(x=p("userProfile"))==null?void 0:x.username.substring(0,1)})})})]})})]})]})})})]}),")"]})},A=c=>{const{updScrollPosition:t}=c,[n,h]=o.exports.useState(0),[l,d]=o.exports.useState(!0);return e(L,{scrollhandler:a=>{t({pos:a,show:null}),a>n&&l?typeof t=="function"&&(t({pos:a,show:!1}),d(!1)):a<n&&!l&&typeof t=="function"&&(t({pos:a,show:!0}),d(a)),h(a)}})};export{j as default};
