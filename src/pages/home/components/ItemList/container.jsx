import { connect } from 'react-redux';

import ItemList from './component';
import {
  getItemsRequest,
  getItemsResponse,
  getItemsResponseFail,
} from '../../../../store/actions';
import getItemsFromJSON from '../../../../api/getItemsFromJSON';

const getItems = () => async dispatch => {
  try {
    dispatch(getItemsRequest());

    const response = await getItemsFromJSON();

    dispatch(getItemsResponse(response));
  } catch (error) {
    dispatch(getItemsResponseFail(error));

    throw new Error(error);
  }
};

const mapStateToProps = state => ({
  items: state.items.items,
});

const mapDispatchToProps = dispatch => ({
  handleGetItems: async () => dispatch(getItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);
