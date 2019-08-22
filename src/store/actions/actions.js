import * as actions from 'constants/actions';

export const getItemsRequest = () => {
  return {
    type: actions.GET_ITEMS_REQUEST,
  };
};

export const getItemsResponse = items => {
  return {
    type: actions.GET_ITEMS_RESPONSE,
    items,
  };
};

export const getItemsResponseFail = error => {
  return {
    type: actions.GET_ITEMS_RESPONSE_FAIL,
    error,
  };
};

export const filterShapeCreated = shape => {
  return {
    type: actions.FILTER_SHAPE_CREATED,
    shape,
  };
};

export const selectedFilter = selected => {
  return {
    type: actions.SELECTED_FILTER,
    selected,
  };
};

export const sortOrderSelected = order => {
  return {
    type: actions.SORT_ORDER_SELECTED,
    order,
  };
};
