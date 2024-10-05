import { combineReducers } from "redux";
import { employeeData } from "./employeeReducer";
import { attendanceData } from "./attendanceReducer";

export default combineReducers({ employeeData, attendanceData })