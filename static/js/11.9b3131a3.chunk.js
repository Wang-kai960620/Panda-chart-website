(this.webpackJsonpconversion=this.webpackJsonpconversion||[]).push([[11],{315:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",(function(){return C}));var r=n(43),a=n(0),i=n.n(a),o=n(66),c=n(48),u=n(309),l=n(313),s=n(312),p=n(44),f=n(45);function b(){var e=Object(r.a)(["\n  &.bgGround {\n    background:rgba(241, 243, 244,0.4) ;\n\n  }\n"]);return b=function(){return e},e}function d(){var e=Object(r.a)(["\nmax-width: 1000px;\nmargin: 50px auto;\n"]);return d=function(){return e},e}var g=u.a.Dragger,m=p.a.div(d()),h=Object(p.a)(g)(b()),O=Object(f.a)((function(){var e=Object(c.a)(),t=e.UserStore,n=e.ImageStore,r={beforeUpload:function(e){return n.setFile(e),n.setFileName(e.name),null===t.currentUser?(l.a.warning(" \u8bf7\u5148\u767b\u5f55\u5728\u4e0a\u4f20"),!1):/.(jpg|jpeg|png|gif|svg)$/.test(e.type)?e.size>1048576?(l.a.error("\u4e0a\u4f20\u56fe\u7247\u8fc7\u5927"),!1):(n.saveFile().then((function(){console.log("\u4e0a\u4f20\u6210\u529f")})).catch((function(e){console.log("\u4e0a\u4f20\u5931\u8d25"),alert(JSON.stringify(e))})),!1):(l.a.error("\u4e0d\u662f\u652f\u6301\u7684\u683c\u5f0f"),!1)}};return i.a.createElement(m,null,i.a.createElement(h,Object.assign({},r,{className:"bgGround"}),i.a.createElement("p",{className:"ant-upload-drag-icon"},i.a.createElement(s.a,null)),i.a.createElement("p",{className:"ant-upload-text"},"\u70b9\u51fb\u62d6\u62fd\u4e0a\u4f20\u6587\u4ef6"),i.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")))})),y=n(58),v=n(1);function j(){var e=Object(r.a)(["\nmargin: 50px 100px;\n @media (max-width: 500px) {\n margin: 0;\n  }\n"]);return j=function(){return e},e}function w(){var e=Object(r.a)(["\nbackground: aqua;\nmax-width: 1000px;\ntext-align: center;\nmargin:  0 auto;\n//animation: 2ms linear infinite ",";\ncolor: white;\nfont-size: 20px;\n"]);return w=function(){return e},e}function x(){var e=Object(r.a)(["\n0%{\nbackground: black;\n}\n50%{\nbackground: red;\n}\n100%{\nbackground: black;}\n\n"]);return x=function(){return e},e}function E(){var e=Object(r.a)(["\ntext-align: center;\nmargin: 0 auto;\n"]);return E=function(){return e},e}function U(){var e=Object(r.a)(["\nmax-width: 1200px;\nmargin: 50px auto;\nbackground:rgba(241, 243, 244,0.25) ;\nborder: 2px dashed #e1e1e1e1;\n @media (max-width: 500px) {\n max-width: 300px;\n  }\n:hover{\nborder: 2px dashed #40a9ff;\n}\n\n"]);return U=function(){return e},e}function k(){var e=Object(r.a)(["\nwidth: 200px ;\n@media (max-width: 500px){\nwidth: 100px;\n}\n"]);return k=function(){return e},e}var P=p.a.img(k()),F=p.a.div(U()),S=p.a.h1(E()),z=Object(p.b)(x()),N=p.a.div(w(),z),L=p.a.div(j()),C=Object(f.a)((function(){var e=Object(c.a)().UserStore,t=Object(v.g)(),n=Object(a.useRef)(null),r=Object(a.useRef)(null),u=Object(y.d)((function(){return{width:"",setWidth:function(e){u.width=e},get widthStr(){return""===this.width?"":"/w/".concat(u.width)},height:"",get heightStr(){return""===this.height?"":"/h/".concat(u.height)},setHeight:function(e){u.height=e},get AllStr(){return s.serveFile.attributes.url.attributes.url+"?imageView2/0"+this.heightStr+this.widthStr}}})),s=Object(c.a)().ImageStore;return i.a.createElement(o.a,null,i.a.createElement(F,null,e.currentUser?i.a.createElement(S,null,"\u4e0a\u4f20\u6587\u4ef6"):i.a.createElement(N,null,i.a.createElement("span",{onClick:function(){t.push("./login")}},"\u8bf7\u5148\u767b\u5f55")),i.a.createElement(O,null),s.serveFile?i.a.createElement(L,null,i.a.createElement("h1",null,"\u4e0a\u4f20\u7ed3\u679c"),i.a.createElement(P,{src:s.serveFile.attributes.url.attributes.url}),i.a.createElement("dl",null,i.a.createElement("dt",null,i.a.createElement("h2",null," \u7ebf\u4e0a\u5730\u5740 ")),i.a.createElement("dd",null,i.a.createElement("a",{rel:"noopener",href:s.serveFile.attributes.url.attributes.url},s.serveFile.attributes.url.attributes.url)),i.a.createElement("dt",null,i.a.createElement("h2",null,"\u53ef\u9009\u5c3a\u5bf8")),i.a.createElement("dd",null,i.a.createElement("input",{placeholder:"\u8bf7\u5728\u8fd9\u91cc\u8f93\u5165\u5bbd\u5ea6",type:"text",ref:n,onChange:function(){var e=n.current;/^\d+$/.test(e.value)?u.width=e.value:l.a.warning("\u5c3a\u5bf8\u53ea\u80fd\u662f\u6570\u5b57")}}),i.a.createElement("input",{placeholder:"\u8bf7\u5728\u8fd9\u91cc\u8f93\u5165\u9ad8\u5ea6",type:"text",ref:r,onChange:function(){var e=r.current;/^\d+$/.test(e.value)?u.height=e.value:l.a.warning("\u5c3a\u5bf8\u53ea\u80fd\u662f\u6570\u5b57")}})),i.a.createElement("dd",null,i.a.createElement("a",{href:u.AllStr},u.AllStr)))):null))}))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(78),a=n.n(r);a.a.init({appId:"YId6yG8LcyK0CGwLFaYIgYgf-gzGzoHsz",appKey:"0IwcJacKUg9qaHmGBJrjwCC6",serverURL:"https://yid6yg8l.lc-cn-n1-shared.com"});var i={register:function(e,t){var n=new r.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(t)}),(function(e){return t(e)}))}))},login:function(e,t){return new Promise((function(n,a){r.User.logIn(e,t).then((function(e){return n(e)}),(function(e){return a(e)}))}))},logout:function(){r.User.logOut().then((function(){console.log("\u6ce8\u9500\u6210\u529f")})).catch((function(e){return console.log(e)}))},getCurrent:function(){return r.User.current()}},o={add:function(e,t){var n=new a.a.Object("Image"),r=new a.a.File(t,e);return n.set("filename",t),n.set("owner",a.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){console.log("\u4e0a\u4f20\u6210\u529f"),e(t)})).catch((function(e){console.log("err"),t(e)}))}))},find:function(e){var t=e.page,n=void 0===t?0:t,i=e.limit,o=void 0===i?10:i,c=new r.Query("Image");return c.include("owner"),c.limit(o),c.skip(n*o),c.descending("createdAt"),c.equalTo("owner",a.a.User.current()),new Promise((function(e,t){c.find().then((function(t){e(t)})).catch((function(e){return t(e)}))}))}}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r,a,i,o,c,u,l,s,p,f,b,d,g,m,h=n(0),O=n(38),y=n(39),v=n(40),j=n(41),w=(n(42),n(36)),x=n(34),E=new(r=function(){function e(){Object(y.a)(this,e),Object(O.a)(this,"currentUser",a,this)}return Object(v.a)(e,[{key:"pullUser",value:function(){this.currentUser=x.a.getCurrent()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),a=Object(j.a)(r.prototype,"currentUser",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(j.a)(r.prototype,"pullUser",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"pullUser"),r.prototype),Object(j.a)(r.prototype,"resetUser",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"resetUser"),r.prototype),r),U=new(i=function(){function e(){Object(y.a)(this,e),Object(O.a)(this,"values",o,this)}return Object(v.a)(e,[{key:"setUserName",value:function(e){this.values.userName=e}},{key:"setPassWorld",value:function(e){this.values.passWord=e}},{key:"Login",value:function(){var e=this;return new Promise((function(t,n){x.a.login(e.values.userName,e.values.passWord).then((function(e){E.pullUser(),t(e)})).catch((function(e){E.resetUser(),n(e)}))}))}},{key:"Register",value:function(){var e=this;return new Promise((function(t,n){x.a.register(e.values.userName,e.values.passWord).then((function(e){E.pullUser(),t(e)})).catch((function(e){E.resetUser(),n(e)}))}))}},{key:"logout",value:function(){x.a.logout(),E.resetUser()}}]),e}(),o=Object(j.a)(i.prototype,"values",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{userName:"",passWord:""}}}),Object(j.a)(i.prototype,"setUserName",[w.f],Object.getOwnPropertyDescriptor(i.prototype,"setUserName"),i.prototype),Object(j.a)(i.prototype,"setPassWorld",[w.f],Object.getOwnPropertyDescriptor(i.prototype,"setPassWorld"),i.prototype),Object(j.a)(i.prototype,"Login",[w.f],Object.getOwnPropertyDescriptor(i.prototype,"Login"),i.prototype),Object(j.a)(i.prototype,"Register",[w.f],Object.getOwnPropertyDescriptor(i.prototype,"Register"),i.prototype),Object(j.a)(i.prototype,"logout",[w.f],Object.getOwnPropertyDescriptor(i.prototype,"logout"),i.prototype),i),k=new(c=function(){function e(){Object(y.a)(this,e),Object(O.a)(this,"filename",u,this),Object(O.a)(this,"file",l,this),Object(O.a)(this,"serveFile",s,this),Object(O.a)(this,"isUpLoading",p,this)}return Object(v.a)(e,[{key:"setFileName",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"saveFile",value:function(){var e=this;return this.isUpLoading=!0,new Promise((function(t,n){x.b.add(e.file,e.filename).then((function(n){e.serveFile=n,t(n)})).catch((function(t){e.isUpLoading=!1,n(t)})).finally((function(){return e.isUpLoading=!1}))}))}},{key:"reset",value:function(){this.isUpLoading=!1,this.serveFile=null}}]),e}(),u=Object(j.a)(c.prototype,"filename",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),l=Object(j.a)(c.prototype,"file",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),s=Object(j.a)(c.prototype,"serveFile",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=Object(j.a)(c.prototype,"isUpLoading",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(j.a)(c.prototype,"setFileName",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"setFileName"),c.prototype),Object(j.a)(c.prototype,"setFile",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"setFile"),c.prototype),Object(j.a)(c.prototype,"saveFile",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"saveFile"),c.prototype),Object(j.a)(c.prototype,"reset",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"reset"),c.prototype),c),P=n(313),F=new(f=function(){function e(){Object(y.a)(this,e),Object(O.a)(this,"list",b,this),Object(O.a)(this,"page",d,this),Object(O.a)(this,"isLoading",g,this),Object(O.a)(this,"hasMore",m,this),this.limit=10}return Object(v.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,x.b.find({page:this.page,limit:this.limit}).then((function(t){e.append(t),e.page++,t.length<e.limit?e.hasMore=!1:P.a.success("\u52a0\u8f7d\u6210\u529f")})).catch((function(e){P.a.error("\u52a0\u8f7d\u5931\u8d25")})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),b=Object(j.a)(f.prototype,"list",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=Object(j.a)(f.prototype,"page",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),g=Object(j.a)(f.prototype,"isLoading",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),m=Object(j.a)(f.prototype,"hasMore",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Object(j.a)(f.prototype,"append",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"append"),f.prototype),Object(j.a)(f.prototype,"find",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"find"),f.prototype),Object(j.a)(f.prototype,"reset",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"reset"),f.prototype),f),S=Object(h.createContext)({AuthStore:U,UserStore:E,ImageStore:k,HistoryStore:F}),z=function(){return Object(h.useContext)(S)}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var r=n(43),a=n(0),i=n.n(a),o=n(44),c=n(12),u=n(1),l=n(146),s=n(48),p=n(45);function f(){var e=Object(r.a)(["\n:hover{\nbackground: #b8dbaa;\ncolor: black;\n}\n"]);return f=function(){return e},e}function b(){var e=Object(r.a)(["\nmargin-left: auto;\n @media (max-width: 500px) {\n margin: 0 0 ;\n padding: 0 0 ;\n  }\n\n>span{\nfont-size: 30px;\n}\n>Button{\nmargin: 0 20px;\nbackground:#b8dbaa;\nborder: none;\n }\n"]);return b=function(){return e},e}function d(){var e=Object(r.a)(["\nfont-size: 50px;\ncolor: #4d57af;\n @media (max-width: 500px) {\n display: none;\n  }\n"]);return d=function(){return e},e}function g(){var e=Object(r.a)(["\ndisplay: flex;\ntext-align: center;\nalign-items: center;\npadding: 20px 120px ; \nbox-shadow: 2px 2px 2px 0 rgba(0,0,0,0.1);\n @media (max-width: 500px) {\n padding: 0 0 ;\n  }\n  @media (max-width: 300px){\n  font-size: 5px;\n}\n\n\n>a{\ntext-decoration:none;\nfont-size: 2em;\nmargin: 0 20px;\npadding: 0 10px ;\ncolor:black;\nborder-radius: 10px ;\n&.selected{\nbackground: #b8dbaa;\n}\n}\n"]);return g=function(){return e},e}var m=o.a.div(g()),h=o.a.div(d()),O=o.a.div(b()),y=Object(o.a)(c.b)(f()),v=Object(p.a)((function(){var e=Object(s.a)(),t=e.AuthStore,n=e.UserStore,r=Object(u.g)();return Object(a.useEffect)((function(){n.pullUser()}),[n]),i.a.createElement("div",null,i.a.createElement(m,null,i.a.createElement(h,null,"Panda"),i.a.createElement(y,{to:"/home",activeClassName:"selected",exact:!0},"\u9996\u9875"),i.a.createElement(y,{to:"/history",activeClassName:"selected"},"\u4e0a\u4f20\u5386\u53f2"),i.a.createElement(y,{to:"/about",activeClassName:"selected"},"\u5173\u4e8e"),i.a.createElement(O,null,n.currentUser?i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,n.currentUser.attributes.username),i.a.createElement(l.a,{type:"primary",onClick:function(){t.logout(),r.push("./login")}}," \u6ce8\u9500 ")):i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{type:"primary",onClick:function(){r.push("./login")}}," \u767b\u5f55 "),i.a.createElement(l.a,{type:"primary",onClick:function(){r.push("./register")}}," \u6ce8\u518c ")))))}));function j(){var e=Object(r.a)(["\nflex-grow: 1;\n"]);return j=function(){return e},e}function w(){var e=Object(r.a)(["\nheight: 100vh;\ndisplay: flex;\nflex-direction: column-reverse;\noverflow: scroll;\n"]);return w=function(){return e},e}var x=o.a.div(w()),E=o.a.div(j()),U=Object(p.a)((function(e){return i.a.createElement(x,null,i.a.createElement(E,null,e.children),i.a.createElement(v,null))}))}}]);
//# sourceMappingURL=11.9b3131a3.chunk.js.map