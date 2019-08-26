import * as actions from 'constants/actions';

const initialState = {
  shape: {},
  selected: {
    price: { min: 0, max: Number.MAX_VALUE },
    ratings: [1, 2, 3, 4, 5],
    colors: [],
    sizes: [],
    tags: [],
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILTER_SHAPE_CREATED:
      return { ...state, shape: action.shape };
    case actions.SELECTED_FILTER:
      return { ...state, selected: action.selected };
    default:
      return state;
  }
};

export default filterReducer;
