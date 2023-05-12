import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { adaptHeightPlugin } from './plugins'

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(PiniaVuePlugin)
Vue.use(adaptHeightPlugin)
Vue.config.devtools = true;


new Vue({
  router,
  pinia: createPinia(),
  render: (h: (arg0: any) => any) => h(App)
}).$mount('#app')
