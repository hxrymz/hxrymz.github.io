"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2618],{3417:function(l,i,e){e.r(i);var n=e(4165),d=e(5861),s=e(1413),a=e(9439),o=e(2791),t=e(9760),r=e(2647),c=e(2350),u=e(5143),v=e(184),h=(0,r.PU)(),p=(0,r.pz)(),m=(0,r.Np)(),x="upd_employer",f="add_employer";i.default=function(l){l.tabs,l.active,l.updTab;var i,e=(0,o.useState)(1),r=(0,a.Z)(e,2),h=(r[0],r[1]);(0,o.useEffect)((function(){var l,i=(0,s.Z)({},(0,c.bh)((0,c.Ks)())),e=(null===i||void 0===i?void 0:i.employers)||{};Array.isArray(null===(l=(0,c.bh)((0,c.Ks)()))||void 0===l?void 0:l.employers)&&(e=(0,u.p6)(e)),i.employers=e,(0,c.Rz)((0,c.Ks)(),i)}));var p=function(){var l=(0,d.Z)((0,n.Z)().mark((function l(i){var e,d;return(0,n.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:e=(0,s.Z)({},(0,c.bh)((0,c.Ks)())),delete(d=(null===e||void 0===e?void 0:e.employers)||{})[i],_(d);case 4:case"end":return l.stop()}}),l)})));return function(i){return l.apply(this,arguments)}}(),m=function(l){var i,e=(0,s.Z)({},(0,c.bh)((0,c.Ks)())),n=(null===e||void 0===e?void 0:e.employers)||{};Array.isArray(null===(i=(0,c.bh)((0,c.Ks)()))||void 0===i?void 0:i.employers)&&(n=(0,u.p6)(n)),n[(0,c.M5)()]=l,_(n)},b=function(l,i){var e=(0,s.Z)({},(0,c.bh)((0,c.Ks)())),n=(null===e||void 0===e?void 0:e.employers)||{};n[i]=l,_(n)},_=function(){var l=(0,d.Z)((0,n.Z)().mark((function l(i){var e,d,a,o,t;return(0,n.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return d=(0,s.Z)({},(0,c.bh)((0,c.Ks)())),(a=(0,s.Z)({},null===(e=(0,c.bh)((0,c.hQ)()))||void 0===e?void 0:e.upd_notary)).params={clientNotaryId:d.clientNotaryId},a.data2update={employers:i},o=(0,c.I7)(a),l.next=7,o;case 7:(t=l.sent)&&!t.error&&(d.employers=i,(0,c.Rz)((0,c.Ks)(),d),(0,c.Rz)(f,null),(0,c.Rz)(x,null),h((0,c.M5)()));case 9:case"end":return l.stop()}}),l)})));return function(i){return l.apply(this,arguments)}}(),y=null===(i=(0,c.bh)((0,c.Ks)()))||void 0===i?void 0:i.employers;return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{style:{paddingTop:30}}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"iMTYiw",style:{marginTop:"8px"},children:"Empleos"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"iSTOvb kvXcCL",style:{padding:"0 9px",width:"160px"},onClick:function(){var l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,v.jsx)(N,{confirm:m}),(0,t.OpenModal)(l)},children:"Agregar"})]}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{padding:9},children:y&&(0,c._2)(y).map((function(l,i){return(0,v.jsx)(j,{index:i,idKey:l,itm:y[l],updObs:h,update:b,rmv:p},l+"_employer")}))})]})};var j=function(l){var i,e,n,d,s,a=l.itm,o=l.updObs,r=l.idKey,u=l.update,m=(l.rmv,l.index,function(l){(0,c.vQ)(l)}),f=function(l){var i=r;i.lenght<6&&(i=(0,c.M5)()),u(l,i)},j=function(l){},N=(0,c.bh)("addressItemActive")===r;return(0,v.jsxs)("div",{className:"client_item_box gWXAaj jlytmu ".concat(N?"active":""),onClick:function(l){(0,c.bh)("addressItemActive")!==r&&(l.stopPropagation(),l.preventDefault(),(0,c.Rz)("addressItemActive",r),o((0,c.M5)()))},children:[N?(0,v.jsxs)("div",{className:"menu_icon_acc _dsplFlx",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"icon_action",onClick:function(){(0,c.Rz)(x,a),(0,c.Rz)(x+"_bck",JSON.parse(JSON.stringify(a)));var l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,v.jsx)(b,{confirm:f}),(0,t.OpenModal)(l)},children:(0,v.jsx)(h,{name:"outline_edit"})}),(0,v.jsx)("div",{className:"icon_action",onClick:function(){var l=(0,c.bh)("lastTimeCallModal")||0;if(Date.now()>l){(0,c.Rz)("lastTimeCallModal",Date.now()+320);var i={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};i.content=(0,v.jsx)(p,{confirm:j,lbl_p:"Eliminar Direccion",lbl_span:"Una vez eliminado no podra ser recuperado"}),(0,t.OpenModal)(i)}},children:(0,v.jsx)(h,{name:"outline_delete"})})]}):null,(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"Name:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.employerName)},children:null===a||void 0===a?void 0:a.employerName})]}),(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"Occupation:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.occupation)},children:null===a||void 0===a?void 0:a.occupation})]})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"City:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.city)},children:null===a||void 0===a?void 0:a.city})]}),(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"State:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.state)},children:null===a||void 0===a?void 0:a.state})]}),(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"ZipCode:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.zipcode)},children:null===a||void 0===a?void 0:a.zipcode})]})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"from Date:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){var l;return m(null===a||void 0===a||null===(l=a.fromDate)||void 0===l?void 0:l.month)},children:null===a||void 0===a||null===(i=a.fromDate)||void 0===i?void 0:i.month}),(0,v.jsx)("div",{className:"lbl_dtls",children:"/"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){var l;return m(null===a||void 0===a||null===(l=a.fromDate)||void 0===l?void 0:l.year)},children:null===a||void 0===a||null===(e=a.fromDate)||void 0===e?void 0:e.year})]}),(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"to Date:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){var l;return m(null===a||void 0===a||null===(l=a.toDate)||void 0===l?void 0:l.month)},children:null===a||void 0===a||null===(n=a.toDate)||void 0===n?void 0:n.month}),null!==a&&void 0!==a&&null!==(d=a.toDate)&&void 0!==d&&d.month?(0,v.jsx)("div",{className:"lbl_dtls",children:"/"}):null,(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){var l;return m(null===a||void 0===a||null===(l=a.toDate)||void 0===l?void 0:l.year)},children:null===a||void 0===a||null===(s=a.toDate)||void 0===s?void 0:s.year})]})]})]})},b=function(l){var i,e,s,r,u,h,p,f,j,b,N,y,g,C,D,w=l.data,k=(l.itm,l.active,l.confirm),F=(0,o.useState)(1),A=(0,a.Z)(F,2),z=(A[0],A[1]),Z=function(l,i,e){var n=(0,c.bh)(x)||{};e?(n[e]||(n[e]={}),n[e][l]=i):n[l]=i,(0,c.Rz)(x,n),z((0,c.M5)())},M=function(){var l=(0,d.Z)((0,n.Z)().mark((function l(){var i;return(0,n.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:i=(0,c.bh)(x),k&&k(i),O();case 3:case"end":return l.stop()}}),l)})));return function(){return l.apply(this,arguments)}}(),O=function(){(null===w||void 0===w?void 0:w.modalID)&&(0,t.CloseModal)({id:null===w||void 0===w?void 0:w.modalID})},I=(0,c.vy)(["employerName","occupation","addressLineOne","city","state","country","zipcode","fromDate","toDate"],(0,c.bh)(x),(0,c.bh)(x+"_bck"));return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Actualizar Empleador"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(i=(0,c.bh)(x))||void 0===i?void 0:i.country,label:"Pais",width:260,updChanges:function(l){return Z("country",l)}})}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(e=(0,c.bh)(x))||void 0===e?void 0:e.employerName,label:"Empleador",width:500,updChanges:function(l){return Z("employerName",l)}})}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(s=(0,c.bh)(x))||void 0===s?void 0:s.occupation,label:"Ocupacion",width:520,updChanges:function(l){return Z("occupation",l)}})}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(r=(0,c.bh)(x))||void 0===r?void 0:r.addressLineOne,label:"Calle ",width:520,updChanges:function(l){return Z("addressLineOne",l)}})}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,v.jsx)(m,{init:null===(u=(0,c.bh)(x))||void 0===u?void 0:u.city,label:"Ciudad o Municipio",width:200,updChanges:function(l){return Z("city",l)}}),(0,v.jsx)(m,{init:null===(h=(0,c.bh)(x))||void 0===h?void 0:h.state,label:"Estado o Provincia",width:160,updChanges:function(l){return Z("state",l)}}),(0,v.jsx)(m,{init:null===(p=(0,c.bh)(x))||void 0===p?void 0:p.zipcode,label:"Codigo Postal",width:90,updChanges:function(l){return Z("zipcode",l)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:14},children:[(0,v.jsx)(m,{init:null===(f=(0,c.bh)(x))||void 0===f||null===(j=f.fromDate)||void 0===j?void 0:j.month,label:"Desde (Month)",width:90,updChanges:function(l){return Z("month",l,"fromDate")}}),(0,v.jsx)(m,{init:null===(b=(0,c.bh)(x))||void 0===b||null===(N=b.fromDate)||void 0===N?void 0:N.year,label:"Desde (Year)",width:120,updChanges:function(l){return Z("year",l,"fromDate")}}),(0,v.jsx)(m,{init:null===(y=(0,c.bh)(x))||void 0===y||null===(g=y.toDate)||void 0===g?void 0:g.month,label:"Hasta (Month)",width:90,updChanges:function(l){return Z("month",l,"toDate")}}),(0,v.jsx)(m,{init:null===(C=(0,c.bh)(x))||void 0===C||null===(D=C.toDate)||void 0===D?void 0:D.year,label:"Hasta (Year)",width:120,updChanges:function(l){return Z("year",l,"toDate")}})]}),null!==I&&void 0!==I&&I.hasChange?(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"card",children:(0,v.jsx)(_,{label:"Actualizar",clickHandler:M})})]}):(0,v.jsx)("div",{className:"card"})]})},N=function(l){var i,e,s,r,u,h,p,x,j,b,N,y,g,C,D,w=l.data,k=l.confirm,F=(0,o.useState)(1),A=(0,a.Z)(F,2),z=(A[0],A[1]),Z=function(l,i,e){var n=(0,c.bh)(f)||{};e?(n[e]||(n[e]={}),n[e][l]=i):n[l]=i,(0,c.Rz)(f,n),z((0,c.M5)())},M=function(){var l=(0,d.Z)((0,n.Z)().mark((function l(){var i;return(0,n.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:i=(0,c.bh)(f),k&&k(i),O();case 3:case"end":return l.stop()}}),l)})));return function(){return l.apply(this,arguments)}}(),O=function(){(null===w||void 0===w?void 0:w.modalID)&&(0,t.CloseModal)({id:null===w||void 0===w?void 0:w.modalID})};return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Agregar Empleo"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(i=(0,c.bh)(f))||void 0===i?void 0:i.country,label:"Pais",width:260,updChanges:function(l){return Z("country",l)}})}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(e=(0,c.bh)(f))||void 0===e?void 0:e.employerName,label:"Empleador",width:500,updChanges:function(l){return Z("employerName",l)}})}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(s=(0,c.bh)(f))||void 0===s?void 0:s.occupation,label:"Ocupacion",width:520,updChanges:function(l){return Z("occupation",l)}})}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(r=(0,c.bh)(f))||void 0===r?void 0:r.addressLineOne,label:"Calle ",width:520,updChanges:function(l){return Z("addressLineOne",l)}})}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,v.jsx)(m,{init:null===(u=(0,c.bh)(f))||void 0===u?void 0:u.city,label:"Ciudad o Municipio",width:200,updChanges:function(l){return Z("city",l)}}),(0,v.jsx)(m,{init:null===(h=(0,c.bh)(f))||void 0===h?void 0:h.state,label:"Estado o Provincia",width:160,updChanges:function(l){return Z("state",l)}}),(0,v.jsx)(m,{init:null===(p=(0,c.bh)(f))||void 0===p?void 0:p.zipcode,label:"Codigo Postal",width:90,updChanges:function(l){return Z("zipcode",l)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:14},children:[(0,v.jsx)(m,{init:null===(x=(0,c.bh)(f))||void 0===x||null===(j=x.fromDate)||void 0===j?void 0:j.month,label:"Desde (Month)",width:90,updChanges:function(l){return Z("month",l,"fromDate")}}),(0,v.jsx)(m,{init:null===(b=(0,c.bh)(f))||void 0===b||null===(N=b.fromDate)||void 0===N?void 0:N.year,label:"Desde (Year)",width:120,updChanges:function(l){return Z("year",l,"fromDate")}}),(0,v.jsx)(m,{init:null===(y=(0,c.bh)(f))||void 0===y||null===(g=y.toDate)||void 0===g?void 0:g.month,label:"Hasta (Month)",width:90,updChanges:function(l){return Z("month",l,"toDate")}}),(0,v.jsx)(m,{init:null===(C=(0,c.bh)(f))||void 0===C||null===(D=C.toDate)||void 0===D?void 0:D.year,label:"Hasta (Year)",width:120,updChanges:function(l){return Z("year",l,"toDate")}})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"card",children:(0,v.jsx)(_,{label:"Agregar",clickHandler:M})})]})]})},_=function(l){var i=l.clickHandler,e=l.label;return(0,v.jsx)("div",{className:" jaqJnq_hrm1",children:(0,v.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:i,children:(0,v.jsx)("span",{className:" jaqJnq_hrm1",children:e})})})}}}]);
//# sourceMappingURL=2618.55b3981d.chunk.js.map