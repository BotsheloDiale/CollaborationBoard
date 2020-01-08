import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      loading: false,
      token: null,
  },
  mutations: {
    updateloading(state, showhide) {
      state.loading = showhide;
    },    
    updateToken(state, data) {
      state.token = data;
    },
  },
  actions: {},
  getters: {},
});