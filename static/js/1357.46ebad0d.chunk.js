"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1357],{4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return m},Jy:function(){return l},Mp:function(){return x},T7:function(){return f},TP:function(){return b},Y1:function(){return h},ZX:function(){return s},_0:function(){return u},bs:function(){return I},i_:function(){return Z},rs:function(){return d},y1:function(){return g}});var r=t(4165),o=t(1413),c=t(5861),a=t(2350),u=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,s,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId},s=(0,a.I7)(u),n.next=5,s;case 5:(i=n.sent)&&((0,a.Rz)("account_list",p(i,"code")),(0,a.Rz)("account_ids",(0,a.ME)(i,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,s,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId},l=(0,a.I7)(s),n.next=5,l;case 5:(d=n.sent)&&((0,a.Rz)("sub_account_list",h(d,"subAccount")),(0,a.Rz)("sub_account_group",i(d,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(d,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function i(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,s,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,a.bh)("searchQry")},s=(0,a.I7)(u),n.next=5,s;case 5:(i=n.sent)&&((0,a.Rz)("account_list",p((0,a.jQ)(i),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){var c,u,s,i,l,d,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(c=(0,a.bh)((0,a.hQ)()))||void 0===c?void 0:c.find_acc)).params={businessId:null===(u=(0,a.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((s=(0,o.Z)({},null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.find_acc_subacc)).params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,a.I7)(s),n.next=6,d;case 6:(p=n.sent)&&!p.error&&((0,a.Rz)("submayor_list",p),(0,a.Rz)("submayor_group",v(p))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,a._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var p=function(n,e){return(0,a.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},h=function(n,e){return(0,a.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},f=function(n,e,t){return(0,a.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function m(){return p((0,a.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var b=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c,u,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=(0,o.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.get_balance_general_param),u=(0,a.I7)(c),n.next=4,u;case 4:(s=n.sent)&&!s.error&&((0,a.Rz)("balance_general_param",null===s||void 0===s?void 0:s.general),(0,a.Rz)("result_sheet_params",null===s||void 0===s?void 0:s.result),(0,a.Rz)("balance_general_upd_flds",null===s||void 0===s?void 0:s.general_flds),(0,a.Rz)("result_sheet_upd_flds",null===s||void 0===s?void 0:s.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t,c){var u,s,i,l,d,v,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(u=(0,a.bh)((0,a.hQ)()))||void 0===u?void 0:u.find_balances)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,":type":e},l=(0,a.I7)(i),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,a._2)(d)[0],p=d[v],(0,a.Rz)(t,p),(0,a.Rz)(t+"_bck",(0,o.Z)({},p))),c&&c();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),x=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t,c){var u,s,i,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(u=(0,a.bh)((0,a.hQ)()))||void 0===u?void 0:u.calc_balance_general)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,balanceId:e,resultId:t},l=(0,a.I7)(i),n.next=5,l;case 5:(d=n.sent)&&!d.error?c&&c(d):c&&c();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),I=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var e,t,c,u,s,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId},u=(0,a.I7)(c),n.next=5,u;case 5:if(!(s=n.sent)||s.error){n.next=9;break}return i=function(n){var e,t,r,o,c=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],u=n.subAccount?null===(t=s[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=s[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:c.code+"",nombre:c.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:u||0,type:c.type}},n.abrupt("return",p((0,a.bh)("sub_account_list").map(i),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function Z(n,e,t){return n.map((function(n){return{fecha:(0,a.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var g=function(n,e){var t=y(n,"fecha"),r=y((0,a.JO)(e),"Date"),c={},u={};r.map((function(n,e){!function(n,e){for(var r=0;r<t.length;r++){var o=t[r];if(n===(n>0?1*o.debito:-1*o.credito)&&!c[""+e]&&!u[""+r]){c[""+e]=""+r,u[""+r]=""+e;break}}}(1*n.Amount,e)}));var s=[];return r.map((function(n,e){var r=j((0,o.Z)({},n));c[e]?(r.Comprobante=t[c[e]].comprobante,r.Documento=t[c[e]].documento,s.push(r)):(r.Comprobante="",r.Documento="",s.push(r))})),s},y=function(n,e){return n&&n.sort((function(n,t){var r=(0,a.Vd)(n[e]),o=(0,a.Vd)(t[e]);return r<o?-1:r>o?1:0}))},j=function(n){return n.hasOwnProperty("Date")&&(n.date=n.Date,delete n.Date),n.hasOwnProperty("Posting Date")&&(n.date=n["Posting Date"],delete n["Posting Date"]),n.hasOwnProperty("Check Number")&&(n.checkOrSlip=n["Check Number"],delete n["Check Number"]),n.hasOwnProperty('"Check Number"')&&(n.checkOrSlip=n['"Check Number"'],delete n['"Check Number"']),n.hasOwnProperty("Check or Slip #")&&(n.checkOrSlip=n["Check or Slip #"],delete n["Check or Slip #"]),n}},8659:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r=t(4165),o=t(5861),c=t(9439),a=t(2791),u=t(2350),s=t(2647),i=t(9760),l=(t(7889),t(24)),d=t(713),v=t(4050),p=t(8779),h=t(7852),f=t(184),m=(0,s.PU)(),b=(0,l.KP)(),_=(0,l.kZ)(),x=function(n){var e,t=n.data,s=(n.elmId,n.handleRefreshAll),l=(0,a.useState)(!1),v=(0,c.Z)(l,2),x=v[0],I=v[1],Z=(0,a.useState)(0),g=(0,c.Z)(Z,2),y=(g[0],g[1]);(0,a.useEffect)((function(){x||(I(!0),y((0,u.M5)()))}));var j=function(){y((0,u.M5)())},k=function(){(0,d.QJ)(j)},N=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,u.I0)()&&((0,u.Rz)("upd_movement",t),(0,u.Rz)("upd_movement_bck",JSON.parse(JSON.stringify(t))),(e={}).zIndex=450,e.height="80vh",e.props={minHeight:"1vh",overlay:!0},e.content=(0,f.jsx)(b,{confirm:k}),(0,i.OpenModal)(e));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(){(0,d.tH)(null===t||void 0===t?void 0:t.entriesInvoiceId,s)};(0,d.Zj)(null===(e=(0,u.bh)("sub_movement_group"))||void 0===e?void 0:e[t.movementId],"subProduct");return(0,f.jsx)("div",{className:"item_acc",children:(0,f.jsxs)("div",{className:"_dsplFlx item_box movement_header",children:[(0,f.jsxs)("div",{className:"_dsplFlx",onClick:N,children:[(0,f.jsx)("div",{className:"name",children:(0,u.sJ)(null===t||void 0===t?void 0:t.date)}),(0,f.jsx)("div",{className:"code",style:{marginLeft:14},children:null===t||void 0===t?void 0:t.document})]}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsx)("div",{className:" addSbAcc purple",onClick:function(){return function(n){(0,u.Rz)("view_product_entry_comprobante",t);var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,f.jsx)(_,{confirm:k,item:t}),(0,i.OpenModal)(e)}()},children:"Details"}),(0,u.I0)()?(0,f.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:function(){var n=(0,u.bh)("lastTimeCallModal")||0;if((0,u.I0)()){if(Date.now()>n){(0,u.Rz)("lastTimeCallModal",Date.now()+320);var e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};e.content=(0,f.jsx)(p.Z,{confirm:w,item:t}),(0,i.OpenModal)(e)}}else{var r={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};r.content=(0,f.jsx)(h.Z,{}),(0,i.OpenModal)(r)}},children:(0,f.jsx)(m,{name:"outline_delete",color:"#c62828"})}):null]})})},I=(0,s.Vg)(),Z=((0,l.O6)(),(0,l.$d)()),g=(0,l.lA)(),y=function(n){n.data,n.elmId;var e,t,s=n.updObs,l=(0,a.useState)(!1),p=(0,c.Z)(l,2),h=p[0],m=p[1],b=(0,a.useState)(0),_=(0,c.Z)(b,2),y=(_[0],_[1]),j=(0,a.useState)(0),k=(0,c.Z)(j,2),N=(k[0],k[1],(0,a.useState)(!1)),w=(0,c.Z)(N,2),z=w[0],C=w[1];(0,a.useEffect)((function(){h||(m(!0),y((0,u.M5)()),(0,d.QJ)(R),(0,v.Ht)("global_accounts","global_account_params",s))}));var M=function(){},S=function(n){(0,d.QJ)(R)},R=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:y((0,u.M5)()),C(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"accounts_header",children:[(0,f.jsx)("h2",{children:"Movements"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.I0)()?(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,f.jsx)(Z,{}),(0,i.OpenModal)(n)},children:"Entradas"}):null,(0,u.I0)()?(0,f.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,f.jsx)(g,{}),(0,i.OpenModal)(n)},children:"Salidas"}):null]})]}),(0,f.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,f.jsx)(I,{placeholder:"Buscar ....",width:360,obs:y,fetchData:function(n){C(!0),(0,d.dZ)(R)},loading:z,change:function(n){!z&&C(!0)},callempty:S,keyFlds:"searchMovQry"}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("div",{className:"total_comprobante_title",children:"No de Movientos:"}),(0,f.jsx)("div",{className:"total_comprobante gray",children:(0,f.jsx)("span",{children:null===(e=(0,u._2)((0,u.bh)("movements_list")))||void 0===e?void 0:e.length})})]})]}),(0,f.jsx)("div",{className:"movements_container scollVh",children:(0,u.bh)("movements_list")&&(null===(t=(0,u._2)((0,u.bh)("movements_list")))||void 0===t?void 0:t.map((function(n){return(0,f.jsx)(x,{data:(0,u.bh)("movements_list")[n],elmId:n,openUpdateView:M,handleRefreshAll:S},n)})))})]})}},8779:function(n,e,t){t(2791),t(1534);var r=t(9760),o=t(184);e.Z=function(n){var e=n.data,t=n.confirm,c=(n.handleClick,n.close,e.modalID),a=function(n){(0,r.CloseModal)({id:c})};return(0,o.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",children:"Eliminar Producto"}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"_dsplFlx ",children:(0,o.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"group_title addBtn",onClick:a,children:"Cancelar"}),(0,o.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),a()},children:"Eliminar"})]})]})}},7889:function(){}}]);
//# sourceMappingURL=1357.46ebad0d.chunk.js.map