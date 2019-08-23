/* eslint-disable no-underscore-dangle */
import React, { PureComponent } from 'react';
import { List, Skeleton } from 'antd';
import PropTypes from 'prop-types';

import Item from 'pages/home/components/Item';

import { StyledList } from './styles';

class ItemList extends PureComponent {
  componentDidMount() {
    const { handleGetItems } = this.props;
    handleGetItems();
  }

  handlePageChange = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  render() {
    const { items } = this.props;
    return (
      <StyledList>
        <List
          grid={{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 6,
            justify: 'center',
          }}
          dataSource={items}
          split={false}
          renderItem={item => {
            return (
              <List.Item key={item._id.$oid}>
                <Skeleton loading={false} active avatar>
                  <Item item={item} />
                </Skeleton>
              </List.Item>
            );
          }}
          pagination={{
            defaultCurrent: 1,
            position: 'bottom',
            total: items.length,
            hideOnSinglePage: true,
            pageSize: 9,
            onChange: this.handlePageChange,
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
