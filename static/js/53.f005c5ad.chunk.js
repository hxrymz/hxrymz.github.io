(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{178:function(e,n,t){"use strict";t.r(n);var a=t(31),i=t(2),o=t.n(i),c=t(9),l=t(15),s=t(5),r=t(0);n.default=function(e){var n=Object(i.useState)(!1),t=Object(a.a)(n,2),g=t[0],u=t[1];Object(l.c)(s.e),Object(l.b)();Object(i.useEffect)(function(){g||(u(!0),Object(r.ab)(function(){return b()}))});var b=function(){var e=window.gapi;e.load("auth2",function(){setTimeout(function(){e.signin2.render("google-signin-button",{width:232,height:40,longtitle:!0,hidden:!0,onsuccess:f,onfailure:m}),setTimeout(function(){f()},350)},350)})},m=function(e){console.log("onFail",e),f()},f=function(e){d(),setTimeout(function(){return d()},2650)},d=function(e){var n=window.gapi.auth2.getAuthInstance(),t=n&&n.currentUser.get(),a=t&&t.getAuthResponse();if(a&&a.id_token){Object(r.R)("gooSingInterval")&&(clearInterval(Object(r.R)("gooSingInterval")),Object(r.Db)("gooSingInterval",null));var i={params:{id_token:a.id_token,access_token:a.access_token},query:"getGoogleUserbyToken"};Object(r.R)("userProfile")&&Object(r.R)("userProfile").email||Object(c.getSectionByGtoken)(i)}else Object(r.R)("gooSingInterval_lastTime")+3e3<(new Date).getTime()&&Object(r.R)("gooSingInterval")&&(clearInterval(Object(r.R)("gooSingInterval")),Object(r.Db)("gooSingInterval",null),Object(r.Db)("singinView",1),Object(c.getDispatch)()(Object(s.o)()))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("style",null,"\n      \n        .jessie_nails\n        #google-signin-button{\n          background-color: #fef6f9;\n        }\n\n        .jessie_nails\n        .btnWrapp{\n          position: relative\n        }\n\n\n        .jessie_nails\n        .btnWrapp\n        .mask{\n          background-color: #fef6f9;\n          position: absolute\n        }\n      \n      "),g?o.a.createElement("div",{id:"g_signin2_bx jessie_nails"},o.a.createElement("div",{className:"login_message"},o.a.createElement("img",{src:"https://hrmfinance.com/favicon.png",alt:"Jessie"}),o.a.createElement("p",null,Object(r.ub)(220)),o.a.createElement("div",{className:"_dsplFlx"},o.a.createElement("div",{className:"flexSpace"}),o.a.createElement("div",{className:"btnWrapp"},o.a.createElement("div",{id:"google-signin-button","data-theme":"dark"}),o.a.createElement("div",{className:"mask"}))))):null)}}}]);
//# sourceMappingURL=53.f005c5ad.chunk.js.map