<template>
  <div>
    <inputItem
      mytype="text"
      myname="email"
      placeholder="UserID..."
      v-on:inputing="reactInputing"
      v-model="email"
    >
      <!-- <div v-if="loginErrorMsg" class="alert alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        {{loginErrorMsg}}
      </div> -->
    </inputItem>
    <inputItem
      mytype="password"
      myname="password"
      placeholder="Password..."
      v-on:inputing="reactInputing"
      v-model="password"
    >
      <!-- <div class="pw-view"><i class="fa fa-eye"></i></div> -->
      <p>
        <a href="#">
          <small>Forgot Password ?</small>
        </a>
      </p>
    </inputItem>
    <inputItem
      myid="myCaptchaUserInput"
      mytype="text"
      myname="captchaCode"
      placeholder="Verification..."
      v-on:inputing="reactInputing"
      v-model="captchaCode"
    >
    </inputItem>
    <div id="botdetect-captcha" data-captchastylename="myCaptchaStyle" class="form-item"></div>
  </div>
</template>
<script>
import $ from 'jquery'
import 'jquery'
import 'jquery-captcha'

import util from '../../util'
import router from '../../router'

import inputItem from "../util/input-item.vue";
export default {
  name: "login",
  components: {
    inputItem
  },
  data(){
    return{
      email:'',
      password:'',
      captchaCode:'',

      captcha:'',
    }
  },
  mounted(){
    this.captcha=$('#botdetect-captcha').captcha({
    captchaEndpoint: 
      'http://localhost:8080/captcha-endpoint'
  });
  },
  methods: {
    reactInputing: function(darker) {
      this.$emit("inputing", darker);
    },
    login(){
      if(this.email == ""){
        alert("用户名不能为空")
      }
      else if(this.password == ""){
        alert("密码不能为空")
      }
      else if(this.captchaCode == null){
        alert("验证码不能为空")
      }
      else{
        var vm = this
        util.noaxios.post('http://localhost:8080/user/login',{
          username: vm.email,
          password: vm.password,
          captchaCode:vm.captcha.getUserEnteredCaptchaCode(),
          captchaId:vm.captcha.getCaptchaId()
        }).then(res=>{
          localStorage.setItem("username",vm.email)
          localStorage.setItem("token",res.data.data)
          router.push('/home')
        }).catch(error=>{
          if(error.response.status == 401){
            alert(error.response.data.message)
            this.captcha.reloadImage()
          }
          else{
            this.captcha.reloadImage()
            alert(error.response.data.message)
          }
        })
      }
    }
  }
};
</script>