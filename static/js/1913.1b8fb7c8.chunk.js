"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1913,9760],{9760:function(e,l,a){a.r(l),a.d(l,{CloseModal:function(){return r},OpenModal:function(){return o},default:function(){return d}});var s=a(2791),i=a(5408),n=a(2350),c=a(184),t="listDialog_mdh392",d=function(){var e=(0,n.bh)("listDialog")||{},l=((0,i.Z)(t),Object.keys(e));return(0,c.jsx)(c.Fragment,{children:l.map((function(l,a){var i=e[l];if(i&&i.visible){var n={};i.height&&(n.heigth=i.height),i.width,i.zIndex&&(n.zIndex=i.zIndex-1);var t={zIndex:i.zIndex},d=null,o=i.data;return i.content&&(d=s.cloneElement(i.content,{data:o})),(0,c.jsxs)("div",{className:"ltr-1kbnjow",style:n,children:[(0,c.jsx)("div",{className:"ltr-hoe9xz",children:(0,c.jsx)("div",{className:"ltr-1wao6ny",style:t,id:l,children:d})}),i.data.overlay?(0,c.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},o=function(e){var l=(0,n.bh)("listDialog")||{},a=(0,n.M5)();l[a]||(l[a]={}),l[a].visible=!0;var s={};e.props?(s=e.props).modalID=a:s.modalID=a;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),l[a].isView=e.isView,l[a].observeResize=e.observeResize,l[a].observeResize&&(l[a].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(a,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===l[a].width&&s.height===l[a].height||(l[a].height=s.height+10,l[a].width=s.width,(0,n.Rz)("listDialog",l),(0,n.wt)(t)))}),200)),l[a].display=!0,e.zIndex&&(l[a].zIndex=e.zIndex),e.height&&(l[a].height=e.height),e.width&&(l[a].width=e.width),e.content&&(l[a].content=e.content),l[a].data=s,(0,n.Rz)("listDialog",l),(0,n.wt)(t),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,n.Rz)("modalOpen",a),(0,n.wt)(t)}),125)},r=function(e){var l,a,s,i=(0,n.bh)("listDialog")||{},c=e.id;i[c]&&(i[c].observeResize&&i[c].observeInterval&&clearInterval(i[c].observeInterval),i[c].display=!1,null===(l=i[c])||void 0===l||null===(a=l.data)||void 0===a||null===(s=a.closeEvent)||void 0===s||s.call(a),(0,n.Rz)("listDialog",i),delete i[c],document.getElementsByTagName("body")[0].style.overflowY=null,(0,n.wt)(t),setTimeout((function(){delete i[c],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,n.Rz)("modalOpen",null)}),750))}},8111:function(e,l,a){a.r(l),a.d(l,{default:function(){return b}});var s=a(9439),i=a(2791),n=(a(1636),a(2350)),c=a(4050),t=a(7689),d=a(9760),o=a(2647),r=a(184),v=(0,o.PU)(),u=(0,o.Vg)(),m=(0,o.YZ)(),h="bank_consolidation_2r",p=function(e){var l,a,o=e.data,p=e.operations,b=e.accountD,_=e.subaccountD,j=(0,i.useState)(0),f=(0,s.Z)(j,2),N=(f[0],f[1]),g=(0,i.useState)(!1),y=(0,s.Z)(g,2),k=y[0],w=y[1],C=(0,i.useState)(!1),F=(0,s.Z)(C,2),I=F[0],z=F[1],D=(0,i.useState)(""),O=(0,s.Z)(D,2),S=O[0],R=O[1],B=(0,i.useState)(!1),M=(0,s.Z)(B,2),T=M[0],E=M[1],A=(0,i.useState)(!1),Z=(0,s.Z)(A,2),L=Z[0],P=Z[1];(0,i.useEffect)((function(){H()}),[b]);var V=function(){N((0,n.M5)()),E(!1)},H=function(){var e=(0,n.bh)("bank_consolidation");(0,n.Rz)(h,e),S&&(0,n.Rz)(h,x(e,S,k,I)),V()},Y=(0,t.s0)(),J=function(e){(0,d.CloseModal)({id:o.modalID}),Y({pathname:"accounting-ledger",search:"?cId=".concat(e.comprobante)})},q=function(e){var l=(0,n.bh)("sortBank"),a=(0,c.i_)((0,c.T7)(p,null===b||void 0===b?void 0:b.code,null===_||void 0===_?void 0:_.subAccount),null===b||void 0===b?void 0:b.code,null===_||void 0===_?void 0:_.subAccount),s=(0,c.y1)(a,l);(0,n.Rz)("bank_consolidation",null===s||void 0===s?void 0:s.ready),(0,n.Rz)("cmpbNotInBank",null===s||void 0===s?void 0:s.cmpbNotInBank),H(),V()};return(0,r.jsxs)("div",{style:{maxHeight:"80vh",width:"90vw",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"title_collect",children:"Consolidacion Bancaria"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"group_title addBtn purple upl",children:["Importar CSV (Bank)",(0,r.jsx)("input",{id:"fileupload",type:"file",onChange:function(e){var l=new FileReader;l.onload=function(e){var l=e.target.result,a=(0,c.h1)((0,n.JO)(l),"Date");(0,n.Rz)("sortBank",a),q()},l.readAsText(e.target.files[0],"UTF-8")}})]}),(0,r.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){var l=(0,n.bh)(h);(0,n.eY)("comparacion_estados_de_cuentas_"+(0,n.M5)()+".csv",l)},children:"Exportar a CSV"})]}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,r.jsx)("div",{style:{marginTop:11},children:(0,r.jsx)(u,{placeholder:"Buscar ....",width:560,obs:N,fetchData:H,loading:T,change:function(e){!T&&E(!0),R(e)},callempty:H,keyFlds:"search_h65767"})}),(0,r.jsx)("div",{style:{marginLeft:15}}),(0,r.jsx)("div",{className:"_dsplFlx cmp_dtls",children:(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsxs)("div",{className:"filter_btn _dsplFlx",onClick:function(){var e=(0,n.bh)("bank_consolidation");(0,n.Rz)(h,e);var l=!k;S?(0,n.Rz)(h,x(e,S,l,I)):l&&(0,n.Rz)(h,x(e,"",l,I)),w(l),V()},children:[(0,r.jsx)("div",{className:"lbl",children:k?"Filtrando":"Filtrar"}),(0,r.jsx)(v,{name:k?"cancel":"filter",color:"#66666"})]}),k?(0,r.jsx)("div",{className:"done_btn _dsplFlx",style:{borderColor:I?"var(--hrm_palette-success-fg)":"#c62828",marginLeft:9},onClick:function(){var e=(0,n.bh)("bank_consolidation");(0,n.Rz)(h,e);var l=!I;S?(0,n.Rz)(h,x(e,S,k,l)):k&&(0,n.Rz)(h,x(e,"",k,l)),z(l),V()},children:(0,r.jsx)(v,{name:I?"check_circle":"alert",color:I?"var(--hrm_palette-success-fg)":"#c62828"})}):null]})}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:24},children:[(0,r.jsx)(m,{initvalue:L,keyCode:77,updChange:function(e){return P(e)}}),(0,r.jsx)("span",{className:"checklabel",children:"Comprobantes fuera del banco"})]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:" addBtn purple btn_purpl_fweight",style:{marginTop:20},onClick:q,children:"Recalc"})})]}),L?(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,r.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,r.jsx)("div",{className:"tr_bar_10",children:"Fecha"}),(0,r.jsx)("div",{className:"tr_bar_10",children:"Importe"}),(0,r.jsx)("div",{className:"tr_bar_10",children:"Documento"})]}),(0,r.jsx)("div",{className:"scollVh subMHeight",children:(0,n.bh)("cmpbNotInBank")&&(null===(l=(0,n._2)((0,n.bh)("cmpbNotInBank")))||void 0===l?void 0:l.map((function(e,l){var a,s=(0,n.bh)("cmpbNotInBank")[e],i=s.debito?1*s.debito:-1*s.credito;return 0===i?null:(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,r.jsxs)("div",{className:"tr_bar_15 comprobante_id _dsplFlx",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{onClick:function(){return J(s)},children:s.comprobante}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"tr_bar_10",children:s.date&&(0,n.sJ)(s.date)}),(0,r.jsx)("div",{className:"tr_bar_10",children:null===(a=1*i)||void 0===a?void 0:a.toFixed(2)}),(0,r.jsx)("div",{className:"tr_bar_10",children:s.document})]},l)})))})]}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,r.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,r.jsx)("div",{className:"tr_bar_10",children:"Fecha"}),(0,r.jsx)("div",{className:"tr_bar_40",children:"Descripcion"}),(0,r.jsx)("div",{className:"tr_bar_10",children:"No cheque"}),(0,r.jsx)("div",{className:"tr_bar_10",children:"Importe"}),(0,r.jsx)("div",{className:"tr_bar_10",children:"Documento"})]}),(0,r.jsx)("div",{className:"scollVh subMHeight",children:(0,n.bh)(h)&&(null===(a=(0,n.bh)(h))||void 0===a?void 0:a.map((function(e,l){var a,s=!0;return k&&(s=!1,I&&e.comprobante&&(s=!0),I||e.comprobante||(s=!0)),!s||isNaN(e.amount)?null:(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,r.jsxs)("div",{className:"tr_bar_15 comprobante_id _dsplFlx",children:[(0,r.jsx)("div",{className:"icon_compr",children:(0,r.jsx)(v,{name:e.comprobante?"check_circle":"alert",color:e.comprobante?"var(--hrm_palette-success-fg)":"#c62828"})}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{onClick:function(){return J(e)},children:e.comprobante}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"tr_bar_10",children:e.date&&(0,n.sJ)(e.date)}),(0,r.jsx)("div",{className:"tr_bar_40 desc_font",children:e.description}),(0,r.jsx)("div",{className:"tr_bar_10",children:e.checkOrSlip}),(0,r.jsx)("div",{className:"tr_bar_10",children:null===(a=1*e.amount)||void 0===a?void 0:a.toFixed(2)}),(0,r.jsx)("div",{className:"tr_bar_10",children:e.document})]},l)})))})]})]})};function x(e,l,a,s){var i,c=l.toLowerCase(),t=[];return null===(i=(0,n._2)(e))||void 0===i||i.map((function(l){var i=e[l],n=!1,d=s&&i.comprobante||!s&&!i.comprobante;c?(n=!1,["description","amount","checkOrSlip"].map((function(e){var l,s,t,o;a?(null===(l=i[e])||void 0===l||null===(s=l.toLowerCase())||void 0===s?void 0:s.indexOf(c))>=0&&d&&(n=!0):(null===(t=i[e])||void 0===t||null===(o=t.toLowerCase())||void 0===o?void 0:o.indexOf(c))>=0&&(n=!0)}))):d&&(n=!0),n&&t.push(i)})),t}var b=function(e){var l,a,o,v,u=e.data,m=e.accountForm,h=(0,i.useState)(0),x=(0,s.Z)(h,2),b=(x[0],x[1]),_=(0,n.bh)("submayor_group");(0,i.useEffect)((function(){(0,c.rs)(m,j)}),[m]);var j=function(){b((0,n.M5)())},f=null===(l=(0,n.bh)("account_ids"))||void 0===l?void 0:l[null===m||void 0===m?void 0:m.account],N=null===(a=(0,n.bh)("sub_account_ids"))||void 0===a?void 0:a[null===m||void 0===m?void 0:m.subAccount],g=(0,t.s0)();return(0,r.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"title_collect",children:"SubMayor de la Cuenta"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,n.eY)("export_submayor_"+(null===f||void 0===f?void 0:f.code)+"_"+(null!==N&&void 0!==N&&N.subAccount?(null===N||void 0===N?void 0:N.subAccount)+"_":"")+(0,n.M5)()+".csv",(0,c.i_)((0,c.T7)(null===_||void 0===_?void 0:_.operations,null===f||void 0===f?void 0:f.code,null===N||void 0===N?void 0:N.subAccount),null===f||void 0===f?void 0:f.code,null===N||void 0===N?void 0:N.subAccount))},children:"Exportar a CSV"}),(0,n.ML)()&&(null===(o=(0,n.bh)("global_account_params"))||void 0===o?void 0:o.cash_bank)===(null===f||void 0===f?void 0:f.accountId)?(0,r.jsx)("div",{className:"group_title addBtn purple upl",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,r.jsx)(p,{accountD:f,subaccountD:N,operations:null===_||void 0===_?void 0:_.operations}),(0,d.OpenModal)(e),(0,d.CloseModal)({id:u.modalID})},children:"Consolidacion Bancaria"}):null]}),(0,r.jsxs)("div",{className:" acc_dtls",style:{marginTop:10},children:[(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===f||void 0===f?void 0:f.code}),(0,r.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-imput-label_gray)"},children:null===f||void 0===f?void 0:f.name})]}),(0,r.jsx)("div",{className:"flexSpace"}),N?(0,r.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,r.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-inverse-background-b)"},children:null===N||void 0===N?void 0:N.subAccount}),(0,r.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-imput-label_gray)"},children:null===N||void 0===N?void 0:N.subAccountName})]}):null]}),(0,r.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"_dsplFlx",children:(0,r.jsx)("div",{})})]}),(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,r.jsx)("div",{className:"tr_bar_s6",children:"Comprobante"}),(0,r.jsx)("div",{className:"tr_bar_s6",children:"Fecha"}),(0,r.jsx)("div",{className:"tr_bar_s6",children:"Documento"}),(0,r.jsx)("div",{className:"tr_bar_s6",children:"Debito"}),(0,r.jsx)("div",{className:"tr_bar_s6",children:"Credito"}),(0,r.jsx)("div",{className:"tr_bar_s6",children:"Saldo"})]}),(0,r.jsx)("div",{className:"scollVh subMHeight",children:(null===_||void 0===_?void 0:_.operations)&&(null===(v=(0,c.T7)(null===_||void 0===_?void 0:_.operations,null===f||void 0===f?void 0:f.code,null===N||void 0===N?void 0:N.subAccount))||void 0===v?void 0:v.map((function(e,l){var a,s,i;return(0,r.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,r.jsx)("div",{className:"tr_bar_s6 comprobante_id",onClick:function(){return function(e){(0,d.CloseModal)({id:u.modalID}),g({pathname:"accounting-ledger",search:"?cId=".concat(e.comprobanteId)})}(e)},children:e.comprobanteId}),(0,r.jsx)("div",{className:"tr_bar_s6",children:e.date&&(0,n.sJ)(e.date)}),(0,r.jsx)("div",{className:"tr_bar_s6",children:e.document}),(0,r.jsx)("div",{className:"tr_bar_s6",children:null===(a=1*e.debit)||void 0===a?void 0:a.toFixed(2)}),(0,r.jsx)("div",{className:"tr_bar_s6",children:null===(s=1*e.credit)||void 0===s?void 0:s.toFixed(2)}),(0,r.jsx)("div",{className:"tr_bar_s6",children:null===(i=1*e.saldo)||void 0===i?void 0:i.toFixed(2)})]},l)})))})]})}},1636:function(){},1413:function(e,l,a){a.d(l,{Z:function(){return n}});var s=a(4942);function i(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);l&&(s=s.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?i(Object(a),!0).forEach((function(l){(0,s.Z)(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}}}]);
//# sourceMappingURL=1913.1b8fb7c8.chunk.js.map