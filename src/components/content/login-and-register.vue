<template>
  <div id="formWrapper">
    <p id="formMask" v-bind:class="{'darken-bg':isDarker}"/>
    <img src="~@/assets/img/login.jpg" id="background" width="100%" heitht="100%">
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
          isDarker:false,
      }
  },
  methods: {
    reactInputing: function(darker) {
      if (darker) {
        this.isDarker=true
      } else {
        this.isDarker=false
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
  /* background: url('~@/assets/img/login.jpg');
  background-size: 100% auto; */
  font-family: "HelveticaNeue", "Arial", sans-serif;
  transition: all 0.3s ease;
}
#formMask{
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
}
.darken-bg {
  background-color: rgba(0, 0, 0, 0.5) !important;
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
  margin-top: -200px;
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