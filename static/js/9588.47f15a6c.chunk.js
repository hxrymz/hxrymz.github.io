"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9588],{4304:function(e,n,t){t.d(n,{lp:function(){return o},NK:function(){return r}});t(2791);var a=t(1087),i=t(184),r=function(e){var n=e.clickHandler,t=e.label,r=e.navTo;return(0,i.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:n,children:(0,i.jsx)(a.OL,{className:" jaqJnq",to:r,children:t})})},o=function(e){var n=e.children;return(0,i.jsx)("div",{className:"jRutKh",children:(0,i.jsx)("div",{className:"jSvsvz",children:(0,i.jsx)("div",{className:"jzcvbH",children:(0,i.jsx)("div",{className:" kfqEsq",children:n})})})})}},3075:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=t(4165),i=t(5861),r=t(9439),o=t(2791),l=t(2350),c=(t(5196),t(5288)),s=t(9760),d=t(1475),u=t(2647),v=(t(5027),t(184)),m=function(e){var n=e.data,t=e.confirm,a=(e.handleClick,e.close,n.modalID),i=function(e){(0,s.CloseModal)({id:a})};return(0,v.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsx)("div",{className:"_dsplFlx ",children:(0,v.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("p",{className:"group_title addBtn",onClick:i,children:"Cancelar"}),(0,v.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),i()},children:"Eliminar"})]})]})},p=t(1413),h=t(4304),f=t(24),_=t(7689),x=((0,u.PU)(),(0,u.JC)()),b=((0,u.tW)(),(0,u.Np)()),j=(0,f.f_)(),g="cmp_feedfromMobile",N=function(e){var n,t,c,u,m,h=e.data,f=e.item,x=e.confirm,N=(0,o.useState)(!1),C=(0,r.Z)(N,2),k=C[0],I=C[1],Z=(0,o.useState)(0),O=(0,r.Z)(Z,2),M=(O[0],O[1]);(0,_.s0)();(0,o.useEffect)((function(){if(!k){var e,n;I(!0);var t="debit",a="credit",i=(0,p.Z)({},f);"expense"===(null===i||void 0===i?void 0:i.movementType)&&(t="credit",a="debit");var r=(null===i||void 0===i?void 0:i.title)+"; "+(null===i||void 0===i?void 0:i.description);F("description",r),F("date",1*(null===i||void 0===i?void 0:i.date)),i.document?F("document",null===i||void 0===i?void 0:i.document):F("document",(0,l.UG)(1*(null===i||void 0===i?void 0:i.date))+"_"+(0,l.LO)());var o=null===(e=(0,l.bh)("categories_ids"))||void 0===e?void 0:e[null===i||void 0===i?void 0:i.categoryId],c={};c.amount=null===i||void 0===i?void 0:i.amount,c.movementId=null===i||void 0===i?void 0:i.movementId,c.description=r,c.date=null===i||void 0===i?void 0:i.date,c.document=null===i||void 0===i?void 0:i.document;var s=(0,p.Z)({},c);c.account=null===(n=(0,l.bh)("global_account_params"))||void 0===n?void 0:n.cash_bank.account,c.type=t,s.account=null===o||void 0===o?void 0:o.account,null!==o&&void 0!==o&&o.subAccount&&(s.subAccount=null===o||void 0===o?void 0:o.subAccount),s.type=a,(0,l.Rz)("cmpListfromMbl",[s,c]),M((0,l.M5)())}}),[null===(n=(0,l.bh)(g))||void 0===n?void 0:n.movementId]);var F=function(e,n,t){var a=(0,l.bh)(g)||{};t?(a[t]||(a[t]={}),a[t][e]=n):a[e]=n,(0,l.Rz)(g,a),M((0,l.M5)())},S=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t,r,o,c,d,u,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=(0,p.Z)({},(0,l.bh)(g))).date?o.date=new Date(o.date).getTime():o.date=(new Date).getTime()+800,e.next=4,(0,l.fN)(o.date);case 4:return c=e.sent,o.comprobanteId=c,o.document||(o.document=(0,l.LO)()+"_"+(0,l.UG)(o.date)),d=[],(0,l.bh)("cmpListfromMbl")&&(null===(n=(0,l._2)((0,l.bh)("cmpListfromMbl")))||void 0===n||n.map(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var i,r,c,s,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,l.bh)("cmpListfromMbl")[n],!isNaN(1*i.amount)&&1*i.amount>0&&((s=(0,p.Z)({},o)).account=i.account,i.subAccount&&(s.subAccount=i.subAccount),s.movementRef=f.movementId,s.type=i.type,s.amount=1*i.amount,s.operationId=(0,l.M5)(),(u=(0,p.Z)({},null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.add_opera)).params={businessId:null===(c=(0,l.bh)("profileUser"))||void 0===c?void 0:c.businessId,year:(0,l.bh)("date_current_year")},u.form=s,d.push(u));case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())),(u=(0,p.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.upd__incms_expns)).params={businessId:null===(r=(0,l.bh)("profileUser"))||void 0===r?void 0:r.businessId,movementId:f.movementId,year:(0,l.bh)("date_current_year")},u.data2update={comprobanteId:c},d.push(u),v=d.map(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=16,Promise.all(v);case 16:setTimeout((function(){(0,l.Rz)("cmpListfromMbl",null),(0,l.Rz)(g,null),(null===h||void 0===h?void 0:h.modalID)&&(0,s.CloseModal)({id:null===h||void 0===h?void 0:h.modalID}),(0,l.Ey)(x)&&x()}),400);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){window.open(e)};return(0,v.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Associar Asiento"}),(0,v.jsx)("div",{className:"flexSpace"}),null!==f&&void 0!==f&&f.imagePath?(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,d.Qq)(f,L)},children:"See Image"}):null]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)(j,{init:null===(t=(0,l.bh)(g))||void 0===t?void 0:t.date,updDate:function(e){return F("date",e)}}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)(b,{init:null===(c=(0,l.bh)(g))||void 0===c?void 0:c.document,label:"Documento",width:120,updChanges:function(e){return F("document",e)}})]}),(0,v.jsx)("div",{className:"_dsplFlx ",children:(0,v.jsx)(b,{init:null===(u=(0,l.bh)(g))||void 0===u?void 0:u.description,label:"Descripcion",width:520,updChanges:function(e){return F("description",e)}})}),(0,v.jsx)("div",{style:{marginTop:19},children:(0,v.jsx)(w,{item:(0,l.bh)("cmpListfromMbl"),updFrm:F,document:null===(m=(0,l.bh)(g))||void 0===m?void 0:m.document})}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{margin:"32px 32px 0 0"},children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)(y,{clickHandler:S,label:"Salvar"})]})]})},y=function(e){var n=e.clickHandler,t=e.label;return(0,v.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:n,children:(0,v.jsx)("div",{className:" jaqJnq",children:t})})},w=function(e){var n=e.item,t=e.updFrm,a=e.document,i=(0,o.useState)(0),c=(0,r.Z)(i,2),s=(c[0],c[1]),d=function(e,a,i){var r,o=n||(null===(r=(0,l.bh)("global_account_params"))||void 0===r?void 0:r.w2_params);i?(o[i]||(o[i]={}),o[i][e]=a):o[e]=a,t("w2",o),s((0,l.M5)())};return(0,v.jsxs)(h.lp,{children:[(0,v.jsx)("div",{className:"iMTYiw hiKoiM",children:"Comprobante Contables"}),(0,v.jsx)("div",{className:"_dsplFlx w_100prc",style:{marginTop:19}}),(0,v.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,v.jsx)("div",{className:"igLyC tr_bar_20 pddBtm-12",children:(0,v.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Cuenta"})}),(0,v.jsx)("div",{className:"igLyC tr_bar_20 pddBtm-12",children:(0,v.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Sub Cuenta"})}),(0,v.jsx)("div",{className:"igLyC tr_bar_30 pddBtm-12",children:(0,v.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Documento"})}),(0,v.jsx)("div",{className:"igLyC tr_bar_15 pddBtm-12 tr_bar_15",children:(0,v.jsx)("div",{className:"txt_al_r whi_headr",children:"debito"})}),(0,v.jsx)("div",{className:"igLyC tr_bar_15 pddBtm-12 tr_bar_15",children:(0,v.jsx)("div",{className:"txt_al_r whi_headr",children:"Credito"})})]}),n&&n.map((function(e,n){return(0,v.jsx)(C,{item:e,document:a,label:"Federal Tax",percentDefault:14.5,onChange:d,keyFld:"federalTax"},e.movementId+"_"+n)}))]})},C=function(e){e.label;var n,t,a=e.item,i=e.document,r=(e.keyFld,e.percentDefault,function(e){}),o=null===(n=(0,l.bh)("account_ids"))||void 0===n?void 0:n[null===a||void 0===a?void 0:a.account],c=null===(t=(0,l.bh)("sub_account_ids"))||void 0===t?void 0:t[null===a||void 0===a?void 0:a.subAccount];return(0,v.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,v.jsx)("div",{className:"igLyC light_300_color tr_bar_20 pddBtm-12",children:(0,v.jsx)("div",{className:"txfnt_lfal",children:(0,v.jsx)(x,{data:o,color:"var(--light-300)",labelField:"code",infoField:"name"})})}),(0,v.jsx)("div",{className:"igLyC light_300_color tr_bar_20 pddBtm-12",children:(0,v.jsx)("div",{className:"txfnt_lfal",children:(0,v.jsx)(x,{data:c,color:"var(--light-300)",labelField:"subAccount",infoField:"subAccountName"})})}),(0,v.jsx)("div",{className:"igLyC light_300_color tr_bar_30 pddBtm-12",children:(0,v.jsx)("div",{className:"txfnt_lfal",children:i})}),"debit"===a.type?(0,v.jsx)(k,{keyFld:"amount",item:a,onChange:r}):(0,v.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,v.jsx)("div",{className:" txt_al_r",children:"0.00"})}),"credit"===a.type?(0,v.jsx)(k,{keyFld:"amount",item:a,onChange:r}):(0,v.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,v.jsx)("div",{className:" txt_al_r",children:"0.00"})})]})},k=function(e){e.label;var n=e.item,t=e.onChange,a=e.keyFld,i=(e.percentDefault,(0,o.useState)(0)),c=(0,r.Z)(i,2),s=c[0],d=c[1],u=(0,o.useState)(0),m=(0,r.Z)(u,2),p=m[0],h=m[1];p||null===n||void 0===n||n[a];return s?(0,v.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,v.jsx)("input",{className:"inpyt_tx",type:"number","aria-haspopup":"false","auto-capitalize":"off","auto-complete":"off","auto-correct":"off","spell-check":"false",onChange:function(e){h(e.target.value)},onKeyDown:function(e){13===e.keyCode&&((0,l.UE)(p)&&t&&t(a,p),d(!1))}})}):(0,v.jsx)("div",{className:"igLyC light_300_color tr_bar_15",onClick:function(){return d(!s)},children:(0,v.jsx)("div",{className:" txt_al_r",children:(1*n[a]).toFixed(2)})})};t(799);var I=t(1087),Z=(0,u.PU)(),O=(0,c.Hb)(),M=(0,c._$)(),F=function(e){var n=e.data,t=(e.elmId,e.handleRefreshAll),c=(0,o.useState)(!1),u=(0,r.Z)(c,2),p=u[0],h=u[1],f=(0,o.useState)(0),x=(0,r.Z)(f,2),b=(x[0],x[1]),j=((0,_.s0)(),(0,o.useState)(0)),g=(0,r.Z)(j,2);g[0],g[1];(0,o.useEffect)((function(){p||(h(!0),b((0,l.M5)()))}));var y=function(){b((0,l.M5)())},w=function(){(0,d.MX)(y)},C=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,l.I0)()&&((0,l.Rz)("upd_fromMobile",n),(0,l.Rz)("upd_fromMobile_bck",JSON.parse(JSON.stringify(n))),(t={}).zIndex=450,t.height="80vh",t.props={minHeight:"1vh",overlay:!0},t.content=(0,v.jsx)(O,{confirm:w}),(0,s.OpenModal)(t));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){(0,d.M_)(null===n||void 0===n?void 0:n.movementId,t)},F=function(e){var n=new Image;n.onload=function(){var e={oh:n.height,ow:n.width,h:n.height,w:n.width};(0,l.Rz)("preview_mov_dmz",e),z()},e&&(n.src=e)},S=function(e){var n,t=(0,l.LH)(e);(0,d.Qq)(null===(n=(0,l.bh)("profileUser"))||void 0===n?void 0:n.businessId,e,(function(e){return L(e,t)}))},L=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Em)(n,t);case 2:i=e.sent,(0,l.Rz)("image_url_mov",n),(0,l.Rz)("image_preview_mov",i),F(i);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),z=function(e,a){var i={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};i.content=(0,v.jsx)(M,{confirm:t,item:n}),(0,s.OpenModal)(i)},R=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var i,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,l.I0)()&&(n.inManualRevision?((0,l.Rz)((0,l.Ks)()+"_upd",n),(0,l.Rz)((0,l.Ks)()+"_upd_bck",JSON.parse(JSON.stringify(n))),S(n.imagePath)):n.comprobanteId?(i=window.location.origin+"/#/accounting-ledger?cId=".concat(n.comprobanteId),window.open(i)):((r={}).zIndex=450,r.height="80vh",r.props={minHeight:"1vh",overlay:!0},r.content=(0,v.jsx)(N,{confirm:t,item:n}),(0,s.OpenModal)(r)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Em)(n,t);case 2:i=e.sent,window.open(i);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),P=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.imagePath?((0,l.Rz)((0,l.Ks)()+"_upd",n),(0,l.Rz)((0,l.Ks)()+"_upd_bck",JSON.parse(JSON.stringify(n))),S(n.imagePath)):C();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{className:"item_acc",children:(0,v.jsxs)("div",{className:"_dsplFlx operation_item_box",children:[(0,v.jsx)("div",{className:"icon_revision",onClick:R,children:(0,v.jsx)(Z,{name:n.inManualRevision?"help":n.comprobanteId?"success":"alert",color:n.inManualRevision?"var(--partial-success)":n.comprobanteId?"var(--hrm_palette-success-fg)":"var(--hrm_palette-selected-nav-text)"})}),(0,v.jsx)("div",{className:" tr_bar_15 font_onm",children:(0,v.jsx)(I.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(n.comprobanteId)},children:null===n||void 0===n?void 0:n.comprobanteId})}),(0,v.jsxs)("div",{className:"_dsplFlx tr_bar_70",onClick:P,children:[(0,v.jsx)("div",{className:" tr_bar_15",children:(0,l.sJ)(1*(null===n||void 0===n?void 0:n.date))}),(0,v.jsx)("div",{className:" tr_bar_25 font_onm",style:{color:"expense"===n.movementType?"var(--hrm_palette-selected-nav-text)":"var( --hrm_palette-blue-purple)"},children:null===n||void 0===n?void 0:n.title}),(0,v.jsx)("div",{className:" tr_bar_45  font_onm",style:{marginLeft:9},children:null===n||void 0===n?void 0:n.description}),(0,v.jsx)("div",{className:" tr_bar_15 txt_al_r",style:{color:"expense"===n.movementType?"var(--hrm_palette-selected-nav-text)":"var( --hrm_palette-blue-purple)"},children:null===n||void 0===n?void 0:n.amount})]}),(0,v.jsx)("div",{className:"flexSpace"}),null!==n&&void 0!==n&&n.imagePath?(0,v.jsx)("div",{className:"icon tr_bar_5",onClick:function(){var e,t=(0,l.LH)(n.imagePath);(0,d.Qq)(null===(e=(0,l.bh)("profileUser"))||void 0===e?void 0:e.businessId,n.imagePath,(function(e){return D(e,t)}))},children:(0,v.jsx)(Z,{name:"image_outline",color:"var(--partial-success)"})}):(0,v.jsx)("div",{className:"icon tr_bar_5"}),(0,v.jsx)("div",{className:"icon tr_bar_5",onClick:function(){var e=(0,l.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,l.Rz)("lastTimeCallModal",Date.now()+320);var t={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};t.content=(0,v.jsx)(m,{confirm:k,item:n}),(0,s.OpenModal)(t)}},children:(0,v.jsx)(Z,{name:"outline_delete",color:"#c62828"})})]})})}},5196:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=9588.47f15a6c.chunk.js.map