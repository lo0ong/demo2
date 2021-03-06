// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 

// import VueResource from 'vue-resource'
import md5 from 'js-md5'

import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

Vue.prototype.$md5 = md5;


// Vue.config.productionTip = false
// Vue.use(VueResource)
// Vue.http.options.emulateJSON = true;

 
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   //NProgress.start();
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
