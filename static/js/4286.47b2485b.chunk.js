"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4286,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return l},OpenModal:function(){return u},default:function(){return s}});var r=t(2791),o=t(5408),i=t(2350),c=t(184),a="listDialog_mdh392",s=function(){var e=(0,i.bh)("listDialog")||{},n=((0,o.Z)(a),Object.keys(e));return(0,c.jsx)(c.Fragment,{children:n.map((function(n,t){var o=e[n];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var a={zIndex:o.zIndex},s=null,u=o.data;return o.content&&(s=r.cloneElement(o.content,{data:u})),(0,c.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,c.jsx)("div",{className:"ltr-hoe9xz",children:(0,c.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:s})}),o.data.overlay?(0,c.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:e})}}):null]},n)}}))})},u=function(e){var n=(0,i.bh)("listDialog")||{},t=(0,i.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,i.Rz)("listDialog",n),(0,i.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,i.Rz)("listDialog",n),(0,i.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(a)}),125)},l=function(e){var n,t,r,o=(0,i.bh)("listDialog")||{},c=e.id;o[c]&&(o[c].observeResize&&o[c].observeInterval&&clearInterval(o[c].observeInterval),o[c].display=!1,null===(n=o[c])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[c],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((function(){delete o[c],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},4286:function(e,n,t){t.r(n);var r=t(9439),o=t(2791),i=t(2350),c=(t(6021),t(9760)),a=t(1232),s=t(9179),u=t(2647),l=t(184),d=(0,s.t8)();(0,u.Np)();n.default=function(e){var n=e.data,t=(e.elmId,e.openUpdateView,(0,o.useState)(!1)),s=(0,r.Z)(t,2),u=s[0],v=s[1],f=(0,o.useState)(0),h=(0,r.Z)(f,2),p=(h[0],h[1]);(0,o.useEffect)((function(){u||(v(!0),p((0,i.M5)()))}));var m=function(){p((0,i.M5)())},b=function(){(0,a.i7)(m)};return(0,l.jsx)("div",{className:"item_acc",children:(0,l.jsxs)("div",{className:"_dsplFlx operation_item_box",onClick:function(){(0,i.Rz)("show_comprobante",n);var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,l.jsx)(d,{confirm:b,item:n,accountForm:"Acc2Collect"}),(0,c.OpenModal)(e)},children:[(0,l.jsx)("div",{className:"name",children:null===n||void 0===n?void 0:n.document}),(0,l.jsx)("div",{className:"entryName",children:null===n||void 0===n?void 0:n.entryName}),(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsxs)("div",{className:"code",children:["$",(1*(null===n||void 0===n?void 0:n.amount)).toFixed(2)]}),(0,l.jsx)("div",{className:"flexSpace"})]})})}},1232:function(e,n,t){t.d(n,{GP:function(){return d},N$:function(){return u},hF:function(){return h},i7:function(){return a},nr:function(){return s},pj:function(){return p}});var r=t(4165),o=t(1413),i=t(5861),c=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,s,u,d,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.find_acc_subacc)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.subAccount},u=(0,c.I7)(s),e.next=5,u;case 5:(d=e.sent)&&!d.error&&((0,c.Rz)("collect_list",d),(0,c.Rz)("collect_by_doc",l(d)),(0,c.Rz)("collect_by_docM",l(d)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),f(d,v)),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,s,u,d,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.find_acc_subacc)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.subAccount},u=(0,c.I7)(s),e.next=5,u;case 5:(d=e.sent)&&!d.error&&((0,c.Rz)("toPay_list",d),(0,c.Rz)("toPay_by_doc",l(d,!0)),(0,c.Rz)("toPay_by_docM",l(d,!0)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),f(d,v)),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,s,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,c.bh)("search_acc_record")},s=(0,c.I7)(a),e.next=5,s;case 5:(u=e.sent)&&!u.error&&((0,c.Rz)("comprobante_list",u),(0,c.Rz)("comprobante_by_doc",l(u))),n&&n();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function l(e,n){var t={},r=e&&(0,c._2)(e);return r.length>0?r.map((function(r){var o=e[r],i=o.document.trim();if(!t[i]){t[i]={};["date","description","document","entryName"].forEach((function(e){t[i][e]=o[e]})),t[i].amount=0,t[i].operations=[]}if(o.type){var a=(0,c.Zv)(o.amount,2),s=(0,c.Zv)(t[i].amount,2),u=0;u=n?1*s+a*("debit"===o.type?-1:1):1*s+a*("credit"===o.type?-1:1),t[i].amount=(0,c.Zv)(u,2),t[i].operations.push(function(e){var n,t,r={};r.account=null===(n=(0,c.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,c.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.date=e.date;var o=(0,c.Zv)(e.amount,2);"credit"===e.type?(r.debit=0,r.credit=o):"debit"===e.type&&(r.credit=0,r.debit=o);return r}(o))}})):t=null,t}var d=function(e,n,t){return(0,c.MV)("SumDocuments",[e,n,t],(function(){var t,r=0;return e&&(null===(t=(0,c._2)(e))||void 0===t||t.map((function(t,o){var i;r+=1*(null===(i=e[t])||void 0===i?void 0:i[n])}))),r}))},v=function(e,n,t){var r,o=0;return e&&(null===(r=(0,c._2)(e))||void 0===r||r.map((function(n,t){var r,i=(0,c.Zv)(e[n].amount,2);o+=i*("credit"===(null===(r=e[n])||void 0===r?void 0:r.type)?-1:1)}))),o},f=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,o){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(i=(0,c.bh)("rec_by_acc")||{})[t]=v(n)||"no",(0,c.Rz)("rec_by_acc",i),o&&o();case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a,s,u,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,o.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.find_acc_subacc)).params={businessId:null===(s=(0,c.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":null===n||void 0===n?void 0:n.subAccount},l=(0,c.I7)(u),e.next=5,l;case 5:(d=e.sent)&&!d.error&&f(d,t),i&&i();case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a,s,u,l,d,v,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,o.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.search_subacc_acc)).params={businessId:null===(s=(0,c.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":n,":search":t},l=(0,c.I7)(u),e.next=5,l;case 5:(d=e.sent)&&!d.error&&(f=null===(v=(0,c._2)(d))||void 0===v?void 0:v[0],i&&i(d[f]));case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},6021:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=4286.47b2485b.chunk.js.map