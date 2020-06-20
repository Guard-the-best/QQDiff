import Vue from 'vue'
import VueRouter from 'vue-router';
import loginPage from './components/login-page.vue'
import welcome from './components/welcome.vue'
import home from './components/home.vue'

import carousel from './components/content/carousel.vue'
import products from './components/content/products.vue'
import items from './components/content/items'
import cart from './components/content/cart'
import checkout from './components/content/checkout'
import personalInfo from './components/content/personalInfo'
import order from './components/content/order'

import management from './components/manageSys/manage-home'

import summary from './components/manageSys/content/summary'
import userManagement from './components/manageSys/content/user-management'
import userAdd from './components/manageSys/content/user-add'
import categoriesManage from './components/manageSys/content/categories-list'
import productsManage from './components/manageSys/content/products-list'
import itemsManage from './components/manageSys/content/item-list'

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
        { path: '/cart', components: { default: cart } },
        { path: '/checkout', name: 'checkout', components: { default: checkout } },
        { path: '/user/info', components: { default: personalInfo } },
        { path: '/order', components: { default: order } }
      ]
    },
    {
      path: '/management', components: { default: management }, children: [
        { path: '', components: { default: summary } },
        { path: 'users', components: { default: userManagement } },
        { path: 'userAdd', components: { default: userAdd } },
        { path: 'categories', components: { default: categoriesManage } },
        { path: 'products/:categoryName', components: { default: productsManage } },
        { path: 'items/:productName', components: { default: itemsManage } }
      ]
    }
  ]
})