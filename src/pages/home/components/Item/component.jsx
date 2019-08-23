/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Rating from 'blocks/Rating';
import { Tag } from 'antd';

import {
  StyledItem,
  Title,
  TagsWrapper,
  RatingWrapper,
  Img,
  Price,
} from './styles';

class Item extends Component {
  handleViewFullItem = () => {
    const {
      item: {
        _id: { $oid },
      },
      history,
    } = this.props;
    history.push(`/${$oid}`);
  };

  render() {
    const { item } = this.props;
    return item ? (
      <StyledItem onClick={this.handleViewFullItem}>
        <Title>{item.title}</Title>
        <div>
          <div>
            <Img srcSet={item.images[0]} />
            <RatingWrapper>
              <Rating stars={item.rating} totalStars={5} />
            </RatingWrapper>
          </div>
          <div>
            <Price>{item.price}$</Price>
            <TagsWrapper>
              {item.color.map(elem => {
                return (
                  <Tag color={elem} key={elem}>
                    {elem}
                  </Tag>
                );
              })}
            </TagsWrapper>
          </div>
        </div>
      </StyledItem>
    ) : null;
  }
}

Item.propTypes = {
  item: PropTypes.shape({
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
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Item);
