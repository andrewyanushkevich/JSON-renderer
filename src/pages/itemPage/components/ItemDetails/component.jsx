/* eslint-disable react/state-in-constructor */
/* eslint-disable no-underscore-dangle */
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import { Helmet } from 'react-helmet';

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
  TagItem,
  StyledCarousel,
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
      history,
    } = this.props;
    if (items.length === 0) {
      history.push('/');
    }
    const item = items.find(elem => elem._id.$oid === id);
    this.setState({
      item,
    });
  }

  render() {
    const { item } = this.state;
    return item ? (
      <StyledItem>
        <Helmet>
          <title>{item.title}</title>
          <meta
            name="description"
            content={item.description.substr(0, item.description.indexOf('.'))}
          />
        </Helmet>
        <Title>{item.title}</Title>
        <div>
          <CarouselWrapper>
            <StyledCarousel autoplay>
              {item.images.map(elem => (
                <Fragment key={elem}>
                  <Img srcSet={elem} />
                </Fragment>
              ))}
            </StyledCarousel>
            <RatingWrapper>
              <Rating stars={item.rating} totalStars={5} />
            </RatingWrapper>
          </CarouselWrapper>
          <Description>
            <TagsWrapper>
              {item.size.map(elem => (
                <Tag key={elem}>{elem}</Tag>
              ))}
            </TagsWrapper>
            <p>{item.description}</p>
            <TagsWrapper>
              {item.color.map(elem => (
                <TagItem color={elem} key={elem} style={{ color: 'black' }}>
                  {elem}
                </TagItem>
              ))}
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
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(ItemDetails);
