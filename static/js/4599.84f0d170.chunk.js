"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4599],{2270:(e,a,l)=>{l.r(a),l.d(a,{default:()=>u});var s=l(2791),d=(l(1636),l(2350)),i=l(810),n=l(2647),r=(l(3266),l(15)),c=l(184);const t=(0,n.PU)(),u=e=>{let{keyId:a}=e;const[l,i]=(0,s.useState)(0);let n=(0,d.bh)("result_sheet_params"),t=(0,d.bh)("result_sheet_upd_flds");const u=()=>{(0,r.OpenToast)({text:"Los cambios en el Balance de Resultado fueron guardados exitosamente",timeout:3500}),i((0,d.M5)())};return(0,c.jsxs)("div",{style:{marginTop:20,maxWidth:"90%"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"title_collect",children:"Balance Resultado"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn purple",onClick:async()=>{var e;if(null!==(e=(0,d.bh)("result_params_value"))&&void 0!==e&&e.balanceId){var a,l,s;let e={...(0,d.bh)("result_params_value")},i={...null===(a=(0,d.bh)((0,d.hQ)()))||void 0===a?void 0:a.upd_balances};i.params={businessId:null===(l=(0,d.bh)("profileUser"))||void 0===l?void 0:l.businessId,balanceId:null===(s=(0,d.bh)("result_params_value"))||void 0===s?void 0:s.balanceId};let n=(0,d.vy)(t,(0,d.bh)("result_params_value"),(0,d.bh)("result_params_value_bck"));i.data2update=n.data;const r=(0,d.I7)(i);await r&&((0,d.Rz)("result_params_value",e),u())}else{var i,n;let e={...(0,d.bh)("result_params_value")};e.balanceId=(0,d.M5)(),e.type="result_sheet";let a={...null===(i=(0,d.bh)((0,d.hQ)()))||void 0===i?void 0:i.add_balances};a.params={businessId:null===(n=(0,d.bh)("profileUser"))||void 0===n?void 0:n.businessId},a.form=e;const l=(0,d.I7)(a);await l&&((0,d.Rz)("result_params_value",e),u())}},children:"Guardar Parametros"})]}),(0,c.jsx)("div",{className:"balance",style:{marginTop:10},children:n&&(0,d._2)(n).map((e=>(0,c.jsxs)("div",{style:{marginLeft:12},children:[(0,c.jsx)("h5",{children:e}),Array.isArray(n[e])?(0,c.jsx)("div",{children:n[e].map((e=>{var a;return(0,c.jsx)(o,{keyId:e.key,accountId:null===(a=(0,d.bh)("balance_params"))||void 0===a?void 0:a[e.key]},e.key)}))}):(0,c.jsx)("div",{children:(0,d._2)(n[e]).map((a=>(0,c.jsxs)("div",{style:{marginLeft:27},children:[(0,c.jsx)("p",{children:a}),(0,c.jsx)("div",{children:n[e][a].map((e=>{var a;return(0,c.jsx)(o,{keyId:e.key,accountId:null===(a=(0,d.bh)("result_params_value"))||void 0===a?void 0:a[e.key]},e.key)}))})]},a)))})]},e)))})]})},o=e=>{var a,l,n;let{keyId:r}=e;const[u,o]=(0,s.useState)(!1),[v,h]=(0,s.useState)(!1),[m,_]=(0,s.useState)(0);let p=null===(a=(0,d.bh)("result_params_value"))||void 0===a?void 0:a[r],x=null===(l=(0,d.bh)("account_ids"))||void 0===l?void 0:l[p],b=x&&(null===(n=(0,d.bh)("sub_account_group"))||void 0===n?void 0:n[null===x||void 0===x?void 0:x.accountId]);return(0,c.jsxs)("div",{style:{marginLeft:27},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{onClick:()=>o(!u),className:"".concat(u?"editing":""),style:{marginRight:27},children:(0,c.jsx)("span",{children:r})}),u?(0,c.jsx)("div",{children:(0,c.jsx)(i.Z,{handleClick:e=>{((e,a,l)=>{let s="result_params_value",i=(0,d.bh)(s)||{};l?(i[l]||(i[l]={}),i[l][e]=a):i[e]=a,(0,d.Rz)(s,i),_((0,d.M5)())})(r,e),o(!1)}})}):(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"bg_acc_code",children:null===x||void 0===x?void 0:x.code})}),(0,c.jsx)("div",{className:"flexSpace"}),(null===b||void 0===b?void 0:b.length)>0?(0,c.jsx)("div",{className:"icon",onClick:()=>h(!v),children:(0,c.jsx)(t,{name:v?"key_arrow_up":"key_arrow_down",color:"#828282"})}):null]}),v&&(null===b||void 0===b?void 0:b.length)&&(0,c.jsx)("div",{children:null===b||void 0===b?void 0:b.map((e=>e.subAccount?(0,c.jsx)("div",{className:"_dsplFlx account_item_box",style:{marginLeft:"35px"},children:(0,c.jsxs)("div",{className:"_dsplFlx",children:[(0,c.jsx)("div",{className:"code",children:e.subAccount}),(0,c.jsx)("div",{className:"name",children:e.subAccountName})]})},e.sub_accountId):null))})]})}}}]);
//# sourceMappingURL=4599.84f0d170.chunk.js.map