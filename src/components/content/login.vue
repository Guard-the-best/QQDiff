<template>
  <div>
    <inputItem
      type="text"
      name="email"
      id="email"
      placeholder="UserID..."
      v-on:inputing="reactInputing"
    >
      <!-- <div v-if="loginErrorMsg" class="alert alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        {{loginErrorMsg}}
      </div> -->
    </inputItem>
    <inputItem
      type="password"
      name="password"
      id="password"
      placeholder="Password..."
      v-on:inputing="reactInputing"
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
      id="captchaCode"
      placeholder="Verification"
      v-on:inputing="reactInputing"
      style="width: 60%;"
    ></inputItem>
  </div>
</template>
<script>
import inputItem from "../util/input-item.vue";
export default {
  name: "login",
  components: {
    inputItem
  },
  methods: {
    reactInputing: function(darker) {
      this.$emit("inputing", darker);
    }
  }
};
</script>