"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[3075],{4304:(e,a,l)=>{l.d(a,{lp:()=>d,NK:()=>s});l(2791);var i=l(1087),t=l(184);const s=e=>{let{clickHandler:a,label:l,navTo:s}=e;return(0,t.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:a,children:(0,t.jsx)(i.OL,{className:" jaqJnq",to:s,children:l})})},d=e=>{let{children:a}=e;return(0,t.jsx)("div",{className:"jRutKh",children:(0,t.jsx)("div",{className:"jSvsvz",children:(0,t.jsx)("div",{className:"jzcvbH",children:(0,t.jsx)("div",{className:" kfqEsq",children:a})})})})}},3075:(e,a,l)=>{l.r(a),l.d(a,{default:()=>M});var i=l(2791),t=l(2350),s=(l(5196),l(5288)),d=l(9760),n=l(1475),o=l(2647),c=(l(5027),l(184));const r=e=>{let{data:a,confirm:l,handleClick:i,close:t}=e;const{modalID:s}=a,n=e=>{(0,d.CloseModal)({id:s})};return(0,c.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Eliminar Comprobante"}),(0,c.jsx)("div",{className:"flexSpace"})]}),(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)("span",{children:"Una vez eliminado no podra ser recuperado"})}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("p",{className:"group_title addBtn",onClick:n,children:"Cancelar"}),(0,c.jsx)("p",{className:"group_title addBtn red",onClick:()=>{l(),n()},children:"Eliminar"})]})]})};var m=l(4304),v=l(24),u=l(7689);(0,o.PU)();const p=(0,o.JC)(),h=((0,o.tW)(),(0,o.Np)()),_=(0,v.f_)(),b="cmp_feedfromMobile",x=e=>{var a,l,s,o,r;let{data:m,item:v,confirm:p}=e;const[x,j]=(0,i.useState)(!1),[y,N]=(0,i.useState)(0);(0,u.s0)();(0,i.useEffect)((()=>{if(!x){var e,a;j(!0);let l="debit",i="credit",s={...v};"expense"===(null===s||void 0===s?void 0:s.movementType)&&(l="credit",i="debit");let d=(null===s||void 0===s?void 0:s.title)+"; "+(null===s||void 0===s?void 0:s.description);I("description",d),I("date",1*(null===s||void 0===s?void 0:s.date)),s.document?I("document",null===s||void 0===s?void 0:s.document):I("document",(0,t.UG)(1*(null===s||void 0===s?void 0:s.date))+"_"+(0,t.LO)());let n=null===(e=(0,t.bh)("categories_ids"))||void 0===e?void 0:e[null===s||void 0===s?void 0:s.categoryId],o={};o.amount=null===s||void 0===s?void 0:s.amount,o.movementId=null===s||void 0===s?void 0:s.movementId,o.description=d,o.date=null===s||void 0===s?void 0:s.date,o.document=null===s||void 0===s?void 0:s.document;let c={...o};o.account=null===(a=(0,t.bh)("global_account_params"))||void 0===a?void 0:a.cash_bank.account,o.type=l,c.account=null===n||void 0===n?void 0:n.account,null!==n&&void 0!==n&&n.subAccount&&(c.subAccount=null===n||void 0===n?void 0:n.subAccount),c.type=i,(0,t.Rz)("cmpListfromMbl",[c,o]),N((0,t.M5)())}}),[null===(a=(0,t.bh)(b))||void 0===a?void 0:a.movementId]);const I=(e,a,l)=>{let i=(0,t.bh)(b)||{};l?(i[l]||(i[l]={}),i[l][e]=a):i[e]=a,(0,t.Rz)(b,i),N((0,t.M5)())},w=e=>{window.open(e)};return(0,c.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"Associar Asiento"}),(0,c.jsx)("div",{className:"flexSpace"}),null!==v&&void 0!==v&&v.imagePath?(0,c.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{(0,n.Qq)(v,w)},children:"See Image"}):null]}),(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)(_,{init:null===(l=(0,t.bh)(b))||void 0===l?void 0:l.date,updDate:e=>I("date",e)}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(h,{init:null===(s=(0,t.bh)(b))||void 0===s?void 0:s.document,label:"Documento",width:120,updChanges:e=>I("document",e)})]}),(0,c.jsx)("div",{className:"_dsplFlx ",children:(0,c.jsx)(h,{init:null===(o=(0,t.bh)(b))||void 0===o?void 0:o.description,label:"Descripcion",width:520,updChanges:e=>I("description",e)})}),(0,c.jsx)("div",{style:{marginTop:19},children:(0,c.jsx)(g,{item:(0,t.bh)("cmpListfromMbl"),updFrm:I,document:null===(r=(0,t.bh)(b))||void 0===r?void 0:r.document})}),(0,c.jsxs)("div",{className:"_dsplFlx ",style:{margin:"32px 32px 0 0"},children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)(f,{clickHandler:async()=>{var e,a,l;let i={...(0,t.bh)(b)};i.date?i.date=new Date(i.date).getTime()+4800:i.date=(new Date).getTime()+4800;let s=await(0,t.fN)(i.date);i.comprobanteId=s,i.document||(i.document=(0,t.LO)()+"_"+(0,t.UG)(i.date));let n=[];(0,t.bh)("cmpListfromMbl")&&(null===(e=(0,t._2)((0,t.bh)("cmpListfromMbl")))||void 0===e||e.map((async(e,a)=>{let l=(0,t.bh)("cmpListfromMbl")[e];if(!isNaN(1*l.amount)&&1*l.amount>0){var s,d;let e={...i};e.account=l.account,l.subAccount&&(e.subAccount=l.subAccount),e.movementRef=v.movementId,e.type=l.type,e.amount=1*l.amount,e.operationId=(0,t.M5)();let a={...null===(s=(0,t.bh)((0,t.hQ)()))||void 0===s?void 0:s.add_opera};a.params={businessId:null===(d=(0,t.bh)("profileUser"))||void 0===d?void 0:d.businessId,year:new Date(i.date).getFullYear()},a.form=e,n.push(a)}})));let o={...null===(a=(0,t.bh)((0,t.hQ)()))||void 0===a?void 0:a.upd__incms_expns};o.params={businessId:null===(l=(0,t.bh)("profileUser"))||void 0===l?void 0:l.businessId,movementId:v.movementId,year:(0,t.bh)("date_current_year")},o.data2update={comprobanteId:s},n.push(o);const c=n.map((async e=>{const a=(0,t.I7)(e);await a}));await Promise.all(c),setTimeout((()=>{(0,t.Rz)("cmpListfromMbl",null),(0,t.Rz)(b,null),(null===m||void 0===m?void 0:m.modalID)&&(0,d.CloseModal)({id:null===m||void 0===m?void 0:m.modalID}),(0,t.Ey)(p)&&p()}),400)},label:"Salvar"})]})]})},f=e=>{let{clickHandler:a,label:l}=e;return(0,c.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:a,children:(0,c.jsx)("div",{className:" jaqJnq",children:l})})},g=e=>{let{item:a,updFrm:l,document:s}=e;const[d,n]=(0,i.useState)(0),o=(e,i,s)=>{var d;let o=a||(null===(d=(0,t.bh)("global_account_params"))||void 0===d?void 0:d.w2_params);s?(o[s]||(o[s]={}),o[s][e]=i):o[e]=i,l("w2",o),n((0,t.M5)())};return(0,c.jsxs)(m.lp,{children:[(0,c.jsx)("div",{className:"iMTYiw hiKoiM",children:"Comprobante Contables"}),(0,c.jsx)("div",{className:"_dsplFlx w_100prc",style:{marginTop:19}}),(0,c.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,c.jsx)("div",{className:"igLyC tr_bar_20 pddBtm-12",children:(0,c.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Cuenta"})}),(0,c.jsx)("div",{className:"igLyC tr_bar_20 pddBtm-12",children:(0,c.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Sub Cuenta"})}),(0,c.jsx)("div",{className:"igLyC tr_bar_30 pddBtm-12",children:(0,c.jsx)("div",{className:"txfnt_lfal whi_headr",children:"Documento"})}),(0,c.jsx)("div",{className:"igLyC tr_bar_15 pddBtm-12 tr_bar_15",children:(0,c.jsx)("div",{className:"txt_al_r whi_headr",children:"debito"})}),(0,c.jsx)("div",{className:"igLyC tr_bar_15 pddBtm-12 tr_bar_15",children:(0,c.jsx)("div",{className:"txt_al_r whi_headr",children:"Credito"})})]}),a&&a.map(((e,a)=>(0,c.jsx)(j,{item:e,document:s,label:"Federal Tax",percentDefault:14.5,onChange:o,keyFld:"federalTax"},e.movementId+"_"+a)))]})},j=e=>{var a,l;let{label:i,item:s,document:d,keyFld:n,percentDefault:o}=e;const r=e=>{};let m=null===(a=(0,t.bh)("account_ids"))||void 0===a?void 0:a[null===s||void 0===s?void 0:s.account],v=null===(l=(0,t.bh)("sub_account_ids"))||void 0===l?void 0:l[null===s||void 0===s?void 0:s.subAccount];return(0,c.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,c.jsx)("div",{className:"igLyC light_300_color tr_bar_20 pddBtm-12",children:(0,c.jsx)("div",{className:"txfnt_lfal",children:(0,c.jsx)(p,{data:m,color:"var(--light-300)",labelField:"code",infoField:"name"})})}),(0,c.jsx)("div",{className:"igLyC light_300_color tr_bar_20 pddBtm-12",children:(0,c.jsx)("div",{className:"txfnt_lfal",children:(0,c.jsx)(p,{data:v,color:"var(--light-300)",labelField:"subAccount",infoField:"subAccountName"})})}),(0,c.jsx)("div",{className:"igLyC light_300_color tr_bar_30 pddBtm-12",children:(0,c.jsx)("div",{className:"txfnt_lfal",children:d})}),"debit"===s.type?(0,c.jsx)(y,{keyFld:"amount",item:s,onChange:r}):(0,c.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,c.jsx)("div",{className:" txt_al_r",children:"0.00"})}),"credit"===s.type?(0,c.jsx)(y,{keyFld:"amount",item:s,onChange:r}):(0,c.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,c.jsx)("div",{className:" txt_al_r",children:"0.00"})})]})},y=e=>{let{label:a,item:l,onChange:s,keyFld:d,percentDefault:n}=e;const[o,r]=(0,i.useState)(0),[m,v]=(0,i.useState)(0),u=e=>{v(e.target.value)},p=e=>{13===e.keyCode&&((0,t.UE)(m)&&s&&s(d,m),r(!1))};m||null===l||void 0===l||l[d];return o?(0,c.jsx)("div",{className:"igLyC light_300_color tr_bar_15",children:(0,c.jsx)("input",{className:"inpyt_tx",type:"number","aria-haspopup":"false","auto-capitalize":"off","auto-complete":"off","auto-correct":"off","spell-check":"false",onChange:u,onKeyDown:p})}):(0,c.jsx)("div",{className:"igLyC light_300_color tr_bar_15",onClick:()=>r(!o),children:(0,c.jsx)("div",{className:" txt_al_r",children:(1*l[d]).toFixed(2)})})};l(4382);var N=l(1087);const I=(0,o.PU)(),w=(0,s.Hb)(),C=(0,s._$)(),M=e=>{let{data:a,elmId:l,handleRefreshAll:s}=e;const[o,m]=(0,i.useState)(!1),[v,p]=(0,i.useState)(0),[h,_]=((0,u.s0)(),(0,i.useState)(0));(0,i.useEffect)((()=>{o||(m(!0),p((0,t.M5)()))}));const b=()=>{p((0,t.M5)())},f=()=>{(0,n.MX)(b)},g=()=>{(0,n.M_)(null===a||void 0===a?void 0:a.movementId,s)},j=e=>{var a;let l=(0,t.LH)(e);(0,n.Qq)(null===(a=(0,t.bh)("profileUser"))||void 0===a?void 0:a.businessId,e,(e=>y(e,l)))},y=async(e,a)=>{var l=await(0,t.Em)(e,a);(0,t.Rz)("image_url_mov",e),(0,t.Rz)("image_preview_mov",l),(e=>{var a=new Image;a.onload=function(){let e={oh:a.height,ow:a.width,h:a.height,w:a.width};(0,t.Rz)("preview_mov_dmz",e),M()},e&&(a.src=e)})(l)},M=(e,l)=>{let i={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};i.content=(0,c.jsx)(C,{confirm:s,item:a}),(0,d.OpenModal)(i)},k=async(e,l)=>{if(e){var i=await(0,t.Em)(e,l);window.open(i)}else(async()=>{let e=a.imagePath;(0,t.LH)(e),(0,n.Qq)(e,(a=>(0,n.Je)(a,e)))})()};return(0,c.jsx)("div",{className:"item_acc",children:(0,c.jsxs)("div",{className:"_dsplFlx operation_item_box",children:[(0,c.jsx)("div",{className:"icon_revision",onClick:async()=>{if((0,t.I0)())if(a.inManualRevision)(0,t.Rz)((0,t.Ks)()+"_upd",a),(0,t.Rz)((0,t.Ks)()+"_upd_bck",JSON.parse(JSON.stringify(a))),j(a.imagePath);else if(a.comprobanteId){let e=window.location.origin+"/#/accounting-ledger?cId=".concat(a.comprobanteId);window.open(e)}else{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,c.jsx)(x,{confirm:s,item:a}),(0,d.OpenModal)(e)}},children:(0,c.jsx)(I,{name:a.inManualRevision?"help":a.comprobanteId?"success":"alert",color:a.inManualRevision?"var(--partial-success)":a.comprobanteId?"var(--hrm_palette-success-fg)":"var(--hrm_palette-selected-nav-text)"})}),(0,c.jsx)("div",{className:" tr_bar_15 font_onm",children:(0,c.jsx)(N.OL,{to:{pathname:"/accounting-ledger",search:"?cId=".concat(a.comprobanteId)},children:null===a||void 0===a?void 0:a.comprobanteId})}),(0,c.jsxs)("div",{className:"_dsplFlx tr_bar_70",onClick:async()=>{a.imagePath?((0,t.Rz)((0,t.Ks)()+"_upd",a),(0,t.Rz)((0,t.Ks)()+"_upd_bck",JSON.parse(JSON.stringify(a))),j(a.imagePath)):(async()=>{if((0,t.I0)()){(0,t.Rz)("upd_fromMobile",a),(0,t.Rz)("upd_fromMobile_bck",JSON.parse(JSON.stringify(a)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,c.jsx)(w,{confirm:f}),(0,d.OpenModal)(e)}})()},children:[(0,c.jsx)("div",{className:" tr_bar_15",children:(0,t.sJ)(1*(null===a||void 0===a?void 0:a.date))}),(0,c.jsx)("div",{className:" tr_bar_25 font_onm",style:{color:"expense"===a.movementType?"var(--hrm_palette-selected-nav-text)":"var( --hrm_palette-blue-purple)"},children:null===a||void 0===a?void 0:a.title}),(0,c.jsx)("div",{className:" tr_bar_45  font_onm",style:{marginLeft:9},children:null===a||void 0===a?void 0:a.description}),(0,c.jsx)("div",{className:" tr_bar_15 txt_al_r",style:{color:"expense"===a.movementType?"var(--hrm_palette-selected-nav-text)":"var( --hrm_palette-blue-purple)"},children:null===a||void 0===a?void 0:a.amount})]}),(0,c.jsx)("div",{className:"flexSpace"}),null!==a&&void 0!==a&&a.imagePath?(0,c.jsx)("div",{className:"icon tr_bar_5",onClick:()=>{let e=a.imagePath;e=a.imagePath.split(".png")[0]+".webp";let l=(0,t.LH)(e);(0,n.Qq)(e,(e=>k(e,l)))},children:(0,c.jsx)(I,{name:"image_outline",color:"var(--partial-success)"})}):(0,c.jsx)("div",{className:"icon tr_bar_5"}),(0,c.jsx)("div",{className:"icon tr_bar_5",onClick:()=>{let e=(0,t.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,t.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,c.jsx)(r,{confirm:g,item:a}),(0,d.OpenModal)(e)}},children:(0,c.jsx)(I,{name:"outline_delete",color:"#c62828"})})]})})}},1475:(e,a,l)=>{l.d(a,{Je:()=>d,MX:()=>t,M_:()=>u,Qq:()=>s,bM:()=>m,lG:()=>o,p8:()=>c,sV:()=>n,tS:()=>p,vC:()=>r});var i=l(2350);const t=async e=>{e&&e()},s=async(e,a)=>{var l;let t={query:"getSignedUrl",params:{userId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,fileName:e}};const s=(0,i.I7)(t),d=await s;null!==d&&void 0!==d&&d.url?(0,i.Ey)(a)&&a(null===d||void 0===d?void 0:d.url):(0,i.Ey)(a)&&a(null)},d=async(e,a,l)=>{var t;let s={query:"ProccessImage",params:{userId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,fileName:a,url:e}};const d=(0,i.I7)(s),n=await d;null!==n&&void 0!==n&&n.url?(0,i.Ey)(l)&&l(null===n||void 0===n?void 0:n.url):(0,i.Ey)(l)&&l(null)},n=async(e,a)=>{let l={query:"detectLandMark",params:{url:e}};const t=(0,i.I7)(l),s=await t;a(e,s||null)},o=async e=>{var a,l,t,s;let d={...null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.search_incms_expns};d.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId,year:(0,i.bh)("date_current_year"),":date1":null===(t=(0,i.bh)("date_range_comps"))||void 0===t?void 0:t.initDate,":date2":null===(s=(0,i.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate},(0,i.bh)("search_acc_record").split(" ").map(((e,a)=>{e&&(d.params[":search"+a]=e.trim())}));const n=(0,i.I7)(d),o=await n;o&&((0,i.Rz)("feedfMbls_ids",o),(0,i.Rz)("feedfMbls_list",v((0,i.jQ)(o),"date")),e&&e())},c=async()=>{let e=[];(0,i.bh)("feedfMbls_list").map((async(a,l)=>{var t,s,d,n,o,c;if(a.comprobanteId)return;let r={...a},m={...a},v="debit",u="credit";"expense"===(null===m||void 0===m?void 0:m.movementType)&&(v="credit",u="debit");let p=(null===m||void 0===m?void 0:m.title)+"; "+(null===m||void 0===m?void 0:m.description),h=null===(t=(0,i.bh)("categories_ids"))||void 0===t?void 0:t[null===m||void 0===m?void 0:m.categoryId],_={};_.amount=null===m||void 0===m?void 0:m.amount,_.movementId=null===m||void 0===m?void 0:m.movementId,_.description=p,_.date=null===m||void 0===m?void 0:m.date;let b={..._};_.account=null===(s=(0,i.bh)("global_account_params"))||void 0===s?void 0:s.cash_bank.account,_.type=v,b.account=null===h||void 0===h?void 0:h.account,null!==h&&void 0!==h&&h.subAccount&&(b.subAccount=null===h||void 0===h?void 0:h.subAccount),b.type=u;let x=[b,_];r.date?r.date=new Date(r.date).getTime()+4800:r.date=(new Date).getTime()+4800;let f=await(0,i.V_)(r.date,1*l+4);r.comprobanteId=f,r.document=null===(d=r.document)||void 0===d?void 0:d.trim(),x&&(null===(n=(0,i._2)(x))||void 0===n||n.map((async(l,t)=>{let s=x[l];if(!isNaN(1*s.amount)&&1*s.amount>0){var d,n;let l={...r};l.account=s.account,s.subAccount&&(l.subAccount=s.subAccount),l.movementRef=a.movementId,l.type=s.type,l.amount=1*s.amount,l.operationId=(0,i.M5)(),l.document=(0,i.LO)()+"_"+(0,i.UG)(r.date);let t={...null===(d=(0,i.bh)((0,i.hQ)()))||void 0===d?void 0:d.add_opera};t.params={businessId:null===(n=(0,i.bh)("profileUser"))||void 0===n?void 0:n.businessId,year:new Date(r.date).getFullYear()},t.form=l,e.push(t)}})));let g={...null===(o=(0,i.bh)((0,i.hQ)()))||void 0===o?void 0:o.upd__incms_expns};g.params={businessId:null===(c=(0,i.bh)("profileUser"))||void 0===c?void 0:c.businessId,movementId:a.movementId,year:(0,i.bh)("date_current_year")},g.data2update={comprobanteId:f},e.push(g)})),setTimeout((()=>{}),4e3)},r=async e=>{var a,l;let t={...null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.search_categapp};t.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId},(0,i.bh)("search_categories").split(" ").map(((e,a)=>{e&&(t.params[":search"+a]=e.trim())}));const s=(0,i.I7)(t),d=await s;d&&((0,i.Rz)("categories_ids",d),(0,i.Rz)("categories_list",v((0,i.jQ)(d),"name")),e&&e())},m=async e=>{var a,l;let t={...null===(a=(0,i.bh)((0,i.hQ)()))||void 0===a?void 0:a.all_categapp};t.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId};const s=(0,i.I7)(t),d=await s;d&&(!function(e){const a=e=>({label:e.name,id:e.categoryId});(0,i.Rz)("categories_pick_data",e.map(a))}(d),(0,i.Rz)("categories_list",v(d,"name")),(0,i.Rz)("categories_ids",(0,i.ME)(d,"categoryId"))),e&&e()};const v=(e,a)=>(0,i.MV)("sort_feedfMbl",[e],(()=>e&&e.sort(((e,l)=>{let i=1*e[a],t=1*l[a];return i<t?-1:i>t?1:0})))),u=async(e,a)=>{var l,t;let s={...null===(l=(0,i.bh)((0,i.hQ)()))||void 0===l?void 0:l.delete__incms_expns};s.params={businessId:null===(t=(0,i.bh)("profileUser"))||void 0===t?void 0:t.businessId,movementId:e};const d=(0,i.I7)(s);await d&&a&&a()},p=(e,a)=>(0,i.MV)("rangeArr",[e,a],(()=>e?(0,i._2)(e).slice(0,a):[]))},5196:()=>{},5027:()=>{}}]);
//# sourceMappingURL=3075.2b5ac5c7.chunk.js.map