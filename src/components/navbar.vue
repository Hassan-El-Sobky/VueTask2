<template>
    <div>
<nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link " active-class="active" aria-current="page" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/about">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/contact">Contact Us</router-link>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
</template>

<script>

     export default {
        name:'navComp'
    }
</script>

<style scoped>
.navbar {
  background-color: transparent;
  color: #fff;
}
</style>