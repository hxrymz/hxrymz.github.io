"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3368,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return l},OpenModal:function(){return s},default:function(){return i}});var r=t(2791),o=t(5408),c=t(2350),a=t(184),u="listDialog_mdh392",i=function(){var n=(0,c.bh)("listDialog")||{},e=((0,o.Z)(u),Object.keys(n));return(0,a.jsx)(a.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var c={};o.height&&(c.heigth=o.height),o.width,o.zIndex&&(c.zIndex=o.zIndex-1);var u={zIndex:o.zIndex},i=null,s=o.data;return o.content&&(i=r.cloneElement(o.content,{data:s})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:u,id:e,children:i})}),o.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:n})}}):null]},e)}}))})},s=function(n){var e=(0,c.bh)("listDialog")||{},t=(0,c.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,c.Rz)("listDialog",e),(0,c.wt)(u)))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,c.Rz)("listDialog",e),(0,c.wt)(u),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",t),(0,c.wt)(u)}),125)},l=function(n){var e,t,r,o=(0,c.bh)("listDialog")||{},a=n.id;o[a]&&(o[a].observeResize&&o[a].observeInterval&&clearInterval(o[a].observeInterval),o[a].display=!1,null===(e=o[a])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,c.Rz)("listDialog",o),delete o[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)(u),setTimeout((function(){delete o[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},3368:function(n,e,t){t.r(e);var r=t(4165),o=t(5861),c=t(9439),a=t(2791),u=t(2350),i=(t(4363),t(1636),t(4206)),s=t(9760),l=t(4050),d=t(2647),v=t(184),p=(0,i.ps)(),b=(0,i.W4)(),h=(0,i.q3)(),m=(0,i.P3)(),f=(0,d.PU)();e.default=function(n){var e,t=n.data,i=(n.elmId,n.openUpdateView,(0,a.useState)(!1)),d=(0,c.Z)(i,2),_=d[0],y=d[1],g=(0,a.useState)(0),x=(0,c.Z)(g,2),I=(x[0],x[1]);(0,a.useEffect)((function(){_||(y(!0),I((0,u.M5)()))}));var w=function(){I((0,u.M5)())},Z=function(){(0,l.ZX)(w)},k=function(){(0,l._0)(w)},z=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,u.Rz)("upd_account",t),(0,u.Rz)("upd_account_bck",JSON.parse(JSON.stringify(t))),(e={}).zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=(0,v.jsx)(p,{confirm:k}),(0,s.OpenModal)(e);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),O=function(n){(0,u.Rz)("submayor_list",null),(0,u.Rz)("submayor_group",null);var e={account:t.accountId};n&&(e.subAccount=n),(0,u.Rz)("account_sub_mayor",t);var r={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};r.content=(0,v.jsx)(m,{confirm:Z,accountForm:e}),(0,s.OpenModal)(r)},j=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,u.Rz)("account_rel_subacc",t),(0,u.Rz)("upd_sub_account",e),(0,u.Rz)("upd_sub_account_bck",JSON.parse(JSON.stringify(e))),(o={}).zIndex=450,o.height="80vh",o.props={minHeight:"1vh",overlay:!0},o.content=(0,v.jsx)(h,{confirm:Z}),(0,s.OpenModal)(o);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=(0,l.Y1)(null===(e=(0,u.bh)("sub_account_group"))||void 0===e?void 0:e[t.accountId],"subAccount");return(0,v.jsxs)("div",{className:"item_account",style:{"--hrm_palette_acc_type_color":"debit"===t.type?"var(--hrm_palette-success-fg)":"credit"===t.type?"var(--hrm_palette-blue-purple)":"#c62828"},children:[(0,v.jsxs)("div",{className:"_dsplFlx account_item_bx2 account_header",children:[(0,v.jsxs)("div",{className:"_dsplFlx",style:{minWidth:350,padding:"5px 0 0"},onClick:z,children:[(0,v.jsx)("div",{className:"icon_acc_type",children:(0,v.jsx)(f,{name:"debit"===(null===t||void 0===t?void 0:t.type)?"alpha-d-circle":"credit"===(null===t||void 0===t?void 0:t.type)?"alpha-c-circle":"alert",color:"var(--hrm_palette_acc_type_color)",size:30})}),(0,v.jsx)("div",{className:"code",children:null===t||void 0===t?void 0:t.code}),(0,v.jsx)("div",{className:"name",children:null===t||void 0===t?void 0:t.name})]}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:" addSbAcc purple",onClick:function(){(0,u.Rz)("account_rel_subacc",t);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,v.jsx)(b,{confirm:Z}),(0,s.OpenModal)(n)},children:"Agregar SubCuenta"}),(0,v.jsx)("div",{className:" addSbAcc purple",onClick:function(){return O(null)},children:"Submayor"})]}),(null===N||void 0===N?void 0:N.length)&&(0,v.jsx)("div",{children:null===N||void 0===N?void 0:N.map((function(n){return n.subAccount?(0,v.jsxs)("div",{className:"_dsplFlx account_item_bx2",style:{marginLeft:"65px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx",onClick:function(){return j(n)},children:[(0,v.jsx)("div",{className:"code",children:n.subAccount}),(0,v.jsx)("div",{className:"name",children:n.subAccountName})]}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:" addSbAcc purple",onClick:function(){return O(n.sub_accountId)},children:"Submayor"})]},n.sub_accountId):null}))})]})}},4050:function(n,e,t){t.d(e,{Ht:function(){return g},Jy:function(){return v},S:function(){return z},T7:function(){return _},TP:function(){return y},Y1:function(){return m},ZX:function(){return l},_0:function(){return s},bs:function(){return x},eK:function(){return i},h1:function(){return f},i_:function(){return I},rs:function(){return p},y1:function(){return w}});var r=t(4165),o=t(1413),c=t(5861),a=t(2350),u=t(15),i=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,i,s,l,d,v,p,b,h,m;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=(0,a.bh)("accounts_summary_by_months"))||void 0===t||!t.balanceId){n.next=11;break}return(s=(0,o.Z)({},null===(c=(0,a.bh)((0,a.hQ)()))||void 0===c?void 0:c.calc_sub_myr)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,balanceId:null===t||void 0===t?void 0:t.balanceId},l=(0,a.I7)(s),n.next=7,l;case 7:(d=n.sent)&&(t.summary=d,(0,a.Rz)("accounts_summary_by_months",t),(0,u.OpenToast)({text:"Accounts Summary Updated",timeout:3500}),e&&e()),n.next=22;break;case 11:return(b={}).balanceId=(0,a.M5)(),b.type="accounts_summary_by_months",(h=(0,o.Z)({},null===(v=(0,a.bh)((0,a.hQ)()))||void 0===v?void 0:v.add_balances)).params={businessId:null===(p=(0,a.bh)("profileUser"))||void 0===p?void 0:p.businessId},h.form=b,m=(0,a.I7)(h),n.next=20,m;case 20:n.sent&&((0,a.Rz)("accounts_summary_by_months",b),(0,u.OpenToast)({text:"Something went Wrong. try again later",timeout:3500}),e&&e());case 22:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId},i=(0,a.I7)(u),n.next=5,i;case 5:(s=n.sent)&&((0,a.Rz)("account_list",h(s,"code")),(0,a.Rz)("account_ids",(0,a.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId},i=(0,a.I7)(u),n.next=5,i;case 5:(l=n.sent)&&((0,a.Rz)("sub_account_list",m(l,"subAccount")),(0,a.Rz)("sub_account_group",d(l,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(l,"sub_accountId")),s(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function d(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var v=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,a.bh)("searchQry")},i=(0,a.I7)(u),n.next=5,i;case 5:(s=n.sent)&&((0,a.Rz)("account_list",h((0,a.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){var c,u,i,s,l,d,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(l=(0,o.Z)({},null===(c=(0,a.bh)((0,a.hQ)()))||void 0===c?void 0:c.filter_search_opera)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,":date1":null===(i=(0,a.bh)("date_range_submayor"))||void 0===i?void 0:i.initDate,":date2":null===(s=(0,a.bh)("date_range_submayor"))||void 0===s?void 0:s.lastDate},d=(0,a.I7)(l),n.next=5,d;case 5:(v=n.sent)&&!v.error&&((0,a.Rz)("submayor_list",v),(0,a.Rz)("submayor_group",b(v))),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function b(n,e){var t={operations:[]},r=n&&(0,a._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var h=function(n,e){return(0,a.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},m=function(n,e){return(0,a.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},f=function(n){return(0,a.MV)("sortComprobantesByDate",[n],(function(){var e="date";return n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0}))}))},_=function(n,e,t,r){return(0,a.MV)("calcSubmayor",[n,e,t,r],(function(){var r,c="date",u=new Date(null===(r=(0,a.bh)("date_range_submayor"))||void 0===r?void 0:r.initDate).getMonth(),i=z(u,{account:e,subAccount:t},"calcSubmayor")||0,s=n&&n.sort((function(n,e){var t=n[c],r=e[c];return t<r?-1:t>r?1:0}));return s.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=i+1*t.credit-1*t.debit:t.saldo=i+1*t.debit-1*t.credit,i=t.saldo,t}(n)}))}))};var y=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.get_balance_general_param),u=(0,a.I7)(c),n.next=4,u;case 4:(i=n.sent)&&!i.error&&((0,a.Rz)("balance_general_param",null===i||void 0===i?void 0:i.general),(0,a.Rz)("result_sheet_params",null===i||void 0===i?void 0:i.result),(0,a.Rz)("balance_general_upd_flds",null===i||void 0===i?void 0:i.general_flds),(0,a.Rz)("result_sheet_upd_flds",null===i||void 0===i?void 0:i.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t,c){var u,i,s,l,d,v,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(u=(0,a.bh)((0,a.hQ)()))||void 0===u?void 0:u.find_balances)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,":type":e},l=(0,a.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,a._2)(d)[0],p=d[v],(0,a.Rz)(t,p),(0,a.Rz)(t+"_bck",(0,o.Z)({},p))),c&&c();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),x=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var e,t,c,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId},u=(0,a.I7)(c),n.next=5,u;case 5:if(!(i=n.sent)||i.error){n.next=9;break}return s=function(n){var e,t,r,o,c=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],u=n.subAccount?null===(t=i[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=i[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:c.code+"",nombre:c.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:u||0,type:c.type}},n.abrupt("return",h((0,a.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function I(n,e,t){return n.map((function(n){return{date:(0,a.Gv)(n.date),document:n.document,comprobante:n.comprobanteId,description:n.description,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var w=function(n,e,t){var r=Z(n,"date"),o=function(n){var e={};for(var t in n)e[t]=n[t];return e}(r),c=function(n){var e={};for(var t in n)e[t]=k(n[t]);return e}(e),a={},u={},i={},s={},l=r,d=c;t&&(l=c,d=r);var v=function(n){if(a[n.comprobante]||(a[n.comprobante]=n),u[n.comprobante])return delete u[n.comprobante],1},p=function(n){if(!u[n.comprobante])return u[n.comprobante]=n,1},b=function(n,e){for(var t in o){var r,c,a=o[t],u=1*n.amount,l=u>0?1*a.debito:-1*a.credito;if(i[""+e])break;var d=null===(r=a.documento)||void 0===r?void 0:r.trim(),b=null===(c=n.checkOrSlip)||void 0===c?void 0:c.trim();if(b&&d===b&&l===u){i[""+e]=""+t,s[""+t]=""+e,v(a),delete o[t];break}if(l===u){i[""+e]=""+t,s[""+t]=""+e,v(a),delete o[t];break}p(a)}};for(var h in d){var m=d[h];m.checkOrSlip&&b(m,h)}for(var f in d){b(d[f],f)}var _=[];for(var y in d){var g=d[y];i[y]?(g.comprobante=l[i[y]].comprobante,g.document=l[i[y]].documento,_.push(g)):(g.comprobante="",g.document="",_.push(g))}return{ready:_,cmpbNotInBank:u}},Z=function(n,e){return n&&n.sort((function(n,t){var r=(0,a.Vd)(n[e]),o=(0,a.Vd)(t[e]);return r<o?-1:r>o?1:0}))},k=function(n){var e=(0,o.Z)({},n);return e.hasOwnProperty("Date")&&(e.date=e.Date,delete e.Date),e.hasOwnProperty("Posting Date")&&(e.date=e["Posting Date"],delete e["Posting Date"]),e.hasOwnProperty("Check Number")&&(e.checkOrSlip=e["Check Number"],delete e["Check Number"]),e.hasOwnProperty('"Check Number"')&&(e.checkOrSlip=e['"Check Number"'],delete e['"Check Number"']),e.hasOwnProperty("Check or Slip #")&&(e.checkOrSlip=e["Check or Slip #"],delete e["Check or Slip #"]),e.hasOwnProperty("Amount")&&(e.amount=e.Amount,delete e.Amount),e.hasOwnProperty("Documento")&&(e.document=e.Documento,delete e.Documento),e.hasOwnProperty("Description")&&(e.description=e.Description,delete e.Description),e},z=function(n,e,t){return(0,a.MV)("getPrevBalance",[n,e,t],(function(){var t,r,o=e.account;e.subAccount&&(o=e.account+"_"+e.subAccount);var c=null===(t=(0,a.bh)("accounts_summary_by_months"))||void 0===t||null===(r=t.summary)||void 0===r?void 0:r[o],u=n-1,i=0;if((0,a.UE)(null===c||void 0===c?void 0:c[u])){var s=0;Array.from(Array(n).keys()).map((function(n){var e=(0,a.Zv)(c[n],2);s=1*s+1*e})),i=s}return i}))}},1636:function(){},1413:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=3368.0753006b.chunk.js.map