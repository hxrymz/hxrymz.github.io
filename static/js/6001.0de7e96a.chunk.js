"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6001,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return s},OpenModal:function(){return c},default:function(){return u}});var r=t(2791),i=t(5408),o=t(2350),a=t(184),u=function(){var n=(0,o.bh)("listDialog")||{},e=((0,i.Z)("listDialog_h392"),Object.keys(n));return(0,a.jsx)(a.Fragment,{children:e.map((function(e,t){var i=n[e];if(i&&i.visible){var o={};i.height&&(o.heigth=i.height),i.width,i.zIndex&&(o.zIndex=i.zIndex-1);var u={zIndex:i.zIndex},c=null,l=i.data;return i.content&&(c=r.cloneElement(i.content,{data:l})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:u,id:e,children:c})}),i.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:n})}}):null]},e)}}))})},c=function(n){var e=(0,o.bh)("listDialog")||{},t=(0,o.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,o.Rz)("listDialog",e),(0,o.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,o.Rz)("listDialog",e),(0,o.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)("listDialog_h392")}),125)},s=function(n){var e,t,r,i=(0,o.bh)("listDialog")||{},a=n.id;i[a]&&(i[a].observeResize&&i[a].observeInterval&&clearInterval(i[a].observeInterval),i[a].display=!1,null===(e=i[a])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",i),delete i[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)("listDialog_h392"),setTimeout((function(){delete i[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},6001:function(n,e,t){t.r(e);var r=t(4165),i=t(5861),o=t(9439),a=t(2791),u=t(2350),c=t(2647),s=t(9760),l=(t(4719),t(9661)),d=t(3728),v=t(4050),h=t(7689),f=t(184),p=(0,c.Vg)(),b=(0,l.tv)(),m=(0,l._F)(),g=(0,l.dO)();e.default=function(n){n.data,n.elmId,n.updObs;var e,t=(0,a.useState)(!1),c=(0,o.Z)(t,2),l=c[0],y=c[1],_=(0,a.useState)(0),w=(0,o.Z)(_,2),I=(w[0],w[1]),x=(0,a.useState)(!1),Z=(0,o.Z)(x,2),z=Z[0],j=Z[1],O=(0,a.useState)(!1),R=(0,o.Z)(O,2),D=R[0],k=R[1],N=(0,a.useState)(!1),E=(0,o.Z)(N,2),M=E[0],A=E[1],P=(0,h.s0)();(0,a.useEffect)((function(){l||(y(!0),I((0,u.M5)()),(0,v.ZX)(C))}));var S=function(){j(!1),k(!0)},T=function(){P({pathname:"/accounting-ledger"})},B=function(n){(0,d.ph)(C)},C=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:I((0,u.M5)()),A(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Comprobantes Parametrizados"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)(p,{placeholder:"Buscar",width:360,obs:I,fetchData:function(n){A(!0),(0,d.yq)(C)},loading:M,change:function(n){!M&&A(!0)},callempty:B,keyFlds:"search_entry_qry"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){k(!1);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,f.jsx)(b,{confirm:B}),(0,s.OpenModal)(n)},children:"Parametrizar"}),(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,f.jsx)(g,{confirm:T}),(0,s.OpenModal)(n)},children:"Agregar Comprobante Manual"})]})]}),!D&&!z&&(0,f.jsx)("div",{className:"accounts_container scollVh",children:(0,u.bh)("entries_list")&&(null===(e=(0,u._2)((0,u.bh)("entries_list")))||void 0===e?void 0:e.map((function(n){return(0,f.jsx)(m,{data:(0,u.bh)("entries_list")[n],elmId:n,openUpdateView:S,handleRefreshAll:B},n)})))})]})}},3728:function(n,e,t){t.d(e,{g5:function(){return c},ph:function(){return a},yq:function(){return u}});var r=t(4165),i=t(5861),o=t(2350),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,u,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.all_entries).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId},u=(0,o.I7)(a),n.next=5,u;case 5:(c=n.sent)&&((0,o.Rz)("entries_list",c),(0,o.Rz)("entries_ids",(0,o.ME)(c,"accountingEntryId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,u,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_entries).params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,o.bh)("search_entry_qry")},u=(0,o.I7)(a),n.next=5,u;case 5:(c=n.sent)&&((0,o.Rz)("entries_list",c),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,u,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.delete_entries).params={businessId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,accountingEntryId:e},c=(0,o.I7)(u),n.next=5,c;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},4050:function(n,e,t){t.d(e,{Je:function(){return p},Jy:function(){return s},T7:function(){return f},Y1:function(){return h},ZX:function(){return c},_0:function(){return u},rs:function(){return l}});var r=t(4165),i=t(1413),o=t(5861),a=t(2350),u=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,u,c,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(u),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("account_list",v(s,"code")),(0,a.Rz)("account_ids",(0,a.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,c,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},s=(0,a.I7)(c),n.next=5,s;case 5:(l=n.sent)&&((0,a.Rz)("sub_account_list",h(l,"subAccount")),(0,a.Rz)("sub_account_group",(0,a._U)(l,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(l,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,u,c,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchQry")},c=(0,a.I7)(u),n.next=5,c;case 5:(s=n.sent)&&((0,a.Rz)("account_list",v((0,a.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,u,c,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.find_acc)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&(c.params[":sub_account"]=null===e||void 0===e?void 0:e.subAccount,c.queryString+=" AND subAccount contain :sub_account"),s=(0,a.I7)(c),n.next=6,s;case 6:(l=n.sent)&&!l.error&&((0,a.Rz)("submayor_list",l),(0,a.Rz)("submayor_group",d(l))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function d(n,e){var t={operations:[]},r=n&&(0,a._2)(n);return r.length>0?r.map((function(r){var i=n[r];i.type&&(e?"debit"===i.type?-1*i.amount:1*i.amount:"credit"===i.type?-1*i.amount:1*i.amount,t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(i)))})):t=null,t}var v=function(n,e){return(0,a.MV)("sortAccounts",[n,e],(function(){return n.sort((function(n,t){var r=1*n[e],i=1*t[e];return r<i?-1:r>i?1:0}))}))},h=function(n,e){return(0,a.MV)("sortSubAccounts",[n],(function(){return n.sort((function(n,t){var r=1*n[e],i=1*t[e];return r<i?-1:r>i?1:0}))}))},f=function(n,e,t){return(0,a.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=new Date(n[e]).getTime(),i=new Date(t[e]).getTime();return r<i?-1:r>i?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,i.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function p(){return v((0,a.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}},4719:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(9142);function i(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(4942);function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=6001.0de7e96a.chunk.js.map