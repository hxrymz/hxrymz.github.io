"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8795,9760],{9760:function(e,a,s){s.r(a),s.d(a,{CloseModal:function(){return o},OpenModal:function(){return t},default:function(){return c}});var l=s(2791),i=s(5408),n=s(2350),d=s(184),r="listDialog_mdh392",c=function(){var e=(0,n.bh)("listDialog")||{},a=((0,i.Z)(r),Object.keys(e));return(0,d.jsx)(d.Fragment,{children:a.map((function(a,s){var i=e[a];if(i&&i.visible){var n={};i.height&&(n.heigth=i.height),i.width,i.zIndex&&(n.zIndex=i.zIndex-1);var r={zIndex:i.zIndex},c=null,t=i.data;return i.content&&(c=l.cloneElement(i.content,{data:t})),(0,d.jsxs)("div",{className:"ltr-1kbnjow",style:n,children:[(0,d.jsx)("div",{className:"ltr-hoe9xz",children:(0,d.jsx)("div",{className:"ltr-1wao6ny",style:r,id:a,children:c})}),i.data.overlay?(0,d.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=a,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),o({id:e})}}):null]},a)}}))})},t=function(e){var a=(0,n.bh)("listDialog")||{},s=(0,n.M5)();a[s]||(a[s]={}),a[s].visible=!0;var l={};e.props?(l=e.props).modalID=s:l.modalID=s;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),a[s].isView=e.isView,a[s].observeResize=e.observeResize,a[s].observeResize&&(a[s].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(s,"']")),l=e&&e.getBoundingClientRect();l&&(l.width===a[s].width&&l.height===a[s].height||(a[s].height=l.height+10,a[s].width=l.width,(0,n.Rz)("listDialog",a),(0,n.wt)(r)))}),200)),a[s].display=!0,e.zIndex&&(a[s].zIndex=e.zIndex),e.height&&(a[s].height=e.height),e.width&&(a[s].width=e.width),e.content&&(a[s].content=e.content),a[s].data=l,(0,n.Rz)("listDialog",a),(0,n.wt)(r),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,n.Rz)("modalOpen",s),(0,n.wt)(r)}),125)},o=function(e){var a,s,l,i=(0,n.bh)("listDialog")||{},d=e.id;i[d]&&(i[d].observeResize&&i[d].observeInterval&&clearInterval(i[d].observeInterval),i[d].display=!1,null===(a=i[d])||void 0===a||null===(s=a.data)||void 0===s||null===(l=s.closeEvent)||void 0===l||l.call(s),(0,n.Rz)("listDialog",i),delete i[d],document.getElementsByTagName("body")[0].style.overflowY=null,(0,n.wt)(r),setTimeout((function(){delete i[d],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,n.Rz)("modalOpen",null)}),750))}},8795:function(e,a,s){s.r(a),s.d(a,{default:function(){return M}});var l=s(9439),i=s(2791),n=(s(1636),s(2350)),d=s(4050),r=s(7689),c=s(9760),t=s(4165),o=s(5861),v=s(2647),u=s(1413),m=s(184),h=(0,v.PU)(),p=(0,v.Vg)(),x=(0,v.tW)(),_="ourBank2S",b=function(e){var a,s=e.data,t=(e.operations,e.accountD),o=(e.subaccountD,(0,i.useState)(0)),v=(0,l.Z)(o,2),b=(v[0],v[1]),j=(0,i.useState)(!1),N=(0,l.Z)(j,2),f=N[0],g=(N[1],(0,i.useState)(!1)),y=(0,l.Z)(g,2),k=y[0],I=(y[1],(0,i.useState)("")),F=(0,l.Z)(I,2),C=(F[0],F[1]),S=(0,i.useState)(!1),w=(0,l.Z)(S,2),D=w[0],Z=w[1],z=(0,i.useState)(!1),R=(0,l.Z)(z,2),B=R[0],O=R[1],M=(0,i.useState)(!1),T=(0,l.Z)(M,2);T[0],T[1];(0,i.useEffect)((function(){}),[t]);var H=function(){b((0,n.M5)()),Z(!1)},L=((0,r.s0)(),function(){O(!1),(0,c.CloseModal)({id:s.modalID})});return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"90vw",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"title_collect",children:"Registros del Banco"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){},children:"Exportar a CSV"})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,m.jsx)("div",{style:{marginTop:11},children:(0,m.jsx)(p,{placeholder:"Buscar ....",width:560,obs:b,fetchData:H,loading:D,change:function(e){!D&&Z(!0),C(e)},callempty:H,keyFlds:"search_h65767"})}),(0,m.jsx)("div",{style:{marginLeft:15}}),(0,m.jsx)("div",{className:"_dsplFlx cmp_dtls",children:(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsxs)("div",{className:"filter_btn _dsplFlx",onClick:function(){},children:[(0,m.jsx)("div",{className:"lbl",children:f?"Filtrando":"Filtrar"}),(0,m.jsx)(h,{name:f?"cancel":"filter",color:"#66666"})]}),f?(0,m.jsx)("div",{className:"done_btn _dsplFlx",style:{borderColor:k?"var(--hrm_palette-success-fg)":"#c62828",marginLeft:9},onClick:function(){},children:(0,m.jsx)(h,{name:k?"check_circle":"alert",color:k?"var(--hrm_palette-success-fg)":"#c62828"})}):null]})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{children:B?(0,m.jsx)("div",{className:"icon_compr",children:(0,m.jsx)(x,{stroke:"#646cff",size:38,strokeW:6})}):(0,m.jsx)("div",{className:" addBtn purple btn_purpl_fweight",style:{marginTop:20},onClick:function(e){O(!0);var a=[];(0,n.bh)(_).map((function(e){var s,l,i=(0,u.Z)({},e);i.status=4;var d=(0,u.Z)({},null===(s=(0,n.bh)((0,n.hQ)()))||void 0===s?void 0:s.add_bank_bUp);d.params={businessId:null===(l=(0,n.bh)("profileUser"))||void 0===l?void 0:l.businessId},d.form=i,a.push(d)})),(0,d.fp)(a,L)},children:"Save"})})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_20",children:"Fecha"}),(0,m.jsx)("div",{className:"tr_bar_40",children:"Descripcion"}),(0,m.jsx)("div",{className:"tr_bar_20",children:"No cheque"}),(0,m.jsx)("div",{className:"tr_bar_20",children:"Importe"})]}),(0,m.jsx)("div",{className:"scollVh subMHeight",children:(0,n.bh)(_)&&(null===(a=(0,n.bh)(_))||void 0===a?void 0:a.map((function(e,a){var s;return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_20",children:e.date&&(0,n.sJ)(e.date)}),(0,m.jsx)("div",{className:"tr_bar_40 desc_font",children:e.description}),(0,m.jsx)("div",{className:"tr_bar_20",children:e.checkOrSlip}),(0,m.jsx)("div",{className:"tr_bar_20",children:null===(s=1*e.amount)||void 0===s?void 0:s.toFixed(2)})]},a)})))})]})]})},j=(s(4363),function(e){var a=e.data,s=e.confirm,l=e.lbl_p,i=e.lbl_span,n=e.lbl_btn,d=e.theme,r=a.modalID,t=function(e){(0,c.CloseModal)({id:r})};return(0,m.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"20vh",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:l}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:"_dsplFlx ",children:(0,m.jsx)("span",{children:i})}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn",onClick:t,children:"Cancelar"}),(0,m.jsx)("p",{className:"group_title addBtn ".concat(d||"red"),onClick:function(){s(),t()},children:n})]})]})}),N=((0,v.PU)(),(0,v.Vg)()),f=((0,v.tW)(),function(e){var a,s,v=e.data,h=e.item,p=(0,i.useState)(0),x=(0,l.Z)(p,2),_=(x[0],x[1]),b=(0,i.useState)(!1),f=(0,l.Z)(b,2),y=(f[0],f[1],(0,i.useState)(!1)),k=(0,l.Z)(y,2),I=(k[0],k[1],(0,i.useState)("")),F=(0,l.Z)(I,2),C=F[0],S=F[1],w=(0,i.useState)(!1),D=(0,l.Z)(w,2),Z=D[0],z=D[1],R=(0,i.useState)(!1),B=(0,l.Z)(R,2),O=(B[0],B[1]),M=function(e){S(e),Z&&z(!1)},T=((0,r.s0)(),function(){O(!1),(0,c.CloseModal)({id:v.modalID})}),H=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(a){var s,l,i,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,u.Z)({},null===(s=(0,n.bh)((0,n.hQ)()))||void 0===s?void 0:s.upd_bank_bUp)).params={businessId:null===(l=(0,n.bh)("profileUser"))||void 0===l?void 0:l.businessId,bankRecordId:h.bankRecordId},i.data2update={linkId:a.operationId,document:a.document,comprobanteId:a.comprobanteId,status:9},r=(0,n.I7)(i),e.next=6,r;case 6:e.sent&&(0,d.Pe)(T);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"90vw",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"title_collect",children:"Associar comprobante Manual"}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:"_dsplFlx ",style:{marginTop:14},children:(0,m.jsx)("div",{style:{marginTop:11},children:(0,m.jsx)(N,{placeholder:"Buscar ....",width:560,obs:_,fetchData:M,loading:Z,change:function(e){!Z&&z(!0),S(e)},callempty:M,keyFlds:"search_h65767"})})}),(0,m.jsxs)("div",{style:{marginTop:14},children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar green",style:{margin:"6px 0"},children:[(0,m.jsx)("div",{className:"tr_bar_15",children:h.date&&(0,n.sJ)(h.date)}),(0,m.jsx)("div",{className:"tr_bar_15",children:h.comprobanteId}),(0,m.jsx)("div",{className:"tr_bar_40 desc_font",children:h.description}),(0,m.jsx)("div",{className:"tr_bar_15",children:h.checkOrSlip}),(0,m.jsx)("div",{className:"tr_bar_15",children:null===(a=1*h.amount)||void 0===a?void 0:a.toFixed(2)})]}),(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_15",children:"Fecha"}),(0,m.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,m.jsx)("div",{className:"tr_bar_40",children:"Descripcion"}),(0,m.jsx)("div",{className:"tr_bar_15",children:"No cheque"}),(0,m.jsx)("div",{className:"tr_bar_15",children:"Importe"})]}),(0,m.jsx)("div",{className:"scollVh subMHeight",children:(0,n.bh)("submayor_list")&&(null===(s=(0,n._2)((0,n.bh)("submayor_list")))||void 0===s?void 0:s.map((function(e,a){var s,l,i=null===(s=(0,n.bh)("submayor_list"))||void 0===s?void 0:s[e];return C&&!g(i,C)?null:(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar manual_vrfy",children:[(0,m.jsx)("div",{className:"tr_bar_15",children:i.date&&(0,n.sJ)(i.date)}),(0,m.jsx)("div",{className:"tr_bar_15 comprobanteId",onClick:function(){return function(e){var a={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,m.jsx)(j,{item:e,lbl_p:"Associar con el banco",lbl_span:"esta seguro que desea associar el comprobante ".concat(e.comprobanteId," a la cuenta de banco"),lbl_btn:"Confirm",theme:"purple",confirm:function(){return H(e)}}),(0,c.OpenModal)(a)}(i)},children:i.comprobanteId}),(0,m.jsx)("div",{className:"tr_bar_40 desc_font",children:i.description}),(0,m.jsx)("div",{className:"tr_bar_15",children:i.document}),(0,m.jsx)("div",{className:"tr_bar_15",children:null===(l=1*i.amount)||void 0===l?void 0:l.toFixed(2)})]},a)})))})]})]})}),g=function(e,a){var s=a.toLowerCase(),l=!1;return["description","amount","document","comprobanteId"].map((function(a){var i,n,d;e[a]&&(null===(i=e[a])||void 0===i||null===(n=i.toString())||void 0===n||null===(d=n.toLowerCase())||void 0===d?void 0:d.indexOf(s))>=0&&(l=!0)})),l},y=((0,v.PU)(),(0,v.Vg)(),(0,v.tW)()),k=function(e){var a,s=e.data,r=e.item,v=e.confirm,h=(0,i.useState)(0),p=(0,l.Z)(h,2),x=(p[0],p[1],(0,i.useState)(!1)),_=(0,l.Z)(x,2),b=_[0],j=_[1],N=function(){j(!1),(0,c.CloseModal)({id:s.modalID}),v&&v()},g=r.operationId||r.linkId,k=null===(a=(0,n.bh)("submayor_list"))||void 0===a?void 0:a[g],I=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(a){var s,l,i,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),(i=(0,u.Z)({},null===(s=(0,n.bh)((0,n.hQ)()))||void 0===s?void 0:s.upd_bank_bUp)).params={businessId:null===(l=(0,n.bh)("profileUser"))||void 0===l?void 0:l.businessId,bankRecordId:r.bankRecordId},i.data2update={linkId:a.operationId,document:a.document,comprobanteId:a.comprobanteId,status:9},c=(0,n.I7)(i),e.next=7,c;case 7:e.sent&&(0,d.Pe)(N);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"860px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"title_collect",children:"Comparar Comprobante con el Banco"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{className:"group_title addBtn purple upl",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(f,{item:r}),(0,c.OpenModal)(e),N()},children:"Manual"}),b?(0,m.jsxs)("div",{className:"icon_compr _dsplFlx",style:{marginTop:12},children:[(0,m.jsx)("div",{className:"lbl_saving",children:"Linking ..."}),(0,m.jsx)(y,{stroke:"#646cff",size:24,strokeW:8})]}):(0,m.jsx)("div",{className:"group_title addBtn purple upl",onClick:function(){return I(r)},children:"Associar"})]}),(0,m.jsxs)("div",{className:"_dsplFlx  spaceAround flxWrp",style:{marginTop:24},children:[(0,m.jsxs)("div",{className:"boxCmp2compare green",children:[(0,m.jsx)("div",{className:"boxCmp2compare_title",children:"Registro del Banco"}),(0,m.jsxs)("div",{className:"boxCmp2compare_body",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"lbl",children:"Fecha:"}),(0,m.jsx)("div",{className:"value",children:r.date&&(0,n.sJ)(r.date)})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"lbl",children:"Importe:"}),(0,m.jsxs)("div",{className:"value",children:["$",r.amount]})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"lbl",children:"No Cheque:"}),(0,m.jsx)("div",{className:"value",children:r.checkOrSlip})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"lbl",children:"Comprobante:"}),(0,m.jsx)("div",{className:"value",children:r.comprobanteId})]})]}),(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("div",{className:"value small",children:r.description})})})]})]}),(0,m.jsxs)("div",{className:"boxCmp2compare purple",children:[(0,m.jsx)("div",{className:"boxCmp2compare_title",children:"Comprobante en Contabilidad"}),(0,m.jsxs)("div",{className:"boxCmp2compare_body",children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"lbl",children:"Fecha:"}),(0,m.jsx)("div",{className:"value",children:k.date&&(0,n.sJ)(k.date)})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"lbl",children:"Importe:"}),(0,m.jsxs)("div",{className:"value",children:["$",k.amount]})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"lbl",children:"Documento:"}),(0,m.jsx)("div",{className:"value",children:k.document})]})]}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"lbl",children:"Comprobante:"}),(0,m.jsx)("div",{className:"value",children:k.comprobanteId})]})]}),(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("div",{className:"value small",children:k.description})})})]})]})]})]})},I=(0,v.PU)(),F=(0,v.Vg)(),C=(0,v.YZ)(),S=(0,v.tW)(),w="bank_consolidation_2r",D=function(e){var a,s,t=e.data,o=e.operations,v=e.accountD,u=e.subaccountD,h=(0,i.useState)(0),p=(0,l.Z)(h,2),x=(p[0],p[1]),_=(0,i.useState)(!1),j=(0,l.Z)(_,2),N=j[0],f=j[1],g=(0,i.useState)(!1),y=(0,l.Z)(g,2),k=y[0],S=y[1],D=(0,i.useState)(""),B=(0,l.Z)(D,2),O=B[0],M=B[1],T=(0,i.useState)(""),H=(0,l.Z)(T,2),L=H[0],V=H[1],A=(0,i.useState)(!1),E=(0,l.Z)(A,2),P=E[0],U=E[1],J=(0,i.useState)(!1),W=(0,l.Z)(J,2),q=W[0],Y=W[1],Q=(0,i.useState)(!1),$=(0,l.Z)(Q,2),G=$[0],K=$[1];(0,i.useEffect)((function(){(0,n.Rz)("bank_consolidation",null),(0,d.Pe)(le)}),[v]);var X=function(){x((0,n.M5)()),U(!1)},ee=function(e){V(e||"");var a=(0,n.bh)("bank_consolidation");(0,n.Rz)(w,a),O&&(0,n.Rz)(w,R(a,O,N,k)),X()},ae=(0,r.s0)(),se=function(e){(0,c.CloseModal)({id:t.modalID}),ae({pathname:"accounting-ledger",search:"?cId=".concat(e.comprobanteId)})},le=function(e){var a=(0,n.bh)("ourBank"),s=((0,d.i_)((0,d.T7)(o,null===v||void 0===v?void 0:v.code,null===u||void 0===u?void 0:u.subAccount),null===v||void 0===v?void 0:v.code,null===u||void 0===u?void 0:u.subAccount),(0,d.y1)(a));(0,n.Rz)("bank_consolidation",null===s||void 0===s?void 0:s.ready),(0,n.Rz)("cmpbNotInBank",null===s||void 0===s?void 0:s.cmpbNotInBank);var l=(0,d.k4)((0,n.bh)("sortBank"),(0,n.bh)("ourBank"));l.length>0&&((0,n.Rz)("ourBank2S",l),ie()),ee(),X(),e&&e&&e()},ie=function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(b,{accountD:v,subaccountD:u}),(0,c.OpenModal)(e)};return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"90vw",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"title_collect",children:"Consolidacion Bancaria"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"group_title addBtn purple upl",children:["Importar CSV (Bank)",(0,m.jsx)("input",{id:"fileupload",type:"file",onChange:function(e){var a=new FileReader;a.onload=function(e){var a=e.target.result,s=(0,d.h1)((0,n.JO)(a),"Date");(0,n.Rz)("sortBank",s),le()},a.readAsText(e.target.files[0],"UTF-8")}})]}),(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:function(e){var a=(0,n.bh)(w);(0,n.eY)("comparacion_estados_de_cuentas_"+(0,n.M5)()+".csv",a)},children:"Exportar a CSV"})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:14},children:[(0,m.jsx)("div",{style:{marginTop:11},children:(0,m.jsx)(F,{placeholder:"Buscar ....",width:560,obs:x,fetchData:ee,loading:P,change:function(e){!P&&U(!0),M(e)},callempty:ee,keyFlds:"search_h65767"})}),(0,m.jsx)("div",{style:{marginLeft:15}}),(0,m.jsx)("div",{className:"_dsplFlx cmp_dtls",children:(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsxs)("div",{className:"filter_btn _dsplFlx",onClick:function(){var e=(0,n.bh)("bank_consolidation");(0,n.Rz)(w,e);var a=!N;O?(0,n.Rz)(w,R(e,O,a,k)):a&&(0,n.Rz)(w,R(e,"",a,k)),f(a),X()},children:[(0,m.jsx)("div",{className:"lbl",children:N?"Filtrando":"Filtrar"}),(0,m.jsx)(I,{name:N?"cancel":"filter",color:"#66666"})]}),N?(0,m.jsx)("div",{className:"done_btn _dsplFlx",style:{borderColor:k?"var(--hrm_palette-success-fg)":"#c62828",marginLeft:9},onClick:function(){var e=(0,n.bh)("bank_consolidation");(0,n.Rz)(w,e);var a=!k;O?(0,n.Rz)(w,R(e,O,N,a)):N&&(0,n.Rz)(w,R(e,"",N,a)),S(a),X()},children:(0,m.jsx)(I,{name:k?"link":"alert",color:k?"var(--hrm_palette-mono-filled-hover)":"#c62828"})}):null]})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,m.jsx)(C,{initvalue:G,keyCode:57,updChange:function(e){return K(e)}}),(0,m.jsx)("span",{className:"checklabel",children:"Registros Verificados"})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,m.jsx)(C,{initvalue:q,keyCode:77,updChange:function(e){return Y(e)}}),(0,m.jsx)("span",{className:"checklabel",children:"Comprobantes fuera del banco"})]})]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:" addBtn purple btn_purpl_fweight",style:{marginTop:20},onClick:le,children:"Recalc"})})]}),G?(0,m.jsx)(Z,{search:L,navTo:se,reCompare:le}):q?(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Fecha"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Importe"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Documento"})]}),(0,m.jsx)("div",{className:"scollVh subMHeight",children:(0,n.bh)("cmpbNotInBank")&&(null===(a=(0,n._2)((0,n.bh)("cmpbNotInBank")))||void 0===a?void 0:a.map((function(e,a){var s,l=(0,n.bh)("cmpbNotInBank")[e],i=l.amount;return 0===i?null:(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsxs)("div",{className:"tr_bar_15 comprobante_id _dsplFlx",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{onClick:function(){return se(l)},children:l.comprobanteId}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:"tr_bar_10",children:l.date&&(0,n.sJ)(l.date)}),(0,m.jsx)("div",{className:"tr_bar_10",children:null===(s=1*i)||void 0===s?void 0:s.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar_10",children:l.document})]},a)})))})]}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Fecha"}),(0,m.jsx)("div",{className:"tr_bar_40",children:"Descripcion"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"No cheque"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Importe"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Documento"})]}),(0,m.jsx)("div",{className:"scollVh subMHeight",children:(0,n.bh)(w)&&(null===(s=(0,n.bh)(w))||void 0===s?void 0:s.map((function(e,a){var s=!0,l=(0,n.bh)("date_range_submayor");return N&&(s=!1,k&&e.comprobanteId&&(s=!0),k||e.comprobanteId||(s=!0)),!s||isNaN(e.amount)||e.date<(null===l||void 0===l?void 0:l.initDate)||e.date>(null===l||void 0===l?void 0:l.lastDate)?null:(0,m.jsx)(z,{element:e,inx:a,navTo:se,reCompare:le},a+"_bankItm")})))})]})]})},Z=function(e){e.searchQry;var a,s,d,r=e.navTo,c=e.reCompare,t=e.search,o=(0,i.useState)(!1),v=(0,l.Z)(o,2);v[0],v[1];return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_15",children:"Comprobante"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Fecha"}),(0,m.jsx)("div",{className:"tr_bar_40",children:"Descripcion"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"No cheque"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Importe"}),(0,m.jsx)("div",{className:"tr_bar_10",children:"Documento"})]}),(0,m.jsx)("div",{className:"scollVh subMHeight",children:(null===(a=(0,n.bh)("ourBank_filtered"))||void 0===a?void 0:a.verified)&&(null===(s=(0,n.bh)("ourBank_filtered"))||void 0===s||null===(d=s.verified)||void 0===d?void 0:d.map((function(e,a){return 9!==e.status||t&&!B(e,t)?null:(0,m.jsx)(z,{element:e,inx:a,navTo:r,reCompare:c,verifyManual:!0},a+"_bankItm")})))})]})},z=function(e){var a,s=e.element,d=e.navTo,r=e.reCompare,v=(e.inx,e.verifyManual),u=(0,i.useState)(!1),h=(0,l.Z)(u,2),p=h[0],x=h[1],_=function(){x(!1)},b=function(){r(_)},j=function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(f,{item:s,confirm:b}),(0,c.OpenModal)(e)},N=function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(k,{item:s,confirm:b}),(0,c.OpenModal)(e)},g=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v||!a.linkId&&a.operationId?N():j();case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsxs)("div",{className:"tr_bar_15 comprobante_id _dsplFlx",children:[p?(0,m.jsx)("div",{className:"icon_compr",children:(0,m.jsx)(S,{stroke:"#646cff",size:24,strokeW:8})}):(0,m.jsx)("div",{className:"icon_compr",onClick:function(){return g(s)},children:(0,m.jsx)(I,{name:s.linkId?"check_circle":s.comprobanteId?"link":"alert",color:s.linkId?"var(--hrm_palette-success-fg)":s.comprobanteId?"var(--hrm_palette-mono-filled-hover)":"#c62828"})}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("div",{onClick:function(){return d(s)},children:s.comprobanteId}),(0,m.jsx)("div",{className:"flexSpace"})]}),(0,m.jsx)("div",{className:"tr_bar_10",children:s.date&&(0,n.sJ)(s.date)}),(0,m.jsx)("div",{className:"tr_bar_40 desc_font",children:s.description}),(0,m.jsx)("div",{className:"tr_bar_10",children:s.checkOrSlip}),(0,m.jsx)("div",{className:"tr_bar_10",children:null===(a=1*s.amount)||void 0===a?void 0:a.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar_10",children:s.document})]})};function R(e,a,s,l){var i,d=a.toLowerCase(),r=[];return null===(i=(0,n._2)(e))||void 0===i||i.map((function(a){var i=e[a],n=!1,c=(l&&i.comprobanteId||!l&&!i.comprobanteId)&&4===i.status;d?(n=!1,["description","amount","checkOrSlip","comprobanteId"].map((function(e){var a,l,r,t,o,v;s?i[e]&&(null===(a=i[e])||void 0===a||null===(l=a.toString())||void 0===l||null===(r=l.toLowerCase())||void 0===r?void 0:r.indexOf(d))>=0&&c&&(n=!0):i[e]&&(null===(t=i[e])||void 0===t||null===(o=t.toString())||void 0===o||null===(v=o.toLowerCase())||void 0===v?void 0:v.indexOf(d))>=0&&(n=!0)}))):c&&(n=!0),n&&r.push(i)})),r}var B=function(e,a){var s=a.toLowerCase(),l=!1;return["description","amount","document","comprobanteId"].map((function(a){var i,n,d;e[a]&&(null===(i=e[a])||void 0===i||null===(n=i.toString())||void 0===n||null===(d=n.toLowerCase())||void 0===d?void 0:d.indexOf(s))>=0&&(l=!0)})),l},O=(0,v.xu)(),M=function(e){var a,s,t,o,v,u=e.data,h=e.accountForm,p=(0,i.useState)(0),x=(0,l.Z)(p,2),_=(x[0],x[1]),b=(0,n.bh)("submayor_group");(0,i.useEffect)((function(){(0,d.rs)(h,j)}),[h]);var j=function(){_((0,n.M5)())},N=null===(a=(0,n.bh)("account_ids"))||void 0===a?void 0:a[null===h||void 0===h?void 0:h.account],f=null===(s=(0,n.bh)("sub_account_ids"))||void 0===s?void 0:s[null===h||void 0===h?void 0:h.subAccount],g=(0,r.s0)(),y=new Date(null===(t=(0,n.bh)("date_range_submayor"))||void 0===t?void 0:t.initDate).getMonth(),k=(0,d.S)(y,h);return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"title_collect",children:"SubMayor de la Cuenta"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("p",{className:"group_title addBtn purple",onClick:function(){(0,n.eY)("export_submayor_"+(null===N||void 0===N?void 0:N.code)+"_"+(null!==f&&void 0!==f&&f.subAccount?(null===f||void 0===f?void 0:f.subAccount)+"_":"")+(0,n.M5)()+".csv",(0,d.i_)((0,d.T7)(null===b||void 0===b?void 0:b.operations,null===N||void 0===N?void 0:N.code,null===f||void 0===f?void 0:f.subAccount),null===N||void 0===N?void 0:N.code,null===f||void 0===f?void 0:f.subAccount))},children:"Exportar a CSV"}),(0,n.ML)()&&(null===(o=(0,n.bh)("global_account_params"))||void 0===o?void 0:o.cash_bank)===(null===N||void 0===N?void 0:N.accountId)?(0,m.jsx)("div",{className:"group_title addBtn purple upl",onClick:function(){var e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,m.jsx)(D,{accountD:N,subaccountD:f,operations:null===b||void 0===b?void 0:b.operations}),(0,c.OpenModal)(e),(0,c.CloseModal)({id:u.modalID})},children:"Consolidacion Bancaria"}):null]}),(0,m.jsxs)("div",{className:"_dsplFlx cmp_dtls",children:[(0,m.jsxs)("div",{className:" acc_dtls",style:{marginTop:10},children:[(0,m.jsxs)("div",{className:"_dsplFlx",children:[(0,m.jsx)("div",{className:"code","data-ref":"".concat(null===N||void 0===N?void 0:N.accountId),style:{color:"var(--hrm_palette-blue-purple)"},children:null===N||void 0===N?void 0:N.code}),(0,m.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-imput-label_gray)"},children:null===N||void 0===N?void 0:N.name})]}),(0,m.jsx)("div",{className:"flexSpace"}),f?(0,m.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,m.jsx)("div",{className:"code","data-ref":"".concat(null===f||void 0===f?void 0:f.sub_accountId),style:{color:"var(--hrm_palette-inverse-background-b)"},children:null===f||void 0===f?void 0:f.subAccount}),(0,m.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-imput-label_gray)"},children:null===f||void 0===f?void 0:f.subAccountName})]}):null]}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsxs)("div",{className:"_dsplFlx acc_dtls",style:{margin:"18px 10px 0 0"},children:[(0,m.jsx)("div",{className:"name",style:{color:"var(--hrm_palette-imput-label_gray)"},children:"Saldo Inicial"}),(0,m.jsx)("div",{className:"code",style:{marginLeft:10,color:"var(--hrm_palette-blue-purple)"},children:"credit"===N.type?-1*k:k})]}),(0,m.jsx)("div",{className:"_dsplFlx",children:(0,m.jsx)("div",{style:{marginTop:6},children:(0,m.jsx)(O,{onSelect:function(e){var a=e.initDate,s=e.lastDate;(0,n.Rz)("date_range_submayor",{initDate:a,lastDate:s}),(0,d.rs)(h,j)},initMonth:y})})})]}),(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar purple",children:[(0,m.jsx)("div",{className:"tr_bar_s6",children:"Comprobante"}),(0,m.jsx)("div",{className:"tr_bar_s6",children:"Fecha"}),(0,m.jsx)("div",{className:"tr_bar_s6",children:"Documento"}),(0,m.jsx)("div",{className:"tr_bar_s6",children:"Debito"}),(0,m.jsx)("div",{className:"tr_bar_s6",children:"Credito"}),(0,m.jsx)("div",{className:"tr_bar_s6",children:"Saldo"})]}),(0,m.jsx)("div",{className:"scollVh subMHeight",children:(null===b||void 0===b?void 0:b.operations)&&(null===(v=(0,d.T7)(null===b||void 0===b?void 0:b.operations,null===h||void 0===h?void 0:h.account,null===h||void 0===h?void 0:h.subAccount,y))||void 0===v?void 0:v.map((function(e,a){var s,l,i;return(0,m.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,m.jsx)("div",{className:"tr_bar_s6 comprobante_id",onClick:function(){return function(e){(0,c.CloseModal)({id:u.modalID}),g({pathname:"accounting-ledger",search:"?cId=".concat(e.comprobanteId)})}(e)},children:e.comprobanteId}),(0,m.jsx)("div",{className:"tr_bar_s6",children:e.date&&(0,n.sJ)(e.date)}),(0,m.jsx)("div",{className:"tr_bar_s6",children:e.document}),(0,m.jsx)("div",{className:"tr_bar_s6",children:null===(s=1*e.debit)||void 0===s?void 0:s.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar_s6",children:null===(l=1*e.credit)||void 0===l?void 0:l.toFixed(2)}),(0,m.jsx)("div",{className:"tr_bar_s6",children:null===(i=1*e.saldo)||void 0===i?void 0:i.toFixed(2)})]},a)})))})]})}},1636:function(){},1413:function(e,a,s){s.d(a,{Z:function(){return n}});var l=s(4942);function i(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,l)}return s}function n(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?i(Object(s),!0).forEach((function(a){(0,l.Z)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}}}]);
//# sourceMappingURL=8795.757076e7.chunk.js.map