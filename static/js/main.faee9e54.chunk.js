(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),s=(n(22),n(10)),i=n(11),l=n(14),u=n(12),d=n(15),m=n(13),h=n.n(m),p=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,e.title.rendered),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content.rendered}}))},w=(n(43),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={posts:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.a.get("".concat("https://www.arcdisco.co.uk/wp-json/wp/v2/posts"),{params:{_sort:"createdAt:desc"}}).then(function(t){e.setState({posts:t.data})}).catch(function(e){console.log("An error occured:",e)})}},{key:"render",value:function(){var e=this.state.posts;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"c-header"},o.a.createElement("h1",null,"Welcome"),e.map(function(e){return o.a.createElement(p,Object.assign({key:e.id},e))})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.faee9e54.chunk.js.map