"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[8777],{8777:function(n,c,e){e.r(c);var i=e(9439),l=e(2791),s=e(2350),t=(e(6021),e(184));c.default=function(n){var c,e=n.handleClick,u=n.query,d=n.type,o=(0,l.useState)([]),r=(0,i.Z)(o,2),v=r[0],m=r[1],h=(0,l.useState)(!1),x=(0,i.Z)(h,2),f=x[0],_=x[1],j=(0,l.useState)(!1),p=(0,i.Z)(j,2),b=p[0],N=p[1];(0,l.useEffect)((function(){I(u)}),[u,d]);var I=function(n){m((0,s.MA)((0,s.bh)("account_list"),n)),b||(_(!0),setTimeout((function(){N(!0)}),200))},k=function(n,c){e&&e(n,c),b&&(N(!1),setTimeout((function(){_(!1)}),200))};return(0,t.jsx)(t.Fragment,{children:f?(0,t.jsx)("div",{className:"boxOpenContainer",style:{opacity:b?1:0,maxWidth:"90%"},children:(0,t.jsx)("div",{className:"",children:v&&(null===(c=(0,s._2)(v))||void 0===c?void 0:c.map((function(n){return(0,t.jsx)(a,{data:v[n],elmId:n,selectItem:k},n)})))})}):null})};var a=function(n){var c,e=n.data,i=n.selectItem,l=null===(c=(0,s.bh)("sub_account_group"))||void 0===c?void 0:c[e.accountId];return(0,t.jsxs)("div",{className:"item_acc",children:[(0,t.jsx)("div",{className:"_dsplFlx account_item_box account_header",children:(0,t.jsxs)("div",{className:"_dsplFlx",onClick:function(){return i(null===e||void 0===e?void 0:e.accountId,null)},children:[(0,t.jsx)("div",{className:"code",children:null===e||void 0===e?void 0:e.code}),(0,t.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.name})]})}),(null===l||void 0===l?void 0:l.length)&&(0,t.jsx)("div",{children:null===l||void 0===l?void 0:l.map((function(n){return n.subAccount?(0,t.jsx)("div",{className:"_dsplFlx account_item_box",style:{marginLeft:"35px"},onClick:function(){return i(null===e||void 0===e?void 0:e.accountId,n.sub_accountId)},children:(0,t.jsxs)("div",{className:"_dsplFlx",children:[(0,t.jsx)("div",{className:"code",children:n.subAccount}),(0,t.jsx)("div",{className:"name",children:n.subAccountName})]})},n.sub_accountId):null}))})]})}},6021:function(){}}]);
//# sourceMappingURL=8777.0db4daed.chunk.js.map