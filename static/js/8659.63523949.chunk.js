"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8659],{8659:(e,l,s)=>{s.r(l),s.d(l,{default:()=>b});var a=s(2791),n=s(2350),d=s(2647),t=s(9760),i=(s(7889),s(24)),o=s(713),c=s(4050),r=s(8779),m=s(7852),h=s(184);const v=(0,d.PU)(),x=(0,i.kZ)(),p=e=>{var l,s;let{data:d,handleRefreshAll:i}=e;const[c,p]=(0,a.useState)(!1),[u,_]=(0,a.useState)(0);(0,a.useEffect)((()=>{c||(p(!0),_((0,n.M5)()))}),[c]);const j=()=>{_((0,n.M5)())},b=()=>{(0,o.QJ)(j)},f=()=>{};(0,o.Zj)(null===(l=(0,n.bh)("sub_movement_group"))||void 0===l?void 0:l[d.movementId],"subProduct");return(0,h.jsx)("div",{className:"item_acc",children:(0,h.jsxs)("div",{className:"_dsplFlx item_box movement_header",children:[(0,h.jsxs)("div",{className:"_dsplFlx  tr_bar tr_bar_70",onClick:async()=>{},children:[(0,h.jsx)("div",{className:"name tr_bar tr_bar_30",children:(0,n.sJ)(null===d||void 0===d?void 0:d.date)}),(0,h.jsx)("div",{className:"code tr_bar tr_bar_25",style:{marginLeft:14},children:null===d||void 0===d?void 0:d.comprobanteId}),(0,h.jsx)("div",{className:"code tr_bar tr_bar_20",style:{marginLeft:14,textAlign:"right",color:(null===d||void 0===d?void 0:d.amount)<0?"#c62828":""},children:(1*(null===d||void 0===d?void 0:d.amount)).toFixed(2)}),(0,h.jsx)("div",{className:"cod tr_bar tr_bar_40",style:{marginLeft:14},children:null===d||void 0===d?void 0:d.document})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:" addSbAcc purple",onClick:()=>(e=>{(0,n.Rz)("view_product_entry_comprobante",d);let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,h.jsx)(x,{confirm:b,item:d}),(0,t.OpenModal)(l)})(),children:"Details"}),(0,n.I0)()?null!==(s=(0,n.Ch)()[(0,n.bh)("date_current_year")])&&void 0!==s&&s.isClosed?null:(0,h.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:()=>{let e=(0,n.bh)("lastTimeCallModal")||0;if((0,n.I0)()){if(Date.now()>e){(0,n.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,h.jsx)(r.Z,{label:"Eliminar Movimiento",confirm:f,item:d}),(0,t.OpenModal)(e)}}else{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,h.jsx)(m.Z,{}),(0,t.OpenModal)(e)}},children:(0,h.jsx)(v,{name:"outline_delete",color:"#c62828"})}):null]})})},u=(0,d.Vg)(),_=(0,i.$d)(),j=(0,i.lA)(),b=e=>{var l,s,d;let{data:i,elmId:r,updObs:m}=e;const[v,x]=(0,a.useState)(!1),[b,f]=(0,a.useState)(0),[g,N]=(0,a.useState)(!1);(0,a.useEffect)((()=>{v||((0,n.Rz)("movements_list",[]),(0,n.Rz)("movements_ids",{}),(0,n.Rz)("searchMovQry",null),x(!0),f((0,n.M5)()),(0,o.$P)(k),(0,c.Ht)("global_accounts","global_account_params",m))}));const y=()=>{},C=e=>{(0,o.$P)(k)},k=async(e,l)=>{f((0,n.M5)()),N(!1)};return(0,h.jsxs)("div",{className:"",children:[(0,h.jsxs)("div",{className:"accounts_header",children:[(0,h.jsx)("h2",{children:"Movements"}),null!==(l=(0,n.Ch)()[(0,n.bh)("date_current_year")])&&void 0!==l&&l.isClosed?null:(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.I0)()?(0,h.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(_,{}),(0,t.OpenModal)(e)},children:"Entradas"}):null,(0,n.I0)()?(0,h.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(j,{}),(0,t.OpenModal)(e)},children:"Salidas"}):null]})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,h.jsx)(u,{placeholder:"Buscar ....",width:560,obs:f,fetchData:e=>{N(!0),(0,o.$P)(k)},loading:g,change:e=>{!g&&N(!0)},callempty:C,keyFlds:"searchMovQry"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"total_comprobante_title",children:"No de Movientos:"}),(0,h.jsx)("div",{className:"total_comprobante gray",children:(0,h.jsx)("span",{children:null===(s=(0,n._2)((0,n.bh)("movements_list")))||void 0===s?void 0:s.length})})]})]}),(0,h.jsx)("div",{className:"movements_container scollVh",children:(0,n.bh)("movements_list")&&(null===(d=(0,n._2)((0,n.bh)("movements_list")))||void 0===d?void 0:d.map((e=>(0,h.jsx)(p,{data:(0,n.bh)("movements_list")[e],elmId:e,openUpdateView:y,handleRefreshAll:C},e))))})]})}},7852:(e,l,s)=>{s.d(l,{Z:()=>d});s(2791),s(1534);var a=s(9760),n=s(184);const d=e=>{let{data:l,confirm:s,handleClick:d,close:t}=e;const{modalID:i}=l;return(0,n.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:"Lo sentimos"}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsx)("div",{className:"_dsplFlx ",children:(0,n.jsx)("span",{children:"no tiene acceso a esta operacion"})}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{(0,a.CloseModal)({id:i})},children:"OK"})]})]})}},8779:(e,l,s)=>{s.d(l,{Z:()=>d});s(2791),s(1534);var a=s(9760),n=s(184);const d=e=>{let{data:l,confirm:s,label:d,labelColor:t,body:i,btnConfirm:o}=e;const{modalID:c}=l,r=e=>{(0,a.CloseModal)({id:c})};return(0,n.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",minWidth:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,n.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.jsx)("p",{className:"form_title",style:t?{color:t}:null,children:d}),(0,n.jsx)("div",{className:"flexSpace"})]}),(0,n.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,n.jsx)("span",{children:i||"Una vez eliminado no podra ser recuperado"})}),(0,n.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,n.jsx)("div",{className:"flexSpace"}),(0,n.jsx)("p",{className:"group_title addBtn",onClick:r,children:"Cancelar"}),(0,n.jsx)("p",{className:"group_title addBtn red",onClick:()=>{s&&s(),r()},children:o||"Eliminar"})]})]})}},7889:()=>{},1534:()=>{}}]);
//# sourceMappingURL=8659.63523949.chunk.js.map