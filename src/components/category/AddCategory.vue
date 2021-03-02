<template>
    <div>
        <div class="form-group">
            <label for="type">Tipo</label>
            <input name="type" type="text" class="form-control" id="type" v-model="category.name" required />
        </div>
        <button class="btn btn-success" @click="saveCategory">Guardar</button>
    </div>
</template>

<script>
    export default {
        name : 'AddCategory',
        data () {
            return {
                category : {
                    id : null,
                    type : "",
                    status : true
                },
                flag : false 
            }
        },
        methods : {
            saveCategory () {
                console.log(`Mi objeto es:`, this.category)
            } 
        }
    }
</script>

<style>

</style>