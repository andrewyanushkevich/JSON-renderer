import { connect } from 'react-redux';

import { sortOrderSelected } from 'store/actions';
import filterItems from 'helpers/filterItems';
import sortItems from 'helpers/sortItems';

import SortBar from './component';

const getFilteredAndSortedItems = (items, filter, sortOrder) => {
  return sortItems(filterItems([...items], filter), sortOrder);
};

const mapStateToProps = state => {
  return {
    filteredItems: getFilteredAndSortedItems(
      state.product.items,
      state.filters.selected,
      state.sort.order,
    ).length,
    items: state.product.items.length,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSetSortOrder: order => {
      return dispatch(sortOrderSelected(order));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortBar);
