(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"parseAutoFilterObj",function(){return k});var n=a(1),c=a.n(n),r=a(3),o=a(31),l=a(2),d=a.n(l),i=a(0),s=(a(37),a(22)),u=a(9),m=Object(s.BTNH_Cmpt)(),p=Object(s.CheckBoxSlide_Cmpt)(),f=Object(s.InputAutocomplete_Cmpt)(),b=Object(s.InputText_Cmpt)();function k(e,t,a,n){var c={};return e&&i.g(e).map(function(r){var o=1;if(n&&(e[r]&&e[r].stock&&e[r].stock.qty||(o=0)),o)if(a){var l=a.toLowerCase(),d=e[r]&&e[r][t]&&e[r][t].toLowerCase();l&&d&&d.indexOf(l)>=0&&(c[r]={name:e[r][t],id:r})}else c[r]={name:e[r][t],id:r}}),c}t.default=function(e){var t=e.data||{},a=t.modalID,n=t.item,s=i.R(),_=n&&n.id,v=Object(l.useState)(""),O=Object(o.a)(v,2),g=O[0],C=O[1],E=Object(l.useState)(null),j=Object(o.a)(E,2),h=j[0],y=j[1],w=Object(l.useState)(null),P=Object(o.a)(w,2),N=P[0],x=P[1],S=Object(l.useState)(!0),F=Object(o.a)(S,2),q=F[0],A=F[1],B="addPr2cmb_"+_,I=function(){var t=Object(r.a)(c.a.mark(function t(){var a,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=s.stockProduct&&s.stockProduct[h]&&s.stockProduct[h].stock,n=a&&a.amount/a.qty,(q&&n||!q)&&"function"===typeof e.confirm&&e.confirm(N,s.stockProduct[h]);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();i.d(s.stockProduct);var T={};return T=g&&g.length>0?k(s.stockProduct,"name",g,q):k(s.stockProduct,"name",null,q),d.a.createElement("div",Object.assign({},a?{"dialog-key-id":a}:"",{className:"add_prod_cmb"}),d.a.createElement("style",null,"\n        .palette{\n          --base-color: rgb(21, 100, 191,1);\n          --base-color-gradient: 21, 100, 191;\n        }\n        "),d.a.createElement("div",{className:"delete_alert_t1 "},d.a.createElement("div",null,"Add Product to Combo")),d.a.createElement("div",{className:"in_stock_switch _dsplFlx"},"verify Stock",d.a.createElement("div",{className:"in_stock_switch_btn"},d.a.createElement(p,{initvalue:q,keyCode:73,updChange:function(e){return A(e)}}))),d.a.createElement("div",{className:"paddField address"},d.a.createElement(f,{icon:"more_vert",form:"_add_prod_cmb",field:"productID",keyCode:29,background:"#f9f9f9",color:"rgb(21, 100, 191,1)",placeholder:"Productos",OnSelect:function(e){y(e.id)},data:T,OnChange:function(e){return C(e)}})),d.a.createElement("div",{className:"paddField palette"},d.a.createElement(b,{icon:"more_vert",form:B,field:"qty",keyCode:39,background:"#f9f9f9",color:"rgb(21, 100, 191,1)",placeholder:"Cantidad",OnChange:function(e){return x(e)},validations:{reqired:!0,number:!0,maxValue:5e4}})),d.a.createElement("div",{className:"sendBtn _dsplFlx spaceAround"},d.a.createElement("div",{className:"fieldPadding _MrgV",style:{marginTop:"10px"}},d.a.createElement("span",{onClick:function(){return y(null),x(null),i.zb(B,{}),void Object(u._updFormObs)()}},d.a.createElement(m,{theme:"fire_brick",title:"Borrar"}))),d.a.createElement("div",{className:"fieldPadding _MrgV",style:{marginTop:"10px"}},d.a.createElement("span",{onClick:function(){return I()}},d.a.createElement(m,{theme:"light_blue",title:"Confirmar"})))))}}}]);
//# sourceMappingURL=64.ed4179ce.chunk.js.map