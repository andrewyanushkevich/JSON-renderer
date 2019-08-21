import * as actions from 'constants';

const initialState = {
  filter: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILTER_ITEMS:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
