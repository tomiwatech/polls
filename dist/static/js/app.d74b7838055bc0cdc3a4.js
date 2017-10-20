webpackJsonp([1],{"10xB":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"register-div"},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h3",{staticClass:"text-center"},[t._v("Sign Up to "),a("span",{staticStyle:{display:"inline-block"}},[a("a",[a("router-link",{attrs:{to:"/"}},[t._v("POLL APP")])],1)])])]),t._v(" "),a("div",{staticClass:"text-center text-danger"},[t._v("\n\t\t\t"+t._s(t.msg)+"\n\t\t")]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"dForm",attrs:{name:"registerForm",autocomplete:"off"}},[a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("fullname")}},[a("label",{staticClass:"control-label",attrs:{for:"userFullName"}},[t._v("Full Name: ")]),t._v(" "),a("p",{class:{control:!0}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.fullname,expression:"register.fullname"},{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"form-control input-lg",attrs:{name:"fullname",type:"text",placeholder:"Firstname  Lastname"},domProps:{value:t.register.fullname},on:{input:function(e){e.target.composing||(t.register.fullname=e.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("fullname"),expression:"errors.has('fullname')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("fullname")))]),t._v(" "),a("p")]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("username")}},[a("label",{staticClass:"control-label",attrs:{for:"username"}},[t._v("User Name: ")]),t._v(" "),a("p",{class:{control:!0}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"},{name:"validate",rawName:"v-validate",value:"required|alpha_num|min:4",expression:"'required|alpha_num|min:4'"}],staticClass:"form-control input-lg",attrs:{name:"username",type:"text",placeholder:"Username"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||(t.register.username=e.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("username"),expression:"errors.has('username')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("username")))]),t._v(" "),a("p")]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("email")}},[a("label",{staticClass:"control-label",attrs:{for:"email"}},[t._v("Email: ")]),t._v(" "),a("p",{class:{control:!0}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Email",name:"email"},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||(t.register.email=e.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]),t._v(" "),a("p")]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("password")}},[a("label",{staticClass:"control-label",attrs:{for:"password"}},[t._v("Password: ")]),t._v(" "),a("p",{class:{control:!0}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"},{name:"validate",rawName:"v-validate",value:"required|alpha_num|min:6",expression:"'required|alpha_num|min:6'"}],staticClass:"form-control input-lg",attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||(t.register.password=e.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password"),expression:"errors.has('password')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("password")))]),t._v(" "),a("p")]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("number")}},[a("label",{staticClass:"control-label",attrs:{for:"number"}},[t._v("Phone Number: ")]),t._v(" "),a("p",{class:{control:!0}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.phone,expression:"register.phone"},{name:"validate",rawName:"v-validate",value:{rules:{regex:/^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g}},expression:"{ rules: { regex: /^([0]{1})([7-9]{1})([0|1]{1})([\\d]{1})([\\d]{7,8})$/g} }"}],staticClass:"form-control input-lg",attrs:{name:"number",type:"tel",placeholder:"Phone number"},domProps:{value:t.register.phone},on:{input:function(e){e.target.composing||(t.register.phone=e.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("number"),expression:"errors.has('number')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("number")))]),t._v(" "),a("p")]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-block btn-lg btn-sign",attrs:{disabled:!(t.fields.username&&t.fields.username.valid&&t.fields.password&&t.fields.password.valid&&t.fields.fullname&&t.fields.fullname.valid&&t.fields.email&&t.fields.email.valid)},on:{click:function(e){e.preventDefault(),t.btnRegister(e)}}},[t._v("REGISTER")])])])])]),t._v(" "),a("div",[a("p",{staticClass:"form-footer"},[t._v("Already have an account? "),a("span",[a("a",[a("router-link",{attrs:{to:"/login"}},[t._v("Sign In")])],1)])])])])])])},r=[],i={render:s,staticRenderFns:r};e.a=i},"7zPv":function(t,e,a){"use strict";var s=a("dmtU");e.a={components:{"poll-view":s.a},name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},ARQ3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root-element"},[a("div",{staticClass:"container poll-container",attrs:{id:"create-poll"}},[a("div",{staticClass:"row grid-1 container"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"make-poll"},[a("form",[a("div",{staticClass:"question-div"},[a("div",{staticClass:"form-group"},[a("h3",[t._v("Enter Question Here:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{placeholder:"Enter your question here"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("h4",[t._v("Enter Choices Here:")]),t._v(" "),t._l(t.finds,function(e,s){return a("div",{key:s},[a("div",{staticClass:"poll-options"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"find.value"}],attrs:{id:s,autocompelete:"off",type:"text",placeholder:t.xyz},domProps:{value:e.value},on:{keyup:t.txtAddInput,input:function(t){t.target.composing||(e.value=t.target.value)}}})])])})],2)]),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"view-poll"},[a("form",[a("div",{staticClass:"preview-poll"},[a("div",{staticClass:"form-group"},[a("h2",{attrs:{id:"preview-text"}},[t._v("Preview")]),t._v(" "),a("h1",{staticClass:"preview",attrs:{readonly:""}},[t._v(t._s(t.msg))])]),t._v(" "),a("div",{staticClass:"form-group"},t._l(t.finds,function(e,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:""!=e.value,expression:"find.value != ''"}],key:s,staticClass:"opt-view row"},[a("input",{staticClass:"optm col-sm-4",attrs:{type:"radio",id:s,name:"nameRadio"},domProps:{value:e.value}}),t._v(" "),a("label",{staticClass:"col-sm-8",attrs:{for:"option"}},[t._v(" "+t._s(e.value)+" ")]),t._v(" "),a("hr")])}))]),t._v(" "),a("div",{staticStyle:{"margin-top":"40px"}},[a("button",{staticClass:"btn-v btn btn-success",on:{click:t.vote}},[t._v("VOTE")]),t._v(" "),a("button",{staticClass:"btn-r btn btn-info"},[t._v("RESULT")])])])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create Poll")])])}],i={render:s,staticRenderFns:r};e.a=i},BWx7:function(t,e){},E4Dd:function(t,e,a){"use strict";e.a={name:"poll",data:function(){return{msg:"",xyz:"Choice...",p_options:["Option 1"],finds:[{value:""}],aaa:null,selected:""}},methods:{txtAddInput:function(t){""!=this.finds.value&&t.target.id==this.finds.length-1&&(t.target.isDirty=!0,this.finds.push({value:""})),t.target.isDirty&&""==t.target.value&&this.finds.splice(t.target.id,1)},btnAddInput:function(){this.finds.push({value:""})},vote:function(){alert("You Voted for "+this.selected)}}}},Fs8J:function(t,e,a){"use strict";var s=a("dmtU");e.a={components:{"poll-view":s.a},name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){}}},HCTz:function(t,e,a){"use strict";e.a={props:["username"],data:function(){return{user:"",loginType:!1}},methods:{logout:function(){localStorage.removeItem("token")}},mounted:function(){var t=this,e=localStorage.getItem("token");void 0!==e&&this.axios.get("https://poolap.herokuapp.com/users/",{headers:{"x-access-token":e}}).then(function(e){t.user=e.data.users[0].username,console.log(e.data.users[0].username)})}}},JJT7:function(t,e,a){"use strict";var s=a("mvHQ"),r=a.n(s);e.a={name:"HelloWorld",data:function(){return{msg:"",register:{fullname:"",username:"",email:"",password:"",phone:""}}},methods:{btnRegister:function(){var t=this;console.log("AFTER: "+r()(this.register)),this.axios.post("https://poolap.herokuapp.com/users/",{username:this.register.username,fullname:this.register.fullname,email:this.register.email,password:this.register.password,phone:this.register.phone}).then(function(e){var a=e.data.token;a?(console.log(a),localStorage.setItem("token",a),t.register.username="",t.register.fullname="",t.register.email="",t.register.password="",t.register.phone="",t.$router.push("/login")):(console.log(e.data),t.register.username="",t.register.fullname="",t.register.email="",t.register.password="",t.register.phone="",t.msg="")}).catch(function(t){console.log(t)})}},mounted:function(){console.log("BEFORE: "+r()(this.register))}}},M93x:function(t,e,a){"use strict";function s(t){a("tOL2")}var r=a("xJD8"),i=a("TITT"),n=a("VU/8"),o=s,l=n(r.a,i.a,!1,o,null,null);e.a=l.exports},"N/0d":function(t,e,a){"use strict";function s(t){a("j7Gm")}var r=a("7zPv"),i=a("hCWL"),n=a("VU/8"),o=s,l=n(r.a,i.a,!1,o,"data-v-65672a92",null);e.a=l.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("M93x"),i=a("YaEn"),n=a("sUu7"),o=a("mtWM"),l=a.n(o),c=a("Rf8U"),u=a.n(c);s.a.use(n.a),s.a.use(u.a,l.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},TITT:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header",{attrs:{username:t.user}}),t._v(" "),a("router-view"),t._v(" "),a("app-footer")],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},TVmP:function(t,e,a){"use strict";function s(t){a("BWx7")}var r=a("UthT"),i=a("lRiq"),n=a("VU/8"),o=s,l=n(r.a,i.a,!1,o,"data-v-47adade0",null);e.a=l.exports},UthT:function(t,e,a){"use strict";e.a={data:function(){return{}}}},V19p:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"navbar navbar-default navbar-fixed-top nav-trans",attrs:{id:"navT"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),a("router-link",{staticClass:"navbar-brand mp-logo",attrs:{to:"/"}},[t._v("POLL APP")])],1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-nav-demo"}},[a("div",{staticClass:"nav navbar-nav navbar-right"},[a("li",[a("a",{staticClass:"nav-link"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)]),t._v(" "),t._m(1),t._v(" "),a("li",[a("a",[a("router-link",{attrs:{to:"/result"}},[t._v("Result")])],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t.user?a("div",{staticClass:"login-state-in"},[a("li",{staticClass:"login-user"},[a("a",{attrs:{href:"#"},on:{click:function(e){t.logout()}}},[t._v(" Logout ")])]),t._v(" "),a("li",[a("a",{staticClass:"btn btn-primary header-btn",attrs:{href:"#",id:"btn-tran-login"}},[a("router-link",{staticClass:"userText",attrs:{to:"/register"}},[t._v(t._s(t.user))])],1)])]):a("div",{staticClass:"login-state-out"},[a("li",{staticClass:"login-user-out"},[a("a",{attrs:{href:"#"}},[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)]),t._v(" "),a("li",[a("a",{staticClass:"btn btn-primary header-btn-out",attrs:{href:"#",id:"btn-tran-out"}},[a("router-link",{attrs:{to:"/register"}},[t._v("Sign up")])],1)])])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-nav-demo","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#livepolls"}},[t._v("Live-Polls")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("features")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#about"}},[t._v("About")])])}],i={render:s,staticRenderFns:r};e.a=i},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),r=a("/ocq"),i=a("lO7g"),n=a("xJsL"),o=a("dIqY"),l=a("N/0d");s.a.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",name:"Main",component:i.a},{path:"/login",name:"signin",component:n.a},{path:"/register",name:"signup",component:o.a},{path:"/result",name:"result",component:l.a}]})},dIqY:function(t,e,a){"use strict";function s(t){a("teyL")}var r=a("JJT7"),i=a("10xB"),n=a("VU/8"),o=s,l=n(r.a,i.a,!1,o,"data-v-764abad8",null);e.a=l.exports},dmtU:function(t,e,a){"use strict";function s(t){a("gG53")}var r=a("E4Dd"),i=a("ARQ3"),n=a("VU/8"),o=s,l=n(r.a,i.a,!1,o,"data-v-59d14c74",null);e.a=l.exports},drXt:function(t,e,a){t.exports=a.p+"static/img/poll.d0561ee.png"},fLiO:function(t,e){},gG53:function(t,e){},hCWL:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[t._m(0),t._v(" "),a("poll-view")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mhome"},[a("div",{staticClass:"overlay",attrs:{id:"home"}},[a("div",{staticClass:"home-overlay"},[a("div",{staticClass:"mp-abt"},[a("h2",[t._v(" POLLAPP CREATES ELECTION FOR ORGRANIZATIONS")]),t._v(" "),a("h4",[t._v("PollApp is an application that seamlessly allow user to create poll(opinion),which allow other user to vote or comment on.which is use to make decision and determine opinions.")])]),t._v(" "),a("div",[a("a",{staticClass:"btn home-btn"},[t._v("CREATE POLL")])])])]),t._v(" "),a("div",{staticClass:"col-md-12 home "})])}],i={render:s,staticRenderFns:r};e.a=i},j7Gm:function(t,e){},je9j:function(t,e){},lO7g:function(t,e,a){"use strict";function s(t){a("fLiO")}var r=a("Fs8J"),i=a("tUOA"),n=a("VU/8"),o=s,l=n(r.a,i.a,!1,o,"data-v-1c1a1994",null);e.a=l.exports},lRiq:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer "},[a("nav",{staticClass:"navbar navbar-static-bottom footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[a("a",{staticClass:"navbar-brand mp-logo",attrs:{href:"#home","scroll-to-item":"","scroll-to":"#home"}},[t._v("\n\t\t\t\t\tPOLL APP\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"nav navbar-nav navbar-right"},[a("li",[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("View Live Polls")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Contact")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("The Team")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-google-plus"})])])])])])])}],i={render:s,staticRenderFns:r};e.a=i},nJ1D:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"login-div"},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h3",{staticClass:"text-center"},[t._v("Sign In to "),a("span",{staticStyle:{display:"inline-block"}},[a("a",{staticClass:"a-mp"},[a("router-link",{attrs:{to:"/"}},[t._v("POLL APP")])],1)])])]),t._v(" "),a("div",{staticClass:"text-center text-danger"},[t._v("\n\t\t\t"+t._s(t.msg)+"\n\t\t\t"),a("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("username")}},[a("label",{staticClass:"control-label",attrs:{for:"username"}},[t._v("Username: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"},{name:"validate",rawName:"v-validate",value:"required|alpha_num|min:4",expression:"'required|alpha_num|min:4'"}],staticClass:"form-control input-lg",attrs:{name:"username",type:"text",placeholder:"Username"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||(t.login.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("password")}},[a("label",{staticClass:"control-label",attrs:{for:"userPassword"}},[t._v("Password: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control input-lg",attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||(t.login.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("terms")}},[t._m(0)]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-block btn-lg btn-log",on:{click:function(e){e.preventDefault(),t.btnLogin(e)}}},[t._v(" Log in")])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",[a("p",{staticClass:"form-footer"},[t._v("Don't have an account? "),a("span",[a("a",[a("router-link",{attrs:{to:"/register"}},[t._v("Sign Up")])],1)])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"control-label",attrs:{for:"userPassword"}},[a("input",{attrs:{name:"terms",type:"checkbox"}}),t._v(" Remember me ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"glyphicon glyphicon-lock",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[a("a",{attrs:{href:"#"}},[t._v("Forgot your password?")])])])}],i={render:s,staticRenderFns:r};e.a=i},"nKb+":function(t,e,a){"use strict";var s=a("mvHQ"),r=a.n(s);e.a={name:"HelloWorld",data:function(){return{msg:"",loading:!1,login:{username:"",password:""}}},methods:{btnLogin:function(){var t=this;console.log("AFTER: "+r()(this.login)),this.loading=!0,this.axios.post("https://poolap.herokuapp.com/users/authenticate",{username:this.login.username,password:this.login.password}).then(function(e){var a=e.data.token;a?(localStorage.setItem("token",a),t.login.username="",t.login.password="",t.loading=!1,t.$router.push("/")):(t.msg="wrong username or password",t.login.username="",t.login.password="")}).catch(function(t){console.log(t)})}},mounted:function(){console.log("BEFORE: "+r()(this.login)),console.log(this.fields.username)}}},tOL2:function(t,e){},tUOA:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("poll-view")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mhome"},[a("div",{staticClass:"overlay",attrs:{id:"home"}},[a("div",{staticClass:"home-overlay"},[a("div",{staticClass:"mp-abt"},[a("h2",[t._v(" POLLAPP CREATES ELECTION FOR ORGRANIZATIONS")]),t._v(" "),a("h4",[t._v("PollApp is an application that seamlessly allow user to create poll(opinion),which allow other user to vote or comment on.which is use to make decision and determine opinions.")])]),t._v(" "),a("div",[a("a",{staticClass:"btn home-btn",attrs:{href:"#create-poll"}},[t._v("CREATE POLL")])])])]),t._v(" "),a("div",{staticClass:"col-md-12 home "})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wide"},[a("div",{staticClass:"containera guide centera bigpad2"},[a("h2",{staticClass:"bigh2 grey"},[t._v("How to Publish a Poll in 3 Steps")]),t._v(" "),a("div",{staticClass:"col-3"},[a("div",{staticClass:"title-3"},[a("i",{staticClass:"fa fa-edit"}),t._v(" "),a("h3",[t._v("1. Add Questions")])]),t._v(" "),a("p",[t._v("Type your question and then add answers. From this point you can simply hit create poll and you're ready to go. The rest of the steps are optional. No account or signup required.")])]),t._v(" "),a("div",{staticClass:"col-3"},[a("div",{staticClass:"title-3"},[a("i",{staticClass:"fa fa-send"}),t._v(" "),a("h3",[t._v("2. Set Options")])]),t._v(" "),a("p",[t._v("On the Themes tab select one of our default themes or create your own. On the settings tab set options like allowing multiple answers, allowing voters to enter their own answers and much more")])]),t._v(" "),a("div",{staticClass:"col-3"},[a("div",{staticClass:"title-3"},[a("i",{staticClass:"fa fa-pie-chart"}),t._v(" "),a("h3",[t._v("3. Share & Report")])]),t._v(" "),a("p",[t._v("Click Share and copy your poll Vote url to share with voters. You can also hit Embed to place the poll directly on your website or blog.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wide bg"},[s("div",{staticClass:"containera guide bigpad2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("img",{staticClass:"guideimg imgborder",attrs:{alt:"Generate leads with your quiz",src:a("drXt")}})]),t._v(" "),s("div",{staticClass:"col-md-6",staticStyle:{padding:"10px"}},[s("h4",{staticClass:"bigh2 grey",staticStyle:{"font-weight":"lighter","text-align":"center","word-spacing":"6px"}},[t._v("Live Results In Clear Concise Graphs")]),t._v(" "),s("h3"),t._v(" "),s("p",{staticStyle:{"padding-top":"10px"}},[t._v("\n\t\t\t\t\t\t\tLive graphs show your poll results immediately in easy to understand and read, bar graph format. But final results don't always reveal the whole picture. The longitudinal graph provides a visual representation of poll votes over time.\n\t\t\t\t\t\t")])])])])])}],i={render:s,staticRenderFns:r};e.a=i},teIl:function(t,e,a){"use strict";function s(t){a("vbCx")}var r=a("HCTz"),i=a("V19p"),n=a("VU/8"),o=s,l=n(r.a,i.a,!1,o,"data-v-0548e5fc",null);e.a=l.exports},teyL:function(t,e){},vbCx:function(t,e){},xJD8:function(t,e,a){"use strict";var s=a("teIl"),r=a("TVmP");e.a={components:{"app-header":s.a,"app-footer":r.a},name:"app",data:function(){return{user:"",loading:!1}}}},xJsL:function(t,e,a){"use strict";function s(t){a("je9j")}var r=a("nKb+"),i=a("nJ1D"),n=a("VU/8"),o=s,l=n(r.a,i.a,!1,o,"data-v-f5e400f8",null);e.a=l.exports}},["NHnr"]);
//# sourceMappingURL=app.d74b7838055bc0cdc3a4.js.map