/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { Form, Slider } from 'antd';
import PropTypes from 'prop-types';

import Rating from 'blocks/Rating';
import {
  StyledFilter,
  RatingWrapper,
  SizesWrapper,
  TagsWrapper,
  ColorsWrapper,
} from './styles';

class Filter extends PureComponent {
  state = {
    price: { min: 0, max: Number.MAX_VALUE },
    ratings: [1, 2, 3, 4, 5],
    colors: [],
    sizes: [],
    tags: [],
  };

  componentDidUpdate() {
    const { handleFilterChange } = this.props;
    handleFilterChange(this.state);
  }

  handleChangePrice = e => {
    this.setState({
      price: {
        min: e[0],
        max: e[1],
      },
    });
  };

  handleChangeRating = e => {
    this.setState({
      ratings: e,
    });
  };

  handleChangeColors = e => {
    this.setState({
      colors: e,
    });
  };

  handleChangeSizes = e => {
    this.setState({
      sizes: e,
    });
  };

  handleChangeTags = e => {
    this.setState({
      tags: e,
    });
  };

  render() {
    const { shape } = this.props;
    return shape.rating ? (
      <StyledFilter>
        <Slider
          range
          min={shape.price.min}
          max={shape.price.max}
          defaultValue={[shape.price.min, shape.price.max]}
          onAfterChange={this.handleChangePrice}
          marks={{
            [shape.price.min]: shape.price.min,
            [shape.price.max]: shape.price.max,
          }}
        />
        <h3>Rating</h3>
        <RatingWrapper
          onChange={this.handleChangeRating}
          options={[
            {
              label: <Rating stars={1} totalStars={5} />,
              value: 1,
            },
            {
              label: <Rating stars={2} totalStars={5} />,
              value: 2,
            },
            {
              label: <Rating stars={3} totalStars={5} />,
              value: 3,
            },
            {
              label: <Rating stars={4} totalStars={5} />,
              value: 4,
            },
            {
              label: <Rating stars={5} totalStars={5} />,
              value: 5,
            },
          ]}
        />
        <h3>Sizes</h3>
        <SizesWrapper
          onChange={this.handleChangeSizes}
          options={shape.sizes.map(elem => {
            return {
              label: elem,
              value: elem,
            };
          })}
        />
        <h3>Tags</h3>
        <TagsWrapper
          onChange={this.handleChangeTags}
          options={shape.tags.map(elem => {
            return {
              label: elem,
              value: elem,
            };
          })}
        />
        <h3>Colors</h3>
        <ColorsWrapper
          onChange={this.handleChangeColors}
          options={shape.colors.map(elem => {
            return {
              label: elem,
              value: elem,
            };
          })}
        />
      </StyledFilter>
    ) : null;
  }
}

Filter.propTypes = {
  shape: PropTypes.shape({
    _id: PropTypes.shape({
      $oid: PropTypes.string,
    }),
    title: PropTypes.string,
    price: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    size: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    color: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const WrappedFilter = Form.create({ name: 'filter' })(Filter);

export default WrappedFilter;
