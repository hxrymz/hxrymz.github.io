"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2079,9760],{9760:(e,l,a)=>{a.r(l),a.d(l,{CloseModal:()=>r,OpenModal:()=>d,default:()=>o});var s=a(2791),t=a(5408),i=a(2350),n=a(184);const c="listDialog_mdh392",o=()=>{const e=(0,i.bh)("listDialog")||{};(0,t.Z)(c);let l=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:l.map(((l,a)=>{let t=e[l];if(t&&t.visible){let e={};t.height&&(e.heigth=t.height),t.width,t.zIndex&&(e.zIndex=t.zIndex-1);let a={zIndex:t.zIndex},i=null,c=t.data;return t.content&&(i=s.cloneElement(t.content,{data:c})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:a,id:l,children:i})}),t.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(t.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},d=e=>{let l=(0,i.bh)("listDialog")||{},a=(0,i.M5)();l[a]||(l[a]={}),l[a].visible=!0;let s={};e.props?(s=e.props,s.modalID=a):s.modalID=a;let t=document.getElementsByTagName("body")[0];null!==t&&void 0!==t&&t.style&&(t.style.overflowY="hidden"),l[a].isView=e.isView,l[a].observeResize=e.observeResize,l[a].observeResize&&(l[a].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(a,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===l[a].width&&s.height===l[a].height||(l[a].height=s.height+10,l[a].width=s.width,(0,i.Rz)("listDialog",l),(0,i.wt)(c)))}),200)),l[a].display=!0,e.zIndex&&(l[a].zIndex=e.zIndex),e.height&&(l[a].height=e.height),e.width&&(l[a].width=e.width),e.content&&(l[a].content=e.content),l[a].data=s,(0,i.Rz)("listDialog",l),(0,i.wt)(c),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",a),(0,i.wt)(c)}),125)},r=e=>{let l=(0,i.bh)("listDialog")||{},a=e.id;if(l[a]){var s,t,n;l[a].observeResize&&l[a].observeInterval&&clearInterval(l[a].observeInterval),l[a].display=!1,null===(s=l[a])||void 0===s||null===(t=s.data)||void 0===t||null===(n=t.closeEvent)||void 0===n||n.call(t),(0,i.Rz)("listDialog",l),delete l[a],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(c),setTimeout((()=>{delete l[a],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},2079:(e,l,a)=>{a.r(l),a.d(l,{CardInventoryAcc:()=>x,CardTaxW2:()=>u,PayrollAccountsDash:()=>p,TaxDecuctionItem:()=>m,TaxExpensesItem:()=>h,default:()=>v});var s=a(2791),t=(a(1636),a(2350)),i=(a(810),a(2647)),n=(a(4050),a(4304)),c=a(9760),o=(a(9661),a(978)),d=a(184);const r=(0,i.PU)(),v=e=>{var l;let{data:a,keyId:i}=e;const[n,o]=(0,s.useState)(0);(0,s.useEffect)((()=>{}),[i]);let r=["inventory","inventory_expensess","sales_income","cash_bank","cash_fluid","advance_collections","sale_tax","socialsecurity_tax_expenses","medicare_tax_expenses","salary","futureSlipCheck","yearProfitOrLoss","w2_params"];let v=(0,t.vy)(r,(0,t.bh)("global_account_params"),(0,t.bh)("global_account_params_bck"));return(0,d.jsxs)("div",{style:{maxHeight:"80vh",width:"690px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("p",{className:"title_g_acc",children:"Cuentas Globales"}),(0,d.jsx)("div",{className:"flexSpace"})]}),(0,d.jsx)("div",{className:"balance",style:{marginTop:10,minHeight:20}}),(0,d.jsx)(x,{item_global:(0,t.bh)("global_account_params")}),(0,d.jsx)("div",{style:{marginTop:10}}),(0,d.jsx)(p,{item_global:(0,t.bh)("global_account_params")}),(0,d.jsx)("div",{style:{marginTop:10}}),(0,d.jsx)(u,{item:null===(l=(0,t.bh)("global_account_params"))||void 0===l?void 0:l.w2_params}),(0,d.jsxs)("div",{className:"_dsplFlx ",children:[(0,d.jsx)("div",{className:"flexSpace"}),(0,d.jsx)("div",{className:"card",children:v.hasChange?(0,d.jsx)("button",{onClick:async()=>{var e;if(null!==(e=(0,t.bh)("global_account_params"))&&void 0!==e&&e.balanceId){var l,s,i;let e={...(0,t.bh)("global_account_params")};e.balanceId=(0,t.M5)();let a={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.upd_balances};a.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,balanceId:null===(i=(0,t.bh)("global_account_params"))||void 0===i?void 0:i.balanceId};let n=(0,t.vy)(r,(0,t.bh)("global_account_params"),(0,t.bh)("global_account_params_bck"));a.data2update=n.data;const c=(0,t.I7)(a);await c&&(0,t.Rz)("global_account_params",e)}else{var n,d;let e={...(0,t.bh)("global_account_params")};e.balanceId=(0,t.M5)(),e.type="global_accounts";let l={...null===(n=(0,t.bh)((0,t.hQ)()))||void 0===n?void 0:n.add_balances};l.params={businessId:null===(d=(0,t.bh)("profileUser"))||void 0===d?void 0:d.businessId},l.form=e;const a=(0,t.I7)(l);await a&&((0,t.Rz)("global_account_params",e),o((0,t.M5)()))}(null===a||void 0===a?void 0:a.modalID)&&(0,c.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})},children:"Guardar"}):null})]})]})},u=e=>{let{item:l,item_global:a}=e;const[i,c]=(0,s.useState)(0),o=(e,a,s)=>{let i=l||b;s?(i[s]||(i[s]={}),i[s][e]=a):i[e]=a,((e,l,a)=>{let s="global_account_params",i=(0,t.bh)(s)||{};a?(i[a]||(i[a]={}),i[a][e]=l):i[e]=l,(0,t.Rz)(s,i),c((0,t.M5)())})("w2_params",i),c((0,t.M5)())};return(0,d.jsxs)(n.lp,{children:[(0,d.jsx)("div",{className:"iMTYiw hiKoiM",children:"W2 Tax deduction Parameter"}),(0,d.jsx)("div",{className:"_dsplFlx w_100prc",style:{marginTop:19}}),(0,d.jsx)(m,{label:"Federal Tax",percentDefault:14.5,onChange:o,keyFld:"federalTax",item:l}),(0,d.jsx)(m,{label:"Social Security",percentDefault:6.2,onChange:o,keyFld:"socialSecurity",item:l}),(0,d.jsx)(m,{label:"Medicare",percentDefault:1.45,onChange:o,keyFld:"medicareTax",item:l}),(0,d.jsx)(m,{label:"Estate",percentDefault:4.5,onChange:o,keyFld:"stateTax",item:l}),(0,d.jsx)(m,{label:"City",percentDefault:2.2,onChange:o,keyFld:"cityTax",item:l})]})},m=e=>{var l,a,t,i,n;let{label:v,item:u,onChange:m,keyFld:h,percentDefault:x}=e;const[p,b]=(0,s.useState)(0),[_,g]=(0,s.useState)(0);let j=_||(null===u||void 0===u||null===(l=u[h])||void 0===l?void 0:l.percent)||x;const y=e=>{let l=(null===u||void 0===u?void 0:u[h])||{};l.account=e,m&&m(h,l)};let f=!(null!==u&&void 0!==u&&null!==(a=u[h])&&void 0!==a&&null!==(t=a.account)&&void 0!==t&&t.account);return(0,d.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,d.jsx)("div",{className:"icon_revision","data-acc":"".concat(null===u||void 0===u||null===(i=u[h])||void 0===i||null===(n=i.account)||void 0===n?void 0:n.account),children:(0,d.jsx)(r,{name:f?"alert":"check_circle",color:f?"var(--hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)"})}),(0,d.jsx)("div",{className:"igLyC jyoObE pddBtm-12",children:(0,d.jsx)("div",{className:"txfnt_lfal",onClick:()=>{var e;let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,d.jsx)(o.Z,{item:null===u||void 0===u||null===(e=u[h])||void 0===e?void 0:e.account,confirm:y}),(0,c.OpenModal)(l)},children:v})}),(0,d.jsx)("div",{className:"igLyC jyoObE",onClick:()=>b(!p),children:j+"%"})]})},h=e=>{var l,a,i,n;let{label:v,item:u,keyFld:m}=e;const[h,x]=(0,s.useState)(0),p=(e,l,a)=>{let s="global_account_params",i=(0,t.bh)(s)||{};a?(i[a]||(i[a]={}),i[a][e]=l):i[e]=l,(0,t.Rz)(s,i),x((0,t.M5)())};let b=null===(l=(0,t.bh)("account_ids"))||void 0===l?void 0:l[null===u||void 0===u||null===(a=u[m])||void 0===a?void 0:a.account];const _=e=>{e.account&&p&&p(m,e),x((0,t.M5)())};let g=!(null!==b&&void 0!==b&&b.code);return(0,d.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,d.jsx)("div",{className:"icon_revision","data-acc":"".concat(null===u||void 0===u||null===(i=u[m])||void 0===i||null===(n=i.account)||void 0===n?void 0:n.account),children:(0,d.jsx)(r,{name:g?"alert":"check_circle",color:g?"var(--hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)"})}),(0,d.jsx)("div",{className:"igLyC jyoObE pddBtm-12",children:(0,d.jsx)("div",{className:"txfnt_lfal",style:{maxWidth:200},onClick:()=>{var e;let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,d.jsx)(o.Z,{item:null===u||void 0===u||null===(e=u[m])||void 0===e?void 0:e.account,confirm:_}),(0,c.OpenModal)(l)},children:v})}),null!==b&&void 0!==b&&b.code?(0,d.jsxs)("div",{className:"igLyC jyoObE",children:[null===b||void 0===b?void 0:b.code,"  - ",null===b||void 0===b?void 0:b.name]}):null]})},x=e=>{let{item:l,item_global:a}=e;const[i,c]=(0,s.useState)(0),o=(e,l,a)=>{let s="global_account_params",i=(0,t.bh)(s)||{};a?(i[a]||(i[a]={}),i[a][e]=l):i[e]=l,(0,t.Rz)(s,i),c((0,t.M5)())};return(0,d.jsxs)(n.lp,{children:[(0,d.jsx)("div",{className:"iMTYiw hiKoiM",children:"Inventory Global Accounts"}),(0,d.jsx)("div",{className:"_dsplFlx w_100prc",style:{marginTop:19}}),(0,d.jsx)(h,{label:"Efectivo en Banco",onChange:o,keyFld:"cash_bank",item:a}),(0,d.jsx)(h,{label:"Efectivo en Caja",onChange:o,keyFld:"cash_fluid",item:a}),(0,d.jsx)(h,{label:"Cobros Anticipados",onChange:o,keyFld:"advance_collections",item:a}),(0,d.jsx)(h,{label:"Inventario",onChange:o,keyFld:"inventory",item:a}),(0,d.jsx)(h,{label:"Gastos Inventario",onChange:o,keyFld:"inventory_expensess",item:a}),(0,d.jsx)(h,{label:"Ingresos por Ventas",onChange:o,keyFld:"sales_income",item:a}),(0,d.jsx)(h,{label:"Taxes en compra y venta",onChange:o,keyFld:"sale_tax",item:a}),(0,d.jsx)(h,{label:"Resultado del ejercicio",onChange:o,keyFld:"yearProfitOrLoss",item:a})]})},p=e=>{let{item:l,item_global:a}=e;const[i,c]=(0,s.useState)(0),o=(e,l,a)=>{let s="global_account_params",i=(0,t.bh)(s)||{};a?(i[a]||(i[a]={}),i[a][e]=l):i[e]=l,(0,t.Rz)(s,i),c((0,t.M5)())};return(0,d.jsxs)(n.lp,{children:[(0,d.jsx)("div",{className:"iMTYiw hiKoiM",children:"Payroll Global Accounts"}),(0,d.jsx)("div",{className:"_dsplFlx w_100prc",style:{marginTop:19}}),(0,d.jsx)(h,{label:"Gastos de Salario",onChange:o,keyFld:"salary",item:a}),(0,d.jsx)(h,{label:"Gastos en Seguro Social ",onChange:o,keyFld:"socialsecurity_tax_expenses",item:a}),(0,d.jsx)(h,{label:"Gastos en Medicare",onChange:o,keyFld:"medicare_tax_expenses",item:a}),(0,d.jsx)(h,{label:"Cheques a futuro para la Nomina",onChange:o,keyFld:"futureSlipCheck",item:a})]})};let b={stateTax:{percent:"4.5",account:{}},federalTax:{percent:"14.5",account:{}},cityTax:{percent:"2.2",account:{}},socialSecurity:{account:{},percent:"6.2"},medicareTax:{account:{},percent:"1.45"}}},978:(e,l,a)=>{a.d(l,{Z:()=>d});var s=a(2791),t=(a(4363),a(9760)),i=a(9661),n=a(2350),c=a(184);const o=(0,i.a)(),d=e=>{var l,a;let{data:i,confirm:d,item:r}=e;const[v,u]=(0,s.useState)(0),[m,h]=(0,s.useState)({}),[x,p]=(0,s.useState)(!1);let b=(null===m||void 0===m?void 0:m.account)||(null===r||void 0===r?void 0:r.account),_=(null===m||void 0===m?void 0:m.subAccount)||(null===r||void 0===r?void 0:r.subAccount),g=null===(l=(0,n.bh)("account_ids"))||void 0===l?void 0:l[b],j=null===(a=(0,n.bh)("sub_account_ids"))||void 0===a?void 0:a[_];return(0,c.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"60vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Associar Cuenta"}),(0,c.jsx)("div",{className:"flexSpace"})]}),x?(0,c.jsxs)("div",{className:"_dsplFlx ",style:{margin:"38px 0"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(o,{width:420,handleClick:(e,l)=>{h({account:e,subAccount:l}),p(!1),u((0,n.M5)())}}),(0,c.jsx)("div",{className:"flexSpace"})]}):(0,c.jsx)("div",{className:"_dsplFlx ",style:{margin:"38px 0"},children:(0,c.jsxs)("div",{className:" acc_dtls",children:[(0,c.jsxs)("div",{className:"_dsplFlx",onClick:()=>{p(!0),u((0,n.M5)())},children:[(0,c.jsx)("div",{className:"code",style:{color:"#646cff"},children:null!==g&&void 0!==g&&g.code?null===g||void 0===g?void 0:g.code:"Selecionar cuentas"}),(0,c.jsx)("div",{className:"name",children:null===g||void 0===g?void 0:g.name})]}),j?(0,c.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,c.jsx)("div",{className:"code",children:null===j||void 0===j?void 0:j.subAccount}),(0,c.jsx)("div",{className:"name",children:null===j||void 0===j?void 0:j.subAccountName})]}):null,(0,c.jsx)("div",{className:"flexSpace"})]})}),(0,c.jsx)("div",{className:"card",children:(0,c.jsx)("button",{onClick:()=>{d&&d(m),(0,t.CloseModal)({id:i.modalID})},children:"Associar"})})]})}},810:(e,l,a)=>{a.d(l,{Z:()=>d});var s=a(2791),t=a(2350),i=a(2647),n=(a(1636),a(4050)),c=a(184);const o=(0,i.kp)(),d=e=>{var l;let{handleClick:a}=e;const[i,d]=(0,s.useState)(!1),[v,u]=(0,s.useState)(0),[m,h]=(0,s.useState)(!1),[x,p]=(0,s.useState)([]),b=(0,s.useRef)();(0,s.useEffect)((()=>{i||(d(!0),(0,n.ZX)(_))}));const _=e=>{u((0,t.M5)())},g=e=>{a(e),b.current.clearTx()};return(0,c.jsx)("div",{children:(0,c.jsx)(o,{placeholder:"associar una cuenta",width:420,fetchData:e=>{p((0,t.MA)((0,t.bh)("account_list"),e)),m&&h(!1)},loading:m,change:e=>{!m&&h(!0)},callempty:e=>{p([]),m&&h(!1)},ref:b,children:(0,c.jsx)("div",{className:"",children:x&&(null===(l=(0,t._2)(x))||void 0===l?void 0:l.map((e=>(0,c.jsx)(r,{data:x[e],elmId:e,selectItem:g},e))))})})})},r=e=>{let{data:l,selectItem:a}=e;return(0,c.jsx)("div",{className:"item_acc",children:(0,c.jsx)("div",{className:"_dsplFlx account_item_box account_header",children:(0,c.jsxs)("div",{className:"_dsplFlx",onClick:()=>a(null===l||void 0===l?void 0:l.accountId,null),children:[(0,c.jsx)("div",{className:"code",children:null===l||void 0===l?void 0:l.code}),(0,c.jsx)("div",{className:"name",children:null===l||void 0===l?void 0:l.name})]})})})}},4304:(e,l,a)=>{a.d(l,{lp:()=>n,NK:()=>i});a(2791);var s=a(1087),t=a(184);const i=e=>{let{clickHandler:l,label:a,navTo:i}=e;return(0,t.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:l,children:(0,t.jsx)(s.OL,{className:" jaqJnq",to:i,children:a})})},n=e=>{let{children:l}=e;return(0,t.jsx)("div",{className:"jRutKh",children:(0,t.jsx)("div",{className:"jSvsvz",children:(0,t.jsx)("div",{className:"jzcvbH",children:(0,t.jsx)("div",{className:" kfqEsq",children:l})})})})}},1636:()=>{}}]);
//# sourceMappingURL=2079.547e5311.chunk.js.map