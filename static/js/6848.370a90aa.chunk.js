"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6848],{6848:(l,s,e)=>{e.r(s),e.d(s,{default:()=>h});var a=e(2791),d=e(2350),i=e(2647),c=(e(9803),e(9760)),o=e(9661),n=e(7689),t=e(4050),u=e(184);const v=(0,i.PU)(),r=(0,o.FC)(),m="new_multi_deposit_prov",p="multi_deposit_by_prov_Doc",h=l=>{var s,e,i,o,v,r,h,b,j,N,f,g,y;let{data:F,confirm:k}=l;const I=(0,a.useRef)(!1),[,R]=(0,a.useState)(0),D=(0,n.s0)();(0,a.useEffect)((()=>{I.current||(I.current=!0,(0,t.Ht)("global_accounts","global_account_params",L),(0,d.Rz)("PamentMethodAccount",null),(0,d.Rz)(p,null),(0,d.Rz)("accountPicker",{}),R((0,d.M5)()))}));const L=()=>{R((0,d.M5)())},S=async(l,s)=>{var e,a;let i={...null===(e=(0,d.bh)((0,d.hQ)()))||void 0===e?void 0:e.upd_deposit_summary};i.params={businessId:null===(a=(0,d.bh)("profileUser"))||void 0===a?void 0:a.businessId,depositSummaryId:l},i.data2update={comprobanteId:s};const c=(0,d.I7)(i),o=await c;o&&o.error};let w=null===(s=(0,d.bh)("global_account_params"))||void 0===s?void 0:s.cash_bank;null===(e=(0,d.bh)("global_account_params"))||void 0===e||e.bankComisions;return(0,u.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"840px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"form_title",children:"Registrando Deposito"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"_dsplFlx",style:{marginTop:25},children:[(0,u.jsx)("div",{className:"flexSpace"}),null!==w&&void 0!==w&&w.account?(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(i=(0,d.bh)("account_ids"))||void 0===i||null===(o=i[null===w||void 0===w?void 0:w.account])||void 0===o?void 0:o.code}),(0,u.jsx)("div",{className:"name",children:null===(v=(0,d.bh)("account_ids"))||void 0===v||null===(r=v[null===w||void 0===w?void 0:w.account])||void 0===r?void 0:r.name})]}),(0,u.jsx)("div",{className:"flexSpace"})]}):null]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx align_itm",children:[(0,u.jsx)("p",{className:"key_docL",children:"Documento:"}),(0,u.jsx)("p",{className:"value_docL",children:null===(h=(0,d.bh)(m))||void 0===h?void 0:h.id})]}),(0,u.jsx)("div",{className:"_dsplFlx align_itm",style:{paddingLeft:8},children:(0,u.jsx)("p",{className:"amount_docL",children:"$"+(null===(b=(0,d.bh)(m))||void 0===b?void 0:b.amount)})})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("p",{className:"key_docL",children:"Fecha:"}),(0,u.jsx)("p",{className:"value_docL",children:(0,d.sJ)(null===(j=(0,d.bh)(m))||void 0===j?void 0:j.depositDate)})]}),(0,u.jsx)("div",{className:"value_docL",style:{textAlign:"left"},children:"Quickbook Deposit ID ".concat(null===(N=(0,d.bh)(m))||void 0===N?void 0:N.id)}),(0,u.jsx)("div",{className:"separator"}),null===(f=(0,d.bh)(m))||void 0===f||null===(g=f.transactions)||void 0===g?void 0:g.map((l=>(0,u.jsx)(x,{data:l,updObs:L},l.id))),0===_(null===(y=(0,d.bh)(m))||void 0===y?void 0:y.transactions)?(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("button",{onClick:async()=>{var l,s,e,a,i,o,n,t;let u=(0,d.bh)(m)||{},v=[];u.date=u.depositDate,u.date||(u.date=(new Date).getTime()+4800);let r=await(0,d.fN)(u.date),h=null===(l=(0,d.bh)("global_account_params"))||void 0===l?void 0:l.cash_bank,x={};x.document=null===(s=(0,d.bh)(m))||void 0===s?void 0:s.id,x.account=null===h||void 0===h?void 0:h.account,x.subAccount=null===h||void 0===h?void 0:h.subAccount,x.type="debit",x.amount=1*(null===(e=(0,d.bh)(m))||void 0===e?void 0:e.amount),x.operationId=(0,d.M5)(),v.push(x),null===(a=(0,d.bh)(m))||void 0===a||null===(i=a.transactions)||void 0===i||i.map((l=>{const s=l.processorTransactionReference;let e=(0,d.bh)(s),a=1*(null===l||void 0===l?void 0:l.amount),i={};i.document=null===l||void 0===l?void 0:l.referenceNumber,i.account=null===e||void 0===e?void 0:e.account,i.subAccount=null===e||void 0===e?void 0:e.subAccount,i.type="credit",i.amount=1*a,i.operationId=(0,d.M5)(),v.push(i)}));let _={date:u.date,comprobanteId:r,description:"Quickbook Deposit ID ".concat(null===(o=(0,d.bh)(m))||void 0===o?void 0:o.id),businessId:null===(n=(0,d.bh)("profileUser"))||void 0===n?void 0:n.businessId,year:new Date(u.date).getFullYear()};delete u.date;let b={...null===(t=(0,d.bh)((0,d.hQ)()))||void 0===t?void 0:t.add_multi_opera};b.params=_,b.form=v;const j=(0,d.I7)(b);await j&&setTimeout((()=>{var l,s,e;(0,d.Rz)(p,null),S(null===(l=(0,d.bh)(m))||void 0===l?void 0:l.depositSummaryId,r),null===(s=(0,d.bh)(m))||void 0===s||null===(e=s.transactions)||void 0===e||e.map((l=>{const s=l.processorTransactionReference;(0,d.Rz)(s,null)})),(0,d.Rz)("multi_deposit_anticipo_by_doc",null),(0,d.Rz)(m,null),(null===F||void 0===F?void 0:F.modalID)&&(0,c.CloseModal)({id:null===F||void 0===F?void 0:F.modalID}),D({pathname:"/accounting-ledger",search:"?cId=".concat(r)})}),400)},children:"Guardar"})})]}):null]})},x=l=>{var s,e,i,c,o,n;let{data:t,updObs:m}=l;const[p,h]=(0,a.useState)(0),x=t.processorTransactionReference;let _=null===(s=(0,d.bh)("account_ids"))||void 0===s?void 0:s[null===(e=(0,d.bh)(x))||void 0===e?void 0:e.account],b=null===(i=(0,d.bh)("sub_account_ids"))||void 0===i?void 0:i[null===(c=(0,d.bh)(x))||void 0===c?void 0:c.subAccount],j=(1*(null===t||void 0===t?void 0:t.amount)+1*(null===t||void 0===t?void 0:t.totalTransactionFee)).toFixed(2),N=null===t||void 0===t||null===(o=t.contactName)||void 0===o||null===(n=o.split("/\n"))||void 0===n?void 0:n.join("");return(0,u.jsxs)("div",{className:" ",children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:null!==_&&void 0!==_&&_.code?(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[null!==_&&void 0!==_&&_.code?(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===_||void 0===_?void 0:_.code}),(0,u.jsx)("div",{className:"name",children:null===_||void 0===_?void 0:_.name})]}),(0,u.jsx)("div",{className:"flexSpace"})]}):null,b?(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===b||void 0===b?void 0:b.code}),(0,u.jsx)("div",{className:"name",children:null===b||void 0===b?void 0:b.name})]}):null]}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon",onClick:()=>{(0,d.Rz)(x,null),m()},children:(0,u.jsx)(v,{name:"outline_edit",color:"#1a73e8"})})]}):(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsxs)("div",{className:"_dsplFlx align_itm",style:{marginRight:40},children:[(0,u.jsx)("p",{className:"key_docL",children:"Name:"}),(0,u.jsx)("p",{className:"value_docL",children:N})]}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(r,{placeholder:"buscar una cuenta",width:420,handleClick:l=>{let s={account:l.account,subAccount:l.subAccount};(0,d.Rz)(x,s),m()}})]})}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsxs)("div",{className:"_dsplFlx align_itm",children:[(0,u.jsx)("p",{className:"key_docL",children:"Documento:"}),(0,u.jsx)("p",{className:"value_docL",children:null===t||void 0===t?void 0:t.referenceNumber})]}),(0,u.jsx)("div",{className:"_dsplFlx align_itm",style:{paddingLeft:8},children:(0,u.jsx)("p",{className:"amount_docL",children:"$"+j})}),(0,u.jsx)("div",{className:"flexSpace"})]})]})},_=l=>{let s=0;return l&&(null===l||void 0===l||l.map(((l,e)=>{var a;const i=l.processorTransactionReference;s+=null!==(a=(0,d.bh)(i))&&void 0!==a&&a.account?0:1}))),s}},9803:()=>{}}]);
//# sourceMappingURL=6848.370a90aa.chunk.js.map