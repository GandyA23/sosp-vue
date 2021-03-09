<template>
    <div>
        <div class="form-group">
            <label for="type">Tipo</label>
            <input name="type" type="text" class="form-control" id="type" v-model="fileType.type" required />
        </div>
        <button class="btn btn-success" @click="saveFileType">Guardar</button>
    </div>
</template>

<script>
    import FileTypeService from '../../service/FileTypeService' ;

    export default {
        name : 'AddFileType',
        data () {
            return {
                fileType: {
                    id: null,
                    type: "",
                    status: true
                },
                flag: false 
            }
        },
        methods : {
            saveFileType () {
                console.log(`Mi objeto es:`, this.fileType)
                FileTypeService.create(this.fileType)
                .then(response => {
                    console.log(response.data);
                    // Redirecciona a raíz (Listado)
                    this.$router.push("/tipos-archivos");
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