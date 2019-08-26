import { connect } from 'react-redux';

import { selectedFilter } from 'store/actions';
import WrappedFilter from './component';

const mapStateToProps = state => {
  return {
    shape: state.filters.shape,
    selected: state.filters.selected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilterChange: selected => {
      return dispatch(selectedFilter(selected));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedFilter);
