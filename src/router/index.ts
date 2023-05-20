import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/karuizawa',
      component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'),
      children: [
        {
          path: '/karuizawa',
          name: 'karuizawa',
          component: () => import(/* webpackChunkName: "HomeView" */ '@/components/homeView/body.vue'),
        },
        {
          path: '/karuizawa/detail/:id',
          name: 'detail',
          component: () => import(/* webpackChunkName: "HomeView" */ '@/components/detail/index.vue'),
        }
      ]
    },
  ]
})

export default router
