import { privateInstance } from "../../utils/axiosInstance";
import { CREATE_ATTENDANCE_FAILURE, CREATE_ATTENDANCE_REQUEST, CREATE_ATTENDANCE_SUCCESS, FETCH_ATTENDANCE_FAILURE, FETCH_ATTENDANCE_REQUEST, FETCH_ATTENDANCE_SUCCESS } from "../constants";
import toast from 'react-hot-toast'

const fetchAttendance = (id) => async (dispatch) => {
    dispatch({ type: FETCH_ATTENDANCE_REQUEST })
    try {
        const response = await privateInstance.get(`/attendance/${id}`);
        dispatch({ type: FETCH_ATTENDANCE_SUCCESS, payload: response.data.data });
    } catch (error) {
        dispatch({ type: FETCH_ATTENDANCE_FAILURE, payload: error.response.data.message });
    }
}

const createAttendance = (id, status) => async (dispatch) => {
    dispatch({ type: CREATE_ATTENDANCE_REQUEST });
    try {
        const response = await privateInstance.post(`/attendance/${id}`, { status });
        dispatch({ type: CREATE_ATTENDANCE_SUCCESS, payload: response.data });
        toast.success("Attendance marked successfully")
    } catch (error) {
        console.error(error);
        dispatch({ type: CREATE_ATTENDANCE_FAILURE, payload: error.response?.data?.message || "Something went wrong" });
        toast.error(error.response.data.message)
    }
};


export { fetchAttendance, createAttendance }