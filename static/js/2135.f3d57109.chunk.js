"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2135,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return u},OpenModal:function(){return c},default:function(){return o}});var r=t(2791),i=t(5408),a=t(2350),s=t(184),l="listDialog_mdh392",o=function(){var e=(0,a.bh)("listDialog")||{},n=((0,i.Z)(l),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:n.map((function(n,t){var i=e[n];if(i&&i.visible){var a={};i.height&&(a.heigth=i.height),i.width,i.zIndex&&(a.zIndex=i.zIndex-1);var l={zIndex:i.zIndex},o=null,c=i.data;return i.content&&(o=r.cloneElement(i.content,{data:c})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:l,id:n,children:o})}),i.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,a.bh)("listDialog")||{},t=(0,a.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,a.Rz)("listDialog",n),(0,a.wt)(l)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,a.Rz)("listDialog",n),(0,a.wt)(l),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",t),(0,a.wt)(l)}),125)},u=function(e){var n,t,r,i=(0,a.bh)("listDialog")||{},s=e.id;i[s]&&(i[s].observeResize&&i[s].observeInterval&&clearInterval(i[s].observeInterval),i[s].display=!1,null===(n=i[s])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,a.Rz)("listDialog",i),delete i[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(l),setTimeout((function(){delete i[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},2135:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(4165),i=t(1413),a=t(5861),s=t(9439),l=t(2791),o=t(2350),c=t(2647),u=t(2670),d=t(184),v=(0,c.kp)(),h=function(e){var n,t=e.handleClick,r=(0,l.useState)(!1),i=(0,s.Z)(r,2),a=i[0],c=i[1],h=(0,l.useState)(0),p=(0,s.Z)(h,2),m=(p[0],p[1]),g=(0,l.useState)(!1),x=(0,s.Z)(g,2),b=x[0],y=x[1],w=(0,l.useState)([]),j=(0,s.Z)(w,2),I=j[0],Z=j[1],N=(0,l.useRef)();(0,l.useEffect)((function(){a||(c(!0),(0,u.sB)(O),m((0,o.M5)()))}));var O=function(e){m((0,o.M5)())},k=function(e,n){t(e,n),N.current.clearTx()};return(0,d.jsx)("div",{children:(0,d.jsx)(v,{placeholder:"buscar...",width:420,fetchData:function(e){Z(function(e,n){var t=n.toLowerCase(),r=[];e.length>0&&e.map((function(e){var n,i;(null===(n=e.name)||void 0===n||null===(i=n.toLowerCase())||void 0===i?void 0:i.indexOf(t))>=0&&r.push(e)}));return r}((0,o.bh)("notaryAgents_list"),e)),b&&y(!1)},loading:b,change:function(e){!b&&y(!0)},callempty:function(e){Z([]),b&&y(!1)},ref:N,children:(0,d.jsx)("div",{className:"",children:I&&(null===(n=(0,o._2)(I))||void 0===n?void 0:n.map((function(e){return(0,d.jsx)(f,{data:I[e],elmId:e,selectItem:k},e)})))})})})},f=function(e){var n=e.data,t=e.selectItem;return(0,d.jsx)("div",{className:"item_acc",children:(0,d.jsx)("div",{className:"_dsplFlx item_box account_header",children:(0,d.jsx)("div",{className:"_dsplFlx",onClick:function(){return t(n,null)},children:(0,d.jsx)("div",{className:"code",children:null===n||void 0===n?void 0:n.name})})})})};var p=t(9760),m=(0,c.Np)(),g=function(e){var n=e.data,t=e.confirm,c=(0,l.useState)(""),u=(0,s.Z)(c,2),v=u[0],f=u[1],g=(0,l.useState)(!1),x=(0,s.Z)(g,2),b=x[0],y=x[1],w=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var a,s,l,c,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=12;break}return l={name:v,notaryAgentId:(0,o.M5)()},(c=(0,i.Z)({},null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.add_notaryAgn)).params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId},c.form=l,u=(0,o.I7)(c),e.next=8,u;case 8:(d=e.sent)&&!d.error&&(t&&t(v),(null===n||void 0===n?void 0:n.modalID)&&(0,p.CloseModal)({id:null===n||void 0===n?void 0:n.modalID})),e.next=14;break;case 12:t&&t(v),(null===n||void 0===n?void 0:n.modalID)&&(0,p.CloseModal)({id:null===n||void 0===n?void 0:n.modalID});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsxs)("p",{className:"form_title",children:[b?"Agregar ":""," Agente de Notaria"]}),(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn purple",onClick:function(){y(!0)},children:"Agregar"})]}),b?(0,d.jsx)("div",{style:{margin:"18px 0"},children:(0,d.jsx)(m,{init:v,label:"Nombre",width:360,updChanges:function(e){return f(e)}})}):(0,d.jsx)("div",{style:{margin:"18px 0"},children:v?(0,d.jsx)("div",{children:v}):(0,d.jsx)(h,{placeholder:"buscar...",width:420,handleClick:function(e){f(null===e||void 0===e?void 0:e.name)}})}),(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn purple",onClick:w,children:"Guardar"})]})]})}},2670:function(e,n,t){t.d(n,{EV:function(){return o},pw:function(){return u},sB:function(){return l},uB:function(){return c}});var r=t(4165),i=t(1413),a=t(5861),s=t(2350),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,o,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,i.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_notaryAgn)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId},o=(0,s.I7)(l),e.next=5,o;case 5:(c=e.sent)&&((0,s.Rz)("notaryAgents_list",d(c,"name")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_notary)).params={":search":(0,s.bh)("searchQry")},l=(0,s.I7)(a),e.next=5,l;case 5:(o=e.sent)&&((0,s.Rz)("client_list",o),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,l,o,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,i.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.fndone_notary)).params={id:n},o=(0,s.I7)(l),e.next=5,o;case 5:(c=e.sent)&&((0,s.Rz)("upd_client",c),(0,s.Rz)("upd_client_bck",JSON.parse(JSON.stringify(c))),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,i.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.print_structure),l=(0,s.I7)(a),e.next=4,l;case 4:(o=e.sent)&&((0,s.Rz)("print_structure",o),n&&n());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(e,n){return(0,s.MV)("sortByName",[e,n],(function(){return e&&e.sort((function(e,t){var r=e[n],i=t[n];return r<i?-1:r>i?1:0}))}))}},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=2135.f3d57109.chunk.js.map