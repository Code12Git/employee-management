import { publicInstance } from '../utils/axiosInstance';

const AUTHAPIS = publicInstance;

const login = async (credentials) => {
    const response = await AUTHAPIS.post('/login', credentials);
    return response;
};

export { login };
