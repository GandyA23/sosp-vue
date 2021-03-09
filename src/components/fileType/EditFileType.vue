<template>
    <div>
        <div class="form-group">
            <label for="type">Tipo</label>
            <input name="type" type="text" class="form-control" id="type" v-model="fileType.type" required />
        </div>
        <div class="form-check mb-4">
            <input name="status" type="checkbox" :checked="fileType.status" class="form-check-input" id="status" v-model="fileType.status" />
            <label class="form-check-label" for="status">Estado</label>
        </div>
        <button class="btn btn-success" @click="updateFileType">Actualizar</button>
    </div>
</template>

<script>
import FileTypeService from '../../service/FileTypeService';

export default {
    name: "EditFileType",
    data () {
        return {
            fileType: null
        }
    },
    mounted () {
        // Extraé el id del link para enviarlo a mi método de get
        this.getFileTypeById(this.$route.params.id);
    },
    methods: {
        updateFileType () {
            FileTypeService.update(this.fileType)
            .then(response => {
                console.log(response);
                // Redirecciona a raíz (Listado)
                this.$router.push("/tipos-archivos");
            })
            .catch(e => {
                console.log(e);
            });
        },
        getFileTypeById (id) {
            FileTypeService.getById(id)
            .then(response => {
                this.fileType = response.data;
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