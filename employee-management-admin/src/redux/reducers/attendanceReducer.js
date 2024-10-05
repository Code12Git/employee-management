import {
    FETCH_ATTENDANCE_FAILURE,
    FETCH_ATTENDANCE_REQUEST,
    FETCH_ATTENDANCE_SUCCESS
} from "../constants";

const initialState = {
    attendance: [],
    loading: false,
    error: null,
};

export const attendanceData = (state = initialState, { type, payload }) => {
    switch (type) {

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
