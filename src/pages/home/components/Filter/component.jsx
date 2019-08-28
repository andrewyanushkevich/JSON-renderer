/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
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
  state = {};

  componentDidMount() {
    const {
      selected: { maxprice },
      location,
    } = this.props;
    const url = queryString.parse(location.search, {
      arrayFormat: 'comma',
      parseNumbers: true,
    });
    const ratings = url.ratings || [];
    let numberRatings = [ratings];
    if (typeof ratings === 'object') {
      numberRatings = ratings.map(elem => {
        return parseInt(elem, 10);
      });
    }
    this.setState({
      minprice: url.minprice || 0,
      maxprice: url.maxprice || maxprice,
      ratings: numberRatings,
      tags: url.tags || [],
      colors: url.colors || [],
      sizes: url.sizes || [],
    });
  }

  componentDidUpdate() {
    const { handleFilterChange } = this.props;
    const filter = this.state;
    handleFilterChange(filter);
  }

  handleChangeFilter = (e, id) => {
    const { history, location } = this.props;
    const url = queryString.parse(location.search, { arrayFormat: 'comma' });
    switch (id) {
      case 'price':
        this.setState({
          price: {
            min: e[0],
            max: e[1],
          },
        });
        const [minprice, maxprice] = e;
        url.minprice = minprice;
        url.maxprice = maxprice;
        break;
      case 'ratings':
        this.setState({
          ratings: e,
        });
        url.ratings = e;
        break;
      case 'colors':
        this.setState({
          colors: e,
        });
        url.colors = e;
        break;
      case 'sizes':
        this.setState({
          sizes: e,
        });
        url.sizes = e;
        break;
      case 'tags':
        this.setState({
          tags: e,
        });
        url.tags = e;
        break;
    }
    const newUrl = queryString.stringify(url, { arrayFormat: 'comma' });
    history.push(`?${newUrl}`);
  };

  render() {
    const { shape, display } = this.props;
    const filter = this.state;
    return shape.rating ? (
      <StyledFilter display={display}>
        <Slider
          range
          min={shape.price.min}
          max={shape.price.max}
          defaultValue={[filter.minprice, filter.maxprice]}
          onAfterChange={e => {
            return this.handleChangeFilter(e, 'price');
          }}
          marks={{
            [shape.price.min]: shape.price.min,
            [shape.price.max]: shape.price.max,
          }}
        />
        <h3>Rating</h3>
        <RatingWrapper
          onChange={e => {
            return this.handleChangeFilter(e, 'ratings');
          }}
          defaultValue={filter.ratings}
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
          onChange={e => {
            return this.handleChangeFilter(e, 'sizes');
          }}
          defaultValue={filter.sizes}
          options={shape.sizes.map(elem => {
            return {
              label: elem,
              value: elem,
            };
          })}
        />
        <h3>Tags</h3>
        <TagsWrapper
          onChange={e => {
            return this.handleChangeFilter(e, 'tags');
          }}
          defaultValue={filter.tags}
          options={shape.tags.map(elem => {
            return {
              label: elem,
              value: elem,
            };
          })}
        />
        <h3>Colors</h3>
        <ColorsWrapper
          onChange={e => {
            return this.handleChangeFilter(e, 'colors');
          }}
          defaultValue={filter.colors}
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
