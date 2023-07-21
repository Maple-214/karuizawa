// @ts-ignore
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/karuizawa',
      component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'),
      children: [
        {
          path: '/karuizawa',
          name: 'karuizawa',
          component: () => import(/* webpackChunkName: "HomeView" */ '@/components/homeView/body.vue'),
        },
        // {
        //   path: '/karuizawa/detail/:id',
        //   name: 'detail',
        //   component: () => import(/* webpackChunkName: "HomeView" */ '@/components/detail/IndexHome.vue'),
        // },
        // {
        //   path: '/karuizawa/favlist',
        //   name: 'favlist',
        //   component: () => import(/* webpackChunkName: "HomeView" */ '@/views/FavoList.vue'),
        // },
        // {
        //   path: '/karuizawa/submitform',
        //   redirect: '/karuizawa/submitform/input',
        //   name: 'submitform',
        //   component: () => import(/* webpackChunkName: "HomeView" */ '@/components/submitform/Index.vue'),
        //   children: [
        //     {
        //       path: '/karuizawa/submitform/input',
        //       name: 'submitforminput',
        //       meta: {
        //         keepAlive: true // 需要缓存
        //       },
        //       component: () => import(/* webpackChunkName: "HomeView" */ '@/components/submitform/Input.vue'),
        //     },
        //     {
        //       path: '/karuizawa/submitform/input_user',
        //       name: 'submitforminputuser',
        //       meta: {
        //         keepAlive: true // 需要缓存
        //       },
        //       component: () => import(/* webpackChunkName: "HomeView" */ '@/components/submitform/InputUser.vue'),
        //     },
        //     {
        //       path: '/karuizawa/submitform/input_inquiry',
        //       name: 'submitforminputinquiry',
        //       meta: {
        //         keepAlive: true // 需要缓存
        //       },
        //       component: () => import(/* webpackChunkName: "HomeView" */ '@/components/submitform/InputInquiry.vue'),
        //     },
        //     //
        //     {
        //       path: '/karuizawa/submitform/confirm',
        //       name: 'submitformconfirm',
        //       component: () => import(/* webpackChunkName: "HomeView" */ '@/components/submitform/Confirm.vue'),
        //     },
        //     {
        //       path: '/karuizawa/submitform/confirm_user',
        //       name: 'submitformconfirmuser',
        //       component: () => import(/* webpackChunkName: "HomeView" */ '@/components/submitform/ConfirmUser.vue'),
        //     },
        //     {
        //       path: '/karuizawa/submitform/confirm_inquiry',
        //       name: 'submitformconfirminquiry',
        //       component: () => import(/* webpackChunkName: "HomeView" */ '@/components/submitform/ConfirmInquiry.vue'),
        //     },
        //     // 
        //     {
        //       path: '/karuizawa/submitform/finish',
        //       name: 'submitformconfinish',
        //       component: () => import(/* webpackChunkName: "HomeView" */ '@/components/submitform/Finish.vue'),
        //     },
        //   ]
        // }
      ]
    },
  ]
})

export default router
