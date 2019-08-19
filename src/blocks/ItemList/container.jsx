import { connect } from "react-redux";

import ItemList from "./component";
import { getItemsRequest } from "../../actions";
import getItems from '../../api/getItems';

const mapStateToProps = state => ({
  items: state.items,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleGetItems: async () => {
    dispatch(getItemsRequest());
    await getItems(dispatch);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);
