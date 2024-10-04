import axios from 'axios';

const token = localStorage.getItem('token')?.replace(/"/g, '');

export const publicInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/auth'
});

export const privateInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        Authorization: `Bearer ${token}`
    }
});
