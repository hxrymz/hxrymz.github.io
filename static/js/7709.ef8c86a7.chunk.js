"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[7709],{7709:(l,i,d)=>{d.d(i,{gY:()=>j,Xu:()=>m});var o=d(2791),v=d(2350),n=d(2647),e=d(24),x=(d(4050),d(7889),d(1534),d(9760)),s=d(1087),u=d(184);const t=l=>{let{clickHandler:i,label:d,navTo:o}=l;return(0,u.jsx)(s.OL,{className:" jaqJnq_hrm1",to:o,children:(0,u.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:i,children:(0,u.jsx)("span",{className:" jaqJnq_hrm1",children:d})})})},a=(0,n.Np)(),c=(0,n.YZ)(),r=((0,n.A5)(),l=>{var i,d,n,e,s,r;let{data:y,requiredHeight:h,holdWidth:j,vertice:p,cDm:m,confirm:b,type:k,profile:g}=l;const f="verticeUpdFrm_"+k+"_"+p,[,N]=(0,o.useState)(1);(0,o.useEffect)((()=>{let l=m||{vertice:p};console.log(l),(0,v.Rz)(f,l),N((0,v.M5)())}),[p]);const w=()=>{(null===y||void 0===y?void 0:y.modalID)&&(0,x.CloseModal)({id:null===y||void 0===y?void 0:y.modalID})},F=(l,i)=>{let d=(0,v.bh)(f)||{};d[l]=i,(0,v.Rz)(f,d),N((0,v.M5)())};return(0,u.jsxs)("div",{style:{maxHeight:"86vh",minHeight:"65vh",width:"560px",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("p",{className:"form_title",children:"Dimension para el ".concat(h?"":"vertice"," ").concat(p)})}),(0,u.jsxs)("div",{className:"centerBx",style:{margin:"19px auto"},children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("span",{className:"checklabel",children:"Need Profile"}),(0,u.jsx)(c,{initvalue:!(null===(i=(0,v.bh)(f))||void 0===i||!i.needProfile),keyCode:89,updChange:l=>F("needProfile",1*l),color:"var(--primary-blue--backg-30)"}),(0,u.jsx)("div",{className:"flexSpace"}),h?null:(0,u.jsxs)("div",{className:"_dsplFlx ",style:{margin:"19px auto"},children:[(0,u.jsx)("span",{className:"checklabel",children:"Is in Wall"}),(0,u.jsx)(c,{initvalue:!(null===(d=(0,v.bh)(f))||void 0===d||!d.isWall),keyCode:89,updChange:l=>F("isWall",1*l),color:"var(--primary-blue--backg-30)"})]}),(0,u.jsx)("div",{className:"flexSpace"})]}),j?null:(0,u.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:[(0,u.jsx)(a,{init:null===(n=(0,v.bh)(f))||void 0===n?void 0:n.width,label:"Largo (in)",width:140,updChanges:l=>F("width",1*l),type:"number"}),h?(0,u.jsx)(a,{init:null===(e=(0,v.bh)(f))||void 0===e?void 0:e.height,label:"Ancho (in)",width:140,updChanges:l=>F("height",1*l),type:"number"}):null]}),j?null:(0,u.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:[(0,u.jsx)(a,{init:null===(s=(0,v.bh)(f))||void 0===s?void 0:s.xPos,label:"X Position",width:180,updChanges:l=>F("xPos",1*l),type:"number"}),(0,u.jsx)(a,{init:null===(r=(0,v.bh)(f))||void 0===r?void 0:r.yPos,label:"Y Position",width:180,updChanges:l=>F("yPos",l),type:"number"})]}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)(t,{label:"Agregar",clickHandler:(l,i)=>{let d=(0,v.bh)(f);d.profile=d.needProfile?g:null,b(d),(0,v.Rz)(f,null),w()}})})]})]})});d(4622);(0,n.Vg)(),(0,n.YZ)(),(0,e.B1)();const y=(0,n.Np)(),h=((0,e.FB)(),(0,e.vM)(),(0,n.PU)()),j=l=>{var i,d,n;let{wT:e,hT:s,svDm:a,addBlPr:c,profile:j,item:m,disable:b}=l;const[,k]=(0,o.useState)(1),[g,f]=(0,o.useState)(5),[N,w]=(0,o.useState)(!1);let F=e||750,P=s||500;const M=l=>{let i=(0,v.bh)("bluePrint")||a;i||(i={},i.type="LL",i.vertices={}),l.profile=l.needProfile?j:null,i.vertices[l.vertice]=l,(0,v.Rz)("bluePrint",i),k((0,v.M5)())};let S=(null===(i=(0,v.bh)("bluePrint"))||void 0===i?void 0:i.vertices)||(null===a||void 0===a?void 0:a.vertices)||{};const C=(l,i,d)=>{if(!b){let o={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};o.content=(0,u.jsx)(r,{confirm:M,vertice:l,holdWidth:i,requiredHeight:d,profile:j,cDm:S[l]||{vertice:l}}),(0,x.OpenModal)(o)}};return(0,u.jsxs)("div",{className:"xMid2Mid",children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"clGojg iSTOvb kvXcCL ",style:{padding:9},children:"Scketch Left L Shape"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"_dsplFlx ",style:{margin:"19px auto"},children:null!==(d=S.sink)&&void 0!==d&&d.width?null:(0,u.jsx)("div",{className:"card",children:(0,u.jsx)(t,{label:"Agregar Sink",clickHandler:()=>C("sink",0,1)})})}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(y,{init:g,label:"Scale",width:80,updChanges:f,type:"number"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:b?null:(0,u.jsx)(t,{label:"Guardar",clickHandler:()=>{c((0,v.bh)("bluePrint"))}})}),(0,u.jsx)("div",{className:"icon align_itm",onClick:()=>{},children:b?null:(0,u.jsx)(h,{name:"outline_delete",color:"#F7251A"})})]}),(0,u.jsx)("div",{id:m.productId+"_"+(null===m||void 0===m||null===(n=m.bluePrint)||void 0===n?void 0:n.type),style:{width:F,height:P,position:"relative"},children:(0,u.jsx)(p,{dmz:{x:50,y:30},handleLines:C,cDm:S,scale:g,hasSink:N})})]})},p=l=>{var i,d,o,v,n,e,x,s,t,a;let{dmz:c,handleLines:r,cDm:y,scale:h}=l,j=((null===(i=y[1])||void 0===i?void 0:i.width)||90)*h,p=((null===(d=y[2])||void 0===d?void 0:d.width)||30)*h,m=((null===(o=y[3])||void 0===o?void 0:o.width)||50)*h,b=((null===(v=y[4])||void 0===v?void 0:v.width)||24)*h,w=j/h,F=p/h,P=m/h,M=b/h,S=25*h,C=20*h,_=25*h,W=25*h;var z,H,L,D;null!==(n=y.sink)&&void 0!==n&&n.width&&(S=(null===(z=y.sink)||void 0===z?void 0:z.width)*h,C=(null===(H=y.sink)||void 0===H?void 0:H.height)*h,_=(null===(L=y.sink)||void 0===L?void 0:L.xPos)*h,W=(null===(D=y.sink)||void 0===D?void 0:D.yPos)*h);let I="#000",A="#2c2c2c";const q=l=>{var i,d,o;return null!==(i=y[l])&&void 0!==i&&i.profile?(0,u.jsxs)("div",{className:"wall",children:[" ","".concat(null===(d=y[l])||void 0===d?void 0:d.profile," ")," "]}):null!==(o=y[l])&&void 0!==o&&o.isWall?(0,u.jsx)("div",{className:"wall",children:" Wall "}):null},R=l=>null!==l&&void 0!==l&&l.profile?null===l||void 0===l?void 0:l.profile:null!==l&&void 0!==l&&l.isWall?null===l||void 0===l?void 0:l.isWall:"";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k,{x1:null===c||void 0===c?void 0:c.x,y1:null===c||void 0===c?void 0:c.y,x2:(null===c||void 0===c?void 0:c.x)+j+6,y2:null===c||void 0===c?void 0:c.y,color:A,handleM:()=>r(1),hover:1}),(0,u.jsx)(k,{x1:(null===c||void 0===c?void 0:c.x)+6,y1:(null===c||void 0===c?void 0:c.y)+6,x2:(null===c||void 0===c?void 0:c.x)+j,y2:(null===c||void 0===c?void 0:c.y)+6,color:I}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+j/2-30,y1:(null===c||void 0===c?void 0:c.y)-6*3.2,txt:w.toFixed(2)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+j/2+15,y1:(null===c||void 0===c?void 0:c.y)-6*3.2,cmp:q(1)}),(0,u.jsx)(k,{x1:null===c||void 0===c?void 0:c.x,y1:(null===c||void 0===c?void 0:c.y)+m+6,x2:(null===c||void 0===c?void 0:c.x)+p+6,y2:(null===c||void 0===c?void 0:c.y)+m+6,color:A,handleM:()=>r(2),hover:1}),(0,u.jsx)(k,{x1:(null===c||void 0===c?void 0:c.x)+6,y1:(null===c||void 0===c?void 0:c.y)+m,x2:(null===c||void 0===c?void 0:c.x)+p,y2:(null===c||void 0===c?void 0:c.y)+m,color:I}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+p/2-30,y1:(null===c||void 0===c?void 0:c.y)+m+6,txt:F.toFixed(2)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+p/2+15,y1:(null===c||void 0===c?void 0:c.y)+m+6,cmp:q(2)}),(0,u.jsx)(k,{x1:(null===c||void 0===c?void 0:c.x)+6+p,y1:(null===c||void 0===c?void 0:c.y)+m-b+6,x2:(null===c||void 0===c?void 0:c.x)+j+6,y2:(null===c||void 0===c?void 0:c.y)+m-b+6,color:A,hover:1,handleM:()=>r(5,1)}),(0,u.jsx)(k,{x1:(null===c||void 0===c?void 0:c.x)+p,y1:(null===c||void 0===c?void 0:c.y)+m-b,x2:(null===c||void 0===c?void 0:c.x)+j,y2:(null===c||void 0===c?void 0:c.y)+m-b,color:I}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+p+(j-p)/2-30,y1:(null===c||void 0===c?void 0:c.y)+(m-b)+6,txt:(w-F).toFixed(2)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+p+(j-p)/2+15,y1:(null===c||void 0===c?void 0:c.y)+(m-b)+6,cmp:q(5)}),(0,u.jsx)(g,{x1:(null===c||void 0===c?void 0:c.x)+p+6,y1:(null===c||void 0===c?void 0:c.y)+m-b+6,x2:(null===c||void 0===c?void 0:c.x)+p+6,y2:(null===c||void 0===c?void 0:c.y)+m+6,color:A,hover:1,handleM:()=>r(4)}),(0,u.jsx)(g,{x1:(null===c||void 0===c?void 0:c.x)+p,y1:(null===c||void 0===c?void 0:c.y)+m-b,x2:(null===c||void 0===c?void 0:c.x)+p,y2:(null===c||void 0===c?void 0:c.y)+m,color:I}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+p+12,y1:(null===c||void 0===c?void 0:c.y)+m-b/2,txt:M.toFixed(2)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+p+12,y1:(null===c||void 0===c?void 0:c.y)+m-b/2+12,cmp:q(4)}),(0,u.jsx)(g,{x1:(null===c||void 0===c?void 0:c.x)+j+6,y1:null===c||void 0===c?void 0:c.y,x2:(null===c||void 0===c?void 0:c.x)+j+6,y2:(null===c||void 0===c?void 0:c.y)+m-b+6,color:A,handleM:()=>r(6,1),hover:1}),(0,u.jsx)(g,{x1:(null===c||void 0===c?void 0:c.x)+j,y1:(null===c||void 0===c?void 0:c.y)+6,x2:(null===c||void 0===c?void 0:c.x)+j,y2:(null===c||void 0===c?void 0:c.y)+m-b,color:I}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+j+12,y1:(null===c||void 0===c?void 0:c.y)+(m-b)/2,txt:(P-1*M).toFixed(2)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+j+12,y1:(null===c||void 0===c?void 0:c.y)+(m-b)/2+12,cmp:q(6)}),(0,u.jsx)(g,{x1:null===c||void 0===c?void 0:c.x,y1:null===c||void 0===c?void 0:c.y,x2:null===c||void 0===c?void 0:c.x,y2:(null===c||void 0===c?void 0:c.y)+m+6,color:A,handleM:()=>r(3),hover:1}),(0,u.jsx)(g,{x1:(null===c||void 0===c?void 0:c.x)+6,y1:(null===c||void 0===c?void 0:c.y)+6,x2:(null===c||void 0===c?void 0:c.x)+6,y2:(null===c||void 0===c?void 0:c.y)+m,color:I}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)-30,y1:(null===c||void 0===c?void 0:c.y)+m/2,txt:P.toFixed(2)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)-30,y1:(null===c||void 0===c?void 0:c.y)+m/2+12,cmp:q(3)}),null!==(e=y.sink)&&void 0!==e&&e.width?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(N,{x1:(null===c||void 0===c?void 0:c.x)+_,y1:(null===c||void 0===c?void 0:c.y)+W,w:S,h:C,color:"#4b4b4b",hover:1,handleM:()=>r("sink",0,1)}),(0,u.jsx)(k,{x1:null===c||void 0===c?void 0:c.x,y1:(null===c||void 0===c?void 0:c.y)+W,x2:(null===c||void 0===c?void 0:c.x)+_,y2:(null===c||void 0===c?void 0:c.y)+W,color:A,hover:1}),(0,u.jsx)(g,{x1:(null===c||void 0===c?void 0:c.x)+_,y1:null===c||void 0===c?void 0:c.y,x2:(null===c||void 0===c?void 0:c.x)+_,y2:(null===c||void 0===c?void 0:c.y)+W,color:A,hover:1}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+_/2,y1:(null===c||void 0===c?void 0:c.y)+W,txt:(1*(null===(x=y.sink)||void 0===x?void 0:x.xPos)).toFixed(2)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+_+6,y1:(null===c||void 0===c?void 0:c.y)+W/2-6,txt:(1*(null===(s=y.sink)||void 0===s?void 0:s.yPos)).toFixed(2)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+_+S/2-S/4,y1:(null===c||void 0===c?void 0:c.y)+W,txt:(null===(t=y.sink)||void 0===t?void 0:t.width.toFixed(2))+" - "+R(y.sink)}),(0,u.jsx)(f,{x1:(null===c||void 0===c?void 0:c.x)+_+6,y1:(null===c||void 0===c?void 0:c.y)+W+C/2,txt:(null===(a=y.sink)||void 0===a?void 0:a.height.toFixed(2))+" - "+R(y.sink)})]}):null]})},m=l=>{var i,d,n;let{wT:e,hT:s,svDm:a,addBlPr:c,profile:j,item:p,disable:m}=l;const[,k]=(0,o.useState)(1),[g,f]=(0,o.useState)(5),[N,w]=(0,o.useState)(!1),F=(0,o.useRef)(null);let P=e||750,M=s||500;const S=l=>{let i=(0,v.bh)("bluePrint")||a;i||(i={},i.type="U",i.vertices={}),l.profile=l.needProfile?j:null,i.vertices[l.vertice]=l,(0,v.Rz)("bluePrint",i),k((0,v.M5)())};let C=(null===(i=(0,v.bh)("bluePrint"))||void 0===i?void 0:i.vertices)||(null===a||void 0===a?void 0:a.vertices)||{};const _=(l,i,d)=>{if(!m){let o={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};o.content=(0,u.jsx)(r,{confirm:S,vertice:l,holdWidth:i,requiredHeight:d,profile:j,cDm:(null===C||void 0===C?void 0:C[l])||{vertice:l}}),(0,x.OpenModal)(o)}};return(0,u.jsxs)("div",{className:"xMid2Mid",children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"clGojg iSTOvb kvXcCL ",style:{padding:9},children:"Scketch U Shape"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"_dsplFlx ",children:null!==(d=C.sink)&&void 0!==d&&d.width?null:(0,u.jsx)("div",{className:"card",children:(0,u.jsx)(t,{label:"Agregar Sink",clickHandler:()=>_("sink",0,1)})})}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(y,{init:g,label:"Scale",width:80,updChanges:f,type:"number"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:m?null:(0,u.jsx)(t,{label:"Guardar",clickHandler:()=>{m||c((0,v.bh)("bluePrint"))}})}),(0,u.jsx)("div",{className:"icon align_itm",onClick:()=>{},children:m?null:(0,u.jsx)(h,{name:"outline_delete",color:"#F7251A"})})]}),(0,u.jsx)("div",{id:p.productId+"_"+(null===p||void 0===p||null===(n=p.bluePrint)||void 0===n?void 0:n.type),ref:F,style:{width:P,height:M,position:"relative"},children:(0,u.jsx)(b,{dmz:{x:50,y:30},handleLines:_,cDm:C,scale:g,hasSink:N})})]})},b=l=>{var i,d,o,v,n,e,x,s,t,a,c,r;let{dmz:y,handleLines:h,cDm:j,scale:p}=l,m=((null===(i=j[1])||void 0===i?void 0:i.width)||90)*p,b=((null===(d=j[2])||void 0===d?void 0:d.width)||30)*p,w=((null===(o=j[3])||void 0===o?void 0:o.width)||50)*p,F=((null===(v=j[4])||void 0===v?void 0:v.width)||24)*p,P=(null===(n=j[7])||void 0===n||n.width,((null===(e=j[8])||void 0===e?void 0:e.width)||20)*p),M=m/p,S=b/p,C=w/p,_=F/p,W=P/p,z=250*p,H=200*p,L=250*p,D=250*p;var I,A,q,R;null!==(x=j.sink)&&void 0!==x&&x.width&&(z=(null===(I=j.sink)||void 0===I?void 0:I.width)*p,H=(null===(A=j.sink)||void 0===A?void 0:A.height)*p,L=(null===(q=j.sink)||void 0===q?void 0:q.xPos)*p,D=(null===(R=j.sink)||void 0===R?void 0:R.yPos)*p);let T="#000",O="#2c2c2c";const B=l=>{var i,d,o;return null!==(i=j[l])&&void 0!==i&&i.profile?(0,u.jsxs)("div",{className:"wall",children:[" ","".concat(null===(d=j[l])||void 0===d?void 0:d.profile," ")," "]}):null!==(o=j[l])&&void 0!==o&&o.isWall?(0,u.jsx)("div",{className:"wall",children:" Wall "}):null},U=l=>null!==l&&void 0!==l&&l.profile?null===l||void 0===l?void 0:l.profile:null!==l&&void 0!==l&&l.isWall?null===l||void 0===l?void 0:l.isWall:"";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k,{x1:null===y||void 0===y?void 0:y.x,y1:null===y||void 0===y?void 0:y.y,x2:(null===y||void 0===y?void 0:y.x)+m+6,y2:null===y||void 0===y?void 0:y.y,color:O,handleM:()=>h(1),hover:1}),(0,u.jsx)(k,{x1:(null===y||void 0===y?void 0:y.x)+6,y1:(null===y||void 0===y?void 0:y.y)+6,x2:(null===y||void 0===y?void 0:y.x)+m,y2:(null===y||void 0===y?void 0:y.y)+6,color:T}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+m/2,y1:(null===y||void 0===y?void 0:y.y)-6*3.2,txt:M.toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+m/2,y1:(null===y||void 0===y?void 0:y.y)-6*3.2-12,cmp:B(1)}),(0,u.jsx)(k,{x1:null===y||void 0===y?void 0:y.x,y1:(null===y||void 0===y?void 0:y.y)+w+6,x2:(null===y||void 0===y?void 0:y.x)+b+6,y2:(null===y||void 0===y?void 0:y.y)+w+6,color:O,handleM:()=>h(2),hover:1}),(0,u.jsx)(k,{x1:(null===y||void 0===y?void 0:y.x)+6,y1:(null===y||void 0===y?void 0:y.y)+w,x2:(null===y||void 0===y?void 0:y.x)+b,y2:(null===y||void 0===y?void 0:y.y)+w,color:T}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+b/2,y1:(null===y||void 0===y?void 0:y.y)+w+6,txt:S.toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+b/2,y1:(null===y||void 0===y?void 0:y.y)+w+6+12,cmp:B(2)}),(0,u.jsx)(g,{x1:null===y||void 0===y?void 0:y.x,y1:null===y||void 0===y?void 0:y.y,y2:(null===y||void 0===y?void 0:y.y)+w+6,color:O,handleM:()=>h(3),hover:1}),(0,u.jsx)(g,{x1:(null===y||void 0===y?void 0:y.x)+6,y1:(null===y||void 0===y?void 0:y.y)+6,y2:(null===y||void 0===y?void 0:y.y)+w,color:T}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)-30,y1:(null===y||void 0===y?void 0:y.y)+w/2,txt:C.toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)-30,y1:(null===y||void 0===y?void 0:y.y)+w/2+12,cmp:B(3)}),(0,u.jsx)(k,{x1:(null===y||void 0===y?void 0:y.x)+6+b,y1:(null===y||void 0===y?void 0:y.y)+w+6-F,x2:(null===y||void 0===y?void 0:y.x)+(m-P)-6,y2:(null===y||void 0===y?void 0:y.y)+w+6,color:O,hover:1,handleM:()=>h(5,1)}),(0,u.jsx)(k,{x1:(null===y||void 0===y?void 0:y.x)+b,y1:(null===y||void 0===y?void 0:y.y)+w-F,x2:(null===y||void 0===y?void 0:y.x)+(m-P),y2:(null===y||void 0===y?void 0:y.y)+w,color:T}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+(m-b+P)/2,y1:(null===y||void 0===y?void 0:y.y)+(w-F)+6,txt:(M-S-W).toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+(m-b+P)/2,y1:(null===y||void 0===y?void 0:y.y)+(w-F)+6+12,cmp:B(5)}),(0,u.jsx)(g,{x1:(null===y||void 0===y?void 0:y.x)+b+6,y1:(null===y||void 0===y?void 0:y.y)+w+6-F,x2:(null===y||void 0===y?void 0:y.x)+b+6,y2:(null===y||void 0===y?void 0:y.y)+w+6,color:O,hover:1,handleM:()=>h(4)}),(0,u.jsx)(g,{x1:(null===y||void 0===y?void 0:y.x)+b,y1:(null===y||void 0===y?void 0:y.y)+w-F,x2:(null===y||void 0===y?void 0:y.x)+b,y2:(null===y||void 0===y?void 0:y.y)+w,color:T}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+b+12,y1:(null===y||void 0===y?void 0:y.y)+w-F/2,txt:_.toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+b+12,y1:(null===y||void 0===y?void 0:y.y)+w-F/2+12,cmp:B(4)}),(0,u.jsx)(g,{x1:(null===y||void 0===y?void 0:y.x)+m+6,y1:(null===y||void 0===y?void 0:y.y)+6,x2:(null===y||void 0===y?void 0:y.x)+m+6,y2:(null===y||void 0===y?void 0:y.y)+w+6,color:O,handleM:()=>h(6,1),hover:1}),(0,u.jsx)(g,{x1:(null===y||void 0===y?void 0:y.x)+m,y1:(null===y||void 0===y?void 0:y.y)+6,x2:(null===y||void 0===y?void 0:y.x)+m,y2:(null===y||void 0===y?void 0:y.y)+w,color:T}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+m+12,y1:(null===y||void 0===y?void 0:y.y)+w/2,txt:(1*C).toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+m+12,y1:(null===y||void 0===y?void 0:y.y)+w/2+12,cmp:B(6)}),(0,u.jsx)(g,{x1:(null===y||void 0===y?void 0:y.x)+(m-P)-6,y1:(null===y||void 0===y?void 0:y.y)+w+6-F,x2:(null===y||void 0===y?void 0:y.x)+(m-P)-6,y2:(null===y||void 0===y?void 0:y.y)+w+6,color:O,hover:1,handleM:()=>h(7,1)}),(0,u.jsx)(g,{x1:(null===y||void 0===y?void 0:y.x)+(m-P),y1:(null===y||void 0===y?void 0:y.y)+w-F,x2:(null===y||void 0===y?void 0:y.x)+(m-P),y2:(null===y||void 0===y?void 0:y.y)+w,color:T}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+(m-P)-36,y1:(null===y||void 0===y?void 0:y.y)+w-F/2,txt:_.toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+(m-P)-36,y1:(null===y||void 0===y?void 0:y.y)+w-F/2+12,cmp:B(4)}),(0,u.jsx)(k,{x1:(null===y||void 0===y?void 0:y.x)+(m-P)-6,y1:(null===y||void 0===y?void 0:y.y)+w+6,x2:(null===y||void 0===y?void 0:y.x)+m+6,color:O,hover:1,handleM:()=>h(8)}),(0,u.jsx)(k,{x1:(null===y||void 0===y?void 0:y.x)+(m-P),y1:(null===y||void 0===y?void 0:y.y)+w,x2:(null===y||void 0===y?void 0:y.x)+m,color:T}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+(m-P)-6+45,y1:(null===y||void 0===y?void 0:y.y)+w+6,txt:W.toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+(m-P)-6+45,y1:(null===y||void 0===y?void 0:y.y)+w+6+12,cmp:B(8)}),null!==(s=j.sink)&&void 0!==s&&s.width?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(N,{x1:(null===y||void 0===y?void 0:y.x)+L,y1:(null===y||void 0===y?void 0:y.y)+D,w:z,h:H,color:"#4b4b4b",hover:1,handleM:()=>h("sink",0,1)}),(0,u.jsx)(k,{x1:null===y||void 0===y?void 0:y.x,y1:(null===y||void 0===y?void 0:y.y)+D,x2:(null===y||void 0===y?void 0:y.x)+L,y2:(null===y||void 0===y?void 0:y.y)+D,color:O,hover:1}),(0,u.jsx)(g,{x1:(null===y||void 0===y?void 0:y.x)+L,y1:null===y||void 0===y?void 0:y.y,x2:(null===y||void 0===y?void 0:y.x)+L,y2:(null===y||void 0===y?void 0:y.y)+D,color:O,hover:1}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+L/2,y1:(null===y||void 0===y?void 0:y.y)+D,txt:(1*(null===(t=j.sink)||void 0===t?void 0:t.xPos)).toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+L+6,y1:(null===y||void 0===y?void 0:y.y)+D/2-6,txt:(1*(null===(a=j.sink)||void 0===a?void 0:a.yPos)).toFixed(2)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+L+z/2-z/4,y1:(null===y||void 0===y?void 0:y.y)+D,txt:(null===(c=j.sink)||void 0===c?void 0:c.width.toFixed(2))+" - "+U(j.sink)}),(0,u.jsx)(f,{x1:(null===y||void 0===y?void 0:y.x)+L+6,y1:(null===y||void 0===y?void 0:y.y)+D+H/2,txt:(null===(r=j.sink)||void 0===r?void 0:r.height.toFixed(2))+" - "+U(j.sink)})]}):null]})},k=l=>{let{x1:i,x2:d,y1:o,color:v,cmp:n,handleM:e,hover:x}=l;return(0,u.jsx)("div",{style:{position:"absolute",top:o+"px",left:i+"px",width:d-i+"px",height:1,backgroundColor:x?"":v,border:x?"1px ".concat(x?"dashed":"solid"," ").concat(v," "):"",zIndex:99},className:x?"dashline":null,onClick:e||(()=>{}),children:n})},g=l=>{let{x1:i,x2:d,y1:o,y2:v,color:n,cmp:e,handleM:x,hover:s}=l;return(0,u.jsx)("div",{style:{position:"absolute",top:o+"px",left:i+"px",width:1,height:v-o+"px",backgroundColor:s?"":n,border:s?"1px ".concat(s?"dashed":"solid"," ").concat(n," "):"",zIndex:99},className:s?"dashline":null,onClick:x||(()=>{}),children:e})},f=l=>{let{x1:i,x2:d,y1:o,y2:v,cmp:n,txt:e,hover:x}=l;return(0,u.jsx)("div",{style:{position:"absolute",top:o+"px",left:i+"px",zIndex:99,color:"#000"},className:"textLine",children:n||(0,u.jsx)("span",{children:e})})},N=l=>{let{x1:i,w:d,y1:o,h:v,color:n,cmp:e,handleM:x,hover:s}=l;return(0,u.jsx)("div",{style:{position:"absolute",top:o+"px",left:i+"px",width:d+"px",height:v+"px",backgroundColor:s?"":n,border:s?"1px ".concat(s?"dashed":"solid"," ").concat(n," "):"",zIndex:99},className:s?"dashline":null,onClick:x||(()=>{}),children:e})}},7889:()=>{},1534:()=>{}}]);
//# sourceMappingURL=7709.ef8c86a7.chunk.js.map