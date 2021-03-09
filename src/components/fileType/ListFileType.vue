<template>
    <div class="row">
        <div class="col-md-12">
            <h4> </h4>
        </div>
        <div class="col-md-10">
            <a :href="'/AddFileType'" class="btn btn-info">
                Agregar tipo de archivo
                <!--Agrega un ícono (IconsPlugin)-->
                <b-icon-plus-square-fill />
            </a>
        </div>
        <div class="col-md-12">
            <table class="table table-hover">
                <thead>
                    <th>Núm</th>
                    <th>Tipo</th>
                    <th>Estado</th>
                    <th colspan="2">Acciones</th>
                </thead>
                <tbody>
                    <tr v-for="(fileType, i) in fileTypes" v-bind:key="i">
                        <td>{{i+1}}</td>
                        <td>{{fileType.type}}</td>
                        <td>{{fileType.status === true ? 'Activo' : 'Inactivo'}}</td>
                        <td>
                            <a :href="'/tipos-archivos/'+fileType.id">
                                <b-button variant="primary">
                                    <b-icon-pen-fill />
                                </b-button>   
                            </a>
                        </td>
                        <td>
                            <b-button variant="danger" @click="deleteFileType(fileType.id)">
                                <b-icon-trash-fill />
                            </b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    import FileTypeService from '../../service/FileTypeService';

    export default {
        name : "ListFileType",
        data () {
            return {
                fileTypes: []
            }
        },
        methods : {
            getAllFileTypes () {
                // Conectar con la API
                FileTypeService.getAll()
                .then(response => {
                    this.fileTypes = response.data;
                })
                .catch(e => {
                    console.log(e);
                })
            },
            deleteFileType (id) {
                if (confirm("¿Estas seguro de eliminar este registro?")) {
                    FileTypeService.delete(id)
                    .then(response => {
                        console.log(response);
                        this.getAllFileTypes();
                    })
                    .catch(e => {
                        console.log(e);
                    })
                }
            } 
        },
        mounted () {
            // Acciones cuando carga
            this.getAllFileTypes();
        }
    }
</script>

<style scoped>

</style>