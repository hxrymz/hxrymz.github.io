"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2064,9760],{9760:function(e,n,t){t.r(n),t.d(n,{CloseModal:function(){return d},OpenModal:function(){return c},default:function(){return l}});var r=t(2791),o=t(5408),a=t(2350),i=t(184),s="listDialog_mdh392",l=function(){var e=(0,a.bh)("listDialog")||{},n=((0,o.Z)(s),Object.keys(e));return(0,i.jsx)(i.Fragment,{children:n.map((function(n,t){var o=e[n];if(o&&o.visible){var a={};o.height&&(a.heigth=o.height),o.width,o.zIndex&&(a.zIndex=o.zIndex-1);var s={zIndex:o.zIndex},l=null,c=o.data;return o.content&&(l=r.cloneElement(o.content,{data:c})),(0,i.jsxs)("div",{className:"ltr-1kbnjow",style:a,children:[(0,i.jsx)("div",{className:"ltr-hoe9xz",children:(0,i.jsx)("div",{className:"ltr-1wao6ny",style:s,id:n,children:l})}),o.data.overlay?(0,i.jsx)("div",{className:"DialogHRMOverlay ".concat(o.visible?"active":""),onClick:function(){var e;e=n,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),d({id:e})}}):null]},n)}}))})},c=function(e){var n=(0,a.bh)("listDialog")||{},t=(0,a.M5)();n[t]||(n[t]={}),n[t].visible=!0;var r={};e.props?(r=e.props).modalID=t:r.modalID=t;var o=document.getElementsByTagName("body")[0];null!==o&&void 0!==o&&o.style&&(o.style.overflowY="hidden"),n[t].isView=e.isView,n[t].observeResize=e.observeResize,n[t].observeResize&&(n[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),r=e&&e.getBoundingClientRect();r&&(r.width===n[t].width&&r.height===n[t].height||(n[t].height=r.height+10,n[t].width=r.width,(0,a.Rz)("listDialog",n),(0,a.wt)(s)))}),200)),n[t].display=!0,e.zIndex&&(n[t].zIndex=e.zIndex),e.height&&(n[t].height=e.height),e.width&&(n[t].width=e.width),e.content&&(n[t].content=e.content),n[t].data=r,(0,a.Rz)("listDialog",n),(0,a.wt)(s),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",t),(0,a.wt)(s)}),125)},d=function(e){var n,t,r,o=(0,a.bh)("listDialog")||{},i=e.id;o[i]&&(o[i].observeResize&&o[i].observeInterval&&clearInterval(o[i].observeInterval),o[i].display=!1,null===(n=o[i])||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.closeEvent)||void 0===r||r.call(t),(0,a.Rz)("listDialog",o),delete o[i],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(s),setTimeout((function(){delete o[i],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750))}},2064:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(1413),o=t(9439),a=t(2791),i=t(2350),s=(t(1e3),t(2647)),l=t(3588),c=t(4165),d=t(5861),u=t(6963);function v(e){var n=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(n)}var p=0,m=null,b=null,h=function(){var e=(0,d.Z)((0,c.Z)().mark((function e(n){var t,r,o,a,s,l,d,h,f,x,_,y,w,g;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.PDFDocument.create();case 2:return t=e.sent,e.next=5,t.embedFont(u.StandardFonts.TimesRoman);case 5:return m=e.sent,e.next=8,t.embedFont(u.StandardFonts.TimesRomanBold);case 8:return b=e.sent,r=t.addPage(),o=r.getSize(),o.width,a=o.height,s=10,p=a-40,r.drawText(n.entryName||"Comprobante Manual",{x:50,y:p,size:14,font:b,color:(0,u.rgb)(0,0,0)}),l=b.widthOfTextAtSize(n.comprobanteId,14),d=m.widthOfTextAtSize("Comprobante:  ",13),r.drawText("Comprobante:  ",{x:580-d-l,y:p,size:13,font:m,color:(0,u.rgb)(0,0,0)}),r.drawText(n.comprobanteId+"",{x:580-l,y:p,size:14,font:b,color:(0,u.rgb)(0,0,0)}),p-=25,h=m.widthOfTextAtSize("Fecha:  ",13),f=b.widthOfTextAtSize((0,i.Gv)(n.date)+"",14),r.drawText("Fecha:  ",{x:580-h-f,y:p,size:13,font:m,color:(0,u.rgb)(0,0,0)}),r.drawText((0,i.Gv)(n.date)+"",{x:580-f,y:p,size:14,font:b,color:(0,u.rgb)(0,0,0)}),p-=25,x=(null===n||void 0===n?void 0:n.operations)||[],p-=18,r.drawText("Cuenta",{x:20,y:p,size:13,font:b,color:(0,u.rgb)(0,0,0)}),r.drawText("Sub Cuenta",{x:170,y:p,size:13,font:b,color:(0,u.rgb)(0,0,0)}),r.drawText("Documento",{x:320,y:p,size:13,font:b,color:(0,u.rgb)(0,0,0)}),_=b.widthOfTextAtSize("Debito",13),r.drawText("Debito",{x:450-_,y:p,size:13,font:b,color:(0,u.rgb)(0,0,0)}),y=b.widthOfTextAtSize("Credito",13),r.drawText("Credito",{x:530-y,y:p,size:13,font:b,color:(0,u.rgb)(0,0,0)}),p-=8,r.drawRectangle({x:15,y:p+1,width:500,height:.95,color:(0,u.rgb)(0,0,0),borderColor:(0,u.rgb)(0,0,0)}),Array.isArray(x)&&x.map((function(e,n){var t,o,a,i,l,c;(p-=16,null!==e&&void 0!==e&&null!==(t=e.account)&&void 0!==t&&t.name)&&r.drawText((null===e||void 0===e||null===(l=e.account)||void 0===l?void 0:l.name)+"",{x:20,y:p,size:s,font:m,color:(0,u.rgb)(0,0,0)});null!==e&&void 0!==e&&null!==(o=e.sub_account)&&void 0!==o&&o.subAccountName&&r.drawText((null===e||void 0===e||null===(c=e.sub_account)||void 0===c?void 0:c.subAccountName)+"",{x:170,y:p,size:s,font:m,color:(0,u.rgb)(0,0,0)});r.drawText((null===e||void 0===e?void 0:e.document)+"",{x:340,y:p,size:s,font:m,color:(0,u.rgb)(0,0,0)});var d=null!==e&&void 0!==e&&e.debit?null===(a=1*(null===e||void 0===e?void 0:e.debit))||void 0===a?void 0:a.toFixed(2):"0.00",v=m.widthOfTextAtSize(d+"",s);r.drawText(d+"",{x:450-v,y:p,size:s,font:m,color:(0,u.rgb)(0,0,0)});var b=null!==e&&void 0!==e&&e.credit?null===(i=1*(null===e||void 0===e?void 0:e.credit))||void 0===i?void 0:i.toFixed(2):"0.00",h=m.widthOfTextAtSize(b+"",s);r.drawText(b+"",{x:530-h,y:p,size:s,font:m,color:(0,u.rgb)(0,0,0)})})),p-=28,r.drawRectangle({x:15,y:p+1,width:500,height:.85,color:(0,u.rgb)(0,0,0),borderColor:(0,u.rgb)(0,0,0)}),p-=18,r.drawText("Detalles: ",{x:50,y:p,size:12,font:m,color:(0,u.rgb)(0,0,0)}),p-=18,r.drawText(n.description?n.description:"",{x:70,y:p,size:11,font:m,color:(0,u.rgb)(0,0,0)}),e.next=44,t.save();case 44:w=e.sent,g=v(w),window.open(g);case 47:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=t(9760),x=t(2692),_=t(2502),y=t(184),w=(0,s.JC)(),g=(0,x.dz)(),I=(0,s.PU)(),z=function(e){e.data;var n,t,r,s=e.item,c=(0,a.useState)(!1),d=(0,o.Z)(c,2),u=d[0],v=d[1],p=(0,a.useState)(0),m=(0,o.Z)(p,2),b=(m[0],m[1]);(0,a.useEffect)((function(){if(!u){var e;if(v(!0),null!==s&&void 0!==s&&s.employeeId)null!==(e=(0,i.bh)("employees_ids"))&&void 0!==e&&e[null===s||void 0===s?void 0:s.employeeId]||(0,_.Dy)(f);b((0,i.M5)())}}));var f=function(){b((0,i.M5)())},x=null===(n=(0,i.bh)("employees_ids"))||void 0===n||null===(t=n[null===s||void 0===s?void 0:s.employeeId])||void 0===t?void 0:t.name;return(0,y.jsxs)("div",{style:{maxHeight:"80vh",width:"860px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,y.jsx)("div",{className:"_dsplFlx ",children:(0,y.jsx)("div",{className:"flexSpace"})}),(0,y.jsxs)("div",{className:"_dsplFlx ",children:[(0,y.jsxs)("div",{className:"_dsplFlx",style:{marginTop:20},children:[(0,y.jsx)("div",{className:"desc_lbl",children:"Comprobante:"}),(0,y.jsx)("div",{className:"name comprobante_id",style:0!==s.balance?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:null===s||void 0===s?void 0:s.comprobanteId})]}),0!==s.balance?(0,y.jsx)("div",{className:"msg_alert",children:(0,y.jsx)("div",{className:"msg_alert_title",children:"El comprobante no esta cuadrado"})}):null,(0,y.jsx)("div",{className:"flexSpace"}),(0,y.jsx)("div",{className:"icon",onClick:function(){h(s)},children:(0,y.jsx)(I,{name:"printer",color:"#282828"})})]}),(0,y.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,y.jsx)("div",{className:"flexSpace"}),(0,y.jsxs)("div",{className:"_dsplFlx",children:[(0,y.jsx)("div",{className:"desc_lbl"}),(0,y.jsx)("div",{className:"name",children:(0,i.sG)(null===s||void 0===s?void 0:s.date)})]})]}),(0,y.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,y.jsx)("div",{className:"tr_bar_15",children:"Cuenta"}),(0,y.jsx)("div",{className:"tr_bar_15",children:"Sub Cuenta"}),(0,y.jsx)("div",{className:"tr_bar_40",children:"Documento"}),(0,y.jsx)("div",{className:"tr_bar_15",children:"Debito"}),(0,y.jsx)("div",{className:"tr_bar_15",children:"Credito"})]}),null===(r=(0,l.Eb)(null===s||void 0===s?void 0:s.operations))||void 0===r?void 0:r.map((function(e,n){return(0,y.jsx)(j,{element:e,in2D:n},n)})),(0,y.jsxs)("div",{className:"cmp_desc",children:[(0,y.jsx)("div",{className:"desc_lbl",children:"Detalles:"}),(0,y.jsxs)("div",{className:"description",children:[null===s||void 0===s?void 0:s.description," ",x]})]}),(0,y.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,y.jsx)("div",{className:"flexSpace"}),(0,y.jsx)("span",{className:"entryType",children:s.entryName||"Comprobante Manual"})]})]})},j=function(e){var n,t,o=e.element,a=e.in2D;return(0,y.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,y.jsx)("div",{className:"tr_bar_15",children:(0,y.jsx)(w,{data:o.account,labelField:"code",infoField:"name"})}),(0,y.jsx)("div",{className:"tr_bar_15",children:(0,y.jsx)(w,{data:o.sub_account,labelField:"subAccount",infoField:"subAccountName"})}),(0,y.jsx)("div",{className:"tr_bar_40",onClick:function(){if((0,i.ML)()){var e=(0,i.bh)("lastTimeCallModal")||0;if(Date.now()>e){var n=(0,i.Ld)((0,r.Z)({},(0,i.bh)("comprobante_list")[o.operationId]),["document","amount","type","description","account","subAccount","comprobanteId"]);(0,i.Rz)("upd_comprobantebyId",n),(0,i.Rz)("upd_comprobantebyId_bck",JSON.parse(JSON.stringify(n))),(0,i.Rz)("lastTimeCallModal",Date.now()+320);var t={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};t.content=(0,y.jsx)(g,{confirm:function(){},item:o}),(0,f.OpenModal)(t)}}},children:o.document}),(0,y.jsx)("div",{className:"tr_bar_15",children:null===(n=1*o.debit)||void 0===n?void 0:n.toFixed(2)}),(0,y.jsx)("div",{className:"tr_bar_15",children:null===(t=1*o.credit)||void 0===t?void 0:t.toFixed(2)})]},a)}},3588:function(e,n,t){t.d(n,{Eb:function(){return m},Gg:function(){return p},N$:function(){return l},Ng:function(){return d},WB:function(){return u},ly:function(){return s},tS:function(){return b}});var r=t(4165),o=t(1413),a=t(5861),i=t(2350),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,s,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year")},l=(0,i.I7)(s),e.next=5,l;case 5:(d=e.sent)&&!d.error&&(c(d),(0,i.bh)("showAllCmpbnt")&&((0,i.Rz)("comprobante_list",d),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(d)))),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,s,l,c,d,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((0,i.bh)("search_acc_record").length>3)){e.next=11;break}return(c=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year"),":date1":null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.initDate,":date2":null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate},(0,i.bh)("search_acc_record").split(" ").map((function(e,n){e&&(c.params[":search"+n]=e.trim())})),d=(0,i.I7)(c),e.next=7,d;case 7:(u=e.sent)&&!u.error&&((0,i.Rz)("comprobante_list",u),(0,i.Rz)("comprobante_by_doc",v((0,i.jQ)(u))),n&&n()),e.next=14;break;case 11:(0,i.Rz)("comprobante_list",null),(0,i.Rz)("comprobante_by_doc",null),n&&n();case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,o,a,s,l,c,d,u,v,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in 0,t={},o={},a={},n)c=n[s],(d=null===(l=(0,i.bh)("account_ids"))||void 0===l?void 0:l[c.account])&&((0,i.UE)(a[null===d||void 0===d?void 0:d.accountId])||(a[null===d||void 0===d?void 0:d.accountId]={saldo:0,name:(null===d||void 0===d?void 0:d.code)+" - "+(null===d||void 0===d?void 0:d.name),list:[]}),(0,i.UE)(t[c.comprobanteId])||(t[c.comprobanteId]=0,o[c.comprobanteId]=[]),u=1*(0,i.Zv)(("debit"===c.type?1:-1)*c.amount,2),a[null===d||void 0===d?void 0:d.accountId].saldo=1*(0,i.Zv)(a[d.accountId].saldo,2)+1*u,a[null===d||void 0===d?void 0:d.accountId].list.push([c.comprobanteId,u]),t[c.comprobanteId]=1*(0,i.Zv)(t[c.comprobanteId],2)+u,o[c.comprobanteId].push({ammount:u,operationId:c.comprobanteId}));for(p in v=null,t)t[p]&&(v||(v={}),v[p]=1);v&&((0,i.Rz)("comprobante_w_erros",v),(0,i.Rz)("has_filter_comp_error",!0));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,s,l,d,u,p,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(d=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,i.bh)("date_current_year"),":date1":(null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.initDate)-10,":date2":null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate},u=(0,i.I7)(d),e.next=5,u;case 5:(p=e.sent)&&!p.error&&((0,i.Rz)("comprobante_list",p),m=[],(0,i.bh)("comprobante_all_list")&&(0,i.bh)("comprobante_all_list").map((function(e){p[e.operationId]||console.log(e)})),p&&(0,i._2)(p).map((function(e){var n,t;p[e].account&&p[e].date>(null===(n=(0,i.bh)("date_range_comps"))||void 0===n?void 0:n.initDate)-10&&p[e].date<=(null===(t=(0,i.bh)("date_range_comps"))||void 0===t?void 0:t.lastDate)&&m.push(p[e])})),(0,i.Rz)("comprobante_by_doc",v(m)),c(m),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],n.map((function(e){var n,t,r=(0,o.Z)({},null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.delete_opera);r.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,i.bh)("date_current_year"),operationId:e.operationId},s.push(r)})),l=s.map(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.I7)(n),e.next=3,t;case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=5,Promise.all(l);case 5:t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function v(e){var n={};return e.length>0?e.map((function(e){var t=e.date;if(t&&e.account){var r=t+"_"+e.comprobanteId;if(!n[r]){n[r]={};["date","description","entryName","comprobanteId","employeeId"].forEach((function(t){n[r][t]=e[t]})),n[r].amount=0,n[r].balance=0,n[r].operations=[]}e.type&&n[r].operations.push(function(e){var n,t,r={};r.account=null===(n=(0,i.bh)("account_ids"))||void 0===n?void 0:n[e.account],r.sub_account=null===(t=(0,i.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],r.comprobanteId=e.comprobanteId,r.operationId=e.operationId,r.document=e.document,r.type=e.type;var o=(0,i.Zv)(e.amount,2);"credit"===e.type?(r.debit=0,r.credit=o):"debit"===e.type&&(r.credit=0,r.debit=o);return r}(e))}})):n=null,n}function p(e){(0,i.Rz)("has_filter_review",null),(0,i.Rz)("has_filter_comp_error",null),(0,i._2)(e).map((function(n){var t,r,o,a;null!==(t=(0,i.bh)("comp_under_review"))&&void 0!==t&&null!==(r=t.inReview)&&void 0!==r&&r[e[n].comprobanteId]&&(0,i.Rz)("has_filter_review",!0),null!==(o=(0,i.bh)("comp_under_review"))&&void 0!==o&&null!==(a=o.hasError)&&void 0!==a&&a[e[n].comprobanteId]&&(0,i.Rz)("has_filter_comp_error",!0)}))}var m=function(e){return(0,i.MV)("sortComprobantesByType",[e],(function(){var n="type";return e&&e.sort((function(e,t){var r=e[n],o=t[n];return r===o?t[o]-e[r]:o>r?1:-1}))}))},b=function(e,n){return(0,i.MV)("rangeArr",[e,n],(function(){return e?(0,i._2)(e).slice(0,n):[]}))}},2502:function(e,n,t){t.d(n,{Dy:function(){return s},G:function(){return v},aU:function(){return u},kQ:function(){return l},lG:function(){return c}});var r=t(4165),o=t(1413),a=t(5861),i=t(2350),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,s,l,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.all_employee)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId},l=(0,i.I7)(s),e.next=5,l;case 5:(c=e.sent)&&((0,i.Rz)("employees_list",u((0,i.jQ)(c),"code")),(0,i.Rz)("employees_ids",(0,i.ME)((0,i.jQ)(c),"employeeId")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,s,l,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,o.Z)({},null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_employee)).params={businessId:null===(a=(0,i.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,i.bh)("searchQry")},l=(0,i.I7)(s),e.next=5,l;case 5:(c=e.sent)&&((0,i.Rz)("employees_list",u((0,i.jQ)(c),"code")),n&&n());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,s,l,c,u,v,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=(0,o.Z)({},null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.filter_search_opera)).params={businessId:null===(s=(0,i.bh)("profileUser"))||void 0===s?void 0:s.businessId,year:(0,i.bh)("date_current_year"),":date1":(null===(l=(0,i.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)-10,":date2":null===(c=(0,i.bh)("date_range_comps"))||void 0===c?void 0:c.lastDate,":search0":n},v=(0,i.I7)(u),e.next=5,v;case 5:(p=e.sent)&&!p.error&&((0,i.Rz)("paystub_submayor_list",p),(0,i.Rz)("paystub_submayor_group",d((0,i.jQ)(p)))),t&&t();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function d(e){var n={};return e.length>0?e.map((function(e){var t=e.date+"_"+e.comprobanteId;if(!n[t]){n[t]={};["date","description","entryName","comprobanteId","employeeId","document"].forEach((function(r){n[t][r]=e[r]})),n[t].amount=0,n[t].balance=0,n[t].operations=[]}e.type&&(n[t].balance=1*(0,i.Zv)(n[t].balance,2)+("debit"===e.type?1*(0,i.Zv)(e.amount,2):0),n[t].operations.push(function(e){var n,t={};t.employeeId=null===(n=(0,i.bh)("employees_ids"))||void 0===n?void 0:n[e.employeeId],t.comprobanteId=e.comprobanteId,t.document=e.document,t.date=e.date,"credit"===e.type?(t.debit=0,t.credit=e.amount):"debit"===e.type&&(t.credit=0,t.debit=e.amount);return t}(e)))})):n=null,n}var u=function(e,n){return(0,i.MV)("sortEmployees",[e],(function(){return e&&e.sort((function(e,t){var r=1*e[n],o=1*t[n];return r<o?-1:r>o?1:0}))}))},v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var o,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={query:"deleteEmployeesHRG",params:{businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,employeeId:n}},s=(0,i.I7)(a),e.next=4,s;case 4:e.sent&&t&&t();case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},1e3:function(){},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=2064.0cda4c43.chunk.js.map