import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import publicTV from '@/components/publicTV'
import generalTV from '@/components/generalTV'
import charts from '@/components/charts'
//import echarts from '@/components/echarts'


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
        component: Home,   
        children:[
            {path: '/publicTV',name:'公共频道',component:publicTV},
            {path: '/generalTV',name:'综合频道',component:generalTV},
            // {path: '/charts',name:'统计分析',component:charts}
        ]      
        
    },{
        path: '/home',
        name: '后台主界面',
        component: Home,   
        children:[
            {path: '/charts',name:'统计分析',component:charts}
        ]      
        
    }


]
})
