"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[2729],{7709:function(i,l,o){o.d(l,{gY:function(){return p},Xu:function(){return f}});var d=o(9439),n=o(2791),v=o(2350),e=o(2647),x=o(24),u=(o(4050),o(7889),o(1534),o(9760)),s=o(1087),t=o(184),r=function(i){var l=i.clickHandler,o=i.label,d=i.navTo;return(0,t.jsx)(s.OL,{className:" jaqJnq_hrm1",to:d,children:(0,t.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:l,children:(0,t.jsx)("span",{className:" jaqJnq_hrm1",children:o})})})},c=(0,e.Np)(),a=(0,e.YZ)(),y=((0,e.A5)(),function(i){var l,o,e,x,s,y,h=i.data,j=i.requiredHeight,p=i.holdWidth,m=i.vertice,f=i.cDm,b=i.confirm,k=i.type,g=i.profile,N="verticeUpdFrm_"+k+"_"+m,w=(0,n.useState)(1),F=(0,d.Z)(w,2)[1];(0,n.useEffect)((function(){var i=f||{vertice:m};console.log(i),(0,v.Rz)(N,i),F((0,v.M5)())}),[m]);var P=function(){(null===h||void 0===h?void 0:h.modalID)&&(0,u.CloseModal)({id:null===h||void 0===h?void 0:h.modalID})},M=function(i,l){var o=(0,v.bh)(N)||{};o[i]=l,(0,v.Rz)(N,o),F((0,v.M5)())};return(0,t.jsxs)("div",{style:{maxHeight:"86vh",minHeight:"65vh",width:"560px",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,t.jsx)("div",{className:"_dsplFlx ",children:(0,t.jsx)("p",{className:"form_title",children:"Dimension para el ".concat(j?"":"vertice"," ").concat(m)})}),(0,t.jsxs)("div",{className:"centerBx",style:{margin:"19px auto"},children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("span",{className:"checklabel",children:"Need Profile"}),(0,t.jsx)(a,{initvalue:!(null===(l=(0,v.bh)(N))||void 0===l||!l.needProfile),keyCode:89,updChange:function(i){return M("needProfile",1*i)},color:"var(--primary-blue--backg-30)"}),(0,t.jsx)("div",{className:"flexSpace"}),j?null:(0,t.jsxs)("div",{className:"_dsplFlx ",style:{margin:"19px auto"},children:[(0,t.jsx)("span",{className:"checklabel",children:"Is in Wall"}),(0,t.jsx)(a,{initvalue:!(null===(o=(0,v.bh)(N))||void 0===o||!o.isWall),keyCode:89,updChange:function(i){return M("isWall",1*i)},color:"var(--primary-blue--backg-30)"})]}),(0,t.jsx)("div",{className:"flexSpace"})]}),p?null:(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:[(0,t.jsx)(c,{init:null===(e=(0,v.bh)(N))||void 0===e?void 0:e.width,label:"Largo (in)",width:140,updChanges:function(i){return M("width",1*i)},type:"number"}),j?(0,t.jsx)(c,{init:null===(x=(0,v.bh)(N))||void 0===x?void 0:x.height,label:"Ancho (in)",width:140,updChanges:function(i){return M("height",1*i)},type:"number"}):null]}),p?null:(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:[(0,t.jsx)(c,{init:null===(s=(0,v.bh)(N))||void 0===s?void 0:s.xPos,label:"X Position",width:180,updChanges:function(i){return M("xPos",1*i)},type:"number"}),(0,t.jsx)(c,{init:null===(y=(0,v.bh)(N))||void 0===y?void 0:y.yPos,label:"Y Position",width:180,updChanges:function(i){return M("yPos",i)},type:"number"})]}),(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(r,{label:"Agregar",clickHandler:function(i,l){var o=(0,v.bh)(N);o.profile=o.needProfile?g:null,b(o),(0,v.Rz)(N,null),P()}})})]})]})}),h=(o(4622),(0,e.Vg)(),(0,e.YZ)(),(0,x.B1)(),(0,e.Np)()),j=((0,x.FB)(),(0,x.vM)(),(0,e.PU)()),p=function(i){var l,o,e,x=i.wT,s=i.hT,c=i.svDm,a=i.addBlPr,p=i.profile,f=i.item,b=(0,n.useState)(1),k=(0,d.Z)(b,2)[1],g=(0,n.useState)(5),N=(0,d.Z)(g,2),w=N[0],F=N[1],P=(0,n.useState)(!1),M=(0,d.Z)(P,2),S=M[0],C=(M[1],x||750),_=s||500,W=function(i){var l=(0,v.bh)("bluePrint")||c;l||((l={}).type="LL",l.vertices={}),i.profile=i.needProfile?p:null,l.vertices[i.vertice]=i,(0,v.Rz)("bluePrint",l),k((0,v.M5)())},z=(null===(l=(0,v.bh)("bluePrint"))||void 0===l?void 0:l.vertices)||(null===c||void 0===c?void 0:c.vertices)||{},H=function(i,l,o){var d={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};d.content=(0,t.jsx)(y,{confirm:W,vertice:i,holdWidth:l,requiredHeight:o,profile:p,cDm:z[i]||{vertice:i}}),(0,u.OpenModal)(d)};return(0,t.jsxs)("div",{className:"xMid2Mid",children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"clGojg iSTOvb kvXcCL ",style:{padding:9},children:"Scketch Left L Shape"}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"_dsplFlx ",style:{margin:"19px auto"},children:null!==(o=z.sink)&&void 0!==o&&o.width?null:(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(r,{label:"Agregar Sink",clickHandler:function(){return H("sink",0,1)}})})}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)(h,{init:w,label:"Scale",width:80,updChanges:F,type:"number"}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(r,{label:"Guardar",clickHandler:function(){a((0,v.bh)("bluePrint"))}})}),(0,t.jsx)("div",{className:"icon align_itm",onClick:function(){},children:(0,t.jsx)(j,{name:"outline_delete",color:"#F7251A"})})]}),(0,t.jsx)("div",{id:f.productId+"_"+(null===f||void 0===f||null===(e=f.bluePrint)||void 0===e?void 0:e.type),style:{width:C,height:_,position:"relative"},children:(0,t.jsx)(m,{dmz:{x:50,y:30},handleLines:H,cDm:z,scale:w,hasSink:S})})]})},m=function(i){var l,o,d,n,v,e,x,u,s,r,c,a,y,h,j=i.dmz,p=i.handleLines,m=i.cDm,f=i.scale,b=((null===(l=m[1])||void 0===l?void 0:l.width)||90)*f,F=((null===(o=m[2])||void 0===o?void 0:o.width)||30)*f,P=((null===(d=m[3])||void 0===d?void 0:d.width)||50)*f,M=((null===(n=m[4])||void 0===n?void 0:n.width)||24)*f,S=b/f,C=F/f,_=P/f,W=M/f,z=25*f,H=20*f,L=25*f,D=25*f;null!==(v=m.sink)&&void 0!==v&&v.width&&(z=(null===(c=m.sink)||void 0===c?void 0:c.width)*f,H=(null===(a=m.sink)||void 0===a?void 0:a.height)*f,L=(null===(y=m.sink)||void 0===y?void 0:y.xPos)*f,D=(null===(h=m.sink)||void 0===h?void 0:h.yPos)*f);var I="#3a3a3a",A="#7c7c7c",Z=function(i){var l,o,d;return null!==(l=m[i])&&void 0!==l&&l.profile?(0,t.jsxs)("div",{className:"wall",children:[" ","".concat(null===(o=m[i])||void 0===o?void 0:o.profile," ")," "]}):null!==(d=m[i])&&void 0!==d&&d.isWall?(0,t.jsx)("div",{className:"wall",children:" Wall "}):null},q=function(i){return null!==i&&void 0!==i&&i.profile?null===i||void 0===i?void 0:i.profile:null!==i&&void 0!==i&&i.isWall?null===i||void 0===i?void 0:i.isWall:""};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{x1:null===j||void 0===j?void 0:j.x,y1:null===j||void 0===j?void 0:j.y,x2:(null===j||void 0===j?void 0:j.x)+b+6,y2:null===j||void 0===j?void 0:j.y,color:A,handleM:function(){return p(1)},hover:1}),(0,t.jsx)(k,{x1:(null===j||void 0===j?void 0:j.x)+6,y1:(null===j||void 0===j?void 0:j.y)+6,x2:(null===j||void 0===j?void 0:j.x)+b,y2:(null===j||void 0===j?void 0:j.y)+6,color:I}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+b/2-30,y1:(null===j||void 0===j?void 0:j.y)-6*3.2,txt:S.toFixed(2)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+b/2+15,y1:(null===j||void 0===j?void 0:j.y)-6*3.2,cmp:Z(1)}),(0,t.jsx)(k,{x1:null===j||void 0===j?void 0:j.x,y1:(null===j||void 0===j?void 0:j.y)+P+6,x2:(null===j||void 0===j?void 0:j.x)+F+6,y2:(null===j||void 0===j?void 0:j.y)+P+6,color:A,handleM:function(){return p(2)},hover:1}),(0,t.jsx)(k,{x1:(null===j||void 0===j?void 0:j.x)+6,y1:(null===j||void 0===j?void 0:j.y)+P,x2:(null===j||void 0===j?void 0:j.x)+F,y2:(null===j||void 0===j?void 0:j.y)+P,color:I}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+F/2-30,y1:(null===j||void 0===j?void 0:j.y)+P+6,txt:C.toFixed(2)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+F/2+15,y1:(null===j||void 0===j?void 0:j.y)+P+6,cmp:Z(2)}),(0,t.jsx)(k,{x1:(null===j||void 0===j?void 0:j.x)+6+F,y1:(null===j||void 0===j?void 0:j.y)+P-M+6,x2:(null===j||void 0===j?void 0:j.x)+b+6,y2:(null===j||void 0===j?void 0:j.y)+P-M+6,color:A,hover:1,handleM:function(){return p(5,1)}}),(0,t.jsx)(k,{x1:(null===j||void 0===j?void 0:j.x)+F,y1:(null===j||void 0===j?void 0:j.y)+P-M,x2:(null===j||void 0===j?void 0:j.x)+b,y2:(null===j||void 0===j?void 0:j.y)+P-M,color:I}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+F+(b-F)/2-30,y1:(null===j||void 0===j?void 0:j.y)+(P-M)+6,txt:(S-C).toFixed(2)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+F+(b-F)/2+15,y1:(null===j||void 0===j?void 0:j.y)+(P-M)+6,cmp:Z(5)}),(0,t.jsx)(g,{x1:(null===j||void 0===j?void 0:j.x)+F+6,y1:(null===j||void 0===j?void 0:j.y)+P-M+6,x2:(null===j||void 0===j?void 0:j.x)+F+6,y2:(null===j||void 0===j?void 0:j.y)+P+6,color:A,hover:1,handleM:function(){return p(4)}}),(0,t.jsx)(g,{x1:(null===j||void 0===j?void 0:j.x)+F,y1:(null===j||void 0===j?void 0:j.y)+P-M,x2:(null===j||void 0===j?void 0:j.x)+F,y2:(null===j||void 0===j?void 0:j.y)+P,color:I}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+F+12,y1:(null===j||void 0===j?void 0:j.y)+P-M/2,txt:W.toFixed(2)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+F+12,y1:(null===j||void 0===j?void 0:j.y)+P-M/2+12,cmp:Z(4)}),(0,t.jsx)(g,{x1:(null===j||void 0===j?void 0:j.x)+b+6,y1:null===j||void 0===j?void 0:j.y,x2:(null===j||void 0===j?void 0:j.x)+b+6,y2:(null===j||void 0===j?void 0:j.y)+P-M+6,color:A,handleM:function(){return p(6,1)},hover:1}),(0,t.jsx)(g,{x1:(null===j||void 0===j?void 0:j.x)+b,y1:(null===j||void 0===j?void 0:j.y)+6,x2:(null===j||void 0===j?void 0:j.x)+b,y2:(null===j||void 0===j?void 0:j.y)+P-M,color:I}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+b+12,y1:(null===j||void 0===j?void 0:j.y)+(P-M)/2,txt:(_-1*W).toFixed(2)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+b+12,y1:(null===j||void 0===j?void 0:j.y)+(P-M)/2+12,cmp:Z(6)}),(0,t.jsx)(g,{x1:null===j||void 0===j?void 0:j.x,y1:null===j||void 0===j?void 0:j.y,x2:null===j||void 0===j?void 0:j.x,y2:(null===j||void 0===j?void 0:j.y)+P+6,color:A,handleM:function(){return p(3)},hover:1}),(0,t.jsx)(g,{x1:(null===j||void 0===j?void 0:j.x)+6,y1:(null===j||void 0===j?void 0:j.y)+6,x2:(null===j||void 0===j?void 0:j.x)+6,y2:(null===j||void 0===j?void 0:j.y)+P,color:I}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)-30,y1:(null===j||void 0===j?void 0:j.y)+P/2,txt:_.toFixed(2)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)-30,y1:(null===j||void 0===j?void 0:j.y)+P/2+12,cmp:Z(3)}),null!==(e=m.sink)&&void 0!==e&&e.width?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{x1:(null===j||void 0===j?void 0:j.x)+L,y1:(null===j||void 0===j?void 0:j.y)+D,w:z,h:H,color:"#4b4b4b",hover:1,handleM:function(){return p("sink",0,1)}}),(0,t.jsx)(k,{x1:null===j||void 0===j?void 0:j.x,y1:(null===j||void 0===j?void 0:j.y)+D,x2:(null===j||void 0===j?void 0:j.x)+L,y2:(null===j||void 0===j?void 0:j.y)+D,color:A,hover:1}),(0,t.jsx)(g,{x1:(null===j||void 0===j?void 0:j.x)+L,y1:null===j||void 0===j?void 0:j.y,x2:(null===j||void 0===j?void 0:j.x)+L,y2:(null===j||void 0===j?void 0:j.y)+D,color:A,hover:1}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+L/2,y1:(null===j||void 0===j?void 0:j.y)+D,txt:(1*(null===(x=m.sink)||void 0===x?void 0:x.xPos)).toFixed(2)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+L+6,y1:(null===j||void 0===j?void 0:j.y)+D/2-6,txt:(1*(null===(u=m.sink)||void 0===u?void 0:u.yPos)).toFixed(2)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+L+z/2-z/4,y1:(null===j||void 0===j?void 0:j.y)+D,txt:(null===(s=m.sink)||void 0===s?void 0:s.width.toFixed(2))+" - "+q(m.sink)}),(0,t.jsx)(N,{x1:(null===j||void 0===j?void 0:j.x)+L+6,y1:(null===j||void 0===j?void 0:j.y)+D+H/2,txt:(null===(r=m.sink)||void 0===r?void 0:r.height.toFixed(2))+" - "+q(m.sink)})]}):null]})},f=function(i){var l,o,e,x=i.wT,s=i.hT,c=i.svDm,a=i.addBlPr,p=i.profile,m=i.item,f=(0,n.useState)(1),k=(0,d.Z)(f,2)[1],g=(0,n.useState)(5),N=(0,d.Z)(g,2),w=N[0],F=N[1],P=(0,n.useState)(!1),M=(0,d.Z)(P,2),S=M[0],C=(M[1],(0,n.useRef)(null)),_=x||750,W=s||500,z=function(i){var l=(0,v.bh)("bluePrint")||c;l||((l={}).type="U",l.vertices={}),i.profile=i.needProfile?p:null,l.vertices[i.vertice]=i,(0,v.Rz)("bluePrint",l),k((0,v.M5)())},H=(null===(l=(0,v.bh)("bluePrint"))||void 0===l?void 0:l.vertices)||(null===c||void 0===c?void 0:c.vertices)||{},L=function(i,l,o){var d={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};d.content=(0,t.jsx)(y,{confirm:z,vertice:i,holdWidth:l,requiredHeight:o,profile:p,cDm:(null===H||void 0===H?void 0:H[i])||{vertice:i}}),(0,u.OpenModal)(d)};return(0,t.jsxs)("div",{className:"xMid2Mid",children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"clGojg iSTOvb kvXcCL ",style:{padding:9},children:"Scketch U Shape"}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"_dsplFlx ",children:null!==(o=H.sink)&&void 0!==o&&o.width?null:(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(r,{label:"Agregar Sink",clickHandler:function(){return L("sink",0,1)}})})}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)(h,{init:w,label:"Scale",width:80,updChanges:F,type:"number"}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(r,{label:"Guardar",clickHandler:function(){a((0,v.bh)("bluePrint"))}})}),(0,t.jsx)("div",{className:"icon align_itm",onClick:function(){},children:(0,t.jsx)(j,{name:"outline_delete",color:"#F7251A"})})]}),(0,t.jsx)("div",{id:m.productId+"_"+(null===m||void 0===m||null===(e=m.bluePrint)||void 0===e?void 0:e.type),ref:C,style:{width:_,height:W,position:"relative"},children:(0,t.jsx)(b,{dmz:{x:50,y:30},handleLines:L,cDm:H,scale:w,hasSink:S})})]})},b=function(i){var l,o,d,n,v,e,x,u,s,r,c,a,y,h,j,p,m=i.dmz,f=i.handleLines,b=i.cDm,F=i.scale,P=((null===(l=b[1])||void 0===l?void 0:l.width)||90)*F,M=((null===(o=b[2])||void 0===o?void 0:o.width)||30)*F,S=((null===(d=b[3])||void 0===d?void 0:d.width)||50)*F,C=((null===(n=b[4])||void 0===n?void 0:n.width)||24)*F,_=(null===(v=b[7])||void 0===v||v.width,((null===(e=b[8])||void 0===e?void 0:e.width)||20)*F),W=P/F,z=M/F,H=S/F,L=C/F,D=_/F,I=250*F,A=200*F,Z=250*F,q=250*F;null!==(x=b.sink)&&void 0!==x&&x.width&&(I=(null===(y=b.sink)||void 0===y?void 0:y.width)*F,A=(null===(h=b.sink)||void 0===h?void 0:h.height)*F,Z=(null===(j=b.sink)||void 0===j?void 0:j.xPos)*F,q=(null===(p=b.sink)||void 0===p?void 0:p.yPos)*F);var R="#3a3a3a",T="#7c7c7c",O=function(i){var l,o,d;return null!==(l=b[i])&&void 0!==l&&l.profile?(0,t.jsxs)("div",{className:"wall",children:[" ","".concat(null===(o=b[i])||void 0===o?void 0:o.profile," ")," "]}):null!==(d=b[i])&&void 0!==d&&d.isWall?(0,t.jsx)("div",{className:"wall",children:" Wall "}):null},B=function(i){return null!==i&&void 0!==i&&i.profile?null===i||void 0===i?void 0:i.profile:null!==i&&void 0!==i&&i.isWall?null===i||void 0===i?void 0:i.isWall:""};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{x1:null===m||void 0===m?void 0:m.x,y1:null===m||void 0===m?void 0:m.y,x2:(null===m||void 0===m?void 0:m.x)+P+6,y2:null===m||void 0===m?void 0:m.y,color:T,handleM:function(){return f(1)},hover:1}),(0,t.jsx)(k,{x1:(null===m||void 0===m?void 0:m.x)+6,y1:(null===m||void 0===m?void 0:m.y)+6,x2:(null===m||void 0===m?void 0:m.x)+P,y2:(null===m||void 0===m?void 0:m.y)+6,color:R}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+P/2,y1:(null===m||void 0===m?void 0:m.y)-6*3.2,txt:W.toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+P/2,y1:(null===m||void 0===m?void 0:m.y)-6*3.2-12,cmp:O(1)}),(0,t.jsx)(k,{x1:null===m||void 0===m?void 0:m.x,y1:(null===m||void 0===m?void 0:m.y)+S+6,x2:(null===m||void 0===m?void 0:m.x)+M+6,y2:(null===m||void 0===m?void 0:m.y)+S+6,color:T,handleM:function(){return f(2)},hover:1}),(0,t.jsx)(k,{x1:(null===m||void 0===m?void 0:m.x)+6,y1:(null===m||void 0===m?void 0:m.y)+S,x2:(null===m||void 0===m?void 0:m.x)+M,y2:(null===m||void 0===m?void 0:m.y)+S,color:R}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+M/2,y1:(null===m||void 0===m?void 0:m.y)+S+6,txt:z.toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+M/2,y1:(null===m||void 0===m?void 0:m.y)+S+6+12,cmp:O(2)}),(0,t.jsx)(g,{x1:null===m||void 0===m?void 0:m.x,y1:null===m||void 0===m?void 0:m.y,y2:(null===m||void 0===m?void 0:m.y)+S+6,color:T,handleM:function(){return f(3)},hover:1}),(0,t.jsx)(g,{x1:(null===m||void 0===m?void 0:m.x)+6,y1:(null===m||void 0===m?void 0:m.y)+6,y2:(null===m||void 0===m?void 0:m.y)+S,color:R}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)-30,y1:(null===m||void 0===m?void 0:m.y)+S/2,txt:H.toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)-30,y1:(null===m||void 0===m?void 0:m.y)+S/2+12,cmp:O(3)}),(0,t.jsx)(k,{x1:(null===m||void 0===m?void 0:m.x)+6+M,y1:(null===m||void 0===m?void 0:m.y)+S+6-C,x2:(null===m||void 0===m?void 0:m.x)+(P-_)-6,y2:(null===m||void 0===m?void 0:m.y)+S+6,color:T,hover:1,handleM:function(){return f(5,1)}}),(0,t.jsx)(k,{x1:(null===m||void 0===m?void 0:m.x)+M,y1:(null===m||void 0===m?void 0:m.y)+S-C,x2:(null===m||void 0===m?void 0:m.x)+(P-_),y2:(null===m||void 0===m?void 0:m.y)+S,color:R}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+(P-M+_)/2,y1:(null===m||void 0===m?void 0:m.y)+(S-C)+6,txt:(W-z-D).toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+(P-M+_)/2,y1:(null===m||void 0===m?void 0:m.y)+(S-C)+6+12,cmp:O(5)}),(0,t.jsx)(g,{x1:(null===m||void 0===m?void 0:m.x)+M+6,y1:(null===m||void 0===m?void 0:m.y)+S+6-C,x2:(null===m||void 0===m?void 0:m.x)+M+6,y2:(null===m||void 0===m?void 0:m.y)+S+6,color:T,hover:1,handleM:function(){return f(4)}}),(0,t.jsx)(g,{x1:(null===m||void 0===m?void 0:m.x)+M,y1:(null===m||void 0===m?void 0:m.y)+S-C,x2:(null===m||void 0===m?void 0:m.x)+M,y2:(null===m||void 0===m?void 0:m.y)+S,color:R}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+M+12,y1:(null===m||void 0===m?void 0:m.y)+S-C/2,txt:L.toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+M+12,y1:(null===m||void 0===m?void 0:m.y)+S-C/2+12,cmp:O(4)}),(0,t.jsx)(g,{x1:(null===m||void 0===m?void 0:m.x)+P+6,y1:(null===m||void 0===m?void 0:m.y)+6,x2:(null===m||void 0===m?void 0:m.x)+P+6,y2:(null===m||void 0===m?void 0:m.y)+S+6,color:T,handleM:function(){return f(6,1)},hover:1}),(0,t.jsx)(g,{x1:(null===m||void 0===m?void 0:m.x)+P,y1:(null===m||void 0===m?void 0:m.y)+6,x2:(null===m||void 0===m?void 0:m.x)+P,y2:(null===m||void 0===m?void 0:m.y)+S,color:R}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+P+12,y1:(null===m||void 0===m?void 0:m.y)+S/2,txt:(1*H).toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+P+12,y1:(null===m||void 0===m?void 0:m.y)+S/2+12,cmp:O(6)}),(0,t.jsx)(g,{x1:(null===m||void 0===m?void 0:m.x)+(P-_)-6,y1:(null===m||void 0===m?void 0:m.y)+S+6-C,x2:(null===m||void 0===m?void 0:m.x)+(P-_)-6,y2:(null===m||void 0===m?void 0:m.y)+S+6,color:T,hover:1,handleM:function(){return f(7,1)}}),(0,t.jsx)(g,{x1:(null===m||void 0===m?void 0:m.x)+(P-_),y1:(null===m||void 0===m?void 0:m.y)+S-C,x2:(null===m||void 0===m?void 0:m.x)+(P-_),y2:(null===m||void 0===m?void 0:m.y)+S,color:R}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+(P-_)-36,y1:(null===m||void 0===m?void 0:m.y)+S-C/2,txt:L.toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+(P-_)-36,y1:(null===m||void 0===m?void 0:m.y)+S-C/2+12,cmp:O(4)}),(0,t.jsx)(k,{x1:(null===m||void 0===m?void 0:m.x)+(P-_)-6,y1:(null===m||void 0===m?void 0:m.y)+S+6,x2:(null===m||void 0===m?void 0:m.x)+P+6,color:T,hover:1,handleM:function(){return f(8)}}),(0,t.jsx)(k,{x1:(null===m||void 0===m?void 0:m.x)+(P-_),y1:(null===m||void 0===m?void 0:m.y)+S,x2:(null===m||void 0===m?void 0:m.x)+P,color:R}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+(P-_)-6+45,y1:(null===m||void 0===m?void 0:m.y)+S+6,txt:D.toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+(P-_)-6+45,y1:(null===m||void 0===m?void 0:m.y)+S+6+12,cmp:O(8)}),null!==(u=b.sink)&&void 0!==u&&u.width?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{x1:(null===m||void 0===m?void 0:m.x)+Z,y1:(null===m||void 0===m?void 0:m.y)+q,w:I,h:A,color:"#4b4b4b",hover:1,handleM:function(){return f("sink",0,1)}}),(0,t.jsx)(k,{x1:null===m||void 0===m?void 0:m.x,y1:(null===m||void 0===m?void 0:m.y)+q,x2:(null===m||void 0===m?void 0:m.x)+Z,y2:(null===m||void 0===m?void 0:m.y)+q,color:T,hover:1}),(0,t.jsx)(g,{x1:(null===m||void 0===m?void 0:m.x)+Z,y1:null===m||void 0===m?void 0:m.y,x2:(null===m||void 0===m?void 0:m.x)+Z,y2:(null===m||void 0===m?void 0:m.y)+q,color:T,hover:1}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+Z/2,y1:(null===m||void 0===m?void 0:m.y)+q,txt:(1*(null===(s=b.sink)||void 0===s?void 0:s.xPos)).toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+Z+6,y1:(null===m||void 0===m?void 0:m.y)+q/2-6,txt:(1*(null===(r=b.sink)||void 0===r?void 0:r.yPos)).toFixed(2)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+Z+I/2-I/4,y1:(null===m||void 0===m?void 0:m.y)+q,txt:(null===(c=b.sink)||void 0===c?void 0:c.width.toFixed(2))+" - "+B(b.sink)}),(0,t.jsx)(N,{x1:(null===m||void 0===m?void 0:m.x)+Z+6,y1:(null===m||void 0===m?void 0:m.y)+q+A/2,txt:(null===(a=b.sink)||void 0===a?void 0:a.height.toFixed(2))+" - "+B(b.sink)})]}):null]})},k=function(i){var l=i.x1,o=i.x2,d=i.y1,n=i.color,v=i.cmp,e=i.handleM,x=i.hover;return(0,t.jsx)("div",{style:{position:"absolute",top:d+"px",left:l+"px",width:o-l+"px",height:1,backgroundColor:x?"":n,border:x?"1px ".concat(x?"dashed":"solid"," ").concat(n," "):"",zIndex:99},className:x?"dashline":null,onClick:e||function(){},children:v})},g=function(i){var l=i.x1,o=(i.x2,i.y1),d=i.y2,n=i.color,v=i.cmp,e=i.handleM,x=i.hover;return(0,t.jsx)("div",{style:{position:"absolute",top:o+"px",left:l+"px",width:1,height:d-o+"px",backgroundColor:x?"":n,border:x?"1px ".concat(x?"dashed":"solid"," ").concat(n," "):"",zIndex:99},className:x?"dashline":null,onClick:e||function(){},children:v})},N=function(i){var l=i.x1,o=(i.x2,i.y1),d=(i.y2,i.cmp),n=i.txt;i.hover;return(0,t.jsx)("div",{style:{position:"absolute",top:o+"px",left:l+"px",zIndex:99},className:"textLine",children:d||(0,t.jsx)("span",{children:n})})},w=function(i){var l=i.x1,o=i.w,d=i.y1,n=i.h,v=i.color,e=i.cmp,x=i.handleM,u=i.hover;return(0,t.jsx)("div",{style:{position:"absolute",top:d+"px",left:l+"px",width:o+"px",height:n+"px",backgroundColor:u?"":v,border:u?"1px ".concat(u?"dashed":"solid"," ").concat(v," "):"",zIndex:99},className:u?"dashline":null,onClick:x||function(){},children:e})}},7889:function(){}}]);
//# sourceMappingURL=2729.8ef24682.chunk.js.map