/*! For license information please see 5686.08289846.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5686,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return s}});var a=t(2791),r=t(5408),o=t(2350),l=t(184),i="listDialog_mdh392",s=function(){var e=(0,o.bh)("listDialog")||{},n=((0,r.Z)(i),Object.keys(e));return(0,l.jsx)(l.Fragment,{children:n.map((function(n,t){var r=e[n];if(r&&r.visible){var o={};r.height&&(o.heigth=r.height),r.width,r.zIndex&&(o.zIndex=r.zIndex-1);var i={zIndex:r.zIndex},s=null,c=r.data;return r.content&&(s=a.cloneElement(r.content,{data:c})),(0,l.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,l.jsx)("div",{className:"ltr-hoe9xz",children:(0,l.jsx)("div",{className:"ltr-1wao6ny",style:i,id:n,children:s})}),r.data.overlay?(0,l.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,o.bh)("listDialog")||{},t=(0,o.M5)();n[t]||(n[t]={}),n[t].visible=!0;var a={};e.props?(a=e.props).modalID=t:a.modalID=t;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===n[t].width&&a.height===n[t].height||(n[t].height=a.height+10,n[t].width=a.width,(0,o.Rz)("listDialog",n),(0,o.wt)(i)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=a,(0,o.Rz)("listDialog",n),(0,o.wt)(i),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)(i)}),125)},d=function(e){var n,t,a,r=(0,o.bh)("listDialog")||{},l=e.id;r[l]&&(r[l].observeResize&&r[l].observeInterval&&clearInterval(r[l].observeInterval),r[l].display=!1,null===(n=r[l])||void 0===n||null===(t=n.data)||void 0===t||null===(a=t.closeEvent)||void 0===a||a.call(t),(0,o.Rz)("listDialog",r),delete r[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(i),setTimeout((function(){delete r[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},5281:function(e,n,t){var a=t(5671),r=t(3144),o=t(7326),l=t(136),i=t(7277),s=t(2791),c=t(184),d=function(e){(0,l.Z)(t,e);var n=(0,i.Z)(t);function t(){var e;return(0,a.Z)(this,t),(e=n.call(this)).state={scrollPosition:null},e.handleInterval=e.handleInterval.bind((0,o.Z)(e)),e.handleRequestAnimationFrame=e.handleRequestAnimationFrame.bind((0,o.Z)(e)),e}return(0,r.Z)(t,[{key:"componentWillMount",value:function(){this.intervalID=setInterval(this.handleInterval,50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}},{key:"getWindowScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop}},{key:"handleInterval",value:function(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}},{key:"handleRequestAnimationFrame",value:function(){var e=this.state.scrollPosition,n=this.getWindowScrollTop();n!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(n),this.setState({scrollPosition:n}))}},{key:"render",value:function(){return(0,c.jsx)(c.Fragment,{})}}]),t}(s.Component);n.Z=d},5686:function(e,n,t){t.r(n);var a=t(4942),r=t(4165),o=t(5861),l=t(1413),i=t(9439),s=t(6459),c=t(2791),d=t(2350),u=t(2647),v=(t(1e3),t(3588)),h=t(2692),p=t(4050),m=t(7689),_=t(5281),b=t(9760),f=t(15),x=t(184),g=(0,u.LA)(),y=(0,u.Vg)(),I=(0,h.LO)(),w=(0,u.PU)(),j=(0,u.tW)(),Z=(0,u.YZ)(),N="coll2list";n.default=function(e){var n,t,u,h,_;(0,s.Z)(e);var D=(0,c.useState)(!1),C=(0,i.Z)(D,2),F=C[0],T=C[1],E=(0,c.useState)(0),S=(0,i.Z)(E,2)[1],A=(0,c.useState)(64),B=(0,i.Z)(A,2),M=B[0],q=B[1],O=(0,c.useState)(!1),U=(0,i.Z)(O,2),L=U[0],W=U[1],V=(0,c.useState)(!1),Q=(0,i.Z)(V,2),P=Q[0],H=Q[1],Y=(0,c.useState)(!1),$=(0,i.Z)(Y,2),J=$[0],G=$[1],K=(0,c.useState)(!1),X=(0,i.Z)(K,2),ee=X[0],ne=X[1],te=(0,m.TH)(),ae=(0,m.s0)();(0,c.useEffect)((function(){setTimeout((function(){var e,n,t=null===(e=te.search)||void 0===e||null===(n=e.split("?"))||void 0===n?void 0:n[1],a=(0,d.mB)(t);null!==a&&void 0!==a&&a.cId&&((0,d.Rz)("search_acc_record",null===a||void 0===a?void 0:a.cId),(0,v.N$)(oe)),(0,p.Ht)("comp_under_review","comp_under_review",ie)}),350)}),[te]),(0,c.useEffect)((function(){F||(T(!0),S((0,d.M5)()),(0,p._0)(ie),(0,p.ZX)(le))}));var re=function(){},oe=function(){var e=(0,l.Z)({},(0,d.bh)("comprobante_by_doc"));(0,d.Rz)(N,e),(0,d.bh)("has_filter_review")&&L?(0,d.Rz)(N,z(e)):(0,d.bh)("has_filter_comp_error")&&P&&(0,d.Rz)(N,k(e)),ie()},le=function(e){(0,d.Rz)("comprobante_list",null),(0,d.Rz)("comprobante_by_doc",null),oe(),G(!1)},ie=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S((0,d.M5)()),G(!1),ne(!1);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),se=function(){q((function(e){return e+64}))},ce=function(e){if(ne(!0),null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){var n=(0,l.Z)({},e);n.initDate=n.initDate-100,n.lastDate=n.lastDate+8638e4,(0,d.Rz)("date_range_comps",n)}(0,v.Ng)(oe)},de=(null===(n=(0,d.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)&&(0,d.sJ)(null===(t=(0,d.bh)("date_range_comps"))||void 0===t?void 0:t.initDate)+" - "+(0,d.sJ)(null===(u=(0,d.bh)("date_range_comps"))||void 0===u?void 0:u.lastDate),ue=function(){ne(!0),(0,f.OpenToast)({text:"Verificacion de comprobantes completada",timeout:3500}),S((0,d.M5)()),(0,d.bh)("showAllCmpbnt")&&oe()};return(0,x.jsxs)("div",{className:"",children:[(0,x.jsxs)("div",{className:"accounts_header",children:[(0,x.jsx)("h2",{children:"Comprobantes"}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){ae({pathname:"/entries"})},children:"Agregar Comprobantes"}),(0,x.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,v.ly)(ue)},children:"Revisar Comprobantes"}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,x.jsx)(Z,{initvalue:(0,d.bh)("showAllCmpbnt"),keyCode:57,updChange:function(e){return n=e,(0,d.Rz)("showAllCmpbnt",n),void S((0,d.M5)());var n}}),(0,x.jsx)("span",{className:"checklabel",children:"Mostar Todos"})]})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,x.jsx)(y,{placeholder:"Buscar ....",width:360,obs:S,fetchData:function(e){q(128),(0,v.N$)(oe)},loading:J,change:function(e){!ee&&ne(!0)},callempty:le,keyFlds:"search_acc_record"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"total_comprobante_title",children:"No de Comprobantes:"}),(0,x.jsx)("div",{className:"total_comprobante gray",children:(0,x.jsx)("span",{children:null===(h=(0,d._2)((0,d.bh)(N)))||void 0===h?void 0:h.length})})]})]})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:14,maxWidth:500},children:[(0,x.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:function(){var e,n,t={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};t.content=(0,x.jsx)(g,{onConfirm:ce,init:null===(e=(0,d.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(n=(0,d.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate,isRange:!0,colors:(0,a.Z)({"--calendar-primary-color":"var(--hrm_palette-blue-purple)","--calendar-primary-backcolor":"var(--primary-light)","--calendar-light-backcolor":"var(--hrm_palette-general-background-b)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--disabled)","--calendar-light-200":"var(--dark-800)","--calendar-light-100":"var(--dark-900)","--calendar-dark-800":"var(--hrm_palette-blue-purple_100)","--calendar-white-100":"var(--light-100)","--calendar-white":"var(--dark-700)","--calendar-selected_lbl_color":"var(--light-400)"},"--calendar-selected_lbl_color","var(--primary-blue--color-30)")}),(0,b.OpenModal)(t)},children:[(0,x.jsx)("div",{className:"lbl date",children:de||"Fecha"}),(0,x.jsx)(w,{name:"calendar",color:"#66666"})]}),(0,d.bh)("has_filter_review")?(0,x.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":L?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":L?"var(--hrm_palette-color-orange-100)":"var(--hrm_palette-success-100)"},onClick:function(){var e=(0,l.Z)({},(0,d.bh)("comprobante_by_doc"));(0,d.Rz)(N,e),(0,d.bh)("has_filter_review")&&!L&&(0,d.Rz)(N,z(e)),W(!L)},children:[(0,x.jsx)("div",{className:"lbl",children:L?"En Revision":"Todos"}),(0,x.jsx)(w,{name:L?"alert":"success",color:"#66666"})]}):null,(0,d.bh)("has_filter_comp_error")?(0,x.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":P?"var( --hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":P?"var( --hrm_palette-selected-nav-text-100)":"var(--hrm_palette-success-100)",marginLeft:12},onClick:function(){var e=(0,l.Z)({},(0,d.bh)("comprobante_by_doc"));(0,d.Rz)(N,e),(0,d.bh)("has_filter_comp_error")&&!P&&(0,d.Rz)(N,k(e)),H(!P)},children:[(0,x.jsx)("div",{className:"lbl",children:P?"Contiene errors":"OK"}),(0,x.jsx)(w,{name:P?"alert":"success",color:"#66666"})]}):null,(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"accounts_container ",children:[(0,x.jsx)("div",{style:{height:55},children:(0,x.jsx)(R,{})}),ee?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"load_animation"}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:32},children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:"icon_compr _dsplFlx",children:[(0,x.jsx)("div",{className:"lbl_saving",children:"Loading ..."}),(0,x.jsx)(j,{stroke:"#646cff",size:24,strokeW:8})]}),(0,x.jsx)("div",{className:"flexSpace"})]})]}):(0,x.jsx)("div",{id:"scollVhComprobantesList",children:(0,d.bh)(N)&&(null===(_=(0,d._2)((0,d.bh)(N)))||void 0===_?void 0:_.map((function(e,n){return(0,x.jsx)(I,{data:(0,d.bh)(N)[e],elmId:e,openUpdateView:re,handleRefreshAll:le,inReview:L,hasError:P,updRvw:S,range:M,inx:n,updRange:se},e)})))})]})]})};var R=function(e){(0,s.Z)(e);var n=(0,c.useState)(!1),t=(0,i.Z)(n,2),a=t[0],r=t[1];return(0,x.jsxs)("div",{className:"header_tbl ".concat(a?"_floating":""),children:[(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,x.jsxs)("div",{className:"_dsplFlx tr_bar_90",children:[(0,x.jsx)("div",{className:" tr_bar_20",children:"Fecha"}),(0,x.jsx)("div",{className:" tr_bar_25",children:"Comprobante"}),(0,x.jsx)("div",{className:" tr_bar_55",children:"Descripcion"})]}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"icon tr_bar_5"})]}),(0,x.jsx)(_.Z,{scrollhandler:function(e){e>295?!a&&r(!0):a&&r(!1)}})]})};function z(e){var n=[];return(0,d._2)(e).map((function(t){var a,r,o=e[t];null!==(a=(0,d.bh)("comp_under_review"))&&void 0!==a&&null!==(r=a.inReview)&&void 0!==r&&r[null===o||void 0===o?void 0:o.comprobanteId]&&n.push(o)})),n}function k(e){var n=[];return(0,d._2)(e).map((function(t){var a,r,o,l=e[t];(null!==(a=(0,d.bh)("comp_under_review"))&&void 0!==a&&null!==(r=a.hasError)&&void 0!==r&&r[null===l||void 0===l?void 0:l.comprobanteId]||null!==(o=(0,d.bh)("comprobante_w_erros"))&&void 0!==o&&o[null===l||void 0===l?void 0:l.comprobanteId])&&n.push(l)})),n}},3588:function(e,n,t){t.d(n,{Eb:function(){return p},Gg:function(){return h},N$:function(){return s},Ng:function(){return d},WB:function(){return u},ly:function(){return i}});var a=t(4165),r=t(1413),o=t(5861),l=t(2350),i=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t,o,i,s,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,r.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.all_opera)).params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,l.bh)("date_current_year")},s=(0,l.I7)(i),e.next=5,s;case 5:(d=e.sent)&&!d.error&&(c(d),(0,l.bh)("showAllCmpbnt")&&((0,l.Rz)("comprobante_list",d),(0,l.Rz)("comprobante_by_doc",v((0,l.jQ)(d)))),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t,o,i,s,c,d,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((0,l.bh)("search_acc_record").length>3)){e.next=11;break}return(c=(0,r.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,l.bh)("date_current_year"),":date1":null===(i=(0,l.bh)("date_range_comps"))||void 0===i?void 0:i.initDate,":date2":null===(s=(0,l.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate},(0,l.bh)("search_acc_record").split(" ").map((function(e,n){e&&(c.params[":search"+n]=e.trim())})),d=(0,l.I7)(c),e.next=7,d;case 7:(u=e.sent)&&!u.error&&((0,l.Rz)("comprobante_list",u),(0,l.Rz)("comprobante_by_doc",v((0,l.jQ)(u))),n&&n()),e.next=14;break;case 11:(0,l.Rz)("comprobante_list",null),(0,l.Rz)("comprobante_by_doc",null),n&&n();case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t,r,o,i,s,c,d,u,v,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i in 0,t={},r={},o={},n)c=n[i],(d=null===(s=(0,l.bh)("account_ids"))||void 0===s?void 0:s[c.account])&&((0,l.UE)(o[null===d||void 0===d?void 0:d.accountId])||(o[null===d||void 0===d?void 0:d.accountId]={saldo:0,name:(null===d||void 0===d?void 0:d.code)+" - "+(null===d||void 0===d?void 0:d.name),list:[]}),(0,l.UE)(t[c.comprobanteId])||(t[c.comprobanteId]=0,r[c.comprobanteId]=[]),u=1*(0,l.Zv)(("debit"===c.type?1:-1)*c.amount,2),o[null===d||void 0===d?void 0:d.accountId].saldo=1*(0,l.Zv)(o[d.accountId].saldo,2)+1*u,o[null===d||void 0===d?void 0:d.accountId].list.push([c.comprobanteId,u]),t[c.comprobanteId]=1*(0,l.Zv)(t[c.comprobanteId],2)+u,r[c.comprobanteId].push({ammount:u,operationId:c.comprobanteId}));for(h in v=null,t)t[h]&&(v||(v={}),v[h]=1);v&&((0,l.Rz)("comprobante_w_erros",v),(0,l.Rz)("has_filter_comp_error",!0));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t,o,i,s,d,u,h,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,r.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,l.bh)("date_current_year"),":date1":(null===(i=(0,l.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(s=(0,l.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate},u=(0,l.I7)(d),e.next=5,u;case 5:(h=e.sent)&&!h.error&&((0,l.Rz)("comprobante_list",h),p=[],(0,l.bh)("comprobante_all_list")&&(0,l.bh)("comprobante_all_list").map((function(e){h[e.operationId]||console.log(e)})),h&&(0,l._2)(h).map((function(e){var n,t;h[e].account&&h[e].date>(null===(n=(0,l.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)-10&&h[e].date<=(null===(t=(0,l.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate)&&p.push(h[e])})),(0,l.Rz)("comprobante_by_doc",v(p)),c(p),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n,t){var i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n.map((function(e){var n,t,a=(0,r.Z)({},null===(n=(0,l.bh)((0,l.hQ)()))||void 0===n?void 0:n.delete_opera);a.params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,l.bh)("date_current_year"),operationId:e.operationId},i.push(a)})),s=i.map(function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(s);case 5:t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function v(e){var n={};return e.length>0?e.map((function(e){var t=e.date;if(t&&e.account){var a=t+"_"+e.comprobanteId;if(!n[a]){n[a]={};["date","description","entryName","comprobanteId","employeeId"].forEach((function(t){n[a][t]=e[t]})),n[a].amount=0,n[a].balance=0,n[a].operations=[]}e.type&&n[a].operations.push(function(e){var n,t,a={};a.account=null===(n=(0,l.bh)("account_ids"))||void 0===n?void 0:n[e.account],a.sub_account=null===(t=(0,l.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],a.comprobanteId=e.comprobanteId,a.operationId=e.operationId,a.document=e.document,a.type=e.type;var r=(0,l.Zv)(e.amount,2);"credit"===e.type?(a.debit=0,a.credit=r):"debit"===e.type&&(a.credit=0,a.debit=r);return a}(e))}})):n=null,n}function h(e){(0,l.Rz)("has_filter_review",null),(0,l.Rz)("has_filter_comp_error",null),(0,l._2)(e).map((function(n){var t,a,r,o;null!==(t=(0,l.bh)("comp_under_review"))&&void 0!==t&&null!==(a=t.inReview)&&void 0!==a&&a[e[n].comprobanteId]&&(0,l.Rz)("has_filter_review",!0),null!==(r=(0,l.bh)("comp_under_review"))&&void 0!==r&&null!==(o=r.hasError)&&void 0!==o&&o[e[n].comprobanteId]&&(0,l.Rz)("has_filter_comp_error",!0)}))}var p=function(e){return(0,l.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,t){var a=e[n],r=t[n];return a===r?t[r]-e[a]:r>a?1:-1}))}))}},1e3:function(){},6459:function(e,n,t){function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=5686.08289846.chunk.js.map