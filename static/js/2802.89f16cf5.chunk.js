"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2802],{4770:(l,e,a)=>{a.r(e),a.d(e,{default:()=>w});var t=a(2791),n=a(2350),i=a(2647),s=a(9760),d=(a(7889),a(24)),r=a(713),c=a(4050),o=a(184);(0,i.YZ)();const h=(0,i.Np)(),v=((0,i.tL)(),(0,i.A5)()),p="new_area_location",u=l=>{var e,a;let{data:i,confirm:d}=l;const[r,c]=(0,t.useState)(!1),[u,_]=(0,t.useState)(0);(0,t.useEffect)((()=>{r||(c(!0),_((0,n.M5)()))}));const m=(l,e,a)=>{let t=(0,n.bh)(p)||{};a?(t[a]||(t[a]={}),t[a][l]=e):t[l]=e,(0,n.Rz)(p,t),_((0,n.M5)())};return(0,o.jsxs)("div",{style:{maxHeight:"80vh",width:"560px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("p",{className:"form_title",children:"Add Location"}),(0,o.jsx)("div",{className:"flexSpace"})]}),(0,o.jsx)("div",{className:"_dsplFlx spaceAround",children:(0,o.jsx)(v,{init:null===(e=(0,n.bh)(p))||void 0===e?void 0:e.areaId,lbl_empty:"Area",list:[{label:"Almacen",id:"WH"},{label:"Production",id:"PR"},{label:"Patio",id:"PT"}],onSelect:l=>m("areaId",l.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"220px"})}),(0,o.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:(0,o.jsx)(h,{init:null===(a=(0,n.bh)(p))||void 0===a?void 0:a.location,label:"Location",width:320,updChanges:l=>m("location",l)})}),(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{className:"card",children:(0,o.jsx)("button",{onClick:async()=>{var l,e;let a=(0,n.bh)(p);a.areaLocationId=(0,n.M5)();let t={...null===(l=(0,n.bh)((0,n.hQ)()))||void 0===l?void 0:l.add_area_location};t.params={businessId:null===(e=(0,n.bh)("profileUser"))||void 0===e?void 0:e.businessId},t.form=a,console.log(t);const r=(0,n.I7)(t);await r&&((0,n.Rz)(p,{}),d&&d(),(null===i||void 0===i?void 0:i.modalID)&&(0,s.CloseModal)({id:null===i||void 0===i?void 0:i.modalID}))},children:"Guardar"})})]})]})};var _=a(6824),m=(a(6732),a(6245));const x=(0,i.PU)(),b=l=>{var e;let{init:a,onSelect:n,lbl_empty:i,direction:s,background:d,color:r,width:c,func:h}=l;const[v,p]=(0,t.useState)([]),[u,_]=(0,t.useState)(!1),[b,j]=(0,t.useState)(""),g=(0,t.useRef)(!1);let f=(0,m.Z)(b);(0,t.useEffect)((()=>(f?N(f):p([]),()=>{})),[f]);const N=async l=>{let e=await h(l);p(e)},k=l=>{g.current?(g.current=!1,_(!1),l&&n(l)):g.current||(_(!0),setTimeout((()=>{g.current=!0}),50))};let y=null===(e=v.filter((l=>l.id===a)))||void 0===e?void 0:e[0],w=s||"left",I={"--color-pck":r||null,"--backColor-pck":d||null,"--width-pck":c||"130px"};return(0,o.jsxs)("div",{id:"drpdwn_click_outside",open:u,style:I,children:[(0,o.jsxs)("div",{className:"filter_month_btn _dsplFlx",onClick:k,children:[(0,o.jsx)("div",{className:"lbl date",children:(null===y||void 0===y?void 0:y.label)||i}),(0,o.jsx)(x,{name:"arrow_drop_down",color:"var(--color-pck)"})]}),u?(0,o.jsxs)("div",{className:"OpenBoxContainer",style:d?{backgroundColor:d}:null,direction:"".concat(w),children:[(0,o.jsx)("input",{className:"OpenBoxInput",placeholder:"search",onChange:async l=>{j(l.target.value)}}),(0,o.jsx)("div",{className:"separator"}),(0,o.jsx)("div",{className:" monthList",style:{},children:v.map(((l,e)=>{let a=l.label;return a?(0,o.jsx)("div",{className:"filter_month_item _dsplFlx",onClick:()=>{k(l)},children:(0,o.jsx)("div",{className:"lbl tr_bar_90 ",style:{marginLeft:5},children:a})},a+"_"+e):null}))})]}):null]})},j=(0,i.Vg)(),g=(0,i.PU)(),f=(0,d.i8)(),N=(0,i.A5)(),k=(0,i.LA)(),y=((0,i.Rw)(),(0,d.JK)()),w=l=>{var e,a,i,d,h;let{data:v,elmId:p,updObs:m}=l;const[x,w]=(0,t.useState)(!1),[,I]=(0,t.useState)(0),[F,S]=(0,t.useState)(!1);(0,t.useEffect)((()=>{x||(w(!0),I((0,n.M5)()),(0,r.N0)(C),(0,c.Ht)("global_accounts","global_account_params",m))}));const C=l=>{L()},D=l=>{S(!0),(0,r._U)(L)},L=async(l,e)=>{I((0,n.M5)()),S(!1)},A=l=>{},R=(l,e)=>{(0,n.Rz)(l,e),D()},M=l=>{if(null!==l&&void 0!==l&&l.initDate&&null!==l&&void 0!==l&&l.lastDate){let e={...l};e.initDate=e.initDate-100,e.lastDate=e.lastDate+8638e4,(0,n.Rz)("date_range_inv_loc",e)}D()};let P=(null===(e=(0,n.bh)("date_range_inv_loc"))||void 0===e?void 0:e.initDate)&&(0,n.sJ)(null===(a=(0,n.bh)("date_range_inv_loc"))||void 0===a?void 0:a.initDate)+" - "+(0,n.sJ)(null===(i=(0,n.bh)("date_range_inv_loc"))||void 0===i?void 0:i.lastDate);return(0,o.jsxs)("div",{className:"inv_loc_dash",children:[(0,o.jsxs)("div",{className:"accounts_header",children:[(0,o.jsx)("h2",{children:"Inventory and Locations"}),(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.I0)()?(0,o.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:()=>{let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,o.jsx)(u,{}),(0,s.OpenModal)(l)},children:"Add Location"}):null,(0,n.I0)()?(0,o.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:()=>{(0,_.eR)((0,n.bh)("locations_list"))},children:"Print Location"}):null,(0,n.I0)()?(0,o.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:()=>{let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,o.jsx)(y,{}),(0,s.OpenModal)(l)},children:"Inventory By Location"}):null]})]}),(0,o.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,o.jsx)(j,{placeholder:"Buscar ....",width:560,obs:I,fetchData:D,loading:F,change:l=>{!F&&S(!0)},callempty:l=>{(0,r._U)(L)},keyFlds:"searchLocationQry"}),(0,o.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,o.jsx)(N,{init:(0,n.bh)("locationId2F"),lbl_empty:"Location",list:(0,n.bh)("location_drpdwn")||[],onSelect:l=>R("locationId2F",l.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"220px"})}),(0,o.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,o.jsx)(b,{init:(0,n.bh)("productId2F"),lbl_empty:"Product",func:r.yJ,onSelect:l=>R("productId2F",l.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"280px"})}),(0,o.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:()=>{var l,e;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,o.jsx)(k,{onConfirm:M,init:null===(l=(0,n.bh)("date_range_inv_loc"))||void 0===l?void 0:l.initDate,last:null===(e=(0,n.bh)("date_range_inv_loc"))||void 0===e?void 0:e.lastDate,isRange:!0,colors:{"--calendar-primary-color":"var(--hrm_palette-blue-purple)","--calendar-primary-backcolor":"var(--primary-light)","--calendar-light-backcolor":"var(--hrm_palette-general-background-b)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--disabled)","--calendar-light-200":"var(--dark-800)","--calendar-light-100":"var(--dark-900)","--calendar-dark-800":"var(--hrm_palette-blue-purple_100)","--calendar-white-100":"var(--light-100)","--calendar-white":"var(--dark-700)","--calendar-selected_lbl_color":"var(--light-400)","--calendar-selected_lbl_color":"var(--primary-blue--color-30)"}}),(0,s.OpenModal)(a)},children:[(0,o.jsx)("div",{className:"lbl date",children:P||"Fecha"}),(0,o.jsx)(g,{name:"calendar",color:"#66666"})]}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsxs)("div",{className:"_dsplFlx ",children:[(0,o.jsx)("div",{className:"total_comprobante_title",children:"No:"}),(0,o.jsx)("div",{className:"total_comprobante gray",children:(0,o.jsx)("span",{children:null===(d=(0,n._2)((0,n.bh)("inv_location_list")))||void 0===d?void 0:d.length})})]})]}),(0,o.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{marginTop:10},children:[(0,o.jsxs)("div",{className:"_dsplFlx tr_bar_90",children:[(0,o.jsx)("div",{className:" tr_bar_20",children:"Fecha"}),(0,o.jsx)("div",{className:" tr_bar_20",children:"Location"}),(0,o.jsx)("div",{className:" tr_bar_20",children:"Code"}),(0,o.jsx)("div",{className:" tr_bar_20",children:"Product"})]}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{className:"icon tr_bar_5"})]}),(0,o.jsx)("div",{className:"movements_container scollVh",children:(0,n.bh)("inv_location_list")&&(null===(h=(0,n._2)((0,n.bh)("inv_location_list")))||void 0===h?void 0:h.map((l=>(0,o.jsx)(f,{data:(0,n.bh)("inv_location_list")[l],elmId:l,openUpdateView:A,handleRefreshAll:D},l))))})]})}},6245:(l,e,a)=>{a.d(e,{Z:()=>n});var t=a(2791);const n=l=>{const[e,a]=(0,t.useState)(null),[n,i]=(0,t.useState)(""),[s,d]=(0,t.useState)(null);return(0,t.useEffect)((()=>{e||i(l),e>0&&e<Date.now()||s&&clearTimeout(s);let t=setTimeout((()=>{e>0&&e<Date.now()&&l!==n&&i(l)}),250);return d(t),a(Date.now()+220),()=>{}}),[l]),n}},6732:()=>{},7889:()=>{}}]);
//# sourceMappingURL=2802.89f16cf5.chunk.js.map