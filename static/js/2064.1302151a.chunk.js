"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2064,9760],{9760:function(e,t,n){n.r(t),n.d(t,{CloseModal:function(){return d},OpenModal:function(){return l},default:function(){return c}});var r=n(2791),o=n(5408),a=n(2350),i=n(184),s="listDialog_mdh392",c=function(){var e=(0,a.bh)("listDialog")||{},t=((0,o.Z)(s),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:t.map((function(t,n){var o=e[t];if(o&&o.visible){var a={};o.height&&(a.heigth=o.height),o.width,o.zIndex&&(a.zIndex=o.zIndex-1);var s={zIndex:o.zIndex},c=null,l=o.data;return o.content&&(c=r.cloneElement(o.content,{data:l})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:s,id:t,children:c})}),o.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},t)}}))})},l=function(e){var t=(0,a.bh)("listDialog")||{},n=(0,a.M5)();t[n]||(t[n]={}),t[n].visible=!0;var r={};e.props?(r=e.props).modalID=n:r.modalID=n;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),t[n].isView=e.isView,t[n].observeResize=e.observeResize,t[n].observeResize&&(t[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===t[n].width&&r.height===t[n].height||(t[n].height=r.height+10,t[n].width=r.width,(0,a.Rz)("listDialog",t),(0,a.wt)(s)))}),200)),t[n].display=!0,e.zIndex&&(t[n].zIndex=e.zIndex),e.height&&(t[n].height=e.height),e.width&&(t[n].width=e.width),e.content&&(t[n].content=e.content),t[n].data=r,(0,a.Rz)("listDialog",t),(0,a.wt)(s),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",n),(0,a.wt)(s)}),125)},d=function(e){var t,n,r,o=(0,a.bh)("listDialog")||{},i=e.id;o[i]&&(o[i].observeResize&&o[i].observeInterval&&clearInterval(o[i].observeInterval),o[i].display=!1,null===(t=o[i])||void 0===t||null===(n=t.data)||void 0===n||null===(r=n.closeEvent)||void 0===r||r.call(n),(0,a.Rz)("listDialog",o),delete o[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(s),setTimeout((function(){delete o[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},2064:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(1413),o=n(9439),a=n(2791),i=n(2350),s=(n(1e3),n(2647)),c=n(3588),l=n(4165),d=n(5861),u=n(6963),v=n(4e3);function p(e){var t=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(t)}var m=0,b=null,h=null,f=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){var n,r,o,a,s,c,d,f,x,_,y,w,g,I,z,j,N,Z,R;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.PDFDocument.create();case 2:return(n=e.sent).registerFontkit(v.Z),e.next=6,n.embedFont(u.StandardFonts.TimesRoman,{subset:!0});case 6:return b=e.sent,e.next=9,n.embedFont(u.StandardFonts.TimesRomanBold,{subset:!0});case 9:if(h=e.sent,!(0,i.bh)("modernFontReport")){e.next=29;break}return r=(0,i.bh)("Roboto-Bold.ttf"),o=(0,i.bh)("ggSans-Italic.ttf"),a=(0,i.bh)("ggSans-Medium.ttf"),e.next=16,fetch(r).then((function(e){return e.arrayBuffer()}));case 16:return s=e.sent,e.next=19,n.embedFont(s,{subset:!0});case 19:return h=e.sent,e.next=22,fetch(o).then((function(e){return e.arrayBuffer()}));case 22:return e.sent,e.next=25,fetch(a).then((function(e){return e.arrayBuffer()}));case 25:return c=e.sent,e.next=28,n.embedFont(c,{subset:!0});case 28:b=e.sent;case 29:return d=n.addPage(),f=d.getSize(),f.width,x=f.height,_=10,m=x-40,d.drawText(t.entryName||"Comprobante Manual",{x:50,y:m,size:14,font:h,color:(0,u.rgb)(0,0,0)}),y=h.widthOfTextAtSize(t.comprobanteId,14),w=b.widthOfTextAtSize("Comprobante:  ",13),d.drawText("Comprobante:  ",{x:580-w-y,y:m,size:13,font:b,color:(0,u.rgb)(0,0,0)}),d.drawText(t.comprobanteId+"",{x:580-y,y:m,size:14,font:h,color:(0,u.rgb)(0,0,0)}),m-=25,g=b.widthOfTextAtSize("Fecha:  ",13),I=h.widthOfTextAtSize((0,i.Gv)(t.date)+"",14),d.drawText("Fecha:  ",{x:580-g-I,y:m,size:13,font:b,color:(0,u.rgb)(0,0,0)}),d.drawText((0,i.Gv)(t.date)+"",{x:580-I,y:m,size:14,font:h,color:(0,u.rgb)(0,0,0)}),m-=15,z=(null===t||void 0===t?void 0:t.operations)||[],m-=18,d.drawText("Cuenta",{x:20,y:m,size:13,font:h,color:(0,u.rgb)(0,0,0)}),d.drawText("Sub Cuenta",{x:205,y:m,size:13,font:h,color:(0,u.rgb)(0,0,0)}),d.drawText("Documento",{x:360,y:m,size:13,font:h,color:(0,u.rgb)(0,0,0)}),j=h.widthOfTextAtSize("Debito",13),d.drawText("Debito",{x:500-j,y:m,size:13,font:h,color:(0,u.rgb)(0,0,0)}),N=h.widthOfTextAtSize("Credito",13),d.drawText("Credito",{x:580-N,y:m,size:13,font:h,color:(0,u.rgb)(0,0,0)}),m-=8,d.drawRectangle({x:15,y:m+1,width:570,height:.95,color:(0,u.rgb)(0,0,0),borderColor:(0,u.rgb)(0,0,0)}),Array.isArray(z)&&z.map((function(e,t){var n,r,o,a,i,s;(m-=16,null!==e&&void 0!==e&&null!==(n=e.account)&&void 0!==n&&n.name)&&d.drawText((null===e||void 0===e||null===(i=e.account)||void 0===i?void 0:i.name)+"",{x:20,y:m,size:_,font:b,color:(0,u.rgb)(0,0,0)});null!==e&&void 0!==e&&null!==(r=e.sub_account)&&void 0!==r&&r.subAccountName&&d.drawText((null===e||void 0===e||null===(s=e.sub_account)||void 0===s?void 0:s.subAccountName)+"",{x:205,y:m,size:_,font:b,color:(0,u.rgb)(0,0,0)});d.drawText((null===e||void 0===e?void 0:e.document)+"",{x:360,y:m,size:_,font:b,color:(0,u.rgb)(0,0,0)});var c=null!==e&&void 0!==e&&e.debit?null===(o=1*(null===e||void 0===e?void 0:e.debit))||void 0===o?void 0:o.toFixed(2):"0.00",l=b.widthOfTextAtSize(c+"",_);d.drawText(c+"",{x:500-l,y:m,size:_,font:b,color:(0,u.rgb)(0,0,0)});var v=null!==e&&void 0!==e&&e.credit?null===(a=1*(null===e||void 0===e?void 0:e.credit))||void 0===a?void 0:a.toFixed(2):"0.00",p=b.widthOfTextAtSize(v+"",_);d.drawText(v+"",{x:580-p,y:m,size:_,font:b,color:(0,u.rgb)(0,0,0)})})),m-=28,d.drawRectangle({x:15,y:m+1,width:570,height:.85,color:(0,u.rgb)(0,0,0),borderColor:(0,u.rgb)(0,0,0)}),m-=18,d.drawText("Detalles: ",{x:50,y:m,size:12,font:b,color:(0,u.rgb)(0,0,0)}),m-=18,d.drawText(t.description?t.description:"",{x:70,y:m,size:11,font:b,color:(0,u.rgb)(0,0,0)}),e.next=64,n.save();case 64:Z=e.sent,R=p(Z),window.open(R);case 67:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n(9760),_=n(2692),y=n(2502),w=n(184),g=(0,s.JC)(),I=(0,_.dz)(),z=(0,s.PU)(),j=function(e){e.data;var t,n,r,s=e.item,l=(0,a.useState)(!1),d=(0,o.Z)(l,2),u=d[0],v=d[1],p=(0,a.useState)(0),m=(0,o.Z)(p,2),b=(m[0],m[1]);(0,a.useEffect)((function(){if(!u){var e;if(v(!0),null!==s&&void 0!==s&&s.employeeId)null!==(e=(0,i.bh)("employees_ids"))&&void 0!==e&&e[null===s||void 0===s?void 0:s.employeeId]||(0,y.Dy)(h);b((0,i.M5)())}}));var h=function(){b((0,i.M5)())},x=null===(t=(0,i.bh)("employees_ids"))||void 0===t||null===(n=t[null===s||void 0===s?void 0:s.employeeId])||void 0===n?void 0:n.name;return(0,w.jsxs)("div",{style:{maxHeight:"80vh",width:"860px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,w.jsx)("div",{className:"_dsplFlx ",children:(0,w.jsx)("div",{className:"flexSpace"})}),(0,w.jsxs)("div",{className:"_dsplFlx ",children:[(0,w.jsxs)("div",{className:"_dsplFlx",style:{marginTop:20},children:[(0,w.jsx)("div",{className:"desc_lbl",children:"Comprobante:"}),(0,w.jsx)("div",{className:"name comprobante_id",style:0!==s.balance?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:null===s||void 0===s?void 0:s.comprobanteId})]}),0!==s.balance?(0,w.jsx)("div",{className:"msg_alert",children:(0,w.jsx)("div",{className:"msg_alert_title",children:"El comprobante no esta cuadrado"})}):null,(0,w.jsx)("div",{className:"flexSpace"}),(0,w.jsx)("div",{className:"icon",onClick:function(){f(s)},children:(0,w.jsx)(z,{name:"printer",color:"#282828"})})]}),(0,w.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,w.jsx)("div",{className:"flexSpace"}),(0,w.jsxs)("div",{className:"_dsplFlx",children:[(0,w.jsx)("div",{className:"desc_lbl"}),(0,w.jsx)("div",{className:"name",children:(0,i.sG)(null===s||void 0===s?void 0:s.date)})]})]}),(0,w.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,w.jsx)("div",{className:"tr_bar_15",children:"Cuenta"}),(0,w.jsx)("div",{className:"tr_bar_15",children:"Sub Cuenta"}),(0,w.jsx)("div",{className:"tr_bar_40",children:"Documento"}),(0,w.jsx)("div",{className:"tr_bar_15",children:"Debito"}),(0,w.jsx)("div",{className:"tr_bar_15",children:"Credito"})]}),null===(r=(0,c.Eb)(null===s||void 0===s?void 0:s.operations))||void 0===r?void 0:r.map((function(e,t){return(0,w.jsx)(N,{element:e,in2D:t},t)})),(0,w.jsxs)("div",{className:"cmp_desc",children:[(0,w.jsx)("div",{className:"desc_lbl",children:"Detalles:"}),(0,w.jsxs)("div",{className:"description",children:[null===s||void 0===s?void 0:s.description," ",x]})]}),(0,w.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,w.jsx)("div",{className:"flexSpace"}),(0,w.jsx)("span",{className:"entryType",children:s.entryName||"Comprobante Manual"})]})]})},N=function(e){var t,n,o=e.element,a=e.in2D;return(0,w.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,w.jsx)("div",{className:"tr_bar_15",children:(0,w.jsx)(g,{data:o.account,labelField:"code",infoField:"name"})}),(0,w.jsx)("div",{className:"tr_bar_15",children:(0,w.jsx)(g,{data:o.sub_account,labelField:"subAccount",infoField:"subAccountName"})}),(0,w.jsx)("div",{className:"tr_bar_40",onClick:function(){if((0,i.ML)()){var e=(0,i.bh)("lastTimeCallModal")||0;if(Date.now()>e){var t=(0,i.Ld)((0,r.Z)({},(0,i.bh)("comprobante_list")[o.operationId]),["document","amount","type","description","account","subAccount","comprobanteId"]);(0,i.Rz)("upd_comprobantebyId",t),(0,i.Rz)("upd_comprobantebyId_bck",JSON.parse(JSON.stringify(t))),(0,i.Rz)("lastTimeCallModal",Date.now()+320);var n={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};n.content=(0,w.jsx)(I,{confirm:function(){},item:o}),(0,x.OpenModal)(n)}}},children:o.document}),(0,w.jsx)("div",{className:"tr_bar_15",children:null===(t=1*o.debit)||void 0===t?void 0:t.toFixed(2)}),(0,w.jsx)("div",{className:"tr_bar_15",children:null===(n=1*o.credit)||void 0===n?void 0:n.toFixed(2)})]},a)}},3588:function(e,t,n){n.d(t,{Eb:function(){return m},Gg:function(){return p},N$:function(){return c},Ng:function(){return d},WB:function(){return u},ly:function(){return s},tS:function(){return b}});var r=n(4165),o=n(1413),a=n(5861),i=n(2350),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.all_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year")},c=(0,i.I7)(s),e.next=5,c;case 5:(d=e.sent)&&!d.error&&(l(d),(0,i.bh)("showAllCmpbnt")&&((0,i.Rz)("comprobante_list",d),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(d)))),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,c,l,d,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((0,i.bh)("search_acc_record").length>3)){e.next=11;break}return(l=(0,o.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.filter_search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year"),":date1":null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.initDate,":date2":null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate},(0,i.bh)("search_acc_record").split(" ").map((function(e,t){e&&(l.params[":search"+t]=e.trim())})),d=(0,i.I7)(l),e.next=7,d;case 7:(u=e.sent)&&!u.error&&((0,i.Rz)("comprobante_list",u),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(u))),t&&t()),e.next=14;break;case 11:(0,i.Rz)("comprobante_list",null),(0,i.Rz)("comprobante_by_doc",null),t&&t();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,o,a,s,c,l,d,u,v,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in 0,n={},o={},a={},t)l=t[s],(d=null===(c=(0,i.bh)("account_ids"))||void 0===c?void 0:c[l.account])&&((0,i.UE)(a[null===d||void 0===d?void 0:d.accountId])||(a[null===d||void 0===d?void 0:d.accountId]={saldo:0,name:(null===d||void 0===d?void 0:d.code)+" - "+(null===d||void 0===d?void 0:d.name),list:[]}),(0,i.UE)(n[l.comprobanteId])||(n[l.comprobanteId]=0,o[l.comprobanteId]=[]),u=1*(0,i.Zv)(("debit"===l.type?1:-1)*l.amount,2),a[null===d||void 0===d?void 0:d.accountId].saldo=1*(0,i.Zv)(a[d.accountId].saldo,2)+1*u,a[null===d||void 0===d?void 0:d.accountId].list.push([l.comprobanteId,u]),n[l.comprobanteId]=1*(0,i.Zv)(n[l.comprobanteId],2)+u,o[l.comprobanteId].push({ammount:u,operationId:l.comprobanteId}));for(p in v=null,n)n[p]&&(v||(v={}),v[p]=1);v&&((0,i.Rz)("comprobante_w_erros",v),(0,i.Rz)("has_filter_comp_error",!0));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,c,d,u,p,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.filter_search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year"),":date1":(null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.initDate)-10,":date2":null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate},u=(0,i.I7)(d),e.next=5,u;case 5:(p=e.sent)&&!p.error&&((0,i.Rz)("comprobante_list",p),m=[],(0,i.bh)("comprobante_all_list")&&(0,i.bh)("comprobante_all_list").map((function(e){p[e.operationId]||console.log(e)})),p&&(0,i._2)(p).map((function(e){var t,n;p[e].account&&p[e].date>(null===(t=(0,i.bh)("date_range_comps"))||void 0===t?void 0:t.initDate)-10&&p[e].date<=(null===(n=(0,i.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate)&&m.push(p[e])})),(0,i.Rz)("comprobante_by_doc",v(m)),l(m),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],t.map((function(e){var t,n,r=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.delete_opera);r.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,year:(0,i.bh)("date_current_year"),operationId:e.operationId},s.push(r)})),c=s.map(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,i.I7)(t),e.next=3,n;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.all(c);case 5:n&&n();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function v(e){var t={};return e.length>0?e.map((function(e){var n=e.date;if(n&&e.account){var r=n+"_"+e.comprobanteId;if(!t[r]){t[r]={};["date","description","entryName","comprobanteId","employeeId"].forEach((function(n){t[r][n]=e[n]})),t[r].amount=0,t[r].balance=0,t[r].operations=[]}e.type&&t[r].operations.push(function(e){var t,n,r={};r.account=null===(t=(0,i.bh)("account_ids"))||void 0===t?void 0:t[e.account],r.sub_account=null===(n=(0,i.bh)("sub_account_ids"))||void 0===n?void 0:n[e.subAccount],r.comprobanteId=e.comprobanteId,r.operationId=e.operationId,r.document=e.document,r.type=e.type;var o=(0,i.Zv)(e.amount,2);"credit"===e.type?(r.debit=0,r.credit=o):"debit"===e.type&&(r.credit=0,r.debit=o);return r}(e))}})):t=null,t}function p(e){(0,i.Rz)("has_filter_review",null),(0,i.Rz)("has_filter_comp_error",null),(0,i._2)(e).map((function(t){var n,r,o,a;null!==(n=(0,i.bh)("comp_under_review"))&&void 0!==n&&null!==(r=n.inReview)&&void 0!==r&&r[e[t].comprobanteId]&&(0,i.Rz)("has_filter_review",!0),null!==(o=(0,i.bh)("comp_under_review"))&&void 0!==o&&null!==(a=o.hasError)&&void 0!==a&&a[e[t].comprobanteId]&&(0,i.Rz)("has_filter_comp_error",!0)}))}var m=function(e){return(0,i.MV)("sortComprobantesByType",[e],(function(){var t="type";return e&&e.sort((function(e,n){var r=e[t],o=n[t];return r===o?n[o]-e[r]:o>r?1:-1}))}))},b=function(e,t){return(0,i.MV)("rangeArr",[e,t],(function(){return e?(0,i._2)(e).slice(0,t):[]}))}},2502:function(e,t,n){n.d(t,{Dy:function(){return s},G:function(){return v},aU:function(){return u},kQ:function(){return c},lG:function(){return l}});var r=n(4165),o=n(1413),a=n(5861),i=n(2350),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.all_employee)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId},c=(0,i.I7)(s),e.next=5,c;case 5:(l=e.sent)&&((0,i.Rz)("employees_list",u((0,i.jQ)(l),"code")),(0,i.Rz)("employees_ids",(0,i.ME)((0,i.jQ)(l),"employeeId")),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.search_employee)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,i.bh)("searchQry")},c=(0,i.I7)(s),e.next=5,c;case 5:(l=e.sent)&&((0,i.Rz)("employees_list",u((0,i.jQ)(l),"code")),t&&t());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,s,c,l,u,v,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,o.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId,year:(0,i.bh)("date_current_year"),":date1":(null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.initDate)-10,":date2":null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,":search0":t},v=(0,i.I7)(u),e.next=5,v;case 5:(p=e.sent)&&!p.error&&((0,i.Rz)("paystub_submayor_list",p),(0,i.Rz)("paystub_submayor_group",d((0,i.jQ)(p)))),n&&n();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function d(e){var t={};return e.length>0?e.map((function(e){var n=e.date+"_"+e.comprobanteId;if(!t[n]){t[n]={};["date","description","entryName","comprobanteId","employeeId","document"].forEach((function(r){t[n][r]=e[r]})),t[n].amount=0,t[n].balance=0,t[n].operations=[]}e.type&&(t[n].balance=1*(0,i.Zv)(t[n].balance,2)+("debit"===e.type?1*(0,i.Zv)(e.amount,2):0),t[n].operations.push(function(e){var t,n={};n.employeeId=null===(t=(0,i.bh)("employees_ids"))||void 0===t?void 0:t[e.employeeId],n.comprobanteId=e.comprobanteId,n.document=e.document,n.date=e.date,"credit"===e.type?(n.debit=0,n.credit=e.amount):"debit"===e.type&&(n.credit=0,n.debit=e.amount);return n}(e)))})):t=null,t}var u=function(e,t){return(0,i.MV)("sortEmployees",[e],(function(){return e&&e.sort((function(e,n){var r=1*e[t],o=1*n[t];return r<o?-1:r>o?1:0}))}))},v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var o,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={query:"deleteEmployeesHRG",params:{businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,employeeId:t}},s=(0,i.I7)(a),e.next=4,s;case 4:e.sent&&n&&n();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},1e3:function(){},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=2064.1302151a.chunk.js.map