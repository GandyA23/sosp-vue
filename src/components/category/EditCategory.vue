<template>
    <div>
        <div class="form-group">
            <label for="type">Tipo</label>
            <input name="type" type="text" class="form-control" id="type" v-model="category.type" required />
        </div>
        <div class="form-check mb-4">
            <input name="status" type="checkbox" :checked="category.status" class="form-check-input" id="status" v-model="category.status" />
            <label class="form-check-label" for="status">Estado</label>
        </div>
        <button class="btn btn-success" @click="updateCategory">Actualizar</button>
    </div>
</template>

<script>
import CategoryService from '../../service/CategoryService';

export default {
    name: "EditCategory",
    data () {
        return {
            category: null
        }
    },
    mounted () {
        // Extraé el id del link para enviarlo a mi método de get
        this.getCategoryById(this.$route.params.id);
    },
    methods: {
        updateCategory () {
            CategoryService.update(this.category)
            .then(response => {
                console.log(response);
                // Redirecciona a raíz (Listado)
                this.$router.push("/");
            })
            .catch(e => {
                console.log(e);
            });
        },
        getCategoryById (id) {
            CategoryService.getById(id)
            .then(response => {
                this.category = response.data;
            })
            .catch(e => {
                console.log(e);
            })
        }
    }
}
</script>

<style>

</style>