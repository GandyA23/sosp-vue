<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Categoría</router-link> 
        </li>
      </div>
    </nav>

    <div class="container mt-3" >
      <!--Aquí se muestran mis componentes-->
      <router-view />    
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

