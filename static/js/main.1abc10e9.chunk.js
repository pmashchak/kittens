(this.webpackJsonpkittens=this.webpackJsonpkittens||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),o=n(3),a=n.n(o),i=(n(13),n(4)),h=n(5),l=n(7),u=n(6),d=(n(14),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{alt:"hero",src:"https://robohash.org/".concat(e.monster.id,"?set=set4&size=150x150")}),Object(c.jsx)("h2",{children:e.monster.name}),Object(c.jsx)("p",{children:e.monster.email})]})}),j=(n(15),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(c.jsx)(d,{monster:e},e.id)}))})}),m=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(c.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"componentDidMount",value:function(){var e=this;console.log("mount"),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{placeholder:"search kittens",handleChange:this.handleChange}),Object(c.jsx)("h1",{children:"Kittens"}),Object(c.jsx)(j,{monsters:s})]})}}]),n}(r.a.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.1abc10e9.chunk.js.map