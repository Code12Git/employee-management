import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from "../constants";

const storedUser = localStorage.getItem('user');
const initialState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    loading: false,
    error: null,
};

export const userData = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };

        case LOGIN_SUCCESS:
            return { ...state, user: payload, loading: false, error: null };

        case LOGIN_FAILURE:
            return { ...state, loading: false, error: payload };
        case LOGOUT_SUCCESS:
            return { ...state, user: null, loading: false, error: null };
        default:
            return state;
    }
};
