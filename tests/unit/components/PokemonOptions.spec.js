import PokemonOptions from '@/components/PokemonOptions';
import { shallowMount } from '@vue/test-utils';

describe('Test suit on component <PokemonOptions/>', () => {
    let wrapper;
    const arrayPokemons = [
        { id: 196, name: 'espeon' },
        { id: 630, name: 'mandibuzz' },
        { id: 173, name: 'cleffa' },
        { id: 238, name: 'smoochum' }
    ];

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions,{
            propsData: {
                arrayOptionsPokemons: arrayPokemons,
            }
        });
    });

    test('Should create a correct snapshot of <PokemonOptions/>',() => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Should display four elements <button>', () => {
        const arrayButtons = wrapper.findAll('.list-button');
        const firstElement = arrayButtons[0];
        const lastElement = arrayButtons[3];

        expect(arrayButtons.length).toBe(4);
        expect(firstElement.text()).toBe('espeon');
        expect(lastElement.text()).toBe('smoochum');
        
    });

    test('Should emit an event(select-pokemon) when click on a pokemon', () => {
        const [button1, button2, button3, button4] = wrapper.findAll('.list-button');

        button1.trigger('click');
        button2.trigger('click');
        button3.trigger('click');
        button4.trigger('click');

        const [ param1, param2, param3, param4 ] = wrapper.emitted('select-pokemon');
        

        expect(param1).toEqual([arrayPokemons[0].id]);
        expect(param2).toEqual([arrayPokemons[1].id]);
        expect(param3).toEqual([arrayPokemons[2].id]);
        expect(param4).toEqual([arrayPokemons[3].id]);

    })
})
