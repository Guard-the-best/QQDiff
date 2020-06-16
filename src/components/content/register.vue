<template>
  <div>
    <inputItem
      type="text"
      name="registerID"
      placeholder="UserID..."
      v-on:inputing="reactInputing"
      v-model="username"
    >
      <span v-if="username && existInfo" v-bind:class="{okmsg:ok,errormsg:(!ok)}">{{existInfo}}</span>
      <!-- https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8 -->
      <!-- https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model -->
    </inputItem>

    <inputItem
      type="text"
      name="nickname"
      placeholder="NickName.."
      v-on:inputing="reactInputing"
      v-model="nickname"
    >
    </inputItem>

    <inputItem
      type="text"
      name="phoneNumber"
      placeholder="PhoneNumber..."
      v-on:inputing="reactInputing"
      v-model="phoneNumber"
    >
    </inputItem>

    <inputItem
      type="password"
      name="registerPassword"
      placeholder="Password..."
      v-on:inputing="reactInputing"
      v-model="password"
    >
      <!-- <div class="pw-view"><i claStatusss="fa fa-eye"></i></div> -->
    </inputItem>
    <inputItem
      type="password"
      name="confirmPassword"
      placeholder="ConfirmPassword..."
      v-on:inputing="reactInputing"
      v-model="password2"
    >
      <!-- <div class="pw-view"><i class="fa fa-eye"></i></div> -->
    </inputItem>
  </div>
</template>
<script>
import _ from "lodash/lodash.min.js";
import util from '../../util.js'
import router from '../../router'

import inputItem from "../util/input-item.vue";
export default {
  name: "register",
  components: {
    inputItem
  },
  data: function() {
    return {
      username: "",
      nickname: "",
      phoneNumber: "",
      password:"",
      password2:"",

      existInfo:"",
      ok:true
    };
  },
  watch: {
    username: function(){
      this.debouncedRequst();
    }
  },
  created: function() {
    this.debouncedRequst = _.debounce(this.findIsUsernameExist, 500);
  },
  methods: {
    reactInputing: function(darker) {
      this.$emit("inputing", darker);
    },
    findIsUsernameExist: function() {
      var vm=this;
      util.myaxios.get('http://localhost:8080/user/registered?username='+this.username)
      .then(function (response) {
        vm.existInfo = response.data.data?"username exist!":"ok"
        if(response.data.data)
          vm.ok=false
        else
          vm.ok=true
      });
    },
    register(){
      if(this.password != this.password2){
        alert("两次输入密码不一致")
      }
      else if(this.username == ""){
        alert("用户名不能为空")
      }
      else if(this.password == ""){
        alert("密码不能为空")
      }
      else{
        var vm = this
        util.myaxios.post('http://localhost:8080/user',{
          username: vm.username,
          password: vm.password,
          nickname: vm.nickname,
          phoneNumber: vm.phoneNumber,
        }).then(res=>{
          localStorage.setItem("username",vm.username)
          localStorage.setItem("token",res.data.data)
          router.push('/home')
        })
      }
    }
  }
};
</script>

<style>
.okmsg {
  color: green;
}
.errormsg {
  color: red;
}
</style>