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
  history: createWebHashHistory(),//createWebHistory
  routes
})
//导航守卫 就是router跳转之前做什么
router.beforeEach((to, from, next) => {
  window.console.log('我是导航守卫',to, from, next)
  next()
  // ...
})
export default router
