import { DELETE_PAYROLL_FAILURE, CREATE_PAYROLL_FAILURE, CREATE_PAYROLL_REQUEST, CREATE_PAYROLL_SUCCESS, DELETE_PAYROLL_REQUEST, DELETE_PAYROLL_SUCCESS, FETCH_PAYROLL_FAILURE, FETCH_PAYROLL_REQUEST, FETCH_PAYROLL_SUCCESS, UPDATE_PAYROLL_FAILURE, UPDATE_PAYROLL_REQUEST, UPDATE_PAYROLL_SUCCESS } from "../constants";
import { privateInstance } from "../../utils/axiosInstance";
import toast from 'react-hot-toast'




const fetchPayroll = (id) => async (dispatch) => {
    dispatch({ type: FETCH_PAYROLL_REQUEST })
    try {
        const response = await privateInstance.get(`/payroll/${id}`);
        dispatch({ type: FETCH_PAYROLL_SUCCESS, payload: response.data.data });
    } catch (error) {
        dispatch({ type: FETCH_PAYROLL_FAILURE, payload: error.message });
    }
}


const createPayroll = (data) => async (dispatch) => {
    dispatch({ type: CREATE_PAYROLL_REQUEST })
    try {
        const response = await privateInstance.post('/payroll', data);
        dispatch({ type: CREATE_PAYROLL_SUCCESS, payload: response.data.data });
        toast.success('Payroll added successfully')
    } catch (error) {
        dispatch({ type: CREATE_PAYROLL_FAILURE, payload: error.message });
        toast.error(error.message)
    }
}

const deletePayroll = (id) => async (dispatch) => {
    dispatch({ type: DELETE_PAYROLL_REQUEST })
    try {
        await privateInstance.delete(`/payroll/${id}`);
        dispatch({ type: DELETE_PAYROLL_SUCCESS, payload: id });
        toast.success('Payroll deleted successfully')
    } catch (error) {
        dispatch({ type: DELETE_PAYROLL_FAILURE, payload: error.message });
        toast.error(error.message)
    }
}


const updatePayroll = (id, data) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYROLL_REQUEST });
    try {
        const response = await privateInstance.put(`/payroll/${id}`, data);
        dispatch({ type: UPDATE_PAYROLL_SUCCESS, payload: { id, data: response.data } });
    } catch (error) {
        dispatch({ type: UPDATE_PAYROLL_FAILURE, payload: error.message || "Failed to update PAYROLL" });
    }
};


export { fetchPayroll, deletePayroll, updatePayroll, createPayroll }