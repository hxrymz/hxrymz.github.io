"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[1666],{1666:(l,e,a)=>{a.r(e),a.d(e,{default:()=>h});var s=a(2791),d=a(2350),c=a(2647),i=(a(9803),a(9760)),n=a(9661),o=a(7689),t=a(4050),u=a(24),v=a(184);(0,c.PU)(),(0,n.FC)();const r=(0,u.f_)(),m="new_deposit_fee",p="multi_new_deposit_fee",h=l=>{var e,a,c,n,u,h,x,_,b,j,N;let{data:f,feeAmount:g,description:F}=l;const k=(0,s.useRef)(!1),[,y]=(0,s.useState)(0),D=(0,o.s0)();(0,s.useEffect)((()=>{k.current||(k.current=!0,(0,t.Ht)("global_accounts","global_account_params",R),(0,d.Rz)("PamentMethodAccount",null),(0,d.Rz)(p,null),(0,d.Rz)("accountPicker",{}),y((0,d.M5)()))}));const R=()=>{y((0,d.M5)())},w=()=>{let l=(0,d.bh)(m)||{};return l.date||(l.date=(new Date).getTime()+4800),"fee "+(0,d.sJ)(l.date)};let S=null===(e=(0,d.bh)("global_account_params"))||void 0===e?void 0:e.cash_bank,I=null===(a=(0,d.bh)("global_account_params"))||void 0===a?void 0:a.bankComisions;return(0,v.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"840px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"form_title",children:"Registrando Deposito"}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsxs)("div",{className:"_dsplFlx",style:{marginTop:25},children:[(0,v.jsx)("div",{className:"flexSpace"}),null!==S&&void 0!==S&&S.account?(0,v.jsxs)("div",{className:" acc_dtls",children:[(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(c=(0,d.bh)("account_ids"))||void 0===c||null===(n=c[null===S||void 0===S?void 0:S.account])||void 0===n?void 0:n.code}),(0,v.jsx)("div",{className:"name",children:null===(u=(0,d.bh)("account_ids"))||void 0===u||null===(h=u[null===S||void 0===S?void 0:S.account])||void 0===h?void 0:h.name})]}),(0,v.jsx)("div",{className:"flexSpace"})]}):null]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:"_dsplFlx align_itm",children:[(0,v.jsx)("p",{className:"key_docL",children:"Documento:"}),(0,v.jsx)("p",{className:"value_docL",children:w()})]}),(0,v.jsx)("div",{className:"_dsplFlx align_itm",style:{paddingLeft:8},children:(0,v.jsx)("p",{className:"amount_docL",children:"$"+g})})]}),(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"flexSpace"}),null!==S&&void 0!==S&&S.account?(0,v.jsxs)("div",{className:" acc_dtls",children:[(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(x=(0,d.bh)("account_ids"))||void 0===x||null===(_=x[null===I||void 0===I?void 0:I.account])||void 0===_?void 0:_.code}),(0,v.jsx)("div",{className:"name",children:null===(b=(0,d.bh)("account_ids"))||void 0===b||null===(j=b[null===I||void 0===I?void 0:I.account])||void 0===j?void 0:j.name})]}),(0,v.jsx)("div",{className:"flexSpace"})]}):null]}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:"_dsplFlx align_itm",children:[(0,v.jsx)("p",{className:"key_docL",children:"Documento:"}),(0,v.jsx)("p",{className:"value_docL",children:w()})]}),(0,v.jsx)("div",{className:"_dsplFlx align_itm",style:{paddingLeft:8},children:(0,v.jsx)("p",{className:"amount_docL",children:"$"+g})})]}),(0,v.jsx)("div",{className:"separator"}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)(r,{init:null===(N=(0,d.bh)(m))||void 0===N?void 0:N.date,updDate:l=>((l,e,a)=>{let s=(0,d.bh)(m)||{};a?(s[a]||(s[a]={}),s[a][l]=e):s[l]=e,(0,d.Rz)(m,s),y((0,d.M5)())})("date",l)}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsx)("div",{className:"value_docL",style:{textAlign:"left"},children:F}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"card",children:(0,v.jsx)("button",{onClick:async()=>{var l,e,a,s,c,n,o,t;let u=(0,d.bh)(m)||{},v=[];u.date=u.depositDate,u.date||(u.date=(new Date).getTime()+4800);let r=await(0,d.fN)(u.date),h=null===(l=(0,d.bh)("global_account_params"))||void 0===l?void 0:l.bankComisions,x={};x.document=null===(e=(0,d.bh)(m))||void 0===e?void 0:e.id,x.account=null===h||void 0===h?void 0:h.account,x.subAccount=null===h||void 0===h?void 0:h.subAccount,x.type="debit",x.amount=-1*(null===(a=(0,d.bh)(m))||void 0===a?void 0:a.paymentDepositFee),x.operationId=(0,d.M5)(),v.push(x);let _=null===(s=(0,d.bh)("global_account_params"))||void 0===s?void 0:s.cash_bank,b={};b.document=null===(c=(0,d.bh)(m))||void 0===c?void 0:c.id,b.account=null===_||void 0===_?void 0:_.account,b.subAccount=null===_||void 0===_?void 0:_.subAccount,b.type="credit",b.amount=-1*(null===(n=(0,d.bh)(m))||void 0===n?void 0:n.paymentDepositFee),b.operationId=(0,d.M5)(),v.push(b);let j={date:u.date,comprobanteId:r,description:"Quickbook Fee ".concat(w()),businessId:null===(o=(0,d.bh)("profileUser"))||void 0===o?void 0:o.businessId,year:new Date(u.date).getFullYear()};delete u.date;let N={...null===(t=(0,d.bh)((0,d.hQ)()))||void 0===t?void 0:t.add_multi_opera};N.params=j,N.form=v;const g=(0,d.I7)(N);await g&&setTimeout((()=>{var l,e;(0,d.Rz)(p,null),null===(l=(0,d.bh)(m))||void 0===l||null===(e=l.transactions)||void 0===e||e.map((l=>{const e=l.processorTransactionReference;(0,d.Rz)(e,null)})),(0,d.Rz)("multi_deposit_anticipo_by_doc",null),(0,d.Rz)(m,null),(null===f||void 0===f?void 0:f.modalID)&&(0,i.CloseModal)({id:null===f||void 0===f?void 0:f.modalID}),D({pathname:"/accounting-ledger",search:"?cId=".concat(r)})}),400)},children:"Guardar"})})]})]})}},9803:()=>{}}]);
//# sourceMappingURL=1666.20dbdc96.chunk.js.map