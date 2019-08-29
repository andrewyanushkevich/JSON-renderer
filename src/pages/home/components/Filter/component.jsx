/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
/* eslint-disable react/state-in-constructor */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import * as filters from 'constants/filters';
import PriceFilter from './Filters/PriceFilter';
import RatingFilter from './Filters/RatingFilter';
import SizesFilter from './Filters/SizesFilter';
import TagsFilter from './Filters/TagsFilter';
import ColorsFilter from './Filters/ColorsFilter';

import { StyledFilter } from './styles';

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
    let numberRatings =
      typeof ratings === 'number' ? [ratings] : Array.from(ratings);
    numberRatings = numberRatings.map(elem => {
      return parseInt(elem, 10);
    });
    this.setState({
      [filters.MINPRICE]: url.minprice || 0,
      [filters.MAXPRICE]: url.maxprice || maxprice,
      [filters.RATINGS]: numberRatings,
      [filters.TAGS]: url.tags || [],
      [filters.COLORS]: url.colors || [],
      [filters.SIZES]: url.sizes || [],
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
          [filters.MINPRICE]: e[0],
          [filters.MAXPRICE]: e[1],
        });
        const [minprice, maxprice] = e;
        url.minprice = minprice;
        url.maxprice = maxprice;
        break;
      default:
        this.setState({
          [id]: e,
        });
        url[id] = e;
        break;
    }
    const newUrl = queryString.stringify(url, { arrayFormat: 'comma' });
    history.push(`?${newUrl}`);
  };

  render() {
    const { shape, display } = this.props;
    const { minprice, maxprice, ratings, colors, sizes, tags } = this.state;
    return Object.keys(shape).length > 0 ? (
      <StyledFilter display={display}>
        <PriceFilter
          minprice={minprice}
          maxprice={maxprice}
          shapeMinPrice={shape.price.min}
          shapeMaxPrice={shape.price.max}
          handleChangeFilter={this.handleChangeFilter}
        />
        <h3>Rating</h3>
        <RatingFilter
          ratings={ratings}
          handleChangeFilter={this.handleChangeFilter}
        />
        <h3>Sizes</h3>
        <SizesFilter
          sizes={sizes}
          shapeSizes={shape.sizes}
          handleChangeFilter={this.handleChangeFilter}
        />
        <h3>Tags</h3>
        <TagsFilter
          tags={tags}
          shapeTags={shape.tags}
          handleChangeFilter={this.handleChangeFilter}
        />
        <h3>Colors</h3>
        <ColorsFilter
          colors={colors}
          shapeColors={shape.colors}
          handleChangeFilter={this.handleChangeFilter}
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
    sizes: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default withRouter(Filter);
