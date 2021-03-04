<template>
    <div class="row">
        <div class="col-md-12">
            <h4> </h4>
        </div>
        <div class="col-md-12">
            <table>
                <thead>
                    <th>Núm</th>
                    <th>Tipo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    <tr v-for="(category, i) in categories" v-bind:key="i">
                        <td>{{i+1}}</td>
                        <td>{{category.type}}</td>
                        <td>{{category.status}}</td>
                        <td>

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