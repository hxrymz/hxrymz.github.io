"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7053,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return u},OpenModal:function(){return s},default:function(){return a}});var o=t(2791),i=t(5408),c=t(2350),l=t(184),r="listDialog_mdh392",a=function(){var e=(0,c.bh)("listDialog")||{},n=((0,i.Z)(r),Object.keys(e));return(0,l.jsx)(l.Fragment,{children:n.map((function(n,t){var i=e[n];if(i&&i.visible){var c={};i.height&&(c.heigth=i.height),i.width,i.zIndex&&(c.zIndex=i.zIndex-1);var r={zIndex:i.zIndex},a=null,s=i.data;return i.content&&(a=o.cloneElement(i.content,{data:s})),(0,l.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,l.jsx)("div",{className:"ltr-hoe9xz",children:(0,l.jsx)("div",{className:"ltr-1wao6ny",style:r,id:n,children:a})}),i.data.overlay?(0,l.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),u({id:e})}}):null]},n)}}))})},s=function(e){var n=(0,c.bh)("listDialog")||{},t=(0,c.M5)();n[t]||(n[t]={}),n[t].visible=!0;var o={};e.props?(o=e.props).modalID=t:o.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),o=e&&e.getBoundingClientRect();o&&(o.width===n[t].width&&o.height===n[t].height||(n[t].height=o.height+10,n[t].width=o.width,(0,c.Rz)("listDialog",n),(0,c.wt)(r)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=o,(0,c.Rz)("listDialog",n),(0,c.wt)(r),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",t),(0,c.wt)(r)}),125)},u=function(e){var n,t,o,i=(0,c.bh)("listDialog")||{},l=e.id;i[l]&&(i[l].observeResize&&i[l].observeInterval&&clearInterval(i[l].observeInterval),i[l].display=!1,null===(n=i[l])||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.closeEvent)||void 0===o||o.call(t),(0,c.Rz)("listDialog",i),delete i[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)(r),setTimeout((function(){delete i[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},5281:function(e,n,t){var o=t(5671),i=t(3144),c=t(7326),l=t(136),r=t(7277),a=t(2791),s=t(184),u=function(e){(0,l.Z)(t,e);var n=(0,r.Z)(t);function t(){var e;return(0,o.Z)(this,t),(e=n.call(this)).state={scrollPosition:null},e.handleInterval=e.handleInterval.bind((0,c.Z)(e)),e.handleRequestAnimationFrame=e.handleRequestAnimationFrame.bind((0,c.Z)(e)),e}return(0,i.Z)(t,[{key:"componentWillMount",value:function(){this.intervalID=setInterval(this.handleInterval,50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}},{key:"getWindowScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop}},{key:"handleInterval",value:function(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}},{key:"handleRequestAnimationFrame",value:function(){var e=this.state.scrollPosition,n=this.getWindowScrollTop();n!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(n),this.setState({scrollPosition:n}))}},{key:"render",value:function(){return(0,s.jsx)(s.Fragment,{})}}]),t}(a.Component);n.Z=u},8684:function(e,n,t){t.r(n);var o=t(4165),i=t(5861),c=t(9439),l=t(2791),r=t(2350),a=t(2647),s=t(9760),u=(t(6021),t(1232)),d=t(9179),v=t(4050),h=t(9661),p=t(5281),m=t(184),f=((0,a.Vg)(),(0,d.pl)()),b=(0,d.Wh)(),_=((0,a.PU)(),"Acc2Collect"),x=(0,h.FC)(),y=(0,a.tL)();n.default=function(e){var n,t,a=e.data,s=(e.elmId,e.updObs,(0,l.useState)(!1)),d=(0,c.Z)(s,2),h=d[0],p=d[1],b=(0,l.useState)(0),x=(0,c.Z)(b,2),y=(x[0],x[1]),j=(0,l.useState)(!1),w=(0,c.Z)(j,2),I=(w[0],w[1]),Z=(0,l.useState)(!1),N=(0,c.Z)(Z,2);N[0],N[1];(0,l.useEffect)((function(){h||(p(!0),(0,r.Rz)("list_show_type_collect","pending"),(0,v.Ht)("global_accounts","global_account_params",z),y((0,r.M5)()),(0,v.ZX)())}));var z=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n,t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y((0,r.M5)()),I(!1);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"",children:[(0,m.jsxs)("div",{className:"accounts_header _dsplFlx",children:[(0,m.jsx)("div",{children:(0,m.jsx)("h2",{children:"Cobros"})}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsxs)("div",{className:"",style:{maxWidth:"720px",padding:16},children:[(0,m.jsx)("div",{className:"",style:{height:190},children:(0,m.jsx)(g,{handle_getall:function(e){(0,u.i7)((0,r.bh)(_),z)},data:a,cb_result:z,updObs:y})}),(0,m.jsx)("div",{className:"accounts_container scollVh scoll_CP_Height",children:(null===(n=(0,r.bh)(_))||void 0===n?void 0:n.account)&&(0,r.bh)("collect_by_doc")&&(null===(t=(0,r._2)((0,r.bh)("collect_by_doc")))||void 0===t?void 0:t.map((function(e){var n=1*(0,r.bh)("collect_by_doc")[e].amount;return"done"===(0,r.bh)("list_show_type_collect")&&0===n||"pending"===(0,r.bh)("list_show_type_collect")&&0!==n?(0,m.jsx)(f,{data:(0,r.bh)("collect_by_doc")[e],elmId:e},e):null})))})]})]})};var g=function(e){var n,t,o,i,a,d,v,h,f,g,j,w=e.handle_getall,I=e.data,Z=e.cb_result,N=e.updObs,z=(0,l.useState)(0),R=(0,c.Z)(z,2),O=(R[0],R[1]),k=(0,l.useState)(!1),A=(0,c.Z)(k,2),D=A[0],F=A[1],P=null===(n=(0,r.bh)("account_ids"))||void 0===n?void 0:n[null===(t=(0,r.bh)(_))||void 0===t?void 0:t.account],S=null===(o=(0,r.bh)("sub_account_ids"))||void 0===o?void 0:o[null===(i=(0,r.bh)(_))||void 0===i?void 0:i.subAccount],C=(null===(a=(0,r.bh)(_))||void 0===a?void 0:a.account)+"_"+(null===(d=(0,r.bh)(_))||void 0===d?void 0:d.subAccount);return(0,m.jsxs)("div",{className:"menu_collect ".concat(D?"_floating":""),children:[null!==(v=(0,r.bh)(_))&&void 0!==v&&v.account?(0,m.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,m.jsxs)("div",{className:" acc_dtls",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code",style:{color:"#646cff",cursor:"pointer"},onClick:function(){(0,r.Rz)(_,null),O((0,r.M5)())},children:null===P||void 0===P?void 0:P.code}),(0,m.jsx)("div",{className:"name",children:null===P||void 0===P?void 0:P.name})]}),(0,m.jsx)("div",{className:"flexSpace"}),S?(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"code",children:null===S||void 0===S?void 0:S.subAccount}),(0,m.jsx)("div",{className:"name",children:null===S||void 0===S?void 0:S.subAccountName})]}):null,null!==(h=(0,r.bh)(_))&&void 0!==h&&h.account&&(0,u.GP)((0,r.bh)("collect_by_doc"),"amount")?(0,m.jsx)("div",{className:"_dsplFlx ",children:(0,m.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(y,{data:[{label:"Pendientes",id:"pending"},{label:"Cobrados",id:"done"}],active:(0,r.bh)("list_show_type_collect")||"pending",updSelect:function(e){return function(e){(0,r.Rz)("list_show_type_collect",e),N((0,r.M5)())}(e)}}),(0,m.jsx)("div",{className:"flexSpace"})]})}):null]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,m.jsx)("div",{className:"name",children:"Por Cobrar:"}),(0,m.jsx)("div",{className:"code",style:{margin:"0px 0 0 7px",color:"#646cff"},children:null!==(f=(0,r.bh)("rec_by_acc"))&&void 0!==f&&f[C]&&!isNaN(1*(null===(g=(0,r.bh)("rec_by_acc"))||void 0===g?void 0:g[C]))?" $".concat((1*(null===(j=(0,r.bh)("rec_by_acc"))||void 0===j?void 0:j[C])).toFixed(2)):null})]}),(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var e={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(b,{confirm:w,item:I}),(0,s.OpenModal)(e)},children:"Hacer un Cobro"})]})]})]}):(0,m.jsx)(x,{placeholder:"buscar un cliente",width:420,handleClick:function(e){var n={account:null===e||void 0===e?void 0:e.account,subAccount:null===e||void 0===e?void 0:e.subAccount,customerId:null===e||void 0===e?void 0:e.customerId};(0,r.Rz)(_,n),(0,u.i7)(n,Z)}}),(0,m.jsx)(p.Z,{scrollhandler:function(e){F(e>130)}})]})}},1232:function(e,n,t){t.d(n,{GP:function(){return d},N$:function(){return s},hF:function(){return p},i7:function(){return r},nr:function(){return a},pj:function(){return m}});var o=t(4165),i=t(1413),c=t(5861),l=t(2350),r=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t){var c,r,a,s,d,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(c=(0,l.bh)((0,l.hQ)()))||void 0===c?void 0:c.filter_search_opera)).params={businessId:null===(r=(0,l.bh)("profileUser"))||void 0===r?void 0:r.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},s=(0,l.I7)(a),e.next=5,s;case 5:(d=e.sent)&&!d.error&&((0,l.Rz)("collect_list",d),(0,l.Rz)("collect_by_doc",u(d)),(0,l.Rz)("collect_by_docM",u(d)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),h(d,v)),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),a=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t){var c,r,a,s,d,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=(0,i.Z)({},null===(c=(0,l.bh)((0,l.hQ)()))||void 0===c?void 0:c.filter_search_opera)).params={businessId:null===(r=(0,l.bh)("profileUser"))||void 0===r?void 0:r.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},s=(0,l.I7)(a),e.next=5,s;case 5:(d=e.sent)&&!d.error&&((0,l.Rz)("toPay_list",d),(0,l.Rz)("toPay_by_doc",u(d,!0)),(0,l.Rz)("toPay_by_docM",u(d,!0)),v=(null===n||void 0===n?void 0:n.account)+"_"+(null===n||void 0===n?void 0:n.subAccount),h(d,v)),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n){var t,c,r,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=(0,i.Z)({},null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.search_opera)).params={businessId:null===(c=(0,l.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,l.bh)("search_acc_record")},a=(0,l.I7)(r),e.next=5,a;case 5:(s=e.sent)&&!s.error&&((0,l.Rz)("comprobante_list",s),(0,l.Rz)("comprobante_by_doc",u(s))),n&&n();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function u(e,n){var t={},o=e&&(0,l._2)(e);return o.length>0?o.map((function(o){var i,c=e[o],r=null===(i=c.document)||void 0===i?void 0:i.trim();if(!t[r]){t[r]={};["date","description","document","entryName"].forEach((function(e){t[r][e]=c[e]})),t[r].amount=0,t[r].operations=[]}if(c.type){var a=(0,l.Zv)(c.amount,2),s=(0,l.Zv)(t[r].amount,2),u=0;u=n?1*s+a*("debit"===c.type?-1:1):1*s+a*("credit"===c.type?-1:1),t[r].amount=(0,l.Zv)(u,2),t[r].operations.push(function(e){var n,t,o={};o.account=null===(n=(0,l.bh)("account_ids"))||void 0===n?void 0:n[e.account],o.sub_account=null===(t=(0,l.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],o.comprobanteId=e.comprobanteId,o.date=e.date;var i=(0,l.Zv)(e.amount,2);"credit"===e.type?(o.debit=0,o.credit=i):"debit"===e.type&&(o.credit=0,o.debit=i);return o}(c))}})):t=null,t}var d=function(e,n,t){return(0,l.MV)("SumDocuments",[e,n,t],(function(){var t,o=0;return e&&(null===(t=(0,l._2)(e))||void 0===t||t.map((function(t,i){var c;o+=1*(null===(c=e[t])||void 0===c?void 0:c[n])}))),o}))},v=function(e,n,t){var o,i=0;return e&&(null===(o=(0,l._2)(e))||void 0===o||o.map((function(n,t){var o,c=(0,l.Zv)(e[n].amount,2);i+=c*("credit"===(null===(o=e[n])||void 0===o?void 0:o.type)?-1:1)}))),i},h=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t,i){var c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(c=(0,l.bh)("rec_by_acc")||{})[t]=v(n)||"no",(0,l.Rz)("rec_by_acc",c),i&&i();case 4:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t,c){var r,a,s,u,d;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,i.Z)({},null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.filter_search_opera)).params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===n||void 0===n?void 0:n.account,":subAccount":null===n||void 0===n?void 0:n.subAccount},u=(0,l.I7)(s),e.next=5,u;case 5:(d=e.sent)&&!d.error&&h(d,t),c&&c();case 8:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}(),m=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n,t,c){var r,a,s,u,d,v,h;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,i.Z)({},null===(r=(0,l.bh)((0,l.hQ)()))||void 0===r?void 0:r.search_subacc_acc)).params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":n,":search":t},u=(0,l.I7)(s),e.next=5,u;case 5:(d=e.sent)&&!d.error&&(h=null===(v=(0,l._2)(d))||void 0===v?void 0:v[0],c&&c(d[h]));case 7:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}()},6021:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=7053.38bc1067.chunk.js.map