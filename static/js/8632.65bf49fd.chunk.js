"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8632,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return l}});var r=t(2791),i=t(5408),s=t(2350),o=t(184),a="listDialog_mdh392",l=function(){var e=(0,s.bh)("listDialog")||{},n=((0,i.Z)(a),Object.keys(e));return(0,o.jsx)(o.Fragment,{children:n.map((function(n,t){var i=e[n];if(i&&i.visible){var s={};i.height&&(s.heigth=i.height),i.width,i.zIndex&&(s.zIndex=i.zIndex-1);var a={zIndex:i.zIndex},l=null,c=i.data;return i.content&&(l=r.cloneElement(i.content,{data:c})),(0,o.jsxs)("div",{className:"ltr-1kbnjow",style:s,children:[(0,o.jsx)("div",{className:"ltr-hoe9xz",children:(0,o.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:l})}),i.data.overlay?(0,o.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,s.bh)("listDialog")||{},t=(0,s.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,s.Rz)("listDialog",n),(0,s.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,s.Rz)("listDialog",n),(0,s.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,s.Rz)("modalOpen",t),(0,s.wt)(a)}),125)},d=function(e){var n,t,r,i=(0,s.bh)("listDialog")||{},o=e.id;i[o]&&(i[o].observeResize&&i[o].observeInterval&&clearInterval(i[o].observeInterval),i[o].display=!1,null===(n=i[o])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,s.Rz)("listDialog",i),delete i[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,s.wt)(a),setTimeout((function(){delete i[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,s.Rz)("modalOpen",null)}),750))}},8632:function(e,n,t){t.r(n);var r=t(4165),i=t(5861),s=t(9439),o=t(2791),a=t(2350),l=t(2647),c=t(9760),d=(t(2052),t(5114)),u=t(6677),v=t(4050),h=t(9179),p=t(7689),f=t(184),m=(0,l.Vg)(),g=(0,d.V)(),x=(0,d.nU)(),b=(0,h.UC)(),_=(0,h.QC)();n.default=function(e){e.data,e.elmId,e.updObs;var n,t,l=(0,o.useState)(!1),d=(0,s.Z)(l,2),h=d[0],w=d[1],y=(0,o.useState)(0),I=(0,s.Z)(y,2),j=(I[0],I[1]),z=(0,o.useState)(!1),N=(0,s.Z)(z,2),Z=N[0],k=N[1],C=(0,p.s0)();(0,o.useEffect)((function(){h||(w(!0),j((0,a.M5)()),(0,v.Ht)("global_accounts","global_account_params",R))}));var R=function(){(0,v.ZX)(M)},M=function(){(0,u.Je)(D)},B=function(e){(0,u.Je)(D)},D=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j((0,a.M5)()),k(!1);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Provedores o Clientes"}),(0,a.I0)()?(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,f.jsx)(g,{confimr:B}),(0,c.OpenModal)(e)},children:"Agregar Provedores o Clientes"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,f.jsx)(b,{confimr:function(){}}),(0,c.OpenModal)(e)},children:"Pagar a Provedores"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,f.jsx)(_,{confimr:function(){}}),(0,c.OpenModal)(e)},children:"Cobrar a Clientes"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){C({pathname:"/pay-checks-on-future"})},children:"Cheques a Futuro"})]}):null,(0,f.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,f.jsx)(m,{placeholder:"Buscar ....",width:360,obs:j,fetchData:function(e){k(!0),(0,u.UO)(D)},loading:Z,change:function(e){!Z&&k(!0)},callempty:B,keyFlds:"search_prov"}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("div",{className:"total_comprobante_title",children:"No de Provedores:"}),(0,f.jsx)("div",{className:"total_comprobante gray",children:(0,f.jsx)("span",{children:null===(n=(0,a._2)((0,a.bh)("providers_list")))||void 0===n?void 0:n.length})})]})]})]}),(0,f.jsx)("div",{className:"providers_container scollVh",children:(0,a.bh)("providers_list")&&(null===(t=(0,a._2)((0,a.bh)("providers_list")))||void 0===t?void 0:t.map((function(e){return(0,f.jsx)(x,{data:(0,a.bh)("providers_list")[e],elmId:e,handleRefreshAll:B},e)})))})]})}},6677:function(e,n,t){t.d(n,{Je:function(){return a},Qn:function(){return u},UO:function(){return l},mQ:function(){return d}});var r=t(4165),i=t(1413),s=t(5861),o=t(2350),a=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s,a,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.all_prov_cust)).params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId},l=(0,o.I7)(a),e.next=5,l;case 5:(d=e.sent)&&((0,o.Rz)("providers_list",c((0,o.jQ)(d),"name",1)),(0,o.Rz)("providers_ids",(0,o.ME)((0,o.jQ)(d),"providerId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s,a,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_prov_cust)).params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":(0,o.bh)("search_prov")},l=(0,o.I7)(a),e.next=5,l;case 5:(d=e.sent)&&((0,o.Rz)("providers_list",c((0,o.jQ)(d),"name",1)),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var c=function(e,n,t){return(0,o.MV)("sortProviders",[e],(function(){return e&&e.sort((function(e,r){var i=1*e[n],s=1*r[n];return i<s?t?-1:1:i>s?t?1:-1:0}))}))},d=function(e,n){return(0,o.MV)("sortSubProviders",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],i=1*t[n];return r<i?-1:r>i?1:0}))}))},u=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){var s,a,l,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,i.Z)({},null===(s=(0,o.bh)((0,o.hQ)()))||void 0===s?void 0:s.delete_prov_cust)).params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,providerId:n},c=(0,o.I7)(l),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},2052:function(){}}]);
//# sourceMappingURL=8632.65bf49fd.chunk.js.map