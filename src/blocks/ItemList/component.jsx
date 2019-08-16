import React, { Component } from 'react';

import Item from '../Item';
import getItems from '../../api/getItems';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const res = await getItems();
    this.setState({
      items: res
    });
  }

  render() {
    const { items } = this.state;
    return <div><Item item={items[0]}></Item></div>;
  }
}

export default ItemList;
