<template>
  <div>
    <sideBar />
    <div class="main_body">
      <router-view />
    </div>
  </div>
</template>

<script>
import sideBar from "./util/side-bar";
import "../../assets/css/base.css";
import "../../assets/css/frame_sys.css";
import "../../assets/css/iconfont.css";
import "../../assets/js/frame.js";

export default {
  name: "management",
  components: {
    sideBar
  }
};
</script>

<style>
</style>