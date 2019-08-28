/* eslint-disable react/state-in-constructor */
/* eslint-disable no-underscore-dangle */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

import Item from 'pages/home/components/Item';

import { StyledList, StyledPagination } from './styles';

class ItemList extends PureComponent {
  state = {
    currentPage: 1,
    itemsPerPAge: 9,
  };

  componentDidMount() {
    const { handleGetItems } = this.props;
    handleGetItems();
  }

  handlePageChange = e => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
    this.setState({
      currentPage: e,
    });
  };

  render() {
    const { items } = this.props;
    const { currentPage, itemsPerPAge } = this.state;
    return (
      <StyledList>
        <div>
          {items
            .slice(itemsPerPAge * (currentPage - 1), itemsPerPAge * currentPage)
            .map(elem => {
              return <Item item={elem} key={elem._id.$oid} />;
            })}
        </div>
        <StyledPagination
          total={items.length}
          onChange={this.handlePageChange}
          pageSize={itemsPerPAge}
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
