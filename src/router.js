import Vue from 'vue'
import VueRouter from 'vue-router';
import loginPage from './components/login-page.vue'
import welcome from './components/welcome.vue'
import home from './components/home.vue'

import carousel from './components/content/carousel.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[
      {path: '/login', components: {default: loginPage}},
      {path: '/', components: {default: welcome}},
      {path:'/home',components:{default:home},children:[
        {path:'',components:{default:carousel}}
      ]}
    ]
  })