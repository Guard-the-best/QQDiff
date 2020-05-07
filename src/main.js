import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import loginAndRegister from './components/content/login-and-register.vue'
import welcome from './components/welcome.vue'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes:[
    {path: '/loginAndRegister', components: {default: loginAndRegister}},
    {path: '/welcome', components: {default: welcome}}
  ]
})

Vue.use(VueRouter)

router.push({path: 'welcome'})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')