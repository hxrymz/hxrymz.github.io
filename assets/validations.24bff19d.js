var o=/^(?:9[0-9]{12}(?:[0-9]{3})?)$/;function f(t){return typeof t=="number"&&t%1===0}function g(t,r,s){var e=!1;if(f(t)&&f(r)&&f(s)){r<10&&(r="0"+r),s<10&&(s="0"+s);var n=`${r}/${s}/${t}`;/^((0|1)\d{1})\/((0|1|2|3)\d{1})\/((19|20)\d{2})/g.test(n)?e=!0:e=!1}return e}const m=function(t,r){let s={valid:!0,msg:""};return r||(s={valid:!1,msg:"missing data"}),Object.keys(t).map(e=>{if(e&&r)if(r[e]===void 0)s={fld:e,valid:!1,msg:"no puede dejar el campo vacio"};else if(r[e]===null)s={fld:e,valid:!1,msg:"no puede dejar el campo vacio"};else{let n=r[e].toString();Object.keys(t[e]).map(i=>{if(i==="minLength"&&n.toString().length<t[e][i]&&(s={fld:e,valid:!1,msg:`requiere un minimo de ${t[e][i]} caracteres`}),i==="maxLength"&&n.toString().length>t[e][i]&&(s={fld:e,valid:!1,msg:`el maximo de caracteres permitidos es de ${t[e][i]}`}),i==="number"&&t[e][i]){let a=!isNaN(n);a||(s={fld:e,valid:a,msg:"numero invalido"})}if(i==="minValue"&&n<t[e][i]&&(s={fld:e,valid:!1,msg:"value is less than the required"}),i==="maxValue"&&n>t[e][i]&&(s={fld:e,valid:!1,msg:"value is grather than the required"}),i==="date"&&t[e][i]){let a=isNaN(n)?!1:!!new Date(parseInt(n.toString())).getTime();a||(s={fld:e,valid:a,msg:"date invalid"})}if(i==="phone"&&t[e][i]){let a=/^[\dX]{3}-?[\dX]{3}-?[\dX]{4}$/.test(n);a||(s={fld:e,valid:a,msg:"telefono invalido"})}if(i==="cubaphone"&&t[e][i]){let a=/^(?:535[0-9]{7})$/.test(n);a||(s={fld:e,valid:a,msg:"telefono invalido"})}if(i==="ssn"&&t[e][i]){let a=/^[\dX]{3}-?[\dX]{2}-?[\dX]{4}$/.test(n);a||(s={fld:e,valid:a,msg:"ssn invalid"})}if(i==="ip"&&t[e][i]){let a=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(n);a||(s={fld:e,valid:a,msg:"invalid IP address"})}if(i==="email"&&t[e][i]){let a=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n);a||(s={fld:e,valid:a,msg:"email invalid"})}if(i==="card"&&t[e][i]){let a=o.test(n);a||(s={fld:e,valid:a,msg:"card invalid"})}i==="required"&&!n&&(s={fld:e,valid:!1,msg:`requerido ${e}`})})}}),s};export{f as a,g as i,m as v};
