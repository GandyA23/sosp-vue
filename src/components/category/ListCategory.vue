<template>
    <div class="row">
        <div class="col-md-12">
            <h4> </h4>
        </div>
        <div class="col-md-10">
            <a :href="'/AddCategory'" class="btn btn-info">
                Agregar categoría
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
                    <tr v-for="(category, i) in categories" v-bind:key="i">
                        <td>{{i+1}}</td>
                        <td>{{category.type}}</td>
                        <td>{{category.status === true ? 'Activo' : 'Inactivo'}}</td>
                        <td>
                            <a :href="'/categorias/'+category.id">
                                <b-button variant="primary">
                                    <b-icon-pen-fill />
                                </b-button>   
                            </a>
                        </td>
                        <td>
                            <b-button variant="danger" @click="deleteCategory(category.id)">
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

    import CategoryService from '../../service/CategoryService';

    export default {
        name : "ListCategory",
        data () {
            return {
                categories: []
            }
        },
        methods : {
            getAllCategories () {
                // Conectar con la API
                CategoryService.getAll()
                .then(response => {
                    this.categories = response.data;
                })
                .catch(e => {
                    console.log(e);
                })
            },
            deleteCategory (id) {
                if (confirm("¿Estas seguro de eliminar este registro?")) {
                    CategoryService.delete(id)
                    .then(response => {
                        console.log(response);
                        this.getAllCategories();
                    })
                    .catch(e => {
                        console.log(e);
                    })
                }
            } 
        },
        mounted () {
            // Acciones cuando carga
            this.getAllCategories();
        }
    }
</script>

<style scoped>

</style>