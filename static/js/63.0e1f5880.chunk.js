(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{172:function(e,t,a){"use strict";a.r(t);var l=a(31),n=a(2),c=a.n(n),r=a(5),i=a(15),o=a(0),s=(a(37),a(22)),m=Object(s.Icon_Cmpt)(),d=function(e){var t=Object(i.c)(r.h),a=Object(n.useState)(0),c=Object(l.a)(a,2),o=c[0],s=c[1];return t!==o&&(s(t),"function"===typeof e.scrollhandler&&e.scrollhandler(t)),Object(n.useEffect)(function(){"function"===typeof e.scrollhandler&&e.scrollhandler(t)},[]),null};t.default=function(e){var t=e.data,a=(e.ind,e.range),r=e.ItemComponent,i=e.tag,s=e.fV,u=e.checkIsLate,f=Object(n.useRef)(null),v=Object(n.useState)(!1),p=Object(l.a)(v,2),b=p[0],E=p[1],g=Math.ceil((new Date).getTime()/864e5),h=u&&1*s<g,_=u&&1*s===g,w=_?"btc_color":h?"activeRed":"green",y=u&&(_||h),N=s&&o.l(864e5*s);return c.a.createElement("div",{style:{minHeight:"".concat(230*t.lenght,'px"'),opacity:b?1:0},ref:f},c.a.createElement("div",{className:"formContainer ",style:{opacity:b?1:0}},b?c.a.createElement("div",{className:_?"urgent":h?"late":""},c.a.createElement("div",{className:"date_lbl _dsplFlx"},c.a.createElement("div",{className:"bar ".concat(w||"")}),c.a.createElement("span",null,N),y?c.a.createElement("div",{className:"deliveryAlert _dsplFlx  ".concat(_?"btc_color fillBack":h?"activeRed fillBack":"")},c.a.createElement("div",{className:"_dsplFlx"},c.a.createElement("div",{className:"icon_mov"},c.a.createElement(m,{name:"lightning_bolt_outline"}))),c.a.createElement("div",{className:"flexSpace"}),c.a.createElement("div",{className:"mov_type_title lblDd "},_?o.qb(96):h?o.qb(99):null)):null),t.map(function(e,t){var a=null;return r&&(a=c.a.cloneElement(r,{mvId:e,key:t+i})),c.a.createElement(c.a.Fragment,null,a||null)})):c.a.createElement(d,{scrollhandler:function(t){if(!b){var l=f.current;if(l){var n=o.gb(l).top;n>=t-100&&n<=t+window.innerHeight+(t>500?1600:0)&&(E(!0),e.updRange(a+6))}}}})))}}}]);
//# sourceMappingURL=63.0e1f5880.chunk.js.map