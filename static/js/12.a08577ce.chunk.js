(this.webpackJsonpconversion=this.webpackJsonpconversion||[]).push([[12],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"Login",(function(){return v}));var r=n(43),a=n(0),o=n.n(a),i=n(66),c=n(308),s=n(311),u=n(146),l=n(44),p=n(48),f=n(1),b=n(34),m=n(45);function g(){var e=Object(r.a)(["\ntext-align: center;\n"]);return g=function(){return e},e}function d(){var e=Object(r.a)(["\nwidth: 600px;\nmargin: 100px auto;\nbox-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);\npadding: 20px;\nbackground:rgba(241, 243, 244,0.25) ;\n\n"]);return d=function(){return e},e}var h=l.a.div(d()),y=l.a.h1(g()),O={labelCol:{span:8},wrapperCol:{span:16}},j={wrapperCol:{offset:8,span:16}},v=Object(m.a)((function(){var e=Object(p.a)(),t=e.AuthStore,n=e.UserStore,r=Object(f.g)(),a={userName:function(e,t){return/\W/.test(t)?Promise.reject("\u4e0d\u80fd\u51fa\u73b0\u5b57\u6bcd\u4e0b\u5212\u7ebf\u4ee5\u5916\u7684\u5b57\u7b26"):t.length<4||t.length>10?Promise.reject("\u7528\u6237\u540d\u957f\u5ea6\u53ea\u80fd\u57284\u81f310\u4e2a\u5b57\u7b26"):Promise.resolve()}};return o.a.createElement(i.a,null,o.a.createElement(h,null,o.a.createElement(y,null,"\u767b\u5f55"),o.a.createElement(c.a,Object.assign({},O,{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e),t.setUserName(e.username),t.setPassWorld(e.password),t.Login().then((function(){console.log(n.currentUser),console.log(b.a.getCurrent()),r.push("./")})).catch((function(){console.log("\u767b\u5f55\u5931\u8d25\uff0c\u4ec0\u4e48\u90fd\u4e0d\u505a")}))},onFinishFailed:function(e){console.log("Failed:",e)}}),o.a.createElement(c.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"},{validator:a.userName}]},o.a.createElement(s.a,null)),o.a.createElement(c.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"},{min:4,message:"\u6700\u5c11\u8f93\u5165\u56db\u4f4d"},{max:16,message:"\u6700\u591a\u8f93\u5165\u5341\u516d\u4f4d"}]},o.a.createElement(s.a.Password,null)),o.a.createElement(c.a.Item,j,o.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u767b\u5f55")))))}))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(78),a=n.n(r);a.a.init({appId:"YId6yG8LcyK0CGwLFaYIgYgf-gzGzoHsz",appKey:"0IwcJacKUg9qaHmGBJrjwCC6",serverURL:"https://yid6yg8l.lc-cn-n1-shared.com"});var o={register:function(e,t){var n=new r.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(t)}),(function(e){return t(e)}))}))},login:function(e,t){return new Promise((function(n,a){r.User.logIn(e,t).then((function(e){return n(e)}),(function(e){return a(e)}))}))},logout:function(){r.User.logOut().then((function(){console.log("\u6ce8\u9500\u6210\u529f")})).catch((function(e){return console.log(e)}))},getCurrent:function(){return r.User.current()}},i={add:function(e,t){var n=new a.a.Object("Image"),r=new a.a.File(t,e);return n.set("filename",t),n.set("owner",a.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){console.log("\u4e0a\u4f20\u6210\u529f"),e(t)})).catch((function(e){console.log("err"),t(e)}))}))},find:function(e){var t=e.page,n=void 0===t?0:t,o=e.limit,i=void 0===o?10:o,c=new r.Query("Image");return c.include("owner"),c.limit(i),c.skip(n*i),c.descending("createdAt"),c.equalTo("owner",a.a.User.current()),new Promise((function(e,t){c.find().then((function(t){e(t)})).catch((function(e){return t(e)}))}))}}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r,a,o,i,c,s,u,l,p,f,b,m,g,d,h=n(0),y=n(38),O=n(39),j=n(40),v=n(41),w=(n(42),n(36)),U=n(34),x=new(r=function(){function e(){Object(O.a)(this,e),Object(y.a)(this,"currentUser",a,this)}return Object(j.a)(e,[{key:"pullUser",value:function(){this.currentUser=U.a.getCurrent()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),a=Object(v.a)(r.prototype,"currentUser",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(v.a)(r.prototype,"pullUser",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"pullUser"),r.prototype),Object(v.a)(r.prototype,"resetUser",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"resetUser"),r.prototype),r),P=new(o=function(){function e(){Object(O.a)(this,e),Object(y.a)(this,"values",i,this)}return Object(j.a)(e,[{key:"setUserName",value:function(e){this.values.userName=e}},{key:"setPassWorld",value:function(e){this.values.passWord=e}},{key:"Login",value:function(){var e=this;return new Promise((function(t,n){U.a.login(e.values.userName,e.values.passWord).then((function(e){x.pullUser(),t(e)})).catch((function(e){x.resetUser(),n(e)}))}))}},{key:"Register",value:function(){var e=this;return new Promise((function(t,n){U.a.register(e.values.userName,e.values.passWord).then((function(e){x.pullUser(),t(e)})).catch((function(e){x.resetUser(),n(e)}))}))}},{key:"logout",value:function(){U.a.logout(),x.resetUser()}}]),e}(),i=Object(v.a)(o.prototype,"values",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{userName:"",passWord:""}}}),Object(v.a)(o.prototype,"setUserName",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"setUserName"),o.prototype),Object(v.a)(o.prototype,"setPassWorld",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"setPassWorld"),o.prototype),Object(v.a)(o.prototype,"Login",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"Login"),o.prototype),Object(v.a)(o.prototype,"Register",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"Register"),o.prototype),Object(v.a)(o.prototype,"logout",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"logout"),o.prototype),o),E=new(c=function(){function e(){Object(O.a)(this,e),Object(y.a)(this,"filename",s,this),Object(y.a)(this,"file",u,this),Object(y.a)(this,"serveFile",l,this),Object(y.a)(this,"isUpLoading",p,this)}return Object(j.a)(e,[{key:"setFileName",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"saveFile",value:function(){var e=this;return this.isUpLoading=!0,new Promise((function(t,n){U.b.add(e.file,e.filename).then((function(n){e.serveFile=n,t(n)})).catch((function(t){e.isUpLoading=!1,n(t)})).finally((function(){return e.isUpLoading=!1}))}))}},{key:"reset",value:function(){this.isUpLoading=!1,this.serveFile=null}}]),e}(),s=Object(v.a)(c.prototype,"filename",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),u=Object(v.a)(c.prototype,"file",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=Object(v.a)(c.prototype,"serveFile",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=Object(v.a)(c.prototype,"isUpLoading",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(v.a)(c.prototype,"setFileName",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"setFileName"),c.prototype),Object(v.a)(c.prototype,"setFile",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"setFile"),c.prototype),Object(v.a)(c.prototype,"saveFile",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"saveFile"),c.prototype),Object(v.a)(c.prototype,"reset",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"reset"),c.prototype),c),k=n(313),F=new(f=function(){function e(){Object(O.a)(this,e),Object(y.a)(this,"list",b,this),Object(y.a)(this,"page",m,this),Object(y.a)(this,"isLoading",g,this),Object(y.a)(this,"hasMore",d,this),this.limit=10}return Object(j.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,U.b.find({page:this.page,limit:this.limit}).then((function(t){e.append(t),e.page++,t.length<e.limit?e.hasMore=!1:k.a.success("\u52a0\u8f7d\u6210\u529f")})).catch((function(e){k.a.error("\u52a0\u8f7d\u5931\u8d25")})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),b=Object(v.a)(f.prototype,"list",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=Object(v.a)(f.prototype,"page",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),g=Object(v.a)(f.prototype,"isLoading",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=Object(v.a)(f.prototype,"hasMore",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Object(v.a)(f.prototype,"append",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"append"),f.prototype),Object(v.a)(f.prototype,"find",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"find"),f.prototype),Object(v.a)(f.prototype,"reset",[w.f],Object.getOwnPropertyDescriptor(f.prototype,"reset"),f.prototype),f),L=Object(h.createContext)({AuthStore:P,UserStore:x,ImageStore:E,HistoryStore:F}),z=function(){return Object(h.useContext)(L)}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n(43),a=n(0),o=n.n(a),i=n(44),c=n(12),s=n(1),u=n(146),l=n(48),p=n(45);function f(){var e=Object(r.a)(["\n:hover{\nbackground: #b8dbaa;\ncolor: black;\n}\n"]);return f=function(){return e},e}function b(){var e=Object(r.a)(["\nmargin-left: auto;\n @media (max-width: 500px) {\n margin: 0 0 ;\n padding: 0 0 ;\n  }\n\n>span{\nfont-size: 30px;\n}\n>Button{\nmargin: 0 20px;\nbackground:#b8dbaa;\nborder: none;\n }\n"]);return b=function(){return e},e}function m(){var e=Object(r.a)(["\nfont-size: 50px;\ncolor: #4d57af;\n @media (max-width: 500px) {\n display: none;\n  }\n"]);return m=function(){return e},e}function g(){var e=Object(r.a)(["\ndisplay: flex;\ntext-align: center;\nalign-items: center;\npadding: 20px 120px ; \nbox-shadow: 2px 2px 2px 0 rgba(0,0,0,0.1);\n @media (max-width: 500px) {\n padding: 0 0 ;\n  }\n  @media (max-width: 300px){\n  font-size: 5px;\n}\n\n\n>a{\ntext-decoration:none;\nfont-size: 2em;\nmargin: 0 20px;\npadding: 0 10px ;\ncolor:black;\nborder-radius: 10px ;\n&.selected{\nbackground: #b8dbaa;\n}\n}\n"]);return g=function(){return e},e}var d=i.a.div(g()),h=i.a.div(m()),y=i.a.div(b()),O=Object(i.a)(c.b)(f()),j=Object(p.a)((function(){var e=Object(l.a)(),t=e.AuthStore,n=e.UserStore,r=Object(s.g)();return Object(a.useEffect)((function(){n.pullUser()}),[n]),o.a.createElement("div",null,o.a.createElement(d,null,o.a.createElement(h,null,"Panda"),o.a.createElement(O,{to:"/home",activeClassName:"selected",exact:!0},"\u9996\u9875"),o.a.createElement(O,{to:"/history",activeClassName:"selected"},"\u4e0a\u4f20\u5386\u53f2"),o.a.createElement(O,{to:"/about",activeClassName:"selected"},"\u5173\u4e8e"),o.a.createElement(y,null,n.currentUser?o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,n.currentUser.attributes.username),o.a.createElement(u.a,{type:"primary",onClick:function(){t.logout(),r.push("./login")}}," \u6ce8\u9500 ")):o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{type:"primary",onClick:function(){r.push("./login")}}," \u767b\u5f55 "),o.a.createElement(u.a,{type:"primary",onClick:function(){r.push("./register")}}," \u6ce8\u518c ")))))}));function v(){var e=Object(r.a)(["\nflex-grow: 1;\n"]);return v=function(){return e},e}function w(){var e=Object(r.a)(["\nheight: 100vh;\ndisplay: flex;\nflex-direction: column-reverse;\noverflow: scroll;\n"]);return w=function(){return e},e}var U=i.a.div(w()),x=i.a.div(v()),P=Object(p.a)((function(e){return o.a.createElement(U,null,o.a.createElement(x,null,e.children),o.a.createElement(j,null))}))}}]);
//# sourceMappingURL=12.a08577ce.chunk.js.map