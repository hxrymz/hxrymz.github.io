"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8667,9760],{9760:(e,l,a)=>{a.r(l),a.d(l,{CloseModal:()=>c,OpenModal:()=>r,default:()=>o});var t=a(2791),s=a(5408),i=a(2350),n=a(184);const d="listDialog_mdh392",o=()=>{const e=(0,i.bh)("listDialog")||{};(0,s.Z)(d);let l=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:l.map(((l,a)=>{let s=e[l];if(s&&s.visible){let e={};s.height&&(e.heigth=s.height),s.width,s.zIndex&&(e.zIndex=s.zIndex-1);let a={zIndex:s.zIndex},i=null,d=s.data;return s.content&&(i=t.cloneElement(s.content,{data:d})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:a,id:l,children:i})}),s.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(s.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},l)}}))})},r=e=>{let l=(0,i.bh)("listDialog")||{},a=(0,i.M5)();l[a]||(l[a]={}),l[a].visible=!0;let t={};e.props?(t=e.props,t.modalID=a):t.modalID=a;let s=document.getElementsByTagName("body")[0];null!==s&&void 0!==s&&s.style&&(s.style.overflowY="hidden"),l[a].isView=e.isView,l[a].observeResize=e.observeResize,l[a].observeResize&&(l[a].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(a,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===l[a].width&&t.height===l[a].height||(l[a].height=t.height+10,l[a].width=t.width,(0,i.Rz)("listDialog",l),(0,i.wt)(d)))}),200)),l[a].display=!0,e.zIndex&&(l[a].zIndex=e.zIndex),e.height&&(l[a].height=e.height),e.width&&(l[a].width=e.width),e.content&&(l[a].content=e.content),l[a].data=t,(0,i.Rz)("listDialog",l),(0,i.wt)(d),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",a),(0,i.wt)(d)}),125)},c=e=>{let l=(0,i.bh)("listDialog")||{},a=e.id;if(l[a]){var t,s,n;l[a].observeResize&&l[a].observeInterval&&clearInterval(l[a].observeInterval),l[a].display=!1,null===(t=l[a])||void 0===t||null===(s=t.data)||void 0===s||null===(n=s.closeEvent)||void 0===n||n.call(s),(0,i.Rz)("listDialog",l),delete l[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(d),setTimeout((()=>{delete l[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},1475:(e,l,a)=>{a.d(l,{Je:()=>n,MX:()=>s,M_:()=>u,Qq:()=>i,bM:()=>v,lG:()=>o,p8:()=>r,sV:()=>d,tS:()=>h,vC:()=>c});var t=a(2350);const s=async e=>{e&&e()},i=async(e,l)=>{var a;let s={query:"getSignedUrl",params:{userId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId,fileName:e}};const i=(0,t.I7)(s),n=await i;null!==n&&void 0!==n&&n.url?(0,t.Ey)(l)&&l(null===n||void 0===n?void 0:n.url):(0,t.Ey)(l)&&l(null)},n=async(e,l,a)=>{var s;let i={query:"ProccessImage",params:{userId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,fileName:l,url:e}};const n=(0,t.I7)(i),d=await n;null!==d&&void 0!==d&&d.url?(0,t.Ey)(a)&&a(null===d||void 0===d?void 0:d.url):(0,t.Ey)(a)&&a(null)},d=async(e,l)=>{let a={query:"detectLandMark",params:{url:e}};const s=(0,t.I7)(a),i=await s;l(e,i||null)},o=async e=>{var l,a,s,i;let n={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.search_incms_expns};n.params={businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,t.bh)("date_current_year"),":date1":null===(s=(0,t.bh)("date_range_comps"))||void 0===s?void 0:s.initDate,":date2":null===(i=(0,t.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate},(0,t.bh)("search_acc_record").split(" ").map(((e,l)=>{e&&(n.params[":search"+l]=e.trim())}));const d=(0,t.I7)(n),o=await d;o&&((0,t.Rz)("feedfMbls_ids",o),(0,t.Rz)("feedfMbls_list",m((0,t.jQ)(o),"date")),e&&e())},r=async()=>{let e=[];(0,t.bh)("feedfMbls_list").map((async(l,a)=>{var s,i,n,d,o,r;if(l.comprobanteId)return;let c={...l},v={...l},m="debit",u="credit";"expense"===(null===v||void 0===v?void 0:v.movementType)&&(m="credit",u="debit");let h=(null===v||void 0===v?void 0:v.title)+"; "+(null===v||void 0===v?void 0:v.description),p=null===(s=(0,t.bh)("categories_ids"))||void 0===s?void 0:s[null===v||void 0===v?void 0:v.categoryId],x={};x.amount=null===v||void 0===v?void 0:v.amount,x.movementId=null===v||void 0===v?void 0:v.movementId,x.description=h,x.date=null===v||void 0===v?void 0:v.date;let b={...x};x.account=null===(i=(0,t.bh)("global_account_params"))||void 0===i?void 0:i.cash_bank.account,x.type=m,b.account=null===p||void 0===p?void 0:p.account,null!==p&&void 0!==p&&p.subAccount&&(b.subAccount=null===p||void 0===p?void 0:p.subAccount),b.type=u;let g=[b,x];c.date?c.date=new Date(c.date).getTime():c.date=(new Date).getTime()+800;let _=await(0,t.V_)(c.date,1*a+4);c.comprobanteId=_,c.document=null===(n=c.document)||void 0===n?void 0:n.trim(),g&&(null===(d=(0,t._2)(g))||void 0===d||d.map((async(a,s)=>{let i=g[a];if(!isNaN(1*i.amount)&&1*i.amount>0){var n,d;let a={...c};a.account=i.account,i.subAccount&&(a.subAccount=i.subAccount),a.movementRef=l.movementId,a.type=i.type,a.amount=1*i.amount,a.operationId=(0,t.M5)(),a.document=(0,t.LO)()+"_"+(0,t.UG)(c.date);let s={...null===(n=(0,t.bh)((0,t.hQ)()))||void 0===n?void 0:n.add_opera};s.params={businessId:null===(d=(0,t.bh)("profileUser"))||void 0===d?void 0:d.businessId,year:new Date(c.date).getFullYear()},s.form=a,e.push(s)}})));let f={...null===(o=(0,t.bh)((0,t.hQ)()))||void 0===o?void 0:o.upd__incms_expns};f.params={businessId:null===(r=(0,t.bh)("profileUser"))||void 0===r?void 0:r.businessId,movementId:l.movementId,year:(0,t.bh)("date_current_year")},f.data2update={comprobanteId:_},e.push(f)})),setTimeout((()=>{}),4e3)},c=async e=>{var l,a;let s={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.search_categapp};s.params={businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId},(0,t.bh)("search_categories").split(" ").map(((e,l)=>{e&&(s.params[":search"+l]=e.trim())}));const i=(0,t.I7)(s),n=await i;n&&((0,t.Rz)("categories_ids",n),(0,t.Rz)("categories_list",m((0,t.jQ)(n),"name")),e&&e())},v=async e=>{var l,a;let s={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.all_categapp};s.params={businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId};const i=(0,t.I7)(s),n=await i;n&&(!function(e){const l=e=>({label:e.name,id:e.categoryId});(0,t.Rz)("categories_pick_data",e.map(l))}(n),(0,t.Rz)("categories_list",m(n,"name")),(0,t.Rz)("categories_ids",(0,t.ME)(n,"categoryId"))),e&&e()};const m=(e,l)=>(0,t.MV)("sort_feedfMbl",[e],(()=>e&&e.sort(((e,a)=>{let t=1*e[l],s=1*a[l];return t<s?-1:t>s?1:0})))),u=async(e,l)=>{var a,s;let i={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.delete__incms_expns};i.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,movementId:e};const n=(0,t.I7)(i);await n&&l&&l()},h=(e,l)=>(0,t.MV)("rangeArr",[e,l],(()=>e?(0,t._2)(e).slice(0,l):[]))},8667:(e,l,a)=>{a.r(l),a.d(l,{default:()=>S});var t=a(2791),s=(a(5868),a(9760)),i=a(2647),n=a(7689),d=a(1087),o=a(2350),r=a(5143),c=a(184);const v=e=>{let{data:l,show:a,range2Scroll:s,updRange:i,type:n}=e;const r=(0,t.useRef)(null),v=(0,t.useRef)(0),m=(0,t.useRef)(!1),u=(0,t.useRef)(null);if((0,t.useEffect)((()=>(s&&(u.current=setInterval((()=>{let e=window.pageYOffset||document.documentElement.scrollTop;if(!m.current&&v.current!==e){v.current=e;let l=(0,o.cv)(r.current);l.top+l.height-v.current<0&&(0,o.Ey)(i)&&(m.current=!0,i())}}),250)),()=>{u.current&&clearInterval(u.current)})),[s]),!a)return null;let h=null!==l&&void 0!==l&&l.amount?(1*(null===l||void 0===l?void 0:l.amount)).toFixed(2):"0.00";return(0,c.jsx)(d.OL,{className:"",ref:r,to:{pathname:"/movements/detail",search:"?cId="+(null===l||void 0===l?void 0:l.movementId)+"&view=1"},children:(0,c.jsx)("div",{className:"client_item_box gWXAaj jlytmu",onClick:async()=>{window.scrollTo(0,0),(0,o.Rz)((0,o.Ks)(),l)},style:{marginBottom:9},children:(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)("div",{className:"name  title  ",children:"".concat(null===l||void 0===l?void 0:l.title)}),(0,c.jsx)("div",{className:"name  date ",children:"".concat((0,o.sG)(1*(null===l||void 0===l?void 0:l.date)))})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"name amount lbl_tx",children:["$",h]})]})})})},m=(e,l)=>{let a=(0,o.bh)("ignoreMemo")||{};return null!==a&&void 0!==a&&a[l.elmId]?(a[l.elmId]-=1,null!==a&&void 0!==a&&a[l.elmId]||null===a||void 0===a||delete a[l.elmId],(0,o.Rz)("ignoreMemo",a),!1):l.elmId===e.elmId&&l.show===e.show&&l.range2Scroll===e.range2Scroll},u=(0,t.memo)(v,m);a(6963),a(4e3);(0,i.Np)();const h=(0,i.JY)(),p=(0,i.LA)(),x=e=>{let{data:l,confirm:a}=e;const[i,n]=(0,t.useState)(!1),[d,v]=(0,t.useState)(1);(0,t.useEffect)((()=>{i||(n(!0),v((0,o.M5)()))}));const m=e=>{let l=new Date;if("last1M"===e){let e=l.getMonth()+1,a=new Date(l.getMonth()+1+"/01/"+l.getFullYear()),t=a.getTime(),s=a.setMonth(e)-600;(0,o.Rz)("date_range_comps",{initDate:t,lastDate:s})}else if("last3M"===e){let e=l.getMonth()+1,a=l.getMonth()-3;a<0&&(a=0);let t=new Date(l.getMonth()+1+"/01/"+l.getFullYear()),s=t.setMonth(a),i=t.setMonth(e)-600;(0,o.Rz)("date_range_comps",{initDate:s,lastDate:i})}else if("last6M"===e){let e=l.getMonth()+1,a=l.getMonth()-6;a<0&&(a=0);let t=new Date(l.getMonth()-6+"/01/"+l.getFullYear()),s=t.setMonth(a),i=t.setMonth(e)-600;(0,o.Rz)("date_range_comps",{initDate:s,lastDate:i})}else if("allYear"===e){let e=1*l.getFullYear(),a=1*l.getFullYear()+1,t=new Date("01/01/"+e).getTime(),s=new Date("01/01/"+a).getTime()-10;(0,o.Rz)("date_range_comps",{initDate:t,lastDate:s})}(0,o.Rz)("date_range_option",e),v((0,o.M5)()),(0,o.Ey)(a)&&(x(),a())},u=e=>{let l={...e};l.initDate=l.initDate-100,l.lastDate=l.lastDate+8638e4,(0,o.Rz)("date_range_comps",l),(0,o.Ey)(a)&&(x(),a())},x=()=>{(null===l||void 0===l?void 0:l.modalID)&&(0,s.CloseModal)({id:null===l||void 0===l?void 0:l.modalID})};return(0,c.jsxs)("div",{style:{height:"300px",width:"80vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title blue30",children:(0,r.mU)(55)}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20}}),(0,c.jsx)(h,{label:(0,r.mU)(60),active:"last1M"===(0,o.bh)("date_range_option"),updSelect:()=>m("last1M")}),(0,c.jsx)(h,{label:(0,r.mU)(61),active:"last3M"===(0,o.bh)("date_range_option"),updSelect:()=>m("last3M")}),(0,c.jsx)(h,{label:(0,r.mU)(62),active:"last6M"===(0,o.bh)("date_range_option"),updSelect:()=>m("last6M")}),(0,c.jsx)(h,{label:(0,r.mU)(63),active:"allYear"===(0,o.bh)("date_range_option"),updSelect:()=>m("allYear")}),(0,c.jsx)(h,{label:(0,r.mU)(64),active:"range"===(0,o.bh)("date_range_option"),updSelect:()=>(e=>{(0,o.Rz)("date_range_option",e),v((0,o.M5)());let l={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,c.jsx)(p,{onConfirm:u,isRange:!0,colors:{"--calendar-primary-color":"var(--primary-blue--backg-30)","--calendar-primary-backcolor":"var(--primary-blue--hover-back-30)","--calendar-selected_lbl_color":"var(--primary-blue--color-30)","--calendar-light-backcolor":"var(--dark-800)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--light-300)","--calendar-light-200":"var(--light-200)","--calendar-light-100":"var(--light-100)","--calendar-dark-800":"var(dark-800)","--calendar-white-100":"var(--primary-blue--color-30)","--calendar-white":"var(--white)"}}),(0,s.OpenModal)(l)})("range")}),(0,c.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:(0,c.jsx)("div",{className:"card"})})]})};var b=a(2825);(0,i.Np)(),(0,i.JY)(),(0,i.h0)();const g=e=>{var l;let{data:a,confirm:i}=e;const[n,d]=(0,t.useState)(!1),[v,m]=(0,t.useState)(1),u=()=>{m((0,o.M5)())};(0,t.useEffect)((()=>{n||(d(!0),m((0,o.M5)()),(0,r.Je)(u))}));const h=e=>{(0,o.Rz)("provider_filter",e),m((0,o.M5)()),(0,o.Ey)(i)&&(p(),i())},p=()=>{(null===a||void 0===a?void 0:a.modalID)&&(0,s.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})};let x=(0,o.bh)("providers_list");return(0,c.jsxs)("div",{style:{height:"80vh",width:"80vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title blue30",children:"Clientes"}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:" spaceAround flxWrp scollVh",style:{marginTop:20,maxHeight:"calc( 78vh - 70px)"},children:x&&(null===(l=(0,o._2)(x))||void 0===l?void 0:l.map((e=>(0,c.jsx)(_,{data:x[e],elmId:x[e].providerId,label:x[e].name,clickHandler:h,active:(0,o.bh)("provider_filter")},x[e].providerId))))})]})},_=e=>{let{clickHandler:l,label:a,active:t,elmId:s}=e,i=t===s?null:s;return(0,c.jsx)("div",{className:" btn_filter y2 itmMrg ".concat(t===s?"active":""," "),onClick:()=>l(i),children:(0,c.jsx)("span",{className:"y2",children:a})})};var f=a(5882),y=a(1475),j=a(8965);const N=(0,i.PU)(),w=(0,i.Vg)(),I=(0,i.tW)(),M=(0,f.lT)(),k=e=>{var l,a,i,n,d,v,m;let{}=e;const[,h]=(0,t.useState)(1),p=(0,o.bh)("movement_type"),[_,f]=(0,t.useState)(36),k=(0,t.useRef)(null),z=(0,t.useRef)(null),D=(0,t.useRef)(null),S=(0,t.useRef)(null),T=(0,t.useRef)(!1);(0,t.useEffect)((()=>{(0,y.bM)(C),(0,r.EV)(H)}),[]);const U=e=>{var l,a;null===k||void 0===k||null===(l=k.current)||void 0===l||l.setAttribute("show",e),null===z||void 0===z||null===(a=z.current)||void 0===a||a.setAttribute("loading",e)},E=(0,j.g)(!1,U),F=()=>{f((e=>e+36))},C=()=>{h((0,o.M5)())},H=()=>{setTimeout((()=>{E.value=!1,U(!1),64!==_?f(64):C()}),50)},V=async e=>{(0,o.Rz)("category_filter",e),E.value||(E.value=!0),U(!0),(0,r.EV)(H)},A=()=>{E.value||(E.value=!0),U(!0),(0,r.EV)(H)};let O=(0,o.bh)("client_list_"+p);const Y=e=>{(0,o.Rz)("movement_type",e),C(),E.value||(E.value=!0),U(!0),(0,r.EV)(H)};let L="incomes"===(0,o.bh)("movement_type")?"var(--primary-blue--backg-30)":"var(--primary-red--color-f7)",q=null!==(l=(0,o.bh)("date_range_comps"))&&void 0!==l&&l.initDate?(0,o.sJ)(null===(a=(0,o.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)+" - "+(0,o.sJ)(null===(i=(0,o.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate):null,Q=null===(n=(0,o.bh)("categories_ids"))||void 0===n||null===(d=n[(0,o.bh)("category_filter")])||void 0===d?void 0:d.name,J=null===(v=(0,o.bh)("providers_ids"))||void 0===v||null===(m=v[(0,o.bh)("provider_filter")])||void 0===m?void 0:m.name;return(0,c.jsxs)("div",{className:"customer_bx_dash colorType mobile_version",children:[(0,c.jsx)("style",{children:"\n\t\t\t\t\t.colorType{\n\t\t\t\t\t\t--label-theme-color:".concat(L,";\n\t\t\t\t\t}\n\t\t\t\t")}),(0,c.jsxs)("div",{className:"colorType ",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{style:{marginTop:"8px"},children:(0,c.jsx)(w,{loadingColor:"var(-primary-blue--backg-30)",placeholder:(0,r.mU)(6),obs:h,fetchData:V,change:e=>{E.value||(E.value=!0),U(!0)},callempty:V,keyFlds:"searchQryNotary"})}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"icon blue30",children:(0,c.jsx)("div",{className:" action ",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,c.jsx)(M,{confirm:A}),(0,s.OpenModal)(e)},children:(0,c.jsx)(N,{name:"add"})})}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"icon blue30",children:(0,c.jsx)("div",{className:" action ",ref:S,onClick:()=>{T.value=!T.value,(e=>{var l,a;null===D||void 0===D||null===(l=D.current)||void 0===l||l.setAttribute("show",e),null===S||void 0===S||null===(a=S.current)||void 0===a||a.setAttribute("active",e)})(T.value)},children:(0,c.jsx)(N,{name:"filter"})})}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx bx_filter",style:{marginTop:2},children:(0,c.jsxs)("div",{className:"_dsplFlx w100 ",children:[(0,c.jsxs)("div",{className:" _dsplFlx totalize ",children:["Total:",(0,c.jsxs)("div",{className:"blue ",children:["$",R(O)]})]}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" tab_switch ".concat("expenses"===p?"red_orangered":"white_black"," "),onClick:()=>Y("expenses"),children:(0,r.mU)(40)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" tab_switch ".concat("incomes"===p?"blue_30":"white_black"," "),onClick:()=>Y("incomes"),children:(0,r.mU)(42)}),(0,c.jsx)("div",{className:"flexSpace"})]})}),(0,c.jsx)("div",{className:"_dsplFlx bx_filter_toogle",style:{marginTop:2},ref:D,children:(0,c.jsxs)("div",{className:"_dsplFlx w100",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" btn_filter y2  ".concat(q?"w33 active":""," "),onClick:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,c.jsx)(x,{confirm:V}),(0,s.OpenModal)(l)},children:q||(0,r.mU)(55)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" btn_filter y2  ".concat(Q?"w33 active":""," "),onClick:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,c.jsx)(b.Z,{type:p,confirm:V,init:(0,o.bh)("category_filter")}),(0,s.OpenModal)(l)},children:Q||(0,r.mU)(54)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:" btn_filter y2  ".concat(J?"w33 active":""," "),onClick:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,c.jsx)(g,{confirm:V}),(0,s.OpenModal)(l)},children:J||(0,r.mU)(57)}),(0,c.jsx)("div",{className:"flexSpace"})]})}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"loading_animation_container",style:{marginTop:2},ref:k,children:[(0,c.jsx)("div",{className:"load_animation",style:{backgroundColor:"incomes"===(0,o.bh)("movement_type")?"var(--primary-blue--backg-30)":"var(--primary-red--color-f7)"}}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:32},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"icon_compr _dsplFlx",children:[(0,c.jsx)("div",{className:"lbl_saving",children:"searching ..."}),(0,c.jsx)(I,{stroke:"incomes"===(0,o.bh)("movement_type")?"var(--primary-blue--backg-30)":"var(--primary-red--color-f7)",size:24,strokeW:8})]}),(0,c.jsx)("div",{className:"flexSpace"})]})]}),(0,c.jsx)("div",{className:"clients_container",ref:z,children:O&&(null===O||void 0===O?void 0:O.map(((e,l)=>(0,c.jsx)(u,{data:e,elmId:e.movementId,type:p,range2Scroll:_-l===24,show:l<_,updRange:F},e.movementId+"mov_id"))))})]})]})]})},R=e=>{var l;let a=0;return e&&(null===(l=(0,o._2)(e))||void 0===l||l.map(((l,t)=>{let s=1*e[l].amount;a=1*(0,o.Zv)(a,2)+1*(0,o.Zv)(s,2)}))),1*(0,o.Zv)(a,2)},z=(0,i.PU)(),D=(0,f.lM)(),S=e=>{var l,a;let{data:s,confirm:i,label:r,item:v}=e;const[m,u]=(0,t.useState)(1);let h=(0,n.TH)();const p=(0,n.s0)(),x=null===(l=h.search)||void 0===l||null===(a=l.split("?"))||void 0===a?void 0:a[1],b=(0,o.mB)(x);let g=null===b||void 0===b?void 0:b.tab;(0,t.useEffect)((()=>{g||p({pathname:"/movements",search:"?tab=resume"})}),[g]);const _=e=>{u((0,o.M5)())};return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"listFlx  ",children:(0,c.jsx)("p",{className:"nav_title_header header_mobile"})}),(0,c.jsxs)("div",{className:"ebEwoI",children:[(0,c.jsx)("div",{className:"jKZvHt ",children:(0,c.jsx)(d.OL,{className:"",to:"/",children:(0,c.jsx)("div",{className:"nav_title_header header_mobile ",onClick:e=>{document.cookie="".concat((0,o.in)(),'=""'),document.cookie='hrm_access_tkn = ""',(0,o.Rz)((0,o.nc)(),null),(0,o.Rz)("isAdmin",null),(0,o.wt)("isLogged_987")},children:(0,c.jsx)("div",{className:"logo_ssg  ",children:(0,c.jsx)("img",{src:"https://www.hrmfinance.com/logo192.png",alt:"logo"})})})})}),(0,c.jsx)("nav",{className:" iHJbYx",children:[{id:"resume",label:"Resume",navTo:{pathname:"/movements",search:"?tab=resume"},icon:"pdf_box"},{id:"movements",label:"Movements",navTo:{pathname:"/movements",search:"?tab=movements"},icon:"search"}].map((e=>(0,c.jsxs)(d.OL,{className:"bXnHIV ".concat(g===e.id?"activeTab":""),to:e.navTo,children:[(0,c.jsx)(z,{name:e.icon,size:22}),(0,c.jsx)("div",{className:"eULkqP",children:e.label})]},e.id+"_header")))})]}),(0,c.jsx)(T,{viewId:"resume",activeView:null===b||void 0===b?void 0:b.tab,children:(0,c.jsx)(D,{updObPrnt:_})}),(0,c.jsx)(T,{viewId:"movements",activeView:null===b||void 0===b?void 0:b.tab,children:(0,c.jsx)(k,{updObPrnt:_})})]})},T=e=>{let{viewId:l,activeView:a,children:t}=e;return(0,c.jsx)("div",{className:"opacityView",style:{opacity:l===a?1:0,marginTop:29},children:l===a?t:null})}},2825:(e,l,a)=>{a.d(l,{Z:()=>v});var t=a(2791),s=a(9760),i=a(2647),n=a(2350),d=a(5143),o=a(184);const r=(0,i.Np)(),c=(0,i.tL)(),v=e=>{var l;let{data:a,confirm:i,type:r,init:c}=e;const[v,p]=(0,t.useState)(!1),[,x]=(0,t.useState)(1),b=()=>{x((0,n.M5)())};(0,t.useEffect)((()=>{v||(p(!0),x((0,n.M5)()),(0,d.bM)(b))}));const g=e=>{x((0,n.M5)()),(0,n.Ey)(i)&&(_(),i(e))},_=()=>{(null===a||void 0===a?void 0:a.modalID)&&(0,s.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})};let f=(0,n.bh)("categories_list");return(0,o.jsxs)("div",{style:{height:"80vh",width:"90vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"20px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title blue30",style:{margin:"10px"},children:(0,d.mU)(54)}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)(u,{label:(0,d.mU)(46),clickHandler:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,o.jsx)(h,{}),(0,s.OpenModal)(l)}})})]}),(0,o.jsx)("div",{className:" spaceAround flxWrp scollVh",style:{marginTop:20,maxHeight:"calc( 78vh - 70px)"},children:f&&(null===(l=(0,n._2)(f))||void 0===l?void 0:l.map((e=>(0,o.jsx)(m,{data:f[e],elmId:f[e].categoryId,label:f[e].name,clickHandler:g,active:c,type:r},f[e].categoryId))))})]})},m=e=>{let{clickHandler:l,label:a,active:t,elmId:s,data:i,type:n}=e,d=t===s?null:s;return i.type!==n?null:(0,o.jsx)("div",{className:" btn_filter itmMrg ".concat(t===s?"active":""," "),onClick:()=>l(d),children:a})},u=e=>{let{clickHandler:l,label:a}=e;return(0,o.jsx)("div",{className:" jaqJnq_hrm1",children:(0,o.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:l,children:(0,o.jsx)("span",{className:" jaqJnq_hrm1",children:a})})})},h=e=>{var l,a,i;let{data:v,confirm:m,type:h,init:p}=e;const x="add_category_frm",[b,g]=(0,t.useState)(1),_=()=>{(null===v||void 0===v?void 0:v.modalID)&&(0,s.CloseModal)({id:null===v||void 0===v?void 0:v.modalID})},f=(e,l)=>{let a=(0,n.bh)(x)||{};a[e]=l,(0,n.Rz)(x,a),g((0,n.M5)())};return(0,o.jsxs)("div",{style:{height:"80vh",width:"90vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"20px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsxs)("p",{className:"form_title blue30",style:{margin:"10px"},children:[(0,d.mU)(46)," ",(0,d.mU)(54)]}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)(u,{label:(0,d.mU)(43),clickHandler:async()=>{var e,l;let a=(0,n.bh)(x);a.categoryId=(0,n.M5)();let t={...null===(e=(0,n.bh)((0,n.hQ)()))||void 0===e?void 0:e.add_categapp};t.params={businessId:null===(l=(0,n.bh)("profileUser"))||void 0===l?void 0:l.businessId},t.form=a;const s=(0,n.I7)(t);await s&&((0,n.Rz)(x,{}),m&&m(),_())}})})]}),(0,o.jsxs)("div",{className:"",style:{margin:"30px 0"},children:[(0,o.jsx)("div",{className:"lbl_dtls",children:(0,o.jsx)(r,{init:null===(l=(0,n.bh)(x))||void 0===l?void 0:l.name,width:"68vw",label:(0,d.mU)(56),updChanges:e=>f("name",e)})}),(0,o.jsx)("div",{className:"lbl_dtls",children:(0,o.jsx)(r,{init:null===(a=(0,n.bh)(x))||void 0===a?void 0:a.description,width:"68vw",label:(0,d.mU)(53),updChanges:e=>f("description",e)})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"48px 10px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)(c,{data:[{label:(0,d.mU)(40),id:"expenses"},{label:(0,d.mU)(42),id:"incomes"}],active:null===(i=(0,n.bh)(x))||void 0===i?void 0:i.type,updSelect:e=>f("type",e),colors:{"--base-ck-primary-color":"var(--primary-blue--backg-30)","--base-ck-primary-backcolor":"var(--primary-blue--color-30)"}})]})]})]})}},8965:(e,l,a)=>{a.d(l,{g:()=>o,w:()=>d});var t=a(2791),s=a(184);const i=(0,t.forwardRef)(((e,l)=>{let{initValue:a}=e;const[i,n]=(0,t.useState)(a);return(0,t.useImperativeHandle)(l,(()=>({refresh(e){n(e)}}))),(0,s.jsxs)(s.Fragment,{children:[" ",i]})})),n="referenceRender",d=(e,l)=>{const[,a]=(0,t.useState)(e),d=(0,t.useRef)(null);return(0,t.useRef)(new Proxy({value:e},{get:function(e,a){return l.shallowRender&&a===n?(0,s.jsx)(i,{initValue:e.value,ref:d}):e[a]?e[a]:Reflect.get(...arguments)},set:function(e,t,s){var i;e[t]!==s&&(e[t]=s,l.shallowRender?null===d||void 0===d||null===(i=d.current)||void 0===i||i.refresh(s):a({...e}));return!0}})).current},o=(e,l,a)=>{const[,s]=(0,t.useState)(e);return(0,t.useRef)(new Proxy({value:e},{get:function(e,l){if(e[l])return e[l]},set:function(e,t,i){return e[t]!==i&&(e[t]=i,l&&l(e[t]),null!==a&&void 0!==a&&a.deep&&s({...e})),!0}})).current}},5868:()=>{}}]);
//# sourceMappingURL=8667.c177a2b7.chunk.js.map