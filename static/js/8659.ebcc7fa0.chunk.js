"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8659,9760],{9760:(e,l,s)=>{s.r(l),s.d(l,{CloseModal:()=>r,OpenModal:()=>c,default:()=>o});var a=s(2791),t=s(5408),i=s(2350),n=s(184);const d="listDialog_mdh392",o=()=>{const e=(0,i.bh)("listDialog")||{};(0,t.Z)(d);let l=Object.keys(e);return(0,n.jsx)(n.Fragment,{children:l.map(((l,s)=>{let t=e[l];if(t&&t.visible){let e={};t.height&&(e.heigth=t.height),t.width,t.zIndex&&(e.zIndex=t.zIndex-1);let s={zIndex:t.zIndex},i=null,d=t.data;return t.content&&(i=a.cloneElement(t.content,{data:d})),(0,n.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,n.jsx)("div",{className:"ltr-hoe9xz",children:(0,n.jsx)("div",{className:"ltr-1wao6ny",style:s,id:l,children:i})}),t.data.overlay?(0,n.jsx)("div",{className:"DialogHRMOverlay ".concat(t.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},c=e=>{let l=(0,i.bh)("listDialog")||{},s=(0,i.M5)();l[s]||(l[s]={}),l[s].visible=!0;let a={};e.props?(a=e.props,a.modalID=s):a.modalID=s;let t=document.getElementsByTagName("body")[0];null!==t&&void 0!==t&&t.style&&(t.style.overflowY="hidden"),l[s].isView=e.isView,l[s].observeResize=e.observeResize,l[s].observeResize&&(l[s].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(s,"']")),a=e&&e.getBoundingClientRect();a&&(a.width===l[s].width&&a.height===l[s].height||(l[s].height=a.height+10,l[s].width=a.width,(0,i.Rz)("listDialog",l),(0,i.wt)(d)))}),200)),l[s].display=!0,e.zIndex&&(l[s].zIndex=e.zIndex),e.height&&(l[s].height=e.height),e.width&&(l[s].width=e.width),e.content&&(l[s].content=e.content),l[s].data=a,(0,i.Rz)("listDialog",l),(0,i.wt)(d),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,i.Rz)("modalOpen",s),(0,i.wt)(d)}),125)},r=e=>{let l=(0,i.bh)("listDialog")||{},s=e.id;if(l[s]){var a,t,n;l[s].observeResize&&l[s].observeInterval&&clearInterval(l[s].observeInterval),l[s].display=!1,null===(a=l[s])||void 0===a||null===(t=a.data)||void 0===t||null===(n=t.closeEvent)||void 0===n||n.call(t),(0,i.Rz)("listDialog",l),delete l[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,i.wt)(d),setTimeout((()=>{delete l[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,i.Rz)("modalOpen",null)}),750)}}},8659:(e,l,s)=>{s.r(l),s.d(l,{default:()=>_});var a=s(2791),t=s(2350),i=s(2647),n=s(9760),d=(s(7889),s(24)),o=s(713),c=s(4050),r=s(8779),h=s(7852),m=s(184);const v=(0,i.PU)(),x=(0,d.kZ)(),p=e=>{var l;let{data:s,handleRefreshAll:i}=e;const[d,c]=(0,a.useState)(!1),[p,u]=(0,a.useState)(0);(0,a.useEffect)((()=>{d||(c(!0),u((0,t.M5)()))}),[d]);const g=()=>{u((0,t.M5)())},j=()=>{(0,o.QJ)(g)},_=()=>{};(0,o.Zj)(null===(l=(0,t.bh)("sub_movement_group"))||void 0===l?void 0:l[s.movementId],"subProduct");return(0,m.jsx)("div",{className:"item_acc",children:(0,m.jsxs)("div",{className:"_dsplFlx item_box movement_header",children:[(0,m.jsxs)("div",{className:"_dsplFlx  tr_bar tr_bar_70",onClick:async()=>{},children:[(0,m.jsx)("div",{className:"name tr_bar tr_bar_30",children:(0,t.sJ)(null===s||void 0===s?void 0:s.date)}),(0,m.jsx)("div",{className:"code tr_bar tr_bar_25",style:{marginLeft:14},children:null===s||void 0===s?void 0:s.comprobanteId}),(0,m.jsx)("div",{className:"code tr_bar tr_bar_20",style:{marginLeft:14,textAlign:"right",color:(null===s||void 0===s?void 0:s.amount)<0?"#c62828":""},children:(1*(null===s||void 0===s?void 0:s.amount)).toFixed(2)}),(0,m.jsx)("div",{className:"cod tr_bar tr_bar_40",style:{marginLeft:14},children:null===s||void 0===s?void 0:s.document})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:" addSbAcc purple",onClick:()=>(e=>{(0,t.Rz)("view_product_entry_comprobante",s);let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,m.jsx)(x,{confirm:j,item:s}),(0,n.OpenModal)(l)})(),children:"Details"}),(0,t.I0)()?(0,m.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:()=>{let e=(0,t.bh)("lastTimeCallModal")||0;if((0,t.I0)()){if(Date.now()>e){(0,t.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,m.jsx)(r.Z,{label:"Eliminar Movimiento",confirm:_,item:s}),(0,n.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,m.jsx)(h.Z,{}),(0,n.OpenModal)(e)}},children:(0,m.jsx)(v,{name:"outline_delete",color:"#c62828"})}):null]})})},u=(0,i.Vg)(),g=(0,d.$d)(),j=(0,d.lA)(),_=e=>{var l,s;let{data:i,elmId:d,updObs:r}=e;const[h,v]=(0,a.useState)(!1),[x,_]=(0,a.useState)(0),[b,N]=(0,a.useState)(!1);(0,a.useEffect)((()=>{h||((0,t.Rz)("movements_list",[]),(0,t.Rz)("movements_ids",{}),(0,t.Rz)("searchMovQry",null),v(!0),_((0,t.M5)()),(0,o.$P)(I),(0,c.Ht)("global_accounts","global_account_params",r))}));const f=()=>{},y=e=>{(0,o.$P)(I)},I=async(e,l)=>{_((0,t.M5)()),N(!1)},w=()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(j,{}),(0,n.OpenModal)(e)};return(0,m.jsxs)("div",{className:"",children:[(0,m.jsxs)("div",{className:"accounts_header",children:[(0,m.jsx)("h2",{children:"Movements"}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.I0)()?(0,m.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(g,{}),(0,n.OpenModal)(e)},children:"Entradas"}):null,(0,t.I0)()?(0,m.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:w,children:"Salidas"}):null,(0,t.I0)()?(0,m.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:w,children:"Locaciones"}):null]})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,m.jsx)(u,{placeholder:"Buscar ....",width:560,obs:_,fetchData:e=>{N(!0),(0,o.$P)(I)},loading:b,change:e=>{!b&&N(!0)},callempty:y,keyFlds:"searchMovQry"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"total_comprobante_title",children:"No de Movientos:"}),(0,m.jsx)("div",{className:"total_comprobante gray",children:(0,m.jsx)("span",{children:null===(l=(0,t._2)((0,t.bh)("movements_list")))||void 0===l?void 0:l.length})})]})]}),(0,m.jsx)("div",{className:"movements_container scollVh",children:(0,t.bh)("movements_list")&&(null===(s=(0,t._2)((0,t.bh)("movements_list")))||void 0===s?void 0:s.map((e=>(0,m.jsx)(p,{data:(0,t.bh)("movements_list")[e],elmId:e,openUpdateView:f,handleRefreshAll:y},e))))})]})}},7852:(e,l,s)=>{s.d(l,{Z:()=>i});s(2791),s(1534);var a=s(9760),t=s(184);const i=e=>{let{data:l,confirm:s,handleClick:i,close:n}=e;const{modalID:d}=l;return(0,t.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,t.jsx)("div",{className:"flexSpace"})]}),(0,t.jsx)("div",{className:"_dsplFlx ",children:(0,t.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,a.CloseModal)({id:d})},children:"OK"})]})]})}},8779:(e,l,s)=>{s.d(l,{Z:()=>i});s(2791),s(1534);var a=s(9760),t=s(184);const i=e=>{let{data:l,confirm:s,label:i,close:n}=e;const{modalID:d}=l,o=e=>{(0,a.CloseModal)({id:d})};return(0,t.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title",children:i}),(0,t.jsx)("div",{className:"flexSpace"})]}),(0,t.jsx)("div",{className:"_dsplFlx ",children:(0,t.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("p",{className:"group_title addBtn",onClick:o,children:"Cancelar"}),(0,t.jsx)("p",{className:"group_title addBtn red",onClick:()=>{s(),o()},children:"Eliminar"})]})]})}},7889:()=>{},1534:()=>{}}]);
//# sourceMappingURL=8659.ebcc7fa0.chunk.js.map