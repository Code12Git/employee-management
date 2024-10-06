import { combineReducers } from "redux";
import { attendanceData } from "./attendanceReducer";
import { userData } from "./userReducer";
import { payrollData } from "./payrollReducer";

export default combineReducers({ attendanceData, userData, payrollData })