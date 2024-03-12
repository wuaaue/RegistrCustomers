import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error('Response Data:', error.response.data);
            console.error('Response Status:', error.response.status);
            console.error('Response Headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request:', error.request);
        } else {
            console.error('Error Message:', error.message);
        }
        return Promise.reject(error);

    }
);

export default api;
