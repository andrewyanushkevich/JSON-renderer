/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { Form, Slider } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Rating from 'blocks/Rating';

import {
  StyledFilter,
  RatingWrapper,
  SizesWrapper,
  TagsWrapper,
  ColorsWrapper,
} from './styles';

class Filter extends PureComponent {
  componentDidMount() {
    const {
      selected: { price, ratings, tags, colors, sizes },
    } = this.props;
    this.setState({
      price,
      ratings,
      tags,
      colors,
      sizes,
    });
  }

  componentDidUpdate() {
    const { handleFilterChange } = this.props;
    const filter = this.state;
    handleFilterChange(filter);
  }

  handleChangePrice = e => {
    const { history, location } = this.props;
    const url = queryString.parse(location.search, { arrayFormat: 'comma' });
    this.setState({
      price: {
        min: e[0],
        max: e[1],
      },
    });
    // eslint-disable-next-line prefer-destructuring
    url.minprice = e[0];
    // eslint-disable-next-line prefer-destructuring
    url.maxprice = e[1];
    const newUrl = queryString.stringify(url, { arrayFormat: 'comma' });
    history.push(`?${newUrl}`);
  };

  handleChangeRating = e => {
    const { history, location } = this.props;
    const url = queryString.parse(location.search, { arrayFormat: 'comma' });
    this.setState({
      ratings: e,
    });
    url.ratings = e;
    const newUrl = queryString.stringify(url, { arrayFormat: 'comma' });
    history.push(`?${newUrl}`);
  };

  handleChangeColors = e => {
    const { history, location } = this.props;
    const url = queryString.parse(location.search, { arrayFormat: 'comma' });
    this.setState({
      colors: e,
    });
    url.colors = e;
    const newUrl = queryString.stringify(url, { arrayFormat: 'comma' });
    history.push(`?${newUrl}`);
  };

  handleChangeSizes = e => {
    const { history, location } = this.props;
    const url = queryString.parse(location.search, { arrayFormat: 'comma' });
    this.setState({
      sizes: e,
    });
    url.sizes = e;
    const newUrl = queryString.stringify(url, { arrayFormat: 'comma' });
    history.push(`?${newUrl}`);
  };

  handleChangeTags = e => {
    const { history, location } = this.props;
    const url = queryString.parse(location.search, { arrayFormat: 'comma' });
    this.setState({
      tags: e,
    });
    url.tags = e;
    const newUrl = queryString.stringify(url, { arrayFormat: 'comma' });
    history.push(`?${newUrl}`);
  };

  render() {
    const { shape, display, location } = this.props;
    const url = queryString.parse(location.search, {
      arrayFormat: 'comma',
      parseNumbers: true,
    });
    const minprice = url.minprice || 0;
    const maxprice = url.maxprice || 100;
    const ratings = url.ratings || [];
    let numberRatings = ratings;
    if (typeof ratings === 'object') {
      numberRatings = ratings.map(elem => {
        return parseInt(elem, 10);
      });
    }

    return shape.rating ? (
      <StyledFilter display={display}>
        <Slider
          range
          min={shape.price.min}
          max={shape.price.max}
          defaultValue={[minprice, maxprice]}
          onAfterChange={this.handleChangePrice}
          marks={{
            [shape.price.min]: shape.price.min,
            [shape.price.max]: shape.price.max,
          }}
        />
        <h3>Rating</h3>
        <RatingWrapper
          onChange={this.handleChangeRating}
          defaultValue={numberRatings}
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
          defaultValue={url.sizes}
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
          defaultValue={url.tags}
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
          defaultValue={url.colors}
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

export default withRouter(WrappedFilter);
