"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5176,9760],{9760:function(e,n,a){a.r(n),a.d(n,{CloseModal:function(){return u},OpenModal:function(){return l},default:function(){return c}});var t=a(2791),r=a(5408),i=a(2350),o=a(184),s="listDialog_mdh392",c=function(){var e=(0,i.bh)("listDialog")||{},n=((0,r.Z)(s),Object.keys(e));return(0,o.jsx)(o.Fragment,{children:n.map((function(n,a){var r=e[n];if(r&&r.visible){var i={};r.height&&(i.heigth=r.height),r.width,r.zIndex&&(i.zIndex=r.zIndex-1);var s={zIndex:r.zIndex},c=null,l=r.data;return r.content&&(c=t.cloneElement(r.content,{data:l})),(0,o.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,o.jsx)("div",{className:"ltr-hoe9xz",children:(0,o.jsx)("div",{className:"ltr-1wao6ny",style:s,id:n,children:c})}),r.data.overlay?(0,o.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:e})}}):null]},n)}}))})},l=function(e){var n=(0,i.bh)("listDialog")||{},a=(0,i.M5)();n[a]||(n[a]={}),n[a].visible=!0;var t={};e.props?(t=e.props).modalID=a:t.modalID=a;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[a].isView=e.isView,n[a].observeResize=e.observeResize,n[a].observeResize&&(n[a].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(a,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===n[a].width&&t.height===n[a].height||(n[a].height=t.height+10,n[a].width=t.width,(0,i.Rz)("listDialog",n),(0,i.wt)(s)))}),200)),n[a].display=!0,e.zIndex&&(n[a].zIndex=e.zIndex),e.height&&(n[a].height=e.height),e.width&&(n[a].width=e.width),e.content&&(n[a].content=e.content),n[a].data=t,(0,i.Rz)("listDialog",n),(0,i.wt)(s),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",a),(0,i.wt)(s)}),125)},u=function(e){var n,a,t,r=(0,i.bh)("listDialog")||{},o=e.id;r[o]&&(r[o].observeResize&&r[o].observeInterval&&clearInterval(r[o].observeInterval),r[o].display=!1,null===(n=r[o])||void 0===n||null===(a=n.data)||void 0===a||null===(t=a.closeEvent)||void 0===t||t.call(a),(0,i.Rz)("listDialog",r),delete r[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(s),setTimeout((function(){delete r[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},3588:function(e,n,a){a.d(n,{Eb:function(){return h},Gg:function(){return p},N$:function(){return c},Ng:function(){return l},WB:function(){return u},bx:function(){return f},ly:function(){return s},n1:function(){return d},tS:function(){return b}});var t=a(4165),r=a(1413),i=a(5861),o=a(2350),s=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var a,i,s,c,l,u,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,r.Z)({},null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.all_opera)).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,o.I7)(s),e.next=5,c;case 5:(l=e.sent)&&!l.error&&(u=Array.from(Array(12).keys()),d={},l.map((function(e){var n=e.account+"_"+(e.subAccount?e.subAccount:""),a=new Date(e.date).getMonth();d[n]||(d[n]={},u.map((function(e){d[n][e]=0}))),d[n][a]=1*(0,o.Zv)(d[n][a],2)+("credit"===e.type?-1*(0,o.Zv)(e.amount,2):1*(0,o.Zv)(e.amount,2))})),(0,o.Rz)("comprobante_list",m(l,"date",1)),(0,o.Rz)("comprobante_by_doc",v(l)),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var a,i,s,c,l,u,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,r.Z)({},null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":date1":null===(s=(0,o.bh)("date_range_comps"))||void 0===s?void 0:s.initDate,":date2":null===(c=(0,o.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate,":search":(0,o.bh)("search_acc_record")},u=(0,o.I7)(l),e.next=5,u;case 5:d=e.sent,console.log(l.params),console.log(d),d&&!d.error&&((0,o.Rz)("comprobante_list",d),(0,o.Rz)("comprobante_by_doc",v((0,o.jQ)(d))),n&&n());case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var a,i,s,c,l,u,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,r.Z)({},null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":date1":(null===(s=(0,o.bh)("date_range_comps"))||void 0===s?void 0:s.initDate)-10,":date2":null===(c=(0,o.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate,":search":(0,o.bh)("search_acc_record")},u=(0,o.I7)(l),e.next=5,u;case 5:d=e.sent,console.log(l.params),console.log(d),d&&!d.error&&((0,o.Rz)("comprobante_list",d),(0,o.Rz)("comprobante_by_doc",v((0,o.jQ)(d))),n&&n());case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,a){var s,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],n.map((function(e){var n,a,t=(0,r.Z)({},null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.delete_opera);t.params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,operationId:e.operationId},s.push(t)})),c=s.map(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,o.I7)(n),e.next=3,a;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(c);case 5:a&&a();case 6:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var a,i,s,c,l,u,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((l=(0,r.Z)({},null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.vald_cmp)).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,balanceId:null===(s=(0,o.bh)("comp_under_review"))||void 0===s?void 0:s.balanceId},null===(c=(0,o.bh)("comp_under_review"))||void 0===c||!c.balanceId){e.next=8;break}return u=(0,o.I7)(l),e.next=6,u;case 6:(d=e.sent)&&!d.error&&n&&n();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function v(e){var n={};return e.length>0?e.map((function(e){var a=e.date+"_"+e.comprobanteId;if(!n[a]){n[a]={};["date","description","entryName","comprobanteId"].forEach((function(t){n[a][t]=e[t]})),n[a].amount=0,n[a].balance=0,n[a].operations=[]}e.type&&n[a].operations.push(function(e){var n,a,t={};t.account=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[e.account],t.sub_account=null===(a=(0,o.bh)("sub_account_ids"))||void 0===a?void 0:a[e.subAccount],t.comprobanteId=e.comprobanteId,t.operationId=e.operationId,t.document=e.document,t.type=e.type;var r=(0,o.Zv)(e.amount,2);"credit"===e.type?(t.debit=0,t.credit=r):"debit"===e.type&&(t.credit=0,t.debit=r);return t}(e))})):n=null,p(n),n}function p(e){(0,o.Rz)("has_filter_review",null),(0,o.Rz)("has_filter_comp_error",null),(0,o._2)(e).map((function(n){var a,t,r,i;null!==(a=(0,o.bh)("comp_under_review"))&&void 0!==a&&null!==(t=a.inReview)&&void 0!==t&&t[e[n].comprobanteId]&&(0,o.Rz)("has_filter_review",!0),null!==(r=(0,o.bh)("comp_under_review"))&&void 0!==r&&null!==(i=r.hasError)&&void 0!==i&&i[e[n].comprobanteId]&&(0,o.Rz)("has_filter_comp_error",!0)}))}var h=function(e){return(0,o.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,a){var t=e[n],r=a[n];return t===r?a[r]-e[t]:r>t?1:-1}))}))},m=function(e,n,a){return e&&e.sort((function(e,t){var r=e[n],i=t[n];return r<i?a?-1:1:r>i?a?1:-1:0}))},b=function(e,n){return(0,o.MV)("rangeArr",[e,n],(function(){return e?(0,o._2)(e).slice(0,n):[]}))};function f(){return(0,o.bh)("comprobante_list").map((function(e){var n,a,t=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[e.account],r=null===(a=(0,o.bh)("sub_account_ids"))||void 0===a?void 0:a[e.subAccount],i={fecha:(0,o.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,tipo_cuenta:e.type,importe:e.amount,cuenta:t.code+"",nombre:t.name};return r&&r.subAccount&&(i.sub_cuenta=r.subAccount,i.nombre_sub_cuenta=r.subAccountName),i}))}},4529:function(e,n,a){a.r(n);var t=a(1413),r=a(4165),i=a(5861),o=a(9439),s=a(2791),c=(a(1636),a(2350)),l=a(4050),u=a(7689),d=(a(9760),a(810)),v=a(2647),p=a(3266),h=a(4206),m=(a(3588),a(15)),b=a(184),f=(0,v.PU)(),_=(0,v.DK)(),x=(0,h.TY)();n.default=function(e){e.data;var n=e.accountForm,a=(0,s.useState)(0),t=(0,o.Z)(a,2),d=(t[0],t[1]),v=(0,s.useState)(0),h=(0,o.Z)(v,2),m=h[0],f=h[1];(0,s.useEffect)((function(){(0,l.ZX)(I),m||f(1)}),[n]);var I=function(){(0,l.Ht)("balance_sheet","balance_params",w),(0,l.Ht)("result_sheet","result_params_value",(function(){}))},w=function(){(0,l.TP)(j)},j=function(){d((0,c.M5)())},Z=function(e){(0,p.$z)(e,(0,c.bh)("balance_general_param"),(0,c.bh)("balance_params"),(0,c.bh)("result_sheet_params"),(0,c.bh)("result_params_value")),d((0,c.M5)())},k=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.bs)();case 2:a=e.sent,(0,p.f9)(a);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,u.s0)();return(0,b.jsxs)("div",{style:{marginTop:25},children:[(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsx)("p",{className:"title_collect",children:"Balances y Reportes"}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e,n;(0,l.Mp)(null===(e=(0,c.bh)("balance_params"))||void 0===e?void 0:e.balanceId,null===(n=(0,c.bh)("result_params_value"))||void 0===n?void 0:n.balanceId,Z)},children:"Generar Balances"}),(0,b.jsx)("p",{className:"group_title addBtn purple",onClick:k,children:"Balance de Comprobacion"})]}),(0,b.jsx)(_,{indexTab:m,data:[{key:1,label:"General"},{key:2,label:"Resultado"}],updateIndex:f}),(0,b.jsx)(y,{viewId:1,activeView:m,children:(0,b.jsx)(g,{})}),(0,b.jsx)(y,{viewId:2,activeView:m,children:(0,b.jsx)(x,{})})]})};var y=function(e){var n=e.viewId,a=e.activeView,t=e.children;return(0,b.jsx)("div",{className:"opacityView",style:{opacity:n===a?1:0},children:n===a?t:null})},g=function(e){e.keyId;var n=(0,s.useState)(0),a=(0,o.Z)(n,2),l=(a[0],a[1]),u=(0,c.bh)("balance_general_param"),d=(0,c.bh)("balance_general_upd_flds"),v=function(){(0,m.OpenToast)({text:"Los cambios en el Balance de General fueron guardados exitosamente ",timeout:3500}),l((0,c.M5)())},p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,a,i,o,s,l,u,p,h,m,b,f,_;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=(0,c.bh)("balance_params"))||void 0===n||!n.balanceId){e.next=14;break}return(s=(0,t.Z)({},(0,c.bh)("balance_params"))).balanceId=(0,c.M5)(),(l=(0,t.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.upd_balances)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,balanceId:null===(o=(0,c.bh)("balance_params"))||void 0===o?void 0:o.balanceId},u=(0,c.vy)(d,(0,c.bh)("balance_params"),(0,c.bh)("balance_params_bck")),l.data2update=u.data,p=(0,c.I7)(l),e.next=10,p;case 10:e.sent&&((0,c.Rz)("balance_params",s),v()),e.next=25;break;case 14:return(b=(0,t.Z)({},(0,c.bh)("balance_params"))).balanceId=(0,c.M5)(),b.type="balance_sheet",(f=(0,t.Z)({},null===(h=(0,c.bh)((0,c.hQ)()))||void 0===h?void 0:h.add_balances)).params={businessId:null===(m=(0,c.bh)("profileUser"))||void 0===m?void 0:m.businessId},f.form=b,_=(0,c.I7)(f),e.next=23,_;case 23:e.sent&&((0,c.Rz)("balance_params",b),v());case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,b.jsxs)("div",{style:{marginTop:20,maxWidth:"90%"},children:[(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsx)("p",{className:"title_collect",children:"Balance General"}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsx)("p",{className:"group_title addBtn purple",onClick:p,children:"Guardar Parametros"})]}),(0,b.jsx)("div",{className:"balance",style:{marginTop:10},children:u&&(0,c._2)(u).map((function(e){return(0,b.jsxs)("div",{style:{marginLeft:12},children:[(0,b.jsx)("h5",{children:e}),Array.isArray(u[e])?(0,b.jsx)("div",{children:u[e].map((function(e){var n;return(0,b.jsx)(I,{keyId:e.key,accountId:null===(n=(0,c.bh)("balance_params"))||void 0===n?void 0:n[e.key]},e.key)}))}):(0,b.jsx)("div",{children:(0,c._2)(u[e]).map((function(n){return(0,b.jsxs)("div",{style:{marginLeft:27},children:[(0,b.jsx)("p",{children:n}),(0,b.jsx)("div",{children:u[e][n].map((function(e){var n;return(0,b.jsx)(I,{keyId:e.key,accountId:null===(n=(0,c.bh)("balance_params"))||void 0===n?void 0:n[e.key]},e.key)}))})]},n)}))})]},e)}))})]})},I=function(e){var n,a,t,r=e.keyId,i=(0,s.useState)(!1),l=(0,o.Z)(i,2),u=l[0],v=l[1],p=(0,s.useState)(!1),h=(0,o.Z)(p,2),m=h[0],_=h[1],x=(0,s.useState)(0),y=(0,o.Z)(x,2),g=(y[0],y[1]),I=null===(n=(0,c.bh)("balance_params"))||void 0===n?void 0:n[r],w=null===(a=(0,c.bh)("account_ids"))||void 0===a?void 0:a[I],j=w&&(null===(t=(0,c.bh)("sub_account_group"))||void 0===t?void 0:t[null===w||void 0===w?void 0:w.accountId]);return(0,b.jsxs)("div",{style:{marginLeft:27},children:[(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsx)("div",{onClick:function(){return v(!u)},className:"".concat(u?"editing":""),style:{marginRight:27},children:(0,b.jsx)("span",{children:r})}),u?(0,b.jsx)("div",{children:(0,b.jsx)(d.Z,{handleClick:function(e){!function(e,n,a){var t="balance_params",r=(0,c.bh)(t)||{};a?(r[a]||(r[a]={}),r[a][e]=n):r[e]=n,(0,c.Rz)(t,r),g((0,c.M5)())}(r,e),v(!1)}})}):(0,b.jsx)("div",{children:(0,b.jsx)("div",{className:"bg_acc_code",children:null===w||void 0===w?void 0:w.code})}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsxs)("div",{className:"right_box _dsplFlx",children:[(0,b.jsx)("div",{className:"bg_acc_amount",style:{marginRight:15}}),(null===j||void 0===j?void 0:j.length)>0?(0,b.jsx)("div",{className:"icon",onClick:function(){return _(!m)},style:{marginTop:12},children:(0,b.jsx)(f,{name:m?"key_arrow_up":"key_arrow_down",color:"#828282"})}):null]})]}),m&&(null===j||void 0===j?void 0:j.length)&&(0,b.jsx)("div",{children:null===j||void 0===j?void 0:j.map((function(e){return e.subAccount?(0,b.jsx)("div",{className:"_dsplFlx account_item_box",style:{marginLeft:"35px"},children:(0,b.jsxs)("div",{className:"_dsplFlx",children:[(0,b.jsx)("div",{className:"code",children:e.subAccount}),(0,b.jsx)("div",{className:"name",children:e.subAccountName})]})},e.sub_accountId):null}))})]})}}}]);
//# sourceMappingURL=5176.154603ad.chunk.js.map