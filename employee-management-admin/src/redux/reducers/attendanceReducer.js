import {
    DELETE_ATTENDANCE_FAILURE,
    DELETE_ATTENDANCE_REQUEST,
    DELETE_ATTENDANCE_SUCCESS,
    FETCH_ATTENDANCE_FAILURE,
    FETCH_ATTENDANCE_REQUEST,
    FETCH_ATTENDANCE_SUCCESS,
    UPDATE_ATTENDANCE_FAILURE,
    UPDATE_ATTENDANCE_REQUEST,
    UPDATE_ATTENDANCE_SUCCESS
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
        case DELETE_ATTENDANCE_REQUEST:
            return { ...state, loading: true, error: null };

        case DELETE_ATTENDANCE_SUCCESS:
            return { ...state, attendance: state.attendance.filter(attendance => attendance._id !== payload), loading: false, error: null };

        case DELETE_ATTENDANCE_FAILURE:
            return { ...state, loading: false, error: payload };
        case UPDATE_ATTENDANCE_FAILURE:
            return { ...state, loading: false, error: null };

        case UPDATE_ATTENDANCE_SUCCESS:
            return { ...state, attendance: state.attendance.map((attendance) => attendance._id === payload.id ? { ...attendance, ...payload.data } : attendance), loading: false, error: null };

        case UPDATE_ATTENDANCE_REQUEST:
            return { ...state, loading: true, error: payload };
        default:
            return state;
    }
};
