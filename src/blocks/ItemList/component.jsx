import React, { Component } from "react";
import { List } from "antd";

import Item from "../Item";
import filterItems from "../../api/filterItems";

import { StyledList } from "./styles";

class ItemList extends Component {
  componentDidMount() {
    const { handleGetItems } = this.props;
    handleGetItems();
  }

  render() {
    const { filter, items } = this.props;
    const filteredItems = filterItems(items, filter);
    return (
      <StyledList>
        <List
          dataSource={filteredItems}
          split={false}
          renderItem={item => (
            <List.Item>
              <Item item={item} />
            </List.Item>
          )}
          pagination={{
            defaultCurrent: 1,
            position: "both",
            total: filteredItems.length,
            hideOnSinglePage: true,
            pageSize: 5
          }}
        />
      </StyledList>
    );
  }
}

export default ItemList;
