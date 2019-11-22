import apis from "../apis";
import { FETCH_EMPLOYEES } from "../constant";

export const fetchEmployees = async dispatch => {
  const response = await apis.get();
  console.log("==>res", response.data);
  dispatch({ type: FETCH_EMPLOYEES, payload: response.data });
};
