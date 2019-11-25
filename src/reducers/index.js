import { combineReducers } from "redux";
import fetchAllEmployeesReducer from "./fetchAllEmployeesReducer";

export default combineReducers({
  fetchAllEmployeesReducer: fetchAllEmployeesReducer
});
