"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[375],{4304:function(e,n,a){a.d(n,{lp:function(){return r},NK:function(){return l}});a(2791);var t=a(1087),i=a(184),l=function(e){var n=e.clickHandler,a=e.label,l=e.navTo;return(0,i.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:n,children:(0,i.jsx)(t.OL,{className:" jaqJnq",to:l,children:a})})},r=function(e){var n=e.children;return(0,i.jsx)("div",{className:"jRutKh",children:(0,i.jsx)("div",{className:"jSvsvz",children:(0,i.jsx)("div",{className:"jzcvbH",children:(0,i.jsx)("div",{className:" kfqEsq",children:n})})})})}},3075:function(e,n,a){a.r(n),a.d(n,{default:function(){return L}});var t=a(4165),i=a(5861),l=a(9439),r=a(2791),s=a(2350),o=(a(5196),a(5288)),d=a(9760),c=a(1475),u=a(2647),m=(a(5027),a(184)),v=function(e){var n=e.data,a=e.confirm,t=(e.handleClick,e.close,n.modalID),i=function(e){(0,d.CloseModal)({id:t})};return(0,m.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:"_dsplFlx ",children:(0,m.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn",onClick:i,children:"Cancelar"}),(0,m.jsx)("p",{className:"group_title addBtn red",onClick:function(){a(),i()},children:"Eliminar"})]})]})},p=a(1413),h=a(4304),x=a(24),_=a(7689),f=((0,u.PU)(),(0,u.JC)()),b=((0,u.tW)(),(0,u.Np)()),j=(0,x.f_)(),g="cmp_feedfromMobile",N=function(e){var n,a,o,u,v,h=e.data,x=e.item,f=(e.handleRefreshAll,(0,r.useState)(!1)),N=(0,l.Z)(f,2),w=N[0],k=N[1],I=(0,r.useState)(0),Z=(0,l.Z)(I,2),F=(Z[0],Z[1]);(0,_.s0)();(0,r.useEffect)((function(){if(!w){var e,n;k(!0);var a="debit",t="credit",i=(0,p.Z)({},x);"expense"===(null===i||void 0===i?void 0:i.movementType)&&(a="credit",t="debit");var l=(null===i||void 0===i?void 0:i.title)+"; "+(null===i||void 0===i?void 0:i.description);M("description",l),M("date",1*(null===i||void 0===i?void 0:i.date)),i.document||M("document",(0,s.UG)(1*(null===i||void 0===i?void 0:i.date))+"_"+(0,s.LO)());var r=null===(e=(0,s.bh)("categories_ids"))||void 0===e?void 0:e[null===i||void 0===i?void 0:i.categoryId],o={};o.amount=null===i||void 0===i?void 0:i.amount,o.movementId=null===i||void 0===i?void 0:i.movementId,o.description=l,o.date=null===i||void 0===i?void 0:i.date;var d=(0,p.Z)({},o);o.account=null===(n=(0,s.bh)("global_account_params"))||void 0===n?void 0:n.cash_bank.account,o.type=a,d.account=null===r||void 0===r?void 0:r.account,null!==r&&void 0!==r&&r.subAccount&&(d.subAccount=null===r||void 0===r?void 0:r.subAccount),d.type=t,(0,s.Rz)("cmpListfromMbl",[d,o]),F((0,s.M5)())}}),[null===(n=(0,s.bh)(g))||void 0===n?void 0:n.movementId]);var M=function(e,n,a){var t=(0,s.bh)(g)||{};a?(t[a]||(t[a]={}),t[a][e]=n):t[e]=n,(0,s.Rz)(g,t),F((0,s.M5)())},L=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var n,a,l,r,o,c,u,m;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=(0,p.Z)({},(0,s.bh)(g))).date?r.date=new Date(r.date).getTime():r.date=(new Date).getTime()+800,e.next=4,(0,s.fN)(r.date);case 4:return o=e.sent,r.comprobanteId=o,r.document||(r.document=(0,s.LO)()+"_"+(0,s.UG)(r.date)),c=[],(0,s.bh)("cmpListfromMbl")&&(null===(n=(0,s._2)((0,s.bh)("cmpListfromMbl")))||void 0===n||n.map(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,a){var i,l,o,d,u;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,s.bh)("cmpListfromMbl")[n],!isNaN(1*i.amount)&&1*i.amount>0&&((d=(0,p.Z)({},r)).account=i.account,i.subAccount&&(d.subAccount=i.subAccount),d.movementRef=x.movementId,d.type=i.type,d.amount=1*i.amount,d.operationId=(0,s.M5)(),(u=(0,p.Z)({},null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.add_opera)).params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,s.bh)("date_current_year")},u.form=d,c.push(u));case 2:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}())),(u=(0,p.Z)({},null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.upd__incms_expns)).params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId,movementId:x.movementId,year:(0,s.bh)("date_current_year")},u.data2update={comprobanteId:o},c.push(u),m=c.map(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,s.I7)(n),e.next=3,a;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=16,Promise.all(m);case 16:setTimeout((function(){(0,s.Rz)("cmpListfromMbl",null),(0,s.Rz)(g,null),(null===h||void 0===h?void 0:h.modalID)&&(0,d.CloseModal)({id:null===h||void 0===h?void 0:h.modalID})}),400);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){window.open(e)};return(0,m.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Associar Asiento"}),(0,m.jsx)("div",{className:"flexSpace"}),null!==x&&void 0!==x&&x.imagePath?(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,c.Qq)(x,S)},children:"See Image"}):null]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)(j,{init:null===(a=(0,s.bh)(g))||void 0===a?void 0:a.date,updDate:function(e){return M("date",e)}}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(b,{init:null===(o=(0,s.bh)(g))||void 0===o?void 0:o.document,label:"Documento",width:120,updChanges:function(e){return M("document",e)}})]}),(0,m.jsx)("div",{className:"_dsplFlx ",children:(0,m.jsx)(b,{init:null===(u=(0,s.bh)(g))||void 0===u?void 0:u.description,label:"Descripcion",width:520,updChanges:function(e){return M("description",e)}})}),(0,m.jsx)("div",{style:{marginTop:19},children:(0,m.jsx)(C,{item:(0,s.bh)("cmpListfromMbl"),updFrm:M,document:null===(v=(0,s.bh)(g))||void 0===v?void 0:v.document})}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{margin:"32px 32px 0 0"},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(y,{clickHandler:L,label:"Salvar"})]})]})},y=function(e){var n=e.clickHandler,a=e.label;return(0,m.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:n,children:(0,m.jsx)("div",{className:" jaqJnq",children:a})})},C=function(e){var n=e.item,a=e.updFrm,t=e.document,i=(0,r.useState)(0),o=(0,l.Z)(i,2),d=(o[0],o[1]),c=function(e,t,i){var l,r=n||(null===(l=(0,s.bh)("global_account_params"))||void 0===l?void 0:l.w2_params);i?(r[i]||(r[i]={}),r[i][e]=t):r[e]=t,a("w2",r),d((0,s.M5)())};return(0,m.jsxs)(h.lp,{children:[(0,m.jsx)("div",{className:"iMTYiw hiKoiM",children:"Comprobante Contables"}),(0,m.jsx)("div",{className:"_dsplFlx w_100prc",style:{marginTop:19}}),(0,m.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,m.jsx)("div",{className:"igLyC tr_bar_20 pddBtm-12",children:(0,m.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Cuenta"})}),(0,m.jsx)("div",{className:"igLyC tr_bar_20 pddBtm-12",children:(0,m.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Sub Cuenta"})}),(0,m.jsx)("div",{className:"igLyC tr_bar_30 pddBtm-12",children:(0,m.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Documento"})}),(0,m.jsx)("div",{className:"igLyC tr_bar_15 pddBtm-12 tr_bar_15",children:(0,m.jsx)("div",{className:"txt_al_r whi_headr",children:"debito"})}),(0,m.jsx)("div",{className:"igLyC tr_bar_15 pddBtm-12 tr_bar_15",children:(0,m.jsx)("div",{className:"txt_al_r whi_headr",children:"Credito"})})]}),n&&n.map((function(e,n){return(0,m.jsx)(w,{item:e,document:t,label:"Federal Tax",percentDefault:14.5,onChange:c,keyFld:"federalTax"},e.movementId+"_"+n)}))]})},w=function(e){e.label;var n,a,t=e.item,i=e.document,l=(e.keyFld,e.percentDefault,function(e){}),r=null===(n=(0,s.bh)("account_ids"))||void 0===n?void 0:n[null===t||void 0===t?void 0:t.account],o=null===(a=(0,s.bh)("sub_account_ids"))||void 0===a?void 0:a[null===t||void 0===t?void 0:t.subAccount];return(0,m.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,m.jsx)("div",{className:"igLyC light_300_color tr_bar_20 pddBtm-12",children:(0,m.jsx)("div",{className:"txfnt_lfal",children:(0,m.jsx)(f,{data:r,color:"var(--light-300)",labelField:"code",infoField:"name"})})}),(0,m.jsx)("div",{className:"igLyC light_300_color tr_bar_20 pddBtm-12",children:(0,m.jsx)("div",{className:"txfnt_lfal",children:(0,m.jsx)(f,{data:o,color:"var(--light-300)",labelField:"subAccount",infoField:"subAccountName"})})}),(0,m.jsx)("div",{className:"igLyC light_300_color tr_bar_30 pddBtm-12",children:(0,m.jsx)("div",{className:"txfnt_lfal",children:i})}),"debit"===t.type?(0,m.jsx)(k,{keyFld:"amount",item:t,onChange:l}):(0,m.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,m.jsx)("div",{className:" txt_al_r",children:"0.00"})}),"credit"===t.type?(0,m.jsx)(k,{keyFld:"amount",item:t,onChange:l}):(0,m.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,m.jsx)("div",{className:" txt_al_r",children:"0.00"})})]})},k=function(e){e.label;var n=e.item,a=e.onChange,t=e.keyFld,i=(e.percentDefault,(0,r.useState)(0)),o=(0,l.Z)(i,2),d=o[0],c=o[1],u=(0,r.useState)(0),v=(0,l.Z)(u,2),p=v[0],h=v[1];p||null===n||void 0===n||n[t];return d?(0,m.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,m.jsx)("input",{className:"inpyt_tx",type:"number","aria-haspopup":"false","auto-capitalize":"off","auto-complete":"off","auto-correct":"off","spell-check":"false",onChange:function(e){h(e.target.value)},onKeyDown:function(e){13===e.keyCode&&((0,s.UE)(p)&&a&&a(t,p),c(!1))}})}):(0,m.jsx)("div",{className:"igLyC light_300_color tr_bar_15",onClick:function(){return c(!d)},children:(0,m.jsx)("div",{className:" txt_al_r",children:(1*n[t]).toFixed(2)})})},I=a(799);var Z=(0,u.PU)(),F=(0,o.Hb)(),M=((0,u.tW)(),(0,I.ZP)((function(){return Promise.all([a.e(3977),a.e(2205)]).then(a.bind(a,2205))}))),L=function(e){var n=e.data,a=(e.elmId,e.handleRefreshAll),o=(0,r.useState)(!1),u=(0,l.Z)(o,2),p=u[0],h=u[1],x=(0,r.useState)(0),f=(0,l.Z)(x,2),b=(f[0],f[1]),j=((0,_.s0)(),(0,r.useState)(0)),g=(0,l.Z)(j,2);g[0],g[1];(0,r.useEffect)((function(){p||(h(!0),b((0,s.M5)()))}));var y=function(){b((0,s.M5)())},C=function(){(0,c.MX)(y)},w=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.I0)()&&((0,s.Rz)("upd_fromMobile",n),(0,s.Rz)("upd_fromMobile_bck",JSON.parse(JSON.stringify(n))),(a={}).zIndex=450,a.height="80vh",a.props={minHeight:"1vh",overlay:!0},a.content=(0,m.jsx)(F,{confirm:C}),(0,d.OpenModal)(a));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){(0,c.M_)(null===n||void 0===n?void 0:n.movementId,a)},I=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var a,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.I0)()&&(n.comprobanteId?(a=window.location.origin+"/#/accounting-ledger?cId=".concat(n.comprobanteId),window.open(a)):((i={}).zIndex=450,i.height="80vh",i.props={minHeight:"1vh",overlay:!0},i.content=(0,m.jsx)(N,{confirm:C,item:n}),(0,d.OpenModal)(i)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){(0,s.Rz)("loading_image_text",!0),(0,s.Rz)("image_text",null);var n={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,m.jsx)(M,{confirm:C,image:e,item:{image:e}}),(0,d.OpenModal)(n)};return(0,m.jsx)("div",{className:"item_acc",children:(0,m.jsxs)("div",{className:"_dsplFlx operation_item_box",children:[(0,m.jsx)("div",{className:"icon_revision",onClick:I,children:(0,m.jsx)(Z,{name:n.comprobanteId?"success":"alert",color:n.comprobanteId?"var(--hrm_palette-success-fg)":"var(--hrm_palette-selected-nav-text)"})}),(0,m.jsxs)("div",{className:"_dsplFlx tr_bar_90",onClick:w,children:[(0,m.jsx)("div",{className:" tr_bar_15",children:(0,s.sJ)(1*(null===n||void 0===n?void 0:n.date))}),(0,m.jsx)("div",{className:" tr_bar_25 font_onm",style:{color:"expense"===n.movementType?"var(--hrm_palette-selected-nav-text)":"var( --hrm_palette-blue-purple)"},children:null===n||void 0===n?void 0:n.title}),(0,m.jsx)("div",{className:" tr_bar_45  font_onm",style:{marginLeft:9},children:null===n||void 0===n?void 0:n.description}),(0,m.jsx)("div",{className:" tr_bar_15 txt_al_r",style:{color:"expense"===n.movementType?"var(--hrm_palette-selected-nav-text)":"var( --hrm_palette-blue-purple)"},children:null===n||void 0===n?void 0:n.amount})]}),(0,m.jsx)("div",{className:"flexSpace"}),null!==n&&void 0!==n&&n.imagePath?(0,m.jsx)("div",{className:"icon tr_bar_5",onClick:function(){(0,c.Qq)(n,L)},children:(0,m.jsx)(Z,{name:"image_outline",color:"var(--partial-success)"})}):(0,m.jsx)("div",{className:"icon tr_bar_5"}),(0,m.jsx)("div",{className:"icon tr_bar_5",onClick:function(){var e=(0,s.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,s.Rz)("lastTimeCallModal",Date.now()+320);var a={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};a.content=(0,m.jsx)(v,{confirm:k,item:n}),(0,d.OpenModal)(a)}},children:(0,m.jsx)(Z,{name:"outline_delete",color:"#c62828"})})]})})}},5196:function(){},5027:function(){}}]);
//# sourceMappingURL=375.997a8c0a.chunk.js.map