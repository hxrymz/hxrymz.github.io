"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5995,9760],{9760:(e,l,o)=>{o.r(l),o.d(l,{CloseModal:()=>r,OpenModal:()=>a,default:()=>c});var i=o(2791),t=o(5408),d=o(2350),s=o(184);const n="listDialog_mdh392",c=()=>{const e=(0,d.bh)("listDialog")||{};(0,t.Z)(n);let l=Object.keys(e);return(0,s.jsx)(s.Fragment,{children:l.map(((l,o)=>{let t=e[l];if(t&&t.visible){let e={};t.height&&(e.heigth=t.height),t.width,t.zIndex&&(e.zIndex=t.zIndex-1);let o={zIndex:t.zIndex},d=null,n=t.data;return t.content&&(d=i.cloneElement(t.content,{data:n})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:e,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:o,id:l,children:d})}),t.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(t.visible?"active":""),onClick:()=>{var e;e=l,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},l)}}))})},a=e=>{let l=(0,d.bh)("listDialog")||{},o=(0,d.M5)();l[o]||(l[o]={}),l[o].visible=!0;let i={};e.props?(i=e.props,i.modalID=o):i.modalID=o;let t=document.getElementsByTagName("body")[0];null!==t&&void 0!==t&&t.style&&(t.style.overflowY="hidden"),l[o].isView=e.isView,l[o].observeResize=e.observeResize,l[o].observeResize&&(l[o].observeInterval=setInterval((()=>{let e=document.querySelector("[dialog-key-id='".concat(o,"']")),i=e&&e.getBoundingClientRect();i&&(i.width===l[o].width&&i.height===l[o].height||(l[o].height=i.height+10,l[o].width=i.width,(0,d.Rz)("listDialog",l),(0,d.wt)(n)))}),200)),l[o].display=!0,e.zIndex&&(l[o].zIndex=e.zIndex),e.height&&(l[o].height=e.height),e.width&&(l[o].width=e.width),e.content&&(l[o].content=e.content),l[o].data=i,(0,d.Rz)("listDialog",l),(0,d.wt)(n),setTimeout((()=>{document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,d.Rz)("modalOpen",o),(0,d.wt)(n)}),125)},r=e=>{let l=(0,d.bh)("listDialog")||{},o=e.id;if(l[o]){var i,t,s;l[o].observeResize&&l[o].observeInterval&&clearInterval(l[o].observeInterval),l[o].display=!1,null===(i=l[o])||void 0===i||null===(t=i.data)||void 0===t||null===(s=t.closeEvent)||void 0===s||s.call(t),(0,d.Rz)("listDialog",l),delete l[o],document.getElementsByTagName("body")[0].style.overflowY=null,(0,d.wt)(n),setTimeout((()=>{delete l[o],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,d.Rz)("modalOpen",null)}),750)}}},1232:(e,l,o)=>{o.d(l,{GP:()=>c,N$:()=>s,hF:()=>r,i7:()=>t,nr:()=>d,pj:()=>v});var i=o(2350);const t=async(e,l)=>{var o,t;let d={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.filter_search_opera};d.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount};const s=(0,i.I7)(d),c=await s;if((0,i.wL)("getall_collects"),(0,i.wL)(d),(0,i.wL)(c),c&&!c.error){(0,i.Rz)("collect_list",c),(0,i.Rz)("collect_by_doc",n(c)),(0,i.Rz)("collect_by_docM",n(c));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);a(c,l)}l&&l()},d=async(e,l)=>{var o,t;let d={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.filter_search_opera};d.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount};const s=(0,i.I7)(d),c=await s;if(c&&!c.error){(0,i.Rz)("toPay_list",c),(0,i.Rz)("toPay_by_doc",n(c,!0)),(0,i.Rz)("toPay_by_docM",n(c,!0));let l=(null===e||void 0===e?void 0:e.account)+"_"+(null===e||void 0===e?void 0:e.subAccount);a(c,l)}l&&l()},s=async e=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.search_opera};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,i.bh)("search_acc_record")};const d=(0,i.I7)(t),s=await d;s&&!s.error&&((0,i.Rz)("comprobante_list",s),(0,i.Rz)("comprobante_by_doc",n(s))),e&&e()};function n(e,l){var o={};let t=e&&(0,i._2)(e);return t.length>0?t.map((t=>{var d;let s=e[t],n=null===(d=s.document)||void 0===d?void 0:d.trim();if(!o[n]){o[n]={},["date","description","document","entryName"].forEach((e=>{o[n][e]=s[e]})),o[n].amount=0,o[n].operations=[]}if(s.type){let e=(0,i.Zv)(s.amount,2),t=(0,i.Zv)(o[n].amount,2),d=0;d=l?1*t+e*("debit"===s.type?-1:1):1*t+e*("credit"===s.type?-1:1),o[n].amount=(0,i.Zv)(d,2),o[n].operations.push(function(e){var l,o;let t={};t.account=null===(l=(0,i.bh)("account_ids"))||void 0===l?void 0:l[e.account],t.sub_account=null===(o=(0,i.bh)("sub_account_ids"))||void 0===o?void 0:o[e.subAccount],t.comprobanteId=e.comprobanteId,t.operationId=e.operationId,t.date=e.date,t.description=e.description;let d=(0,i.Zv)(e.amount,2);"credit"===e.type?(t.debit=0,t.credit=d):"debit"===e.type&&(t.credit=0,t.debit=d);return t}(s))}})):o=null,o}const c=(e,l,o)=>(0,i.MV)("SumDocuments",[e,l,o],(()=>{var o;let t=0;return e&&(null===(o=(0,i._2)(e))||void 0===o||o.map(((o,i)=>{var d;t+=1*(null===(d=e[o])||void 0===d?void 0:d[l])}))),t})),a=async(e,l,o)=>{let t=(0,i.bh)("rec_by_acc")||{};t[l]=((e,l,o)=>{var t;let d=0;return e&&(null===(t=(0,i._2)(e))||void 0===t||t.map(((l,o)=>{var t;let s=(0,i.Zv)(e[l].amount,2);d+=s*("credit"===(null===(t=e[l])||void 0===t?void 0:t.type)?-1:1)}))),d})(e)||"no",(0,i.Rz)("rec_by_acc",t),o&&o()},r=async(e,l,o)=>{var t,d;let s={...null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.filter_search_opera};s.params={businessId:null===(d=(0,i.bh)("profileUser"))||void 0===d?void 0:d.businessId,":account":null===e||void 0===e?void 0:e.account,":subAccount":null===e||void 0===e?void 0:e.subAccount};const n=(0,i.I7)(s),c=await n;c&&!c.error&&a(c,l),o&&o()},v=async(e,l,o)=>{var t,d;let s={...null===(t=(0,i.bh)((0,i.hQ)()))||void 0===t?void 0:t.search_subacc_acc};s.params={businessId:null===(d=(0,i.bh)("profileUser"))||void 0===d?void 0:d.businessId,":account":e,":search":l};const n=(0,i.I7)(s),c=await n;if((0,i.wL)("searchSubAccbyCode"),(0,i.wL)(s),(0,i.wL)(c),c&&!c.error){var a;let e=null===(a=(0,i._2)(c))||void 0===a?void 0:a[0];o&&o(c[e])}}},5995:(e,l,o)=>{o.r(l),o.d(l,{default:()=>x});var i=o(2791),t=o(2350),d=(o(2052),o(5114)),s=o(9760),n=o(6677),c=o(2647),a=o(184);const r=e=>{let{data:l,confirm:o,handleClick:i,close:t}=e;const{modalID:d}=l,n=e=>{(0,s.CloseModal)({id:d})};return(0,a.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,a.jsxs)("div",{className:"_dsplFlx ",children:[(0,a.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,a.jsx)("div",{className:"flexSpace"})]}),(0,a.jsx)("div",{className:"_dsplFlx ",children:(0,a.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,a.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("p",{className:"group_title addBtn",onClick:n,children:"Cancelar"}),(0,a.jsx)("p",{className:"group_title addBtn red",onClick:()=>{o(),n()},children:"Eliminar"})]})]})};var v=o(7689),u=o(1232),h=o(9179);const p=(0,c.PU)(),m=(0,d.if)(),b=(0,c.tW)(),_=(0,h.nW)(),y=(0,h.lr)(),x=e=>{var l,o,d,c,h,x,I;let{data:g,elmId:f,handleRefreshAll:z}=e;const[N,j]=(0,i.useState)(!1),[w,R]=(0,i.useState)(0),[A,C]=(0,i.useState)(0),k=(0,v.s0)();let M=g.account+"_"+g.subAccount;(0,i.useEffect)((()=>{N||(j(!0),R((0,t.M5)()))}));const S=()=>{R((0,t.M5)())},O=()=>{(0,n.Je)(S)},Q=e=>{if("provider"===(null===g||void 0===g?void 0:g.type)){let e={account:null===g||void 0===g?void 0:g.account,subAccount:null===g||void 0===g?void 0:g.subAccount,customerId:null===g||void 0===g?void 0:g.customerId};(0,t.Rz)("Acc2Pay",e),(0,u.nr)(e,(()=>{(()=>{(0,t.Rz)("upd_provider",g),(0,t.Rz)("upd_provider_bck",JSON.parse(JSON.stringify(g)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,a.jsx)(y,{confirm:O}),(0,s.OpenModal)(e)})()}))}else if("customer"===(null===g||void 0===g?void 0:g.type)){let e={account:null===g||void 0===g?void 0:g.account,subAccount:null===g||void 0===g?void 0:g.subAccount,customerId:null===g||void 0===g?void 0:g.customerId};(0,t.Rz)("Acc2Collect",e),(0,u.i7)(e,(()=>{(()=>{(0,t.Rz)("upd_provider",g),(0,t.Rz)("upd_provider_bck",JSON.parse(JSON.stringify(g)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,a.jsx)(_,{confirm:O}),(0,s.OpenModal)(e)})()}))}},D=()=>{(0,n.Qn)(null===g||void 0===g?void 0:g.providerId,z)};(0,n.mQ)(null===(l=(0,t.bh)("sub_provider_group"))||void 0===l?void 0:l[g.providerId],"subProvider");let E="provider"===(null===g||void 0===g?void 0:g.type)&&(null===(o=(0,t.bh)("rec_by_acc"))||void 0===o?void 0:o[M])&&!isNaN(-1*(null===(d=(0,t.bh)("rec_by_acc"))||void 0===d?void 0:d[M])),P="customer"===(null===g||void 0===g?void 0:g.type)&&(null===(c=(0,t.bh)("rec_by_acc"))||void 0===c?void 0:c[M])&&!isNaN(1*(null===(h=(0,t.bh)("rec_by_acc"))||void 0===h?void 0:h[M]));return(0,a.jsx)("div",{className:"item_acc",id:"".concat(M),children:(0,a.jsxs)("div",{className:"_dsplFlx item_box provider_header",onMouseEnter:e=>{var l;null!==(l=(0,t.bh)("rec_by_acc"))&&void 0!==l&&l[M]||(C(!0),(0,u.hF)(g,M,(()=>{setTimeout((()=>{C(!1),S()}),200)})))},children:[(0,a.jsxs)("div",{className:"_dsplFlx",onClick:async()=>{if((0,t.I0)()){(0,t.Rz)("upd_provider",g),(0,t.Rz)("upd_provider_bck",JSON.parse(JSON.stringify(g)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,a.jsx)(m,{confirm:O}),(0,s.OpenModal)(e)}},children:[(0,a.jsx)("div",{className:"code"}),(0,a.jsx)("div",{className:"name",children:null===g||void 0===g?void 0:g.name}),(0,a.jsx)("div",{className:"unit",children:null===g||void 0===g?void 0:g.unit})]}),(0,a.jsx)("div",{className:"flexSpace"}),(0,a.jsx)("div",{className:" addSbAcc purple",onClick:()=>(()=>{if("provider"===(null===g||void 0===g?void 0:g.type)){let e={account:null===g||void 0===g?void 0:g.account,subAccount:null===g||void 0===g?void 0:g.subAccount,customerId:null===g||void 0===g?void 0:g.customerId};(0,t.Rz)("Acc2Pay",e),(0,u.nr)(e,(()=>{k({pathname:"/pay"})}))}else if("customer"===(null===g||void 0===g?void 0:g.type)){let e={account:null===g||void 0===g?void 0:g.account,subAccount:null===g||void 0===g?void 0:g.subAccount,customerId:null===g||void 0===g?void 0:g.customerId};(0,t.Rz)("Acc2Collect",e),(0,u.i7)(e,(()=>{k({pathname:"/collect"})}))}})(),children:"Historial"}),A?(0,a.jsxs)("div",{className:"_dsplFlx",children:[(0,a.jsx)("div",{className:"icon",style:{marginRight:19},children:(0,a.jsx)(b,{stroke:"#646cff",size:24})}),(0,a.jsx)("div",{className:"loading_lbl",children:"cargando ...."})]}):(0,a.jsx)("div",{children:P||E?(0,a.jsx)("div",{className:" addSbAcc purple",onClick:()=>Q(),children:E?"Por Pagar $".concat((-1*(null===(x=(0,t.bh)("rec_by_acc"))||void 0===x?void 0:x[M])).toFixed(2)):P?"Por Cobrar $".concat((1*(null===(I=(0,t.bh)("rec_by_acc"))||void 0===I?void 0:I[M])).toFixed(2)):null}):null}),(0,t.I0)()?(0,a.jsx)("div",{className:"icon",style:{marginLeft:19},onClick:()=>{let e=(0,t.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,t.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,a.jsx)(r,{confirm:D,item:g}),(0,s.OpenModal)(e)}},children:(0,a.jsx)(p,{name:"outline_delete",color:"#c62828"})}):null]})})}},6677:(e,l,o)=>{o.d(l,{Je:()=>t,Qn:()=>c,UO:()=>d,mQ:()=>n});var i=o(2350);const t=async e=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.all_prov_cust};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId};const d=(0,i.I7)(t),n=await d;n&&((0,i.Rz)("providers_list",s((0,i.jQ)(n),"name",1)),(0,i.Rz)("providers_ids",(0,i.ME)((0,i.jQ)(n),"providerId")),e&&e())},d=async e=>{var l,o;let t={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.search_prov_cust};t.params={businessId:null===(o=(0,i.bh)("profileUser"))||void 0===o?void 0:o.businessId,":search":(0,i.bh)("search_prov")};const d=(0,i.I7)(t),n=await d;n&&((0,i.Rz)("providers_list",s((0,i.jQ)(n),"name",1)),e&&e())};const s=(e,l,o)=>(0,i.MV)("sortProviders",[e],(()=>e&&e.sort(((e,i)=>{let t=1*e[l],d=1*i[l];return t<d?o?-1:1:t>d?o?1:-1:0})))),n=(e,l)=>(0,i.MV)("sortSubProviders",[e],(()=>e&&e.sort(((e,o)=>{let i=1*e[l],t=1*o[l];return i<t?-1:i>t?1:0})))),c=async(e,l)=>{var o,t;let d={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.delete_prov_cust};d.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,providerId:e};const s=(0,i.I7)(d);await s&&l&&l()}},2052:()=>{}}]);
//# sourceMappingURL=5995.4ed1b4fb.chunk.js.map