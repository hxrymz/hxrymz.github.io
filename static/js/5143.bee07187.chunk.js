"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[5143],{5143:(e,a,n)=>{n.d(a,{Dr:()=>h,EV:()=>i,JG:()=>v,Je:()=>t,Qq:()=>c,Rh:()=>y,Tb:()=>f,bM:()=>r,mU:()=>_,o6:()=>s,sV:()=>m,uB:()=>d,yO:()=>p});var o=n(2350);const i=async e=>{var a,n,i,s;let r={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.search_incms_expns};r.params={businessId:null===(n=(0,o.bh)("profileUser"))||void 0===n?void 0:n.businessId,year:(0,o.bh)("date_current_year"),":date1":null===(i=(0,o.bh)("date_range_comps"))||void 0===i?void 0:i.initDate,":date2":null===(s=(0,o.bh)("date_range_comps"))||void 0===s?void 0:s.lastDate},(0,o.bh)("searchQryNotary")&&(0,o.bh)("searchQryNotary").split(" ").map(((e,a)=>{e&&(r.params[":search"+a]=e.trim())})),(0,o.bh)("category_filter")&&(r.params[":search5"]=(0,o.bh)("category_filter").trim()),(0,o.bh)("provider_filter")&&(r.params[":search4"]=(0,o.bh)("provider_filter").trim());const t=(0,o.I7)(r),d=await t;d&&((0,o.Rz)("client_list_ids",d),(0,o.Rz)("client_list_expenses",u(l(d,"movementType","expense"),"date")),(0,o.Rz)("client_list_incomes",u(l(d,"movementType","income"),"date")),(0,o.Ey)(e)&&e())},s=async e=>{var a,n;let i={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.resume__incms_expns};i.params={businessId:null===(n=(0,o.bh)("profileUser"))||void 0===n?void 0:n.businessId,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(i),r=await s;if(r){var t,l;(0,o.Rz)("resume_graph",r);let e=[[_(65),_(42),_(40)]],a=[],n=[[_(58),_(51)]];n.push([_(42),null===(t=r[901])||void 0===t?void 0:t.total]),n.push([_(40),null===(l=r[902])||void 0===l?void 0:l.total]);for(let o in Array.from(Array(12).keys())){var d,u,c,v,m,p,h,y;let n=[I(1*o+1),null===(d=r[901])||void 0===d||null===(u=d.month)||void 0===u?void 0:u[o],null===(c=r[902])||void 0===c||null===(v=c.month)||void 0===v?void 0:v[o]];e.push(n);let i=[1*o+1,null===(m=r[901])||void 0===m||null===(p=m.month)||void 0===p?void 0:p[o],null===(h=r[902])||void 0===h||null===(y=h.month)||void 0===y?void 0:y[o]];a.push(i)}(0,o.Rz)("graphCurveLineMonth",e),(0,o.Rz)("graphLineMonth",a),(0,o.Rz)("graphDonutCMonth",n)}e&&e()},r=async e=>{var a,n;let i={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.all_categapp};i.params={businessId:null===(n=(0,o.bh)("profileUser"))||void 0===n?void 0:n.businessId,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(i),r=await s;r&&((0,o.Rz)("categories_list",u(r,"name",1)),(0,o.Rz)("categories_ids",(0,o.ME)(r,"categoryId"))),e&&e()},t=async e=>{var a,n;let i={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.all_prov_cust};i.params={businessId:null===(n=(0,o.bh)("profileUser"))||void 0===n?void 0:n.businessId,year:(0,o.bh)("date_current_year")};const s=(0,o.I7)(i),r=await s;r&&((0,o.Rz)("providers_list",u(r,"name",1)),(0,o.Rz)("providers_ids",(0,o.ME)(r,"providerId")),e&&e())};function l(e,a,n){var i=[];return e&&(0,o._2)(e).map((o=>{e[o][a]===n&&i.push(e[o])})),i}const d=async(e,a)=>{var n,i;let s={...null===(n=(0,o.bh)((0,o.hQ)()))||void 0===n?void 0:n.fndone_incms_expns};s.params={businessId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,year:(0,o.bh)("date_current_year"),id:e};const r=(0,o.I7)(s),t=await r;t&&((0,o.Rz)((0,o.Ks)(),t),(0,o.Rz)((0,o.Ks)()+"_bck",JSON.parse(JSON.stringify(t))),a&&a())},u=(e,a,n)=>(0,o.MV)("sortByName",[e,a],(()=>e&&e.sort(((e,o)=>{let i=e[a],s=o[a];return i<s?n?-1:1:i>s?n?1:-1:0})))),c=async(e,a,n)=>{var i;let s={query:"getSignedUrl",params:{userId:n||(null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId),fileName:e}};const r=(0,o.I7)(s),t=await r;null!==t&&void 0!==t&&t.url?(0,o.Ey)(a)&&a(null===t||void 0===t?void 0:t.url):(0,o.Ey)(a)&&a(null)},v=async(e,a,n)=>{var i;let s={query:"ProccessImage",params:{userId:null===(i=(0,o.bh)("profileUser"))||void 0===i?void 0:i.businessId,fileName:a,url:e}};const r=(0,o.I7)(s);await r;(0,o.Ey)(n)&&n()},m=async(e,a)=>{var n;let i={query:"detectLandMark",params:{userId:null===(n=(0,o.bh)("profileUser"))||void 0===n?void 0:n.businessId,fileName:e}},s=(0,o.bh)("detectLandMark_last"+e)||0;if(Date.now()>s){(0,o.Rz)("detectLandMark_last"+e,Date.now()+490);const n=(0,o.I7)(i),s=await n;a(s||null)}},p=async e=>{var a;let n={query:"readExpensesDocument",params:{userId:null===(a=(0,o.bh)("profileUser"))||void 0===a?void 0:a.businessId,fileName:e}},i=(0,o.bh)("handleDetectExpenseDoc_"+e)||0;if(Date.now()>i){(0,o.Rz)("handleDetectExpenseDoc_"+e,Date.now()+490);const a=(0,o.I7)(n),i=await a;return i||null}return null},h=async(e,a,n)=>{const i=await fetch(e,{method:"PUT",headers:{"Content-Type":a.type},body:a});200===(null===i||void 0===i?void 0:i.status)?(0,o.Ey)(n)&&n(1):(0,o.Ey)(n)&&n(null)},y=async(e,a,n,i)=>{let s={query:"SignedUrlUpload",params:{userId:i||(0,o.bh)((0,o.Ks)()).clientNotaryId,fileName:a,mimeType:e.type}};const r=(0,o.I7)(s),t=await r;t&&!t.error?(0,o.Ey)(n)&&n(t.uploadURL):(0,o.Ey)(n)&&n()};let b={ES:{1:"Escoja una Imagen",2:"Subir",3:"Escanear",4:"Imagen a Revisar",5:"Texto a Associar:",6:"Buscar",12:"Rotar",13:"Recortar",20:"Comprimiendo imagen",21:"Subiendo imagen",22:"Escaneando imagen",23:"Recortando image",24:"Reconociendo Texto en Imagen",28:"Enviando a revision manual",40:"Gastos",42:"Ingresos",43:"Guardar",44:"Actualizar",45:"escojer uno",46:"Agregar",47:"Resumen por categorias",48:"Resumen del a\xf1o ",50:"Titulo o Lugar",51:"Monto",52:"Documento",53:"Descripcion",54:"Categorias",55:"Fecha",56:"Nombre",57:"Clientes",58:"Tipo",60:"Mes actual",61:"Ultimos 3 meses",62:"Ultimos 6 meses",63:"A\xf1o actual",64:"Rango de fechas",65:"Mes"},EN:{1:"Choose File",2:"Upload",3:"Scan",4:"Image to Revision",5:"Text to Link:",6:"Search",12:"Rotate",13:"Crop",20:"Compressing image",21:"Uploading image",22:"Scanning image",23:"Cropping image",24:"Detecting Text on Image",28:"Sending to revision",40:"Expenses",42:"Incomes",43:"Save",44:"Update",45:"choose one",46:"Add",47:"Resume by categories",48:"Resume of Year",50:"Title or Place",51:"Amount",52:"Document",53:"Description",54:"Categories",55:"Date",56:"Name",57:"Customers",58:"Type",60:"Current month",61:"Last 3 month",62:"Last 6 month",63:"Current year",64:"Custom range",65:"Month"}};const g=()=>{var e,a,n;return(null===(e=navigator.language)||void 0===e||null===(a=e.split("-"))||void 0===a||null===(n=a[0])||void 0===n?void 0:n.toUpperCase())||"ES"},_=e=>{var a;return e?null===b||void 0===b||null===(a=b[g()])||void 0===a?void 0:a[e]:""},I=e=>{var a;return e?null===o.mn||void 0===o.mn||null===(a=o.mn[g()])||void 0===a?void 0:a[e]:""};let R=["AID","REF #","TRANS ID","APPROVAL","OP#","ST#","TC","TERMINAL #"];const f=(e,a)=>{let n={description:"",document:"",title:"",amount:0},o={},i=[];return e&&e.map(((e,a)=>{(null===e||void 0===e?void 0:e.SummaryFields)&&(null===e||void 0===e||e.SummaryFields.map(((e,a)=>{var s,r,t;let l=null===e||void 0===e||null===(s=e.Type)||void 0===s?void 0:s.Text,d=null===e||void 0===e||null===(r=e.LabelDetection)||void 0===r?void 0:r.Text,u=null===e||void 0===e||null===(t=e.ValueDetection)||void 0===t?void 0:t.Text;"OTHER"===l&&(o[d]=u),"TOTAL"===l&&(n.amount=1*u),"VENDOR_NAME"===l&&i.push(u),"NAME"===l&&i.push(u)})))})),R.map((e=>{o[e]&&(n.description+=e+" "+o[e]+"; ")})),i.map((e=>{n.title+=e+"; "})),n.title.indexOf("almart")>=0&&o["TC#"]&&(n.document="TC# "+o["TC#"]),n}}}]);
//# sourceMappingURL=5143.bee07187.chunk.js.map