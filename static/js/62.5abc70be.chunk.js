(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"groupbyTab",function(){return w});var c=a(31),n=a(2),l=a.n(n),r=a(15),o=a(4),i=a(156),s=a(10),b=a(22),d=a(163),m=(a(37),a(5)),u=a(0),O=Object(o.a)(function(){return a.e(63).then(a.bind(null,172))}),j=Object(u.f)(),p=Object(b.BTNH_Cmpt)(),f=Object(b.Icon_Cmpt)(),v=Object(b.SearchInput_Cmpt)(),_=Object(b.ModalDate_Cmpt)(),g=Object(b.InputAutocomplete_Cmpt)(),E=Object(b.BtnIconTab_Cmpt)(),h=Object(b.OpacityContainer_Cmpt)(),x=Object(o.a)(function(){return a.e(4).then(a.bind(null,80))}),y=Object(o.a)(function(){return a.e(65).then(a.bind(null,173))}),C="mov_list_search";function N(e,t){var a={};return Object(u.g)(e).map(function(c){if(e[c].isqvmAgent||e[c].isAdmin)if(t){var n=t&&t.toLowerCase(),l=e[c].name&&e[c].name.toLowerCase();n&&l&&l.indexOf(n)>=0&&(a[c]=e[c])}else a[c]=e[c]}),a}function w(e,t){var a={};return e&&e.map(function(e){if(e){var c=1*t[e].createdDate,n=Math.ceil(new Date(c).getTime()/864e5);a[n]||(a[n]=[]),a[n].push(e)}}),a}function P(e,t,a){var c={},n=0;return Object(u.g)(e).map(function(a){var l=t&&t.toLowerCase();if(l&&e[a]){var r=e[a].title&&e[a].title.toLowerCase(),o=r&&r.indexOf(l)>=0,i=e[a].amount&&e[a].amount.toString().toLowerCase(),s=i&&i.indexOf(l)>=0,b=e[a].description&&e[a].description.toLowerCase(),d=b&&b.indexOf(l)>=0,m=Object(u.P)("categories")&&Object(u.P)("categories")[e[a].categoryId]&&Object(u.P)("categories")[e[a].categoryId].name&&Object(u.P)("categories")[e[a].categoryId].name.toLowerCase(),O=m&&m.indexOf(l)>=0;(o||s||d||O)&&(c[a]=e[a],n+=e[a].amount)}else c[a]=e[a],n+=e[a].amount}),{list:Object(u.pb)(c,"date",1),total:n}}t.default=Object(i.a)(function(e){Object(r.c)(m.b);var t=Object(u.F)(C)||{},a=(Object(u.M)(),Object(u.P)("pnOrStMk")),o=Object(n.useState)(!1),i=Object(c.a)(o,2),b=i[0],I=i[1],F=Object(n.useState)(null),z=Object(c.a)(F,2),T=z[0],S=z[1],A=Object(n.useState)(!1),L=Object(c.a)(A,2),B=L[0],V=L[1],W=Object(n.useState)(1),q=Object(c.a)(W,2),D=q[0],R=q[1],U=Object(n.useState)(6),J=Object(c.a)(U,2),G=J[0],H=J[1],Y=Object(n.useState)(""),$=Object(c.a)(Y,2),K=$[0],Q=$[1],X=Object(n.useState)(""),Z=Object(c.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(0),ce=Object(c.a)(ae,2),ne=(ce[0],ce[1]),le=Object(u.P)("outerWidth");Object(u.P)("agentId2");Object(n.useEffect)(function(){T!==le&&S(le),b||(I(!0),Object(s.getCategories)(),d.d(),Object(u.Ab)(8),Object(u.zb)("actionType","expenses"),Object(u.c)()&&Object(s.LoadUA)(),Object(u.k)()&&Object(u.sb)(),setTimeout(function(){return window.scrollTo(0,0)},350),setTimeout(function(){return V(!0)},250),window.localStorage.setItem("lng","es"))});var re=Object(u.C)(),oe="Android"===re.os||"iPhone"===re.os||Object(u.P)().outerWidth<550,ie=2===D?Object(u.P)("incomes_total"):Object(u.P)("expenses_total"),se=2===D?Object(u.P)("incomes"):Object(u.P)("expenses"),be={};ie=ee&&ee.length>0?(be=P(se,ee))&&be.total:(be=P(se,""))&&be.total;var de=w(be&&be.list,se),me=function(e){e===D||(R(e),Object(u.zb)("actionType",2===e?"incomes":"expenses"),H(6),Object(u.zb)("loadingMov",!0),ne(Object(u.y)()),setTimeout(function(){Object(u.zb)("loadingMov",!1),ne(Object(u.y)())},750))},ue=function(e){var t={},a=Object(u.F)(C)||{},c=a&&a[e];t.zIndex=190,t.observeResize=!0,t.props={title:"",item:e},t.content=l.a.createElement(_,{valueUpdate:function(t){return function(e,t){var a=new Date(t),c=Object(u.F)(C)||{};c[e]=a.getTime(),Object(u.vb)(C,c),ne(Object(u.y)()),Object(u.P)().movements}(e,t)},initValue:c}),Object(s.OpenModal)(t)},Oe=Object(u.G)(),je={};je=Object(u.c)()&&K&&K.length>0?N(Object(u.P)().agentsList,K):N(Object(u.P)().agentsList,"");var pe=Object(u.g)(de).sort(function(e,t){return t-e}),fe=pe.slice(0,G),ve=pe.slice(0,G),_e=Object(u.P)().collapsedItems;return l.a.createElement(l.a.Fragment,null,l.a.createElement("style",null,"\n        .palette{\n          --base-color: rgb(21, 100, 191,1);\n          --base-color-gradient: 21, 100, 191;\n        }\n\n        "),l.a.createElement("div",{className:" palette formContainer shopping_cart  _movements ".concat(oe?"is_mobile":""),style:{opacity:B?1:0}},l.a.createElement("div",{className:"formContainer ",style:{opacity:1}},B?l.a.createElement("div",{className:"centerListCardProd "},Object(u.c)()?l.a.createElement("div",{className:"paddField address"},l.a.createElement(g,{icon:"more_vert",form:"kjsahfashflkashjaf",field:"agentId",keyCode:49,background:"#f9f9f9",color:"var(--base-color)",placeholder:Object(u.qb)(13),OnSelect:function(e){e.id},data:je,OnChange:function(e){return Q(e)}})):null,l.a.createElement("div",{className:"  headerTtl"},l.a.createElement("div",{className:"pym81b sendBx "},l.a.createElement("div",{className:"_dsplFlx "},l.a.createElement("div",{className:"subtotal_cart "},Object(u.qb)(50)),l.a.createElement("div",{className:"flexSpace"}),l.a.createElement("div",{className:"total_cart date_filter"},Object(u.db)(Object(u.P)("month_filter"))&&u.fb[Object(u.P)("month_filter")]+", ","  ",Object(u.P)("year_filter"))),l.a.createElement("div",{className:"total_cart ".concat(ie>0?"pos":"neg")},"$ ".concat(ie?ie.toFixed(2):0),l.a.createElement("div",{className:"sendBtn"})))),l.a.createElement("div",{className:"years_card "},l.a.createElement("div",{className:" _dsplFlx spaceAround  "},l.a.createElement(x,{data:k(),value:Object(u.P)("category_filter"),updValue:function(e){e!==Object(u.B)("category_filter")&&(Object(u.zb)("category_filter",e),Object(u.rb)("category_filter",e),Object(u.sb)(),Object(u.zb)("loadingMov",!0),H(4))},placeholder:"Categories",showAll:!0}),l.a.createElement(x,{data:M(),value:Object(u.P)("month_filter"),updValue:function(e){e!==Object(u.B)("month_filter")&&(Object(u.zb)("month_filter",e),Object(u.rb)("month_filter",e),Object(u.sb)(),Object(u.zb)("loadingMov",!0),H(4))},placeholder:"Month",showAll:!0}),l.a.createElement(x,{data:[{id:2022,lbl:2022},{id:2021,lbl:2021},{id:2020,lbl:2020}],value:Object(u.P)("year_filter"),updValue:function(e){e!==Object(u.B)("year_filter")&&(Object(u.zb)("year_filter",e),Object(u.rb)("year_filter",e),Object(u.sb)(),Object(u.zb)("loadingMov",!0),H(4))},placeholder:"Years"}))),a&&Object(u.g)(a).length>0?l.a.createElement("div",{className:"pym81b sendBx mov_type _dsplFlx activeBlue",onClick:function(){d.a(a)}},l.a.createElement("div",{className:"icon_mov"},l.a.createElement(f,{name:"printer"})),l.a.createElement("div",{className:"mov_type_title "},Object(u.qb)(51))):null,l.a.createElement("div",{className:" _filter_mv"},l.a.createElement("div",{className:" _search_MrgV  "},l.a.createElement(v,{updChanges:function(e){te(e),H(16)},placeholderCode:20})),Object(u.c)()?l.a.createElement("div",{className:"_dsplFlx spaceAround _flxWrp icon_clear"},l.a.createElement("div",{className:"fieldPadding _MrgV"},l.a.createElement("span",{onClick:function(){return ue("date")}},l.a.createElement(p,{theme:"light_blue",title:t&&t.date?Object(u.hb)(t.date):Object(u.hb)(Object(u.w)())}))),l.a.createElement("div",{onClick:function(){return Object(u.vb)(C,{}),Object(u.P)().movements,Object(u.zb)("loadingMov",!0),void Object(s.updObserveChanges)()}},l.a.createElement(f,{name:"outline_delete"})),l.a.createElement("div",{onClick:function(){return function(){var e=Object(u.P)().movements;d.b(e)}()}},l.a.createElement(f,{name:"printer"}))):null),l.a.createElement("div",{className:"_dsplFlx  spaceAround _flxWrp"},l.a.createElement(E,{lbl:"Expenses",icon:"arrow_up_large",classN:"activeRed",index:D,indexTag:1,changeView:me,isMobile:oe}),l.a.createElement(E,{lbl:"Incomes",icon:"arrow_down_large",classN:"complete",index:D,indexTag:2,changeView:me,isMobile:oe})),l.a.createElement("div",{className:"_dsplFlx spaceAround _flxWrp icon_clear"},l.a.createElement("div",{onClick:function(){return Object(u.zb)("collapsedItems",!_e),Object(u.zb)("collapseId",Object(u.z)()),void ne(Object(u.y)())}},l.a.createElement(f,{name:_e?"arrow_expand_vertical":"arrow_collapse_vertical"}))),l.a.createElement("style",null,"\n                        \n                        \n\n                        .progress-line-palette{\n                          --progress-line-background-color: ".concat(1===D?"#F7E8E8":"#E5F1F0"," ;\n                          --progress-line-before-background-color: ").concat(1===D?"#b22222 ":"#00897b",";\n                        }\n                        ")),l.a.createElement(y,null),Object(u.P)("loadingMov")?null:l.a.createElement("div",{className:" sendBx scroll3Wrp "},l.a.createElement(h,{lbl:52,index:D,indexTag:1,isMobile:oe},l.a.createElement("div",{className:"_dsplFlx space2Around _flxWrp op4oU"},fe&&fe.map(function(e,t){return l.a.createElement("div",{key:"".concat(Oe[t],"_").concat(t,"_pend_Mov"),"data-key":"".concat(Oe[t],"_").concat(t,"_pend_Mov")},l.a.createElement(O,{data:de[e],ind:t,dateClss:"",fV:e,range:G,updRange:function(e){return H(e)},ItemComponent:l.a.createElement(j,null),tag:"_pend_Mov"}))}))),l.a.createElement(h,{lbl:53,index:D,indexTag:2,isMobile:oe},l.a.createElement("div",{className:"_dsplFlx space2Around _flxWrp op4oU"},ve&&ve.map(function(e,t){return l.a.createElement("div",{key:"".concat(Oe[t],"_").concat(t,"_cmpl_Mov")},l.a.createElement(O,{data:de[e],fV:e,ind:t,dateClss:"green",range:G,updRange:function(e){return H(e)},ItemComponent:l.a.createElement(j,null),tag:"_cmpl_Mov"}))}))))):null),l.a.createElement("div",{className:"footSpace"})))});var M=function(){return u.fb.map(function(e,t){return{id:t,lbl:e}})},k=function(){var e=[],t=Object(u.P)("categories")||{};return Object(u.g)(t).map(function(a){e.push({id:t[a].categoryId,lbl:t[a].name})}),e}}}]);
//# sourceMappingURL=62.5abc70be.chunk.js.map