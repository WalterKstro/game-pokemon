import getArrayRandomElement,{createAnArray, mixinArray} from '@/helpers/helpersArrays.js';

describe('Test suite for helpersArrays', () => {

    test('Should return an array with elements type number, ordered', () => {
        const array = createAnArray();

        expect(array.length).toBe(650);
        expect(array[0]).toBe(1);
        expect(array[649]).toBe(650);
    });

    test('Should return an array with elements type number, mixed', () => {
        const array = mixinArray();
        expect(array[0]).not.toBe(1);
        expect(array[649]).not.toBe(650);
    });
    test('Shoud return an array with four elements object', async () => {
        const arrayObjects = await getArrayRandomElement();

        expect(arrayObjects.length).toBe(4);
        expect(arrayObjects).toEqual(
            [{ 
                id: expect.any(Number),
                name: expect.any(String) 
            },
            { 
                id: expect.any(Number),
                name: expect.any(String)
            },
            { 
                id: expect.any(Number),
                name: expect.any(String)
            },
            { 
                id: expect.any(Number),
                name: expect.any(String)
            }]
        )
    });
});