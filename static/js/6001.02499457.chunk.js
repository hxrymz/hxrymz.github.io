"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[6001,9760],{9760:(e,t,l)=>{l.r(t),l.d(t,{CloseModal:()=>c,OpenModal:()=>r,default:()=>o});var s=l(2791),a=l(5408),i=l(2350),n=l(184);const d="listDialog_mdh392",o=()=>{const e=(0,i.bh)("listDialog")||{};(0,a.Z)(d);let t=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:t.map(((t,l)=>{let a=e[t];if(a&&a.visible){let e={};a.height&&(e.heigth=a.height),a.width,a.zIndex&&(e.zIndex=a.zIndex-1);let l={zIndex:a.zIndex},i=null,d=a.data;return a.content&&(i=s.cloneElement(a.content,{data:d})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:l,id:t,children:i})}),a.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(a.visible?"active":""),onClick:()=>{var e;e=t,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},t)}}))})},r=e=>{let t=(0,i.bh)("listDialog")||{},l=(0,i.M5)();t[l]||(t[l]={}),t[l].visible=!0;let s={};e.props?(s=e.props,s.modalID=l):s.modalID=l;let a=document.getElementsByTagName("body")[0];null!==a&&void 0!==a&&a.style&&(a.style.overflowY="hidden"),t[l].isView=e.isView,t[l].observeResize=e.observeResize,t[l].observeResize&&(t[l].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(l,"']")),s=e&&e.getBoundingClientRect();s&&(s.width===t[l].width&&s.height===t[l].height||(t[l].height=s.height+10,t[l].width=s.width,(0,i.Rz)("listDialog",t),(0,i.wt)(d)))}),200)),t[l].display=!0,e.zIndex&&(t[l].zIndex=e.zIndex),e.height&&(t[l].height=e.height),e.width&&(t[l].width=e.width),e.content&&(t[l].content=e.content),t[l].data=s,(0,i.Rz)("listDialog",t),(0,i.wt)(d),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",l),(0,i.wt)(d)}),125)},c=e=>{let t=(0,i.bh)("listDialog")||{},l=e.id;if(t[l]){var s,a,n;t[l].observeResize&&t[l].observeInterval&&clearInterval(t[l].observeInterval),t[l].display=!1,null===(s=t[l])||void 0===s||null===(a=s.data)||void 0===a||null===(n=a.closeEvent)||void 0===n||n.call(a),(0,i.Rz)("listDialog",t),delete t[l],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(d),setTimeout((()=>{delete t[l],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},6001:(e,t,l)=>{l.r(t),l.d(t,{default:()=>p});var s=l(2791),a=l(2350),i=l(2647),n=l(9760),d=(l(4719),l(9661)),o=l(3728),r=l(4050),c=l(7689),h=l(184);const v=(0,i.Vg)(),u=(0,d.tv)(),m=(0,d._F)(),g=(0,d.dO)(),p=e=>{var t;let{data:l,elmId:i,updObs:d}=e;const[p,b]=(0,s.useState)(!1),[y,I]=(0,s.useState)(0),[w,x]=(0,s.useState)(!1),[z,_]=(0,s.useState)(!1),[f,j]=(0,s.useState)(!1),N=(0,c.s0)();(0,s.useEffect)((()=>{p||(b(!0),I((0,a.M5)()),(0,r.ZX)(E))}));const R=()=>{x(!1),_(!0)},k=()=>{N({pathname:"/accounting-ledger"})},D=e=>{(0,o.ph)(E)},E=async(e,t)=>{I((0,a.M5)()),j(!1)};return(0,h.jsxs)("div",{className:"",children:[(0,h.jsxs)("div",{className:"accounts_header",children:[(0,h.jsx)("h2",{children:"Comprobantes Parametrizados"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(v,{placeholder:"Buscar",width:360,obs:I,fetchData:e=>{j(!0),(0,o.yq)(E)},loading:f,change:e=>{!f&&j(!0)},callempty:D,keyFlds:"search_entry_qry"}),(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{_(!1);let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(u,{confirm:D}),(0,n.OpenModal)(e)},children:"Parametrizar"}),(0,h.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(g,{confirm:k}),(0,n.OpenModal)(e)},children:"Agregar Comprobante Manual"})]})]}),!z&&!w&&(0,h.jsx)("div",{className:"accounts_container scollVh",children:(0,a.bh)("entries_list")&&(null===(t=(0,a._2)((0,a.bh)("entries_list")))||void 0===t?void 0:t.map((e=>(0,h.jsx)(m,{data:(0,a.bh)("entries_list")[e],elmId:e,openUpdateView:R,handleRefreshAll:D},e))))})]})}},3728:(e,t,l)=>{l.d(t,{NA:()=>d,g5:()=>n,ph:()=>a,yq:()=>i});var s=l(2350);const a=async e=>{var t,l;let a=null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.all_entries;a.params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId};const i=(0,s.I7)(a),n=await i;n&&((0,s.Rz)("entries_list",n),(0,s.Rz)("entries_ids",(0,s.ME)(n,"accountingEntryId")),e&&e())},i=async e=>{var t,l;let a=null===(t=(0,s.bh)((0,s.hQ)()))||void 0===t?void 0:t.search_entries;a.params={businessId:null===(l=(0,s.bh)("profileUser"))||void 0===l?void 0:l.businessId,":search":(0,s.bh)("search_entry_qry")};const i=(0,s.I7)(a),n=await i;n&&((0,s.Rz)("entries_list",n),e&&e())},n=async(e,t)=>{var l,a;let i=null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.delete_entries;i.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,accountingEntryId:e};const n=(0,s.I7)(i);await n&&t&&t()},d=async e=>{const t=(0,s.I7)({query:"getLastSequence"}),l=await t;if(l)return l}},4719:()=>{}}]);
//# sourceMappingURL=6001.02499457.chunk.js.map