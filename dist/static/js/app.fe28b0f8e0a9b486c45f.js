webpackJsonp([1],{"10xB":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"register-div"},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"text-center"},[t._v("Sign Up to "),e("span",{staticStyle:{display:"inline-block"}},[e("a",[e("router-link",{attrs:{to:"/"}},[t._v("POLL APP")])],1)])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{staticClass:"dForm",attrs:{name:"registerForm",autocomplete:"off"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"userFullName"}},[t._v("Full Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.fullname,expression:"register.fullname"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Firstname  Lastname",name:"userFullName"},domProps:{value:t.register.fullname},on:{input:function(a){a.target.composing||(t.register.fullname=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"userName"}},[t._v("User Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Username",name:"userName"},domProps:{value:t.register.username},on:{input:function(a){a.target.composing||(t.register.username=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group",class:{"has-error":t.errors.has("email")}},[e("label",{staticClass:"control-label",attrs:{for:"userEmail"}},[t._v("Email: ")]),t._v(" "),e("p",{class:{control:!0}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Email",name:"userEmail"},domProps:{value:t.register.email},on:{input:function(a){a.target.composing||(t.register.email=a.target.value)}}})]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]),t._v(" "),e("p")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"userPassword1"}},[t._v("Password: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"form-control input-lg",attrs:{type:"password",placeholder:"Password",name:"userPassword1"},domProps:{value:t.register.password},on:{input:function(a){a.target.composing||(t.register.password=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"userPhoneNumber"}},[t._v("Phone Number: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.phone,expression:"register.phone"}],staticClass:"form-control input-lg",attrs:{type:"number",placeholder:"Phone",name:"userPhoneNumber"},domProps:{value:t.register.phone},on:{input:function(a){a.target.composing||(t.register.phone=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group checkbox checkbox-primary"}),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-block btn-lg btn-sign",on:{click:t.btnRegister}},[t._v("REGISTER")])])])])]),t._v(" "),e("div",[e("p",{staticClass:"form-footer"},[t._v("Already have an account? "),e("span",[e("a",[e("router-link",{attrs:{to:"/login"}},[t._v("Sign In")])],1)])])])])])])},i=[],r={render:s,staticRenderFns:i};a.a=r},"7zPv":function(t,a,e){"use strict";var s=e("dmtU");a.a={components:{"poll-view":s.a},name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},ARQ3:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"root-element"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"container poll-container"},[e("div",{staticClass:"row grid-1 container"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"make-poll"},[e("form",[e("div",{staticClass:"question-div"},[e("div",{staticClass:"form-group"},[e("h3",[t._v("Enter Question Here:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{placeholder:"Enter your question here"},domProps:{value:t.msg},on:{input:function(a){a.target.composing||(t.msg=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("h4",[t._v("Enter Choices Here:")]),t._v(" "),t._l(t.finds,function(a,s){return e("div",{key:s},[e("div",{staticClass:"poll-options"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"find.value"}],attrs:{id:s,autocompelete:"off",type:"text",placeholder:t.xyz},domProps:{value:a.value},on:{keyup:t.txtAddInput,input:function(t){t.target.composing||(a.value=t.target.value)}}})])])})],2)]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"view-poll"},[e("form",[e("div",{staticClass:"preview-poll"},[e("div",{staticClass:"form-group"},[e("h2",{attrs:{id:"preview-text"}},[t._v("Preview")]),t._v(" "),e("h1",{staticClass:"preview",attrs:{readonly:""}},[t._v(t._s(t.msg))])]),t._v(" "),e("div",{staticClass:"form-group"},t._l(t.finds,function(a,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:""!=a.value,expression:"find.value != ''"}],key:s,staticClass:"opt-view row"},[e("input",{staticClass:"optm col-sm-4",attrs:{type:"radio",id:s,name:"nameRadio"},domProps:{value:a.value}}),t._v(" "),e("label",{staticClass:"col-sm-8",attrs:{for:"option"}},[t._v(" "+t._s(a.value)+" ")]),t._v(" "),e("hr")])}))]),t._v(" "),e("div",[e("button",{staticClass:"btn-v btn btn-success",on:{click:t.vote}},[t._v("VOTE")]),t._v(" "),e("button",{staticClass:"btn-r btn btn-info"},[t._v("RESULT")])])])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wide"},[e("div",{staticClass:"containera guide centera bigpad2"},[e("h2",{staticClass:"bigh2 grey"},[t._v("How to Publish a Poll in 3 Steps")]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"title-3"},[e("i",{staticClass:"fa fa-edit"}),t._v(" "),e("h3",[t._v("1. Add Questions")])]),t._v(" "),e("p",[t._v("Type your question and then add answers. From this point you can simply hit create poll and you're ready to go. The rest of the steps are optional. No account or signup required.")])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"title-3"},[e("i",{staticClass:"fa fa-send"}),t._v(" "),e("h3",[t._v("2. Set Options")])]),t._v(" "),e("p",[t._v("On the Themes tab select one of our default themes or create your own. On the settings tab set options like allowing multiple answers, allowing voters to enter their own answers and much more")])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"title-3"},[e("i",{staticClass:"fa fa-pie-chart"}),t._v(" "),e("h3",[t._v("3. Share & Report")])]),t._v(" "),e("p",[t._v("Click Share and copy your poll Vote url to share with voters. You can also hit Embed to place the poll directly on your website or blog.")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wide bg"},[s("div",{staticClass:"containera guide bigpad2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("img",{staticClass:"guideimg imgborder",attrs:{alt:"Generate leads with your quiz",src:e("drXt")}})]),t._v(" "),s("div",{staticClass:"col-md-6",staticStyle:{padding:"10px"}},[s("h4",{staticClass:"bigh2 grey",staticStyle:{"font-weight":"lighter","text-align":"center","word-spacing":"6px"}},[t._v("Live Results In Clear Concise Graphs")]),t._v(" "),s("h3"),t._v(" "),s("p",{staticStyle:{"padding-top":"10px"}},[t._v("\n\t\t\t\t\t\tLive graphs show your poll results immediately in easy to understand and read, bar graph format. But final results don't always reveal the whole picture. The longitudinal graph provides a visual representation of poll votes over time.\n\t\t\t\t\t")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create Poll")])])}],r={render:s,staticRenderFns:i};a.a=r},BWx7:function(t,a){},E4Dd:function(t,a,e){"use strict";a.a={name:"poll",data:function(){return{msg:"",xyz:"Choice...",p_options:["Option 1"],finds:[{value:""}],aaa:null,selected:""}},methods:{txtAddInput:function(t){""!=this.finds.value&&t.target.id==this.finds.length-1&&(t.target.isDirty=!0,this.finds.push({value:""})),t.target.isDirty&&""==t.target.value&&this.finds.splice(t.target.id,1)},btnAddInput:function(){this.finds.push({value:""})},vote:function(){alert("You Voted for "+this.selected)}}}},Fs8J:function(t,a,e){"use strict";var s=e("dmtU");a.a={components:{"poll-view":s.a},name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},HCTz:function(t,a,e){"use strict";a.a={data:function(){return{}}}},JJT7:function(t,a,e){"use strict";a.a={name:"HelloWorld",api:"https://poolap.herokuapp.com/users/",data:function(){return{msg:"Welcome to Your Vue.js App",register:{fullname:"",username:"",email:"",password:"",phone:""}}},methods:{btnRegister:function(){this.axios.post("https://poolap.herokuapp.com/users/",this.register).then(function(t){console.log(t)})}},mounted:function(){}}},M93x:function(t,a,e){"use strict";function s(t){e("tOL2")}var i=e("xJD8"),r=e("TITT"),n=e("VU/8"),o=s,l=n(i.a,r.a,!1,o,null,null);a.a=l.exports},"N/0d":function(t,a,e){"use strict";function s(t){e("j7Gm")}var i=e("7zPv"),r=e("hCWL"),n=e("VU/8"),o=s,l=n(i.a,r.a,!1,o,"data-v-65672a92",null);a.a=l.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i=e("M93x"),r=e("YaEn"),n=e("sUu7"),o=e("mtWM"),l=e.n(o),c=e("Rf8U"),v=e.n(c);s.a.use(n.a),s.a.use(v.a,l.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},TITT:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("app-header"),t._v(" "),e("router-view"),t._v(" "),e("app-footer")],1)},i=[],r={render:s,staticRenderFns:i};a.a=r},TVmP:function(t,a,e){"use strict";function s(t){e("BWx7")}var i=e("UthT"),r=e("lRiq"),n=e("VU/8"),o=s,l=n(i.a,r.a,!1,o,"data-v-47adade0",null);a.a=l.exports},UthT:function(t,a,e){"use strict";a.a={data:function(){return{}}}},V19p:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("nav",{staticClass:"navbar navbar-default navbar-fixed-top nav-trans",attrs:{id:"navT"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),e("router-link",{staticClass:"navbar-brand mp-logo",attrs:{to:"/"}},[t._v("POLL APP")])],1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-nav-demo"}},[e("div",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("a",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)]),t._v(" "),t._m(1),t._v(" "),e("li",[e("a",[e("router-link",{attrs:{to:"/result"}},[t._v("Result")])],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("li",[e("a",[e("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)]),t._v(" "),e("li",[e("a",{staticClass:"btn btn-primary header-btn",attrs:{href:"#",id:"btn-tran"}},[e("router-link",{attrs:{to:"/register"}},[t._v("Sign up")])],1)])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-nav-demo","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#livepolls"}},[t._v("Live-Polls")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#"}},[t._v("features")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#about"}},[t._v("About")])])}],r={render:s,staticRenderFns:i};a.a=r},YaEn:function(t,a,e){"use strict";var s=e("7+uW"),i=e("/ocq"),r=e("lO7g"),n=e("xJsL"),o=e("dIqY"),l=e("N/0d");s.a.use(i.a),a.a=new i.a({routes:[{path:"/",name:"Main",component:r.a},{path:"/login",name:"signin",component:n.a},{path:"/register",name:"signup",component:o.a},{path:"/result",name:"result",component:l.a}],mode:"history"})},dIqY:function(t,a,e){"use strict";function s(t){e("teyL")}var i=e("JJT7"),r=e("10xB"),n=e("VU/8"),o=s,l=n(i.a,r.a,!1,o,"data-v-764abad8",null);a.a=l.exports},dmtU:function(t,a,e){"use strict";function s(t){e("gG53")}var i=e("E4Dd"),r=e("ARQ3"),n=e("VU/8"),o=s,l=n(i.a,r.a,!1,o,"data-v-59d14c74",null);a.a=l.exports},drXt:function(t,a,e){t.exports=e.p+"static/img/poll.d0561ee.png"},fLiO:function(t,a){},gG53:function(t,a){},hCWL:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[t._m(0),t._v(" "),e("poll-view")],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mhome"},[e("div",{staticClass:"overlay",attrs:{id:"home"}},[e("div",{staticClass:"home-overlay"},[e("div",{staticClass:"mp-abt"},[e("h2",[t._v(" POLLAPP CREATES ELECTION FOR ORGRANIZATIONS")]),t._v(" "),e("h4",[t._v("PollApp is an application that seamlessly allow user to create poll(opinion),which allow other user to vote or comment on.which is use to make decision and determine opinions.")])]),t._v(" "),e("div",[e("a",{staticClass:"btn home-btn"},[t._v("CREATE POLL")])])])]),t._v(" "),e("div",{staticClass:"col-md-12 home "})])}],r={render:s,staticRenderFns:i};a.a=r},j7Gm:function(t,a){},je9j:function(t,a){},lO7g:function(t,a,e){"use strict";function s(t){e("fLiO")}var i=e("Fs8J"),r=e("tUOA"),n=e("VU/8"),o=s,l=n(i.a,r.a,!1,o,"data-v-1c1a1994",null);a.a=l.exports},lRiq:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer "},[e("nav",{staticClass:"navbar navbar-static-bottom footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[e("a",{staticClass:"navbar-brand mp-logo",attrs:{href:"#home","scroll-to-item":"","scroll-to":"#home"}},[t._v("\n\t\t\t\t\tPOLL APP\n\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("View Live Polls")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Contact")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("The Team")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-google-plus"})])])])])])])}],r={render:s,staticRenderFns:i};a.a=r},nJ1D:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"login-div"},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"text-center"},[t._v("Sign In to "),e("span",{staticStyle:{display:"inline-block"}},[e("a",{staticClass:"a-mp"},[e("router-link",{attrs:{to:"/"}},[t._v("POLL APP")])],1)])])]),t._v(" "),t._m(0)]),t._v(" "),e("div",[e("p",{staticClass:"form-footer"},[t._v("Don't have an account? "),e("span",[e("a",[e("router-link",{attrs:{to:"/register"}},[t._v("Sign Up")])],1)])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Username"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control input-lg",attrs:{type:"password",placeholder:"Password"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{attrs:{type:"checkbox"}}),t._v(" Remember me\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-block btn-lg btn-log"},[t._v(" Log in")])]),t._v(" "),e("div",[e("span",{staticClass:"glyphicon glyphicon-lock",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[e("a",{attrs:{href:"#"}},[t._v("Forgot your password?")])])])])])}],r={render:s,staticRenderFns:i};a.a=r},"nKb+":function(t,a,e){"use strict";a.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},tOL2:function(t,a){},tUOA:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[t._m(0),t._v(" "),e("poll-view")],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mhome"},[e("div",{staticClass:"overlay",attrs:{id:"home"}},[e("div",{staticClass:"home-overlay"},[e("div",{staticClass:"mp-abt"},[e("h2",[t._v(" POLLAPP CREATES ELECTION FOR ORGRANIZATIONS")]),t._v(" "),e("h4",[t._v("PollApp is an application that seamlessly allow user to create poll(opinion),which allow other user to vote or comment on.which is use to make decision and determine opinions.")])]),t._v(" "),e("div",[e("a",{staticClass:"btn home-btn"},[t._v("CREATE POLL")])])])]),t._v(" "),e("div",{staticClass:"col-md-12 home "})])}],r={render:s,staticRenderFns:i};a.a=r},teIl:function(t,a,e){"use strict";function s(t){e("vbCx")}var i=e("HCTz"),r=e("V19p"),n=e("VU/8"),o=s,l=n(i.a,r.a,!1,o,"data-v-0548e5fc",null);a.a=l.exports},teyL:function(t,a){},vbCx:function(t,a){},xJD8:function(t,a,e){"use strict";var s=e("teIl"),i=e("TVmP");a.a={components:{"app-header":s.a,"app-footer":i.a},name:"app"}},xJsL:function(t,a,e){"use strict";function s(t){e("je9j")}var i=e("nKb+"),r=e("nJ1D"),n=e("VU/8"),o=s,l=n(i.a,r.a,!1,o,"data-v-f5e400f8",null);a.a=l.exports}},["NHnr"]);
//# sourceMappingURL=app.fe28b0f8e0a9b486c45f.js.map