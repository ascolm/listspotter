(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){n(47).config(),e.exports={clientId:"decae5e905644494a2de08b59116f140",redirectUri:"http://listspotter.tech/main",serverBaseUrl:"http://listspotter.tech"}},46:function(e,t,n){},50:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(21),s=n.n(a),i=(n(46),"https://accounts.spotify.com/authorize"),o=n(29),u={client_id:o.clientId,response_type:"code",redirect_uri:o.redirectUri,scope:"user-library-read user-follow-read user-follow-modify playlist-modify-public"};var l,d=(l=u,"".concat(i,"?client_id=").concat(l.client_id,"&response_type=").concat(l.response_type,"&redirect_uri=").concat(l.redirect_uri,"&scope=").concat(encodeURIComponent(u.scope))),j=(n(50),n.p+"static/media/Spotify_Logo_RGB_Green.0c4ae91b.png"),f=n(0),b=function(){return Object(f.jsx)("div",{className:"login-container",children:Object(f.jsxs)("div",{className:"login-content",children:[Object(f.jsx)("h1",{children:"Listspotter."}),Object(f.jsxs)("p",{children:["Create playlists from your saved songs in ",Object(f.jsx)("img",{className:"spotify-logo",src:j,alt:""})," using intuitive genre filters."]}),Object(f.jsx)("a",{href:d,className:"button-login",children:"LOGIN"})]})})},p=n(3),h=n.n(p),O=n(7),x=n(6),m=n(4),v=(n(53),n(54),function(e){var t=e.genreName,n=e.artistCount,r=e.selected,c=e.selectHandler;return Object(f.jsxs)("a",{className:"genre-item-container"+(r?" selected":""),onClick:function(){c(t)},children:[t," ",r?"":Object(f.jsx)("span",{className:"artist-count",children:" +"+n+" artist"+(n>1?"s":"")})]})});function g(e,t){var n=new RegExp(e,"ig");return Object.entries(t).filter((function(e){var t=Object(x.a)(e,2),r=t[0];t[1];return r.match(n)})).reduce((function(e,t){var n=Object(x.a)(t,2),r=n[0],c=n[1];return e[r]=c,e}),{})}function y(e,t,n){var r=e[t].artists,c=n.filter((function(e){return e.selected}));return r.filter((function(e){return!function(e){return c.some((function(t){return t.id===e.id}))}(e)&&!function(e){var t=n.find((function(t){return t.id===e.id}));return null===t||void 0===t?void 0:t.userDisabled}(e)})).length}var k=n(14),N=(n(61),function(e){var t=e.placeholder,n=e.searchValue,r=e.setSearchValue;return Object(f.jsxs)("div",{className:"searchbar",children:[Object(f.jsx)("input",{type:"text",className:"search-input",placeholder:t,value:n,onChange:function(e){return r(e.target.value)}}),n&&Object(f.jsx)("a",{onClick:function(){return r("")},children:Object(f.jsx)("i",{className:"fas fa-times"})})]})}),w=function(e){var t,n,c=e.genreList,a=e.artists,s=e.selectHandler,i=e.loaded,o=Object(r.useState)(""),u=Object(x.a)(o,2),l=u[0],d=u[1];return Object(f.jsx)("div",{className:"genres-wrapper"+(i?" loaded":""),children:i?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"genre-search",children:Object(f.jsx)(N,{placeholder:"Search genres",searchValue:l,setSearchValue:d})}),Object(f.jsx)("div",{className:"genres-container"+(i?" loaded":""),children:(t=l?g(l,c):c,n=a.filter((function(e){return e.selected})),Object.keys(t).sort((function(e,r){if(t[e].selected&&!t[r].selected)return-1;if(!t[e].selected&&t[r].selected)return 1;function c(e){return t[e].selected?t[e].artists.length:y(t,e,n)}return c(e)>c(r)?-1:1}))).map((function(e){return Object(f.jsx)(v,{genreName:e,artistCount:y(c,e,a),selectHandler:s,selected:c[e].selected},e)}))})]}):Object(f.jsxs)("div",{className:"genre-loading-container",children:[Object(f.jsx)(k.WaveSpinner,{size:30,color:"var(--spotify-white)",loading:!i}),Object(f.jsx)("p",{className:"loading-genres-message",children:"Loading your genres..."})]})})},S=n(29).serverBaseUrl,C=null,T=function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S+"/tokens",{method:"POST",body:JSON.stringify({code:t}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:C=e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(S+"/tracks",{method:"POST",body:JSON.stringify({clientToken:C}),headers:{"Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(S+"/artists",{method:"POST",body:JSON.stringify({clientToken:C,nextUrl:t}),headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(S+"/create",{method:"POST",body:JSON.stringify({clientToken:C,playlistName:t,trackURIs:n}),headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(S+"/cover",{method:"POST",body:JSON.stringify({clientToken:C,playlistId:t}),headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=(n(62),n(15)),R=n(28);function D(e,t){return new Promise((function(n){var r;function c(e,t){return a.apply(this,arguments)}function a(){return(a=Object(O.a)(h.a.mark((function e(a,s){var i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(s);case 2:return i=e.sent,s=i.artists.next,o=i.artists.items.map((function(e){return Object(R.a)(Object(R.a)({},e),{},{selected:!1})})),e.next=7,t((function(e){var t=[].concat(Object(P.a)(e),Object(P.a)(o));return s||(r=E(t)),t}));case 7:s?c(a,s):n(r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(e,undefined)}))}function E(e){var t={};return e.forEach((function(e){e.genres.forEach((function(n){t[n]?t[n].artists.push(e):t[n]={artists:[e],selected:!1}}))})),t}function U(e,t){var n=e.filter((function(e){return e.selected&&!e.userDisabled}));return t.filter((function(e){return e.track.artists.some((function(e){return-1!==n.findIndex((function(t){return t.id===e.id}))}))}))}n(63),n(64);var B=function(e){var t=e.artist,n=e.toggleHandler;return Object(f.jsxs)("a",{className:"artist-item-container"+(t.userDisabled?" user-disabled":""),children:[t.images[0]&&Object(f.jsx)("img",{src:t.images[0].url,alt:"Image of artist "+t.name,onClick:function(){return n(t.id)}}),Object(f.jsx)("p",{children:t.name})]})},G=function(e){var t=e.artistList,n=e.toggleHandler,r=e.loaded;return Object(f.jsxs)("div",{className:"artists-container"+(r?" loaded":""),children:[0===t.length&&Object(f.jsx)("p",{className:"choose-genre-message",children:"Choose a genre to view related artists."}),t.sort((function(e,t){return e.name<t.name?-1:1})).map((function(e){return Object(f.jsx)(B,{artist:e,toggleHandler:n},e.id)}))]})};n(65),n(66);function J(e){var t=Math.floor(e/6e4),n=parseInt((e%6e4/1e3).toFixed(0));return t+":"+(n<10?"0":"")+n}var F=n(37),z=n.n(F),V=function(e){var t,n=e.track,r=e.disabled,c=e.toggleHandler;return Object(f.jsxs)("tr",{className:"playlist-item-container"+(r?" user-disabled":""),onClick:function(){return c(n.track.id)},children:[Object(f.jsx)("td",{children:n.track.name}),Object(f.jsx)("td",{children:(t=n,t.track.artists.map((function(e){return e.name})).join(", "))}),Object(f.jsx)("td",{children:n.track.album.name}),Object(f.jsx)("td",{children:z()(n.added_at).fromNow()}),Object(f.jsx)("td",{children:J(n.track.duration_ms)})]})},q=function(e){var t=e.tracks,n=e.createHandler,c=e.loaded,a=Object(r.useState)(""),s=Object(x.a)(a,2),i=s[0],o=s[1],u=Object(r.useState)([]),l=Object(x.a)(u,2),d=l[0],j=l[1],b=Object(r.useState)(!1),p=Object(x.a)(b,2),m=p[0],v=p[1];function g(e){if(d.includes(e))j(d.filter((function(t){return t!==e})));else{var t=[].concat(Object(P.a)(d),[e]);j(t)}}function y(e){return N.apply(this,arguments)}function N(){return(N=Object(O.a)(h.a.mark((function e(r){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),r.preventDefault(),c=t.filter((function(e){return!d.some((function(t){return t===e.track.id}))})).map((function(e){return e.track.uri})),o(""),e.next=6,n(i,c);case 6:v(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsxs)("div",{className:"playlist-container"+(c?" loaded":""),children:[Object(f.jsxs)("div",{className:"loading-screen",children:[Object(f.jsx)(k.WaveSpinner,{size:30,color:"var(--spotify-white)",loading:!c}),Object(f.jsx)("p",{className:"loading-text"+(c?" loaded":""),children:"Loading your tracks..."})]}),Object(f.jsxs)("form",{action:"submit",onSubmit:y,className:"create-playlist",children:[Object(f.jsx)("input",{type:"text",className:"playlist-title"+(c?" loaded":""),placeholder:"Playlist Name",value:i,onChange:function(e){return o(e.target.value)}}),m?Object(f.jsx)("div",{className:"save-loader",children:Object(f.jsx)(k.CircleSpinner,{size:15,loading:c,color:"var(--spotify-green)"})}):Object(f.jsx)("button",{className:"button-create"+(c?" loaded":""),onClick:function(){return y},children:Object(f.jsx)("i",{className:"fas fa-plus-circle"})})]}),c&&Object(f.jsx)("div",{className:"table-wrapper",children:Object(f.jsxs)("table",{className:"track-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"playlist-headers"+(c?" loaded":""),children:[Object(f.jsx)("th",{children:"TITLE"}),Object(f.jsx)("th",{children:"ARTIST"}),Object(f.jsx)("th",{children:"ALBUM"}),Object(f.jsx)("th",{children:"ADDED"}),Object(f.jsx)("th",{children:"LENGTH"})]})}),Object(f.jsx)("tbody",{className:"track-list",children:t.map((function(e){return Object(f.jsx)(V,{track:e,disabled:d.includes(e.track.id),toggleHandler:g},e.track.id)}))})]})})]})},A=n.p+"static/media/Spotify_Icon_RGB_Green.cd66b8f6.png",M=n(38),W=n.n(M),Y=(n(79),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%","border-radius":"20px","background-color":"var(--spotify-black)",padding:"4%",opacity:1,transform:"translate(-50%, -50%)"},overlay:{zIndex:2}}),K=function(e){var t=e.isOpen,n=e.playlist,r=e.onRequestClose;return Object(f.jsx)(W.a,{isOpen:t,onRequestClose:r,style:Y,children:n.id&&Object(f.jsx)("div",{className:"modal-wrapper",children:Object(f.jsxs)("div",{className:"modal-container",children:[Object(f.jsxs)("div",{className:"created-message",children:[Object(f.jsx)("h1",{children:"Glorious Victory!"}),Object(f.jsx)("p",{children:"Your playlist is created and waiting for you in your Spotify account."}),Object(f.jsx)("a",{href:n.uri,children:"Open in Spotify"}),Object(f.jsx)("a",{href:n.external_urls.spotify,target:"_blank",children:"Open in browser"})]}),Object(f.jsxs)("div",{className:"playlist-info",children:[n.cover&&Object(f.jsx)("img",{src:n.cover.url,alt:"Playlist Image",className:"cover-image"}),Object(f.jsx)("p",{children:n.name})]})]})})})},Q=function(){var e=Object(m.f)(),t=new URLSearchParams(e.search),n=Object(r.useState)([]),c=Object(x.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)([]),o=Object(x.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)({}),j=Object(x.a)(d,2),b=j[0],p=j[1],v=Object(r.useState)({}),g=Object(x.a)(v,2),y=g[0],k=g[1],N=r.useState(!1),S=Object(x.a)(N,2),C=S[0],I=S[1];var P=t.get("code");function R(){return(R=Object(O.a)(h.a.mark((function e(t,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,L(t,n);case 4:return r=e.sent,e.next=7,new Promise((function(e,t){return setTimeout((function(){return e("")}),500)}));case 7:return e.next=9,H(r.id);case 9:c=e.sent,r.cover=c[0],k(r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){P&&function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(P);case 2:0===a.length&&_().then((function(e){console.log(e.length+" tracks received"),s(e)})),0===u.length&&D(P,l).then((function(e){p(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(r.useEffect)((function(){var e,t=(e=b,Object.entries(e).filter((function(e){var t=Object(x.a)(e,2);return t[0],t[1].selected})).reduce((function(e,t){var n=Object(x.a)(t,2),r=n[0],c=n[1];return e[r]=c,e}),{})),n=function(e,t){return e.map((function(e){for(var n=0;n<e.genres.length;n++)if(Object.keys(t).includes(e.genres[n]))return e.selected=!0,e;return e.selected=!1,e}))}(u,t);l(n)}),[b]),Object(r.useEffect)((function(){Object.keys(y).length>0&&I(!0)}),[y]),Object(f.jsxs)("div",{className:"main-container",children:[Object(f.jsx)(K,{isOpen:C,onRequestClose:function(){I(!1)},playlist:y}),Object(f.jsxs)("div",{className:"title",children:[Object(f.jsx)("h1",{children:"Listspotter."}),Object(f.jsxs)("p",{children:["Powered by ",Object(f.jsx)("img",{src:A,className:"spotify-icon",alt:"Spotify icon"})]})]}),Object(f.jsxs)("div",{className:"genre-artist-wrapper",children:[Object(f.jsx)(w,{genreList:b,artists:u,selectHandler:function(e){var t=Object.assign({},b);t[e].selected=!t[e].selected,p(t)},loaded:Object.keys(b).length>0}),Object(f.jsx)(G,{artistList:u.filter((function(e){return e.selected})),loaded:Object.keys(b).length>0,toggleHandler:function(e){var t=function(e,t){return t.map((function(t){if(t.id===e){var n=Object.assign({},t);return n.userDisabled=!n.userDisabled,n}return t}))}(e,u);l(t)}})]}),Object(f.jsx)("div",{className:"playlist-wrapper",children:Object(f.jsx)(q,{tracks:U(u,a),loaded:a.length>0,createHandler:function(e,t){return R.apply(this,arguments)}})})]})},X=(n(83),n(22));var Z=function(){return Object(f.jsx)(X.a,{children:Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.a,{path:"/main",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(m.a,{path:"/",children:Object(f.jsx)(b,{})})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.getElementById("root")),$()}},[[84,1,2]]]);
//# sourceMappingURL=main.32e3ef6e.chunk.js.map