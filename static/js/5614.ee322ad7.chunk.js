"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5614],{5614:(e,o,s)=>{s.r(o),s.d(o,{default:()=>_});var a=s(2791),t=s(2350),i=(s(1e3),s(2647)),l=s(3588),d=s(1702),r=s(9760),n=s(2692),c=s(2502),u=s(6677),v=s(4481),b=s(184);const m=(0,i.JC)(),h=(0,n.dz)(),p=(0,n.Ax)(),x=(0,i.PU)(),_=e=>{var o,s,i,n,m;let{data:h,item:_,confirmYearClose:g}=e;const[f,j]=(0,a.useState)(!1),[,w]=(0,a.useState)(0);(0,a.useEffect)((()=>{if(!f){var e;if(j(!0),null!==_&&void 0!==_&&_.employeeId)null!==(e=(0,t.bh)("employees_ids"))&&void 0!==e&&e[null===_||void 0===_?void 0:_.employeeId]||(0,c.Dy)(T);(0,t.bh)("providers_ids")||(0,u.Je)(T),w((0,t.M5)())}}));const N=()=>{let e=(0,t.M5)();setTimeout((()=>{z(e)}),1750),g(e)},I=e=>{e?(0,r.CloseModal)({id:e}):(null===h||void 0===h?void 0:h.modalID)&&(0,r.CloseModal)({id:null===h||void 0===h?void 0:h.modalID})},z=e=>{var o,s,a,i;let l=(0,t.bh)("date_current_year"),d={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,date:_.date,comprobanteId:_.comprobanteId,description:_.description,year:1*l+1,businessYearId:null===(s=(0,t.bh)("YearAccBussines"))||void 0===s||null===(a=s[l])||void 0===a?void 0:a.businessYearId},r=[];_.operations.map((e=>{var o,s;let a={};var i,l,d,n,c;(null!==e&&void 0!==e&&e.debit?(a.amount=null===e||void 0===e?void 0:e.debit,a.type="debit"):null!==e&&void 0!==e&&e.credit&&(a.amount=null===e||void 0===e?void 0:e.credit,a.type="credit"),a.account=null===e||void 0===e||null===(o=e.account)||void 0===o?void 0:o.accountId,null!==e&&void 0!==e&&null!==(s=e.sub_account)&&void 0!==s&&s.sub_accountId)&&(a.subAccount=null===e||void 0===e||null===(i=e.sub_account)||void 0===i?void 0:i.sub_accountId,null!==(l=(0,t.bh)("providers_subacc"))&&void 0!==l&&null!==(d=l[a.subAccount])&&void 0!==d&&d.providerId&&(a.providerId=null===(n=(0,t.bh)("providers_subacc"))||void 0===n||null===(c=n[a.subAccount])||void 0===c?void 0:c.providerId));a.document=null===e||void 0===e?void 0:e.document,a.operationId=(0,t.M5)(),r.push(a)}));let n={...null===(i=(0,t.bh)((0,t.hQ)()))||void 0===i?void 0:i.close_hrm_years};n.params=d,n.form=r,C(n,e)},C=async(e,o)=>{const s=(0,t.I7)(e),a=await s;a&&!a.error&&(F(o),(0,v.Q)())},F=e=>{setTimeout((()=>{I(e),I()}),2500)},T=()=>{w((0,t.M5)())};let k=null===(o=(0,t.bh)("employees_ids"))||void 0===o||null===(s=o[null===_||void 0===_?void 0:_.employeeId])||void 0===s?void 0:s.name,R=1*(null===(i=_.balance)||void 0===i?void 0:i.toFixed(2))!==0;return(0,b.jsxs)("div",{style:{maxHeight:"96vh",minHeight:"90vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,b.jsx)("div",{className:"_dsplFlx ",children:(0,b.jsx)("div",{className:"flexSpace"})}),(0,b.jsxs)("div",{className:"_dsplFlx ",children:[(0,b.jsxs)("div",{className:"_dsplFlx",style:{marginTop:20},children:[(0,b.jsx)("div",{className:"desc_lbl",children:"Comprobante:"}),(0,b.jsx)("div",{className:"name comprobante_id",style:R?{color:"var(--hrm_palette-selected-nav-text)"}:{},children:null===_||void 0===_?void 0:_.comprobanteId})]}),R?(0,b.jsx)("div",{className:"msg_alert",children:(0,b.jsxs)("div",{className:"msg_alert_title",children:["El comprobante no esta cuadrado ",null===_||void 0===_||null===(n=_.balance)||void 0===n?void 0:n.toFixed(2)]})}):(0,b.jsx)("div",{className:"msg_alert hrm_themecolor green darkwgreen",onClick:async()=>{var e,o,s;let a={...null===(e=(0,t.bh)((0,t.hQ)()))||void 0===e?void 0:e.ask_notf_code},i=(0,t.M5)();a.params={businessId:null===(o=(0,t.bh)("profileUser"))||void 0===o?void 0:o.businessId,phoneNumber:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.phoneNumber,log:i};const l=(0,t.I7)(a),d=await l;if(d&&!d.error){let e={zIndex:480,height:"40vh"};e.content=(0,b.jsx)(p,{info:d,tmk:i,confirm:N}),(0,r.OpenModal)(e)}},children:(0,b.jsx)("div",{className:"msg_alert_title",children:"El comprobante esta listo y verificado para la apertura del 2024"})}),(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsx)("div",{className:"icon",onClick:()=>{var e;let o=[];_.operations&&(null===(e=_.operations)||void 0===e||e.map(((e,s)=>{let a={...e};a.description=_.description,a.comprobanteId=_.comprobanteId,a.date=(0,t.sJ)(_.date),a.description=_.description;let i=e.account.code+" - "+e.account.name;if(a.account=i,a.sub_account){let o=e.sub_account.subAccount+" - "+e.sub_account.subAccountName;a.sub_account=o}o.push(a)}))),(0,t.eY)("export_compobante_"+_.comprobanteId+"_"+(0,t.M5)()+".csv",o)},style:{marginRight:17},children:(0,b.jsx)(x,{name:"google-spreadsheet",color:"#282828"})}),(0,b.jsx)("div",{className:"icon",onClick:()=>{(0,d.C)(_)},children:(0,b.jsx)(x,{name:"printer",color:"#282828"})})]}),(0,b.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsxs)("div",{className:"_dsplFlx",children:[(0,b.jsx)("div",{className:"desc_lbl"}),(0,b.jsx)("div",{className:"name",children:(0,t.sG)(null===_||void 0===_?void 0:_.date)})]})]}),(0,b.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,b.jsx)("div",{className:"tr_bar_15",children:"Cuenta"}),(0,b.jsx)("div",{className:"tr_bar_15",children:"Sub Cuenta"}),(0,b.jsx)("div",{className:"tr_bar_40",children:"Documento"}),(0,b.jsx)("div",{className:"tr_bar_15",children:"Debito"}),(0,b.jsx)("div",{className:"tr_bar_15",children:"Credito"})]}),null===(m=(0,l.Eb)(null===_||void 0===_?void 0:_.operations))||void 0===m?void 0:m.map(((e,o)=>(0,b.jsx)(y,{element:e,in2D:o},o))),(0,b.jsxs)("div",{className:"cmp_desc",children:[(0,b.jsx)("div",{className:"desc_lbl",children:"Detalles:"}),(0,b.jsxs)("div",{className:"description",children:[null===_||void 0===_?void 0:_.description," ",k]})]}),(0,b.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,b.jsx)("div",{className:"flexSpace"}),(0,b.jsx)("span",{className:"entryType",children:_.entryName||"Comprobante Manual"})]})]})},y=e=>{var o,s;let{element:a,in2D:i}=e;return(0,b.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,b.jsx)("div",{className:"tr_bar_15",children:(0,b.jsx)(m,{data:a.account,labelField:"code",infoField:"name"})}),(0,b.jsx)("div",{className:"tr_bar_15",children:(0,b.jsx)(m,{data:a.sub_account,labelField:"subAccount",infoField:"subAccountName"})}),(0,b.jsx)("div",{className:"tr_bar_40",onClick:()=>{var e;if(null!==(e=(0,t.Ch)()[(0,t.bh)("date_current_year")])&&void 0!==e&&e.isClosed);else if((0,t.ML)()){let e=(0,t.bh)("lastTimeCallModal")||0;if(Date.now()>e){let e=["document","amount","type","description","account","subAccount","comprobanteId"],o=(0,t.Ld)({...(0,t.bh)("comprobante_list")[a.operationId]},e);(0,t.Rz)("upd_comprobantebyId",o),(0,t.Rz)("upd_comprobantebyId_bck",JSON.parse(JSON.stringify(o))),(0,t.Rz)("lastTimeCallModal",Date.now()+320);let s={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};s.content=(0,b.jsx)(h,{confirm:()=>{},item:a}),(0,r.OpenModal)(s)}}},children:a.document}),(0,b.jsx)("div",{className:"tr_bar_15",children:null===(o=1*a.debit)||void 0===o?void 0:o.toFixed(2)}),(0,b.jsx)("div",{className:"tr_bar_15",children:null===(s=1*a.credit)||void 0===s?void 0:s.toFixed(2)})]},i)}},1702:(e,o,s)=>{s.d(o,{C:()=>n});var a=s(6963),t=s(2350),i=s(4e3);let l=0,d=null,r=null;const n=async e=>{const o=await a.PDFDocument.create();if(o.registerFontkit(i.Z),d=await o.embedFont(a.StandardFonts.TimesRoman,{subset:!0}),r=await o.embedFont(a.StandardFonts.TimesRomanBold,{subset:!0}),(0,t.bh)("modernFontReport")){let e=(0,t.bh)("Roboto-Bold.ttf"),s=(0,t.bh)("ggSans-Italic.ttf"),a=(0,t.bh)("ggSans-Medium.ttf");const i=await fetch(e).then((e=>e.arrayBuffer()));r=await o.embedFont(i,{subset:!0});await fetch(s).then((e=>e.arrayBuffer()));const l=await fetch(a).then((e=>e.arrayBuffer()));d=await o.embedFont(l,{subset:!0})}let s=o.addPage();const{width:n,height:c}=s.getSize(),u=10;let v=0,b=44;l=c-40,s.drawText(e.entryName||"Comprobante Manual",{x:50,y:l,size:14,font:r,color:(0,a.rgb)(0,0,0)});const m=r.widthOfTextAtSize(e.comprobanteId,14),h=d.widthOfTextAtSize("Comprobante:  ",13);s.drawText("Comprobante:  ",{x:580-h-m,y:l,size:13,font:d,color:(0,a.rgb)(0,0,0)}),s.drawText(e.comprobanteId+"",{x:580-m,y:l,size:14,font:r,color:(0,a.rgb)(0,0,0)}),l-=25;const p=d.widthOfTextAtSize("Fecha:  ",13),x=r.widthOfTextAtSize((0,t.Gv)(e.date)+"",14);s.drawText("Fecha:  ",{x:580-p-x,y:l,size:13,font:d,color:(0,a.rgb)(0,0,0)}),s.drawText((0,t.Gv)(e.date)+"",{x:580-x,y:l,size:14,font:r,color:(0,a.rgb)(0,0,0)}),l-=15;let _=(null===e||void 0===e?void 0:e.operations)||[];l-=18,s.drawText("Cuenta",{x:20,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)}),s.drawText("Sub Cuenta",{x:205,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)}),s.drawText("Documento",{x:360,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)});const y=r.widthOfTextAtSize("Debito",13);s.drawText("Debito",{x:500-y,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)});const g=r.widthOfTextAtSize("Credito",13);s.drawText("Credito",{x:580-g,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)}),l-=8,s.drawRectangle({x:15,y:l+1,width:570,height:.95,color:(0,a.rgb)(0,0,0),borderColor:(0,a.rgb)(0,0,0)});let f=Math.ceil(_.length/40);Array.from(Array(f).keys()).map((e=>{if(e>0){s=o.addPage(),l=c-26,s.drawText("Cuenta",{x:20,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)}),s.drawText("Sub Cuenta",{x:205,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)}),s.drawText("Documento",{x:360,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)});const e=r.widthOfTextAtSize("Debito",13);s.drawText("Debito",{x:500-e,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)});const t=r.widthOfTextAtSize("Credito",13);s.drawText("Credito",{x:580-t,y:l,size:13,font:r,color:(0,a.rgb)(0,0,0)}),l-=8,s.drawRectangle({x:15,y:l+1,width:570,height:.95,color:(0,a.rgb)(0,0,0),borderColor:(0,a.rgb)(0,0,0)}),l-=2}let t=_.slice(v,b);e>0&&(v=b+1,b=v+48),Array.isArray(t)&&t.map(((e,o)=>{var t,i,r,n,c;(l-=16,null!==e&&void 0!==e&&null!==(t=e.account)&&void 0!==t&&t.name)&&s.drawText((null===e||void 0===e||null===(c=e.account)||void 0===c?void 0:c.name)+"",{x:20,y:l,size:u,font:d,color:(0,a.rgb)(0,0,0)});if(null!==e&&void 0!==e&&null!==(i=e.sub_account)&&void 0!==i&&i.subAccountName){var v;let o=null===e||void 0===e||null===(v=e.sub_account)||void 0===v?void 0:v.subAccountName.substring(0,32);s.drawText(o+"",{x:205,y:l,size:u,font:d,color:(0,a.rgb)(0,0,0)})}s.drawText((null===e||void 0===e?void 0:e.document)+"",{x:360,y:l,size:u,font:d,color:(0,a.rgb)(0,0,0)});let b=null!==e&&void 0!==e&&e.debit?null===(r=1*(null===e||void 0===e?void 0:e.debit))||void 0===r?void 0:r.toFixed(2):"0.00";const m=d.widthOfTextAtSize(b+"",u);s.drawText(b+"",{x:500-m,y:l,size:u,font:d,color:(0,a.rgb)(0,0,0)});let h=null!==e&&void 0!==e&&e.credit?null===(n=1*(null===e||void 0===e?void 0:e.credit))||void 0===n?void 0:n.toFixed(2):"0.00";const p=d.widthOfTextAtSize(h+"",u);s.drawText(h+"",{x:580-p,y:l,size:u,font:d,color:(0,a.rgb)(0,0,0)})}))})),l-=28,s.drawRectangle({x:15,y:l+1,width:570,height:.85,color:(0,a.rgb)(0,0,0),borderColor:(0,a.rgb)(0,0,0)}),l-=18,s.drawText("Detalles: ",{x:50,y:l,size:12,font:d,color:(0,a.rgb)(0,0,0)}),l-=18,s.drawText(e.description?e.description:"",{x:70,y:l,size:11,font:d,color:(0,a.rgb)(0,0,0)});let j=function(e){let o=new Blob([e],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(o)}(await o.save());window.open(j)}},2502:(e,o,s)=>{s.d(o,{Dy:()=>t,Oy:()=>d,kQ:()=>i,lG:()=>l});var a=s(2350);const t=async e=>{var o,s;let t={...null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.all_employee};t.params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId};const i=(0,a.I7)(t),l=await i;l&&((0,a.Rz)("employees_list",r((0,a.jQ)(l),"code")),(0,a.Rz)("employees_ids",(0,a.ME)((0,a.jQ)(l),"employeeId")),e&&e())},i=async e=>{var o,s;let t={...null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.search_employee};t.params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":(0,a.bh)("searchQry")};const i=(0,a.I7)(t),l=await i;l&&((0,a.Rz)("employees_list",r((0,a.jQ)(l),"code")),e&&e())},l=async(e,o)=>{var s,t,i,l;let r={...null===(s=(0,a.bh)((0,a.hQ)()))||void 0===s?void 0:s.search_employee_paystub};r.params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId,year:(0,a.bh)("date_current_year"),":date1":(null===(i=(0,a.bh)("date_range_comps"))||void 0===i?void 0:i.initDate)-10,":date2":null===(l=(0,a.bh)("date_range_comps"))||void 0===l?void 0:l.lastDate,":employeeId":e};const n=(0,a.I7)(r),c=await n;c&&!c.error&&((0,a.Rz)("paystub_submayor_list",c),(0,a._2)(c).map((async e=>{var o,s;d(null===(o=c[e])||void 0===o?void 0:o.comprobanteId,null===(s=c[e])||void 0===s?void 0:s.employeeId)}))),o&&o()},d=async(e,o)=>{let s="get_compById_last"+e+"_"+o,t=(0,a.bh)(s)||0;if(Date.now()>t){var i,l;(0,a.Rz)(s,Date.now()+890);let t={...null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.filter_search_opera};t.params={businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId,":search0":e,":search1":o};const d=(0,a.I7)(t),r=await d;if(r){let o=(0,a.bh)("cmpByPayStubMayor");return o[e]=r,(0,a.Rz)("cmpByPayStubMayor",o),r}}return null};const r=(e,o)=>(0,a.MV)("sortEmployees",[e],(()=>e&&e.sort(((e,s)=>{let a=1*e[o],t=1*s[o];return a<t?-1:a>t?1:0}))))},4481:(e,o,s)=>{s.d(o,{Q:()=>b,Z:()=>v});var a=s(2791),t=(s(3513),s(9760)),i=s(2647),l=s(2350),d=s(2692),r=s(184);const n=(0,i.PU)(),c=(0,i.YZ)(),u=(0,i.A5)(),v=((0,d.Ax)(),e=>{let{data:o,confirm:s,handleClick:i,close:d}=e;const[,v]=(0,a.useState)(0),{modalID:m}=o,h=e=>{(0,t.CloseModal)({id:m})},p=e=>{(e&&!(0,l.bh)("modernFontReport")||!e&&(0,l.bh)("modernFontReport"))&&((0,l.Rz)("modernFontReport",e),v((0,l.M5)()))},x=async e=>{var o;let s=null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.add_hrm_years;if(e&&s){var a;s.params={businessId:null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId,year:e};const o=(0,l.I7)(s);await o&&b()}};return(0,r.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"40vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Settings"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,l.ML)()?(0,r.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,r.jsx)(c,{initvalue:(0,l.bh)("showLog"),keyCode:77,updChange:e=>{return o=e,(0,l.Rz)("showLog",o),void v((0,l.M5)());var o}}),(0,r.jsx)("span",{className:"checklabel",children:"Show Logs"})]}):null]}),(0,r.jsx)("div",{className:"theme_setting_box ",style:{margin:"13px 0"},s:!0,children:(0,r.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,r.jsx)(u,{init:(0,l.bh)("date_current_year"),lbl_empty:"Location",list:[{id:2022,label:2022},{id:2023,label:2023},{id:2024,label:2024}],onSelect:e=>(e=>{var o,s;(0,l.Rz)("date_current_year",e);let a=new Date("01/01/"+e).getTime(),t=new Date("01/01/"+(e+1)).getTime()-10;(0,l.Rz)("date_range_comps",{initDate:a,lastDate:t}),(0,l.Rz)("date_range_submayor",{initDate:a,lastDate:t}),null!==(o=(0,l.bh)("YearAccBussines"))&&void 0!==o&&null!==(s=o[e])&&void 0!==s&&s.businessYearId||x(e),v((0,l.M5)()),(0,l.wt)("isLogged_987")})(e.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"220px"})})}),(0,r.jsxs)("div",{className:"theme_style",onClick:()=>{let e=!!!(0,l.bh)("darkTheme");const o=document.querySelector('[theme*="92357239"]');o&&(o.className=e?"light_theme palette_body App ":"dark_theme  palette_body App "),document.children[0].style.backgroundColor=e?"#f1f1f1":"#212121",(0,l.Rz)("darkTheme",e),v((0,l.M5)())},children:[(0,r.jsx)(n,{name:"theme",color:"var(--hrm_palette-general-background-b)"}),(0,r.jsx)("div",{className:"title gSansFont",children:(0,l.bh)("darkTheme")?"Dark":"Light"})]})]})}),(0,r.jsxs)("div",{className:"print_setting_box ",children:[(0,r.jsx)("div",{className:"header ",children:(0,r.jsx)("span",{children:"Estilo de Impresion"})}),(0,r.jsxs)("div",{className:"_dsplFlx spaceAround ",children:[(0,r.jsxs)("div",{className:"print_style modern ".concat((0,l.bh)("modernFontReport")?"active":""),onClick:()=>p(!0),children:[(0,r.jsx)(n,{name:"check_circle"}),(0,r.jsx)("div",{className:"title",children:"Modern"}),(0,r.jsxs)("div",{className:"body",children:[(0,r.jsx)("h4",{children:"Fuente Normal"}),(0,r.jsx)("h5",{children:"Fuente Negrita"})]})]}),(0,r.jsxs)("div",{className:"print_style classic ".concat((0,l.bh)("modernFontReport")?"":"active"),onClick:()=>p(!1),children:[(0,r.jsx)(n,{name:"check_circle"}),(0,r.jsx)("div",{className:"title",children:"Classic"}),(0,r.jsxs)("div",{className:"body",children:[(0,r.jsx)("h4",{children:"Fuente Normal"}),(0,r.jsx)("h5",{children:"Fuente Negrita"})]})]})]})]}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("p",{className:"group_title addBtn",onClick:e=>{document.cookie="".concat((0,l.in)(),'=""'),document.cookie='hrm_access_tkn = ""',document.cookie='F2Atkn = ""',(0,l.Rz)("profileUser",null),(0,l.Rz)("isAdmin",null),h(),(0,l.wt)("isLogged_987")},children:"Logout"}),(0,r.jsx)("p",{className:"group_title addBtn",onClick:h,children:"Cerrar"}),(0,r.jsx)("p",{className:"group_title addBtn purple",onClick:()=>{s(),h()},children:"Guardar"})]})]})}),b=async e=>{var o;let s=null===(o=(0,l.bh)((0,l.hQ)()))||void 0===o?void 0:o.get_hrm_years;if(s){var a;s.params={businessId:e||(null===(a=(0,l.bh)("profileUser"))||void 0===a?void 0:a.businessId)};const o=(0,l.I7)(s),t=await o;t&&((0,l.Rz)("YearAccBussines",t),(0,l.wt)("isLogged_987"))}}},6677:(e,o,s)=>{s.d(o,{Je:()=>t,Qn:()=>r,UO:()=>i,mQ:()=>d});var a=s(2350);const t=async e=>{var o,s;let t={...null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.all_prov_cust};t.params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,year:(0,a.bh)("date_current_year")};const i=(0,a.I7)(t),d=await i;d&&((0,a.Rz)("providers_list",l((0,a.jQ)(d),"name",1)),(0,a.Rz)("providers_ids",(0,a.ME)((0,a.jQ)(d),"providerId")),(0,a.Rz)("providers_subacc",(0,a.ME)((0,a.jQ)(d),"subAccount")),e&&e())},i=async e=>{var o,s;let t={...null===(o=(0,a.bh)((0,a.hQ)()))||void 0===o?void 0:o.search_prov_cust};t.params={businessId:null===(s=(0,a.bh)("profileUser"))||void 0===s?void 0:s.businessId,":search":(0,a.bh)("search_prov"),year:(0,a.bh)("date_current_year")};const i=(0,a.I7)(t),d=await i;d&&((0,a.Rz)("providers_list",l((0,a.jQ)(d),"name",1)),e&&e())};const l=(e,o,s)=>(0,a.MV)("sortProviders",[e],(()=>e&&e.sort(((e,a)=>{let t=1*e[o],i=1*a[o];return t<i?s?-1:1:t>i?s?1:-1:0})))),d=(e,o)=>(0,a.MV)("sortSubProviders",[e],(()=>e&&e.sort(((e,s)=>{let a=1*e[o],t=1*s[o];return a<t?-1:a>t?1:0})))),r=async(e,o)=>{var s,t;let i={...null===(s=(0,a.bh)((0,a.hQ)()))||void 0===s?void 0:s.delete_prov_cust};i.params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId,providerId:e,year:(0,a.bh)("date_current_year")};const l=(0,a.I7)(i);await l&&o&&o()}},1e3:()=>{},3513:()=>{}}]);
//# sourceMappingURL=5614.ee322ad7.chunk.js.map