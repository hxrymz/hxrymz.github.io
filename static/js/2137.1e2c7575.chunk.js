"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2137,9760],{2137:function(e,a,n){n.r(a);var l=n(9439),i=n(2791),t=n(2350),s=n(2647),d=(n(2004),n(9760)),r=n(5408),c=n(15),o=n(184),u=(0,s.PU)(),v=(0,s.YZ)(),h=function(e){var a=e.onConfirm,n=e.onCancel,s=e.init,d=e.last,r=e.isRange,c=e.appoitmentType,u=e.colors,v=(0,i.useState)(s),h=(0,l.Z)(v,2),x=h[0],f=h[1],p=(0,i.useState)(d),g=(0,l.Z)(p,2),j=g[0],y=g[1],N=(0,i.useState)(!1),D=(0,l.Z)(N,2),w=D[0],b=D[1],C=(0,i.useState)(!1),k=(0,l.Z)(C,2),I=k[0],T=k[1],z=(0,i.useState)(null),F=(0,l.Z)(z,2),M=F[0],R=F[1],S=function(){I?T(!1):n()},A=u||{"--calendar-primary-color":"var(--primary-light)","--calendar-primary-backcolor":"var(--primary-blue--hover-back-30)","--calendar-selected_lbl_color":"var(--light-100)"};return(0,o.jsxs)("div",{className:"dateBox darkmode",style:A,children:[(0,o.jsx)("div",{className:"date_header_box",children:(0,o.jsx)("div",{className:"date_header_title",children:r?"Select Ranges":"Escojer Dia"})}),(0,o.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,o.jsx)("div",{className:"date_range_title",children:x?(0,t.kj)(x):"Start Date"}),r?(0,o.jsx)("div",{className:"date_range_space_title",children:" - "}):null,r?(0,o.jsx)("div",{className:"date_range_title",children:j?(0,t.kj)(j):"End Date"}):null,(0,o.jsx)("div",{className:"flexSpace"})]}),I?(0,o.jsx)(_,{onChange:R,date:x,selected:M,close:S}):(0,o.jsx)(m,{onChangeDate:function(e){c?(y(null),b(!0),f(e),T(!0)):r&&w&&e>x?(y(e),b(!1)):(f(e),y(null),b(!0))},init:x,last:j,isRange:r,appoitmentType:c}),(0,o.jsxs)("div",{className:"_dsplFlx calendar_action_group",children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{onClick:S,size:40,className:"_dsplFlx",children:(0,o.jsx)("div",{className:"btn_cal_cancel",children:"Cancel"})}),(0,o.jsx)("div",{onClick:function(){c?(T(!1),a({initDate:x,appTimeSelected:M})):(r&&x&&j||x)&&a({initDate:x,lastDate:j})},children:(0,o.jsx)("div",{className:"_dsplFlx",style:{marginLeft:16,marginRight:8},children:(0,o.jsx)("div",{className:"btn_cal_confirm",children:"OK"})})})]})]})};a.default=function(e){var a=e.data,n=e.onConfirm,l=e.initValue,i=e.init,t=e.last,s=e.isRange,c=e.appoitmentType,u=e.colors;(0,r.Z)("fb_updated_1128h");return(0,o.jsx)(h,{onConfirm:function(e){null===n||void 0===n||n(e),a.modalID&&(0,d.CloseModal)({id:a.modalID})},onCancel:function(){a.modalID&&(0,d.CloseModal)({id:a.modalID})},colors:u,initValue:l,init:i,last:t,isRange:s,appoitmentType:c})};var m=function(e){var a=e.init,n=e.last,s=e.onChangeDate,d=e.isRange,r=e.appoitmentType,c=(0,i.useState)((new Date).getFullYear()),v=(0,l.Z)(c,2),h=v[0],m=v[1],f=(0,i.useState)((new Date).getMonth()),_=(0,l.Z)(f,2),g=_[0],j=_[1],y=(0,i.useState)([]),N=(0,l.Z)(y,2),D=N[0],w=N[1],b=(0,i.useState)(!1),C=(0,l.Z)(b,2),k=C[0],I=C[1],T=(0,i.useState)(1),z=(0,l.Z)(T,2),F=(z[0],z[1]);(0,i.useEffect)((function(){return w((0,t.ul)(g,h)),setTimeout((function(){F((0,t.M5)())}),350),function(){}}),[g,h]);var M=t.f2.es[g+1],R=function(e){if(g+e>11||g+e<0){var a=g+e>11?0:g+e<0?11:g+e,n=g+e>11?h+1:g+e<0?h-1:h;j(a),m(n)}else j(g+e)},S=r&&h===(new Date).getFullYear()&&g<=(new Date).getMonth();return(0,o.jsxs)("div",{style:{marginLeft:4},children:[(0,o.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,o.jsx)("div",{onClick:function(){return I(!k)},size:40,children:(0,o.jsxs)("div",{className:"_dsplFlx",style:{padding:8},children:[(0,o.jsx)("div",{className:"date_calendar_header_yearmonth",children:M}),(0,o.jsx)("div",{className:"date_calendar_header_yearmonth",children:h}),(0,o.jsx)("div",{style:{paddingHorizontal:2},children:(0,o.jsx)(u,{name:"arrow_drop_down",size:24,color:"var(--light-300)"})})]})}),(0,o.jsx)("div",{className:"flexSpace"}),!k&&(0,o.jsx)("div",{className:"_dsplFlx ".concat(S?"disabled":""),children:(0,o.jsx)("div",{style:{borderRadius:50},children:(0,o.jsx)("div",{style:{padding:"0 2px",marginRight:12},onClick:function(e){S||R(-1)},children:(0,o.jsx)(u,{name:"arrow_left",size:24,color:"var(--light-200)"})})})}),k?null:(0,o.jsx)("div",{className:"_dsplFlx",children:(0,o.jsx)("div",{style:{borderRadius:50},children:(0,o.jsx)("div",{style:{padding:"0 2px"},onClick:function(){return R(1)},children:(0,o.jsx)(u,{name:"arrow_right",size:24,color:"var(--light-200)"})})})})]}),k?(0,o.jsx)(p,{year:h,onChange:function(e){m(e),I(!1)}}):(0,o.jsx)(x,{year:h,month:g,calendarData:D,onChange:function(e){var a=e&&new Date(h,g,e).getTime();a&&s(a)},init:a,last:n,range:d,appoitmentType:r})]})},x=function(e){var a=e.year,n=e.month,l=e.calendarData,i=e.onChange,s=e.init,d=e.last,r=e.range,c=e.appoitmentType,u=864e5,v=Math.floor(s/u),h=Math.floor(d/u),m=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()),x=(0,t.bh)("AppointmentsDates");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"_dsplFlx date_calendar_week_title",children:t.$l.en.map((function(e,a){return(0,o.jsx)("div",{className:"date_calendar_week_title_day",children:e},e+"_"+a)}))}),(0,o.jsx)("div",{style:{minHeight:282},children:l.map((function(e,l){return(0,o.jsx)("div",{className:"_dsplFlx",children:e.map((function(e,s){var d,p=e.day,_=new Date(a,n,p),g=c&&m>_,j=Math.floor(_/u),y=p&&j>v&&j<h,N=p&&j===v,D=p&&j===h,w=e.isToday,b=function(e){var a;((null===(a=(0,t.bh)((0,t.nc)()))||void 0===a?void 0:a.isAdmin)||k>0||C&&(0,t._2)(C).filter((function(e){var a,n;return(null===(a=C[e])||void 0===a?void 0:a.userId)===(null===(n=(0,t.bh)((0,t.nc)()))||void 0===n?void 0:n.userId)}))[0])&&!g&&((0,t.Rz)("isTodayPickApp",w),i(e))},C=null===x||void 0===x?void 0:x[a+"_"+n+"_"+p],k=(C&&(null===(d=(0,t._2)(C))||void 0===d||d.length),p&&!g&&f(C,w));return(0,o.jsx)("div",{className:"day_wrp ".concat(p?"":" empty_day"," ").concat(g?" disable_day":"").concat(r?" range":"").concat(w?" isToday":"").concat(p&&D?" lastActiveDay":"").concat(p&&N?" firstActiveDay":"").concat(y?" isSelected":""),children:(0,o.jsxs)("div",{className:"day_cal ",onClick:function(){return b(p)},children:[(0,o.jsx)("div",{className:"day_num ",children:p}),(0,o.jsx)("div",{className:"apps_left",children:k||""})]})},s+"_day_"+l)}))},"week_"+l)}))})]})},f=function(e,a){var n=0;if(null!==e&&void 0!==e&&e.isDayOff)return n;if(a){var l=(new Date).getHours();if(l>17)n=null;else if(l>9&&l<17){var i=0;e&&(0,t._2)(e).map((function(e){1*e.split("_")[1]>l&&(i+=1)})),n=17-l-i}else n=9-(e?(0,t._2)(e).length:0)}else n=9-(e?(0,t._2)(e).length:0);return n},p=function(e){var a=e.year,n=e.onChange,l=Array.from({length:9},(function(e,a){return a+((new Date).getFullYear()-0)})),t=(0,i.useRef)();return(0,i.useEffect)((function(){return setTimeout((function(){var e=41.6*(16+(a-(new Date).getFullYear())/3);t.current.scrollTo({x:e,y:0,animated:!0})}),20),function(){}}),[a]),(0,o.jsx)("div",{children:(0,o.jsx)("div",{ref:t,style:{maxHeight:"70vh"},className:"scrollV",children:(0,o.jsx)("div",{className:"_dsplFlx year_wrp",children:l.map((function(e){return(0,o.jsx)("div",{className:"year_tag",onClick:function(){return n(e)},children:(0,o.jsx)("div",{className:"year-itm".concat(e===a?" activeYear":""," "),children:(0,o.jsx)("div",{className:"y_num",children:e})})},e)}))})})})},_=function(e){var a,n,l=e.date,s=e.selected,r=e.onChange,u=e.close,h=new Date(l),m=h.getFullYear(),x=h.getMonth(),p=h.getDate(),_=(new Date).getHours(),j=(0,t.bh)("isTodayPickApp"),y={9:"9:00-9:59 AM",10:"10:00-10:59 AM",11:"11:00-11:59 AM",12:"12:00-12:59 PM",13:"1:00-1:59 PM",14:"2:00-2:59 PM",15:"3:00-3:59 PM",16:"4:00-4:59 PM",17:"5:00-5:59 PM"},N=((0,i.useRef)(),(0,t.bh)("AppointmentsDates")),D=null===N||void 0===N?void 0:N[m+"_"+x+"_"+p],w=(f(D,j),function(){return D&&(0,t._2)(D).filter((function(e){var a,n;return(null===(a=D[e])||void 0===a?void 0:a.userId)===(null===(n=(0,t.bh)((0,t.nc)()))||void 0===n?void 0:n.userId)}))[0]}),b=w(),C=function(){var e=1*(null===b||void 0===b?void 0:b.split("_")[1]),a=null===y||void 0===y?void 0:y[e];return(j?_<e&&a:a)&&(0,o.jsxs)("div",{children:["Tiene una cita programada ",(0,o.jsxs)("span",{children:["(",a,")"]})," "]})},k=function(e){var a,n,l,i=w(),s=(null===D||void 0===D||null===(a=D[i])||void 0===a?void 0:a.userId)===(null===(n=(0,t.bh)((0,t.nc)()))||void 0===n?void 0:n.userId);s&&1*i.split("_")[1]===1*e?function(e){var a=y[b.split("_")[1]],n={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};n.content=(0,o.jsx)(g,{date:h,hour:a,confirm:function(){}}),(0,d.OpenModal)(n)}():null!==(l=(0,t.bh)((0,t.nc)()))&&void 0!==l&&l.isAdmin?r(e):s?(0,c.OpenToast)({text:"No puede hacer dos reservas el mismo dia",timeout:1500}):r(e)};return(0,o.jsxs)("div",{className:"hourlyPicker",children:[null!==(a=(0,t.bh)((0,t.nc)()))&&void 0!==a&&a.isAdmin?(0,o.jsxs)("div",{className:"_dsplFlx ",style:{margin:"4px 7px 15px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)(v,{initvalue:null===D||void 0===D?void 0:D.isDayOff,keyCode:77,updChange:function(e){u()},color:"var(--primary-hover)"}),(0,o.jsx)("span",{className:"checklabel",style:{marginLeft:6},children:"Dia Off "})]}):null,!(null!==(n=(0,t.bh)((0,t.nc)()))&&void 0!==n&&n.isAdmin)&&C()&&(0,o.jsx)("div",{className:"title_appts_confirmed",children:C()}),(0,o.jsx)("div",{className:"_dsplFlx year_wrp",children:!(null!==D&&void 0!==D&&D.isDayOff)&&[9,10,11,12,13,14,15,16,17].map((function(e,a){var n,l=null===D||void 0===D?void 0:D["app_"+e],i=(null===l||void 0===l?void 0:l.userId)===(null===(n=(0,t.bh)((0,t.nc)()))||void 0===n?void 0:n.userId);return j&&_>e||l&&!i?(0,o.jsx)("div",{className:"year_tag ".concat(l?"hasTaken":"")},e):(0,o.jsx)("div",{className:"year_tag ".concat(l?"hasTaken":"").concat(i?" youAlreadyHave":""),onClick:function(){return k(e)},children:(0,o.jsx)("div",{className:"year-itm".concat(e===s?" activeYear":""),children:(0,o.jsx)("div",{className:"y_num",children:l?i?"reservado ":"-":y[e]})})},e)}))})]})},g=function(e){var a=e.data,n=e.date,l=e.hour,i=e.confirm,s=function(){a.modalID&&(0,d.CloseModal)({id:a.modalID})};return(0,o.jsxs)("div",{type:"Free",className:"idfmDQ",children:[(0,o.jsx)("div",{className:" gPHWco",children:(0,o.jsx)("div",{className:"dcXXTq ",children:(0,o.jsx)("div",{className:"eKdSaJ",children:(0,o.jsxs)("div",{className:" jVaMjA dBwXbT",children:[(0,o.jsx)("div",{className:" date_calendar_header_yearmonth title_cancel_app",children:"Desea cancelar su cita  "}),(0,o.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("span",{children:(0,t.sG)(n)}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("span",{style:{marginLeft:16},children:l}),(0,o.jsx)("div",{className:"flexSpace"})]})]})})})}),(0,o.jsxs)("div",{className:"_dsplFlx calendar_action_group",children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{onClick:s,className:"_dsplFlx",children:(0,o.jsx)("div",{className:"btn_cal_cancel",children:"Cancel"})}),(0,o.jsx)("div",{onClick:function(){s(),i()},children:(0,o.jsx)("div",{className:"_dsplFlx",style:{marginLeft:16,marginRight:8},children:(0,o.jsx)("div",{className:"btn_cal_confirm",children:"Confirmar"})})})]})]})}},9760:function(e,a,n){n.r(a),n.d(a,{CloseModal:function(){return o},OpenModal:function(){return c},default:function(){return r}});var l=n(2791),i=n(5408),t=n(2350),s=n(184),d="listDialog_mdh392",r=function(){var e=(0,t.bh)("listDialog")||{},a=((0,i.Z)(d),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:a.map((function(a,n){var i=e[a];if(i&&i.visible){var t={};i.height&&(t.heigth=i.height),i.width,i.zIndex&&(t.zIndex=i.zIndex-1);var d={zIndex:i.zIndex},r=null,c=i.data;return i.content&&(r=l.cloneElement(i.content,{data:c})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:t,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:d,id:a,children:r})}),i.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=a,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},a)}}))})},c=function(e){var a=(0,t.bh)("listDialog")||{},n=(0,t.M5)();a[n]||(a[n]={}),a[n].visible=!0;var l={};e.props?(l=e.props).modalID=n:l.modalID=n;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),a[n].isView=e.isView,a[n].observeResize=e.observeResize,a[n].observeResize&&(a[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),l=e&&e.getBoundingClientRect();l&&(l.width===a[n].width&&l.height===a[n].height||(a[n].height=l.height+10,a[n].width=l.width,(0,t.Rz)("listDialog",a),(0,t.wt)(d)))}),200)),a[n].display=!0,e.zIndex&&(a[n].zIndex=e.zIndex),e.height&&(a[n].height=e.height),e.width&&(a[n].width=e.width),e.content&&(a[n].content=e.content),a[n].data=l,(0,t.Rz)("listDialog",a),(0,t.wt)(d),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,t.Rz)("modalOpen",n),(0,t.wt)(d)}),125)},o=function(e){var a,n,l,i=(0,t.bh)("listDialog")||{},s=e.id;i[s]&&(i[s].observeResize&&i[s].observeInterval&&clearInterval(i[s].observeInterval),i[s].display=!1,null===(a=i[s])||void 0===a||null===(n=a.data)||void 0===n||null===(l=n.closeEvent)||void 0===l||l.call(n),(0,t.Rz)("listDialog",i),delete i[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,t.wt)(d),setTimeout((function(){delete i[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,t.Rz)("modalOpen",null)}),750))}},2004:function(){}}]);
//# sourceMappingURL=2137.1e2c7575.chunk.js.map