import { connect } from 'react-redux';

import { sortOrderSelected } from 'store/actions';

import SortBar from './component';

const mapDispatchToProps = (dispatch) => ({
  handleSetSortOrder: (order) => dispatch(sortOrderSelected(order)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SortBar);
