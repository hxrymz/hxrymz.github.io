"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2018,9760],{9760:(e,l,a)=>{a.r(l),a.d(l,{CloseModal:()=>c,OpenModal:()=>r,default:()=>n});var t=a(2791),s=a(5408),i=a(2350),d=a(184);const o="listDialog_mdh392",n=()=>{const e=(0,i.bh)("listDialog")||{};(0,s.Z)(o);let l=Object.keys(e);return(0,d.jsx)(d.Fragment,{children:l.map(((l,a)=>{let s=e[l];if(s&&s.visible){let e={};s.height&&(e.heigth=s.height),s.width,s.zIndex&&(e.zIndex=s.zIndex-1);let a={zIndex:s.zIndex},i=null,o=s.data;return s.content&&(i=t.cloneElement(s.content,{data:o})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:a,id:l,children:i})}),s.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(s.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},l)}}))})},r=e=>{let l=(0,i.bh)("listDialog")||{},a=(0,i.M5)();l[a]||(l[a]={}),l[a].visible=!0;let t={};e.props?(t=e.props,t.modalID=a):t.modalID=a;let s=document.getElementsByTagName("body")[0];null!==s&&void 0!==s&&s.style&&(s.style.overflowY="hidden"),l[a].isView=e.isView,l[a].observeResize=e.observeResize,l[a].observeResize&&(l[a].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(a,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===l[a].width&&t.height===l[a].height||(l[a].height=t.height+10,l[a].width=t.width,(0,i.Rz)("listDialog",l),(0,i.wt)(o)))}),200)),l[a].display=!0,e.zIndex&&(l[a].zIndex=e.zIndex),e.height&&(l[a].height=e.height),e.width&&(l[a].width=e.width),e.content&&(l[a].content=e.content),l[a].data=t,(0,i.Rz)("listDialog",l),(0,i.wt)(o),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",a),(0,i.wt)(o)}),125)},c=e=>{let l=(0,i.bh)("listDialog")||{},a=e.id;if(l[a]){var t,s,d;l[a].observeResize&&l[a].observeInterval&&clearInterval(l[a].observeInterval),l[a].display=!1,null===(t=l[a])||void 0===t||null===(s=t.data)||void 0===s||null===(d=s.closeEvent)||void 0===d||d.call(s),(0,i.Rz)("listDialog",l),delete l[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(o),setTimeout((()=>{delete l[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},2018:(e,l,a)=>{a.r(l),a.d(l,{default:()=>h});var t=a(2791),s=(a(6794),a(2350)),i=a(2502),d=a(7689),o=a(9760),n=a(2647),r=a(1087),c=a(184);const v=(0,n.h0)(),m=(0,n.PU)(),h=e=>{var l,a,n,h,p;let{data:b,item:_}=e;const[y,x]=(0,t.useState)(0);(0,t.useEffect)((()=>{}),[_]);const g=()=>{x((0,s.M5)())},j=((0,d.s0)(),e=>{if(null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){let l={...e};l.initDate=l.initDate-100,l.lastDate=l.lastDate+8638e4,(0,s.Rz)("date_range_comps",l)}(0,i.lG)(null===_||void 0===_?void 0:_.employeeId,g)});let I=(null===(l=(0,s.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)&&(0,s.sJ)(null===(a=(0,s.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)+"-"+(0,s.sJ)(null===(n=(0,s.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate);return(0,c.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"title_collect",children:"Movimientos de Nomina"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:()=>{var e,l;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,c.jsx)(v,{onConfirm:j,init:null===(e=(0,s.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(l=(0,s.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,isRange:!0}),(0,o.OpenModal)(a)},children:[(0,c.jsx)("div",{className:"lbl date",children:I||"Fecha"}),(0,c.jsx)(m,{name:"calendar",color:"#66666"})]})})]}),(0,c.jsx)("div",{className:" acc_dtls",style:{marginTop:10},children:(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===_||void 0===_?void 0:_.name}),(0,c.jsx)("div",{className:"name",children:null===_||void 0===_?void 0:_.unit})]})}),(0,c.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("div",{className:"code",style:{color:"var(--hrm_palette-item_coll_gray)"},children:"Acumulado:"}),(0,c.jsxs)("div",{className:"name",style:{color:"var(--hrm_palette-inverse-background-b)"},children:["$",null===(h=u((0,s.bh)("paystub_submayor_group")))||void 0===h?void 0:h.toFixed(2)]})]})]}),(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,c.jsx)("div",{className:"tr_bar_30",children:"Comprobante"}),(0,c.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,c.jsx)("div",{className:"tr_bar_30",children:"Documento"}),(0,c.jsx)("div",{className:"tr_bar_20",children:"Amount"})]}),(0,c.jsx)("div",{className:"scollVh subMHeight",children:(0,s.bh)("paystub_submayor_group")&&(null===(p=(0,s._2)((0,s.bh)("paystub_submayor_group")))||void 0===p?void 0:p.map(((e,l)=>{var a;let t=(0,s.bh)("paystub_submayor_group")[e];return(0,c.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,c.jsx)("div",{className:"tr_bar_30 ",children:(0,c.jsx)(r.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(null===t||void 0===t?void 0:t.comprobanteId)},children:(0,c.jsx)("div",{className:" comprobante_id",onClick:()=>{(0,o.CloseModal)({id:b.modalID})},children:t.comprobanteId})})}),(0,c.jsx)("div",{className:"tr_bar_20",children:t.date&&(0,s.sJ)(t.date)}),(0,c.jsx)("div",{className:"tr_bar_30",children:t.document}),(0,c.jsxs)("div",{className:"tr_bar_20",children:["$",null===(a=1*t.balance)||void 0===a?void 0:a.toFixed(2)]})]},l)})))})]})},u=e=>{var l;let a=0;return e&&(null===(l=(0,s._2)(e))||void 0===l||l.map(((l,t)=>{let i=1*e[l].balance;a=1*(0,s.Zv)(a,2)+1*(0,s.Zv)(i,2)}))),a}},2502:(e,l,a)=>{a.d(l,{Dy:()=>s,G:()=>n,aU:()=>o,kQ:()=>i,lG:()=>d});var t=a(2350);const s=async e=>{var l,a;let s={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.all_employee};s.params={businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId};const i=(0,t.I7)(s),d=await i;d&&((0,t.Rz)("employees_list",o((0,t.jQ)(d),"code")),(0,t.Rz)("employees_ids",(0,t.ME)((0,t.jQ)(d),"employeeId")),e&&e())},i=async e=>{var l,a;let s={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.search_employee};s.params={businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,t.bh)("searchQry")};const i=(0,t.I7)(s),d=await i;d&&((0,t.Rz)("employees_list",o((0,t.jQ)(d),"code")),e&&e())},d=async(e,l)=>{var a,s,i,d;let o={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.filter_search_opera};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,year:(0,t.bh)("date_current_year"),":date1":(null===(i=(0,t.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(d=(0,t.bh)("date_range_comps"))||void 0===d?void 0:d.lastDate,":search0":e};const n=(0,t.I7)(o),r=await n;r&&!r.error&&((0,t.Rz)("paystub_submayor_list",r),(0,t.Rz)("paystub_submayor_group",function(e){var l={};e.length>0?e.map((e=>{let a=e.date+"_"+e.comprobanteId;if(!l[a]){l[a]={},["date","description","entryName","comprobanteId","employeeId","document"].forEach((t=>{l[a][t]=e[t]})),l[a].amount=0,l[a].balance=0,l[a].operations=[]}e.type&&(l[a].balance=1*(0,t.Zv)(l[a].balance,2)+("debit"===e.type?1*(0,t.Zv)(e.amount,2):0),l[a].operations.push(function(e){var l;let a={};a.employeeId=null===(l=(0,t.bh)("employees_ids"))||void 0===l?void 0:l[e.employeeId],a.comprobanteId=e.comprobanteId,a.document=e.document,a.date=e.date,"credit"===e.type?(a.debit=0,a.credit=e.amount):"debit"===e.type&&(a.credit=0,a.debit=e.amount);return a}(e)))})):l=null;return l}((0,t.jQ)(r)))),l&&l()};const o=(e,l)=>(0,t.MV)("sortEmployees",[e],(()=>e&&e.sort(((e,a)=>{let t=1*e[l],s=1*a[l];return t<s?-1:t>s?1:0})))),n=async(e,l)=>{var a;let s={query:"deleteEmployeesHRG",params:{businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId,employeeId:e}};const i=(0,t.I7)(s);await i&&l&&l()}},6794:()=>{}}]);
//# sourceMappingURL=2018.46153b51.chunk.js.map