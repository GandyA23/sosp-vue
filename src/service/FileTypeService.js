import api from './api.js';

class FileTypeService {
    getAll () {
        return api.get("/tipos-archivos");
    }

    getById (id) {
        return api.get(`/tipos-archivos/${id}`);
    }

    create (obj) {
        return api.post('/tipos-archivos', obj);
    }

    update (obj) {
        return api.put('/tipos-archivos', obj);
    }

    delete (id) {
        return api.delete(`/tipos-archivos/${id}`);
    }
} 

export default new FileTypeService();