"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8659,9760],{9760:function(e,n,l){l.r(n),l.d(n,{CloseModal:function(){return r},OpenModal:function(){return c},default:function(){return d}});var t=l(2791),a=l(5408),i=l(2350),s=l(184),o="listDialog_mdh392",d=function(){var e=(0,i.bh)("listDialog")||{},n=((0,a.Z)(o),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:n.map((function(n,l){var a=e[n];if(a&&a.visible){var i={};a.height&&(i.heigth=a.height),a.width,a.zIndex&&(i.zIndex=a.zIndex-1);var o={zIndex:a.zIndex},d=null,c=a.data;return a.content&&(d=t.cloneElement(a.content,{data:c})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:o,id:n,children:d})}),a.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,i.bh)("listDialog")||{},l=(0,i.M5)();n[l]||(n[l]={}),n[l].visible=!0;var t={};e.props?(t=e.props).modalID=l:t.modalID=l;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),n[l].isView=e.isView,n[l].observeResize=e.observeResize,n[l].observeResize&&(n[l].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(l,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===n[l].width&&t.height===n[l].height||(n[l].height=t.height+10,n[l].width=t.width,(0,i.Rz)("listDialog",n),(0,i.wt)(o)))}),200)),n[l].display=!0,e.zIndex&&(n[l].zIndex=e.zIndex),e.height&&(n[l].height=e.height),e.width&&(n[l].width=e.width),e.content&&(n[l].content=e.content),n[l].data=t,(0,i.Rz)("listDialog",n),(0,i.wt)(o),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",l),(0,i.wt)(o)}),125)},r=function(e){var n,l,t,a=(0,i.bh)("listDialog")||{},s=e.id;a[s]&&(a[s].observeResize&&a[s].observeInterval&&clearInterval(a[s].observeInterval),a[s].display=!1,null===(n=a[s])||void 0===n||null===(l=n.data)||void 0===l||null===(t=l.closeEvent)||void 0===t||t.call(l),(0,i.Rz)("listDialog",a),delete a[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(o),setTimeout((function(){delete a[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},8659:function(e,n,l){l.r(n),l.d(n,{default:function(){return _}});var t=l(4165),a=l(5861),i=l(9439),s=l(2791),o=l(2350),d=l(2647),c=l(9760),r=(l(7889),l(24)),v=l(713),h=l(4050),u=l(8779),m=l(7852),p=l(184),x=(0,d.PU)(),f=((0,r.KP)(),(0,r.kZ)()),g=function(e){var n,l=e.data,d=(e.elmId,e.handleRefreshAll),r=(0,s.useState)(!1),h=(0,i.Z)(r,2),g=h[0],j=h[1],b=(0,s.useState)(0),N=(0,i.Z)(b,2),_=(N[0],N[1]);(0,s.useEffect)((function(){g||(j(!0),_((0,o.M5)()))}));var y=function(){_((0,o.M5)())},w=function(){(0,v.QJ)(y)},I=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){(0,v.tH)(null===l||void 0===l?void 0:l.entriesInvoiceId,d)};(0,v.Zj)(null===(n=(0,o.bh)("sub_movement_group"))||void 0===n?void 0:n[l.movementId],"subProduct");return(0,p.jsx)("div",{className:"item_acc",children:(0,p.jsxs)("div",{className:"_dsplFlx item_box movement_header",children:[(0,p.jsxs)("div",{className:"_dsplFlx",onClick:I,children:[(0,p.jsx)("div",{className:"name",children:(0,o.sJ)(null===l||void 0===l?void 0:l.date)}),(0,p.jsx)("div",{className:"code",style:{marginLeft:14},children:null===l||void 0===l?void 0:l.document})]}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("div",{className:" addSbAcc purple",onClick:function(){return function(e){(0,o.Rz)("view_product_entry_comprobante",l);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,p.jsx)(f,{confirm:w,item:l}),(0,c.OpenModal)(n)}()},children:"Details"}),(0,o.I0)()?(0,p.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:function(){var e=(0,o.bh)("lastTimeCallModal")||0;if((0,o.I0)()){if(Date.now()>e){(0,o.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,p.jsx)(u.Z,{label:"Eliminar Movimiento",confirm:z,item:l}),(0,c.OpenModal)(n)}}else{var t={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};t.content=(0,p.jsx)(m.Z,{}),(0,c.OpenModal)(t)}},children:(0,p.jsx)(x,{name:"outline_delete",color:"#c62828"})}):null]})})},j=(0,d.Vg)(),b=((0,r.O6)(),(0,r.$d)()),N=(0,r.lA)(),_=function(e){e.data,e.elmId;var n,l,d=e.updObs,r=(0,s.useState)(!1),u=(0,i.Z)(r,2),m=u[0],x=u[1],f=(0,s.useState)(0),_=(0,i.Z)(f,2),y=(_[0],_[1]),w=(0,s.useState)(0),I=(0,i.Z)(w,2),z=(I[0],I[1],(0,s.useState)(!1)),k=(0,i.Z)(z,2),M=k[0],Z=k[1];(0,s.useEffect)((function(){m||(x(!0),y((0,o.M5)()),(0,v.QJ)(D),(0,h.Ht)("global_accounts","global_account_params",d))}));var C=function(){},R=function(e){(0,v.QJ)(D)},D=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,l){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y((0,o.M5)()),Z(!1);case 2:case"end":return e.stop()}}),e)})));return function(n,l){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"",children:[(0,p.jsxs)("div",{className:"accounts_header",children:[(0,p.jsx)("h2",{children:"Movements"}),(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.I0)()?(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,p.jsx)(b,{}),(0,c.OpenModal)(e)},children:"Entradas"}):null,(0,o.I0)()?(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,p.jsx)(N,{}),(0,c.OpenModal)(e)},children:"Salidas"}):null]})]}),(0,p.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,p.jsx)(j,{placeholder:"Buscar ....",width:560,obs:y,fetchData:function(e){Z(!0),(0,v.dZ)(D)},loading:M,change:function(e){!M&&Z(!0)},callempty:R,keyFlds:"searchMovQry"}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("div",{className:"total_comprobante_title",children:"No de Movientos:"}),(0,p.jsx)("div",{className:"total_comprobante gray",children:(0,p.jsx)("span",{children:null===(n=(0,o._2)((0,o.bh)("movements_list")))||void 0===n?void 0:n.length})})]})]}),(0,p.jsx)("div",{className:"movements_container scollVh",children:(0,o.bh)("movements_list")&&(null===(l=(0,o._2)((0,o.bh)("movements_list")))||void 0===l?void 0:l.map((function(e){return(0,p.jsx)(g,{data:(0,o.bh)("movements_list")[e],elmId:e,openUpdateView:C,handleRefreshAll:R},e)})))})]})}},7852:function(e,n,l){l(2791),l(1534);var t=l(9760),a=l(184);n.Z=function(e){var n=e.data,l=(e.confirm,e.handleClick,e.close,n.modalID);return(0,a.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,a.jsxs)("div",{className:"_dsplFlx ",children:[(0,a.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,a.jsx)("div",{className:"flexSpace"})]}),(0,a.jsx)("div",{className:"_dsplFlx ",children:(0,a.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("p",{className:"group_title addBtn blue",onClick:function(){(0,t.CloseModal)({id:l})},children:"OK"})]})]})}},8779:function(e,n,l){l(2791),l(1534);var t=l(9760),a=l(184);n.Z=function(e){var n=e.data,l=e.confirm,i=e.label,s=(e.close,n.modalID),o=function(e){(0,t.CloseModal)({id:s})};return(0,a.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,a.jsxs)("div",{className:"_dsplFlx ",children:[(0,a.jsx)("p",{className:"form_title",children:i}),(0,a.jsx)("div",{className:"flexSpace"})]}),(0,a.jsx)("div",{className:"_dsplFlx ",children:(0,a.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("p",{className:"group_title addBtn",onClick:o,children:"Cancelar"}),(0,a.jsx)("p",{className:"group_title addBtn red",onClick:function(){l(),o()},children:"Eliminar"})]})]})}},7889:function(){},1534:function(){}}]);
//# sourceMappingURL=8659.4b2f1995.chunk.js.map