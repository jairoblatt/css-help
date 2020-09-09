import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'


import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// Default layout register global vue aplication
import Default from './layouts/default';
Vue.component(Default.name, Default);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
