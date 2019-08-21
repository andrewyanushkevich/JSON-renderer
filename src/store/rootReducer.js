import { combineReducers } from 'redux';

import product from './reducer/items';
import filters from './reducer/filter';
import sort from './reducer/sort';

const rootReducer = combineReducers({
  product,
  filters,
  sort,
});

export default rootReducer;
