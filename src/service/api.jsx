import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/bloomed/v1', // URL base de tu API
    timeout: 5000
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');
        if (userDetails) {
            try {
                const token = JSON.parse(userDetails).token;
                config.headers.Authorization = `Bearer ${token}`;
            } catch (error) {
                console.error('Error parsing JSON from localStorage:', error);
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const login = async (data) => {
    try {
        const response = await apiClient.post('/auth/login', data);
        return response;
    } catch (e) {
        console.error('Error in API request:', e);
        return {
            error: true,
            e
        };
    }
};

export const register = async (data) => {
    try {
        return await apiClient.post('/user/register', data);
    } catch (error) {
        return {
            error: true,
            e: error
        };
    }
};

export const getpublicaciones = async () => {
    try {
        const response = await apiClient.get('/publications/publications'); // URL corregida
        return response.data;
    } catch (e) {
        console.error('Error fetching publicaciones:', e);
        return {
            error: true,
            e
        };
    }
};