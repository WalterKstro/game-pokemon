import { mount, shallowMount } from "@vue/test-utils";
import Home from "@/pages/Home";

describe('Test suite for Home page', () => {
    let wrapper;
    let initialWrapper;
    const arrayPokemons = [
        { id: 196, name: 'espeon' },
        { id: 630, name: 'mandibuzz' },
        { id: 173, name: 'cleffa' },
        { id: 238, name: 'smoochum' }
    ];
    beforeEach(() => {
        wrapper = shallowMount(Home);
        initialWrapper = shallowMount(Home,{
            data(){
                return {
                    arrayOptions : arrayPokemons,
                    objectPokemonSelected : arrayPokemons[0],
                    showImagePokemon : false,
                    messageResultGame : null,
                }
            }
        });
    });

    test('Should call the getDataPokemon method, when the component is created', () => {
        // Un spy, es como un watch, que esta pendiente de la llamada a una funcion
        const spy = jest.spyOn(Home.methods, 'getDataPokemon');
        const wrapper = shallowMount(Home);

        expect(spy).toHaveBeenCalled();
    });

    test('Should create a correct snapshot of <Home/>',() => {
        const wrapper = mount(Home,{
            data(){
                return {
                    arrayOptions : arrayPokemons,
                    objectPokemonSelected : arrayPokemons[0],
                    showImagePokemon : true,
                    messageResultGame : null,
                }
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
    })


    test('Should exist the component <PokemonOptions/>', () => {
        expect(initialWrapper.find('pokemon-options-stub').exists()).toBe(true);
    });
    test('Should exist the component <PokemonImage/>', () => {
        expect(initialWrapper.find('pokemon-image-stub').exists()).toBe(true);
    });
    test('Should exist the component <PokemonResult/>', () => {
        expect(initialWrapper.find('pokemon-result-stub').exists()).toBe(true);
    });

    test('Should the component <PokemonImage, has the attribute pokemonId with 196/>', () => {
        const objectProperties = initialWrapper.find('pokemon-image-stub').attributes();

        expect(objectProperties.hasOwnProperty('pokemonid')).toBeTruthy();
        expect(objectProperties.pokemonid).toBe('196');
    });

    test('Should the component <PokemonOptions, has the attribute  arrayoptionspokemons/>', () => {
        const objectProperties = initialWrapper.find('pokemon-options-stub').attributes();
        expect(objectProperties.hasOwnProperty('arrayoptionspokemons')).toBeTruthy();
    });

    test('Should execute the method methodEmmitedOfPokemonOptions, when the component <PokemonOptions>, emits the event "emitPokemonSelected"', () => {
        expect(initialWrapper.vm.messageResultGame).toBeNull();

        initialWrapper.vm.methodEmmitedOfPokemonOptions(196);
        
        expect(initialWrapper.vm.showImagePokemon).toBeTruthy();
        expect(initialWrapper.vm.messageResultGame).not.toBeNull();
    });
});
