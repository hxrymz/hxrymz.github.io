"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[54,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return s},OpenModal:function(){return u},default:function(){return a}});var c=t(2791),o=t(5408),r=t(2350),i=t(184),a=function(){var n=(0,r.bh)("listDialog")||{},e=((0,o.Z)("listDialog_h392"),Object.keys(n));return(0,i.jsx)(i.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var r={};o.height&&(r.heigth=o.height),o.width,o.zIndex&&(r.zIndex=o.zIndex-1);var a={zIndex:o.zIndex},u=null,l=o.data;return o.content&&(u=c.cloneElement(o.content,{data:l})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:r,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:a,id:e,children:u})}),o.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:n})}}):null]},e)}}))})},u=function(n){var e=(0,r.bh)("listDialog")||{},t=(0,r.M5)();e[t]||(e[t]={}),e[t].visible=!0;var c={};n.props?(c=n.props).modalID=t:c.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),c=n&&n.getBoundingClientRect();c&&(c.width===e[t].width&&c.height===e[t].height||(e[t].height=c.height+10,e[t].width=c.width,(0,r.Rz)("listDialog",e),(0,r.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=c,(0,r.Rz)("listDialog",e),(0,r.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,r.Rz)("modalOpen",t),(0,r.wt)("listDialog_h392")}),125)},s=function(n){var e,t,c,o=(0,r.bh)("listDialog")||{},i=n.id;o[i]&&(o[i].observeResize&&o[i].observeInterval&&clearInterval(o[i].observeInterval),o[i].display=!1,null===(e=o[i])||void 0===e||null===(t=e.data)||void 0===t||null===(c=t.closeEvent)||void 0===c||c.call(t),(0,r.Rz)("listDialog",o),delete o[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,r.wt)("listDialog_h392"),setTimeout((function(){delete o[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,r.Rz)("modalOpen",null)}),750))}},54:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var c=t(4165),o=t(5861),r=t(9439),i=t(2791),a=t(2350),u=t(2647),s=t(9760),l=(t(6021),t(1232)),d=t(9179),v=t(4050),p=t(184),b=(0,d.t8)(),h=((0,u.Np)(),function(n){var e=n.data,t=(n.elmId,n.openUpdateView,(0,i.useState)(!1)),c=(0,r.Z)(t,2),o=c[0],u=c[1],d=(0,i.useState)(0),v=(0,r.Z)(d,2),h=(v[0],v[1]);(0,i.useEffect)((function(){o||(u(!0),h((0,a.M5)()))}));var f=function(){h((0,a.M5)())},m=function(){(0,l.nr)(f)};return(0,p.jsx)("div",{className:"item_acc",children:(0,p.jsxs)("div",{className:"_dsplFlx operation_item_box",onClick:function(){(0,a.Rz)("show_comprobante",e);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,p.jsx)(b,{confirm:m,item:e,accountForm:"Acc2Pay"}),(0,s.OpenModal)(n)},children:[(0,p.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.document}),(0,p.jsx)("div",{className:"entryName",children:null===e||void 0===e?void 0:e.entryName}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsxs)("div",{className:"code",children:["$",(1*(null===e||void 0===e?void 0:e.amount)).toFixed(2)]}),(0,p.jsx)("div",{className:"flexSpace"})]})})}),f=t(9661),m=(0,d.i5)(),_=(0,f.LZ)(),y=((0,u.PU)(),"Acc2Pay"),x=(0,u.tL)(),g=function(n){var e,t,u,d,b,f,g,Z,I,w,j,N,z,A,R=n.data,P=(n.elmId,n.updObs,(0,i.useState)(!1)),k=(0,r.Z)(P,2),O=k[0],D=k[1],S=(0,i.useState)(0),M=(0,r.Z)(S,2),C=(M[0],M[1]),E=(0,i.useState)(!1),Q=(0,r.Z)(E,2),U=(Q[0],Q[1]);(0,i.useEffect)((function(){O||(D(!0),(0,a.Rz)("list_show_type_pay","pending"),C((0,a.M5)()),(0,v.ZX)())}));var F=function(){},T=function(n){(0,l.nr)(V)},V=function(){var n=(0,o.Z)((0,c.Z)().mark((function n(e,t){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:C((0,a.M5)()),U(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),B=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[null===(t=(0,a.bh)(y))||void 0===t?void 0:t.account],H=null===(u=(0,a.bh)("sub_account_ids"))||void 0===u?void 0:u[null===(d=(0,a.bh)(y))||void 0===d?void 0:d.subAccount],L=(null===(b=(0,a.bh)(y))||void 0===b?void 0:b.account)+"_"+(null===(f=(0,a.bh)(y))||void 0===f?void 0:f.subAccount);return(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("div",{className:"accounts_header",children:(0,p.jsx)("h2",{children:"Pagos"})}),(0,p.jsx)("div",{className:"",style:{maxWidth:"720px",padding:16},children:null!==(g=(0,a.bh)(y))&&void 0!==g&&g.account?(0,p.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,p.jsxs)("div",{className:" acc_dtls",children:[(0,p.jsxs)("div",{className:"_dsplFlx",children:[(0,p.jsx)("div",{className:"code",style:{color:"#646cff",cursor:"pointer"},onClick:function(){(0,a.Rz)(y,null),C((0,a.M5)())},children:null===B||void 0===B?void 0:B.code}),(0,p.jsx)("div",{className:"name",children:null===B||void 0===B?void 0:B.name})]}),(0,p.jsx)("div",{className:"flexSpace"}),H?(0,p.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,p.jsx)("div",{className:"code",children:null===H||void 0===H?void 0:H.subAccount}),(0,p.jsx)("div",{className:"name",children:null===H||void 0===H?void 0:H.subAccountName})]}):null,null!==(Z=(0,a.bh)(y))&&void 0!==Z&&Z.account&&(0,l.GP)((0,a.bh)("toPay_by_doc"),"amount",null===(I=(0,a.bh)(y))||void 0===I?void 0:I.providerId)?(0,p.jsx)("div",{className:"_dsplFlx ",children:(0,p.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)(x,{data:[{label:"Pendientes",id:"pending"},{label:"Pagados",id:"done"}],active:(0,a.bh)("list_show_type_pay")||"pending",updSelect:function(n){return function(n){(0,a.Rz)("list_show_type_pay",n),C((0,a.M5)())}(n)}}),(0,p.jsx)("div",{className:"flexSpace"})]})}):null]}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,p.jsx)("div",{className:"name",children:"Por Pagar:"}),(0,p.jsx)("div",{className:"code",style:{margin:"0px 0 0 7px",color:"#646cff"},children:null!==(w=(0,a.bh)("rec_by_acc"))&&void 0!==w&&w[L]&&!isNaN(-1*(null===(j=(0,a.bh)("rec_by_acc"))||void 0===j?void 0:j[L]))?"$".concat((-1*(null===(N=(0,a.bh)("rec_by_acc"))||void 0===N?void 0:N[L])).toFixed(2)):null})]}),(0,p.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,p.jsx)(m,{confirm:T,item:R}),(0,s.OpenModal)(n)},children:"Hacer Pago"})]})]})]}):(0,p.jsx)(_,{placeholder:"buscar un provedor",width:420,handleClick:function(n){var e={account:null===n||void 0===n?void 0:n.account,subAccount:null===n||void 0===n?void 0:n.subAccount,providerId:null===n||void 0===n?void 0:n.providerId};(0,a.Rz)(y,e),(0,l.nr)(V)}})}),(0,p.jsx)("div",{className:"accounts_container scollVh scoll_CP_Height",children:(null===(z=(0,a.bh)(y))||void 0===z?void 0:z.account)&&(0,a.bh)("toPay_by_doc")&&(null===(A=(0,a._2)((0,a.bh)("toPay_by_doc")))||void 0===A?void 0:A.map((function(n){return"done"===(0,a.bh)("list_show_type_pay")&&0===(0,a.bh)("toPay_by_doc")[n].amount||"pending"===(0,a.bh)("list_show_type_pay")&&0!==(0,a.bh)("toPay_by_doc")[n].amount?(0,p.jsx)(h,{data:(0,a.bh)("toPay_by_doc")[n],elmId:n,openUpdateView:F},n):null})))})]})}},1232:function(n,e,t){t.d(e,{GP:function(){return d},N$:function(){return s},hF:function(){return b},i7:function(){return a},nr:function(){return u}});var c=t(4165),o=t(1413),r=t(5861),i=t(2350),a=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,a,u,s,d,v,b;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.find_acc_subacc)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId,":account":null===(a=(0,i.bh)("Acc2Collect"))||void 0===a?void 0:a.account,":sub_account":null===(u=(0,i.bh)("Acc2Collect"))||void 0===u?void 0:u.subAccount},d=(0,i.I7)(s),n.next=5,d;case 5:(v=n.sent)&&!v.error&&((0,i.Rz)("collect_list",v),(0,i.Rz)("collect_by_doc",l(v)),b=(0,i.bh)("Acc2Collect").account+"_"+(0,i.bh)("Acc2Collect").subAccount,p(v,b)),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,a,u,s,d,v,b;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.find_acc_subacc)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId,":account":null===(a=(0,i.bh)("Acc2Pay"))||void 0===a?void 0:a.account,":sub_account":null===(u=(0,i.bh)("Acc2Pay"))||void 0===u?void 0:u.subAccount},d=(0,i.I7)(s),n.next=5,d;case 5:(v=n.sent)&&!v.error&&((0,i.Rz)("toPay_list",v),(0,i.Rz)("toPay_by_doc",l(v,!0)),b=(0,i.bh)("Acc2Pay").account+"_"+(0,i.bh)("Acc2Pay").subAccount,p(v,b)),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,a,u,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,i.bh)("search_acc_record")},u=(0,i.I7)(a),n.next=5,u;case 5:(s=n.sent)&&!s.error&&((0,i.Rz)("comprobante_list",s),(0,i.Rz)("comprobante_by_doc",l(s))),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function l(n,e){var t={},c=n&&(0,i._2)(n);return c.length>0?c.map((function(c){var o=n[c],r=o.document;if(!t[r]){t[r]={};["date","description","document","entryName"].forEach((function(n){t[r][n]=o[n]})),t[r].amount=0,t[r].operations=[]}if(o.type){var a=(0,i.Zv)(o.amount,2),u=(0,i.Zv)(t[r].amount,2),s=0;s=e?u+("debit"===o.type?-1*a:a):u+("credit"===o.type?-1*a:a),t[r].amount=(0,i.Zv)(s,2),t[r].operations.push(function(n){var e,t,c={};c.account=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.account],c.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],c.comprobanteId=n.comprobanteId,c.date=n.date;var o=(0,i.Zv)(n.amount,2);"credit"===n.type?(c.debit=0,c.credit=o):"debit"===n.type&&(c.credit=0,c.debit=o);return c}(o))}})):t=null,t}var d=function(n,e,t){return(0,i.MV)("SumDocuments",[n,e,t],(function(){var t,c=0;return n&&(null===(t=(0,i._2)(n))||void 0===t||t.map((function(t,o){var r;c+=1*(null===(r=n[t])||void 0===r?void 0:r[e])}))),c}))},v=function(n,e,t){var c,o=0;return n&&(null===(c=(0,i._2)(n))||void 0===c||c.map((function(e,t){var c,r=(0,i.Zv)(n[e].amount,2);o+=r*("credit"===(null===(c=n[e])||void 0===c?void 0:c.type)?-1:1)}))),o},p=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t,o){var r;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(r=(0,i.bh)("rec_by_acc")||{})[t]=v(e)||"no",(0,i.Rz)("rec_by_acc",r),o&&o();case 4:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}(),b=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t,r){var a,u,s,l,d;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.find_acc_subacc)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&p(d,t),r&&r();case 8:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}()},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return f},Jy:function(){return l},Mp:function(){return y},T7:function(){return h},TP:function(){return m},Y1:function(){return b},ZX:function(){return u},_0:function(){return a},bs:function(){return x},rs:function(){return d}});var c=t(4165),o=t(1413),r=t(5861),i=t(2350),a=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,a,u,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId},u=(0,i.I7)(a),n.next=5,u;case 5:(s=n.sent)&&((0,i.Rz)("account_list",p(s,"code")),(0,i.Rz)("account_ids",(0,i.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,u,l,d;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId},l=(0,i.I7)(u),n.next=5,l;case 5:(d=n.sent)&&((0,i.Rz)("sub_account_list",b(d,"subAccount")),(0,i.Rz)("sub_account_group",s(d,"accountId")),(0,i.Rz)("sub_account_ids",(0,i.ME)(d,"sub_accountId")),a(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,a,u,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,i.bh)("searchQry")},u=(0,i.I7)(a),n.next=5,u;case 5:(s=n.sent)&&((0,i.Rz)("account_list",p((0,i.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t){var r,a,u,s,l;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.find_acc)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&(u.params[":sub_account"]=null===e||void 0===e?void 0:e.subAccount,u.queryString+=" AND subAccount contain :sub_account"),s=(0,i.I7)(u),n.next=6,s;case 6:(l=n.sent)&&!l.error&&((0,i.Rz)("submayor_list",l),(0,i.Rz)("submayor_group",v(l))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},c=n&&(0,i._2)(n);return c.length>0?c.map((function(e){var c=n[e];c.type&&t.operations.push(function(n){var e,t,c={};c.account=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.account],c.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],c.comprobanteId=n.comprobanteId,c.document=n.document,c.date=n.date,"credit"===n.type?(c.debit=0,c.credit=n.amount):"debit"===n.type&&(c.credit=0,c.debit=n.amount);return c}(c))})):t=null,t}var p=function(n,e){return(0,i.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var c=1*n[e],o=1*t[e];return c<o?-1:c>o?1:0}))}))},b=function(n,e){return(0,i.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var c=1*n[e],o=1*t[e];return c<o?-1:c>o?1:0}))}))},h=function(n,e,t){return(0,i.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var c=n[e],o=t[e];return c<o?-1:c>o?1:0})),c=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=c+1*t.credit-1*t.debit:t.saldo=c+1*t.debit-1*t.credit,c=t.saldo,t}(n)}))}))};function f(){return p((0,i.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e){var t,r,a,u,s,l;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.get_balance_general_param),a=(0,i.I7)(r),n.next=4,a;case 4:(u=n.sent)&&!u.error&&(s=null===u||void 0===u?void 0:u.general,l=null===u||void 0===u?void 0:u.result,(0,i.Rz)("balance_general_param",s),(0,i.Rz)("result_sheet_params",l)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t,r){var a,u,s,l,d,v,p;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.find_balances)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":type":e},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,i._2)(d)[0],p=d[v],(0,i.Rz)(t,p),(0,i.Rz)(t+"_bck",(0,o.Z)({},p))),r&&r();case 8:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}(),y=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(e,t,r){var a,u,s,l,d;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.calc_balance_general)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,balanceId:e,resultId:t},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?r&&r(d):r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(){var e,t,r,a,u,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=(0,o.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId},a=(0,i.I7)(r),n.next=5,a;case 5:if(!(u=n.sent)||u.error){n.next=9;break}return s=function(n){var e,t,c,o,r=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],a=n.subAccount?null===(t=u[n.accountId])||void 0===t||null===(c=t.sub[n.sub_accountId])||void 0===c?void 0:c.saldo:null===(o=u[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:r.code+"",nombre:r.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:a||0}},n.abrupt("return",p((0,i.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},6021:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return o}});var c=t(9142);function o(n,e,t){return(e=(0,c.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return r}});var c=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,c)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=54.a9566b5f.chunk.js.map