import React, { Component } from "react";
import { List } from "antd";

import Item from "../Item";

import { StyledList } from "./styles";

class ItemList extends Component {
  componentDidMount() {
    const { handleGetItems } = this.props;
    handleGetItems();
  }

  render() {
    const { items } = this.props;
    return (
      <StyledList>
        <List
          dataSource={items}
          split={false}
          renderItem={item => (
            <List.Item>
              <Item item={item} />
            </List.Item>
          )}
          pagination={{
            defaultCurrent: 1,
            position: "both",
            total: items.length,
            hideOnSinglePage: true,
            pageSize: 5,
          }}
        />
      </StyledList>
    );
  }
}

export default ItemList;
