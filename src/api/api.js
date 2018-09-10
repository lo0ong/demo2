//  import VueResource from 'vue-resource'

//  Vue.config.productionTip = false
//  Vue.use(VueResource)
//  
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


let base = 'http://10.252.39.59:8080/demo';

//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const requestLogin = params => { return Vue.http.post(`${base}/login`,params,{emulateJSON:true}).then(res => res.bodyText);};