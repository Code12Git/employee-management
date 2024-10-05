import { FETCH_ATTENDANCE_FAILURE, FETCH_ATTENDANCE_REQUEST, FETCH_ATTENDANCE_SUCCESS } from "../constants";
import { privateInstance } from "../../utils/axiosInstance";





const fetchAttendance = () => async (dispatch) => {
    dispatch({ type: FETCH_ATTENDANCE_REQUEST })
    try {
        const response = await privateInstance.get('/attendance');
        console.log("Attendance:", response)
        dispatch({ type: FETCH_ATTENDANCE_SUCCESS, payload: response.data.data });
    } catch (error) {
        dispatch({ type: FETCH_ATTENDANCE_FAILURE, payload: error.message });
    }
}




export { fetchAttendance }