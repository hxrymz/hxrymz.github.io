"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3496,9760],{9760:function(e,l,n){n.r(l),n.d(l,{CloseModal:function(){return o},OpenModal:function(){return c},default:function(){return r}});var t=n(2791),a=n(5408),s=n(2350),i=n(184),d="listDialog_mdh392",r=function(){var e=(0,s.bh)("listDialog")||{},l=((0,a.Z)(d),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:l.map((function(l,n){var a=e[l];if(a&&a.visible){var s={};a.height&&(s.heigth=a.height),a.width,a.zIndex&&(s.zIndex=a.zIndex-1);var d={zIndex:a.zIndex},r=null,c=a.data;return a.content&&(r=t.cloneElement(a.content,{data:c})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:s,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:d,id:l,children:r})}),a.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},l)}}))})},c=function(e){var l=(0,s.bh)("listDialog")||{},n=(0,s.M5)();l[n]||(l[n]={}),l[n].visible=!0;var t={};e.props?(t=e.props).modalID=n:t.modalID=n;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[n].isView=e.isView,l[n].observeResize=e.observeResize,l[n].observeResize&&(l[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===l[n].width&&t.height===l[n].height||(l[n].height=t.height+10,l[n].width=t.width,(0,s.Rz)("listDialog",l),(0,s.wt)(d)))}),200)),l[n].display=!0,e.zIndex&&(l[n].zIndex=e.zIndex),e.height&&(l[n].height=e.height),e.width&&(l[n].width=e.width),e.content&&(l[n].content=e.content),l[n].data=t,(0,s.Rz)("listDialog",l),(0,s.wt)(d),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,s.Rz)("modalOpen",n),(0,s.wt)(d)}),125)},o=function(e){var l,n,t,a=(0,s.bh)("listDialog")||{},i=e.id;a[i]&&(a[i].observeResize&&a[i].observeInterval&&clearInterval(a[i].observeInterval),a[i].display=!1,null===(l=a[i])||void 0===l||null===(n=l.data)||void 0===n||null===(t=n.closeEvent)||void 0===t||t.call(n),(0,s.Rz)("listDialog",a),delete a[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,s.wt)(d),setTimeout((function(){delete a[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,s.Rz)("modalOpen",null)}),750))}},3496:function(e,l,n){n.r(l),n.d(l,{default:function(){return u}});var t=n(2791),a=n(2647),s=n(2350),i=n(1087),d=n(9760),r=n(9439),c=n(184),o=(0,a.PU)(),h=(0,a.YZ)(),m=function(e){var l=e.data,n=e.confirm,a=(e.handleClick,e.close,(0,t.useState)(0)),i=(0,r.Z)(a,2),m=(i[0],i[1]),v=l.modalID,u=function(e){(0,d.CloseModal)({id:v})},p=function(e){(e&&!(0,s.bh)("modernFontReport")||!e&&(0,s.bh)("modernFontReport"))&&((0,s.Rz)("modernFontReport",e),m((0,s.M5)()))};return(0,c.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"40vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Settings"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,s.ML)()?(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,c.jsx)(h,{initvalue:(0,s.bh)("showLog"),keyCode:77,updChange:function(e){return l=e,(0,s.Rz)("showLog",l),void m((0,s.M5)());var l}}),(0,c.jsx)("span",{className:"checklabel",children:"Show Logs"})]}):null]}),(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)("span",{})}),(0,c.jsx)("div",{className:"theme_setting_box ",children:(0,c.jsx)("div",{className:"_dsplFlx spaceAround ",children:(0,c.jsxs)("div",{className:"theme_style",onClick:function(){var e=!!!(0,s.bh)("darkTheme"),l=document.querySelector('[theme*="92357239"]');l&&(l.className=e?"light_theme palette_body App ":"dark_theme  palette_body App "),document.children[0].style.backgroundColor=e?"#f1f1f1":"#212121",(0,s.Rz)("darkTheme",e),m((0,s.M5)())},children:[(0,c.jsx)(o,{name:"theme",color:"var(--hrm_palette-general-background-b)"}),(0,c.jsx)("div",{className:"title gSansFont",children:(0,s.bh)("darkTheme")?"Dark":"Light"})]})})}),(0,c.jsxs)("div",{className:"print_setting_box ",children:[(0,c.jsx)("div",{className:"header ",children:(0,c.jsx)("span",{children:"Estilo de Impresion"})}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,c.jsxs)("div",{className:"print_style modern ".concat((0,s.bh)("modernFontReport")?"active":""),onClick:function(){return p(!0)},children:[(0,c.jsx)(o,{name:"check_circle"}),(0,c.jsx)("div",{className:"title",children:"Modern"}),(0,c.jsxs)("div",{className:"body",children:[(0,c.jsx)("h4",{children:"Fuente Normal"}),(0,c.jsx)("h5",{children:"Fuente Negrita"})]})]}),(0,c.jsxs)("div",{className:"print_style classic ".concat((0,s.bh)("modernFontReport")?"":"active"),onClick:function(){return p(!1)},children:[(0,c.jsx)(o,{name:"check_circle"}),(0,c.jsx)("div",{className:"title",children:"Classic"}),(0,c.jsxs)("div",{className:"body",children:[(0,c.jsx)("h4",{children:"Fuente Normal"}),(0,c.jsx)("h5",{children:"Fuente Negrita"})]})]})]})]}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:function(e){document.cookie="".concat((0,s.in)(),'=""'),document.cookie='hrm_access_tkn = ""',(0,s.Rz)("profileUser",null),(0,s.Rz)("isAdmin",null),u(),(0,s.wt)("isLogged_987")},children:"Logout"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:u,children:"Cerrar"}),(0,c.jsx)("p",{className:"group_title addBtn purple",onClick:function(){n(),u()},children:"Guardar"})]})]})},v=(0,a.PU)(),u=function(e){var l=e.data,n=e.active,t=e.updTab,a=function(){};return(0,c.jsx)("div",{className:"dashboard_menu",children:(0,c.jsxs)("div",{className:"dashboard_fixed",style:{margin:5,borderRight:"1px solid var(--ytcp-text-secondary);)"},children:[(0,c.jsx)("div",{className:"option_list",children:null===l||void 0===l?void 0:l.map((function(e){return(0,c.jsx)(i.OL,{to:{pathname:e.path},children:(0,c.jsxs)("div",{onClick:function(){return null===t||void 0===t?void 0:t(e.index)},className:"menu_item _dsplFlx",style:e.index===n?{"--ytcp-themed-red":"#b00000","--ytcp-text-secondary2":"#b00000","--ytcp-text-secondary":"var(--hrm_palette-blue-purple)","--ytcp-opacity_line":1,"--ytcp-general-background-z":"var(--hrm_palette-blue-purple_100)"}:{"--ytcp-text-secondary":"var(--hrm_palette-float-gray_5A)"},children:[(0,c.jsx)("div",{className:"side_mark"}),(0,c.jsx)("div",{className:"icon",children:(0,c.jsx)(v,{name:e.icon,color:e.index===n?"var(--hrm_palette-blue-purple)":"var(--hrm_palette-float-gray_5A)"})}),(0,c.jsx)("div",{className:"lbl",children:e.label})]})},e.index)}))}),(0,c.jsxs)("div",{className:"version_box_fixed",children:[(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("p",{className:"email_prf",children:(0,s.bh)("profileUser").email}),(0,c.jsx)("div",{className:"icon",style:{marginTop:7},onClick:function(){var e=(0,s.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,s.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,c.jsx)(m,{confirm:a,item:l}),(0,d.OpenModal)(n)}},children:(0,c.jsx)(v,{name:"setting",size:20})})]}),(0,c.jsx)("p",{className:"cpr_vrs",children:"@HrmFinance V23.1"})]})]})})}}}]);
//# sourceMappingURL=3496.eecca086.chunk.js.map