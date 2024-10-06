import { publicInstance } from "../../utils/axiosInstance";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants";

const login = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
        const response = await publicInstance.post(`/login`, data);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        localStorage.setItem('token', JSON.stringify(response.data.data.token));
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.data.user });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
}

const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch({ type: LOGOUT_SUCCESS });
    };
}


export { login, logout };
