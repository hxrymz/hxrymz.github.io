(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{182:function(e,t,a){"use strict";a.r(t);var n=a(31),c=a(1),r=a.n(c),s=a(3),i=a(2),l=a.n(i),o=a(15),d=a(4),m=a(156),u=(a(37),a(9)),b=a(22),p=a(5),v=a(0),O=(Object(b.BTNH_Cmpt)(),Object(b.Icon_Cmpt)()),j=Object(b.ModalDate_Cmpt)(),f=(Object(b.InputText_Cmpt)(),Object(d.a)(function(){return a.e(63).then(a.bind(null,171))}),Object(d.a)(function(){return a.e(60).then(a.bind(null,172))}),Object(d.a)(function(){return a.e(59).then(a.bind(null,173))}),Object(d.a)(function(){return a.e(1).then(a.bind(null,81))})),E=function(){var e=Object(s.a)(r.a.mark(function e(t,a){var n,c,s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={query:"getExpensesByKeyID",fields:["id","createdDate","description","amount","categoryId","customerId","title"],params:{id:t},arraySerialization:1},c=Object(v.r)(Object(v.S)(),n),e.next=5,c;case 5:(s=e.sent)&&s.data&&(i=n.arraySerialization?Object(v.n)(s.data,n.fields,1):s.data)&&i[t]&&i[t].createdDate&&(Object(v.Cb)("movementsDetails",i[t]),Object(u.getThumbnailImg)("google_map-min.png"),Object(u.updObserveChanges)());case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}();t.default=Object(m.a)(function(e){Object(o.c)(p.e),Object(o.c)(p.g);var t=Object(i.useState)(!1),a=Object(n.a)(t,2),c=a[0],d=a[1],m=Object(i.useState)(null),b=Object(n.a)(m,2),N=b[0],g=b[1],_=Object(i.useState)(!1),y=Object(n.a)(_,2),D=y[0],h=y[1],w=Object(i.useState)(0),x=Object(n.a)(w,2),I=(x[0],x[1]),C=Object(v.Q)().outerWidth,S=window.location.hash.split("?")[1]?window.location.hash.split("?")[1]:null,k=Object(v.lb)(S),F=Object(v.Q)().movementsDetails||{};Object(v.N)();Object(i.useEffect)(function(){N!==C&&g(C),c||(d(!0),Object(u.getCategories)(),Object(v.Db)(9),E(k.mId,k.sId),setTimeout(function(){window.scrollTo(0,0)},350),setTimeout(function(){return h(!0)},50))});var Q=Object(v.D)(),T="Android"===Q.os||"iPhone"===Q.os||Object(v.Q)().outerWidth<550,q=(Object(v.Q)("agentId2")||F.agentId,F&&F.amount*F.tasa?F.amount*F.tasa:0),A=(F&&F.receiver&&F.receiver,F&&F.prdDtls&&F.prdDtls.products,F&&F.discount?F.discount:0),B=(F&&F.receiver&&F.receiver.lat&&F.receiver.lat.length,F&&F.agentDestinationDetails&&F.agentDestinationDetails.name,F&&Object(v.l)(1*F.createdDate)),H=F&&Object(v.Q)("categories")&&Object(v.Q)("categories")[F.categoryId]&&Object(v.Q)("categories")[F.categoryId].name,L=Object(i.useState)(""),z=Object(n.a)(L,2),G=z[0],P=(z[1],Object(i.useState)(!1)),K=Object(n.a)(P,2),M=(K[0],K[1],Object(i.useState)(!1)),R=Object(n.a)(M,2),V=(R[0],R[1],Object(i.useState)(!1)),W=Object(n.a)(V,2),J=(W[0],W[1],Object(v.Q)("receiversList")||{});Object(v.c)()&&G&&G.length>1&&(J=function(e,t){var a={};return Object(v.f)(e).map(function(n){var c=t&&t.toLowerCase(),r=e[n].name&&e[n].name.toLowerCase();c&&r&&r.indexOf(c)>=0&&(a[n]=e[n])}),a}(Object(v.Q)("receiversList"),G),Object(v.f)(J));var $=F&&F.amount,U=function(){var e=Object(s.a)(r.a.mark(function e(t,a){var n,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=new Date(a),c=new Date,n.setHours(c.getHours()),n.setMinutes(c.getMinutes()),(s=Object(v.Q)("movementsDetails")).createdDate=n.getTime(),Object(v.Cb)("movementsDetails",s),I(Object(v.z)());case 8:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),X=F&&F.orderId||F&&F.id,Y=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,n,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="incomes"===Object(v.Q)("actionType")?"Incomes":"Expenses",n={params:{userId:Object(v.N)(),id:F&&F.id,collectionName:a},query:"getInvoicePdfByKeyID"},c=Object(v.r)(Object(v.S)(),n),e.next=5,c;case 5:(s=e.sent)&&s.data&&window.open(s.data);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,n,c,s,i,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(v.Q)("year_filter"),(n=new Date("1/1/"+a)).setHours(0,0,0,1),(c=new Date("1/1/"+(a+1))).setHours(23,59,59,999),s={query:"get1099PdfByKeyID",params:{":date1":n.getTime()+"",":date2":c.getTime()+"",customerId:F.customerId},queryString:"createdDate > :date1 AND createdDate < :date2 AND customerId = customerId"},i=Object(v.r)(Object(v.S)(),s),e.next=9,i;case 9:(l=e.sent)&&l.data&&window.open("https://qvamarkets.com/gql_api/1099?tk=".concat(l.data));case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("style",null,"\n        .palette{\n          --base-color: rgb(21, 100, 191,1);\n          --base-color-gradient: 21, 100, 191;\n        }\n        "),l.a.createElement("div",{className:"palette  formContainer historyDetail  shopping_cart InfoM ".concat(T?"is_mobile":""),style:{opacity:F&&D?1:0}},l.a.createElement("div",{className:"centerListCardProd "},l.a.createElement("div",{className:"formContainer centerListCardProd ",style:{opacity:1}},l.a.createElement("div",{className:" _flxWrp HRKRR"},l.a.createElement("div",{className:"  headerTtl"},l.a.createElement("div",{className:"pym81b sendBx "},l.a.createElement("div",{className:"type_mov "},X),l.a.createElement("div",{className:"total_cart total_mov ".concat(q>0?"pos":"neg")},"$ ".concat($&&"number"===typeof $?$.toFixed(2):0),l.a.createElement("div",{className:"sendBtn"})),Object(v.c)()&&A?l.a.createElement("div",{className:"cost_detail"},l.a.createElement("div",{className:"amount"},"".concat(Object(v.tb)(56),":  "),l.a.createElement("span",null,"$".concat(q?(1*q).toFixed(2):0)))):null,l.a.createElement("div",{className:"date_mov",onClick:function(){return function(e){var t={zIndex:190,observeResize:!0};t.props={title:"",item:e},t.content=l.a.createElement(j,{valueUpdate:function(t){return U(e,t)},initValue:F&&F.deliveryDate})}()}},B))),F&&F.customerId?l.a.createElement("div",{className:" _dsplFlx spaceAround  "},l.a.createElement("div",{className:" _dsplFlx spaceAround  "},l.a.createElement(f,{updValue:Y,placeholder:"Generate Invoice"})),l.a.createElement("div",{className:" _dsplFlx spaceAround  "},l.a.createElement(f,{updValue:Z,placeholder:"Generate 1099"}))):null,H?l.a.createElement("div",{className:"infoDesc"},l.a.createElement("div",{className:"_dsplFlx"},l.a.createElement("div",{className:"_key"},Object(v.tb)(32)),l.a.createElement("div",{className:"flexSpace"}),l.a.createElement("div",{className:"icon_open ",onClick:function(){}},l.a.createElement(O,{name:"outline_edit"}))),l.a.createElement("div",{className:"_value addressGmp _dsplFlx"},H)):null,l.a.createElement("div",{className:"infoDesc"},l.a.createElement("div",{className:"_dsplFlx"},l.a.createElement("div",{className:"_key"},Object(v.tb)(71)),l.a.createElement("div",{className:"flexSpace"}),l.a.createElement("div",{className:"icon_open ",onClick:function(){}},l.a.createElement(O,{name:"outline_edit"}))),l.a.createElement("div",{className:"_value addressGmp _dsplFlx"},F&&F.title)),l.a.createElement("div",{className:"infoDesc"},l.a.createElement("div",{className:"_dsplFlx"},l.a.createElement("div",{className:"_key"},Object(v.tb)(37)),l.a.createElement("div",{className:"flexSpace"}),l.a.createElement("div",{className:"icon_open ",onClick:function(){}},l.a.createElement(O,{name:"outline_edit"}))),l.a.createElement("div",{className:"_value addressGmp _dsplFlx"},F&&F.description)))))))})}}]);
//# sourceMappingURL=58.41205f44.chunk.js.map