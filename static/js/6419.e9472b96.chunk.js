"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6419,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return u},OpenModal:function(){return l},default:function(){return c}});var r=t(2791),a=t(5408),o=t(2350),i=t(184),s="listDialog_mdh392",c=function(){var e=(0,o.bh)("listDialog")||{},n=((0,a.Z)(s),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:n.map((function(n,t){var a=e[n];if(a&&a.visible){var o={};a.height&&(o.heigth=a.height),a.width,a.zIndex&&(o.zIndex=a.zIndex-1);var s={zIndex:a.zIndex},c=null,l=a.data;return a.content&&(c=r.cloneElement(a.content,{data:l})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:s,id:n,children:c})}),a.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:e})}}):null]},n)}}))})},l=function(e){var n=(0,o.bh)("listDialog")||{},t=(0,o.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,o.Rz)("listDialog",n),(0,o.wt)(s)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,o.Rz)("listDialog",n),(0,o.wt)(s),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)(s)}),125)},u=function(e){var n,t,r,a=(0,o.bh)("listDialog")||{},i=e.id;a[i]&&(a[i].observeResize&&a[i].observeInterval&&clearInterval(a[i].observeInterval),a[i].display=!1,null===(n=a[i])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",a),delete a[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(s),setTimeout((function(){delete a[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},5281:function(e,n,t){var r=t(5671),a=t(3144),o=t(7326),i=t(136),s=t(7277),c=t(2791),l=t(184),u=function(e){(0,i.Z)(t,e);var n=(0,s.Z)(t);function t(){var e;return(0,r.Z)(this,t),(e=n.call(this)).state={scrollPosition:null},e.handleInterval=e.handleInterval.bind((0,o.Z)(e)),e.handleRequestAnimationFrame=e.handleRequestAnimationFrame.bind((0,o.Z)(e)),e}return(0,a.Z)(t,[{key:"componentWillMount",value:function(){this.intervalID=setInterval(this.handleInterval,50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}},{key:"getWindowScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop}},{key:"handleInterval",value:function(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}},{key:"handleRequestAnimationFrame",value:function(){var e=this.state.scrollPosition,n=this.getWindowScrollTop();n!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(n),this.setState({scrollPosition:n}))}},{key:"render",value:function(){return(0,l.jsx)(l.Fragment,{})}}]),t}(c.Component);n.Z=u},3728:function(e,n,t){t.d(n,{NA:function(){return l},g5:function(){return c},ph:function(){return i},yq:function(){return s}});var r=t(4165),a=t(5861),o=t(2350),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,i,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.all_entries).params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId},s=(0,o.I7)(i),e.next=5,s;case 5:(c=e.sent)&&((0,o.Rz)("entries_list",c),(0,o.Rz)("entries_ids",(0,o.ME)(c,"accountingEntryId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,i,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_entries).params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,o.bh)("search_entry_qry")},s=(0,o.I7)(i),e.next=5,s;case 5:(c=e.sent)&&((0,o.Rz)("entries_list",c),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,i,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.delete_entries).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,accountingEntryId:n},c=(0,o.I7)(s),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,o.I7)({query:"getLastSequence"}),e.next=3,t;case 3:if(!(a=e.sent)){e.next=6;break}return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},5686:function(e,n,t){t.r(n);var r=t(4296),a=t(4165),o=t(5861),i=t(1413),s=t(9439),c=t(2791),l=t(2350),u=t(2647),d=(t(1e3),t(3588)),v=t(2692),p=t(4050),h=t(7689),m=t(5281),f=t(9760),b=(t(3728),t(15)),_=t(184),x=(0,u.h0)(),g=(0,u.Vg)(),y=(0,v.LO)(),w=(0,u.PU)(),I="coll2list";n.default=function(e){e.data,e.elmId,e.updObs;var n,t,r,u,v,m=(0,c.useState)(!1),R=(0,s.Z)(m,2),z=R[0],k=R[1],D=(0,c.useState)(0),O=(0,s.Z)(D,2),C=(O[0],O[1]),E=(0,c.useState)(128),F=(0,s.Z)(E,2),S=F[0],A=F[1],T=(0,c.useState)(!1),B=(0,s.Z)(T,2),q=B[0],M=B[1],P=(0,c.useState)(!1),U=(0,s.Z)(P,2),Q=U[0],V=U[1],L=(0,c.useState)(!1),W=(0,s.Z)(L,2),H=W[0],Y=W[1],$=(0,h.TH)(),G=(0,h.s0)();(0,c.useEffect)((function(){setTimeout((function(){var e,n,t=null===(e=$.search)||void 0===e||null===(n=e.split("?"))||void 0===n?void 0:n[1],r=(0,l.mB)(t);null!==r&&void 0!==r&&r.cId&&((0,l.Rz)("search_acc_record",null===r||void 0===r?void 0:r.cId),(0,d.N$)(K)),(0,p.Ht)("comp_under_review","comp_under_review",ee)}),350)}),[$]),(0,c.useEffect)((function(){z||(k(!0),C((0,l.M5)()),(0,p._0)(ee),(0,p.ZX)(X))}));var J=function(){},K=function(){var e=(0,i.Z)({},(0,l.bh)("comprobante_by_doc"));(0,l.Rz)(I,e),(0,l.bh)("has_filter_review")&&q?(0,l.Rz)(I,j(e)):(0,l.bh)("has_filter_comp_error")&&Q&&(0,l.Rz)(I,N(e)),ee()},X=function(e){K(),(0,l.Rz)("comprobante_list",null),(0,l.Rz)("comprobante_by_doc",null),Y(!1)},ee=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C((0,l.M5)()),Y(!1);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),ne=function(e){if(null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){var n=(0,i.Z)({},e);n.initDate=n.initDate-100,n.lastDate=n.lastDate+864e5,(0,l.Rz)("date_range_comps",e)}(0,d.Ng)(K)},te=(null===(n=(0,l.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)&&(0,l.sJ)(null===(t=(0,l.bh)("date_range_comps"))||void 0===t?void 0:t.initDate)+"-"+(0,l.sJ)(null===(r=(0,l.bh)("date_range_comps"))||void 0===r?void 0:r.lastDate),re=function(){(0,b.OpenToast)({text:"Verificacion de comprobantes completada",timeout:3500}),(0,p.Ht)("comp_under_review","comp_under_review",ee)};return(0,_.jsxs)("div",{className:"",children:[(0,_.jsxs)("div",{className:"accounts_header",children:[(0,_.jsx)("h2",{children:"Comprobantes"}),(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){G({pathname:"/entries"})},children:"Agregar Comprobantes"}),(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,l.eY)("export_comprobantes_list_"+(0,l.M5)()+".csv",(0,d.bx)())},children:"Exportar a CSV"}),(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,d.n1)(re)},children:"Revisar Comprobantes"})]}),(0,_.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,_.jsx)(g,{placeholder:"Buscar ....",width:360,obs:C,fetchData:function(e){Y(!0),A((function(e){return 128})),(0,d.N$)(K)},loading:H,change:function(e){!H&&Y(!0)},callempty:X,keyFlds:"search_acc_record"}),(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("div",{className:"total_comprobante_title",children:"No de Comprobantes:"}),(0,_.jsx)("div",{className:"total_comprobante gray",children:(0,_.jsx)("span",{children:null===(u=(0,l._2)((0,l.bh)(I)))||void 0===u?void 0:u.length})})]})]})]}),(0,_.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:14,maxWidth:500},children:[(0,_.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:function(){var e,n,t={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};t.content=(0,_.jsx)(x,{onConfirm:ne,init:null===(e=(0,l.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(n=(0,l.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate,isRange:!0}),(0,f.OpenModal)(t)},children:[(0,_.jsx)("div",{className:"lbl date",children:te||"Fecha"}),(0,_.jsx)(w,{name:"calendar",color:"#66666"})]}),(0,l.bh)("has_filter_review")?(0,_.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":q?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":q?"var(--hrm_palette-color-orange-100)":"var(--hrm_palette-success-100)"},onClick:function(){var e=(0,i.Z)({},(0,l.bh)("comprobante_by_doc"));(0,l.Rz)(I,e),(0,l.bh)("has_filter_review")&&!q&&(0,l.Rz)(I,j(e)),M(!q)},children:[(0,_.jsx)("div",{className:"lbl",children:q?"En Revision":"Todos"}),(0,_.jsx)(w,{name:q?"alert":"success",color:"#66666"})]}):null,(0,l.bh)("has_filter_comp_error")?(0,_.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":Q?"var( --hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":Q?"var( --hrm_palette-selected-nav-text-100)":"var(--hrm_palette-success-100)",marginLeft:12},onClick:function(){var e=(0,i.Z)({},(0,l.bh)("comprobante_by_doc"));(0,l.Rz)(I,e),(0,l.bh)("has_filter_comp_error")&&!Q&&(0,l.Rz)(I,N(e)),V(!Q)},children:[(0,_.jsx)("div",{className:"lbl",children:Q?"Contiene errors":"OK"}),(0,_.jsx)(w,{name:Q?"alert":"success",color:"#66666"})]}):null,(0,_.jsx)("div",{className:"flexSpace"})]}),(0,_.jsxs)("div",{className:"accounts_container ",children:[(0,_.jsx)("div",{style:{height:55},children:(0,_.jsx)(Z,{})}),(0,l.bh)(I)&&(null===(v=(0,d.tS)((0,l.bh)(I),S))||void 0===v?void 0:v.map((function(e){return(0,_.jsx)(y,{data:(0,l.bh)(I)[e],elmId:e,openUpdateView:J,handleRefreshAll:X,inReview:q,hasError:Q,updRvw:C},e)}))),(0,l.bh)(I)&&(0,l._2)((0,l.bh)(I),S).length>S?(0,_.jsxs)("div",{className:"_dsplFlx ",style:{margin:"15px 0 35px"},children:[(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(){A((function(e){return e+128}))},children:"Cargar Mas"}),(0,_.jsx)("div",{className:"flexSpace"})]}):null]})]})};var Z=function(e){(0,r.Z)(e);var n=(0,c.useState)(!1),t=(0,s.Z)(n,2),a=t[0],o=t[1];return(0,_.jsxs)("div",{className:"header_tbl ".concat(a?"_floating":""),children:[(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,_.jsxs)("div",{className:"_dsplFlx tr_bar_90",children:[(0,_.jsx)("div",{className:" tr_bar_20",children:"Fecha"}),(0,_.jsx)("div",{className:" tr_bar_25",children:"Comprobante"}),(0,_.jsx)("div",{className:" tr_bar_55",children:"Descripcion"})]}),(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("div",{className:"icon tr_bar_5"})]}),(0,_.jsx)(m.Z,{scrollhandler:function(e){e>295?!a&&o(!0):a&&o(!1)}})]})};function j(e){var n=[];return(0,l._2)(e).map((function(t){var r,a,o=e[t];null!==(r=(0,l.bh)("comp_under_review"))&&void 0!==r&&null!==(a=r.inReview)&&void 0!==a&&a[null===o||void 0===o?void 0:o.comprobanteId]&&n.push(o)})),n}function N(e){var n=[];return(0,l._2)(e).map((function(t){var r,a,o=e[t];null!==(r=(0,l.bh)("comp_under_review"))&&void 0!==r&&null!==(a=r.hasError)&&void 0!==a&&a[null===o||void 0===o?void 0:o.comprobanteId]&&n.push(o)})),n}},3588:function(e,n,t){t.d(n,{Eb:function(){return h},Gg:function(){return p},N$:function(){return c},Ng:function(){return l},WB:function(){return u},bx:function(){return b},ly:function(){return s},n1:function(){return d},tS:function(){return f}});var r=t(4165),a=t(1413),o=t(5861),i=t(2350),s=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,s,c,l,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,a.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_opera)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,i.I7)(s),e.next=5,c;case 5:(l=e.sent)&&!l.error&&(u=Array.from(Array(12).keys()),d={},l.map((function(e){var n=e.account+"_"+(e.subAccount?e.subAccount:""),t=new Date(e.date).getMonth();d[n]||(d[n]={},u.map((function(e){d[n][e]=0}))),d[n][t]=1*(0,i.Zv)(d[n][t],2)+("credit"===e.type?-1*(0,i.Zv)(e.amount,2):1*(0,i.Zv)(e.amount,2))})),(0,i.Rz)("comprobante_list",m(l,"date",1)),(0,i.Rz)("comprobante_by_doc",v(l)),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,s,c,l,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,a.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":date1":null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.initDate,":date2":null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate,":search":(0,i.bh)("search_acc_record")},u=(0,i.I7)(l),e.next=5,u;case 5:d=e.sent,console.log(l.params),console.log(d),d&&!d.error&&((0,i.Rz)("comprobante_list",d),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(d))),n&&n());case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,s,c,l,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,a.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":date1":(null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.initDate)-10,":date2":null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate,":search":(0,i.bh)("search_acc_record")},u=(0,i.I7)(l),e.next=5,u;case 5:d=e.sent,console.log(l.params),console.log(d),d&&!d.error&&((0,i.Rz)("comprobante_list",d),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(d))),n&&n());case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n,t){var s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],n.map((function(e){var n,t,r=(0,a.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.delete_opera);r.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,operationId:e.operationId},s.push(r)})),c=s.map(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(c);case 5:t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,s,c,l,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((l=(0,a.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.vald_cmp)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,balanceId:null===(s=(0,i.bh)("comp_under_review"))||void 0===s?void 0:s.balanceId},null===(c=(0,i.bh)("comp_under_review"))||void 0===c||!c.balanceId){e.next=8;break}return u=(0,i.I7)(l),e.next=6,u;case 6:(d=e.sent)&&!d.error&&n&&n();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function v(e){var n={};return e.length>0?e.map((function(e){var t=e.date+"_"+e.comprobanteId;if(!n[t]){n[t]={};["date","description","entryName","comprobanteId"].forEach((function(r){n[t][r]=e[r]})),n[t].amount=0,n[t].balance=0,n[t].operations=[]}e.type&&n[t].operations.push(function(e){var n,t,r={};r.account=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.operationId=e.operationId,r.document=e.document,r.type=e.type;var a=(0,i.Zv)(e.amount,2);"credit"===e.type?(r.debit=0,r.credit=a):"debit"===e.type&&(r.credit=0,r.debit=a);return r}(e))})):n=null,p(n),n}function p(e){(0,i.Rz)("has_filter_review",null),(0,i.Rz)("has_filter_comp_error",null),(0,i._2)(e).map((function(n){var t,r,a,o;null!==(t=(0,i.bh)("comp_under_review"))&&void 0!==t&&null!==(r=t.inReview)&&void 0!==r&&r[e[n].comprobanteId]&&(0,i.Rz)("has_filter_review",!0),null!==(a=(0,i.bh)("comp_under_review"))&&void 0!==a&&null!==(o=a.hasError)&&void 0!==o&&o[e[n].comprobanteId]&&(0,i.Rz)("has_filter_comp_error",!0)}))}var h=function(e){return(0,i.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,t){var r=e[n],a=t[n];return r===a?t[a]-e[r]:a>r?1:-1}))}))},m=function(e,n,t){return e&&e.sort((function(e,r){var a=e[n],o=r[n];return a<o?t?-1:1:a>o?t?1:-1:0}))},f=function(e,n){return(0,i.MV)("rangeArr",[e,n],(function(){return e?(0,i._2)(e).slice(0,n):[]}))};function b(){return(0,i.bh)("comprobante_list").map((function(e){var n,t,r=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],a=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],o={fecha:(0,i.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,tipo_cuenta:e.type,importe:e.amount,cuenta:r.code+"",nombre:r.name};return a&&a.subAccount&&(o.sub_cuenta=a.subAccount,o.nombre_sub_cuenta=a.subAccountName),o}))}},1e3:function(){},4296:function(e,n,t){function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(n,{Z:function(){return r}})},1413:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=6419.e9472b96.chunk.js.map