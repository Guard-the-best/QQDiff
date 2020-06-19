import Vue from 'vue'
import VueRouter from 'vue-router';
import loginPage from './components/login-page.vue'
import welcome from './components/welcome.vue'
import home from './components/home.vue'

import carousel from './components/content/carousel.vue'
import products from './components/content/products.vue'
import items from './components/content/items'
import cart from './components/content/cart'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', components: { default: loginPage } },
    { path: '/', components: { default: welcome } },
    {
      path: '/home', components: { default: home }, children: [
        { path: '', components: { default: carousel } },
        { path: '/goods/categories/:categoryName/products', components: { default: products } },
        { path: '/goods/products/:productName/items', components: { default: items } },
        { path: '/cart', components: { default: cart } }
      ]
    }
  ]
})