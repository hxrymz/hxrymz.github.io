"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5686],{5281:(e,l,a)=>{a.d(l,{Z:()=>n});var s=a(2791),r=a(184);class t extends s.Component{constructor(){super(),this.state={scrollPosition:null},this.handleInterval=this.handleInterval.bind(this),this.handleRequestAnimationFrame=this.handleRequestAnimationFrame.bind(this)}componentWillMount(){this.intervalID=setInterval(this.handleInterval,50)}componentWillUnmount(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}getWindowScrollTop(){return window.pageYOffset||document.documentElement.scrollTop}handleInterval(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}handleRequestAnimationFrame(){const{scrollPosition:e}=this.state,l=this.getWindowScrollTop();l!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(l),this.setState({scrollPosition:l}))}render(){return(0,r.jsx)(r.Fragment,{})}}const n=t},5686:(e,l,a)=>{a.r(l),a.d(l,{default:()=>y});var s=a(2791),r=a(2350),t=a(2647),n=(a(1e3),a(3588)),i=a(2692),o=a(4050),c=a(7689),d=a(5281),h=a(9760),m=a(15),p=a(8779),v=a(184);const u=(0,t.LA)(),_=(0,i.FP)(),x=(0,t.Vg)(),b=(0,i.LO)(),g=(0,t.PU)(),j=(0,t.tW)(),f=(0,t.YZ)(),N="collComprobantes2list",y=e=>{var l,a,t,i,d,y,w,I;let{}=e;const[,F]=(0,s.useState)(0),[D,z]=(0,s.useState)(64),[A,S]=(0,s.useState)(!1),[T,M]=(0,s.useState)(!1),[E,B]=(0,s.useState)(!1),q=(0,s.useRef)(!1),O=(0,s.useRef)(!1),W=(0,s.useRef)(null),H=(0,s.useRef)(null);let Z=(0,c.TH)();const L=(0,c.s0)(),P=null===(l=Z.search)||void 0===l||null===(a=l.split("?"))||void 0===a?void 0:a[1],U=(0,r.mB)(P);(0,s.useEffect)((()=>{setTimeout((()=>{null!==U&&void 0!==U&&U.cId&&((0,r.Rz)("search_acc_record",null===U||void 0===U?void 0:U.cId),(0,n.N$)(Y)),(0,o.Ht)("comp_under_review","comp_under_review",G)}),350)}),[null===U||void 0===U?void 0:U.cId]),(0,s.useEffect)((()=>{q.current||(q.current=!0,F((0,r.M5)()),(0,o._0)(G),(0,o.ZX)(J),(0,o.Ht)("global_accounts","global_account_params",G))}));const V=e=>{var l,a;null===W||void 0===W||null===(l=W.current)||void 0===l||l.setAttribute("show",e),null===H||void 0===H||null===(a=H.current)||void 0===a||a.setAttribute("loading",e)},K=()=>{},Y=()=>{let e={...(0,r.bh)("comprobante_by_doc")};(0,r.Rz)(N,e),(0,r.bh)("has_filter_review")&&A?(0,r.Rz)(N,R(e)):(0,r.bh)("has_filter_comp_error")&&T&&(0,r.Rz)(N,k(e)),G()},J=()=>{(0,r.Rz)("comprobante_list",null),(0,r.Rz)("comprobante_by_doc",null),Y()},$=e=>{e?O.current||(O.current=e,V(e)):O.current&&(O.current=e,V(e))},G=async(e,l)=>{$(!1),64!==D?z(64):F((0,r.M5)())},X=()=>{z((e=>e+64))},Q=e=>{if($(!0),null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){let l={...e};l.initDate=l.initDate-100,l.lastDate=l.lastDate+8638e4,(0,r.Rz)("date_range_comps",l)}(0,n.Ng)(Y)};let ee=(null===(t=(0,r.bh)("date_range_comps"))||void 0===t?void 0:t.initDate)&&(0,r.sJ)(null===(i=(0,r.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)+" - "+(0,r.sJ)(null===(d=(0,r.bh)("date_range_comps"))||void 0===d?void 0:d.lastDate);const le=()=>{$(!0),(0,m.OpenToast)({text:"Verificacion de comprobantes completada",timeout:3500}),F((0,r.M5)()),(0,r.bh)("showAllCmpbnt")&&Y()},ae=()=>{(0,n.ly)(le)},se=()=>{F((0,r.M5)())},re=()=>{(0,n.ly)(se)},te=()=>{L({search:""})},ne=e=>{let l={};l.id=e,l.zIndex=490,l.height="40vh",l.props={minHeight:"1vh",overlay:!0,closeEvent:()=>{}};let a=(0,v.jsxs)("div",{children:[(0,v.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Cerrando el A\xf1o contable"}),(0,v.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Generando el asiento de apertura"})]}),s=(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"centerBx",style:{padding:4,marginRight:20},children:(0,v.jsx)(j,{stroke:"var(--hrm_palette-selected-nav-text)",size:24,strokeW:8})}),(0,v.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Terminando Cierre de A\xf1o !!!"})]});l.content=(0,v.jsx)(p.Z,{label:s,labelColor:"var(--hrm_palette-selected-nav-text)",body:a,btnConfirm:"OK",confirm:ae,done:e=>{e&&(0,h.CloseModal)({id:e})}}),(0,h.OpenModal)(l)},ie=e=>{let l=(0,r.bh)("lastTimeCallModal")||0;if(Date.now()>l){var a,s;(0,r.Rz)("lastTimeCallModal",Date.now()+320);const l=null===(a=Z.search)||void 0===a||null===(s=a.split("?"))||void 0===s?void 0:s[1],t=(0,r.mB)(l);null!==t&&void 0!==t&&t.cId&&(null===t||void 0===t?void 0:t.cId)===e.comprobanteId||L({search:"?cId=".concat(e.comprobanteId)}),(0,r.Rz)("show_comprobante",e);let n={zIndex:450,height:"80vh"};n.props={minHeight:"1vh",overlay:!0,closeEvent:te},n.content=(0,v.jsx)(_,{confirm:re,item:e,confirmYearClose:ne}),B(!1),(0,h.OpenModal)(n)}};return(0,v.jsxs)("div",{className:"",children:[(0,v.jsxs)("div",{className:"accounts_header",children:[(0,v.jsx)("h2",{children:"Comprobantes"}),null!==(y=(0,r.Ch)()[(0,r.bh)("date_current_year")])&&void 0!==y&&y.isClosed?null:(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{children:(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:e=>{L({pathname:"/entries"})},children:"Agregar Comprobantes"})}),(0,v.jsx)("div",{children:(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}},l=(0,v.jsxs)("div",{children:[(0,v.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Esta funcion consume recursos y puede tomar un tiempo"}),(0,v.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Esta seguro que desea ejecutarlo ???"})]}),a=(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"centerBx",children:(0,v.jsx)(g,{name:"alert",color:"var(--hrm_palette-selected-nav-text)"})}),(0,v.jsx)("h4",{className:"",style:{padding:4,margin:0},children:"Revisar comprobantes!!!"})]});e.content=(0,v.jsx)(p.Z,{label:a,labelColor:"var(--hrm_palette-selected-nav-text)",body:l,btnConfirm:"OK",confirm:ae}),(0,h.OpenModal)(e)},children:"Revisar Comprobantes"})}),(0,v.jsx)("div",{className:"",children:E?(0,v.jsxs)("div",{className:"icon_compr _dsplFlx",style:{marginTop:10,marginRight:15},children:[(0,v.jsx)("div",{className:"lbl_saving ",children:"Calculando Asiento ..."}),(0,v.jsx)(j,{stroke:"var(--hrm_palette-blue-purple)",size:24,strokeW:8})]}):(0,v.jsx)("div",{children:(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{B(!0),(0,n.g5)(ie)},children:"Calcular Asiento de Apertura"})})}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,v.jsx)(f,{initvalue:(0,r.bh)("showAllCmpbnt"),keyCode:57,updChange:e=>{return l=e,(0,r.Rz)("showAllCmpbnt",l),void F((0,r.M5)());var l}}),(0,v.jsx)("span",{className:"checklabel",children:"Mostar Todos"})]})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,v.jsx)(x,{placeholder:"Buscar ....",width:360,obs:F,fetchData:e=>{(0,n.N$)(Y)},change:e=>{$(!0)},callempty:J,keyFlds:"search_acc_record"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"total_comprobante_title",children:"No de Comprobantes:"}),(0,v.jsx)("div",{className:"total_comprobante gray",children:(0,v.jsx)("span",{children:null===(w=(0,r._2)((0,r.bh)(N)))||void 0===w?void 0:w.length})})]})]})]}),(0,v.jsxs)("div",{className:"_dsplFlx ",style:{marginBottom:14,maxWidth:500},children:[(0,v.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:()=>{var e,l;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,v.jsx)(u,{onConfirm:Q,init:null===(e=(0,r.bh)("date_range_comps"))||void 0===e?void 0:e.initDate,last:null===(l=(0,r.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,isRange:!0,colors:{"--calendar-primary-color":"var(--hrm_palette-blue-purple)","--calendar-primary-backcolor":"var(--primary-light)","--calendar-light-backcolor":"var(--hrm_palette-general-background-b)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--disabled)","--calendar-light-200":"var(--dark-800)","--calendar-light-100":"var(--dark-900)","--calendar-dark-800":"var(--hrm_palette-blue-purple_100)","--calendar-white-100":"var(--light-100)","--calendar-white":"var(--dark-700)","--calendar-selected_lbl_color":"var(--light-400)","--calendar-selected_lbl_color":"var(--primary-blue--color-30)"}}),(0,h.OpenModal)(a)},children:[(0,v.jsx)("div",{className:"lbl date",children:ee||"Fecha"}),(0,v.jsx)(g,{name:"calendar",color:"#66666"})]}),(0,r.bh)("has_filter_review")?(0,v.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":A?"var(--hrm_palette-color-orange-800)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":A?"var(--hrm_palette-color-orange-100)":"var(--hrm_palette-success-100)"},onClick:()=>{let e={...(0,r.bh)("comprobante_by_doc")};(0,r.Rz)(N,e),(0,r.bh)("has_filter_review")&&!A&&(0,r.Rz)(N,R(e)),S(!A)},children:[(0,v.jsx)("div",{className:"lbl",children:A?"En Revision":"Todos"}),(0,v.jsx)(g,{name:A?"alert":"success",color:"#66666"})]}):null,(0,r.bh)("has_filter_comp_error")?(0,v.jsxs)("div",{className:"filter_cmp_btn _dsplFlx",style:{"--filter_cmp_btn_color":T?"var( --hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)","--filter_cmp_btn_bck-color":T?"var( --hrm_palette-selected-nav-text-100)":"var(--hrm_palette-success-100)",marginLeft:12},onClick:()=>{let e={...(0,r.bh)("comprobante_by_doc")};(0,r.Rz)(N,e),(0,r.bh)("has_filter_comp_error")&&!T&&(0,r.Rz)(N,k(e)),M(!T)},children:[(0,v.jsx)("div",{className:"lbl",children:T?"Contiene errors":"OK"}),(0,v.jsx)(g,{name:T?"alert":"success",color:"#66666"})]}):null,(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsxs)("div",{className:"accounts_container ",children:[(0,v.jsx)("div",{style:{height:55},children:(0,v.jsx)(C,{})}),(0,v.jsxs)("div",{className:"loading_animation_container",style:{marginTop:2},ref:W,children:[(0,v.jsx)("div",{className:"load_animation"}),(0,v.jsxs)("div",{className:"_dsplFlx",style:{marginTop:32},children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsxs)("div",{className:"icon_compr align_itm ",children:[(0,v.jsx)("div",{className:"lbl_saving",children:"Loading ..."}),(0,v.jsx)(j,{stroke:"#646cff",size:24,strokeW:8})]}),(0,v.jsx)("div",{className:"flexSpace"})]})]}),(0,v.jsx)("div",{id:"scollVhComprobantesList",className:"clients_container",ref:H,children:(0,r.bh)(N)&&(null===(I=(0,r._2)((0,r.bh)(N)))||void 0===I?void 0:I.map(((e,l)=>(0,v.jsx)(b,{data:(0,r.bh)(N)[e],elmId:e,openUpdateView:K,handleRefreshAll:J,inReview:A,hasError:T,updRvw:F,range2Scroll:D-l===32,show:l<D,inx:l,updRange:X},e))))})]})]})},C=e=>{let{}=e;const[l,a]=(0,s.useState)(!1);return(0,v.jsxs)("div",{className:"header_tbl ".concat(l?"_floating":""),children:[(0,v.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,v.jsxs)("div",{className:"_dsplFlx tr_bar_90",children:[(0,v.jsx)("div",{className:" tr_bar_20",children:"Fecha"}),(0,v.jsx)("div",{className:" tr_bar_25",children:"Comprobante"}),(0,v.jsx)("div",{className:" tr_bar_55",children:"Descripcion"})]}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"icon tr_bar_5"})]}),(0,v.jsx)(d.Z,{scrollhandler:e=>{e>295?!l&&a(!0):l&&a(!1)}})]})};function R(e){var l=[];return(0,r._2)(e).map((a=>{var s,t;let n=e[a];null!==(s=(0,r.bh)("comp_under_review"))&&void 0!==s&&null!==(t=s.inReview)&&void 0!==t&&t[null===n||void 0===n?void 0:n.comprobanteId]&&l.push(n)})),l}function k(e){var l=[];return(0,r._2)(e).map((a=>{var s,t,n;let i=e[a];(null!==(s=(0,r.bh)("comp_under_review"))&&void 0!==s&&null!==(t=s.hasError)&&void 0!==t&&t[null===i||void 0===i?void 0:i.comprobanteId]||null!==(n=(0,r.bh)("comprobante_w_erros"))&&void 0!==n&&n[null===i||void 0===i?void 0:i.comprobanteId])&&l.push(i)})),l}},8779:(e,l,a)=>{a.d(l,{Z:()=>t});a(2791),a(1534);var s=a(9760),r=a(184);const t=e=>{let{data:l,confirm:a,label:t,labelColor:n,body:i,btnConfirm:o}=e;const{modalID:c}=l,d=e=>{(0,s.CloseModal)({id:c})};return(0,r.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",minWidth:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",style:n?{color:n}:null,children:t}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,r.jsx)("span",{children:i||"Una vez eliminado no podra ser recuperado"})}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"group_title addBtn",onClick:d,children:"Cancelar"}),(0,r.jsx)("p",{className:"group_title addBtn red",onClick:()=>{a&&a(),d()},children:o||"Eliminar"})]})]})}},1e3:()=>{},1534:()=>{}}]);
//# sourceMappingURL=5686.f3c6fd0d.chunk.js.map