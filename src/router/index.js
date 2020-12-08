import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载
const Home = () => import('views/home/Home')
const Sale = () => import('views/sale/Sale')
const Shop = () => import('views/shop/Shop')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)
const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/sale', component: Sale },
  { path: '/shop', component: Shop },
  { path: '/profile', component: Profile },

]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router