"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[54,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return s},OpenModal:function(){return a},default:function(){return u}});var o=t(2791),c=t(5408),r=t(2350),i=t(184),u=function(){var n=(0,r.bh)("listDialog")||{},e=((0,c.Z)("listDialog_h392"),Object.keys(n));return(0,i.jsx)(i.Fragment,{children:e.map((function(e,t){var c=n[e];if(c&&c.visible){var r={};c.height&&(r.heigth=c.height),c.width,c.zIndex&&(r.zIndex=c.zIndex-1);var u={zIndex:c.zIndex},a=null,l=c.data;return c.content&&(a=o.cloneElement(c.content,{data:l})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:r,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:u,id:e,children:a})}),c.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(c.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:n})}}):null]},e)}}))})},a=function(n){var e=(0,r.bh)("listDialog")||{},t=(0,r.M5)();e[t]||(e[t]={}),e[t].visible=!0;var o={};n.props?(o=n.props).modalID=t:o.modalID=t;var c=document.getElementsByTagName("body")[0];null!==c&&void 0!==c&&c.style&&(c.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),o=n&&n.getBoundingClientRect();o&&(o.width===e[t].width&&o.height===e[t].height||(e[t].height=o.height+10,e[t].width=o.width,(0,r.Rz)("listDialog",e),(0,r.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=o,(0,r.Rz)("listDialog",e),(0,r.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,r.Rz)("modalOpen",t),(0,r.wt)("listDialog_h392")}),125)},s=function(n){var e,t,o,c=(0,r.bh)("listDialog")||{},i=n.id;c[i]&&(c[i].observeResize&&c[i].observeInterval&&clearInterval(c[i].observeInterval),c[i].display=!1,null===(e=c[i])||void 0===e||null===(t=e.data)||void 0===t||null===(o=t.closeEvent)||void 0===o||o.call(t),(0,r.Rz)("listDialog",c),delete c[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,r.wt)("listDialog_h392"),setTimeout((function(){delete c[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,r.Rz)("modalOpen",null)}),750))}},54:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var o=t(4165),c=t(5861),r=t(9439),i=t(2791),u=t(2350),a=t(2647),s=t(9760),l=(t(6021),t(1232)),d=t(9179),v=t(4050),p=t(184),b=(0,d.t8)(),h=((0,a.Np)(),function(n){var e=n.data,t=(n.elmId,n.openUpdateView,(0,i.useState)(!1)),o=(0,r.Z)(t,2),c=o[0],a=o[1],d=(0,i.useState)(0),v=(0,r.Z)(d,2),h=(v[0],v[1]);(0,i.useEffect)((function(){c||(a(!0),h((0,u.M5)()))}));var f=function(){h((0,u.M5)())},m=function(){(0,l.nr)(f)};return(0,p.jsx)("div",{className:"item_acc",children:(0,p.jsxs)("div",{className:"_dsplFlx operation_item_box",onClick:function(){(0,u.Rz)("show_comprobante",e);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,p.jsx)(b,{confirm:m,item:e,accountForm:"Acc2Pay"}),(0,s.OpenModal)(n)},children:[(0,p.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.document}),(0,p.jsx)("div",{className:"entryName",children:null===e||void 0===e?void 0:e.entryName}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsxs)("div",{className:"code",children:["$",(1*(null===e||void 0===e?void 0:e.amount)).toFixed(2)]}),(0,p.jsx)("div",{className:"flexSpace"})]})})}),f=t(9661),m=(0,d.UC)(),_=(0,d.i5)(),x=(0,f.LZ)(),y=((0,a.PU)(),"Acc2Pay"),g=(0,a.tL)(),Z=function(n){var e,t,a,d,b,f,Z,I,w,j,N,z,R,P,k=n.data,A=(n.elmId,n.updObs,(0,i.useState)(!1)),O=(0,r.Z)(A,2),M=O[0],S=O[1],D=(0,i.useState)(0),U=(0,r.Z)(D,2),Q=(U[0],U[1]),E=(0,i.useState)(!1),F=(0,r.Z)(E,2),C=(F[0],F[1]),T=(0,i.useState)(!1),V=(0,r.Z)(T,2),B=V[0],H=V[1];(0,i.useEffect)((function(){M||(S(!0),(0,u.Rz)("list_show_type_pay","pending"),(0,v.Ht)("global_accounts","global_account_params",Y),Q((0,u.M5)()),(0,v.ZX)())}));var L=function(){},G=function(n){(0,l.nr)((0,u.bh)(y),Y)},Y=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(e,t){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Q((0,u.M5)()),C(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),$=null===(e=(0,u.bh)("account_ids"))||void 0===e?void 0:e[null===(t=(0,u.bh)(y))||void 0===t?void 0:t.account],J=null===(a=(0,u.bh)("sub_account_ids"))||void 0===a?void 0:a[null===(d=(0,u.bh)(y))||void 0===d?void 0:d.subAccount],X=(null===(b=(0,u.bh)(y))||void 0===b?void 0:b.account)+"_"+(null===(f=(0,u.bh)(y))||void 0===f?void 0:f.subAccount);return(0,p.jsxs)("div",{className:"",children:[(0,p.jsxs)("div",{className:"accounts_header _dsplFlx",children:[(0,p.jsx)("div",{children:(0,p.jsx)("h2",{children:"Pagos"})}),(0,p.jsx)("div",{className:"flexSpace"}),(0,u.I0)()?(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){return H(!B)},children:"Pagar multiples"}):null]}),B?(0,p.jsx)("div",{children:(0,p.jsx)(m,{confirm:function(){return H(!B)}})}):(0,p.jsxs)("div",{className:"",style:{maxWidth:"720px",padding:16},children:[(0,p.jsx)("div",{children:null!==(Z=(0,u.bh)(y))&&void 0!==Z&&Z.account?(0,p.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,p.jsxs)("div",{className:" acc_dtls",children:[(0,p.jsxs)("div",{className:"_dsplFlx",children:[(0,p.jsx)("div",{className:"code",style:{color:"#646cff",cursor:"pointer"},onClick:function(){(0,u.Rz)(y,null),Q((0,u.M5)())},children:null===$||void 0===$?void 0:$.code}),(0,p.jsx)("div",{className:"name",children:null===$||void 0===$?void 0:$.name})]}),(0,p.jsx)("div",{className:"flexSpace"}),J?(0,p.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,p.jsx)("div",{className:"code",children:null===J||void 0===J?void 0:J.subAccount}),(0,p.jsx)("div",{className:"name",children:null===J||void 0===J?void 0:J.subAccountName})]}):null,null!==(I=(0,u.bh)(y))&&void 0!==I&&I.account&&(0,l.GP)((0,u.bh)("toPay_by_doc"),"amount",null===(w=(0,u.bh)(y))||void 0===w?void 0:w.providerId)?(0,p.jsx)("div",{className:"_dsplFlx ",children:(0,p.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)(g,{data:[{label:"Pendientes",id:"pending"},{label:"Pagados",id:"done"}],active:(0,u.bh)("list_show_type_pay")||"pending",updSelect:function(n){return function(n){(0,u.Rz)("list_show_type_pay",n),Q((0,u.M5)())}(n)}}),(0,p.jsx)("div",{className:"flexSpace"})]})}):null]}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,p.jsx)("div",{className:"name",children:"Por Pagar:"}),(0,p.jsx)("div",{className:"code",style:{margin:"0px 0 0 7px",color:"#646cff"},children:null!==(j=(0,u.bh)("rec_by_acc"))&&void 0!==j&&j[X]&&!isNaN(-1*(null===(N=(0,u.bh)("rec_by_acc"))||void 0===N?void 0:N[X]))?"$".concat((-1*(null===(z=(0,u.bh)("rec_by_acc"))||void 0===z?void 0:z[X])).toFixed(2)):null})]}),(0,p.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,p.jsx)(_,{confirm:G,item:k}),(0,s.OpenModal)(n)},children:"Hacer Pago"})]})]})]}):(0,p.jsx)(x,{placeholder:"buscar un provedor",width:420,handleClick:function(n){var e={account:null===n||void 0===n?void 0:n.account,subAccount:null===n||void 0===n?void 0:n.subAccount,providerId:null===n||void 0===n?void 0:n.providerId};(0,u.Rz)(y,e),(0,l.nr)(e,Y)}})}),(0,p.jsx)("div",{className:"accounts_container scollVh scoll_CP_Height",children:(null===(R=(0,u.bh)(y))||void 0===R?void 0:R.account)&&(0,u.bh)("toPay_by_doc")&&(null===(P=(0,u._2)((0,u.bh)("toPay_by_doc")))||void 0===P?void 0:P.map((function(n){var e=1*(0,u.bh)("toPay_by_doc")[n].amount;return"done"===(0,u.bh)("list_show_type_pay")&&0===e||"pending"===(0,u.bh)("list_show_type_pay")&&0!==e?(0,p.jsx)(h,{data:(0,u.bh)("toPay_by_doc")[n],elmId:n,openUpdateView:L},n):null})))})]})]})}},1232:function(n,e,t){t.d(e,{GP:function(){return d},N$:function(){return s},hF:function(){return b},i7:function(){return u},nr:function(){return a}});var o=t(4165),c=t(1413),r=t(5861),i=t(2350),u=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e,t){var r,u,a,s,d,v;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.find_acc_subacc)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},s=(0,i.I7)(a),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,i.Rz)("collect_list",d),(0,i.Rz)("collect_by_doc",l(d)),(0,i.Rz)("collect_by_docM",l(d)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),p(d,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),a=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e,t){var r,u,a,s,d,v;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.find_acc_subacc)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},s=(0,i.I7)(a),n.next=5,s;case 5:(d=n.sent)&&!d.error&&((0,i.Rz)("toPay_list",d),(0,i.Rz)("toPay_by_doc",l(d,!0)),(0,i.Rz)("toPay_by_docM",l(d,!0)),v=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount),p(d,v)),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e){var t,r,u,a,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,c.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,i.bh)("search_acc_record")},a=(0,i.I7)(u),n.next=5,a;case 5:(s=n.sent)&&!s.error&&((0,i.Rz)("comprobante_list",s),(0,i.Rz)("comprobante_by_doc",l(s))),e&&e();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function l(n,e){var t={},o=n&&(0,i._2)(n);return o.length>0?o.map((function(o){var c=n[o],r=c.document.trim();if(!t[r]){t[r]={};["date","description","document","entryName"].forEach((function(n){t[r][n]=c[n]})),t[r].amount=0,t[r].operations=[]}if(c.type){var u=(0,i.Zv)(c.amount,2),a=(0,i.Zv)(t[r].amount,2),s=0;s=e?1*a+u*("debit"===c.type?-1:1):1*a+u*("credit"===c.type?-1:1),t[r].amount=(0,i.Zv)(s,2),t[r].operations.push(function(n){var e,t,o={};o.account=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.account],o.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],o.comprobanteId=n.comprobanteId,o.date=n.date;var c=(0,i.Zv)(n.amount,2);"credit"===n.type?(o.debit=0,o.credit=c):"debit"===n.type&&(o.credit=0,o.debit=c);return o}(c))}})):t=null,t}var d=function(n,e,t){return(0,i.MV)("SumDocuments",[n,e,t],(function(){var t,o=0;return n&&(null===(t=(0,i._2)(n))||void 0===t||t.map((function(t,c){var r;o+=1*(null===(r=n[t])||void 0===r?void 0:r[e])}))),o}))},v=function(n,e,t){var o,c=0;return n&&(null===(o=(0,i._2)(n))||void 0===o||o.map((function(e,t){var o,r=(0,i.Zv)(n[e].amount,2);c+=r*("credit"===(null===(o=n[e])||void 0===o?void 0:o.type)?-1:1)}))),c},p=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e,t,c){var r;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(r=(0,i.bh)("rec_by_acc")||{})[t]=v(e)||"no",(0,i.Rz)("rec_by_acc",r),c&&c();case 4:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}(),b=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e,t,r){var u,a,s,l,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.find_acc_subacc)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&p(d,t),r&&r();case 8:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return f},Jy:function(){return l},Mp:function(){return x},T7:function(){return h},TP:function(){return m},Y1:function(){return b},ZX:function(){return a},_0:function(){return u},bs:function(){return y},i_:function(){return g},rs:function(){return d}});var o=t(4165),c=t(1413),r=t(5861),i=t(2350),u=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e){var t,r,u,a,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,c.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId},a=(0,i.I7)(u),n.next=5,a;case 5:(s=n.sent)&&((0,i.Rz)("account_list",p(s,"code")),(0,i.Rz)("account_ids",(0,i.ME)(s,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e){var t,r,a,l,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId},l=(0,i.I7)(a),n.next=5,l;case 5:(d=n.sent)&&((0,i.Rz)("sub_account_list",b(d,"subAccount")),(0,i.Rz)("sub_account_group",s(d,"accountId")),(0,i.Rz)("sub_account_ids",(0,i.ME)(d,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var l=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e){var t,r,u,a,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,c.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(r=(0,i.bh)("profileUser"))||void 0===r?void 0:r.businessId,":search":(0,i.bh)("searchQry")},a=(0,i.I7)(u),n.next=5,a;case 5:(s=n.sent)&&((0,i.Rz)("account_list",p((0,i.jQ)(s),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e,t){var r,u,a,s,l,d,p;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,c.Z)({},null===(r=(0,i.bh)((0,i.hQ)()))||void 0===r?void 0:r.find_acc)).params={businessId:null===(u=(0,i.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((a=(0,c.Z)({},null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.find_acc_subacc)).params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,i.I7)(a),n.next=6,d;case 6:(p=n.sent)&&!p.error&&((0,i.Rz)("submayor_list",p),(0,i.Rz)("submayor_group",v(p))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},o=n&&(0,i._2)(n);return o.length>0?o.map((function(e){var o=n[e];o.type&&t.operations.push(function(n){var e,t,o={};o.account=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.account],o.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],o.comprobanteId=n.comprobanteId,o.document=n.document,o.date=n.date,"credit"===n.type?(o.debit=0,o.credit=n.amount):"debit"===n.type&&(o.credit=0,o.debit=n.amount);return o}(o))})):t=null,t}var p=function(n,e){return(0,i.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var o=1*n[e],c=1*t[e];return o<c?-1:o>c?1:0}))}))},b=function(n,e){return(0,i.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var o=1*n[e],c=1*t[e];return o<c?-1:o>c?1:0}))}))},h=function(n,e,t){return(0,i.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var o=n[e],c=t[e];return o<c?-1:o>c?1:0})),o=0;return t.map((function(n){return function(n){var e,t=(0,c.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=o+1*t.credit-1*t.debit:t.saldo=o+1*t.debit-1*t.credit,o=t.saldo,t}(n)}))}))};function f(){return p((0,i.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var m=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e){var t,r,u,a;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,c.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.get_balance_general_param),u=(0,i.I7)(r),n.next=4,u;case 4:(a=n.sent)&&!a.error&&((0,i.Rz)("balance_general_param",null===a||void 0===a?void 0:a.general),(0,i.Rz)("result_sheet_params",null===a||void 0===a?void 0:a.result),(0,i.Rz)("balance_general_upd_flds",null===a||void 0===a?void 0:a.general_flds),(0,i.Rz)("result_sheet_upd_flds",null===a||void 0===a?void 0:a.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e,t,r){var u,a,s,l,d,v,p;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.find_balances)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":type":e},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,i._2)(d)[0],p=d[v],(0,i.Rz)(t,p),(0,i.Rz)(t+"_bck",(0,c.Z)({},p))),r&&r();case 8:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e,t,r){var u,a,s,l,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,c.Z)({},null===(u=(0,i.bh)((0,i.hQ)()))||void 0===u?void 0:u.calc_balance_general)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,balanceId:e,resultId:t},l=(0,i.I7)(s),n.next=5,l;case 5:(d=n.sent)&&!d.error?r&&r(d):r&&r();case 7:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}(),y=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(){var e,t,r,u,a,s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=(0,c.Z)({},null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId},u=(0,i.I7)(r),n.next=5,u;case 5:if(!(a=n.sent)||a.error){n.next=9;break}return s=function(n){var e,t,o,c,r=null===(e=(0,i.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],u=n.subAccount?null===(t=a[n.accountId])||void 0===t||null===(o=t.sub[n.sub_accountId])||void 0===o?void 0:o.saldo:null===(c=a[n.accountId])||void 0===c?void 0:c.saldo;return{cuenta:r.code+"",nombre:r.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:u||0}},n.abrupt("return",p((0,i.bh)("sub_account_list").map(s),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function g(n,e,t){return n.map((function(n){return{fecha:(0,i.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}},6021:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return c}});var o=t(9142);function c(n,e,t){return(e=(0,o.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return r}});var o=t(4942);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=54.3946033e.chunk.js.map