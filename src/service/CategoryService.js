import api from './api.js';

class CategoryService {
    getAll () {
        return api.get("/categorias");
    }

    getById (id) {
        return api.get(`/categorias/${id}`);
    }

    create (obj) {
        return api.post('/categorias', obj);
    }
}

export default new CategoryService();