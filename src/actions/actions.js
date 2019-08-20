import * as actions from '../constants';

export const getItemsRequest = () => ({
  type: actions.GET_ITEMS_REQUEST,
});

export const getItemsResponse = items => ({
  type: actions.GET_ITEMS_RESPONSE,
  items,
});

export const getItemsResponseFail = error => ({
  type: actions.GET_ITEMS_RESPONSE_FAIL,
  error,
});

export const filterItems = filter => ({
  type: actions.FILTER_ITEMS,
  filter,
});
