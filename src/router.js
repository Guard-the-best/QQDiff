import Vue from 'vue'
import VueRouter from 'vue-router';
import loginPage from './components/login-page.vue'
import welcome from './components/welcome.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[
      {path: '/login', components: {default: loginPage}},
      {path: '/', components: {default: welcome},props: (route) => ({ msg: route.query.msg })}
    ]
  })