"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1357],{4050:function(n,e,t){t.d(e,{Ht:function(){return x},Je:function(){return b},Jy:function(){return l},Mp:function(){return Z},T7:function(){return m},TP:function(){return _},Y1:function(){return f},ZX:function(){return i},_0:function(){return u},bs:function(){return I},h1:function(){return h},i_:function(){return g},rs:function(){return d},y1:function(){return y}});var r=t(4165),o=t(1413),c=t(5861),a=t(2350),u=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId},i=(0,a.I7)(u),n.next=5,i;case 5:(s=n.sent)&&((0,a.Rz)("account_list",p(s,"code")),(0,a.Rz)("account_ids",(0,a.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,i,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId},l=(0,a.I7)(i),n.next=5,l;case 5:(d=n.sent)&&((0,a.Rz)("sub_account_list",f(d,"subAccount")),(0,a.Rz)("sub_account_group",s(d,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(d,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,a.bh)("searchQry")},i=(0,a.I7)(u),n.next=5,i;case 5:(s=n.sent)&&((0,a.Rz)("account_list",p((0,a.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){var c,u,i,s,l,d,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(c=(0,a.bh)((0,a.hQ)()))||void 0===c?void 0:c.find_acc)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((i=(0,o.Z)({},null===(s=(0,a.bh)((0,a.hQ)()))||void 0===s?void 0:s.find_acc_subacc)).params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,a.I7)(i),n.next=6,d;case 6:(p=n.sent)&&!p.error&&((0,a.Rz)("submayor_list",p),(0,a.Rz)("submayor_group",v(p))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,a._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var p=function(n,e){return(0,a.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},f=function(n,e){return(0,a.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},h=function(n){return(0,a.MV)("sortComprobantesByDate",[n],(function(){var e="date";return n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0}))}))},m=function(n,e,t){return(0,a.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function b(){return p((0,a.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var _=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.get_balance_general_param),u=(0,a.I7)(c),n.next=4,u;case 4:(i=n.sent)&&!i.error&&((0,a.Rz)("balance_general_param",null===i||void 0===i?void 0:i.general),(0,a.Rz)("result_sheet_params",null===i||void 0===i?void 0:i.result),(0,a.Rz)("balance_general_upd_flds",null===i||void 0===i?void 0:i.general_flds),(0,a.Rz)("result_sheet_upd_flds",null===i||void 0===i?void 0:i.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t,c){var u,i,s,l,d,v,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(u=(0,a.bh)((0,a.hQ)()))||void 0===u?void 0:u.find_balances)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,":type":e},l=(0,a.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,a._2)(d)[0],p=d[v],(0,a.Rz)(t,p),(0,a.Rz)(t+"_bck",(0,o.Z)({},p))),c&&c();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),Z=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t,c){var u,i,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(u=(0,a.bh)((0,a.hQ)()))||void 0===u?void 0:u.calc_balance_general)).params={businessId:null===(i=(0,a.bh)("profileUser"))||void 0===i?void 0:i.businessId,balanceId:e,resultId:t},l=(0,a.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?c&&c(d):c&&c();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),I=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var e,t,c,u,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId},u=(0,a.I7)(c),n.next=5,u;case 5:if(!(i=n.sent)||i.error){n.next=9;break}return s=function(n){var e,t,r,o,c=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],u=n.subAccount?null===(t=i[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=i[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:c.code+"",nombre:c.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:u||0,type:c.type}},n.abrupt("return",p((0,a.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function g(n,e,t){return n.map((function(n){return{fecha:(0,a.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var y=function(n,e,t){var r=j(n,"fecha"),o={},c={},a=r,u=e;t&&(a=e,u=r);u.map((function(n,e){!function(n,e){for(var t=0;t<a.length;t++){var r,u,i=a[t],s=1*n.Amount,l=s>0?1*i.debito:-1*i.credito;if((null===(r=i.documento)||void 0===r?void 0:r.trim())===(null===(u=n.checkOrSlip)||void 0===u?void 0:u.trim())&&l===s&&!o[""+e]&&!c[""+t]){o[""+e]=""+t,c[""+t]=""+e;break}if(l===s&&!o[""+e]&&!c[""+t]){o[""+e]=""+t,c[""+t]=""+e;break}}}(k(n),e)}));var i=[];return u.map((function(n,e){var t=k(n);o[e]?(t.Comprobante=a[o[e]].comprobante,t.Documento=a[o[e]].documento,i.push(t)):(t.Comprobante="",t.Documento="",i.push(t))})),i},j=function(n,e){return n&&n.sort((function(n,t){var r=(0,a.Vd)(n[e]),o=(0,a.Vd)(t[e]);return r<o?-1:r>o?1:0}))},k=function(n){var e=(0,o.Z)({},n);return e.hasOwnProperty("Date")&&(e.date=e.Date,delete e.Date),e.hasOwnProperty("Posting Date")&&(e.date=e["Posting Date"],delete e["Posting Date"]),e.hasOwnProperty("Check Number")&&(e.checkOrSlip=e["Check Number"],delete e["Check Number"]),e.hasOwnProperty('"Check Number"')&&(e.checkOrSlip=e['"Check Number"'],delete e['"Check Number"']),e.hasOwnProperty("Check or Slip #")&&(e.checkOrSlip=e["Check or Slip #"],delete e["Check or Slip #"]),e}},8659:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r=t(4165),o=t(5861),c=t(9439),a=t(2791),u=t(2350),i=t(2647),s=t(9760),l=(t(7889),t(24)),d=t(713),v=t(4050),p=t(8779),f=t(7852),h=t(184),m=(0,i.PU)(),b=((0,l.KP)(),(0,l.kZ)()),_=function(n){var e,t=n.data,i=(n.elmId,n.handleRefreshAll),l=(0,a.useState)(!1),v=(0,c.Z)(l,2),_=v[0],x=v[1],Z=(0,a.useState)(0),I=(0,c.Z)(Z,2),g=(I[0],I[1]);(0,a.useEffect)((function(){_||(x(!0),g((0,u.M5)()))}));var y=function(){g((0,u.M5)())},j=function(){(0,d.QJ)(y)},k=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),N=function(){(0,d.tH)(null===t||void 0===t?void 0:t.entriesInvoiceId,i)};(0,d.Zj)(null===(e=(0,u.bh)("sub_movement_group"))||void 0===e?void 0:e[t.movementId],"subProduct");return(0,h.jsx)("div",{className:"item_acc",children:(0,h.jsxs)("div",{className:"_dsplFlx item_box movement_header",children:[(0,h.jsxs)("div",{className:"_dsplFlx",onClick:k,children:[(0,h.jsx)("div",{className:"name",children:(0,u.sJ)(null===t||void 0===t?void 0:t.date)}),(0,h.jsx)("div",{className:"code",style:{marginLeft:14},children:null===t||void 0===t?void 0:t.document})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:" addSbAcc purple",onClick:function(){return function(n){(0,u.Rz)("view_product_entry_comprobante",t);var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(b,{confirm:j,item:t}),(0,s.OpenModal)(e)}()},children:"Details"}),(0,u.I0)()?(0,h.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:function(){var n=(0,u.bh)("lastTimeCallModal")||0;if((0,u.I0)()){if(Date.now()>n){(0,u.Rz)("lastTimeCallModal",Date.now()+320);var e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};e.content=(0,h.jsx)(p.Z,{label:"Eliminar Movimiento",confirm:N,item:t}),(0,s.OpenModal)(e)}}else{var r={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};r.content=(0,h.jsx)(f.Z,{}),(0,s.OpenModal)(r)}},children:(0,h.jsx)(m,{name:"outline_delete",color:"#c62828"})}):null]})})},x=(0,i.Vg)(),Z=((0,l.O6)(),(0,l.$d)()),I=(0,l.lA)(),g=function(n){n.data,n.elmId;var e,t,i=n.updObs,l=(0,a.useState)(!1),p=(0,c.Z)(l,2),f=p[0],m=p[1],b=(0,a.useState)(0),g=(0,c.Z)(b,2),y=(g[0],g[1]),j=(0,a.useState)(0),k=(0,c.Z)(j,2),N=(k[0],k[1],(0,a.useState)(!1)),w=(0,c.Z)(N,2),C=w[0],M=w[1];(0,a.useEffect)((function(){f||(m(!0),y((0,u.M5)()),(0,d.QJ)(A),(0,v.Ht)("global_accounts","global_account_params",i))}));var z=function(){},S=function(n){(0,d.QJ)(A)},A=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:y((0,u.M5)()),M(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"",children:[(0,h.jsxs)("div",{className:"accounts_header",children:[(0,h.jsx)("h2",{children:"Movements"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.I0)()?(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,h.jsx)(Z,{}),(0,s.OpenModal)(n)},children:"Entradas"}):null,(0,u.I0)()?(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,h.jsx)(I,{}),(0,s.OpenModal)(n)},children:"Salidas"}):null]})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,h.jsx)(x,{placeholder:"Buscar ....",width:360,obs:y,fetchData:function(n){M(!0),(0,d.dZ)(A)},loading:C,change:function(n){!C&&M(!0)},callempty:S,keyFlds:"searchMovQry"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"total_comprobante_title",children:"No de Movientos:"}),(0,h.jsx)("div",{className:"total_comprobante gray",children:(0,h.jsx)("span",{children:null===(e=(0,u._2)((0,u.bh)("movements_list")))||void 0===e?void 0:e.length})})]})]}),(0,h.jsx)("div",{className:"movements_container scollVh",children:(0,u.bh)("movements_list")&&(null===(t=(0,u._2)((0,u.bh)("movements_list")))||void 0===t?void 0:t.map((function(n){return(0,h.jsx)(_,{data:(0,u.bh)("movements_list")[n],elmId:n,openUpdateView:z,handleRefreshAll:S},n)})))})]})}},8779:function(n,e,t){t(2791),t(1534);var r=t(9760),o=t(184);e.Z=function(n){var e=n.data,t=n.confirm,c=n.label,a=(n.close,e.modalID),u=function(n){(0,r.CloseModal)({id:a})};return(0,o.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",children:c}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"_dsplFlx ",children:(0,o.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"group_title addBtn",onClick:u,children:"Cancelar"}),(0,o.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),u()},children:"Eliminar"})]})]})}},7889:function(){}}]);
//# sourceMappingURL=1357.b68d8a52.chunk.js.map