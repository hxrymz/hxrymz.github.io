"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[62,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return l},OpenModal:function(){return u},default:function(){return c}});var r=t(2791),o=t(5408),i=t(2350),s=t(184),a="listDialog_mdh392",c=function(){var n=(0,i.bh)("listDialog")||{},e=((0,o.Z)(a),Object.keys(n));return(0,s.jsx)(s.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var i={};o.height&&(i.heigth=o.height),o.width,o.zIndex&&(i.zIndex=o.zIndex-1);var a={zIndex:o.zIndex},c=null,u=o.data;return o.content&&(c=r.cloneElement(o.content,{data:u})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:i,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:a,id:e,children:c})}),o.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:n})}}):null]},e)}}))})},u=function(n){var e=(0,i.bh)("listDialog")||{},t=(0,i.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,i.Rz)("listDialog",e),(0,i.wt)(a)))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,i.Rz)("listDialog",e),(0,i.wt)(a),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",t),(0,i.wt)(a)}),125)},l=function(n){var e,t,r,o=(0,i.bh)("listDialog")||{},s=n.id;o[s]&&(o[s].observeResize&&o[s].observeInterval&&clearInterval(o[s].observeInterval),o[s].display=!1,null===(e=o[s])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,i.Rz)("listDialog",o),delete o[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(a),setTimeout((function(){delete o[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750))}},4050:function(n,e,t){t.d(e,{Ht:function(){return y},Jy:function(){return v},S:function(){return k},T7:function(){return _},TP:function(){return x},Y1:function(){return m},ZX:function(){return l},_0:function(){return u},bs:function(){return I},eK:function(){return c},h1:function(){return b},i_:function(){return g},rs:function(){return p},y1:function(){return Z}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=t(15),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c,u,l,d,v,p,h,f,m;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=(0,s.bh)("accounts_summary_by_months"))||void 0===t||!t.balanceId){n.next=11;break}return(u=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.calc_sub_myr)).params={businessId:null===(c=(0,s.bh)("profileUser"))||void 0===c?void 0:c.businessId,balanceId:null===t||void 0===t?void 0:t.balanceId},l=(0,s.I7)(u),n.next=7,l;case 7:(d=n.sent)&&(t.summary=d,(0,s.Rz)("accounts_summary_by_months",t),(0,a.OpenToast)({text:"Accounts Summary Updated",timeout:3500}),e&&e()),n.next=22;break;case 11:return(h={}).balanceId=(0,s.M5)(),h.type="accounts_summary_by_months",(f=(0,o.Z)({},null===(v=(0,s.bh)((0,s.hQ)()))||void 0===v?void 0:v.add_balances)).params={businessId:null===(p=(0,s.bh)("profileUser"))||void 0===p?void 0:p.businessId},f.form=h,m=(0,s.I7)(f),n.next=20,m;case 20:n.sent&&((0,s.Rz)("accounts_summary_by_months",h),(0,a.OpenToast)({text:"Something went Wrong. try again later",timeout:3500}),e&&e());case 22:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,s.I7)(a),n.next=5,c;case 5:(u=n.sent)&&((0,s.Rz)("account_list",f(u,"code")),(0,s.Rz)("account_ids",(0,s.ME)(u,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,s.I7)(a),n.next=5,c;case 5:(l=n.sent)&&((0,s.Rz)("sub_account_list",m(l,"subAccount")),(0,s.Rz)("sub_account_group",d(l,"accountId")),(0,s.Rz)("sub_account_ids",(0,s.ME)(l,"sub_accountId")),u(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function d(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var v=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry")},c=(0,s.I7)(a),n.next=5,c;case 5:(u=n.sent)&&((0,s.Rz)("account_list",f((0,s.jQ)(u),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,c,u,l,d,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(l=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.filter_search_opera)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,":date1":null===(c=(0,s.bh)("date_range_submayor"))||void 0===c?void 0:c.initDate,":date2":null===(u=(0,s.bh)("date_range_submayor"))||void 0===u?void 0:u.lastDate},d=(0,s.I7)(l),n.next=5,d;case 5:(v=n.sent)&&!v.error&&((0,s.Rz)("submayor_list",v),(0,s.Rz)("submayor_group",h(v))),t&&t();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function h(n,e){var t={operations:[]},r=n&&(0,s._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,s.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,s.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var f=function(n,e){return(0,s.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},m=function(n,e){return(0,s.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},b=function(n){return(0,s.MV)("sortComprobantesByDate",[n],(function(){var e="date";return n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0}))}))},_=function(n,e,t,r){return(0,s.MV)("calcSubmayor",[n,e,t,r],(function(){var r,i="date",a=new Date(null===(r=(0,s.bh)("date_range_submayor"))||void 0===r?void 0:r.initDate).getMonth(),c=k(a,{account:e,subAccount:t},"calcSubmayor")||0,u=n&&n.sort((function(n,e){var t=n[i],r=e[i];return t<r?-1:t>r?1:0}));return u.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=c+1*t.credit-1*t.debit:t.saldo=c+1*t.debit-1*t.credit,c=t.saldo,t}(n)}))}))};var x=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.get_balance_general_param),a=(0,s.I7)(i),n.next=4,a;case 4:(c=n.sent)&&!c.error&&((0,s.Rz)("balance_general_param",null===c||void 0===c?void 0:c.general),(0,s.Rz)("result_sheet_params",null===c||void 0===c?void 0:c.result),(0,s.Rz)("balance_general_upd_flds",null===c||void 0===c?void 0:c.general_flds),(0,s.Rz)("result_sheet_upd_flds",null===c||void 0===c?void 0:c.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),y=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var a,c,u,l,d,v,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(u=(0,o.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.find_balances)).params={businessId:null===(c=(0,s.bh)("profileUser"))||void 0===c?void 0:c.businessId,":type":e},l=(0,s.I7)(u),n.next=5,l;case 5:(d=n.sent)&&!d.error&&(v=(0,s._2)(d)[0],p=d[v],(0,s.Rz)(t,p),(0,s.Rz)(t+"_bck",(0,o.Z)({},p))),i&&i();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),I=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t,i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(e=(0,s.bh)((0,s.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId},a=(0,s.I7)(i),n.next=5,a;case 5:if(!(c=n.sent)||c.error){n.next=9;break}return u=function(n){var e,t,r,o,i=null===(e=(0,s.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],a=n.subAccount?null===(t=c[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=c[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:i.code+"",nombre:i.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:a||0,type:i.type}},n.abrupt("return",f((0,s.bh)("sub_account_list").map(u),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function g(n,e,t){return n.map((function(n){return{date:(0,s.Gv)(n.date),document:n.document,comprobante:n.comprobanteId,description:n.description,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var Z=function(n,e,t){var r=w(n,"date"),o=function(n){var e={};for(var t in n)e[t]=n[t];return e}(r),i=function(n){var e={};for(var t in n)e[t]=j(n[t]);return e}(e),s={},a={},c={},u={},l=r,d=i;t&&(l=i,d=r);var v=function(n){if(s[n.comprobante]||(s[n.comprobante]=n),a[n.comprobante])return delete a[n.comprobante],1},p=function(n){if(!a[n.comprobante])return a[n.comprobante]=n,1},h=function(n,e){for(var t in o){var r,i,s=o[t],a=1*n.amount,l=a>0?1*s.debito:-1*s.credito;if(c[""+e])break;var d=null===(r=s.documento)||void 0===r?void 0:r.trim(),h=null===(i=n.checkOrSlip)||void 0===i?void 0:i.trim();if(h&&d===h&&l===a){c[""+e]=""+t,u[""+t]=""+e,v(s),delete o[t];break}if(l===a){c[""+e]=""+t,u[""+t]=""+e,v(s),delete o[t];break}p(s)}};for(var f in d){var m=d[f];m.checkOrSlip&&h(m,f)}for(var b in d){h(d[b],b)}var _=[];for(var x in d){var y=d[x];c[x]?(y.comprobante=l[c[x]].comprobante,y.document=l[c[x]].documento,_.push(y)):(y.comprobante="",y.document="",_.push(y))}return{ready:_,cmpbNotInBank:a}},w=function(n,e){return n&&n.sort((function(n,t){var r=(0,s.Vd)(n[e]),o=(0,s.Vd)(t[e]);return r<o?-1:r>o?1:0}))},j=function(n){var e=(0,o.Z)({},n);return e.hasOwnProperty("Date")&&(e.date=e.Date,delete e.Date),e.hasOwnProperty("Posting Date")&&(e.date=e["Posting Date"],delete e["Posting Date"]),e.hasOwnProperty("Check Number")&&(e.checkOrSlip=e["Check Number"],delete e["Check Number"]),e.hasOwnProperty('"Check Number"')&&(e.checkOrSlip=e['"Check Number"'],delete e['"Check Number"']),e.hasOwnProperty("Check or Slip #")&&(e.checkOrSlip=e["Check or Slip #"],delete e["Check or Slip #"]),e.hasOwnProperty("Amount")&&(e.amount=e.Amount,delete e.Amount),e.hasOwnProperty("Documento")&&(e.document=e.Documento,delete e.Documento),e.hasOwnProperty("Description")&&(e.description=e.Description,delete e.Description),e},k=function(n,e,t){return(0,s.MV)("getPrevBalance",[n,e,t],(function(){var t,r,o=e.account;e.subAccount&&(o=e.account+"_"+e.subAccount);var i=null===(t=(0,s.bh)("accounts_summary_by_months"))||void 0===t||null===(r=t.summary)||void 0===r?void 0:r[o],a=n-1,c=0;if((0,s.UE)(null===i||void 0===i?void 0:i[a])){var u=0;Array.from(Array(n).keys()).map((function(n){var e=(0,s.Zv)(i[n],2);u=1*u+1*e})),c=u}return c}))}},62:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(1413),o=t(4165),i=t(5861),s=t(9439),a=t(2791),c=t(2350),u=t(2647),l=t(9760),d=(t(7889),t(24)),v=t(713),p=t(4050),h=(t(1534),t(184)),f=(0,u.Jo)(),m=(0,u.PU)(),b=function(n){var e=n.data,t=n.confirm,r=(n.label,n.item),o=e.modalID,i=(0,a.useState)(1),c=(0,s.Z)(i,2),u=c[0],d=c[1],v=function(n){(0,l.CloseModal)({id:o})};return(0,h.jsxs)("div",{style:{maxHeight:"60vh",minHeight:"28vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"code_prod_header",children:null===r||void 0===r?void 0:r.productCode}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("p",{className:"lbl_prod_header",children:null===r||void 0===r?void 0:r.name})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{padding:9},children:[(0,h.jsx)("div",{children:(0,h.jsx)(f,{src:null===r||void 0===r?void 0:r.imageUrl,width:150,fontSize:[12,16]})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx btns_control_2cart",children:[u-1>0?(0,h.jsx)("div",{className:"iconFlx ",children:(0,h.jsx)("div",{onClick:function(){u-1>=0&&d((function(n){return n-1}))},children:(0,h.jsx)(m,{name:"minus",color:"#80868b",size:48})})}):(0,h.jsx)("div",{className:"iconFlx ",children:(0,h.jsx)("div",{style:{width:52}})}),(0,h.jsx)("div",{className:"iconFlx lbl_prod_amount",children:u}),(0,h.jsx)("div",{className:"iconFlx",children:(0,h.jsx)("div",{onClick:function(){d((function(n){return n+1}))},children:(0,h.jsx)(m,{name:"plus",color:"#80868b",size:48})})})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{padding:"1px 10px"},children:[(0,h.jsxs)("p",{className:"lbl_prod_price",children:["$",null===r||void 0===r?void 0:r.price]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"iconFlx",children:(0,h.jsx)("p",{className:"group_title addBtn iconFlx",onClick:v,children:"Cancelar"})}),(0,h.jsx)("div",{className:"iconFlx",children:(0,h.jsx)("p",{className:"group_title addBtn purple iconFlx",onClick:function(){t({productId:r.productId,amount:u,productName:r.name}),v()},children:"Agregar"})})]})]})]})},_=t(15),x=(0,u.Vg)(),y=(0,d.Qz)(),I=(0,d.O6)(),g=((0,u.DK)(),(0,d.$d)(),(0,d.lA)(),(0,u.Jo)()),Z="coll2listprods",w=function(n){n.data,n.elmId;var e,t,u,d=n.updObs,f=(0,a.useState)(!1),m=(0,s.Z)(f,2),w=m[0],j=m[1],k=(0,a.useState)(0),N=(0,s.Z)(k,2),z=(N[0],N[1]),R=(0,a.useState)(0),O=(0,s.Z)(R,2),D=O[0],Q=O[1],S=(0,a.useState)(!1),C=(0,s.Z)(S,2),A=C[0],P=C[1],M=(0,a.useState)(128),U=(0,s.Z)(M,2),F=U[0],V=U[1];(0,a.useEffect)((function(){w||(j(!0),z((0,c.M5)()),(0,c.Rz)("products_list",null),(0,p.Ht)("global_accounts","global_account_params",d),J())}));var B=function(){},E=function(n){(0,c.Rz)("products_list",null),J()},T=function(){var n=(0,i.Z)((0,o.Z)().mark((function n(e,t){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:z((0,c.M5)()),P(!1);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),H=function(n){(0,_.OpenToast)({text:n.productName+"  added to cart",timeout:1500})},J=function(){var n=(0,r.Z)({},(0,c.bh)("products_list"));(0,c.Rz)(Z,n),T()};return(0,h.jsxs)("div",{className:"",children:[(0,h.jsxs)("div",{className:"accounts_header",children:[(0,h.jsx)("h2",{children:"Products"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.I0)()?(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,h.jsx)(y,{}),(0,l.OpenModal)(n)},children:"Agregar Producto"}):null,(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:function(){return Q(!D)},children:"Cambiar Vista"})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,h.jsx)(x,{placeholder:"Buscar ....",width:560,obs:z,fetchData:function(n){P(!0),(0,v.Ve)(J)},loading:A,change:function(n){!A&&P(!0)},callempty:E,keyFlds:"searchQry"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"total_comprobante_title",children:"No de Productos:"}),(0,h.jsx)("div",{className:"total_comprobante gray",children:(0,h.jsx)("span",{children:null===(e=(0,c._2)((0,c.bh)("products_list")))||void 0===e?void 0:e.length})})]})]}),D?(0,h.jsx)("div",{className:"products_container scollVh FlexList ",children:(0,c.bh)(Z)&&(null===(t=(0,v.B8)((0,c.bh)(Z),F))||void 0===t?void 0:t.map((function(n){var e=(0,c.bh)(Z)[n];return(0,h.jsx)("div",{style:{padding:9},onClick:function(){return function(n){var e={zIndex:450,height:"90vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(b,{item:n,confirm:H}),(0,l.OpenModal)(e)}(e)},children:(0,h.jsx)(g,{src:null===e||void 0===e?void 0:e.imageUrl,width:160,lbl:null===e||void 0===e?void 0:e.name,fontSize:[12,16]},n)})})))}):(0,h.jsxs)("div",{className:"products_container scollVh",children:[(0,c.bh)(Z)&&(null===(u=(0,v.B8)((0,c.bh)(Z),F))||void 0===u?void 0:u.map((function(n){return(0,h.jsx)(I,{data:(0,c.bh)(Z)[n],elmId:n,openUpdateView:B,handleRefreshAll:E,updRvw:z},n)}))),(0,c.bh)(Z)&&(0,c._2)((0,c.bh)(Z),F).length>F?(0,h.jsxs)("div",{className:"_dsplFlx ",style:{margin:"15px 0 35px"},children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:function(){V((function(n){return n+128}))},children:"Cargar Mas"}),(0,h.jsx)("div",{className:"flexSpace"})]}):null]})]})}},713:function(n,e,t){t.d(e,{B8:function(){return _},QJ:function(){return d},Rd:function(){return c},VI:function(){return b},Ve:function(){return l},WA:function(){return f},ZW:function(){return a},Zj:function(){return p},dZ:function(){return v},ii:function(){return u},nj:function(){return h},tH:function(){return m}});var r=t(4165),o=t(1413),i=t(5861),s=t(2350),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,c,u,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.get_inventory_prod)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":productId":e},u=(0,s.I7)(c),n.next=5,u;case 5:(l=n.sent)&&((0,s.Rz)("inv_products_list",p((0,s.jQ)(l.list),"name")),(0,s.Rz)("inv_products_stock",l.stock),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,c,u,l,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.get_prod_stock)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:e},u=(0,s.I7)(c),n.next=5,u;case 5:(l=n.sent)&&((d=(0,o.Z)({},(0,s.bh)("products_stock")))[e]=l.stock,(0,s.Rz)("products_stock",d),t&&t());case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_prods)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,s.I7)(a),n.next=5,c;case 5:(u=n.sent)&&((0,s.Rz)("products_list",p(u,"name")),(0,s.Rz)("products_ids",(0,s.ME)((0,s.jQ)(u),"productId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_prod)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchQry"),limit:120},!((0,s.bh)("searchQry").length>2)){n.next=10;break}return c=(0,s.I7)(a),n.next=6,c;case 6:(u=n.sent)&&((0,s.Rz)("products_list",p((0,s.jQ)(u),"code")),e&&e()),n.next=12;break;case 10:(0,s.Rz)("products_list",null),e&&e();case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_entry_invoices)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId},c=(0,s.I7)(a),n.next=5,c;case 5:(u=n.sent)&&((0,s.Rz)("movements_list",p(u,"date")),(0,s.Rz)("movements_ids",(0,s.ME)((0,s.jQ)(u),"inventoryId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_entry_invoice)).params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search":(0,s.bh)("searchMovQry")},c=(0,s.I7)(a),n.next=5,c;case 5:(u=n.sent)&&((0,s.Rz)("movements_list",p((0,s.jQ)(u),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var p=function(n,e){return(0,s.MV)("sortProducts",[n],(function(){return n&&n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0}))}))},h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_prod)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,productId:e},u=(0,s.I7)(c),n.next=5,u;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_inventory)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,inventoryId:e},u=(0,s.I7)(c),n.next=5,u;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.delete_entry_invoice)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,entriesInvoiceId:e},u=(0,s.I7)(c),n.next=5,u;case 5:n.sent&&t&&t();case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),b=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,c,u,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=(0,o.Z)({},null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.entry_invoice_acc_2)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,entriesInvoiceId:e},u=(0,s.I7)(c),n.next=5,u;case 5:(l=n.sent)&&t&&t(l);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),_=function(n,e){return(0,s.MV)("rangeProdArr",[n,e],(function(){return n?(0,s._2)(n).slice(0,e):[]}))}},7889:function(){},1534:function(){},1413:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=62.aea5a5f7.chunk.js.map