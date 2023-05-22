import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { adaptHeightPlugin } from './plugins'

import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/main.css'
import * as MicroModal from 'micromodal'

Vue.use(MicroModal)

Vue.use(PiniaVuePlugin)
Vue.use(adaptHeightPlugin)
Vue.use(ElementUI);
Vue.config.devtools = true;


new Vue({
  router,
  pinia: createPinia(),
  render: (h: (arg0: any) => any) => h(App)
}).$mount('#app')
