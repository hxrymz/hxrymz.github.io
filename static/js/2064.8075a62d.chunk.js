"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2064,9760],{9760:(e,t,o)=>{o.r(t),o.d(t,{CloseModal:()=>c,OpenModal:()=>s,default:()=>r});var a=o(2791),l=o(5408),i=o(2350),n=o(184);const d="listDialog_mdh392",r=()=>{const e=(0,i.bh)("listDialog")||{};(0,l.Z)(d);let t=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:t.map(((t,o)=>{let l=e[t];if(l&&l.visible){let e={};l.height&&(e.heigth=l.height),l.width,l.zIndex&&(e.zIndex=l.zIndex-1);let o={zIndex:l.zIndex},i=null,d=l.data;return l.content&&(i=a.cloneElement(l.content,{data:d})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:o,id:t,children:i})}),l.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(l.visible?"active":""),onClick:()=>{var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},s=e=>{let t=(0,i.bh)("listDialog")||{},o=(0,i.M5)();t[o]||(t[o]={}),t[o].visible=!0;let a={};e.props?(a=e.props,a.modalID=o):a.modalID=o;let l=document.getElementsByTagName("body")[0];null!==l&&void 0!==l&&l.style&&(l.style.overflowY="hidden"),t[o].isView=e.isView,t[o].observeResize=e.observeResize,t[o].observeResize&&(t[o].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(o,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===t[o].width&&a.height===t[o].height||(t[o].height=a.height+10,t[o].width=a.width,(0,i.Rz)("listDialog",t),(0,i.wt)(d)))}),200)),t[o].display=!0,e.zIndex&&(t[o].zIndex=e.zIndex),e.height&&(t[o].height=e.height),e.width&&(t[o].width=e.width),e.content&&(t[o].content=e.content),t[o].data=a,(0,i.Rz)("listDialog",t),(0,i.wt)(d),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",o),(0,i.wt)(d)}),125)},c=e=>{let t=(0,i.bh)("listDialog")||{},o=e.id;if(t[o]){var a,l,n;t[o].observeResize&&t[o].observeInterval&&clearInterval(t[o].observeInterval),t[o].display=!1,null===(a=t[o])||void 0===a||null===(l=a.data)||void 0===l||null===(n=l.closeEvent)||void 0===n||n.call(l),(0,i.Rz)("listDialog",t),delete t[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(d),setTimeout((()=>{delete t[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},2064:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var a=o(2791),l=o(2350),i=(o(1e3),o(2647)),n=o(3588),d=o(6963),r=o(4e3);let s=0,c=null,u=null;const m=async e=>{const t=await d.PDFDocument.create();if(t.registerFontkit(r.Z),c=await t.embedFont(d.StandardFonts.TimesRoman,{subset:!0}),u=await t.embedFont(d.StandardFonts.TimesRomanBold,{subset:!0}),(0,l.bh)("modernFontReport")){let e=(0,l.bh)("Roboto-Bold.ttf"),o=(0,l.bh)("ggSans-Italic.ttf"),a=(0,l.bh)("ggSans-Medium.ttf");const i=await fetch(e).then((e=>e.arrayBuffer()));u=await t.embedFont(i,{subset:!0});await fetch(o).then((e=>e.arrayBuffer()));const n=await fetch(a).then((e=>e.arrayBuffer()));c=await t.embedFont(n,{subset:!0})}let o=t.addPage();const{width:a,height:i}=o.getSize(),n=10;s=i-40,o.drawText(e.entryName||"Comprobante Manual",{x:50,y:s,size:14,font:u,color:(0,d.rgb)(0,0,0)});const m=u.widthOfTextAtSize(e.comprobanteId,14),b=c.widthOfTextAtSize("Comprobante:  ",13);o.drawText("Comprobante:  ",{x:580-b-m,y:s,size:13,font:c,color:(0,d.rgb)(0,0,0)}),o.drawText(e.comprobanteId+"",{x:580-m,y:s,size:14,font:u,color:(0,d.rgb)(0,0,0)}),s-=25;const v=c.widthOfTextAtSize("Fecha:  ",13),p=u.widthOfTextAtSize((0,l.Gv)(e.date)+"",14);o.drawText("Fecha:  ",{x:580-v-p,y:s,size:13,font:c,color:(0,d.rgb)(0,0,0)}),o.drawText((0,l.Gv)(e.date)+"",{x:580-p,y:s,size:14,font:u,color:(0,d.rgb)(0,0,0)}),s-=15;let h=(null===e||void 0===e?void 0:e.operations)||[];s-=18,o.drawText("Cuenta",{x:20,y:s,size:13,font:u,color:(0,d.rgb)(0,0,0)}),o.drawText("Sub Cuenta",{x:205,y:s,size:13,font:u,color:(0,d.rgb)(0,0,0)}),o.drawText("Documento",{x:360,y:s,size:13,font:u,color:(0,d.rgb)(0,0,0)});const y=u.widthOfTextAtSize("Debito",13);o.drawText("Debito",{x:500-y,y:s,size:13,font:u,color:(0,d.rgb)(0,0,0)});const _=u.widthOfTextAtSize("Credito",13);o.drawText("Credito",{x:580-_,y:s,size:13,font:u,color:(0,d.rgb)(0,0,0)}),s-=8,o.drawRectangle({x:15,y:s+1,width:570,height:.95,color:(0,d.rgb)(0,0,0),borderColor:(0,d.rgb)(0,0,0)}),Array.isArray(h)&&h.map(((e,t)=>{var a,l,i,r,u,m;(s-=16,null!==e&&void 0!==e&&null!==(a=e.account)&&void 0!==a&&a.name)&&o.drawText((null===e||void 0===e||null===(u=e.account)||void 0===u?void 0:u.name)+"",{x:20,y:s,size:n,font:c,color:(0,d.rgb)(0,0,0)});null!==e&&void 0!==e&&null!==(l=e.sub_account)&&void 0!==l&&l.subAccountName&&o.drawText((null===e||void 0===e||null===(m=e.sub_account)||void 0===m?void 0:m.subAccountName)+"",{x:205,y:s,size:n,font:c,color:(0,d.rgb)(0,0,0)});o.drawText((null===e||void 0===e?void 0:e.document)+"",{x:360,y:s,size:n,font:c,color:(0,d.rgb)(0,0,0)});let b=null!==e&&void 0!==e&&e.debit?null===(i=1*(null===e||void 0===e?void 0:e.debit))||void 0===i?void 0:i.toFixed(2):"0.00";const v=c.widthOfTextAtSize(b+"",n);o.drawText(b+"",{x:500-v,y:s,size:n,font:c,color:(0,d.rgb)(0,0,0)});let p=null!==e&&void 0!==e&&e.credit?null===(r=1*(null===e||void 0===e?void 0:e.credit))||void 0===r?void 0:r.toFixed(2):"0.00";const h=c.widthOfTextAtSize(p+"",n);o.drawText(p+"",{x:580-h,y:s,size:n,font:c,color:(0,d.rgb)(0,0,0)})})),s-=28,o.drawRectangle({x:15,y:s+1,width:570,height:.85,color:(0,d.rgb)(0,0,0),borderColor:(0,d.rgb)(0,0,0)}),s-=18,o.drawText("Detalles: ",{x:50,y:s,size:12,font:c,color:(0,d.rgb)(0,0,0)}),s-=18,o.drawText(e.description?e.description:"",{x:70,y:s,size:11,font:c,color:(0,d.rgb)(0,0,0)});let x=function(e){let t=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(t)}(await t.save());window.open(x)};var b=o(9760),v=o(2692),p=o(2502),h=o(184);const y=(0,i.JC)(),_=(0,v.dz)(),x=(0,i.PU)(),f=e=>{var t,o,i;let{data:d,item:r}=e;const[s,c]=(0,a.useState)(!1),[u,b]=(0,a.useState)(0);(0,a.useEffect)((()=>{if(!s){var e;if(c(!0),null!==r&&void 0!==r&&r.employeeId)null!==(e=(0,l.bh)("employees_ids"))&&void 0!==e&&e[null===r||void 0===r?void 0:r.employeeId]||(0,p.Dy)(v);b((0,l.M5)())}}));const v=()=>{b((0,l.M5)())};let y=null===(t=(0,l.bh)("employees_ids"))||void 0===t||null===(o=t[null===r||void 0===r?void 0:r.employeeId])||void 0===o?void 0:o.name;return(0,h.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"90vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsx)("div",{className:"_dsplFlx ",children:(0,h.jsx)("div",{className:"flexSpace"})}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsxs)("div",{className:"_dsplFlx",style:{marginTop:20},children:[(0,h.jsx)("div",{className:"desc_lbl",children:"Comprobante:"}),(0,h.jsx)("div",{className:"name comprobante_id",style:0!==r.balance?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:null===r||void 0===r?void 0:r.comprobanteId})]}),0!==r.balance?(0,h.jsx)("div",{className:"msg_alert",children:(0,h.jsx)("div",{className:"msg_alert_title",children:"El comprobante no esta cuadrado"})}):null,(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"icon",onClick:()=>{m(r)},children:(0,h.jsx)(x,{name:"printer",color:"#282828"})})]}),(0,h.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx",children:[(0,h.jsx)("div",{className:"desc_lbl"}),(0,h.jsx)("div",{className:"name",children:(0,l.sG)(null===r||void 0===r?void 0:r.date)})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,h.jsx)("div",{className:"tr_bar_15",children:"Cuenta"}),(0,h.jsx)("div",{className:"tr_bar_15",children:"Sub Cuenta"}),(0,h.jsx)("div",{className:"tr_bar_40",children:"Documento"}),(0,h.jsx)("div",{className:"tr_bar_15",children:"Debito"}),(0,h.jsx)("div",{className:"tr_bar_15",children:"Credito"})]}),null===(i=(0,n.Eb)(null===r||void 0===r?void 0:r.operations))||void 0===i?void 0:i.map(((e,t)=>(0,h.jsx)(g,{element:e,in2D:t},t))),(0,h.jsxs)("div",{className:"cmp_desc",children:[(0,h.jsx)("div",{className:"desc_lbl",children:"Detalles:"}),(0,h.jsxs)("div",{className:"description",children:[null===r||void 0===r?void 0:r.description," ",y]})]}),(0,h.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("span",{className:"entryType",children:r.entryName||"Comprobante Manual"})]})]})},g=e=>{var t,o;let{element:a,in2D:i}=e;return(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,h.jsx)("div",{className:"tr_bar_15",children:(0,h.jsx)(y,{data:a.account,labelField:"code",infoField:"name"})}),(0,h.jsx)("div",{className:"tr_bar_15",children:(0,h.jsx)(y,{data:a.sub_account,labelField:"subAccount",infoField:"subAccountName"})}),(0,h.jsx)("div",{className:"tr_bar_40",onClick:()=>{if((0,l.ML)()){let e=(0,l.bh)("lastTimeCallModal")||0;if(Date.now()>e){let e=["document","amount","type","description","account","subAccount","comprobanteId"],t=(0,l.Ld)({...(0,l.bh)("comprobante_list")[a.operationId]},e);(0,l.Rz)("upd_comprobantebyId",t),(0,l.Rz)("upd_comprobantebyId_bck",JSON.parse(JSON.stringify(t))),(0,l.Rz)("lastTimeCallModal",Date.now()+320);let o={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};o.content=(0,h.jsx)(_,{confirm:()=>{},item:a}),(0,b.OpenModal)(o)}}},children:a.document}),(0,h.jsx)("div",{className:"tr_bar_15",children:null===(t=1*a.debit)||void 0===t?void 0:t.toFixed(2)}),(0,h.jsx)("div",{className:"tr_bar_15",children:null===(o=1*a.credit)||void 0===o?void 0:o.toFixed(2)})]},i)}},3588:(e,t,o)=>{o.d(t,{Eb:()=>m,Gg:()=>u,N$:()=>i,Ng:()=>r,WB:()=>s,g5:()=>n,ly:()=>l});var a=o(2350);const l=async e=>{var t,o;let l={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_opera};l.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,a.bh)("date_current_year")};const i=(0,a.I7)(l),n=await i;n&&!n.error&&(d(n),(0,a.bh)("showAllCmpbnt")&&((0,a.Rz)("comprobante_list",n),(0,a.Rz)("comprobante_by_doc",c((0,a.jQ)(n)))),e&&e())},i=async e=>{if((0,a.bh)("search_acc_record").length>3){var t,o,l,i;let n={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.filter_search_opera};n.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,a.bh)("date_current_year"),":date1":null===(l=(0,a.bh)("date_range_comps"))||void 0===l?void 0:l.initDate,":date2":null===(i=(0,a.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate},(0,a.bh)("search_acc_record").split(" ").map(((e,t)=>{e&&(n.params[":search"+t]=e.trim())}));const d=(0,a.I7)(n),r=await d;if(r&&!r.error){(0,a.Rz)("comprobante_list",r);let t=c((0,a.jQ)(r));(0,a.Rz)("comprobante_by_doc",t),e&&e()}}else(0,a.Rz)("comprobante_list",null),(0,a.Rz)("comprobante_by_doc",null),e&&e()},n=async e=>{var t,o;let l=(new Date).getTime(),i={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_opera};i.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,a.bh)("date_current_year")};const n=(0,a.I7)(i),d=await n;if(d&&!d.error){let t=await async function(e){var t={};let o=[];e.length>0&&e.map((e=>{var o,l;let i=null===(o=e.document)||void 0===o?void 0:o.trim(),n=e.account,d=null===(l=(0,a.bh)("account_ids"))||void 0===l?void 0:l[e.account],r=null;var s;e.subAccount&&(r=null===(s=(0,a.bh)("sub_account_ids"))||void 0===s?void 0:s[e.subAccount],r.accountId===e.account&&(n=n+"_"+(e.subAccount?e.subAccount:"")));if(i&&n&&d&&"real"===d.clasification&&d){let o=function(e,t){return"debit"===t?"debit"===e?1:-1:"credit"===e?1:-1}(e.type,d.type),l=(0,a.Zv)(e.amount,3)*o;if(d.ignoreGroupByDocs){let o=n,a="1000-AP24";if(t[o]||(t[o]={balance:0,document:a,employeeId:e.employeeId,entryName:e.entryName,account:e.account}),t[o].balance+=l,t[o].balance<0){let a="debit"===e.type?"credit":"debit";t[o].type=a}else t[o].type=e.type}else{let o=e.document.trim(),a=n+"_"+(o||"");if(t[a]||(t[a]={balance:0,document:o,employeeId:e.employeeId,entryName:e.entryName,account:e.account}),t[a].balance+=l,t[a].balance<0){let o="debit"===e.type?"credit":"debit";t[a].type=o}else t[a].type=e.type}}}));let l=(new Date).getTime()+800,i=await(0,a.fN)(l);return(0,a._2)(t).map((e=>{let n=t[e],d=1*(0,a.Zv)(n.balance,3),r=e.split("_");if(d>0){let e=n;e.date||(e.date=l),e.type=n.type,e.account=n.account,e.document=n.document,e.amount=d,e.operationId=(0,a.M5)(),e.comprobanteId=i,e.description=n.description,e.employeeId=n.employeeId,e.entryName=n.entryName,3===r.length&&(e.subAccount=r[1]),o.push(e)}})),o}(d),o=c(t),i=o[(0,a._2)(o)[0]];i.description="Apertura year 2024 - 1000-AP24",console.log((new Date).getTime()-l),e&&e(i)}};const d=async e=>{let t={},o={},l={};for(let d in e){var i;let n=e[d],r=null===(i=(0,a.bh)("account_ids"))||void 0===i?void 0:i[n.account];if(r){(0,a.UE)(l[null===r||void 0===r?void 0:r.accountId])||(l[null===r||void 0===r?void 0:r.accountId]={saldo:0,name:(null===r||void 0===r?void 0:r.code)+" - "+(null===r||void 0===r?void 0:r.name),list:[]}),(0,a.UE)(t[n.comprobanteId])||(t[n.comprobanteId]=0,o[n.comprobanteId]=[]);let e=1*(0,a.Zv)(("debit"===n.type?1:-1)*n.amount,2);l[null===r||void 0===r?void 0:r.accountId].saldo=1*(0,a.Zv)(l[r.accountId].saldo,2)+1*e,l[null===r||void 0===r?void 0:r.accountId].list.push([n.comprobanteId,e]),t[n.comprobanteId]=1*(0,a.Zv)(t[n.comprobanteId],2)+e,o[n.comprobanteId].push({ammount:e,operationId:n.comprobanteId})}}let n=null;for(let a in t)t[a]&&(n||(n={}),n[a]=1);n&&((0,a.Rz)("comprobante_w_erros",n),(0,a.Rz)("has_filter_comp_error",!0))},r=async e=>{var t,o,l,i;let n={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.filter_search_opera};n.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,a.bh)("date_current_year"),":date1":(null===(l=(0,a.bh)("date_range_comps"))||void 0===l?void 0:l.initDate)-10,":date2":null===(i=(0,a.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate};const r=(0,a.I7)(n),s=await r;if(s&&!s.error){(0,a.Rz)("comprobante_list",s);var u=[];(0,a.bh)("comprobante_all_list")&&(0,a.bh)("comprobante_all_list").map((e=>{s[e.operationId]||console.log(e)})),s&&(0,a._2)(s).map((e=>{var t,o;s[e].account&&s[e].date>(null===(t=(0,a.bh)("date_range_comps"))||void 0===t?void 0:t.initDate)-10&&s[e].date<=(null===(o=(0,a.bh)("date_range_comps"))||void 0===o?void 0:o.lastDate)&&u.push(s[e])})),(0,a.Rz)("comprobante_by_doc",c(u)),d(u),e&&e()}},s=async(e,t)=>{let o=[];e.map((e=>{var t,l;let i={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.delete_opera};i.params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,a.bh)("date_current_year"),operationId:e.operationId},o.push(i)}));const l=o.map((async e=>{const t=(0,a.I7)(e);await t}));await Promise.all(l),t&&t()};function c(e){var t={};return e.length>0?e.map((e=>{let o=e.date;if(o&&e.account){let l=o+"_"+e.comprobanteId;if(!t[l]){t[l]={},["date","description","entryName","comprobanteId","employeeId"].forEach((o=>{t[l][o]=e[o]})),t[l].amount=0,t[l].balance=0,t[l].operations=[]}if(e.type){let o=function(e){var t,o;let l={};l.account=null===(t=(0,a.bh)("account_ids"))||void 0===t?void 0:t[e.account],l.sub_account=null===(o=(0,a.bh)("sub_account_ids"))||void 0===o?void 0:o[e.subAccount],l.comprobanteId=e.comprobanteId,l.operationId=e.operationId,l.document=e.document,l.type=e.type;let i=1*(0,a.Zv)(e.amount,2);"credit"===e.type?(l.debit=0,l.credit=i):"debit"===e.type&&(l.credit=0,l.debit=i);return l}(e);o.debit=1*o.debit,o.credit=1*o.credit,1*o.debit!==1*o.credit&&t[l].operations.push(o)}}})):t=null,t}function u(e){(0,a.Rz)("has_filter_review",null),(0,a.Rz)("has_filter_comp_error",null),(0,a._2)(e).map((t=>{var o,l,i,n;null!==(o=(0,a.bh)("comp_under_review"))&&void 0!==o&&null!==(l=o.inReview)&&void 0!==l&&l[e[t].comprobanteId]&&(0,a.Rz)("has_filter_review",!0),null!==(i=(0,a.bh)("comp_under_review"))&&void 0!==i&&null!==(n=i.hasError)&&void 0!==n&&n[e[t].comprobanteId]&&(0,a.Rz)("has_filter_comp_error",!0)}))}const m=e=>(0,a.MV)("sortComprobantesByType",[e],(()=>{let t="type";return e&&e.sort(((e,o)=>{let a=e[t],l=o[t];return a===l?o[l]-e[a]:l>a?1:-1}))}))},2502:(e,t,o)=>{o.d(t,{Dy:()=>l,G:()=>r,aU:()=>d,kQ:()=>i,lG:()=>n});var a=o(2350);const l=async e=>{var t,o;let l={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.all_employee};l.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId};const i=(0,a.I7)(l),n=await i;n&&((0,a.Rz)("employees_list",d((0,a.jQ)(n),"code")),(0,a.Rz)("employees_ids",(0,a.ME)((0,a.jQ)(n),"employeeId")),e&&e())},i=async e=>{var t,o;let l={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.search_employee};l.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,a.bh)("searchQry")};const i=(0,a.I7)(l),n=await i;n&&((0,a.Rz)("employees_list",d((0,a.jQ)(n),"code")),e&&e())},n=async(e,t)=>{var o,l,i,n;let d={...null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.filter_search_opera};d.params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,a.bh)("date_current_year"),":date1":(null===(i=(0,a.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(n=(0,a.bh)("date_range_comps"))||void 0===n?void 0:n.lastDate,":search0":e};const r=(0,a.I7)(d),s=await r;s&&!s.error&&((0,a.Rz)("paystub_submayor_list",s),(0,a.Rz)("paystub_submayor_group",function(e){var t={};e.length>0?e.map((e=>{let o=e.date+"_"+e.comprobanteId;if(!t[o]){t[o]={},["date","description","entryName","comprobanteId","employeeId","document"].forEach((a=>{t[o][a]=e[a]})),t[o].amount=0,t[o].balance=0,t[o].operations=[]}e.type&&(t[o].balance=1*(0,a.Zv)(t[o].balance,2)+("debit"===e.type?1*(0,a.Zv)(e.amount,2):0),t[o].operations.push(function(e){var t;let o={};o.employeeId=null===(t=(0,a.bh)("employees_ids"))||void 0===t?void 0:t[e.employeeId],o.comprobanteId=e.comprobanteId,o.document=e.document,o.date=e.date,"credit"===e.type?(o.debit=0,o.credit=e.amount):"debit"===e.type&&(o.credit=0,o.debit=e.amount);return o}(e)))})):t=null;return t}((0,a.jQ)(s)))),t&&t()};const d=(e,t)=>(0,a.MV)("sortEmployees",[e],(()=>e&&e.sort(((e,o)=>{let a=1*e[t],l=1*o[t];return a<l?-1:a>l?1:0})))),r=async(e,t)=>{var o;let l={query:"deleteEmployeesHRG",params:{businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId,employeeId:e}};const i=(0,a.I7)(l);await i&&t&&t()}},1e3:()=>{}}]);
//# sourceMappingURL=2064.8075a62d.chunk.js.map