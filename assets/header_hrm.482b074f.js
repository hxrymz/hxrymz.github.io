import{r as t,j as e,F as v,b as y,l as c,_ as f,I as S,u as I,c as N,d as k,a as s,N as P,e as x,O as _}from"./index.20bf7686.js";class A extends t.exports.Component{constructor(){super(),this.state={scrollPosition:null},this.handleInterval=this.handleInterval.bind(this),this.handleRequestAnimationFrame=this.handleRequestAnimationFrame.bind(this)}componentWillMount(){this.intervalID=setInterval(this.handleInterval,50)}componentWillUnmount(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}getWindowScrollTop(){return window.pageYOffset||document.documentElement.scrollTop}handleInterval(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}handleRequestAnimationFrame(){const{scrollPosition:a}=this.state,o=this.getWindowScrollTop();o!==a&&(typeof this.props.scrollhandler=="function"&&this.props.scrollhandler(o),this.setState({scrollPosition:o}))}render(){return e(v,{})}}y();const R=c(()=>f(()=>import("./profileModal.07724578.js"),["assets/profileModal.07724578.js","assets/index.20bf7686.js","assets/index.95310fc6.css"])),z=c(()=>f(()=>import("./loginModal.2e880831.js"),["assets/loginModal.2e880831.js","assets/index.20bf7686.js","assets/index.95310fc6.css","assets/validations.6c3f96aa.js"]));c(()=>f(()=>import("./settingModal.e50fa0b2.js"),["assets/settingModal.e50fa0b2.js","assets/index.20bf7686.js","assets/index.95310fc6.css"]));const F=S(),L=h=>{var u,g;I(N);const[a,o]=t.exports.useState(!1);t.exports.useState(0);const[l,p]=t.exports.useState(!0),[d,m]=t.exports.useState(!0);t.exports.useRef(""),k(),t.exports.useState(!1),t.exports.useEffect(()=>{a||o(!0)});const i=n=>{m(n.pos),n.show!==null&&p(n.show)},w=n=>{let r={};r.zIndex=450,r.props={item:n,minHeight:"1vh",overlay:!0},r.content=e(R,{}),_(r)},b=n=>{let r={};r.zIndex=450,r.props={item:n,minHeight:"1vh",overlay:!0},r.content=e(z,{}),_(r)};return s(v,{children:[s("div",{className:`header-default header-default--transparent ${l?"":"header-default--fixed header-default--hidden header-default--in-transition"} ${l&&d&&d>35?"white_before":""}`,style:l?{}:{transform:" translateY(-70px)"},children:[e(D,{updScrollPosition:i}),e("div",{className:"header-default__wrapper",children:e("div",{className:"header-default__grid ",children:s("div",{className:"_dsplFlx ",children:[e("div",{className:"_dsplFlx ",children:e(P,{to:"dashboard",className:"cta cta--is-3 elevation",style:{margin:"20px 0 0 17px"},children:e("div",{className:"tab_header",children:"Dashboard"})})}),e("div",{className:"flexSpace"}),e("div",{className:"header-default__primary-item",style:{"--item-order":99,float:"right"},children:(u=x("userProfile"))!=null&&u.name?s("div",{className:"_dsplFlx",children:[e("div",{className:"flexSpace"}),e("div",{className:"profile_icon",onClick:w,children:e("div",{children:e("h5",{children:(g=x("userProfile"))==null?void 0:g.name.substring(0,1)})})})]}):s("div",{className:"_dsplFlx",children:[e("div",{className:"flexSpace"}),s("div",{className:"profile_icon",onClick:b,children:[e(F,{name:"account"}),";"]})]})})]})})})]}),")"]})},D=h=>{const{updScrollPosition:a}=h,[o,l]=t.exports.useState(0),[p,d]=t.exports.useState(!0);return e(A,{scrollhandler:i=>{a({pos:i,show:null}),i>o&&p?typeof a=="function"&&(a({pos:i,show:!1}),d(!1)):i<o&&!p&&typeof a=="function"&&(a({pos:i,show:!0}),d(i)),l(i)}})};export{L as default};
