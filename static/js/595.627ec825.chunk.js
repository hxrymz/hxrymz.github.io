/*! For license information please see 595.627ec825.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[595],{5281:(e,a,l)=>{l.d(a,{Z:()=>n});var t=l(2791),s=l(184);class o extends t.Component{constructor(){super(),this.state={scrollPosition:null},this.handleInterval=this.handleInterval.bind(this),this.handleRequestAnimationFrame=this.handleRequestAnimationFrame.bind(this)}componentWillMount(){this.intervalID=setInterval(this.handleInterval,50)}componentWillUnmount(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}getWindowScrollTop(){return window.pageYOffset||document.documentElement.scrollTop}handleInterval(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}handleRequestAnimationFrame(){const{scrollPosition:e}=this.state,a=this.getWindowScrollTop();a!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(a),this.setState({scrollPosition:a}))}render(){return(0,s.jsx)(s.Fragment,{})}}const n=o},54:(e,a,l)=>{l.r(a),l.d(a,{default:()=>x});var t=l(2791),s=l(2350),o=l(2647),n=l(9760),i=(l(6021),l(1232)),c=l(9179),d=l(4050),r=(l(3588),l(184));const u=(0,c.t8)(),v=((0,o.PU)(),e=>{let{data:a,elmId:l,openUpdateView:o}=e;const[c,d]=(0,t.useState)(!1),[v,h]=(0,t.useState)(0);(0,t.useEffect)((()=>{c||(d(!0),h((0,s.M5)()))}));const _=()=>{h((0,s.M5)())},p=()=>{(0,i.nr)(_)};return(0,r.jsx)("div",{className:"item_acc itm_2_pay",children:(0,r.jsxs)("div",{className:"_dsplFlx operation_item_box",onClick:()=>{(0,s.Rz)("show_comprobante",a);let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,r.jsx)(u,{confirm:p,item:a,accountForm:"Acc2Pay"}),(0,n.OpenModal)(e)},children:[(0,r.jsx)("div",{className:"name",children:null===a||void 0===a?void 0:a.document}),(0,r.jsx)("div",{className:"entryName",children:null===a||void 0===a?void 0:a.entryName}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"code",children:["$",(1*(null===a||void 0===a?void 0:a.amount)).toFixed(2)]}),(0,r.jsx)("div",{className:"flexSpace"})]})})});var h=l(9661),_=l(5281);const p=(0,o.Vg)(),b=((0,c.i5)(),(0,h.LZ)(),(0,o.PU)()),m="Acc2Pay",y=(0,o.tL)(),x=e=>{var a,l;let{data:o,elmId:n,updObs:c}=e;const[u,h]=(0,t.useState)(!1),[_,p]=(0,t.useState)(0),[b,y]=(0,t.useState)(!1),[x,j]=(0,t.useState)(!1);(0,t.useEffect)((()=>{u||(h(!0),(0,s.Rz)("list_show_type_pay","pending"),(0,d.Ht)("global_accounts","global_account_params",I),p((0,s.M5)()),(0,d.ZX)())}));const N=()=>{},I=async(e,a)=>{p((0,s.M5)()),y(!1)};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"accounts_header _dsplFlx",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:"Pagos"})}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsxs)("div",{className:"",style:{maxWidth:"920px",padding:16},children:[(0,r.jsx)("div",{className:"",style:{height:190},children:(0,r.jsx)(f,{handle_getall:e=>{(0,i.nr)((0,s.bh)(m),I)},data:o,cb_result:I,updObs:p,searchCllb:e=>{j(e)}})}),(0,r.jsx)("div",{className:"accounts_container ",children:(null===(a=(0,s.bh)(m))||void 0===a?void 0:a.account)&&(0,s.bh)("toPay_by_doc")&&(null===(l=(0,s._2)((0,s.bh)("toPay_by_doc")))||void 0===l?void 0:l.map((e=>{let a=1*(0,s.bh)("toPay_by_doc")[e].amount;if("done"===(0,s.bh)("list_show_type_pay")&&0===a||"pending"===(0,s.bh)("list_show_type_pay")&&0!==a){let a=(0,s.bh)("toPay_by_doc")[e].document;return!x||a.indexOf(x)>=0?(0,r.jsx)(v,{data:(0,s.bh)("toPay_by_doc")[e],elmId:e,openUpdateView:N},e):null}return null})))})]})]})},f=e=>{var a,l,o,n,i,c,d,u,v,h;let{handle_getall:x,data:f,cb_result:j,updObs:N,searchCllb:I}=e;const[g,P]=(0,t.useState)(0),[A,w]=(0,t.useState)(!1);let F=null===(a=(0,s.bh)("account_ids"))||void 0===a?void 0:a[null===(l=(0,s.bh)(m))||void 0===l?void 0:l.account],S=null===(o=(0,s.bh)("sub_account_ids"))||void 0===o?void 0:o[null===(n=(0,s.bh)(m))||void 0===n?void 0:n.subAccount];let R=(null===(i=(0,s.bh)(m))||void 0===i?void 0:i.account)+"_"+(null===(c=(0,s.bh)(m))||void 0===c?void 0:c.subAccount);return(0,r.jsxs)("div",{className:"menu_pay ".concat(A?"_floating":""),children:[(0,r.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,r.jsxs)("div",{className:" acc_dtls",children:[(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"code",style:{color:"#646cff",cursor:"pointer"},children:null===F||void 0===F?void 0:F.code}),(0,r.jsx)("div",{className:"name",children:null===F||void 0===F?void 0:F.name})]}),(0,r.jsx)("div",{className:"flexSpace"}),S?(0,r.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,r.jsx)("div",{className:"code",children:null===S||void 0===S?void 0:S.subAccount}),(0,r.jsx)("div",{className:"name",children:null===S||void 0===S?void 0:S.subAccountName})]}):null,null!==(d=(0,s.bh)(m))&&void 0!==d&&d.account?(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(y,{data:[{label:"Pendientes",id:"pending"},{label:"Pagados",id:"done"}],active:(0,s.bh)("list_show_type_pay")||"pending",updSelect:e=>(e=>{(0,s.Rz)("list_show_type_pay",e),N((0,s.M5)())})(e)}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsx)("div",{style:{padding:"0px 0px 0px 8px"},className:"flexSpace"}),(0,r.jsx)(p,{placeholder:"Buscar ....",width:260,obs:P,fetchData:I,change:I,callempty:I,keyFlds:"searchQry"})]}):null]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,r.jsx)("div",{className:"name",children:"Por Pagar:"}),(0,r.jsx)("div",{className:"code",style:{margin:"0px 0 0 7px",color:"#646cff"},children:null!==(u=(0,s.bh)("rec_by_acc"))&&void 0!==u&&u[R]&&!isNaN(-1*(null===(v=(0,s.bh)("rec_by_acc"))||void 0===v?void 0:v[R]))?"$".concat((-1*(null===(h=(0,s.bh)("rec_by_acc"))||void 0===h?void 0:h[R])).toFixed(2)):"$0.00"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"icon autoCenter",onClick:()=>{var e,a;let l=[];(null===(e=(0,s.bh)(m))||void 0===e?void 0:e.account)&&(0,s.bh)("toPay_by_doc")&&(null===(a=(0,s._2)((0,s.bh)("toPay_by_doc")))||void 0===a||a.map((e=>{let a=1*(0,s.bh)("toPay_by_doc")[e].amount;if("done"===(0,s.bh)("list_show_type_pay")&&0===a||"pending"===(0,s.bh)("list_show_type_pay")&&0!==a){var t,o,n;let a={document:null===(t=(0,s.bh)("toPay_by_doc")[e])||void 0===t?void 0:t.document,description:null===(o=(0,s.bh)("toPay_by_doc")[e])||void 0===o?void 0:o.description,amount:1*(null===(n=(0,s.bh)("toPay_by_doc")[e])||void 0===n?void 0:n.amount)};l.push(a)}}))),(0,s.eY)("export_provider_"+(null===F||void 0===F?void 0:F.code)+"_"+(null===S||void 0===S?void 0:S.subAccount)+"_"+(0,s.M5)()+".csv",l)},children:(0,r.jsx)(b,{name:"google-spreadsheet",color:"var(--hrm_palette-float-gray_5A)"})})})]})]}),(0,r.jsx)(_.Z,{scrollhandler:e=>{w(e>140)}})]})}},1232:(e,a,l)=>{l.d(a,{GP:()=>c,N$:()=>n,hF:()=>r,i7:()=>s,nr:()=>o,pj:()=>u});var t=l(2350);const s=async(e,a)=>{var l,s;let o={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.filter_search_opera};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,t.bh)("date_current_year")};const n=(0,t.I7)(o),c=await n;if(c&&!c.error){(0,t.Rz)("collect_list",c),(0,t.Rz)("collect_by_doc",i(c)),(0,t.Rz)("collect_by_docM",i(c));let a=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);d(c,a)}a&&a()},o=async(e,a)=>{var l,s;let o={...null===(l=(0,t.bh)((0,t.hQ)()))||void 0===l?void 0:l.filter_search_opera};o.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,t.bh)("date_current_year")};const n=(0,t.I7)(o),c=await n;if(c&&!c.error){(0,t.Rz)("toPay_list",c),(0,t.Rz)("toPay_by_doc",i(c,!0)),(0,t.Rz)("toPay_by_docM",i(c,!0));let a=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);d(c,a)}a&&a()},n=async e=>{var a,l;let s={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.search_opera};s.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,":search":(0,t.bh)("search_acc_record"),year:(0,t.bh)("date_current_year")};const o=(0,t.I7)(s),n=await o;n&&!n.error&&((0,t.Rz)("comprobante_list",n),(0,t.Rz)("comprobante_by_doc",i(n))),e&&e()};function i(e,a){var l={};let s=e&&(0,t._2)(e);return s.length>0?s.map((s=>{var o;let n=e[s],i=null===(o=n.document)||void 0===o?void 0:o.trim();if(!l[i]){l[i]={},["date","description","document","entryName"].forEach((e=>{l[i][e]=n[e]})),l[i].amount=0,l[i].operations=[]}if(n.type){let e=(0,t.Zv)(n.amount,2),s=(0,t.Zv)(l[i].amount,2),o=0;o=a?1*s+e*("debit"===n.type?-1:1):1*s+e*("credit"===n.type?-1:1),l[i].amount=(0,t.Zv)(o,2),l[i].operations.push(function(e){var a,l;let s={};s.account=null===(a=(0,t.bh)("account_ids"))||void 0===a?void 0:a[e.account],s.sub_account=null===(l=(0,t.bh)("sub_account_ids"))||void 0===l?void 0:l[e.subAccount],s.comprobanteId=e.comprobanteId,s.operationId=e.operationId,s.date=e.date,s.description=e.description;let o=(0,t.Zv)(e.amount,2);"credit"===e.type?(s.debit=0,s.credit=o):"debit"===e.type&&(s.credit=0,s.debit=o);return s}(n))}})):l=null,l}const c=(e,a,l)=>(0,t.MV)("SumDocuments",[e,a,l],(()=>{var l;let s=0;return e&&(null===(l=(0,t._2)(e))||void 0===l||l.map(((l,t)=>{var o;s+=1*(null===(o=e[l])||void 0===o?void 0:o[a])}))),s})),d=async(e,a,l)=>{let s=(0,t.bh)("rec_by_acc")||{};s[a]=((e,a,l)=>{var s;let o=0;return e&&(null===(s=(0,t._2)(e))||void 0===s||s.map(((a,l)=>{var s;let n=(0,t.Zv)(e[a].amount,2);o+=n*("credit"===(null===(s=e[a])||void 0===s?void 0:s.type)?-1:1)}))),o})(e)||"no",(0,t.Rz)("rec_by_acc",s),l&&l()},r=async(e,a,l)=>{var s,o;let n={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.filter_search_opera};n.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(n),c=await i;c&&!c.error&&d(c,a),l&&l()},u=async(e,a,l)=>{var s,o;let n={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.search_subacc_acc};n.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,":account":e,":search":a,year:(0,t.bh)("date_current_year")};const i=(0,t.I7)(n),c=await i;if(c&&!c.error){var d;let e=null===(d=(0,t._2)(c))||void 0===d?void 0:d[0];l&&l(c[e])}}},6021:()=>{}}]);
//# sourceMappingURL=595.627ec825.chunk.js.map