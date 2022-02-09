import PokemonImage from '@/components/PokemonImage';
import { shallowMount } from '@vue/test-utils';

describe('Test suit of component <PokemonImage/>', () => {
    
    test('Should create a correct snapshot of <PokemonImage/>', () => {

        const wrapper = shallowMount(PokemonImage,{
            propsData: {
                pokemonId: 1,
                showImagePokemon:false
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Should show the hidden image and the pokemon one hundred', () => {
        const wrapper = shallowMount(PokemonImage,{
            propsData: {
                pokemonId: 100,
                showImagePokemon:false
            }
        });

        const image = wrapper.find('img');
        const {src, state} = image.attributes();

        expect(src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
        expect(state).toBe('hidden');
    })

    test('Should show the pokemon, if showImagePokemon:true', () => {
        const wrapper = shallowMount(PokemonImage,{
            propsData: {
                pokemonId: 100,
                showImagePokemon:true
            }
        });

        const image = wrapper.find('img');
        const {src, state} = image.attributes();

        expect(src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
        expect(state).toBe('show');
    })
})