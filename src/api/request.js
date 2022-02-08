import Axios from 'axios';

const Instance = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

export default Instance;