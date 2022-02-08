<template>
  <Home/> 
</template>

<script>
import Home from '@/pages/Home.vue';
export default {
  name: 'App',
  components: {Home}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body{
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    height: 100vh;
    position: relative;
}
.app{
  margin: auto;
  flex-basis: 960px;
}
</style>