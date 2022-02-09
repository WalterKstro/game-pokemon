<template>
  <div class="container-picture">
      <img v-if="showImagePokemon" 
           draggable="false"  
           state="show"
           class="picture-pokemon picture-origin" 
           :src="generateSourceUrlImage" alt="pokemon">

      <img v-else draggable="false"  
           class="picture-pokemon picture-shadow"
           state="hidden"
           :src="generateSourceUrlImage" alt="pokemon"> 
  </div>
</template>

<script>
export default {
    name: 'PokemonImage',
    props : {
        pokemonId : {
            type : Number,
            required : true
        },
        showImagePokemon : {
            type : Boolean,
            required : true,
            default : false
        }
    },
    computed: {
        generateSourceUrlImage(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }
}
</script>

<style scope>
.picture-pokemon{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 60%;
    height: auto;
    display: block;
}
.picture-shadow{
    filter: brightness(0);
}
.picture-origin{
    filter: brightness(1);
}
.container-picture{
    position: relative;
    max-width: 300px;
    width: 100%;
    height: 300px;
    margin-right: auto;
    margin-left: auto;
}
@media screen and (min-width: 1024px){
    .container-picture{
        margin-right: 0;
        margin-left: 0;
    }
}
 
.show-pokemon{
    filter: brightness(1);
    transition: filter 1s;
}
</style>