(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6342dc88"],{2017:function(e,t,s){"use strict";var a=s("b12d"),n=s.n(a);n.a},"3f00":function(e,t,s){},"4d7a":function(e,t,s){"use strict";var a=s("3f00"),n=s.n(a);n.a},"9ed6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.installloading,expression:"installloading"}],staticClass:"login-container",attrs:{"element-loading-text":"正在安装...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("Crocodile 任务调度平台")]),e._v(" "),s("h6",{directives:[{name:"show",rawName:"v-show",value:e.needinstall,expression:"needinstall"}],staticClass:"installtitle"},[e._v("首次运行请先创建默认管理员用户然后进行安装操作")])]),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.needinstall,expression:"needinstall"}]},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{key:e.passwordType2,ref:"password",attrs:{type:e.passwordType2,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}})],1),e._v(" "),e.needinstall?s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.startinstallcrocodile(t)}}},[e._v("开始安装")]):s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登陆")]),e._v(" "),s("br")],1)],1)},n=[],o=(s("61f7"),s("b775"));function i(){return Object(o["a"])({url:"/api/v1/install/status",method:"get"})}function r(e){return Object(o["a"])({url:"/api/v1/install",method:"post",data:e})}var l=s("5c96"),d=(s("c24f"),{name:"Login",data:function(){return{loginForm:{username:"",password:""},password2:"",loginRules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]},loading:!1,passwordType:"password",passwordType2:"password",redirect:void 0,needinstall:!1,installloading:!1}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.startqueryinstallstatus()},methods:{startqueryinstallstatus:function(){var e=this;i().then((function(t){10700===t.code&&(e.needinstall=!0,l["Message"].warning(t.msg))}))},startinstallcrocodile:function(){var e=this;this.$refs["loginForm"].validate((function(t){if(!t)return!1;if(e.loginForm.password===e.password2){try{window.btoa("".concat(e.loginForm.username,":").concat(e.loginForm.password))}catch(s){return void l["Message"].warning("用户名和密码只能使用字母、数字、符号")}e.installloading=!0,r(e.loginForm).then((function(t){0===t.code?(e.startqueryinstallstatus(),e.installloading=!1,e.needinstall=!1,l["Message"].success("恭喜你已经安装成功🎉")):(l["Message"].error(t.msg),e.installloading=!1,e.needinstall=!1)}))}else l["Message"].warning("两次密码输入不相同")}))},handleLogin:function(){var e=this;this.$store.dispatch("user/login",this.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}}}),c=d,u=(s("2017"),s("4d7a"),s("2877")),p=Object(u["a"])(c,a,n,!1,null,"088ae73f",null);t["default"]=p.exports},b12d:function(e,t,s){}}]);