"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2137,9760],{2137:(e,a,l)=>{l.r(a),l.d(a,{default:()=>m});var s=l(2791),i=l(2350),t=l(2647),n=(l(2004),l(9760)),d=l(5408),c=l(15),r=l(184);const o=(0,t.PU)(),h=(0,t.YZ)(),v=e=>{let{onConfirm:a,onCancel:l,init:t,last:n,isRange:d,appoitmentType:c,colors:o}=e;const[h,v]=(0,s.useState)(t),[m,u]=(0,s.useState)(n),[p,_]=(0,s.useState)(!1),[j,y]=(0,s.useState)(!1),[N,f]=(0,s.useState)(null),D=()=>{j?y(!1):l()};let w=o||{"--calendar-primary-color":"var(--primary-light)","--calendar-primary-backcolor":"var(--primary-blue--hover-back-30)","--calendar-selected_lbl_color":"var(--light-100)"};return(0,r.jsxs)("div",{className:"dateBox darkmode",style:w,children:[(0,r.jsx)("div",{className:"date_header_box",children:(0,r.jsx)("div",{className:"date_header_title",children:d?"Select Ranges":"Escojer Dia"})}),(0,r.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,r.jsx)("div",{className:"date_range_title",children:h?(0,i.kj)(h):"Start Date"}),d?(0,r.jsx)("div",{className:"date_range_space_title",children:" - "}):null,d?(0,r.jsx)("div",{className:"date_range_title",children:m?(0,i.kj)(m):"End Date"}):null,(0,r.jsx)("div",{className:"flexSpace"})]}),j?(0,r.jsx)(g,{onChange:f,date:h,selected:N,close:D}):(0,r.jsx)(x,{onChangeDate:e=>{c?(u(null),_(!0),v(e),y(!0)):d&&p&&e>h?(u(e),_(!1)):(v(e),u(null),_(!0))},init:h,last:m,isRange:d,appoitmentType:c}),(0,r.jsxs)("div",{className:"_dsplFlx calendar_action_group",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{onClick:D,size:40,className:"_dsplFlx",children:(0,r.jsx)("div",{className:"btn_cal_cancel",children:"Cancel"})}),(0,r.jsx)("div",{onClick:()=>{c?(y(!1),a({initDate:h,appTimeSelected:N})):(d&&h&&m||h)&&a({initDate:h,lastDate:m})},children:(0,r.jsx)("div",{className:"_dsplFlx",style:{marginLeft:16,marginRight:8},children:(0,r.jsx)("div",{className:"btn_cal_confirm",children:"OK"})})})]})]})},m=e=>{let{data:a,onConfirm:l,initValue:s,init:i,last:t,isRange:c,appoitmentType:o,colors:h}=e;(0,d.Z)("fb_updated_1128h");return(0,r.jsx)(v,{onConfirm:e=>{null===l||void 0===l||l(e),a.modalID&&(0,n.CloseModal)({id:a.modalID})},onCancel:()=>{a.modalID&&(0,n.CloseModal)({id:a.modalID})},colors:h,initValue:s,init:i,last:t,isRange:c,appoitmentType:o})},x=e=>{let{init:a,last:l,onChangeDate:t,isRange:n,appoitmentType:d}=e;const[c,h]=(0,s.useState)((new Date).getFullYear()),[v,m]=(0,s.useState)((new Date).getMonth()),[x,p]=(0,s.useState)([]),[g,j]=(0,s.useState)(!1),[y,N]=(0,s.useState)(1);(0,s.useEffect)((()=>(p((0,i.ul)(v,c)),setTimeout((()=>{N((0,i.M5)())}),350),()=>{})),[v,c]);let f=i.f2.es[v+1];const D=e=>{if(v+e>11||v+e<0){let a=v+e>11?0:v+e<0?11:v+e,l=v+e>11?c+1:v+e<0?c-1:c;m(a),h(l)}else m(v+e)};let w=d&&c===(new Date).getFullYear()&&v<=(new Date).getMonth();return(0,r.jsxs)("div",{style:{marginLeft:4},children:[(0,r.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,r.jsx)("div",{onClick:()=>j(!g),size:40,children:(0,r.jsxs)("div",{className:"_dsplFlx",style:{padding:8},children:[(0,r.jsx)("div",{className:"date_calendar_header_yearmonth",children:f}),(0,r.jsx)("div",{className:"date_calendar_header_yearmonth",children:c}),(0,r.jsx)("div",{style:{paddingHorizontal:2},children:(0,r.jsx)(o,{name:"arrow_drop_down",size:24,color:"var(--light-300)"})})]})}),(0,r.jsx)("div",{className:"flexSpace"}),!g&&(0,r.jsx)("div",{className:"_dsplFlx ".concat(w?"disabled":""),children:(0,r.jsx)("div",{style:{borderRadius:50},children:(0,r.jsx)("div",{style:{padding:"0 2px",marginRight:12},onClick:e=>{w||D(-1)},children:(0,r.jsx)(o,{name:"arrow_left",size:24,color:"var(--light-200)"})})})}),g?null:(0,r.jsx)("div",{className:"_dsplFlx",children:(0,r.jsx)("div",{style:{borderRadius:50},children:(0,r.jsx)("div",{style:{padding:"0 2px"},onClick:()=>D(1),children:(0,r.jsx)(o,{name:"arrow_right",size:24,color:"var(--light-200)"})})})})]}),g?(0,r.jsx)(_,{year:c,onChange:e=>{h(e),j(!1)}}):(0,r.jsx)(u,{year:c,month:v,calendarData:x,onChange:e=>{const a=e&&new Date(c,v,e).getTime();a&&t(a)},init:a,last:l,range:n,appoitmentType:d})]})},u=e=>{let{year:a,month:l,calendarData:s,onChange:t,init:n,last:d,range:c,appoitmentType:o}=e,h=864e5,v=Math.floor(n/h),m=Math.floor(d/h),x=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()),u=(0,i.bh)("AppointmentsDates");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"_dsplFlx date_calendar_week_title",children:i.$l.en.map(((e,a)=>(0,r.jsx)("div",{className:"date_calendar_week_title_day",children:e},e+"_"+a)))}),(0,r.jsx)("div",{style:{minHeight:282},children:s.map(((e,s)=>(0,r.jsx)("div",{className:"_dsplFlx",children:e.map(((e,n)=>{var d;let _=e.day,g=new Date(a,l,_),j=o&&x>g,y=Math.floor(g/h),N=_&&y>v&&y<m,f=_&&y===v,D=_&&y===m,w=e.isToday;const b=e=>{var a;((null===(a=(0,i.bh)((0,i.nc)()))||void 0===a?void 0:a.isAdmin)||k>0||C&&(0,i._2)(C).filter((e=>{var a,l;return(null===(a=C[e])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId)}))[0])&&!j&&((0,i.Rz)("isTodayPickApp",w),t(e))};let C=null===u||void 0===u?void 0:u[a+"_"+l+"_"+_],k=(C&&(null===(d=(0,i._2)(C))||void 0===d||d.length),_&&!j&&p(C,w));return(0,r.jsx)("div",{className:"day_wrp ".concat(_?"":" empty_day"," ").concat(j?" disable_day":"").concat(c?" range":"").concat(w?" isToday":"").concat(_&&D?" lastActiveDay":"").concat(_&&f?" firstActiveDay":"").concat(N?" isSelected":""),children:(0,r.jsxs)("div",{className:"day_cal ",onClick:()=>b(_),children:[(0,r.jsx)("div",{className:"day_num ",children:_}),(0,r.jsx)("div",{className:"apps_left",children:k||""})]})},n+"_day_"+s)}))},"week_"+s)))})]})},p=(e,a)=>{let l=0;if(null!==e&&void 0!==e&&e.isDayOff)return l;if(a){let a=(new Date).getHours();if(a>17)l=null;else if(a>9&&a<17){let s=0;e&&(0,i._2)(e).map((e=>{1*e.split("_")[1]>a&&(s+=1)})),l=17-a-s}else l=9-(e?(0,i._2)(e).length:0)}else l=9-(e?(0,i._2)(e).length:0);return l},_=e=>{let{year:a,onChange:l}=e,i=Array.from({length:9},((e,a)=>a+((new Date).getFullYear()-0))),t=(0,s.useRef)();return(0,s.useEffect)((()=>(setTimeout((()=>{let e=41.6*(16+(a-(new Date).getFullYear())/3);t.current.scrollTo({x:e,y:0,animated:!0})}),20),()=>{})),[a]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{ref:t,style:{maxHeight:"70vh"},className:"scrollV",children:(0,r.jsx)("div",{className:"_dsplFlx year_wrp",children:i.map((e=>(0,r.jsx)("div",{className:"year_tag",onClick:()=>l(e),children:(0,r.jsx)("div",{className:"year-itm".concat(e===a?" activeYear":""," "),children:(0,r.jsx)("div",{className:"y_num",children:e})})},e)))})})})},g=e=>{var a,l;let{date:t,selected:d,onChange:o,close:v}=e,m=new Date(t),x=m.getFullYear(),u=m.getMonth(),_=m.getDate(),g=(new Date).getHours(),y=(0,i.bh)("isTodayPickApp"),N={9:"9:00-9:59 AM",10:"10:00-10:59 AM",11:"11:00-11:59 AM",12:"12:00-12:59 PM",13:"1:00-1:59 PM",14:"2:00-2:59 PM",15:"3:00-3:59 PM",16:"4:00-4:59 PM",17:"5:00-5:59 PM"},f=((0,s.useRef)(),(0,i.bh)("AppointmentsDates")),D=null===f||void 0===f?void 0:f[x+"_"+u+"_"+_];p(D,y);const w=()=>D&&(0,i._2)(D).filter((e=>{var a,l;return(null===(a=D[e])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId)}))[0];let b=w();const C=()=>{let e=1*(null===b||void 0===b?void 0:b.split("_")[1]),a=null===N||void 0===N?void 0:N[e];return(y?g<e&&a:a)&&(0,r.jsxs)("div",{children:["Tiene una cita programada ",(0,r.jsxs)("span",{children:["(",a,")"]})," "]})},k=e=>{var a,l;let s=w(),t=(null===D||void 0===D||null===(a=D[s])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId);var d;t&&1*s.split("_")[1]===1*e?(e=>{let a=N[b.split("_")[1]],l={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,r.jsx)(j,{date:m,hour:a,confirm:()=>{}}),(0,n.OpenModal)(l)})():null!==(d=(0,i.bh)((0,i.nc)()))&&void 0!==d&&d.isAdmin?o(e):t?(0,c.OpenToast)({text:"No puede hacer dos reservas el mismo dia",timeout:1500}):o(e)};return(0,r.jsxs)("div",{className:"hourlyPicker",children:[null!==(a=(0,i.bh)((0,i.nc)()))&&void 0!==a&&a.isAdmin?(0,r.jsxs)("div",{className:"_dsplFlx ",style:{margin:"4px 7px 15px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(h,{initvalue:null===D||void 0===D?void 0:D.isDayOff,keyCode:77,updChange:e=>{v()},color:"var(--primary-hover)"}),(0,r.jsx)("span",{className:"checklabel",style:{marginLeft:6},children:"Dia Off "})]}):null,!(null!==(l=(0,i.bh)((0,i.nc)()))&&void 0!==l&&l.isAdmin)&&C()&&(0,r.jsx)("div",{className:"title_appts_confirmed",children:C()}),(0,r.jsx)("div",{className:"_dsplFlx year_wrp",children:!(null!==D&&void 0!==D&&D.isDayOff)&&[9,10,11,12,13,14,15,16,17].map(((e,a)=>{var l;let s=null===D||void 0===D?void 0:D["app_"+e],t=(null===s||void 0===s?void 0:s.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId);return y&&g>e||s&&!t?(0,r.jsx)("div",{className:"year_tag ".concat(s?"hasTaken":"")},e):(0,r.jsx)("div",{className:"year_tag ".concat(s?"hasTaken":"").concat(t?" youAlreadyHave":""),onClick:()=>k(e),children:(0,r.jsx)("div",{className:"year-itm".concat(e===d?" activeYear":""),children:(0,r.jsx)("div",{className:"y_num",children:s?t?"reservado ":"-":N[e]})})},e)}))})]})},j=e=>{let{data:a,date:l,hour:s,confirm:t}=e;const d=()=>{a.modalID&&(0,n.CloseModal)({id:a.modalID})};return(0,r.jsxs)("div",{type:"Free",className:"idfmDQ",children:[(0,r.jsx)("div",{className:" gPHWco",children:(0,r.jsx)("div",{className:"dcXXTq ",children:(0,r.jsx)("div",{className:"eKdSaJ",children:(0,r.jsxs)("div",{className:" jVaMjA dBwXbT",children:[(0,r.jsx)("div",{className:" date_calendar_header_yearmonth title_cancel_app",children:"Desea cancelar su cita  "}),(0,r.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("span",{children:(0,i.sG)(l)}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("span",{style:{marginLeft:16},children:s}),(0,r.jsx)("div",{className:"flexSpace"})]})]})})})}),(0,r.jsxs)("div",{className:"_dsplFlx calendar_action_group",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{onClick:d,className:"_dsplFlx",children:(0,r.jsx)("div",{className:"btn_cal_cancel",children:"Cancel"})}),(0,r.jsx)("div",{onClick:()=>{d(),t()},children:(0,r.jsx)("div",{className:"_dsplFlx",style:{marginLeft:16,marginRight:8},children:(0,r.jsx)("div",{className:"btn_cal_confirm",children:"Confirmar"})})})]})]})}},9760:(e,a,l)=>{l.r(a),l.d(a,{CloseModal:()=>o,OpenModal:()=>r,default:()=>c});var s=l(2791),i=l(5408),t=l(2350),n=l(184);const d="listDialog_mdh392",c=()=>{const e=(0,t.bh)("listDialog")||{};(0,i.Z)(d);let a=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:a.map(((a,l)=>{let i=e[a];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let l={zIndex:i.zIndex},t=null,d=i.data;return i.content&&(t=s.cloneElement(i.content,{data:d})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:l,id:a,children:t})}),i.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=a,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},a)}}))})},r=e=>{let a=(0,t.bh)("listDialog")||{},l=(0,t.M5)();a[l]||(a[l]={}),a[l].visible=!0;let s={};e.props?(s=e.props,s.modalID=l):s.modalID=l;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),a[l].isView=e.isView,a[l].observeResize=e.observeResize,a[l].observeResize&&(a[l].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(l,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===a[l].width&&s.height===a[l].height||(a[l].height=s.height+10,a[l].width=s.width,(0,t.Rz)("listDialog",a),(0,t.wt)(d)))}),200)),a[l].display=!0,e.zIndex&&(a[l].zIndex=e.zIndex),e.height&&(a[l].height=e.height),e.width&&(a[l].width=e.width),e.content&&(a[l].content=e.content),a[l].data=s,(0,t.Rz)("listDialog",a),(0,t.wt)(d),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,t.Rz)("modalOpen",l),(0,t.wt)(d)}),125)},o=e=>{let a=(0,t.bh)("listDialog")||{},l=e.id;if(a[l]){var s,i,n;a[l].observeResize&&a[l].observeInterval&&clearInterval(a[l].observeInterval),a[l].display=!1,null===(s=a[l])||void 0===s||null===(i=s.data)||void 0===i||null===(n=i.closeEvent)||void 0===n||n.call(i),(0,t.Rz)("listDialog",a),delete a[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,t.wt)(d),setTimeout((()=>{delete a[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,t.Rz)("modalOpen",null)}),750)}}},2004:()=>{}}]);
//# sourceMappingURL=2137.c37ff593.chunk.js.map