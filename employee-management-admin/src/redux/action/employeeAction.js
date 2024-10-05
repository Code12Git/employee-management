import { CREATE_EMPLOYEE_FAILURE, CREATE_EMPLOYEE_REQUEST, CREATE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILURE, UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS } from "../constants";
import { privateInstance } from "../../utils/axiosInstance";
import toast from 'react-hot-toast'


const createEmployee = (data) => async (dispatch) => {
    dispatch({ type: CREATE_EMPLOYEE_REQUEST })
    try {
        const response = await privateInstance.post('/employee', data);
        dispatch({ type: CREATE_EMPLOYEE_SUCCESS, payload: response.data.data });
        toast.success('Employee added successfully')
    } catch (error) {
        dispatch({ type: CREATE_EMPLOYEE_FAILURE, payload: error.message });
        toast.error(error.message)
    }
}


const fetchEmployee = () => async (dispatch) => {
    dispatch({ type: FETCH_EMPLOYEE_REQUEST })
    try {
        const response = await privateInstance.get('/employee');
        dispatch({ type: FETCH_EMPLOYEE_SUCCESS, payload: response.data.data });
    } catch (error) {
        dispatch({ type: FETCH_EMPLOYEE_FAILURE, payload: error.message });
    }
}


const deleteEmployee = (id) => async (dispatch) => {
    dispatch({ type: DELETE_EMPLOYEE_REQUEST })
    try {
        await privateInstance.delete(`/employee/${id}`);
        dispatch({ type: DELETE_EMPLOYEE_SUCCESS, payload: id });
        toast.success('Employee deleted successfully')
    } catch (error) {
        dispatch({ type: DELETE_EMPLOYEE_FAILURE, payload: error.message });
        toast.error(error.message)
    }
}

const updateEmployee = (id, data) => async (dispatch) => {
    dispatch({ type: UPDATE_EMPLOYEE_REQUEST });
    try {
        const response = await privateInstance.put(`/employee/${id}`, data);
        dispatch({ type: UPDATE_EMPLOYEE_SUCCESS, payload: { id, data: response.data } });
    } catch (error) {
        dispatch({ type: UPDATE_EMPLOYEE_FAILURE, payload: error.message });
    }
};

const filterEmployee = () => async (dispatch) => {
    try {
        const response = await privateInstance.get(`/employee`)
    } catch (error) {
        console.log(error)
    }
}


export { fetchEmployee, deleteEmployee, updateEmployee, createEmployee, filterEmployee }