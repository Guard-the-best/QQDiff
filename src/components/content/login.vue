<template>
  <div>
    <inputItem
      type="text"
      name="email"
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
      type="password"
      name="password"
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
      type="text"
      name="captchaCode"
      placeholder="Verification"
      v-on:inputing="reactInputing"
      v-model="captchaCode"
      style="width: 60%;"
    ></inputItem>
  </div>
</template>
<script>
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
      captchaCode:''
    }
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
      // else if(this.captchaCode == null){
      //   alert("验证码不能为空")
      // }
      else{
        var vm = this
        util.myaxios.post('http://localhost:8080/user/login',{
          username: vm.email,
          password: vm.password
        }).then(res=>{
          localStorage.setItem("username",vm.email)
          localStorage.setItem("token",res.data.data)
          router.push('/home')
        })
      }
    }
  }
};
</script>