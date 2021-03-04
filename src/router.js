import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        // Lista de categorias
        { path: '/', name: 'categorias', component: () => import('./components/category/ListCategory.vue') },
        // Agregar de categorias
        { path: '/addCategory', name: 'addCategory', component: () => import('./components/category/AddCategory.vue') }
    ]
});