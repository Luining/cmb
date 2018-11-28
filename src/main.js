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

Vue.prototype.$cy = cytoscape
Vue.prototype.$http = axios
// Vue.http.options.root = "http://127.0.0.1:3000/";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
