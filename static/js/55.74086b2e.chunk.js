(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{185:function(t,e,a){"use strict";a.r(e);var l=a(31),n=a(2),i=a.n(n),o=a(15),c=a(9),s=(a(37),a(0)),r=a(5),d={};e.default=function(){var t=Object(c.getComponentStore)().listWathDialog||{},e=(Object(o.c)(r.f),Object.keys(t));return i.a.createElement(i.a.Fragment,null,e.map(function(e){var a=t[e];return a&&a.visible?i.a.createElement(m,{dlg:a,dg:e,content:a.content}):null}))};var m=function(t){var e=t.dg,a=t.dlg,o=t.content,c=s.I(),r=s.R(),m=Object(n.useState)(!1),u=Object(l.a)(m,2),p=u[0],v=u[1],b=Object(n.useState)(0),f=Object(l.a)(b,2),w=(f[0],f[1],Object(n.useState)(!1)),y=Object(l.a)(w,2),g=(y[0],y[1],Object(n.useState)(!1)),x=Object(l.a)(g,2),h=(x[0],x[1],a.data),D=(r.detailVideoByID||h.item,window.location.hash.split("?")[1]?window.location.hash.split("?")[1]:null),I=(s.mb(D).title,h.dmz||{}),O=I.top,j=I.left,E=d&&d[e]&&d[e].lastScroll;"showing"===a.action&&E&&d[e].lastScroll;var k={width:0,transform:"translateX(".concat(j,"px) translateY(",1e3,"px) scaleX(0.4) scaleY(0.4) translateZ(0px)"),transition:"opacity 150ms ease, transform 150ms ease, -webkit-transform 150ms ease",top:0,left:0,opacity:0};k.width="calc(98vmin - 17px)",k.transform="translateX(calc(50vw - (calc(98vmin - 17px) / 2))) translateY(calc( 52em)) scaleX(1) scaleY(1) translateZ(0px)",k.transition="opacity 450ms ease, transform 450ms ease, -webkit-transform 450ms ease",k.marginBottom="2em",k.minWidth="350px",k.zIndex=a.zIndex||180,k.top=0,k.left=0,a.display&&(k.transform="translateX(calc(50vw - (calc(98vmin - 17px) / 2))) translateY(calc( 2em)) scaleX(1) scaleY(1) translateZ(0px)",k.opacity=1);var B="".concat(c[74],"_").concat(e,"_d");d[e]||(d[e]={});var S=function(t){var a=document.getElementById("data_ui_".concat(c[93])),l=d[e].lastScroll;d[e].isTitleDetail=!1;var n=d[e].timeOut;n&&(clearInterval(n),d[e].timeOut=null),t?(a.style.position="static",window.scrollTo(0,l),a.style.top=null,setTimeout(function(){s.Db("detailVideoByID",null),s.Db("seasonsbyVideoByID",null),s.Db("similarList",null)},240)):r.route_history&&setTimeout(function(){a.style.position="static",window.scrollTo(0,l),a.style.top=null,s.Db("detailVideoByID",null),s.Db("seasonsbyVideoByID",null),s.Db("similarList",null)},240)};Object(n.useEffect)(function(){if(!p){var a=document.getElementById("data_ui_".concat(c[93]));a.style.position="fixed";var l=s.G().scrollPosition;a.style.top=-1*l+"px",a.style.width="100%",window.scrollTo(0,0),d[e].lastScroll=l,v(!0),n=!0,"function"===typeof t.updTitleDetail&&t.updTitleDetail(n)}var n;s.yb("click",null),v(!0)});var T=null;o&&(T=i.a.cloneElement(o,{modalId:e,closePop:S}));var _={minHeight:"70vh"};return a.data&&a.data.minHeight&&(_={minHeight:a.data.minHeight}),i.a.createElement("div",{id:B,className:"focus-trap-wrapper previewModal--wrapper detail-modal",tabindex:"-1"},i.a.createElement("div",{tabIndex:"-1",style:{opacity:.96,zIndex:160}},i.a.createElement("div",{className:"previewModal--backDrop trnsp2",tabindex:"-1","data-uia":"previewModal--backDrop",onClick:function(){return function(t){var a=s.G().click,l=document.getElementById(B+"dialog"),n=d[e].timeOut;if(a&&a.target&&l){var i=a.target;n&&i.tagName&&l&&l.contains(i)||(S(),clearInterval(n),d[e].timeOut=null)}}()}})),i.a.createElement("div",{id:B+"dialog",role:"dialog","aria-modal":"true",tabindex:"-1",className:"previewModal--container  detail-modal",style:k},i.a.createElement("div",{className:"spaceTransparent",style:_,onClick:function(){return S()}}),T))}}}]);
//# sourceMappingURL=55.74086b2e.chunk.js.map