import{j as t,a as s,y,S as T,r as p,x as E,t as k,z as b,g as u,u as h,v as z,b as H}from"./index.921eeb0e.js";import{g as F,d as Y}from"./server_fetching.933e00ee.js";import{CloseModal as j,OpenModal as _}from"./DialogHRM.281c65d9.js";/* empty css                  */const O=({data:e,confirm:v,handleClick:f,close:C})=>{const{modalID:m}=e,d=a=>{j({id:m})};return t("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"#fff",borderRadius:13,padding:"10px 19px"},children:[t("div",{className:"_dsplFlx ",children:[s("p",{className:"form_title",children:"Eliminar Comprobante"}),s("div",{className:"flexSpace"})]}),s("div",{className:"_dsplFlx ",children:s("span",{children:"Una vez eliminado no podra ser recuperado"})}),t("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[s("div",{className:"flexSpace"}),s("p",{className:"group_title addBtn",onClick:d,children:"Cancelar"}),s("p",{className:"group_title addBtn red",onClick:()=>{v(),d()},children:"Eliminar"})]})]})},V=y(),A=T(),U=({data:e,elmId:v,handleRefreshAll:f})=>{const[C,m]=p.exports.useState(!1),[d,x]=p.exports.useState(0);let a=E();const g=k();p.exports.useEffect(()=>{C||(m(!0),setTimeout(()=>{var i,r;const n=(r=(i=a.search)==null?void 0:i.split("?"))==null?void 0:r[1],l=b(n);(l==null?void 0:l.cId)&&(l==null?void 0:l.cId)===e.comprobanteId&&(N(),window.scrollTo(0,0))},350))},[a.search]);const I=()=>{x(H())},w=()=>{F(I)},S=()=>{g({search:""})},N=()=>{var l,i;let n=u("lastTimeCallModal")||0;if(Date.now()>n){h("lastTimeCallModal",Date.now()+320);const r=(i=(l=a.search)==null?void 0:l.split("?"))==null?void 0:i[1],o=b(r);(o==null?void 0:o.cId)&&(o==null?void 0:o.cId)===e.comprobanteId||g({search:`?cId=${e.comprobanteId}`}),h("show_comprobante",e);let c={};c.zIndex=450,c.height="80vh",c.props={minHeight:"1vh",overlay:!0,closeEvent:S},c.content=s(V,{confirm:w,item:e}),_(c)}},D=()=>{Y(e==null?void 0:e.operations,f)},M=()=>{let n=u("lastTimeCallModal")||0;if(Date.now()>n){h("lastTimeCallModal",Date.now()+320);let l={};l.zIndex=450,l.height="40vh",l.props={minHeight:"1vh",overlay:!0,closeEvent:()=>{}},l.content=s(O,{confirm:D,item:e}),_(l)}};return s("div",{className:"item_acc",children:t("div",{className:"_dsplFlx operation_item_box",children:[t("div",{className:"_dsplFlx ",onClick:N,children:[s("div",{className:"date",children:z(e==null?void 0:e.date)}),s("div",{className:"name",children:e==null?void 0:e.comprobanteId}),s("div",{className:"entryName",children:e==null?void 0:e.description}),s("div",{className:"flexSpace"}),s("div",{className:"code",style:{marginLeft:9},children:e==null?void 0:e.document})]}),s("div",{className:"flexSpace"}),s("div",{className:"icon",onClick:M,children:s(A,{name:"outline_delete",color:"#c62828"})})]})})};export{U as default};
