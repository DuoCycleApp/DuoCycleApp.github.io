(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-019a1696":"3872c6e8","chunk-19ae6fc2":"4ace0908","chunk-41149209":"45d93bb1","chunk-4fbd9a46":"71611242","chunk-512429d8":"d7b2ca36","chunk-71e4e8ab":"503a45fe","chunk-78758f08":"c4375652"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-019a1696":1,"chunk-19ae6fc2":1,"chunk-41149209":1,"chunk-4fbd9a46":1,"chunk-512429d8":1,"chunk-71e4e8ab":1,"chunk-78758f08":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-019a1696":"2c656054","chunk-19ae6fc2":"01151809","chunk-41149209":"c214e148","chunk-4fbd9a46":"973a4299","chunk-512429d8":"65b49886","chunk-71e4e8ab":"a384611a","chunk-78758f08":"98b14d4e"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"292d":function(e,t,n){},"328e":function(e,t,n){"use strict";var r=n("292d"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Oswald:300,500&display=swap",rel:"stylesheet"}}),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/",exact:""}},[e._v("Home")]),n("router-link",{attrs:{to:"/features"}},[e._v("Features")]),n("router-link",{attrs:{to:"/privacy"}},[e._v("Privacy")]),n("router-link",{attrs:{to:"/support"}},[e._v("Support")]),n("router-link",{attrs:{to:"/download"}},[e._v("Download")])],1),n("transition",{attrs:{name:"fade"}},[n("router-view")],1),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("© 2019-2021 Patryk Pekala. All Rights Reserved.")]),n("p",[e._v(" Apple, the Apple logo and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc. ")])])}],c=(n("034f"),n("2877")),u={},i=Object(c["a"])(u,a,o,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Welcome to DuoCycle")]),r("img",{attrs:{id:"hero",alt:"Apple Watch and iPhone with the DuoCycle apps",src:n("891d")}}),r("p",{staticClass:"description"},[e._v(" DuoCycle is a novel fitness app that tracks your rides with Apple Watch and shows all of your workout data live on iPhone. Your Apple Watch and iPhone working as a perfect Duo, designed with cyclists in mind. ")]),r("a",{attrs:{href:"https://apps.apple.com/app/id1480010951"}},[r("img",{attrs:{id:"appstore",alt:"App Store Link",src:n("67c9")}})])])}],f={name:"home"},h=f,m=(n("328e"),Object(c["a"])(h,p,d,!1,null,"103aafad",null)),v=m.exports;r["a"].use(l["a"]);var k=[{path:"/",name:"home",component:v},{path:"/features",name:"features",component:function(){return n.e("chunk-19ae6fc2").then(n.bind(null,"ae1c"))},children:[{path:"",component:function(){return n.e("chunk-41149209").then(n.bind(null,"40a9"))}},{path:"data",component:function(){return n.e("chunk-78758f08").then(n.bind(null,"f229"))}},{path:"analysis",component:function(){return n.e("chunk-512429d8").then(n.bind(null,"dc3f"))}}]},{path:"/privacy",name:"privacy",component:function(){return n.e("chunk-4fbd9a46").then(n.bind(null,"6f9f"))}},{path:"/support",name:"support",component:function(){return n.e("chunk-71e4e8ab").then(n.bind(null,"1deb"))}},{path:"/download",name:"download",component:function(){return n.e("chunk-019a1696").then(n.bind(null,"3971"))}}],b=new l["a"]({routes:k}),g=b;r["a"].config.productionTip=!1,new r["a"]({router:g,render:function(e){return e(s)}}).$mount("#app")},"67c9":function(e,t,n){e.exports=n.p+"img/AppStoreBadge.1b108b96.png"},"85ec":function(e,t,n){},"891d":function(e,t,n){e.exports=n.p+"img/Hero-Home.5dc47ddc.png"}});
//# sourceMappingURL=app.17e1345a.js.map