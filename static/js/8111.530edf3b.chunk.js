"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8111,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return l},default:function(){return s}});var r=t(2791),o=t(5408),a=t(2350),i=t(184),c="listDialog_mdh392",s=function(){var e=(0,a.bh)("listDialog")||{},n=((0,o.Z)(c),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:n.map((function(n,t){var o=e[n];if(o&&o.visible){var a={};o.height&&(a.heigth=o.height),o.width,o.zIndex&&(a.zIndex=o.zIndex-1);var c={zIndex:o.zIndex},s=null,l=o.data;return o.content&&(s=r.cloneElement(o.content,{data:l})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:c,id:n,children:s})}),o.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},l=function(e){var n=(0,a.bh)("listDialog")||{},t=(0,a.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,a.Rz)("listDialog",n),(0,a.wt)(c)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,a.Rz)("listDialog",n),(0,a.wt)(c),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",t),(0,a.wt)(c)}),125)},d=function(e){var n,t,r,o=(0,a.bh)("listDialog")||{},i=e.id;o[i]&&(o[i].observeResize&&o[i].observeInterval&&clearInterval(o[i].observeInterval),o[i].display=!1,null===(n=o[i])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,a.Rz)("listDialog",o),delete o[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(c),setTimeout((function(){delete o[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},8111:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(9439),o=t(2791),a=(t(1636),t(2350)),i=t(4050),c=t(7689),s=t(9760),l=t(2647),d=t(184),u=(0,l.PU)(),v=(0,l.Vg)(),p="bank_consolidation_2r",h=function(e){var n,t=e.data,l=e.operations,h=e.accountD,m=e.subaccountD,f=(0,o.useState)(0),_=(0,r.Z)(f,2),x=(_[0],_[1]),g=(0,o.useState)(!1),j=(0,r.Z)(g,2),N=j[0],y=j[1],k=(0,o.useState)(!1),I=(0,r.Z)(k,2),w=I[0],C=I[1],Z=(0,o.useState)(""),z=(0,r.Z)(Z,2),D=z[0],O=z[1],R=(0,o.useState)(!1),S=(0,r.Z)(R,2),F=S[0],A=S[1];(0,o.useEffect)((function(){B()}),[h]);var M=function(){x((0,a.M5)()),A(!1)},B=function(){var e=(0,a.bh)("bank_consolidation");(0,a.Rz)(p,e),D&&(0,a.Rz)(p,b(e,D,N,w)),M()},P=(0,c.s0)(),T=function(e){var n=(0,a.bh)("sortBank"),t=(0,i.i_)((0,i.T7)(l,null===h||void 0===h?void 0:h.code,null===m||void 0===m?void 0:m.subAccount),null===h||void 0===h?void 0:h.code,null===m||void 0===m?void 0:m.subAccount),r=(0,i.y1)(t,n);(0,a.Rz)("bank_consolidation",r),B(),M()};return(0,d.jsxs)("div",{style:{maxHeight:"80vh",width:"90vw",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"title_collect",children:"Consolidacion Bancaria"}),(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsxs)("div",{className:"group_title addBtn purple upl",children:["Importar CSV (Bank)",(0,d.jsx)("input",{id:"fileupload",type:"file",onChange:function(e){var n=new FileReader;n.onload=function(e){var n=e.target.result,t=(0,i.h1)((0,a.JO)(n),"Date");(0,a.Rz)("sortBank",t),T()},n.readAsText(e.target.files[0],"UTF-8")}})]}),(0,d.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){var n=(0,a.bh)(p);(0,a.eY)("comparacion_estados_de_cuentas_"+(0,a.M5)()+".csv",n)},children:"Exportar a CSV"})]}),(0,d.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,d.jsx)("div",{style:{marginTop:11},children:(0,d.jsx)(v,{placeholder:"Buscar ....",width:560,obs:x,fetchData:B,loading:F,change:function(e){!F&&A(!0),O(e)},callempty:B,keyFlds:"search_h65767"})}),(0,d.jsx)("div",{style:{marginLeft:15}}),(0,d.jsx)("div",{className:"_dsplFlx cmp_dtls",children:(0,d.jsxs)("div",{className:"_dsplFlx",children:[(0,d.jsxs)("div",{className:"filter_btn _dsplFlx",onClick:function(){var e=(0,a.bh)("bank_consolidation");(0,a.Rz)(p,e);var n=!N;D?(0,a.Rz)(p,b(e,D,n,w)):n&&(0,a.Rz)(p,b(e,"",n,w)),y(n),M()},children:[(0,d.jsx)("div",{className:"lbl",children:N?"Filtrando":"Filtrar"}),(0,d.jsx)(u,{name:N?"cancel":"filter",color:"#66666"})]}),N?(0,d.jsx)("div",{className:"done_btn _dsplFlx",style:{borderColor:w?"var(--hrm_palette-success-fg)":"#c62828",marginLeft:9},onClick:function(){var e=(0,a.bh)("bank_consolidation");(0,a.Rz)(p,e);var n=!w;D?(0,a.Rz)(p,b(e,D,N,n)):N&&(0,a.Rz)(p,b(e,"",N,n)),C(n),M()},children:(0,d.jsx)(u,{name:w?"check_circle":"alert",color:w?"var(--hrm_palette-success-fg)":"#c62828"})}):null]})}),(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:" addBtn purple btn_purpl_fweight",style:{marginTop:20},onClick:T,children:"Recalc"})})]}),(0,d.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,d.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,d.jsx)("div",{className:"tr_bar_10",children:"Fecha"}),(0,d.jsx)("div",{className:"tr_bar_40",children:"Descripcion"}),(0,d.jsx)("div",{className:"tr_bar_10",children:"No cheque"}),(0,d.jsx)("div",{className:"tr_bar_10",children:"Importe"}),(0,d.jsx)("div",{className:"tr_bar_10",children:"Documento"})]}),(0,d.jsx)("div",{className:"scollVh subMHeight",children:(0,a.bh)(p)&&(null===(n=(0,a.bh)(p))||void 0===n?void 0:n.map((function(e,n){var r,o=!0;return N&&(o=!1,w&&e.Comprobante&&(o=!0),w||e.Comprobante||(o=!0)),!o||isNaN(e.Amount)?null:(0,d.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,d.jsxs)("div",{className:"tr_bar_15 comprobante_id _dsplFlx",children:[(0,d.jsx)("div",{className:"icon_compr",children:(0,d.jsx)(u,{name:e.Comprobante?"check_circle":"alert",color:e.Comprobante?"var(--hrm_palette-success-fg)":"#c62828"})}),(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("div",{onClick:function(){return function(e){(0,s.CloseModal)({id:t.modalID}),P({pathname:"accounting-ledger",search:"?cId=".concat(e.Comprobante)})}(e)},children:e.Comprobante}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"tr_bar_10",children:e.date&&(0,a.sJ)(e.date)}),(0,d.jsx)("div",{className:"tr_bar_40 desc_font",children:e.Description}),(0,d.jsx)("div",{className:"tr_bar_10",children:e.checkOrSlip}),(0,d.jsx)("div",{className:"tr_bar_10",children:null===(r=1*e.Amount)||void 0===r?void 0:r.toFixed(2)}),(0,d.jsx)("div",{className:"tr_bar_10",children:e.Documento})]},n)})))})]})};function b(e,n,t,r){var o,i=n.toLowerCase(),c=[];return null===(o=(0,a._2)(e))||void 0===o||o.map((function(n){var o=e[n],a=!1,s=r&&o.Comprobante||!r&&!o.Comprobante;i?(a=!1,["Description","Amount","checkOrSlip"].map((function(e){var n,r,c,l;t?(null===(n=o[e])||void 0===n||null===(r=n.toLowerCase())||void 0===r?void 0:r.indexOf(i))>=0&&s&&(a=!0):(null===(c=o[e])||void 0===c||null===(l=c.toLowerCase())||void 0===l?void 0:l.indexOf(i))>=0&&(a=!0)}))):s&&(a=!0),a&&c.push(o)})),c}var m=function(e){var n,t,l,u,v=e.data,p=e.accountForm,b=(0,o.useState)(0),m=(0,r.Z)(b,2),f=(m[0],m[1]),_=(0,a.bh)("submayor_group");(0,o.useEffect)((function(){(0,i.rs)(p,x)}),[p]);var x=function(){f((0,a.M5)())},g=null===(n=(0,a.bh)("account_ids"))||void 0===n?void 0:n[null===p||void 0===p?void 0:p.account],j=null===(t=(0,a.bh)("sub_account_ids"))||void 0===t?void 0:t[null===p||void 0===p?void 0:p.subAccount],N=(0,c.s0)();return(0,d.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"title_collect",children:"SubMayor de la Cuenta"}),(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,a.eY)("export_submayor_"+(null===g||void 0===g?void 0:g.code)+"_"+(null!==j&&void 0!==j&&j.subAccount?(null===j||void 0===j?void 0:j.subAccount)+"_":"")+(0,a.M5)()+".csv",(0,i.i_)((0,i.T7)(null===_||void 0===_?void 0:_.operations,null===g||void 0===g?void 0:g.code,null===j||void 0===j?void 0:j.subAccount),null===g||void 0===g?void 0:g.code,null===j||void 0===j?void 0:j.subAccount))},children:"Exportar a CSV"}),(0,a.ML)()&&(null===(l=(0,a.bh)("global_account_params"))||void 0===l?void 0:l.cash_bank)===(null===g||void 0===g?void 0:g.accountId)?(0,d.jsx)("div",{className:"group_title addBtn purple upl",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,d.jsx)(h,{accountD:g,subaccountD:j,operations:null===_||void 0===_?void 0:_.operations}),(0,s.OpenModal)(e),(0,s.CloseModal)({id:v.modalID})},children:"Consolidacion Bancaria"}):null]}),(0,d.jsxs)("div",{className:" acc_dtls",style:{marginTop:10},children:[(0,d.jsxs)("div",{className:"_dsplFlx",children:[(0,d.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===g||void 0===g?void 0:g.code}),(0,d.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-imput-label_gray)"},children:null===g||void 0===g?void 0:g.name})]}),(0,d.jsx)("div",{className:"flexSpace"}),j?(0,d.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,d.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-inverse-background-b)"},children:null===j||void 0===j?void 0:j.subAccount}),(0,d.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-imput-label_gray)"},children:null===j||void 0===j?void 0:j.subAccountName})]}):null]}),(0,d.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("div",{className:"_dsplFlx",children:(0,d.jsx)("div",{})})]}),(0,d.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,d.jsx)("div",{className:"tr_bar_s6",children:"Comprobante"}),(0,d.jsx)("div",{className:"tr_bar_s6",children:"Fecha"}),(0,d.jsx)("div",{className:"tr_bar_s6",children:"Documento"}),(0,d.jsx)("div",{className:"tr_bar_s6",children:"Debito"}),(0,d.jsx)("div",{className:"tr_bar_s6",children:"Credito"}),(0,d.jsx)("div",{className:"tr_bar_s6",children:"Saldo"})]}),(0,d.jsx)("div",{className:"scollVh subMHeight",children:(null===_||void 0===_?void 0:_.operations)&&(null===(u=(0,i.T7)(null===_||void 0===_?void 0:_.operations,null===g||void 0===g?void 0:g.code,null===j||void 0===j?void 0:j.subAccount))||void 0===u?void 0:u.map((function(e,n){var t,r,o;return(0,d.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,d.jsx)("div",{className:"tr_bar_s6 comprobante_id",onClick:function(){return function(e){(0,s.CloseModal)({id:v.modalID}),N({pathname:"accounting-ledger",search:"?cId=".concat(e.comprobanteId)})}(e)},children:e.comprobanteId}),(0,d.jsx)("div",{className:"tr_bar_s6",children:e.date&&(0,a.sJ)(e.date)}),(0,d.jsx)("div",{className:"tr_bar_s6",children:e.document}),(0,d.jsx)("div",{className:"tr_bar_s6",children:null===(t=1*e.debit)||void 0===t?void 0:t.toFixed(2)}),(0,d.jsx)("div",{className:"tr_bar_s6",children:null===(r=1*e.credit)||void 0===r?void 0:r.toFixed(2)}),(0,d.jsx)("div",{className:"tr_bar_s6",children:null===(o=1*e.saldo)||void 0===o?void 0:o.toFixed(2)})]},n)})))})]})}},4050:function(e,n,t){t.d(n,{Ht:function(){return x},Je:function(){return f},Jy:function(){return d},Mp:function(){return g},T7:function(){return m},TP:function(){return _},Y1:function(){return h},ZX:function(){return s},_0:function(){return c},bs:function(){return j},h1:function(){return b},i_:function(){return N},rs:function(){return u},y1:function(){return y}});var r=t(4165),o=t(1413),a=t(5861),i=t(2350),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,c,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_accounts)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId},s=(0,i.I7)(c),e.next=5,s;case 5:(l=e.sent)&&((0,i.Rz)("account_list",p(l,"code")),(0,i.Rz)("account_ids",(0,i.ME)(l,"accountId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,s,d,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_sub_account)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId},d=(0,i.I7)(s),e.next=5,d;case 5:(u=e.sent)&&((0,i.Rz)("sub_account_list",h(u,"subAccount")),(0,i.Rz)("sub_account_group",l(u,"accountId")),(0,i.Rz)("sub_account_ids",(0,i.ME)(u,"sub_accountId")),c(),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function l(e,n){n=n||"id";var t={};return e.length>0?e.map((function(e){e.subAccount&&(t[e[n]]||(t[e[n]]=[]),t[e[n]].push(e))})):t=null,t}var d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,c,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_account)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,i.bh)("searchQry")},s=(0,i.I7)(c),e.next=5,s;case 5:(l=e.sent)&&((0,i.Rz)("account_list",p((0,i.jQ)(l),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,c,s,l,d,u,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.find_acc)).params={businessId:null===(c=(0,i.bh)("profileUser"))||void 0===c?void 0:c.businessId,":account":null===n||void 0===n?void 0:n.account},null!==n&&void 0!==n&&n.subAccount&&((s=(0,o.Z)({},null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.find_acc_subacc)).params={businessId:null===(d=(0,i.bh)("profileUser"))||void 0===d?void 0:d.businessId,":account":null===n||void 0===n?void 0:n.subAccount}),console.log(s),u=(0,i.I7)(s),e.next=7,u;case 7:p=e.sent,console.log(p),p&&!p.error&&((0,i.Rz)("submayor_list",p),(0,i.Rz)("submayor_group",v(p))),t&&t();case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function v(e,n){var t={operations:[]},r=e&&(0,i._2)(e);return r.length>0?r.map((function(n){var r=e[n];r.type&&t.operations.push(function(e){var n,t,r={};r.account=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.document=e.document,r.date=e.date,"credit"===e.type?(r.debit=0,r.credit=e.amount):"debit"===e.type&&(r.credit=0,r.debit=e.amount);return r}(r))})):t=null,t}var p=function(e,n){return(0,i.MV)("sortAccounts",[e,n],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},h=function(e,n){return(0,i.MV)("sortSubAccounts",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},b=function(e){return(0,i.MV)("sortComprobantesByDate",[e],(function(){var n="date";return e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0}))}))},m=function(e,n,t){return(0,i.MV)("calcSubmayor",[e,n,t],(function(){var n="date",t=e.sort((function(e,t){var r=e[n],o=t[n];return r<o?-1:r>o?1:0})),r=0;return t.map((function(e){return function(e){var n,t=(0,o.Z)({},e);return"credit"===(null===e||void 0===e||null===(n=e.account)||void 0===n?void 0:n.type)?t.saldo=r+1*t.credit-1*t.debit:t.saldo=r+1*t.debit-1*t.credit,r=t.saldo,t}(e)}))}))};function f(){return p((0,i.bh)("sub_account_list").map((function(e){var n,t=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.accountId];return{cuenta:t.code+"",nombre:t.name,sub_cuenta:e.subAccount+"",nombre_sub_cuenta:e.subAccountName}})),"cuenta")}var _=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,c,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.get_balance_general_param),c=(0,i.I7)(a),e.next=4,c;case 4:(s=e.sent)&&!s.error&&((0,i.Rz)("balance_general_param",null===s||void 0===s?void 0:s.general),(0,i.Rz)("result_sheet_params",null===s||void 0===s?void 0:s.result),(0,i.Rz)("balance_general_upd_flds",null===s||void 0===s?void 0:s.general_flds),(0,i.Rz)("result_sheet_upd_flds",null===s||void 0===s?void 0:s.result_flds)),n&&n();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var c,s,l,d,u,v,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,o.Z)({},null===(c=(0,i.bh)((0,i.hQ)()))||void 0===c?void 0:c.find_balances)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId,":type":n},d=(0,i.I7)(l),e.next=5,d;case 5:(u=e.sent)&&!u.error&&(v=(0,i._2)(u)[0],p=u[v],(0,i.Rz)(t,p),(0,i.Rz)(t+"_bck",(0,o.Z)({},p))),a&&a();case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var c,s,l,d,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,o.Z)({},null===(c=(0,i.bh)((0,i.hQ)()))||void 0===c?void 0:c.calc_balance_general)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId,balanceId:n,resultId:t},d=(0,i.I7)(l),e.next=5,d;case 5:(u=e.sent)&&!u.error?a&&a(u):a&&a();case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t,a,c,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,o.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.calc_balance_comprobacion)).params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId},c=(0,i.I7)(a),e.next=5,c;case 5:if(!(s=e.sent)||s.error){e.next=9;break}return l=function(e){var n,t,r,o,a=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.accountId],c=e.subAccount?null===(t=s[e.accountId])||void 0===t||null===(r=t.sub[e.sub_accountId])||void 0===r?void 0:r.saldo:null===(o=s[e.accountId])||void 0===o?void 0:o.saldo;return{cuenta:a.code+"",nombre:a.name,sub_cuenta:e.subAccount?e.subAccount:"",nombre_sub_cuenta:e.subAccount?e.subAccountName:"",saldo:c||0,type:a.type}},e.abrupt("return",p((0,i.bh)("sub_account_list").map(l),"cuenta"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function N(e,n,t){return e.map((function(e){return{fecha:(0,i.Gv)(e.date),documento:e.document,comprobante:e.comprobanteId,debito:e.debit,credito:e.credit,saldo:e.saldo,cuenta:n,sub_cuenta:t||""}}))}var y=function(e,n,t){var r=k(e,"fecha"),o=function(e){var n={};for(var t in e)n[t]=e[t];return n}(r),a=function(e){var n={};for(var t in e)n[t]=I(e[t]);return n}(n),c={},s={},l={},d=r,u=a;t&&(d=a,u=r);var v=function(e,n){for(var t in o){var r,a,i,d,u=o[t],v=1*e.Amount,p=v>0?1*u.debito:-1*u.credito;if(c[""+n])break;null===(r=u.documento)||void 0===r||r.trim(),null===(a=e.checkOrSlip)||void 0===a||a.trim();if((null===(i=u.documento)||void 0===i?void 0:i.trim())===(null===(d=e.checkOrSlip)||void 0===d?void 0:d.trim())&&p===v){c[""+n]=""+t,s[""+t]=""+n,delete o[t],delete l[""+n];break}if(p===v){c[""+n]=""+t,s[""+t]=""+n,delete o[t],delete l[""+n];break}l[""+n]="NtF"}};for(var p in u){var h=u[p];h.checkOrSlip&&v(h,p)}for(var b in u){v(u[b],b)}var m=[];for(var f in(0,i._2)(l).map((function(e,n){})),u){var _=u[f];c[f]?(_.Comprobante=d[c[f]].comprobante,_.Documento=d[c[f]].documento,m.push(_)):(_.Comprobante="",_.Documento="",m.push(_))}return m},k=function(e,n){return e&&e.sort((function(e,t){var r=(0,i.Vd)(e[n]),o=(0,i.Vd)(t[n]);return r<o?-1:r>o?1:0}))},I=function(e){var n=(0,o.Z)({},e);return n.hasOwnProperty("Date")&&(n.date=n.Date,delete n.Date),n.hasOwnProperty("Posting Date")&&(n.date=n["Posting Date"],delete n["Posting Date"]),n.hasOwnProperty("Check Number")&&(n.checkOrSlip=n["Check Number"],delete n["Check Number"]),n.hasOwnProperty('"Check Number"')&&(n.checkOrSlip=n['"Check Number"'],delete n['"Check Number"']),n.hasOwnProperty("Check or Slip #")&&(n.checkOrSlip=n["Check or Slip #"],delete n["Check or Slip #"]),n}},1636:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=8111.530edf3b.chunk.js.map