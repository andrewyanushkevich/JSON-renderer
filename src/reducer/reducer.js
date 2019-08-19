import * as actions from '../constants';

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.GET_ITEMS_RESPONSE:
    return Object.assign({}, state, {
      items: action.items,
    });
  case actions.GET_ITEMS_RESPONSE_FAIL:
    return action.error;
  default: return state;
  }
};

export default reducer;
