import { privateInstance } from "../../utils/axiosInstance";
import { CREATE_ATTENDANCE_FAILURE, CREATE_ATTENDANCE_REQUEST, CREATE_ATTENDANCE_SUCCESS, FETCH_ATTENDANCE_FAILURE, FETCH_ATTENDANCE_REQUEST, FETCH_ATTENDANCE_SUCCESS } from "../constants";


const fetchAttendance = (id) => async (dispatch) => {
    dispatch({ type: FETCH_ATTENDANCE_REQUEST })
    try {
        const response = await privateInstance.get(`/attendance/${id}`);
        console.log("Attendance:", response)
        dispatch({ type: FETCH_ATTENDANCE_SUCCESS, payload: response.data.data });
    } catch (error) {
        dispatch({ type: FETCH_ATTENDANCE_FAILURE, payload: error.message });
    }
}

const createAttendance = (id) => async (dispatch) => {
    dispatch({ type: CREATE_ATTENDANCE_REQUEST })
    try {
        const response = await privateInstance.create(`/attendance/${id}`)
        dispatch({ type: CREATE_ATTENDANCE_SUCCESS, payload: response.data.data })
    } catch (error) {
        dispatch({ type: CREATE_ATTENDANCE_FAILURE, payload: error.message })
    }
}

export { fetchAttendance, createAttendance }