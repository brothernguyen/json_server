import { combineReducers } from "redux";
import fetchAllEmployees from "./fetchAllEmployeesReducer";

export default combineReducers({
  fetchAllEmployees: fetchAllEmployees
});
