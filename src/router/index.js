import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/view/page1/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: page1
    }
  ]
})
