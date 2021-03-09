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

    update (obj) {
        return api.put('/categorias', obj);
    }

    delete (id) {
        return api.delete(`/categorias/${id}`);
    }
}

export default new CategoryService();