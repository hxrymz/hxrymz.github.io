"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4286,9760],{9760:(e,t,o)=>{o.r(t),o.d(t,{CloseModal:()=>r,OpenModal:()=>c,default:()=>d});var l=o(2791),i=o(5408),a=o(2350),n=o(184);const s="listDialog_mdh392",d=()=>{const e=(0,a.bh)("listDialog")||{};(0,i.Z)(s);let t=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:t.map(((t,o)=>{let i=e[t];if(i&&i.visible){let e={};i.height&&(e.heigth=i.height),i.width,i.zIndex&&(e.zIndex=i.zIndex-1);let o={zIndex:i.zIndex},a=null,s=i.data;return i.content&&(a=l.cloneElement(i.content,{data:s})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:o,id:t,children:a})}),i.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:()=>{var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},t)}}))})},c=e=>{let t=(0,a.bh)("listDialog")||{},o=(0,a.M5)();t[o]||(t[o]={}),t[o].visible=!0;let l={};e.props?(l=e.props,l.modalID=o):l.modalID=o;let i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),t[o].isView=e.isView,t[o].observeResize=e.observeResize,t[o].observeResize&&(t[o].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(o,"']")),l=e&&e.getBoundingClientRect();l&&(l.width===t[o].width&&l.height===t[o].height||(t[o].height=l.height+10,t[o].width=l.width,(0,a.Rz)("listDialog",t),(0,a.wt)(s)))}),200)),t[o].display=!0,e.zIndex&&(t[o].zIndex=e.zIndex),e.height&&(t[o].height=e.height),e.width&&(t[o].width=e.width),e.content&&(t[o].content=e.content),t[o].data=l,(0,a.Rz)("listDialog",t),(0,a.wt)(s),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,a.Rz)("modalOpen",o),(0,a.wt)(s)}),125)},r=e=>{let t=(0,a.bh)("listDialog")||{},o=e.id;if(t[o]){var l,i,n;t[o].observeResize&&t[o].observeInterval&&clearInterval(t[o].observeInterval),t[o].display=!1,null===(l=t[o])||void 0===l||null===(i=l.data)||void 0===i||null===(n=i.closeEvent)||void 0===n||n.call(i),(0,a.Rz)("listDialog",t),delete t[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,a.wt)(s),setTimeout((()=>{delete t[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,a.Rz)("modalOpen",null)}),750)}}},4286:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var l=o(2791),i=o(2350),a=(o(6021),o(9760)),n=o(1232),s=o(9179),d=o(2647),c=o(184);const r=(0,s.t8)(),u=((0,d.Np)(),(0,d.PU)(),e=>{let{data:t,elmId:o,openUpdateView:s}=e;const[d,u]=(0,l.useState)(!1),[v,h]=(0,l.useState)(0);(0,l.useEffect)((()=>{d||(u(!0),h((0,i.M5)()))}));const m=()=>{h((0,i.M5)())},b=()=>{(0,n.i7)(m)};return(0,c.jsx)("div",{className:"item_acc",children:(0,c.jsxs)("div",{className:"_dsplFlx operation_item_box",onClick:()=>{(0,i.Rz)("show_comprobante",t);let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,c.jsx)(r,{confirm:b,item:t,accountForm:"Acc2Collect"}),(0,a.OpenModal)(e)},children:[(0,c.jsx)("div",{className:"name",children:null===t||void 0===t?void 0:t.document}),(0,c.jsx)("div",{className:"entryName",children:null===t||void 0===t?void 0:t.entryName}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsxs)("div",{className:"code",children:["$",(1*(null===t||void 0===t?void 0:t.amount)).toFixed(2)]}),(0,c.jsx)("div",{className:"flexSpace"})]})})})},1232:(e,t,o)=>{o.d(t,{GP:()=>d,N$:()=>n,hF:()=>r,i7:()=>i,nr:()=>a,pj:()=>u});var l=o(2350);const i=async(e,t)=>{var o,i;let a={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.filter_search_opera};a.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,l.bh)("date_current_year")};const n=(0,l.I7)(a),d=await n;if(d&&!d.error){(0,l.Rz)("collect_list",d),(0,l.Rz)("collect_by_doc",s(d)),(0,l.Rz)("collect_by_docM",s(d));let t=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);c(d,t)}t&&t()},a=async(e,t)=>{var o,i;let a={...null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.filter_search_opera};a.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,l.bh)("date_current_year")};const n=(0,l.I7)(a),d=await n;if(d&&!d.error){(0,l.Rz)("toPay_list",d),(0,l.Rz)("toPay_by_doc",s(d,!0)),(0,l.Rz)("toPay_by_docM",s(d,!0));let t=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);c(d,t)}t&&t()},n=async e=>{var t,o;let i={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.search_opera};i.params={businessId:null===(o=(0,l.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,l.bh)("search_acc_record"),year:(0,l.bh)("date_current_year")};const a=(0,l.I7)(i),n=await a;n&&!n.error&&((0,l.Rz)("comprobante_list",n),(0,l.Rz)("comprobante_by_doc",s(n))),e&&e()};function s(e,t){var o={};let i=e&&(0,l._2)(e);return i.length>0?i.map((i=>{var a;let n=e[i],s=null===(a=n.document)||void 0===a?void 0:a.trim();if(!o[s]){o[s]={},["date","description","document","entryName"].forEach((e=>{o[s][e]=n[e]})),o[s].amount=0,o[s].operations=[]}if(n.type){let e=(0,l.Zv)(n.amount,2),i=(0,l.Zv)(o[s].amount,2),a=0;a=t?1*i+e*("debit"===n.type?-1:1):1*i+e*("credit"===n.type?-1:1),o[s].amount=(0,l.Zv)(a,2),o[s].operations.push(function(e){var t,o;let i={};i.account=null===(t=(0,l.bh)("account_ids"))||void 0===t?void 0:t[e.account],i.sub_account=null===(o=(0,l.bh)("sub_account_ids"))||void 0===o?void 0:o[e.subAccount],i.comprobanteId=e.comprobanteId,i.operationId=e.operationId,i.date=e.date,i.description=e.description;let a=(0,l.Zv)(e.amount,2);"credit"===e.type?(i.debit=0,i.credit=a):"debit"===e.type&&(i.credit=0,i.debit=a);return i}(n))}})):o=null,o}const d=(e,t,o)=>(0,l.MV)("SumDocuments",[e,t,o],(()=>{var o;let i=0;return e&&(null===(o=(0,l._2)(e))||void 0===o||o.map(((o,l)=>{var a;i+=1*(null===(a=e[o])||void 0===a?void 0:a[t])}))),i})),c=async(e,t,o)=>{let i=(0,l.bh)("rec_by_acc")||{};i[t]=((e,t,o)=>{var i;let a=0;return e&&(null===(i=(0,l._2)(e))||void 0===i||i.map(((t,o)=>{var i;let n=(0,l.Zv)(e[t].amount,2);a+=n*("credit"===(null===(i=e[t])||void 0===i?void 0:i.type)?-1:1)}))),a})(e)||"no",(0,l.Rz)("rec_by_acc",i),o&&o()},r=async(e,t,o)=>{var i,a;let n={...null===(i=(0,l.bh)((0,l.hQ)()))||void 0===i?void 0:i.filter_search_opera};n.params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,l.bh)("date_current_year")};const s=(0,l.I7)(n),d=await s;d&&!d.error&&c(d,t),o&&o()},u=async(e,t,o)=>{var i,a;let n={...null===(i=(0,l.bh)((0,l.hQ)()))||void 0===i?void 0:i.search_subacc_acc};n.params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":e,":search":t,year:(0,l.bh)("date_current_year")};const s=(0,l.I7)(n),d=await s;if(d&&!d.error){var c;let e=null===(c=(0,l._2)(d))||void 0===c?void 0:c[0];o&&o(d[e])}}},6021:()=>{}}]);
//# sourceMappingURL=4286.3b7d63ca.chunk.js.map