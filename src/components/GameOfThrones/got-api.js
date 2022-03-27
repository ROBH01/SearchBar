import axios from 'axios';

export default axios.create({
    baseURL: 'https://game-of-thrones-quotes.herokuapp.com/v1/house',
    timeout: 1000,
    headers: {
        Accept: 'Access-Control-Allow-Origin: *',
    },
});
