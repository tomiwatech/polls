webpackJsonp([0],{ARQ3:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container poll-container"},[e("div",{staticClass:"row grid-1 container"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"make-poll"},[e("form",[e("div",{staticClass:"question-div"},[e("div",{staticClass:"form-group"},[e("h3",[t._v("Enter Question Here:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],domProps:{value:t.msg},on:{input:function(a){a.target.composing||(t.msg=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("h4",[t._v("Enter choices Here:")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.p_options,expression:"p_options"}]},[t._l(t.finds,function(a,s){return e("div",{key:s},[e("div",{staticClass:"poll-options"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"find.value"}],attrs:{id:s,autocompelete:"off",type:"text",placeholder:t.xyz},domProps:{value:a.value},on:{keyup:t.addFind,input:function(t){t.target.composing||(a.value=t.target.value)}}})])])}),t._v(" "),e("div",[e("a",{on:{click:t.addFind}},[t._v("Add Options")])])],2)])]),t._v(" "),t._m(0)])])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"view-poll"},[e("form",[e("div",{staticClass:"preview-poll"},[e("div",{staticClass:"form-group"},[e("h2",[t._v("PREVIEW")]),t._v(" "),e("h1",{staticClass:"preview",attrs:{readonly:""}},[t._v(t._s(t.msg))])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.finds,function(a,s){return e("div",{key:s,staticClass:"opt-view"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"optm",attrs:{type:"radio",id:s,id:"option",name:"option"},domProps:{value:a.value,checked:t._q(t.selected,a.value)},on:{__c:function(e){t.selected=a.value}}}),t._v(" "),e("label",{attrs:{for:"option"}},[t._v(" "+t._s(a.value)+" ")]),t._v(" "),e("hr")])}))]),t._v(" "),e("div",[e("button",{on:{click:t.vote}},[t._v("VOTE")]),t._v(" "),e("h1",[t._v(" Selected: "+t._s(t.selected)+" ")]),t._v(" "),e("button",[t._v("RESULT")])])])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("Create Poll")])])}],i={render:s,staticRenderFns:n};a.a=i},BWx7:function(t,a){},E4Dd:function(t,a,e){"use strict";a.a={name:"poll",data:function(){return{msg:"",xyz:"Choice...",p_options:["Option 1"],finds:[{value:""}],selected:""}},methods:{addFind:function(t){t.target.id==this.finds.length-1&&(t.target.isDirty=!0,this.finds.push({text:""})),t.target.isDirty&&""==t.target.value&&this.finds.splice(t.target.id,1)},vote:function(){alert("You Voted for "+this.selected)}}}},Fs8J:function(t,a,e){"use strict";var s=e("dmtU");a.a={components:{"poll-view":s.a},name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},HCTz:function(t,a,e){"use strict";a.a={data:function(){return{}}}},ISxB:function(t,a){},M93x:function(t,a,e){"use strict";function s(t){e("tOL2")}var n=e("xJD8"),i=e("TITT"),r=e("VU/8"),o=s,l=r(n.a,i.a,!1,o,null,null);a.a=l.exports},NAUi:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"register-div"},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"text-center"},[t._v("Sign Up to "),e("span",{staticStyle:{display:"inline-block"}},[e("a",[e("router-link",{attrs:{to:"/"}},[t._v("POLL APP")])],1)])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{staticClass:"dForm",attrs:{name:"registerForm",autocomplete:"off"},on:{submit:function(a){a.preventDefault(),t.signup()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Fullname",name:"userFullName"},domProps:{value:t.fullname},on:{input:function(a){a.target.composing||(t.fullname=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Username",name:"userName"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control input-lg",attrs:{type:"email",placeholder:"Email",name:"userEmail"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control input-lg",attrs:{type:"password",placeholder:"Password",name:"userPassword1"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cpassword,expression:"cpassword"}],staticClass:"form-control input-lg",attrs:{type:"password",placeholder:"Confirm Password",name:"userPassword2"},domProps:{value:t.cpassword},on:{input:function(a){a.target.composing||(t.cpassword=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control input-lg",attrs:{type:"number",placeholder:"Phone",name:"userPhoneNumber"},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group checkbox checkbox-primary"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedgit,expression:"checkedgit"}],attrs:{type:"checkbox",required:""},domProps:{checked:Array.isArray(t.checkedgit)?t._i(t.checkedgit,null)>-1:t.checkedgit},on:{__c:function(a){var e=t.checkedgit,s=a.target,n=!!s.checked;if(Array.isArray(e)){var i=t._i(e,null);s.checked?i<0&&(t.checkedgit=e.concat([null])):i>-1&&(t.checkedgit=e.slice(0,i).concat(e.slice(i+1)))}else t.checkedgit=n}}}),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",[e("p",{staticClass:"form-footer"},[t._v("Already have an account? "),e("span",[e("a",[e("router-link",{attrs:{to:"/login"}},[t._v("Sign In")])],1)])])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"term"},[t._v(" I accept "),e("span",[e("a",{attrs:{href:"#"}},[t._v(" Terms and Conditions ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-block btn-lg btn-sign"},[t._v("REGISTER")])])}],i={render:s,staticRenderFns:n};a.a=i},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n=e("M93x"),i=e("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},OBXJ:function(t,a,e){"use strict";a.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},TITT:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("app-header"),t._v(" "),e("router-view"),t._v(" "),e("app-footer")],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},TVmP:function(t,a,e){"use strict";function s(t){e("BWx7")}var n=e("UthT"),i=e("lRiq"),r=e("VU/8"),o=s,l=r(n.a,i.a,!1,o,"data-v-47adade0",null);a.a=l.exports},UthT:function(t,a,e){"use strict";a.a={data:function(){return{}}}},V19p:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("nav",{staticClass:"navbar navbar-default navbar-fixed-top nav-trans",attrs:{id:"navT"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),e("router-link",{staticClass:"navbar-brand mp-logo",attrs:{to:"/"}},[t._v("POLL APP")])],1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-nav-demo"}},[e("div",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#home"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)]),t._v(" "),e("li",[e("a",{staticClass:"btn btn-primary header-btn",attrs:{href:"register",id:"btn-tran"}},[e("router-link",{attrs:{to:"/register"}},[t._v("Sign up")])],1)])])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-nav-demo","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#livepolls"}},[t._v("Live-Polls")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#result"}},[t._v("Result")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#"}},[t._v("features")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#about"}},[t._v("About")])])}],i={render:s,staticRenderFns:n};a.a=i},YaEn:function(t,a,e){"use strict";var s=e("7+uW"),n=e("/ocq"),i=e("lO7g"),r=e("xJsL"),o=e("psOb");s.a.use(n.a),a.a=new n.a({mode:"history",routes:[{path:"/",name:"Main",component:i.a},{path:"/login",name:"signin",component:r.a},{path:"/register",name:"signup",component:o.a}]})},dmtU:function(t,a,e){"use strict";function s(t){e("gG53")}var n=e("E4Dd"),i=e("ARQ3"),r=e("VU/8"),o=s,l=r(n.a,i.a,!1,o,"data-v-59d14c74",null);a.a=l.exports},fLiO:function(t,a){},gG53:function(t,a){},je9j:function(t,a){},lO7g:function(t,a,e){"use strict";function s(t){e("fLiO")}var n=e("Fs8J"),i=e("tUOA"),r=e("VU/8"),o=s,l=r(n.a,i.a,!1,o,"data-v-1c1a1994",null);a.a=l.exports},lRiq:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer "},[e("nav",{staticClass:"navbar navbar-static-bottom footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[e("a",{staticClass:"navbar-brand mp-logo",attrs:{href:"#home","scroll-to-item":"","scroll-to":"#home"}},[t._v("\n\t\t\t\t\tPOLL APP\n\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("View Live Polls")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Contact")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("The Team")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-google-plus"})])])])])])])}],i={render:s,staticRenderFns:n};a.a=i},nJ1D:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"login-div"},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"text-center"},[t._v("Sign In to "),e("span",{staticStyle:{display:"inline-block"}},[e("a",{staticClass:"a-mp"},[e("router-link",{attrs:{to:"/"}},[t._v("POLL APP")])],1)])])]),t._v(" "),t._m(0)]),t._v(" "),e("div",[e("p",{staticClass:"form-footer"},[t._v("Don't have an account? "),e("span",[e("a",[e("router-link",{attrs:{to:"/register"}},[t._v("Sign Up")])],1)])])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Username"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control input-lg",attrs:{type:"password",placeholder:"Password"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{attrs:{type:"checkbox"}}),t._v(" Remember me\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-block btn-lg btn-log"},[t._v(" Log in")])]),t._v(" "),e("div",[e("span",{staticClass:"glyphicon glyphicon-lock",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[e("a",{attrs:{href:"#"}},[t._v("Forgot your password?")])])])])])}],i={render:s,staticRenderFns:n};a.a=i},"nKb+":function(t,a,e){"use strict";a.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},psOb:function(t,a,e){"use strict";function s(t){e("ISxB")}var n=e("OBXJ"),i=e("NAUi"),r=e("VU/8"),o=s,l=r(n.a,i.a,!1,o,"data-v-690bde0d",null);a.a=l.exports},tOL2:function(t,a){},tUOA:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[t._m(0),t._v(" "),e("poll-view")],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mhome"},[e("div",{staticClass:"overlay",attrs:{id:"home"}},[e("div",{staticClass:"home-overlay"},[e("div",{staticClass:"mp-abt"},[e("h2",[t._v(" POLLAPP CREATES ELECTION FOR ORGRANIZATIONS")]),t._v(" "),e("h4",[t._v("PollApp is an application that seamlessly allow user to create poll(opinion),which allow other user to vote or comment on.which is use to make decision and determine opinions.")])]),t._v(" "),e("div",[e("a",{staticClass:"btn home-btn"},[t._v("CREATE POLL")])])])]),t._v(" "),e("div",{staticClass:"col-md-12 home "})])}],i={render:s,staticRenderFns:n};a.a=i},teIl:function(t,a,e){"use strict";function s(t){e("vbCx")}var n=e("HCTz"),i=e("V19p"),r=e("VU/8"),o=s,l=r(n.a,i.a,!1,o,"data-v-0548e5fc",null);a.a=l.exports},vbCx:function(t,a){},xJD8:function(t,a,e){"use strict";var s=e("teIl"),n=e("TVmP");a.a={components:{"app-header":s.a,"app-footer":n.a},name:"app"}},xJsL:function(t,a,e){"use strict";function s(t){e("je9j")}var n=e("nKb+"),i=e("nJ1D"),r=e("VU/8"),o=s,l=r(n.a,i.a,!1,o,"data-v-f5e400f8",null);a.a=l.exports}},["NHnr"]);
//# sourceMappingURL=app.75853aaaa5abc778421d.js.map