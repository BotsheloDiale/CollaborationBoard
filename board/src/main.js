import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import router from './router'
import { store } from './store';
import vuetify from './plugins/vuetify';


import './importComponents'
import './registerServiceWorker'


Vue.use(VueMask);
Vue.use(vuetify, {
  iconfont: "md",
});

// Import Jquery
window.$ = require("jquery");

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
