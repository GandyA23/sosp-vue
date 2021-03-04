import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue'
import router from './router'

Vue.config.productionTip = false
// Importar las hojas de estilo de bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue debe de usar Bootstrap 
Vue.use(BootstrapVue);

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
