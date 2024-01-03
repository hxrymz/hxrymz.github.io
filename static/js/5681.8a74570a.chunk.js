"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5681],{1496:(e,i,l)=>{l.r(i),l.d(i,{default:()=>N});var o=l(2791),d=l(2350),s=l(2647),a=l(9760),c=(l(3971),l(5986)),n=l(6496),t=l(4050),r=(l(261),l(6824)),v=l(184);const u=(0,s.PU)(),h=(0,s.Vg)(),m=(0,s.YZ)(),p=e=>{var i,l,s,a,c;let{data:t,item:p}=e;const[,b]=(0,o.useState)(0),[x,j]=(0,o.useState)(""),[g,N]=(0,o.useState)(!1),[y,f]=(0,o.useState)(!1),[C,I]=(0,o.useState)(!1),[w,F]=(0,o.useState)(!1);(0,o.useEffect)((()=>{g||(N(!0),(0,n.S$)(S))}),[g]);const S=()=>{b((0,d.M5)()),f(!1)},k=e=>{j(e),y&&f(!1)},D=e=>{F(e===w?null:e)},A={1:{color:"var(--hrm_palette-success-fg)",icon:"success"},2:{color:"var(--hrm_palette-selected-nav-text)",icon:"problem"},3:{color:"rgb(254, 120, 23)",icon:"alert"}};return(0,v.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"94vh",width:"94vw",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"title_collect",children:"Compare Invoices"}),(0,v.jsx)("div",{className:"flexSpace"}),C?(0,v.jsxs)("div",{className:"actionBx _dsplFlx",children:[(0,v.jsx)("div",{className:"filterCode",onClick:()=>(e=>{var i;let l=[];(0,d.bh)("invoiceCmpDocs")&&(null===(i=(0,d._2)((0,d.bh)("invoiceCmpDocs")))||void 0===i||i.map(((e,i)=>{var o;let s=null===(o=(0,d.bh)("invoiceCmpDocs"))||void 0===o?void 0:o[e];(x||C)&&_(s,x,C,w)&&l.push(s)}))),(0,r.cg)(l)})(),children:(0,v.jsx)(u,{name:"printer",color:"#8b949e"})}),(0,v.jsx)("div",{className:"filterCode",onClick:()=>(e=>{var i;let l=[];(0,d.bh)("invoiceCmpDocs")&&(null===(i=(0,d._2)((0,d.bh)("invoiceCmpDocs")))||void 0===i||i.map(((e,i)=>{var o;let s=null===(o=(0,d.bh)("invoiceCmpDocs"))||void 0===o?void 0:o[e];if((x||C)&&_(s,x,C,w)){var a,c,n,t,r;let e={fecha:s.date?(0,d.sJ)(s.date):"",documento:s.document,importe:null===(a=1*(null===s||void 0===s?void 0:s.amount))||void 0===a?void 0:a.toFixed(2),vendido:null===(c=1*(null===s||void 0===s?void 0:s.cc_d))||void 0===c?void 0:c.toFixed(2),anticipo:null===(n=1*(null===s||void 0===s?void 0:s.hasAnticipo))||void 0===n?void 0:n.toFixed(2),cobrado:null===(t=1*(null===s||void 0===s?void 0:s.cc_c))||void 0===t?void 0:t.toFixed(2),saldo:null===(r=1*(null===s||void 0===s?void 0:s.saldo))||void 0===r?void 0:r.toFixed(2)};l.push(e)}}))),(0,d.eY)("export_invoices_"+(0,d.M5)()+".csv",l)})(),children:(0,v.jsx)(u,{name:"google-spreadsheet",color:"#8b949e"})})]}):null]}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,v.jsx)("div",{style:{marginTop:11},children:(0,v.jsx)(h,{placeholder:"Buscar ....",width:560,obs:b,fetchData:k,loading:y,change:e=>{!y&&f(!0),j(e)},callempty:k,keyFlds:"search_cmpInvoice"})}),(0,v.jsx)("div",{className:"flexSpace"}),C?(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20,marginRight:20},children:[(0,v.jsx)("div",{className:"filterCode",onClick:()=>D(2),children:(0,v.jsx)(u,{name:null===(i=A[2])||void 0===i?void 0:i.icon,color:2===w?null===(l=A[2])||void 0===l?void 0:l.color:"#8b949e"})}),(0,v.jsx)("div",{className:"filterCode",onClick:()=>D(3),children:(0,v.jsx)(u,{name:null===(s=A[3])||void 0===s?void 0:s.icon,color:3===w?null===(a=A[3])||void 0===a?void 0:a.color:"#8b949e"})})]}):null,(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,v.jsx)(m,{initvalue:C,keyCode:57,updChange:I}),(0,v.jsx)("span",{className:"checklabel",children:"Need Attention"})]})]}),(0,v.jsxs)("div",{style:{marginTop:14},children:[(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,v.jsx)("div",{className:"tr_bar_5",children:" "}),(0,v.jsx)("div",{className:"tr_bar_15",children:"Fecha"}),(0,v.jsx)("div",{className:"tr_bar_15",children:"Documento"}),(0,v.jsx)("div",{className:"tr_bar_12",children:"Importe"}),(0,v.jsx)("div",{className:"tr_bar_12",children:"Vendido"}),(0,v.jsx)("div",{className:"tr_bar_12",children:"Anticipo"}),(0,v.jsx)("div",{className:"tr_bar_12",children:"Cobrado"}),(0,v.jsx)("div",{className:"tr_bar_12",children:"Saldo"}),(0,v.jsx)("div",{className:"tr_bar_5",children:" "})]}),(0,v.jsx)("div",{className:"scollVh subMHeight",children:(0,d.bh)("invoiceCmpDocs")&&(null===(c=(0,d._2)((0,d.bh)("invoiceCmpDocs")))||void 0===c?void 0:c.map(((e,i)=>{var l,o,s,a,c,n,t,r;let h=null===(l=(0,d.bh)("invoiceCmpDocs"))||void 0===l?void 0:l[e];if((x||C)&&!_(h,x,C,w))return null;let m=(0,d.Zv)(null===h||void 0===h?void 0:h.saldo,2),p=m<0?2:m>0?3:(null===h||void 0===h?void 0:h.cc_c)>0?1:2;return(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar manual_vrfy",children:[(0,v.jsx)("div",{className:"tr_bar_5",children:(0,v.jsx)("div",{children:(0,v.jsx)(u,{name:null===(o=A[p])||void 0===o?void 0:o.icon,color:null===(s=A[p])||void 0===s?void 0:s.color})})}),(0,v.jsx)("div",{className:"tr_bar_15",children:(null===h||void 0===h?void 0:h.date)&&(0,d.sJ)(h.date)}),(0,v.jsx)("div",{className:"tr_bar_15 comprobanteId",children:e}),(0,v.jsx)("div",{className:"tr_bar_12 ",children:null===(a=1*(null===h||void 0===h?void 0:h.amount))||void 0===a?void 0:a.toFixed(2)}),(0,v.jsx)("div",{className:"tr_bar_12",children:null===(c=1*(null===h||void 0===h?void 0:h.cc_d))||void 0===c?void 0:c.toFixed(2)}),(0,v.jsx)("div",{className:"tr_bar_12",children:null===(n=1*(null===h||void 0===h?void 0:h.hasAnticipo))||void 0===n?void 0:n.toFixed(2)}),(0,v.jsx)("div",{className:"tr_bar_12",children:null===(t=1*(null===h||void 0===h?void 0:h.cc_c))||void 0===t?void 0:t.toFixed(2)}),(0,v.jsx)("div",{className:"tr_bar_12",children:null===(r=1*(null===h||void 0===h?void 0:h.saldo))||void 0===r?void 0:r.toFixed(2)}),(0,v.jsx)("div",{className:"tr_bar_5",children:" "})]},i)})))})]})]})},_=(e,i,l,o)=>{let s=!1;if(i){let a=i.toLowerCase();["amount","document","cc_c","cc_d","saldo"].map((i=>{if(l){var c,n,t;let l=(0,d.Zv)(null===e||void 0===e?void 0:e.saldo,2),h=l<0?2:l>0?3:(null===e||void 0===e?void 0:e.cc_c)>0?1:2;var r,v,u;if(o)h===o&&e[i]&&(null===(r=e[i])||void 0===r||null===(v=r.toString())||void 0===v||null===(u=v.toLowerCase())||void 0===u?void 0:u.indexOf(a))>=0&&(s=!0);else 1!==h&&e[i]&&(null===(c=e[i])||void 0===c||null===(n=c.toString())||void 0===n||null===(t=n.toLowerCase())||void 0===t?void 0:t.indexOf(a))>=0&&(s=!0)}else{var h,m,p;e[i]&&(null===(h=e[i])||void 0===h||null===(m=h.toString())||void 0===m||null===(p=m.toLowerCase())||void 0===p?void 0:p.indexOf(a))>=0&&(s=!0)}}))}else{let i=(0,d.Zv)(null===e||void 0===e?void 0:e.saldo,2),l=i<0?2:i>0?3:(null===e||void 0===e?void 0:e.cc_c)>0?1:2;o?l===o&&(s=!0):1!==l&&(s=!0)}return s};var b=l(713);const x=(0,s.Vg)(),j=(0,c.bb)(),g=(0,c.T5)(),N=e=>{var i,l,s;let{data:c,elmId:r,updObs:u}=e;const[h,m]=(0,o.useState)(!1),[_,N]=(0,o.useState)(0),[y,f]=(0,o.useState)(!1);(0,o.useEffect)((()=>{h||(m(!0),N((0,d.M5)()),(0,n.p9)(w),(0,b.N0)(u),(0,t.Ht)("global_accounts","global_account_params",u))}));const C=()=>{},I=e=>{(0,n.p9)(w)},w=async(e,i)=>{N((0,d.M5)()),f(!1)};return(0,v.jsxs)("div",{className:"",children:[(0,v.jsxs)("div",{className:"accounts_header",children:[(0,v.jsx)("h2",{children:"Invoices"}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[null!==(i=(0,d.Ch)()[(0,d.bh)("date_current_year")])&&void 0!==i&&i.isClosed?null:(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,v.jsx)(g,{}),(0,a.OpenModal)(e)},children:"Add Invoice"}),(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,v.jsx)(p,{}),(0,a.OpenModal)(e)},children:"Compare Invoice"})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,v.jsx)(x,{placeholder:"Buscar ....",width:360,obs:N,fetchData:e=>{f(!0),(0,n._3)(w)},loading:y,change:e=>{!y&&f(!0)},callempty:I,keyFlds:"searchQry"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"total_comprobante_title",children:"No de Invoices:"}),(0,v.jsx)("div",{className:"total_comprobante gray",children:(0,v.jsx)("span",{children:null===(l=(0,d._2)((0,d.bh)("invoices_list")))||void 0===l?void 0:l.length})})]})]})]}),(0,v.jsx)("div",{className:"invoices_container scollVh",children:(0,d.bh)("invoices_list")&&(null===(s=(0,d._2)((0,d.bh)("invoices_list")))||void 0===s?void 0:s.map((e=>(0,v.jsx)(j,{data:(0,d.bh)("invoices_list")[e],elmId:e,openUpdateView:C,handleRefreshAll:I},e))))})]})}},6496:(e,i,l)=>{l.d(i,{Hy:()=>a,S$:()=>n,_3:()=>s,jB:()=>c,p9:()=>d});var o=l(2350);const d=async e=>{let i=(0,o.bh)("getall_invoice_last")||0;if(Date.now()>i){var l,d;(0,o.Rz)("getall_invoice_last",Date.now()+190);let i={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.all_invoices};i.params={businessId:null===(d=(0,o.bh)("profileUser"))||void 0===d?void 0:d.businessId,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(i),c=await s;c&&((0,o.Rz)("invoices_list",a(c,"date")),(0,o.Rz)("invoices_ids",(0,o.ME)((0,o.jQ)(c),"invoiceId")),e&&e())}},s=async e=>{var i,l;let d={...null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.search_invoice};d.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,o.bh)("date_current_year"),":search":(0,o.bh)("searchQry")};const s=(0,o.I7)(d),c=await s;c&&((0,o.Rz)("invoices_list",a((0,o.jQ)(c),"date")),e&&e())},a=(e,i)=>(0,o.MV)("sortInvoices",[e],(()=>e&&e.sort(((e,l)=>{let o=e[i],d=l[i];return o<d?-1:o>d?1:0})))),c=async(e,i)=>{var l,d;let s={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.delete_invoice};s.params={businessId:null===(d=(0,o.bh)("profileUser"))||void 0===d?void 0:d.businessId,invoiceId:e,year:(0,o.bh)("date_current_year")};const a=(0,o.I7)(s);await a&&i&&i()},n=async e=>{var i,l;let d={...null===(i=(0,o.bh)((0,o.hQ)()))||void 0===i?void 0:i.all_invoices};d.params={businessId:null===(l=(0,o.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(d),a=await s;a&&((0,o.Rz)("invoiceCmp",a),t("SSJsgB2uUqcuoagD",(()=>{t("v5MkYLwPAbgci3wW",(()=>{let i=r();(0,o.Rz)("invoiceCmpDocs",i),e&&e()}))})))},t=async(e,i)=>{var l,d;let s={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.filter_search_opera};s.params={businessId:null===(d=(0,o.bh)("profileUser"))||void 0===d?void 0:d.businessId,year:(0,o.bh)("date_current_year"),":account":e};const a=(0,o.I7)(s),c=await a;c&&!c.error?((0,o.Rz)("invoiceCmp"+e,c),i&&i()):i&&i()},r=()=>{let e=(0,o.bh)("invoiceCmp"),i=(0,o.bh)("invoiceCmpSSJsgB2uUqcuoagD"),l=(0,o.bh)("invoiceCmpv5MkYLwPAbgci3wW"),d={};return(0,o._2)(e).map((i=>{let l=e[i].document.trim();d[l]||(d[l]={document:l,amount:0,saldo:0,hasAnticipo:0,cc_c:0,cc_d:0,comprobanteIds:{}}),d[l].amount+=e[i].amount,d[l].saldo+=1*e[i].amount,d[l].date=e[i].date})),(0,o._2)(i).map((e=>{var l,o,s;let a=i[e].document.trim();d[a]||(d[a]={document:a,amount:0,saldo:0,hasAnticipo:0,cc_c:0,cc_d:0,comprobanteIds:{}}),d[a].cc_d+="debit"===(null===(l=i[e])||void 0===l?void 0:l.type)?1*i[e].amount:0,d[a].cc_c+="credit"===(null===(o=i[e])||void 0===o?void 0:o.type)?1*i[e].amount:0,d[a].saldo+="credit"===(null===(s=i[e])||void 0===s?void 0:s.type)?-1*i[e].amount:0,d[a].comprobanteIds[i[e].comprobanteId]={date:i[e].date,description:i[e].description}})),(0,o._2)(l).map((e=>{var i,o;let s=l[e].document.trim();s.indexOf("A-")>=0&&(s=s.split("A-")[1]),d[s]||(d[s]={document:s,amount:0,hasAnticipo:0,cc_c:0,cc_d:0,saldo:0,comprobanteIds:{}}),d[s].hasAnticipo+="credit"===(null===(i=l[e])||void 0===i?void 0:i.type)?1*l[e].amount:-1*l[e].amount,d[s].saldo+=-1*("credit"===(null===(o=l[e])||void 0===o?void 0:o.type)?1*l[e].amount:-1*l[e].amount),d[s].comprobanteIds[l[e].comprobanteId]={date:l[e].date,description:l[e].description}})),d}},3971:()=>{},261:()=>{}}]);
//# sourceMappingURL=5681.8a74570a.chunk.js.map