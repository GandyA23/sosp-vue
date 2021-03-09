import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import router from './router'

Vue.config.productionTip = false
// Importar las hojas de estilo de bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue usará Bootstrap 
Vue.use(BootstrapVue);

// Vue usará los iconos de Bootstrap
Vue.use(IconsPlugin);

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
