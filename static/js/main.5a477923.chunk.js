(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(3),o=s.n(r),c=s(4),i=s(5),a=s(8),l=s(6),u=s(7),b=s(1),h=(s(13),s(14),s(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var p=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.resetGoods=function(){return t.setState({sortType:n.NONE,isReversed:!1})},t.reverseGoods=function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlphabetically=function(){return t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){return t.setState({sortType:n.LENGTH})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,r=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return o.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return n.NONE}})),r&&o.reverse(),o}(d,{sortType:e,isReversed:s});return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:"button is-info ".concat(e===n.ALPHABET?"":"is-light"),onClick:this.sortByAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"button is-success ".concat(e===n.LENGTH?"":"is-light"),onClick:this.sortByLength,children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:"button is-warning ".concat(s?"":"is-light"),onClick:this.reverseGoods,children:"Reverse"}),(e!==n.NONE||s)&&Object(h.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.resetGoods,children:"Reset"})]}),Object(h.jsx)("ul",{children:r.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(b.Component);o.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5a477923.chunk.js.map