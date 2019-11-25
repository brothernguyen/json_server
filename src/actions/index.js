import apis from "../apis";
import { keyword } from "../constant";

export const fetchEmployees = () => async dispatch => {
  const response = await apis.get();
  dispatch({ type: keyword.FETCH_EMPLOYEES, payload: response.data });
};
