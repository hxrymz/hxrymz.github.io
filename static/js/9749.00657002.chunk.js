"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9749],{1475:(e,l,a)=>{a.d(l,{Je:()=>n,MX:()=>t,M_:()=>u,Qq:()=>i,bM:()=>v,lG:()=>r,p8:()=>o,sV:()=>d,tS:()=>p,vC:()=>c});var s=a(2350);const t=async e=>{e&&e()},i=async(e,l)=>{var a;let t={query:"getSignedUrl",params:{userId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,fileName:e}};const i=(0,s.I7)(t),n=await i;null!==n&&void 0!==n&&n.url?(0,s.Ey)(l)&&l(null===n||void 0===n?void 0:n.url):(0,s.Ey)(l)&&l(null)},n=async(e,l,a)=>{var t;let i={query:"ProccessImage",params:{userId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId,fileName:l,url:e}};const n=(0,s.I7)(i),d=await n;null!==d&&void 0!==d&&d.url?(0,s.Ey)(a)&&a(null===d||void 0===d?void 0:d.url):(0,s.Ey)(a)&&a(null)},d=async(e,l)=>{let a={query:"detectLandMark",params:{url:e}};const t=(0,s.I7)(a),i=await t;l(e,i||null)},r=async e=>{var l,a,t,i;let n={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.search_incms_expns};n.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,s.bh)("date_current_year"),":date1":null===(t=(0,s.bh)("date_range_comps"))||void 0===t?void 0:t.initDate,":date2":null===(i=(0,s.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate},(0,s.bh)("search_acc_record").split(" ").map(((e,l)=>{e&&(n.params[":search"+l]=e.trim())}));const d=(0,s.I7)(n),r=await d;r&&((0,s.Rz)("feedfMbls_ids",r),(0,s.Rz)("feedfMbls_list",m((0,s.jQ)(r),"date")),e&&e())},o=async()=>{let e=[];(0,s.bh)("feedfMbls_list").map((async(l,a)=>{var t,i,n,d,r,o;if(l.comprobanteId)return;let c={...l},v={...l},m="debit",u="credit";"expense"===(null===v||void 0===v?void 0:v.movementType)&&(m="credit",u="debit");let p=(null===v||void 0===v?void 0:v.title)+"; "+(null===v||void 0===v?void 0:v.description),h=null===(t=(0,s.bh)("categories_ids"))||void 0===t?void 0:t[null===v||void 0===v?void 0:v.categoryId],x={};x.amount=null===v||void 0===v?void 0:v.amount,x.movementId=null===v||void 0===v?void 0:v.movementId,x.description=p,x.date=null===v||void 0===v?void 0:v.date;let b={...x};x.account=null===(i=(0,s.bh)("global_account_params"))||void 0===i?void 0:i.cash_bank.account,x.type=m,b.account=null===h||void 0===h?void 0:h.account,null!==h&&void 0!==h&&h.subAccount&&(b.subAccount=null===h||void 0===h?void 0:h.subAccount),b.type=u;let _=[b,x];c.date?c.date=new Date(c.date).getTime()+4800:c.date=(new Date).getTime()+4800;let g=await(0,s.V_)(c.date,1*a+4);c.comprobanteId=g,c.document=null===(n=c.document)||void 0===n?void 0:n.trim(),_&&(null===(d=(0,s._2)(_))||void 0===d||d.map((async(a,t)=>{let i=_[a];if(!isNaN(1*i.amount)&&1*i.amount>0){var n,d;let a={...c};a.account=i.account,i.subAccount&&(a.subAccount=i.subAccount),a.movementRef=l.movementId,a.type=i.type,a.amount=1*i.amount,a.operationId=(0,s.M5)(),a.document=(0,s.LO)()+"_"+(0,s.UG)(c.date);let t={...null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.add_opera};t.params={businessId:null===(d=(0,s.bh)("profileUser"))||void 0===d?void 0:d.businessId,year:new Date(c.date).getFullYear()},t.form=a,e.push(t)}})));let f={...null===(r=(0,s.bh)((0,s.hQ)()))||void 0===r?void 0:r.upd__incms_expns};f.params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId,movementId:l.movementId,year:(0,s.bh)("date_current_year")},f.data2update={comprobanteId:g},e.push(f)})),setTimeout((()=>{}),4e3)},c=async e=>{var l,a;let t={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.search_categapp};t.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId},(0,s.bh)("search_categories").split(" ").map(((e,l)=>{e&&(t.params[":search"+l]=e.trim())}));const i=(0,s.I7)(t),n=await i;n&&((0,s.Rz)("categories_ids",n),(0,s.Rz)("categories_list",m((0,s.jQ)(n),"name")),e&&e())},v=async e=>{var l,a;let t={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.all_categapp};t.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId};const i=(0,s.I7)(t),n=await i;n&&(!function(e){const l=e=>({label:e.name,id:e.categoryId});(0,s.Rz)("categories_pick_data",e.map(l))}(n),(0,s.Rz)("categories_list",m(n,"name")),(0,s.Rz)("categories_ids",(0,s.ME)(n,"categoryId"))),e&&e()};const m=(e,l)=>(0,s.MV)("sort_feedfMbl",[e],(()=>e&&e.sort(((e,a)=>{let s=1*e[l],t=1*a[l];return s<t?-1:s>t?1:0})))),u=async(e,l)=>{var a,t;let i={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.delete__incms_expns};i.params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId,movementId:e};const n=(0,s.I7)(i);await n&&l&&l()},p=(e,l)=>(0,s.MV)("rangeArr",[e,l],(()=>e?(0,s._2)(e).slice(0,l):[]))},9749:(e,l,a)=>{a.r(l),a.d(l,{default:()=>z});var s=a(2791),t=(a(5868),a(9760)),i=a(2647),n=a(7689),d=a(1087),r=a(2350),o=a(5143),c=a(184);const v=(0,i.PU)(),m=e=>{var l,a;let{data:t,show:i,range2Scroll:n,updRange:o,type:m}=e;const u=(0,s.useRef)(null),p=(0,s.useRef)(0),h=(0,s.useRef)(!1),x=(0,s.useRef)(null);if((0,s.useEffect)((()=>(n&&(x.current=setInterval((()=>{let e=window.pageYOffset||document.documentElement.scrollTop;if(!h.current&&p.current!==e){p.current=e;let l=(0,r.cv)(u.current);l.top+l.height-p.current<0&&(0,r.Ey)(o)&&(h.current=!0,o())}}),250)),()=>{x.current&&clearInterval(x.current)})),[n]),!i)return null;let b=null!==t&&void 0!==t&&t.amount?(1*(null===t||void 0===t?void 0:t.amount)).toFixed(2):"0.00",_=null===(l=(0,r.bh)("categories_ids"))||void 0===l||null===(a=l[null===t||void 0===t?void 0:t.categoryId])||void 0===a?void 0:a.name;return(0,c.jsx)(d.OL,{className:"",ref:u,to:{pathname:"/movements/detail",search:"?cId="+(null===t||void 0===t?void 0:t.movementId)+"&view=1"},children:(0,c.jsx)("div",{className:"client_item_box gWXAaj jlytmu",onClick:async()=>{window.scrollTo(0,0),(0,r.Rz)((0,r.Ks)(),t)},style:{marginBottom:9},children:(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsxs)("div",{className:"",children:[(0,c.jsxs)("div",{className:"name  title  _dsplFlx ",children:[null!==t&&void 0!==t&&t.categoryId?null:(0,c.jsx)("div",{className:"icon_action",children:(0,c.jsx)(v,{name:"help",color:"var(--partial-success)",size:18})}),"".concat(null===t||void 0===t?void 0:t.title)]}),(0,c.jsx)("div",{className:"name  date ",children:"".concat((0,r.sG)(1*(null===t||void 0===t?void 0:t.date)))}),(0,c.jsxs)("div",{className:"category _dsplFlx",children:[null!==t&&void 0!==t&&t.imagePath?(0,c.jsx)("div",{className:"icon_action",style:{padding:"3px 4px 0 0"},children:(0,c.jsx)(v,{name:"image_outline",color:"#F7251A",size:14})}):null,_]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"name amount lbl_tx",children:["$",b]})]})})})},u=(e,l)=>{let a=(0,r.bh)("ignoreMemo")||{};return null!==a&&void 0!==a&&a[l.elmId]?(a[l.elmId]-=1,null!==a&&void 0!==a&&a[l.elmId]||null===a||void 0===a||delete a[l.elmId],(0,r.Rz)("ignoreMemo",a),!1):l.elmId===e.elmId&&l.show===e.show&&l.range2Scroll===e.range2Scroll},p=(0,s.memo)(m,u);a(8037);(0,i.Np)();const h=(0,i.JY)(),x=(0,i.LA)(),b=e=>{let{data:l,confirm:a}=e;const[i,n]=(0,s.useState)(!1),[d,v]=(0,s.useState)(1);(0,s.useEffect)((()=>{i||(n(!0),v((0,r.M5)()))}));const m=e=>{let l=new Date;if("last1M"===e){let e=l.getMonth()+1,a=new Date(l.getMonth()+1+"/01/"+l.getFullYear()),s=a.getTime(),t=a.setMonth(e)-600;(0,r.Rz)("date_range_comps",{initDate:s,lastDate:t})}else if("last3M"===e){let e=l.getMonth()+1,a=l.getMonth()-3;a<0&&(a=0);let s=new Date(l.getMonth()+1+"/01/"+l.getFullYear()),t=s.setMonth(a),i=s.setMonth(e)-600;(0,r.Rz)("date_range_comps",{initDate:t,lastDate:i})}else if("last6M"===e){let e=l.getMonth()+1,a=l.getMonth()-6;a<0&&(a=0);let s=new Date(l.getMonth()-6+"/01/"+l.getFullYear()),t=s.setMonth(a),i=s.setMonth(e)-600;(0,r.Rz)("date_range_comps",{initDate:t,lastDate:i})}else if("allYear"===e){let e=1*l.getFullYear(),a=1*l.getFullYear()+1,s=new Date("01/01/"+e).getTime(),t=new Date("01/01/"+a).getTime()-10;(0,r.Rz)("date_range_comps",{initDate:s,lastDate:t})}(0,r.Rz)("date_range_option",e),v((0,r.M5)()),(0,r.Ey)(a)&&(p(),a())},u=e=>{let l={...e};l.initDate=l.initDate-100,l.lastDate=l.lastDate+8638e4,(0,r.Rz)("date_range_comps",l),(0,r.Ey)(a)&&(p(),a())},p=()=>{(null===l||void 0===l?void 0:l.modalID)&&(0,t.CloseModal)({id:null===l||void 0===l?void 0:l.modalID})};return(0,c.jsxs)("div",{style:{height:"300px",width:"80vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title blue30",children:(0,o.mU)(55)}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20}}),(0,c.jsx)(h,{label:(0,o.mU)(60),active:"last1M"===(0,r.bh)("date_range_option"),updSelect:()=>m("last1M")}),(0,c.jsx)(h,{label:(0,o.mU)(61),active:"last3M"===(0,r.bh)("date_range_option"),updSelect:()=>m("last3M")}),(0,c.jsx)(h,{label:(0,o.mU)(62),active:"last6M"===(0,r.bh)("date_range_option"),updSelect:()=>m("last6M")}),(0,c.jsx)(h,{label:(0,o.mU)(63),active:"allYear"===(0,r.bh)("date_range_option"),updSelect:()=>m("allYear")}),(0,c.jsx)(h,{label:(0,o.mU)(64),active:"range"===(0,r.bh)("date_range_option"),updSelect:()=>(e=>{(0,r.Rz)("date_range_option",e),v((0,r.M5)());let l={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,c.jsx)(x,{onConfirm:u,isRange:!0,colors:{"--calendar-primary-color":"var(--primary-blue--backg-30)","--calendar-primary-backcolor":"var(--primary-blue--hover-back-30)","--calendar-selected_lbl_color":"var(--primary-blue--color-30)","--calendar-light-backcolor":"var(--dark-800)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--light-300)","--calendar-light-200":"var(--light-200)","--calendar-light-100":"var(--light-100)","--calendar-dark-800":"var(dark-800)","--calendar-white-100":"var(--primary-blue--color-30)","--calendar-white":"var(--white)"}}),(0,t.OpenModal)(l)})("range")}),(0,c.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:(0,c.jsx)("div",{className:"card"})})]})};var _=a(2825);(0,i.Np)(),(0,i.JY)(),(0,i.h0)();const g=e=>{var l;let{data:a,confirm:i}=e;const[n,d]=(0,s.useState)(!1),[v,m]=(0,s.useState)(1),u=()=>{m((0,r.M5)())};(0,s.useEffect)((()=>{n||(d(!0),m((0,r.M5)()),(0,o.Je)(u))}));const p=e=>{(0,r.Rz)("provider_filter",e),m((0,r.M5)()),(0,r.Ey)(i)&&(h(),i())},h=()=>{(null===a||void 0===a?void 0:a.modalID)&&(0,t.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})};let x=(0,r.bh)("providers_list");return(0,c.jsxs)("div",{style:{height:"80vh",width:"80vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title blue30",children:"Clientes"}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:" spaceAround flxWrp scollVh",style:{marginTop:20,maxHeight:"calc( 78vh - 70px)"},children:x&&(null===(l=(0,r._2)(x))||void 0===l?void 0:l.map((e=>(0,c.jsx)(f,{data:x[e],elmId:x[e].providerId,label:x[e].name,clickHandler:p,active:(0,r.bh)("provider_filter")},x[e].providerId))))})]})},f=e=>{let{clickHandler:l,label:a,active:s,elmId:t}=e,i=s===t?null:t;return(0,c.jsx)("div",{className:" btn_filter y2 itmMrg ".concat(s===t?"active":""," "),onClick:()=>l(i),children:(0,c.jsx)("span",{className:"y2",children:a})})};var j=a(5882),y=a(1475),N=a(8965);const I=(0,i.PU)(),w=(0,i.Vg)(),M=(0,i.tW)(),k=(0,j.lT)(),R=e=>{var l,a,i,n,d,v,m;let{}=e;const[,u]=(0,s.useState)(1),h=(0,r.bh)("movement_type"),[x,f]=(0,s.useState)(36),j=(0,s.useRef)(null),R=(0,s.useRef)(null),U=(0,s.useRef)(null),D=(0,s.useRef)(null),z=(0,s.useRef)(!1);(0,s.useEffect)((()=>{(0,y.bM)(E),(0,o.EV)(A)}),[]);const F=e=>{var l,a;null===j||void 0===j||null===(l=j.current)||void 0===l||l.setAttribute("show",e),null===R||void 0===R||null===(a=R.current)||void 0===a||a.setAttribute("loading",e)},T=(0,N.g)(!1,F),C=()=>{f((e=>e+36))},E=()=>{u((0,r.M5)())},A=()=>{setTimeout((()=>{T.value=!1,F(!1),64!==x?f(64):E()}),50)},H=async e=>{(0,r.Rz)("category_filter",e),T.value||(T.value=!0),F(!0),(0,o.EV)(A)},V=()=>{T.value||(T.value=!0),F(!0),(0,o.EV)(A)};let O=(0,r.bh)("client_list_"+h);const Y=e=>{(0,r.Rz)("movement_type",e),E(),T.value||(T.value=!0),F(!0),(0,o.EV)(A)};let Q="incomes"===(0,r.bh)("movement_type")?"var(--primary-blue--backg-30)":"var(--primary-red--color-f7)",P=null!==(l=(0,r.bh)("date_range_comps"))&&void 0!==l&&l.initDate?(0,r.sJ)(null===(a=(0,r.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)+" - "+(0,r.sJ)(null===(i=(0,r.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate):null,L=null===(n=(0,r.bh)("categories_ids"))||void 0===n||null===(d=n[(0,r.bh)("category_filter")])||void 0===d?void 0:d.name,J=null===(v=(0,r.bh)("providers_ids"))||void 0===v||null===(m=v[(0,r.bh)("provider_filter")])||void 0===m?void 0:m.name;return(0,c.jsxs)("div",{className:"customer_bx_dash colorType mobile_version",children:[(0,c.jsx)("style",{children:"\n\t\t\t\t\t.colorType{\n\t\t\t\t\t\t--label-theme-color:".concat(Q,";\n\t\t\t\t\t}\n\t\t\t\t")}),(0,c.jsxs)("div",{className:"colorType ",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{style:{marginTop:"8px"},children:(0,c.jsx)(w,{loadingColor:"var(-primary-blue--backg-30)",placeholder:(0,o.mU)(6),obs:u,fetchData:H,change:e=>{T.value||(T.value=!0),F(!0)},callempty:H,keyFlds:"searchQryNotary"})}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"icon blue30",children:(0,c.jsx)("div",{className:" action ",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,c.jsx)(k,{confirm:V}),(0,t.OpenModal)(e)},children:(0,c.jsx)(I,{name:"add"})})}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"icon blue30",children:(0,c.jsx)("div",{className:" action ",ref:D,onClick:()=>{z.value=!z.value,(e=>{var l,a;null===U||void 0===U||null===(l=U.current)||void 0===l||l.setAttribute("show",e),null===D||void 0===D||null===(a=D.current)||void 0===a||a.setAttribute("active",e)})(z.value)},children:(0,c.jsx)(I,{name:"filter"})})}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx bx_filter",style:{marginTop:2},children:(0,c.jsxs)("div",{className:"_dsplFlx w100 ",children:[(0,c.jsxs)("div",{className:" _dsplFlx totalize ",children:["Total:",(0,c.jsxs)("div",{className:"blue ",children:["$",S(O)]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" tab_switch ".concat("expenses"===h?"red_orangered":"white_black"," "),onClick:()=>Y("expenses"),children:(0,o.mU)(40)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" tab_switch ".concat("incomes"===h?"blue_30":"white_black"," "),onClick:()=>Y("incomes"),children:(0,o.mU)(42)}),(0,c.jsx)("div",{className:"flexSpace"})]})}),(0,c.jsx)("div",{className:"_dsplFlx bx_filter_toogle",style:{marginTop:2},ref:U,children:(0,c.jsxs)("div",{className:"_dsplFlx w100",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" btn_filter y2  ".concat(P?"w33 active":""," "),onClick:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,c.jsx)(b,{confirm:H}),(0,t.OpenModal)(l)},children:P||(0,o.mU)(55)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" btn_filter y2  ".concat(L?"w33 active":""," "),onClick:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,c.jsx)(_.Z,{type:h,confirm:H,init:(0,r.bh)("category_filter")}),(0,t.OpenModal)(l)},children:L||(0,o.mU)(54)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" btn_filter y2  ".concat(J?"w33 active":""," "),onClick:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,c.jsx)(g,{confirm:H}),(0,t.OpenModal)(l)},children:J||(0,o.mU)(57)}),(0,c.jsx)("div",{className:"flexSpace"})]})}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"loading_animation_container",style:{marginTop:2},ref:j,children:[(0,c.jsx)("div",{className:"load_animation",style:{backgroundColor:"incomes"===(0,r.bh)("movement_type")?"var(--primary-blue--backg-30)":"var(--primary-red--color-f7)"}}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:32},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"icon_compr _dsplFlx",children:[(0,c.jsx)("div",{className:"lbl_saving",children:"searching ..."}),(0,c.jsx)(M,{stroke:"incomes"===(0,r.bh)("movement_type")?"var(--primary-blue--backg-30)":"var(--primary-red--color-f7)",size:24,strokeW:8})]}),(0,c.jsx)("div",{className:"flexSpace"})]})]}),(0,c.jsx)("div",{className:"clients_container",ref:R,children:O&&(null===O||void 0===O?void 0:O.map(((e,l)=>(0,c.jsx)(p,{data:e,elmId:e.movementId,type:h,range2Scroll:x-l===24,show:l<x,updRange:C},e.movementId+"mov_id"))))})]})]})]})},S=e=>{var l;let a=0;return e&&(null===(l=(0,r._2)(e))||void 0===l||l.map(((l,s)=>{let t=1*e[l].amount;a=1*(0,r.Zv)(a,2)+1*(0,r.Zv)(t,2)}))),1*(0,r.Zv)(a,2)},U=(0,i.PU)(),D=(0,j.lM)(),z=e=>{var l,a;let{data:t,confirm:i,label:o,item:v}=e;const[m,u]=(0,s.useState)(1);let p=(0,n.TH)();const h=(0,n.s0)(),x=null===(l=p.search)||void 0===l||null===(a=l.split("?"))||void 0===a?void 0:a[1],b=(0,r.mB)(x);let _=null===b||void 0===b?void 0:b.tab;(0,s.useEffect)((()=>{_||h({pathname:"/movements",search:"?tab=resume"})}),[_]);const g=e=>{u((0,r.M5)())};return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"listFlx  ",children:(0,c.jsx)("p",{className:"nav_title_header header_mobile"})}),(0,c.jsxs)("div",{className:"ebEwoI",children:[(0,c.jsx)("div",{className:"jKZvHt ",children:(0,c.jsx)(d.OL,{className:"",to:"/",children:(0,c.jsx)("div",{className:"nav_title_header header_mobile ",onClick:e=>{document.cookie="".concat((0,r.in)(),'=""'),document.cookie='hrm_access_tkn = ""',(0,r.Rz)((0,r.nc)(),null),(0,r.Rz)("isAdmin",null),(0,r.wt)("dimention_hash")},children:(0,c.jsx)("div",{className:"logo_ssg  ",children:(0,c.jsx)("img",{src:"https://www.hrmfinance.com/logo192.png",alt:"logo"})})})})}),(0,c.jsx)("nav",{className:" iHJbYx",children:[{id:"resume",label:"Resume",navTo:{pathname:"/movements",search:"?tab=resume"},icon:"pdf_box"},{id:"movements",label:"Movements",navTo:{pathname:"/movements",search:"?tab=movements"},icon:"search"}].map((e=>(0,c.jsxs)(d.OL,{className:"bXnHIV ".concat(_===e.id?"activeTab":""),to:e.navTo,children:[(0,c.jsx)(U,{name:e.icon,size:22}),(0,c.jsx)("div",{className:"eULkqP",children:e.label})]},e.id+"_header")))})]}),(0,c.jsx)(F,{viewId:"resume",activeView:null===b||void 0===b?void 0:b.tab,children:(0,c.jsx)(D,{updObPrnt:g})}),(0,c.jsx)(F,{viewId:"movements",activeView:null===b||void 0===b?void 0:b.tab,children:(0,c.jsx)(R,{updObPrnt:g})})]})},F=e=>{let{viewId:l,activeView:a,children:s}=e;return(0,c.jsx)("div",{className:"opacityView",style:{opacity:l===a?1:0,marginTop:29},children:l===a?s:null})}},2825:(e,l,a)=>{a.d(l,{Z:()=>m});var s=a(2791),t=a(9760),i=a(2647),n=a(2350),d=a(8037),r=a(5143),o=a(184);const c=(0,i.Np)(),v=(0,i.tL)(),m=e=>{var l;let{data:a,confirm:i,type:c,init:v}=e;const[m,h]=(0,s.useState)(!1),[,x]=(0,s.useState)(1),b=()=>{x((0,n.M5)())};(0,s.useEffect)((()=>{m||(h(!0),x((0,n.M5)()),(0,r.bM)(b))}));const _=e=>{x((0,n.M5)()),(0,n.Ey)(i)&&(g(),i(e))},g=()=>{(null===a||void 0===a?void 0:a.modalID)&&(0,t.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})};let f=(0,n.bh)("categories_list");return(0,o.jsxs)("div",{style:{height:"80vh",width:"90vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"20px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title blue30",style:{margin:"10px"},children:(0,r.mU)(54)}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)(d.N,{color:"#007bfc",label:(0,r.mU)(46),clickHandler:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,o.jsx)(p,{}),(0,t.OpenModal)(l)}})})]}),(0,o.jsx)("div",{className:" spaceAround flxWrp scollVh",style:{marginTop:20,maxHeight:"calc( 78vh - 70px)"},children:f&&(null===(l=(0,n._2)(f))||void 0===l?void 0:l.map((e=>(0,o.jsx)(u,{data:f[e],elmId:f[e].categoryId,label:f[e].name,clickHandler:_,active:v,type:c},f[e].categoryId))))})]})},u=e=>{let{clickHandler:l,label:a,active:s,elmId:t,data:i,type:n}=e,d=s===t?null:t;return i.type!==n?null:(0,o.jsx)("div",{className:" btn_filter itmMrg ".concat(s===t?"active":""," "),onClick:()=>l(d),children:a})},p=e=>{var l,a,i;let{data:m,confirm:u,type:p,init:h}=e;const x="add_category_frm",[b,_]=(0,s.useState)(1),g=()=>{(null===m||void 0===m?void 0:m.modalID)&&(0,t.CloseModal)({id:null===m||void 0===m?void 0:m.modalID})},f=(e,l)=>{let a=(0,n.bh)(x)||{};a[e]=l,(0,n.Rz)(x,a),_((0,n.M5)())};return(0,o.jsxs)("div",{style:{height:"80vh",width:"90vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"20px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsxs)("p",{className:"form_title blue30",style:{margin:"10px"},children:[(0,r.mU)(46)," ",(0,r.mU)(54)]}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)(d.N,{color:"#007bfc",label:(0,r.mU)(43),clickHandler:async()=>{var e,l;let a=(0,n.bh)(x);a.categoryId=(0,n.M5)();let s={...null===(e=(0,n.bh)((0,n.hQ)()))||void 0===e?void 0:e.add_categapp};s.params={businessId:null===(l=(0,n.bh)("profileUser"))||void 0===l?void 0:l.businessId},s.form=a;const t=(0,n.I7)(s);await t&&((0,n.Rz)(x,{}),u&&u(),g())}})})]}),(0,o.jsxs)("div",{className:"",style:{margin:"30px 0"},children:[(0,o.jsx)("div",{className:"lbl_dtls",children:(0,o.jsx)(c,{init:null===(l=(0,n.bh)(x))||void 0===l?void 0:l.name,width:"68vw",label:(0,r.mU)(56),updChanges:e=>f("name",e)})}),(0,o.jsx)("div",{className:"lbl_dtls",children:(0,o.jsx)(c,{init:null===(a=(0,n.bh)(x))||void 0===a?void 0:a.description,width:"68vw",label:(0,r.mU)(53),updChanges:e=>f("description",e)})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"48px 10px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)(v,{data:[{label:(0,r.mU)(40),id:"expenses"},{label:(0,r.mU)(42),id:"incomes"}],active:null===(i=(0,n.bh)(x))||void 0===i?void 0:i.type,updSelect:e=>f("type",e),colors:{"--base-ck-primary-color":"var(--primary-blue--backg-30)","--base-ck-primary-backcolor":"var(--primary-blue--color-30)"}})]})]})]})}},8965:(e,l,a)=>{a.d(l,{g:()=>r,w:()=>d});var s=a(2791),t=a(184);const i=(0,s.forwardRef)(((e,l)=>{let{initValue:a}=e;const[i,n]=(0,s.useState)(a);return(0,s.useImperativeHandle)(l,(()=>({refresh(e){n(e)}}))),(0,t.jsxs)(t.Fragment,{children:[" ",i]})})),n="referenceRender",d=(e,l)=>{const[,a]=(0,s.useState)(e),d=(0,s.useRef)(null);return(0,s.useRef)(new Proxy({value:e},{get:function(e,a){return l.shallowRender&&a===n?(0,t.jsx)(i,{initValue:e.value,ref:d}):e[a]?e[a]:Reflect.get(...arguments)},set:function(e,s,t){var i;e[s]!==t&&(e[s]=t,l.shallowRender?null===d||void 0===d||null===(i=d.current)||void 0===i||i.refresh(t):a({...e}));return!0}})).current},r=(e,l,a)=>{const[,t]=(0,s.useState)(e);return(0,s.useRef)(new Proxy({value:e},{get:function(e,l){if(e[l])return e[l]},set:function(e,s,i){return e[s]!==i&&(e[s]=i,l&&l(e[s]),null!==a&&void 0!==a&&a.deep&&t({...e})),!0}})).current}},5868:()=>{}}]);
//# sourceMappingURL=9749.00657002.chunk.js.map