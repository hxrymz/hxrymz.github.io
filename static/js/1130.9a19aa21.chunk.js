"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1130,9760,15],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return d},OpenModal:function(){return u},default:function(){return c}});var r=t(2791),i=t(5408),o=t(2350),a=t(184),s="listDialog_mdh392",c=function(){var n=(0,o.bh)("listDialog")||{},e=((0,i.Z)(s),Object.keys(n));return(0,a.jsx)(a.Fragment,{children:e.map((function(e,t){var i=n[e];if(i&&i.visible){var o={};i.height&&(o.heigth=i.height),i.width,i.zIndex&&(o.zIndex=i.zIndex-1);var s={zIndex:i.zIndex},c=null,u=i.data;return i.content&&(c=r.cloneElement(i.content,{data:u})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:o,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:s,id:e,children:c})}),i.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:n})}}):null]},e)}}))})},u=function(n){var e=(0,o.bh)("listDialog")||{},t=(0,o.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,o.Rz)("listDialog",e),(0,o.wt)(s)))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,o.Rz)("listDialog",e),(0,o.wt)(s),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,o.Rz)("modalOpen",t),(0,o.wt)(s)}),125)},d=function(n){var e,t,r,i=(0,o.bh)("listDialog")||{},a=n.id;i[a]&&(i[a].observeResize&&i[a].observeInterval&&clearInterval(i[a].observeInterval),i[a].display=!1,null===(e=i[a])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,o.Rz)("listDialog",i),delete i[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,o.wt)(s),setTimeout((function(){delete i[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,o.Rz)("modalOpen",null)}),750))}},15:function(n,e,t){t.r(e),t.d(e,{CloseToast:function(){return u},OpenToast:function(){return c},default:function(){return s}});t(2791);var r=t(5408),i=t(2350),o=t(184),a="listToast_gLt754",s=function(){var n=(0,i.bh)("listToat")||{},e=((0,r.Z)(a),Object.keys(n));return(0,o.jsx)(o.Fragment,{children:n&&e.map((function(e,t){var r=n[e];if(r&&r.visible){r.display;var i=r.data,a={opacity:r.display?1:0},s=i&&i.text?i.text:"sdgfdsfgsdfg";return(0,o.jsx)("div",{id:e,className:"TtBase_Toast",children:(0,o.jsxs)("div",{className:r.display?"toast active":"toast",style:a,children:[(0,o.jsx)("div",{className:"text",children:s}),(0,o.jsx)("div",{className:"actions",children:(0,o.jsx)("button",{className:"md-button md-ink-ripple",type:"button",style:{},onClick:function(){u({id:e})},children:"Ok"})})]})})}}))})},c=function(n){var e=(0,i.bh)("listToat")||{},t=(0,i.M5)();n.Id&&(t=n.Id),e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t,r.text=n.text,e[t].data=r,e[t].display=!0,(0,i.Rz)("listToat",e),(0,i.wt)(a),setTimeout((function(){u({id:t})}),n.timeout||3e3)},u=function(n){var e=(0,i.bh)("listToat")||{},t=n.id;e&&e[t]&&(e[t].display=!1,(0,i.Rz)("listToat",e),(0,i.wt)(a),setTimeout((function(){delete e[t],(0,i.Rz)("listToat",e),(0,i.wt)(a)}),275))}},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return m},Jy:function(){return d},Mp:function(){return I},T7:function(){return b},TP:function(){return x},Y1:function(){return f},ZX:function(){return c},_0:function(){return s},bs:function(){return Z},h1:function(){return h},i_:function(){return y},rs:function(){return l},y1:function(){return w}});var r=t(4165),i=t(1413),o=t(5861),a=t(2350),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(s),n.next=5,c;case 5:(u=n.sent)&&((0,a.Rz)("account_list",p(u,"code")),(0,a.Rz)("account_ids",(0,a.ME)(u,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,c,d,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},d=(0,a.I7)(c),n.next=5,d;case 5:(l=n.sent)&&((0,a.Rz)("sub_account_list",f(l,"subAccount")),(0,a.Rz)("sub_account_group",u(l,"accountId")),(0,a.Rz)("sub_account_ids",(0,a.ME)(l,"sub_accountId")),s(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function u(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchQry")},c=(0,a.I7)(s),n.next=5,c;case 5:(u=n.sent)&&((0,a.Rz)("account_list",p((0,a.jQ)(u),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,s,c,u,d,l,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.find_acc)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((c=(0,i.Z)({},null===(u=(0,a.bh)((0,a.hQ)()))||void 0===u?void 0:u.find_acc_subacc)).params={businessId:null===(d=(0,a.bh)("profileUser"))||void 0===d?void 0:d.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),l=(0,a.I7)(c),n.next=6,l;case 6:(p=n.sent)&&!p.error&&((0,a.Rz)("submayor_list",p),(0,a.Rz)("submayor_group",v(p))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,a._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var p=function(n,e){return(0,a.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],i=1*t[e];return r<i?-1:r>i?1:0}))}))},f=function(n,e){return(0,a.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],i=1*t[e];return r<i?-1:r>i?1:0}))}))},h=function(n){return(0,a.MV)("sortComprobantesByDate",[n],(function(){var e="date";return n.sort((function(n,t){var r=n[e],i=t[e];return r<i?-1:r>i?1:0}))}))},b=function(n,e,t){return(0,a.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],i=t[e];return r<i?-1:r>i?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,i.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function m(){return p((0,a.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var x=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.get_balance_general_param),s=(0,a.I7)(o),n.next=4,s;case 4:(c=n.sent)&&!c.error&&((0,a.Rz)("balance_general_param",null===c||void 0===c?void 0:c.general),(0,a.Rz)("result_sheet_params",null===c||void 0===c?void 0:c.result),(0,a.Rz)("balance_general_upd_flds",null===c||void 0===c?void 0:c.general_flds),(0,a.Rz)("result_sheet_upd_flds",null===c||void 0===c?void 0:c.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var s,c,u,d,l,v,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,i.Z)({},null===(s=(0,a.bh)((0,a.hQ)()))||void 0===s?void 0:s.find_balances)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId,":type":e},d=(0,a.I7)(u),n.next=5,d;case 5:(l=n.sent)&&!l.error&&(v=(0,a._2)(l)[0],p=l[v],(0,a.Rz)(t,p),(0,a.Rz)(t+"_bck",(0,i.Z)({},p))),o&&o();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),I=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var s,c,u,d,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,i.Z)({},null===(s=(0,a.bh)((0,a.hQ)()))||void 0===s?void 0:s.calc_balance_general)).params={businessId:null===(c=(0,a.bh)("profileUser"))||void 0===c?void 0:c.businessId,balanceId:e,resultId:t},d=(0,a.I7)(u),n.next=5,d;case 5:(l=n.sent)&&!l.error?o&&o(l):o&&o();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),Z=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var e,t,o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=(0,i.Z)({},null===(e=(0,a.bh)((0,a.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId},s=(0,a.I7)(o),n.next=5,s;case 5:if(!(c=n.sent)||c.error){n.next=9;break}return u=function(n){var e,t,r,i,o=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],s=n.subAccount?null===(t=c[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(i=c[n.accountId])||void 0===i?void 0:i.saldo;return{cuenta:o.code+"",nombre:o.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:s||0,type:o.type}},n.abrupt("return",p((0,a.bh)("sub_account_list").map(u),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function y(n,e,t){return n.map((function(n){return{fecha:(0,a.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var w=function(n,e,t){var r=g(n,"fecha"),i=function(n){var e={};for(var t in n)e[t]=n[t];return e}(r),o=function(n){var e={};for(var t in n)e[t]=j(n[t]);return e}(e),s={},c={},u={},d=r,l=o;t&&(d=o,l=r);var v=function(n,e){for(var t in i){var r,o,a,d,l=i[t],v=1*n.Amount,p=v>0?1*l.debito:-1*l.credito;if(s[""+e])break;null===(r=l.documento)||void 0===r||r.trim(),null===(o=n.checkOrSlip)||void 0===o||o.trim();if((null===(a=l.documento)||void 0===a?void 0:a.trim())===(null===(d=n.checkOrSlip)||void 0===d?void 0:d.trim())&&p===v){s[""+e]=""+t,c[""+t]=""+e,delete i[t],delete u[""+e];break}if(p===v){s[""+e]=""+t,c[""+t]=""+e,delete i[t],delete u[""+e];break}u[""+e]="NtF"}};for(var p in l){var f=l[p];f.checkOrSlip&&v(f,p)}for(var h in l){v(l[h],h)}var b=[];for(var m in(0,a._2)(u).map((function(n,e){})),l){var x=l[m];s[m]?(x.Comprobante=d[s[m]].comprobante,x.Documento=d[s[m]].documento,b.push(x)):(x.Comprobante="",x.Documento="",b.push(x))}return b},g=function(n,e){return n&&n.sort((function(n,t){var r=(0,a.Vd)(n[e]),i=(0,a.Vd)(t[e]);return r<i?-1:r>i?1:0}))},j=function(n){var e=(0,i.Z)({},n);return e.hasOwnProperty("Date")&&(e.date=e.Date,delete e.Date),e.hasOwnProperty("Posting Date")&&(e.date=e["Posting Date"],delete e["Posting Date"]),e.hasOwnProperty("Check Number")&&(e.checkOrSlip=e["Check Number"],delete e["Check Number"]),e.hasOwnProperty('"Check Number"')&&(e.checkOrSlip=e['"Check Number"'],delete e['"Check Number"']),e.hasOwnProperty("Check or Slip #")&&(e.checkOrSlip=e["Check or Slip #"],delete e["Check or Slip #"]),e}},1130:function(n,e,t){t.r(e);var r=t(4165),i=t(5861),o=t(9439),a=t(2791),s=t(2350),c=t(2647),u=(t(1534),t(7689)),d=t(6824),l=t(4050),v=t(6677),p=t(713),f=t(9760),h=t(15),b=t(184),m=(0,c.PU)(),x=(0,c.JC)(),_="view_product_entry_comprobante";e.default=function(n){var e,t,c,d,m,x,Z,w=n.data,g=n.confirm,j=n.item,k=(0,a.useState)(!1),N=(0,o.Z)(k,2),z=N[0],R=N[1],S=(0,a.useState)(0),T=(0,o.Z)(S,2),Q=(T[0],T[1]),C=(0,u.s0)();(0,a.useEffect)((function(){var n,e;z||(R(!0),(0,s.Rz)("accountPicker",{}),Q((0,s.M5)()),(0,s.bh)("account_ids")||(0,l.ZX)(D),null!==(n=(0,s.bh)("providers_ids"))&&void 0!==n&&null!==(e=n[null===j||void 0===j?void 0:j.providerId])&&void 0!==e&&e.name||(0,v.Je)(D),(0,s.bh)("products_ids")||(0,p.ii)(D))}),[j.entriesInvoiceId]);var D=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Q((0,s.M5)());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),F=function(n){g&&g(),w.modalID&&(0,f.CloseModal)({id:w.modalID}),n.data.comprobanteId&&C({pathname:"/accounting-ledger",search:"?cId=".concat(n.data.comprobanteId)})},A=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,p.VI)(null===j||void 0===j?void 0:j.entriesInvoiceId,F);case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),U=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),O=null===(e=(0,s.bh)("providers_ids"))||void 0===e||null===(t=e[null===j||void 0===j?void 0:j.providerId])||void 0===t?void 0:t.name,M=function(){(0,h.OpenToast)({text:"Copied to clipobard",timeout:1500})},P=function(n){(0,s.vQ)(n,M)};return(0,b.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"860px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsx)("p",{className:"form_title",children:"Entrada de Mercancias"}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsx)("div",{children:(0,b.jsx)("div",{className:"date2Upd",children:(0,s.sG)(null===(c=(0,s.bh)(_))||void 0===c?void 0:c.date)})})]}),(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsxs)("div",{className:" ",children:[(0,b.jsx)("p",{className:"label",children:"Pay to"}),(0,b.jsx)("div",{className:"date2Upd",children:O})]}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"label",children:"Documento"}),(0,b.jsx)("div",{className:"date2Upd",onClick:function(){var n;return P(null===(n=(0,s.bh)(_))||void 0===n?void 0:n.document)},children:null===(d=(0,s.bh)(_))||void 0===d?void 0:d.document})]})]}),(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsxs)("div",{className:" ",children:[(0,b.jsx)("p",{className:"label",children:"Descripcion"}),(0,b.jsx)("div",{className:"value_desc",onClick:function(){var n;return P(null===(n=(0,s.bh)(_))||void 0===n?void 0:n.description)},children:null===(m=(0,s.bh)(_))||void 0===m?void 0:m.description})]}),(0,b.jsx)("div",{className:"flexSpace"})]}),(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsx)("div",{className:"flexSpace"}),null!==(x=(0,s.bh)(_))&&void 0!==x&&x.comprobanteId?(0,b.jsxs)("div",{className:" ",onClick:U,children:[(0,b.jsx)("p",{className:"label",children:"Comprobante"}),(0,b.jsx)("div",{className:"date2Upd",children:null===(Z=(0,s.bh)(_))||void 0===Z?void 0:Z.comprobanteId})]}):(0,b.jsx)("p",{className:"group_title addBtn purple",onClick:A,children:"Enviar a contabilidad"})]}),(0,b.jsx)(I,{data:j.inventoryEntries}),(0,b.jsx)(y,{data:j.extrasEntries}),(0,b.jsx)("div",{className:"_dsplFlx ",children:(0,b.jsx)("div",{className:"flexSpace"})})]})};var I=function(n){var e=n.data,t=(0,a.useState)(0),r=(0,o.Z)(t,2);r[0],r[1];return(0,b.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,b.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,b.jsx)("div",{className:"tr_bar tr_bar_40 left_alg",children:"Producto"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_10",children:"ID"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_15",children:"Dimension"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_15",children:"Qty"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_15",children:"Precio"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_5",children:(0,b.jsx)("div",{className:"icon",onClick:function(){(0,d.H)(e)},children:(0,b.jsx)(m,{name:"printer",color:"#646cff"})})})]}),e&&e.length>0&&(null===e||void 0===e?void 0:e.map((function(n,e){return(0,b.jsx)(Z,{idKey:n.productId,index:e,data:n},n.productId+"_"+e)})))]})},Z=function(n){var e,t=n.data,r=(n.index,null===(e=(0,s.bh)("products_ids"))||void 0===e?void 0:e[null===t||void 0===t?void 0:t.productId]),i=(null===t||void 0===t?void 0:t.dimension)&&(null===t||void 0===t?void 0:t.dimension.split(",")[0])+" X "+(null===t||void 0===t?void 0:t.dimension.split(",")[1]),o=(null===t||void 0===t?void 0:t.dimension)&&{lbl:i+" (inch)",hover:(null===t||void 0===t?void 0:t.squareFeet)+"S/F X $"+(0,s.Zv)(null===t||void 0===t?void 0:t.pricePerSquareFeet,2)},a=function(){(0,h.OpenToast)({text:"Copied to clipobard",timeout:1500})},c=function(n){(0,s.vQ)(n,a)};return(0,b.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,b.jsx)("div",{className:"tr_bar tr_bar_40 left_alg",children:null===r||void 0===r?void 0:r.name}),(0,b.jsx)("div",{className:"tr_bar tr_bar_10 left_alg date2Upd",children:null===t||void 0===t?void 0:t.alphaCode}),(0,b.jsx)("div",{className:"tr_bar tr_bar_15",style:{marginTop:-4},children:null!==t&&void 0!==t&&t.dimension?(0,b.jsx)(x,{data:o,color:"#282828",labelField:"lbl",infoField:"hover"}):null}),(0,b.jsx)("div",{className:"tr_bar tr_bar_15",onClick:function(){return c((0,s.Zv)(null===t||void 0===t?void 0:t.qty,2))},children:(0,s.Zv)(null===t||void 0===t?void 0:t.qty,2)}),(0,b.jsx)("div",{className:"tr_bar tr_bar_15",onClick:function(){return c((0,s.Zv)(null===t||void 0===t?void 0:t.price,2))},children:(0,s.Zv)(null===t||void 0===t?void 0:t.price,2)}),(0,b.jsx)("div",{className:"flexSpace"})]})},y=function(n){var e=n.data;return(0,b.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,b.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,b.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_25",children:"Monto"})]}),e&&(null===e||void 0===e?void 0:e.map((function(n,e){return(0,b.jsx)(w,{idKey:n.operationId,data:n},n.operationId)})))]})},w=function(n){var e,t,r=n.data,i=null===(e=(0,s.bh)("account_ids"))||void 0===e?void 0:e[null===r||void 0===r?void 0:r.account],o=null===(t=(0,s.bh)("sub_account_ids"))||void 0===t?void 0:t[null===r||void 0===r?void 0:r.subAccount];return(0,b.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,b.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,b.jsx)(x,{data:i,labelField:"name",infoField:"code"})}),(0,b.jsx)("div",{className:"tr_bar tr_bar_25",children:(0,b.jsx)(x,{data:o,labelField:"subAccountName",infoField:"subAccount"})}),(0,b.jsx)("div",{className:"tr_bar tr_bar_25"}),(0,b.jsx)("div",{className:"tr_bar tr_bar_25",children:"debit"===(null===r||void 0===r?void 0:r.type)?(0,s.Zv)(null===r||void 0===r?void 0:r.amount,2):"0.00"}),(0,b.jsx)("div",{className:"flexSpace"})]})}},6824:function(n,e,t){t.d(e,{H:function(){return c}});var r=t(4165),i=t(5861),o=t(6963),a=t(2350),s=t(4e3),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,c,u,d,l,v,p,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.PDFDocument.create();case 2:return(t=n.sent).registerFontkit(s.Z),n.next=6,t.embedFont(o.StandardFonts.TimesRoman);case 6:return c=n.sent,n.next=9,t.embedFont(o.StandardFonts.TimesRomanBold);case 9:if(u=n.sent,!(0,a.bh)("modernFontReport")){n.next=25;break}return"https://qvamarkets.com/gql_api/getStatic?fileName=Roboto-Bold.ttf",n.next=14,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=Roboto-Bold.ttf").then((function(n){return n.arrayBuffer()}));case 14:return d=n.sent,n.next=17,t.embedFont(d);case 17:return u=n.sent,"https://qvamarkets.com/gql_api/getStatic?fileName=gSans-Italic.otf",n.next=21,fetch("https://qvamarkets.com/gql_api/getStatic?fileName=gSans-Italic.otf").then((function(n){return n.arrayBuffer()}));case 21:return l=n.sent,n.next=24,t.embedFont(l);case 24:c=n.sent;case 25:return v=e.map(function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,i){var s,d,l,v,p,f,h,b,m,x,_,I,Z,y,w,g,j,k;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=t.addPage([288,162]),v=l.getSize(),v.width,p=v.height,f=p-14,h=(0,a.ye)((null===e||void 0===e?void 0:e.inventoryId)+""),n.next=6,fetch(h).then((function(n){return n.arrayBuffer()}));case 6:return b=n.sent,n.next=9,t.embedPng(b);case 9:(m=n.sent)&&l.drawImage(m,{x:10,y:80,width:80,height:80}),x=u.widthOfTextAtSize((null===e||void 0===e?void 0:e.inventoryId)+"",12),_=c.widthOfTextAtSize("ID: ",11),l.drawText("ID: ",{x:270-x-_,y:f,size:11,font:c,color:(0,o.rgb)(0,0,0)}),l.drawText((null===e||void 0===e?void 0:e.inventoryId)+"",{x:270-x,y:f,size:12,font:u,color:(0,o.rgb)(0,0,0)}),f-=20,I=null!==e&&void 0!==e&&e.dimension?(null===e||void 0===e?void 0:e.dimension.split(",")[0])+" X "+(null===e||void 0===e?void 0:e.dimension.split(",")[1])+" inch":"",Z=u.widthOfTextAtSize(I+"",19),l.drawText(I+"",{x:270-Z,y:f-24,size:19,font:u,color:(0,o.rgb)(.06,.06,.06)}),y=null!==e&&void 0!==e&&e.squareFeet?(null===e||void 0===e?void 0:e.squareFeet)+" S/F":"1 Unit",w=u.widthOfTextAtSize(y+"",19),l.drawText(y+"",{x:270-w,y:f-44,size:19,font:u,color:(0,o.rgb)(.06,.06,.06)}),f-=65,l.drawRectangle({x:15,y:f+1,width:560,height:.85,color:(0,o.rgb)(.53,.53,.53),borderColor:(0,o.rgb)(.53,.53,.53)}),g=null===(s=(0,a.bh)("products_ids"))||void 0===s||null===(d=s[null===e||void 0===e?void 0:e.productId])||void 0===d?void 0:d.name,l.drawText(g+"",{x:20,y:f-15,size:14,font:c,color:(0,o.rgb)(0,0,0)}),f-=25,l.drawRectangle({x:15,y:f+1,width:560,height:.85,color:(0,o.rgb)(.53,.53,.53),borderColor:(0,o.rgb)(.53,.53,.53)}),f-=10,f-=20,j=c.widthOfTextAtSize("Date: ",11),k=u.widthOfTextAtSize((0,a.Gv)(null===e||void 0===e?void 0:e.date)+"",12),l.drawText("Date: ",{x:270-j-k,y:f,size:11,font:c,color:(0,o.rgb)(0,0,0)}),l.drawText((0,a.Gv)(null===e||void 0===e?void 0:e.date)+"",{x:270-k,y:f,size:12,font:u,color:(0,o.rgb)(.06,.06,.06)}),l.drawText((null===e||void 0===e?void 0:e.alphaCode)+"",{x:20,y:f+4,size:22,font:u,color:(0,o.rgb)(.06,.06,.06)});case 35:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),n.next=28,Promise.all(v);case 28:return n.sent,n.next=31,t.save();case 31:p=n.sent,f=(0,a.ou)(p),window.open(f);case 34:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},713:function(n,e,t){t.d(e,{QJ:function(){return l},Rd:function(){return c},VI:function(){return m},Ve:function(){return d},WA:function(){return h},ZW:function(){return s},Zj:function(){return p},dZ:function(){return v},ii:function(){return u},nj:function(){return f},tH:function(){return b}});var r=t(4165),i=t(1413),o=t(5861),a=t(2350),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,s,c,u,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.get_inventory_prod)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,":productId":e},u=(0,a.I7)(c),n.next=5,u;case 5:(d=n.sent)&&((0,a.Rz)("inv_products_list",p((0,a.jQ)(d.list),"name")),(0,a.Rz)("inv_products_stock",d.stock),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,s,c,u,d,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.get_prod_stock)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,productId:e},u=(0,a.I7)(c),n.next=5,u;case 5:(d=n.sent)&&((l=(0,i.Z)({},(0,a.bh)("products_stock")))[e]=d.stock,(0,a.Rz)("products_stock",l),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_prods)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(s),n.next=5,c;case 5:(u=n.sent)&&((0,a.Rz)("products_list",p(u,"name")),(0,a.Rz)("products_ids",(0,a.ME)((0,a.jQ)(u),"productId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_prod)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchQry")},c=(0,a.I7)(s),n.next=5,c;case 5:(u=n.sent)&&((0,a.Rz)("products_list",p((0,a.jQ)(u),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_entry_invoices)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(s),n.next=5,c;case 5:(u=n.sent)&&((0,a.Rz)("movements_list",p(u,"date")),(0,a.Rz)("movements_ids",(0,a.ME)((0,a.jQ)(u),"inventoryId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_entry_invoice)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchMovQry")},c=(0,a.I7)(s),n.next=5,c;case 5:(u=n.sent)&&((0,a.Rz)("movements_list",p((0,a.jQ)(u),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var p=function(n,e){return(0,a.MV)("sortProducts",[n],(function(){return n&&n.sort((function(n,t){var r=n[e],i=t[e];return r<i?-1:r>i?1:0}))}))},f=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.delete_prod)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,productId:e},u=(0,a.I7)(c),n.next=5,u;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.delete_inventory)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,inventoryId:e},u=(0,a.I7)(c),n.next=5,u;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),b=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.delete_entry_invoice)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,entriesInvoiceId:e},u=(0,a.I7)(c),n.next=5,u;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,s,c,u,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.entry_invoice_acc_2)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,entriesInvoiceId:e},u=(0,a.I7)(c),n.next=5,u;case 5:(d=n.sent)&&t&&t(d);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},6677:function(n,e,t){t.d(e,{Je:function(){return s},Qn:function(){return l},UO:function(){return c},mQ:function(){return d}});var r=t(4165),i=t(1413),o=t(5861),a=t(2350),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_prov_cust)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId},c=(0,a.I7)(s),n.next=5,c;case 5:(d=n.sent)&&((0,a.Rz)("providers_list",u((0,a.jQ)(d),"code")),(0,a.Rz)("providers_ids",(0,a.ME)((0,a.jQ)(d),"providerId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,s,c,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,i.Z)({},null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_prov_cust)).params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("search_prov")},c=(0,a.I7)(s),n.next=5,c;case 5:(d=n.sent)&&((0,a.Rz)("providers_list",u((0,a.jQ)(d),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var u=function(n,e){return(0,a.MV)("sortProviders",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],i=1*t[e];return r<i?-1:r>i?1:0}))}))},d=function(n,e){return(0,a.MV)("sortSubProviders",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],i=1*t[e];return r<i?-1:r>i?1:0}))}))},l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,s,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,i.Z)({},null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.delete_prov_cust)).params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,providerId:e},u=(0,a.I7)(c),n.next=5,u;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},1534:function(){}}]);
//# sourceMappingURL=1130.9a19aa21.chunk.js.map