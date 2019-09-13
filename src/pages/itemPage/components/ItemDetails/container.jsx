import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import ItemDetails from './component';

const getItemsSelector = state => state.product.items;

const itemsSelector = createSelector(
  getItemsSelector,
  items => items,
);

const mapStateToProps = state => ({
  items: itemsSelector(state),
});

export default connect(mapStateToProps)(ItemDetails);
