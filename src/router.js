import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        // Lista de categorias
        { path: '/categorias', name: 'categorias', component: () => import('./components/category/ListCategory') },
        // Agregar de categorias
        { path: '/addCategory', name: 'addCategory', component: () => import('./components/category/AddCategory') },
        // Editar Categoria
        { path: '/categorias/:id', name: 'editCategory', component: () => import('./components/category/EditCategory') }
    ]
});