(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(54)},29:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=(a(29),a(6)),s=a(7),i=a(9),m=a(8),d=a(10),u=a(57),p=a(56),h=a(13),f=a.n(h),g="https://www.arcdisco.co.uk/wp-json/wp/v2/posts",v=a(55),E=function(){return r.a.createElement("header",{className:"c-header"},r.a.createElement("div",{className:"container"},r.a.createElement(v.a,{to:"/",className:"mr-4"},"Home"),r.a.createElement("h1",null,"Welcome to ARC Disco's blog")))},b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"removeUnicode",value:function(e){return e.indexOf("&#8217;")>=0?this.removeUnicode(e.replace("&#8217;","'")):e.replace("<p>","").replace("[&hellip;]</p>","...")}},{key:"render",value:function(){var e=this.removeUnicode(this.props.excerpt.rendered),t=this.props.acf.feature_image;return r.a.createElement("div",{className:"card mb-4"},t&&r.a.createElement("img",{src:t.url,className:"card-img-top",alt:""}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},this.props.title.rendered),r.a.createElement("div",{className:"card-text",dangerouslySetInnerHTML:{__html:e}}),r.a.createElement(v.a,{to:"/".concat(this.props.id)},"Read more")))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.posts;return console.log(t),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 offset-md-1 col-lg-8 offset-lg-2"},t?"Loading...":a.map(function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}))))}}]),t}(n.Component),j=function(e){var t=e.post,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 offset-md-1 col-lg-8 offset-lg-2"},console.log(t),a?"Loading...":r.a.createElement("div",null,r.a.createElement("h1",null,t.title.rendered),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content.rendered}}))))))},O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],loading:!0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("".concat(g),{params:{_sort:"createdAt:desc"}}).then(function(e){return e.data}).catch(function(e){console.log("An error occured:",e)}).then(function(t){return e.setState({posts:t,loading:!1})})}},{key:"getPostById",value:function(e){return this.state.posts.filter(function(t){return e===t.id.toString()})[0]}},{key:"render",value:function(){var e=this,t=this.state,a=t.posts,n=t.loading;return console.log(n),r.a.createElement(u.a,{basename:"/arc-disco-blog/"},r.a.createElement("div",{className:"app"},r.a.createElement(E,null),r.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(w,Object.assign({},e,{loading:n,posts:a}))}}),r.a.createElement(p.a,{path:"/:id",render:function(t){return r.a.createElement(j,Object.assign({},t,{loading:n,post:e.getPostById(t.match.params.id)}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.1e445f0f.chunk.js.map