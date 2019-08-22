import * as actions from 'constants/actions';

import SORTS from 'constants/sorts';

const initialState = {
  order: SORTS[0],
};

const filterReducer = (state = initialState, action) => {
  if (action.type === actions.SORT_ORDER_SELECTED) {
    return { ...state, order: action.order };
  }
  return state;
};

export default filterReducer;
