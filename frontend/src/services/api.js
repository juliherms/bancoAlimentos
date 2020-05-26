import axios from 'axios';

/**
 * Configura a URL base para a chamada da API.
 */
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;