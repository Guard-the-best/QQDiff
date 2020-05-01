<template>
  <div>
    <inputItem
      type="text"
      name="registerID"
      id="registerID"
      placeholder="UserID..."
      v-on:inputing="reactInputing"
      v-model="username"
    >
      <span v-if="existInfo" id="isExistInfo">{{existInfo}}</span>
      <!-- https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8 -->
      <!-- https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model -->
    </inputItem>

    <inputItem
      type="password"
      name="registerPassword"
      id="registerPassword"
      placeholder="Password..."
      v-on:inputing="reactInputing"
    >
      <!-- <div class="pw-view"><i claStatusss="fa fa-eye"></i></div> -->
    </inputItem>
    <inputItem
      type="password"
      name="confirmPassword"
      id="confirmPassword"
      placeholder="ConfirmPassword..."
      v-on:inputing="reactInputing"
    >
      <!-- <div class="pw-view"><i class="fa fa-eye"></i></div> -->
    </inputItem>
  </div>
</template>
<script>
import _ from "lodash/lodash.min.js";
import axios from 'axios/dist/axios.min.js';
import inputItem from "../util/input-item.vue";
export default {
  name: "register",
  components: {
    inputItem
  },
  data: function() {
    return {
      username: "",
      existInfo:""
    };
  },
  watch: {
    username: function(){//(newUsername, oldUsername) {
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
        // console.log(new Date().getTime());
        // return Math.random()%2==1?true:false;
        
        // var vm=this;
        // axios.post('http://localhost:8080/user/registered',{
        //     username:this.username
        // })
        // .then(function (response) {
        //   vm.existInfo = _.capitalize(response.data)
        // })
        // .catch(function (error) {
        //   vm.existInfo = 'Error! Could not reach the API. ' + error
        // });
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