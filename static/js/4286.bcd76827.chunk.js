"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4286,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return l},OpenModal:function(){return s},default:function(){return u}});var o=t(2791),r=t(5408),i=t(2350),c=t(184),a="listDialog_mdh392",u=function(){var e=(0,i.bh)("listDialog")||{},n=((0,r.Z)(a),Object.keys(e));return(0,c.jsx)(c.Fragment,{children:n.map((function(n,t){var r=e[n];if(r&&r.visible){var i={};r.height&&(i.heigth=r.height),r.width,r.zIndex&&(i.zIndex=r.zIndex-1);var a={zIndex:r.zIndex},u=null,s=r.data;return r.content&&(u=o.cloneElement(r.content,{data:s})),(0,c.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,c.jsx)("div",{className:"ltr-hoe9xz",children:(0,c.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:u})}),r.data.overlay?(0,c.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:e})}}):null]},n)}}))})},s=function(e){var n=(0,i.bh)("listDialog")||{},t=(0,i.M5)();n[t]||(n[t]={}),n[t].visible=!0;var o={};e.props?(o=e.props).modalID=t:o.modalID=t;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===n[t].width&&o.height===n[t].height||(n[t].height=o.height+10,n[t].width=o.width,(0,i.Rz)("listDialog",n),(0,i.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=o,(0,i.Rz)("listDialog",n),(0,i.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(a)}),125)},l=function(e){var n,t,o,r=(0,i.bh)("listDialog")||{},c=e.id;r[c]&&(r[c].observeResize&&r[c].observeInterval&&clearInterval(r[c].observeInterval),r[c].display=!1,null===(n=r[c])||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.closeEvent)||void 0===o||o.call(t),(0,i.Rz)("listDialog",r),delete r[c],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((function(){delete r[c],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},4286:function(e,n,t){t.r(n);var o=t(9439),r=t(2791),i=t(2350),c=(t(6021),t(9760)),a=t(1232),u=t(9179),s=t(2647),l=t(184),d=(0,u.t8)();(0,s.Np)();n.default=function(e){var n=e.data,t=(e.elmId,e.openUpdateView,(0,r.useState)(!1)),u=(0,o.Z)(t,2),s=u[0],v=u[1],h=(0,r.useState)(0),f=(0,o.Z)(h,2),p=(f[0],f[1]);(0,r.useEffect)((function(){s||(v(!0),p((0,i.M5)()))}));var m=function(){p((0,i.M5)())},b=function(){(0,a.i7)(m)};return(0,l.jsx)("div",{className:"item_acc",children:(0,l.jsxs)("div",{className:"_dsplFlx operation_item_box",onClick:function(){(0,i.Rz)("show_comprobante",n);var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,l.jsx)(d,{confirm:b,item:n,accountForm:"Acc2Collect"}),(0,c.OpenModal)(e)},children:[(0,l.jsx)("div",{className:"name",children:null===n||void 0===n?void 0:n.document}),(0,l.jsx)("div",{className:"entryName",children:null===n||void 0===n?void 0:n.entryName}),(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsxs)("div",{className:"code",children:["$",(1*(null===n||void 0===n?void 0:n.amount)).toFixed(2)]}),(0,l.jsx)("div",{className:"flexSpace"})]})})}},1232:function(e,n,t){t.d(n,{GP:function(){return d},N$:function(){return s},hF:function(){return f},i7:function(){return a},nr:function(){return u},pj:function(){return p}});var o=t(4165),r=t(1413),i=t(5861),c=t(2350),a=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n,t){var i,a,u,s,d,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,r.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.filter_search_opera)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},s=(0,c.I7)(u),e.next=5,s;case 5:(d=e.sent)&&!d.error&&((0,c.Rz)("collect_list",d),(0,c.Rz)("collect_by_doc",l(d)),(0,c.Rz)("collect_by_docM",l(d)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),h(d,v)),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n,t){var i,a,u,s,d,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,r.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.filter_search_opera)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},s=(0,c.I7)(u),e.next=5,s;case 5:(d=e.sent)&&!d.error&&((0,c.Rz)("toPay_list",d),(0,c.Rz)("toPay_by_doc",l(d,!0)),(0,c.Rz)("toPay_by_docM",l(d,!0)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),h(d,v)),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n){var t,i,a,u,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,r.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,c.bh)("search_acc_record")},u=(0,c.I7)(a),e.next=5,u;case 5:(s=e.sent)&&!s.error&&((0,c.Rz)("comprobante_list",s),(0,c.Rz)("comprobante_by_doc",l(s))),n&&n();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function l(e,n){var t={},o=e&&(0,c._2)(e);return o.length>0?o.map((function(o){var r,i=e[o],a=null===(r=i.document)||void 0===r?void 0:r.trim();if(!t[a]){t[a]={};["date","description","document","entryName"].forEach((function(e){t[a][e]=i[e]})),t[a].amount=0,t[a].operations=[]}if(i.type){var u=(0,c.Zv)(i.amount,2),s=(0,c.Zv)(t[a].amount,2),l=0;l=n?1*s+u*("debit"===i.type?-1:1):1*s+u*("credit"===i.type?-1:1),t[a].amount=(0,c.Zv)(l,2),t[a].operations.push(function(e){var n,t,o={};o.account=null===(n=(0,c.bh)("account_ids"))||void 0===n?void 0:n[e.account],o.sub_account=null===(t=(0,c.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],o.comprobanteId=e.comprobanteId,o.date=e.date;var r=(0,c.Zv)(e.amount,2);"credit"===e.type?(o.debit=0,o.credit=r):"debit"===e.type&&(o.credit=0,o.debit=r);return o}(i))}})):t=null,t}var d=function(e,n,t){return(0,c.MV)("SumDocuments",[e,n,t],(function(){var t,o=0;return e&&(null===(t=(0,c._2)(e))||void 0===t||t.map((function(t,r){var i;o+=1*(null===(i=e[t])||void 0===i?void 0:i[n])}))),o}))},v=function(e,n,t){var o,r=0;return e&&(null===(o=(0,c._2)(e))||void 0===o||o.map((function(n,t){var o,i=(0,c.Zv)(e[n].amount,2);r+=i*("credit"===(null===(o=e[n])||void 0===o?void 0:o.type)?-1:1)}))),r},h=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n,t,r){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(i=(0,c.bh)("rec_by_acc")||{})[t]=v(n)||"no",(0,c.Rz)("rec_by_acc",i),r&&r();case 4:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n,t,i){var a,u,s,l,d;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,r.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(u=(0,c.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},l=(0,c.I7)(s),e.next=5,l;case 5:(d=e.sent)&&!d.error&&h(d,t),i&&i();case 8:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n,t,i){var a,u,s,l,d,v,h;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,r.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.search_subacc_acc)).params={businessId:null===(u=(0,c.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":n,":search":t},l=(0,c.I7)(s),e.next=5,l;case 5:(d=e.sent)&&!d.error&&(h=null===(v=(0,c._2)(d))||void 0===v?void 0:v[0],i&&i(d[h]));case 7:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}()},6021:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(4942);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=4286.bcd76827.chunk.js.map