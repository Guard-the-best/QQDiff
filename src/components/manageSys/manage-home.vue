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
import "../../assets/js/frame.js";

export default {
  name: "management",
  components: {
    sideBar
  }
};
</script>

<style src="../../assets/css/base.css" scoped>
</style>
<style src="../../assets/css/frame_sys.css" scoped>
</style>
<style src="../../assets/css/iconfont.css" scoped>
</style>