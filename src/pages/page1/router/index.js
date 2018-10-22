import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/select_target'
console.log(Index, '组件名')
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
