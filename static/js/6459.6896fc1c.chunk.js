"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6459,9760],{9760:function(e,l,i){i.r(l),i.d(l,{CloseModal:function(){return c},OpenModal:function(){return r},default:function(){return o}});var a=i(2791),t=i(5408),n=i(2350),s=i(184),d="listDialog_mdh392",o=function(){var e=(0,n.bh)("listDialog")||{},l=((0,t.Z)(d),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:l.map((function(l,i){var t=e[l];if(t&&t.visible){var n={};t.height&&(n.heigth=t.height),t.width,t.zIndex&&(n.zIndex=t.zIndex-1);var d={zIndex:t.zIndex},o=null,r=t.data;return t.content&&(o=a.cloneElement(t.content,{data:r})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:n,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:d,id:l,children:o})}),t.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(t.visible?"active":""),onClick:function(){var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},l)}}))})},r=function(e){var l=(0,n.bh)("listDialog")||{},i=(0,n.M5)();l[i]||(l[i]={}),l[i].visible=!0;var a={};e.props?(a=e.props).modalID=i:a.modalID=i;var t=document.getElementsByTagName("body")[0];null!==t&&void 0!==t&&t.style&&(t.style.overflowY="hidden"),l[i].isView=e.isView,l[i].observeResize=e.observeResize,l[i].observeResize&&(l[i].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(i,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[i].width&&a.height===l[i].height||(l[i].height=a.height+10,l[i].width=a.width,(0,n.Rz)("listDialog",l),(0,n.wt)(d)))}),200)),l[i].display=!0,e.zIndex&&(l[i].zIndex=e.zIndex),e.height&&(l[i].height=e.height),e.width&&(l[i].width=e.width),e.content&&(l[i].content=e.content),l[i].data=a,(0,n.Rz)("listDialog",l),(0,n.wt)(d),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,n.Rz)("modalOpen",i),(0,n.wt)(d)}),125)},c=function(e){var l,i,a,t=(0,n.bh)("listDialog")||{},s=e.id;t[s]&&(t[s].observeResize&&t[s].observeInterval&&clearInterval(t[s].observeInterval),t[s].display=!1,null===(l=t[s])||void 0===l||null===(i=l.data)||void 0===i||null===(a=i.closeEvent)||void 0===a||a.call(i),(0,n.Rz)("listDialog",t),delete t[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,n.wt)(d),setTimeout((function(){delete t[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,n.Rz)("modalOpen",null)}),750))}},6459:function(e,l,i){i.r(l);var a=i(4165),t=i(5861),n=i(9439),s=i(2791),d=i(2350),o=i(2647),r=i(9760),c=i(3796),u=(i(4268),i(24)),h=i(184),v=((0,o.YZ)(),(0,o.Np)()),m=(0,c.$Y)(),f=(0,o.tL)(),p=(0,u.f_)(),x="upd_client";l.default=function(e){var l,i,o,c,u,g,N,j,w,y,I,C,z,S,_,k,O,B,R,D,M,T,F,A,E,Z,L,H,P,Y,V=e.data,q=(e.elmId,e.confirm),J=(0,s.useState)(!1),W=(0,n.Z)(J,2),G=W[0],$=W[1],K=(0,s.useState)(0),Q=(0,n.Z)(K,2),U=(Q[0],Q[1]);(0,s.useEffect)((function(){G||($(!0),U((0,d.M5)()))}));var X=function(e,l,i){var a=(0,d.bh)(x)||{};i?(a[i]||(a[i]={}),a[i][e]=l):a[e]=l,(0,d.Rz)(x,a),U((0,d.M5)())},ee=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var l,i,t,n,s,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,d.bh)(x))&&l.dateOfBirth&&(i=new Date(l.dateOfBirth).getTime())&&(l.dob=i),t=b(le,(0,d.bh)(x),(0,d.bh)(x+"_bck")),n={query:"updateClientNotary",params:{clientNotaryId:l.clientNotaryId},data2update:t.data},s=(0,d.Bm)((0,d.uG)(),n),e.next=7,s;case 7:(o=e.sent)&&o.data&&((0,d.Rz)(x,{}),(0,d.Rz)(x+"_bck",{}),U((0,d.M5)()),ae(!0),q&&q());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=["phoneNumber","firstName","middleName","lastName","dateOfBirth","genre","placeOfBirth","currentAddress","father","mother","height","weight","ss","alienNumber","race","maritalStatus"],ie=b(le,(0,d.bh)(x),(0,d.bh)(x+"_bck")),ae=function(){(null===V||void 0===V?void 0:V.modalID)&&(0,r.CloseModal)({id:null===V||void 0===V?void 0:V.modalID})},te=function(e){var l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,h.jsx)(m,{handleClick:function(l){return function(e,l){X(l,e.clientNotaryId)}(l,e)}}),(0,r.OpenModal)(l)};return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title ",children:"Actualizar Formulario Cliente"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:10},children:[(0,h.jsxs)("div",{className:" ",children:[(0,h.jsx)("p",{className:"group_title",children:"Sexo"}),(0,h.jsx)(f,{data:[{label:"Mujer",id:"Female"},{label:"Hombre",id:"Male"}],active:null===(l=(0,d.bh)(x))||void 0===l?void 0:l.genre,updSelect:function(e){return X("genre",e)}})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:" ",children:[(0,h.jsx)("p",{className:"group_title",children:"Estado Civil"}),(0,h.jsx)(f,{data:[{label:"Soltero",id:"single"},{label:"Casado",id:"married"},{label:"Divorciado",id:"divorced"},{label:"Viudo",id:"widowed"}],active:null===(i=(0,d.bh)(x))||void 0===i?void 0:i.maritalStatus,updSelect:function(e){return X("maritalStatus",e)}})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(p,{init:null===(o=(0,d.bh)(x))||void 0===o?void 0:o.dateOfBirth,label:"Fecha de nacimiento",updDate:function(e){return X("dateOfBirth",e)}})}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{marginTop:10},children:[(0,h.jsx)(v,{init:null===(c=(0,d.bh)(x))||void 0===c?void 0:c.firstName,label:"Nombre",width:200,updChanges:function(e){return X("firstName",e)}}),(0,h.jsx)(v,{init:null===(u=(0,d.bh)(x))||void 0===u?void 0:u.middleName,label:"Segundo Nombre",width:200,updChanges:function(e){return X("middleName",e)}}),(0,h.jsx)(v,{init:null===(g=(0,d.bh)(x))||void 0===g?void 0:g.lastName,label:"Apellidos",width:360,updChanges:function(e){return X("lastName",e)}})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:10},children:[(0,h.jsx)(v,{init:null===(N=(0,d.bh)(x))||void 0===N?void 0:N.phoneNumber,label:"Telefono",width:120,updChanges:function(e){return X("phoneNumber",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(j=(0,d.bh)(x))||void 0===j?void 0:j.height,label:"Altura",width:120,updChanges:function(e){return X("height",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(w=(0,d.bh)(x))||void 0===w?void 0:w.weight,label:"Peso",width:120,updChanges:function(e){return X("weight",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(y=(0,d.bh)(x))||void 0===y?void 0:y.race,label:"Raza",width:220,updChanges:function(e){return X("race",e)}})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:10},children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(I=(0,d.bh)(x))||void 0===I?void 0:I.alienNumber,label:"Alien Number",width:120,updChanges:function(e){return X("alienNumber",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(C=(0,d.bh)(x))||void 0===C?void 0:C.ss,label:"Social",width:120,updChanges:function(e){return X("ss",e)}}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsx)("div",{className:"separator"}),(0,h.jsx)("p",{className:"group_title",children:"Lugar de Nacimiento"}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,h.jsx)(v,{init:null===(z=(0,d.bh)(x))||void 0===z||null===(S=z.placeOfBirth)||void 0===S?void 0:S.city,label:"Municipio",width:200,updChanges:function(e){return X("city",e,"placeOfBirth")}}),(0,h.jsx)(v,{init:null===(_=(0,d.bh)(x))||void 0===_||null===(k=_.placeOfBirth)||void 0===k?void 0:k.state,label:"Provincia",width:200,updChanges:function(e){return X("state",e,"placeOfBirth")}})]}),(0,h.jsx)("div",{className:"separator"}),(0,h.jsx)("p",{className:"group_title",children:"Padres"}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"label",onClick:function(){return te("father")},children:"Padre"}),null!==(O=(0,d.bh)(x))&&void 0!==O&&O.father?(0,h.jsx)("div",{style:{width:240},className:"r7gAOb yyJm8b",children:(null===(B=(0,d.bh)(x))||void 0===B||null===(R=B.fatherInfo)||void 0===R?void 0:R.firstName)&&"".concat(null===(D=(0,d.bh)(x))||void 0===D||null===(M=D.fatherInfo)||void 0===M?void 0:M.firstName," ").concat(null===(T=(0,d.bh)(x))||void 0===T||null===(F=T.fatherInfo)||void 0===F?void 0:F.lastName)}):null]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"label",onClick:function(){return te("mother")},children:"Madre"}),null!==(A=(0,d.bh)(x))&&void 0!==A&&A.mother?(0,h.jsx)("div",{style:{width:240},className:"r7gAOb yyJm8b",children:(null===(E=(0,d.bh)(x))||void 0===E||null===(Z=E.motherInfo)||void 0===Z?void 0:Z.firstName)&&"".concat(null===(L=(0,d.bh)(x))||void 0===L||null===(H=L.motherInfo)||void 0===H?void 0:H.firstName," ").concat(null===(P=(0,d.bh)(x))||void 0===P||null===(Y=P.motherInfo)||void 0===Y?void 0:Y.lastName)}):null]})]}),null!==ie&&void 0!==ie&&ie.hasChange?(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("button",{onClick:ee,children:"Actualizar"})})]}):(0,h.jsx)("div",{className:"card"})]})};var b=function(e,l,i){var a=0,t={},n=function(n){var s=e[n];l[s]&&("object"===typeof l[s]?(0,d._2)(l[s]).map((function(e){var n,d;(null===l||void 0===l||null===(n=l[s])||void 0===n?void 0:n[e])!==(null===i||void 0===i||null===(d=i[s])||void 0===d?void 0:d[e])&&(a=1,t[s]=l[s])})):l[s]&&l[s]!==i[s]&&(a=1,t[s]=l[s]))};for(var s in e)n(s);return{data:t,hasChange:a}}},4268:function(){}}]);
//# sourceMappingURL=6459.6896fc1c.chunk.js.map