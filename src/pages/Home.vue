<template>

    <div class="container-game" v-if="objectPokemonSelected">
        <Title/>
        <div class="container-main">
            <pokemon-image 
                :pokemonId="objectPokemonSelected.id" 
                :showImagePokemon="showImagePokemon"/>

            <pokemon-options 
                :arrayOptionsPokemons = "arrayOptions" 
                @select-pokemon="methodEmmitedOfPokemonOptions"/>
        </div>
        <pokemon-result  
            :message="messageResultGame"
            @new-game="tryOtherGame"/>
    </div>
    <bounce-loader 
        :loading="true" 
        v-else>
    </bounce-loader>

</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import Title from '@/components/Title.vue';
import PokemonResult from '@/components/PokemonResult.vue';
import getArrayRandomElement from '@/helpers/helpersArrays.js';
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

export default {
    name: 'Home',
    async created(){
        await this.getDataPokemon();
    },
    data() {
        return {
            arrayOptions : [],
            objectPokemonSelected : null,
            showImagePokemon : false,
            messageResultGame : null,
        }
    },
    components: {   
        PokemonImage,
        PokemonOptions,
        Title,
        PokemonResult,
        BounceLoader
    },
    methods : {
        async getDataPokemon(){
            this.arrayOptions = await getArrayRandomElement();
            this.objectPokemonSelected = this.arrayOptions[this.generateRandomNumber];
        },
        methodEmmitedOfPokemonOptions(id){
            this.showImagePokemon = true;
            if(this.objectPokemonSelected.id == id){
                this.messageResultGame = '¡Has ganado!';
            }else{
                this.messageResultGame = `¡Has perdido!, era ${this.objectPokemonSelected.name}`;
            }
        },
        async tryOtherGame(){
            this.arrayOptions = await getArrayRandomElement();
            this.objectPokemonSelected = this.arrayOptions[this.generateRandomNumber];
            this.showImagePokemon = false;
            this.messageResultGame = null;
        }
    },
    computed: {
        generateRandomNumber(){
            return Math.floor(Math.random() * this.arrayOptions.length);
        }
    }
}
</script>
<style>

@media screen and (min-width: 1024px){
    .container-main{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
}
.v-spinner{
    position:absolute;
    left:50%;
    transform: translateX(-50%);
}
</style>