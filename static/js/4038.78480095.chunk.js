"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4038,7766],{1142:(e,l,a)=>{a.d(l,{Z:()=>i});var t=a(2791),n=(a(6732),a(2647)),r=a(6245),s=a(184);const c=(0,n.PU)(),i=e=>{var l;let{init:a,onSelect:n,lbl_empty:i,direction:d,background:o,color:h,width:v,func:_,extraParam:p}=e;const[u,m]=(0,t.useState)([]),[x,b]=(0,t.useState)(!1),[j,g]=(0,t.useState)(""),f=(0,t.useRef)(!1),N=(0,t.useRef)(null);let k=(0,r.Z)(j);(0,t.useEffect)((()=>(k?y(k):m([]),()=>{})),[k]);const y=async e=>{let l=await _(e,p);m(l)},w=e=>{f.current?(f.current=!1,b(!1),e&&n(e)):f.current||(b(!0),setTimeout((()=>{f.current=!0}),50))};let F=u&&(null===u||void 0===u||null===(l=u.filter((e=>e.id===a)))||void 0===l?void 0:l[0]),C=d||"left",D={"--color-pck":h||null,"--backColor-pck":o||null,"--width-pck":v||"130px"};return(0,s.jsxs)("div",{id:"drpdwn_click_outside",open:x,style:D,children:[(0,s.jsxs)("div",{className:"filter_month_btn _dsplFlx",onClick:w,children:[(0,s.jsx)("div",{className:"lbl date",children:(null===F||void 0===F?void 0:F.label)||i}),(0,s.jsx)(c,{name:"arrow_drop_down",color:"var(--color-pck)"})]}),x?(0,s.jsxs)("div",{className:"OpenBoxContainer",style:o?{backgroundColor:o}:null,direction:"".concat(C),children:[(0,s.jsxs)("div",{className:" _dsplFlx",children:[(0,s.jsx)("input",{className:"OpenBoxInput",placeholder:"search",onChange:async e=>{g(e.target.value)},ref:N}),(0,s.jsx)("div",{className:"icon_close",onClick:async e=>{N.current.value="",y(""),n(null),w()},children:(0,s.jsx)(c,{name:"cancel",color:"var(--color-pck)",size:18})})]}),(0,s.jsx)("div",{className:"separator"}),(0,s.jsx)("div",{className:" monthList",style:{},children:u.map(((e,l)=>{let a=e.label;return a?(0,s.jsx)("div",{className:"filter_month_item _dsplFlx",onClick:()=>{w(e)},children:(0,s.jsx)("div",{className:"lbl tr_bar_90 ",style:{marginLeft:5},children:a})},a+"_"+l):null}))})]}):null]})}},2057:(e,l,a)=>{a.r(l),a.d(l,{default:()=>j});var t=a(2791),n=a(2350),r=a(2647),s=a(9760),c=(a(7889),a(24)),i=a(713),d=a(4050),o=(a(6824),a(1142)),h=a(184);const v=(0,r.Vg)(),_=(0,r.PU)(),p=(0,c.i8)(),u=(0,r.A5)(),m=(0,r.LA)(),x=(0,c.dZ)(),b=(0,c.JK)(),j=e=>{var l,a,r,c,j;let{data:g,elmId:f,updObs:N}=e;const[k,y]=(0,t.useState)(!1),[,w]=(0,t.useState)(0),[F,C]=(0,t.useState)(!1);(0,t.useEffect)((()=>{k||(y(!0),w((0,n.M5)()),(0,i.N0)(D),(0,d.Ht)("global_accounts","global_account_params",N))}));const D=e=>{S()},I=e=>{C(!0),(0,i._U)(S)},S=async(e,l)=>{w((0,n.M5)()),C(!1)},B=e=>{},L=(e,l)=>{(0,n.Rz)(e,l),I()},z=e=>{if(null!==e&&void 0!==e&&e.initDate&&null!==e&&void 0!==e&&e.lastDate){let l={...e};l.initDate=l.initDate-100,l.lastDate=l.lastDate+8638e4,(0,n.Rz)("date_range_inv_loc",l)}I()},R=e=>{(0,n.Rz)("date_range_inv_loc",{}),I()};let O=(null===(l=(0,n.bh)("date_range_inv_loc"))||void 0===l?void 0:l.initDate)&&(0,n.sJ)(null===(a=(0,n.bh)("date_range_inv_loc"))||void 0===a?void 0:a.initDate)+" - "+(0,n.sJ)(null===(r=(0,n.bh)("date_range_inv_loc"))||void 0===r?void 0:r.lastDate);return(0,h.jsxs)("div",{className:"inv_loc_dash",children:[(0,h.jsxs)("div",{className:"accounts_header",children:[(0,h.jsx)("h2",{children:"Inventory and Locations"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,n.I0)()?(0,h.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(x,{}),(0,s.OpenModal)(e)},children:"Locations"}):null,(0,n.I0)()?(0,h.jsx)("p",{className:"btn_lkjh addBtn purple",onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(b,{}),(0,s.OpenModal)(e)},children:"Inventory By Location"}):null]})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,h.jsx)(v,{placeholder:"Buscar ....",width:560,obs:w,fetchData:I,loading:F,change:e=>{!F&&C(!0)},callempty:e=>{(0,i._U)(S)},keyFlds:"searchLocationQry"}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,h.jsx)(u,{init:(0,n.bh)("locationId2F"),lbl_empty:"Location",list:(0,n.bh)("location_drpdwn")||[],onSelect:e=>L("locationId2F",e.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"220px"})}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround",style:{padding:3},children:(0,h.jsx)(o.Z,{init:(0,n.bh)("productId2F"),lbl_empty:"Product",func:i.yJ,onSelect:e=>L("productId2F",e.id),background:"#f9f9f9",color:"var(--hrm_palette-blue-purple)",direction:"left",width:"280px"})}),(0,h.jsxs)("div",{className:"filter_date_btn _dsplFlx",onClick:()=>{var e,l;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,h.jsx)(m,{onConfirm:z,onClear:R,init:null===(e=(0,n.bh)("date_range_inv_loc"))||void 0===e?void 0:e.initDate,last:null===(l=(0,n.bh)("date_range_inv_loc"))||void 0===l?void 0:l.lastDate,isRange:!0,hasClear:!0,colors:{"--calendar-primary-color":"var(--hrm_palette-blue-purple)","--calendar-primary-backcolor":"var(--primary-light)","--calendar-light-backcolor":"var(--hrm_palette-general-background-b)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--disabled)","--calendar-light-200":"var(--dark-800)","--calendar-light-100":"var(--dark-900)","--calendar-dark-800":"var(--hrm_palette-blue-purple_100)","--calendar-white-100":"var(--light-100)","--calendar-white":"var(--dark-700)","--calendar-selected_lbl_color":"var(--light-400)","--calendar-selected_lbl_color":"var(--primary-blue--color-30)"}}),(0,s.OpenModal)(a)},children:[(0,h.jsx)("div",{className:"lbl date",children:O||"Fecha"}),(0,h.jsx)(_,{name:"calendar",color:"#66666"})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"total_comprobante_title",children:"No:"}),(0,h.jsx)("div",{className:"total_comprobante gray",children:(0,h.jsx)("span",{children:null===(c=(0,n._2)((0,n.bh)("inv_location_list")))||void 0===c?void 0:c.length})})]})]}),(0,h.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{marginTop:10},children:[(0,h.jsxs)("div",{className:"_dsplFlx tr_bar_90 ",children:[(0,h.jsx)("div",{className:" tr_bar_20 centerBx",children:"Fecha"}),(0,h.jsx)("div",{className:" tr_bar_20 centerBx",children:"Location"}),(0,h.jsx)("div",{className:" tr_bar_20 centerBx",children:"Code"}),(0,h.jsx)("div",{className:" tr_bar_20 centerBx",children:"Product"})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"icon tr_bar_5"})]}),(0,h.jsx)("div",{className:"movements_container scollVh",children:(0,n.bh)("inv_location_list")&&(null===(j=(0,n._2)((0,n.bh)("inv_location_list")))||void 0===j?void 0:j.map((e=>(0,h.jsx)(p,{data:(0,n.bh)("inv_location_list")[e],elmId:e,openUpdateView:B,handleRefreshAll:I},e))))})]})}},6245:(e,l,a)=>{a.d(l,{Z:()=>n});var t=a(2791);const n=e=>{const[l,a]=(0,t.useState)(null),[n,r]=(0,t.useState)(""),[s,c]=(0,t.useState)(null);return(0,t.useEffect)((()=>{l||r(e),l>0&&l<Date.now()||s&&clearTimeout(s);let t=setTimeout((()=>{l>0&&l<Date.now()&&e!==n&&r(e)}),250);return c(t),a(Date.now()+220),()=>{}}),[e]),n}},6732:()=>{},7889:()=>{}}]);
//# sourceMappingURL=4038.78480095.chunk.js.map