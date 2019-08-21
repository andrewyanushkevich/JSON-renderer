import { connect } from 'react-redux';

import {
  getItemsRequest,
  getItemsResponse,
  getItemsResponseFail,
  filterShapeCreated,
} from 'store/actions';

import createFilterShape from 'helpers/createFiltersShape';
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

const getFilteredAndSortedItems = (items, filter, sortOrder) => {
  return sortItems([...items], sortOrder);
};

const mapStateToProps = state => ({
  items: getFilteredAndSortedItems(
    state.product.items,
    state.filters.selected,
    state.sort.order,
  ),
});

const mapDispatchToProps = dispatch => ({
  handleGetItems: async () => dispatch(getItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);
