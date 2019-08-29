import { connect } from 'react-redux';

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

const getItems = () => async dispatch => {
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

const mapStateToProps = state => ({
  items: getFilteredAndSortedItems(
    state.product.items,
    state.filters.selected,
    state.sort.order,
  ),
  loading: state.product.loading,
});

const mapDispatchToProps = dispatch => ({
  handleGetItems: () => dispatch(getItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);
