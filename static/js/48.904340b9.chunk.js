(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{169:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(6),c=a.n(o),i=a(150),l=a(21),s=a.n(l),u=a(40),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},v=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=f(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!m(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},f(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(u.b)(t,null,null,o.location):t,i=o.createHref(c);return r.a.createElement("a",p({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(r.a.Component);v.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},v.defaultProps={replace:!1},v.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired};var d=v,b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var h=function(e){var t=e.to,a=e.exact,n=e.strict,o=e.location,c=e.activeClassName,l=e.className,s=e.activeStyle,u=e.style,p=e.isActive,f=e["aria-current"],m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),v="object"===("undefined"===typeof t?"undefined":y(t))?t.pathname:t,h=v&&v.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return r.a.createElement(i.a,{path:h,exact:a,strict:n,location:o,children:function(e){var a=e.location,n=e.match,o=!!(p?p(n,a):n);return r.a.createElement(d,b({to:t,className:o?[l,c].filter(function(e){return e}).join(" "):l,style:o?b({},u,s):u,"aria-current":o&&f||null},m))}})};h.propTypes={to:d.propTypes.to,exact:c.a.bool,strict:c.a.bool,location:c.a.object,activeClassName:c.a.string,className:c.a.string,activeStyle:c.a.object,style:c.a.object,isActive:c.a.func,"aria-current":c.a.oneOf(["page","step","location","date","time","true"])},h.defaultProps={activeClassName:"active","aria-current":"page"};t.a=h},184:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(3),c=a(31),i=a(2),l=a.n(i),s=a(15),u=a(0),p=a(10),f=a(169),m=a(22),v=a(5),d=Object(m.Icon_Cmpt)(),b={marketplace:0,orders_history:1,shopping_cart:2,dashboard:3,inventory:4,agents:5,stores:6,users:7,receivers:7,deliverys:9,logout:10};t.default=function(e){Object(s.c)(v.e);var t=e.data,a=(e.operation,u.P()),n=a.navIndex,r=function(e){Object(p.updObserveChanges)(),j(t.modalID)},o=function(e,t){u.zb("navIndex",e),10===e?(r(),u.X(function(){return y()}),u.zb("userProfile",null),u.zb("shopping_cart",{}),Object(p.updObserveChanges)(),Object(p.getAnonymus)()):r()},m=n||0,h=Object(i.useState)(!1),g=Object(c.a)(h,2),O=g[0],w=g[1],j=function(e){Object(p.CloseSlideMenu)({id:e})};Object(i.useEffect)(function(){if(!O){var e=window.location.hash.split("#")[1],t=e&&e.split("?")[0]&&e.split("?")[0].split("/")[1],a=b[t];u.zb("navIndex",a),Object(p.updObserveChanges)(),w(!0)}});var E=a.thumbnailJsonBlob&&a.thumbnailJsonBlob["qvaMarket_logo2.png"],C=E&&E.requested?E.blob:null,x=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header_title"},l.a.createElement(f.a,{to:{pathname:"/marketplace"}},l.a.createElement("div",{className:"_dsplFlx"},C?l.a.createElement("img",{src:C,alt:"qvaMarket"}):null,l.a.createElement("div",{className:"title"},"QvaMarkets"))))),k=u.mb(),N=a.userProfile;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",Object.assign({className:"menuslide_wrp"},t.modalID?{"dialog-key-id":t.modalID}:""),x,l.a.createElement("div",{className:"loT5Qd xwW5Ce FxfUvb xvt5Cx"},k.map(function(e,t){var n=m===t;if(e.isR){var r=e.inventory&&a.allowInventory,c=e.onlyAgent&&a.allowInventory,i=e.onlyAgent&&a.isqvmAgent,s=e.onlyDrivers&&a.isDelivery,p=e.onlyStore&&a.isStore,v=!1;return(u.c()||r||c||i||s||p)&&(v=!0),v?l.a.createElement(f.a,{to:{pathname:e.path},onClick:function(){return o(t)},key:t+"sld_mn"},l.a.createElement("div",{className:"DX0ugf ApBhXe nqSzVe ".concat(n?"_activeNav":""),role:"button",tabIndex:t,style:{color:"rgba(60,64,67,1)"}},l.a.createElement("div",{className:"CfDnHe"},l.a.createElement(d,{name:e.icon,size:24})),l.a.createElement("span",{className:"hKCo7d"},u.qb(e.lbl)," "))):null}var b=!1;return N.email?b=!0:10!==t&&1!==t&&(b=!0),b?l.a.createElement(f.a,{to:{pathname:e.path},onClick:function(){return o(t)},key:t+"sld_mn"},l.a.createElement("div",{className:"DX0ugf ApBhXe nqSzVe ".concat(n?"_activeNav":""),role:"button",tabIndex:t,style:{color:"rgba(60,64,67,1)"}},l.a.createElement("div",{className:"CfDnHe"},l.a.createElement(d,{name:e.icon,size:24})),l.a.createElement("span",{className:"hKCo7d"},u.qb(e.lbl)," "))):null}))),l.a.createElement("style",null,""))};var y=function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.zb("showGSB",1),Object(p.updObserveChanges)(),window.gapi.load("auth2",function(){window.gapi.signin2.render("g-s-b",{width:232,height:40,longtitle:!0,hidden:!0}),setTimeout(function(){var e=window.gapi;(e.auth2&&e.auth2.getAuthInstance()).disconnect();var t=(new Date).getTime(),a=new Date(t-1e3);document.cookie="g_tk_id=".concat("; expires=",a,'; path=/;g_state = {"i_l":1,"i_p":').concat(a,"}"),u.zb("showGSB",0)},450)});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=48.904340b9.chunk.js.map