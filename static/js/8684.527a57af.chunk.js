/*! For license information please see 8684.527a57af.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8684],{5281:(e,l,c)=>{c.d(l,{Z:()=>n});var o=c(2791),t=c(184);class s extends o.Component{constructor(){super(),this.state={scrollPosition:null},this.handleInterval=this.handleInterval.bind(this),this.handleRequestAnimationFrame=this.handleRequestAnimationFrame.bind(this)}componentWillMount(){this.intervalID=setInterval(this.handleInterval,50)}componentWillUnmount(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}getWindowScrollTop(){return window.pageYOffset||document.documentElement.scrollTop}handleInterval(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}handleRequestAnimationFrame(){const{scrollPosition:e}=this.state,l=this.getWindowScrollTop();l!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(l),this.setState({scrollPosition:l}))}render(){return(0,t.jsx)(t.Fragment,{})}}const n=s},8684:(e,l,c)=>{c.r(l),c.d(l,{default:()=>m});var o=c(2791),t=c(2350),s=c(2647),n=(c(6021),c(1232)),a=c(9179),i=c(4050),d=c(9661),r=c(5281),u=c(184);const v=(0,s.Vg)(),h=(0,a.pl)(),_=(0,s.PU)(),b="Acc2Collect",p=((0,d.FC)(),(0,s.tL)()),m=e=>{var l,c;let{data:s,elmId:a,updObs:d}=e;const[r,v]=(0,o.useState)(!1),[_,p]=(0,o.useState)(0),[m,y]=(0,o.useState)(!1),[f,j]=(0,o.useState)(!1);(0,o.useEffect)((()=>{r||(v(!0),(0,t.Rz)("list_show_type_collect","pending"),(0,i.Ht)("global_accounts","global_account_params",I),p((0,t.M5)()),(0,i.ZX)())}));const I=async(e,l)=>{p((0,t.M5)()),y(!1)};return(0,u.jsxs)("div",{className:"",children:[(0,u.jsxs)("div",{className:"accounts_header _dsplFlx",children:[(0,u.jsx)("div",{children:(0,u.jsx)("h2",{children:"Cobros"})}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"",style:{maxWidth:"920px",padding:16},children:[(0,u.jsx)("div",{className:"",style:{height:190},children:(0,u.jsx)(x,{handle_getall:e=>{(0,n.i7)((0,t.bh)(b),I)},data:s,cb_result:I,updObs:p,searchCllb:e=>{j(e)}})}),(0,u.jsx)("div",{className:"accounts_container scollVh scoll_CP_Height",children:(null===(l=(0,t.bh)(b))||void 0===l?void 0:l.account)&&(0,t.bh)("collect_by_doc")&&(null===(c=(0,t._2)((0,t.bh)("collect_by_doc")))||void 0===c?void 0:c.map((e=>{let l=1*(0,t.bh)("collect_by_doc")[e].amount;if("done"===(0,t.bh)("list_show_type_collect")&&0===l||"pending"===(0,t.bh)("list_show_type_collect")&&0!==l){let l=(0,t.bh)("collect_by_doc")[e].document;return!f||l.indexOf(f)>=0?(0,u.jsx)(h,{data:(0,t.bh)("collect_by_doc")[e],elmId:e},e):null}return null})))})]})]})},x=e=>{var l,c,s,n,a,i,d,h,m,x;let{handle_getall:y,data:f,cb_result:j,updObs:I,searchCllb:N}=e;const[g,A]=(0,o.useState)(0),[w,F]=(0,o.useState)(!1);let S=null===(l=(0,t.bh)("account_ids"))||void 0===l?void 0:l[null===(c=(0,t.bh)(b))||void 0===c?void 0:c.account],R=null===(s=(0,t.bh)("sub_account_ids"))||void 0===s?void 0:s[null===(n=(0,t.bh)(b))||void 0===n?void 0:n.subAccount],C=(null===(a=(0,t.bh)(b))||void 0===a?void 0:a.account)+"_"+(null===(i=(0,t.bh)(b))||void 0===i?void 0:i.subAccount);return(0,u.jsxs)("div",{className:"menu_collect ".concat(w?"_floating":""),children:[(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:[(0,u.jsxs)("div",{className:" acc_dtls",children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"code",style:{color:"#646cff",cursor:"pointer"},children:null===S||void 0===S?void 0:S.code}),(0,u.jsx)("div",{className:"name",children:null===S||void 0===S?void 0:S.name})]}),(0,u.jsx)("div",{className:"flexSpace"}),R?(0,u.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,u.jsx)("div",{className:"code",children:null===R||void 0===R?void 0:R.subAccount}),(0,u.jsx)("div",{className:"name",children:null===R||void 0===R?void 0:R.subAccountName})]}):null,null!==(d=(0,t.bh)(b))&&void 0!==d&&d.account?(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:"35px 18px 10px "},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(p,{data:[{label:"Pendientes",id:"pending"},{label:"Cobrados",id:"done"}],active:(0,t.bh)("list_show_type_collect")||"pending",updSelect:e=>(e=>{(0,t.Rz)("list_show_type_collect",e),I((0,t.M5)())})(e)}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)("div",{style:{padding:"0px 0px 0px 8px"},className:"flexSpace"}),(0,u.jsx)(v,{placeholder:"Buscar ....",width:260,obs:A,fetchData:N,change:N,callempty:N,keyFlds:"searchQry"})]}):null]}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"_dsplFlx acc_dtls",children:[(0,u.jsx)("div",{className:"name",children:"Por Cobrar:"}),(0,u.jsx)("div",{className:"code",style:{margin:"0px 0 0 7px",color:"#646cff"},children:null!==(h=(0,t.bh)("rec_by_acc"))&&void 0!==h&&h[C]&&!isNaN(1*(null===(m=(0,t.bh)("rec_by_acc"))||void 0===m?void 0:m[C]))?" $".concat((1*(null===(x=(0,t.bh)("rec_by_acc"))||void 0===x?void 0:x[C])).toFixed(2)):"$0.00"})]}),(0,u.jsx)("div",{children:(0,u.jsx)("div",{className:"icon autoCenter",onClick:()=>{var e,l;let c=[];(null===(e=(0,t.bh)(b))||void 0===e?void 0:e.account)&&(0,t.bh)("collect_by_doc")&&(null===(l=(0,t._2)((0,t.bh)("collect_by_doc")))||void 0===l||l.map((e=>{let l=1*(0,t.bh)("collect_by_doc")[e].amount;if("done"===(0,t.bh)("list_show_type_collect")&&0===l||"pending"===(0,t.bh)("list_show_type_collect")&&0!==l){var o,s,n;let l={document:null===(o=(0,t.bh)("collect_by_doc")[e])||void 0===o?void 0:o.document,description:null===(s=(0,t.bh)("collect_by_doc")[e])||void 0===s?void 0:s.description,amount:1*(null===(n=(0,t.bh)("collect_by_doc")[e])||void 0===n?void 0:n.amount)};c.push(l)}}))),(0,t.eY)("export_provider_"+(null===S||void 0===S?void 0:S.code)+"_"+(null===R||void 0===R?void 0:R.subAccount)+"_"+(0,t.M5)()+".csv",c)},children:(0,u.jsx)(_,{name:"google-spreadsheet",color:"#c62828"})})})]})]}),(0,u.jsx)(r.Z,{scrollhandler:e=>{F(e>130)}})]})}},1232:(e,l,c)=>{c.d(l,{GP:()=>i,N$:()=>n,hF:()=>r,i7:()=>t,nr:()=>s,pj:()=>u});var o=c(2350);const t=async(e,l)=>{var c,t;let s={...null===(c=(0,o.bh)((0,o.hQ)()))||void 0===c?void 0:c.filter_search_opera};s.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,o.bh)("date_current_year")};const n=(0,o.I7)(s),i=await n;if(i&&!i.error){(0,o.Rz)("collect_list",i),(0,o.Rz)("collect_by_doc",a(i)),(0,o.Rz)("collect_by_docM",a(i));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);d(i,l)}l&&l()},s=async(e,l)=>{var c,t;let s={...null===(c=(0,o.bh)((0,o.hQ)()))||void 0===c?void 0:c.filter_search_opera};s.params={businessId:null===(t=(0,o.bh)("profileUser"))||void 0===t?void 0:t.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,o.bh)("date_current_year")};const n=(0,o.I7)(s),i=await n;if(i&&!i.error){(0,o.Rz)("toPay_list",i),(0,o.Rz)("toPay_by_doc",a(i,!0)),(0,o.Rz)("toPay_by_docM",a(i,!0));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);d(i,l)}l&&l()},n=async e=>{var l,c;let t={...null===(l=(0,o.bh)((0,o.hQ)()))||void 0===l?void 0:l.search_opera};t.params={businessId:null===(c=(0,o.bh)("profileUser"))||void 0===c?void 0:c.businessId,":search":(0,o.bh)("search_acc_record"),year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(t),n=await s;n&&!n.error&&((0,o.Rz)("comprobante_list",n),(0,o.Rz)("comprobante_by_doc",a(n))),e&&e()};function a(e,l){var c={};let t=e&&(0,o._2)(e);return t.length>0?t.map((t=>{var s;let n=e[t],a=null===(s=n.document)||void 0===s?void 0:s.trim();if(!c[a]){c[a]={},["date","description","document","entryName"].forEach((e=>{c[a][e]=n[e]})),c[a].amount=0,c[a].operations=[]}if(n.type){let e=(0,o.Zv)(n.amount,2),t=(0,o.Zv)(c[a].amount,2),s=0;s=l?1*t+e*("debit"===n.type?-1:1):1*t+e*("credit"===n.type?-1:1),c[a].amount=(0,o.Zv)(s,2),c[a].operations.push(function(e){var l,c;let t={};t.account=null===(l=(0,o.bh)("account_ids"))||void 0===l?void 0:l[e.account],t.sub_account=null===(c=(0,o.bh)("sub_account_ids"))||void 0===c?void 0:c[e.subAccount],t.comprobanteId=e.comprobanteId,t.operationId=e.operationId,t.date=e.date,t.description=e.description;let s=(0,o.Zv)(e.amount,2);"credit"===e.type?(t.debit=0,t.credit=s):"debit"===e.type&&(t.credit=0,t.debit=s);return t}(n))}})):c=null,c}const i=(e,l,c)=>(0,o.MV)("SumDocuments",[e,l,c],(()=>{var c;let t=0;return e&&(null===(c=(0,o._2)(e))||void 0===c||c.map(((c,o)=>{var s;t+=1*(null===(s=e[c])||void 0===s?void 0:s[l])}))),t})),d=async(e,l,c)=>{let t=(0,o.bh)("rec_by_acc")||{};t[l]=((e,l,c)=>{var t;let s=0;return e&&(null===(t=(0,o._2)(e))||void 0===t||t.map(((l,c)=>{var t;let n=(0,o.Zv)(e[l].amount,2);s+=n*("credit"===(null===(t=e[l])||void 0===t?void 0:t.type)?-1:1)}))),s})(e)||"no",(0,o.Rz)("rec_by_acc",t),c&&c()},r=async(e,l,c)=>{var t,s;let n={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.filter_search_opera};n.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount,year:(0,o.bh)("date_current_year")};const a=(0,o.I7)(n),i=await a;i&&!i.error&&d(i,l),c&&c()},u=async(e,l,c)=>{var t,s;let n={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.search_subacc_acc};n.params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,":account":e,":search":l,year:(0,o.bh)("date_current_year")};const a=(0,o.I7)(n),i=await a;if(i&&!i.error){var d;let e=null===(d=(0,o._2)(i))||void 0===d?void 0:d[0];c&&c(i[e])}}},6021:()=>{}}]);
//# sourceMappingURL=8684.527a57af.chunk.js.map