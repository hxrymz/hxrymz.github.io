"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[227,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return l},OpenModal:function(){return c},default:function(){return a}});var r=t(2791),i=t(5408),o=t(2350),s=t(184),a=function(){var e=(0,o.bh)("listDialog")||{},n=((0,i.Z)("listDialog_h392"),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:n.map((function(n,t){var i=e[n];if(i&&i.visible){var o={};i.height&&(o.heigth=i.height),i.width,i.zIndex&&(o.zIndex=i.zIndex-1);var a={zIndex:i.zIndex},c=null,u=i.data;return i.content&&(c=r.cloneElement(i.content,{data:u})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:c})}),i.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,o.bh)("listDialog")||{},t=(0,o.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,o.Rz)("listDialog",n),(0,o.wt)("listDialog_h392")))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,o.Rz)("listDialog",n),(0,o.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)("listDialog_h392")}),125)},l=function(e){var n,t,r,i=(0,o.bh)("listDialog")||{},s=e.id;i[s]&&(i[s].observeResize&&i[s].observeInterval&&clearInterval(i[s].observeInterval),i[s].display=!1,null===(n=i[s])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",i),delete i[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)("listDialog_h392"),setTimeout((function(){delete i[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},227:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(9439),i=t(2791),o=t(2350),s=t(4050),a=t(7689),c=t(9760),l=t(184),u=function(e){var n,t,u,d=e.data,v=e.accountForm,h=(0,i.useState)(0),b=(0,r.Z)(h,2),m=(b[0],b[1]),f=(0,o.bh)("submayor_group");(0,i.useEffect)((function(){(0,s.rs)(v,p)}),[v]);var p=function(){m((0,o.M5)())},_=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[null===v||void 0===v?void 0:v.account],x=null===(t=(0,o.bh)("sub_account_ids"))||void 0===t?void 0:t[null===v||void 0===v?void 0:v.subAccount],g=(0,a.s0)();return(0,l.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,l.jsx)("div",{className:"_dsplFlx ",children:(0,l.jsx)("p",{className:"title_collect",children:"SubMayor de la Cuenta"})}),(0,l.jsxs)("div",{className:" acc_dtls",style:{marginTop:10},children:[(0,l.jsxs)("div",{className:"_dsplFlx",children:[(0,l.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===_||void 0===_?void 0:_.code}),(0,l.jsx)("div",{className:"name",children:null===_||void 0===_?void 0:_.name})]}),(0,l.jsx)("div",{className:"flexSpace"}),x?(0,l.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,l.jsx)("div",{className:"code",children:null===x||void 0===x?void 0:x.subAccount}),(0,l.jsx)("div",{className:"name",children:null===x||void 0===x?void 0:x.subAccountName})]}):null]}),(0,l.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsx)("div",{className:"_dsplFlx"})]}),(0,l.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,l.jsx)("div",{className:"tr_bar_s6",children:"Comprobante"}),(0,l.jsx)("div",{className:"tr_bar_s6",children:"Fecha"}),(0,l.jsx)("div",{className:"tr_bar_s6",children:"Documento"}),(0,l.jsx)("div",{className:"tr_bar_s6",children:"Debito"}),(0,l.jsx)("div",{className:"tr_bar_s6",children:"Credito"}),(0,l.jsx)("div",{className:"tr_bar_s6",children:"Saldo"})]}),(0,l.jsx)("div",{className:"scollVh subMHeight",children:(null===f||void 0===f?void 0:f.operations)&&(null===(u=(0,s.T7)(null===f||void 0===f?void 0:f.operations,null===_||void 0===_?void 0:_.code,null===x||void 0===x?void 0:x.subAccount))||void 0===u?void 0:u.map((function(e,n){var t,r,i;return(0,l.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,l.jsx)("div",{className:"tr_bar_s6 comprobante_id",onClick:function(){return function(e){(0,c.CloseModal)({id:d.modalID}),g({pathname:"accounting-ledger",search:"?cId=".concat(e.comprobanteId)})}(e)},children:e.comprobanteId}),(0,l.jsx)("div",{className:"tr_bar_s6",children:e.date&&(0,o.sJ)(e.date)}),(0,l.jsx)("div",{className:"tr_bar_s6",children:e.document}),(0,l.jsx)("div",{className:"tr_bar_s6",children:null===(t=1*e.debit)||void 0===t?void 0:t.toFixed(2)}),(0,l.jsx)("div",{className:"tr_bar_s6",children:null===(r=1*e.credit)||void 0===r?void 0:r.toFixed(2)}),(0,l.jsx)("div",{className:"tr_bar_s6",children:null===(i=1*e.saldo)||void 0===i?void 0:i.toFixed(2)})]},n)})))})]})}},4050:function(e,n,t){t.d(n,{Jy:function(){return l},T7:function(){return b},Y1:function(){return h},ZX:function(){return c},_0:function(){return a},rs:function(){return u}});var r=t(1413),i=t(4165),o=t(5861),s=t(2350),a=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n){var t,r,o,a,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_accounts).params={businessId:null===(r=(0,s.bh)("profileUser"))||void 0===r?void 0:r.businessId},a=(0,s.I7)(o),e.next=5,a;case 5:(c=e.sent)&&((0,s.Rz)("account_list",v(c,"code")),(0,s.Rz)("account_ids",(0,s.ME)(c,"accountId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n){var t,r,o,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_sub_account).params={businessId:null===(r=(0,s.bh)("profileUser"))||void 0===r?void 0:r.businessId},c=(0,s.I7)(o),e.next=5,c;case 5:(l=e.sent)&&((0,s.Rz)("sub_account_list",h(l,"subAccount")),(0,s.Rz)("sub_account_group",(0,s._U)(l,"accountId")),(0,s.Rz)("sub_account_ids",(0,s.ME)(l,"sub_accountId")),a(),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n){var t,r,o,a,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_account).params={businessId:null===(r=(0,s.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,s.bh)("searchQry")},a=(0,s.I7)(o),e.next=5,a;case 5:(c=e.sent)&&((0,s.Rz)("account_list",v((0,s.jQ)(c),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n,t){var r,o,a,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=null===(r=(0,s.bh)((0,s.hQ)()))||void 0===r?void 0:r.find_acc).params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,s.bh)("searchQry")},null!==n&&void 0!==n&&n.subAccount&&(a.params[":sub_account"]=null===n||void 0===n?void 0:n.subAccount,a.queryString+=" AND subAccount contain :sub_account"),c=(0,s.I7)(a),e.next=6,c;case 6:(l=e.sent)&&!l.error&&((0,s.Rz)("submayor_list",l),(0,s.Rz)("submayor_group",d(l))),t&&t();case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function d(e,n){var t={operations:[]},r=e&&(0,s._2)(e);return r.length>0?r.map((function(r){var i=e[r];i.type&&(n?"debit"===i.type?-1*i.amount:1*i.amount:"credit"===i.type?-1*i.amount:1*i.amount,t.operations.push(function(e){var n,t,r={};r.account=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,s.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.document=e.document,r.date=e.date,"credit"===e.type?(r.debit=0,r.credit=e.amount):"debit"===e.type&&(r.credit=0,r.debit=e.amount);return r}(i)))})):t=null,t}var v=function(e,n){return(0,s.MV)("sortAccounts",[e],(function(){return e.sort((function(e,t){var r=1*e[n],i=1*t[n];return r<i?-1:r>i?1:0}))}))},h=function(e,n){return(0,s.MV)("sortSubAccounts",[e],(function(){return e.sort((function(e,t){var r=1*e[n],i=1*t[n];return r<i?-1:r>i?1:0}))}))},b=function(e,n,t){return(0,s.MV)("calcSubmayor",[e,n,t],(function(){var n="date",t=e.sort((function(e,t){var r=new Date(e[n]).getTime(),i=new Date(t[n]).getTime();return r<i?-1:r>i?1:0})),i=0;return t.map((function(e){return function(e){var n,t=(0,r.Z)({},e);return"credit"===(null===e||void 0===e||null===(n=e.account)||void 0===n?void 0:n.type)?t.saldo=i+1*t.credit-1*t.debit:t.saldo=i+1*t.debit-1*t.credit,i=t.saldo,t}(e)}))}))}},4942:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9142);function i(e,n,t){return(n=(0,r.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=227.3d1b1785.chunk.js.map