import { combineReducers } from 'redux';

import items from './reducer/items';

const rootReducer = combineReducers({
  items,
});

export default rootReducer;
