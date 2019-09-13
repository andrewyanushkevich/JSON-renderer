import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { sortOrderSelected } from 'store/actions';
import filterItems from 'helpers/filterItems';
import sortItems from 'helpers/sortItems';

import SortBar from './component';

const getFilteredAndSortedItems = (items, filter, sortOrder) =>
  sortItems(filterItems([...items], filter), sortOrder);

const getItemsSelector = state => state.product.items;

const getFilterSelector = state => state.filters.selected;

const getSortOrderSelector = state => state.sort.order;

const filteredItemsSelector = createSelector(
  getItemsSelector,
  getFilterSelector,
  getSortOrderSelector,
  (items, filter, sort) =>
    getFilteredAndSortedItems(items, filter, sort).length,
);

const getItemsLength = createSelector(
  getItemsSelector,
  items => items.length,
);

const mapStateToProps = state => ({
  filteredItems: filteredItemsSelector(state),
  items: getItemsLength(state),
});

const mapDispatchToProps = dispatch => ({
  handleSetSortOrder: order => dispatch(sortOrderSelected(order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortBar);
