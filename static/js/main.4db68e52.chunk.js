(this.webpackJsonpexpense_app=this.webpackJsonpexpense_app||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(13),n(14),n(2)),u=n(7),i=n(3),s=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(i.a)(Object(i.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(i.a)(Object(i.a)({},e),{},{transactions:[t.payload].concat(Object(u.a)(e.transactions))});default:return e}},m={transactions:[]},d=Object(a.createContext)(m),E=function(e){var t=e.children,n=Object(a.useReducer)(s,m),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},p=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Expense Tracker App"))},f=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount}));console.log(e);var t=e.reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h2",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},"$",t))},v=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},n)))},b=function(e){var t=e.transaction,n=t.amount<0?"-":"+",c=Object(a.useContext)(d).deleteTransaction;return r.a.createElement("div",null,r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,n,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return c(t.id)},className:"delete-btn"},"x")))},h=function(){var e=Object(a.useContext)(d).transactions;return console.log(e),r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(b,{key:e.id,transaction:e})}))))},x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useContext)(d).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add New Transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e10*Math.random()),text:n,amount:+i};m(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",vlaue:"text",onChange:function(e){return c(e.target.value)},placeholder:"Enter Text ...."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount",r.a.createElement("br",null),"(negative - expense, positive - income )"),r.a.createElement("input",{type:"number",vlaue:"amount",onChange:function(e){return s(e.target.value)},placeholder:"Enter amount ...."})),r.a.createElement("button",{className:"btn"},"Add Transaction")))};var O=function(){return r.a.createElement(E,null,r.a.createElement(p,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4db68e52.chunk.js.map