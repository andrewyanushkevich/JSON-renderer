import * as actions from 'constants/actions';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ITEMS_REQUEST:
      return { ...state, loading: true };
    case actions.GET_ITEMS_RESPONSE:
      return { ...state, items: action.items, loading: false };
    case actions.GET_ITEMS_RESPONSE_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default items;
