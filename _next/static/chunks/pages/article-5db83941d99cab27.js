(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{5144:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var t=r(7294),s=r(273),a=r.n(s),c=r(9558),i=r(29),u=r(7794),o=r.n(u),l=r(3571),d=r.n(l),h=r(1664),p=r.n(h),f=r(1163),m=r(2438),x=r(8291),_=r(4468),j=r(5893),g=function(){var e,n,r=(0,f.useRouter)(),s=(0,t.useState)(""),a=s[0],u=s[1],l=(0,t.useContext)(x.V),h=l.user,g=l.cognitoUser,v=(e=(0,i.Z)(o().mark(function e(n){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.target.files){e.next=3;break}return e.next=3,_.x.users.post({body:{file:n.target.files[0]}});case 3:case"end":return e.stop()}},e)})),function(n){return e.apply(this,arguments)}),y=(n=(0,i.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.k.signOut();case 2:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),N=(0,t.useMemo)(function(){return null!=h&&h.icon_path?"".concat("https://frourio-sample-uploads82334-prod.s3.ap-northeast-1.amazonaws.com","/").concat(h.icon_path):"https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-16.jpg"},[h]);return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:d().userBanner,children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(p(),{href:c.V.$url(),className:d().nav,children:"Home"}),(0,j.jsx)(p(),{href:c.V.article.$url(),className:d().nav,children:"Article"})]}),(0,j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push(c.V.article.$url({query:{search:a}}))},children:[(0,j.jsx)("input",{type:"text",name:"query",onInput:function(e){return e.target instanceof HTMLInputElement&&u(e.target.value)}}),(0,j.jsx)("button",{type:"submit",children:"search"})]}),(0,j.jsx)("div",{className:d().spacing}),(0,j.jsx)("div",{children:g?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("img",{src:N,className:d().userIcon}),(0,j.jsx)("span",{children:"TODO: Add name column"}),(0,j.jsx)("input",{type:"file",accept:"image/*",onChange:v}),(0,j.jsx)("button",{onClick:y,children:"LOGOUT"})]}):null})]}),(0,j.jsx)("div",{className:d().padding})]})},v=function(e){var n=e.children;return(0,j.jsxs)("div",{className:a().container,children:[(0,j.jsx)(g,{}),(0,j.jsx)("main",{className:a().main,children:n}),(0,j.jsx)("footer",{className:a().footer,children:(0,j.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,j.jsx)("img",{src:c.D.vercel_svg,alt:"Vercel Logo",className:a().logo})]})})]})}},453:function(e,n,r){"use strict";r.r(n);var t=r(3301),s=r.n(t),a=r(1163),c=r(9008),i=r.n(c),u=r(1664),o=r.n(u),l=r(5144),d=r(9558),h=r(4468),p=r(5893);n.default=function(){var e=(0,a.useRouter)().query,n=e.search?e.search.trim():"",r=s()(h.x.article,{query:{search:n}}).data;return(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(i(),{children:(0,p.jsx)("title",{children:"Articles"})}),(0,p.jsx)("h1",{children:"Articles"}),r?r.length?(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsxs)("span",{children:["Results for ",(0,p.jsx)("code",{children:n}),"."]}),(0,p.jsx)("ul",{children:r.map(function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(o(),{href:d.V.article.entry.$url({query:{id:e.id}}),children:e.title})},e.id)})})]}):n&&(0,p.jsxs)("span",{children:["Not found for ",(0,p.jsx)("code",{children:n}),"."]}):(0,p.jsx)("span",{children:"Loading..."})]})}},1666:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article",function(){return r(453)}])},3571:function(e){e.exports={userBanner:"DefaultHeader_userBanner__G79t5",userIcon:"DefaultHeader_userIcon__JkRmB",spacing:"DefaultHeader_spacing__mqHrq",nav:"DefaultHeader_nav__Xhpqc",padding:"DefaultHeader_padding__cZNt8"}},273:function(e){e.exports={container:"Layout_container__nRe7b",main:"Layout_main__T_Jjv",footer:"Layout_footer__DSG5r",logo:"Layout_logo__Ufs6S"}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=1666)}),_N_E=e.O()}]);