import {
    CREATE_PAYROLL_FAILURE,
    CREATE_PAYROLL_REQUEST,
    CREATE_PAYROLL_SUCCESS,
    DELETE_PAYROLL_FAILURE,
    DELETE_PAYROLL_REQUEST,
    DELETE_PAYROLL_SUCCESS,
    FETCH_PAYROLL_FAILURE,
    FETCH_PAYROLL_REQUEST,
    FETCH_PAYROLL_SUCCESS,
    UPDATE_PAYROLL_FAILURE,
    UPDATE_PAYROLL_REQUEST,
    UPDATE_PAYROLL_SUCCESS
} from "../constants";

const initialState = {
    payroll: [],
    loading: false,
    error: null,
};


export const payrollData = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_PAYROLL_REQUEST:
            return { ...state, loading: true, error: null }

        case CREATE_PAYROLL_SUCCESS:
            return { ...state, payroll: [...state.payroll, payload], loading: false, error: null }

        case CREATE_PAYROLL_FAILURE:
            return { ...state, loading: false, error: payload };

        case FETCH_PAYROLL_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_PAYROLL_SUCCESS:
            return { ...state, payroll: payload, loading: false, error: null };

        case FETCH_PAYROLL_FAILURE:
            return { ...state, loading: false, error: payload };

        case DELETE_PAYROLL_REQUEST:
            return { ...state, loading: true, error: null };

        case DELETE_PAYROLL_SUCCESS:
            return { ...state, payroll: state.payroll.filter(payroll => payroll._id !== payload), loading: false, error: null };

        case DELETE_PAYROLL_FAILURE:
            return { ...state, loading: false, error: payload };

        case UPDATE_PAYROLL_FAILURE:
            return { ...state, loading: false, error: null };

        case UPDATE_PAYROLL_SUCCESS:
            return { ...state, payroll: state.payroll.filter(payroll => payroll._id !== payload), loading: false, error: null };

        case UPDATE_PAYROLL_REQUEST:
            return { ...state, loading: true, error: payload };

        default:
            return state;
    }
};