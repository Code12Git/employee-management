import {
    CREATE_ATTENDANCE_FAILURE,
    CREATE_ATTENDANCE_REQUEST,
    CREATE_ATTENDANCE_SUCCESS,
    FETCH_ATTENDANCE_FAILURE,
    FETCH_ATTENDANCE_REQUEST,
    FETCH_ATTENDANCE_SUCCESS,
} from "../constants";

const initialState = {
    attendance: [],
    loading: false,
    error: null,
};

export const attendanceData = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_ATTENDANCE_REQUEST:
            return { ...state, loading: true, error: null };

        case CREATE_ATTENDANCE_SUCCESS:
            return { ...state, attendance: [...state.attendance, payload], loading: false, error: null };

        case CREATE_ATTENDANCE_FAILURE:
            return { ...state, loading: false, error: payload };

        case FETCH_ATTENDANCE_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_ATTENDANCE_SUCCESS:
            return { ...state, attendance: payload, loading: false, error: null };

        case FETCH_ATTENDANCE_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
