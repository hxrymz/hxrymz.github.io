"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5995,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return l},OpenModal:function(){return s},default:function(){return u}});var r=t(2791),o=t(5408),i=t(2350),c=t(184),a="listDialog_mdh392",u=function(){var n=(0,i.bh)("listDialog")||{},e=((0,o.Z)(a),Object.keys(n));return(0,c.jsx)(c.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var a={zIndex:o.zIndex},u=null,s=o.data;return o.content&&(u=r.cloneElement(o.content,{data:s})),(0,c.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,c.jsx)("div",{className:"ltr-hoe9xz",children:(0,c.jsx)("div",{className:"ltr-1wao6ny",style:a,id:e,children:u})}),o.data.overlay?(0,c.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:n})}}):null]},e)}}))})},s=function(n){var e=(0,i.bh)("listDialog")||{},t=(0,i.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,i.Rz)("listDialog",e),(0,i.wt)(a)))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,i.Rz)("listDialog",e),(0,i.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(a)}),125)},l=function(n){var e,t,r,o=(0,i.bh)("listDialog")||{},c=n.id;o[c]&&(o[c].observeResize&&o[c].observeInterval&&clearInterval(o[c].observeInterval),o[c].display=!1,null===(e=o[c])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[c],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((function(){delete o[c],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},1232:function(n,e,t){t.d(e,{GP:function(){return d},N$:function(){return s},hF:function(){return f},i7:function(){return a},nr:function(){return u},pj:function(){return h}});var r=t(4165),o=t(1413),i=t(5861),c=t(2350),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,u,s,d,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.filter_search_opera)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount},s=(0,c.I7)(u),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,c.Rz)("collect_list",d),(0,c.Rz)("collect_by_doc",l(d)),(0,c.Rz)("collect_by_docM",l(d)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),p(d,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,u,s,d,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.filter_search_opera)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount},s=(0,c.I7)(u),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,c.Rz)("toPay_list",d),(0,c.Rz)("toPay_by_doc",l(d,!0)),(0,c.Rz)("toPay_by_docM",l(d,!0)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),p(d,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,u,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,c.bh)("search_acc_record")},u=(0,c.I7)(a),n.next=5,u;case 5:(s=n.sent)&&!s.error&&((0,c.Rz)("comprobante_list",s),(0,c.Rz)("comprobante_by_doc",l(s))),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function l(n,e){var t={},r=n&&(0,c._2)(n);return r.length>0?r.map((function(r){var o,i=n[r],a=null===(o=i.document)||void 0===o?void 0:o.trim();if(!t[a]){t[a]={};["date","description","document","entryName"].forEach((function(n){t[a][n]=i[n]})),t[a].amount=0,t[a].operations=[]}if(i.type){var u=(0,c.Zv)(i.amount,2),s=(0,c.Zv)(t[a].amount,2),l=0;l=e?1*s+u*("debit"===i.type?-1:1):1*s+u*("credit"===i.type?-1:1),t[a].amount=(0,c.Zv)(l,2),t[a].operations.push(function(n){var e,t,r={};r.account=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,c.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.date=n.date;var o=(0,c.Zv)(n.amount,2);"credit"===n.type?(r.debit=0,r.credit=o):"debit"===n.type&&(r.credit=0,r.debit=o);return r}(i))}})):t=null,t}var d=function(n,e,t){return(0,c.MV)("SumDocuments",[n,e,t],(function(){var t,r=0;return n&&(null===(t=(0,c._2)(n))||void 0===t||t.map((function(t,o){var i;r+=1*(null===(i=n[t])||void 0===i?void 0:i[e])}))),r}))},v=function(n,e,t){var r,o=0;return n&&(null===(r=(0,c._2)(n))||void 0===r||r.map((function(e,t){var r,i=(0,c.Zv)(n[e].amount,2);o+=i*("credit"===(null===(r=n[e])||void 0===r?void 0:r.type)?-1:1)}))),o},p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,o){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(i=(0,c.bh)("rec_by_acc")||{})[t]=v(e)||"no",(0,c.Rz)("rec_by_acc",i),o&&o();case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var a,u,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(u=(0,c.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount},l=(0,c.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&p(d,t),i&&i();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var a,u,s,l,d,v,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.search_subacc_acc)).params={businessId:null===(u=(0,c.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":e,":search":t},l=(0,c.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(p=null===(v=(0,c._2)(d))||void 0===v?void 0:v[0],i&&i(d[p]));case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},5995:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r=t(4165),o=t(5861),i=t(9439),c=t(2791),a=t(2350),u=(t(2052),t(5114)),s=t(9760),l=t(6677),d=t(2647),v=t(184),p=function(n){var e=n.data,t=n.confirm,r=(n.handleClick,n.close,e.modalID),o=function(n){(0,s.CloseModal)({id:r})};return(0,v.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsx)("div",{className:"_dsplFlx ",children:(0,v.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("p",{className:"group_title addBtn",onClick:o,children:"Cancelar"}),(0,v.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),o()},children:"Eliminar"})]})]})},f=t(7689),h=t(1232),m=t(9179),b=(0,d.PU)(),_=(0,u.if)(),y=(0,d.tW)(),x=(0,m.nW)(),g=(0,m.lr)(),I=function(n){var e,t,u,d,m,I,j,w=n.data,Z=(n.elmId,n.handleRefreshAll),z=(0,c.useState)(!1),N=(0,i.Z)(z,2),R=N[0],O=N[1],k=(0,c.useState)(0),A=(0,i.Z)(k,2),P=(A[0],A[1]),C=(0,c.useState)(0),M=(0,i.Z)(C,2),S=M[0],D=M[1],E=(0,f.s0)(),Q=w.account+"_"+w.subAccount;(0,c.useEffect)((function(){R||(O(!0),P((0,a.M5)()))}));var F=function(){P((0,a.M5)())},U=function(){(0,l.Je)(F)},T=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,a.I0)()&&((0,a.Rz)("upd_provider",w),(0,a.Rz)("upd_provider_bck",JSON.parse(JSON.stringify(w))),(e={}).zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=(0,v.jsx)(_,{confirm:U}),(0,s.OpenModal)(e));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(n){if("provider"===(null===w||void 0===w?void 0:w.type)){var e={account:null===w||void 0===w?void 0:w.account,subAccount:null===w||void 0===w?void 0:w.subAccount,customerId:null===w||void 0===w?void 0:w.customerId};(0,a.Rz)("Acc2Pay",e),(0,h.nr)(e,(function(){!function(){(0,a.Rz)("upd_provider",w),(0,a.Rz)("upd_provider_bck",JSON.parse(JSON.stringify(w)));var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,v.jsx)(g,{confirm:U}),(0,s.OpenModal)(n)}()}))}else if("customer"===(null===w||void 0===w?void 0:w.type)){var t={account:null===w||void 0===w?void 0:w.account,subAccount:null===w||void 0===w?void 0:w.subAccount,customerId:null===w||void 0===w?void 0:w.customerId};(0,a.Rz)("Acc2Collect",t),(0,h.i7)(t,(function(){!function(){(0,a.Rz)("upd_provider",w),(0,a.Rz)("upd_provider_bck",JSON.parse(JSON.stringify(w)));var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,v.jsx)(x,{confirm:U}),(0,s.OpenModal)(n)}()}))}},H=function(){(0,l.Qn)(null===w||void 0===w?void 0:w.providerId,Z)},J=((0,l.mQ)(null===(e=(0,a.bh)("sub_provider_group"))||void 0===e?void 0:e[w.providerId],"subProvider"),"provider"===(null===w||void 0===w?void 0:w.type)&&(null===(t=(0,a.bh)("rec_by_acc"))||void 0===t?void 0:t[Q])&&!isNaN(-1*(null===(u=(0,a.bh)("rec_by_acc"))||void 0===u?void 0:u[Q]))),V="customer"===(null===w||void 0===w?void 0:w.type)&&(null===(d=(0,a.bh)("rec_by_acc"))||void 0===d?void 0:d[Q])&&!isNaN(1*(null===(m=(0,a.bh)("rec_by_acc"))||void 0===m?void 0:m[Q]));return(0,v.jsx)("div",{className:"item_acc",id:"".concat(Q),children:(0,v.jsxs)("div",{className:"_dsplFlx item_box provider_header",onMouseEnter:function(n){var e;null!==(e=(0,a.bh)("rec_by_acc"))&&void 0!==e&&e[Q]||(D(!0),(0,h.hF)(w,Q,(function(){setTimeout((function(){D(!1),F()}),200)})))},children:[(0,v.jsxs)("div",{className:"_dsplFlx",onClick:T,children:[(0,v.jsx)("div",{className:"code"}),(0,v.jsx)("div",{className:"name",children:null===w||void 0===w?void 0:w.name}),(0,v.jsx)("div",{className:"unit",children:null===w||void 0===w?void 0:w.unit})]}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:" addSbAcc purple",onClick:function(){return function(){if("provider"===(null===w||void 0===w?void 0:w.type)){var n={account:null===w||void 0===w?void 0:w.account,subAccount:null===w||void 0===w?void 0:w.subAccount,customerId:null===w||void 0===w?void 0:w.customerId};(0,a.Rz)("Acc2Pay",n),(0,h.nr)(n,(function(){E({pathname:"/pay"})}))}else if("customer"===(null===w||void 0===w?void 0:w.type)){var e={account:null===w||void 0===w?void 0:w.account,subAccount:null===w||void 0===w?void 0:w.subAccount,customerId:null===w||void 0===w?void 0:w.customerId};(0,a.Rz)("Acc2Collect",e),(0,h.i7)(e,(function(){E({pathname:"/collect"})}))}}()},children:"Historial"}),S?(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"icon",style:{marginRight:19},children:(0,v.jsx)(y,{stroke:"#646cff",size:24})}),(0,v.jsx)("div",{className:"loading_lbl",children:"cargando ...."})]}):(0,v.jsx)("div",{children:V||J?(0,v.jsx)("div",{className:" addSbAcc purple",onClick:function(){return B()},children:J?"Por Pagar $".concat((-1*(null===(I=(0,a.bh)("rec_by_acc"))||void 0===I?void 0:I[Q])).toFixed(2)):V?"Por Cobrar $".concat((1*(null===(j=(0,a.bh)("rec_by_acc"))||void 0===j?void 0:j[Q])).toFixed(2)):null}):null}),(0,a.I0)()?(0,v.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:function(){var n=(0,a.bh)("lastTimeCallModal")||0;if(Date.now()>n){(0,a.Rz)("lastTimeCallModal",Date.now()+320);var e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};e.content=(0,v.jsx)(p,{confirm:H,item:w}),(0,s.OpenModal)(e)}},children:(0,v.jsx)(b,{name:"outline_delete",color:"#c62828"})}):null]})})}},6677:function(n,e,t){t.d(e,{Je:function(){return a},Qn:function(){return d},UO:function(){return u},mQ:function(){return l}});var r=t(4165),o=t(1413),i=t(5861),c=t(2350),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,u,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.all_prov_cust)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId},u=(0,c.I7)(a),n.next=5,u;case 5:(l=n.sent)&&((0,c.Rz)("providers_list",s((0,c.jQ)(l),"code")),(0,c.Rz)("providers_ids",(0,c.ME)((0,c.jQ)(l),"providerId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,u,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.search_prov_cust)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,c.bh)("search_prov")},u=(0,c.I7)(a),n.next=5,u;case 5:(l=n.sent)&&((0,c.Rz)("providers_list",s((0,c.jQ)(l),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var s=function(n,e){return(0,c.MV)("sortProviders",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},l=function(n,e){return(0,c.MV)("sortSubProviders",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,u,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.delete_prov_cust)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,providerId:e},s=(0,c.I7)(u),n.next=5,s;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},2052:function(){},1413:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=5995.cc80b035.chunk.js.map