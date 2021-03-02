<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="" class="nav-link">Categoría</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3" >
      <!--Aquí se muestran mis componentes-->
      <AddCategory />    
    </div>
  </div>
</template>

<script>
  import AddCategory from './components/category/AddCategory.vue';

  export default {
    name: 'App',
    components : {
      AddCategory
    }
  }
</script>

