(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),s=a(1),i=a.n(s),o=a(2),m=a(3),u=a(4),v=a.n(u),f="http://localhost:4000",p=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:128,a="".concat(f,"/affine/key?ring=").concat(t),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r,c,l,s,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,a=o.length>1&&void 0!==o[1]?o[1]:0,n=o.length>2&&void 0!==o[2]?o[2]:128,r="".concat(f,"/affine/verify?a=").concat(t,"&b=").concat(a,"&ring=").concat(n),e.next=6,fetch(r);case 6:return c=e.sent,e.next=9,c.json();case 9:return l=e.sent,s=l.resp,e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(i.a.mark((function e(t,a,n,r){var c,l,s,o,m,u,p=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=p.length>4&&void 0!==p[4]?p[4]:"encrypt",l="".concat(f,"/affine/file/").concat(c),(s=new FormData).append("a",t),s.append("b",a),s.append("ring",n),s.append("file",r),o="encrypt"===c?r.name.split(".")[0]+".aff.txt":r.name.split(".")[0]+".txt",e.next=10,fetch(l,{method:"POST",body:s});case 10:return m=e.sent,e.next=13,m.blob();case 13:u=e.sent,console.log(u),v.a.saveAs(u,o);case 16:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),E=function(e){var t=e.setKey,a=Object(n.useState)(["0","0","256"]),c=Object(m.a)(a,2),l=Object(m.a)(c[0],3),s=l[0],u=l[1],v=l[2],f=c[1],b=Object(n.useState)(!1),E=Object(m.a)(b,2),h=E[0],N=E[1],y=Object(n.useState)(["",""]),g=Object(m.a)(y,2),x=Object(m.a)(g[0],2),k=x[0],w=x[1],j=g[1];Object(n.useEffect)((function(){t([s,u,v])}),[s,u,v,t]);var O=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;"a"===t?f([a,u,v]):"b"===t?f([s,a,v]):"ring"===t&&f([s,u,a])},F=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d(s,u,v);case 3:a=e.sent,j(3===a?["is-valid","is-valid"]:2===a?["is-valid","is-invalid"]:1===a?["is-invalid","is-valid"]:["is-invalid","is-invalid"]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(i.a.mark((function e(a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),h){e.next=10;break}return e.next=4,p(v);case 4:n=e.sent,r=n.ok,c=n.key,r?(t(c),f(c),N(!0)):window.alert("No se pudo generar una llave"),e.next=11;break;case 10:N(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",null,r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col-sm-1"},r.a.createElement("label",{className:"my-1 mr-1",htmlFor:"a"},"A")),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"number",id:"a",name:"a",value:s,onChange:O,className:"form-control ".concat(k)}))),r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col-sm-1"},r.a.createElement("label",{className:"my-1 mr-2",htmlFor:"b"},"B")),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"number",id:"b",name:"b",value:u,onChange:O,className:"form-control ".concat(w)}))),r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col-1"},r.a.createElement("input",{type:"checkbox",id:"affAuto",name:"affAuto",onChange:C,checked:h})),r.a.createElement("div",{className:"col"},r.a.createElement("label",{className:"ml-1",htmlFor:"affAuto"},"Generar automaticamente"))),r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("label",{className:"ml-1",htmlFor:"ring"},"Anillo")),r.a.createElement("div",{className:"col"},r.a.createElement("select",{className:"custom-select",id:"ring",name:"ring",value:v,onChange:O},r.a.createElement("option",{value:"256"},"256"),r.a.createElement("option",{value:"128"},"128"),r.a.createElement("option",{value:"97"},"97"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"239"},"239"),r.a.createElement("option",{value:"15345"},"12345"),r.a.createElement("option",{value:"99991"},"99991"),r.a.createElement("option",{value:"104729"},"104729")))),r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn  btn-primary btn-block",onClick:F},"Validar llave"))))},h=function(e){var t=e.setFile,a=e.handleFetchService,n=function(e){e.preventDefault(),"encFile"===e.target.name?a("encrypt"):"decFile"===e.target.name&&a("decrypt")};return r.a.createElement("form",null,r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{className:"pt-2",type:"file",name:"file",onChange:function(e){e.preventDefault(),"file"===e.target.name&&t(e.target.files[0])}})),r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-primary btn-block",name:"encFile",onClick:n},"Cifrar archivo")),r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-danger btn-block",name:"decFile",onClick:n},"Descifrar archivo"))))},N=function(){var e=Object(n.useState)(["","",""]),t=Object(m.a)(e,2),a=Object(m.a)(t[0],3),c=a[0],l=a[1],s=a[2],u=t[1],v=Object(n.useState)({}),f=Object(m.a)(v,2),p=f[0],N=f[1],y=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(c,l,s);case 2:if(e.t0=e.sent,3===e.t0){e.next=6;break}return window.alert("La llave es incorrecta, intenta con otro valor"),e.abrupt("return");case 6:"string"===typeof p.name?b(c,l,s,p,t):window.alert("Primero debes seleccionar un archivo para ".concat(t));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-3 mt-2 mb-2"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header text-center bg-dark text-white"},"Modificar llave"),r.a.createElement("div",{className:"card-body"},r.a.createElement(E,{setKey:u})))),r.a.createElement("div",{className:"col-9 mt-2 mb-2"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header bg-dark text-white text-center"},"Affine"),r.a.createElement("div",{className:"card-body"},r.a.createElement(h,{setFile:N,handleFetchService:y})))))},y="http://localhost:4000",g=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(y,"/vigenere/key"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.key);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",a="".concat(y,"/vigenere/verify?key=").concat(t),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,!r.ok){e.next=11;break}return e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(i.a.mark((function e(t,a){var n,r,c,l,s,o,m=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>2&&void 0!==m[2]?m[2]:"encrypt",r="".concat(y,"/vigenere/file/").concat(n),(c=new FormData).append("key",t),c.append("file",a),l="encrypt"===n?a.name.split(".")[0]+".vig.txt":a.name.split(".")[0]+".txt",e.next=8,fetch(r,{method:"POST",body:c});case 8:return s=e.sent,e.next=11,s.blob();case 11:o=e.sent,v.a.saveAs(o,l);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=function(e){var t=e.setKey,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],s=c[1],u=Object(n.useState)(!1),v=Object(m.a)(u,2),f=v[0],p=v[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),E=b[0],h=b[1],N=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x(l);case 3:a=e.sent,h(a?"is-valid":"is-invalid");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),f){e.next=10;break}return e.next=4,g();case 4:n=e.sent,t(n),s(n),p(!0),e.next=11;break;case 10:p(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",null,r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col-2"},r.a.createElement("label",{className:"my-1",htmlFor:"key"},"Key")),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",id:"key",name:"key",value:l,onChange:function(e){e.preventDefault();var a=e.target.name,n=e.target.value;"key"===a&&(t(n),s(n))},className:"form-control ".concat(E)}))),r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col-1"},r.a.createElement("input",{type:"checkbox",id:"vigAuto",name:"vigAuto",onChange:y,checked:f})),r.a.createElement("div",{className:"col"},r.a.createElement("label",{htmlFor:"vigAuto",className:"ml-1 pb-1"},"Generar automaticamente"))),r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:N,className:"btn btn-primary btn-block"},"Verificar"))))},j=function(e){var t=e.setFile,a=e.handleFetchService,n=function(e){e.preventDefault(),"encFile"===e.target.name?a("encrypt"):"decFile"===e.target.name&&a("decrypt")};return r.a.createElement("form",null,r.a.createElement("div",{className:"form-row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{className:"pt-2",type:"file",name:"file",onChange:function(e){e.preventDefault(),"file"===e.target.name&&t(e.target.files[0])}})),r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-primary btn-block",name:"encFile",onClick:n},"Cifrar archivo")),r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-danger btn-block",name:"decFile",onClick:n},"Descifrar archivo"))))},O=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),s=Object(m.a)(l,2),u=s[0],v=s[1],f=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a);case 2:if(e.sent){e.next=5;break}return window.alert("La llave que es no es valida, prueba con otros valores"),e.abrupt("return");case 5:if("string"!==typeof u.name){e.next=9;break}k(a,u,t),e.next=11;break;case 9:return window.alert("Primero debes seleccionar un archivo"),e.abrupt("return");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-3 mt-2 mb-2"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header bg-dark text-white text-center"},"Llave"),r.a.createElement("div",{className:"card-body"},r.a.createElement(w,{setKey:c})))),r.a.createElement("div",{className:"col mt-2 mb-2"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header bg-dark text-white text-center"},"Vigenere"),r.a.createElement("div",{className:"card-body"},r.a.createElement(j,{setFile:v,handleFetchService:f})))))},F=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-3 mt-2",id:"header"},r.a.createElement("h2",{className:"text-center"},"HW_01")),r.a.createElement("div",{className:"row",id:"affine"},r.a.createElement(N,null)),r.a.createElement("div",{className:"row",id:"vigenere"},r.a.createElement(O,null)))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.abeffbe0.chunk.js.map