"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2136],{5639:function(o,l,n){n.r(l);var i=n(4165),d=n(1413),c=n(5861),a=n(9439),e=n(2791),t=n(2350),u=n(2647),s=(n(6021),n(9760)),r=n(1232),v=n(9661),m=n(7689),b=n(24),_=n(3990),h=n(4050),p=n(184),x=(0,u.PU)(),f=(0,u.Np)(),j=(0,v.FC)(),N=(0,b.f_)(),y=(0,u.JC)(),g="new_multi_collect_prov",A="Acc2MPay",I="multi_collect_by_prov_Doc",Z="collect_by_docM",C="multi_collect_2S",D="extraAccountListOnCollect";l.default=function(o){var l,n,u,r,v,b,x,j,y,w,k,z=o.data,S=(o.confirm,(0,e.useState)(!1)),T=(0,a.Z)(S,2),O=T[0],P=T[1],H=(0,e.useState)(0),B=(0,a.Z)(H,2),U=(B[0],B[1]),Q=(0,m.s0)();(0,e.useEffect)((function(){O||(P(!0),(0,h.Ht)("global_accounts","global_account_params",L),(0,t.Rz)("PamentMethodAccount",null),(0,t.Rz)(C,null),(0,t.Rz)(Z,null),(0,t.Rz)(I,null),(0,t.Rz)("accountPicker",{}),U((0,t.M5)()))}));var L=function(){U((0,t.M5)())},K=function(o,l,n){var i=(0,t.bh)(g)||{};n?(i[n]||(i[n]={}),i[n][o]=l):i[o]=l,(0,t.Rz)(g,i),U((0,t.M5)())},$=function(){var o=(0,c.Z)((0,i.Z)().mark((function o(){var l,n,a,e,u,r,v,m,b,_,h,p,x,f,j,N,y;return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=(0,t.bh)(g)||{},a=[],n.date?n.date=new Date(n.date).getTime():n.date=(new Date).getTime()+800,o.next=5,(0,t.fN)(n.date);case 5:return e=o.sent,n.comprobanteId=e,u="",(r=(0,t.bh)("multi_collect_anticipo_by_doc")&&(0,t._2)((0,t.bh)("multi_collect_anticipo_by_doc")))&&(null===r||void 0===r||r.map((function(o,l){var i,c,e,u,s=(0,d.Z)({},n),r=(0,t.bh)("multi_collect_anticipo_by_doc")[o];s.document=null===r||void 0===r?void 0:r.document,s.account=null===r||void 0===r?void 0:r.account,s.subAccount=null===r||void 0===r?void 0:r.subAccount,s.type=null===r||void 0===r?void 0:r.type,s.amount=null===r||void 0===r?void 0:r.amount,s.operationId=(0,t.M5)();var v=(0,d.Z)({},null===(i=(0,t.bh)((0,t.hQ)()))||void 0===i?void 0:i.add_opera);v.params={businessId:null===(c=(0,t.bh)("profileUser"))||void 0===c?void 0:c.businessId},v.form=s,a.push(v);var m=(0,d.Z)({},n);m.document=null===r||void 0===r?void 0:r.documentRefer,m.account=null===r||void 0===r?void 0:r.accountRef,m.subAccount=null===r||void 0===r?void 0:r.sub_accountRef,m.type="credit",m.amount=null===r||void 0===r?void 0:r.amount,m.operationId=(0,t.M5)();var b=(0,d.Z)({},null===(e=(0,t.bh)((0,t.hQ)()))||void 0===e?void 0:e.add_opera);b.params={businessId:null===(u=(0,t.bh)("profileUser"))||void 0===u?void 0:u.businessId},b.form=m,a.push(b)}))),(v=(0,t.bh)(C)&&(0,t._2)((0,t.bh)(C)))&&(null===v||void 0===v||v.map((function(o,l){var i,c,e=(0,d.Z)({},n),s=(0,t.bh)(C)[o];e.document=null===s||void 0===s?void 0:s.document,u+=(null===s||void 0===s?void 0:s.document)+" ; ",e.account=null===s||void 0===s?void 0:s.account,e.subAccount=null===s||void 0===s?void 0:s.subAccount,e.providerId=null===s||void 0===s?void 0:s.providerId,e.customerId=null===s||void 0===s?void 0:s.customerId,e.type=null===s||void 0===s?void 0:s.type,e.amount=null===s||void 0===s?void 0:s.amount,e.collectOrCollect="collect",e.operationId=(0,t.M5)();var r=(0,d.Z)({},null===(i=(0,t.bh)((0,t.hQ)()))||void 0===i?void 0:i.add_opera);r.params={businessId:null===(c=(0,t.bh)("profileUser"))||void 0===c?void 0:c.businessId},r.form=e,a.push(r)}))),m=(0,t.bh)(D)&&(0,t._2)((0,t.bh)(D)),b=null===(l=(0,t.bh)("global_account_params"))||void 0===l?void 0:l.cash_bank,m&&(null===m||void 0===m||m.map((function(o,l){var i,c,e,s,r=(0,d.Z)({},n),v=(0,t.bh)(D)[o];r.document=r.paymentDocument,r.account=null===v||void 0===v?void 0:v.account,r.subAccount=null===v||void 0===v?void 0:v.subAccount,r.type="debit",r.amount=null===v||void 0===v?void 0:v.amount,r.operationId=(0,t.M5)();var m=(0,d.Z)({},null===(i=(0,t.bh)((0,t.hQ)()))||void 0===i?void 0:i.add_opera);m.params={businessId:null===(c=(0,t.bh)("profileUser"))||void 0===c?void 0:c.businessId},m.form=r,a.push(m);var _=(0,d.Z)({},n);_.document=_.paymentDocument,_.paymentDocument=u,_.account=null===b||void 0===b?void 0:b.account,_.type="credit",_.amount=1*(null===v||void 0===v?void 0:v.amount),_.operationId=(0,t.M5)();var h=(0,d.Z)({},null===(e=(0,t.bh)((0,t.hQ)()))||void 0===e?void 0:e.add_opera);h.params={businessId:null===(s=(0,t.bh)("profileUser"))||void 0===s?void 0:s.businessId},h.form=_,a.push(h)}))),(_=M((0,t.bh)(C)))>0&&((f=(0,d.Z)({},n)).document=f.paymentDocument,f.paymentDocument=u,f.account=null===b||void 0===b?void 0:b.account,(j=null===(h=(0,t.bh)("account_ids"))||void 0===h?void 0:h[f.account]).collectOrCollect&&(f.collectOrCollect=j.collectOrCollect),f.type="debit",f.amount=1*_,f.operationId=(0,t.M5)(),(N=(0,d.Z)({},null===(p=(0,t.bh)((0,t.hQ)()))||void 0===p?void 0:p.add_opera)).params={businessId:null===(x=(0,t.bh)("profileUser"))||void 0===x?void 0:x.businessId},N.form=f,a.push(N)),y=a.map(function(){var o=(0,c.Z)((0,i.Z)().mark((function o(l){var n;return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=(0,t.I7)(l),o.next=3,n;case 3:o.sent;case 5:case"end":return o.stop()}}),o)})));return function(l){return o.apply(this,arguments)}}()),o.next=20,Promise.all(y);case 20:setTimeout((function(){(0,t.Rz)(I,null),(0,t.Rz)(g,null),(0,t.Rz)("multi_collect_anticipo_by_doc",null),(null===z||void 0===z?void 0:z.modalID)&&(0,s.CloseModal)({id:null===z||void 0===z?void 0:z.modalID}),Q({pathname:"/accounting-ledger",search:"?cId=".concat(e)})}),400);case 21:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}(),G=function(){var o=(0,d.Z)({},(0,t.bh)(I))||{},l=(0,d.Z)({},(0,t.bh)(C))||{};(0,t._2)(o).map((function(n){var i,c,a=(null===(i=(0,t.bh)(A))||void 0===i?void 0:i.account)+"_"+(null===(c=(0,t.bh)(A))||void 0===c?void 0:c.subAccount)+"_"+n,e=(0,d.Z)({},(0,t.bh)(A));l[a]={},l[a].amount=1*o[n],l[a].document=n,l[a].type="credit",l[a].account=null===e||void 0===e?void 0:e.account,l[a].subAccount=null===e||void 0===e?void 0:e.subAccount,l[a].customerId=null===e||void 0===e?void 0:e.customerId})),(0,t.Rz)(C,l),(0,t.Rz)(I,null),(0,t.Rz)(A,null),U((0,t.M5)())},E=null===(l=(0,t.bh)("global_account_params"))||void 0===l?void 0:l.cash_bank;return(0,p.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"720px",overflow:"auto",background:"var(--hrm_palette-general-background-b)",borderRadius:13,padding:"10px 19px"},children:[(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("p",{className:"form_title",children:"Registrando Cobro"}),(0,p.jsx)("div",{className:"flexSpace"})]}),(0,p.jsxs)("div",{className:"_dsplFlx",children:[(0,p.jsx)("div",{className:"flexSpace"}),null!==E&&void 0!==E&&E.account?(0,p.jsxs)("div",{className:" acc_dtls",children:[(0,p.jsxs)("div",{className:"_dsplFlx",children:[(0,p.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===(n=(0,t.bh)("account_ids"))||void 0===n||null===(u=n[null===E||void 0===E?void 0:E.account])||void 0===u?void 0:u.code}),(0,p.jsx)("div",{className:"name",children:null===(r=(0,t.bh)("account_ids"))||void 0===r||null===(v=r[null===E||void 0===E?void 0:E.account])||void 0===v?void 0:v.name})]}),(0,p.jsx)("div",{className:"flexSpace"})]}):null]}),(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)(N,{init:null===(b=(0,t.bh)(g))||void 0===b?void 0:b.date,updDate:function(o){return K("date",o)}}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)(f,{init:null===(x=(0,t.bh)(g))||void 0===x?void 0:x.paymentDocument,label:"Documento de Cobro",width:200,updChanges:function(o){return K("paymentDocument",o)}})]}),(0,p.jsx)(f,{init:null===(j=(0,t.bh)(g))||void 0===j?void 0:j.description,label:"Descripcion",width:520,updChanges:function(o){return K("description",o)}}),(0,p.jsxs)("div",{className:" _dsplFlx",children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){var o={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};o.content=(0,p.jsx)(F,{updObs:U,confirm:G}),(0,s.OpenModal)(o)},children:"Clientes"})]}),(0,t.bh)(C)&&(0,t._2)((0,t.bh)(C)).length>0?(0,p.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Cuenta"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Sub Cuenta"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Balance"})]}),(0,p.jsx)(R,{data:{account:null===E||void 0===E?void 0:E.account,amount:M((0,t.bh)(C)),type:"debit",document:null===(y=(0,t.bh)(g))||void 0===y?void 0:y.paymentDocument},updObs:U}),(0,t.bh)(C)&&(null===(w=(0,t._2)((0,t.bh)(C)))||void 0===w?void 0:w.map((function(o,l){return(0,p.jsx)(R,{idKey:o,data:(0,t.bh)(C)[o],updObs:U},o)})))]}):null,(0,p.jsx)(_.Z,{collectionName:D}),null!==(k=(0,t.bh)(g))&&void 0!==k&&k.paymentDocument&&(M((0,t.bh)(C))>0||M((0,t.bh)("multi_collect_anticipo_by_doc"))>0)?(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("button",{onClick:$,children:"Guardar"})})]}):null]})};var R=function(o){var l,n,i=o.data;return 1*(null===i||void 0===i?void 0:i.amount)===0?null:(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:(0,p.jsx)(y,{data:null===(l=(0,t.bh)("account_ids"))||void 0===l?void 0:l[null===i||void 0===i?void 0:i.account],color:"debit"===i.type?"#009688":"#c62828",labelField:"code",infoField:"name"})}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null!==i&&void 0!==i&&i.subAccount?(0,p.jsx)(y,{data:null===(n=(0,t.bh)("sub_account_ids"))||void 0===n?void 0:n[null===i||void 0===i?void 0:i.subAccount],color:"debit"===i.type?"#009688":"#c62828",labelField:"subAccount",infoField:"subAccountName"}):null}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",style:{marginTop:10},children:null===i||void 0===i?void 0:i.document}),(0,p.jsxs)("div",{className:"tr_bar  tr_bar_25",style:{marginTop:10},children:["$",(1*(null===i||void 0===i?void 0:i.amount)).toFixed(2)]})]})},F=function(o){var l,n,i,d,c,u,v,m,b,_,h,x,f,N,y,g=o.data,I=o.confirm,C=(0,e.useState)(0),D=(0,a.Z)(C,2),R=(D[0],D[1]),F=function(){var o,l,n,i,d,c,a=null===(o=(0,t.bh)("sub_account_ids"))||void 0===o?void 0:o[null===(l=(0,t.bh)(A))||void 0===l?void 0:l.subAccount];(0,r.pj)(null===(n=(0,t.bh)("global_account_params"))||void 0===n||null===(i=n.advance_collections)||void 0===i?void 0:i.account,a.subAccount,M),(0,t.wL)("searchSubAccbyCode",(null===(d=(0,t.bh)("global_account_params"))||void 0===d||null===(c=d.advance_collections)||void 0===c?void 0:c.account)+" "+a.subAccount)},M=function(o){var l,n,i;(0,t.wL)("subAccount",null===(l=(0,t.bh)(A))||void 0===l?void 0:l.subAccount),(0,t.wL)("loadAnticipo",o);var d={account:null===(n=(0,t.bh)("global_account_params"))||void 0===n||null===(i=n.advance_collections)||void 0===i?void 0:i.account,subAccount:null===o||void 0===o?void 0:o.sub_accountId};(0,t.Rz)("advance_collections",d),(0,r.nr)(d,z)},z=function(){R((0,t.M5)())};return(0,p.jsxs)("div",{style:{maxHeight:"92vh",minHeight:"90vh",width:"720px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("p",{className:"form_title",children:"Cobros por Clientes"}),(0,p.jsx)("div",{className:"flexSpace"})]}),(0,p.jsx)("div",{style:{margin:"18px 0"},children:null!==(l=(0,t.bh)(A))&&void 0!==l&&l.account?(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:" acc_dtls",children:[(0,p.jsxs)("div",{className:"_dsplFlx",children:[(0,p.jsx)("div",{className:"code",style:{color:"#646cff"},onClick:function(){(0,t.Rz)(A,null),R((0,t.M5)())},children:null===(n=(0,t.bh)("account_ids"))||void 0===n||null===(i=n[null===(d=(0,t.bh)(A))||void 0===d?void 0:d.account])||void 0===i?void 0:i.code}),(0,p.jsx)("div",{className:"name",children:null===(c=(0,t.bh)("account_ids"))||void 0===c||null===(u=c[null===(v=(0,t.bh)(A))||void 0===v?void 0:v.account])||void 0===u?void 0:u.name})]}),(0,p.jsx)("div",{className:"flexSpace"}),null!==(m=(0,t.bh)(A))&&void 0!==m&&m.subAccount?(0,p.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,p.jsx)("div",{className:"code",children:null===(b=(0,t.bh)("sub_account_ids"))||void 0===b||null===(_=b[null===(h=(0,t.bh)(A))||void 0===h?void 0:h.subAccount])||void 0===_?void 0:_.subAccount}),(0,p.jsx)("div",{className:"name",children:null===(x=(0,t.bh)("sub_account_ids"))||void 0===x||null===(f=x[null===(N=(0,t.bh)(A))||void 0===N?void 0:N.subAccount])||void 0===f?void 0:f.subAccountName})]}):null]}),(0,p.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Documento"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_20",children:"Balance"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_5"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_25",children:"Por Pagar"}),(0,p.jsx)("div",{className:"tr_bar tr_bar_20",children:"Anticipo"})]}),(0,t.bh)(Z)&&(null===(y=(0,t._2)((0,t.bh)(Z)))||void 0===y?void 0:y.map((function(o,l){return(0,p.jsx)(k,{idKey:o,data:(0,t.bh)(Z)[o],updObs:R},o)})))]})]}):(0,p.jsx)(j,{placeholder:"buscar un provedor",width:420,handleClick:function(o){var l={account:null===o||void 0===o?void 0:o.account,subAccount:null===o||void 0===o?void 0:o.subAccount,customerId:null===o||void 0===o?void 0:o.customerId};(0,t.Rz)(A,l),(0,r.i7)(l,F)}})}),w((0,t.bh)(Z))?(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("p",{className:"group_title addBtn purple",onClick:function(){I&&I(),(null===g||void 0===g?void 0:g.modalID)&&(0,s.CloseModal)({id:null===g||void 0===g?void 0:g.modalID})},children:"Guardar"})]}):null]})},M=function(o){var l,n=0;return o&&(null===(l=(0,t._2)(o))||void 0===l||l.map((function(l,i){var d;n+=1*(0,t.Zv)(null===(d=o[l])||void 0===d?void 0:d.amount,2)}))),n},w=function(o){var l=o&&(0,t._2)(o),n=(0,t.bh)(I),i=!0;return l&&(null===l||void 0===l||l.map((function(l,c){var a,e,u,s=o[l],r=(null===(a=(0,t.bh)(A))||void 0===a?void 0:a.account)+"_"+(null===(e=(0,t.bh)(A))||void 0===e?void 0:e.subAccount)+"_"+s.document,v=(0,d.Z)({},(0,t.bh)("multi_collect_anticipo_by_doc")),m=null===v||void 0===v||null===(u=v[r])||void 0===u?void 0:u.amount,b=m||0,_=(0,t.Zv)(1*(null===s||void 0===s?void 0:s.amount)-1*b,2),h=(0,t.Zv)(1*(null===n||void 0===n?void 0:n[s.document]),2);h&&h-_>0&&(i=!1)}))),i},k=function(o){var l,n,i,c=o.data,u=o.updObs,r=(o.idKey,(0,e.useState)(0)),v=(0,a.Z)(r,2),m=v[0],b=v[1],_=(0,e.useState)(0),h=(0,a.Z)(_,2),j=(h[0],h[1]),N=(null===(l=(0,t.bh)(A))||void 0===l?void 0:l.account)+"_"+(null===(n=(0,t.bh)(A))||void 0===n?void 0:n.subAccount)+"_"+c.document,y=(0,d.Z)({},(0,t.bh)("multi_collect_anticipo_by_doc")),g=null===y||void 0===y||null===(i=y[N])||void 0===i?void 0:i.amount,Z=g?1*g:0,C=function(o){j((0,t.M5)())},D=function(o,l,n){var i=(0,t.bh)(I)||{};n?(i[n]||(i[n]={}),i[n][o]=l):i[o]=l,(0,t.Rz)(I,i)};return 1*(null===c||void 0===c?void 0:c.amount)===0?null:(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar",children:[(0,p.jsx)("div",{className:" tr_bar_25",style:{marginTop:10},children:null===c||void 0===c?void 0:c.document}),(0,p.jsxs)("div",{className:" tr_bar_20",style:{marginTop:10},children:["$",(1*(null===c||void 0===c?void 0:c.amount)-Z).toFixed(2)]}),(0,p.jsx)("div",{className:"tr_bar_5",style:{marginTop:10},children:m>(null===c||void 0===c?void 0:c.amount)-Z?(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)(x,{name:"alert",color:"#c62828"})}):null}),(0,p.jsx)("div",{className:" tr_bar_25",children:(0,p.jsx)(f,{init:m,type:"number",width:80,updChanges:function(o){return b(l=o),D(null===c||void 0===c?void 0:c.document,l),void u((0,t.M5)());var l}})}),(0,p.jsx)("div",{className:" tr_bar_20",style:{marginTop:10},onClick:function(){var o={zIndex:450,height:"93vh",props:{minHeight:"1vh",overlay:!0}};o.content=(0,p.jsx)(z,{confirm:C,item:c}),(0,s.OpenModal)(o)},children:null===Z||void 0===Z?void 0:Z.toFixed(2)})]})},z=function(o){var l,n=o.data,i=o.confirm,c=o.item,u=(0,e.useState)(""),r=(0,a.Z)(u,2),v=r[0],m=r[1],b=function(o){i&&i(o),(null===n||void 0===n?void 0:n.modalID)&&(0,s.CloseModal)({id:null===n||void 0===n?void 0:n.modalID})};return(0,p.jsxs)("div",{style:{maxHeight:"90vh",minHeight:"88vh",width:"660px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,p.jsxs)("div",{className:"_dsplFlx ",children:[(0,p.jsx)("p",{className:"form_title",children:"Anticipos por Clientes"}),(0,p.jsx)("div",{className:"flexSpace"}),(0,p.jsx)("p",{className:"group_title addBtn",onClick:function(){return function(){var o,l,a=(0,d.Z)({},(0,t.bh)("multi_collect_anticipo_by_doc"))||{};delete a[(null===(o=(0,t.bh)(A))||void 0===o?void 0:o.account)+"_"+(null===(l=(0,t.bh)(A))||void 0===l?void 0:l.subAccount)+"_"+c.document],(0,t.Rz)("multi_collect_anticipo_by_doc",a),i&&i(0),(null===n||void 0===n?void 0:n.modalID)&&(0,s.CloseModal)({id:null===n||void 0===n?void 0:n.modalID})}()},children:"Borrar"})]}),(0,p.jsxs)("div",{className:"boxAddAcc",style:{margin:"18px 0"},children:[(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar purple",style:{margin:"18px 0"},children:[(0,p.jsx)("div",{className:"tr_bar_40 tex_left",children:"Cliente"}),(0,p.jsx)("div",{className:"tr_bar_20",children:"Balance"}),(0,p.jsx)("div",{className:"tr_bar_5"}),(0,p.jsx)("div",{className:"tr_bar_25",children:"Amount"}),(0,p.jsx)("div",{className:"tr_bar_10"})]}),(0,p.jsx)("div",{className:"accounts_container ",children:(0,t.bh)("toPay_by_doc")&&(null===(l=(0,t._2)((0,t.bh)("toPay_by_doc")))||void 0===l?void 0:l.map((function(o,l){var n=(0,t.bh)("toPay_by_doc")[o];return 0===1*(null===n||void 0===n?void 0:n.amount)?null:(0,p.jsx)(S,{document:c.document,itm:n,activeDoc:v,updDoc:m,closeModal:b},n.document+"_"+l)})))})]})]})},S=function(o){var l=o.itm,n=o.closeModal,i=o.activeDoc,c=o.updDoc,u=o.document,s=(0,e.useState)(0),r=(0,a.Z)(s,2),v=r[0],m=r[1],b=T(l.document,(0,d.Z)({},(0,t.bh)("multi_collect_anticipo_by_doc")));return(0,p.jsxs)("div",{className:"_dsplFlx hdr_bar",style:{margin:"2px 0"},children:[(0,p.jsx)("div",{className:"tr_bar_40 tex_left",style:{marginTop:10,color:i===l.document?"var(--hrm_palette-blue-purple)":""},onClick:function(){c(l.document),m(0)},children:l.document}),(0,p.jsxs)("div",{className:"tr_bar_20",style:{marginTop:10},children:["$",(1*(null===l||void 0===l?void 0:l.amount)-1*b).toFixed(2)]}),(0,p.jsx)("div",{className:"tr_bar_5",style:{marginTop:10},children:v>(null===l||void 0===l?void 0:l.amount)?(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)(x,{name:"alert",color:"#c62828"})}):null}),(0,p.jsx)("div",{className:"tr_bar_25",children:i===l.document?(0,p.jsx)(f,{init:v,type:"number",width:80,updChanges:function(o){return m(1*o)}}):null}),(0,p.jsx)("div",{className:"tr_bar_10",style:{marginTop:10,marginLeft:9},children:i===l.document&&v<=1*(null===l||void 0===l?void 0:l.amount)?(0,p.jsx)("div",{className:"icon",onClick:function(){return function(o){var i,c,a,e,s=(0,d.Z)({},(0,t.bh)("multi_collect_anticipo_by_doc"))||{},r=(null===(i=(0,t.bh)(A))||void 0===i?void 0:i.account)+"_"+(null===(c=(0,t.bh)(A))||void 0===c?void 0:c.subAccount)+"_"+u,m=(0,d.Z)({},(0,t.bh)("advance_collections"));m.document=l.document,m.documentRefer=u,m.amount=1*v,m.type="debit",m.description=o.description,m.accountRef=null===(a=(0,t.bh)(A))||void 0===a?void 0:a.account,m.sub_accountRef=null===(e=(0,t.bh)(A))||void 0===e?void 0:e.subAccount,s[r]=m,(0,t.Rz)("multi_collect_anticipo_by_doc",s),n(1*v)}(l)},children:(0,p.jsx)(x,{name:"add",color:"var(--hrm_palette-blue-purple)"})}):null})]})},T=function(o,l){var n,i=0;return l&&(null===(n=(0,t._2)(l))||void 0===n||n.map((function(n,d){var c,a;o===(null===(c=l[n])||void 0===c?void 0:c.document)&&(i+=1*(0,t.Zv)(null===(a=l[n])||void 0===a?void 0:a.amount,2))}))),i}}}]);
//# sourceMappingURL=2136.97c59d2d.chunk.js.map