/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Carousel, Tag } from 'antd';
import Rating from 'material-ui-rating';

import {
  StyledItem,
  Img,
  Title,
  TagsWrapper,
  RatingWrapper,
  Price,
} from './styles';

class ItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: undefined,
    };
  }

  componentDidMount() {
    const { items, match } = this.props;
    const { id } = match.params;
    const item = items.find(elem => elem._id.$oid === id);
    this.setState({
      item,
    });
  }

  render() {
    const { item } = this.state;
    return item ? (
      <StyledItem>
        <Title>{item.title}</Title>
        <Carousel autoplay speed={0.2}>
          {item.images.map(elem => {
            return (
              <div>
                <Img srcSet={elem} />
              </div>
            );
          })}
        </Carousel>
        <TagsWrapper>
          {item.color.map(elem => {
            return <Tag color={elem}>{elem}</Tag>;
          })}
        </TagsWrapper>
        <div>
          <RatingWrapper>
            <Rating value={item.rating} readOnly />
          </RatingWrapper>
          <p>{item.description}</p>
        </div>
        <div>
          <Price>Price: {item.price}$</Price>
        </div>
      </StyledItem>
    ) : null;
  }
}

ItemView.propTypes = {
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

export default withRouter(ItemView);
