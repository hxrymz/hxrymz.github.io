"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5530,9760],{9760:function(e,i,l){l.r(i),l.d(i,{CloseModal:function(){return r},OpenModal:function(){return d},default:function(){return s}});var t=l(2791),n=l(5408),a=l(2350),o=l(184),s=function(){var e=(0,a.bh)("listDialog")||{},i=((0,n.Z)("listDialog_h392"),Object.keys(e));return(0,o.jsx)(o.Fragment,{children:i.map((function(i,l){var n=e[i];if(n&&n.visible){var a={};n.height&&(a.heigth=n.height),n.width,n.zIndex&&(a.zIndex=n.zIndex-1);var s={zIndex:n.zIndex},d=null,c=n.data;return n.content&&(d=t.cloneElement(n.content,{data:c})),(0,o.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,o.jsx)("div",{className:"ltr-hoe9xz",children:(0,o.jsx)("div",{className:"ltr-1wao6ny",style:s,id:i,children:d})}),n.data.overlay?(0,o.jsx)("div",{className:"DialogHRMOverlay ".concat(n.visible?"active":""),onClick:function(){var e;e=i,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},i)}}))})},d=function(e){var i=(0,a.bh)("listDialog")||{},l=(0,a.M5)();i[l]||(i[l]={}),i[l].visible=!0;var t={};e.props?(t=e.props).modalID=l:t.modalID=l;var n=document.getElementsByTagName("body")[0];null!==n&&void 0!==n&&n.style&&(n.style.overflowY="hidden"),i[l].isView=e.isView,i[l].observeResize=e.observeResize,i[l].observeResize&&(i[l].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(l,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===i[l].width&&t.height===i[l].height||(i[l].height=t.height+10,i[l].width=t.width,(0,a.Rz)("listDialog",i),(0,a.wt)("listDialog_h392")))}),200)),i[l].display=!0,e.zIndex&&(i[l].zIndex=e.zIndex),e.height&&(i[l].height=e.height),e.width&&(i[l].width=e.width),e.content&&(i[l].content=e.content),i[l].data=t,(0,a.Rz)("listDialog",i),(0,a.wt)("listDialog_h392"),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",l),(0,a.wt)("listDialog_h392")}),125)},r=function(e){var i,l,t,n=(0,a.bh)("listDialog")||{},o=e.id;n[o]&&(n[o].observeResize&&n[o].observeInterval&&clearInterval(n[o].observeInterval),n[o].display=!1,null===(i=n[o])||void 0===i||null===(l=i.data)||void 0===l||null===(t=l.closeEvent)||void 0===t||t.call(l),(0,a.Rz)("listDialog",n),delete n[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)("listDialog_h392"),setTimeout((function(){delete n[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},3032:function(e,i,l){l.d(i,{l:function(){return n}});var t=l(799);function n(){return(0,t.ZP)((function(){return Promise.all([l.e(6963),l.e(9501)]).then(l.bind(l,9501))}))}},5530:function(e,i,l){l.r(i);var t=l(9439),n=l(2791),a=l(2350),o=(l(4268),l(3796)),s=l(285),d=l(3032),r=l(9760),c=l(184),u=(0,o.km)(),v=(0,s.q)(),h=(0,d.l)(),m="upd_client",f=function(e){e.data,e.elmId;var i,l,o,s,d,r,u,v,h,f,b,p,j,g,N,w,y,I,z,C,D,S,_,M,k,A,B,T,O,R,E,Z,P,F,L,q=e.openUpd,H=e.openBCT,U=e.openMCT,V=e.close,Y=(0,n.useState)(!1),G=(0,t.Z)(Y,2),J=G[0],K=G[1],Q=(0,n.useState)(0),W=(0,t.Z)(Q,2),X=(W[0],W[1]);return(0,n.useEffect)((function(){J||(K(!0),X((0,a.M5)()))})),(0,c.jsxs)("div",{className:"detailClient",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Detalles"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:function(){return V(!1)},children:"cerrar"})]}),(0,c.jsx)(x,{init:null===(i=(0,a.bh)(m))||void 0===i?void 0:i.phoneNumber,label:"Telefono",width:320}),(0,c.jsx)(x,{init:null===(l=(0,a.bh)(m))||void 0===l?void 0:l.firstName,label:"Nombre",width:520}),(0,c.jsx)(x,{init:null===(o=(0,a.bh)(m))||void 0===o?void 0:o.middleName,label:"Segundo Nombre",width:520}),(0,c.jsx)(x,{init:null===(s=(0,a.bh)(m))||void 0===s?void 0:s.lastName,label:"Apellidos",width:520}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,c.jsx)(x,{init:null===(d=(0,a.bh)(m))||void 0===d?void 0:d.genre,label:"Sexo",width:120}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{style:{marginTop:30},children:null!==(r=(0,a.bh)(m))&&void 0!==r&&r.dateOfBirth?(0,a.sG)(null===(u=(0,a.bh)(m))||void 0===u?void 0:u.dateOfBirth):""})]}),(0,c.jsx)("p",{className:"group_title",children:"Lugar de Nacimiento"}),(0,c.jsx)(x,{init:null===(v=(0,a.bh)(m))||void 0===v||null===(h=v.placeOfBirth)||void 0===h?void 0:h.city,label:"Municipio",width:360}),(0,c.jsx)(x,{init:null===(f=(0,a.bh)(m))||void 0===f||null===(b=f.placeOfBirth)||void 0===b?void 0:b.state,label:"Provincia",width:360}),(0,c.jsx)("div",{className:"separator"}),(0,c.jsx)("p",{className:"group_title",children:"Recidencia Actual"}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,c.jsx)(x,{init:null===(p=(0,a.bh)(m))||void 0===p||null===(j=p.currentAddress)||void 0===j?void 0:j.No,label:"No Casa",width:60}),(0,c.jsx)(x,{init:null===(g=(0,a.bh)(m))||void 0===g||null===(N=g.currentAddress)||void 0===N?void 0:N.apto,label:"Apt  (opt)",width:60}),(0,c.jsx)(x,{init:null===(w=(0,a.bh)(m))||void 0===w||null===(y=w.currentAddress)||void 0===y?void 0:y.zipcode,label:"Codigo Postal",width:60})]}),(0,c.jsx)(x,{init:null===(I=(0,a.bh)(m))||void 0===I||null===(z=I.currentAddress)||void 0===z?void 0:z.street,label:"Calle",width:520}),(0,c.jsx)(x,{init:null===(C=(0,a.bh)(m))||void 0===C||null===(D=C.currentAddress)||void 0===D?void 0:D.city,label:"Ciudad o Municipio",width:520}),(0,c.jsx)(x,{init:null===(S=(0,a.bh)(m))||void 0===S||null===(_=S.currentAddress)||void 0===_?void 0:_.state,label:"Estado o Provincia",width:520}),(0,c.jsx)("div",{className:"separator"}),(0,c.jsx)("p",{className:"group_title",children:"Padres"}),(0,c.jsx)(x,{init:(null===(M=(0,a.bh)(m))||void 0===M||null===(k=M.fatherInfo)||void 0===k?void 0:k.firstName)&&"".concat(null===(A=(0,a.bh)(m))||void 0===A||null===(B=A.fatherInfo)||void 0===B?void 0:B.firstName," ").concat(null===(T=(0,a.bh)(m))||void 0===T||null===(O=T.fatherInfo)||void 0===O?void 0:O.lastName),label:"Padre",width:520}),(0,c.jsx)(x,{init:(null===(R=(0,a.bh)(m))||void 0===R||null===(E=R.motherInfo)||void 0===E?void 0:E.firstName)&&"".concat(null===(Z=(0,a.bh)(m))||void 0===Z||null===(P=Z.motherInfo)||void 0===P?void 0:P.firstName," ").concat(null===(F=(0,a.bh)(m))||void 0===F||null===(L=F.motherInfo)||void 0===L?void 0:L.lastName),label:"Madre",width:520}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{className:"card",children:(0,c.jsx)("button",{onClick:function(){return H()},children:"Certificado Nacimiento"})}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"card",children:(0,c.jsx)("button",{onClick:function(){return U()},children:"Certificado Matrimonio"})}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"card",children:(0,c.jsx)("button",{onClick:function(){return q(!0)},children:"Actualizar"})})]})]})};i.default=function(e){e.data,e.elmId,e.updObs;var i=e.close,l=(0,n.useState)(!1),o=(0,t.Z)(l,2),s=o[0],d=o[1],m=(0,n.useState)(0),x=(0,t.Z)(m,2),b=(x[0],x[1]),p=(0,n.useState)(!1),j=(0,t.Z)(p,2),g=j[0],N=j[1],w=(0,n.useState)(!1),y=(0,t.Z)(w,2),I=y[0],z=y[1];(0,n.useEffect)((function(){s||(d(!0),b((0,a.M5)()))}));var C=function(){z(!1),N(!1)};return g?(0,c.jsx)(v,{close:function(){return N(!1)}}):I?(0,c.jsx)(h,{close:function(){return z(!1)}}):(0,c.jsx)(f,{close:i,openUpd:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,c.jsx)(u,{}),(0,r.OpenModal)(e)},openBCT:function(){C(),z(!0)},openMCT:function(){C(),N(!0)}})};var x=function(e){var i=e.init,l=e.label,o=e.width,s=(0,n.useState)(!1),d=(0,t.Z)(s,2),r=d[0],u=d[1],v=(0,n.useState)(0),h=(0,t.Z)(v,2),m=(h[0],h[1]);return(0,n.useEffect)((function(){r||(u(!0),m((0,a.M5)()))})),i?(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"label",children:l}),(0,c.jsx)("div",{style:o?{width:o}:null,className:"r7gAOb yyJm8b",children:i})]}):null}},285:function(e,i,l){l.d(i,{q:function(){return n}});var t=l(799);function n(){return(0,t.ZP)((function(){return Promise.all([l.e(6963),l.e(2770)]).then(l.bind(l,2770))}))}},4268:function(){}}]);
//# sourceMappingURL=5530.f7c62a70.chunk.js.map