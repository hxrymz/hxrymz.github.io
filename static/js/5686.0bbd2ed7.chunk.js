/*! For license information please see 5686.0bbd2ed7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5686,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return s}});var r=t(2791),a=t(5408),o=t(2350),i=t(184),l="listDialog_mdh392",s=function(){var e=(0,o.bh)("listDialog")||{},n=((0,a.Z)(l),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:n.map((function(n,t){var a=e[n];if(a&&a.visible){var o={};a.height&&(o.heigth=a.height),a.width,a.zIndex&&(o.zIndex=a.zIndex-1);var l={zIndex:a.zIndex},s=null,c=a.data;return a.content&&(s=r.cloneElement(a.content,{data:c})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:l,id:n,children:s})}),a.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,o.bh)("listDialog")||{},t=(0,o.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,o.Rz)("listDialog",n),(0,o.wt)(l)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,o.Rz)("listDialog",n),(0,o.wt)(l),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)(l)}),125)},d=function(e){var n,t,r,a=(0,o.bh)("listDialog")||{},i=e.id;a[i]&&(a[i].observeResize&&a[i].observeInterval&&clearInterval(a[i].observeInterval),a[i].display=!1,null===(n=a[i])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",a),delete a[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(l),setTimeout((function(){delete a[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},5281:function(e,n,t){var r=t(5671),a=t(3144),o=t(7326),i=t(136),l=t(7277),s=t(2791),c=t(184),d=function(e){(0,i.Z)(t,e);var n=(0,l.Z)(t);function t(){var e;return(0,r.Z)(this,t),(e=n.call(this)).state={scrollPosition:null},e.handleInterval=e.handleInterval.bind((0,o.Z)(e)),e.handleRequestAnimationFrame=e.handleRequestAnimationFrame.bind((0,o.Z)(e)),e}return(0,a.Z)(t,[{key:"componentWillMount",value:function(){this.intervalID=setInterval(this.handleInterval,50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}},{key:"getWindowScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop}},{key:"handleInterval",value:function(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}},{key:"handleRequestAnimationFrame",value:function(){var e=this.state.scrollPosition,n=this.getWindowScrollTop();n!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(n),this.setState({scrollPosition:n}))}},{key:"render",value:function(){return(0,c.jsx)(c.Fragment,{})}}]),t}(s.Component);n.Z=d},5686:function(e,n,t){t.r(n);var r=t(4296),a=t(4165),o=t(5861),i=t(1413),l=t(9439),s=t(2791),c=t(2350),d=t(2647),u=(t(1e3),t(3588)),v=t(2692),p=t(4050),h=t(7689),m=t(5281),f=t(9760),_=(t(15),t(184)),b=(0,d.h0)(),x=(0,d.Vg)(),g=(0,v.LO)(),y=(0,d.PU)(),I=(0,d.tW)(),j="coll2list";n.default=function(e){e.data,e.elmId,e.updObs;var n,t,r,d,v,m=(0,s.useState)(!1),R=(0,l.Z)(m,2),z=R[0],D=R[1],k=(0,s.useState)(0),O=(0,l.Z)(k,2),F=(O[0],O[1]),S=(0,s.useState)(128),C=(0,l.Z)(S,2),E=C[0],T=C[1],B=(0,s.useState)(!1),P=(0,l.Z)(B,2),A=P[0],M=P[1],q=(0,s.useState)(!1),U=(0,l.Z)(q,2),W=U[0],L=U[1],V=(0,s.useState)(!1),Q=(0,l.Z)(V,2),H=Q[0],Y=Q[1],$=(0,s.useState)(!1),J=(0,l.Z)($,2),G=J[0],K=J[1],X=(0,h.TH)(),ee=(0,h.s0)();(0,s.useEffect)((function(){setTimeout((function(){var e,n,t=null===(e=X.search)||void 0===e||null===(n=e.split("?"))||void 0===n?void 0:n[1],r=(0,c.mB)(t);null!==r&&void 0!==r&&r.cId&&((0,c.Rz)("search_acc_record",null===r||void 0===r?void 0:r.cId),(0,u.N$)(te)),(0,p.Ht)("comp_under_review","comp_under_review",ae)}),350)}),[X]),(0,s.useEffect)((function(){z||(D(!0),F((0,c.M5)()),(0,p._0)(ae),(0,p.ZX)(re))}));var ne=function(){},te=function(){var e=(0,i.Z)({},(0,c.bh)("comprobante_by_doc"));(0,c.Rz)(j,e),(0,c.bh)("has_filter_review")&&A?(0,c.Rz)(j,Z(e)):(0,c.bh)("has_filter_comp_error")&&W&&(0,c.Rz)(j,N(e)),ae()},re=function(e){te(),(0,c.Rz)("comprobante_list",null),(0,c.Rz)("comprobante_by_doc",null),Y(!1)},ae=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F((0,c.M5)()),Y(!1),K(!1);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),oe=function(e){if(K(!0),null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){var n=(0,i.Z)({},e);n.initDate=n.initDate-100,n.lastDate=n.lastDate+8638e4,(0,c.Rz)("date_range_comps",n)}(0,u.Ng)(te)},ie=(null===(n=(0,c.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)&&(0,c.sJ)(null===(t=(0,c.bh)("date_range_comps"))||void 0===t?void 0:t.initDate)+" - "+(0,c.sJ)(null===(r=(0,c.bh)("date_range_comps"))||void 0===r?void 0:r.lastDate);return(0,_.jsxs)("div",{className:"",children:[(0,_.jsxs)("div",{className:"accounts_header",children:[(0,_.jsx)("h2",{children:"Comprobantes"}),(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){ee({pathname:"/entries"})},children:"Agregar Comprobantes"}),(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,u.ly)(ae)},children:"Revisar Comprobantes"})]}),(0,_.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,_.jsx)(x,{placeholder:"Buscar ....",width:360,obs:F,fetchData:function(e){T((function(e){return 128})),(0,u.N$)(te)},loading:H,change:function(e){!G&&K(!0)},callempty:re,keyFlds:"search_acc_record"}),(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsxs)("div",{className:"_dsplFlx ",children:[(0,_.jsx)("div",{className:"total_comprobante_title",children:"No de Comprobantes:"}),(0,_.jsx)("div",{className:"total_comprobante gray",children:(0,_.jsx)("span",{children:null===(d=(0,c._2)((0,c.bh)(j)))||void 0===d?void 0:d.length})})]})]})]}),(0,_.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:14,maxWidth:500},children:[(0,_.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:function(){var e,n,t={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};t.content=(0,_.jsx)(b,{onConfirm:oe,init:null===(e=(0,c.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(n=(0,c.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate,isRange:!0}),(0,f.OpenModal)(t)},children:[(0,_.jsx)("div",{className:"lbl date",children:ie||"Fecha"}),(0,_.jsx)(y,{name:"calendar",color:"#66666"})]}),(0,c.bh)("has_filter_review")?(0,_.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":A?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":A?"var(--hrm_palette-color-orange-100)":"var(--hrm_palette-success-100)"},onClick:function(){var e=(0,i.Z)({},(0,c.bh)("comprobante_by_doc"));(0,c.Rz)(j,e),(0,c.bh)("has_filter_review")&&!A&&(0,c.Rz)(j,Z(e)),M(!A)},children:[(0,_.jsx)("div",{className:"lbl",children:A?"En Revision":"Todos"}),(0,_.jsx)(y,{name:A?"alert":"success",color:"#66666"})]}):null,(0,c.bh)("has_filter_comp_error")?(0,_.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":W?"var( --hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":W?"var( --hrm_palette-selected-nav-text-100)":"var(--hrm_palette-success-100)",marginLeft:12},onClick:function(){var e=(0,i.Z)({},(0,c.bh)("comprobante_by_doc"));(0,c.Rz)(j,e),(0,c.bh)("has_filter_comp_error")&&!W&&(0,c.Rz)(j,N(e)),L(!W)},children:[(0,_.jsx)("div",{className:"lbl",children:W?"Contiene errors":"OK"}),(0,_.jsx)(y,{name:W?"alert":"success",color:"#66666"})]}):null,(0,_.jsx)("div",{className:"flexSpace"})]}),(0,_.jsxs)("div",{className:"accounts_container ",children:[(0,_.jsx)("div",{style:{height:55},children:(0,_.jsx)(w,{})}),G?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"load_animation"}),(0,_.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:32},children:[(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsxs)("div",{className:"icon_compr _dsplFlx",children:[(0,_.jsx)("div",{className:"lbl_saving",children:"Loading ..."}),(0,_.jsx)(I,{stroke:"#646cff",size:24,strokeW:8})]}),(0,_.jsx)("div",{className:"flexSpace"})]})]}):(0,_.jsxs)("div",{children:[(0,c.bh)(j)&&(null===(v=(0,u.tS)((0,c.bh)(j),E))||void 0===v?void 0:v.map((function(e){return(0,_.jsx)(g,{data:(0,c.bh)(j)[e],elmId:e,openUpdateView:ne,handleRefreshAll:re,inReview:A,hasError:W,updRvw:F},e)}))),(0,c.bh)(j)&&(0,c._2)((0,c.bh)(j),E).length>E?(0,_.jsxs)("div",{className:"_dsplFlx ",style:{margin:"15px 0 35px"},children:[(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("p",{className:"group_title addBtn purple",onClick:function(){T((function(e){return e+128}))},children:"Cargar Mas"}),(0,_.jsx)("div",{className:"flexSpace"})]}):null]})]})]})};var w=function(e){(0,r.Z)(e);var n=(0,s.useState)(!1),t=(0,l.Z)(n,2),a=t[0],o=t[1];return(0,_.jsxs)("div",{className:"header_tbl ".concat(a?"_floating":""),children:[(0,_.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,_.jsxs)("div",{className:"_dsplFlx tr_bar_90",children:[(0,_.jsx)("div",{className:" tr_bar_20",children:"Fecha"}),(0,_.jsx)("div",{className:" tr_bar_25",children:"Comprobante"}),(0,_.jsx)("div",{className:" tr_bar_55",children:"Descripcion"})]}),(0,_.jsx)("div",{className:"flexSpace"}),(0,_.jsx)("div",{className:"icon tr_bar_5"})]}),(0,_.jsx)(m.Z,{scrollhandler:function(e){e>295?!a&&o(!0):a&&o(!1)}})]})};function Z(e){var n=[];return(0,c._2)(e).map((function(t){var r,a,o=e[t];null!==(r=(0,c.bh)("comp_under_review"))&&void 0!==r&&null!==(a=r.inReview)&&void 0!==a&&a[null===o||void 0===o?void 0:o.comprobanteId]&&n.push(o)})),n}function N(e){var n=[];return(0,c._2)(e).map((function(t){var r,a,o,i=e[t];(null!==(r=(0,c.bh)("comp_under_review"))&&void 0!==r&&null!==(a=r.hasError)&&void 0!==a&&a[null===i||void 0===i?void 0:i.comprobanteId]||null!==(o=(0,c.bh)("comprobante_w_erros"))&&void 0!==o&&o[null===i||void 0===i?void 0:i.comprobanteId])&&n.push(i)})),n}},3588:function(e,n,t){t.d(n,{Eb:function(){return h},Gg:function(){return p},N$:function(){return s},Ng:function(){return d},WB:function(){return u},ly:function(){return l},tS:function(){return m}});var r=t(4165),a=t(1413),o=t(5861),i=t(2350),l=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,l,s,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,a.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_opera)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId},s=(0,i.I7)(l),e.next=5,s;case 5:(d=e.sent)&&!d.error&&(c(d),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,l,s,c,d,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,a.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":date1":null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.initDate,":date2":null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate},(0,i.bh)("search_acc_record").split(" ").map((function(e,n){e&&(c.params[":search"+n]=e.trim())})),d=(0,i.I7)(c),e.next=6,d;case 6:(u=e.sent)&&!u.error&&((0,i.Rz)("comprobante_list",u),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(u))),n&&n());case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,a,o,l,s,c,d,u,v,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l in 0,t={},a={},o={},n)c=n[l],(d=null===(s=(0,i.bh)("account_ids"))||void 0===s?void 0:s[c.account])&&((0,i.UE)(o[null===d||void 0===d?void 0:d.accountId])||(o[null===d||void 0===d?void 0:d.accountId]={saldo:0,name:(null===d||void 0===d?void 0:d.code)+" - "+(null===d||void 0===d?void 0:d.name),list:[]}),(0,i.UE)(t[c.comprobanteId])||(t[c.comprobanteId]=0,a[c.comprobanteId]=[]),u=1*(0,i.Zv)(("debit"===c.type?1:-1)*c.amount,2),o[null===d||void 0===d?void 0:d.accountId].saldo=1*(0,i.Zv)(o[d.accountId].saldo,2)+1*u,o[null===d||void 0===d?void 0:d.accountId].list.push([c.comprobanteId,u]),t[c.comprobanteId]=1*(0,i.Zv)(t[c.comprobanteId],2)+u,a[c.comprobanteId].push({ammount:u,operationId:c.comprobanteId}));for(p in v=null,t)t[p]&&(v||(v={}),v[p]=1);v&&((0,i.Rz)("comprobante_w_erros",v),(0,i.Rz)("has_filter_comp_error",!0));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,l,s,d,u,p,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,a.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":date1":(null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)-10,":date2":null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate},u=(0,i.I7)(d),e.next=5,u;case 5:(p=e.sent)&&!p.error&&((0,i.Rz)("comprobante_list",p),h=[],(0,i.bh)("comprobante_all_list")&&(0,i.bh)("comprobante_all_list").map((function(e){p[e.operationId]||console.log(e)})),p&&(0,i._2)(p).map((function(e){var n,t;p[e].account&&p[e].date>(null===(n=(0,i.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)-10&&p[e].date<=(null===(t=(0,i.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate)&&h.push(p[e])})),(0,i.Rz)("comprobante_by_doc",v(h)),c(h),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n,t){var l,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=[],n.map((function(e){var n,t,r=(0,a.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.delete_opera);r.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,operationId:e.operationId},l.push(r)})),s=l.map(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(s);case 5:t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function v(e){var n={};return e.length>0?e.map((function(e){var t=e.date;if(t&&e.account){var r=t+"_"+e.comprobanteId;if(!n[r]){n[r]={};["date","description","entryName","comprobanteId","employeeId"].forEach((function(t){n[r][t]=e[t]})),n[r].amount=0,n[r].balance=0,n[r].operations=[]}e.type&&n[r].operations.push(function(e){var n,t,r={};r.account=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.operationId=e.operationId,r.document=e.document,r.type=e.type;var a=(0,i.Zv)(e.amount,2);"credit"===e.type?(r.debit=0,r.credit=a):"debit"===e.type&&(r.credit=0,r.debit=a);return r}(e))}})):n=null,n}function p(e){(0,i.Rz)("has_filter_review",null),(0,i.Rz)("has_filter_comp_error",null),(0,i._2)(e).map((function(n){var t,r,a,o;null!==(t=(0,i.bh)("comp_under_review"))&&void 0!==t&&null!==(r=t.inReview)&&void 0!==r&&r[e[n].comprobanteId]&&(0,i.Rz)("has_filter_review",!0),null!==(a=(0,i.bh)("comp_under_review"))&&void 0!==a&&null!==(o=a.hasError)&&void 0!==o&&o[e[n].comprobanteId]&&(0,i.Rz)("has_filter_comp_error",!0)}))}var h=function(e){return(0,i.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,t){var r=e[n],a=t[n];return r===a?t[a]-e[r]:a>r?1:-1}))}))},m=function(e,n){return(0,i.MV)("rangeArr",[e,n],(function(){return e?(0,i._2)(e).slice(0,n):[]}))}},1e3:function(){},4296:function(e,n,t){function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(n,{Z:function(){return r}})},1413:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=5686.0bbd2ed7.chunk.js.map