import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login.vue'
import CreateUser from 'pages/user/CreateUser.vue'
import EditUser from 'pages/user/EditUser.vue'
import UserList from 'pages/user/UserList.vue'
import CreateProduct from 'pages/product/CreateProduct.vue'
import EditProduct from 'pages/product/EditProduct.vue'
import ProductList from 'pages/product/ProductList.vue'
import CreatePurchaseRequest from 'pages/product/purchase/request/CreatePurchaseRequest.vue'
import EditPurchaseRequest from 'pages/product/purchase/request/EditPurchaseRequest.vue'
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
      path: '/user/edit',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/user/list',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/product/create',
      name: 'CreateProduct',
      component: CreateProduct
    },
    {
      path: '/product/edit',
      name: 'EditProduct',
      component: EditProduct
    },
    {
      path: '/product/list',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/purchase/request',
      name: 'CreatePurchaseRequest',
      component: CreatePurchaseRequest
    },
    {
      path: '/product/purchase-request/edit',
      name: 'EditPurchaseRequest',
      component: EditPurchaseRequest
    }
  ],
  linkActiveClass: 'active'
})
