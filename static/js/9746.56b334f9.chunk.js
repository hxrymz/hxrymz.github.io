"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9746],{9889:function(l,i,n){n.r(i);var e=n(4165),s=n(5861),d=n(1413),a=n(9439),o=n(2791),t=n(9760),r=n(2647),c=n(2350),u=n(5143),v=n(184),h=(0,r.PU)(),p=(0,r.pz)(),x=(0,r.A5)(),m=(0,r.Np)(),f="upd_school",b="add_school";i.default=function(l){l.tabs,l.active,l.updTab;var i,n=(0,o.useState)(1),r=(0,a.Z)(n,2),h=(r[0],r[1]);(0,o.useEffect)((function(){var l,i=(0,d.Z)({},(0,c.bh)((0,c.Ks)())),n=(null===i||void 0===i?void 0:i.schoolHistory)||{};Array.isArray(null===(l=(0,c.bh)((0,c.Ks)()))||void 0===l?void 0:l.schoolHistory)&&(n=(0,u.p6)(n)),i.schoolHistory=n,(0,c.Rz)((0,c.Ks)(),i)}));var p=function(){var l=(0,s.Z)((0,e.Z)().mark((function l(i){var n,s;return(0,e.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:n=(0,d.Z)({},(0,c.bh)((0,c.Ks)())),delete(s=(null===n||void 0===n?void 0:n.schoolHistory)||{})[i],y(s);case 4:case"end":return l.stop()}}),l)})));return function(i){return l.apply(this,arguments)}}(),x=function(l){var i=(0,d.Z)({},(0,c.bh)((0,c.Ks)())),n=(null===i||void 0===i?void 0:i.schoolHistory)||{};n[(0,c.M5)()]=l,y(n)},m=function(l,i){var n=(0,d.Z)({},(0,c.bh)((0,c.Ks)())),e=(null===n||void 0===n?void 0:n.schoolHistory)||{};e[i]=l,y(e)},y=function(){var l=(0,s.Z)((0,e.Z)().mark((function l(i){var n,s,a,o,t;return(0,e.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return s=(0,d.Z)({},(0,c.bh)((0,c.Ks)())),(a=(0,d.Z)({},null===(n=(0,c.bh)((0,c.hQ)()))||void 0===n?void 0:n.upd_notary)).params={clientNotaryId:s.clientNotaryId},a.data2update={schoolHistory:i},o=(0,c.I7)(a),l.next=7,o;case 7:(t=l.sent)&&!t.error&&(s.schoolHistory=i,(0,c.Rz)((0,c.Ks)(),s),(0,c.Rz)(b,null),(0,c.Rz)(f,null),h((0,c.M5)()));case 9:case"end":return l.stop()}}),l)})));return function(i){return l.apply(this,arguments)}}(),_=null===(i=(0,c.bh)((0,c.Ks)()))||void 0===i?void 0:i.schoolHistory;return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{style:{paddingTop:30}}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"iMTYiw",style:{marginTop:"8px"},children:"Escuelas"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"iSTOvb kvXcCL",style:{padding:"0 9px",width:"160px"},onClick:function(){var l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,v.jsx)(N,{confirm:x}),(0,t.OpenModal)(l)},children:"Agregar"})]}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{padding:9},children:_&&(0,c._2)(_).map((function(l,i){return(0,v.jsx)(j,{index:i,idKey:l,itm:_[l],updObs:h,update:m,rmv:p},l+"_school")}))})]})};var j=function(l){var i,n,e,s,d,a=l.itm,o=l.updObs,r=l.idKey,u=l.update,x=l.rmv,m=(l.index,function(l){(0,c.vQ)(l)}),b=function(l){u(l,r)},j=function(l){x(r)},N=(0,c.bh)("addressItemActive")===r;return(0,v.jsxs)("div",{className:"client_item_box gWXAaj jlytmu ".concat(N?"active":""),onClick:function(l){(0,c.bh)("addressItemActive")!==r&&(l.stopPropagation(),l.preventDefault(),(0,c.Rz)("addressItemActive",r),o((0,c.M5)()))},children:[N?(0,v.jsxs)("div",{className:"menu_icon_acc _dsplFlx",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"icon_action",onClick:function(){(0,c.Rz)(f,a),(0,c.Rz)(f+"_bck",JSON.parse(JSON.stringify(a)));var l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,v.jsx)(y,{confirm:b}),(0,t.OpenModal)(l)},children:(0,v.jsx)(h,{name:"outline_edit"})}),(0,v.jsx)("div",{className:"icon_action",onClick:function(){var l=(0,c.bh)("lastTimeCallModal")||0;if(Date.now()>l){(0,c.Rz)("lastTimeCallModal",Date.now()+320);var i={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};i.content=(0,v.jsx)(p,{confirm:j,lbl_p:"Eliminar Direccion",lbl_span:"Una vez eliminado no podra ser recuperado"}),(0,t.OpenModal)(i)}},children:(0,v.jsx)(h,{name:"outline_delete"})})]}):null,(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"Name:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.schoolName)},children:null===a||void 0===a?void 0:a.schoolName})]}),(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"Type:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.schoolType)},children:null===a||void 0===a?void 0:a.schoolType})]})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"City:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.city)},children:null===a||void 0===a?void 0:a.city})]}),(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"State:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.state)},children:null===a||void 0===a?void 0:a.state})]}),(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"ZipCode:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){return m(null===a||void 0===a?void 0:a.zipcode)},children:null===a||void 0===a?void 0:a.zipcode})]})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"from Date:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){var l;return m(null===a||void 0===a||null===(l=a.fromDate)||void 0===l?void 0:l.month)},children:null===a||void 0===a||null===(i=a.fromDate)||void 0===i?void 0:i.month}),(0,v.jsx)("div",{className:"lbl_dtls",children:"/"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){var l;return m(null===a||void 0===a||null===(l=a.fromDate)||void 0===l?void 0:l.year)},children:null===a||void 0===a||null===(n=a.fromDate)||void 0===n?void 0:n.year})]}),(0,v.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,v.jsx)("div",{className:"lbl_h_dtls",children:"to Date:"}),(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){var l;return m(null===a||void 0===a||null===(l=a.toDate)||void 0===l?void 0:l.month)},children:null===a||void 0===a||null===(e=a.toDate)||void 0===e?void 0:e.month}),null!==a&&void 0!==a&&null!==(s=a.toDate)&&void 0!==s&&s.month?(0,v.jsx)("div",{className:"lbl_dtls",children:"/"}):null,(0,v.jsx)("div",{className:"lbl_dtls",onClick:function(){var l;return m(null===a||void 0===a||null===(l=a.toDate)||void 0===l?void 0:l.year)},children:null===a||void 0===a||null===(d=a.toDate)||void 0===d?void 0:d.year})]})]})]})},y=function(l){var i,n,d,r,u,h,p,b,j,y,N,g,C,D,w,k=l.data,F=(l.itm,l.active,l.confirm),S=(0,o.useState)(1),z=(0,a.Z)(S,2),A=(z[0],z[1]),H=function(l,i,n){var e=(0,c.bh)(f)||{};n?(e[n]||(e[n]={}),e[n][l]=i):e[l]=i,(0,c.Rz)(f,e),A((0,c.M5)())},Z=function(){var l=(0,s.Z)((0,e.Z)().mark((function l(){var i;return(0,e.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:i=(0,c.bh)(f),F&&F(i),M();case 3:case"end":return l.stop()}}),l)})));return function(){return l.apply(this,arguments)}}(),M=function(){(null===k||void 0===k?void 0:k.modalID)&&(0,t.CloseModal)({id:null===k||void 0===k?void 0:k.modalID})},T=(0,c.vy)(["schoolName","schoolType","addressLineOne","city","state","country","zipcode","fromDate","toDate"],(0,c.bh)(f),(0,c.bh)(f+"_bck"));return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Actualizar Escuelas"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,v.jsx)(m,{init:null===(i=(0,c.bh)(f))||void 0===i?void 0:i.country,label:"Pais",width:260,updChanges:function(l){return H("country",l)}}),(0,v.jsx)("div",{style:{marginTop:39},children:(0,v.jsx)(x,{init:null===(n=(0,c.bh)(f))||void 0===n?void 0:n.schoolType,lbl_empty:"schoolType",list:[{label:"Universidad",id:"University"},{label:"Pre",id:"High School"},{label:"Secundaria",id:"Middle School"},{label:"Primaria",id:"Elementary School"}],onSelect:function(l){return H("schoolType",l.id)},background:"var(--dark-900)",color:"var(--primary)"})})]}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(d=(0,c.bh)(f))||void 0===d?void 0:d.schoolName,label:"School",width:500,updChanges:function(l){return H("schoolName",l)}})}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(r=(0,c.bh)(f))||void 0===r?void 0:r.addressLineOne,label:"Calle ",width:520,updChanges:function(l){return H("addressLineOne",l)}})}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,v.jsx)(m,{init:null===(u=(0,c.bh)(f))||void 0===u?void 0:u.city,label:"Ciudad o Municipio",width:200,updChanges:function(l){return H("city",l)}}),(0,v.jsx)(m,{init:null===(h=(0,c.bh)(f))||void 0===h?void 0:h.state,label:"Estado o Provincia",width:160,updChanges:function(l){return H("state",l)}}),(0,v.jsx)(m,{init:null===(p=(0,c.bh)(f))||void 0===p?void 0:p.zipcode,label:"Codigo Postal",width:90,updChanges:function(l){return H("zipcode",l)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:14},children:[(0,v.jsx)(m,{init:null===(b=(0,c.bh)(f))||void 0===b||null===(j=b.fromDate)||void 0===j?void 0:j.month,label:"Desde (Month)",width:90,updChanges:function(l){return H("month",l,"fromDate")}}),(0,v.jsx)(m,{init:null===(y=(0,c.bh)(f))||void 0===y||null===(N=y.fromDate)||void 0===N?void 0:N.year,label:"Desde (Year)",width:120,updChanges:function(l){return H("year",l,"fromDate")}}),(0,v.jsx)(m,{init:null===(g=(0,c.bh)(f))||void 0===g||null===(C=g.toDate)||void 0===C?void 0:C.month,label:"Hasta (Month)",width:90,updChanges:function(l){return H("month",l,"toDate")}}),(0,v.jsx)(m,{init:null===(D=(0,c.bh)(f))||void 0===D||null===(w=D.toDate)||void 0===w?void 0:w.year,label:"Hasta (Year)",width:120,updChanges:function(l){return H("year",l,"toDate")}})]}),null!==T&&void 0!==T&&T.hasChange?(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"card",children:(0,v.jsx)(_,{label:"Actualizar",clickHandler:Z})})]}):(0,v.jsx)("div",{className:"card"})]})},N=function(l){var i,n,d,r,u,h,p,f,j,y,N,g,C,D,w,k=l.data,F=l.confirm,S=(0,o.useState)(1),z=(0,a.Z)(S,2),A=(z[0],z[1]),H=function(l,i,n){var e=(0,c.bh)(b)||{};n?(e[n]||(e[n]={}),e[n][l]=i):e[l]=i,(0,c.Rz)(b,e),A((0,c.M5)())},Z=function(){var l=(0,s.Z)((0,e.Z)().mark((function l(){var i;return(0,e.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:i=(0,c.bh)(b),F&&F(i),M();case 3:case"end":return l.stop()}}),l)})));return function(){return l.apply(this,arguments)}}(),M=function(){(null===k||void 0===k?void 0:k.modalID)&&(0,t.CloseModal)({id:null===k||void 0===k?void 0:k.modalID})};return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Agregar Escuelas"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,v.jsx)(m,{init:null===(i=(0,c.bh)(b))||void 0===i?void 0:i.country,label:"Pais",width:260,updChanges:function(l){return H("country",l)}}),(0,v.jsx)("div",{style:{marginTop:39},children:(0,v.jsx)(x,{init:null===(n=(0,c.bh)(b))||void 0===n?void 0:n.schoolType,lbl_empty:"schoolType",list:[{label:"Universidad",id:"University"},{label:"Pre",id:"High School"},{label:"Secundaria",id:"Middle School"},{label:"Primaria",id:"Elementary School"}],onSelect:function(l){return H("schoolType",l.id)},background:"var(--dark-900)",color:"var(--primary)"})})]}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(d=(0,c.bh)(b))||void 0===d?void 0:d.schoolName,label:"School",width:500,updChanges:function(l){return H("schoolName",l)}})}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,v.jsx)(m,{init:null===(r=(0,c.bh)(b))||void 0===r?void 0:r.addressLineOne,label:"Calle ",width:520,updChanges:function(l){return H("addressLineOne",l)}})}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,v.jsx)(m,{init:null===(u=(0,c.bh)(b))||void 0===u?void 0:u.city,label:"Ciudad o Municipio",width:200,updChanges:function(l){return H("city",l)}}),(0,v.jsx)(m,{init:null===(h=(0,c.bh)(b))||void 0===h?void 0:h.state,label:"Estado o Provincia",width:160,updChanges:function(l){return H("state",l)}}),(0,v.jsx)(m,{init:null===(p=(0,c.bh)(b))||void 0===p?void 0:p.zipcode,label:"Codigo Postal",width:90,updChanges:function(l){return H("zipcode",l)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:14},children:[(0,v.jsx)(m,{init:null===(f=(0,c.bh)(b))||void 0===f||null===(j=f.fromDate)||void 0===j?void 0:j.month,label:"Desde (Month)",width:90,updChanges:function(l){return H("month",l,"fromDate")}}),(0,v.jsx)(m,{init:null===(y=(0,c.bh)(b))||void 0===y||null===(N=y.fromDate)||void 0===N?void 0:N.year,label:"Desde (Year)",width:120,updChanges:function(l){return H("year",l,"fromDate")}}),(0,v.jsx)(m,{init:null===(g=(0,c.bh)(b))||void 0===g||null===(C=g.toDate)||void 0===C?void 0:C.month,label:"Hasta (Month)",width:90,updChanges:function(l){return H("month",l,"toDate")}}),(0,v.jsx)(m,{init:null===(D=(0,c.bh)(b))||void 0===D||null===(w=D.toDate)||void 0===w?void 0:w.year,label:"Hasta (Year)",width:120,updChanges:function(l){return H("year",l,"toDate")}})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"card",children:(0,v.jsx)(_,{label:"Agregar",clickHandler:Z})})]})]})},_=function(l){var i=l.clickHandler,n=l.label;return(0,v.jsx)("div",{className:" jaqJnq_hrm1",children:(0,v.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:i,children:(0,v.jsx)("span",{className:" jaqJnq_hrm1",children:n})})})}}}]);
//# sourceMappingURL=9746.56b334f9.chunk.js.map