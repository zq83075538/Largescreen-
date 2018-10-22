// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { fitConfigure, FitMethod } from './utils/fit';
import './assets/style/reset.css'
import './assets/style/common.css'
Vue.config.productionTip = false;
let { type, position, crop } = fitConfigure();
let { width, height, left = 0, top = 0 } = { width: 3328, height: 1024};
window.addEventListener('resize', function resize() {
  FitMethod[type](document.getElementById('content_app'), width, height, left, top, position);
});
FitMethod[type](document.getElementById('content_app'), width, height, left, top, position);

Vue.prototype.$l = console.log;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
