"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3753],{810:function(n,e,t){var o=t(9439),r=t(2791),a=t(2350),i=t(2647),u=(t(1636),t(4050)),c=t(184),s=(0,i.kp)();e.Z=function(n){var e,t=n.handleClick,i=(0,r.useState)(!1),d=(0,o.Z)(i,2),v=d[0],f=d[1],m=(0,r.useState)(0),p=(0,o.Z)(m,2),b=(p[0],p[1]),h=(0,r.useState)(!1),x=(0,o.Z)(h,2),y=x[0],_=x[1],w=(0,r.useState)([]),z=(0,o.Z)(w,2),I=z[0],R=z[1],g=(0,r.useRef)();(0,r.useEffect)((function(){v||(f(!0),(0,u.ZX)(Z))}));var Z=function(n){b((0,a.M5)())},T=function(n){t(n),g.current.clearTx()};return(0,c.jsx)("div",{children:(0,c.jsx)(s,{placeholder:"associar una cuenta",width:420,fetchData:function(n){R((0,a.MA)((0,a.bh)("account_list"),n)),y&&_(!1)},loading:y,change:function(n){!y&&_(!0)},callempty:function(n){R([]),y&&_(!1)},ref:g,children:(0,c.jsx)("div",{className:"",children:I&&(null===(e=(0,a._2)(I))||void 0===e?void 0:e.map((function(n){return(0,c.jsx)(l,{data:I[n],elmId:n,selectItem:T},n)})))})})})};var l=function(n){var e=n.data,t=n.selectItem;return(0,c.jsx)("div",{className:"item_acc",children:(0,c.jsx)("div",{className:"_dsplFlx account_item_box account_header",children:(0,c.jsxs)("div",{className:"_dsplFlx",onClick:function(){return t(null===e||void 0===e?void 0:e.accountId,null)},children:[(0,c.jsx)("div",{className:"code",children:null===e||void 0===e?void 0:e.code}),(0,c.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.name})]})})})}},3266:function(n,e,t){t.d(e,{$z:function(){return b},f9:function(){return y}});var o=t(4165),r=t(5861),a=t(6963),i=t(2350);function u(n){var e=new Blob([n],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(e)}var c=0,s=null,l=null;function d(n,e,t){var o,r,u=0,c=[];c.push({yInc:0,label:{value:"Balance de Resultado",x:110,size:14,font:"TimesRomanBold"}});var s={yInc:0,label:{value:"Fecha: "+(0,i.Gv)(Date.now()),x:490,size:12,font:"timesRomanFont"}};c.push(s),n&&(0,i._2)(n).map((function(o,r){var s,d,v=0,m={yInc:20,label:{value:o,x:50,y:20,size:13,font:"TimesRomanBold"}};c.push(m),Array.isArray(n[o])?n[o].map((function(n,o){v=f(n,e,t,v,0,c)})):(0,i._2)(n[o]).map((function(r,a){var u={yInc:16,label:{value:r,x:60,size:11,font:"TimesRomanBold"}};c.push(u),(0,i._2)(n[o][r]).map((function(a,i){var u=n[o][r][a];v=f(u,e,t,v,0,c)}))}));var p=l.widthOfTextAtSize((null===(s=v)||void 0===s?void 0:s.toFixed(2))+"",11);u+="Ingresos"===o?v:-1*v;var b={yInc:16,line:{x:520,y:10,width:70,height:.5,borderColor:(0,a.rgb)(0,0,0)},label:{value:"Total "+o,x:50,size:11,font:"TimesRomanBold"},amount:{value:null===(d=v)||void 0===d?void 0:d.toFixed(2),x:580-p,size:11,font:"TimesRomanBold"}};c.push(b)}));var d=l.widthOfTextAtSize((null===(o=u)||void 0===o?void 0:o.toFixed(2))+"",11),v={yInc:16,line:{x:520,y:10,width:70,height:.5,borderColor:(0,a.rgb)(0,0,0)},label:{value:"Ganancia o perdida  (Ingresos - gastos)",x:50,size:11,font:"TimesRomanBold"},amount:{value:null===(r=u)||void 0===r?void 0:r.toFixed(2),x:580-d,size:11,font:"TimesRomanBold"}};return c.push(v),{totalGP:u,listArr:c}}function v(n,e,t,o){var r,u,c=0,s=[];s.push({yInc:0,label:{value:"Balance de Situacion",x:110,size:14,font:"TimesRomanBold"}});var d={yInc:0,label:{value:"Fecha: "+(0,i.Gv)(Date.now()),x:490,size:12,font:"timesRomanFont"}};s.push(d),n&&(0,i._2)(n).map((function(r,u){var d,v,m=0,p={yInc:20,label:{value:r,x:50,y:20,size:13,font:"TimesRomanBold"}};s.push(p),Array.isArray(n[r])?n[r].map((function(n,r){m=f(n,e,t,m,o,s)})):(0,i._2)(n[r]).map((function(a,u){var c={yInc:16,label:{value:a,x:60,size:11,font:"TimesRomanBold"}};s.push(c),(0,i._2)(n[r][a]).map((function(i,u){var c=n[r][a][i];m=f(c,e,t,m,o,s)}))})),c+="Activos"!==r?m:0;var b=l.widthOfTextAtSize((null===(d=m)||void 0===d?void 0:d.toFixed(2))+"",11),h={yInc:16,line:{x:520,y:10,width:70,height:.5,borderColor:(0,a.rgb)(0,0,0)},label:{value:"Total "+r,x:50,size:11,font:"TimesRomanBold"},amount:{value:null===(v=m)||void 0===v?void 0:v.toFixed(2),x:580-b,size:11,font:"TimesRomanBold"}};s.push(h)}));var v=l.widthOfTextAtSize((null===(r=c)||void 0===r?void 0:r.toFixed(2))+"",11),m={yInc:16,line:{x:520,y:10,width:70,height:.5,borderColor:(0,a.rgb)(0,0,0)},label:{value:"Total ( Pasivos + Patrimonio )",x:50,size:11,font:"TimesRomanBold"},amount:{value:null===(u=c)||void 0===u?void 0:u.toFixed(2),x:580-v,size:11,font:"TimesRomanBold"}};return s.push(m),s}var f=function(n,e,t,o,r,a){var u,c,l=10,d=e[n.key],v=(0,i._2)(d)[0],f=null===d||void 0===d||null===(u=d[v])||void 0===u?void 0:u.saldo,m=null===(c=(0,i.bh)("account_ids"))||void 0===c?void 0:c[v];if("Resultado (ganancia o perdida)"===n.key&&r&&0!==r){var p=r;o+=p;var b=s.widthOfTextAtSize((null===p||void 0===p?void 0:p.toFixed(2))+"",l),h={yInc:13,label:{value:n.key,x:70,size:l,font:"timesRomanFont"},amount:{value:null===p||void 0===p?void 0:p.toFixed(2),x:580-b,size:l,font:"timesRomanFont"}};a.push(h)}else if(f&&0!==f&&(0,i._2)(d).length>0){var x,y=null===(x=d[t[n.key]])||void 0===x?void 0:x.sub;if(f="credit"===(null===m||void 0===m?void 0:m.type)?-1*f:f,y&&(0,i._2)(y).length>0){var _,w,z={yInc:13,label:{value:m.code+" - "+n.key,x:70,size:l,font:"timesRomanFont"}};a.push(z),(0,i._2)(y).map((function(n){var t,o=n,r=e&&(null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[o]),u=y[n].saldo;if(0!==(u="credit"===(null===m||void 0===m?void 0:m.type)?-1*u:u)){var c,d,v=s.widthOfTextAtSize((null===(c=u)||void 0===c?void 0:c.toFixed(2))+"",l),f={yInc:13,label:{value:null===r||void 0===r?void 0:r.subAccountName,x:90,size:l,font:"timesRomanFont"},amount:{value:null===(d=u)||void 0===d?void 0:d.toFixed(2),x:520-v,size:l,font:"timesRomanFont"}};a.push(f)}})),o+=f;var I=s.widthOfTextAtSize((null===(_=f)||void 0===_?void 0:_.toFixed(2))+"",l),R={yInc:13,label:{value:"Total "+n.key,x:70,size:l,font:"TimesRomanBold"},amount:{value:null===(w=f)||void 0===w?void 0:w.toFixed(2),x:580-I,size:l,font:"timesRomanFont"}};a.push(R)}else{var g=d[t[n.key]].saldo;if(0!==(g="credit"===(null===m||void 0===m?void 0:m.type)?-1*g:g)){o+=g;var Z=g;n.key;var T=s.widthOfTextAtSize((null===Z||void 0===Z?void 0:Z.toFixed(2))+"",l),F={yInc:13,label:{value:m.code+" - "+n.key,x:70,size:l,font:"timesRomanFont"},amount:{value:null===Z||void 0===Z?void 0:Z.toFixed(2),x:580-T,size:l,font:"timesRomanFont"}};a.push(F)}}}return o};function m(n,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)((0,o.Z)().mark((function n(e,t){var r,i,u,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.addPage(),i=r.getSize(),u=i.height,c=u-20,60,d=Math.ceil(t.length/60),Array.from(Array(d).keys()).map((function(n){n>0&&(r=e.addPage(),c=u-10);var o=t.slice(60*n,60*(n+1));o&&o.map((function(n,e){c-=n.yInc,n.line&&r.drawRectangle({x:n.line.x,y:c+n.line.y,width:n.line.width,height:n.line.height,borderColor:(0,a.rgb)(0,0,0)}),n.label&&r.drawText(n.label.value,{x:n.label.x,y:c,size:n.label.size,font:"TimesRomanBold"===n.label.font?l:s,color:(0,a.rgb)(0,0,0)}),n.amount&&r.drawText(n.amount.value,{x:n.amount.x,y:c,size:n.amount.size,font:"TimesRomanBold"===n.amount.font?l:s,color:(0,a.rgb)(0,0,0)})}))}));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n,e,t,o,r){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)((0,o.Z)().mark((function n(e,t,r,i,c){var f,p,b,h,x,y,_;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.PDFDocument.create();case 2:return f=n.sent,n.next=5,f.embedFont(a.StandardFonts.TimesRoman);case 5:return s=n.sent,n.next=8,f.embedFont(a.StandardFonts.TimesRomanBold);case 8:return l=n.sent,p=d(i,null===e||void 0===e?void 0:e.result,c),b=p.totalGP,h=p.listArr,x=v(t,null===e||void 0===e?void 0:e.general,r,b),m(f,h),m(f,x),n.next=15,f.save();case 15:y=n.sent,_=u(y),window.open(_);case 18:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var x=function(n){var e,t,o,r,a=[],i=10,u=0,c=0;n&&n.map((function(n,e){var t=(n.saldo,1*n.saldo);if(t){var o={};if(n.sub_cuenta){var r=s.widthOfTextAtSize((null===t||void 0===t?void 0:t.toFixed(2))+"",i);o={yInc:13,code:{value:n.sub_cuenta,x:65,size:i,font:"timesRomanFont"},name:{value:"- "+n.nombre_sub_cuenta,x:90,size:i,font:"timesRomanFont"},amount:{value:null===t||void 0===t?void 0:t.toFixed(2),x:460-r,size:i,font:"timesRomanFont"}}}else{var d=l.widthOfTextAtSize((null===t||void 0===t?void 0:t.toFixed(2))+"",i);"debit"===n.type?u+=t:c+=t,o={yInc:13,code:{value:n.cuenta,x:30,size:i,font:"TimesRomanBold"},name:{value:n.nombre,x:65,size:i,font:"TimesRomanBold"},amount:{value:null===t||void 0===t?void 0:t.toFixed(2),x:("debit"===n.type?520:580)-d,size:i,font:"TimesRomanBold"}}}a.push(o)}}));var d=l.widthOfTextAtSize((null===(e=u)||void 0===e?void 0:e.toFixed(2))+"",i),v=l.widthOfTextAtSize((null===(t=c)||void 0===t?void 0:t.toFixed(2))+"",i),f={yInc:21,name:{value:null===(o=u)||void 0===o?void 0:o.toFixed(2),x:520-d,size:i,font:"TimesRomanBold"},amount:{value:null===(r=c)||void 0===r?void 0:r.toFixed(2),x:580-v,size:i,font:"TimesRomanBold"}};return a.push(f),a},y=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e){var t,r,d,v,f,m,p,b;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.PDFDocument.create();case 2:return t=n.sent,n.next=5,t.embedFont(a.StandardFonts.TimesRoman);case 5:return s=n.sent,n.next=8,t.embedFont(a.StandardFonts.TimesRomanBold);case 8:return l=n.sent,r=t.addPage(),d=r.getSize(),d.width,v=d.height,c=v-20,r.drawText("Balance de Comprobacion",{x:110,y:c,size:14,font:s,color:(0,a.rgb)(0,0,0)}),r.drawText("Fecha: "+(0,i.Gv)(Date.now()),{x:420,y:c,size:11,font:s,color:(0,a.rgb)(0,0,0)}),c-=15,f=x(e),m=Math.ceil(f.length/60),Array.from(Array(m).keys()).map((function(n){n>0&&(r=t.addPage(),c=v-20);var e=f.slice(60*n,60*(n+1));e&&e.map((function(n,e){c-=n.yInc,n.code&&r.drawText(n.code.value,{x:n.code.x,y:c,size:n.code.size,font:"TimesRomanBold"===n.code.font?l:s,color:(0,a.rgb)(0,0,0)}),n.name&&r.drawText(n.name.value,{x:n.name.x,y:c,size:n.name.size,font:"TimesRomanBold"===n.name.font?l:s,color:(0,a.rgb)(0,0,0)}),n.amount&&r.drawText(n.amount.value,{x:n.amount.x,y:c,size:n.amount.size,font:"TimesRomanBold"===n.amount.font?l:s,color:(0,a.rgb)(0,0,0)})}))})),n.next=20,t.save();case 20:p=n.sent,b=u(p),window.open(b);case 23:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4050:function(n,e,t){t.d(e,{Ht:function(){return x},Je:function(){return b},Jy:function(){return l},Mp:function(){return y},T7:function(){return p},TP:function(){return h},Y1:function(){return m},ZX:function(){return c},_0:function(){return u},bs:function(){return _},i_:function(){return w},rs:function(){return d},y1:function(){return z}});var o=t(4165),r=t(1413),a=t(5861),i=t(2350),u=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e){var t,a,u,c,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,r.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId},c=(0,i.I7)(u),n.next=5,c;case 5:(s=n.sent)&&((0,i.Rz)("account_list",f(s,"code")),(0,i.Rz)("account_ids",(0,i.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e){var t,a,c,l,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,r.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId},l=(0,i.I7)(c),n.next=5,l;case 5:(d=n.sent)&&((0,i.Rz)("sub_account_list",m(d,"subAccount")),(0,i.Rz)("sub_account_group",s(d,"accountId")),(0,i.Rz)("sub_account_ids",(0,i.ME)(d,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e){var t,a,u,c,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,r.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,i.bh)("searchQry")},c=(0,i.I7)(u),n.next=5,c;case 5:(s=n.sent)&&((0,i.Rz)("account_list",f((0,i.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e,t){var a,u,c,s,l,d,f;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,r.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.find_acc)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((c=(0,r.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.find_acc_subacc)).params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,i.I7)(c),n.next=6,d;case 6:(f=n.sent)&&!f.error&&((0,i.Rz)("submayor_list",f),(0,i.Rz)("submayor_group",v(f))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},o=n&&(0,i._2)(n);return o.length>0?o.map((function(e){var o=n[e];o.type&&t.operations.push(function(n){var e,t,o={};o.account=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.account],o.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],o.comprobanteId=n.comprobanteId,o.document=n.document,o.date=n.date,"credit"===n.type?(o.debit=0,o.credit=n.amount):"debit"===n.type&&(o.credit=0,o.debit=n.amount);return o}(o))})):t=null,t}var f=function(n,e){return(0,i.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var o=1*n[e],r=1*t[e];return o<r?-1:o>r?1:0}))}))},m=function(n,e){return(0,i.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var o=1*n[e],r=1*t[e];return o<r?-1:o>r?1:0}))}))},p=function(n,e,t){return(0,i.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var o=n[e],r=t[e];return o<r?-1:o>r?1:0})),o=0;return t.map((function(n){return function(n){var e,t=(0,r.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=o+1*t.credit-1*t.debit:t.saldo=o+1*t.debit-1*t.credit,o=t.saldo,t}(n)}))}))};function b(){return f((0,i.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var h=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e){var t,a,u,c;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,r.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.get_balance_general_param),u=(0,i.I7)(a),n.next=4,u;case 4:(c=n.sent)&&!c.error&&((0,i.Rz)("balance_general_param",null===c||void 0===c?void 0:c.general),(0,i.Rz)("result_sheet_params",null===c||void 0===c?void 0:c.result),(0,i.Rz)("balance_general_upd_flds",null===c||void 0===c?void 0:c.general_flds),(0,i.Rz)("result_sheet_upd_flds",null===c||void 0===c?void 0:c.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e,t,a){var u,c,s,l,d,v,f;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,r.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.find_balances)).params={businessId:null===(c=(0,i.bh)("profileUser"))||void 0===c?void 0:c.businessId,":type":e},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,i._2)(d)[0],f=d[v],(0,i.Rz)(t,f),(0,i.Rz)(t+"_bck",(0,r.Z)({},f))),a&&a();case 8:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}(),y=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e,t,a){var u,c,s,l,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,r.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.calc_balance_general)).params={businessId:null===(c=(0,i.bh)("profileUser"))||void 0===c?void 0:c.businessId,balanceId:e,resultId:t},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?a&&a(d):a&&a();case 7:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}(),_=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(){var e,t,a,u,c,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,r.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId},u=(0,i.I7)(a),n.next=5,u;case 5:if(!(c=n.sent)||c.error){n.next=9;break}return s=function(n){var e,t,o,r,a=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],u=n.subAccount?null===(t=c[n.accountId])||void 0===t||null===(o=t.sub[n.sub_accountId])||void 0===o?void 0:o.saldo:null===(r=c[n.accountId])||void 0===r?void 0:r.saldo;return{cuenta:a.code+"",nombre:a.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:u||0,type:a.type}},n.abrupt("return",f((0,i.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function w(n,e,t){return n.map((function(n){return{fecha:(0,i.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var z=function(n,e){var t=I(n,"fecha"),o=I((0,i.JO)(e),"Date"),a={},u={};o.map((function(n,e){!function(n,e){for(var o=0;o<t.length;o++){var r=t[o];if(n===(n>0?1*r.debito:-1*r.credito)&&!a[""+e]&&!u[""+o]){a[""+e]=""+o,u[""+o]=""+e;break}}}(1*n.Amount,e)}));var c=[];return o.map((function(n,e){var o=R((0,r.Z)({},n));a[e]?(o.Comprobante=t[a[e]].comprobante,o.Documento=t[a[e]].documento,c.push(o)):c.push(o)})),c},I=function(n,e){return n&&n.sort((function(n,t){var o=(0,i.Vd)(n[e]),r=(0,i.Vd)(t[e]);return o<r?-1:o>r?1:0}))},R=function(n){return n.hasOwnProperty("Date")&&(n.date=n.Date,delete n.Date),n.hasOwnProperty("Posting Date")&&(n.date=n["Posting Date"],delete n["Posting Date"]),n.hasOwnProperty("Check Number")&&(n.checkOrSlip=n["Check Number"],delete n["Check Number"]),n.hasOwnProperty('"Check Number"')&&(n.checkOrSlip=n['"Check Number"'],delete n['"Check Number"']),n.hasOwnProperty("Check or Slip #")&&(n.checkOrSlip=n["Check or Slip #"],delete n["Check or Slip #"]),n}},1636:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return r}});var o=t(9142);function r(n,e,t){return(e=(0,o.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return a}});var o=t(4942);function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=3753.d7747945.chunk.js.map