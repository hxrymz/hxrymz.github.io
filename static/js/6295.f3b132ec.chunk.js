"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6295],{6295:function(e,t,r){r.r(t);var n=r(1413),i=r(4165),a=r(5861),o=r(9439),c=r(2791),u=r(2350),s=r(1205),l=r(2647),d=r(24),p=r(184),f=(0,d.f_)(),h=(0,l.Np)(),v="driver_licence_translate",x=["dl_number","dl_issues","dl_exire","dl_type","endorsment","restriction"];t.default=function(e){e.data,e.elmId;var t,r,l,d,b,g,m,y=e.close,_=(0,c.useState)(!1),w=(0,o.Z)(_,2),j=w[0],D=w[1],N=(0,c.useState)(0),S=(0,o.Z)(N,2),z=(S[0],S[1]),L=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,r,n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={query:"getScanDocumentsNotary",params:{":customerId":(0,u.bh)("upd_client").clientNotaryId,":documentType":"DLT_Aff"},queryString:"customerId contain :customerId AND documentType contain :documentType"},r=(0,u.Bm)((0,u.uG)(),t),e.next=4,r;case 4:(n=e.sent)&&!n.error&&(a=(0,u._2)(n.data)[0],n.data[a]?((0,u.Rz)(v,n.data[a]),(0,u.Rz)(v+"_bck",JSON.parse(JSON.stringify(n.data[a]))),z((0,u.M5)())):((0,u.Rz)(v,null),z((0,u.M5)())));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){if(!j)return D(!0),(0,u.Rz)(v,null),z((0,u.M5)()),setTimeout((function(){L();var e=(0,n.Z)({},(0,u.bh)("upd_client")),t={dob:null===e||void 0===e?void 0:e.dob,dateOfBirth:null===e||void 0===e?void 0:e.dateOfBirth,name:null!==e&&void 0!==e&&e.firstName?"".concat(null===e||void 0===e?void 0:e.firstName," ").concat(null!==e&&void 0!==e&&e.middleName?(null===e||void 0===e?void 0:e.middleName)+" ":"").concat(null===e||void 0===e?void 0:e.lastName," "):""};(0,u.Rz)(v+"_userInfo",t),z((0,u.M5)())}),50),function(){(0,u.Rz)(v,null)}}));var Z=function(e,t){var r=(0,u.bh)(v)||{};r[e]=t,(0,u.Rz)(v,r),z((0,u.M5)())},O=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,r,n,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,u.bh)(v),r={},t.documentNotaryId?(n=(0,u.vy)(x,(0,u.bh)(v),(0,u.bh)(v+"_bck")),r={query:"updateDocumentsNotary",params:{documentNotaryId:t.documentNotaryId},data2update:n.data}):(t.customerId=(0,u.bh)("upd_client").clientNotaryId,t.documentType="DLT_Aff",t.documentNotaryId=(0,u.M5)(),r={query:"addDocumentsNotary",form:t}),a=(0,u.Bm)((0,u.uG)(),r),e.next=6,a;case 6:(o=e.sent)&&o.data&&((0,u.Rz)(v,o.data),z((0,u.M5)()),y(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,r,n,a,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=Object.assign({},(0,u.bh)(v),(0,u.bh)(v+"_userInfo"))).name&&(t.name_jury=t.name),t.dateOfBirth&&(t.dob_p=(0,u.sJ)(t.dateOfBirth)),t.dl_issues&&(t.dl_issue_p=(0,u.IB)(t.dl_issues)),t.dl_exire&&(t.dl_exp_p=(0,u.IB)(t.dl_exire)),t.ss||(t.SS="N/A"),r=t.translateDate?new Date(t.translateDate):new Date,n=r.getDate(),a=r.getFullYear().toString().slice(2,4),t.inter_date=(0,u.sJ)(r.getTime()),t.day_en_jury=n,t.day_es_jury=n,t.half_year_en_jury=a,t.half_year_es_jury=a,o=r.getMonth()+1,t.month_en_jury=u.f2.en[o],t.month_es_jury=u.f2.es[o],e.next=19,(0,s.iv)(t,!0,!0);case 19:c=e.sent,window.open(c);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{style:{maxHeight:"80vh",width:"800px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px 30px"},children:[(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("p",{className:"form_title",children:"Traducion de Licencia"}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("button",{className:"group_title addBtn purple",onClick:T,children:"Imprimir"})]}),(0,p.jsx)("p",{className:"group_title"}),(0,p.jsxs)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:[(0,p.jsx)(h,{init:null===(t=(0,u.bh)(v))||void 0===t?void 0:t.dl_number,label:"Numero de Licencia",width:160,updChanges:function(e){return Z("dl_number",e)}}),(0,p.jsx)(f,{init:null===(r=(0,u.bh)(v))||void 0===r?void 0:r.dl_issues,label:"Fecha de emicion",updDate:function(e){return Z("dl_issues",e)}}),(0,p.jsx)(f,{init:null===(l=(0,u.bh)(v))||void 0===l?void 0:l.dl_exire,label:"Fecha de expiracion",updDate:function(e){return Z("dl_exire",e)}})]}),(0,p.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,p.jsx)(h,{init:null===(d=(0,u.bh)(v))||void 0===d?void 0:d.dl_type,label:"Tipo de Licencia",width:650,updChanges:function(e){return Z("dl_type",e)}}),(0,p.jsx)(h,{init:null===(b=(0,u.bh)(v))||void 0===b?void 0:b.endorsment,label:"Aprobaci\xf3nes",width:650,updChanges:function(e){return Z("endorsment",e)}}),(0,p.jsx)(h,{init:null===(g=(0,u.bh)(v))||void 0===g?void 0:g.restriction,label:"Restriciones",width:650,updChanges:function(e){return Z("restriction",e)}})]}),(0,p.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:(0,p.jsx)(f,{init:null===(m=(0,u.bh)(v))||void 0===m?void 0:m.translateDate,label:"Fecha de la traduccion",updDate:function(e){return Z("translateDate",e)}})}),(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("button",{className:"group_title purple addBtn",onClick:O,children:"Guardar"})]})]})}},1205:function(e,t,r){r.d(t,{iv:function(){return p},lZ:function(){return l},zh:function(){return u}});var n=r(4165),i=r(5861),a=r(6963),o=r(2350);function c(e){var t=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(t)}function u(e,t,r){return s.apply(this,arguments)}function s(){return(s=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var u,s,l,d,p,f,h,v,x,b,g,m,y,_;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(null===(u=(0,o.bh)("print_structure"))||void 0===u?void 0:u.birth_certificate_struct_print)||[],(0,o._2)(t).map((function(e){s[e]&&t[e]&&(s[e].text=t[e])})),"https://www.hrmfinance.com/data/birth_certicate_tr.pdf",e.next=5,fetch("https://www.hrmfinance.com/data/birth_certicate_tr.pdf").then((function(e){return e.arrayBuffer()}));case 5:return l=e.sent,e.next=8,a.PDFDocument.load(l,{ignoreEncryption:!0});case 8:return d=e.sent,e.next=11,d.embedFont(a.StandardFonts.Helvetica);case 11:if(p=e.sent,f=(0,o.bh)("b64_signature"),h=null,!f){e.next=21;break}return e.next=17,fetch(f).then((function(e){return e.arrayBuffer()}));case 17:return v=e.sent,e.next=20,d.embedPng(v);case 20:h=e.sent;case 21:if(x=d.getPages(),b=x[0],g=b.getSize(),m=g.width,y=g.height,(0,o.Rz)("pdfSize",{width:m,height:y,pages:x.length}),i&&s&&(0,o._2)(s).map((function(e){var t=s[e];if(t){var r,n=t.pageNo,i=null===x||void 0===x||null===(r=x[n])||void 0===r?void 0:r.getSize();if("text"===t.type){var o;null===(o=x[n])||void 0===o||o.drawText(t.text?t.text.toString():"",{x:t.x,y:i.height-t.y,size:t.size||10,font:p,color:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,.1,.1)})}else if("textboxn"===t.type){var c=(t.text?t.text.toString():t.id.toString()).split("");null===c||void 0===c||c.map((function(e,r){var o;null===(o=x[n])||void 0===o||o.drawText(e,{x:t.x+r*t.space,y:i.height-t.y,size:t.size||10,font:p,color:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,.1,.1)})}))}else if("checkBox"===t.type){var u,l,d=(null===i||void 0===i?void 0:i.height)-t.y;null===(u=x[n])||void 0===u||u.moveTo(t.x+2,d),null===(l=x[n])||void 0===l||l.drawSvgPath("M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",{borderColor:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,0,0),borderWidth:1,scale:.5})}else"image"===t.type&&h&&x[n].drawImage(h,{x:t.x,y:i.height-t.y,width:t.w,height:t.h})}})),d.setTitle("Birth Certificate"),d.setAuthor("HRM finance"),d.setCreator(""),d.setCreationDate(new Date),d.setModificationDate(new Date),!r){e.next=38;break}return e.next=34,d.save();case 34:return _=e.sent,e.abrupt("return",c(_));case 38:return e.abrupt("return",d.saveAsBase64({dataUri:!0}));case 39:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t,r){return d.apply(this,arguments)}function d(){return d=(0,i.Z)((0,n.Z)().mark((function e(t,r,u){var s,l,d,p,f,h,v,x,b,g,m,y,_,w;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=(null===(s=(0,o.bh)("print_structure"))||void 0===s?void 0:s.preparer_details_struct_print)||[],(0,o._2)(t).map((function(e){l[e]&&t[e]&&(l[e].text=t[e])})),"https://www.hrmfinance.com/data/preparer_details.pdf",e.next=5,fetch("https://www.hrmfinance.com/data/preparer_details.pdf").then((function(e){return e.arrayBuffer()}));case 5:return d=e.sent,e.next=8,a.PDFDocument.load(d,{ignoreEncryption:!0});case 8:return p=e.sent,e.next=11,p.embedFont(a.StandardFonts.Helvetica);case 11:if(f=e.sent,h=p.getPages(),v=h[0],x=v.getSize(),b=x.width,g=x.height,(0,o.Rz)("pdfSize",{width:b,height:g,pages:h.length}),m=(0,o.bh)("b64_signature"),y=null,!m){e.next=25;break}return e.next=21,fetch(m).then((function(e){return e.arrayBuffer()}));case 21:return _=e.sent,e.next=24,p.embedPng(_);case 24:y=e.sent;case 25:if(u&&l&&(0,o._2)(l).map(function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,c,u,s,d,p,v,x,b;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=l[t])&&(c=r.pageNo,u=null===h||void 0===h||null===(i=h[c])||void 0===i?void 0:i.getSize(),"text"===r.type?(4,d=r.text?r.text.toString():"","todayDate"===t&&(d=(0,o.sJ)((new Date).getTime())),null===(s=h[c])||void 0===s||s.drawText(d,{x:r.x,y:u.height-r.y,size:r.size||10,font:f,color:r.color?(0,a.rgb)(r.color[0]/255,r.color[1]/255,r.color[2]/255):(0,a.rgb)(0,.1,.1)})):"textboxn"===r.type?null===(p=(r.text?r.text.toString():r.id.toString()).split(""))||void 0===p||p.map((function(e,t){var n;null===(n=h[c])||void 0===n||n.drawText(e,{x:r.x+t*r.space,y:u.height-r.y,size:r.size||10,font:f,color:r.color?(0,a.rgb)(r.color[0]/255,r.color[1]/255,r.color[2]/255):(0,a.rgb)(0,.1,.1)})})):"checkBox"===r.type?(4,b=(null===u||void 0===u?void 0:u.height)-r.y,"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",null===(v=h[c])||void 0===v||v.moveTo(r.x+2,b),null===(x=h[c])||void 0===x||x.drawSvgPath("M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",{borderColor:r.color?(0,a.rgb)(r.color[0]/255,r.color[1]/255,r.color[2]/255):(0,a.rgb)(0,0,0),borderWidth:1,scale:.5})):"image"===r.type&&y&&h[c].drawImage(y,{x:r.x,y:u.height-r.y,width:r.w,height:r.h}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),!r){e.next=33;break}return e.next=29,p.save();case 29:return w=e.sent,e.abrupt("return",c(w));case 33:return e.abrupt("return",p.saveAsBase64({dataUri:!0}));case 34:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function p(e,t,r){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var u,s,l,d,p,f,h,v,x,b,g,m,y,_;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(null===(u=(0,o.bh)("print_structure"))||void 0===u?void 0:u.dl_trns_struct_print)||[],(0,o._2)(t).map((function(e){s[e]&&t[e]&&(s[e].text=t[e])})),"https://www.hrmfinance.com/data/94_197.pdf",e.next=5,fetch("https://www.hrmfinance.com/data/94_197.pdf").then((function(e){return e.arrayBuffer()}));case 5:return l=e.sent,e.next=8,a.PDFDocument.load(l,{ignoreEncryption:!0});case 8:return d=e.sent,e.next=11,d.embedFont(a.StandardFonts.Helvetica);case 11:if(p=e.sent,f=(0,o.bh)("b64_signature"),h=null,!f){e.next=21;break}return e.next=17,fetch(f).then((function(e){return e.arrayBuffer()}));case 17:return v=e.sent,e.next=20,d.embedPng(v);case 20:h=e.sent;case 21:if(x=d.getPages(),b=x[0],g=b.getSize(),m=g.width,y=g.height,(0,o.Rz)("pdfSize",{width:m,height:y,pages:x.length}),i&&s&&(0,o._2)(s).map((function(e){var t=s[e];if(t){var r,n=t.pageNo,i=null===x||void 0===x||null===(r=x[n])||void 0===r?void 0:r.getSize();if("text"===t.type){var o;null===(o=x[n])||void 0===o||o.drawText(t.text?t.text.toString():"",{x:t.x,y:i.height-t.y,size:t.size||10,font:p,color:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,.1,.1)})}else if("textboxn"===t.type){var c=(t.text?t.text.toString():t.id.toString()).split("");null===c||void 0===c||c.map((function(e,r){var o;null===(o=x[n])||void 0===o||o.drawText(e,{x:t.x+r*t.space,y:i.height-t.y,size:t.size||10,font:p,color:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,.1,.1)})}))}else if("checkBox"===t.type){var u,l,d=(null===i||void 0===i?void 0:i.height)-t.y;null===(u=x[n])||void 0===u||u.moveTo(t.x+2,d),null===(l=x[n])||void 0===l||l.drawSvgPath("M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",{borderColor:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,0,0),borderWidth:1,scale:.5})}else"image"===t.type&&h&&x[n].drawImage(h,{x:t.x,y:i.height-t.y,width:t.w,height:t.h})}})),d.setTitle("INTERPRETER AFFIDAVIT OF A FOREIGN CONTRY DRIVER LICENSE"),d.setAuthor("HRM finance"),d.setCreator(""),d.setCreationDate(new Date),d.setModificationDate(new Date),!r){e.next=38;break}return e.next=34,d.save();case 34:return _=e.sent,e.abrupt("return",c(_));case 38:return e.abrupt("return",d.saveAsBase64({dataUri:!0}));case 39:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},4942:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(9142);function i(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1413:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(4942);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=6295.f3b132ec.chunk.js.map