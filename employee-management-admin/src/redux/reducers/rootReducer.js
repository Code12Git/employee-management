import { combineReducers } from "redux";
import { employeeData } from "./employeeReducer";
import { attendanceData } from "./attendanceReducer";
import { payrollData } from "./payrollReducer";

export default combineReducers({ employeeData, attendanceData, payrollData })