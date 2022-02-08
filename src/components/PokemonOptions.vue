<template>
  <aside>
      <h2 class="list-title">Seleccione una opción</h2>
      <ul class="container-list">
        <li class="list-item" 
            v-for="({id,name}) in arrayOptionsPokemons" 
            :key="id">
            <button class="list-button" @click="selectPokemon($event,id)" :data-id="id">{{name}}</button>
        </li>
        </ul>
  </aside>
</template>

<script>
export default {
    name: 'PokemonOptions',
    props: {
        arrayOptionsPokemons: {
            type: Array,
            required: true,
        }
    },
    methods: {
        selectPokemon($event,idPokemon){
            const arrayButtonOptions = document.querySelectorAll('[data-id]');
            const idButtonClicked = $event.target.dataset.id;
            arrayButtonOptions.forEach(button => {
                (button.dataset.id == idButtonClicked) ? button.classList.add('selected') : button.setAttribute('disabled',true);
            });
            this.$emit('select-pokemon', idPokemon);
        }
    }
}
</script>

<style>
.container-list{
   padding: 0;
   text-indent: 0;
   list-style-type: none;
    max-width: 200px;
    min-width: 100px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}
.list-item{
    margin: 5px 0;
}
.list-button{
    border-radius: 3px;
    width: 100%;
    padding: 10px 0;
    border: 0;
    cursor: pointer;
    background-color: #263238;
    color: #feca1b;
}
.list-button:hover{
    background-color: #feca1b;
    color: #263238;
}
.list-title{text-align: center;}
.selected{
    background-color: #feca1b;
    color: #263238;
}
</style>