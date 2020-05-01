<template>
  <div id="app">
    <!-- <welcome/> -->
    <loginAndRegister loginErrorMsg=""/>
  </div>
</template>

<script>
// import welcome from './components/welcome.vue';
import loginAndRegister from './components/content/login-and-register.vue';

export default {
  name: 'App',
  components: {
    // welcome,
    // login
    loginAndRegister
  }
}
</script>

<style>
</style>
