import{u as k,f as m,r as o,L as g,e as y,a as b,F as h,j as a}from"./index.5d7f8be5.js";const w=(e,t,n)=>{setTimeout(()=>{t(!1)},280)},$=(e,t,n)=>{t(!0),n(!0),setTimeout(()=>{n(!1)},1200)},v=(e,t)=>{setTimeout(()=>{t(!0)},20)},W=(e,t)=>{setTimeout(()=>{t(!1)},200)},P=e=>{const{theme:t,title:n,index:d}=e;k(m);const[f,p]=o.exports.useState(!1),[l,s]=o.exports.useState(!1),[c,_]=o.exports.useState(!1);o.exports.useState(g());const i=y().maskClassName;let u=x(i,i[t]);return b(h,{children:[a("style",{children:u}),b("button",{style:{"--mdc-ripple-fg-size":"91px","--mdc-ripple-fg-scale":1.82476,"--mdc-ripple-fg-translate-start":"69px, -25.5px","--mdc-ripple-fg-translate-end":"30.4219px, -27.5px","--mdc-ripple-fg-animations":"mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards","--mdc-theme-init-opacity":t==="blue_white"?.6:t==="fire_brick"||t==="light_blue"||t==="light_green"?0:.02,"--mdc-theme-hover-opacity":t==="blue_white"?.8:.04,"--mdc-theme-primary":t==="blue_white"?"#1a73e8":t==="fire_brick"||t==="light_blue"||t==="light_green"?"transparent":"rgba(0,0,0,0.812)","--mdc-theme-primary-hover":t==="blue_white"?"#1a73e8":t==="fire_brick"?"firebrick":t==="light_blue"?"#1a73e8":t==="light_green"?"#00796b":"rgba(0,0,0,0.812)","--mdc-theme-primary-color":t==="blue_white"?"#fff":t==="fire_brick"?"firebrick":t==="light_blue"?"#1a73e8":t==="light_green"?"#00796b":"rgba(0,0,0,0.41)","--mdc-theme-primary-color-hover":t==="blue_white"?"#fff":t==="fire_brick"?"firebrick":t==="light_blue"||t==="light_green"?"#174ea6":"rgba(0,0,0,0.973)"},onMouseDown:r=>$(r,p,_),onMouseUp:r=>w(r,p),onMouseEnter:r=>v(r,s),onMouseLeave:r=>W(r,s),className:` ${i.btn_base}  ${i[t]} ${l?"Rj2Mlf":""} ${f?c?`lJfZMc ${i.focus_active}`:`OmS1vf ${i.focus_active}`:""} `,tabIndex:d,children:[a("div",{className:"_p91CuWOY1kwy_"}),a("span",{className:"_txt_",children:n})]})]})},x=(e,t)=>`

  
         
  .${e.btn_base} {
    height: 36px;
    cursor: pointer;
  }




  .${e.btn_base} {
    -webkit-font-smoothing: antialiased;
    font-family: Roboto,sans-serif;
    font-size: 14px;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: .0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 8px 0 8px;
    position: relative;
    display: -webkit-inline-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    border: none;
    outline: none;
    line-height: inherit;
    -webkit-user-select: none;
    -webkit-appearance: none;
    overflow: visible;
    vertical-align: middle;
    border-radius: 4px;
    background-color: transparent;
}





.${e.btn_base}
._txt_ {
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .0107142857em;
  text-transform: none;        
}











.${e.btn_base}:not(:disabled) ._txt_{
  color: #1a73e8;       
  color: var(--mdc-theme-primary-color,#1a73e8);     
}

.${e.btn_base}:hover:not(:disabled) ._txt_,
.${e.btn_base}:active:not(:disabled) ._txt_{            
    color: #174ea6;
    color: var(--mdc-theme-primary-color,#174ea6);
}



.${e.btn_base} ._txt_{  
  z-index: 2;          
}


.${e.btn_base}:not(:disabled) ._txt_{
  font-weight: 500;  
}

.${e.btn_base}:hover:not(:disabled) ._txt_,
.${e.btn_base}:active:not(:disabled) ._txt_{ 
    font-weight:500;              
}







.${e.btn_base} ._p91CuWOY1kwy_  {
  position: absolute;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}


.${e.btn_base} ._p91CuWOY1kwy_::before,
.${e.btn_base} ._p91CuWOY1kwy_::after {
  top: calc(50% - 100%);
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
  transition: opacity 15ms linear,background-color 15ms linear;
  z-index: 1;
}



.${e.btn_base} ._p91CuWOY1kwy_::before,
.${e.btn_base} ._p91CuWOY1kwy_::after {
  background-color: transparent;
  background-color: var(--mdc-theme-primary,transparent);
}



.${e.btn_base} ._p91CuWOY1kwy_::before,
.${e.btn_base} ._p91CuWOY1kwy_::after {
  position: absolute;
  border-radius: 50%;
  opacity: 0; 
  opacity: var(--mdc-theme-init-opacity,0);  
  pointer-events: none;
  content: "";
}



.${e.btn_base} ._p91CuWOY1kwy_::before, 
.${e.btn_base} ._p91CuWOY1kwy_::after { 
  transition: opacity 150ms linear;
  top: calc(50% - 100%);
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
}

.${e.btn_base} ._p91CuWOY1kwy_::before {
  transition: opacity 15ms linear,background-color 15ms linear;
  z-index: 1;
}





.${e.btn_base}.VfPpkd-ksKsZd-mWPk3d ._p91CuWOY1kwy_::before{
  transform:scale(var(--mdc-ripple-fg-scale,1))
}

.${e.btn_base}.VfPpkd-ksKsZd-mWPk3d ._p91CuWOY1kwy_::after{
  top:0;left:0;transform:scale(0);transform-origin:center center
}





.${e.btn_base}.VfPpkd-ksKsZd-mWPk3d ._p91CuWOY1kwy_::after{    
  width:var(--mdc-ripple-fg-size,100%);
  height:var(--mdc-ripple-fg-size,100%)
}



.${e.btn_base}.${e.focus_active} ._p91CuWOY1kwy_::before{
  transition-duration:75ms;
  opacity:.12
}

.${e.btn_base}:not(.VfPpkd-ksKsZd-mWPk3d) ._p91CuWOY1kwy_::after{
  transition:opacity 150ms linear
}

.${e.btn_base}.VfPpkd-ksKsZd-mWPk3d{
  --mdc-ripple-fg-opacity:.12;
}


.${e.btn_base} ._p91CuWOY1kwy_{
  position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden
}

.${e.btn_base}:not(.${e.btn_base}-OWXEXe-INsAgc) ._p91CuWOY1kwy_{
  top:0;left:0
}




.${e.btn_base}.Rj2Mlf ._p91CuWOY1kwy_::before,
.${e.btn_base}.Rj2Mlf ._p91CuWOY1kwy_::after{
  opacity: .04;
  opacity: var(--mdc-theme-hover-opacity,0.04);
}


.${e.btn_base}.Rj2Mlf ._p91CuWOY1kwy_::before,
.${e.btn_base}.Rj2Mlf ._p91CuWOY1kwy_::after {
  background-color: transparent;
  background-color: var(--mdc-theme-primary-hover,transparent);
}

  
.${e.btn_base}.${e.focus_active} ._p91CuWOY1kwy_::before
  {
    transition-duration:175ms;
    opacity:.24
  }


/*

.${e.btn_base}:not(.VfPpkd-ksKsZd-mWPk3d):focus ._p91CuWOY1kwy_::before,
.${e.btn_base}:not(.VfPpkd-ksKsZd-mWPk3d):active ._p91CuWOY1kwy_::after{

}

.${e.btn_base}:not(.VfPpkd-ksKsZd-mWPk3d):focus ._p91CuWOY1kwy_::before{

}

*/

.${e.btn_base}:not(.VfPpkd-ksKsZd-mWPk3d) ._p91CuWOY1kwy_::after,
.${e.btn_base}:not(.VfPpkd-ksKsZd-mWPk3d) ._p91CuWOY1kwy_::after{
  transition:opacity 150ms linear
}


.${e.btn_base}.VfPpkd-ksKsZd-mWPk3d,
.${e.btn_base}.VfPpkd-ksKsZd-mWPk3d{
  --mdc-ripple-fg-opacity:.24
}

.${e.btn_base}{
  height:36px
}



.${e.btn_base}.VfPpkd-ksKsZd-mWPk3d-OWXEXe-ZNMTqd ._p91CuWOY1kwy_::after{
  top:var(--mdc-ripple-top,0);
  left:var(--mdc-ripple-left,0)
}

.${e.btn_base}.lJfZMc ._p91CuWOY1kwy_::after{
  animation: mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards
}

.${e.btn_base}.OmS1vf ._p91CuWOY1kwy_::after{
  animation: mdc-ripple-fg-opacity-out 150ms;
  transform: translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))
}









.${e.btn_base}.OmS1vf ._p91CuWOY1kwy_::after{
  animation: mdc-ripple-fg-opacity-out 150ms;
  transform: translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))
}






@keyframes mdc-ripple-fg-radius-in{
  0%{
    animation-timing-function:cubic-bezier(0.4,0,0.2,1);
    transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)
  }
  to{
    transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))
  }
}
  
  
@keyframes mdc-ripple-fg-opacity-in{
  0%{animation-timing-function:linear;opacity:0}
  to{opacity:var(--mdc-ripple-fg-opacity,0)}
}
  
@keyframes mdc-ripple-fg-opacity-out{
  0%{animation-timing-function:linear;
    opacity:var(--mdc-ripple-fg-opacity,0)
  }
  to{opacity:0}
}


























`;export{P as default};
