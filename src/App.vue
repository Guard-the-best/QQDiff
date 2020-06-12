<template>
  <div id="app">
    <products/>
    <!-- <carousel/> -->
    <!-- <container/> -->
    <!-- <loginAndRegister loginErrorMsg=""/> -->
    <!-- <welcome/> -->
  </div>
</template>

<script>
import products from './components/content/products'
// import carousel from './components/content/carousel'
// import container from './components/util/main-container'
// import welcome from './components/welcome.vue';
// import loginAndRegister from './components/content/login-and-register.vue';

export default {
  name: 'App',
  components: {
    // carousel,
    // container,
    // welcome,
    // login,
    // loginAndRegister,
    products,
  }
}
</script>

<style>
</style>
