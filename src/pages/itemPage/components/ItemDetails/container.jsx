import { connect } from 'react-redux';

import ItemDetails from './component';

const mapStateToProps = state => {
  return {
    items: state.product.items,
  };
};

export default connect(mapStateToProps)(ItemDetails);
