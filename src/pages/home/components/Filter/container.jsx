import { connect } from 'react-redux';

import { filterItems } from 'store/actions';
import WrappedFilter from './component';

const mapStateToProps = (state) => ({
  shape: state.filters.shape,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (filter) => dispatch(filterItems(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedFilter);
