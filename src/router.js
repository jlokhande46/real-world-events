import Vue from 'vue'
import Router from 'vue-router'
import Eventlist from './views/Eventlist.vue'
import Eventcreate from './views/Eventcreate.vue'
import Eventshow from './views/Eventshow.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: Eventlist
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: Eventshow,
      props: true
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: Eventcreate,
      props: true
    }
  ]
})
