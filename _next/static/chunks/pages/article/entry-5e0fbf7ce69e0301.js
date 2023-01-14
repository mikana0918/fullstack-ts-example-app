(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{2438:function(n,t,e){"use strict";e.d(t,{k:function(){return l}});var r,c,u,o,a=e(29),s=e(7794),i=e.n(s),f=e(5387),l={currentAuthenticatedUser:(r=(0,a.Z)(i().mark(function n(){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.d.Auth.currentAuthenticatedUser();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n)})),function(){return r.apply(this,arguments)}),getCurrentToken:(c=(0,a.Z)(i().mark(function n(){var t;return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.d.Auth.currentSession();case 3:return t=n.sent.getAccessToken().getJwtToken(),n.abrupt("return",t);case 9:n.prev=9,n.t0=n.catch(0),console.log("failed to get current auth token",n.t0);case 12:case"end":return n.stop()}},n,null,[[0,9]])})),function(){return c.apply(this,arguments)}),signIn:(u=(0,a.Z)(i().mark(function n(t){var e,r,c;return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.username,r=t.password,n.prev=1,n.next=4,f.d.Auth.signIn(e,r);case 4:return c=n.sent,n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(1),console.log("error signing in",n.t0);case 11:case"end":return n.stop()}},n,null,[[1,8]])})),function(n){return u.apply(this,arguments)}),signOut:(o=(0,a.Z)(i().mark(function n(){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.d.Auth.signOut();case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("error signing out: ",n.t0);case 8:case"end":return n.stop()}},n,null,[[0,5]])})),function(){return o.apply(this,arguments)})}},5144:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var r=e(7294),c=e(273),u=e.n(c),o=e(9558),a=e(29),s=e(7794),i=e.n(s),f=e(3571),l=e.n(f),p=e(1664),d=e.n(p),h=e(1163),g=e(2438),x=e(8291),j=e(5893),v=function(){var n,t=(0,h.useRouter)(),e=(0,r.useState)(""),c=e[0],u=e[1],s=(0,r.useState)({}),f=s[0];s[1];var p=(0,r.useContext)(x.V).isAuthenticated,v=(n=(0,a.Z)(i().mark(function n(){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.k.signOut();case 2:case"end":return n.stop()}},n)})),function(){return n.apply(this,arguments)});return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:l().userBanner,children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(d(),{href:o.V.$url(),className:l().nav,children:"Home"}),(0,j.jsx)(d(),{href:o.V.article.$url(),className:l().nav,children:"Article"})]}),(0,j.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.push(o.V.article.$url({query:{search:c}}))},children:[(0,j.jsx)("input",{type:"text",name:"query",onInput:function(n){return n.target instanceof HTMLInputElement&&u(n.target.value)}}),(0,j.jsx)("button",{type:"submit",children:"search"})]}),(0,j.jsx)("div",{className:l().spacing}),(0,j.jsx)("div",{children:p?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("img",{src:f.icon,className:l().userIcon}),(0,j.jsx)("span",{children:f.name}),(0,j.jsx)("input",{type:"file",accept:"image/*",onChange:function(){console.log("edit icon")}}),(0,j.jsx)("button",{onClick:v,children:"LOGOUT"})]}):null})]}),(0,j.jsx)("div",{className:l().padding})]})},m=function(n){var t=n.children;return(0,j.jsxs)("div",{className:u().container,children:[(0,j.jsx)(v,{}),(0,j.jsx)("main",{className:u().main,children:t}),(0,j.jsx)("footer",{className:u().footer,children:(0,j.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,j.jsx)("img",{src:o.D.vercel_svg,alt:"Vercel Logo",className:u().logo})]})})]})}},4653:function(n,t,e){"use strict";e.r(t);var r=e(3301),c=e.n(r),u=e(1163),o=e(9008),a=e.n(o),s=e(5144),i=e(4468),f=e(5893);t.default=function(){var n,t=(0,u.useRouter)(),e=c()(i.x.article._articleId(Number.parseInt(t.query.id,10))).data;return(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(a(),{children:(0,f.jsx)("title",{children:null!==(n=null==e?void 0:e.title)&&void 0!==n?n:"Loading..."})}),e?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:e.title}),(0,f.jsx)("pre",{children:e.body})]}):(0,f.jsx)("div",{children:"Loading..."})]})}},4468:function(n,t,e){"use strict";e.d(t,{x:function(){return E}});var r,c,u,o,a,s,i,f,l,p,d,h=e(9499),g=e(29),x=e(7794),j=e.n(x),v=e(9669),m=e.n(v),_=e(8416),y=e.n(_),b=e(7116),w=e(2438);function k(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,r)}return e}function O(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?k(Object(e),!0).forEach(function(t){(0,h.Z)(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}var T=m().create();T.interceptors.request.use((r=(0,g.Z)(j().mark(function n(t){var e;return j().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.k.getCurrentToken();case 2:return e=n.sent,t.headers=O(O({},t.headers),{},{Authorization:"Bearer ".concat(e)}),n.abrupt("return",t);case 5:case"end":return n.stop()}},n)})),function(n){return r.apply(this,arguments)}));var E=(u=(c=y()(T)).baseURL,o=c.fetch,a=(void 0===u?"https://api-frourio-example.interface-x.org/api":u).replace(/\/$/,""),s="/article",i="/tasks",f="/users",l="POST",p="DELETE",d="PATCH",{article:{_articleId:function(n){var t="".concat(s,"/").concat(n);return{get:function(n){return o(a,t,"GET",n).json()},$get:function(n){return o(a,t,"GET",n).json().then(function(n){return n.body})},$path:function(){return"".concat(a).concat(t)}}},get:function(n){return o(a,s,"GET",n).json()},$get:function(n){return o(a,s,"GET",n).json().then(function(n){return n.body})},$path:function(n){return"".concat(a).concat(s).concat(n&&n.query?"?".concat((0,b.dataToURLString)(n.query)):"")}},tasks:{_taskId:function(n){var t="".concat(i,"/").concat(n);return{patch:function(n){return o(a,t,d,n).send()},$patch:function(n){return o(a,t,d,n).send().then(function(n){return n.body})},delete:function(n){return o(a,t,p,n).send()},$delete:function(n){return o(a,t,p,n).send().then(function(n){return n.body})},$path:function(){return"".concat(a).concat(t)}}},get:function(n){return o(a,i,"GET",n).json()},$get:function(n){return o(a,i,"GET",n).json().then(function(n){return n.body})},post:function(n){return o(a,i,l,n).json()},$post:function(n){return o(a,i,l,n).json().then(function(n){return n.body})},$path:function(n){return"".concat(a).concat(i).concat(n&&n.query?"?".concat((0,b.dataToURLString)(n.query)):"")}},users:{get:function(n){return o(a,f,"GET",n).json()},$get:function(n){return o(a,f,"GET",n).json().then(function(n){return n.body})},post:function(n){return o(a,f,l,n,"FormData").json()},$post:function(n){return o(a,f,l,n,"FormData").json().then(function(n){return n.body})},$path:function(){return"".concat(a).concat(f)}},get:function(n){return o(a,"","GET",n).text()},$get:function(n){return o(a,"","GET",n).text().then(function(n){return n.body})},$path:function(){return"".concat(a)}})},797:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/entry",function(){return e(4653)}])},3571:function(n){n.exports={userBanner:"DefaultHeader_userBanner__G79t5",userIcon:"DefaultHeader_userIcon__JkRmB",spacing:"DefaultHeader_spacing__mqHrq",nav:"DefaultHeader_nav__Xhpqc",padding:"DefaultHeader_padding__cZNt8"}},273:function(n){n.exports={container:"Layout_container__nRe7b",main:"Layout_main__T_Jjv",footer:"Layout_footer__DSG5r",logo:"Layout_logo__Ufs6S"}}},function(n){n.O(0,[537,774,888,179],function(){return n(n.s=797)}),_N_E=n.O()}]);