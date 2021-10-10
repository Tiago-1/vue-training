<template>
  <div id="app">
   <nav class="navbar is-black">
      <router-link to="/"  class="navbar-item ">Usuarios</router-link> 
      <router-link to="/about"  class="navbar-item ">Sesiones</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    
  }
}
</style>
