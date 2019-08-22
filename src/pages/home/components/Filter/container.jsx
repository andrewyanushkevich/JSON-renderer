import { connect } from 'react-redux';

import { filterItems } from 'store/actions';
import WrappedFilter from './component';

const mapStateToProps = state => {
  return {
    shape: state.filters.shape,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filter: filter => {
      return dispatch(filterItems(filter));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedFilter);
