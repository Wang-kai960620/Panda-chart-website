(this.webpackJsonpconversion=this.webpackJsonpconversion||[]).push([[10],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"History",(function(){return O}));var r=n(43),i=n(0),a=n.n(i),o=n(66),c=n(45),u=n(44),s=n(203),l=n.n(s),p=n(310),f=n(222),b=n(48);function m(){var e=Object(r.a)(["\nwidth: 100px ;\nheight: 120px ;\nobject-fit: cover;\n"]);return m=function(){return e},e}var d=u.a.img(m()),g=Object(c.a)((function(){var e=Object(b.a)().HistoryStore;return Object(i.useEffect)((function(){return function(){e.reset()}}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{initialLoad:!0,pageStart:0,loadMore:function(){e.find()},hasMore:!e.isLoading&&e.hasMore,useWindow:!0},a.a.createElement(p.b,{dataSource:e.list,renderItem:function(e,t){return a.a.createElement(p.b.Item,{key:t},a.a.createElement("div",null,a.a.createElement(d,{src:e.attributes.url.attributes.url,alt:"\u56fe\u7247\u5185\u5bb9"})),a.a.createElement("div",null,a.a.createElement("h5",null,"\u540d\u79f0"),a.a.createElement("h5",null,e.attributes.filename)),a.a.createElement("div",null,a.a.createElement("h5",null,"\u94fe\u63a5"),a.a.createElement("a",{href:e.attributes.url.attributes.url},e.attributes.url.attributes.url)))}},e.isLoading&&e.hasMore&&a.a.createElement("div",{className:"demo-loading-container"},a.a.createElement(f.a,{tip:"\u52a0\u8f7d\u4e2d"})))))}));function y(){var e=Object(r.a)(["\nmax-width: 1600px;\nmargin: 0 auto;\npadding: 10px 20px ;\n"]);return y=function(){return e},e}var h=u.a.div(y()),O=Object(c.a)((function(){return a.a.createElement(o.a,null,a.a.createElement(h,null,a.a.createElement(g,null)))}))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(78),i=n.n(r);i.a.init({appId:"YId6yG8LcyK0CGwLFaYIgYgf-gzGzoHsz",appKey:"0IwcJacKUg9qaHmGBJrjwCC6",serverURL:"https://yid6yg8l.lc-cn-n1-shared.com"});var a={register:function(e,t){var n=new r.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(t)}),(function(e){return t(e)}))}))},login:function(e,t){return new Promise((function(n,i){r.User.logIn(e,t).then((function(e){return n(e)}),(function(e){return i(e)}))}))},logout:function(){r.User.logOut().then((function(){console.log("\u6ce8\u9500\u6210\u529f")})).catch((function(e){return console.log(e)}))},getCurrent:function(){return r.User.current()}},o={add:function(e,t){var n=new i.a.Object("Image"),r=new i.a.File(t,e);return n.set("filename",t),n.set("owner",i.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){console.log("\u4e0a\u4f20\u6210\u529f"),e(t)})).catch((function(e){console.log("err"),t(e)}))}))},find:function(e){var t=e.page,n=void 0===t?0:t,a=e.limit,o=void 0===a?10:a,c=new r.Query("Image");return c.include("owner"),c.limit(o),c.skip(n*o),c.descending("createdAt"),c.equalTo("owner",i.a.User.current()),new Promise((function(e,t){c.find().then((function(t){e(t)})).catch((function(e){return t(e)}))}))}}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r,i,a,o,c,u,s,l,p,f,b,m,d,g,y=n(0),h=n(38),O=n(39),v=n(40),j=n(41),w=(n(42),n(36)),U=n(34),x=new(r=function(){function e(){Object(O.a)(this,e),Object(h.a)(this,"currentUser",i,this)}return Object(v.a)(e,[{key:"pullUser",value:function(){this.currentUser=U.a.getCurrent()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),i=Object(j.a)(r.prototype,"currentUser",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(j.a)(r.prototype,"pullUser",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"pullUser"),r.prototype),Object(j.a)(r.prototype,"resetUser",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"resetUser"),r.prototype),r),E=new(a=function(){function e(){Object(O.a)(this,e),Object(h.a)(this,"values",o,this)}return Object(v.a)(e,[{key:"setUserName",value:function(e){this.values.userName=e}},{key:"setPassWorld",value:function(e){this.values.passWord=e}},{key:"Login",value:function(){var e=this;return new Promise((function(t,n){U.a.login(e.values.userName,e.values.passWord).then((function(e){x.pullUser(),t(e)})).catch((function(e){x.resetUser(),n(e)}))}))}},{key:"Register",value:function(){var e=this;return new Promise((function(t,n){U.a.register(e.values.userName,e.values.passWord).then((function(e){x.pullUser(),t(e)})).catch((function(e){x.resetUser(),n(e)}))}))}},{key:"logout",value:function(){U.a.logout(),x.resetUser()}}]),e}(),o=Object(j.a)(a.prototype,"values",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{userName:"",passWord:""}}}),Object(j.a)(a.prototype,"setUserName",[w.f],Object.getOwnPropertyDescriptor(a.prototype,"setUserName"),a.prototype),Object(j.a)(a.prototype,"setPassWorld",[w.f],Object.getOwnPropertyDescriptor(a.prototype,"setPassWorld"),a.prototype),Object(j.a)(a.prototype,"Login",[w.f],Object.getOwnPropertyDescriptor(a.prototype,"Login"),a.prototype),Object(j.a)(a.prototype,"Register",[w.f],Object.getOwnPropertyDescriptor(a.prototype,"Register"),a.prototype),Object(j.a)(a.prototype,"logout",[w.f],Object.getOwnPropertyDescriptor(a.prototype,"logout"),a.prototype),a),k=new(c=function(){function e(){Object(O.a)(this,e),Object(h.a)(this,"filename",u,this),Object(h.a)(this,"file",s,this),Object(h.a)(this,"serveFile",l,this),Object(h.a)(this,"isUpLoading",p,this)}return Object(v.a)(e,[{key:"setFileName",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"saveFile",value:function(){var e=this;return this.isUpLoading=!0,new Promise((function(t,n){U.b.add(e.file,e.filename).then((function(n){e.serveFile=n,t(n)})).catch((function(t){e.isUpLoading=!1,n(t)})).finally((function(){return e.isUpLoading=!1}))}))}},{key:"reset",value:function(){this.isUpLoading=!1,this.serveFile=null}}]),e}(),u=Object(j.a)(c.prototype,"filename",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=Object(j.a)(c.prototype,"file",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=Object(j.a)(c.prototype,"serveFile",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=Object(j.a)(c.prototype,"isUpLoading",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(j.a)(c.prototype,"setFileName",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"setFileName"),c.prototype),Object(j.a)(c.prototype,"setFile",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"setFile"),c.prototype),Object(j.a)(c.prototype,"saveFile",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"saveFile"),c.prototype),Object(j.a)(c.prototype,"reset",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"reset"),c.prototype),c),P=n(313),L=new(f=function(){function e(){Object(O.a)(this,e),Object(h.a)(this,"list",b,this),Object(h.a)(this,"page",m,this),Object(h.a)(this,"isLoading",d,this),Object(h.a)(this,"hasMore",g,this),this.limit=10}return Object(v.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,U.b.find({page:this.page,limit:this.limit}).then((function(t){e.append(t),e.page++,t.length<e.limit?e.hasMore=!1:P.a.success("\u52a0\u8f7d\u6210\u529f")})).catch((function(e){P.a.error("\u52a0\u8f7d\u5931\u8d25")})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),b=Object(j.a)(f.prototype,"list",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=Object(j.a)(f.prototype,"page",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),d=Object(j.a)(f.prototype,"isLoading",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=Object(j.a)(f.prototype,"hasMore",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Object(j.a)(f.prototype,"append",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"append"),f.prototype),Object(j.a)(f.prototype,"find",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"find"),f.prototype),Object(j.a)(f.prototype,"reset",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"reset"),f.prototype),f),F=Object(y.createContext)({AuthStore:E,UserStore:x,ImageStore:k,HistoryStore:L}),z=function(){return Object(y.useContext)(F)}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(43),i=n(0),a=n.n(i),o=n(44),c=n(12),u=n(1),s=n(146),l=n(48),p=n(45);function f(){var e=Object(r.a)(["\n:hover{\nbackground: #b8dbaa;\ncolor: black;\n}\n"]);return f=function(){return e},e}function b(){var e=Object(r.a)(["\nmargin-left: auto;\n @media (max-width: 500px) {\n margin: 0 0 ;\n padding: 0 0 ;\n  }\n\n>span{\nfont-size: 30px;\n}\n>Button{\nmargin: 0 20px;\nbackground:#b8dbaa;\nborder: none;\n }\n"]);return b=function(){return e},e}function m(){var e=Object(r.a)(["\nfont-size: 50px;\ncolor: #4d57af;\n @media (max-width: 500px) {\n display: none;\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(r.a)(["\ndisplay: flex;\ntext-align: center;\nalign-items: center;\npadding: 20px 120px ; \nbox-shadow: 2px 2px 2px 0 rgba(0,0,0,0.1);\n @media (max-width: 500px) {\n padding: 0 0 ;\n  }\n  @media (max-width: 300px){\n  font-size: 5px;\n}\n\n\n>a{\ntext-decoration:none;\nfont-size: 2em;\nmargin: 0 20px;\npadding: 0 10px ;\ncolor:black;\nborder-radius: 10px ;\n&.selected{\nbackground: #b8dbaa;\n}\n}\n"]);return d=function(){return e},e}var g=o.a.div(d()),y=o.a.div(m()),h=o.a.div(b()),O=Object(o.a)(c.b)(f()),v=Object(p.a)((function(){var e=Object(l.a)(),t=e.AuthStore,n=e.UserStore,r=Object(u.g)();return Object(i.useEffect)((function(){n.pullUser()}),[n]),a.a.createElement("div",null,a.a.createElement(g,null,a.a.createElement(y,null,"Panda"),a.a.createElement(O,{to:"/home",activeClassName:"selected",exact:!0},"\u9996\u9875"),a.a.createElement(O,{to:"/history",activeClassName:"selected"},"\u4e0a\u4f20\u5386\u53f2"),a.a.createElement(O,{to:"/about",activeClassName:"selected"},"\u5173\u4e8e"),a.a.createElement(h,null,n.currentUser?a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,n.currentUser.attributes.username),a.a.createElement(s.a,{type:"primary",onClick:function(){t.logout(),r.push("./login")}}," \u6ce8\u9500 ")):a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{type:"primary",onClick:function(){r.push("./login")}}," \u767b\u5f55 "),a.a.createElement(s.a,{type:"primary",onClick:function(){r.push("./register")}}," \u6ce8\u518c ")))))}));function j(){var e=Object(r.a)(["\nflex-grow: 1;\n"]);return j=function(){return e},e}function w(){var e=Object(r.a)(["\nheight: 100vh;\ndisplay: flex;\nflex-direction: column-reverse;\noverflow: scroll;\n"]);return w=function(){return e},e}var U=o.a.div(w()),x=o.a.div(j()),E=Object(p.a)((function(e){return a.a.createElement(U,null,a.a.createElement(x,null,e.children),a.a.createElement(v,null))}))}}]);
//# sourceMappingURL=10.15df6490.chunk.js.map