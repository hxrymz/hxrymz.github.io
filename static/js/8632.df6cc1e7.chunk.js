"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8632,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return a},OpenModal:function(){return s},default:function(){return c}});var r=t(2791),o=t(5408),i=t(2350),u=t(184),c=function(){var n=(0,i.bh)("listDialog")||{},e=((0,o.Z)("listDialog_h392"),Object.keys(n));return(0,u.jsx)(u.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var c={zIndex:o.zIndex},s=null,l=o.data;return o.content&&(s=r.cloneElement(o.content,{data:l})),(0,u.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,u.jsx)("div",{className:"ltr-hoe9xz",children:(0,u.jsx)("div",{className:"ltr-1wao6ny",style:c,id:e,children:s})}),o.data.overlay?(0,u.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),a({id:n})}}):null]},e)}}))})},s=function(n){var e=(0,i.bh)("listDialog")||{},t=(0,i.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,i.Rz)("listDialog",e),(0,i.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,i.Rz)("listDialog",e),(0,i.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)("listDialog_h392")}),125)},a=function(n){var e,t,r,o=(0,i.bh)("listDialog")||{},u=n.id;o[u]&&(o[u].observeResize&&o[u].observeInterval&&clearInterval(o[u].observeInterval),o[u].display=!1,null===(e=o[u])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[u],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)("listDialog_h392"),setTimeout((function(){delete o[u],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},4050:function(n,e,t){t.d(e,{Je:function(){return p},Jy:function(){return a},T7:function(){return h},Y1:function(){return f},ZX:function(){return s},_0:function(){return c},rs:function(){return l}});var r=t(4165),o=t(1413),i=t(5861),u=t(2350),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c,s,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId},s=(0,u.I7)(c),n.next=5,s;case 5:(a=n.sent)&&((0,u.Rz)("account_list",v(a,"code")),(0,u.Rz)("account_ids",(0,u.ME)(a,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,s,a,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId},a=(0,u.I7)(s),n.next=5,a;case 5:(l=n.sent)&&((0,u.Rz)("sub_account_list",f(l,"subAccount")),(0,u.Rz)("sub_account_group",(0,u._U)(l,"accountId")),(0,u.Rz)("sub_account_ids",(0,u.ME)(l,"sub_accountId")),c(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c,s,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,u.bh)("searchQry")},s=(0,u.I7)(c),n.next=5,s;case 5:(a=n.sent)&&((0,u.Rz)("account_list",v((0,u.jQ)(a),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,c,s,a,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(i=(0,u.bh)((0,u.hQ)()))||void 0===i?void 0:i.find_acc)).params={businessId:null===(c=(0,u.bh)("profileUser"))||void 0===c?void 0:c.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&(s.params[":sub_account"]=null===e||void 0===e?void 0:e.subAccount,s.queryString+=" AND subAccount contain :sub_account"),a=(0,u.I7)(s),n.next=6,a;case 6:(l=n.sent)&&!l.error&&((0,u.Rz)("submayor_list",l),(0,u.Rz)("submayor_group",d(l))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function d(n,e){var t={operations:[]},r=n&&(0,u._2)(n);return r.length>0?r.map((function(r){var o=n[r];o.type&&(e?"debit"===o.type?-1*o.amount:1*o.amount:"credit"===o.type?-1*o.amount:1*o.amount,t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,u.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(o)))})):t=null,t}var v=function(n,e){return(0,u.MV)("sortAccounts",[n,e],(function(){return n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},f=function(n,e){return(0,u.MV)("sortSubAccounts",[n],(function(){return n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},h=function(n,e,t){return(0,u.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=new Date(n[e]).getTime(),o=new Date(t[e]).getTime();return r<o?-1:r>o?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function p(){return v((0,u.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}},8632:function(n,e,t){t.r(e);var r=t(4165),o=t(5861),i=t(9439),u=t(2791),c=t(2350),s=t(2647),a=t(9760),l=(t(2052),t(5114)),d=t(6677),v=t(4050),f=t(184),h=(0,s.Vg)(),p=(0,l.V)(),b=(0,l.nU)();e.default=function(n){n.data,n.elmId,n.updObs;var e,t=(0,u.useState)(!1),s=(0,i.Z)(t,2),l=s[0],m=s[1],g=(0,u.useState)(0),_=(0,i.Z)(g,2),y=(_[0],_[1]),w=(0,u.useState)(!1),I=(0,i.Z)(w,2),Z=(I[0],I[1]),x=(0,u.useState)(!1),j=(0,i.Z)(x,2),z=(j[0],j[1]),O=(0,u.useState)(!1),R=(0,i.Z)(O,2),D=R[0],k=R[1];(0,u.useEffect)((function(){l||(m(!0),y((0,c.M5)()),(0,v.ZX)(Q),(0,d.Je)(Q))}));var N=function(){Z(!1),z(!0)},M=function(n){(0,d.Je)(Q)},Q=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:y((0,c.M5)()),k(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Provedores o Clientes"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)(h,{placeholder:"Buscar ....",width:360,obs:y,fetchData:function(n){k(!0),(0,d.UO)(Q)},loading:D,change:function(n){!D&&k(!0)},callempty:M,keyFlds:"search_prov"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){z(!1);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,f.jsx)(p,{confimr:M}),(0,a.OpenModal)(n)},children:"Agregar"})]})]}),(0,f.jsx)("div",{className:"providers_container scollVh",children:(0,c.bh)("providers_list")&&(null===(e=(0,c._2)((0,c.bh)("providers_list")))||void 0===e?void 0:e.map((function(n){return(0,f.jsx)(b,{data:(0,c.bh)("providers_list")[n],elmId:n,openUpdateView:N,handleRefreshAll:M},n)})))})]})}},6677:function(n,e,t){t.d(e,{Je:function(){return c},Qn:function(){return d},UO:function(){return s},mQ:function(){return l}});var r=t(4165),o=t(1413),i=t(5861),u=t(2350),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.all_prov_cust)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId},s=(0,u.I7)(c),n.next=5,s;case 5:(l=n.sent)&&((0,u.Rz)("providers_list",a((0,u.jQ)(l),"code")),(0,u.Rz)("providers_ids",(0,u.ME)((0,u.jQ)(l),"providerId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(t=(0,u.bh)((0,u.hQ)()))||void 0===t?void 0:t.search_prov_cust)).params={businessId:null===(i=(0,u.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,u.bh)("search_prov")},s=(0,u.I7)(c),n.next=5,s;case 5:(l=n.sent)&&((0,u.Rz)("providers_list",a((0,u.jQ)(l),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var a=function(n,e){return(0,u.MV)("sortProviders",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},l=function(n,e){return(0,u.MV)("sortSubProviders",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,c,s,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(i=(0,u.bh)((0,u.hQ)()))||void 0===i?void 0:i.delete_prov_cust)).params={businessId:null===(c=(0,u.bh)("profileUser"))||void 0===c?void 0:c.businessId,providerId:e},a=(0,u.I7)(s),n.next=5,a;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},2052:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(9142);function o(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=8632.df6cc1e7.chunk.js.map