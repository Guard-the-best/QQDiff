<template>
  <div id="formWrapper">
    <form action="/login" method="post"><!---->
      <div id="form">
        <div class="logo">
          <h1 class="text-center head">User {{title}}</h1>
        </div>
        <login v-show="isLogin" v-on:inputing="reactInputing"/>
        <register v-show="isRegister" v-on:inputing="reactInputing"/>
        <div class="form-item">
          <p class="pull-left">
            <a v-on:click="swap" href="javascript:void(0)">
              <small>{{anotherpage}}</small>
            </a>
          </p>
          <input type="submit" class="login pull-right" v-bind:value="title" />
          <!-- <div class="clear-fix"></div> -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery/dist/jquery.min.js";
import login from './login.vue';
import register from './register.vue';

export default {
  name: "loginAndRegister",
  data:function(){
      return{
          anotherpage:'Register',
          title:'Log in',
          isLogin:true,
          isRegister:false,
      }
  },
  methods: {
    reactInputing: function(darker) {
      if (darker) {
        $("div#formWrapper").addClass("darken-bg");
        $("div.logo").addClass("logo-active");
      } else {
        $("div#formWrapper").removeClass("darken-bg");
        $("div.logo").removeClass("logo-active");
      }
    },
    swap:function(){
      var t1=this.title;
      this.title=this.anotherpage;
      this.anotherpage=t1;
      
      var t2=this.isLogin;
      this.isLogin=this.isRegister;
      this.isRegister=t2;
    }
  },
  components: {
    login,
    register

  },
  props: ["loginErrorMsg"]
};
</script>

<style type="text/css">
body {
  background: url("../../../static/img/login.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "HelveticaNeue", "Arial", sans-serif;
}
a {
  color: #58bff6;
  text-decoration: none;
}
a:hover {
  color: #aaa;
}
.pull-right {
  float: right;
}
.pull-left {
  float: left;
}
.clear-fix {
  clear: both;
}
div.logo {
  text-align: center;
  margin: 20px 20px 30px 20px;
  fill: #566375;
}
.head {
  padding: 40px 0px 10px 0;
}
.logo-active {
  fill: #44aacc !important;
}
#formWrapper {
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
}
.darken-bg {
  background: rgba(0, 0, 0, 0.5) !important;
  transition: all 0.3s ease;
}
div#form {
  position: absolute;
  width: 360px;
  height: 320px;
  height: auto;
  background-color: #fff;
  margin: auto;
  border-radius: 5px;
  padding: 20px;
  left: 50%;
  top: 50%;
  margin-left: -180px;
  margin-top: -300px;
}
div.form-item {
  position: relative;
  display: block;
  margin-bottom: 30px;
}
input[type="submit"].login {
  float: right;
  width: 112px;
  height: 37px;
  -moz-border-radius: 19px;
  -webkit-border-radius: 19px;
  border-radius: 19px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  background-color: #55b1df;
  border: 1px solid #55b1df;
  border: none;
  color: #fff;
  font-weight: bold;
}
input[type="submit"].login:hover {
  background-color: #fff;
  border: 1px solid #55b1df;
  color: #55b1df;
  cursor: pointer;
}
input[type="submit"].login:focus {
  outline: none;
}
</style>