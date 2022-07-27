import{y as p,r as s,k as h,a as i,j as e,T as u,p as m,N as v,C as x}from"./index.2dd67c8e.js";const r=p(),f=t=>{const{data:d}=t,{modalID:a}=d,[c,n]=s.exports.useState(!1);s.exports.useEffect(()=>{c||n(!0)});const o=()=>{x({id:a})};let l=h("userProfile");return i("div",{...a?{"dialog-key-id":a}:"",className:"pym81b sendBx upd_alert_bx",style:{background:"var(--color_backgrond_input)"},children:[e("style",{children:`
        .palette{
          --base-color: rgb(21, 100, 191,1);
          --base-color-gradient: 21, 100, 191;
        }
        `}),e("div",{className:"login_title ",children:e("div",{children:"Perfil"})}),e("div",{className:" _dsplFlx spaceAround",children:e("div",{className:"delete_alert_t2 ",children:e("div",{children:l.username})})}),e("div",{className:" update_ftp _dsplFlx spaceAround",children:e(r,{lbl:"Cerrar Seccion",icon:"play",theme:"",updChanges:u})}),l.expire&&i("div",{className:" expire_date",children:[e("div",{className:"lbl_hdr",children:"Su cuenta expira el: "}),e("div",{className:"lbl",children:m(l.expire)})]}),e(v,{to:{pathname:"tv7"},style:{marginLeft:7},children:e(r,{lbl:"Asociar TV",icon:"play",theme:"",updChanges:o})})]})};export{f as default};
