"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9350],{9760:(e,t,o)=>{o.r(t),o.d(t,{CloseModal:()=>s,OpenModal:()=>c,default:()=>r});var a=o(2791),l=o(5408),i=o(2350),n=o(184);const d="listDialog_mdh392",r=()=>{const e=(0,i.bh)("listDialog")||{};(0,l.Z)(d);let t=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:t.map(((t,o)=>{let l=e[t];if(l&&l.visible){let e={};l.height&&(e.heigth=l.height),l.width,l.zIndex&&(e.zIndex=l.zIndex-1);let o={zIndex:l.zIndex},i=null,d=l.data;return l.content&&(i=a.cloneElement(l.content,{data:d})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:o,id:t,children:i})}),l.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(l.visible?"active":""),onClick:()=>{var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),s({id:e})}}):null]},t)}}))})},c=e=>{let t=(0,i.bh)("listDialog")||{},o=(0,i.M5)();t[o]||(t[o]={}),t[o].visible=!0;let a={};e.props?(a=e.props,a.modalID=o):a.modalID=o;let l=document.getElementsByTagName("body")[0];null!==l&&void 0!==l&&l.style&&(l.style.overflowY="hidden"),t[o].isView=e.isView,t[o].observeResize=e.observeResize,t[o].observeResize&&(t[o].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(o,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===t[o].width&&a.height===t[o].height||(t[o].height=a.height+10,t[o].width=a.width,(0,i.Rz)("listDialog",t),(0,i.wt)(d)))}),200)),t[o].display=!0,e.zIndex&&(t[o].zIndex=e.zIndex),e.height&&(t[o].height=e.height),e.width&&(t[o].width=e.width),e.content&&(t[o].content=e.content),t[o].data=a,(0,i.Rz)("listDialog",t),(0,i.wt)(d),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",o),(0,i.wt)(d)}),125)},s=e=>{let t=(0,i.bh)("listDialog")||{},o=e.id;if(t[o]){var a,l,n;t[o].observeResize&&t[o].observeInterval&&clearInterval(t[o].observeInterval),t[o].display=!1,null===(a=t[o])||void 0===a||null===(l=a.data)||void 0===l||null===(n=l.closeEvent)||void 0===n||n.call(l),(0,i.Rz)("listDialog",t),delete t[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(d),setTimeout((()=>{delete t[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},3588:(e,t,o)=>{o.d(t,{Eb:()=>h,Gg:()=>m,N$:()=>d,Ng:()=>v,WB:()=>b,g5:()=>r,ly:()=>n});var a=o(15),l=o(2350),i=o(4050);const n=async e=>{var t,o;let a={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.all_opera};a.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,l.bh)("date_current_year")};const i=(0,l.I7)(a),n=await i;n&&!n.error&&(u(n),(0,l.bh)("showAllCmpbnt")&&((0,l.Rz)("comprobante_list",n),(0,l.Rz)("comprobante_by_doc",p((0,l.jQ)(n)))),e&&e())},d=async e=>{if((0,l.bh)("search_acc_record").length>3){var t,o,a,i;let n={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.filter_search_opera};n.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,l.bh)("date_current_year"),":date1":null===(a=(0,l.bh)("date_range_comps"))||void 0===a?void 0:a.initDate,":date2":null===(i=(0,l.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate},(0,l.bh)("search_acc_record").split(" ").map(((e,t)=>{e&&(n.params[":search"+t]=e.trim())}));const d=(0,l.I7)(n),r=await d;if(r&&!r.error){(0,l.Rz)("comprobante_list",r);let t=p((0,l.jQ)(r));(0,l.Rz)("comprobante_by_doc",t),e&&e()}}else(0,l.Rz)("comprobante_list",null),(0,l.Rz)("comprobante_by_doc",null),e&&e()},r=async e=>{const t=(0,l.bh)("accounts_summary_by_docs");if(t){var o,a;let i=s(t),n={description:"Apertura year 2024 - 1000-AP24",document:"AP-24"},d=new Date("01/01/2024").getTime()+800,r=await(0,l.fN)(d);n.date=d,n.comprobanteId=r,n.operations=i.resp;let u={operationId:(0,l.M5)()},v=c();v<0?(u.debit=0,u.credit=-1*v,u.document="Perdidas del ".concat((0,l.bh)("date_current_year"))):(u.credit=0,u.debit=1*v,u.document="Ganancias del ".concat((0,l.bh)("date_current_year")));let b=null===(o=(0,l.bh)("global_account_params"))||void 0===o?void 0:o.yearProfitOrLoss.account;u.account=null===(a=(0,l.bh)("account_ids"))||void 0===a?void 0:a[b],n.operations.push(u),n.balance=function(e){let t=0,o=0,a=0,i={};return e&&e.map((e=>{let t=e.account.accountId+"_"+e.account.code+"_"+e.account.type;i[t]||(i[t]=0);let n=1*(null===e||void 0===e?void 0:e.debit)-1*(null===e||void 0===e?void 0:e.credit);o+=1*(null===e||void 0===e?void 0:e.debit),a+=1*(null===e||void 0===e?void 0:e.credit);let d=1*(0,l.Zv)(n,2);i[t]=1*(0,l.Zv)(i[t],2)+1*(0,l.Zv)(d,2)})),t=o-a,t}(n.operations),console.log(n.operations.length),e&&e(n)}else e&&e({})};const c=()=>{let e=(0,l.bh)("result_params_value"),t={},o=0,a={};return(0,l.bh)("result_sheet_upd_flds").map((n=>{if(!t[n]){var d;t[n]=1;let r=e[n],c=null===(d=(0,l.bh)("account_ids"))||void 0===d?void 0:d[r];if("nominal"===(null===c||void 0===c?void 0:c.clasification)&&!a[c.code]){let e=1*(0,i.S)(12,{account:r});e="credit"===(null===c||void 0===c?void 0:c.type)?-1*e:e,o+=e,a[c.code]=e}}})),1*(0,l.Zv)(o,2)};function s(e){var t={};let o=[],a=0;(0,l._2)(e).map((i=>{var n;let d=i,r=null;i.indexOf("_")>=0&&(d=i.split("_")[0],r=i.split("_")[1]);let c=null===(n=(0,l.bh)("account_ids"))||void 0===n?void 0:n[d];(null===e||void 0===e?void 0:e[i])&&(0,l._2)(null===e||void 0===e?void 0:e[i]).map((n=>{if("saldo"!==n){var d;let u=1*(0,l.Zv)(null===e||void 0===e||null===(d=e[i])||void 0===d?void 0:d[n],2),v={debit:0,credit:0};if(v.document=n,"debit"===c.type?(v.debit=u,u<0&&(v.credit=-1*u,v.debit=0)):"credit"===c.type&&(v.credit=u,u<0&&(v.debit=-1*u,v.credit=0)),t[n]){let e=1*(0,l.Zv)(t[n],2)+1*(0,l.Zv)(u,2);t[n]=1*(0,l.Zv)(e,2)}else t[n]=1*(0,l.Zv)(u,2);var s;if(a=1*(0,l.Zv)(a,2)+1*(0,l.Zv)(u,2),v.account=c,r)v.sub_account=null===(s=(0,l.bh)("sub_account_ids"))||void 0===s?void 0:s[r];o.push(v)}}))}));let i=[];return o.map((e=>{t[e.document]&&e.debit+e.credit!==0&&i.push(e)})),o={...[]},t={},{resp:i,balance:a}}const u=async e=>{let t={},o={},a={};for(let d in e){var i;let n=e[d],r=null===(i=(0,l.bh)("account_ids"))||void 0===i?void 0:i[n.account];if(r){(0,l.UE)(a[null===r||void 0===r?void 0:r.accountId])||(a[null===r||void 0===r?void 0:r.accountId]={saldo:0,name:(null===r||void 0===r?void 0:r.code)+" - "+(null===r||void 0===r?void 0:r.name),list:[]}),(0,l.UE)(t[n.comprobanteId])||(t[n.comprobanteId]=0,o[n.comprobanteId]=[]);let e=1*(0,l.Zv)(("debit"===n.type?1:-1)*n.amount,2);a[null===r||void 0===r?void 0:r.accountId].saldo=1*(0,l.Zv)(a[r.accountId].saldo,2)+1*e,a[null===r||void 0===r?void 0:r.accountId].list.push([n.comprobanteId,e]),t[n.comprobanteId]=1*(0,l.Zv)(t[n.comprobanteId],2)+e,o[n.comprobanteId].push({ammount:e,operationId:n.comprobanteId})}}let n=null;for(let l in t)t[l]&&(n||(n={}),n[l]=1);n&&((0,l.Rz)("comprobante_w_erros",n),(0,l.Rz)("has_filter_comp_error",!0))},v=async e=>{var t,o,a,i;let n={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.filter_search_opera};n.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:(0,l.bh)("date_current_year"),":date1":(null===(a=(0,l.bh)("date_range_comps"))||void 0===a?void 0:a.initDate)-10,":date2":null===(i=(0,l.bh)("date_range_comps"))||void 0===i?void 0:i.lastDate};const d=(0,l.I7)(n),r=await d;if(r&&!r.error){(0,l.Rz)("comprobante_list",r);var c=[];(0,l.bh)("comprobante_all_list")&&(0,l.bh)("comprobante_all_list").map((e=>{r[e.operationId]})),r&&(0,l._2)(r).map((e=>{var t,o;r[e].account&&r[e].date>(null===(t=(0,l.bh)("date_range_comps"))||void 0===t?void 0:t.initDate)-10&&r[e].date<=(null===(o=(0,l.bh)("date_range_comps"))||void 0===o?void 0:o.lastDate)&&c.push(r[e])})),(0,l.Rz)("comprobante_by_doc",p(c)),u(c),e&&e()}},b=async(e,t)=>{var o;if(null!==(o=(0,l.Ch)()[(0,l.bh)("date_current_year")])&&void 0!==o&&o.isClosed)(0,a.OpenToast)({text:"No puede eliminar este registro, El a\xf1o contable al que pertenece esta cerrado",timeout:3500});else{let o=[];e.map((e=>{var t,a;let i={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.delete_opera};i.params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:(0,l.bh)("date_current_year"),operationId:e.operationId},o.push(i)}));const a=o.map((async e=>{const t=(0,l.I7)(e);await t}));await Promise.all(a),t&&t()}};function p(e){var t={};return e.length>0?e.map((e=>{let o=e.date;if(o&&e.account){let a=o+"_"+e.comprobanteId;if(!t[a]){t[a]={},["date","description","entryName","comprobanteId","employeeId"].forEach((o=>{t[a][o]=e[o]})),t[a].amount=0,t[a].balance=0,t[a].operations=[]}if(e.type){let o=function(e){var t,o;let a={};a.account=null===(t=(0,l.bh)("account_ids"))||void 0===t?void 0:t[e.account],a.sub_account=null===(o=(0,l.bh)("sub_account_ids"))||void 0===o?void 0:o[e.subAccount],a.comprobanteId=e.comprobanteId,a.operationId=e.operationId,a.document=e.document,a.type=e.type;let i=1*(0,l.Zv)(e.amount,2);"credit"===e.type?(a.debit=0,a.credit=i):"debit"===e.type&&(a.credit=0,a.debit=i);return a}(e);o.debit=1*o.debit,o.credit=1*o.credit,1*o.debit!==1*o.credit&&t[a].operations.push(o)}}})):t=null,t}function m(e){(0,l.Rz)("has_filter_review",null),(0,l.Rz)("has_filter_comp_error",null),(0,l._2)(e).map((t=>{var o,a,i,n;null!==(o=(0,l.bh)("comp_under_review"))&&void 0!==o&&null!==(a=o.inReview)&&void 0!==a&&a[e[t].comprobanteId]&&(0,l.Rz)("has_filter_review",!0),null!==(i=(0,l.bh)("comp_under_review"))&&void 0!==i&&null!==(n=i.hasError)&&void 0!==n&&n[e[t].comprobanteId]&&(0,l.Rz)("has_filter_comp_error",!0)}))}const h=e=>(0,l.MV)("sortComprobantesByType",[e],(()=>{let t="type";return e&&e.sort(((e,o)=>{let a=e[t],l=o[t];return a===l?o[l]-e[a]:l>a?1:-1}))}))}}]);
//# sourceMappingURL=9350.f94965cf.chunk.js.map