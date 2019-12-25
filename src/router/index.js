import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: () => import('../views/Course.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/Download.vue')
  },
  {
    path: '/guarantee',
    name: 'guarantee',
    component: () => import('../views/Guarantee.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/Personal.vue')
  },
  {
    path:"/score",
    name:"score",
    component:()=>import("../views/Score.vue")
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/Login.vue")
  },
  {
    path:"/sgin",
    name:"sgin",
    component:()=>import("../views/Sign.vue")
  },
  {
      path : "*",   //上面全部都匹配了以后，这个肯定不会执行
      redirect(to){
        // console.log(to.path)
        if(to.path === "/"){
          return "/home";
        }else{
          return "/NotFound";
        }
      }
    },


]

const router = new VueRouter({
  mode : "history",//把路由设置成历史模式
  linkExactActiveClass : "active-exact",
  linkActiveClass : "active",
  routes
})

export default router
