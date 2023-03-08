/*! For license information please see 1118.12b5e643.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1118],{5281:function(e,s,l){var n=l(5671),a=l(3144),t=l(7326),i=l(136),r=l(7277),c=l(2791),o=l(184),d=function(e){(0,i.Z)(l,e);var s=(0,r.Z)(l);function l(){var e;return(0,n.Z)(this,l),(e=s.call(this)).state={scrollPosition:null},e.handleInterval=e.handleInterval.bind((0,t.Z)(e)),e.handleRequestAnimationFrame=e.handleRequestAnimationFrame.bind((0,t.Z)(e)),e}return(0,a.Z)(l,[{key:"componentWillMount",value:function(){this.intervalID=setInterval(this.handleInterval,50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}},{key:"getWindowScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop}},{key:"handleInterval",value:function(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}},{key:"handleRequestAnimationFrame",value:function(){var e=this.state.scrollPosition,s=this.getWindowScrollTop();s!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(s),this.setState({scrollPosition:s}))}},{key:"render",value:function(){return(0,o.jsx)(o.Fragment,{})}}]),l}(c.Component);s.Z=d},4366:function(e,s,l){l.r(s);var n=l(4296),a=l(4165),t=l(5861),i=l(1413),r=l(9439),c=l(2791),o=l(2350),d=l(2647),u=(l(5027),l(2927)),h=l(5288),v=l(4050),m=l(7689),_=l(5281),p=l(9760),f=l(1087),x=l(184),b=(0,d.h0)(),j=(0,d.Vg)(),g=(0,h.cn)(),N=(0,d.PU)(),Z=(0,d.tW)(),F="feedfMbls_2list";s.default=function(e){e.data,e.elmId,e.updObs;var s,l,n,d,h,_=(0,c.useState)(!1),D=(0,r.Z)(_,2),I=D[0],R=D[1],S=(0,c.useState)(0),M=(0,r.Z)(S,2),C=(M[0],M[1]),z=(0,c.useState)(128),T=(0,r.Z)(z,2),q=T[0],A=T[1],E=(0,c.useState)(!1),W=(0,r.Z)(E,2),O=W[0],B=W[1],P=(0,c.useState)(!1),H=(0,r.Z)(P,2),L=H[0],U=H[1],G=(0,c.useState)(!1),J=(0,r.Z)(G,2),V=J[0],K=J[1],X=(0,c.useState)(!1),Y=(0,r.Z)(X,2),Q=Y[0],$=Y[1],ee=(0,m.TH)();(0,m.s0)();(0,c.useEffect)((function(){setTimeout((function(){(0,v.Ht)("global_accounts","global_account_params",ae)}),350)}),[ee]),(0,c.useEffect)((function(){I||(R(!0),C((0,o.M5)()),(0,v._0)(ae),(0,v.ZX)(ne))}));var se=function(){},le=function(){var e=(0,i.Z)({},(0,o.bh)("feedfMbls_list"));(0,o.Rz)(F,e),(0,o.bh)("has_filter_review")&&O?(0,o.Rz)(F,k(e)):(0,o.bh)("has_filter_comp_error")&&L&&(0,o.Rz)(F,w(e)),ae()},ne=function(e){(0,u.bM)(ae),le(),(0,o.Rz)("feedfMbls_list",null),K(!1)},ae=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(s,l){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C((0,o.M5)()),K(!1),$(!1);case 3:case"end":return e.stop()}}),e)})));return function(s,l){return e.apply(this,arguments)}}(),te=function(e){if($(!0),null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){var s=(0,i.Z)({},e);s.initDate=s.initDate-100,s.lastDate=s.lastDate+8638e4,(0,o.Rz)("date_range_comps",s)}(0,u.lG)(le)},ie=(null===(s=(0,o.bh)("date_range_comps"))||void 0===s?void 0:s.initDate)&&(0,o.sJ)(null===(l=(0,o.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)+" - "+(0,o.sJ)(null===(n=(0,o.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate);return(0,x.jsxs)("div",{className:"",children:[(0,x.jsxs)("div",{className:"accounts_header",children:[(0,x.jsx)("h2",{children:"Movimientos de Ingresos y gastos desde la Applicacion mobile"}),(0,x.jsx)("div",{className:"_dsplFlx ",children:(0,x.jsx)(f.OL,{to:"/categories-mobile",children:(0,x.jsx)("p",{className:"group_title addBtn purple",children:"Categorias"})})}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,x.jsx)(j,{placeholder:"Buscar ....",width:360,obs:C,fetchData:function(e){A((function(e){return 128})),(0,u.lG)(le)},loading:V,change:function(e){!Q&&$(!0)},callempty:ne,keyFlds:"search_acc_record"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"total_comprobante_title",children:"No de Movimientos:"}),(0,x.jsx)("div",{className:"total_comprobante gray",children:(0,x.jsx)("span",{children:null===(d=(0,o._2)((0,o.bh)(F)))||void 0===d?void 0:d.length})})]})]})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:14,maxWidth:500},children:[(0,x.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:function(){var e,s,l={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,x.jsx)(b,{onConfirm:te,init:null===(e=(0,o.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(s=(0,o.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate,isRange:!0}),(0,p.OpenModal)(l)},children:[(0,x.jsx)("div",{className:"lbl date",children:ie||"Fecha"}),(0,x.jsx)(N,{name:"calendar",color:"#66666"})]}),(0,o.bh)("has_filter_review")?(0,x.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":O?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":O?"var(--hrm_palette-color-orange-100)":"var(--hrm_palette-success-100)"},onClick:function(){var e=(0,i.Z)({},(0,o.bh)("feedfMbls_list"));(0,o.Rz)(F,e),(0,o.bh)("has_filter_review")&&!O&&(0,o.Rz)(F,k(e)),B(!O)},children:[(0,x.jsx)("div",{className:"lbl",children:O?"En Revision":"Todos"}),(0,x.jsx)(N,{name:O?"alert":"success",color:"#66666"})]}):null,(0,o.bh)("has_filter_comp_error")?(0,x.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":L?"var( --hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":L?"var( --hrm_palette-selected-nav-text-100)":"var(--hrm_palette-success-100)",marginLeft:12},onClick:function(){var e=(0,i.Z)({},(0,o.bh)("feedfMbls_list"));(0,o.Rz)(F,e),(0,o.bh)("has_filter_comp_error")&&!L&&(0,o.Rz)(F,w(e)),U(!L)},children:[(0,x.jsx)("div",{className:"lbl",children:L?"Contiene errors":"OK"}),(0,x.jsx)(N,{name:L?"alert":"success",color:"#66666"})]}):null,(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"accounts_container ",children:[(0,x.jsx)("div",{style:{height:55},children:(0,x.jsx)(y,{})}),Q?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"load_animation"}),(0,x.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:32},children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:"icon_compr _dsplFlx",children:[(0,x.jsx)("div",{className:"lbl_saving",children:"Loading ..."}),(0,x.jsx)(Z,{stroke:"#646cff",size:24,strokeW:8})]}),(0,x.jsx)("div",{className:"flexSpace"})]})]}):(0,x.jsxs)("div",{children:[(0,o.bh)(F)&&(null===(h=(0,u.tS)((0,o.bh)(F),q))||void 0===h?void 0:h.map((function(e){return(0,x.jsx)(g,{data:(0,o.bh)(F)[e],elmId:e,openUpdateView:se,handleRefreshAll:ne,inReview:O,hasError:L,updRvw:C},e)}))),(0,o.bh)(F)&&(0,o._2)((0,o.bh)(F),q).length>q?(0,x.jsxs)("div",{className:"_dsplFlx ",style:{margin:"15px 0 35px"},children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("p",{className:"group_title addBtn purple",onClick:function(){A((function(e){return e+128}))},children:"Cargar Mas"}),(0,x.jsx)("div",{className:"flexSpace"})]}):null]})]})]})};var y=function(e){(0,n.Z)(e);var s=(0,c.useState)(!1),l=(0,r.Z)(s,2),a=l[0],t=l[1];return(0,x.jsxs)("div",{className:"header_tbl ".concat(a?"_floating":""),children:[(0,x.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,x.jsxs)("div",{className:"_dsplFlx tr_bar_90",children:[(0,x.jsx)("div",{className:" tr_bar_15",children:"Fecha"}),(0,x.jsx)("div",{className:" tr_bar_25",children:"Titulo"}),(0,x.jsx)("div",{className:" tr_bar_45",children:"Descripcion"}),(0,x.jsx)("div",{className:" tr_bar_15",children:"Importe"})]}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"icon tr_bar_5"}),(0,x.jsx)("div",{className:"icon tr_bar_5"})]}),(0,x.jsx)(_.Z,{scrollhandler:function(e){e>295?!a&&t(!0):a&&t(!1)}})]})};function k(e){var s=[];return(0,o._2)(e).map((function(l){var n,a,t=e[l];null!==(n=(0,o.bh)("comp_under_review"))&&void 0!==n&&null!==(a=n.inReview)&&void 0!==a&&a[null===t||void 0===t?void 0:t.comprobanteId]&&s.push(t)})),s}function w(e){var s=[];return(0,o._2)(e).map((function(l){var n,a,t=e[l];null!==(n=(0,o.bh)("comp_under_review"))&&void 0!==n&&null!==(a=n.hasError)&&void 0!==a&&a[null===t||void 0===t?void 0:t.comprobanteId]&&s.push(t)})),s}},5027:function(){},4296:function(e,s,l){function n(e){if(null==e)throw new TypeError("Cannot destructure "+e)}l.d(s,{Z:function(){return n}})}}]);
//# sourceMappingURL=1118.12b5e643.chunk.js.map