import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        // Categorias
        { path: '/categorias', name: 'categorias', component: () => import('./components/category/ListCategory') },
        { path: '/addCategory', name: 'addCategory', component: () => import('./components/category/AddCategory') },
        { path: '/categorias/:id', name: 'editCategory', component: () => import('./components/category/EditCategory') },
        // Tipos de archivo
        { path: '/tipos-archivos', name: 'tipos-archivo', component: () => import('./components/fileType/ListFileType') },
        { path: '/addFileType', name: 'addFileType', component: () => import('./components/fileType/AddFileType') },
        { path: '/tipos-archivos/:id', name: 'editFileType', component: () => import('./components/fileType/EditFileType') }
    ]
});