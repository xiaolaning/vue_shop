import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routers: [
    { path: '/login', component: Login }
  ]
})
