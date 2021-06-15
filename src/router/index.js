import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const NotFound = resolve => require(['@/view/404'], resolve)
const Home =  resolve => require(['@/view/home'], resolve);

const routes = [
    {
        path: "/",
        redirect: "/home" // 根目录重定向到首页
    },
    { 
       path:'/home',
       component:Home
    },
    {
        path: '*',
        component: NotFound,
        name: 'notfound'
      },
]

var router =  new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    /* 路由发生变化修改页面title */
    if (to.meta.title && document) {
      document.title = to.meta.title
    }
   
    next()
  })

export default router;