(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=t(2),i=function(e){var n=e.person,t=e.removeThisPerson;return r.a.createElement("div",null,n.name," ",n.number,r.a.createElement("button",{onClick:t,id:n.id+"button"},"REMOVE"))},s=t(3),l=t.n(s),m="/api/persons",f=function(){return l.a.get(m).then((function(e){return e.data}))},d=function(e){return l.a.post(m,e).then((function(e){return e.data}))},h=function(e,n){return l.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return l.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.newFind,t=e.persons,a=e.setPersons,o=e.setMessage,u=e.setError,c=n?t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):t;return r.a.createElement("div",null,c.map((function(e){return r.a.createElement(i,{key:e.id,person:e,removeThisPerson:function(){return n=e.id,r=e.name,void(window.confirm("Remove '".concat(r,"'?"))&&(b(n).then((function(){a(t.filter((function(e){return e.name!==r})))})).catch((function(e){u(!0),o("Information of '".concat(r,"' has already been removed from server")),setTimeout((function(){o(null),u(!1)}),4e3)})),o("Removed '".concat(r,"' from phonebook")),setTimeout((function(){o(null)}),3e3)));var n,r}})})))},E=t(4),p=function(e){var n=e.persons,t=e.setPersons,o=e.setMessage,u=e.setError,i=Object(a.useState)(""),s=Object(c.a)(i,2),l=s[0],m=s[1],f=Object(a.useState)(""),b=Object(c.a)(f,2),v=b[0],p=b[1],w=function(){d({name:l,number:v}).then((function(e){t(n.concat(e)),m(""),p(""),o("Added '".concat(l,"' to the phonebook")),setTimeout((function(){o(null)}),4e3)})).catch((function(e){u(!0),o(e.response.data.error),setTimeout((function(){o(null),u(!1)}),4e3)}))},g=function(){var e=n.find((function(e){return e.name===l})),a=Object(E.a)(Object(E.a)({},e),{},{number:v});h(e.id,a).then((function(e){t(n.map((function(n){return n.name!==l?n:e}))),o("Edited '".concat(l,"' phonenumber to new one '").concat(v,"'")),setTimeout((function(){o(null)}),4e3)})).catch((function(e){u(!0),o("Information of '".concat(l,"' has already been removed from server")),setTimeout((function(){o(null),u(!1)}),4e3)}))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.find((function(e){return e.name===l}))?window.confirm("".concat(l,"' is already in the phonebook. \n        Want to replace the old number with the new one?"))?g():window.alert("Nothing has been changed"):w()}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:l,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:v,onChange:function(e){return p(e.target.value)}})),r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.setNewFind,t=e.newFind;return r.a.createElement("div",null,"find: ",r.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},g=function(e){var n=e.message,t=e.errorMes;return null===n?null:!0===t?r.a.createElement("div",{className:"error"},n):r.a.createElement("div",{className:"message"},n)},O=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),i=Object(c.a)(u,2),s=i[0],l=i[1],m=Object(a.useState)(null),d=Object(c.a)(m,2),h=d[0],b=d[1],E=Object(a.useState)(!1),O=Object(c.a)(E,2),j=O[0],k=O[1];return Object(a.useEffect)((function(){f().then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:h,errorMes:j}),r.a.createElement(w,{setNewFind:l,newFind:s}),r.a.createElement("h2",null,"add a new person"),r.a.createElement(p,{persons:t,setPersons:o,setMessage:b,setError:k}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{newFind:s,persons:t,setPersons:o,setMessage:b,setError:k}))};t(37);u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1f4f4bb5.chunk.js.map