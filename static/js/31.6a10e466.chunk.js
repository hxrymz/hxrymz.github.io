(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{42:function(e,a,t){"use strict";t.r(a);var l=t(31),c=t(2),n=t.n(c),s=(t(15),t(4)),r=(t(37),t(0)),_=t(9),m=Object(s.a)(function(){return t.e(14).then(t.bind(null,82))});a.default=function(e){var a=e.closePop,t=Object(c.useState)(1),s=Object(l.a)(t,2),i=s[0],d=s[1],o=r.R(),p="add_remesa",u=r.H(p)||{},E=r.M(),v=u.currency||"CUP",b=u.name||"",N=u.delivery||"",x=u.detinationName||"",y=u.detinationPhoneNumber||"",F=u.phoneNumber||"",f=u.email||"",C=u.cardNumber||"",w=u.amount||"",A=u.cid||"",g=" ".concat(u.address,", ").concat(u.city,", ").concat(u.state)||!1,P=u.paymentMethod||"",h=E[P],D=o.rateCurrency,L=D&&D[v],j=0,O=0;return L&&(j=w*L.pay,O=w*L.delivery),n.a.createElement(n.a.Fragment,null,n.a.createElement("style",null,"\n\n        .palette{\n            --base-color: rgb(94, 53, 177,1);\n            --base-color-gradient: 94, 53, 177;\n        }\n\n        "),n.a.createElement("div",{className:"paymentView boxCard palette"},n.a.createElement("div",{className:"slideWrp"},n.a.createElement("div",{className:"option__edit_payments"},n.a.createElement("div",{className:"__body__"},n.a.createElement("div",{className:"formContainer",style:{opacity:1===i?1:0}},1===i?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"titlePaymentheader  flexColor _dsplFlx spaceAround"},"".concat(r.ub(31))),n.a.createElement("div",{className:"pym81b bxPyDt"},n.a.createElement("div",{className:"_labelBx"},"Recibe"),n.a.createElement("div",{className:"__Label_description__ _dsplFlx"},"".concat(r.ub(32),": ")),n.a.createElement("div",{className:"__title_description__ _dsplFlx "},x),n.a.createElement("div",{className:"__Label_description__ _dsplFlx"},"".concat(r.ub(33),": ")),n.a.createElement("div",{className:"__title_description__ _dsplFlx "},y),n.a.createElement("div",{className:"__Label_description__ _dsplFlx"},"".concat(N,": ")),n.a.createElement("div",{className:"pym81b bxPyDt"},"Entrega"===N?n.a.createElement("div",{className:"__cI__ _dsplFlx "},"CI: ".concat(A)):null,"Deposito"===N?n.a.createElement("div",{className:"__title_body__  flexColor _dsplFlx spaceAround"},C):null,"Deposito"!==N?n.a.createElement("div",{className:"_address_  flexColor _dsplFlx spaceAround"},g):null,n.a.createElement("div",{className:"__pay_amount__  flexColor _dsplFlx spaceAround"},"".concat(O&&O.toFixed(2),"  ").concat(v)))),n.a.createElement("div",{className:"pym81b bxPyDt"},n.a.createElement("div",{className:"_labelBx"},"Envia"),n.a.createElement("div",{className:"__Label_description__ _dsplFlx"},"".concat(r.ub(21),": ")),n.a.createElement("div",{className:"__title_description__ _dsplFlx "},b),n.a.createElement("div",{className:"__Label_description__ _dsplFlx"},"".concat(r.ub(33),": ")),n.a.createElement("div",{className:"__title_description__ _dsplFlx "},F),n.a.createElement("div",{className:"__title_description__ _dsplFlx "},f),n.a.createElement("div",{className:"__minimun__pay__Wrapper__"},n.a.createElement("div",{className:"__Label_description__ _dsplFlx"},"".concat(r.ub(35),": ")),n.a.createElement("div",{className:"pym81b bxPyDt"},n.a.createElement("div",{className:"__minimun__pay__ _dsplFlx spaceAround"},n.a.createElement("img",{class:"icon-product lazy-img js-only",alt:P,src:h&&h.url})),n.a.createElement("div",{className:"__pay_amount__  flexColor _dsplFlx spaceAround"},"$".concat(j&&j.toFixed(2)))),n.a.createElement("div",{className:"  _dsplFlx spaceAround"},n.a.createElement("div",{className:"  _dsplFlx _currentprice  box_alert green_alert tCambio"},n.a.createElement("span",null," ","".concat(r.ub(25),": ")," "),n.a.createElement("span",{className:" _cpBtcn"},L?"".concat(L.delivery).concat(v," X ").concat(L.pay,"USD"):""))))),n.a.createElement("div",{className:"_w100  _dsplFlx spaceAround"},n.a.createElement("div",{className:"paddField"},n.a.createElement(m,{title:"".concat(r.ub(7)),theme:"purple",icon:"send",clickEvent:function(){return function(e){d(2),window.scrollTo(0,0);var a=u;a.date=(new Date).getTime()}()}})))):null),n.a.createElement("div",{className:"formContainer",style:{opacity:2===i?1:0}},2===i?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"__title_description__ _dsplFlx  spaceAround "},"".concat(r.ub(36))),n.a.createElement("div",{className:"__minimun__pay__Wrapper__"},n.a.createElement("div",{className:"pym81b bxPyDt"},n.a.createElement("div",{className:"_title_confirm  flexColor _dsplFlx spaceAround"},"".concat(r.ub(37))),n.a.createElement("div",{className:"__minimun__pay__ _dsplFlx spaceAround"},n.a.createElement("img",{class:"icon-product lazy-img js-only",alt:P,src:h&&h.url})),n.a.createElement("div",{className:"_dsplFlx spaceAround"},n.a.createElement("div",{className:"_txt_confirm flexColor"},n.a.createElement("span",{className:""},"".concat(r.ub(3)," ")),n.a.createElement("span",{className:"_email_confirm"},f),n.a.createElement("span",{className:""}," ".concat(r.ub(4))))))),n.a.createElement("div",{className:"_w100  _dsplFlx spaceAround"},n.a.createElement("div",{className:"paddField"},n.a.createElement(m,{title:"".concat(r.ub(38)),theme:"purple",icon:"home",clickEvent:function(){"function"===typeof e.closePop&&(setTimeout(function(){return window.scrollTo(0,0)},325),a(),r.zb(p,{amount:100,currency:"MLC"}),Object(_._updFormObs)())}})))):null))))))}}}]);
//# sourceMappingURL=31.6a10e466.chunk.js.map