"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[4599,15],{15:function(e,a,s){s.r(a),s.d(a,{CloseToast:function(){return c},OpenToast:function(){return d},default:function(){return r}});s(2791);var n=s(5408),t=s(2350),l=s(184),i="listToast_gLt754",r=function(){var e=(0,t.bh)("listToat")||{},a=((0,n.Z)(i),Object.keys(e));return(0,l.jsx)(l.Fragment,{children:e&&a.map((function(a,s){var n=e[a];if(n&&n.visible){n.display;var t=n.data,i={opacity:n.display?1:0},r=t&&t.text?t.text:"sdgfdsfgsdfg";return(0,l.jsx)("div",{id:a,className:"TtBase_Toast",children:(0,l.jsxs)("div",{className:n.display?"toast active":"toast",style:i,children:[(0,l.jsx)("div",{className:"text",children:r}),(0,l.jsx)("div",{className:"actions",children:(0,l.jsx)("button",{className:"md-button md-ink-ripple",type:"button",style:{},onClick:function(){c({id:a})},children:"Ok"})})]})})}}))})},d=function(e){var a=(0,t.bh)("listToat")||{},s=(0,t.M5)();e.Id&&(s=e.Id),a[s]||(a[s]={}),a[s].visible=!0;var n={};e.props?(n=e.props).modalID=s:n.modalID=s,n.text=e.text,a[s].data=n,a[s].display=!0,(0,t.Rz)("listToat",a),(0,t.wt)(i),setTimeout((function(){c({id:s})}),e.timeout||3e3)},c=function(e){var a=(0,t.bh)("listToat")||{},s=e.id;a&&a[s]&&(a[s].display=!1,(0,t.Rz)("listToat",a),(0,t.wt)(i),setTimeout((function(){delete a[s],(0,t.Rz)("listToat",a),(0,t.wt)(i)}),275))}},2270:function(e,a,s){s.r(a);var n=s(4165),t=s(1413),l=s(5861),i=s(9439),r=s(2791),d=(s(1636),s(2350)),c=s(810),u=s(2647),o=(s(3266),s(15)),v=s(184),h=(0,u.PU)();a.default=function(e){e.keyId;var a=(0,r.useState)(0),s=(0,i.Z)(a,2),c=(s[0],s[1]),u=(0,d.bh)("result_sheet_params"),h=(0,d.bh)("result_sheet_upd_flds"),p=function(){(0,o.OpenToast)({text:"Los cambios en el Balance de Resultado fueron guardados exitosamente",timeout:3500}),c((0,d.M5)())},x=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var a,s,l,i,r,c,u,o,v,m,x,_,b;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(a=(0,d.bh)("result_params_value"))||void 0===a||!a.balanceId){e.next=13;break}return r=(0,t.Z)({},(0,d.bh)("result_params_value")),(c=(0,t.Z)({},null===(s=(0,d.bh)((0,d.hQ)()))||void 0===s?void 0:s.upd_balances)).params={businessId:null===(l=(0,d.bh)("profileUser"))||void 0===l?void 0:l.businessId,balanceId:null===(i=(0,d.bh)("result_params_value"))||void 0===i?void 0:i.balanceId},u=(0,d.vy)(h,(0,d.bh)("result_params_value"),(0,d.bh)("result_params_value_bck")),c.data2update=u.data,o=(0,d.I7)(c),e.next=9,o;case 9:e.sent&&((0,d.Rz)("result_params_value",r),p()),e.next=24;break;case 13:return(x=(0,t.Z)({},(0,d.bh)("result_params_value"))).balanceId=(0,d.M5)(),x.type="result_sheet",(_=(0,t.Z)({},null===(v=(0,d.bh)((0,d.hQ)()))||void 0===v?void 0:v.add_balances)).params={businessId:null===(m=(0,d.bh)("profileUser"))||void 0===m?void 0:m.businessId},_.form=x,b=(0,d.I7)(_),e.next=22,b;case 22:e.sent&&((0,d.Rz)("result_params_value",x),p());case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{style:{marginTop:20,maxWidth:"90%"},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("p",{className:"title_collect",children:"Balance Resultado"}),(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("p",{className:"group_title addBtn purple",onClick:x,children:"Guardar Parametros"})]}),(0,v.jsx)("div",{className:"balance",style:{marginTop:10},children:u&&(0,d._2)(u).map((function(e){return(0,v.jsxs)("div",{style:{marginLeft:12},children:[(0,v.jsx)("h5",{children:e}),Array.isArray(u[e])?(0,v.jsx)("div",{children:u[e].map((function(e){var a;return(0,v.jsx)(m,{keyId:e.key,accountId:null===(a=(0,d.bh)("balance_params"))||void 0===a?void 0:a[e.key]},e.key)}))}):(0,v.jsx)("div",{children:(0,d._2)(u[e]).map((function(a){return(0,v.jsxs)("div",{style:{marginLeft:27},children:[(0,v.jsx)("p",{children:a}),(0,v.jsx)("div",{children:u[e][a].map((function(e){var a;return(0,v.jsx)(m,{keyId:e.key,accountId:null===(a=(0,d.bh)("result_params_value"))||void 0===a?void 0:a[e.key]},e.key)}))})]},a)}))})]},e)}))})]})};var m=function(e){var a,s,n,t=e.keyId,l=(0,r.useState)(!1),u=(0,i.Z)(l,2),o=u[0],m=u[1],p=(0,r.useState)(!1),x=(0,i.Z)(p,2),_=x[0],b=x[1],f=(0,r.useState)(0),j=(0,i.Z)(f,2),y=(j[0],j[1]),k=null===(a=(0,d.bh)("result_params_value"))||void 0===a?void 0:a[t],I=null===(s=(0,d.bh)("account_ids"))||void 0===s?void 0:s[k],g=I&&(null===(n=(0,d.bh)("sub_account_group"))||void 0===n?void 0:n[null===I||void 0===I?void 0:I.accountId]);return(0,v.jsxs)("div",{style:{marginLeft:27},children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{onClick:function(){return m(!o)},className:"".concat(o?"editing":""),style:{marginRight:27},children:(0,v.jsx)("span",{children:t})}),o?(0,v.jsx)("div",{children:(0,v.jsx)(c.Z,{handleClick:function(e){!function(e,a,s){var n="result_params_value",t=(0,d.bh)(n)||{};s?(t[s]||(t[s]={}),t[s][e]=a):t[e]=a,(0,d.Rz)(n,t),y((0,d.M5)())}(t,e),m(!1)}})}):(0,v.jsx)("div",{children:(0,v.jsx)("div",{className:"bg_acc_code",children:null===I||void 0===I?void 0:I.code})}),(0,v.jsx)("div",{className:"flexSpace"}),(null===g||void 0===g?void 0:g.length)>0?(0,v.jsx)("div",{className:"icon",onClick:function(){return b(!_)},children:(0,v.jsx)(h,{name:_?"key_arrow_up":"key_arrow_down",color:"#828282"})}):null]}),_&&(null===g||void 0===g?void 0:g.length)&&(0,v.jsx)("div",{children:null===g||void 0===g?void 0:g.map((function(e){return e.subAccount?(0,v.jsx)("div",{className:"_dsplFlx account_item_box",style:{marginLeft:"35px"},children:(0,v.jsxs)("div",{className:"_dsplFlx",children:[(0,v.jsx)("div",{className:"code",children:e.subAccount}),(0,v.jsx)("div",{className:"name",children:e.subAccountName})]})},e.sub_accountId):null}))})]})}}}]);
//# sourceMappingURL=4599.6a859a97.chunk.js.map