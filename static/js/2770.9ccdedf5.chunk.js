"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2770,9760],{9760:function(e,t,i){i.r(t),i.d(t,{CloseModal:function(){return d},OpenModal:function(){return l},default:function(){return s}});var n=i(2791),o=i(5408),a=i(2350),r=i(184),s=function(){var e=(0,a.bh)("listDialog")||{},t=((0,o.Z)("listDialog_h392"),Object.keys(e));return(0,r.jsx)(r.Fragment,{children:t.map((function(t,i){var o=e[t];if(o&&o.visible){var a={};o.height&&(a.heigth=o.height),o.width,o.zIndex&&(a.zIndex=o.zIndex-1);var s={zIndex:o.zIndex},l=null,c=o.data;return o.content&&(l=n.cloneElement(o.content,{data:c})),(0,r.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,r.jsx)("div",{className:"ltr-hoe9xz",children:(0,r.jsx)("div",{className:"ltr-1wao6ny",style:s,id:t,children:l})}),o.data.overlay?(0,r.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},t)}}))})},l=function(e){var t=(0,a.bh)("listDialog")||{},i=(0,a.M5)();t[i]||(t[i]={}),t[i].visible=!0;var n={};e.props?(n=e.props).modalID=i:n.modalID=i;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),t[i].isView=e.isView,t[i].observeResize=e.observeResize,t[i].observeResize&&(t[i].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(i,"']")),n=e&&e.getBoundingClientRect();n&&(n.width===t[i].width&&n.height===t[i].height||(t[i].height=n.height+10,t[i].width=n.width,(0,a.Rz)("listDialog",t),(0,a.wt)("listDialog_h392")))}),200)),t[i].display=!0,e.zIndex&&(t[i].zIndex=e.zIndex),e.height&&(t[i].height=e.height),e.width&&(t[i].width=e.width),e.content&&(t[i].content=e.content),t[i].data=n,(0,a.Rz)("listDialog",t),(0,a.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",i),(0,a.wt)("listDialog_h392")}),125)},d=function(e){var t,i,n,o=(0,a.bh)("listDialog")||{},r=e.id;o[r]&&(o[r].observeResize&&o[r].observeInterval&&clearInterval(o[r].observeInterval),o[r].display=!1,null===(t=o[r])||void 0===t||null===(i=t.data)||void 0===i||null===(n=i.closeEvent)||void 0===n||n.call(i),(0,a.Rz)("listDialog",o),delete o[r],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)("listDialog_h392"),setTimeout((function(){delete o[r],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},2770:function(e,t,i){i.r(t),i.d(t,{default:function(){return z}});var n=i(4165),o=i(5861),a=i(9439),r=i(2791),s=i(2350),l=i(6963),d=JSON.parse('{"tomo":{"type":"text","text":"","x":48,"y":215,"size":12,"pageNo":0},"folio":{"type":"text","text":"","size":12,"x":95,"y":215,"pageNo":0},"date_of_married":{"type":"text","text":"","size":12,"x":135,"y":454,"pageNo":0},"city_registration":{"type":"text","text":"","size":12,"x":290,"y":214,"pageNo":0},"state_registration":{"type":"text","text":"","size":12,"x":490,"y":214,"pageNo":0},"name":{"type":"text","text":"","x":162,"y":256,"size":12,"pageNo":0},"city_pob":{"type":"text","text":"","size":12,"x":292,"y":270,"pageNo":0},"state_pob":{"type":"text","text":"","size":12,"x":490,"y":270,"pageNo":0},"dob_p":{"type":"text","text":"","size":12,"x":115,"y":284,"pageNo":0},"fatherName":{"type":"text","text":"","x":120,"y":298,"size":12,"pageNo":0},"motherName":{"type":"text","text":"","x":124,"y":312,"size":12,"pageNo":0},"name_sp2":{"type":"text","text":"","x":162,"y":355,"size":12,"pageNo":0},"city_pob_sp2":{"type":"text","text":"","size":12,"x":292,"y":369,"pageNo":0},"state_pob_sp2":{"type":"text","text":"","size":12,"x":490,"y":369,"pageNo":0},"dob_p_sp2":{"type":"text","text":"","size":12,"x":115,"y":382,"pageNo":0},"fatherName_sp2":{"type":"text","text":"","x":120,"y":396,"size":12,"pageNo":0},"motherName_sp2":{"type":"text","text":" ","x":124,"y":410,"size":12,"pageNo":0},"revised_by":{"type":"text","text":"","size":12,"x":110,"y":580,"pageNo":0},"prepared_by":{"type":"text","text":"","size":12,"x":110,"y":566,"pageNo":0},"registration_officer":{"type":"text","text":"","size":12,"x":240,"y":678,"pageNo":0},"marriage_registration_officer":{"type":"text","text":"","size":12,"x":147,"y":467,"pageNo":0},"date_of_peticion":{"type":"text","text":"","size":12,"x":469,"y":580,"pageNo":0},"city_office":{"type":"text","text":" ","x":294,"y":510,"size":12,"pageNo":0},"state_office":{"type":"text","text":" ","x":490,"y":510,"size":12,"pageNo":0},"city2_registration":{"type":"text","text":"","size":12,"x":292,"y":439,"pageNo":0},"state2_registration":{"type":"text","text":"","size":12,"x":490,"y":439,"pageNo":0},"todayDate":{"type":"text","text":"","x":274,"y":749,"size":10,"pageNo":0},"signature":{"type":"image","uri":"","x":70,"y":785,"w":120,"h":80,"pageNo":0}}');function c(e){var t=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(t)}function u(e,t,i){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,n.Z)().mark((function e(t,i,o){var a,r,u,p,h,v,x,m,f,g,y,_;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d||[],(0,s._2)(t).map((function(e){a[e]&&t[e]&&(a[e].text=t[e])})),"https://www.hrmfinance.com/data/marriage_certificate.pdf",e.next=5,fetch("https://www.hrmfinance.com/data/marriage_certificate.pdf").then((function(e){return e.arrayBuffer()}));case 5:return r=e.sent,e.next=8,l.PDFDocument.load(r,{ignoreEncryption:!0});case 8:return u=e.sent,e.next=11,u.embedFont(l.StandardFonts.Helvetica);case 11:return p=e.sent,"https://www.hrmfinance.com/data/signature.png",e.next=15,fetch("https://www.hrmfinance.com/data/signature.png").then((function(e){return e.arrayBuffer()}));case 15:return h=e.sent,e.next=18,u.embedPng(h);case 18:if(v=e.sent,x=u.getPages(),m=x[0],f=m.getSize(),g=f.width,y=f.height,(0,s.Rz)("pdfSize",{width:g,height:y,pages:x.length}),o&&a&&(0,s._2)(a).map((function(e){var t=a[e];if(t){var i,n=t.pageNo,o=null===x||void 0===x||null===(i=x[n])||void 0===i?void 0:i.getSize();if("text"===t.type){var r;null===(r=x[n])||void 0===r||r.drawText(t.text?t.text.toString():"",{x:t.x,y:o.height-t.y,size:t.size||10,font:p,color:t.color?(0,l.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,l.rgb)(0,.1,.1)})}else if("textboxn"===t.type){var s=(t.text?t.text.toString():t.id.toString()).split("");null===s||void 0===s||s.map((function(e,i){var a;null===(a=x[n])||void 0===a||a.drawText(e,{x:t.x+i*t.space,y:o.height-t.y,size:t.size||10,font:p,color:t.color?(0,l.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,l.rgb)(0,.1,.1)})}))}else if("checkBox"===t.type){var d,c,u=(null===o||void 0===o?void 0:o.height)-t.y;null===(d=x[n])||void 0===d||d.moveTo(t.x+2,u),null===(c=x[n])||void 0===c||c.drawSvgPath("M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",{borderColor:t.color?(0,l.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,l.rgb)(0,0,0),borderWidth:1,scale:.5})}else"image"===t.type&&x[n].drawImage(v,{x:t.x,y:o.height-t.y,width:t.w,height:t.h})}})),!i){e.next=31;break}return e.next=27,u.save();case 27:return _=e.sent,e.abrupt("return",c(_));case 31:return e.abrupt("return",u.saveAsBase64({dataUri:!0}));case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=i(2647),v=i(3796),x=i(9760),m=i(24),f=i(184),g=(0,h.Np)(),y="marriage_certificate",_=(0,v.$Y)(),N=(0,m.f_)(),b=(0,v.t8)(),w=["folio","tomo","state_registration","registration_officer","revised_by","prepared_by","city_office","state_office","city_registration","dop","dom","marriage_registration_officer","spouse2Id"],z=function(e){e.data,e.elmId,e.updObs;var t,i,l,d,c,p,h,v,m,z,C,T,M,D,R=e.close,k=(0,r.useState)(!1),B=(0,a.Z)(k,2),O=B[0],S=B[1],Z=(0,r.useState)(0),F=(0,a.Z)(Z,2),L=(F[0],F[1]),E=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t,i,o,a,r,l,d,c,u,p,h,v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={query:"getScanDocumentsNotary",params:{":customerId":(0,s.bh)("upd_client").clientNotaryId,":documentType":"MCT"},queryString:"!* contain :customerId AND documentType contain :documentType"},i=(0,s.Bm)((0,s.uG)(),t),e.next=4,i;case 4:(o=e.sent)&&!o.error&&(a=(0,s._2)(o.data)[0],r=(0,s.bh)("upd_client"),o.data[a]?((0,s.Rz)(y,o.data[a]),(0,s.Rz)(y+"_bck",JSON.parse(JSON.stringify(o.data[a]))),c=I(r),(null===(l=o.data[a])||void 0===l?void 0:l.spouse1Id)===r.clientNotaryId?((0,s.Rz)("MCT_spouse1",c),p=I(null===(u=o.data[a])||void 0===u?void 0:u.spouse2Info),(0,s.Rz)("MCT_spouse1",c),(0,s.Rz)("MCT_spouse2",p)):(null===(d=o.data[a])||void 0===d?void 0:d.spouse2Id)===r.clientNotaryId&&(v=I(null===(h=o.data[a])||void 0===h?void 0:h.spouse1Info),(0,s.Rz)("MCT_spouse2",c),(0,s.Rz)("MCT_spouse1",v)),L((0,s.M5)())):(0,s.Rz)("MCT_spouse1",null));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){O||(S(!0),setTimeout((function(){E()}),50),L((0,s.M5)()))}));var G=function(e,t){var i=(0,s.bh)(y)||{};i[e]=t,(0,s.Rz)(y,i),L((0,s.M5)())},U=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t,i,o,a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},["name","city_pob","state_pob","dob","dateOfBirth","fatherName","motherName"].map((function(e){t[e+"_sp2"]=(0,s.bh)("MCT_spouse2")[e]})),(i=Object.assign({},(0,s.bh)(y),(0,s.bh)("MCT_spouse1"),t)).dom&&(o=new Date(i.dom).getTime())&&(i.date_of_married=(0,s.sG)(o)),i.dop&&(a=new Date(i.dop).getTime())&&(i.date_of_peticion=(0,s.sG)(a)),i.dateOfBirth&&(i.dob_p=(0,s.sG)(i.dateOfBirth)),i.dateOfBirth_sp2&&(i.dob_p_sp2=(0,s.sG)(i.dateOfBirth_sp2)),i.city2_registration=i.city_registration,i.state2_registration=i.state_registration,i.todayDate=(0,s.sJ)((new Date).getTime()),e.next=13,u(i,!0,!0);case 13:r=e.sent,window.open(r);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t,i,o,a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,s.bh)(y),i={},t.documentNotaryId?(o=(0,s.vy)(w,(0,s.bh)(y),(0,s.bh)(y+"_bck")),i={query:"updateDocumentsNotary",params:{documentNotaryId:t.documentNotaryId},data2update:o.data}):(t.spouse1Id=(0,s.bh)("upd_client").clientNotaryId,t.documentType="MCT",t.documentNotaryId=(0,s.M5)(),i={query:"addDocumentsNotary",form:t}),a=(0,s.Bm)((0,s.uG)(),i),e.next=6,a;case 6:(r=e.sent)&&r.data&&((0,s.Rz)(y,r.data),L((0,s.M5)()),R(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t={zIndex:450,props:{minHeight:"1vh",overlay:!0}};t.content=(0,f.jsx)(_,{handleClick:function(t){return function(e,t){G(t,e.clientNotaryId);var i=I(e);(0,s.Rz)("MCT_spouse2",i)}(t,e)}}),(0,x.OpenModal)(t)},q=function(e){var t={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};t.content=(0,f.jsx)(b,{updObs:L,confirm:function(t){return function(e,t){G(e,t)}(e,t)}}),(0,x.OpenModal)(t)};return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("p",{className:"form_title",children:"Traducion de Certificacion de Matrimonio"}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsx)("p",{className:"group_title addBtn",onClick:function(){return R(!1)},children:"cerrar"})]}),(0,f.jsxs)("div",{className:"_dsplFlx ",children:[(0,f.jsx)("button",{className:"group_title purple addBtn",onClick:A,children:"Guardar"}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsx)("button",{className:"group_title purple addBtn",onClick:U,children:"Imprimir"})]}),(0,f.jsx)("p",{className:"group_title",children:"Lugar y datos del Matrimonio"}),(0,f.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,f.jsx)(g,{init:null===(t=(0,s.bh)(y))||void 0===t?void 0:t.folio,label:"Folio",width:60,updChanges:function(e){return G("folio",e)}}),(0,f.jsx)(g,{init:null===(i=(0,s.bh)(y))||void 0===i?void 0:i.tomo,label:"Tomo",width:60,updChanges:function(e){return G("tomo",e)}}),(0,f.jsx)(N,{init:null===(l=(0,s.bh)(y))||void 0===l?void 0:l.dom,label:"Fecha de matrimonio",updDate:function(e){return G("dom",e)}}),(0,f.jsx)("div",{className:"_dsplFlx ",children:(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"label",onClick:function(){return q("marriage_registration_officer")},children:"Nombre de la Notaria:"}),(0,f.jsx)("div",{className:"date2Upd",children:null===(d=(0,s.bh)(y))||void 0===d?void 0:d.marriage_registration_officer})]})})]}),(0,f.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,f.jsx)(g,{init:null===(c=(0,s.bh)(y))||void 0===c?void 0:c.city_registration,label:"Municipio",width:240,updChanges:function(e){return G("city_registration",e)}}),(0,f.jsx)(g,{init:null===(p=(0,s.bh)(y))||void 0===p?void 0:p.state_registration,label:"Provincia",width:240,updChanges:function(e){return G("state_registration",e)}})]}),(0,f.jsx)("div",{className:"separator"}),(0,f.jsx)("p",{className:"group_title",children:"Oficina donde se solitito el Documento"}),(0,f.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,f.jsx)(N,{init:null===(h=(0,s.bh)(y))||void 0===h?void 0:h.dop,label:"Fecha de solicitud",updDate:function(e){return G("dop",e)}}),(0,f.jsx)(g,{init:null===(v=(0,s.bh)(y))||void 0===v?void 0:v.city_office,label:"Municipio",width:240,updChanges:function(e){return G("city_office",e)}}),(0,f.jsx)(g,{init:null===(m=(0,s.bh)(y))||void 0===m?void 0:m.state_office,label:"Provincia",width:240,updChanges:function(e){return G("state_office",e)}})]}),(0,f.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"22px 0 12px"},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"label",onClick:function(){return q("prepared_by")},children:"Preparado por:"}),(0,f.jsx)("div",{className:"date2Upd",children:null===(z=(0,s.bh)(y))||void 0===z?void 0:z.prepared_by})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"label",onClick:function(){return q("revised_by")},children:"Revisado por:"}),(0,f.jsx)("div",{className:"date2Upd",children:null===(C=(0,s.bh)(y))||void 0===C?void 0:C.revised_by})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"label",onClick:function(){return q("registration_officer")},children:"Firmado por:"}),(0,f.jsx)("div",{className:"date2Upd",children:null===(T=(0,s.bh)(y))||void 0===T?void 0:T.registration_officer})]})]}),(0,f.jsx)("div",{className:"separator"}),(0,f.jsxs)("div",{className:"_dsplFlx ",style:{margin:"9px 0"},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"group_title",children:"Conyuge (1)"}),(0,f.jsx)(j,{init:null===(M=(0,s.bh)("MCT_spouse1"))||void 0===M?void 0:M.name,label:"Nombre",width:360})]}),(0,f.jsx)("div",{className:"flexSpace"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"group_title",onClick:function(){return P("spouse2Id")},children:"Conyuge (2)"}),(0,f.jsx)(j,{init:null===(D=(0,s.bh)("MCT_spouse2"))||void 0===D?void 0:D.name,label:"Nombre",width:360})]})]})]})},j=function(e){var t=e.init,i=e.label,n=e.width,o=(0,r.useState)(!1),l=(0,a.Z)(o,2),d=l[0],c=l[1],u=(0,r.useState)(0),p=(0,a.Z)(u,2),h=(p[0],p[1]);return(0,r.useEffect)((function(){d||(c(!0),h((0,s.M5)()))})),t?(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"label",children:i}),(0,f.jsx)("div",{style:n?{width:n}:null,className:"r7gAOb yyJm8b",children:t})]}):null},I=function(e){var t,i,n,o,a,r,l,d,c,u,p,h;return{city_pob:null===e||void 0===e||null===(t=e.placeOfBirth)||void 0===t?void 0:t.city,state_pob:null===e||void 0===e||null===(i=e.placeOfBirth)||void 0===i?void 0:i.state,fatherName:null!==e&&void 0!==e&&null!==(n=e.fatherInfo)&&void 0!==n&&n.firstName?"".concat(null===e||void 0===e||null===(o=e.fatherInfo)||void 0===o?void 0:o.firstName," ").concat(null!==e&&void 0!==e&&null!==(a=e.fatherInfo)&&void 0!==a&&a.middleName?(null===e||void 0===e||null===(r=e.fatherInfo)||void 0===r?void 0:r.middleName)+" ":"").concat(null===e||void 0===e||null===(l=e.fatherInfo)||void 0===l?void 0:l.lastName," "):"",dob:null===e||void 0===e?void 0:e.dateOfBirth,dateOfBirth:(0,s.sG)(null===e||void 0===e?void 0:e.dateOfBirth),motherName:null!==e&&void 0!==e&&null!==(d=e.motherInfo)&&void 0!==d&&d.firstName?"".concat(null===e||void 0===e||null===(c=e.motherInfo)||void 0===c?void 0:c.firstName," ").concat(null!==e&&void 0!==e&&null!==(u=e.motherInfo)&&void 0!==u&&u.middleName?(null===e||void 0===e||null===(p=e.motherInfo)||void 0===p?void 0:p.middleName)+" ":"").concat(null===e||void 0===e||null===(h=e.motherInfo)||void 0===h?void 0:h.lastName," "):"",name:null!==e&&void 0!==e&&e.firstName?"".concat(null===e||void 0===e?void 0:e.firstName," ").concat(null!==e&&void 0!==e&&e.middleName?(null===e||void 0===e?void 0:e.middleName)+" ":"").concat(null===e||void 0===e?void 0:e.lastName," "):""}}}}]);
//# sourceMappingURL=2770.9ccdedf5.chunk.js.map