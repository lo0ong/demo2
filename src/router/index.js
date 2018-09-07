import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
 
// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)
 
Vue.use(Router)
 
export default new Router({
    routes: [{
        path: '/',
        name: '登录',
        component: Login
    },{
        path: '/home',
        name: '后台主界面',
        component: Home
    }

]
})
