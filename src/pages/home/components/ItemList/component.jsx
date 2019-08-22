import React, { PureComponent } from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

import Item from 'pages/home/components/Item';

import { StyledList } from './styles';

class ItemList extends PureComponent {
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
          renderItem={(item) => (
            <List.Item>
              <Item item={item} />
            </List.Item>
          )}
          pagination={{
            defaultCurrent: 1,
            position: 'both',
            total: items.length,
            hideOnSinglePage: true,
            pageSize: 5,
          }}
        />
      </StyledList>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.shape({
        $oid: PropTypes.string,
      }),
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      size: PropTypes.arrayOf(PropTypes.string).isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      color: PropTypes.arrayOf(PropTypes.string).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  ).isRequired,
  handleGetItems: PropTypes.func.isRequired,
};

export default ItemList;
