"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7243],{3885:(n,l,e)=>{e.d(l,{Z:()=>o});e(2791),e(1534);var a=e(9760),i=e(184);const o=n=>{let{data:l,confirm:e,title:o,msg:s}=n;const{modalID:c}=l;return(0,i.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"18vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,i.jsxs)("div",{className:"_dsplFlx ",children:[(0,i.jsx)("p",{className:"form_title",style:{color:"var(--hrm_palette-static-brand-red"},children:o||"Lo sentimos"}),(0,i.jsx)("div",{className:"flexSpace"})]}),s,(0,i.jsxs)("div",{className:"_dsplFlx ",style:{padding:"5px 10px"},children:[(0,i.jsx)("div",{className:"flexSpace"}),(0,i.jsx)("p",{className:"group_title addBtn blue",onClick:()=>{e&&e(),(0,a.CloseModal)({id:c})},children:"OK"})]})]})}},7243:(n,l,e)=>{e.r(l),e.d(l,{default:()=>m});var a=e(2791),i=e(2350),o=e(2647),s=(e(7889),e(9760)),c=e(3885),d=e(713),t=e(15),r=e(184);(0,o.YZ)();const v=(0,o.Np)(),h=((0,o.tL)(),(0,o.PU)()),u="do_inventory_location",m=n=>{var l,e,o,h,m;let{data:p,confirm:b}=n;const[_,j]=(0,a.useState)(!1),[y,f]=(0,a.useState)(0),g=(0,a.useRef)(0);(0,a.useEffect)((()=>{_||(j(!0),f((0,i.M5)()))}));const I=n=>{let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,r.jsx)(c.Z,{msg:n}),(0,s.OpenModal)(l)};let N=(0,i.bh)("scanningInventoryByLocation"),L=null===N||void 0===N?void 0:N[(0,i.bh)("currentLocationOnScan")];return(0,r.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"86vh",width:"760px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 39px"},children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("p",{className:"form_title",children:"Inventory By Location"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)("button",{onClick:async()=>{var n,l;let e=(0,i.bh)("scanningInventoryByLocation"),a=(0,i.bh)("inventoryOnScanItems")||{},o=[];e&&(0,i._2)(e).map((n=>{(0,i._2)(e[n]).map((l=>{var i,s;null!==a&&void 0!==a&&a[l]&&o.push({inventoryId:l,locationId:n,date:e[n][l],productId:null===a||void 0===a||null===(i=a[l])||void 0===i?void 0:i.productId,alphaCode:null===a||void 0===a||null===(s=a[l])||void 0===s?void 0:s.alphaCode})}))}));let c={...null===(n=(0,i.bh)((0,i.hQ)()))||void 0===n?void 0:n.add_inv_location_batch};c.params={businessId:null===(l=(0,i.bh)("profileUser"))||void 0===l?void 0:l.businessId},c.form=o;const d=(0,i.I7)(c);await d;(null===p||void 0===p?void 0:p.modalID)&&(0,s.CloseModal)({id:null===p||void 0===p?void 0:p.modalID}),setTimeout((()=>{(0,i.Rz)("inventoryOnScanItems",null),(0,i.Rz)("scanningInventoryByLocation",null),(0,i.Rz)(u,null),f((0,i.M5)()),b&&b()}),400)},children:"Guardar"})})]}),(0,i.bh)("currentLocationOnScan")?(0,r.jsx)("div",{className:"lh-default hrm_themecolor blue_30",style:{marginTop:20},children:(0,r.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,r.jsx)("div",{className:"_dsplFlx keyToken fnt_curr_scan",children:"Scanning this location ".concat("".concat(null===(l=(0,i.bh)("locations_ids"))||void 0===l||null===(e=l[(0,i.bh)("currentLocationOnScan")])||void 0===e?void 0:e.areaId,"-").concat(null===(o=(0,i.bh)("locations_ids"))||void 0===o||null===(h=o[(0,i.bh)("currentLocationOnScan")])||void 0===h?void 0:h.location))})})}):null,(0,r.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:(0,r.jsx)(v,{init:null===(m=(0,i.bh)(u))||void 0===m?void 0:m.i2scan,width:320,updChanges:n=>((n,l,e)=>{let a=(0,i.bh)(u)||{};e?(a[e]||(a[e]={}),a[e][n]=l):a[n]=l,(0,i.Rz)(u,a),f((0,i.M5)())})("i2scan",n),onEnter:n=>{var l;if((0,i.bh)("locations_ids")[n]){(0,i.Rz)("currentLocationOnScan",n);let l=(0,i.bh)("scanningInventoryByLocation")||{};l[n]||(l[n]={}),(0,i.Rz)("scanningInventoryByLocation",l),f((0,i.M5)())}else if((0,i.bh)("currentLocationOnScan"))(async n=>{if(await(0,d.SI)(n)){let l=(0,i.bh)("currentLocationOnScan"),e=(0,i.bh)("scanningInventoryByLocation")||{};e[l][n]||(e[l][n]=(new Date).getTime()),(0,i.Rz)("scanningInventoryByLocation",e)}else(0,t.OpenToast)({text:"hubo un error con el codigo escaneado",timeout:1500});f((0,i.M5)())})(n);else{I((0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("span",{children:"Debe escanear una locacion primero"})})),(0,t.OpenToast)({text:"Debe escanear una locacion primero",timeout:1500})}null===g||void 0===g||null===(l=g.current)||void 0===l||l.clearTx()},ref:g})}),L?(0,r.jsx)("div",{className:"",children:(0,r.jsx)(x,{locationId:(0,i.bh)("currentLocationOnScan"),locList:L,isCurrent:!0})}):null,(0,r.jsx)("div",{className:"separator"}),(0,r.jsx)("div",{className:"colScroll",children:N&&(0,i._2)(N).map((n=>n===(0,i.bh)("currentLocationOnScan")?null:(0,r.jsx)(x,{locationId:n,locList:null===N||void 0===N?void 0:N[n]},n)))}),(0,r.jsx)("div",{className:"_dsplFlx ",children:(0,r.jsx)("div",{className:"flexSpace"})})]})},x=n=>{var l,e,a,o;let{locationId:s,locList:c,isCurrent:d}=n;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"lh-default hrm_themecolor ".concat(d?"blue_30":"yellow_orange"),style:{marginTop:20},children:(0,r.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,r.jsxs)("div",{className:"_dsplFlx keyToken fnt_curr_scan ",children:[(0,r.jsx)(h,{name:"map-marker-radius-outline",color:"var(--lighten-color)",size:20}),"".concat(null===(l=(0,i.bh)("locations_ids"))||void 0===l||null===(e=l[s])||void 0===e?void 0:e.areaId,"-").concat(null===(a=(0,i.bh)("locations_ids"))||void 0===a||null===(o=a[s])||void 0===o?void 0:o.location)]})})}),c&&(0,i._2)(c).map((n=>{var l,e,a,o;return(0,r.jsx)("div",{children:null!==(l=(0,i.bh)("inventoryOnScanItems"))&&void 0!==l&&null!==(e=l[n])&&void 0!==e&&e.alphaCode?(0,r.jsx)("div",{className:"invAlpha",children:(0,r.jsx)("h5",{children:null===(a=(0,i.bh)("inventoryOnScanItems"))||void 0===a||null===(o=a[n])||void 0===o?void 0:o.alphaCode})}):(0,r.jsxs)("div",{className:" _dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"invAlpha error _dsplFlx",children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)(h,{name:"alert",color:"#c62828",size:20})}),(0,r.jsx)("h5",{children:n})]}),(0,r.jsx)("div",{className:"flexSpace"})]})},n)}))]},s)}},7889:()=>{},1534:()=>{}}]);
//# sourceMappingURL=7243.2a7b6521.chunk.js.map