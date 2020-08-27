import './style/index.css';
import Vue from 'vue';
import App from './app.vue';
import router from './router/index';
// import axios from 'axios';

// Vue.prototype.$http = axios;

const app = document.createElement('div')
document.body.appendChild(app)
new Vue({
  router,
  render:h => h(App)
}).$mount(app)