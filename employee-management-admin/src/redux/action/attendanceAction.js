import { DELETE_ATTENDANCE_FAILURE, UPDATE_ATTENDANCE_FAILURE, UPDATE_ATTENDANCE_REQUEST, UPDATE_ATTENDANCE_SUCCESS, DELETE_ATTENDANCE_REQUEST, DELETE_ATTENDANCE_SUCCESS, FETCH_ATTENDANCE_FAILURE, FETCH_ATTENDANCE_REQUEST, FETCH_ATTENDANCE_SUCCESS } from "../constants";
import { privateInstance } from "../../utils/axiosInstance";
import toast from 'react-hot-toast'




const fetchAttendance = () => async (dispatch) => {
    dispatch({ type: FETCH_ATTENDANCE_REQUEST })
    try {
        const response = await privateInstance.get('/attendance');
        dispatch({ type: FETCH_ATTENDANCE_SUCCESS, payload: response.data.data });
    } catch (error) {
        dispatch({ type: FETCH_ATTENDANCE_FAILURE, payload: error.message });
    }
}

const deleteAttendance = (id) => async (dispatch) => {
    dispatch({ type: DELETE_ATTENDANCE_REQUEST })
    try {
        await privateInstance.delete(`/attendance/${id}`);
        dispatch({ type: DELETE_ATTENDANCE_SUCCESS, payload: id });
        toast.success('Employee deleted successfully')
    } catch (error) {
        dispatch({ type: DELETE_ATTENDANCE_FAILURE, payload: error.message });
        toast.error(error.message)
    }
}


const updateAttendance = (id, data) => async (dispatch) => {
    dispatch({ type: UPDATE_ATTENDANCE_REQUEST });

    try {
        const response = await privateInstance.put(`/attendance/${id}`, data);
        dispatch({ type: UPDATE_ATTENDANCE_SUCCESS, payload: { id, data: response.data } });
    } catch (error) {
        dispatch({ type: UPDATE_ATTENDANCE_FAILURE, payload: error.message || "Failed to update attendance" });
    }
};


export { fetchAttendance, deleteAttendance, updateAttendance }