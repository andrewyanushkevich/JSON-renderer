/* eslint-disable react/state-in-constructor */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { Carousel, Tag } from 'antd';

import Rating from 'blocks/Rating';

import {
  StyledItem,
  Img,
  CarouselWrapper,
  Description,
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
    const item = items.find(elem => {
      return elem._id.$oid === id;
    });
    this.setState({
      item,
    });
  }

  render() {
    const { item } = this.state;
    return item ? (
      <StyledItem>
        <Title>{item.title}</Title>
        <div>
          <CarouselWrapper>
            <Carousel autoplay>
              {item.images.map(elem => {
                return (
                  <>
                    <Img srcSet={elem} />
                  </>
                );
              })}
            </Carousel>
            <RatingWrapper>
              <Rating stars={item.rating} totalStars={5} />
            </RatingWrapper>
          </CarouselWrapper>
          <Description>
            <p>{item.description}</p>
            <TagsWrapper>
              {item.color.map(elem => {
                return <Tag color={elem}>{elem}</Tag>;
              })}
            </TagsWrapper>
            <Price>
              Price:
              {` ${item.price}`}$
            </Price>
          </Description>
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
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(ItemDetails);
