<template>
  <div class="container-footer" v-if="message">
    <h3 class="title-result">{{message}}</h3>
    <button class="list-button" @click="methodEmmitedOfPokemonResults">Intentalo de nuevo</button>
  </div>
</template>

<script>
export default {
    name : 'PokemonResult',
    props: ['message'],
    methods : {
        methodEmmitedOfPokemonResults(){
            this.$emit('new-game');
        }
    }
}
</script>
<style scoped>
.container-footer{
  max-width: 300px;
  min-width: 200px;
  margin-right: auto;
  margin-left: auto;
  padding: 16px;
}
.title-result{
  text-align: center;
  margin: 8px 0;
}
</style>