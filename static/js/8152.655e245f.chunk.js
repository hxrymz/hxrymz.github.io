"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8152,7766],{3649:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(2791),n=i(184);const a=e=>{var t;return(t=class t extends s.Component{constructor(){super(...arguments),this.state={Component:t.Component}}componentWillMount(){this.state.Component||e().then((e=>{t.Component=e,this.setState({Component:e})}))}render(){const{Component:e}=this.state;return e?(0,n.jsx)(e,{...this.props}):null}}).Component=null,t}},8566:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(2791),n=i(1694),a=i.n(n),o=i(184);class l extends s.Component{constructor(e){super(e),this.state={pressed:!1},this.onMouseUp=this.onMouseUp.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseDown(){this.setState({pressed:!0})}onMouseUp(){this.setState({pressed:!1})}onMouseEnter(){const{onMouseEnter:e}=this.props;e&&e()}onMouseLeave(){this.onMouseUp();const{onMouseLeave:e}=this.props;e&&e()}render(){const{onClick:e,children:t,className:i}=this.props,{pressed:s}=this.state,n=a()("react_times_button",s&&"pressDown",i);return(0,o.jsx)("div",{onClick:e,className:n,onMouseUp:this.onMouseUp,onMouseOut:this.onMouseUp,onMouseDown:this.onMouseDown,onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,children:(0,o.jsx)("div",{className:"wrapper",children:t})})}}l.defaultProps={text:"button",onClick:Function.prototype,children:null,className:""};const r=l},7294:(e,t,i)=>{i.d(t,{YM:()=>o,Z$:()=>l,is:()=>n});const s=(e,t)=>Object.prototype.toString.call(e)===t,n={object:e=>s(e,"[object Object]"),array:e=>Array.isArray(e),func:e=>s(e,"[object Function]"),string:e=>s(e,"[object String]"),undefined:e=>"undefined"===typeof e},a=e=>n.string(e)||n.array(e),o=e=>a(e)?e[0]:null,l=e=>a(e)?e[e.length-1]:null},5130:(e,t,i)=>{i.d(t,{Z:()=>n});i(2791);var s=i(184);const n={time:(0,s.jsx)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",children:(0,s.jsx)("path",{d:"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zM25 14h-3v12l10.49 6.3L34 29.84l-9-5.34z"})}),chevronLeft:(0,s.jsx)("svg",{width:"1792",height:"1792",viewBox:"0 0 1792 1792",children:(0,s.jsx)("path",{d:"M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"})})}},5477:(e,t,i)=>{i.d(t,{Z:()=>M});var s=i(3528),n=i.n(s),a=i(7294);n().tz.load({zones:[],links:[],version:"latest"});const o=()=>{const e=void 0!==i.g.navigator&&i.g.navigator.userAgent.match(/Mobi/),t=void 0!==i.g.Intl;let s;if(e&&t){const e=i.g.Intl;i.g.Intl=void 0,s=n().tz.guess(),i.g.Intl=e}else s=n().tz.guess();if(!s||"UTC"===s)return b("Etc/Greenwich");try{return b(s)}catch(a){return console.error(a),b("Etc/Greenwich")}},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{tz:t,time:i,timeMode:s,useTz:l=!0,meridiem:r=null}=e,d=h(r),c=d&&!s?12:s||24,p=t||o().zoneName,v=m(c),x=u(i,d),g="hh:mmA",b="HH:mmA",f=12===v?g:b;let y,j;const M=n()("1970-01-01 ".concat(x),"YYYY-MM-DD ".concat(f),"en");i||!l?(y=(x?M.format(b):n()().format(b)).split(/:/),j=(x?M.format(g):n()().format(g)).split(/:/)):(y=(x?M.tz(p).format(b):n()().tz(p).format(b)).split(/:/),j=(x?M.tz(p).format(g):n()().tz(p).format(g)).split(/:/));const C={timezone:p,mode:v,hour24:(0,a.YM)(y),minute:(0,a.Z$)(y).slice(0,2),hour12:(0,a.YM)(j).replace(/^0/,""),meridiem:12===v?(0,a.Z$)(j).slice(2):null};return C},r=()=>{const e=l();return"".concat(e.hour24,":").concat(e.minute)},d=e=>isNaN(parseInt(e,10))?0:parseInt(e,10),c=e=>{let t=e;return a.is.undefined(t)&&(t="00"),isNaN(parseInt(t,10))&&(t="00"),parseInt(t,10)<10&&(t="0".concat(parseInt(t,10))),"".concat(t)},u=(e,t)=>{if(a.is.string(e)){let i=e&&e.indexOf(":").length>=0?e.split(/:/).map((e=>c(e))).join(":"):e;const s=parseInt((0,a.YM)(i.split(/:/)),10);return i=i&&t&&(s>0&&s<=12)?"".concat(i," ").concat(t):i,i}return e},h=e=>a.is.string(e)?e&&e.match(/am|pm/i)?e.toLowerCase():null:e,m=e=>{const t=parseInt(e,10);return isNaN(t)||24!==t&&12!==t?24:t},p=(()=>{const e=["Antarctica","Arctic","Chile"],t=["ACT","East","Knox_IN","LHI","North","NSW","South","West"];return n().tz.names().filter((e=>e.indexOf("/")>=0)).filter((t=>!e.indexOf(t.split("/")[0])>=0)).filter((e=>!t.indexOf(e.split("/").slice(-1)[0])>=0))})(),v=p.map((e=>["Canada","Mexico","US"].indexOf(e.split("/")[0])>=0?e:e.split("/").slice(-1)[0])).map((e=>e.replace(/_/g," "))),x=v.map((e=>{const t={},i=p[v.indexOf(e)];return t.city=e,t.zoneName=i,t.zoneAbbr=n()().tz(i).zoneAbbr(),t})),g=e=>{const t=e.split("/");return{country:t[0].toLowerCase(),city:t.slice(-1)[0].toLowerCase()}},b=e=>{let t=x.filter((t=>t.zoneName===e));if(!t.length&&/\//.test(e)&&(t=x.filter((t=>t.zoneAbbr===e))),t.length||(t=x.filter((t=>((e,t)=>{const i=g(e),s=g(t);return i.country===s.country&&i.city===s.city})(t.zoneName,e)))),!t.length)throw new Error("Can not find target timezone for ".concat(e));return(0,a.YM)(t)},f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00:00";if(!e)return t;let[i,s,n]="".concat(e).split(/[:|\s]/);return n&&"pm"===n.toLowerCase()&&(n="PM"),n&&"am"===n.toLowerCase()&&(n="AM"),n&&"AM"!==n&&"PM"!==n&&(n="AM"),i&&!isNaN(i)||(i="0"),!n&&Number(i>24)&&(i=Number(i)-24),n&&Number(i>12)&&(i=Number(i)-12),(!s||isNaN(s)||Number(s)>=60)&&(s="0"),Number(i)<10&&(i="0".concat(Number(i))),Number(s)<10&&(s="0".concat(Number(s))),n?"".concat(i,":").concat(s," ").concat(n):"".concat(i,":").concat(s)},y=e=>e.replace(/\s[P|A]M$/,""),j=(e,t)=>{const i=n()(),s=i.format("YYYY-MM-DD"),a=i.add(1,"day").format("YYYY-MM-DD"),o=f(e,"00:00"),l=f(t,"23:30");let r="".concat(s," ").concat(y(o));const d=y(l);let c=n()("".concat(s," ").concat(d))<=n()(r)?"".concat(a," ").concat(d):"".concat(s," ").concat(d);return/PM$/.test(o)&&(r=n()(r).add(12,"hours").format("YYYY-MM-DD HH:mm")),/PM$/.test(l)&&(c=n()(c).add(12,"hours").format("YYYY-MM-DD HH:mm")),{start:r,end:c}},M={tzMaps:x,guessUserTz:o,hourFormatter:f,getStartAndEnd:j,get12ModeTimes:e=>{let{from:t,to:i,step:s=30,unit:a="minutes"}=e;const{start:o,end:l}=j(t,i),r=[];let d=n()(o);for(;d<=n()(l);){const e=Number(d.format("HH"));r.push("".concat(d.format("hh:mm")," ").concat(e>=12?"PM":"AM")),d=d.add(s,a)}return r},get24ModeTimes:e=>{let{from:t,to:i,step:s=30,unit:a="minutes"}=e;const{start:o,end:l}=j(t,i),r=[];let d=n()(o);for(;d<=n()(l);)r.push(d.format("HH:mm")),d=d.add(s,a);return r},withoutMeridiem:y,time:l,current:r,tzForCity:e=>{const t=e.toLowerCase(),i=x.filter((e=>e.city.toLowerCase()===t));return(0,a.YM)(i)},tzForName:b,validate:c,validateInt:d,validateMeridiem:(e,t)=>{const i=e||r(),s=parseInt(t,10);let n=i.split(/:/)[0];return n=d(n),12===s?n>12?"PM":"AM":null},validateTimeMode:m}},1459:(e,t,i)=>{i.d(t,{ZP:()=>S,jd:()=>E});var s=i(2791),n=i(2350),a=i(2647),o=(i(1206),i(9760)),l=i(24),r=i(4304),d=i(9661),c=i(1694),u=i.n(c),h=i(4164),m=i(184);const p={children:(0,m.jsx)("span",{}),onOutsideClick:Function.prototype};class v extends s.PureComponent{constructor(e){super(e),this.hasAction=!1,this.onOutsideClick=this.onOutsideClick.bind(this)}componentDidMount(){this.bindActions()}componentDidUpdate(){this.bindActions()}componentWillUnmount(){this.unbindActions()}bindActions(){const{closeOnOutsideClick:e}=this.props;if(e){if(this.hasAction)return;document.addEventListener?document.addEventListener("mousedown",this.onOutsideClick,!0):document.attachEvent("onmousedown",this.onOutsideClick),this.hasAction=!0}}unbindActions(){if(!this.hasAction)return;const{closeOnOutsideClick:e}=this.props;e&&(document.removeEventListener?document.removeEventListener("mousedown",this.onOutsideClick,!0):document.detachEvent("onmousedown",this.onOutsideClick),this.hasAction=!1)}onOutsideClick(e){const t=e||window.event,i="undefined"!==typeof t.which?t.which:t.button;if(!h.findDOMNode(this.childNode).contains(t.target)&&1===i){const{onOutsideClick:e}=this.props;e&&e(t)}}render(){const{focused:e}=this.props,t=e?"outside_container active":"outside_container";return(0,m.jsx)("div",{ref:e=>this.childNode=e,className:t,children:this.props.children})}}v.defaultProps=p;const x=v;var g=i(8566),b=i(5477);const f={en:{confirm:"confirm",cancel:"cancel",close:"close",timezonePickerTitle:"Pick a timezone",timezonePickerLabel:"Closest city or timezone",am:"AM",pm:"PM"},"zh-cn":{confirm:"\u786e\u8ba4",cancel:"\u53d6\u6d88",close:"\u5173\u95ed",timezonePickerTitle:"\u9009\u62e9\u65f6\u533a",timezonePickerLabel:"\u6700\u8fd1\u7684\u57ce\u5e02\u6216\u65f6\u533a",am:"\u4e0a\u5348",pm:"\u4e0b\u5348"},"zh-tw":{confirm:"\u78ba\u8a8d",cancel:"\u53d6\u6d88",close:"\u95dc\u9589",timezonePickerTitle:"\u9078\u64c7\u6642\u5340",timezonePickerLabel:"\u6700\u8fd1\u7684\u57ce\u5e02\u6216\u6642\u5340",am:"\u4e0a\u5348",pm:"\u4e0b\u5348"},fr:{confirm:"Confirmer",cancel:"Annul\xe9",close:"Arr\xeater",timezonePickerTitle:"Choisissez un timezone",timezonePickerLabel:"Ville la plus proche ou timezone",am:"AM",pm:"PM"},ja:{confirm:"\u78ba\u8a8d\u3057\u307e\u3059",cancel:"\u30ad\u30e3\u30f3\u30bb\u30eb",close:"\u30af\u30ed\u30fc\u30ba",timezonePickerTitle:"\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3092\u9078\u629e\u3059\u308b",timezonePickerLabel:"\u6700\u3082\u8fd1\u3044\u90fd\u5e02\u307e\u305f\u306fTimezone",am:"AM",pm:"PM"}},y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";return f[e]};var j=i(5130),M=i(7294),C=i(3649);const N={material:(0,C.Z)((()=>Promise.all([i.e(4131),i.e(5495)]).then(i.bind(i,5495)).then((e=>e.default)))),classic:(0,C.Z)((()=>i.e(5446).then(i.bind(i,5446)).then((e=>e.default))))},_=b.Z.time({useTz:!1});_.current=b.Z.current();const z={autoMode:!0,autoClose:!0,colorPalette:"light",draggable:!0,focused:!1,language:"en",meridiem:_.meridiem,onFocusChange:Function.prototype,onTimeChange:Function.prototype,onTimezoneChange:Function.prototype,placeholder:"",showTimezone:!1,theme:"material",time:"",timeMode:_.mode,trigger:null,withoutIcon:!1,minuteStep:5,limitDrag:!1,timeFormat:"",timeFormatter:null,useTz:!0,closeOnOutsideClick:!0,timeConfig:{step:30,unit:"minutes"},disabled:!1,focusDropdownOnTime:!0};class w extends s.PureComponent{constructor(e){super(e);const{focused:t,timezone:i,onTimezoneChange:s}=e,n=this.timeData(!1),a=b.Z.tzForName(n.timezone);this.state={focused:t,timezoneData:a,timeChanged:!1},this.onBlur=this.onBlur.bind(this),this.onFocus=this.onFocus.bind(this),this.timeData=this.timeData.bind(this),this.handleTimeChange=this.handleTimeChange.bind(this),this.handleHourChange=this.handleHourChange.bind(this),this.handleMinuteChange=this.handleMinuteChange.bind(this),this.handleMeridiemChange=this.handleMeridiemChange.bind(this),this.handleHourAndMinuteChange=this.handleHourAndMinuteChange.bind(this),i||s(a)}componentWillReceiveProps(e){const{focused:t}=e;t!==this.props.focused&&this.setState({focused:t})}onFocus(){const{focused:e}=this.state;e||this.onFocusChange(!e)}onBlur(){const{focused:e}=this.state;e&&this.onFocusChange(!e)}onFocusChange(e){const{disabled:t}=this.props;if(t)return;this.setState({focused:e});const{onFocusChange:i}=this.props;i&&i(e)}timeData(e){const{time:t,useTz:i,timeMode:s,timezone:n,meridiem:a}=this.props;return b.Z.time({time:t,meridiem:a,timeMode:s,tz:n,useTz:!t&&!e&&i})}get languageData(){const{language:e,phrases:t={}}=this.props;return Object.assign({},y(e),t)}get hourAndMinute(){const{timeMode:e}=this.props,t=this.timeData(this.state.timeChanged);return[12===parseInt(e,10)?12===parseInt(t.hour12,10)?"00":t.hour12:24===parseInt(t.hour24,10)?"00":t.hour24,t.minute]}get formattedTime(){const{timeMode:e,timeFormat:t,timeFormatter:i}=this.props,[s,n]=this.hourAndMinute,a=b.Z.validateTimeMode(e);let o="";return i&&M.is.func(i)?o=i({hour:s,minute:n,meridiem:this.meridiem}):t&&M.is.string(t)?(o=t,/HH?/.test(o)||/MM?/.test(o)?12===a&&console.warn("It seems you are using 12 hours mode with 24 hours time format. Please check your timeMode and timeFormat props"):(/hh?/.test(o)||/mm?/.test(o))&&24===a&&console.warn("It seems you are using 24 hours mode with 12 hours time format. Please check your timeMode and timeFormat props"),o=o.replace(/(HH|hh)/g,s),o=o.replace(/(MM|mm)/g,n),o=o.replace(/(H|h)/g,Number(s)),o=o.replace(/(M|m)/g,Number(n))):o=12===a?"".concat(s," : ").concat(n," ").concat(this.meridiem):"".concat(s," : ").concat(n),o}get meridiem(){const{meridiem:e}=this.props,t=this.timeData(this.state.timeChanged),i=this.languageData,s=e||t.meridiem;return s&&s.match(/^am|pm/i)?i[s.toLowerCase()]:s}onTimeChanged(e){this.setState({timeChanged:e})}handleHourChange(e){const t=b.Z.validate(e),i=this.hourAndMinute[1];this.handleTimeChange({hour:t,minute:i,meridiem:this.meridiem})}handleMinuteChange(e){const t=b.Z.validate(e),i=this.hourAndMinute[0];this.handleTimeChange({hour:i,minute:t,meridiem:this.meridiem})}handleMeridiemChange(e){const[t,i]=this.hourAndMinute;this.handleTimeChange({hour:t,minute:i,meridiem:e})}handleTimeChange(e){const{onTimeChange:t}=this.props;t&&t(e),this.onTimeChanged(!0)}handleHourAndMinuteChange(e){this.onTimeChanged(!0);const{onTimeChange:t,autoClose:i}=this.props;return i&&this.onBlur(),t&&t(e)}renderDialPlate(){const{theme:e,disabled:t,timeMode:i,autoMode:s,autoClose:n,draggable:a,language:o,limitDrag:l,minuteStep:r,timeConfig:d,colorPalette:c,showTimezone:u,onTimezoneChange:h,timezoneIsEditable:p,focusDropdownOnTime:v}=this.props;if(t)return null;const x=N["material"===e?e:"classic"],{timezoneData:g}=this.state,[b,f]=this.hourAndMinute;return(0,m.jsx)(x,{hour:b,minute:f,autoMode:s,autoClose:n,language:o,draggable:a,limitDrag:l,timezone:g,meridiem:this.meridiem,timeConfig:d,showTimezone:u,phrases:this.languageData,colorPalette:c,clearFocus:this.onBlur,timeMode:parseInt(i,10),onTimezoneChange:h,minuteStep:parseInt(r,10),timezoneIsEditable:p,handleHourChange:this.handleHourChange,handleTimeChange:this.handleTimeChange,handleMinuteChange:this.handleMinuteChange,handleMeridiemChange:this.handleMeridiemChange,focusDropdownOnTime:v})}render(){const{trigger:e,disabled:t,placeholder:i,withoutIcon:s,colorPalette:n,closeOnOutsideClick:a}=this.props,{focused:o}=this.state,l=this.formattedTime,r=u()("time_picker_preview",o&&"active",t&&"disabled"),d=u()("time_picker_container","dark"===n&&"dark"),c=u()("preview_container",s&&"without_icon");return(0,m.jsxs)("div",{className:d,children:[e||(0,m.jsx)(g.Z,{onClick:this.onFocus,className:r,children:(0,m.jsxs)("div",{className:c,children:[s?"":j.Z.time,i||l]})}),(0,m.jsx)(x,{focused:o,onOutsideClick:this.onBlur,closeOnOutsideClick:!t&&a,children:this.renderDialPlate()})]})}}w.defaultProps=z;const D=w;var k=i(2502);const I=(0,a.YZ)(),P=(0,a.Np)(),T=(0,l.f_)(),F=((0,d.a)(),(0,a.PU)()),A="paystub_employee";let O={1:{active:!0,start:480,end:1020},2:{active:!0,start:480,end:1020},3:{active:!0,start:480,end:1020},4:{active:!0,start:480,end:1020},5:{active:!0,start:480,end:1020},6:{active:!1,start:480,end:720}};const S=e=>{var t,i,a,l,d,c,u,h,p,v,x,g,b,f,y;let{data:j,confirm:M,item:C}=e;const[N,_]=(0,s.useState)(!1),[,z]=(0,s.useState)(0);(0,s.useEffect)((()=>{if(!N){_(!0);let e=(0,n.bh)(A)||{};e.hourly||w("hourly",O),e.lunchDuration||(w("lunchDuration","0"),C.lunchTime&&w("lunchDuration",C.lunchTime)),e.payrate||(w("payrate","0"),C.payrate&&w("payrate",C.payrate)),z((0,n.M5)())}}));const w=(e,t,i)=>{let s=(0,n.bh)(A)||{};i?(s[i]||(s[i]={}),s[i][e]=t):s[e]=t,(0,n.Rz)(A,s),z((0,n.M5)())},D=async e=>{const t=(0,n.I7)(e);await t&&setTimeout((()=>{(0,n.Rz)(A,null),(null===j||void 0===j?void 0:j.modalID)&&(0,o.CloseModal)({id:null===j||void 0===j?void 0:j.modalID})}),400)},F=(e,t,i)=>{var s;let a=null===(s=(0,n.bh)(A))||void 0===s?void 0:s.hourly;a[e]=t,w("hourly",a)};let S=E(null===(t=(0,n.bh)(A))||void 0===t?void 0:t.hourly,null===(i=(0,n.bh)(A))||void 0===i?void 0:i.payrate,null===(a=(0,n.bh)(A))||void 0===a?void 0:a.lunchDuration,null===(l=(0,n.bh)(A))||void 0===l?void 0:l.hasOvertime);return(0,m.jsxs)("div",{style:{maxHeight:"96vh",width:"1040px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 25px"},className:"payStub ",children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Registrar Pago Nomina"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"employee_name",children:null===C||void 0===C?void 0:C.name})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{margin:"10px 10px 10px 0"},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{style:{margin:"14px 10px 0px 0"},children:(0,m.jsx)(T,{init:null===(d=(0,n.bh)(A))||void 0===d?void 0:d.datePeriod,label:"Periodo de Pago",updDate:e=>(async e=>{let t=C.userTC,i=(0,n.Qk)(e);w("weekNo","Wk_"+i),w("datePeriod",e);let s=await(0,k.iW)([t,i]);1*(null===s||void 0===s?void 0:s.week)===1*i?w("hourly",null===s||void 0===s?void 0:s.hourly):w("hourly",O)})(e)})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{style:{margin:"14px 10px 0px 0"},children:(0,m.jsx)(T,{init:null===(c=(0,n.bh)(A))||void 0===c?void 0:c.date,label:"Fecha de Pago",updDate:e=>w("date",e)})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(P,{init:null===(u=(0,n.bh)(A))||void 0===u?void 0:u.payrate,label:"Pago Hora",width:120,type:"number",updChanges:e=>w("payrate",e)}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(P,{init:null===(h=(0,n.bh)(A))||void 0===h?void 0:h.lunchDuration,label:"Lunch Duration",width:120,type:"number",updChanges:e=>w("lunchDuration",e)}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{style:{margin:"30px 0px 0px 0"},children:(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("span",{className:"checklabel",children:"Overtime"}),(0,m.jsx)(I,{initvalue:null===(p=(0,n.bh)(A))||void 0===p?void 0:p.hasOvertime,keyCode:57,updChange:e=>w("hasOvertime",e)})]})}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:"_dsplFlx spaceAround flxWrp card_2_dark",style:{margin:"56px 0 56px"},children:(null===(v=(0,n.bh)(A))||void 0===v?void 0:v.hourly)&&(0,n._2)(null===(x=(0,n.bh)(A))||void 0===x?void 0:x.hourly).map(((e,t)=>{var i,s,a,o,l;let r=null===(i=(0,n.bh)(A))||void 0===i||null===(s=i.hourly)||void 0===s?void 0:s[e];return(0,m.jsx)(H,{keyId:e,dayName:null===n.zy||void 0===n.zy?void 0:n.zy[e],index:t,data:r,confirm:F,payrate:1*(null===(a=(0,n.bh)(A))||void 0===a?void 0:a.payrate),lunch:1*(null===(o=(0,n.bh)(A))||void 0===o?void 0:o.lunchDuration),overtime:null===(l=(0,n.bh)(A))||void 0===l?void 0:l.overtime},e)}))}),1*(null===(g=(0,n.bh)(A))||void 0===g?void 0:g.payrate)>0?(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:8},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("span",{className:"checklabel",children:"Regular Payments: "}),(0,m.jsx)("div",{className:"date2Upd ",children:S.regularPayment.toFixed(2)})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("span",{className:"checklabel",children:"Regular Hours: "}),(0,m.jsx)("div",{className:"date2Upd ",children:(S.regularHours/60).toFixed(2)})]})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("span",{className:"checklabel",children:"Overtime Payments: "}),(0,m.jsx)("div",{className:"date2Upd ",children:S.overtimePayment.toFixed(2)})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("span",{className:"checklabel",children:"Overtime Hours: "}),(0,m.jsx)("div",{className:"date2Upd ",children:(S.overtimeHours/60).toFixed(2)})]})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("span",{className:"checklabel",children:"Gross Payment: "}),(0,m.jsx)("div",{className:"date2Upd ",children:(S.regularPayment+S.overtimePayment).toFixed(2)})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("span",{className:"checklabel",children:""}),(0,m.jsx)("div",{className:"date2Upd "})]})]}),(0,m.jsx)("div",{className:"flexSpace"})]}):null,S.regularPayment+S.overtimePayment>0&&null!==(b=(0,n.bh)(A))&&void 0!==b&&b.datePeriod&&null!==(f=(0,n.bh)(A))&&void 0!==f&&f.date&&null!==(y=(0,n.bh)(A))&&void 0!==y&&y.payrate?(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:48},children:[(0,m.jsx)("div",{className:"_dsplFlx ",style:{margin:"10px 10px 10px 0"}}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{children:(0,m.jsx)(r.NK,{clickHandler:async e=>{var t,i,s;let a=(0,n.bh)(A)||{},o=(new Date).getTime()+800;if(a.date){let e=new Date(a.date).getTime();o=e||o}a.date=o,a.lunchDuration=1*a.lunchDuration,a.payrate=1*a.payrate;let l={businessId:null===(t=(0,n.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:new Date(a.date).getFullYear()};a.businessId=null===(i=(0,n.bh)("profileUser"))||void 0===i?void 0:i.businessId,a.employeeId=null===C||void 0===C?void 0:C.employeeId,a.epaystubId=(0,n.M5)();let r={...null===(s=(0,n.bh)((0,n.hQ)()))||void 0===s?void 0:s.add_employee_paystub};r.params=l,r.form=a,D(r)},label:"Guardar"})})]}):null]})},H=e=>{let{data:t,lunch:i,index:s,dayName:a,confirm:o,payrate:l,keyId:r}=e;const d=e=>{let i=(0,n.bh)("day_last"+r)||0;if(Date.now()>i){(0,n.Rz)("day_last"+r,Date.now()+490);let i=Object.assign({},t,e);o(r,i)}};let c=t.end-t.start-i,u=l/60*c,h=R(c);return(0,m.jsxs)(m.Fragment,{children:[s>0?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"left_border"}),(0,m.jsx)("div",{className:"flexSpace"})]}):null,(0,m.jsxs)("div",{className:"lbl_h_dtls",style:{marginTop:8,textAlign:"left"},children:[(0,m.jsxs)("div",{className:"dayHour _dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{style:{marginRight:12},children:"".concat(a)}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)(I,{initvalue:null===t||void 0===t?void 0:t.active,keyCode:57,updChange:e=>d({active:e})}),(0,m.jsx)("div",{className:"flexSpace"})]}),null!==t&&void 0!==t&&t.active?(0,m.jsx)("div",{className:"dayHour",children:(0,m.jsx)("div",{children:"".concat(h," - $").concat(u?u.toFixed(2):"0.00")})}):null,null!==t&&void 0!==t&&t.active?(0,m.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,m.jsx)("div",{className:"flexSpace"}),t.startMode?(0,m.jsx)(Y,{data:t,field:"start",icon:"startMode"}):(0,m.jsx)(U,{data:t,field:"start",confirm:d}),(0,m.jsx)("div",{className:"flexSpace"}),"-",(0,m.jsx)("div",{className:"flexSpace"}),t.endMode?(0,m.jsx)(Y,{data:t,field:"end",icon:"endMode"}):(0,m.jsx)(U,{data:t,field:"end",confirm:d}),(0,m.jsx)("div",{className:"flexSpace"})]}):null]})]})},U=e=>{let{data:t,sA:i,field:a,value:o,dayName:l,confirm:r,timezone:d,meridiem:c,hour:u,minute:h}=e;const[p,v]=(0,s.useState)(!1);let x=null!==t&&void 0!==t&&t[a]?R(null===t||void 0===t?void 0:t[a]):null;return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:" payments hour",onClick:()=>{v(!p)},children:[(0,m.jsx)(F,{name:"timer_outline2",size:22,color:"#757575"}),R(null===t||void 0===t?void 0:t[a])]}),p?(0,m.jsx)("div",{className:"time_picker_wrapper centerMdl",children:(0,m.jsx)(D,{trigger:()=>(0,m.jsx)("div",{}),focused:p,meridiem:c,timezone:d,onFocusChange:()=>{v(!p)},onTimeChange:e=>{let t=(0,n.bh)("day_last")||0;if(Date.now()>t){(0,n.Rz)("day_last",Date.now()+490);let t=60*e.hour+1*e.minute;r({[a]:t})}},showTimezone:!1,time:x?"".concat(x):null})}):null]})};let L={33:"fingerprint",52:"face-recognition",35:"cards"};const Y=e=>{let{data:t,sA:i,field:s,icon:n}=e,a=L[t[n][0]];return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:" payments hour",children:[(0,m.jsx)(F,{name:a,size:22,color:"var(--hrm_palette-blue-purple)"}),R(null===t||void 0===t?void 0:t[s])]})})},R=e=>{if(!e)return null;let t=Math.floor(e/60),i=e-60*t;return"".concat(t>9?t:"0"+t,":").concat(i>9?i:"0"+i)},E=(e,t,i,s)=>{let a=0,o=0,l=0,r=t/60;return(0,n._2)(e).map(((t,s)=>{var n;if(null!==e&&void 0!==e&&null!==(n=e[t])&&void 0!==n&&n.active){var l,r;let s=(null===e||void 0===e||null===(l=e[t])||void 0===l?void 0:l.end)-(null===e||void 0===e||null===(r=e[t])||void 0===r?void 0:r.start);a+=s,o+=s-1*i}})),s&&o>2400&&(l=o-2400,o=2400),{hoursTt:a,regularHours:o,regularPayment:o*r,overtimeHours:l,overtimePayment:l*r*1.5}}},4304:(e,t,i)=>{i.d(t,{lp:()=>o,NK:()=>a});i(2791);var s=i(1087),n=i(184);const a=e=>{let{clickHandler:t,label:i,navTo:a}=e;return(0,n.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:t,children:(0,n.jsx)(s.OL,{className:" jaqJnq",to:a,children:i})})},o=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"jRutKh",children:(0,n.jsx)("div",{className:"jSvsvz",children:(0,n.jsx)("div",{className:"jzcvbH",children:(0,n.jsx)("div",{className:" kfqEsq",children:t})})})})}},2502:(e,t,i)=>{i.d(t,{$5:()=>r,Dy:()=>n,Oy:()=>u,er:()=>l,hb:()=>d,iW:()=>c,kQ:()=>a,lG:()=>o,tM:()=>p});var s=i(2350);const n=async e=>{var t,i;let n={...null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_employee};n.params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search1":(0,s.bh)("employeeOut")?"":"in-job"};const a=(0,s.I7)(n),o=await a;o&&((0,s.Rz)("employees_list",h((0,s.jQ)(o),"name")),(0,s.Rz)("employees_ids",o),(0,s.Rz)("employees_ctIds",(0,s.ME)((0,s.jQ)(o),"userTC")),e&&e())},a=async e=>{var t,i;let n={...null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_employee};n.params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search0":(0,s.bh)("searchQry"),":search5":(0,s.bh)("employeeOut")?"":"in-job"};const a=(0,s.I7)(n),o=await a;o&&((0,s.Rz)("employees_list",h((0,s.jQ)(o),"name")),e&&e())},o=async(e,t)=>{var i,n,a,o;let l={...null===(i=(0,s.bh)((0,s.hQ)()))||void 0===i?void 0:i.search_employee_paystub};l.params={businessId:null===(n=(0,s.bh)("profileUser"))||void 0===n?void 0:n.businessId,year:(0,s.bh)("date_current_year"),":date1":(null===(a=(0,s.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)-10,":date2":null===(o=(0,s.bh)("date_range_comps"))||void 0===o?void 0:o.lastDate,":employeeId":e};const r=(0,s.I7)(l),d=await r;d&&!d.error&&((0,s.Rz)("paystub_submayor_list",d),(0,s._2)(d).map((async e=>{var t,i;u(null===(t=d[e])||void 0===t?void 0:t.comprobanteId,null===(i=d[e])||void 0===i?void 0:i.employeeId)}))),t&&t()},l=async e=>{var t,i;let n=(0,s.Qk)((0,s.bh)("datePeriodRs")),a={...null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_employee_paystub};a.params={businessId:null===(i=(0,s.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search2":"Wk_"+(1*n-1)};const o=(0,s.I7)(a),l=await o;return l&&!l.error&&(0,s._2)(l).length>0?l:null},r=async e=>{let t="get_all_timecard_last",i=(0,s.bh)(t)||0;if(Date.now()>i){var n,a;(0,s.Rz)(t,Date.now()+190);let i={...null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.scan_time_card};i.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search0":"00"};const o=(0,s.I7)(i),l=await o;l&&((0,s.Rz)("timecard_list",h((0,s.jQ)(l),"code")),(0,s.Rz)("timecard_gorups_week",m(l)),e&&e())}},d=async(e,t)=>{let i="get_search_timecard_last",n=(0,s.bh)(i)||0;if(Date.now()>n){var a,o;(0,s.Rz)(i,Date.now()+190);let n={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.scan_time_card};n.params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId},e.map(((e,t)=>{e&&(n.params[":search"+t]=e.toString().trim())}));const l=(0,s.I7)(n),r=await l;r&&((0,s.Rz)("timecard_list",h((0,s.jQ)(r),"code")),t&&t())}},c=async e=>{let t="get_search_timecard_last",i=(0,s.bh)(t)||0;if(!(Date.now()>i))return null;{var n,a;(0,s.Rz)(t,Date.now()+190);let i={...null===(n=(0,s.bh)((0,s.hQ)()))||void 0===n?void 0:n.scan_time_card};i.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId},e.map(((e,t)=>{e&&(i.params[":search"+t]=e.toString().trim())}));const l=(0,s.I7)(i),r=await l;var o;if(r)return null===r||void 0===r?void 0:r[null===(o=(0,s._2)(r))||void 0===o?void 0:o[0]]}},u=async(e,t)=>{let i="get_compById_last"+e+"_"+t,n=(0,s.bh)(i)||0;if(Date.now()>n){var a,o;(0,s.Rz)(i,Date.now()+890);let n={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.filter_search_opera};n.params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search0":e,":search1":t};const l=(0,s.I7)(n),r=await l;if(r){let t=(0,s.bh)("cmpByPayStubMayor");return t[e]=r,(0,s.Rz)("cmpByPayStubMayor",t),r}}return null};const h=(e,t)=>e&&e.sort(((e,i)=>{let s=1*e[t],n=1*i[t];return s<n?-1:s>n?1:0})),m=e=>{let t={};return e&&(0,s._2)(e).map((i=>{var s,n;let a=(null===(s=e[i])||void 0===s?void 0:s.week)+"_"+(null===(n=e[i])||void 0===n?void 0:n.userTC);t[a]||(t[a]=e[i])})),t},p=e=>{let t={},i=/\t/g;e&&e.split("\n").map(((e,n)=>{if(e.indexOf("No")<0){let n=e.split(i);if(7===n.length){let e=n[2].trim(),i=n[6].split("  "),a=i[0],o=(0,s.Qk)(new Date(a)),l=i[1].split(":"),r=60*l[0]+1*l[1],d=n[4].trim();t[e]||(t[e]={}),t[e][o]||(t[e][o]={}),t[e][o][a]||(t[e][o][a]={}),t[e][o][a][r]||(t[e][o][a][r]={}),t[e][o][a][r][d]||(t[e][o][a][r][d]=1)}}}));let n=[];return(0,s._2)(t).map((e=>{(0,s._2)(t[e]).map((i=>{let a={},o=null;(0,s._2)(t[e][i]).map((n=>{let l=v(t[e][i][n]),r=(0,s._2)(t[e][i][n][l[0]]),d=(0,s._2)(t[e][i][n][l[1]]);o=(0,s.qt)(new Date(n));let c={start:1*l[0],startMode:r,end:1*l[1],endMode:d,active:!0},u=new Date(n).getDay();a[u]=c}));let l={userTC:e,week:i,hourly:a,period:o};n.push(l)}))})),(0,s.Rz)("timeCard",n),n},v=e=>{let t=0,i=1e10;return(0,s._2)(e).map((e=>{let s=1*e;t<s&&(t=s),s<i&&(i=s)})),[i,t]}},1206:()=>{},6794:()=>{}}]);
//# sourceMappingURL=8152.655e245f.chunk.js.map