(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{88:function(e,t,n){"use strict";n.r(t);var a=n(31),c=n(2),l=n.n(c),i=(n(15),n(9)),s=n(0),o=n(22),r=Object(o.Icon_Cmpt)();t.default=function(e){var t=e.navigation,n=e.loading,o=e.operations,u=t||{},m=u.total,d=u.limit,p=u.page,v=u.sortBy,f=v&&v.split(".")&&v.split(".")[1],E=!(!f||"desc"!==f),N=p&&p>=1?p:1,J=d||50,g=m||0,b=(N-1)*J<g?(N-1)*J:g,y=N*J<=g?N*J:g,O=!1,_=!1;N<Math.ceil(g/J)&&(O=!0),N>1&&(_=!0);var h=s.R(),C=h.keys,S=(h.maskClassName,C[19]),T=C[39],k=C[59],j=Object(c.useState)(!1),w=Object(a.a)(j,2),z=w[0],I=w[1],F=Object(c.useState)(!1),B=Object(a.a)(F,2),M=B[0],D=B[1],R=Object(c.useState)(!1),W=Object(a.a)(R,2),x=(W[0],W[1],function(e){var t=document.getElementById(S),n=document.getElementById(T),a=e.toElement||e.relatedTarget||e.target;if(a.document)setTimeout(function(){I(!1)},80);else try{n.contains(a)||t.contains(a)||setTimeout(function(){I(!1)},80)}catch(e){}}),L=function(t){if(E!==t){var n=h.navigations||{};n[o]||(n[o]={});var a=v.split(".")[0],c=t?"desc":"asc";n[o].sortBy="".concat(a,".").concat(c),s.Db("navigations",n),Object(i.updObserveChanges)(),"function"===typeof e.fethOp&&(e.fethOp(),I(!1))}},A=function(t){if((d||50)!==t){var n=h.navigations||{};n[o]||(n[o]={}),n[o].limit=t,s.Db("navigations",n),Object(i.updObserveChanges)(),"function"===typeof e.fethOp&&(e.fethOp(),D(!1))}};return l.a.createElement("div",{className:"nH aqK"},l.a.createElement("div",{className:"navigator_bar"},l.a.createElement("div",{className:"navigator_controls ".concat(z?"_visible":""," ")},l.a.createElement("span",{className:"navigator_controls_span"},l.a.createElement("div",{className:"flexSpace"}),l.a.createElement("div",null,l.a.createElement("div",{className:"_dsplFlx"},l.a.createElement("div",{id:"".concat(S),className:"_navigation_counters",onMouseEnter:function(e){setTimeout(function(){I(!0)},80)},onMouseLeave:function(e){return x(e)}},n?l.a.createElement("div",{className:"_counters_Wrp"},l.a.createElement("div",null,"loading ... ")):l.a.createElement("div",{className:"_counters_Wrp _dsplFlx"},l.a.createElement("span",null,b)," ",l.a.createElement("span",null,l.a.createElement(r,{name:"minus",color:"#555",size:10}))," ",l.a.createElement("span",null,y)," ",l.a.createElement("span",{className:"_counters_OF"}," de ")," ",l.a.createElement("span",null,g))),l.a.createElement("div",{className:"_navigation_actions"},l.a.createElement("div",{className:"IconRippleEffectContainer",onClick:function(){p>1&&setTimeout(function(){var t=h.navigations||{};t[o]||(t[o]={}),t[o].page=p-1,s.Db("navigations",t),Object(i.updObserveChanges)(),"function"===typeof e.fethOp&&e.fethOp()},40)}},l.a.createElement(r,{name:"arrow_left",color:_?"#555":"#d5d5d5",size:20,ripple:_})),l.a.createElement("div",{className:"IconRippleEffectContainer",onClick:function(){return function(t){var n=Math.floor(m/d);p<=n&&setTimeout(function(){var t=h.navigations||{};t[o]||(t[o]={}),t[o].page=p+1,s.Db("navigations",t),Object(i.updObserveChanges)(),"function"===typeof e.fethOp&&e.fethOp()},40)}()}},l.a.createElement(r,{name:"arrow_right",color:O?"#555":"#d5d5d5",size:20,ripple:O})),l.a.createElement("div",{className:"IconRippleEffectContainer",onClick:function(){return function(e){var t=!M;setTimeout(function(){D(t)},80)}()}},l.a.createElement(r,{name:"setting",color:"#555",size:20,ripple:!0})))),l.a.createElement("div",{id:"".concat(T),className:"popFloat",onMouseLeave:function(e){return x(e)}},z&&l.a.createElement("div",{class:"popFloatWrapper AX",style:{userSelect:"none"}},l.a.createElement("div",{id:":110",className:"J-N ".concat(E?"J-N-JE":"J-N-JT"),role:"menuitem",style:{userSelect:"none"},"aria-disabled":!E,onClick:function(e){return L(!0)}},l.a.createElement("div",{class:"J-N-Jz",style:{userSelect:"none"}},s.ub(308))),l.a.createElement("div",{id:":113",className:"J-N ".concat(E?"J-N-JT":"J-N-JE"),role:"menuitem","aria-disabled":!!E,style:{userSelect:"none"},onClick:function(e){return L(!1)}},l.a.createElement("div",{class:"J-N-Jz",style:{userSelect:"none"}},s.ub(307))))),l.a.createElement("div",{id:"".concat(k),className:"popFloat ".concat(M?"_show":""),onMouseLeave:function(e){return function(e){document.getElementById(S);var t=document.getElementById(k),n=e.toElement||e.relatedTarget||e.target;if(n.document)setTimeout(function(){D(!1)},80);else try{t.contains(n)||setTimeout(function(){D(!1)},80)}catch(e){}}(e)}},M&&l.a.createElement("div",{class:"popFloatWrapper AX",style:{userSelect:"none"}},l.a.createElement("div",{id:":110",className:"J-N ".concat(50!==d?"J-N-JT":"J-N-JE"),role:"menuitem",style:{userSelect:"none"},"aria-disabled":!E,onClick:function(e){return A(50)}},l.a.createElement("div",{class:"J-N-Jz",style:{userSelect:"none"}},50)),l.a.createElement("div",{id:":113",className:"J-N ".concat(100!==d?"J-N-JT":"J-N-JE"),role:"menuitem","aria-disabled":!!E,style:{userSelect:"none"},onClick:function(e){return A(100)}},l.a.createElement("div",{class:"J-N-Jz",style:{userSelect:"none"}},100)),l.a.createElement("div",{id:":113",className:"J-N ".concat(150!==d?"J-N-JT":"J-N-JE"),role:"menuitem","aria-disabled":!!E,style:{userSelect:"none"},onClick:function(e){return A(150)}},l.a.createElement("div",{class:"J-N-Jz",style:{userSelect:"none"}},150)))))))))}}}]);
//# sourceMappingURL=39.c9c52f80.chunk.js.map