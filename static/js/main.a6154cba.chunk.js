(this.webpackJsonpquestionsecond=this.webpackJsonpquestionsecond||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),r=n.n(a),i=(n(11),n.p,n(12),n(4)),o=n.n(i),j=n(6),u=n(2),l=n(0),d=function(e){var t=e.showPerPage,n=e.onPageChange,s=(e.total,Object(c.useState)(1)),a=Object(u.a)(s,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){var e=t*r;n(e-t,e)}),[r]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return i(r-1)},children:"Previous"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return i(r+1)},children:"Next"})]})})},b=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(1),r=Object(u.a)(a,2),i=r[0],b=(r[1],Object(c.useState)({star:0,end:i})),h=Object(u.a)(b,2),O=h[0],f=h[1],m=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://reqres.in/api/users?page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c.data),console.log(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){m()}),[]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:n.slice(O.star,O.end).map((function(e,t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(l.jsx)("img",{src:e.avatar,className:"card-img-top",alt:"..."}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:e.first_name}),Object(l.jsx)("p",{className:"card-text",children:e.email})]})]})},e.index)})}))})}),Object(l.jsx)(d,{showPerPage:i,onPageChange:function(e,t){f({start:e,end:t})},total:n.length})]})},h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.a6154cba.chunk.js.map