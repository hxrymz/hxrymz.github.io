"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8111,9760],{9760:function(n,e,t){t.r(e),t.d(e,{CloseModal:function(){return l},OpenModal:function(){return s},default:function(){return i}});var r=t(2791),o=t(5408),a=t(2350),c=t(184),i=function(){var n=(0,a.bh)("listDialog")||{},e=((0,o.Z)("listDialog_h392"),Object.keys(n));return(0,c.jsx)(c.Fragment,{children:e.map((function(e,t){var o=n[e];if(o&&o.visible){var a={};o.height&&(a.heigth=o.height),o.width,o.zIndex&&(a.zIndex=o.zIndex-1);var i={zIndex:o.zIndex},s=null,u=o.data;return o.content&&(s=r.cloneElement(o.content,{data:u})),(0,c.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,c.jsx)("div",{className:"ltr-hoe9xz",children:(0,c.jsx)("div",{className:"ltr-1wao6ny",style:i,id:e,children:s})}),o.data.overlay?(0,c.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var n;n=e,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),l({id:n})}}):null]},e)}}))})},s=function(n){var e=(0,a.bh)("listDialog")||{},t=(0,a.M5)();e[t]||(e[t]={}),e[t].visible=!0;var r={};n.props?(r=n.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),e[t].isView=n.isView,e[t].observeResize=n.observeResize,e[t].observeResize&&(e[t].observeInterval=setInterval((function(){var n=document.querySelector("[dialog-key-id='".concat(t,"']")),r=n&&n.getBoundingClientRect();r&&(r.width===e[t].width&&r.height===e[t].height||(e[t].height=r.height+10,e[t].width=r.width,(0,a.Rz)("listDialog",e),(0,a.wt)("listDialog_h392")))}),200)),e[t].display=!0,n.zIndex&&(e[t].zIndex=n.zIndex),n.height&&(e[t].height=n.height),n.width&&(e[t].width=n.width),n.content&&(e[t].content=n.content),e[t].data=r,(0,a.Rz)("listDialog",e),(0,a.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",t),(0,a.wt)("listDialog_h392")}),125)},l=function(n){var e,t,r,o=(0,a.bh)("listDialog")||{},c=n.id;o[c]&&(o[c].observeResize&&o[c].observeInterval&&clearInterval(o[c].observeInterval),o[c].display=!1,null===(e=o[c])||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,a.Rz)("listDialog",o),delete o[c],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)("listDialog_h392"),setTimeout((function(){delete o[c],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},8111:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r=t(9439),o=t(2791),a=(t(1636),t(2350)),c=t(4050),i=t(7689),s=t(9760),l=t(2647),u=t(184),d=(0,l.PU)(),v=function(n){var e,t,c,l=n.data,v=n.accountForm,b=(0,o.useState)(0),h=(0,r.Z)(b,2),p=(h[0],h[1],(0,o.useState)(!1)),m=(0,r.Z)(p,2),f=m[0],_=m[1],x=(0,o.useState)(!1),j=(0,r.Z)(x,2),g=j[0],N=j[1];(0,a.bh)("submayor_group");(0,o.useEffect)((function(){}),[v]);null===(e=(0,a.bh)("account_ids"))||void 0===e||e[null===v||void 0===v?void 0:v.account],null===(t=(0,a.bh)("sub_account_ids"))||void 0===t||t[null===v||void 0===v?void 0:v.subAccount];var y=(0,i.s0)();return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"90vw",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"title_collect",children:"Consolidacion Bancaria"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"group_title addBtn purple",onClick:function(n){var e=(0,a.bh)("bank_consolidation");(0,a.eY)("comparacion_estados_de_cuentas_"+(0,a.M5)()+".csv",e)},children:"Exportar a CSV"})]}),(0,u.jsx)("div",{className:"_dsplFlx cmp_dtls",children:(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsxs)("div",{className:"filter_btn _dsplFlx",onClick:function(){return _(!f)},children:[(0,u.jsx)("div",{className:"lbl",children:f?"Filtrando":"Filtrar"}),(0,u.jsx)(d,{name:f?"cancel":"filter",color:"#66666"})]}),f?(0,u.jsx)("div",{className:"done_btn _dsplFlx",style:{borderColor:g?"var(--hrm_palette-success-fg)":"#c62828",marginLeft:9},onClick:function(){return N(!g)},children:(0,u.jsx)(d,{name:g?"check_circle":"alert",color:g?"var(--hrm_palette-success-fg)":"#c62828"})}):null,(0,u.jsx)("div",{className:"flexSpace"})]})}),(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,u.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,u.jsx)("div",{className:"tr_bar_10",children:"Fecha"}),(0,u.jsx)("div",{className:"tr_bar_40",children:"Descripcion"}),(0,u.jsx)("div",{className:"tr_bar_10",children:"No cheque"}),(0,u.jsx)("div",{className:"tr_bar_10",children:"Importe"}),(0,u.jsx)("div",{className:"tr_bar_10",children:"Documento"})]}),(0,u.jsx)("div",{className:"scollVh subMHeight",children:null===(c=(0,a.bh)("bank_consolidation"))||void 0===c?void 0:c.map((function(n,e){var t,r=!0;return f&&(r=!1,g&&n.Comprobante&&(r=!0),g||n.Comprobante||(r=!0)),!r||isNaN(n.Amount)?null:(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsxs)("div",{className:"tr_bar_15 comprobante_id _dsplFlx",onClick:function(){return function(n){(0,s.CloseModal)({id:l.modalID}),y({pathname:"accounting-ledger",search:"?cId=".concat(n.comprobanteId)})}(n)},children:[(0,u.jsx)("div",{className:"icon_compr",children:(0,u.jsx)(d,{name:n.Comprobante?"check_circle":"alert",color:n.Comprobante?"var(--hrm_palette-success-fg)":"#c62828"})}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("span",{children:n.Comprobante}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)("div",{className:"tr_bar_10",children:n.Date&&(0,a.sJ)(n.Date)}),(0,u.jsx)("div",{className:"tr_bar_40 desc_font",children:n.Description}),(0,u.jsx)("div",{className:"tr_bar_10",children:n["Check Number"]}),(0,u.jsx)("div",{className:"tr_bar_10",children:null===(t=1*n.Amount)||void 0===t?void 0:t.toFixed(2)}),(0,u.jsx)("div",{className:"tr_bar_10",children:n.Documento})]},e)}))})]})},b=function(n){var e,t,l,d,b=n.data,h=n.accountForm,p=(0,o.useState)(0),m=(0,r.Z)(p,2),f=(m[0],m[1]),_=(0,o.useState)(""),x=(0,r.Z)(_,2),j=(x[0],x[1],(0,a.bh)("submayor_group"));(0,o.useEffect)((function(){(0,c.rs)(h,g),(0,a.Rz)("bank_consolidation",null)}),[h]);var g=function(){f((0,a.M5)())},N=null===(e=(0,a.bh)("account_ids"))||void 0===e?void 0:e[null===h||void 0===h?void 0:h.account],y=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[null===h||void 0===h?void 0:h.subAccount],I=(0,i.s0)();return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"title_collect",children:"SubMayor de la Cuenta"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,a.eY)("export_submayor_"+(null===N||void 0===N?void 0:N.code)+"_"+(null!==y&&void 0!==y&&y.subAccount?(null===y||void 0===y?void 0:y.subAccount)+"_":"")+(0,a.M5)()+".csv",(0,c.i_)((0,c.T7)(null===j||void 0===j?void 0:j.operations,null===N||void 0===N?void 0:N.code,null===y||void 0===y?void 0:y.subAccount),null===N||void 0===N?void 0:N.code,null===y||void 0===y?void 0:y.subAccount))},children:"Exportar a CSV"}),(0,a.ML)()&&(null===(l=(0,a.bh)("global_account_params"))||void 0===l?void 0:l.cash_bank)===(null===N||void 0===N?void 0:N.accountId)?(0,u.jsxs)("div",{className:"group_title addBtn purple upl",children:["Consolidacion Bancaria",(0,u.jsx)("input",{id:"fileupload",type:"file",onChange:function(n){var e=new FileReader;e.onload=function(n){var e=n.target.result,t=(0,c.i_)((0,c.T7)(null===j||void 0===j?void 0:j.operations,null===N||void 0===N?void 0:N.code,null===y||void 0===y?void 0:y.subAccount),null===N||void 0===N?void 0:N.code,null===y||void 0===y?void 0:y.subAccount),r=(0,c.y1)(t,e);(0,a.Rz)("bank_consolidation",r),(0,s.CloseModal)({id:b.modalID}),function(){var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,u.jsx)(v,{}),(0,s.OpenModal)(n)}()},e.readAsText(n.target.files[0],"UTF-8")}})]}):null]}),(0,u.jsxs)("div",{className:" acc_dtls",style:{marginTop:10},children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===N||void 0===N?void 0:N.code}),(0,u.jsx)("div",{className:"name",children:null===N||void 0===N?void 0:N.name})]}),(0,u.jsx)("div",{className:"flexSpace"}),y?(0,u.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,u.jsx)("div",{className:"code",children:null===y||void 0===y?void 0:y.subAccount}),(0,u.jsx)("div",{className:"name",children:null===y||void 0===y?void 0:y.subAccountName})]}):null]}),(0,u.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"_dsplFlx",children:(0,u.jsx)("div",{})})]}),(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,u.jsx)("div",{className:"tr_bar_s6",children:"Comprobante"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Fecha"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Documento"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Debito"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Credito"}),(0,u.jsx)("div",{className:"tr_bar_s6",children:"Saldo"})]}),(0,u.jsx)("div",{className:"scollVh subMHeight",children:(null===j||void 0===j?void 0:j.operations)&&(null===(d=(0,c.T7)(null===j||void 0===j?void 0:j.operations,null===N||void 0===N?void 0:N.code,null===y||void 0===y?void 0:y.subAccount))||void 0===d?void 0:d.map((function(n,e){var t,r,o;return(0,u.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,u.jsx)("div",{className:"tr_bar_s6 comprobante_id",onClick:function(){return function(n){(0,s.CloseModal)({id:b.modalID}),I({pathname:"accounting-ledger",search:"?cId=".concat(n.comprobanteId)})}(n)},children:n.comprobanteId}),(0,u.jsx)("div",{className:"tr_bar_s6",children:n.date&&(0,a.sJ)(n.date)}),(0,u.jsx)("div",{className:"tr_bar_s6",children:n.document}),(0,u.jsx)("div",{className:"tr_bar_s6",children:null===(t=1*n.debit)||void 0===t?void 0:t.toFixed(2)}),(0,u.jsx)("div",{className:"tr_bar_s6",children:null===(r=1*n.credit)||void 0===r?void 0:r.toFixed(2)}),(0,u.jsx)("div",{className:"tr_bar_s6",children:null===(o=1*n.saldo)||void 0===o?void 0:o.toFixed(2)})]},e)})))})]})}},4050:function(n,e,t){t.d(e,{Ht:function(){return _},Je:function(){return m},Jy:function(){return u},Mp:function(){return x},T7:function(){return p},TP:function(){return f},Y1:function(){return h},ZX:function(){return s},_0:function(){return i},bs:function(){return j},i_:function(){return g},rs:function(){return d},y1:function(){return N}});var r=t(4165),o=t(1413),a=t(5861),c=t(2350),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId},s=(0,c.I7)(i),n.next=5,s;case 5:(l=n.sent)&&((0,c.Rz)("account_list",b(l,"code")),(0,c.Rz)("account_ids",(0,c.ME)(l,"accountId")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,s,u,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId},u=(0,c.I7)(s),n.next=5,u;case 5:(d=n.sent)&&((0,c.Rz)("sub_account_list",h(d,"subAccount")),(0,c.Rz)("sub_account_group",l(d,"accountId")),(0,c.Rz)("sub_account_ids",(0,c.ME)(d,"sub_accountId")),i(),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function l(n,e){e=e||"id";var t={};return n.length>0?n.map((function(n){n.subAccount&&(t[n[e]]||(t[n[e]]=[]),t[n[e]].push(n))})):t=null,t}var u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,c.bh)("searchQry")},s=(0,c.I7)(i),n.next=5,s;case 5:(l=n.sent)&&((0,c.Rz)("account_list",b((0,c.jQ)(l),"code")),e&&e());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){var a,i,s,l,u,d,b;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(s=(0,o.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.find_acc)).params={businessId:null===(i=(0,c.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account},null!==e&&void 0!==e&&e.subAccount&&((s=(0,o.Z)({},null===(l=(0,c.bh)((0,c.hQ)()))||void 0===l?void 0:l.find_acc_subacc)).params={businessId:null===(u=(0,c.bh)("profileUser"))||void 0===u?void 0:u.businessId,":account":null===e||void 0===e?void 0:e.account,":sub_account":null===e||void 0===e?void 0:e.subAccount}),d=(0,c.I7)(s),n.next=6,d;case 6:(b=n.sent)&&!b.error&&((0,c.Rz)("submayor_list",b),(0,c.Rz)("submayor_group",v(b))),t&&t();case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function v(n,e){var t={operations:[]},r=n&&(0,c._2)(n);return r.length>0?r.map((function(e){var r=n[e];r.type&&t.operations.push(function(n){var e,t,r={};r.account=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.account],r.sub_account=null===(t=(0,c.bh)("sub_account_ids"))||void 0===t?void 0:t[n.subAccount],r.comprobanteId=n.comprobanteId,r.document=n.document,r.date=n.date,"credit"===n.type?(r.debit=0,r.credit=n.amount):"debit"===n.type&&(r.credit=0,r.debit=n.amount);return r}(r))})):t=null,t}var b=function(n,e){return(0,c.MV)("sortAccounts",[n,e],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},h=function(n,e){return(0,c.MV)("sortSubAccounts",[n],(function(){return n&&n.sort((function(n,t){var r=1*n[e],o=1*t[e];return r<o?-1:r>o?1:0}))}))},p=function(n,e,t){return(0,c.MV)("calcSubmayor",[n,e,t],(function(){var e="date",t=n.sort((function(n,t){var r=n[e],o=t[e];return r<o?-1:r>o?1:0})),r=0;return t.map((function(n){return function(n){var e,t=(0,o.Z)({},n);return"credit"===(null===n||void 0===n||null===(e=n.account)||void 0===e?void 0:e.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(n)}))}))};function m(){return b((0,c.bh)("sub_account_list").map((function(n){var e,t=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:n.subAccount+"",nombre_sub_cuenta:n.subAccountName}})),"cuenta")}var f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,o.Z)({},null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.get_balance_general_param),i=(0,c.I7)(a),n.next=4,i;case 4:(s=n.sent)&&!s.error&&((0,c.Rz)("balance_general_param",null===s||void 0===s?void 0:s.general),(0,c.Rz)("result_sheet_params",null===s||void 0===s?void 0:s.result),(0,c.Rz)("balance_general_upd_flds",null===s||void 0===s?void 0:s.general_flds),(0,c.Rz)("result_sheet_upd_flds",null===s||void 0===s?void 0:s.result_flds)),e&&e();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a){var i,s,l,u,d,v,b;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(l=(0,o.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.find_balances)).params={businessId:null===(s=(0,c.bh)("profileUser"))||void 0===s?void 0:s.businessId,":type":e},u=(0,c.I7)(l),n.next=5,u;case 5:(d=n.sent)&&!d.error&&(v=(0,c._2)(d)[0],b=d[v],(0,c.Rz)(t,b),(0,c.Rz)(t+"_bck",(0,o.Z)({},b))),a&&a();case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a){var i,s,l,u,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(l=(0,o.Z)({},null===(i=(0,c.bh)((0,c.hQ)()))||void 0===i?void 0:i.calc_balance_general)).params={businessId:null===(s=(0,c.bh)("profileUser"))||void 0===s?void 0:s.businessId,balanceId:e,resultId:t},u=(0,c.I7)(l),n.next=5,u;case 5:(d=n.sent)&&!d.error?a&&a(d):a&&a();case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),j=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t,a,i,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=(0,o.Z)({},null===(e=(0,c.bh)((0,c.hQ)()))||void 0===e?void 0:e.calc_balance_comprobacion)).params={businessId:null===(t=(0,c.bh)("profileUser"))||void 0===t?void 0:t.businessId},i=(0,c.I7)(a),n.next=5,i;case 5:if(!(s=n.sent)||s.error){n.next=9;break}return l=function(n){var e,t,r,o,a=null===(e=(0,c.bh)("account_ids"))||void 0===e?void 0:e[n.accountId],i=n.subAccount?null===(t=s[n.accountId])||void 0===t||null===(r=t.sub[n.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=s[n.accountId])||void 0===o?void 0:o.saldo;return{cuenta:a.code+"",nombre:a.name,sub_cuenta:n.subAccount?n.subAccount:"",nombre_sub_cuenta:n.subAccount?n.subAccountName:"",saldo:i||0}},n.abrupt("return",b((0,c.bh)("sub_account_list").map(l),"cuenta"));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function g(n,e,t){return n.map((function(n){return{fecha:(0,c.Gv)(n.date),documento:n.document,comprobante:n.comprobanteId,debito:n.debit,credito:n.credit,saldo:n.saldo,cuenta:e,sub_cuenta:t||""}}))}var N=function(n,e){var t=y(n,"fecha"),r=y((0,c.JO)(e),"Date"),a={},i={};r.map((function(n,e){!function(n,e){for(var r=0;r<t.length;r++){var o=t[r];if(n===(n>0?1*o.debito:-1*o.credito)&&!a[""+e]&&!i[""+r]){a[""+e]=""+r,i[""+r]=""+e;break}}}(1*n.Amount,e)}));var s=[];return r.map((function(n,e){if(a[e]){var r=(0,o.Z)({},n);r.Comprobante=t[a[e]].comprobante,r.Documento=t[a[e]].documento,s.push(r)}else s.push(n)})),s},y=function(n,e){return n&&n.sort((function(n,t){var r=(0,c.Vd)(n[e]),o=(0,c.Vd)(t[e]);return r<o?-1:r>o?1:0}))}},1636:function(){},4942:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(9142);function o(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},1413:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);
//# sourceMappingURL=8111.501bccc9.chunk.js.map