/*! For license information please see 595.b67b2b83.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[595],{5281:(e,l,a)=>{a.d(l,{Z:()=>n});var s=a(2791),o=a(184);class t extends s.Component{constructor(){super(),this.state={scrollPosition:null},this.handleInterval=this.handleInterval.bind(this),this.handleRequestAnimationFrame=this.handleRequestAnimationFrame.bind(this)}componentWillMount(){this.intervalID=setInterval(this.handleInterval,50)}componentWillUnmount(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}getWindowScrollTop(){return window.pageYOffset||document.documentElement.scrollTop}handleInterval(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}handleRequestAnimationFrame(){const{scrollPosition:e}=this.state,l=this.getWindowScrollTop();l!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(l),this.setState({scrollPosition:l}))}render(){return(0,o.jsx)(o.Fragment,{})}}const n=t},54:(e,l,a)=>{a.r(l),a.d(l,{default:()=>y});var s=a(2791),o=a(2350),t=a(2647),n=a(9760),i=(a(6021),a(1232)),c=a(9179),d=a(4050),r=(a(8779),a(3588),a(184));const u=(0,c.t8)(),v=((0,t.PU)(),e=>{let{data:l,elmId:a,openUpdateView:t}=e;const[c,d]=(0,s.useState)(!1),[v,h]=(0,s.useState)(0);(0,s.useEffect)((()=>{c||(d(!0),h((0,o.M5)()))}));const p=()=>{h((0,o.M5)())},_=()=>{(0,i.nr)(p)};return(0,r.jsx)("div",{className:"item_acc itm_2_pay",children:(0,r.jsxs)("div",{className:"_dsplFlx operation_item_box",onClick:()=>{(0,o.Rz)("show_comprobante",l);let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,r.jsx)(u,{confirm:_,item:l,accountForm:"Acc2Pay"}),(0,n.OpenModal)(e)},children:[(0,r.jsx)("div",{className:"name",children:null===l||void 0===l?void 0:l.document}),(0,r.jsx)("div",{className:"entryName",children:null===l||void 0===l?void 0:l.entryName}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"code",children:["$",(1*(null===l||void 0===l?void 0:l.amount)).toFixed(2)]}),(0,r.jsx)("div",{className:"flexSpace"})]})})});var h=a(9661),p=a(5281);const _=(0,t.Vg)(),m=((0,c.i5)(),(0,h.LZ)(),(0,t.PU)()),b="Acc2Pay",x=(0,t.tL)(),y=e=>{var l,a;let{data:t,elmId:n,updObs:c}=e;const[u,h]=(0,s.useState)(!1),[p,_]=(0,s.useState)(0),[m,x]=(0,s.useState)(!1),[y,j]=(0,s.useState)(!1);(0,s.useEffect)((()=>{u||(h(!0),(0,o.Rz)("list_show_type_pay","pending"),(0,d.Ht)("global_accounts","global_account_params",g),_((0,o.M5)()),(0,d.ZX)())}));const N=()=>{},g=async(e,l)=>{_((0,o.M5)()),x(!1)};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"accounts_header _dsplFlx",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:"Pagos"})}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsxs)("div",{className:"",style:{maxWidth:"920px",padding:16},children:[(0,r.jsx)("div",{className:"",style:{height:190},children:(0,r.jsx)(f,{handle_getall:e=>{(0,i.nr)((0,o.bh)(b),g)},data:t,cb_result:g,updObs:_,searchCllb:e=>{j(e)}})}),(0,r.jsx)("div",{className:"accounts_container ",children:(null===(l=(0,o.bh)(b))||void 0===l?void 0:l.account)&&(0,o.bh)("toPay_by_doc")&&(null===(a=(0,o._2)((0,o.bh)("toPay_by_doc")))||void 0===a?void 0:a.map((e=>{let l=1*(0,o.bh)("toPay_by_doc")[e].amount;if("done"===(0,o.bh)("list_show_type_pay")&&0===l||"pending"===(0,o.bh)("list_show_type_pay")&&0!==l){let l=(0,o.bh)("toPay_by_doc")[e].document;return!y||l.indexOf(y)>=0?(0,r.jsx)(v,{data:(0,o.bh)("toPay_by_doc")[e],elmId:e,openUpdateView:N},e):null}return null})))})]})]})},f=e=>{var l,a,t,n,i,c,d,u,v,h;let{handle_getall:y,data:f,cb_result:j,updObs:N,searchCllb:g}=e;const[I,P]=(0,s.useState)(0),[A,F]=(0,s.useState)(!1);let w=null===(l=(0,o.bh)("account_ids"))||void 0===l?void 0:l[null===(a=(0,o.bh)(b))||void 0===a?void 0:a.account],S=null===(t=(0,o.bh)("sub_account_ids"))||void 0===t?void 0:t[null===(n=(0,o.bh)(b))||void 0===n?void 0:n.subAccount];let R=(null===(i=(0,o.bh)(b))||void 0===i?void 0:i.account)+"_"+(null===(c=(0,o.bh)(b))||void 0===c?void 0:c.subAccount);return(0,r.jsxs)("div",{className:"menu_pay ".concat(A?"_floating":""),children:[(0,r.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,r.jsxs)("div",{className:" acc_dtls",children:[(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"code",style:{color:"#646cff",cursor:"pointer"},children:null===w||void 0===w?void 0:w.code}),(0,r.jsx)("div",{className:"name",children:null===w||void 0===w?void 0:w.name})]}),(0,r.jsx)("div",{className:"flexSpace"}),S?(0,r.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,r.jsx)("div",{className:"code",children:null===S||void 0===S?void 0:S.subAccount}),(0,r.jsx)("div",{className:"name",children:null===S||void 0===S?void 0:S.subAccountName})]}):null,null!==(d=(0,o.bh)(b))&&void 0!==d&&d.account?(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(x,{data:[{label:"Pendientes",id:"pending"},{label:"Pagados",id:"done"}],active:(0,o.bh)("list_show_type_pay")||"pending",updSelect:e=>(e=>{(0,o.Rz)("list_show_type_pay",e),N((0,o.M5)())})(e)}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{style:{padding:"0px 0px 0px 8px"},className:"flexSpace"}),(0,r.jsx)(_,{placeholder:"Buscar ....",width:260,obs:P,fetchData:g,change:g,callempty:g,keyFlds:"searchQry"})]}):null]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,r.jsx)("div",{className:"name",children:"Por Pagar:"}),(0,r.jsx)("div",{className:"code",style:{margin:"0px 0 0 7px",color:"#646cff"},children:null!==(u=(0,o.bh)("rec_by_acc"))&&void 0!==u&&u[R]&&!isNaN(-1*(null===(v=(0,o.bh)("rec_by_acc"))||void 0===v?void 0:v[R]))?"$".concat((-1*(null===(h=(0,o.bh)("rec_by_acc"))||void 0===h?void 0:h[R])).toFixed(2)):"$0.00"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"icon autoCenter",onClick:()=>{var e,l;let a=[];(null===(e=(0,o.bh)(b))||void 0===e?void 0:e.account)&&(0,o.bh)("toPay_by_doc")&&(null===(l=(0,o._2)((0,o.bh)("toPay_by_doc")))||void 0===l||l.map((e=>{let l=1*(0,o.bh)("toPay_by_doc")[e].amount;if("done"===(0,o.bh)("list_show_type_pay")&&0===l||"pending"===(0,o.bh)("list_show_type_pay")&&0!==l){var s,t,n;let l={document:null===(s=(0,o.bh)("toPay_by_doc")[e])||void 0===s?void 0:s.document,description:null===(t=(0,o.bh)("toPay_by_doc")[e])||void 0===t?void 0:t.description,amount:1*(null===(n=(0,o.bh)("toPay_by_doc")[e])||void 0===n?void 0:n.amount)};a.push(l)}}))),(0,o.eY)("export_provider_"+(null===w||void 0===w?void 0:w.code)+"_"+(null===S||void 0===S?void 0:S.subAccount)+"_"+(0,o.M5)()+".csv",a)},children:(0,r.jsx)(m,{name:"google-spreadsheet",color:"var(--hrm_palette-float-gray_5A)"})})})]})]}),(0,r.jsx)(p.Z,{scrollhandler:e=>{F(e>140)}})]})}},1232:(e,l,a)=>{a.d(l,{GP:()=>c,N$:()=>n,hF:()=>r,i7:()=>o,nr:()=>t,pj:()=>u});var s=a(2350);const o=async(e,l)=>{var a,o;let t={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.filter_search_opera};t.params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,s.bh)("date_current_year")};const n=(0,s.I7)(t),c=await n;if(c&&!c.error){(0,s.Rz)("collect_list",c),(0,s.Rz)("collect_by_doc",i(c)),(0,s.Rz)("collect_by_docM",i(c));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);d(c,l)}l&&l()},t=async(e,l)=>{var a,o;let t={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.filter_search_opera};t.params={businessId:null===(o=(0,s.bh)("profileUser"))||void 0===o?void 0:o.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,s.bh)("date_current_year")};const n=(0,s.I7)(t),c=await n;if(c&&!c.error){(0,s.Rz)("toPay_list",c),(0,s.Rz)("toPay_by_doc",i(c,!0)),(0,s.Rz)("toPay_by_docM",i(c,!0));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);d(c,l)}l&&l()},n=async e=>{var l,a;let o={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.search_opera};o.params={businessId:null===(a=(0,s.bh)("profileUser"))||void 0===a?void 0:a.businessId,":search":(0,s.bh)("search_acc_record"),year:(0,s.bh)("date_current_year")};const t=(0,s.I7)(o),n=await t;n&&!n.error&&((0,s.Rz)("comprobante_list",n),(0,s.Rz)("comprobante_by_doc",i(n))),e&&e()};function i(e,l){var a={};let o=e&&(0,s._2)(e);return o.length>0?o.map((o=>{var t;let n=e[o],i=null===(t=n.document)||void 0===t?void 0:t.trim();if(!a[i]){a[i]={},["date","description","document","entryName"].forEach((e=>{a[i][e]=n[e]})),a[i].amount=0,a[i].operations=[]}if(n.type){let e=(0,s.Zv)(n.amount,2),o=(0,s.Zv)(a[i].amount,2),t=0;t=l?1*o+e*("debit"===n.type?-1:1):1*o+e*("credit"===n.type?-1:1),a[i].amount=(0,s.Zv)(t,2),a[i].operations.push(function(e){var l,a;let o={};o.account=null===(l=(0,s.bh)("account_ids"))||void 0===l?void 0:l[e.account],o.sub_account=null===(a=(0,s.bh)("sub_account_ids"))||void 0===a?void 0:a[e.subAccount],o.comprobanteId=e.comprobanteId,o.operationId=e.operationId,o.date=e.date,o.description=e.description;let t=(0,s.Zv)(e.amount,2);"credit"===e.type?(o.debit=0,o.credit=t):"debit"===e.type&&(o.credit=0,o.debit=t);return o}(n))}})):a=null,a}const c=(e,l,a)=>(0,s.MV)("SumDocuments",[e,l,a],(()=>{var a;let o=0;return e&&(null===(a=(0,s._2)(e))||void 0===a||a.map(((a,s)=>{var t;o+=1*(null===(t=e[a])||void 0===t?void 0:t[l])}))),o})),d=async(e,l,a)=>{let o=(0,s.bh)("rec_by_acc")||{};o[l]=((e,l,a)=>{var o;let t=0;return e&&(null===(o=(0,s._2)(e))||void 0===o||o.map(((l,a)=>{var o;let n=(0,s.Zv)(e[l].amount,2);t+=n*("credit"===(null===(o=e[l])||void 0===o?void 0:o.type)?-1:1)}))),t})(e)||"no",(0,s.Rz)("rec_by_acc",o),a&&a()},r=async(e,l,a)=>{var o,t;let n={...null===(o=(0,s.bh)((0,s.hQ)()))||void 0===o?void 0:o.filter_search_opera};n.params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,s.bh)("date_current_year")};const i=(0,s.I7)(n),c=await i;c&&!c.error&&d(c,l),a&&a()},u=async(e,l,a)=>{var o,t;let n={...null===(o=(0,s.bh)((0,s.hQ)()))||void 0===o?void 0:o.search_subacc_acc};n.params={businessId:null===(t=(0,s.bh)("profileUser"))||void 0===t?void 0:t.businessId,":account":e,":search":l,year:(0,s.bh)("date_current_year")};const i=(0,s.I7)(n),c=await i;if(c&&!c.error){var d;let e=null===(d=(0,s._2)(c))||void 0===d?void 0:d[0];a&&a(c[e])}}},8779:(e,l,a)=>{a.d(l,{Z:()=>t});a(2791),a(1534);var s=a(9760),o=a(184);const t=e=>{let{data:l,confirm:a,label:t,labelColor:n,body:i,btnConfirm:c}=e;const{modalID:d}=l,r=e=>{(0,s.CloseModal)({id:d})};return(0,o.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",style:n?{color:n}:null,children:t}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"_dsplFlx ",style:{margin:"15px 0"},children:(0,o.jsx)("span",{children:i||"Una vez eliminado no podra ser recuperado"})}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("p",{className:"group_title addBtn",onClick:r,children:"Cancelar"}),(0,o.jsx)("p",{className:"group_title addBtn red",onClick:()=>{a&&a(),r()},children:c||"Eliminar"})]})]})}},6021:()=>{},1534:()=>{}}]);
//# sourceMappingURL=595.b67b2b83.chunk.js.map