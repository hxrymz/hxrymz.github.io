"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5405,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return o}});var i=t(2791),r=t(5408),a=t(2350),s=t(184),l="listDialog_mdh392",o=function(){var e=(0,a.bh)("listDialog")||{},n=((0,r.Z)(l),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:n.map((function(n,t){var r=e[n];if(r&&r.visible){var a={};r.height&&(a.heigth=r.height),r.width,r.zIndex&&(a.zIndex=r.zIndex-1);var l={zIndex:r.zIndex},o=null,c=r.data;return r.content&&(o=i.cloneElement(r.content,{data:c})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:l,id:n,children:o})}),r.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(r.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,a.bh)("listDialog")||{},t=(0,a.M5)();n[t]||(n[t]={}),n[t].visible=!0;var i={};e.props?(i=e.props).modalID=t:i.modalID=t;var r=document.getElementsByTagName("body")[0];null!==r&&void 0!==r&&r.style&&(r.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===n[t].width&&i.height===n[t].height||(n[t].height=i.height+10,n[t].width=i.width,(0,a.Rz)("listDialog",n),(0,a.wt)(l)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=i,(0,a.Rz)("listDialog",n),(0,a.wt)(l),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",t),(0,a.wt)(l)}),125)},d=function(e){var n,t,i,r=(0,a.bh)("listDialog")||{},s=e.id;r[s]&&(r[s].observeResize&&r[s].observeInterval&&clearInterval(r[s].observeInterval),r[s].display=!1,null===(n=r[s])||void 0===n||null===(t=n.data)||void 0===t||null===(i=t.closeEvent)||void 0===i||i.call(t),(0,a.Rz)("listDialog",r),delete r[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(l),setTimeout((function(){delete r[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},5405:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(4165),r=t(5861),a=t(9439),s=t(2791),l=t(2350),o=(t(2768),t(9760)),c=t(901),d=t(2647),u=(t(8412),t(184)),v=function(e){var n=e.data,t=e.confirm,i=(e.handleClick,e.close,n.modalID),r=function(e){(0,o.CloseModal)({id:i})};return(0,u.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("p",{className:"group_title addBtn",onClick:r,children:"Cancelar"}),(0,u.jsx)("p",{className:"group_title addBtn red",onClick:function(){t(),r()},children:"Eliminar"})]})]})},h=t(1413),p=t(9661),m=t(24),f=(0,d.Np)(),x=(0,p.LZ)(),b=(0,m.f_)(),g="upd_pay_check_future",_=function(e){var n,t,c,d,v,p,m=e.data,_=e.confirm,y=(0,s.useState)(!1),j=(0,a.Z)(y,2),k=j[0],w=j[1],N=(0,s.useState)(0),I=(0,a.Z)(N,2),O=(I[0],I[1]);(0,s.useEffect)((function(){k||(w(!0),O((0,l.M5)()))}));var C=function(e,n,t){var i=(0,l.bh)(g)||{};t?(i[t]||(i[t]={}),i[t][e]=n):i[e]=n,(0,l.Rz)(g,i),O((0,l.M5)())},z=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var n,t,r,a,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,l.bh)(g),a=(0,l.vy)(Z,(0,l.bh)(g),(0,l.bh)(g+"_bck")),(s=(0,h.Z)({},null===(n=(0,l.bh)((0,l.hQ)()))||void 0===n?void 0:n.upd_future_check)).params={businessId:null===(t=(0,l.bh)("profileUser"))||void 0===t?void 0:t.businessId,payChecksOnFutureId:r.payChecksOnFutureId},s.data2update=a.data,c=(0,l.I7)(s),e.next=8,c;case 8:e.sent&&((0,l.Rz)(g,{}),_&&_(),(null===m||void 0===m?void 0:m.modalID)&&(0,o.CloseModal)({id:null===m||void 0===m?void 0:m.modalID}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=["document","amount","checkOrSlip","providerId"],D=(0,l.vy)(Z,(0,l.bh)(g),(0,l.bh)(g+"_bck")),F=null===(n=(0,l.bh)("providers_ids"))||void 0===n?void 0:n[null===(t=(0,l.bh)(g))||void 0===t?void 0:t.providerId];return(0,u.jsxs)("div",{style:{maxHeight:"80vh",width:"650px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Agregar Cheque a Futuro"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:3},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(b,{label:"Fecha a pagar",init:null===(c=(0,l.bh)(g))||void 0===c?void 0:c.date,updDate:function(e){return C("date",e)}})]})]}),(0,u.jsx)("div",{style:{marginTop:30},children:null!==F&&void 0!==F&&F.name?(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsx)("div",{className:"_dsplFlx",children:(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(){(0,l.Rz)("provider_picker_payfuture",null),O((0,l.M5)())},children:null===F||void 0===F?void 0:F.name})}),(0,u.jsx)("div",{className:"flexSpace"})]})}):(0,u.jsx)(x,{placeholder:"buscar una provedor",width:320,handleClick:function(e){C("providerId",e.providerId),O((0,l.M5)())}})}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:30},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(f,{init:null===(d=(0,l.bh)(g))||void 0===d?void 0:d.checkOrSlip,label:"No Cheque",width:120,updChanges:function(e){return C("checkOrSlip",e)}}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(f,{init:null===(v=(0,l.bh)(g))||void 0===v?void 0:v.document,label:"Documento",width:120,updChanges:function(e){return C("document",e)}}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(f,{init:null===(p=(0,l.bh)(g))||void 0===p?void 0:p.amount,label:"Importe",width:120,updChanges:function(e){return C("amount",e)}}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"10px 0"},children:[(0,u.jsx)("div",{className:"flexSpace"}),null!==D&&void 0!==D&&D.hasChange?(0,u.jsx)("div",{className:"",children:(0,u.jsx)("button",{onClick:z,children:"Guardar"})}):null]})]})},y=(0,d.PU)(),j=function(e){var n,t,d=e.data,h=(e.elmId,e.handleRefreshAll),p=(0,s.useState)(!1),m=(0,a.Z)(p,2),f=m[0],x=m[1],b=(0,s.useState)(0),g=(0,a.Z)(b,2),j=(g[0],g[1]);(0,s.useEffect)((function(){f||(x(!0),j((0,l.M5)()))}));var w=function(){j((0,l.M5)())},N=function(){(0,c.Ri)(w)},I=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,l.Rz)("upd_pay_check_future",d),(0,l.Rz)("upd_pay_check_future_bck",JSON.parse(JSON.stringify(d))),(n={}).zIndex=450,n.height="80vh",n.props={minHeight:"1vh",overlay:!0},n.content=(0,u.jsx)(_,{confirm:N}),(0,o.OpenModal)(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){(0,c.yD)(null===d||void 0===d?void 0:d.payChecksOnFutureId,h)},C=((0,c.t_)(null===(n=(0,l.bh)("sub_payChecksOnFuture_group"))||void 0===n?void 0:n[d.payChecksOnFutureId],"subPayChecksOnFuture"),null===(t=(0,l.bh)("providers_ids"))||void 0===t?void 0:t[null===d||void 0===d?void 0:d.providerId]);return(0,u.jsx)("div",{className:"item_acc",children:(0,u.jsxs)("div",{className:"_dsplFlx item_box payChecksOnFuture_header",children:[(0,u.jsx)("div",{className:"icon_revision tr_bar_5",onClick:I,children:(0,u.jsx)(y,{name:3===k(null===d||void 0===d?void 0:d.date)?"check_circle":(k(null===d||void 0===d?void 0:d.date),"alert"),color:3===k(null===d||void 0===d?void 0:d.date)?"var(--hrm_palette-success-fg)":2===k(null===d||void 0===d?void 0:d.date)?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-selected-nav-text)"})}),(0,u.jsx)("div",{className:"name tr_bar_20",children:(0,l.sJ)(null===d||void 0===d?void 0:d.date)}),(0,u.jsx)("div",{style:{margin:"0 10px"}}),(0,u.jsx)("div",{className:"code tr_bar_10",children:null===d||void 0===d?void 0:d.checkOrSlip}),(0,u.jsx)("div",{className:"code tr_bar_20",children:null===d||void 0===d?void 0:d.document}),(0,u.jsx)("div",{className:"code tr_bar_30",children:null===C||void 0===C?void 0:C.name}),(0,u.jsxs)("div",{className:"unit tr_bar_10 right_algn",children:["$",null===d||void 0===d?void 0:d.amount]}),(0,u.jsx)("div",{className:"icon tr_bar_5",style:{marginLeft:19},onClick:function(){var e=(0,l.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,l.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,u.jsx)(v,{confirm:O,item:d}),(0,o.OpenModal)(n)}},children:(0,u.jsx)(y,{name:"outline_delete",color:"#c62828"})})]})})},k=function(e){var n=e-(new Date).getTime();return n<6048e5?1:n<12096e5?2:3}},901:function(e,n,t){t.d(n,{$s:function(){return v},Ly:function(){return o},Ri:function(){return l},gW:function(){return c},t_:function(){return d},yD:function(){return u}});var i=t(1413),r=t(4165),a=t(5861),s=t(2350),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&n();case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,o,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=(0,i.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_future_check)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId},(0,s.bh)("searchCFQry").split(" ").map((function(e,n){e&&(l.params[":search"+n]=e.trim())})),o=(0,s.I7)(l),e.next=6,o;case 6:(c=e.sent)&&((0,s.Rz)("payChecksOnFutures_list",d((0,s.jQ)(c),"date")),n&&n());case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,o,c,u,v,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,s.Rz)("payChecksOnFutures_list",null),(c=(0,i.Z)({},null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_future_check)).params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":date1":(null===(l=(0,s.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)-10,":date2":null===(o=(0,s.bh)("date_range_comps"))||void 0===o?void 0:o.lastDate},(0,s.bh)("searchCFQry").split(" ").map((function(e,n){e&&(c.params[":search"+n]=e.trim())})),u=(0,s.I7)(c),e.next=7,u;case 7:(v=e.sent)&&!v.error&&(h=[],v&&(0,s._2)(v).map((function(e){var n,t;v[e].date>(null===(n=(0,s.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)-10&&v[e].date<=(null===(t=(0,s.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate)&&h.push(v[e])})),(0,s.Rz)("payChecksOnFutures_list",d(h,"date"))),n&&n();case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var d=function(e,n){return(0,s.MV)("sortPayChecksOnFutures",[e],(function(){return e&&e.sort((function(e,t){var i=1*e[n],r=1*t[n];return i<r?-1:i>r?1:0}))}))},u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var i,a,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={query:"deleteEmployeesHRG",params:{businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,payChecksOnFutureId:n}},l=(0,s.I7)(a),e.next=4,l;case 4:e.sent&&t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),v=function(){}},2768:function(){},8412:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(4942);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=5405.21d3655a.chunk.js.map