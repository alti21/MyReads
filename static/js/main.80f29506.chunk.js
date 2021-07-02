(this["webpackJsonpmy-reads"]=this["webpackJsonpmy-reads"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),o=n.n(r),s=(n(25),n(26),n(9)),i=n(3),u=n(6),l=n(1),d=function(e){var t=e.content,n=e.className,c=e.headingLevel;return Object(l.jsx)("div",{className:n,children:Object(l.jsx)(c,{children:t})})},j=n(7),b=function(e){var t=e.choices,n=e.label,a=e.onSelectChoice,r=e.currentShelf,o=e.choiceName,s=e.labelText,i=Object(c.useState)(!1),d=Object(u.a)(i,2),b=d[0],h=d[1],f=Object(c.useRef)(),O=function(e){f.current&&f.current.contains(e.target)?h(!0):h(!1)};return Object(c.useEffect)((function(){return document.addEventListener("mousedown",O),function(){document.removeEventListener("mousedown",O)}}),[]),Object(l.jsxs)("div",{className:"dropdown",ref:f,children:[Object(l.jsx)("button",{type:"button",className:"btn","aria-label":s,children:Object(l.jsx)(j.b,{})}),Object(l.jsxs)("div",{id:"myDropdown",className:"dropdown-content ".concat(b?"show":"hide"),children:[Object(l.jsx)("div",{className:"dropdown-label",children:n}),t.map((function(e,t){return Object(l.jsxs)("button",{className:"dropdown-choice",type:"button",onClick:function(){return a(e)},children:[Object(l.jsx)("span",{className:"check-mark",children:r===e?"\u2714":""}),o[e]]},t)}))]})]})};b.defaultProps={label:"Move to...",choiceName:{currentlyReading:"Currently Reading",wantToRead:"Want To Read",read:"Read",none:"None"}};var h=b,f=n(11),O="https://reactnd-books-api.udacity.com",p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var m={Accept:"application/json",Authorization:p},x=function(e){var t=e.book,n=e.reRender,a=Object(c.useState)("None"),r=Object(u.a)(a,2),o=r[0],s=r[1],i=Object(c.useState)({}),d=Object(u.a)(i,2),j=d[0],b=d[1],p=Object(c.useState)("None"),x=Object(u.a)(p,2),v=x[0],g=x[1],y=Object(c.useRef)(!1);return Object(c.useEffect)((function(){var e;y.current?function(e,t){return fetch("".concat(O,"/books/").concat(e.id),{method:"PUT",headers:Object(f.a)(Object(f.a)({},m),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))}(j,o).then((function(){g(o),n()})):((e=t.id,fetch("".concat(O,"/books/").concat(e),{headers:m}).then((function(e){return e.json()})).then((function(e){return e.book}))).then((function(e){g(e.shelf)})),y.current=!0)}),[o]),Object(l.jsxs)("div",{className:"book",children:[Object(l.jsx)("img",{src:void 0!==t.imageLinks?t.imageLinks.thumbnail:null,alt:t.title,className:"book-thumbnail"}),Object(l.jsx)(h,{choices:["currentlyReading","wantToRead","read","none"],onSelectChoice:function(e){var n;n=t,s(e),b(n)},label:"Move to...",currentShelf:v,choiceName:{currentlyReading:"Currently Reading",wantToRead:"Want To Read",read:"Read",none:"None"},labelText:"Choice Dropdown"}),Object(l.jsx)("div",{className:"book-title",children:t.title}),Object(l.jsx)("div",{className:"book-authors",children:void 0!==t.authors?t.authors.map((function(e,t){return Object(l.jsx)("div",{children:e},t)})):null})]})},v=function(e){var t=e.data,n=e.shelfType,c=e.reRender,a=function(e){return e};return"none"===n?Object(l.jsx)("div",{className:"book-list",children:t!==[]?t.map((function(e){return Object(l.jsx)(x,{book:e,toggleDropDown:a,reRender:function(){return c()}},e.id)})):null}):Object(l.jsx)("div",{className:"book-list",children:t!==[]?t.map((function(e){return e.shelf===n?Object(l.jsx)(x,{book:e,toggleDropDown:a,reRender:function(){return c()}},e.id):null})):null})};v.defaultProps={shelfType:"none",reRender:function(){}};var g=v,y=function(e){var t=e.data,n=e.shelf,c=e.reRender;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{content:n.title,className:"shelf-header",headingLevel:"h2"}),Object(l.jsx)("hr",{}),Object(l.jsx)(g,{data:t,shelfType:n.id,reRender:function(){return c()}})]})},N=function(e){var t=e.children,n=e.labelText;return Object(l.jsx)("div",{children:Object(l.jsxs)("button",{type:"button",className:"btn addbtn","aria-label":n,children:[Object(l.jsx)(j.c,{}),t]})})},R=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(u.a)(r,2),i=o[0],j=o[1];return Object(c.useEffect)((function(){var e=!1;return fetch("".concat(O,"/books"),{headers:m}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(t){!e&&t.length>0?a(t):e||a([])})),function(){e=!0}}),[i]),Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{content:"MyReads",className:"App-header",headingLevel:"h1"}),[{title:"Currently Reading",id:"currentlyReading"},{title:"Want To Read",id:"wantToRead"},{title:"Read",id:"read"}].map((function(e){return Object(l.jsx)(y,{data:n,shelf:e,reRender:function(){j(!i)}},e.id)})),Object(l.jsx)(s.b,{to:"/MyReads/search",children:Object(l.jsx)(N,{labelText:"Search"})})]})},k=function(e){var t=e.type,n=e.placeholder,c=e.inputClassName,a=e.iconClassName,r=e.icon,o=e.handleChange,i=e.searchValue;return Object(l.jsxs)("div",{children:[Object(l.jsx)(s.b,{to:"/MyReads",children:Object(l.jsx)("span",{className:a,children:r})}),Object(l.jsx)("input",{type:t,value:i,placeholder:n,className:c,onChange:o})]})};k.defaultProps={placeholder:"Search",inputClassName:"search-bar",iconClassName:"input-arrow",icon:Object(l.jsx)(j.a,{})};var S=k,T=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),s=o[0],i=o[1];return Object(c.useEffect)((function(){var e=!1,t=setTimeout((function(){n.length>0&&!e?function(e){return fetch("".concat(O,"/search"),{method:"POST",headers:Object(f.a)(Object(f.a)({},m),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))}(n).then((function(t){t.length>0&&!e?i(t):e||i([])})):e||i([])}),1e3);return function(){clearTimeout(t),e=!0}}),[n]),Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{type:"text",searchValue:n,placeholder:"Search for a book",icon:Object(l.jsx)(j.a,{}),handleChange:function(e){a(e.target.value)}}),Object(l.jsx)(g,{data:s,shelfType:"none"})]})},C=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/MyReads/",component:R}),Object(l.jsx)(i.a,{path:"/MyReads/search",component:T})]})})};var w=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(C,{})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),L()}},[[33,1,2]]]);
//# sourceMappingURL=main.80f29506.chunk.js.map