"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2203],{6501:function(e,a,i){var n=i(9760),l=i(2647),t=i(2350),s=i(184),r=(0,l.LA)();a.Z=function(e){var a=e.init,i=e.label,l=e.updDate,c=function(e){l(e.initDate+800)};return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"label",children:i||"Fecha"}),(0,s.jsx)("div",{className:"date2Upd",onClick:function(){var e={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,s.jsx)(r,{onConfirm:c,init:a}),(0,n.OpenModal)(e)},children:a?(0,t.sG)(a):(0,t.sG)((new Date).getTime())})]})}},1046:function(e,a,i){var n=i(4165),l=i(1413),t=i(5861),s=i(9439),r=i(2791),c=i(2350),d=i(2647),o=i(9760),u=i(6501),v=i(184),m=(0,d.Np)(),h=(0,d.YZ)(),x=(0,d.A5)(),p="add_client";a.Z=function(e){var a,i,d,j,b,g,_,N,y,w,S,M,k,C,D,I,F,Z,T,z,R=e.data,A=(e.elmId,e.confirm),H=(0,r.useState)(!1),O=(0,s.Z)(H,2),E=O[0],B=O[1],Y=(0,r.useState)(0),L=(0,s.Z)(Y,2),V=(L[0],L[1]);(0,r.useEffect)((function(){E||(B(!0),V((0,c.M5)()))}));var W=function(e,a,i){var n=(0,c.bh)(p)||{};i?(n[i]||(n[i]={}),n[i][e]=a):n[e]=a,(0,c.Rz)(p,n),V((0,c.M5)())},J=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){var a,i,t,s,r,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,c.bh)(p))&&i.dateOfBirth&&(t=new Date(i.dateOfBirth).getTime())&&(i.dob=t),i.clientNotaryId=(0,c.M5)(),(s=(0,l.Z)({},null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.add_notary)).form=i,r=(0,c.I7)(s),e.next=8,r;case 8:(d=e.sent)&&!d.error&&((0,c.Rz)(p,null),V((0,c.M5)()),U(),A&&A());case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){(null===R||void 0===R?void 0:R.modalID)&&(0,o.CloseModal)({id:null===R||void 0===R?void 0:R.modalID})};return(0,v.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title ",children:"Agregar Cliente"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:10},children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,v.jsx)(u.Z,{init:null===(a=(0,c.bh)(p))||void 0===a?void 0:a.dateOfBirth,label:"Fecha de nacimiento",updDate:function(e){return W("dateOfBirth",e)}})}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{style:{marginTop:39},children:(0,v.jsx)(x,{init:null===(i=(0,c.bh)(p))||void 0===i?void 0:i.genre,lbl_empty:"Sexo",list:[{label:"Mujer",id:"Female"},{label:"Hombre",id:"Male"}],onSelect:function(e){return W("genre",e.id)},background:"var(--dark-900)",color:"var(--primary)"})}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{style:{marginTop:39},children:(0,v.jsx)(x,{init:null===(d=(0,c.bh)(p))||void 0===d?void 0:d.maritalStatus,lbl_empty:"Estado Civil",list:[{label:"Soltero",id:"Single"},{label:"Casado",id:"Married"},{label:"Divorciado",id:"Divorced"},{label:"Viudo",id:"Widowed"}],onSelect:function(e){return W("maritalStatus",e.id)},direction:"right",background:"var(--dark-900)",color:"var(--primary)"})}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{style:{marginTop:39},children:(0,v.jsx)(x,{init:null===(j=(0,c.bh)(p))||void 0===j?void 0:j.race,lbl_empty:"raza",list:[{label:"Hispanic or Latino",id:"Hispanic or Latino"},{label:"American White",id:"American White"},{label:"African",id:"African"}],onSelect:function(e){return W("race",e.id)},background:"var(--dark-900)",color:"var(--primary)"})}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{marginTop:10},children:[(0,v.jsx)(m,{init:null===(b=(0,c.bh)(p))||void 0===b?void 0:b.firstName,label:"Nombre",width:200,updChanges:function(e){return W("firstName",e)}}),(0,v.jsx)(m,{init:null===(g=(0,c.bh)(p))||void 0===g?void 0:g.middleName,label:"Segundo Nombre",width:200,updChanges:function(e){return W("middleName",e)}}),(0,v.jsx)(m,{init:null===(_=(0,c.bh)(p))||void 0===_?void 0:_.lastName,label:"Apellidos",width:360,updChanges:function(e){return W("lastName",e)}})]}),(0,v.jsx)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{marginTop:10},children:(0,v.jsx)(m,{init:null===(N=(0,c.bh)(p))||void 0===N?void 0:N.phoneNumber,label:"Telefono",width:160,updChanges:function(e){return W("phoneNumber",e)}})}),(0,v.jsx)("div",{className:"separator"}),(0,v.jsx)("p",{className:"group_title",children:"Lugar de Nacimiento"}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,v.jsx)(m,{init:null===(y=(0,c.bh)(p))||void 0===y||null===(w=y.placeOfBirth)||void 0===w?void 0:w.city,label:"Municipio",width:200,updChanges:function(e){return W("city",e,"placeOfBirth")}}),(0,v.jsx)(m,{init:null===(S=(0,c.bh)(p))||void 0===S||null===(M=S.placeOfBirth)||void 0===M?void 0:M.state,label:"Provincia",width:200,updChanges:function(e){return W("state",e,"placeOfBirth")}}),(0,v.jsx)(m,{init:null===(k=(0,c.bh)(p))||void 0===k||null===(C=k.placeOfBirth)||void 0===C?void 0:C.country,label:"Pais",width:200,updChanges:function(e){return W("country",e,"placeOfBirth")}})]}),(0,v.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:20},children:[(0,v.jsx)(m,{init:null===(D=(0,c.bh)(p))||void 0===D?void 0:D.countryOfCitizenship,label:"Ciudadania",width:200,updChanges:function(e){return W("countryOfCitizenship",e)}}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:40},children:[(0,v.jsx)(h,{initvalue:null===(I=(0,c.bh)(p))||void 0===I?void 0:I.isInUSA,keyCode:57,updChange:function(e){return W("isInUSA",e)},color:"var(--primary)"}),(0,v.jsx)("span",{className:"checklabel",children:"esta en USA"})]}),(0,v.jsx)(m,{init:null===(F=(0,c.bh)(p))||void 0===F||null===(Z=F.currentLocation)||void 0===Z?void 0:Z.state,label:"Estado de Recidencia Actual",width:200,updChanges:function(e){return W("state",e,"currentLocation")}}),(0,v.jsx)(m,{init:null===(T=(0,c.bh)(p))||void 0===T||null===(z=T.currentLocation)||void 0===z?void 0:z.country,label:"Pais de Recidencia Actual",width:200,updChanges:function(e){return W("country",e,"currentLocation")}})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"card",children:(0,v.jsx)(f,{label:"Agregar",clickHandler:J})})]})]})};var f=function(e){var a=e.clickHandler,i=e.label;return(0,v.jsx)("div",{className:" jaqJnq_hrm1",children:(0,v.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:a,children:(0,v.jsx)("span",{className:" jaqJnq_hrm1",children:i})})})}},9606:function(e,a,i){i.r(a),i.d(a,{default:function(){return D}});var n=i(9439),l=i(2791),t=(i(5868),i(9760)),s=i(2647),r=i(7689),c=i(1087),d=i(2350),o=i(4165),u=i(5861),v=i(5143),m=i(184),h=function(e){var a=e.data,i=(e.elmId,(0,l.useState)(!1)),t=(0,n.Z)(i,2),s=t[0],r=t[1],v=(0,l.useState)(0),h=(0,n.Z)(v,2),x=(h[0],h[1]);(0,l.useEffect)((function(){s||(r(!0),x((0,d.M5)()))}));var p=function(){var e=(0,u.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,d.Rz)("marriage_certificate",null),(0,d.Rz)("birth_certificate",null),(0,d.Rz)("driver_licence_translate",null),(0,d.Rz)("data_frm_i598",null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=null!==a&&void 0!==a&&a.amount?(1*(null===a||void 0===a?void 0:a.amount)).toFixed(2):"0.00";return(0,m.jsx)(c.OL,{className:"",to:{pathname:"/movements/detail",search:"?cId="+(null===a||void 0===a?void 0:a.movementId)+"&view=1"},children:(0,m.jsx)("div",{className:"client_item_box gWXAaj jlytmu",onClick:p,style:{marginBottom:9},children:(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("div",{className:"name  title  ",children:"".concat(null===a||void 0===a?void 0:a.title)}),(0,m.jsx)("div",{className:"name  date ",children:"".concat((0,d.sG)(1*(null===a||void 0===a?void 0:a.date)))})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"name amount lbl_tx",children:["$",f]})]})})})},x=(i(1046),i(1413)),p=(i(5529),(0,s.Np)(),(0,s.JY)()),f=(0,s.h0)(),j=function(e){var a=e.data,i=e.confirm,s=(0,l.useState)(!1),r=(0,n.Z)(s,2),c=r[0],o=r[1],u=(0,l.useState)(1),v=(0,n.Z)(u,2),h=(v[0],v[1]);(0,l.useEffect)((function(){c||(o(!0),h((0,d.M5)()))}));var j=function(e){var a=new Date;if("last1M"===e){var n=a.getMonth()+1,l=new Date(a.getMonth()+1+"/01/"+a.getFullYear()),t=l.getTime(),s=l.setMonth(n)-600;(0,d.Rz)("date_range_comps",{initDate:t,lastDate:s})}else if("last3M"===e){var r=a.getMonth()+1,c=a.getMonth()-3;c<0&&(c=0);var o=new Date(a.getMonth()+1+"/01/"+a.getFullYear()),u=o.setMonth(c),v=o.setMonth(r)-600;(0,d.Rz)("date_range_comps",{initDate:u,lastDate:v})}else if("last6M"===e){var m=a.getMonth()+1,x=a.getMonth()-6;x<0&&(x=0);var p=new Date(a.getMonth()-6+"/01/"+a.getFullYear()),f=p.setMonth(x),j=p.setMonth(m)-600;(0,d.Rz)("date_range_comps",{initDate:f,lastDate:j})}else if("allYear"===e){var b=1*a.getFullYear(),_=1*a.getFullYear()+1,N=new Date("01/01/"+b).getTime(),y=new Date("01/01/"+_).getTime()-10;(0,d.Rz)("date_range_comps",{initDate:N,lastDate:y})}(0,d.Rz)("date_range_option",e),h((0,d.M5)()),(0,d.Ey)(i)&&(g(),i())},b=function(e){var a=(0,x.Z)({},e);a.initDate=a.initDate-100,a.lastDate=a.lastDate+8638e4,(0,d.Rz)("date_range_comps",a),(0,d.Ey)(i)&&(g(),i())},g=function(){(null===a||void 0===a?void 0:a.modalID)&&(0,t.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})};return(0,m.jsxs)("div",{style:{height:"300px",width:"80vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title blue30",children:"Rango de Fecha"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20}}),(0,m.jsx)(p,{label:"mes actual",active:"last1M"===(0,d.bh)("date_range_option"),updSelect:function(){return j("last1M")}}),(0,m.jsx)(p,{label:"ultimos 3 meses",active:"last3M"===(0,d.bh)("date_range_option"),updSelect:function(){return j("last3M")}}),(0,m.jsx)(p,{label:"ultimos 6 meses",active:"last6M"===(0,d.bh)("date_range_option"),updSelect:function(){return j("last6M")}}),(0,m.jsx)(p,{label:"actual year",active:"allYear"===(0,d.bh)("date_range_option"),updSelect:function(){return j("allYear")}}),(0,m.jsx)(p,{label:"Rango de fechas",active:"range"===(0,d.bh)("date_range_option"),updSelect:function(){return function(e){(0,d.Rz)("date_range_option",e),h((0,d.M5)());var a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,m.jsx)(f,{onConfirm:b,isRange:!0}),(0,t.OpenModal)(a)}("range")}}),(0,m.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:(0,m.jsx)("div",{className:"card"})})]})},b=((0,s.Np)(),(0,s.JY)(),(0,s.h0)(),function(e){var a,i=e.data,s=e.confirm,r=(0,l.useState)(!1),c=(0,n.Z)(r,2),o=c[0],u=c[1],h=(0,l.useState)(1),x=(0,n.Z)(h,2),p=(x[0],x[1]),f=function(){p((0,d.M5)())};(0,l.useEffect)((function(){o||(u(!0),p((0,d.M5)()),(0,v.bM)(f))}));var j=function(e){(0,d.Rz)("category_filter",e),p((0,d.M5)()),(0,d.Ey)(s)&&(b(),s())},b=function(){(null===i||void 0===i?void 0:i.modalID)&&(0,t.CloseModal)({id:null===i||void 0===i?void 0:i.modalID})},_=(0,d.bh)("categories_list");return(0,m.jsxs)("div",{style:{height:"80vh",width:"80vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title blue30",children:"Categories"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:"_dsplFlx  spaceAround flxWrp scollVh",style:{marginTop:20,maxHeight:"calc( 78vh - 70px)"},children:_&&(null===(a=(0,d._2)(_))||void 0===a?void 0:a.map((function(e){return(0,m.jsx)(g,{data:_[e],elmId:_[e].categoryId,label:_[e].name,clickHandler:j,active:(0,d.bh)("category_filter")},_[e].categoryId)})))})]})}),g=function(e){var a=e.clickHandler,i=e.label,n=e.active,l=e.elmId,t=n===l?null:l;return(0,m.jsx)("div",{className:" btn_filter ".concat(n===l?"active":""," "),onClick:function(){return a(t)},children:i})},_=((0,s.Np)(),(0,s.JY)(),(0,s.h0)(),function(e){var a,i=e.data,s=e.confirm,r=(0,l.useState)(!1),c=(0,n.Z)(r,2),o=c[0],u=c[1],h=(0,l.useState)(1),x=(0,n.Z)(h,2),p=(x[0],x[1]),f=function(){p((0,d.M5)())};(0,l.useEffect)((function(){o||(u(!0),p((0,d.M5)()),(0,v.Je)(f))}));var j=function(e){(0,d.Rz)("provider_filter",e),p((0,d.M5)()),(0,d.Ey)(s)&&(b(),s())},b=function(){(null===i||void 0===i?void 0:i.modalID)&&(0,t.CloseModal)({id:null===i||void 0===i?void 0:i.modalID})},g=(0,d.bh)("providers_list");return(0,m.jsxs)("div",{style:{height:"80vh",width:"80vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title blue30",children:"Clientes"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:" spaceAround flxWrp scollVh",style:{marginTop:20,maxHeight:"calc( 78vh - 70px)"},children:g&&(null===(a=(0,d._2)(g))||void 0===a?void 0:a.map((function(e){return(0,m.jsx)(N,{data:g[e],elmId:g[e].providerId,label:g[e].name,clickHandler:j,active:(0,d.bh)("provider_filter")},g[e].providerId)})))})]})}),N=function(e){var a=e.clickHandler,i=e.label,n=e.active,l=e.elmId,t=n===l?null:l;return(0,m.jsx)("div",{className:" btn_filter y2 ".concat(n===l?"active":""," "),onClick:function(){return a(t)},children:(0,m.jsx)("span",{className:"y2",children:i})})},y=(0,s.PU)(),w=(0,s.Vg)(),S=(0,s.tW)(),M=function(e){e.title,e.description;var a,i,s,r,c,x,p,f,g=(0,l.useState)(1),N=(0,n.Z)(g,2),M=(N[0],N[1]),C=(0,l.useState)(!1),D=(0,n.Z)(C,2),I=(D[0],D[1]),F=(0,l.useState)(!1),Z=(0,n.Z)(F,2),T=Z[0],z=Z[1],R=(0,l.useState)("expenses"),A=(0,n.Z)(R,2),H=A[0],O=A[1],E=(0,l.useState)(!1),B=(0,n.Z)(E,2),Y=B[0],L=B[1];(0,l.useEffect)((function(){I(!0),(0,v.EV)(V)}),[]);var V=function(){M((0,d.M5)()),setTimeout((function(){I(!1),z(!1)}),50)},W=function(){var e=(0,u.Z)((0,o.Z)().mark((function e(a,i){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!T&&z(!0),I(!0),(0,v.EV)(V),setTimeout((function(){}),100);case 4:case"end":return e.stop()}}),e)})));return function(a,i){return e.apply(this,arguments)}}(),J=(0,d.bh)("client_list_"+H),U=function(e){O(e),I(!0),(0,v.EV)(V)},P=null!==(a=(0,d.bh)("date_range_comps"))&&void 0!==a&&a.initDate?(0,d.sJ)(null===(i=(0,d.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)+" - "+(0,d.sJ)(null===(s=(0,d.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate):null,q=null===(r=(0,d.bh)("categories_ids"))||void 0===r||null===(c=r[(0,d.bh)("category_filter")])||void 0===c?void 0:c.name,G=null===(x=(0,d.bh)("providers_ids"))||void 0===x||null===(p=x[(0,d.bh)("provider_filter")])||void 0===p?void 0:p.name;return(0,m.jsxs)("div",{className:" customer_bx_dash\t ",children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{style:{marginTop:"8px"},children:(0,m.jsx)(w,{loadingColor:"var(-primary-blue--backg-30)",label:"Buscar un cliente",obs:M,fetchData:W,change:function(e){!T&&z(!0)},callempty:W,keyFlds:"searchQryNotary"})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"icon blue30",children:(0,m.jsx)("div",{className:" action ",onClick:function(){},children:(0,m.jsx)(y,{name:"add"})})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"icon blue30",children:(0,m.jsx)("div",{className:" action ".concat(Y?"active":""," "),onClick:function(){return L(!Y)},children:(0,m.jsx)(y,{name:"filter"})})}),(0,m.jsx)("div",{className:"flexSpace"})]}),Y?(0,m.jsx)("div",{className:"_dsplFlx bx_filter",style:{marginTop:2},children:(0,m.jsxs)("div",{className:"_dsplFlx w100",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:" btn_filter y2  ".concat(P?"w33 active":""," "),onClick:function(e){var a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,m.jsx)(j,{confirm:W}),(0,t.OpenModal)(a)},children:P||"Date"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:" btn_filter y2  ".concat(q?"w33 active":""," "),onClick:function(e){var a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,m.jsx)(b,{confirm:W}),(0,t.OpenModal)(a)},children:q||"Categories"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:" btn_filter y2  ".concat(G?"w33 active":""," "),onClick:function(e){var a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,m.jsx)(_,{confirm:W}),(0,t.OpenModal)(a)},children:G||"Customers"}),(0,m.jsx)("div",{className:"flexSpace"})]})}):(0,m.jsx)("div",{className:"_dsplFlx bx_filter",style:{marginTop:2},children:(0,m.jsxs)("div",{className:"_dsplFlx w100 ",children:[(0,m.jsxs)("div",{className:" _dsplFlx totalize ",children:["Total:",(0,m.jsxs)("div",{className:"blue ",children:["$",k(J)]})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:" tab_switch ".concat("expenses"===H?"active":""," "),onClick:function(){return U("expenses")},children:"Expenses"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:" tab_switch ".concat("incomes"===H?"active":""," "),onClick:function(){return U("incomes")},children:"Incomes"}),(0,m.jsx)("div",{className:"flexSpace"})]})}),(0,m.jsx)("div",{children:T?(0,m.jsxs)("div",{style:{marginTop:2},children:[(0,m.jsx)("div",{className:"load_animation",style:{backgroundColor:"var(--primary-blue--backg-30)"}}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:32},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"icon_compr _dsplFlx",children:[(0,m.jsx)("div",{className:"lbl_saving",children:"searching ..."}),(0,m.jsx)(S,{stroke:"var(--primary-blue--backg-30)",size:24,strokeW:8})]}),(0,m.jsx)("div",{className:"flexSpace"})]})]}):(0,m.jsx)("div",{className:"clients_container",children:J&&(null===(f=(0,d._2)(J))||void 0===f?void 0:f.map((function(e){return(0,m.jsx)(h,{data:J[e],elmId:e},e)})))})})]})},k=function(e){var a,i=0;return e&&(null===(a=(0,d._2)(e))||void 0===a||a.map((function(a,n){var l=1*e[a].amount;i=1*(0,d.Zv)(i,2)+1*(0,d.Zv)(l,2)}))),1*(0,d.Zv)(i,2)},C=(0,s.PU)(),D=function(e){e.data,e.confirm,e.label,e.item;var a,i,t=(0,l.useState)(1),s=(0,n.Z)(t,2),o=(s[0],s[1]),u=(0,r.TH)(),v=(0,r.s0)(),h=null===(a=u.search)||void 0===a||null===(i=a.split("?"))||void 0===i?void 0:i[1],x=(0,d.mB)(h),p=null===x||void 0===x?void 0:x.tab;(0,l.useEffect)((function(){p||v({pathname:"/movements",search:"?tab=customers"})}),[p]);return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"listFlx  ",children:(0,m.jsx)("p",{className:"nav_title_header header_mobile"})}),(0,m.jsxs)("div",{className:"ebEwoI",children:[(0,m.jsx)("div",{className:"jKZvHt ",children:(0,m.jsx)(c.OL,{className:"",to:"/",children:(0,m.jsx)("div",{className:"nav_title_header header_mobile ",children:(0,m.jsx)("div",{className:"logo_ssg  ",children:(0,m.jsx)("img",{src:"https://www.hrmfinance.com/logo192.png",alt:"logo"})})})})}),(0,m.jsx)("nav",{className:" iHJbYx",children:[{id:"customers",label:"Customer",navTo:{pathname:"/movements",search:"?tab=customers"},icon:"search"},{id:"reports",label:"Reportes",navTo:{pathname:"/movements",search:"?tab=reports"},icon:"pdf_box"}].map((function(e){return(0,m.jsxs)(c.OL,{className:"bXnHIV ".concat(p===e.id?"activeTab":""),to:e.navTo,children:[(0,m.jsx)(C,{name:e.icon,size:22}),(0,m.jsx)("div",{className:"eULkqP",children:e.label})]},e.id+"_header")}))})]}),(0,m.jsx)(I,{viewId:"image",activeView:null===x||void 0===x?void 0:x.tab}),(0,m.jsx)(I,{viewId:"customers",activeView:null===x||void 0===x?void 0:x.tab,children:(0,m.jsx)(M,{updObPrnt:function(e){o((0,d.M5)())}})})]})},I=function(e){var a=e.viewId,i=e.activeView,n=e.children;return(0,m.jsx)("div",{className:"opacityView",style:{opacity:a===i?1:0,marginTop:29},children:a===i?n:null})}},5868:function(){}}]);
//# sourceMappingURL=2203.9084c7f5.chunk.js.map