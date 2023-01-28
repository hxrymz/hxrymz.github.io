"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5525],{4484:function(e,i,t){t.r(i);var n=t(4165),r=t(5861),o=t(9439),d=t(2791),a=t(2350),l=t(1205),s=t(2647),u=t(24),c=t(3796),h=t(9760),v=t(184),f=(0,u.f_)(),p=(0,s.Np)(),m=(0,c.t8)(),_="birth_certificate",x=["folio","tomo","state_registration","registration_officer","revised_by","prepared_by","city_office","state_office","city_registration","dop","dor","grandFather_FatherSide","grandMother_FatherSide","grandFather_MotherSide","grandMother_MotherSide"];i.default=function(e){e.data,e.elmId;var i,t,s,u,c,b,g,N,j,y,F,M,I,S,w,C=e.close,B=(0,d.useState)(!1),O=(0,o.Z)(B,2),k=O[0],A=O[1],R=(0,d.useState)(0),T=(0,o.Z)(R,2),Z=(T[0],T[1]),z=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var i,t,r,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={query:"getScanDocumentsNotary",params:{":customerId":(0,a.bh)("upd_client").clientNotaryId,":documentType":"BCT"},queryString:"customerId contain :customerId AND documentType contain :documentType"},t=(0,a.Bm)((0,a.uG)(),i),e.next=4,t;case 4:(r=e.sent)&&!r.error&&(o=(0,a._2)(r.data)[0],r.data[o]?((0,a.Rz)(_,r.data[o]),(0,a.Rz)(_+"_bck",JSON.parse(JSON.stringify(r.data[o]))),Z((0,a.M5)())):((0,a.Rz)(_,null),Z((0,a.M5)())));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){if(!k)return A(!0),(0,a.Rz)(_,null),Z((0,a.M5)()),setTimeout((function(){var e,i,t,n;z();var r,o,d,l,s,u,c,h,v,f,p,m,x,b,g,N,j,y,F=(0,a.bh)("upd_client"),M={city_pob:null===F||void 0===F||null===(e=F.placeOfBirth)||void 0===e?void 0:e.city,state_pob:null===F||void 0===F||null===(i=F.placeOfBirth)||void 0===i?void 0:i.state,genre:null===F||void 0===F?void 0:F.genre,dob:null===F||void 0===F?void 0:F.dob,dateOfBirth:null===F||void 0===F?void 0:F.dateOfBirth,name:null!==F&&void 0!==F&&F.firstName?"".concat(null===F||void 0===F?void 0:F.firstName," ").concat(null!==F&&void 0!==F&&F.middleName?(null===F||void 0===F?void 0:F.middleName)+" ":"").concat(null===F||void 0===F?void 0:F.lastName," "):""};null!==F&&void 0!==F&&null!==(t=F.fatherInfo)&&void 0!==t&&t.firstName&&(M.fatherBirthPlace=(null===F||void 0===F||null===(r=F.fatherInfo)||void 0===r||null===(o=r.placeOfBirth)||void 0===o?void 0:o.city)+", "+(null===F||void 0===F||null===(d=F.fatherInfo)||void 0===d||null===(l=d.placeOfBirth)||void 0===l?void 0:l.state),M.fatherName=null!==F&&void 0!==F&&null!==(s=F.fatherInfo)&&void 0!==s&&s.firstName?"".concat(null===F||void 0===F||null===(u=F.fatherInfo)||void 0===u?void 0:u.firstName," ").concat(null!==F&&void 0!==F&&null!==(c=F.fatherInfo)&&void 0!==c&&c.middleName?(null===F||void 0===F||null===(h=F.fatherInfo)||void 0===h?void 0:h.middleName)+" ":"").concat(null===F||void 0===F||null===(v=F.fatherInfo)||void 0===v?void 0:v.lastName," "):"");null!==F&&void 0!==F&&null!==(n=F.motherInfo)&&void 0!==n&&n.firstName&&(M.motherBirthPlace=(null===F||void 0===F||null===(f=F.motherInfo)||void 0===f||null===(p=f.placeOfBirth)||void 0===p?void 0:p.city)+", "+(null===F||void 0===F||null===(m=F.motherInfo)||void 0===m||null===(x=m.placeOfBirth)||void 0===x?void 0:x.state),M.motherName=null!==F&&void 0!==F&&null!==(b=F.motherInfo)&&void 0!==b&&b.firstName?"".concat(null===F||void 0===F||null===(g=F.motherInfo)||void 0===g?void 0:g.firstName," ").concat(null!==F&&void 0!==F&&null!==(N=F.motherInfo)&&void 0!==N&&N.middleName?(null===F||void 0===F||null===(j=F.motherInfo)||void 0===j?void 0:j.middleName)+" ":"").concat(null===F||void 0===F||null===(y=F.motherInfo)||void 0===y?void 0:y.lastName," "):"");(0,a.Rz)(_+"_userInfo",M),Z((0,a.M5)())}),50),function(){(0,a.Rz)(_,null)}}));var D=function(e,i){var t=(0,a.bh)(_)||{};t[e]=i,(0,a.Rz)(_,t),Z((0,a.M5)())},G=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var i,t,r,o,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,a.bh)(_),t={},i.documentNotaryId?(r=(0,a.vy)(x,(0,a.bh)(_),(0,a.bh)(_+"_bck")),t={query:"updateDocumentsNotary",params:{documentNotaryId:i.documentNotaryId},data2update:r.data}):(i.customerId=(0,a.bh)("upd_client").clientNotaryId,i.documentType="BCT",i.documentNotaryId=(0,a.M5)(),t={query:"addDocumentsNotary",form:i}),o=(0,a.Bm)((0,a.uG)(),t),e.next=6,o;case 6:(d=e.sent)&&d.data&&((0,a.Rz)(_,d.data),Z((0,a.M5)()),C(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var i,t,r,o,d,s,u,c,h,v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign({},(0,a.bh)(_),(0,a.bh)(_+"_userInfo")),t=i.grandFather_FatherSide?i.grandFather_FatherSide:"",r=i.grandMother_FatherSide?i.grandMother_FatherSide:"",o=i.grandFather_MotherSide?i.grandFather_MotherSide:"",d=i.grandMother_MotherSide?i.grandMother_MotherSide:"",s=t&&r?" and ":"",u=o&&d?" and ":"",i.grands_FatherSide=t+s+r,i.grands_MotherSide=o+u+d,i.dor&&(c=new Date(i.dor).getTime())&&(i.dor_p=(0,a.sG)(c)),i.dop&&(h=new Date(i.dop).getTime())&&(i.dop_p=(0,a.sG)(h)),i.dateOfBirth&&(i.dob_p=(0,a.sG)(i.dateOfBirth)),i.todayDate=(0,a.sJ)((new Date).getTime()),e.next=15,(0,l.zh)(i,!0,!0);case 15:v=e.sent,window.open(v);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){var i={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};i.content=(0,v.jsx)(m,{updObs:Z,confirm:function(i){return function(e,i){D(e,i)}(e,i)}}),(0,h.OpenModal)(i)};return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"800px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Traducion de Certificacion de Nacimiento"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("button",{className:"group_title addBtn purple",onClick:P,children:"Imprimir"})]}),(0,v.jsx)("p",{className:"group_title",children:"Lugar y datos del Registro"}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,v.jsx)(p,{init:null===(i=(0,a.bh)(_))||void 0===i?void 0:i.folio,label:"Folio",width:60,updChanges:function(e){return D("folio",e)}}),(0,v.jsx)(p,{init:null===(t=(0,a.bh)(_))||void 0===t?void 0:t.tomo,label:"Tomo",width:60,updChanges:function(e){return D("tomo",e)}}),(0,v.jsx)(f,{init:null===(s=(0,a.bh)(_))||void 0===s?void 0:s.dor,label:"Fecha de registro",updDate:function(e){return D("dor",e)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,v.jsx)(p,{init:null===(u=(0,a.bh)(_))||void 0===u?void 0:u.city_registration,label:"Municipio",width:240,updChanges:function(e){return D("city_registration",e)}}),(0,v.jsx)(p,{init:null===(c=(0,a.bh)(_))||void 0===c?void 0:c.state_registration,label:"Provincia",width:240,updChanges:function(e){return D("state_registration",e)}})]}),(0,v.jsx)("div",{className:"separator"}),(0,v.jsx)("p",{className:"group_title",children:"Oficina donde se solitito el Registro"}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,v.jsx)(f,{init:null===(b=(0,a.bh)(_))||void 0===b?void 0:b.dop,label:"Fecha de solicitud",updDate:function(e){return D("dop",e)}}),(0,v.jsx)(p,{init:null===(g=(0,a.bh)(_))||void 0===g?void 0:g.city_office,label:"Municipio",width:240,updChanges:function(e){return D("city_office",e)}}),(0,v.jsx)(p,{init:null===(N=(0,a.bh)(_))||void 0===N?void 0:N.state_office,label:"Provincia",width:240,updChanges:function(e){return D("state_office",e)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"22px 0 12px"},children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:"label",onClick:function(){return q("prepared_by")},children:"Preparado por:"}),(0,v.jsx)("div",{className:"date2Upd",children:null===(j=(0,a.bh)(_))||void 0===j?void 0:j.prepared_by})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:"label",onClick:function(){return q("revised_by")},children:"Revisado por:"}),(0,v.jsx)("div",{className:"date2Upd",children:null===(y=(0,a.bh)(_))||void 0===y?void 0:y.revised_by})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:"label",onClick:function(){return q("registration_officer")},children:"Firmado por:"}),(0,v.jsx)("div",{className:"date2Upd",children:null===(F=(0,a.bh)(_))||void 0===F?void 0:F.registration_officer})]})]}),(0,v.jsx)("div",{className:"separator"}),(0,v.jsx)("p",{className:"group_title",children:"Nombre Abuelos Paternos"}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,v.jsx)(p,{init:null===(M=(0,a.bh)(_))||void 0===M?void 0:M.grandFather_FatherSide,label:"Abuelo",width:160,updChanges:function(e){return D("grandFather_FatherSide",e)}}),(0,v.jsx)("div",{style:{margin:"0 4px"}}),(0,v.jsx)(p,{init:null===(I=(0,a.bh)(_))||void 0===I?void 0:I.grandMother_FatherSide,label:"Abuela",width:160,updChanges:function(e){return D("grandMother_FatherSide",e)}})]}),(0,v.jsx)("p",{className:"group_title",children:"Nombre Abuelos Maternos"}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,v.jsx)(p,{init:null===(S=(0,a.bh)(_))||void 0===S?void 0:S.grandFather_MotherSide,label:"Abuelo",width:160,updChanges:function(e){return D("grandFather_MotherSide",e)}}),(0,v.jsx)("div",{style:{margin:"0 4px"}}),(0,v.jsx)(p,{init:null===(w=(0,a.bh)(_))||void 0===w?void 0:w.grandMother_MotherSide,label:"Abuela ",width:160,updChanges:function(e){return D("grandMother_MotherSide",e)}})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("button",{className:"group_title purple addBtn",onClick:G,children:"Guardar"})]})]})}}}]);
//# sourceMappingURL=5525.64fd891f.chunk.js.map