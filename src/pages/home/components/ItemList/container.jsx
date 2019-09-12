import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  getItemsRequest,
  getItemsResponse,
  getItemsResponseFail,
  filterShapeCreated,
} from 'store/actions';

import createFilterShape from 'helpers/createFiltersShape';
import filterItems from 'helpers/filterItems';
import sortItems from 'helpers/sortItems';
import getItemsFromJSON from 'api/getItemsFromJSON';
import ItemList from './component';

export const getItems = () => async dispatch => {
  try {
    dispatch(getItemsRequest());

    const response = await getItemsFromJSON();
    const filterShape = createFilterShape(response);
    dispatch(filterShapeCreated(filterShape));
    dispatch(getItemsResponse(response));
  } catch (error) {
    dispatch(getItemsResponseFail(error));

    throw new Error(error);
  }
};

const getFilteredAndSortedItems = (items, filter, sortOrder) =>
  sortItems(filterItems([...items], filter), sortOrder);

const getItemsSelector = state => state.product.items;

const getFilterSelector = state => state.filters.selected;

const getSortOrderSelector = state => state.sort.order;

const filteredItemsSelector = createSelector(
  getItemsSelector,
  getFilterSelector,
  getSortOrderSelector,
  (items, filter, sort) => getFilteredAndSortedItems(items, filter, sort),
);

const mapStateToProps = state => ({
  items: filteredItemsSelector(state),
  loading: state.product.loading,
});

const mapDispatchToProps = dispatch => ({
  handleGetItems: () => dispatch(getItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);
