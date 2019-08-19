import * as actions from "../constants";

const initialState = {
  items: [],
  filter: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ITEMS_RESPONSE:
      return { ...state, items: action.items };
    case actions.GET_ITEMS_RESPONSE_FAIL:
      return action.error;
    case actions.FILTER_ITEMS:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default reducer;
