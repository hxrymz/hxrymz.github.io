"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4286],{4286:(e,o,t)=>{t.r(o),t.d(o,{default:()=>u});var c=t(2791),a=t(2350),n=(t(6021),t(9760)),i=t(1232),r=t(9179),d=t(2647),l=t(184);const s=(0,r.t8)(),u=((0,d.Np)(),(0,d.PU)(),e=>{let{data:o,elmId:t,openUpdateView:r}=e;const[d,u]=(0,c.useState)(!1),[v,b]=(0,c.useState)(0);(0,c.useEffect)((()=>{d||(u(!0),b((0,a.M5)()))}));const _=()=>{b((0,a.M5)())},h=()=>{(0,i.i7)(_)};return(0,l.jsx)("div",{className:"item_acc",children:(0,l.jsxs)("div",{className:"_dsplFlx operation_item_box",onClick:()=>{(0,a.Rz)("show_comprobante",o);let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,l.jsx)(s,{confirm:h,item:o,accountForm:"Acc2Collect"}),(0,n.OpenModal)(e)},children:[(0,l.jsx)("div",{className:"name",children:null===o||void 0===o?void 0:o.document}),(0,l.jsx)("div",{className:"entryName",children:null===o||void 0===o?void 0:o.entryName}),(0,l.jsx)("div",{className:"flexSpace"}),(0,l.jsxs)("div",{className:"code",children:["$",(1*(null===o||void 0===o?void 0:o.amount)).toFixed(2)]}),(0,l.jsx)("div",{className:"flexSpace"})]})})})},1232:(e,o,t)=>{t.d(o,{GP:()=>d,N$:()=>i,hF:()=>s,i7:()=>a,nr:()=>n,pj:()=>u});var c=t(2350);const a=async(e,o)=>{var t,a;let n={...null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.filter_search_opera};n.params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,c.bh)("date_current_year")};const i=(0,c.I7)(n),d=await i;if(d&&!d.error){(0,c.Rz)("collect_list",d),(0,c.Rz)("collect_by_doc",r(d)),(0,c.Rz)("collect_by_docM",r(d));let o=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);l(d,o)}o&&o()},n=async(e,o)=>{var t,a;let n={...null===(t=(0,c.bh)((0,c.hQ)()))||void 0===t?void 0:t.filter_search_opera};n.params={businessId:null===(a=(0,c.bh)("profileUser"))||void 0===a?void 0:a.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,c.bh)("date_current_year")};const i=(0,c.I7)(n),d=await i;if(d&&!d.error){(0,c.Rz)("toPay_list",d),(0,c.Rz)("toPay_by_doc",r(d,!0)),(0,c.Rz)("toPay_by_docM",r(d,!0));let o=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);l(d,o)}o&&o()},i=async e=>{var o,t;let a={...null===(o=(0,c.bh)((0,c.hQ)()))||void 0===o?void 0:o.search_opera};a.params={businessId:null===(t=(0,c.bh)("profileUser"))||void 0===t?void 0:t.businessId,":search":(0,c.bh)("search_acc_record"),year:(0,c.bh)("date_current_year")};const n=(0,c.I7)(a),i=await n;i&&!i.error&&((0,c.Rz)("comprobante_list",i),(0,c.Rz)("comprobante_by_doc",r(i))),e&&e()};function r(e,o){var t={};let a=e&&(0,c._2)(e);return a.length>0?a.map((a=>{var n;let i=e[a],r=null===(n=i.document)||void 0===n?void 0:n.trim();if(!t[r]){t[r]={},["date","description","document","entryName"].forEach((e=>{t[r][e]=i[e]})),t[r].amount=0,t[r].operations=[]}if(i.type){let e=(0,c.Zv)(i.amount,2),a=(0,c.Zv)(t[r].amount,2),n=0;n=o?1*a+e*("debit"===i.type?-1:1):1*a+e*("credit"===i.type?-1:1),t[r].amount=(0,c.Zv)(n,2),t[r].operations.push(function(e){var o,t;let a={};a.account=null===(o=(0,c.bh)("account_ids"))||void 0===o?void 0:o[e.account],a.sub_account=null===(t=(0,c.bh)("sub_account_ids"))||void 0===t?void 0:t[e.subAccount],a.comprobanteId=e.comprobanteId,a.operationId=e.operationId,a.date=e.date,a.description=e.description;let n=(0,c.Zv)(e.amount,2);"credit"===e.type?(a.debit=0,a.credit=n):"debit"===e.type&&(a.credit=0,a.debit=n);return a}(i))}})):t=null,t}const d=(e,o,t)=>(0,c.MV)("SumDocuments",[e,o,t],(()=>{var t;let a=0;return e&&(null===(t=(0,c._2)(e))||void 0===t||t.map(((t,c)=>{var n;a+=1*(null===(n=e[t])||void 0===n?void 0:n[o])}))),a})),l=async(e,o,t)=>{let a=(0,c.bh)("rec_by_acc")||{};a[o]=((e,o,t)=>{var a;let n=0;return e&&(null===(a=(0,c._2)(e))||void 0===a||a.map(((o,t)=>{var a;let i=(0,c.Zv)(e[o].amount,2);n+=i*("credit"===(null===(a=e[o])||void 0===a?void 0:a.type)?-1:1)}))),n})(e)||"no",(0,c.Rz)("rec_by_acc",a),t&&t()},s=async(e,o,t)=>{var a,n;let i={...null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.filter_search_opera};i.params={businessId:null===(n=(0,c.bh)("profileUser"))||void 0===n?void 0:n.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,c.bh)("date_current_year")};const r=(0,c.I7)(i),d=await r;d&&!d.error&&l(d,o),t&&t()},u=async(e,o,t)=>{var a,n;let i={...null===(a=(0,c.bh)((0,c.hQ)()))||void 0===a?void 0:a.search_subacc_acc};i.params={businessId:null===(n=(0,c.bh)("profileUser"))||void 0===n?void 0:n.businessId,":account":e,":search":o,year:(0,c.bh)("date_current_year")};const r=(0,c.I7)(i),d=await r;if(d&&!d.error){var l;let e=null===(l=(0,c._2)(d))||void 0===l?void 0:l[0];t&&t(d[e])}}},6021:()=>{}}]);
//# sourceMappingURL=4286.ca03c17f.chunk.js.map