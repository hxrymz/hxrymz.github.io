"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7802],{5686:function(e,n,r){r.r(n);var t=r(4296),a=r(4165),o=r(5861),c=r(1413),i=r(9439),s=r(2791),l=r(2350),u=r(2647),d=(r(1e3),r(3588)),p=r(2692),v=r(4050),_=r(7689),m=r(5281),h=r(9760),f=r(15),b=r(184),x=(0,u.h0)(),Z=(0,u.Vg)(),g=(0,p.LO)(),j=(0,u.PU)(),y="coll2list";n.default=function(e){e.data,e.elmId,e.updObs;var n,r,t,u,p,m=(0,s.useState)(!1),R=(0,i.Z)(m,2),k=R[0],z=R[1],C=(0,s.useState)(0),D=(0,i.Z)(C,2),S=(D[0],D[1]),F=(0,s.useState)(128),A=(0,i.Z)(F,2),E=A[0],B=A[1],M=(0,s.useState)(!1),T=(0,i.Z)(M,2),U=T[0],Q=T[1],V=(0,s.useState)(!1),O=(0,i.Z)(V,2),H=O[0],$=O[1],G=(0,s.useState)(!1),J=(0,i.Z)(G,2),L=J[0],P=J[1],W=(0,_.TH)(),K=(0,_.s0)();(0,s.useEffect)((function(){setTimeout((function(){var e,n,r=null===(e=W.search)||void 0===e||null===(n=e.split("?"))||void 0===n?void 0:n[1],t=(0,l.mB)(r);null!==t&&void 0!==t&&t.cId&&((0,l.Rz)("search_acc_record",null===t||void 0===t?void 0:t.cId),(0,d.N$)(Y)),(0,v.Ht)("comp_under_review","comp_under_review",ee)}),350)}),[W]),(0,s.useEffect)((function(){k||(z(!0),S((0,l.M5)()),(0,v._0)(ee),(0,v.ZX)(q))}));var X=function(){},Y=function(){var e=(0,c.Z)({},(0,l.bh)("comprobante_by_doc"));(0,l.Rz)(y,e),(0,l.bh)("has_filter_review")&&U?(0,l.Rz)(y,N(e)):(0,l.bh)("has_filter_comp_error")&&H&&(0,l.Rz)(y,I(e)),ee()},q=function(e){Y(),(0,l.Rz)("comprobante_list",null),(0,l.Rz)("comprobante_by_doc",null),P(!1)},ee=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S((0,l.M5)()),P(!1);case 2:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),ne=function(e){if(null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){var n=(0,c.Z)({},e);n.initDate=n.initDate-100,n.lastDate=n.lastDate+8638e4,(0,l.Rz)("date_range_comps",n)}(0,d.Ng)(Y)},re=(null===(n=(0,l.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)&&(0,l.sJ)(null===(r=(0,l.bh)("date_range_comps"))||void 0===r?void 0:r.initDate)+"-"+(0,l.sJ)(null===(t=(0,l.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate),te=function(){(0,f.OpenToast)({text:"Verificacion de comprobantes completada",timeout:3500}),(0,v.Ht)("comp_under_review","comp_under_review",ee)};return(0,b.jsxs)("div",{className:"",children:[(0,b.jsxs)("div",{className:"accounts_header",children:[(0,b.jsx)("h2",{children:"Comprobantes"}),(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){K({pathname:"/entries"})},children:"Agregar Comprobantes"}),(0,b.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,l.eY)("export_comprobantes_list_"+(0,l.M5)()+".csv",(0,d.bx)())},children:"Exportar a CSV"}),(0,b.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,d.n1)(te)},children:"Revisar Comprobantes"})]}),(0,b.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,b.jsx)(Z,{placeholder:"Buscar ....",width:360,obs:S,fetchData:function(e){P(!0),B((function(e){return 128})),(0,d.N$)(Y)},loading:L,change:function(e){!L&&P(!0)},callempty:q,keyFlds:"search_acc_record"}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsx)("div",{className:"total_comprobante_title",children:"No de Comprobantes:"}),(0,b.jsx)("div",{className:"total_comprobante gray",children:(0,b.jsx)("span",{children:null===(u=(0,l._2)((0,l.bh)(y)))||void 0===u?void 0:u.length})})]})]})]}),(0,b.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:14,maxWidth:500},children:[(0,b.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:function(){var e,n,r={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};r.content=(0,b.jsx)(x,{onConfirm:ne,init:null===(e=(0,l.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(n=(0,l.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate,isRange:!0}),(0,h.OpenModal)(r)},children:[(0,b.jsx)("div",{className:"lbl date",children:re||"Fecha"}),(0,b.jsx)(j,{name:"calendar",color:"#66666"})]}),(0,l.bh)("has_filter_review")?(0,b.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":U?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":U?"var(--hrm_palette-color-orange-100)":"var(--hrm_palette-success-100)"},onClick:function(){var e=(0,c.Z)({},(0,l.bh)("comprobante_by_doc"));(0,l.Rz)(y,e),(0,l.bh)("has_filter_review")&&!U&&(0,l.Rz)(y,N(e)),Q(!U)},children:[(0,b.jsx)("div",{className:"lbl",children:U?"En Revision":"Todos"}),(0,b.jsx)(j,{name:U?"alert":"success",color:"#66666"})]}):null,(0,l.bh)("has_filter_comp_error")?(0,b.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":H?"var( --hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":H?"var( --hrm_palette-selected-nav-text-100)":"var(--hrm_palette-success-100)",marginLeft:12},onClick:function(){var e=(0,c.Z)({},(0,l.bh)("comprobante_by_doc"));(0,l.Rz)(y,e),(0,l.bh)("has_filter_comp_error")&&!H&&(0,l.Rz)(y,I(e)),$(!H)},children:[(0,b.jsx)("div",{className:"lbl",children:H?"Contiene errors":"OK"}),(0,b.jsx)(j,{name:H?"alert":"success",color:"#66666"})]}):null,(0,b.jsx)("div",{className:"flexSpace"})]}),(0,b.jsxs)("div",{className:"accounts_container ",children:[(0,b.jsx)("div",{style:{height:55},children:(0,b.jsx)(w,{})}),(0,l.bh)(y)&&(null===(p=(0,d.tS)((0,l.bh)(y),E))||void 0===p?void 0:p.map((function(e){return(0,b.jsx)(g,{data:(0,l.bh)(y)[e],elmId:e,openUpdateView:X,handleRefreshAll:q,inReview:U,hasError:H,updRvw:S},e)}))),(0,l.bh)(y)&&(0,l._2)((0,l.bh)(y),E).length>E?(0,b.jsxs)("div",{className:"_dsplFlx ",style:{margin:"15px 0 35px"},children:[(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsx)("p",{className:"group_title addBtn purple",onClick:function(){B((function(e){return e+128}))},children:"Cargar Mas"}),(0,b.jsx)("div",{className:"flexSpace"})]}):null]})]})};var w=function(e){(0,t.Z)(e);var n=(0,s.useState)(!1),r=(0,i.Z)(n,2),a=r[0],o=r[1];return(0,b.jsxs)("div",{className:"header_tbl ".concat(a?"_floating":""),children:[(0,b.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,b.jsxs)("div",{className:"_dsplFlx tr_bar_90",children:[(0,b.jsx)("div",{className:" tr_bar_20",children:"Fecha"}),(0,b.jsx)("div",{className:" tr_bar_25",children:"Comprobante"}),(0,b.jsx)("div",{className:" tr_bar_55",children:"Descripcion"})]}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsx)("div",{className:"icon tr_bar_5"})]}),(0,b.jsx)(m.Z,{scrollhandler:function(e){e>295?!a&&o(!0):a&&o(!1)}})]})};function N(e){var n=[];return(0,l._2)(e).map((function(r){var t,a,o=e[r];null!==(t=(0,l.bh)("comp_under_review"))&&void 0!==t&&null!==(a=t.inReview)&&void 0!==a&&a[null===o||void 0===o?void 0:o.comprobanteId]&&n.push(o)})),n}function I(e){var n=[];return(0,l._2)(e).map((function(r){var t,a,o=e[r];null!==(t=(0,l.bh)("comp_under_review"))&&void 0!==t&&null!==(a=t.hasError)&&void 0!==a&&a[null===o||void 0===o?void 0:o.comprobanteId]&&n.push(o)})),n}},3588:function(e,n,r){r.d(n,{Eb:function(){return _},Gg:function(){return v},N$:function(){return s},Ng:function(){return l},WB:function(){return u},bx:function(){return f},ly:function(){return i},n1:function(){return d},tS:function(){return h}});var t=r(4165),a=r(1413),o=r(5861),c=r(2350),i=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o,i,s,l,u,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,a.Z)({},null===(r=(0,c.bh)((0,c.hQ)()))||void 0===r?void 0:r.all_opera)).params={businessId:null===(o=(0,c.bh)("profileUser"))||void 0===o?void 0:o.businessId},s=(0,c.I7)(i),e.next=5,s;case 5:(l=e.sent)&&!l.error&&(u=Array.from(Array(12).keys()),d={},l.map((function(e){var n=e.account+"_"+(e.subAccount?e.subAccount:""),r=new Date(e.date).getMonth();d[n]||(d[n]={},u.map((function(e){d[n][e]=0}))),d[n][r]=1*(0,c.Zv)(d[n][r],2)+("credit"===e.type?-1*(0,c.Zv)(e.amount,2):1*(0,c.Zv)(e.amount,2))})),(0,c.Rz)("comprobante_list",m(l,"date",1)),(0,c.Rz)("comprobante_by_doc",p(l)),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o,i,s,l,u,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,a.Z)({},null===(r=(0,c.bh)((0,c.hQ)()))||void 0===r?void 0:r.filter_search_opera)).params={businessId:null===(o=(0,c.bh)("profileUser"))||void 0===o?void 0:o.businessId,":date1":null===(i=(0,c.bh)("date_range_comps"))||void 0===i?void 0:i.initDate,":date2":null===(s=(0,c.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate},(0,c.bh)("search_acc_record").split(" ").map((function(e,n){e&&(l.params[":search"+n]=e.trim())})),u=(0,c.I7)(l),e.next=6,u;case 6:(d=e.sent)&&!d.error&&((0,c.Rz)("comprobante_list",d),(0,c.Rz)("comprobante_by_doc",p((0,c.jQ)(d))),n&&n());case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o,i,s,l,u,d,v;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,a.Z)({},null===(r=(0,c.bh)((0,c.hQ)()))||void 0===r?void 0:r.filter_search_opera)).params={businessId:null===(o=(0,c.bh)("profileUser"))||void 0===o?void 0:o.businessId,":date1":(null===(i=(0,c.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(s=(0,c.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate},(0,c.bh)("search_acc_record").split(" ").map((function(e,n){e&&(l.params[":search"+(n+1)]=e.trim())})),u=(0,c.I7)(l),e.next=6,u;case 6:(d=e.sent)&&!d.error&&((0,c.Rz)("comprobante_list",d),v=[],d&&(0,c._2)(d).map((function(e){var n,r;d[e].date>(null===(n=(0,c.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)-10&&d[e].date<=(null===(r=(0,c.bh)("date_range_comps"))||void 0===r?void 0:r.lastDate)&&v.push(d[e])})),(0,c.Rz)("comprobante_by_doc",p(v)),n&&n());case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n,r){var i,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n.map((function(e){var n,r,t=(0,a.Z)({},null===(n=(0,c.bh)((0,c.hQ)()))||void 0===n?void 0:n.delete_opera);t.params={businessId:null===(r=(0,c.bh)("profileUser"))||void 0===r?void 0:r.businessId,operationId:e.operationId},i.push(t)})),s=i.map(function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,c.I7)(n),e.next=3,r;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(s);case 5:r&&r();case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o,i,s,l,u,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((l=(0,a.Z)({},null===(r=(0,c.bh)((0,c.hQ)()))||void 0===r?void 0:r.vald_cmp)).params={businessId:null===(o=(0,c.bh)("profileUser"))||void 0===o?void 0:o.businessId,balanceId:null===(i=(0,c.bh)("comp_under_review"))||void 0===i?void 0:i.balanceId},null===(s=(0,c.bh)("comp_under_review"))||void 0===s||!s.balanceId){e.next=8;break}return u=(0,c.I7)(l),e.next=6,u;case 6:(d=e.sent)&&!d.error&&n&&n();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function p(e){var n={};return e.length>0?e.map((function(e){var r=e.date+"_"+e.comprobanteId;if(!n[r]){n[r]={};["date","description","entryName","comprobanteId","employeeId"].forEach((function(t){n[r][t]=e[t]})),n[r].amount=0,n[r].balance=0,n[r].operations=[]}e.type&&n[r].operations.push(function(e){var n,r,t={};t.account=null===(n=(0,c.bh)("account_ids"))||void 0===n?void 0:n[e.account],t.sub_account=null===(r=(0,c.bh)("sub_account_ids"))||void 0===r?void 0:r[e.subAccount],t.comprobanteId=e.comprobanteId,t.operationId=e.operationId,t.document=e.document,t.type=e.type;var a=(0,c.Zv)(e.amount,2);"credit"===e.type?(t.debit=0,t.credit=a):"debit"===e.type&&(t.credit=0,t.debit=a);return t}(e))})):n=null,v(n),n}function v(e){(0,c.Rz)("has_filter_review",null),(0,c.Rz)("has_filter_comp_error",null),(0,c._2)(e).map((function(n){var r,t,a,o;null!==(r=(0,c.bh)("comp_under_review"))&&void 0!==r&&null!==(t=r.inReview)&&void 0!==t&&t[e[n].comprobanteId]&&(0,c.Rz)("has_filter_review",!0),null!==(a=(0,c.bh)("comp_under_review"))&&void 0!==a&&null!==(o=a.hasError)&&void 0!==o&&o[e[n].comprobanteId]&&(0,c.Rz)("has_filter_comp_error",!0)}))}var _=function(e){return(0,c.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,r){var t=e[n],a=r[n];return t===a?r[a]-e[t]:a>t?1:-1}))}))},m=function(e,n,r){return e&&e.sort((function(e,t){var a=e[n],o=t[n];return a<o?r?-1:1:a>o?r?1:-1:0}))},h=function(e,n){return(0,c.MV)("rangeArr",[e,n],(function(){return e?(0,c._2)(e).slice(0,n):[]}))};function f(){return(0,c.bh)("comprobante_list").map((function(e){var n,r,t=null===(n=(0,c.bh)("account_ids"))||void 0===n?void 0:n[e.account],a=null===(r=(0,c.bh)("sub_account_ids"))||void 0===r?void 0:r[e.subAccount],o={fecha:(0,c.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,tipo_cuenta:e.type,importe:e.amount,cuenta:t.code+"",nombre:t.name};return a&&a.subAccount&&(o.sub_cuenta=a.subAccount,o.nombre_sub_cuenta=a.subAccountName),o}))}},1e3:function(){},4296:function(e,n,r){function t(e){if(null==e)throw new TypeError("Cannot destructure "+e)}r.d(n,{Z:function(){return t}})}}]);
//# sourceMappingURL=7802.dc0646c6.chunk.js.map