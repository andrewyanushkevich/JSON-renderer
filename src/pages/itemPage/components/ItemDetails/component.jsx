/* eslint-disable react/state-in-constructor */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Carousel, Tag } from 'antd';
import Rating from 'blocks/Rating';

import {
  StyledItem,
  Img,
  Title,
  TagsWrapper,
  RatingWrapper,
  Price,
} from './styles';

class ItemDetails extends Component {
  state = {
    item: undefined,
  };

  componentDidMount() {
    const {
      items,
      match: {
        params: { id },
      },
    } = this.props;
    const item = items.find((elem) => elem._id.$oid === id);
    this.setState({
      item,
    });
  }

  render() {
    const { item } = this.state;
    return item ? (
      <StyledItem>
        <Title>{item.title}</Title>
        <Carousel autoplay>
          {item.images.map((elem) => (
            <>
              <Img srcSet={elem} />
            </>
          ))}
        </Carousel>
        <TagsWrapper>
          {item.color.map((elem) => <Tag color={elem}>{elem}</Tag>)}
        </TagsWrapper>
        <div>
          <RatingWrapper>
            <Rating stars={item.rating} totalStars={5} />
          </RatingWrapper>
          <p>{item.description}</p>
        </div>
        <div>
          <Price>
            Price:
            {item.price}
            $
          </Price>
        </div>
      </StyledItem>
    ) : null;
  }
}

ItemDetails.propTypes = {
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
};

export default withRouter(ItemDetails);
