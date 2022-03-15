<template>
<navComp/>

<div class="container">

 <router-view></router-view>
</div>

</template>

<script>
  import navComp from './components/navbar.vue'
export default {
  name: 'App',
  components: {
    navComp
  }
}
</script>

<style>
body {
  background-color: #131722;
  color: #fff;
}
</style>
