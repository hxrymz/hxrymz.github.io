"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2249,9760],{9760:function(e,a,n){n.r(a),n.d(a,{CloseModal:function(){return r},OpenModal:function(){return d},default:function(){return o}});var l=n(2791),i=n(5408),c=n(2350),s=n(184),t="listDialog_mdh392",o=function(){var e=(0,c.bh)("listDialog")||{},a=((0,i.Z)(t),Object.keys(e));return(0,s.jsx)(s.Fragment,{children:a.map((function(a,n){var i=e[a];if(i&&i.visible){var c={};i.height&&(c.heigth=i.height),i.width,i.zIndex&&(c.zIndex=i.zIndex-1);var t={zIndex:i.zIndex},o=null,d=i.data;return i.content&&(o=l.cloneElement(i.content,{data:d})),(0,s.jsxs)("div",{className:"ltr-1kbnjow",style:c,children:[(0,s.jsx)("div",{className:"ltr-hoe9xz",children:(0,s.jsx)("div",{className:"ltr-1wao6ny",style:t,id:a,children:o})}),i.data.overlay?(0,s.jsx)("div",{className:"DialogHRMOverlay ".concat(i.visible?"active":""),onClick:function(){var e;e=a,document.getElementsByTagName("html")[0].classList.remove("has-level-two"),r({id:e})}}):null]},a)}}))})},d=function(e){var a=(0,c.bh)("listDialog")||{},n=(0,c.M5)();a[n]||(a[n]={}),a[n].visible=!0;var l={};e.props?(l=e.props).modalID=n:l.modalID=n;var i=document.getElementsByTagName("body")[0];null!==i&&void 0!==i&&i.style&&(i.style.overflowY="hidden"),a[n].isView=e.isView,a[n].observeResize=e.observeResize,a[n].observeResize&&(a[n].observeInterval=setInterval((function(){var e=document.querySelector("[dialog-key-id='".concat(n,"']")),l=e&&e.getBoundingClientRect();l&&(l.width===a[n].width&&l.height===a[n].height||(a[n].height=l.height+10,a[n].width=l.width,(0,c.Rz)("listDialog",a),(0,c.wt)(t)))}),200)),a[n].display=!0,e.zIndex&&(a[n].zIndex=e.zIndex),e.height&&(a[n].height=e.height),e.width&&(a[n].width=e.width),e.content&&(a[n].content=e.content),a[n].data=l,(0,c.Rz)("listDialog",a),(0,c.wt)(t),setTimeout((function(){document.getElementsByTagName("html")[0].classList.add("has-level-two"),(0,c.Rz)("modalOpen",n),(0,c.wt)(t)}),125)},r=function(e){var a,n,l,i=(0,c.bh)("listDialog")||{},s=e.id;i[s]&&(i[s].observeResize&&i[s].observeInterval&&clearInterval(i[s].observeInterval),i[s].display=!1,null===(a=i[s])||void 0===a||null===(n=a.data)||void 0===n||null===(l=n.closeEvent)||void 0===l||l.call(n),(0,c.Rz)("listDialog",i),delete i[s],document.getElementsByTagName("body")[0].style.overflowY=null,(0,c.wt)(t),setTimeout((function(){delete i[s],document.getElementsByTagName("html")[0].classList.remove("has-level-two"),(0,c.Rz)("modalOpen",null)}),750))}},2079:function(e,a,n){n.r(a),n.d(a,{CardTaxW2:function(){return _},TaxDecuctionItem:function(){return g}});var l=n(4165),i=n(1413),c=n(5861),s=n(9439),t=n(2791),o=(n(1636),n(2350)),d=n(810),r=n(2647),u=(n(3266),n(4050)),v=n(4304),m=n(9760),h=n(9661),x=n(184),b=(0,r.PU)(),p=(0,h.a)();a.default=function(e){var a=e.data,n=e.keyId,d=(0,t.useState)(0),r=(0,s.Z)(d,2),v=(r[0],r[1]),h=function(){v((0,o.M5)())};(0,t.useEffect)((function(){(0,u.Ht)("global_accounts","global_account_params",h)}),[n]);var b=[{id:"inventory",lbl:"Inventario"},{id:"inventory_expensess",lbl:"Gastos Inventario"},{id:"sales_income",lbl:"Ingresos por Ventas"},{id:"cash_bank",lbl:"Efectivo en Banco"},{id:"advance_collections",lbl:"Cobros Anticipados"},{id:"sale_tax",lbl:"Taxes en compra y venta"},{id:"socialsecurity_tax_expenses",lbl:"Gastos en Social Security"},{id:"medicare_tax_expenses",lbl:"Gastos en Medicare"},{id:"salary",lbl:"Gastos de Salario"},{id:"futureSlipCheck",lbl:"Cheques a futuro para la Nomina"}],p=["inventory","inventory_expensess","sales_income","cash_bank","advance_collections","sale_tax","socialsecurity_tax_expenses","medicare_tax_expenses","salary","futureSlipCheck","w2_params"],g=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(){var n,c,s,t,d,r,u,h,x,b,f,_,g,j;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=(0,o.bh)("global_account_params"))||void 0===n||!n.balanceId){e.next=16;break}return(d=(0,i.Z)({},(0,o.bh)("global_account_params"))).balanceId=(0,o.M5)(),(r=(0,i.Z)({},null===(c=(0,o.bh)((0,o.hQ)()))||void 0===c?void 0:c.upd_balances)).params={businessId:null===(s=(0,o.bh)("profileUser"))||void 0===s?void 0:s.businessId,balanceId:null===(t=(0,o.bh)("global_account_params"))||void 0===t?void 0:t.balanceId},u=(0,o.vy)(p,(0,o.bh)("global_account_params"),(0,o.bh)("global_account_params_bck")),r.data2update=u.data,h=(0,o.I7)(r),e.next=10,h;case 10:x=e.sent,console.log(r),console.log(x),x&&(0,o.Rz)("global_account_params",d),e.next=27;break;case 16:return(_=(0,i.Z)({},(0,o.bh)("global_account_params"))).balanceId=(0,o.M5)(),_.type="global_accounts",(g=(0,i.Z)({},null===(b=(0,o.bh)((0,o.hQ)()))||void 0===b?void 0:b.add_balances)).params={businessId:null===(f=(0,o.bh)("profileUser"))||void 0===f?void 0:f.businessId},g.form=_,j=(0,o.I7)(g),e.next=25,j;case 25:e.sent&&((0,o.Rz)("global_account_params",_),v((0,o.M5)()));case 27:(null===a||void 0===a?void 0:a.modalID)&&(0,m.CloseModal)({id:null===a||void 0===a?void 0:a.modalID});case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{style:{maxHeight:"80vh",width:"690px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"form_title",children:"Cuentas Globales"}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsx)("div",{className:"balance",style:{marginTop:10,minHeight:320},children:b&&b.map((function(e){return(0,x.jsx)(f,{keyId:e.id,item:e},e.id)}))}),(0,x.jsx)(_,{item:(0,o.bh)("global_account_params").w2_params}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:g,children:"Guardar"})})]})]})};var f=function(e){var a,n,l,i=e.keyId,c=e.item,r=(0,t.useState)(!1),u=(0,s.Z)(r,2),v=u[0],m=u[1],h=(0,t.useState)(!1),b=(0,s.Z)(h,2),p=(b[0],b[1],(0,t.useState)(0)),f=(0,s.Z)(p,2),_=(f[0],f[1]),g=null===(a=(0,o.bh)("global_account_params"))||void 0===a?void 0:a[i],j=null===(n=(0,o.bh)("account_ids"))||void 0===n?void 0:n[g];j&&(null===(l=(0,o.bh)("sub_account_group"))||void 0===l||l[null===j||void 0===j?void 0:j.accountId]);return(0,x.jsx)("div",{style:{margin:"7px 0 7px 27px"},children:(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{onClick:function(){return m(!v)},className:"".concat(v?"editing":""),style:{marginRight:27,minWidth:160},children:(0,x.jsx)("div",{className:"acc_global_lbl",children:c.lbl})}),v?(0,x.jsx)("div",{children:(0,x.jsx)(d.Z,{handleClick:function(e){!function(e,a,n){var l="global_account_params",i=(0,o.bh)(l)||{};n?(i[n]||(i[n]={}),i[n][e]=a):i[e]=a,(0,o.Rz)(l,i),_((0,o.M5)())}(i,e),m(!1)}})}):(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"bg_acc_code",children:null===j||void 0===j?void 0:j.code}),(0,x.jsx)("span",{className:"bg_acc_amount",style:{marginLeft:13},children:null===j||void 0===j?void 0:j.name})]}),(0,x.jsx)("div",{className:"flexSpace"})]})})},_=function(e){var a=e.item,n=(0,t.useState)(0),l=(0,s.Z)(n,2),i=(l[0],l[1]),c=function(e,n,l){var c=a||y;l?(c[l]||(c[l]={}),c[l][e]=n):c[e]=n,function(e,a,n){var l="global_account_params",c=(0,o.bh)(l)||{};n?(c[n]||(c[n]={}),c[n][e]=a):c[e]=a,(0,o.Rz)(l,c),i((0,o.M5)())}("w2_params",c),i((0,o.M5)())};return(0,x.jsxs)(v.lp,{children:[(0,x.jsx)("div",{className:"iMTYiw hiKoiM",children:"W2 Tax deduction Parameter"}),(0,x.jsx)("div",{className:"_dsplFlx w_100prc",style:{marginTop:19}}),(0,x.jsx)(g,{label:"Federal Tax",percentDefault:14.5,onChange:c,keyFld:"federalTax",item:a}),(0,x.jsx)(g,{label:"Social Security",percentDefault:6.2,onChange:c,keyFld:"socialSecurity",item:a}),(0,x.jsx)(g,{label:"Medicare",percentDefault:1.45,onChange:c,keyFld:"medicareTax",item:a}),(0,x.jsx)(g,{label:"Estate",percentDefault:4.5,onChange:c,keyFld:"stateTax",item:a}),(0,x.jsx)(g,{label:"City",percentDefault:2.2,onChange:c,keyFld:"cityTax",item:a})]})},g=function(e){var a,n,l,i,c,o=e.label,d=e.item,r=e.onChange,u=e.keyFld,v=e.percentDefault,h=(0,t.useState)(0),p=(0,s.Z)(h,2),f=p[0],_=p[1],g=(0,t.useState)(0),y=(0,s.Z)(g,2),N=y[0],I=(y[1],N||(null===d||void 0===d||null===(a=d[u])||void 0===a?void 0:a.percent)||v),k=function(e){var a=(null===d||void 0===d?void 0:d[u])||{};a.account=e,r&&r(u,a)},w=!(null!==d&&void 0!==d&&null!==(n=d[u])&&void 0!==n&&null!==(l=n.account)&&void 0!==l&&l.account);return(0,x.jsxs)("div",{className:"_dsplFlx w_100prc",children:[(0,x.jsx)("div",{className:"icon_revision","data-acc":"".concat(null===d||void 0===d||null===(i=d[u])||void 0===i||null===(c=i.account)||void 0===c?void 0:c.account),children:(0,x.jsx)(b,{name:w?"alert":"check_circle",color:w?"var(--hrm_palette-selected-nav-text)":"var(--hrm_palette-success-fg)"})}),(0,x.jsx)("div",{className:"igLyC jyoObE pddBtm-12",children:(0,x.jsx)("div",{className:"txfnt_lfal",onClick:function(){var e,a={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,x.jsx)(j,{item:null===d||void 0===d||null===(e=d[u])||void 0===e?void 0:e.account,confirm:k}),(0,m.OpenModal)(a)},children:o})}),(0,x.jsx)("div",{className:"igLyC jyoObE",onClick:function(){return _(!f)},children:I+"%"})]})},j=function(e){var a,n,l=e.data,i=e.confirm,c=e.item,d=(0,t.useState)(0),r=(0,s.Z)(d,2),u=(r[0],r[1]),v=(0,t.useState)({}),h=(0,s.Z)(v,2),b=h[0],f=h[1],_=(null===b||void 0===b?void 0:b.account)||(null===c||void 0===c?void 0:c.account),g=(null===b||void 0===b?void 0:b.subAccount)||(null===c||void 0===c?void 0:c.subAccount),j=null===(a=(0,o.bh)("account_ids"))||void 0===a?void 0:a[_],y=null===(n=(0,o.bh)("sub_account_ids"))||void 0===n?void 0:n[g];return(0,x.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"60vh",width:"560px",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("p",{className:"form_title",children:"Associar Cuenta"}),(0,x.jsx)("div",{className:"flexSpace"})]}),_?(0,x.jsx)("div",{className:"_dsplFlx ",style:{margin:"18px 0"},children:(0,x.jsxs)("div",{className:" acc_dtls",children:[(0,x.jsxs)("div",{className:"_dsplFlx",onClick:function(){f(null),u((0,o.M5)())},children:[(0,x.jsx)("div",{className:"code",style:{color:"#646cff"},children:null===j||void 0===j?void 0:j.code}),(0,x.jsx)("div",{className:"name",children:null===j||void 0===j?void 0:j.name})]}),y?(0,x.jsxs)("div",{className:"_dsplFlx",style:{margin:"10px 0 0 18px"},children:[(0,x.jsx)("div",{className:"code",children:null===y||void 0===y?void 0:y.subAccount}),(0,x.jsx)("div",{className:"name",children:null===y||void 0===y?void 0:y.subAccountName})]}):null,(0,x.jsx)("div",{className:"flexSpace"})]})}):(0,x.jsx)(p,{width:420,handleClick:function(e,a){f({account:e,subAccount:a}),u((0,o.M5)())}}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("button",{onClick:function(){i&&i(b),(0,m.CloseModal)({id:l.modalID})},children:"Associar"})})]})},y={stateTax:{percent:"4.5",account:{account:"IyUqTzPnXRm3oNnu",subAccount:"RDadP2ImsvGBTF1J"}},federalTax:{percent:"14.5",account:{account:"IyUqTzPnXRm3oNnu",subAccount:"mp3xtbV8krDaZ4as"}},cityTax:{percent:"2.2",account:{account:"IyUqTzPnXRm3oNnu",subAccount:"Rn2ke3hQ4rDdxilY"}},socialSecurity:{account:{account:"IyUqTzPnXRm3oNnu",subAccount:"tUjWWJNt8fCWqMqw"},percent:"6.2"},medicareTax:{account:{account:"IyUqTzPnXRm3oNnu",subAccount:"pf5JQ1WzahfpbHeF"},percent:"1.45"}}},4304:function(e,a,n){n.d(a,{lp:function(){return s},NK:function(){return c}});n(2791);var l=n(1087),i=n(184),c=function(e){var a=e.clickHandler,n=e.label,c=e.navTo;return(0,i.jsx)("button",{className:"gHAsFI dqnOfN jUrKkb",onClick:a,children:(0,i.jsx)(l.OL,{className:" jaqJnq",to:c,children:n})})},s=function(e){var a=e.children;return(0,i.jsx)("div",{className:"jRutKh",children:(0,i.jsx)("div",{className:"jSvsvz",children:(0,i.jsx)("div",{className:"jzcvbH",children:(0,i.jsx)("div",{className:" kfqEsq",children:a})})})})}}}]);
//# sourceMappingURL=2249.3682ec3a.chunk.js.map