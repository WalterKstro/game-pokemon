import Instance from '@/api/request.js';

describe('Test suite for request API', () => {
    test('Should has the baseUrl the instance of Axios', () => {
        const baseURLApi = 'https://pokeapi.co/api/v2/pokemon/';

        expect(Instance.defaults.baseURL).toBe(baseURLApi);
    });
});