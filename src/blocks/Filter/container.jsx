import { connect } from 'react-redux';

import { filterItems } from '../../actions';
import WrappedFilter from './component';

const mapDispatchToProps = dispatch => ({
  filter: filter => dispatch(filterItems(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(WrappedFilter);
