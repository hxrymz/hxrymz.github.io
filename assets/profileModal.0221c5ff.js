import{x as g,r as s,B as m,k as x,j as d,a as e,p as _,J as w}from"./index.81185f1e.js";const v=g(),k=n=>{const{data:r}=n,{modalID:i}=r,[o,c]=s.exports.useState(!1);s.exports.useEffect(()=>{o||(c(!0),m(()=>b()))});const p=()=>{const t=window.gapi.auth2&&window.gapi.auth2.getAuthInstance();t&&t.disconnect();let h=new Date().getTime(),l=new Date(h-1e3),u=w();document.cookie=`${u}=; expires=${l}; path=/;g_state = {"i_l":1,"i_p":${l}}`,window.location.reload()};let a=x("userProfile");return d("div",{...i?{"dialog-key-id":i}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:[e("style",{children:`
        .palette{
          --base-color: rgb(21, 100, 191,1);
          --base-color-gradient: 21, 100, 191;
        }
        `}),e("div",{className:"login_title ",children:e("div",{children:"Perfil"})}),e("div",{className:" _dsplFlx spaceAround",children:e("div",{className:"delete_alert_t2 ",children:e("div",{children:a.name})})}),e("div",{className:" update_ftp _dsplFlx spaceAround",children:e(v,{lbl:"Cerrar Seccion",icon:"play",theme:"",updChanges:p})}),a.expire&&d("div",{className:" expire_date",children:[e("div",{className:"lbl_hdr",children:"Su cuenta expira el: "}),e("div",{className:"lbl",children:_(a.expire)})]}),e("div",{id:"g-s-b","data-theme":"dark",style:{opacity:0,maxHeight:0,maxWidth:0}})]})},b=async()=>{window.gapi.load("auth2",function(){window.gapi.signin2.render("g-s-b",{width:232,height:40,longtitle:!0,hidden:!0})})};export{k as default};
