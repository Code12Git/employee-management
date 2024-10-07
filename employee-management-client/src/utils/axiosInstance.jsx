import axios from 'axios';

const token = localStorage.getItem('token')?.replace(/"/g, '');


export const publicInstance = axios.create({
    baseURL: 'https://employee-management-woqu.onrender.com/api/v1/auth',
    headers: {
        'Content-Type': 'application/json',
    },
});


export const privateInstance = axios.create({
    baseURL: 'https://employee-management-woqu.onrender.com/api/v1',
    headers: {
        Authorization: `Bearer ${token}`
    }
});
