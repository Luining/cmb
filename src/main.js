import Vue from 'vue';
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import axios from 'axios';
import cytoscape from 'cytoscape';
//加载模块 VueResource(发送ajax请求)
import VueResource from 'vue-resource'
//将VueResource 注册vue
Vue.use(VueResource);
//设置请求根路径(服务器地址) ajax
Vue.http.options.root = "http://127.0.0.1:3000/";

Vue.prototype.$cy = cytoscape
Vue.prototype.$axios = axios


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
