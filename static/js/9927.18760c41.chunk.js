"use strict";(self.webpackChunkhrmfinance=self.webpackChunkhrmfinance||[]).push([[9927],{9018:(e,l,a)=>{a.d(l,{Z:()=>d});a(2791);var i=a(2647),s=a(184);const n=(0,i.PU)(),d=e=>{let{icon:l,iconColor:a="var(--light-200)",label:i,handleClick:d,value:r}=e;return(0,s.jsxs)("div",{className:" _dsplFlx dtls minhh card_dark",onClick:d,children:[(0,s.jsx)("div",{className:"iconBx ",children:(0,s.jsx)(n,{name:l,size:32,color:a})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"lbl_dtls",style:{marginTop:8,textAlign:"left"},children:i}),(0,s.jsx)("div",{className:"lbl_h_dtls ",style:{marginTop:8,textAlign:"left"},children:r})]})]})}},2825:(e,l,a)=>{a.d(l,{Z:()=>v});var i=a(2791),s=a(9760),n=a(2647),d=a(2350),r=a(5143),t=a(184);const c=(0,n.Np)(),o=(0,n.tL)(),v=e=>{var l;let{data:a,confirm:n,type:c,init:o}=e;const[v,u]=(0,i.useState)(!1),[,x]=(0,i.useState)(1),_=()=>{x((0,d.M5)())};(0,i.useEffect)((()=>{v||(u(!0),x((0,d.M5)()),(0,r.bM)(_))}));const g=e=>{x((0,d.M5)()),(0,d.Ey)(n)&&(b(),n(e))},b=()=>{(null===a||void 0===a?void 0:a.modalID)&&(0,s.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})};let j=(0,d.bh)("categories_list");return(0,t.jsxs)("div",{style:{height:"80vh",width:"90vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"20px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title blue30",style:{margin:"10px"},children:(0,r.mU)(54)}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(h,{label:(0,r.mU)(46),clickHandler:e=>{let l={zIndex:480,props:{minHeight:"1vh",overlay:!0}};l.content=(0,t.jsx)(p,{}),(0,s.OpenModal)(l)}})})]}),(0,t.jsx)("div",{className:" spaceAround flxWrp scollVh",style:{marginTop:20,maxHeight:"calc( 78vh - 70px)"},children:j&&(null===(l=(0,d._2)(j))||void 0===l?void 0:l.map((e=>(0,t.jsx)(m,{data:j[e],elmId:j[e].categoryId,label:j[e].name,clickHandler:g,active:o,type:c},j[e].categoryId))))})]})},m=e=>{let{clickHandler:l,label:a,active:i,elmId:s,data:n,type:d}=e,r=i===s?null:s;return n.type!==d?null:(0,t.jsx)("div",{className:" btn_filter itmMrg ".concat(i===s?"active":""," "),onClick:()=>l(r),children:a})},h=e=>{let{clickHandler:l,label:a}=e;return(0,t.jsx)("div",{className:" jaqJnq_hrm1",children:(0,t.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:l,children:(0,t.jsx)("span",{className:" jaqJnq_hrm1",children:a})})})},p=e=>{var l,a,n;let{data:v,confirm:m,type:p,init:u}=e;const x="add_category_frm",[_,g]=(0,i.useState)(1),b=()=>{(null===v||void 0===v?void 0:v.modalID)&&(0,s.CloseModal)({id:null===v||void 0===v?void 0:v.modalID})},j=(e,l)=>{let a=(0,d.bh)(x)||{};a[e]=l,(0,d.Rz)(x,a),g((0,d.M5)())};return(0,t.jsxs)("div",{style:{height:"80vh",width:"90vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"20px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsxs)("p",{className:"form_title blue30",style:{margin:"10px"},children:[(0,r.mU)(46)," ",(0,r.mU)(54)]}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(h,{label:(0,r.mU)(43),clickHandler:async()=>{var e,l;let a=(0,d.bh)(x);a.categoryId=(0,d.M5)();let i={...null===(e=(0,d.bh)((0,d.hQ)()))||void 0===e?void 0:e.add_categapp};i.params={businessId:null===(l=(0,d.bh)("profileUser"))||void 0===l?void 0:l.businessId},i.form=a;const s=(0,d.I7)(i);await s&&((0,d.Rz)(x,{}),m&&m(),b())}})})]}),(0,t.jsxs)("div",{className:"",style:{margin:"30px 0"},children:[(0,t.jsx)("div",{className:"lbl_dtls",children:(0,t.jsx)(c,{init:null===(l=(0,d.bh)(x))||void 0===l?void 0:l.name,width:"68vw",label:(0,r.mU)(56),updChanges:e=>j("name",e)})}),(0,t.jsx)("div",{className:"lbl_dtls",children:(0,t.jsx)(c,{init:null===(a=(0,d.bh)(x))||void 0===a?void 0:a.description,width:"68vw",label:(0,r.mU)(53),updChanges:e=>j("description",e)})}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{padding:"48px 10px 10px"},children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)(o,{data:[{label:(0,r.mU)(40),id:"expenses"},{label:(0,r.mU)(42),id:"incomes"}],active:null===(n=(0,d.bh)(x))||void 0===n?void 0:n.type,updSelect:e=>j("type",e),colors:{"--base-ck-primary-color":"var(--primary-blue--backg-30)","--base-ck-primary-backcolor":"var(--primary-blue--color-30)"}})]})]})]})}},9927:(e,l,a)=>{a.r(l),a.d(l,{SVGImg:()=>C,SvgTextAnnotationItem:()=>M,default:()=>y});var i=a(2791),s=a(2647),n=a(7689),d=a(2350),r=a(5143),t=a(9760),c=a(2825),o=a(6514),v=a(9138),m=a(8965),h=a(7984),p=a(9018),u=a(184);const x=(0,s.Np)(),_=(0,s.Zg)(),g=(0,s.PU)(),b=(0,s.tW)(),j=((0,s.pz)(),(0,s.LA)()),f=(0,d.Ks)()+"_add",y=e=>{var l,a;let{data:s,description:c,confirm:o}=e;const[v,m]=(0,i.useState)(1),[h,p]=(0,i.useState)(1);let x=(0,n.TH)();(0,n.s0)();const _=null===(l=x.search)||void 0===l||null===(a=l.split("?"))||void 0===a?void 0:a[1],b=(0,d.mB)(_);let j=null===b||void 0===b?void 0:b.cId;(0,i.useEffect)((()=>{}),[j]);const f=()=>{(0,d.Ey)(o)&&o(),(null===s||void 0===s?void 0:s.modalID)&&(0,t.CloseModal)({id:null===s||void 0===s?void 0:s.modalID})},y=e=>{p(e)};let N="incomes"===(0,d.bh)("movement_type")?42:40;return(0,u.jsx)("div",{style:{height:(0,d.bh)("isOS")?"89vh":"94vh",marginTop:(0,d.bh)("isOS")?"9vh":"6vh",width:"99vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 6px"},children:(0,u.jsxs)("div",{className:" ",children:[(0,u.jsxs)("div",{className:"h23g9woI",children:[(0,u.jsxs)("div",{className:"jKZvHt ",onClick:f,children:[(0,u.jsx)(g,{name:"arrowBack",size:22,color:"var(--light-200)"}),(0,u.jsx)("div",{className:"eULkqP"})]}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"typeBxPick lh-default ".concat("expenses"===(0,d.bh)("movement_type")?"red_orangered":"blue_30"),children:(0,u.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:e=>{let l="incomes"===(0,d.bh)("movement_type")?"expenses":"incomes";(0,d.Rz)("movement_type",l),m((0,d.M5)())},children:(0,r.mU)(N)})}),(0,u.jsx)("div",{className:"typeBxPick icon_action ".concat(1===h?"active":""," "),onClick:()=>y(1),children:(0,u.jsx)(g,{name:"image_outline",color:"var(--light-200)"})}),(0,u.jsx)("div",{className:"typeBxPick icon_action ".concat(2===h?"active":""," "),onClick:()=>y(2),children:(0,u.jsx)(g,{name:"list_form",color:"var(--light-200)"})})]}),(0,u.jsx)("div",{style:{paddingTop:4}}),(0,u.jsx)(z,{viewId:1,activeView:h,children:(0,u.jsx)(w,{close:f})}),(0,u.jsx)(z,{viewId:2,activeView:h,children:(0,u.jsx)(k,{close:f})})]})})},w=e=>{let{activeView:l,close:a}=e;const[,s]=(0,i.useState)(1),[n,c]=(0,i.useState)(""),v=(0,i.useRef)(null),p=(0,i.useRef)(null),x=(0,i.useRef)(null),_=e=>{var l;null===x||void 0===x||null===(l=x.current)||void 0===l||l.setAttribute("show",e)},y=(0,m.g)(!1,(e=>{var l,a;null===v||void 0===v||null===(l=v.current)||void 0===l||l.setAttribute("show",e),null===p||void 0===p||null===(a=p.current)||void 0===a||a.setAttribute("loading",e)})),w=(0,m.w)("",{shallowRender:!0}),k=(0,m.w)("",{shallowRender:!0}),z=()=>{s((0,d.M5)())},R=(e,l)=>{let a=(0,d.bh)(f)||{};a[e]=l,(0,d.Rz)(f,a),s((0,d.M5)())},I=async()=>{(0,d.bh)("canvas_advanced-cropper");var e=(0,d.bh)("preview_src_before_upload");let l=(0,d.M5)()+"_"+(0,d.M5)()+".png";var a=await(0,d.Mi)(e,"image/png");const i={maxSizeMB:1,maxWidthOrHeight:1920};try{(async(e,l)=>{var a;w.value=(0,r.mU)(21)+" ...",(0,r.Rh)(e,l,(a=>{(0,r.Dr)(a,e,(()=>{R("imagePath",l),S(l)}))}),null===(a=(0,d.bh)("profileUser"))||void 0===a?void 0:a.businessId)})(await(0,h.Z)(a,i),l)}catch(s){console.log(s)}},M=async(e,l,a)=>{var i;w.value=(0,r.mU)(24)+" ...";let s=null===(i=(0,d.bh)(f))||void 0===i?void 0:i.imagePath.split(".png")[0];(0,r.sV)(s+".png",(a=>{(async(e,l)=>{var a=await(0,d.Em)(e,l);(0,d.Rz)("image_url_mov_add",e),(0,d.Rz)("image_preview_mov_add",a),T(a)})(e,l),(e=>{(0,d.Rz)("image__text_detect_locale",e.locale),(0,d.Rz)("image__text_detect",e),(0,d.Rz)("image_mov_add_text",e.Blocks),(0,d.Rz)("loading_image_text",!1),z()})(a)})),setTimeout((()=>{(0,r.JG)(e,a,(()=>{(0,r.sV)(s+".webp",(()=>{}))}))}),500)},S=e=>{let l=(0,d.LH)(e);(0,r.Qq)(e,(a=>M(a,l,e)))},T=e=>{var l=new Image;l.onload=function(){let e={oh:l.height,ow:l.width,h:l.height,w:l.width};(0,d.Rz)("preview_mov_dmz_add",e),(0,d.Rz)("loading_image_upload",!1),(0,d.Rz)("loading_upload_crop",!1),y.value=!1,w.value="",z()},e&&(l.src=e)},F=e=>{R("date",e.initDate+800)},H=async()=>{var e,l;(0,d.Rz)("loading_image_2revision",!0),s((0,d.M5)());let i=(0,d.bh)(f);i.movementId=(0,d.M5)(),i.date?i.date=new Date(i.date).getTime():i.date=(new Date).getTime()+800;let n=(0,d.bh)("movement_type");i.movementType=n.slice(0,n.length-1),i.inManualRevision=!0;let r={...null===(e=(0,d.bh)((0,d.hQ)()))||void 0===e?void 0:e.add__incms_expns};r.params={businessId:null===(l=(0,d.bh)("profileUser"))||void 0===l?void 0:l.businessId},r.form=i,(async e=>{const l=(0,d.I7)(e),i=await l;i&&!i.error&&((0,d.Rz)("loading_image_2revision",!1),(0,d.Rz)("preview_src_before_upload",null),(0,d.Rz)("canvas_advanced-cropper",null),(0,d.Rz)("image_url_mov_add",null),(0,d.Rz)("preview_mov_dmz_add",null),(0,d.Rz)("canvas_advanc",null),a(!0))})(r)},O=()=>{k.value="",c(null),_(!1)};return(0,u.jsxs)("div",{style:{maxWidth:560,padding:"5px!important"},children:[(0,d.bh)("preview_mov_dmz_add")?null:(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:9},children:[(0,u.jsx)("div",{style:{marginBottom:10},children:(0,d.bh)("loading_image_upload")?(0,u.jsxs)("div",{className:"icon_compr _dsplFlx",style:{marginTop:10},children:[(0,u.jsxs)("div",{className:"lbl_saving ",children:[(0,r.mU)(21)," ..."]}),(0,u.jsx)(b,{stroke:"var(--partial-success)",size:24,strokeW:8})]}):(0,u.jsxs)("div",{className:"_dsplFlx upl",style:{margin:"6px 6px 5px"},children:[(0,u.jsx)("div",{className:"lbl_saving ",style:{margin:"4px 20px 0 0"},children:(0,r.mU)(1)}),(0,u.jsxs)("div",{className:"btn_icon",children:[(0,u.jsx)("div",{className:"icon_absol inside ",children:(0,u.jsx)(g,{name:"image_outline",color:"var(--light-300)",size:20})}),(0,u.jsx)("div",{className:"icon_absol ",children:(0,u.jsx)(g,{name:"scan-helper",color:"var(--partial-success)",size:28})})]}),(0,u.jsx)("input",{id:"fileupload",type:"file",accept:"image/*,capture=camera",onChange:async e=>{(0,d.Rz)("loading_image_upload",!0),s((0,d.M5)());const l=e.target.files[0],a={maxSizeMB:1,maxWidthOrHeight:1920};try{const e=await(0,h.Z)(l,a),i=new FileReader;i.addEventListener("load",(()=>{(0,d.Rz)("preview_src_before_upload",i.result),(0,d.Rz)("loading_image_upload",!1),s((0,d.M5)())}),!1),l&&i.readAsDataURL(e)}catch(i){console.log(i)}}})]})}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{style:{marginBottom:10},children:(0,d.bh)("preview_src_before_upload")?(0,u.jsxs)("div",{className:"_dsplFlx",style:{margin:"6px 20px 5px"},onClick:async()=>{y.value||(y.value=!0,w.value=(0,r.mU)(20)+" ...",(0,d.Rz)("loading_upload_crop",!0),I())},children:[(0,u.jsx)("div",{className:"lbl_saving ",style:{margin:"4px 20px 0 0"},children:(0,r.mU)(2)}),(0,u.jsxs)("div",{className:"btn_icon",children:[(0,u.jsx)("div",{className:"icon_absol inside ",children:(0,u.jsx)(g,{name:"arrow_up_large",color:"var(--light-300)",size:20})}),(0,u.jsx)("div",{className:"icon_absol ",children:(0,u.jsx)(g,{name:"scan-helper",color:"var(--partial-success)",size:28})})]})]}):null})]}),(0,d.bh)("image_url_mov_add")?(0,u.jsx)("div",{className:"_dsplFlx",children:(0,u.jsx)("div",{style:{margin:"20px 10px"},children:(0,u.jsxs)("div",{className:"_dsplFlx",style:{margin:"6px 20px 5px"},onClick:async()=>{(0,d.bh)(f).date?H():(e=>{var l;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,u.jsx)(j,{onConfirm:F,colors:{"--calendar-primary-color":"var(--primary-blue--backg-30)","--calendar-primary-backcolor":"var(--primary-blue--hover-back-30)","--calendar-selected_lbl_color":"var(--primary-blue--color-30)","--calendar-light-backcolor":"var(--dark-800)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--light-300)","--calendar-light-200":"var(--light-200)","--calendar-light-100":"var(--light-100)","--calendar-dark-800":"var(dark-800)","--calendar-white-100":"var(--primary-blue--color-30)","--calendar-white":"var(--white)"},init:null===(l=(0,d.bh)(f))||void 0===l?void 0:l.date}),(0,t.OpenModal)(a)})()},children:[(0,u.jsx)("div",{className:"lbl_saving ",style:{margin:"4px 20px 0 0"},children:(0,r.mU)(4)}),(0,u.jsxs)("div",{className:"btn_icon",children:[(0,u.jsx)("div",{className:"icon_absol inside ",children:(0,u.jsx)(g,{name:"search",color:"var(--light-300)",size:20})}),(0,u.jsx)("div",{className:"icon_absol ",children:(0,u.jsx)(g,{name:"scan-helper",color:"var(--partial-success)",size:28})})]})]})})}):null,n?(0,u.jsxs)("div",{className:"imagePreview",children:[(0,u.jsxs)("div",{className:"",onClick:O,children:[(0,u.jsx)("div",{className:"lbl_dtls",children:(0,r.mU)(5)}),(0,u.jsx)("div",{className:"text2link",children:n})]}),(0,u.jsx)(U,{icon:"market",title:(0,r.mU)(50),frmNm:f,keyfld:"title",updObs:z,newValue:n,confirm:O,join:" "}),(0,u.jsx)(U,{icon:"money_outline",title:(0,r.mU)(51),frmNm:f,keyfld:"amount",updObs:z,newValue:n,confirm:O,replace:!0}),(0,u.jsx)(U,{icon:"text",title:(0,r.mU)(52),frmNm:f,keyfld:"document",updObs:z,newValue:n,confirm:O,join:" "}),(0,u.jsx)(U,{icon:"info",title:(0,r.mU)(53),frmNm:f,keyfld:"description",updObs:z,newValue:n,confirm:O,join:" "})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"text2Copy_container _dsplFlx",ref:x,children:(0,u.jsxs)("div",{className:"",style:{width:"100%"},children:[(0,u.jsxs)("div",{className:"_dsplFlx",children:[(0,u.jsx)("div",{className:"lbl_dtls",style:{marginBottom:12},children:(0,r.mU)(5)}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon_absol inside ",onClick:()=>k.value="",children:(0,u.jsx)(g,{name:"cancel",color:"var(--light-300)",size:20})})]}),(0,u.jsx)("div",{className:"text2link",onClick:()=>c(k.value),children:k.referenceRender})]})}),(0,u.jsxs)("div",{className:"loading_animation_container _dsplFlx",style:{marginTop:112},ref:v,children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"icon_compr _dsplFlx loadingFit",style:{marginTop:10},children:[(0,u.jsx)("div",{className:"lbl_saving ",children:w.referenceRender}),(0,u.jsx)(b,{stroke:"var(--partial-success)",size:32,strokeW:8})]}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsx)("div",{className:"imagePreview image_container",ref:p,children:(0,d.bh)("preview_mov_dmz_add")?(0,u.jsx)(o.d$,{children:(0,u.jsx)(o.Uv,{children:(0,u.jsx)(C,{image:(0,d.bh)("image_preview_mov_add"),updTxt:e=>{k.value=k.value+" "+e,_(!0)},vectors:(0,d.bh)("image_mov_add_text")})})}):(0,u.jsx)(N,{handleChange:z,loadingCrop:e=>{y.value=e,w.value=(0,r.mU)(23)+" ..."}})})]})]})},N=e=>{let{loadingCrop:l}=e;const[,a]=(0,i.useState)(1),[s,n]=(0,i.useState)(0),t=(0,i.useRef)(null),c=(0,i.useRef)(null),o=(0,m.g)(!1,(e=>{var l;null===c||void 0===c||null===(l=c.current)||void 0===l||l.setAttribute("show",e)}));return(0,u.jsxs)("div",{children:[(0,d.bh)("preview_src_before_upload")?(0,u.jsxs)("div",{className:"image_options",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx",onClick:()=>{let e=s+90;e>350&&(e=0),t.current&&(n(e),t.current.rotateImage(45))},children:[(0,u.jsx)("div",{className:"",children:(0,r.mU)(12)}),(0,u.jsx)("div",{className:" ",children:(0,u.jsx)(g,{name:"rotate-left",color:"var(--partial-success)",size:28})})]}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx crop_imag_btn",onClick:async()=>{l(!0),setTimeout((()=>{(async()=>{(0,d.Rz)("canvas_cropping",!0);var e=(0,d.bh)("canvas_advanced-cropper").toDataURL(),i=await(0,d.Mi)(e,"application/png");let s=URL.createObjectURL(i);(0,d.Rz)("preview_src_before_upload",s),(0,d.Rz)("canvas_cropping",!1),o.value=!1,setTimeout((()=>{(0,d.Rz)("canvas_advanced-cropper",null),a((0,d.M5)()),o.value=!1,l(!1)}),150)})()}),100)},ref:c,children:[(0,u.jsx)("div",{className:"",children:(0,r.mU)(13)}),(0,u.jsx)("div",{className:" ",children:(0,u.jsx)(g,{name:"crop",color:"var(--partial-success)",size:28})})]}),(0,u.jsx)("div",{className:"flexSpace"})]}):null,(0,u.jsx)("div",{className:"cropper_container",style:{opacity:(0,d.bh)("canvas_cropping")?0:1},children:(0,u.jsx)(v.fle,{src:(0,d.bh)("preview_src_before_upload"),onChange:e=>{let l=e.getCanvas();(0,d.bh)("canvas_advanced-cropper")?o.value=!0:o.value=!1,(0,d.Rz)("canvas_advanced-cropper",l)},className:"cropper",ref:t,defaultSize:e=>{let{imageSize:l,visibleArea:a}=e;return{width:(a||l).width,height:(a||l).height}}})})]})},k=e=>{var l,a,s,n,o;let{activeView:v,close:m}=e,h=(0,d.bh)("movement_type");const[x,_]=(0,i.useState)(1),g=()=>{_((0,d.M5)())};let b=(0,d.vy)(["title","description","document","amount","categoryId"],(0,d.bh)(f),(0,d.bh)(f+"_bck"));const y=(e,l)=>{let a=(0,d.bh)(f)||{};a[e]=l,(0,d.Rz)(f,a),_((0,d.M5)())},w=e=>{y("date",e.initDate+800)},N=e=>{y("categoryId",e)};let k=null!==(l=(0,d.bh)(f))&&void 0!==l&&l.date?(0,d.sG)(null===(a=(0,d.bh)(f))||void 0===a?void 0:a.date):(0,d.sG)(new Date),z=null===(s=(0,d.bh)("categories_ids"))||void 0===s||null===(n=s[null===(o=(0,d.bh)(f))||void 0===o?void 0:o.categoryId])||void 0===n?void 0:n.name;return(0,u.jsxs)("div",{style:{maxWidth:560,height:"98vmin",padding:"5px!important"},children:[(0,u.jsxs)("div",{className:"_dsplFlx ",style:{padding:9},children:[(0,u.jsx)("div",{className:"flexSpace"}),b.hasChange?(0,u.jsx)("div",{className:"",children:(0,u.jsx)(I,{label:(0,r.mU)(43),clickHandler:async()=>{var e,l;let a=(0,d.bh)(f);a.movementId=(0,d.M5)(),a.date?a.date=new Date(a.date).getTime():a.date=(new Date).getTime()+800,a.movementType=h.slice(0,h.length-1);let i={...null===(e=(0,d.bh)((0,d.hQ)()))||void 0===e?void 0:e.add__incms_expns};i.params={businessId:null===(l=(0,d.bh)("profileUser"))||void 0===l?void 0:l.businessId},i.form=a,(async e=>{const l=(0,d.I7)(e),a=await l;a&&!a.error&&((0,d.Rz)("preview_src_before_upload",null),(0,d.Rz)("canvas_advanced-cropper",null),(0,d.Rz)("image_url_mov_add",null),(0,d.Rz)("preview_mov_dmz_add",null),(0,d.Rz)("canvas_advanc",null),m(!0),(0,d.Rz)(f,null))})(i)}})}):null]}),(0,u.jsxs)("div",{className:"scollVh min88 ",children:[(0,u.jsxs)("div",{className:"_dsplFlx  spaceAround flxWrp",children:[(0,u.jsx)(p.Z,{icon:"calendar",label:(0,r.mU)(55),value:k||(0,r.mU)(45),handleClick:e=>{var l;let a={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};a.content=(0,u.jsx)(j,{onConfirm:w,colors:{"--calendar-primary-color":"var(--primary-blue--backg-30)","--calendar-primary-backcolor":"var(--primary-blue--hover-back-30)","--calendar-selected_lbl_color":"var(--primary-blue--color-30)","--calendar-light-backcolor":"var(--dark-800)","--calendar-primary-hover-backcolor":"var(--hrm_palette-blue-purple_100)","--calendar-light-300":"var(--light-300)","--calendar-light-200":"var(--light-200)","--calendar-light-100":"var(--light-100)","--calendar-dark-800":"var(dark-800)","--calendar-white-100":"var(--primary-blue--color-30)","--calendar-white":"var(--white)"},init:null===(l=(0,d.bh)(f))||void 0===l?void 0:l.date}),(0,t.OpenModal)(a)}}),(0,u.jsx)(p.Z,{icon:"groups",label:(0,r.mU)(54),value:z||(0,r.mU)(45),handleClick:e=>{var l;let a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,u.jsx)(c.Z,{type:h,confirm:N,init:null===(l=(0,d.bh)(f))||void 0===l?void 0:l.categoryId}),(0,t.OpenModal)(a)}})]}),(0,u.jsxs)("div",{className:"_dsplFlx  spaceAround flxWrp",children:[(0,u.jsx)(R,{title:(0,r.mU)(50),frmNm:f,keyfld:"title",updObs:g}),(0,u.jsx)(R,{title:(0,r.mU)(51),frmNm:f,keyfld:"amount",updObs:g}),(0,u.jsx)(R,{title:(0,r.mU)(52),frmNm:f,keyfld:"document",updObs:g}),(0,u.jsx)(R,{title:(0,r.mU)(53),frmNm:f,keyfld:"description",updObs:g,isTxtArea:!0})]})]})]})},z=e=>{let{viewId:l,activeView:a,children:i}=e;return(0,u.jsx)("div",{className:"opacityView",style:{opacity:l===a?1:0,marginTop:2},children:l===a?i:null})},R=e=>{var l;let{title:a,keyfld:s,updObs:n,frmNm:r,isTxtArea:t}=e;const[,c]=(0,i.useState)(1),o=(e,l)=>{let a=(0,d.bh)(r)||{};a[e]=l,(0,d.Rz)(r,a),c((0,d.M5)())};let v=null===(l=(0,d.bh)(r))||void 0===l?void 0:l[s];return(0,u.jsxs)("div",{className:" dtls minhh",children:[(0,u.jsx)("div",{className:"lbl_h_dtls",style:{marginTop:8,textAlign:"left"},children:a}),(0,u.jsx)("div",{className:"_dsplFlx",children:t?(0,u.jsx)("div",{className:"lbl_dtls txt2lp",children:(0,u.jsx)(_,{init:v,width:"86vw",updChanges:e=>o(s,e)})}):(0,u.jsx)("div",{className:"lbl_dtls txt2lp",children:(0,u.jsx)(x,{init:v,width:"86vw",updChanges:e=>o(s,e),onEnter:()=>{n&&n()}})})})]})},U=e=>{var l;let{title:a,keyfld:s,replace:n,frmNm:r,newValue:t,confirm:c,join:o,icon:v}=e;const[,m]=(0,i.useState)(1);let h=null===(l=(0,d.bh)(r))||void 0===l?void 0:l[s];return(0,u.jsx)(p.Z,{icon:v,label:a,value:h||"click to associate",handleClick:()=>{((e,l)=>{let a=(0,d.bh)(r)||{};a[e]=l?l.trim():((0,d.fY)(a[e])+o+t).trim(),(0,d.Rz)(r,a),m((0,d.M5)())})(s,n?t:null),(0,d.Ey)(c)&&c()}})},I=e=>{let{clickHandler:l,label:a}=e;return(0,u.jsx)("div",{className:" jaqJnq_hrm1",children:(0,u.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:l,children:(0,u.jsx)("span",{className:" jaqJnq_hrm1",children:a})})})},C=e=>{var l,a,i,s,n,r;let{image:t,vectors:c,updTxt:o}=e;return(0,u.jsxs)("svg",{id:"ssg_business_card_front",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 ".concat(null===(l=(0,d.bh)("preview_mov_dmz_add"))||void 0===l?void 0:l.w," ").concat(null===(a=(0,d.bh)("preview_mov_dmz_add"))||void 0===a?void 0:a.h),preserveAspectRatio:"xMidYMid meet",children:[(0,u.jsx)("style",{type:"text/css",children:'@font-face {\n\t\t\t\tfont-family: "Google Sans";\n\t\t\t\tsrc: url(http://fonts.gstatic.com/s/googlesans/v14/4UabrENHsxJlGDuGo1OIlLU94YtzCwY.woff2)\n\n\t\t\t}'}),(0,u.jsx)("rect",{width:null===(i=(0,d.bh)("preview_mov_dmz_add"))||void 0===i?void 0:i.w,height:null===(s=(0,d.bh)("preview_mov_dmz_add"))||void 0===s?void 0:s.h,fill:"#ffffff"}),(0,u.jsx)("image",{width:null===(n=(0,d.bh)("preview_mov_dmz_add"))||void 0===n?void 0:n.w,height:null===(r=(0,d.bh)("preview_mov_dmz_add"))||void 0===r?void 0:r.h,x:0,y:0,xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:t}),null===c||void 0===c?void 0:c.map(((e,l)=>(0,u.jsx)(M,{idKey:l+"_tann",item:e,index:l,updTxt:o},l+"_tann")))]})},M=e=>{let{item:l,index:a,updTxt:i}=e;const{Text:s,Geometry:n,boundingPoly:r,BlockType:t}=l;if("WORD"!==t)return null;let c=null===r||void 0===r?void 0:r.vertices,o=s,v=n.BoundingBox,m=(0,d.bh)("preview_mov_dmz_add"),h=(null===v||void 0===v?void 0:v.Height)*m.h,p=(null===v||void 0===v?void 0:v.Width)*m.w,x=(null===v||void 0===v?void 0:v.Left)*m.w,_=(null===v||void 0===v?void 0:v.Top)*m.h;return 0===a||null===c||void 0===c||c[1],(0,u.jsx)("rect",{onClick:e=>{e.stopPropagation(),e.preventDefault(),i(o),(0,d.vQ)(o)},onContextMenu:e=>{e.stopPropagation(),e.preventDefault()},width:p,height:h,fill:"#646cff",fillOpacity:"50%",x:x,y:_})}},8965:(e,l,a)=>{a.d(l,{g:()=>t,w:()=>r});var i=a(2791),s=a(184);const n=(0,i.forwardRef)(((e,l)=>{let{initValue:a}=e;const[n,d]=(0,i.useState)(a);return(0,i.useImperativeHandle)(l,(()=>({refresh(e){d(e)}}))),(0,s.jsxs)(s.Fragment,{children:[" ",n]})})),d="referenceRender",r=(e,l)=>{const[,a]=(0,i.useState)(e),r=(0,i.useRef)(null);return(0,i.useRef)(new Proxy({value:e},{get:function(e,a){return l.shallowRender&&a===d?(0,s.jsx)(n,{initValue:e.value,ref:r}):e[a]?e[a]:Reflect.get(...arguments)},set:function(e,i,s){var n;e[i]!==s&&(e[i]=s,l.shallowRender?null===r||void 0===r||null===(n=r.current)||void 0===n||n.refresh(s):a({...e}));return!0}})).current},t=(e,l,a)=>{const[,s]=(0,i.useState)(e);return(0,i.useRef)(new Proxy({value:e},{get:function(e,l){if(e[l])return e[l]},set:function(e,i,n){return e[i]!==n&&(e[i]=n,l&&l(e[i]),null!==a&&void 0!==a&&a.deep&&s({...e})),!0}})).current}}}]);
//# sourceMappingURL=9927.18760c41.chunk.js.map