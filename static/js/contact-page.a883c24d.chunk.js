(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(35);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},109:function(t,e,n){"use strict";var r,a,o,c=n(114),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){o=!1}function u(t){if(t){if(t!==r){if(t.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==s&&(r=s,i())}function l(){return o||(o=function(){r||u(s);for(var t,e=r.split(""),n=[],a=c.nextValue();e.length>0;)a=c.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||s},characters:function(t){return u(t),r},seed:function(t){c.seed(t),a!==t&&(i(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},112:function(t,e,n){"use strict";t.exports=n(113)},113:function(t,e,n){"use strict";var r=n(109),a=n(115),o=n(119),c=n(120)||0;function s(){return a(c)}t.exports=s,t.exports.generate=s,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=o},114:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},115:function(t,e,n){"use strict";var r,a,o=n(116);n(109);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=o(7),e+=o(t),r>0&&(e+=o(r)),e+=o(n)}},116:function(t,e,n){"use strict";var r=n(109),a=n(117),o=n(118);t.exports=function(t){for(var e,n=0,c="";!e;)c+=o(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},117:function(t,e,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(t){return a.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},118:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),o="";;)for(var c=t(a),s=a;s--;)if((o+=e[c[s]&r]||"").length===+n)return o}},119:function(t,e,n){"use strict";var r=n(109);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},120:function(t,e,n){"use strict";t.exports=0},121:function(t,e,n){t.exports={form:"Form_form__3nrGf",labelForm:"Form_labelForm__BfEcL",inputForm:"Form_inputForm__1Z-Af",formBtn:"Form_formBtn__KUW6z"}},122:function(t,e,n){t.exports={contactsList:"Contacts_contactsList__2PVXH",contactItem:"Contacts_contactItem__3CuHe",contactTel:"Contacts_contactTel__3YwC3",button:"Contacts_button__25YSl",btn_redact:"Contacts_btn_redact__3J9mU"}},123:function(t,e,n){t.exports={findLabel:"Filter_findLabel__31kgd",inputForm:"Filter_inputForm__2pQZB"}},124:function(t,e,n){t.exports={container:"App_container__3-rOr",title:"App_title__2QvHB",titleContacts:"App_titleContacts__1aG_V",phonebook:"App_phonebook__1C4op"}},128:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r={};n.r(r),n.d(r,"visibleContacts",(function(){return s}));var a=n(108),o=n(0),c=n(11),s=function(t){var e=t.contacts;return e.items.filter((function(t){return t.name.toLowerCase().trim().includes(e.filter.toLowerCase().trim())}))},i=n(29),u=(n(37),n(9)),l=n(112),f=n.n(l),b=n(36),m=(n(54),n(121)),d=n.n(m),p=n(1);function h(t){var e=Object(o.useState)(""),n=Object(a.a)(e,2),r=n[0],s=n[1],i=Object(o.useState)(""),l=Object(a.a)(i,2),m=l[0],h=l[1],j=Object(o.useState)(!1),x=Object(a.a)(j,2),_=x[0],v=x[1],O=Object(u.c)((function(t){return t.contacts.items})),g=Object(u.b)(),C=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(v(!1),n){case"name":s(r);break;case"number":h(r);break;default:return}},w=function(){s(""),h("")};return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:f.a.generate(),name:r,number:m};g(c.addContact(e)),w()},className:d.a.form,children:[Object(p.jsxs)("label",{className:d.a.labelForm,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",value:r,onChange:C,onBlur:function(t){O.find((function(e){return e.name.toLowerCase()===t.currentTarget.value.toLowerCase()}))&&(v(!0),b.b.error("".concat(t.currentTarget.value," is already in contacts.")))},className:d.a.inputForm,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:d.a.labelForm,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",value:m,onChange:C,disabled:_,className:d.a.inputForm,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",disabled:_,className:d.a.formBtn,children:"Add contact"})]})}var j=n(122),x=n.n(j);var _=function(){var t=Object(u.c)(r.visibleContacts),e=Object(u.b)();return Object(o.useEffect)((function(){e(c.fetchContacts())}),[e]),Object(p.jsx)("ul",{className:x.a.contactsList,children:t.map((function(t){var n=t.name,r=t.number,a=t.id;return Object(p.jsxs)("li",{className:x.a.contactItem,children:[n,":",Object(p.jsx)("span",{className:x.a.contactTel,children:r}),Object(p.jsx)("button",{onClick:function(){return e(c.deleteContact(a))},className:x.a.button,children:"Delete"}),Object(p.jsx)("button",{className:x.a.btn_redact})]},a)}))})},v=n(123),O=n.n(v),g=function(){var t=Object(u.c)((function(t){return t.filter})),e=Object(u.b)();return Object(p.jsxs)("label",{className:O.a.findLabel,children:["Find contact by name",Object(p.jsx)("input",{type:"text",name:"name",value:t,onChange:function(t){return e(Object(i.a)(t.target.value))},className:O.a.inputForm,onBlur:function(){return e(Object(i.b)())}})]})},C=n(124),w=n.n(C);function y(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:w.a.container,children:Object(p.jsxs)("div",{className:w.a.phonebook,children:[Object(p.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(p.jsx)(h,{}),Object(p.jsx)("h2",{className:w.a.titleContacts,children:"Contacts"}),Object(p.jsx)(g,{}),Object(p.jsx)(_,{})]})})})}}}]);
//# sourceMappingURL=contact-page.a883c24d.chunk.js.map