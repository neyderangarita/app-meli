import axios from 'axios';


export const meliAPI = axios.create({
    baseURL: 'http://localhost:4000/api'
});