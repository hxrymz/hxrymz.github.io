"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8632,9760],{9760:(e,l,s)=>{s.r(l),s.d(l,{CloseModal:()=>c,OpenModal:()=>r,default:()=>n});var t=s(2791),a=s(5408),i=s(2350),o=s(184);const d="listDialog_mdh392",n=()=>{const e=(0,i.bh)("listDialog")||{};(0,a.Z)(d);let l=Object.keys(e);return(0,o.jsx)(o.Fragment,{children:l.map(((l,s)=>{let a=e[l];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let s={zIndex:a.zIndex},i=null,d=a.data;return a.content&&(i=t.cloneElement(a.content,{data:d})),(0,o.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,o.jsx)("div",{className:"ltr-hoe9xz",children:(0,o.jsx)("div",{className:"ltr-1wao6ny",style:s,id:l,children:i})}),a.data.overlay?(0,o.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},l)}}))})},r=e=>{let l=(0,i.bh)("listDialog")||{},s=(0,i.M5)();l[s]||(l[s]={}),l[s].visible=!0;let t={};e.props?(t=e.props,t.modalID=s):t.modalID=s;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),l[s].isView=e.isView,l[s].observeResize=e.observeResize,l[s].observeResize&&(l[s].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(s,"']")),t=e&&e.getBoundingClientRect();t&&(t.width===l[s].width&&t.height===l[s].height||(l[s].height=t.height+10,l[s].width=t.width,(0,i.Rz)("listDialog",l),(0,i.wt)(d)))}),200)),l[s].display=!0,e.zIndex&&(l[s].zIndex=e.zIndex),e.height&&(l[s].height=e.height),e.width&&(l[s].width=e.width),e.content&&(l[s].content=e.content),l[s].data=t,(0,i.Rz)("listDialog",l),(0,i.wt)(d),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",s),(0,i.wt)(d)}),125)},c=e=>{let l=(0,i.bh)("listDialog")||{},s=e.id;if(l[s]){var t,a,o;l[s].observeResize&&l[s].observeInterval&&clearInterval(l[s].observeInterval),l[s].display=!1,null===(t=l[s])||void 0===t||null===(a=t.data)||void 0===a||null===(o=a.closeEvent)||void 0===o||o.call(a),(0,i.Rz)("listDialog",l),delete l[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(d),setTimeout((()=>{delete l[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},8632:(e,l,s)=>{s.r(l),s.d(l,{default:()=>x});var t=s(2791),a=s(2350),i=s(2647),o=s(9760),d=(s(2052),s(5114)),n=s(6677),r=s(4050),c=s(9179),h=s(7689),v=s(184);const p=(0,i.Vg)(),m=(0,d.V)(),u=(0,d.nU)(),g=(0,c.UC)(),b=(0,c.QC)(),x=e=>{var l,s;let{data:i,elmId:d,updObs:c}=e;const[x,_]=(0,t.useState)(!1),[y,I]=(0,t.useState)(0),[j,w]=(0,t.useState)(!1),z=(0,h.s0)();(0,t.useEffect)((()=>{x||(_(!0),I((0,a.M5)()),(0,r.Ht)("global_accounts","global_account_params",N))}));const N=()=>{(0,r.ZX)(f)},f=()=>{(0,n.Je)(R)},C=e=>{(0,n.Je)(R)},R=async(e,l)=>{I((0,a.M5)()),w(!1)};return(0,v.jsxs)("div",{className:"provider_dash_board",children:[(0,v.jsxs)("div",{className:"accounts_header",children:[(0,v.jsx)("h2",{children:"Provedores o Clientes"}),(0,a.I0)()?(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,v.jsx)(m,{confimr:C}),(0,o.OpenModal)(e)},children:"Agregar Provedores o Clientes"}),(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,v.jsx)(g,{confimr:()=>{}}),(0,o.OpenModal)(e)},children:"Pagar a Provedores"}),(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,v.jsx)(b,{confimr:()=>{}}),(0,o.OpenModal)(e)},children:"Cobrar a Clientes"}),(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:e=>{z({pathname:"/pay-checks-on-future"})},children:"Cheques a Futuro"})]}):null,(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,v.jsx)(p,{placeholder:"Buscar ....",width:360,obs:I,fetchData:e=>{w(!0),(0,n.UO)(R)},loading:j,change:e=>{!j&&w(!0)},callempty:C,keyFlds:"search_prov"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"total_comprobante_title",children:"No de Provedores:"}),(0,v.jsx)("div",{className:"total_comprobante gray",children:(0,v.jsx)("span",{children:null===(l=(0,a._2)((0,a.bh)("providers_list")))||void 0===l?void 0:l.length})})]})]})]}),(0,v.jsx)("div",{className:"providers_container scollVh",children:(0,a.bh)("providers_list")&&(null===(s=(0,a._2)((0,a.bh)("providers_list")))||void 0===s?void 0:s.map((e=>(0,v.jsx)(u,{data:(0,a.bh)("providers_list")[e],elmId:e,handleRefreshAll:C},e))))})]})}},6677:(e,l,s)=>{s.d(l,{Je:()=>a,Qn:()=>n,UO:()=>i,mQ:()=>d});var t=s(2350);const a=async e=>{var l,s;let a={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.all_prov_cust};a.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId};const i=(0,t.I7)(a),d=await i;d&&((0,t.Rz)("providers_list",o((0,t.jQ)(d),"name",1)),(0,t.Rz)("providers_ids",(0,t.ME)((0,t.jQ)(d),"providerId")),e&&e())},i=async e=>{var l,s;let a={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.search_prov_cust};a.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":(0,t.bh)("search_prov")};const i=(0,t.I7)(a),d=await i;d&&((0,t.Rz)("providers_list",o((0,t.jQ)(d),"name",1)),e&&e())};const o=(e,l,s)=>(0,t.MV)("sortProviders",[e],(()=>e&&e.sort(((e,t)=>{let a=1*e[l],i=1*t[l];return a<i?s?-1:1:a>i?s?1:-1:0})))),d=(e,l)=>(0,t.MV)("sortSubProviders",[e],(()=>e&&e.sort(((e,s)=>{let t=1*e[l],a=1*s[l];return t<a?-1:t>a?1:0})))),n=async(e,l)=>{var s,a;let i={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.delete_prov_cust};i.params={businessId:null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId,providerId:e};const o=(0,t.I7)(i);await o&&l&&l()}},2052:()=>{}}]);
//# sourceMappingURL=8632.589ad7e8.chunk.js.map