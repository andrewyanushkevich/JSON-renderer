import * as actions from 'constants/actions';

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

export const filterShapeCreated = shape => ({
  type: actions.FILTER_SHAPE_CREATED,
  shape,
});

export const filterItems = selected => ({
  type: actions.FILTER_ITEMS,
  selected,
});

export const sortOrderSelected = order => ({
  type: actions.SORT_ORDER_SELECTED,
  order,
});
