import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import(/*title:"我是首页"*/'../views/login/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* title: "登录页" */ '../views/home/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
