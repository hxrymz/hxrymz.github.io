"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1579,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return u},OpenModal:function(){return s},default:function(){return d}});var i=n(2791),o=n(5408),r=n(2350),a=n(184),l="listDialog_mdh392",d=function(){var e=(0,r.bh)("listDialog")||{},t=((0,o.Z)(l),Object.keys(e));return(0,a.jsx)(a.Fragment,{children:t.map((function(t,n){var o=e[t];if(o&&o.visible){var r={};o.height&&(r.heigth=o.height),o.width,o.zIndex&&(r.zIndex=o.zIndex-1);var l={zIndex:o.zIndex},d=null,s=o.data;return o.content&&(d=i.cloneElement(o.content,{data:s})),(0,a.jsxs)("div",{className:"ltr-1kbnjow",style:r,children:[(0,a.jsx)("div",{className:"ltr-hoe9xz",children:(0,a.jsx)("div",{className:"ltr-1wao6ny",style:l,id:t,children:d})}),o.data.overlay?(0,a.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:e})}}):null]},t)}}))})},s=function(e){var t=(0,r.bh)("listDialog")||{},n=(0,r.M5)();t[n]||(t[n]={}),t[n].visible=!0;var i={};e.props?(i=e.props).modalID=n:i.modalID=n;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===t[n].width&&i.height===t[n].height||(t[n].height=i.height+10,t[n].width=i.width,(0,r.Rz)("listDialog",t),(0,r.wt)(l)))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=i,(0,r.Rz)("listDialog",t),(0,r.wt)(l),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,r.Rz)("modalOpen",n),(0,r.wt)(l)}),125)},u=function(e){var t,n,i,o=(0,r.bh)("listDialog")||{},a=e.id;o[a]&&(o[a].observeResize&&o[a].observeInterval&&clearInterval(o[a].observeInterval),o[a].display=!1,null===(t=o[a])||void 0===t||null===(n=t.data)||void 0===n||null===(i=n.closeEvent)||void 0===i||i.call(n),(0,r.Rz)("listDialog",o),delete o[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,r.wt)(l),setTimeout((function(){delete o[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,r.Rz)("modalOpen",null)}),750))}},3796:function(e,t,n){n.d(t,{$F:function(){return c},$Y:function(){return l},G1:function(){return h},QB:function(){return f},TQ:function(){return p},VU:function(){return o},XX:function(){return a},cC:function(){return d},km:function(){return r},mH:function(){return u},se:function(){return v},t8:function(){return s}});var i=n(799);function o(){return(0,i.ZP)((function(){return n.e(2580).then(n.bind(n,2580))}))}function r(){return(0,i.ZP)((function(){return n.e(6459).then(n.bind(n,2507))}))}function a(){return(0,i.ZP)((function(){return Promise.all([n.e(1778),n.e(1205),n.e(5530)]).then(n.bind(n,5530))}))}function l(){return(0,i.ZP)((function(){return n.e(9522).then(n.bind(n,9522))}))}function d(){return(0,i.ZP)((function(){return Promise.all([n.e(2670),n.e(4430)]).then(n.bind(n,4430))}))}function s(){return(0,i.ZP)((function(){return Promise.all([n.e(2670),n.e(2135)]).then(n.bind(n,2135))}))}function u(){return(0,i.ZP)((function(){return Promise.all([n.e(1778),n.e(1205),n.e(5905)]).then(n.bind(n,5905))}))}function c(){return(0,i.ZP)((function(){return n.e(6632).then(n.bind(n,6632))}))}function v(){return(0,i.ZP)((function(){return n.e(2613).then(n.bind(n,2613))}))}function f(){return(0,i.ZP)((function(){return n.e(4946).then(n.bind(n,4946))}))}function h(){return(0,i.ZP)((function(){return n.e(9669).then(n.bind(n,9669))}))}function p(){return(0,i.ZP)((function(){return Promise.all([n.e(2670),n.e(710)]).then(n.bind(n,710))}))}},1579:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(4165),o=n(5861),r=n(9439),a=n(2791),l=n(2350),d=n(6963);function s(e){var t=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(t)}function u(e,t,n){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)((0,i.Z)().mark((function e(t,n,o){var r,a,u,c,v,f,h,p,m,b,x,g,y,_;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(null===(r=(0,l.bh)("print_structure"))||void 0===r?void 0:r.marriage_struct_print)||[],(0,l._2)(t).map((function(e){a[e]&&t[e]&&(a[e].text=t[e])})),"https://www.hrmfinance.com/data/marriage_certificate.pdf",e.next=5,fetch("https://www.hrmfinance.com/data/marriage_certificate.pdf").then((function(e){return e.arrayBuffer()}));case 5:return u=e.sent,e.next=8,d.PDFDocument.load(u,{ignoreEncryption:!0});case 8:return c=e.sent,e.next=11,c.embedFont(d.StandardFonts.Helvetica);case 11:if(v=e.sent,f=(0,l.bh)("b64_signature"),h=null,!f){e.next=21;break}return e.next=17,fetch(f).then((function(e){return e.arrayBuffer()}));case 17:return p=e.sent,e.next=20,c.embedPng(p);case 20:h=e.sent;case 21:if(m=c.getPages(),b=m[0],x=b.getSize(),g=x.width,y=x.height,(0,l.Rz)("pdfSize",{width:g,height:y,pages:m.length}),o&&a&&(0,l._2)(a).map((function(e){var t=a[e];if(t){var n,i=t.pageNo,o=null===m||void 0===m||null===(n=m[i])||void 0===n?void 0:n.getSize();if("text"===t.type){var r;null===(r=m[i])||void 0===r||r.drawText(t.text?t.text.toString():"",{x:t.x,y:o.height-t.y,size:t.size||10,font:v,color:t.color?(0,d.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,d.rgb)(0,.1,.1)})}else if("textboxn"===t.type){var l=(t.text?t.text.toString():t.id.toString()).split("");null===l||void 0===l||l.map((function(e,n){var r;null===(r=m[i])||void 0===r||r.drawText(e,{x:t.x+n*t.space,y:o.height-t.y,size:t.size||10,font:v,color:t.color?(0,d.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,d.rgb)(0,.1,.1)})}))}else if("checkBox"===t.type){var s,u,c=(null===o||void 0===o?void 0:o.height)-t.y;null===(s=m[i])||void 0===s||s.moveTo(t.x+2,c),null===(u=m[i])||void 0===u||u.drawSvgPath("M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",{borderColor:t.color?(0,d.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,d.rgb)(0,0,0),borderWidth:1,scale:.5})}else"image"===t.type&&h&&m[i].drawImage(h,{x:t.x,y:o.height-t.y,width:t.w,height:t.h})}})),!n){e.next=33;break}return e.next=29,c.save();case 29:return _=e.sent,e.abrupt("return",s(_));case 33:return e.abrupt("return",c.saveAsBase64({dataUri:!0}));case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(2647),f=n(3796),h=n(9760),p=n(24),m=n(184),b=(0,v.Np)(),x="marriage_certificate",g=(0,f.$Y)(),y=(0,p.f_)(),_=(0,f.t8)(),N=["folio","tomo","state_registration","registration_officer","revised_by","prepared_by","city_office","state_office","city_registration","dop","dom","marriage_registration_officer","spouse2Id"],w=function(e){var t,n,d,s,c,v,f,p,w,z,C,T,M,k,Z=e.data,R=(e.elmId,e.updObs,(0,a.useState)(!1)),B=(0,r.Z)(R,2),D=B[0],O=B[1],P=(0,a.useState)(0),S=(0,r.Z)(P,2),F=(S[0],S[1]),L=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n,o,r,a,d,s,u,c,v,f,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={query:"getScanDocumentsNotary",params:{":customerId":(0,l.bh)("upd_client").clientNotaryId,":documentType":"MCT"},queryString:"!* contain :customerId AND documentType contain :documentType"},n=(0,l.Bm)((0,l.uG)(),t),e.next=4,n;case 4:(o=e.sent)&&!o.error&&(r=(0,l._2)(o.data)[0],a=(0,l.bh)("upd_client"),o.data[r]?((0,l.Rz)(x,o.data[r]),(0,l.Rz)(x+"_bck",JSON.parse(JSON.stringify(o.data[r]))),u=I(a),(null===(d=o.data[r])||void 0===d?void 0:d.spouse1Id)===a.clientNotaryId?((0,l.Rz)("MCT_spouse1",u),v=I(null===(c=o.data[r])||void 0===c?void 0:c.spouse2Info),(0,l.Rz)("MCT_spouse1",u),(0,l.Rz)("MCT_spouse2",v)):(null===(s=o.data[r])||void 0===s?void 0:s.spouse2Id)===a.clientNotaryId&&(h=I(null===(f=o.data[r])||void 0===f?void 0:f.spouse1Info),(0,l.Rz)("MCT_spouse2",u),(0,l.Rz)("MCT_spouse1",h)),F((0,l.M5)())):(0,l.Rz)("MCT_spouse1",null));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){D||(O(!0),setTimeout((function(){L()}),50),F((0,l.M5)()))}));var E=function(e,t){var n=(0,l.bh)(x)||{};n[e]=t,(0,l.Rz)(x,n),F((0,l.M5)())},G=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n,o,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},["name","city_pob","state_pob","dob","dateOfBirth","fatherName","motherName"].map((function(e){t[e+"_sp2"]=(0,l.bh)("MCT_spouse2")[e]})),(n=Object.assign({},(0,l.bh)(x),(0,l.bh)("MCT_spouse1"),t)).dom&&(o=new Date(n.dom).getTime())&&(n.date_of_married=(0,l.sG)(o)),n.dop&&(r=new Date(n.dop).getTime())&&(n.date_of_peticion=(0,l.sG)(r)),n.dateOfBirth&&(n.dob_p=(0,l.sG)(n.dateOfBirth)),n.dateOfBirth_sp2&&(n.dob_p_sp2=(0,l.sG)(n.dateOfBirth_sp2)),n.city2_registration=n.city_registration,n.state2_registration=n.state_registration,n.todayDate=(0,l.sJ)((new Date).getTime()),e.next=13,u(n,!0,!0);case 13:a=e.sent,window.open(a);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n,o,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.bh)(x),n={},t.documentNotaryId?(o=(0,l.vy)(N,(0,l.bh)(x),(0,l.bh)(x+"_bck")),n={query:"updateDocumentsNotary",params:{documentNotaryId:t.documentNotaryId},data2update:o.data}):(t.spouse1Id=(0,l.bh)("upd_client").clientNotaryId,t.documentType="MCT",t.documentNotaryId=(0,l.M5)(),n={query:"addDocumentsNotary",form:t}),r=(0,l.Bm)((0,l.uG)(),n),e.next=6,r;case 6:(a=e.sent)&&a.data&&((0,l.Rz)(x,a.data),F((0,l.M5)())),A(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){(null===Z||void 0===Z?void 0:Z.modalID)&&(0,h.CloseModal)({id:null===Z||void 0===Z?void 0:Z.modalID})},H=function(e){var t={zIndex:450,props:{minHeight:"1vh",overlay:!0}};t.content=(0,m.jsx)(g,{handleClick:function(t){return function(e,t){E(t,e.clientNotaryId);var n=I(e);(0,l.Rz)("MCT_spouse2",n)}(t,e)}}),(0,h.OpenModal)(t)},q=function(e){var t={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};t.content=(0,m.jsx)(_,{updObs:F,confirm:function(t){return function(e,t){E(e,t)}(e,t)}}),(0,h.OpenModal)(t)},J=(0,l.vy)(N,(0,l.bh)(x),(0,l.bh)(x+"_bck"));return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"800px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Traducion de Certificacion de Matrimonio"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("button",{className:"group_title purple addBtn",onClick:G,children:"Imprimir"})]}),(0,m.jsx)("p",{className:"group_title",children:"Lugar y datos del Matrimonio"}),(0,m.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,m.jsx)(b,{init:null===(t=(0,l.bh)(x))||void 0===t?void 0:t.folio,label:"Folio",width:60,updChanges:function(e){return E("folio",e)}}),(0,m.jsx)(b,{init:null===(n=(0,l.bh)(x))||void 0===n?void 0:n.tomo,label:"Tomo",width:60,updChanges:function(e){return E("tomo",e)}}),(0,m.jsx)(y,{init:null===(d=(0,l.bh)(x))||void 0===d?void 0:d.dom,label:"Fecha de matrimonio",updDate:function(e){return E("dom",e)}}),(0,m.jsx)("div",{className:"_dsplFlx ",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"label",onClick:function(){return q("marriage_registration_officer")},children:"Nombre de la Notaria:"}),(0,m.jsx)("div",{className:"date2Upd",children:null===(s=(0,l.bh)(x))||void 0===s?void 0:s.marriage_registration_officer})]})})]}),(0,m.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,m.jsx)(b,{init:null===(c=(0,l.bh)(x))||void 0===c?void 0:c.city_registration,label:"Municipio",width:240,updChanges:function(e){return E("city_registration",e)}}),(0,m.jsx)(b,{init:null===(v=(0,l.bh)(x))||void 0===v?void 0:v.state_registration,label:"Provincia",width:240,updChanges:function(e){return E("state_registration",e)}})]}),(0,m.jsx)("div",{className:"separator"}),(0,m.jsx)("p",{className:"group_title",children:"Oficina donde se solitito el Documento"}),(0,m.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,m.jsx)(y,{init:null===(f=(0,l.bh)(x))||void 0===f?void 0:f.dop,label:"Fecha de solicitud",updDate:function(e){return E("dop",e)}}),(0,m.jsx)(b,{init:null===(p=(0,l.bh)(x))||void 0===p?void 0:p.city_office,label:"Municipio",width:240,updChanges:function(e){return E("city_office",e)}}),(0,m.jsx)(b,{init:null===(w=(0,l.bh)(x))||void 0===w?void 0:w.state_office,label:"Provincia",width:240,updChanges:function(e){return E("state_office",e)}})]}),(0,m.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"22px 0 12px"},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"label",onClick:function(){return q("prepared_by")},children:"Preparado por:"}),(0,m.jsx)("div",{className:"date2Upd",children:null===(z=(0,l.bh)(x))||void 0===z?void 0:z.prepared_by})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"label",onClick:function(){return q("revised_by")},children:"Revisado por:"}),(0,m.jsx)("div",{className:"date2Upd",children:null===(C=(0,l.bh)(x))||void 0===C?void 0:C.revised_by})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"label",onClick:function(){return q("registration_officer")},children:"Firmado por:"}),(0,m.jsx)("div",{className:"date2Upd",children:null===(T=(0,l.bh)(x))||void 0===T?void 0:T.registration_officer})]})]}),(0,m.jsx)("div",{className:"separator"}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{margin:"9px 0"},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"group_title",children:"Conyuge (1)"}),(0,m.jsx)(j,{init:null===(M=(0,l.bh)("MCT_spouse1"))||void 0===M?void 0:M.name,label:"Nombre",width:240})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"group_title",onClick:function(){return H("spouse2Id")},children:"Conyuge (2)"}),(0,m.jsx)(j,{init:null===(k=(0,l.bh)("MCT_spouse2"))||void 0===k?void 0:k.name,label:"Nombre",width:240})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),null!==J&&void 0!==J&&J.hasChange?(0,m.jsx)("button",{className:"group_title purple addBtn",onClick:U,children:"Guardar"}):null]})]})},j=function(e){var t=e.init,n=e.label,i=e.width,o=(0,a.useState)(!1),d=(0,r.Z)(o,2),s=d[0],u=d[1],c=(0,a.useState)(0),v=(0,r.Z)(c,2),f=(v[0],v[1]);return(0,a.useEffect)((function(){s||(u(!0),f((0,l.M5)()))})),t?(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"label",children:n}),(0,m.jsx)("div",{style:i?{width:i}:null,className:"r7gAOb yyJm8b",children:t})]}):null},I=function(e){var t,n,i,o,r,a,d,s,u,c,v,f;return{city_pob:null===e||void 0===e||null===(t=e.placeOfBirth)||void 0===t?void 0:t.city,state_pob:null===e||void 0===e||null===(n=e.placeOfBirth)||void 0===n?void 0:n.state,fatherName:null!==e&&void 0!==e&&null!==(i=e.fatherInfo)&&void 0!==i&&i.firstName?"".concat(null===e||void 0===e||null===(o=e.fatherInfo)||void 0===o?void 0:o.firstName," ").concat(null!==e&&void 0!==e&&null!==(r=e.fatherInfo)&&void 0!==r&&r.middleName?(null===e||void 0===e||null===(a=e.fatherInfo)||void 0===a?void 0:a.middleName)+" ":"").concat(null===e||void 0===e||null===(d=e.fatherInfo)||void 0===d?void 0:d.lastName," "):"",dob:null===e||void 0===e?void 0:e.dateOfBirth,dateOfBirth:(0,l.sG)(null===e||void 0===e?void 0:e.dateOfBirth),motherName:null!==e&&void 0!==e&&null!==(s=e.motherInfo)&&void 0!==s&&s.firstName?"".concat(null===e||void 0===e||null===(u=e.motherInfo)||void 0===u?void 0:u.firstName," ").concat(null!==e&&void 0!==e&&null!==(c=e.motherInfo)&&void 0!==c&&c.middleName?(null===e||void 0===e||null===(v=e.motherInfo)||void 0===v?void 0:v.middleName)+" ":"").concat(null===e||void 0===e||null===(f=e.motherInfo)||void 0===f?void 0:f.lastName," "):"",name:null!==e&&void 0!==e&&e.firstName?"".concat(null===e||void 0===e?void 0:e.firstName," ").concat(null!==e&&void 0!==e&&e.middleName?(null===e||void 0===e?void 0:e.middleName)+" ":"").concat(null===e||void 0===e?void 0:e.lastName," "):""}}}}]);
//# sourceMappingURL=1579.bdc5f8f4.chunk.js.map