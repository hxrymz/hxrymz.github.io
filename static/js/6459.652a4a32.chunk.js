"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6459,9760],{9760:function(e,i,l){l.r(i),l.d(i,{CloseModal:function(){return c},OpenModal:function(){return r},default:function(){return o}});var n=l(2791),a=l(5408),t=l(2350),s=l(184),d="listDialog_mdh392",o=function(){var e=(0,t.bh)("listDialog")||{},i=((0,a.Z)(d),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:i.map((function(i,l){var a=e[i];if(a&&a.visible){var t={};a.height&&(t.heigth=a.height),a.width,a.zIndex&&(t.zIndex=a.zIndex-1);var d={zIndex:a.zIndex},o=null,r=a.data;return a.content&&(o=n.cloneElement(a.content,{data:r})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:t,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:d,id:i,children:o})}),a.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:function(){var e;e=i,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},i)}}))})},r=function(e){var i=(0,t.bh)("listDialog")||{},l=(0,t.M5)();i[l]||(i[l]={}),i[l].visible=!0;var n={};e.props?(n=e.props).modalID=l:n.modalID=l;var a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),i[l].isView=e.isView,i[l].observeResize=e.observeResize,i[l].observeResize&&(i[l].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(l,"']")),n=e&&e.getBoundingClientRect();n&&(n.width===i[l].width&&n.height===i[l].height||(i[l].height=n.height+10,i[l].width=n.width,(0,t.Rz)("listDialog",i),(0,t.wt)(d)))}),200)),i[l].display=!0,e.zIndex&&(i[l].zIndex=e.zIndex),e.height&&(i[l].height=e.height),e.width&&(i[l].width=e.width),e.content&&(i[l].content=e.content),i[l].data=n,(0,t.Rz)("listDialog",i),(0,t.wt)(d),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,t.Rz)("modalOpen",l),(0,t.wt)(d)}),125)},c=function(e){var i,l,n,a=(0,t.bh)("listDialog")||{},s=e.id;a[s]&&(a[s].observeResize&&a[s].observeInterval&&clearInterval(a[s].observeInterval),a[s].display=!1,null===(i=a[s])||void 0===i||null===(l=i.data)||void 0===l||null===(n=l.closeEvent)||void 0===n||n.call(l),(0,t.Rz)("listDialog",a),delete a[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,t.wt)(d),setTimeout((function(){delete a[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,t.Rz)("modalOpen",null)}),750))}},6459:function(e,i,l){l.r(i);var n=l(4165),a=l(5861),t=l(9439),s=l(2791),d=l(2350),o=l(2647),r=l(9760),c=l(3796),u=(l(4268),l(24)),h=l(184),v=(0,o.Np)(),p=(0,c.$Y)(),m=(0,o.YZ)(),x=(0,u.f_)(),f=(0,o.A5)(),b="upd_client";i.default=function(e){var i,l,o,c,u,g,j,N,y,C,w,_,I,k,S,z,O,A,T,F,B,D,R,M,L,E,H,W,Z,P,U,Y,J,V,q,G,$,K,Q,X,ee,ie,le,ne,ae,te,se,de,oe,re,ce,ue=e.data,he=(e.elmId,e.confirm),ve=(0,s.useState)(!1),pe=(0,t.Z)(ve,2),me=pe[0],xe=pe[1],fe=(0,s.useState)(0),be=(0,t.Z)(fe,2),ge=(be[0],be[1]);(0,s.useEffect)((function(){me||(xe(!0),ge((0,d.M5)()))}));var je=function(e,i,l){var n=(0,d.bh)(b)||{};l?(n[l]||(n[l]={}),n[l][e]=i):n[e]=i,(0,d.Rz)(b,n),ge((0,d.M5)())},Ne=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var i,l,a,t,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,d.bh)(b))&&i.dateOfBirth&&(l=new Date(i.dateOfBirth).getTime())&&(i.dob=l),a=(0,d.vy)(ye,(0,d.bh)(b),(0,d.bh)(b+"_bck")),t={query:"updateClientNotary",params:{clientNotaryId:i.clientNotaryId},data2update:a.data},s=(0,d.Bm)((0,d.uG)(),t),e.next=7,s;case 7:(o=e.sent)&&o.data&&((0,d.Rz)(b,{}),(0,d.Rz)(b+"_bck",{}),ge((0,d.M5)()),we(!0),he&&he());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=["phoneNumber","firstName","middleName","lastName","dateOfBirth","genre","placeOfBirth","currentLocation","currentAddress","father","mother","height","weight","ss","alienNumber","race","maritalStatus","spouse","isDecease","countryOfBirth","countryOfCitizenship","isInCourt","isInUSA","includedOnApplication","counsel_provider_list","family_help_preparing","someone_help_preparing"],Ce=(0,d.vy)(ye,(0,d.bh)(b),(0,d.bh)(b+"_bck")),we=function(){(null===ue||void 0===ue?void 0:ue.modalID)&&(0,r.CloseModal)({id:null===ue||void 0===ue?void 0:ue.modalID})},_e=function(e){var i={zIndex:480,props:{minHeight:"1vh",overlay:!0}};i.content=(0,h.jsx)(p,{handleClick:function(i){return function(e,i){je(i,e.clientNotaryId)}(i,e)}}),(0,r.OpenModal)(i)};return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title ",children:"Actualizar Formulario Cliente"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:10},children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(x,{init:null===(i=(0,d.bh)(b))||void 0===i?void 0:i.dateOfBirth,label:"Fecha de nacimiento",updDate:function(e){return je("dateOfBirth",e)}})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{style:{marginTop:39},children:(0,h.jsx)(f,{init:null===(l=(0,d.bh)(b))||void 0===l?void 0:l.genre,lbl_empty:"Sexo",list:[{label:"Mujer",id:"Female"},{label:"Hombre",id:"Male"}],onSelect:function(e){return je("genre",e)}})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{style:{marginTop:39},children:(0,h.jsx)(f,{init:null===(o=(0,d.bh)(b))||void 0===o?void 0:o.maritalStatus,lbl_empty:"Estado Civil",list:[{label:"Soltero",id:"Single"},{label:"Casado",id:"Married"},{label:"Divorciado",id:"Divorced"},{label:"Viudo",id:"Widowed"}],onSelect:function(e){return je("maritalStatus",e)},direction:"right"})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{style:{marginTop:39},children:(0,h.jsx)(f,{init:null===(c=(0,d.bh)(b))||void 0===c?void 0:c.race,lbl_empty:"raza",list:[{label:"Hispanic or Latino",id:"Hispanic or Latino"},{label:"American White",id:"American White"},{label:"African",id:"African"}],onSelect:function(e){return je("race",e)}})}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{marginTop:10},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,h.jsx)(m,{initvalue:null===(u=(0,d.bh)(b))||void 0===u?void 0:u.isInUSA,keyCode:57,updChange:function(e){return je("isInUSA",e)}}),(0,h.jsx)("span",{className:"checklabel",children:"esta en USA"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,h.jsx)(m,{initvalue:null===(g=(0,d.bh)(b))||void 0===g?void 0:g.isInCourt,keyCode:37,updChange:function(e){return je("isInCourt",e)}}),(0,h.jsx)("span",{className:"checklabel",children:"Tiene corte"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,h.jsx)(m,{initvalue:null===(j=(0,d.bh)(b))||void 0===j?void 0:j.includedOnApplication,keyCode:27,updChange:function(e){return je("includedOnApplication",e)}}),(0,h.jsx)("span",{className:"checklabel",children:"Incluir en la app"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,h.jsx)(m,{initvalue:null===(N=(0,d.bh)(b))||void 0===N?void 0:N.counsel_provider_list,keyCode:57,updChange:function(e){return je("counsel_provider_list",e)}}),(0,h.jsx)("span",{className:"checklabel",children:"Counselor List"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,h.jsx)(m,{initvalue:null===(y=(0,d.bh)(b))||void 0===y?void 0:y.family_help_preparing,keyCode:35,updChange:function(e){return je("family_help_preparing",e)}}),(0,h.jsx)("span",{className:"checklabel",children:"Family Helping"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,h.jsx)(m,{initvalue:null===(C=(0,d.bh)(b))||void 0===C?void 0:C.someone_help_preparing,keyCode:39,updChange:function(e){return je("someone_help_preparing",e)}}),(0,h.jsx)("span",{className:"checklabel",children:"Someone preparing"})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{marginTop:10},children:[(0,h.jsx)(v,{init:null===(w=(0,d.bh)(b))||void 0===w?void 0:w.firstName,label:"Nombre",width:200,updChanges:function(e){return je("firstName",e)}}),(0,h.jsx)(v,{init:null===(_=(0,d.bh)(b))||void 0===_?void 0:_.middleName,label:"Segundo Nombre",width:200,updChanges:function(e){return je("middleName",e)}}),(0,h.jsx)(v,{init:null===(I=(0,d.bh)(b))||void 0===I?void 0:I.lastName,label:"Apellidos",width:360,updChanges:function(e){return je("lastName",e)}})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:10},children:[(0,h.jsx)(v,{init:null===(k=(0,d.bh)(b))||void 0===k?void 0:k.phoneNumber,label:"Telefono",width:120,updChanges:function(e){return je("phoneNumber",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(S=(0,d.bh)(b))||void 0===S?void 0:S.height,label:"Altura",width:120,updChanges:function(e){return je("height",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(z=(0,d.bh)(b))||void 0===z?void 0:z.weight,label:"Peso",width:120,updChanges:function(e){return je("weight",e)}}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:10},children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(O=(0,d.bh)(b))||void 0===O?void 0:O.alienNumber,label:"Alien Number",width:120,updChanges:function(e){return je("alienNumber",e)}}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(v,{init:null===(A=(0,d.bh)(b))||void 0===A?void 0:A.ss,label:"Social",width:120,updChanges:function(e){return je("ss",e)}}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsx)("div",{className:"separator"}),(0,h.jsx)("p",{className:"group_title",children:"Lugar de Nacimiento"}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,h.jsx)(v,{init:null===(T=(0,d.bh)(b))||void 0===T||null===(F=T.placeOfBirth)||void 0===F?void 0:F.city,label:"Municipio",width:200,updChanges:function(e){return je("city",e,"placeOfBirth")}}),(0,h.jsx)(v,{init:null===(B=(0,d.bh)(b))||void 0===B||null===(D=B.placeOfBirth)||void 0===D?void 0:D.state,label:"Provincia",width:200,updChanges:function(e){return je("state",e,"placeOfBirth")}}),(0,h.jsx)(v,{init:null===(R=(0,d.bh)(b))||void 0===R||null===(M=R.placeOfBirth)||void 0===M?void 0:M.country,label:"Pais de Nacimiento",width:200,updChanges:function(e){return je("country",e,"placeOfBirth")}}),(0,h.jsx)(v,{init:null===(L=(0,d.bh)(b))||void 0===L?void 0:L.countryOfCitizenship,label:"Ciudadania",width:200,updChanges:function(e){return je("countryOfCitizenship",e)}}),(0,h.jsx)(v,{init:null===(E=(0,d.bh)(b))||void 0===E||null===(H=E.currentLocation)||void 0===H?void 0:H.state,label:"Estado de Recidencia Actual",width:200,updChanges:function(e){return je("state",e,"currentLocation")}}),(0,h.jsx)(v,{init:null===(W=(0,d.bh)(b))||void 0===W||null===(Z=W.currentLocation)||void 0===Z?void 0:Z.country,label:"Pais de Recidencia Actual",width:200,updChanges:function(e){return je("country",e,"currentLocation")}}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,h.jsx)(m,{initvalue:null===(P=(0,d.bh)(b))||void 0===P?void 0:P.isDecease,keyCode:22,updChange:function(e){return je("isDecease",e)}}),(0,h.jsx)("span",{className:"checklabel",children:"Fallecido"})]})]}),(0,h.jsx)("div",{className:"separator"}),(0,h.jsx)("p",{className:"group_title",children:"Padres"}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"label",onClick:function(){return _e("father")},children:"Padre"}),null!==(U=(0,d.bh)(b))&&void 0!==U&&U.father?(0,h.jsx)("div",{style:{width:240},className:"r7gAOb yyJm8b",children:(null===(Y=(0,d.bh)(b))||void 0===Y||null===(J=Y.fatherInfo)||void 0===J?void 0:J.firstName)&&"".concat(null===(V=(0,d.bh)(b))||void 0===V||null===(q=V.fatherInfo)||void 0===q?void 0:q.firstName," ").concat(null===(G=(0,d.bh)(b))||void 0===G||null===($=G.fatherInfo)||void 0===$?void 0:$.lastName)}):null]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"label",onClick:function(){return _e("mother")},children:"Madre"}),null!==(K=(0,d.bh)(b))&&void 0!==K&&K.mother?(0,h.jsx)("div",{style:{width:240},className:"r7gAOb yyJm8b",children:(null===(Q=(0,d.bh)(b))||void 0===Q||null===(X=Q.motherInfo)||void 0===X?void 0:X.firstName)&&"".concat(null===(ee=(0,d.bh)(b))||void 0===ee||null===(ie=ee.motherInfo)||void 0===ie?void 0:ie.firstName," ").concat(null===(le=(0,d.bh)(b))||void 0===le||null===(ne=le.motherInfo)||void 0===ne?void 0:ne.lastName)}):null]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"label",onClick:function(){return _e("spouse")},children:"Spouse"}),null!==(ae=(0,d.bh)(b))&&void 0!==ae&&ae.spouse?(0,h.jsx)("div",{style:{width:240},className:"r7gAOb yyJm8b",children:(null===(te=(0,d.bh)(b))||void 0===te||null===(se=te.spouseInfo)||void 0===se?void 0:se.firstName)&&"".concat(null===(de=(0,d.bh)(b))||void 0===de||null===(oe=de.spouseInfo)||void 0===oe?void 0:oe.firstName," ").concat(null===(re=(0,d.bh)(b))||void 0===re||null===(ce=re.spouseInfo)||void 0===ce?void 0:ce.lastName)}):null]})]}),null!==Ce&&void 0!==Ce&&Ce.hasChange?(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("button",{onClick:Ne,children:"Actualizar"})})]}):(0,h.jsx)("div",{className:"card"})]})}},4268:function(){}}]);
//# sourceMappingURL=6459.652a4a32.chunk.js.map