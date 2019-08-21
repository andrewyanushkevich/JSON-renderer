import * as actions from 'constants/actions';

const initialState = {
  shape: {},
  selected: {},
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILTER_SHAPE_CREATED:
      return { ...state, shape: action.shape };
    case actions.FILTER_ITEMS:
      return { ...state, selected: action.selected };
    default:
      return state;
  }
};

export default filterReducer;
