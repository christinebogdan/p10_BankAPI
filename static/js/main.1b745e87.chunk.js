(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(19),c=n.n(s),i=(n(31),n.p+"static/media/argentBankLogo.e031a16c.png"),o=(n(32),n(14)),u=n(15),l=n(6),m=n(11),j=n.n(m),b=n(13),d={getToken:function(e){return h.apply(this,arguments)},getProfile:function(e){return p.apply(this,arguments)},updateName:function(e){return f.apply(this,arguments)}};function h(){return(h=Object(b.a)(j.a.mark((function e(t){var n,a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=3,fetch("http://localhost:3001/api/v1/user/login",n);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.statusText);case 6:return e.next=8,a.json();case 8:return r=e.sent,s=r.body.token,sessionStorage.setItem("user",s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.next=3,fetch("http://localhost:3001/api/v1/user/profile",n);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.statusText);case 6:return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(b.a)(j.a.mark((function e(t){var n,a,r,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.getItem("user"),a={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)},e.next=4,fetch("http://localhost:3001/api/v1/user/profile",a);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error(r.statusText);case 7:return e.next=9,r.json();case 9:return s=e.sent,c=s.body,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=n(8),x=Object(O.a)(),g="form/username",N="form/password",v="form/rememberme",y="form/submit",k="login/request",w="login/success",I="login/error",S="user/logout",C="user/editname",A="user/firstname",B="user/lastname",F="user/success",T={username:function(e){return{type:g,value:e}},password:function(e){return{type:N,value:e}},rememberme:function(e){return{type:v,value:e}},request:P,auth:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n,a){var r,s,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(P(e.username)),t.next=4,d.getToken(e);case 4:return r=t.sent,t.next=7,d.getProfile(r);case 7:s=t.sent,c=s.body,sessionStorage.setItem("firstName",c.firstName),sessionStorage.setItem("lastName",c.lastName),n(_({token:r,userInfo:c})),x.push("/profile"),n({type:y}),t.next=21;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0),n({type:I}),console.log(a());case 21:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e,n){return t.apply(this,arguments)}}()},login:_,loggingOut:function(){return function(e,t){sessionStorage.clear(),e({type:S})}},editName:L,editFirstName:E,editLastName:D,updateName:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n,a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.updateName(e);case 3:r=t.sent,n({type:F,value:r}),n(E("")),n(D("")),n(L()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}};function P(e){return{type:k,value:e}}function _(e){return{type:w,value:e}}function L(){return{type:C}}function E(e){return{type:A,value:e}}function D(e){return{type:B,value:e}}var J=n(0);var W=function(e){var t=Object(l.b)(),n=Object(l.c)((function(e){return e.authentication}));return n.userInfo.firstName,Object(J.jsxs)("nav",{className:"main-nav",children:[Object(J.jsxs)(u.a,{className:"main-nav-logo",to:"/",children:[Object(J.jsx)("img",{className:"main-nav-logo-image",src:i,alt:"Argent Bank Logo"}),Object(J.jsx)("h1",{className:"sr-only",children:"Argent Bank"})]}),Object(J.jsx)("div",{children:n.isAuthenticated?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("div",{children:[Object(J.jsx)(o.a,{icon:"user-circle"}),Object(J.jsx)(u.a,{to:"/profile",className:"main-nav-item",children:n.userInfo.firstName})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)(o.a,{icon:"sign-out-alt"}),Object(J.jsx)(u.a,{to:"/",className:"main-nav-item",onClick:function(){return t(T.loggingOut())},children:"Sign Out"})]})]}):Object(J.jsxs)("div",{children:[Object(J.jsx)(o.a,{icon:"user-circle"}),Object(J.jsx)(u.a,{to:"/login",className:"main-nav-item",children:"Sign In"})]})})]})},$=(n(46),n.p+"static/media/bank-tree.4d59987c.jpeg"),q={backgroundImage:"url(".concat($,")")};var z=function(e){return Object(J.jsx)("div",{className:"hero",style:q,children:Object(J.jsxs)("section",{className:"hero-content",children:[Object(J.jsx)("h2",{className:"sr-only",children:"Promoted Content"}),Object(J.jsx)("p",{className:"subtitle",children:"No fees."}),Object(J.jsx)("p",{className:"subtitle",children:"No minimum deposit."}),Object(J.jsx)("p",{className:"subtitle",children:"High interest rates."}),Object(J.jsx)("p",{className:"text",children:"Open a savings account with Argent Bank today!"})]})})},M=(n(47),n(48),{priority:{img:n.p+"static/media/icon-chat.e238539d.png",h3:"You are our #1 priority",text:"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."},money:{img:n.p+"static/media/icon-money.8ec88bb1.png",h3:"More savings means higher rates",text:"The more you save with us, the higher your interest rate will be!"},security:{img:n.p+"static/media/icon-security.1c819fa1.png",h3:"Security you can trust",text:"We use top of the line encryption to make sure your data and money is always safe."}});var U=function(e){return Object(J.jsxs)("div",{className:"feature-item",children:[Object(J.jsx)("img",{src:M[e.topic].img,alt:"Chat Icon",className:"feature-icon"}),Object(J.jsx)("h3",{className:"feature-item-title",children:M[e.topic].h3}),Object(J.jsx)("p",{children:M[e.topic].text})]})};var Y=function(e){return Object(J.jsxs)("section",{className:"features",children:[Object(J.jsx)("h2",{className:"sr-only",children:"Features"}),Object(J.jsx)(U,{topic:"priority"}),Object(J.jsx)(U,{topic:"money"}),Object(J.jsx)(U,{topic:"security"})]})};var H=function(e){return Object(J.jsxs)("main",{className:"main",children:[Object(J.jsx)(z,{}),Object(J.jsx)(Y,{})]})};n(49);var R=function(e){var t=Object(l.c)((function(e){return e.formInput})),n=Object(l.b)(),a=function(e){"username"===e.target.id?n(T.username(e.target.value)):"password"===e.target.id?n(T.password(e.target.value)):"remember-me"===e.target.id&&n(T.rememberme(!!e.target.checked))};return Object(J.jsx)("main",{className:"main bg-dark",children:Object(J.jsxs)("section",{className:"sign-in-content",children:[Object(J.jsx)(o.a,{icon:"user-circle"}),Object(J.jsx)("h1",{children:"Sign In"}),Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={email:t.username,password:t.password};n(T.auth(a))},children:[Object(J.jsxs)("div",{className:"input-wrapper",children:[Object(J.jsx)("label",{htmlFor:"username",children:"Username"}),Object(J.jsx)("input",{type:"text",id:"username",onChange:a})]}),Object(J.jsxs)("div",{className:"input-wrapper",children:[Object(J.jsx)("label",{htmlFor:"password",children:"Password"}),Object(J.jsx)("input",{type:"password",id:"password",onChange:a})]}),Object(J.jsxs)("div",{className:"input-remember",children:[Object(J.jsx)("input",{type:"checkbox",id:"remember-me",onChange:a}),Object(J.jsx)("label",{htmlFor:"remember-me",children:"Remember me"})]}),Object(J.jsx)("input",{type:"submit",value:"Sign In",className:"sign-in-button"})]})]})})};n(50),n(51),n(52);var V=function(e){var t=Object(l.c)((function(e){return e.authentication}));return Object(J.jsxs)("section",{className:t.editName?"account border-light":"account",children:[Object(J.jsxs)("div",{className:"account-content-wrapper",children:[Object(J.jsx)("h3",{className:"account-title",children:e.title}),Object(J.jsx)("p",{className:"account-amount",children:e.amount}),Object(J.jsx)("p",{className:"account-amount-description",children:e.description})]}),Object(J.jsx)("div",{className:"account-content-wrapper cta",children:Object(J.jsx)("button",{className:t.editName?"transaction-button button-purple":"transaction-button",children:"View transactions"})})]})},G=[{title:"Argent Bank Checking (x8349)",amount:"$2,082.79",description:"Available Balance"},{title:"Argent Bank Savings (x6712)",amount:"$10,928.42",description:"Available Balance"},{title:"Argent Bank Credit Card (x8349)",amount:"$184.30",description:"Current Balance"}];var K=function(){return Object(J.jsx)(J.Fragment,{children:G.map((function(e,t){return Object(J.jsx)(V,{title:e.title,amount:e.amount,description:e.description},t)}))})};var Q=function(e){var t=Object(l.c)((function(e){return e.authentication})),n=Object(l.b)(),a=function(){n(T.editName())},r=function(e){"firstName"===e.target.id?n(T.editFirstName(e.target.value)):"lastName"===e.target.id&&n(T.editLastName(e.target.value))},s=function(e){e.preventDefault();var a=t.editNameInput;n(T.updateName(a)),sessionStorage.setItem("firstName",a.firstName),sessionStorage.setItem("lastName",a.lastName)},c=function(e){e.preventDefault(),n(T.editName())};return Object(J.jsxs)("main",{className:t.editName?"main bg-light":"main bg-dark",children:[Object(J.jsx)("div",{className:t.editName?"header header-dark":"header header-light",children:t.editName?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Welcome back"}),Object(J.jsxs)("form",{className:"form",children:[Object(J.jsx)("input",{className:"editName",type:"text",id:"firstName",placeholder:t.userInfo.firstName,onChange:r}),Object(J.jsx)("input",{className:"editName",type:"test",id:"lastName",placeholder:t.userInfo.lastName,onChange:r}),Object(J.jsxs)("div",{className:"editName__buttons",children:[Object(J.jsx)("button",{className:"editName__button",onClick:s,children:"Save"}),Object(J.jsx)("button",{className:"editName__button",onClick:c,children:"Cancel"})]})]})]}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("h1",{children:["Welcome back",Object(J.jsx)("br",{}),t.userInfo.firstName," ",t.userInfo.lastName]}),Object(J.jsx)("button",{className:"edit-button",onClick:a,children:"Edit Name"})]})}),Object(J.jsx)("h2",{className:"sr-only",children:"Accounts"}),Object(J.jsx)(K,{})]})};n(53);var X=function(e){return Object(J.jsx)("footer",{className:"footer",children:Object(J.jsx)("p",{className:"footer-text",children:"Copyright 2020 Argent Bank"})})},Z=(n(54),n(12)),ee=n(24),te=n(5);Z.b.add(ee.b,ee.a);var ne=function(){var e=Object(l.c)((function(e){return e.authentication}));return Object(J.jsxs)(te.c,{history:x,basename:"/p10_BankAPI",children:[Object(J.jsx)("header",{children:Object(J.jsx)(W,{})}),Object(J.jsxs)(te.d,{children:[Object(J.jsx)(te.b,{exact:!0,path:"/",children:Object(J.jsx)(H,{})}),Object(J.jsx)(te.b,{path:"/login",children:Object(J.jsx)(R,{})}),Object(J.jsx)(te.b,{path:"/profile",children:e.isAuthenticated?Object(J.jsx)(Q,{}):Object(J.jsx)(te.a,{to:"/"})})]}),Object(J.jsx)(X,{})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},re=n(17),se=n(26),ce=n(3),ie={username:"",password:"",rememberme:!1,firstName:"",lastName:""};var oe={loggingIn:!1,isAuthenticated:!!sessionStorage.user,token:"",userInfo:{firstName:sessionStorage.firstName,lastName:sessionStorage.lastName},editName:!1,editNameInput:{firstName:"",lastName:""}};var ue=Object(re.b)({formInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(ce.a)(Object(ce.a)({},e),{},{username:t.value});case N:return Object(ce.a)(Object(ce.a)({},e),{},{password:t.value});case v:return Object(ce.a)(Object(ce.a)({},e),{},{rememberme:t.value});case y:return Object(ce.a)(Object(ce.a)({},e),{},{username:"",password:""});default:return e}},authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(ce.a)(Object(ce.a)({},e),{},{loggingIn:!0});case w:return Object(ce.a)(Object(ce.a)({},e),{},{loggingIn:!1,isAuthenticated:!0,token:t.value.token,userInfo:t.value.userInfo});case I:return Object(ce.a)(Object(ce.a)({},e),{},{loggingIn:!1});case S:return Object(ce.a)(Object(ce.a)({},e),{},{isAuthenticated:!1,token:"",userInfo:{}});case C:return Object(ce.a)(Object(ce.a)({},e),{},{editName:!e.editName});case A:return Object(ce.a)(Object(ce.a)({},e),{},{editNameInput:Object(ce.a)(Object(ce.a)({},e.editNameInput),{},{firstName:t.value})});case B:return Object(ce.a)(Object(ce.a)({},e),{},{editNameInput:Object(ce.a)(Object(ce.a)({},e.editNameInput),{},{lastName:t.value})});case F:return Object(ce.a)(Object(ce.a)({},e),{},{userInfo:t.value});default:return e}}}),le=Object(re.c)(ue,Object(re.a)(se.a));c.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(l.a,{store:le,children:Object(J.jsx)(ne,{})})}),document.getElementById("root")),ae()}},[[55,1,2]]]);
//# sourceMappingURL=main.1b745e87.chunk.js.map