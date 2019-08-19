import { getItemsResponse, getItemsResponseFail } from "../actions";
import { API_URL } from "../constants";

const getItems = dispatch => {
  try {
    return fetch(API_URL, {
      method: "GET",
      headers: { "Accept-Encoding": "gzip" }
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        dispatch(getItemsResponse(jsonResponse));
      });
  } catch (err) {
    dispatch(getItemsResponseFail(err));
  }
};

export default getItems;
