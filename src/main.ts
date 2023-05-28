import Vue from 'vue'
// import { createPinia, PiniaVuePlugin } from 'pinia'
import { adaptHeightPlugin } from './plugins'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css'
import * as MicroModal from 'micromodal'
import store from './stores/index';
window.addEventListener('beforeunload', () => {
  store.commit('saveStateToCookie');
});
store.commit('initFavTotal');

Vue.use(MicroModal)

// Vue.use(PiniaVuePlugin)
Vue.use(adaptHeightPlugin)
Vue.use(ElementUI);
Vue.config.devtools = true;


new Vue({
  router,
  store,
  render: (h: (arg0: any) => any) => h(App)
}).$mount('#app')
