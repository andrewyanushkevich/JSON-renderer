import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectedFilter } from 'store/actions';
import WrappedFilter from './component';

const getFilterSelector = state => state.filters.selected;

const getFilterShapeSelector = state => state.filters.shape;

const filterSelector = createSelector(
  getFilterSelector,
  selected => selected,
);

const shapeFilterSelector = createSelector(
  getFilterShapeSelector,
  shape => shape,
);

const mapStateToProps = state => ({
  shape: shapeFilterSelector(state),
  selected: filterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  handleSetFilter: selected => dispatch(selectedFilter(selected)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedFilter);
