import {
    FETCH_PAYROLL_FAILURE,
    FETCH_PAYROLL_REQUEST,
    FETCH_PAYROLL_SUCCESS,
} from "../constants";

const initialState = {
    payroll: [],
    loading: false,
    error: null,
};

export const payrollData = (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_PAYROLL_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_PAYROLL_SUCCESS:
            return { ...state, payroll: payload, loading: false, error: null };

        case FETCH_PAYROLL_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
