"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9075,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return l},OpenModal:function(){return c},default:function(){return d}});var r=t(2791),o=t(5408),i=t(2350),s=t(184),a="listDialog_mdh392",d=function(){var e=(0,i.bh)("listDialog")||{},n=((0,o.Z)(a),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:n.map((function(n,t){var o=e[n];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var a={zIndex:o.zIndex},d=null,c=o.data;return o.content&&(d=r.cloneElement(o.content,{data:c})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:a,id:n,children:d})}),o.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,i.bh)("listDialog")||{},t=(0,i.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,i.Rz)("listDialog",n),(0,i.wt)(a)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,i.Rz)("listDialog",n),(0,i.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(a)}),125)},l=function(e){var n,t,r,o=(0,i.bh)("listDialog")||{},s=e.id;o[s]&&(o[s].observeResize&&o[s].observeInterval&&clearInterval(o[s].observeInterval),o[s].display=!1,null===(n=o[s])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((function(){delete o[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},4050:function(e,n,t){t.d(n,{Ht:function(){return m},Je:function(){return b},Jy:function(){return l},Mp:function(){return _},T7:function(){return p},TP:function(){return x},Y1:function(){return h},ZX:function(){return d},_0:function(){return a},bs:function(){return y},i_:function(){return w},rs:function(){return u},y1:function(){return g}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("account_list",f(c,"code")),(0,s.Rz)("account_ids",(0,s.ME)(c,"accountId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,d,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},l=(0,s.I7)(d),e.next=5,l;case 5:(u=e.sent)&&((0,s.Rz)("sub_account_list",h(u,"subAccount")),(0,s.Rz)("sub_account_group",c(u,"accountId")),(0,s.Rz)("sub_account_ids",(0,s.ME)(u,"sub_accountId")),a(),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function c(e,n){n=n||"id";var t={};return e.length>0?e.map((function(e){e.subAccount&&(t[e[n]]||(t[e[n]]=[]),t[e[n]].push(e))})):t=null,t}var l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry")},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("account_list",f((0,s.jQ)(c),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c,l,u,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.find_acc)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account},null!==n&&void 0!==n&&n.subAccount&&((d=(0,o.Z)({},null===(c=(0,s.bh)((0,s.hQ)()))||void 0===c?void 0:c.find_acc_subacc)).params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===n||void 0===n?void 0:n.account,":sub_account":null===n||void 0===n?void 0:n.subAccount}),u=(0,s.I7)(d),e.next=6,u;case 6:(f=e.sent)&&!f.error&&((0,s.Rz)("submayor_list",f),(0,s.Rz)("submayor_group",v(f))),t&&t();case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function v(e,n){var t={operations:[]},r=e&&(0,s._2)(e);return r.length>0?r.map((function(n){var r=e[n];r.type&&t.operations.push(function(e){var n,t,r={};r.account=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,s.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.document=e.document,r.date=e.date,"credit"===e.type?(r.debit=0,r.credit=e.amount):"debit"===e.type&&(r.credit=0,r.debit=e.amount);return r}(r))})):t=null,t}var f=function(e,n){return(0,s.MV)("sortAccounts",[e,n],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},h=function(e,n){return(0,s.MV)("sortSubAccounts",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},p=function(e,n,t){return(0,s.MV)("calcSubmayor",[e,n,t],(function(){var n="date",t=e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0})),r=0;return t.map((function(e){return function(e){var n,t=(0,o.Z)({},e);return"credit"===(null===e||void 0===e||null===(n=e.account)||void 0===n?void 0:n.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(e)}))}))};function b(){return f((0,s.bh)("sub_account_list").map((function(e){var n,t=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:e.subAccount+"",nombre_sub_cuenta:e.subAccountName}})),"cuenta")}var x=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.get_balance_general_param),a=(0,s.I7)(i),e.next=4,a;case 4:(d=e.sent)&&!d.error&&((0,s.Rz)("balance_general_param",null===d||void 0===d?void 0:d.general),(0,s.Rz)("result_sheet_params",null===d||void 0===d?void 0:d.result),(0,s.Rz)("balance_general_upd_flds",null===d||void 0===d?void 0:d.general_flds),(0,s.Rz)("result_sheet_upd_flds",null===d||void 0===d?void 0:d.result_flds)),n&&n();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a,d,c,l,u,v,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.find_balances)).params={businessId:null===(d=(0,s.bh)("profileUser"))||void 0===d?void 0:d.businessId,":type":n},l=(0,s.I7)(c),e.next=5,l;case 5:(u=e.sent)&&!u.error&&(v=(0,s._2)(u)[0],f=u[v],(0,s.Rz)(t,f),(0,s.Rz)(t+"_bck",(0,o.Z)({},f))),i&&i();case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),_=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a,d,c,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.calc_balance_general)).params={businessId:null===(d=(0,s.bh)("profileUser"))||void 0===d?void 0:d.businessId,balanceId:n,resultId:t},l=(0,s.I7)(c),e.next=5,l;case 5:(u=e.sent)&&!u.error?i&&i(u):i&&i();case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),y=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,o.Z)({},null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.calc_balance_comprobacion)).params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId},a=(0,s.I7)(i),e.next=5,a;case 5:if(!(d=e.sent)||d.error){e.next=9;break}return c=function(e){var n,t,r,o,i=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[e.accountId],a=e.subAccount?null===(t=d[e.accountId])||void 0===t||null===(r=t.sub[e.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=d[e.accountId])||void 0===o?void 0:o.saldo;return{cuenta:i.code+"",nombre:i.name,sub_cuenta:e.subAccount?e.subAccount:"",nombre_sub_cuenta:e.subAccount?e.subAccountName:"",saldo:a||0,type:i.type}},e.abrupt("return",f((0,s.bh)("sub_account_list").map(c),"cuenta"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function w(e,n,t){return e.map((function(e){return{fecha:(0,s.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,debito:e.debit,credito:e.credit,saldo:e.saldo,cuenta:n,sub_cuenta:t||""}}))}var g=function(e,n){var t=z(e,"fecha"),r=z((0,s.JO)(n),"Date"),i={},a={};r.map((function(e,n){!function(e,n){for(var r=0;r<t.length;r++){var o=t[r];if(e===(e>0?1*o.debito:-1*o.credito)&&!i[""+n]&&!a[""+r]){i[""+n]=""+r,a[""+r]=""+n;break}}}(1*e.Amount,n)}));var d=[];return r.map((function(e,n){var r=I((0,o.Z)({},e));i[n]?(r.Comprobante=t[i[n]].comprobante,r.Documento=t[i[n]].documento,d.push(r)):(r.Comprobante="",r.Documento="",d.push(r))})),d},z=function(e,n){return e&&e.sort((function(e,t){var r=(0,s.Vd)(e[n]),o=(0,s.Vd)(t[n]);return r<o?-1:r>o?1:0}))},I=function(e){return e.hasOwnProperty("Date")&&(e.date=e.Date,delete e.Date),e.hasOwnProperty("Posting Date")&&(e.date=e["Posting Date"],delete e["Posting Date"]),e.hasOwnProperty("Check Number")&&(e.checkOrSlip=e["Check Number"],delete e["Check Number"]),e.hasOwnProperty('"Check Number"')&&(e.checkOrSlip=e['"Check Number"'],delete e['"Check Number"']),e.hasOwnProperty("Check or Slip #")&&(e.checkOrSlip=e["Check or Slip #"],delete e["Check or Slip #"]),e}},713:function(e,n,t){t.d(n,{Rd:function(){return d},Ve:function(){return l},WA:function(){return f},ZW:function(){return a},Zj:function(){return u},ii:function(){return c},nj:function(){return v}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.get_inventory_prod)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":productId":n},c=(0,s.I7)(d),e.next=5,c;case 5:(l=e.sent)&&((0,s.Rz)("inv_products_list",u((0,s.jQ)(l.list),"name")),(0,s.Rz)("inv_products_stock",l.stock),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.get_prod_stock)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:n},c=(0,s.I7)(d),e.next=5,c;case 5:(l=e.sent)&&((u=(0,o.Z)({},(0,s.bh)("products_stock")))[n]=l.stock,(0,s.Rz)("products_stock",u),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_prods)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("products_list",u(c,"name")),(0,s.Rz)("products_ids",(0,s.ME)((0,s.jQ)(c),"productId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_prod)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry")},d=(0,s.I7)(a),e.next=5,d;case 5:(c=e.sent)&&((0,s.Rz)("products_list",u((0,s.jQ)(c),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var u=function(e,n){return(0,s.MV)("sortProducts",[e],(function(){return e&&e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0}))}))},v=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_prod)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:n},c=(0,s.I7)(d),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_inventory)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,inventoryId:n},c=(0,s.I7)(d),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},9075:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(1413),o=t(9439),i=t(2791),s=(t(261),t(2350)),a=t(7689),d=t(9760),c=t(2647),l=t(4050),u=t(713),v=t(6677),f=t(4165),h=t(5861),p=t(6963),b=0,x=null,m=null,_=function(){var e=(0,h.Z)((0,f.Z)().mark((function e(n){var t,r,o,i,a,d,c,l,u,v,h,_,y,w,g,z,I,Z,T,j,N,A,O,k,S,R,F,P,D,Q,C,E,U,M,q,V,B,J,L,W,H,$,K;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.PDFDocument.create();case 2:return c=e.sent,e.next=5,c.embedFont(p.StandardFonts.TimesRoman);case 5:return x=e.sent,e.next=8,c.embedFont(p.StandardFonts.TimesRomanBold);case 8:return m=e.sent,l=c.addPage(),u=l.getSize(),u.width,v=u.height,h=10,b=v-40,_=m.widthOfTextAtSize(null===n||void 0===n?void 0:n.document,12),y=x.widthOfTextAtSize("Invoice: ",11),l.drawText("Invoice: ",{x:580-_-y,y:b,size:11,font:x,color:(0,p.rgb)(0,0,0)}),l.drawText(null===n||void 0===n?void 0:n.document,{x:580-_,y:b,size:12,font:m,color:(0,p.rgb)(0,0,0)}),b-=20,w=x.widthOfTextAtSize("Date: ",11),g=m.widthOfTextAtSize((0,s.Gv)(null===n||void 0===n?void 0:n.date)+"",12),l.drawText("Date: ",{x:580-w-g,y:b,size:11,font:x,color:(0,p.rgb)(0,0,0)}),l.drawText((0,s.Gv)(null===n||void 0===n?void 0:n.date)+"",{x:580-g,y:b,size:12,font:m,color:(0,p.rgb)(0,0,0)}),b-=20,z=null===(t=(0,s.bh)("providers_ids"))||void 0===t||null===(r=t[null===n||void 0===n||null===(o=n.customer)||void 0===o?void 0:o.providerId])||void 0===r?void 0:r.name,I=x.widthOfTextAtSize("Customer: ",11),Z=m.widthOfTextAtSize(z+"",12),l.drawText("Customer: ",{x:580-I-Z,y:b,size:11,font:x,color:(0,p.rgb)(0,0,0)}),l.drawText(z+"",{x:580-Z,y:b,size:12,font:m,color:(0,p.rgb)(0,0,0)}),b-=20,l.drawRectangle({x:15,y:b+1,width:560,height:.85,color:(0,p.rgb)(.23,.23,.23),borderColor:(0,p.rgb)(.23,.23,.23)}),l.drawText((null===n||void 0===n?void 0:n.description)+"",{x:20,y:b-11,size:10,font:x,color:(0,p.rgb)(.1,.1,.1)}),b-=20,l.drawRectangle({x:15,y:b+1,width:560,height:.85,color:(0,p.rgb)(.23,.23,.23),borderColor:(0,p.rgb)(.23,.23,.23)}),b-=18,l.drawText((0,s.zE)(4)+"",{x:20,y:b,size:13,font:m,color:(0,p.rgb)(0,0,0)}),T=m.widthOfTextAtSize((0,s.zE)(10)+"",12),l.drawText((0,s.zE)(10)+"",{x:400-T,y:b,size:12,font:m,color:(0,p.rgb)(0,0,0)}),j=m.widthOfTextAtSize((0,s.zE)(14)+"",12),l.drawText((0,s.zE)(11)+"",{x:480-j,y:b,size:12,font:m,color:(0,p.rgb)(0,0,0)}),N=m.widthOfTextAtSize((0,s.zE)(14)+"",12),l.drawText((0,s.zE)(14)+"",{x:560-N,y:b,size:12,font:m,color:(0,p.rgb)(0,0,0)}),b-=8,l.drawRectangle({x:15,y:b+1,width:560,height:.95,color:(0,p.rgb)(.23,.23,.23),borderColor:(0,p.rgb)(.23,.23,.23)}),A=(null===n||void 0===n?void 0:n.products)||[],Array.isArray(A)&&A.map((function(e,n){var t,r,o,i,a,d=null===(t=(0,s.bh)("products_ids"))||void 0===t||null===(r=t[null===e||void 0===e?void 0:e.product])||void 0===r?void 0:r.name;b-=16,d&&l.drawText(d+"",{x:20,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)});var c=null!==e&&void 0!==e&&e.qty?null===(o=-1*(null===e||void 0===e?void 0:e.qty))||void 0===o?void 0:o.toFixed(2):"0.00",u=x.widthOfTextAtSize(c+"",h);l.drawText(c+"",{x:400-u,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)});var v=null!==e&&void 0!==e&&e.salePrice?null===(i=1*(null===e||void 0===e?void 0:e.salePrice))||void 0===i?void 0:i.toFixed(2):"0.00",f=x.widthOfTextAtSize(v+"",h);l.drawText(v+"",{x:480-f,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)});var m=null!==e&&void 0!==e&&e.qty?null===(a=(null===e||void 0===e?void 0:e.salePrice)*(null===e||void 0===e?void 0:e.qty)*-1)||void 0===a?void 0:a.toFixed(2):"0.00",_=x.widthOfTextAtSize(m+"",h);l.drawText(m+"",{x:560-_,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)})})),O=(0,s._2)(null===n||void 0===n?void 0:n.extras)||[],Array.isArray(O)&&O.map((function(e,t){var r,o,i,s,a=null===(r=n.extras)||void 0===r?void 0:r[e],d=a.description;b-=16,d&&l.drawText(d+"",{x:20,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)});var c=null!==a&&void 0!==a&&a.qty?null===(o=1*(null===a||void 0===a?void 0:a.qty))||void 0===o?void 0:o.toFixed(2):"0.00",u=x.widthOfTextAtSize(c+"",h);l.drawText(c+"",{x:400-u,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)});var v=null!==a&&void 0!==a&&a.salePrice?null===(i=1*(null===a||void 0===a?void 0:a.salePrice))||void 0===i?void 0:i.toFixed(2):"0.00",f=x.widthOfTextAtSize(v+"",h);l.drawText(v+"",{x:480-f,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)});var m=null!==a&&void 0!==a&&a.qty?null===(s=(null===a||void 0===a?void 0:a.salePrice)*(null===a||void 0===a?void 0:a.qty)*1)||void 0===s?void 0:s.toFixed(2):"0.00",_=x.widthOfTextAtSize(m+"",h);l.drawText(m+"",{x:560-_,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)})})),b-=28,l.drawRectangle({x:15,y:b+1,width:560,height:.85,color:(0,p.rgb)(.23,.23,.23),borderColor:(0,p.rgb)(.23,.23,.23)}),k=500,b-=20,S=null!==n&&void 0!==n&&n.amount?null===n||void 0===n||null===(i=n.amount)||void 0===i?void 0:i.toFixed(2):"0.00",R=x.widthOfTextAtSize(S+"",h),l.drawText(S+"",{x:560-R,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)}),F=x.widthOfTextAtSize("SubTotal",h),l.drawText("SubTotal",{x:k-F,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)}),b-=16,P=null!==n&&void 0!==n&&n.hasTax?null===n||void 0===n||null===(a=n.hasTax)||void 0===a?void 0:a.toFixed(2):"0.00",D=x.widthOfTextAtSize(P+"",h),l.drawText(P+"",{x:560-D,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)}),Q=x.widthOfTextAtSize("Taxes",h),l.drawText("Taxes",{x:k-Q,y:b,size:h,font:x,color:(0,p.rgb)(0,0,0)}),C=null!==n&&void 0!==n&&n.hasTax?(null===n||void 0===n?void 0:n.hasTax)+(null===n||void 0===n?void 0:n.amount):1*(null===n||void 0===n?void 0:n.amount),b-=16,E=C?null===C||void 0===C?void 0:C.toFixed(2):"0.00",U=m.widthOfTextAtSize(E+"",11),l.drawText(E+"",{x:560-U,y:b,size:11,font:m,color:(0,p.rgb)(0,0,0)}),M=m.widthOfTextAtSize("Total",11),l.drawText("Total",{x:k-M,y:b,size:11,font:m,color:(0,p.rgb)(0,0,0)}),b-=16,q=null!==n&&void 0!==n&&n.hasAdvancePay?null===(d=-1*(null===n||void 0===n?void 0:n.hasAdvancePay))||void 0===d?void 0:d.toFixed(2):"0.00",V=x.widthOfTextAtSize(""+q,11),l.drawText(""+q,{x:560-V,y:b,size:11,font:x,color:(0,p.rgb)(0,0,0)}),B=x.widthOfTextAtSize("Advance Payment",11),l.drawText("Advance Payment",{x:k-B,y:b,size:11,font:x,color:(0,p.rgb)(0,0,0)}),b-=16,L=(J=C+1*q)?null===J||void 0===J?void 0:J.toFixed(2):"0.00",W=m.widthOfTextAtSize(L+"",11),l.drawText(L+"",{x:560-W,y:b,size:11,font:m,color:(0,p.rgb)(0,0,0)}),H=m.widthOfTextAtSize("Balance Due",11),l.drawText("Balance Due",{x:k-H,y:b,size:11,font:m,color:(0,p.rgb)(0,0,0)}),e.next=84,c.save();case 84:$=e.sent,K=(0,s.ou)($),window.open(K);case 87:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=t(184),w=(0,c.PU)(),g=function(e){var n,t,c,f,h,p,b,x,m,g=e.data,Z=e.item,T=(0,i.useState)(0),j=(0,o.Z)(T,2),N=(j[0],j[1]);(0,i.useEffect)((function(){var e,n,t;(0,s.Rz)("inv_products_list",null),(0,s.Rz)("inv_products_stock",null),null!==(e=(0,s.bh)("providers_ids"))&&void 0!==e&&null!==(n=e[null===Z||void 0===Z||null===(t=Z.customer)||void 0===t?void 0:t.providerId])&&void 0!==n&&n.name||(0,v.Je)(A),(0,s.bh)("products_ids")||(0,u.ii)(A),(0,l.Ht)("global_accounts","global_account_params",A),A()}),[Z.productId]);var A=function(){N((0,s.M5)())},O=((0,a.s0)(),function(e){(0,d.CloseModal)({id:g.modalID})}),k=null!==Z&&void 0!==Z&&Z.hasTax?(null===Z||void 0===Z?void 0:Z.hasTax)+(null===Z||void 0===Z?void 0:Z.amount):1*(null===Z||void 0===Z?void 0:Z.amount);return(0,y.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,y.jsxs)("div",{className:"_dsplFlx ",children:[(0,y.jsx)("p",{className:"title_collect",children:"Invoice"}),(0,y.jsx)("p",{className:"title_collect",children:null===Z||void 0===Z?void 0:Z.document}),(0,y.jsx)("div",{className:"flexSpace"}),(0,s.I0)()?(0,y.jsx)("div",{className:"code comprobante_id",style:{color:"#646cff",paddingTop:10},children:null===Z||void 0===Z?void 0:Z.comprobanteId}):null,(0,y.jsx)("div",{className:"icon_print",onClick:function(){var e=(0,r.Z)({},Z);_(e)},children:(0,y.jsx)(w,{name:"printer",color:"#282828"})})]}),(0,y.jsx)("div",{className:" acc_dtls",style:{marginTop:10},children:(0,y.jsxs)("div",{className:"_dsplFlx",children:[(0,y.jsx)("div",{className:"code",style:{color:"#646cff"},children:(0,s.sJ)(null===Z||void 0===Z?void 0:Z.date)}),(0,y.jsx)("div",{className:"name"}),(0,y.jsx)("div",{className:"flexSpace"}),(0,y.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(n=(0,s.bh)("providers_ids"))||void 0===n||null===(t=n[null===Z||void 0===Z||null===(c=Z.customer)||void 0===c?void 0:c.providerId])||void 0===t?void 0:t.name})]})}),(0,y.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:8},children:[(0,y.jsx)("div",{className:"flexSpace"}),(0,y.jsx)("div",{className:"_dsplFlx",children:(0,y.jsx)("div",{className:"name",style:{color:"#4c4c4c"},children:null===Z||void 0===Z?void 0:Z.description})})]}),(0,y.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,y.jsx)("div",{className:"tr_bar_70",style:{textAlign:"left",paddingLeft:14},children:(0,s.zE)(4)}),(0,y.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,s.zE)(10)}),(0,y.jsx)("div",{className:"tr_bar_15 txt_alg_padd",children:(0,s.zE)(14)})]}),(0,y.jsxs)("div",{className:"scollVh subMHeight",children:[Z.products&&(null===(f=Z.products)||void 0===f?void 0:f.map((function(e){return(0,y.jsx)(z,{element:e,idKey:e.inventoryId,close:O},e.inventoryId)}))),Z.extras&&(null===(h=(0,s._2)(Z.extras))||void 0===h?void 0:h.map((function(e){return(0,y.jsx)(I,{element:Z.extras[e],idKey:e,close:O},e)}))),(0,y.jsxs)("div",{className:"_dsplFlx",style:{margin:"19px 15px 10px"},children:[(0,y.jsx)("div",{className:"tr_bar_70"}),(0,y.jsxs)("div",{className:"tr_bar_30 brdTp",children:[(0,y.jsxs)("div",{className:"_dsplFlx totals",children:[(0,y.jsx)("div",{className:"code tr_bar_70",children:"Subtotal:"}),(0,y.jsxs)("div",{className:"name tr_bar_30",style:{color:"#4c4c4c"},children:["$",null===Z||void 0===Z||null===(p=Z.amount)||void 0===p?void 0:p.toFixed(2)]})]}),(0,y.jsxs)("div",{className:"_dsplFlx totals",children:[(0,y.jsx)("div",{className:"code tr_bar_70",children:"tax:"}),(0,y.jsxs)("div",{className:"name tr_bar_30",style:{color:"#4c4c4c"},children:["$",null===Z||void 0===Z||null===(b=Z.hasTax)||void 0===b?void 0:b.toFixed(2)]})]}),(0,y.jsxs)("div",{className:"_dsplFlx totals",children:[(0,y.jsx)("div",{className:"code tr_bar_70 fntW600",style:{color:"#0c0c0c"},children:"Total:"}),(0,y.jsxs)("div",{className:"name tr_bar_30  fntW600",children:["$",null===k||void 0===k?void 0:k.toFixed(2)]})]}),(0,y.jsxs)("div",{className:"_dsplFlx totals",children:[(0,y.jsx)("div",{className:"code tr_bar_70",children:"Advance Payment:"}),(0,y.jsxs)("div",{className:"name tr_bar_30 ",children:["$",null===Z||void 0===Z||null===(x=Z.hasAdvancePay)||void 0===x?void 0:x.toFixed(2)]})]}),(0,y.jsxs)("div",{className:"_dsplFlx totals",children:[(0,y.jsx)("div",{className:"code tr_bar_70 fntW600",style:{color:"#0c0c0c"},children:"Balance Due:"}),(0,y.jsxs)("div",{className:"name tr_bar_30 fntW600",style:{color:"#646cff"},children:["$",null===(m=k-(null===Z||void 0===Z?void 0:Z.hasAdvancePay))||void 0===m?void 0:m.toFixed(2)]})]})]})]})]})]})},z=function(e){var n,t,r=e.element,o=(e.idKey,e.close,null===(n=(0,s.bh)("products_ids"))||void 0===n?void 0:n[null===r||void 0===r?void 0:r.product]),i=1*r.qty?-1*r.qty*r.salePrice:0;return(0,y.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,y.jsx)("div",{className:"tr_bar_70 ",style:{textAlign:"left",paddingLeft:14},children:null===o||void 0===o?void 0:o.name}),(0,y.jsx)("div",{className:"tr_bar_15 numbAlign",children:null===(t=-1*r.qty)||void 0===t?void 0:t.toFixed(2)}),(0,y.jsx)("div",{className:"tr_bar_15 numbAlign",children:null===i||void 0===i?void 0:i.toFixed(2)})]})},I=function(e){var n,t,r=e.element;e.idKey,e.close;return(0,y.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,y.jsx)("div",{className:"tr_bar_70 ",style:{textAlign:"left",paddingLeft:14},children:null===r||void 0===r?void 0:r.description}),(0,y.jsx)("div",{className:"tr_bar_15 numbAlign",children:null===(n=1*r.qty)||void 0===n?void 0:n.toFixed(2)}),(0,y.jsx)("div",{className:"tr_bar_15 numbAlign",children:1*r.qty?null===(t=1*r.qty*r.salePrice*1)||void 0===t?void 0:t.toFixed(2):""})]})}},6677:function(e,n,t){t.d(n,{Je:function(){return a},Qn:function(){return u},UO:function(){return d},mQ:function(){return l}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_prov_cust)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},d=(0,s.I7)(a),e.next=5,d;case 5:(l=e.sent)&&((0,s.Rz)("providers_list",c((0,s.jQ)(l),"code")),(0,s.Rz)("providers_ids",(0,s.ME)((0,s.jQ)(l),"providerId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,d,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_prov_cust)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("search_prov")},d=(0,s.I7)(a),e.next=5,d;case 5:(l=e.sent)&&((0,s.Rz)("providers_list",c((0,s.jQ)(l),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var c=function(e,n){return(0,s.MV)("sortProviders",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},l=function(e,n){return(0,s.MV)("sortSubProviders",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,a,d,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_prov_cust)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,providerId:n},c=(0,s.I7)(d),e.next=5,c;case 5:e.sent&&t&&t();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},261:function(){},4942:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9142);function o(e,n,t){return(n=(0,r.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=9075.97509bc5.chunk.js.map