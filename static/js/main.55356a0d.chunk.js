(this["webpackJsonpfrank-memory"]=this["webpackJsonpfrank-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),a=t(5),i=t.n(a),s=(t(10),t(3)),u=t(2),d=(t(11),t(12),t(0));function o(c){var e=c.card,t=c.handleChoice,n=c.flipped,r=c.disabled;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:n?"flipped":"",children:[Object(d.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(d.jsx)("img",{className:"back",src:"/img/cover.png",onClick:function(){r||t(e)},alt:"card back"})]})})}var j=[{src:"img/random-cat.png",matched:!1},{src:"img/proper-bud.png",matched:!1},{src:"img/offended-bud.png",matched:!1},{src:"img/cute-coop.png",matched:!1},{src:"img/big-tuna.png",matched:!1},{src:"img/slippery-coop.png",matched:!1}];var l=function(){var c=Object(n.useState)([]),e=Object(u.a)(c,2),t=e[0],r=e[1],a=Object(n.useState)(0),i=Object(u.a)(a,2),l=i[0],b=i[1],m=Object(n.useState)(null),f=Object(u.a)(m,2),p=f[0],O=f[1],h=Object(n.useState)(null),g=Object(u.a)(h,2),v=g[0],x=g[1],k=Object(n.useState)(!1),N=Object(u.a)(k,2),S=N[0],y=N[1],C=function(){var c=[].concat(j,j).sort((function(){return Math.random()-.5})).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));O(null),x(null),r(c),b(0)},w=function(c){p?x(c):O(c)};Object(n.useEffect)((function(){p&&v&&(y(!0),p.src===v.src?(r((function(c){return c.map((function(c){return c.src===p.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))})),E()):setTimeout((function(){return E()}),1e3))}),[p,v]);var E=function(){O(null),x(null),b((function(c){return c+1})),y(!1)};return Object(n.useEffect)((function(){C()}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Find the Bud"}),Object(d.jsx)("button",{onClick:C,children:"New Game"}),Object(d.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(d.jsx)(o,{card:c,handleChoice:w,flipped:c===p||c===v||c.matched,disabled:S},c.id)}))}),Object(d.jsxs)("p",{children:["Turns: ",l]})]})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.55356a0d.chunk.js.map