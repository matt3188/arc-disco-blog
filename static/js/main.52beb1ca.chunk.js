(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(397)},365:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);a(160);var n=a(1),r=a.n(n),c=a(79),o=a.n(c),l=a(399),s=(a(365),a(53)),i=a(54),m=a(56),u=a(55),d=a(57),p=a(401),E=a(111),f=a(62),h=a.n(f),g="".concat("https://www.arcdisco.co.uk","/wp-json/wp/v2"),v=a(398),b=function(){return r.a.createElement("header",{className:"c-header"},r.a.createElement("div",{className:"container"},r.a.createElement(v.a,{to:"/",className:"mr-4"},"Home"),r.a.createElement("h1",null,"Welcome to ARC Disco's blog")))},N=a(400),w=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"removeUnicode",value:function(e){return e.indexOf("&#8217;")>=0?this.removeUnicode(e.replace("&#8217;","'")):e.replace("<p>","").replace("[&hellip;]</p>","...")}},{key:"render",value:function(){var e=this.removeUnicode(this.props.excerpt.rendered),t=this.props.acf.feature_image;return r.a.createElement("div",{className:"card mb-3"},t&&r.a.createElement("img",{src:t.url,className:"card-img-top",alt:""}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},this.props.title.rendered),r.a.createElement("div",{className:"card-text",dangerouslySetInnerHTML:{__html:e}}),r.a.createElement(v.a,{to:"/".concat(this.props.id)},"Read more")))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.posts;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card-columns"},t?"Loading...":a.map(function(e){return r.a.createElement(w,Object.assign({key:e.id},e))})))))}}]),t}(n.Component),O=function(e){var t=e.post,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},a?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 offset-md-1 col-lg-8 offset-lg-2"},r.a.createElement("p",null,"Loading..."))):r.a.createElement("div",null,r.a.createElement("h1",null,t.title.rendered),t.acf.feature_image&&r.a.createElement("img",{src:t.acf.feature_image.url,className:"card-img-top mt-4 mb-4",alt:""}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content.rendered}}))))},y=function(e){var t=e.loading,a=e.posts;return r.a.createElement("div",{className:"route-section"},r.a.createElement(N.a,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(j,Object.assign({},e,{loading:t,posts:a}))}}),r.a.createElement(p.a,{path:"/:id",render:function(e){return r.a.createElement(O,Object.assign({},e,{loading:t,post:(n=e.match.params.id,a.filter(function(e){return n===e.id.toString()})[0])}));var n}})))},k=function(e){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,"Links"),r.a.createElement("ul",null,e.pages.map(function(e){return 0===e.parent&&r.a.createElement("li",{key:e.title.rendered},r.a.createElement("a",{href:e.link},e.title.rendered))}))))))},_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],pages:[],loading:!0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.a.get("".concat(g,"/posts"),{params:{_sort:"createdAt:desc"}}).then(function(e){return e.data}).catch(function(e){console.log("An error occured:",e)}).then(function(t){return e.setState({posts:t,loading:!1})}),h.a.get("".concat(g,"/pages")).then(function(e){return e.data}).catch(function(e){console.log("An error occured:",e)}).then(function(t){return e.setState({pages:t})})}},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.pages,n=e.loading;return r.a.createElement("div",{className:"app"},r.a.createElement(b,null),r.a.createElement(p.a,{render:function(e){var a=e.location;return r.a.createElement(E.TransitionGroup,null,r.a.createElement(E.CSSTransition,{key:a.key,classNames:"fade",timeout:300},r.a.createElement(y,{posts:t,loading:n})))}}),r.a.createElement(k,{pages:a}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{basename:"/"},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[159,2,1]]]);
//# sourceMappingURL=main.52beb1ca.chunk.js.map