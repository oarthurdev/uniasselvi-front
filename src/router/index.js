import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login.vue'
import CreateUser from 'pages/user/CreateUser.vue'
import CreateProduct from 'pages/product/CreateProduct.vue'
import Dashboard from 'components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/user/create',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/product/create',
      name: 'CreateProduct',
      component: CreateProduct
    }
  ],
  linkActiveClass: 'active'
})
