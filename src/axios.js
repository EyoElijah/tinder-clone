import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-e.herokuapp.com/'
});

export default instance;