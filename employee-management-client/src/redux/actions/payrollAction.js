import { privateInstance } from "../../utils/axiosInstance";
import { FETCH_PAYROLL_FAILURE, FETCH_PAYROLL_REQUEST, FETCH_PAYROLL_SUCCESS } from "../constants";


const fetchPayroll = (id) => async (dispatch) => {
    dispatch({ type: FETCH_PAYROLL_REQUEST })
    try {
        const response = await privateInstance.get(`/payroll/${id}`);
        console.log(response.data)
        dispatch({ type: FETCH_PAYROLL_SUCCESS, payload: response.data.data });
    } catch (error) {
        dispatch({ type: FETCH_PAYROLL_FAILURE, payload: error.response.data.message });
    }
}



export { fetchPayroll }