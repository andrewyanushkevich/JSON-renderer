/* eslint-disable react/state-in-constructor */
/* eslint-disable no-underscore-dangle */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Item from 'pages/home/components/Item';

import { StyledList, StyledPagination } from './styles';

class ItemList extends PureComponent {
  state = {
    currentPage: 1,
    itemsPerPage: 9,
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
    const { currentPage, itemsPerPage } = this.state;
    return (
      <StyledList>
        <div>
          {items
            .slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage)
            .map(elem => (
              <Item item={elem} key={elem._id.$oid} />
            ))}
        </div>
        <StyledPagination
          total={items.length}
          onChange={this.handlePageChange}
          pageSize={itemsPerPage}
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
