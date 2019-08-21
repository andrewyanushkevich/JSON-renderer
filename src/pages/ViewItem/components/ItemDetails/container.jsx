import { connect } from 'react-redux';

import ItemView from './component';

const mapStateToProps = state => ({
  items: state.items.items,
});
export default connect(mapStateToProps)(ItemView);
