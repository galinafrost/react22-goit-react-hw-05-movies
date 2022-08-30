"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{1859:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(2982),a=r(8683),u=r(5861),i=r(885),c=r(7757),s=r.n(c),o=r(2791),p=r(501),l=r(6871),f=r(184),h=function(t){var e=t.onSubmit,r=(0,o.useState)(""),n=(0,i.Z)(r,2),a=n[0],u=n[1];return(0,f.jsxs)("form",{onSubmit:function(t){a&&(t.preventDefault(),e(a),u(""))},children:[(0,f.jsx)("input",{name:"search",value:a,onChange:function(t){var e=t.target.value;u(e)},type:"text",placeholder:"Search movies"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},d=r(6188),v=function(){var t=(0,o.useState)({items:[],loading:!1,error:null}),e=(0,i.Z)(t,2),r=e[0],c=e[1],v=(0,p.lr)(),m=(0,i.Z)(v,2),g=m[0],x=m[1],w=g.get("query"),y=(0,l.TH)();console.log(w),(0,o.useEffect)((function(){var t=function(){var t=(0,u.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loading:!0})})),t.next=4,(0,d.zi)(w);case 4:e=t.sent,r=e.results,c({items:(0,n.Z)(r),loading:!1,error:null}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({items:[],loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();w&&t()}),[w]);var b=(0,o.useCallback)((function(t){return x({query:t,page:1})}),[x]),j=r.items,k=r.loading,Z=r.error,_=j.map((function(t){var e;return(0,f.jsx)("div",{children:(0,f.jsx)("li",{children:(0,f.jsxs)(p.rU,{to:"/movies/".concat(t.id),state:{from:y},children:[(0,f.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"http://hypeava.ru/uploads/posts/2020-02/1580997108_3.jpg",alt:t.original_title}),(0,f.jsx)("p",{children:null!==(e=t.name)&&void 0!==e?e:t.title})]})},t.id)})})),S=j.length>0&&!k&&!Z,C=!Z&&!k&&w&&!j.length>0;return(0,f.jsxs)("div",{children:[(0,f.jsx)(h,{onSubmit:b}),k&&(0,f.jsx)("p",{children:"Making a list..."}),C&&(0,f.jsx)("p",{children:"There is no such movie - watch Stranger Things."}),S&&(0,f.jsx)("ul",{children:_})]})},m=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(v,{})})}},6188:function(t,e,r){r.d(e,{Hg:function(){return s},M1:function(){return d},Pg:function(){return p},tx:function(){return m},zi:function(){return f}});var n=r(5861),a=r(7757),u=r.n(a),i=r(4569),c=r.n(i)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ac60926f151e6a5963568dadf02e1e9a"}});function s(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/all/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:e,page:1}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=859.997434ce.chunk.js.map