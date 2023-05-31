// store.js
// @ts-ignore
import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';
import { getFavList } from "@/utils/cookies";


Vue.use(Vuex);
const savedState = Cookies.get('myStore');

// 创建store实例
const store = new Vuex.Store({
  state: savedState ? JSON.parse(savedState) : {
    // 初始状态
    favTotal: 0,
  },
  mutations: {
    updateFavTotal(state, payload) {
      console.log({ state, payload });
      state.favTotal = payload
    },
    saveStateToCookie(state) {
      const expiresDate = new Date();
      expiresDate.setDate(expiresDate.getDate() + 7);
      Cookies.set('myStore', JSON.stringify(state), { expires: expiresDate });
    },
    initFavTotal(state, payload) {
      const Arr = getFavList()
      if (!Arr) {
        state.favTotal = 0
      } else {
        const length = JSON.parse(Arr as any).length
        if (length) state.favTotal = length
      }
    }
  },
  actions: {
    asyncIncrement(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    },
    asyncDecrement(context) {
      setTimeout(() => {
        context.commit('decrement');
      }, 1000);
    },
    updateMessage(context, message) {
      context.commit('setMessage', message);
    }
  },
  getters: {
    getCount: state => state.favTotal,
  },

});

export default store;
