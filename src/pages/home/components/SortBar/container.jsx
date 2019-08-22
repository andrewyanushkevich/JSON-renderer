import { connect } from 'react-redux';

import { sortOrderSelected } from 'store/actions';

import SortBar from './component';

const mapDispatchToProps = dispatch => {
  return {
    handleSetSortOrder: order => {
      return dispatch(sortOrderSelected(order));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(SortBar);
