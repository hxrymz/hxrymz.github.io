"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[395,9760],{9760:function(e,a,t){t.r(a),t.d(a,{CloseModal:function(){return c},OpenModal:function(){return d},default:function(){return r}});var n=t(2791),i=t(5408),l=t(2350),s=t(184),o="listDialog_mdh392",r=function(){var e=(0,l.bh)("listDialog")||{},a=((0,i.Z)(o),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:a.map((function(a,t){var i=e[a];if(i&&i.visible){var l={};i.height&&(l.heigth=i.height),i.width,i.zIndex&&(l.zIndex=i.zIndex-1);var o={zIndex:i.zIndex},r=null,d=i.data;return i.content&&(r=n.cloneElement(i.content,{data:d})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:l,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:o,id:a,children:r})}),i.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=a,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),c({id:e})}}):null]},a)}}))})},d=function(e){var a=(0,l.bh)("listDialog")||{},t=(0,l.M5)();a[t]||(a[t]={}),a[t].visible=!0;var n={};e.props?(n=e.props).modalID=t:n.modalID=t;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),a[t].isView=e.isView,a[t].observeResize=e.observeResize,a[t].observeResize&&(a[t].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(t,"']")),n=e&&e.getBoundingClientRect();n&&(n.width===a[t].width&&n.height===a[t].height||(a[t].height=n.height+10,a[t].width=n.width,(0,l.Rz)("listDialog",a),(0,l.wt)(o)))}),200)),a[t].display=!0,e.zIndex&&(a[t].zIndex=e.zIndex),e.height&&(a[t].height=e.height),e.width&&(a[t].width=e.width),e.content&&(a[t].content=e.content),a[t].data=n,(0,l.Rz)("listDialog",a),(0,l.wt)(o),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,l.Rz)("modalOpen",t),(0,l.wt)(o)}),125)},c=function(e){var a,t,n,i=(0,l.bh)("listDialog")||{},s=e.id;i[s]&&(i[s].observeResize&&i[s].observeInterval&&clearInterval(i[s].observeInterval),i[s].display=!1,null===(a=i[s])||void 0===a||null===(t=a.data)||void 0===t||null===(n=t.closeEvent)||void 0===n||n.call(t),(0,l.Rz)("listDialog",i),delete i[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,l.wt)(o),setTimeout((function(){delete i[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,l.Rz)("modalOpen",null)}),750))}},395:function(e,a,t){t.r(a);var n=t(1413),i=t(4165),l=t(5861),s=t(9439),o=t(2791),r=t(2350),d=t(1205),c=t(2647),u=t(24),p=t(9760),h=t(2670),m=t(184),v=(0,u.f_)(),g=(0,c.YZ)(),f=(0,c.Zg)(),x="data_frm_i598",y=["someone_help_preparing","family_help_preparing","counsel_provider_list","political_AB","political_BB","political_2B","political_4B"];a.default=function(e){var a,t,c,u,_,b,N,w,j=e.data,I=(e.elmId,e.close,(0,o.useState)(!1)),z=(0,s.Z)(I,2),B=z[0],k=z[1],T=(0,o.useState)(0),D=(0,s.Z)(T,2),C=(D[0],D[1]),R=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var a,t,n,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={query:"getScanDocumentsNotary",params:{":customerId":(0,r.bh)("upd_client").clientNotaryId,":documentType":"uscis_i598"},queryString:"customerId contain :customerId AND documentType contain :documentType"},t=(0,r.Bm)((0,r.uG)(),a),e.next=4,t;case 4:(n=e.sent)&&!n.error&&(l=(0,r._2)(n.data)[0],n.data[l]?((0,r.Rz)(x,n.data[l]),(0,r.Rz)(x+"_bck",JSON.parse(JSON.stringify(n.data[l]))),C((0,r.M5)())):((0,r.Rz)(x,null),C((0,r.M5)())));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){if(!B)return k(!0),(0,r.Rz)(x,null),C((0,r.M5)()),setTimeout((function(){R(),C((0,r.M5)())}),50),function(){(0,r.Rz)(x,null)}}));var Z=function(e,a){var t=(0,r.bh)(x)||{};t[e]=a,(0,r.Rz)(x,t),C((0,r.M5)())},F=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var a,t,n,l,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,r.bh)(x),t={},a.documentNotaryId?(n=(0,r.vy)(y,(0,r.bh)(x),(0,r.bh)(x+"_bck")),t={query:"updateDocumentsNotary",params:{documentNotaryId:a.documentNotaryId},data2update:n.data}):(a.customerId=(0,r.bh)("upd_client").clientNotaryId,a.documentType="uscis_i598",a.documentNotaryId=(0,r.M5)(),t={query:"addDocumentsNotary",form:a}),l=(0,r.Bm)((0,r.uG)(),t),e.next=6,l;case 6:(s=e.sent)&&s.data&&((0,r.Rz)(x,s.data),C((0,r.M5)()),(null===j||void 0===j?void 0:j.modalID)&&(0,p.CloseModal)({id:null===j||void 0===j?void 0:j.modalID}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var a,t,l,s,o,c,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,n.Z)({},(0,r.bh)("upd_client")),l=(0,r.bh)(x),s=Object.assign({},t,l),o=(0,n.Z)({},(0,h.T7)(s)),c=(null===(a=(0,r.bh)("print_structure"))||void 0===a?void 0:a.i598_details_struct_print)||[],e.next=7,(0,d.pp)(o,c,!0,!0);case 7:u=e.sent,window.open(u);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{style:{maxHeight:"80vh",width:"800px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px 30px"},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("p",{className:"form_title",children:"Asylum Application"}),(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("button",{className:"group_title addBtn purple",onClick:M,children:"Imprimir"})]}),(0,m.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{marginTop:10},children:[(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,m.jsx)(g,{initvalue:null===(a=(0,r.bh)(x))||void 0===a?void 0:a.counsel_provider_list,keyCode:57,updChange:function(e){return Z("counsel_provider_list",e)}}),(0,m.jsx)("span",{className:"checklabel",children:"Counselor List"})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,m.jsx)(g,{initvalue:null===(t=(0,r.bh)(x))||void 0===t?void 0:t.family_help_preparing,keyCode:35,updChange:function(e){return Z("family_help_preparing",e)}}),(0,m.jsx)("span",{className:"checklabel",children:"Family Helping"})]}),(0,m.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,m.jsx)(g,{initvalue:null===(c=(0,r.bh)(x))||void 0===c?void 0:c.someone_help_preparing,keyCode:39,updChange:function(e){return Z("someone_help_preparing",e)}}),(0,m.jsx)("span",{className:"checklabel",children:"Someone preparing"})]})]}),(0,m.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20}}),(0,m.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,m.jsx)(f,{init:null===(u=(0,r.bh)(x))||void 0===u?void 0:u.political_AB,label:"\xbfUsted, su familia, amigos cercanos o colegas alguna vez han sufrido da\xf1os, malos tratos o amenazas en el pasado por parte de alguien?",width:"760px",updChanges:function(e){return Z("political_AB",e)}}),(0,m.jsx)(f,{init:null===(_=(0,r.bh)(x))||void 0===_?void 0:_.political_BB,label:"\xbfTemes da\xf1o o maltrato si regresas a tu pa\xeds de origen?",width:"760px",updChanges:function(e){return Z("political_BB",e)}}),(0,m.jsx)(f,{init:null===(b=(0,r.bh)(x))||void 0===b?void 0:b.political_2B,label:"\xbfTiene miedo de ser torturado en su pa\xeds de origen o en cualquier otro pa\xeds al que pueda ser devuelto?",width:"760px",updChanges:function(e){return Z("political_2B",e)}}),(0,m.jsx)(f,{init:null===(N=(0,r.bh)(x))||void 0===N?void 0:N.political_4B,label:"Despu\xe9s de salir del pa\xeds del que solicita asilo, usted o su c\xf3nyuge o hijo(s) que ahora est\xe1n en los Estados Unidos, \xbfviajaron o residieron en alg\xfan otro pa\xeds antes de ingresar a los Estados Unidos?, el nombre de cada pa\xeds y la duraci\xf3n de la estad\xeda solicit\xf3 la condici\xf3n de refugiado. o para asilo mientras estuvo all\xed, y si no, por qu\xe9 \xe9l o ella no lo hizo.?",width:"760px",updChanges:function(e){return Z("political_4B",e)}})]}),(0,m.jsx)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:(0,m.jsx)(v,{init:null===(w=(0,r.bh)(x))||void 0===w?void 0:w.translateDate,label:"Fecha de la traduccion",updDate:function(e){return Z("translateDate",e)}})}),(0,m.jsxs)("div",{className:"_dsplFlx ",children:[(0,m.jsx)("div",{className:"flexSpace"}),(0,m.jsx)("button",{className:"group_title purple addBtn",onClick:F,children:"Guardar"})]})]})}}}]);
//# sourceMappingURL=395.13c97935.chunk.js.map