import{u as b,s as m,a as r,F as h,j as s,g as f,U as g}from"./index.20bf7686.js";const y=()=>{const i=f().listToat||{};b(m);var o=Object.keys(i);const a=t=>{g({id:t})};return r(h,{children:[i&&o.map((t,w)=>{var e=i[t];if(e&&e.visible){u(t),e.display;let n=e.data,d="toast active",x={opacity:e.display?1:0},p=n&&n.text?n.text:"sdgfdsfgsdfg";var l={},c="Ok";return s("div",{id:t,className:"TtBase_Toast",children:r("div",{className:e.display?d:"toast",style:x,children:[s("div",{className:"text",children:p}),s("div",{className:"actions",children:s("button",{className:"md-button md-ink-ripple",type:"button",style:l,onClick:()=>a(t),children:c})})]})})}}),s("style",{children:`
                        .TtBase_Toast{
                          position:fixed;
                      }
                      
                  
                      .toast {
                        -webkit-transform: translate3d(0,0,0);
                        transform: translate3d(0,0,0);
                        opacity: 0;
                        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
                        -webkit-transition: all .4s cubic-bezier(.4,0,.2,1);
                        transition: all .4s cubic-bezier(.4,0,.2,1);
                        background-color: #424242;
                        color: #fff;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        font-size: 14px;
                        padding-top: 12px;
                        padding-left: 16px;
                        padding-right: 16px;
                        position: fixed;
                        min-height: 65px;                        
                        top: 70px;
                        right: 28px;
                        min-width: 240px;
                        max-width: 340px
                      }
                      
                      
                      .accessibility__toast, .toast {
                        line-height: 20px;
                      /*  z-index: -1; */
                        border-radius: 2px;
                      }
                      
                      .toast.active {
                        -webkit-transform: translate3d(0,0,0);
                        transform: translate3d(0,0,0);
                        opacity: 0.87;
                        z-index: 500;
                      }
                      
                      .toast .actions {
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-pack: end;
                        -ms-flex-pack: end;
                        justify-content: flex-end;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: row;
                        flex-direction: row;
                      }
                      
                      
                      .toast .actions .md-button {
                        color: rgb(0, 145, 234);
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        height: 18px;
                        margin: 0;
                        min-height: 40px;
                        max-height: 40px;
                        min-width: 100px;
                        max-width: 100px;
                        width: 85px;
                        font-weight: 700;
                      }
                      
                      .md-button {
                        letter-spacing: .010em;
                        display: inline-block;
                        position: relative;
                        cursor: pointer;
                        min-height: 36px;
                        min-width: 88px;
                        line-height: 36px;
                        vertical-align: middle;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        align-items: center;
                        text-align: center;
                        border-radius: 2px;
                        box-sizing: border-box;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        outline: 0;
                        border: 0;
                        padding: 0 6px;
                        margin: 6px 8px;
                        background: 0 0;
                        color: currentColor;
                        white-space: nowrap;
                        font-size: 14px;
                        font-style: inherit;
                        font-variant: inherit;
                        font-family: inherit;
                        overflow: hidden;
                        -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);
                        transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);
                      }
                      
                                  `})]})},u=i=>{var o=i,a=new RegExp("=","g");return o=o.replace(a,""),o};export{y as default};
