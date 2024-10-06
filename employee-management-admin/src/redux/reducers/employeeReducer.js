import {
    CREATE_EMPLOYEE_FAILURE,
    CREATE_EMPLOYEE_REQUEST,
    CREATE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAILURE,
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAILURE,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS
} from "../constants";

const initialState = {
    employees: [],
    loading: false,
    error: null,
};

export const employeeData = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_EMPLOYEE_REQUEST:
            return { ...state, loading: true, error: null }
        case CREATE_EMPLOYEE_SUCCESS:
            return { ...state, employees: [...state.employees, payload], loading: false, error: null }
        case CREATE_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: payload };
        case FETCH_EMPLOYEE_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_EMPLOYEE_SUCCESS:
            return { ...state, employees: payload, loading: false, error: null };

        case FETCH_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: payload };
        case DELETE_EMPLOYEE_REQUEST:
            return { ...state, loading: true, error: null };

        case DELETE_EMPLOYEE_SUCCESS:
            return { ...state, employees: state.employees.filter(employee => employee._id !== payload), loading: false, error: null };

        case DELETE_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: payload };
        case UPDATE_EMPLOYEE_REQUEST:
            return { ...state, loading: true, error: null };

        case UPDATE_EMPLOYEE_SUCCESS:
            return { ...state, employees: state.employees.map((employee) => employee._id === payload.id ? { ...employee, ...payload.data } : employee), loading: false, error: null };

        case UPDATE_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};
