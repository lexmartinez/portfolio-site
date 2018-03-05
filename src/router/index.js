import Vue from 'vue'
import Router from 'vue-router'
import SiteComponent from '@/components/SiteComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SiteComponent',
      component: SiteComponent
    }
  ]
})
