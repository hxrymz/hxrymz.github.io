"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8684,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return s},OpenModal:function(){return a},default:function(){return u}});var c=t(2791),o=t(5408),r=t(2350),i=t(184),u=function(){var n=(0,r.bh)("listDialog")||{},e=((0,o.Z)("listDialog_h392"),Object.keys(n));return(0,i.jsx)(i.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var r={};o.height&&(r.heigth=o.height),o.width,o.zIndex&&(r.zIndex=o.zIndex-1);var u={zIndex:o.zIndex},a=null,l=o.data;return o.content&&(a=c.cloneElement(o.content,{data:l})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:r,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:u,id:e,children:a})}),o.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:n})}}):null]},e)}}))})},a=function(n){var e=(0,r.bh)("listDialog")||{},t=(0,r.M5)();e[t]||(e[t]={}),e[t].visible=!0;var c={};n.props?(c=n.props).modalID=t:c.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),c=n&&n.getBoundingClientRect();c&&(c.width===e[t].width&&c.height===e[t].height||(e[t].height=c.height+10,e[t].width=c.width,(0,r.Rz)("listDialog",e),(0,r.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=c,(0,r.Rz)("listDialog",e),(0,r.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,r.Rz)("modalOpen",t),(0,r.wt)("listDialog_h392")}),125)},s=function(n){var e,t,c,o=(0,r.bh)("listDialog")||{},i=n.id;o[i]&&(o[i].observeResize&&o[i].observeInterval&&clearInterval(o[i].observeInterval),o[i].display=!1,null===(e=o[i])||void 0===e||null===(t=e.data)||void 0===t||null===(c=t.closeEvent)||void 0===c||c.call(t),(0,r.Rz)("listDialog",o),delete o[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,r.wt)("listDialog_h392"),setTimeout((function(){delete o[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,r.Rz)("modalOpen",null)}),750))}},8684:function(n,e,t){t.r(e);var c=t(4165),o=t(5861),r=t(9439),i=t(2791),u=t(2350),a=t(2647),s=t(9760),l=(t(6021),t(1232)),d=t(9179),v=t(4050),b=t(9661),p=t(184),h=((0,a.Vg)(),(0,d.pl)()),f=(0,d.Wh)(),m=((0,a.PU)(),"Acc2Collect"),_=(0,b.FC)(),x=(0,a.tL)(),y=(0,d.QC)();e.default=function(n){var e,t,a,d,b,g,Z,I,w,j,z,N,R,k=n.data,A=(n.elmId,n.updObs,(0,i.useState)(!1)),O=(0,r.Z)(A,2),D=O[0],P=O[1],C=(0,i.useState)(0),M=(0,r.Z)(C,2),S=(M[0],M[1]),Q=(0,i.useState)(!1),E=(0,r.Z)(Q,2),U=(E[0],E[1]),F=(0,i.useState)(!1),T=(0,r.Z)(F,2),B=T[0],V=T[1];(0,i.useEffect)((function(){D||(P(!0),(0,u.Rz)("list_show_type_collect","pending"),(0,v.Ht)("global_accounts","global_account_params",L),S((0,u.M5)()),(0,v.ZX)())}));var H=function(n){(0,l.i7)((0,u.bh)(m),L)},L=function(){var n=(0,o.Z)((0,c.Z)().mark((function n(e,t){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:S((0,u.M5)()),U(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),G=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[null===(t=(0,u.bh)(m))||void 0===t?void 0:t.account],Y=null===(a=(0,u.bh)("sub_account_ids"))||void 0===a?void 0:a[null===(d=(0,u.bh)(m))||void 0===d?void 0:d.subAccount],J=(null===(b=(0,u.bh)(m))||void 0===b?void 0:b.account)+"_"+(null===(g=(0,u.bh)(m))||void 0===g?void 0:g.subAccount);return(0,p.jsxs)("div",{className:"",children:[(0,p.jsxs)("div",{className:"accounts_header _dsplFlx",children:[(0,p.jsx)("div",{children:(0,p.jsx)("h2",{children:"Cobros"})}),(0,p.jsx)("div",{className:"flexSpace"}),(0,u.I0)()?(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){return V(!B)},children:"Cobrar multiples"}):null]}),B?(0,p.jsx)("div",{children:(0,p.jsx)(y,{confirm:function(){return V(!B)}})}):(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"",style:{maxWidth:"720px",padding:16},children:null!==(Z=(0,u.bh)(m))&&void 0!==Z&&Z.account?(0,p.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,p.jsxs)("div",{className:" acc_dtls",children:[(0,p.jsxs)("div",{className:"_dsplFlx",children:[(0,p.jsx)("div",{className:"code",style:{color:"#646cff",cursor:"pointer"},onClick:function(){(0,u.Rz)(m,null),S((0,u.M5)())},children:null===G||void 0===G?void 0:G.code}),(0,p.jsx)("div",{className:"name",children:null===G||void 0===G?void 0:G.name})]}),(0,p.jsx)("div",{className:"flexSpace"}),Y?(0,p.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,p.jsx)("div",{className:"code",children:null===Y||void 0===Y?void 0:Y.subAccount}),(0,p.jsx)("div",{className:"name",children:null===Y||void 0===Y?void 0:Y.subAccountName})]}):null,null!==(I=(0,u.bh)(m))&&void 0!==I&&I.account&&(0,l.GP)((0,u.bh)("collect_by_doc"),"amount")?(0,p.jsx)("div",{className:"_dsplFlx ",children:(0,p.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)(x,{data:[{label:"Pendientes",id:"pending"},{label:"Cobrados",id:"done"}],active:(0,u.bh)("list_show_type_collect")||"pending",updSelect:function(n){return function(n){(0,u.Rz)("list_show_type_collect",n),S((0,u.M5)())}(n)}}),(0,p.jsx)("div",{className:"flexSpace"})]})}):null]}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,p.jsx)("div",{className:"name",children:"Por Cobrar:"}),(0,p.jsx)("div",{className:"code",style:{margin:"0px 0 0 7px",color:"#646cff"},children:null!==(w=(0,u.bh)("rec_by_acc"))&&void 0!==w&&w[J]&&!isNaN(1*(null===(j=(0,u.bh)("rec_by_acc"))||void 0===j?void 0:j[J]))?" $".concat((1*(null===(z=(0,u.bh)("rec_by_acc"))||void 0===z?void 0:z[J])).toFixed(2)):null})]}),(0,p.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,p.jsx)(f,{confirm:H,item:k}),(0,s.OpenModal)(n)},children:"Hacer un Cobro"})]})]})]}):(0,p.jsx)(_,{placeholder:"buscar un cliente",width:420,handleClick:function(n){var e={account:null===n||void 0===n?void 0:n.account,subAccount:null===n||void 0===n?void 0:n.subAccount,customerId:null===n||void 0===n?void 0:n.customerId};(0,u.Rz)(m,e),(0,l.i7)(e,L)}})}),(0,p.jsx)("div",{className:"accounts_container scollVh scoll_CP_Height",children:(null===(N=(0,u.bh)(m))||void 0===N?void 0:N.account)&&(0,u.bh)("collect_by_doc")&&(null===(R=(0,u._2)((0,u.bh)("collect_by_doc")))||void 0===R?void 0:R.map((function(n){var e=1*(0,u.bh)("collect_by_doc")[n].amount;return"done"===(0,u.bh)("list_show_type_collect")&&0===e||"pending"===(0,u.bh)("list_show_type_collect")&&0!==e?(0,p.jsx)(h,{data:(0,u.bh)("collect_by_doc")[n],elmId:n},n):null})))})]})]})}},1232:function(n,e,t){t.d(e,{GP:function(){return d},N$:function(){return s},hF:function(){return p},i7:function(){return u},nr:function(){return a}});var c=t(4165),o=t(1413),r=t(5861),i=t(2350),u=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t){var r,u,a,s,d,v;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.find_acc_subacc)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},s=(0,i.I7)(a),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,i.Rz)("collect_list",d),(0,i.Rz)("collect_by_doc",l(d)),(0,i.Rz)("collect_by_docM",l(d)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),b(d,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),a=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t){var r,u,a,s,d,v;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.find_acc_subacc)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},s=(0,i.I7)(a),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,i.Rz)("toPay_list",d),(0,i.Rz)("toPay_by_doc",l(d,!0)),(0,i.Rz)("toPay_by_docM",l(d,!0)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),b(d,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,u,a,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,i.bh)("search_acc_record")},a=(0,i.I7)(u),n.next=5,a;case 5:(s=n.sent)&&!s.error&&((0,i.Rz)("comprobante_list",s),(0,i.Rz)("comprobante_by_doc",l(s))),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function l(n,e){var t={},c=n&&(0,i._2)(n);return c.length>0?c.map((function(c){var o=n[c],r=o.document.trim();if(!t[r]){t[r]={};["date","description","document","entryName"].forEach((function(n){t[r][n]=o[n]})),t[r].amount=0,t[r].operations=[]}if(o.type){var u=(0,i.Zv)(o.amount,2),a=(0,i.Zv)(t[r].amount,2),s=0;s=e?1*a+u*("debit"===o.type?-1:1):1*a+u*("credit"===o.type?-1:1),t[r].amount=(0,i.Zv)(s,2),t[r].operations.push(function(n){var e,t,c={};c.account=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.account],c.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],c.comprobanteId=n.comprobanteId,c.date=n.date;var o=(0,i.Zv)(n.amount,2);"credit"===n.type?(c.debit=0,c.credit=o):"debit"===n.type&&(c.credit=0,c.debit=o);return c}(o))}})):t=null,t}var d=function(n,e,t){return(0,i.MV)("SumDocuments",[n,e,t],(function(){var t,c=0;return n&&(null===(t=(0,i._2)(n))||void 0===t||t.map((function(t,o){var r;c+=1*(null===(r=n[t])||void 0===r?void 0:r[e])}))),c}))},v=function(n,e,t){var c,o=0;return n&&(null===(c=(0,i._2)(n))||void 0===c||c.map((function(e,t){var c,r=(0,i.Zv)(n[e].amount,2);o+=r*("credit"===(null===(c=n[e])||void 0===c?void 0:c.type)?-1:1)}))),o},b=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t,o){var r;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(r=(0,i.bh)("rec_by_acc")||{})[t]=v(e)||"no",(0,i.Rz)("rec_by_acc",r),o&&o();case 4:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t,r){var u,a,s,l,d;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.find_acc_subacc)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&b(d,t),r&&r();case 8:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}()},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return f},Jy:function(){return l},Mp:function(){return x},T7:function(){return h},TP:function(){return m},Y1:function(){return p},ZX:function(){return a},_0:function(){return u},bs:function(){return y},i_:function(){return g},rs:function(){return d}});var c=t(4165),o=t(1413),r=t(5861),i=t(2350),u=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,u,a,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId},a=(0,i.I7)(u),n.next=5,a;case 5:(s=n.sent)&&((0,i.Rz)("account_list",b(s,"code")),(0,i.Rz)("account_ids",(0,i.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,a,l,d;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId},l=(0,i.I7)(a),n.next=5,l;case 5:(d=n.sent)&&((0,i.Rz)("sub_account_list",p(d,"subAccount")),(0,i.Rz)("sub_account_group",s(d,"accountId")),(0,i.Rz)("sub_account_ids",(0,i.ME)(d,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,u,a,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,i.bh)("searchQry")},a=(0,i.I7)(u),n.next=5,a;case 5:(s=n.sent)&&((0,i.Rz)("account_list",b((0,i.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t){var r,u,a,s,l,d,b;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.find_acc)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((a=(0,o.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.find_acc_subacc)).params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,i.I7)(a),n.next=6,d;case 6:(b=n.sent)&&!b.error&&((0,i.Rz)("submayor_list",b),(0,i.Rz)("submayor_group",v(b))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},c=n&&(0,i._2)(n);return c.length>0?c.map((function(e){var c=n[e];c.type&&t.operations.push(function(n){var e,t,c={};c.account=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.account],c.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],c.comprobanteId=n.comprobanteId,c.document=n.document,c.date=n.date,"credit"===n.type?(c.debit=0,c.credit=n.amount):"debit"===n.type&&(c.credit=0,c.debit=n.amount);return c}(c))})):t=null,t}var b=function(n,e){return(0,i.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var c=1*n[e],o=1*t[e];return c<o?-1:c>o?1:0}))}))},p=function(n,e){return(0,i.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var c=1*n[e],o=1*t[e];return c<o?-1:c>o?1:0}))}))},h=function(n,e,t){return(0,i.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var c=n[e],o=t[e];return c<o?-1:c>o?1:0})),c=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=c+1*t.credit-1*t.debit:t.saldo=c+1*t.debit-1*t.credit,c=t.saldo,t}(n)}))}))};function f(){return b((0,i.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,u,a;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.get_balance_general_param),u=(0,i.I7)(r),n.next=4,u;case 4:(a=n.sent)&&!a.error&&((0,i.Rz)("balance_general_param",null===a||void 0===a?void 0:a.general),(0,i.Rz)("result_sheet_params",null===a||void 0===a?void 0:a.result),(0,i.Rz)("balance_general_upd_flds",null===a||void 0===a?void 0:a.general_flds),(0,i.Rz)("result_sheet_upd_flds",null===a||void 0===a?void 0:a.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t,r){var u,a,s,l,d,v,b;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.find_balances)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":type":e},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,i._2)(d)[0],b=d[v],(0,i.Rz)(t,b),(0,i.Rz)(t+"_bck",(0,o.Z)({},b))),r&&r();case 8:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t,r){var u,a,s,l,d;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.calc_balance_general)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,balanceId:e,resultId:t},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?r&&r(d):r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}(),y=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(){var e,t,r,u,a,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId},u=(0,i.I7)(r),n.next=5,u;case 5:if(!(a=n.sent)||a.error){n.next=9;break}return s=function(n){var e,t,c,o,r=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],u=n.subAccount?null===(t=a[n.accountId])||void 0===t||null===(c=t.sub[n.sub_accountId])||void 0===c?void 0:c.saldo:null===(o=a[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:r.code+"",nombre:r.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:u||0}},n.abrupt("return",b((0,i.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function g(n,e,t){return n.map((function(n){return{fecha:(0,i.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}},6021:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return o}});var c=t(9142);function o(n,e,t){return(e=(0,c.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return r}});var c=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,c)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=8684.96cc77a1.chunk.js.map