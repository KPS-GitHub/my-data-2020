import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mydata-822b0.firebaseio.com/',
    'Access-Control-Allow-Origin': true
});

export default instance;