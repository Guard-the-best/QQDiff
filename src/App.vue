<template>
  <div id="app">
    <container/>
    <!-- <loginAndRegister loginErrorMsg=""/> -->
  </div>
</template>

<script>
import container from './components/util/main-container'
// import welcome from './components/welcome.vue';
// import loginAndRegister from './components/content/login-and-register.vue';

export default {
  name: 'App',
  components: {
    container
    // welcome
    // login
    // loginAndRegister
  }
}
</script>

<style>
</style>
