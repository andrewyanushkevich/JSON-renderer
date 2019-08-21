import * as actions from 'constants/actions';

const initialState = {
  order: 'price_min_max',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SORT_ORDER_SELECTED:
      return { ...state, order: action.order };
    default:
      return state;
  }
};

export default filterReducer;
