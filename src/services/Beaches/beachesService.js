import axios from 'axios';

const api = axios.create({
    baseURL: 'http://balneabiliapp.makecodes.dev',
})

async function getBeaches() {
    let url = '/latest.json';
    try {
        const beaches = await api.get(url);
        
        return beaches;
    } catch(error) {
        return console.log(error);
    }
};

const beachesService = {
    getBeaches,
};

export default beachesService;