"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8704,7766],{689:(e,s,i)=>{i.r(s),i.d(s,{default:()=>_});var l=i(2791),d=i(2350),o=(i(8202),i(9760)),a=i(9498),t=i(2647),n=(i(9803),i(184));var c=i(6963),r=i(4e3),v=i(6824);let x=0;var p=i(5261),u=i(7689);const m=(0,t.PU)(),h="new_multi_deposit_prov",_=e=>{var s,i,_;let{data:f,index:y,handleRefreshAll:j,show:g,viewFee:N}=e;const[w,S]=(0,l.useState)(!1),[F,z]=(0,l.useState)(0),T=(0,u.s0)();if((0,l.useEffect)((()=>{w||(S(!0),z((0,d.M5)()))})),!g)return null;const I=()=>{z((0,d.M5)())},k=()=>{(0,a.EY)(I)};(0,a.in)(null===(s=(0,d.bh)("sub_deposit_group"))||void 0===s?void 0:s[f.depositId],"subDeposit");if(0===(null===f||void 0===f?void 0:f.transactions.length))return null;let G=null===(i=(0,d.bh)("depositFeeSelected"))||void 0===i?void 0:i[f.id];return(0,n.jsxs)("div",{className:" ".concat(y," deposit_box "),"deposit-id":"".concat(f.id),children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[N&&null!==f&&void 0!==f&&f.comprobanteId?(0,n.jsx)("div",{className:"align_itm",children:(0,n.jsx)("div",{className:"icon align_itm",onClick:()=>{let e=(0,d.bh)("depositFeeSelected")||{};null!==e&&void 0!==e&&e[f.id]?delete e[f.id]:e[f.id]=-1*f.paymentDepositFee,(0,d.Rz)("depositFeeSelected",e),I()},children:(0,n.jsx)(m,{name:G?"check_circle_outline":"radio_unchecked",color:G?"var(--hrm_palette-blue-purple)":"var(--hrm_palette-imput-label_gray)"})})}):null,(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance "}),(0,n.jsx)("div",{className:"value_deposit_gross",children:(0,d.sJ)(null===f||void 0===f?void 0:f.depositDate)})]}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"icon_image ",style:{padding:"5px 10px 0 0"},onClick:()=>{(async e=>{const s=await c.PDFDocument.create();s.registerFontkit(r.Z);const i=await(0,v.h2)(s);console.log(i);let l=s.addPage();const{width:o,height:a}=l.getSize();x=a-40;let t=(0,d.sJ)(null===e||void 0===e?void 0:e.depositDate);const n=i.GSansBold.widthOfTextAtSize(t,13);l.drawText(t,{x:575-n,y:x,size:13,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),x-=20;const p=i.GSansBold.widthOfTextAtSize(null===e||void 0===e?void 0:e.id,12),u=i.GSansBold.widthOfTextAtSize("Deposit ID:  ",11);l.drawText("Deposit ID: ",{x:575-p-u,y:x,size:11,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText(null===e||void 0===e?void 0:e.id,{x:575-p,y:x,size:12,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),x-=50;const m=i.Lexend_700.widthOfTextAtSize("$"+(null===e||void 0===e?void 0:e.amount),12),h=i.GSansBold.widthOfTextAtSize("Amount:",11);l.drawText("Amount:",{x:515-h,y:x,size:11,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("$"+(null===e||void 0===e?void 0:e.amount),{x:575-m,y:x,size:12,font:i.Lexend_700,color:(0,c.rgb)(0,0,0)}),x-=20;let _="$".concat((1*(null===e||void 0===e?void 0:e.paymentDepositFee)).toFixed(2));const b=i.Lexend_700.widthOfTextAtSize(_,12),f=i.GSansBold.widthOfTextAtSize("Fees:",11);l.drawText("Fees:",{x:515-f,y:x,size:11,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText(_,{x:575-b,y:x,size:12,font:i.Lexend_700,color:(0,c.rgb)(0,0,0)});let y=a-30;l.drawText("Granite Concepts",{x:20,y:y,size:13,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("4504 Poplar Level Rd",{x:20,y:y-15,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("Louisville, KY 40213",{x:20,y:y-30,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("(502) 742-2473",{x:20,y:y-45,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("graniteconceptsky@gmail.com",{x:20,y:y-60,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("graniteconceptsky.com",{x:20,y:y-75,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),x-=90,l.drawText("Invoice",{x:15,y:x,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("Reference",{x:70,y:x,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("Name",{x:160,y:x,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText("Amount",{x:440,y:x,size:11,font:i.Lexend_700,color:(0,c.rgb)(0,0,0)}),l.drawText("Fee",{x:540,y:x,size:11,font:i.Lexend_700,color:(0,c.rgb)(0,0,0)}),l.drawRectangle({x:15,y:x-10,width:575,height:.85,color:(0,c.rgb)(0,0,0),borderColor:(0,c.rgb)(0,0,0)}),null===e||void 0===e||e.transactions.map((e=>{var s,d;x-=40;let o=null===e||void 0===e||null===(s=e.contactName)||void 0===s||null===(d=s.split("/\n"))||void 0===d?void 0:d.join(""),a="$".concat((1*(null===e||void 0===e?void 0:e.amount)).toFixed(2)),t="$".concat((1*(null===e||void 0===e?void 0:e.totalTransactionFee)).toFixed(2));const n=i.Lexend_700.widthOfTextAtSize(a,11),r=i.Lexend_700.widthOfTextAtSize(t,11);l.drawText(null===e||void 0===e?void 0:e.referenceNumber,{x:20,y:x,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText(null===e||void 0===e?void 0:e.processorTransactionReference,{x:60,y:x,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText(o,{x:150,y:x,size:10,font:i.GSansBold,color:(0,c.rgb)(0,0,0)}),l.drawText(a,{x:480-n,y:x,size:11,font:i.Lexend_700,color:(0,c.rgb)(0,0,0)}),l.drawText(t,{x:575-r,y:x,size:11,font:i.Lexend_700,color:(0,c.rgb)(0,0,0)})}));const j=await s.save();let g=(0,d.ou)(j);window.open(g)})(f)},children:(0,n.jsx)(m,{name:"printer",color:" var(--hrm_palette-blue-purple)"})}),(0,n.jsx)("div",{className:"icon_image ",style:{padding:"5px 10px 0 0"},onClick:e=>{if(null!==f&&void 0!==f&&f.comprobanteId)T({pathname:"/accounting-ledger",search:"?cId=".concat(f.comprobanteId)});else{(0,d.Rz)(h,f),(0,d.Rz)(h+"_bck",JSON.parse(JSON.stringify(f)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,n.jsx)(p.ME,{confirm:k,item:f}),(0,o.OpenModal)(e)}},children:(0,n.jsx)(m,{name:null!==f&&void 0!==f&&f.comprobanteId?"success":"google-spreadsheet",color:null!==f&&void 0!==f&&f.comprobanteId?"var(--hrm_palette-success-fg)":"var(--partial-success)"})})]})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",children:"Deposit ID:"}),(0,n.jsx)("div",{className:"value_deposit_balance ",children:null===f||void 0===f?void 0:f.id})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"trnsNo",children:null===f||void 0===f?void 0:f.transactions.length}),(0,n.jsx)("div",{className:" _dsplFlx value_deposit_balance ",children:(null===f||void 0===f?void 0:f.transactions.length)>1?"transactions":"transaction"})]})]}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",style:{width:130}}),(0,n.jsxs)("div",{className:"value_deposit_gross",children:["$",(1*(null===f||void 0===f?void 0:f.amount)).toFixed(2)]})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",style:{width:130},children:"Fees:"}),(0,n.jsxs)("div",{className:"value_deposit_balance ",children:["$",(1*(null===f||void 0===f?void 0:f.paymentDepositFee)).toFixed(2)]})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",style:{width:130},children:"Net amount:"}),(0,n.jsxs)("div",{className:"value_deposit_balance ",children:["$",(1*(null===f||void 0===f?void 0:f.amount)-1*(null===f||void 0===f?void 0:f.paymentDepositFee)).toFixed(2)]})]})]})]}),(0,n.jsx)(t.rD,{children:(0,n.jsx)("div",{className:" spaceAround flxWrp ",style:{margin:"6px 0 6px"},children:null===f||void 0===f||null===(_=f.transactions)||void 0===_?void 0:_.map((e=>(0,n.jsx)(b,{data:e,id:e.id})))})})]})},b=e=>{var s,i;let{data:o,index:a,handleRefreshAll:t,show:c}=e;const[r,v]=(0,l.useState)(!1),[x,p]=(0,l.useState)(0);(0,l.useEffect)((()=>{r||(v(!0),p((0,d.M5)()))}));let u=null===o||void 0===o||null===(s=o.contactName)||void 0===s||null===(i=s.split("/\n"))||void 0===i?void 0:i.join("");return(0,n.jsx)("div",{className:" ".concat(a," deposit_boxItm "),children:(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance "}),(0,n.jsx)("div",{className:"value_deposit_gross",children:null===o||void 0===o?void 0:o.processorTransactionReference})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",children:"Documeto Referencia:"}),(0,n.jsx)("div",{className:"value_deposit_name ",children:null===o||void 0===o?void 0:o.referenceNumber})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",children:"Customer:"}),(0,n.jsx)("div",{className:"value_deposit_name ",children:u})]})]}),(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",style:{width:130}}),(0,n.jsxs)("div",{className:"value_deposit_gross",children:["$",(1*(null===o||void 0===o?void 0:o.amount)).toFixed(2)]})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",style:{width:130},children:"Fees:"}),(0,n.jsxs)("div",{className:"value_deposit_balance ",children:["$",(1*(null===o||void 0===o?void 0:o.totalTransactionFee)).toFixed(2)]})]}),(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("div",{className:"key_deposit_balance ",style:{width:130},children:"Net amount:"}),(0,n.jsxs)("div",{className:"value_deposit_balance ",children:["$",(1*(null===o||void 0===o?void 0:o.amount)-1*(null===o||void 0===o?void 0:o.totalTransactionFee)).toFixed(2)]})]})]})]})})}},9498:(e,s,i)=>{i.d(s,{EY:()=>d,LY:()=>n,Sb:()=>t,hj:()=>o,in:()=>a});var l=i(2350);const d=async e=>{let s=(0,l.bh)("getall_deposit_last")||0;if(Date.now()>s){var i,d;(0,l.Rz)("getall_deposit_last",Date.now()+190);let s={...null===(i=(0,l.bh)((0,l.hQ)()))||void 0===i?void 0:i.scan_deposit_summary};s.params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId};const o=(0,l.I7)(s),t=await o;t&&((0,l.Rz)("deposits_list",a(t,"depositSummaryId")),(0,l.Rz)("deposits_ids",(0,l.ME)((0,l.jQ)(t),"depositId")),e&&e())}},o=async e=>{var s,i;let d={...null===(s=(0,l.bh)((0,l.hQ)()))||void 0===s?void 0:s.scan_deposit_summary};d.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId},(0,l.bh)("searchQryDept").split(" ").map(((e,s)=>{e&&(d.params[":search"+s]=e.trim())}));const o=(0,l.I7)(d),t=await o;t?((0,l.Rz)("deposits_list",a((0,l.jQ)(t),"depositSummaryId")),(0,l.Rz)("deposits_ids",t),e&&e()):(0,l.Rz)("deposits_list",[])},a=(e,s,i)=>e&&e.sort(((e,l)=>{let d=e[s],o=l[s];return d<o?i?-1:1:d>o?i?1:-1:0})),t=async(e,s)=>{var i,d;let o={...null===(i=(0,l.bh)((0,l.hQ)()))||void 0===i?void 0:i.delete_deposit};o.params={businessId:null===(d=(0,l.bh)("profileUser"))||void 0===d?void 0:d.businessId,depositId:e};const a=(0,l.I7)(o);await a&&s&&s()},n=async e=>{var s,i;let d={...null===(s=(0,l.bh)((0,l.hQ)()))||void 0===s?void 0:s.all_deposit_summary};d.params={businessId:null===(i=(0,l.bh)("profileUser"))||void 0===i?void 0:i.businessId,":search1":"  "};const o=(0,l.I7)(d),a=await o;if(a){let s=[],i=(0,l._U)(a,"id");(0,l.sO)(e)&&(e=JSON.parse(e)),e.map((e=>{let d={...e};d.depositSummaryId=e.id;let o=!i[e.id];({})[e.id]&&(o=!0);let a=(null===e||void 0===e?void 0:e.transactions.length)>0;if(e.id&&e.amount&&e.paymentDepositFee&&o&&a){var t,n;let e={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.add_deposit_summary};e.params={businessId:null===(n=(0,l.bh)("profileUser"))||void 0===n?void 0:n.businessId},e.form=d,s.push(e)}})),(0,l.DF)(s,c)}},c=async e=>{const s=(0,l.I7)(e),i=await s;if(i)return i}},8202:()=>{},9803:()=>{}}]);
//# sourceMappingURL=8704.8750aba7.chunk.js.map