"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2137],{2137:(e,a,l)=>{l.r(a),l.d(a,{default:()=>v});var s=l(2791),i=l(2350),n=l(2647),d=(l(2004),l(9760)),t=l(5408),c=l(15),r=l(184);const o=(0,n.PU)(),h=(0,n.YZ)(),m=e=>{let{onConfirm:a,onCancel:l,init:n,last:d,isRange:t,appoitmentType:c,colors:o,hasClear:h}=e;const[m,v]=(0,s.useState)(n),[p,_]=(0,s.useState)(d),[u,g]=(0,s.useState)(!1),[y,N]=(0,s.useState)(!1),[f,D]=(0,s.useState)(null),C=()=>{y?N(!1):l()};let b=o||{"--calendar-primary-color":"var(--primary-light)","--calendar-primary-backcolor":"var(--primary-blue--hover-back-30)","--calendar-selected_lbl_color":"var(--light-100)"};return(0,r.jsxs)("div",{className:"dateBox darkmode",style:b,children:[(0,r.jsx)("div",{className:"date_header_box",children:(0,r.jsx)("div",{className:"date_header_title",children:t?"Select Ranges":"Escojer Dia"})}),(0,r.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,r.jsx)("div",{className:"date_range_title",children:m?(0,i.kj)(m):"Start Date"}),t?(0,r.jsx)("div",{className:"date_range_space_title",children:" - "}):null,t?(0,r.jsx)("div",{className:"date_range_title",children:p?(0,i.kj)(p):"End Date"}):null,(0,r.jsx)("div",{className:"flexSpace"})]}),y?(0,r.jsx)(j,{onChange:D,date:m,selected:f,close:C}):(0,r.jsx)(x,{onChangeDate:e=>{c?(_(null),g(!0),v(e),N(!0)):t&&u&&e>m?(_(e),g(!1)):(v(e),_(null),g(!0))},init:m,last:p,isRange:t,appoitmentType:c}),(0,r.jsxs)("div",{className:"_dsplFlx calendar_action_group",children:[(0,r.jsx)("div",{className:"flexSpace"}),h?(0,r.jsx)("div",{onClick:()=>{y?N(!1):(v(null),_(null),l())},size:40,className:"_dsplFlx",children:(0,r.jsx)("div",{className:"btn_cal_cancel",children:"Clear"})}):null,(0,r.jsx)("div",{onClick:C,size:40,className:"_dsplFlx",children:(0,r.jsx)("div",{className:"btn_cal_cancel",children:"Cancel"})}),(0,r.jsx)("div",{onClick:()=>{c?(N(!1),a({initDate:m,appTimeSelected:f})):(t&&m&&p||m)&&a({initDate:m,lastDate:p})},children:(0,r.jsx)("div",{className:"_dsplFlx",style:{marginLeft:16,marginRight:8},children:(0,r.jsx)("div",{className:"btn_cal_confirm",children:"OK"})})})]})]})},v=e=>{let{data:a,onConfirm:l,initValue:s,init:i,last:n,isRange:c,appoitmentType:o,colors:h,hasClear:v}=e;(0,t.Z)("fb_updated_1128h");return(0,r.jsx)(m,{onConfirm:e=>{null===l||void 0===l||l(e),a.modalID&&(0,d.CloseModal)({id:a.modalID})},onCancel:()=>{a.modalID&&(0,d.CloseModal)({id:a.modalID})},colors:h,initValue:s,init:i,last:n,isRange:c,hasClear:v,appoitmentType:o})},x=e=>{let{init:a,last:l,onChangeDate:n,isRange:d,appoitmentType:t}=e;const[c,h]=(0,s.useState)((new Date).getFullYear()),[m,v]=(0,s.useState)((new Date).getMonth()),[x,_]=(0,s.useState)([]),[j,g]=(0,s.useState)(!1),[y,N]=(0,s.useState)(1);(0,s.useEffect)((()=>(_((0,i.ul)(m,c)),setTimeout((()=>{N((0,i.M5)())}),350),()=>{})),[m,c]);let f=i.f2.es[m+1];const D=e=>{if(m+e>11||m+e<0){let a=m+e>11?0:m+e<0?11:m+e,l=m+e>11?c+1:m+e<0?c-1:c;v(a),h(l)}else v(m+e)};let C=t&&c===(new Date).getFullYear()&&m<=(new Date).getMonth();return(0,r.jsxs)("div",{style:{marginLeft:4},children:[(0,r.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,r.jsx)("div",{onClick:()=>g(!j),size:40,children:(0,r.jsxs)("div",{className:"_dsplFlx",style:{padding:8},children:[(0,r.jsx)("div",{className:"date_calendar_header_yearmonth",children:f}),(0,r.jsx)("div",{className:"date_calendar_header_yearmonth",children:c}),(0,r.jsx)("div",{style:{paddingHorizontal:2},children:(0,r.jsx)(o,{name:"arrow_drop_down",size:24,color:"var(--light-300)"})})]})}),(0,r.jsx)("div",{className:"flexSpace"}),!j&&(0,r.jsx)("div",{className:"_dsplFlx ".concat(C?"disabled":""),children:(0,r.jsx)("div",{style:{borderRadius:50},children:(0,r.jsx)("div",{style:{padding:"0 2px",marginRight:12},onClick:e=>{C||D(-1)},children:(0,r.jsx)(o,{name:"arrow_left",size:24,color:"var(--light-200)"})})})}),j?null:(0,r.jsx)("div",{className:"_dsplFlx",children:(0,r.jsx)("div",{style:{borderRadius:50},children:(0,r.jsx)("div",{style:{padding:"0 2px"},onClick:()=>D(1),children:(0,r.jsx)(o,{name:"arrow_right",size:24,color:"var(--light-200)"})})})})]}),j?(0,r.jsx)(u,{year:c,onChange:e=>{h(e),g(!1)}}):(0,r.jsx)(p,{year:c,month:m,calendarData:x,onChange:e=>{const a=e&&new Date(c,m,e).getTime();a&&n(a)},init:a,last:l,range:d,appoitmentType:t})]})},p=e=>{let{year:a,month:l,calendarData:s,onChange:n,init:d,last:t,range:c,appoitmentType:o}=e,h=864e5,m=Math.floor(d/h),v=Math.floor(t/h),x=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()),p=(0,i.bh)("AppointmentsDates");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"_dsplFlx date_calendar_week_title",children:i.$l.en.map(((e,a)=>(0,r.jsx)("div",{className:"date_calendar_week_title_day",children:e},e+"_"+a)))}),(0,r.jsx)("div",{style:{minHeight:282},children:s.map(((e,s)=>(0,r.jsx)("div",{className:"_dsplFlx",children:e.map(((e,d)=>{var t;let u=e.day,j=new Date(a,l,u),g=o&&x>j,y=Math.floor(j/h),N=u&&y>m&&y<v,f=u&&y===m,D=u&&y===v,C=e.isToday;const b=e=>{var a;((null===(a=(0,i.bh)((0,i.nc)()))||void 0===a?void 0:a.isAdmin)||w>0||k&&(0,i._2)(k).filter((e=>{var a,l;return(null===(a=k[e])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId)}))[0])&&!g&&((0,i.Rz)("isTodayPickApp",C),n(e))};let k=null===p||void 0===p?void 0:p[a+"_"+l+"_"+u],w=(k&&(null===(t=(0,i._2)(k))||void 0===t||t.length),u&&!g&&_(k,C));return(0,r.jsx)("div",{className:"day_wrp ".concat(u?"":" empty_day"," ").concat(g?" disable_day":"").concat(c?" range":"").concat(C?" isToday":"").concat(u&&D?" lastActiveDay":"").concat(u&&f?" firstActiveDay":"").concat(N?" isSelected":""),children:(0,r.jsxs)("div",{className:"day_cal ",onClick:()=>b(u),children:[(0,r.jsx)("div",{className:"day_num ",children:u}),(0,r.jsx)("div",{className:"apps_left",children:w||""})]})},d+"_day_"+s)}))},"week_"+s)))})]})},_=(e,a)=>{let l=0;if(null!==e&&void 0!==e&&e.isDayOff)return l;if(a){let a=(new Date).getHours();if(a>17)l=null;else if(a>9&&a<17){let s=0;e&&(0,i._2)(e).map((e=>{1*e.split("_")[1]>a&&(s+=1)})),l=17-a-s}else l=9-(e?(0,i._2)(e).length:0)}else l=9-(e?(0,i._2)(e).length:0);return l},u=e=>{let{year:a,onChange:l}=e,i=Array.from({length:9},((e,a)=>a+((new Date).getFullYear()-0))),n=(0,s.useRef)();return(0,s.useEffect)((()=>(setTimeout((()=>{let e=41.6*(16+(a-(new Date).getFullYear())/3);n.current.scrollTo({x:e,y:0,animated:!0})}),20),()=>{})),[a]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{ref:n,style:{maxHeight:"70vh"},className:"scrollV",children:(0,r.jsx)("div",{className:"_dsplFlx year_wrp",children:i.map((e=>(0,r.jsx)("div",{className:"year_tag",onClick:()=>l(e),children:(0,r.jsx)("div",{className:"year-itm".concat(e===a?" activeYear":""," "),children:(0,r.jsx)("div",{className:"y_num",children:e})})},e)))})})})},j=e=>{var a,l;let{date:n,selected:t,onChange:o,close:m}=e,v=new Date(n),x=v.getFullYear(),p=v.getMonth(),u=v.getDate(),j=(new Date).getHours(),y=(0,i.bh)("isTodayPickApp"),N={9:"9:00-9:59 AM",10:"10:00-10:59 AM",11:"11:00-11:59 AM",12:"12:00-12:59 PM",13:"1:00-1:59 PM",14:"2:00-2:59 PM",15:"3:00-3:59 PM",16:"4:00-4:59 PM",17:"5:00-5:59 PM"},f=((0,s.useRef)(),(0,i.bh)("AppointmentsDates")),D=null===f||void 0===f?void 0:f[x+"_"+p+"_"+u];_(D,y);const C=()=>D&&(0,i._2)(D).filter((e=>{var a,l;return(null===(a=D[e])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId)}))[0];let b=C();const k=()=>{let e=1*(null===b||void 0===b?void 0:b.split("_")[1]),a=null===N||void 0===N?void 0:N[e];return(y?j<e&&a:a)&&(0,r.jsxs)("div",{children:["Tiene una cita programada ",(0,r.jsxs)("span",{children:["(",a,")"]})," "]})},w=e=>{var a,l;let s=C(),n=(null===D||void 0===D||null===(a=D[s])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId);var t;n&&1*s.split("_")[1]===1*e?(e=>{let a=N[b.split("_")[1]],l={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,r.jsx)(g,{date:v,hour:a,confirm:()=>{}}),(0,d.OpenModal)(l)})():null!==(t=(0,i.bh)((0,i.nc)()))&&void 0!==t&&t.isAdmin?o(e):n?(0,c.OpenToast)({text:"No puede hacer dos reservas el mismo dia",timeout:1500}):o(e)};return(0,r.jsxs)("div",{className:"hourlyPicker",children:[null!==(a=(0,i.bh)((0,i.nc)()))&&void 0!==a&&a.isAdmin?(0,r.jsxs)("div",{className:"_dsplFlx ",style:{margin:"4px 7px 15px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(h,{initvalue:null===D||void 0===D?void 0:D.isDayOff,keyCode:77,updChange:e=>{m()},color:"var(--primary-hover)"}),(0,r.jsx)("span",{className:"checklabel",style:{marginLeft:6},children:"Dia Off "})]}):null,!(null!==(l=(0,i.bh)((0,i.nc)()))&&void 0!==l&&l.isAdmin)&&k()&&(0,r.jsx)("div",{className:"title_appts_confirmed",children:k()}),(0,r.jsx)("div",{className:"_dsplFlx year_wrp",children:!(null!==D&&void 0!==D&&D.isDayOff)&&[9,10,11,12,13,14,15,16,17].map(((e,a)=>{var l;let s=null===D||void 0===D?void 0:D["app_"+e],n=(null===s||void 0===s?void 0:s.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId);return y&&j>e||s&&!n?(0,r.jsx)("div",{className:"year_tag ".concat(s?"hasTaken":"")},e):(0,r.jsx)("div",{className:"year_tag ".concat(s?"hasTaken":"").concat(n?" youAlreadyHave":""),onClick:()=>w(e),children:(0,r.jsx)("div",{className:"year-itm".concat(e===t?" activeYear":""),children:(0,r.jsx)("div",{className:"y_num",children:s?n?"reservado ":"-":N[e]})})},e)}))})]})},g=e=>{let{data:a,date:l,hour:s,confirm:n}=e;const t=()=>{a.modalID&&(0,d.CloseModal)({id:a.modalID})};return(0,r.jsxs)("div",{type:"Free",className:"idfmDQ",children:[(0,r.jsx)("div",{className:" gPHWco",children:(0,r.jsx)("div",{className:"dcXXTq ",children:(0,r.jsx)("div",{className:"eKdSaJ",children:(0,r.jsxs)("div",{className:" jVaMjA dBwXbT",children:[(0,r.jsx)("div",{className:" date_calendar_header_yearmonth title_cancel_app",children:"Desea cancelar su cita  "}),(0,r.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("span",{children:(0,i.sG)(l)}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("span",{style:{marginLeft:16},children:s}),(0,r.jsx)("div",{className:"flexSpace"})]})]})})})}),(0,r.jsxs)("div",{className:"_dsplFlx calendar_action_group",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{onClick:t,className:"_dsplFlx",children:(0,r.jsx)("div",{className:"btn_cal_cancel",children:"Cancel"})}),(0,r.jsx)("div",{onClick:()=>{t(),n()},children:(0,r.jsx)("div",{className:"_dsplFlx",style:{marginLeft:16,marginRight:8},children:(0,r.jsx)("div",{className:"btn_cal_confirm",children:"Confirmar"})})})]})]})}},2004:()=>{}}]);
//# sourceMappingURL=2137.4f7a6b2a.chunk.js.map