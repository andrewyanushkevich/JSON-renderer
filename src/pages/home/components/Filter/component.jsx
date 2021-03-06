/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
/* eslint-disable react/state-in-constructor */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { Button } from 'antd';

import {
  MINPRICE,
  MAXPRICE,
  RATINGS,
  SIZES,
  TAGS,
  COLORS,
} from 'constants/filters';
import SearchFilter from './Filters/SearchFilter';
import PriceFilter from './Filters/PriceFilter';
import RatingFilter from './Filters/RatingFilter';
import SizesFilter from './Filters/SizesFilter';
import TagsFilter from './Filters/TagsFilter';
import ColorsFilter from './Filters/ColorsFilter';

import { StyledFilter, ResetButton } from './styles';

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
    numberRatings = numberRatings.map(elem => parseInt(elem, 10));

    this.setState({
      [MINPRICE]: url.minprice || 0,
      [MAXPRICE]: url.maxprice || maxprice,
      [RATINGS]: numberRatings || [],
      [TAGS]: url.tags || [],
      [COLORS]: url.colors || [],
      [SIZES]: url.sizes || [],
    });
  }

  componentDidUpdate() {
    const { handleSetFilter } = this.props;
    const filter = this.state;
    handleSetFilter(filter);
  }

  handleChangeFilter = (e, id) => {
    const { history, location } = this.props;
    const url = queryString.parse(location.search, { arrayFormat: 'comma' });
    if (id === 'price') {
      this.setState({
        [MINPRICE]: e[0],
        [MAXPRICE]: e[1],
      });
      const [minprice, maxprice] = e;
      url.minprice = minprice;
      url.maxprice = maxprice;
    } else {
      this.setState({
        [id]: e,
      });
      url[id] = e;
    }
    const newUrl = queryString.stringify(url, { arrayFormat: 'comma' });
    history.push(`?${newUrl}`);
  };

  handleResetFilter = () => {
    const { shape, history } = this.props;
    this.setState({
      search: '',
      [MINPRICE]: 0,
      [MAXPRICE]: shape.price.max,
      [RATINGS]: [],
      [TAGS]: [],
      [COLORS]: [],
      [SIZES]: [],
    });
    history.push('/');
  };

  handleSearch = e => {
    this.setState({
      search: e,
    });
  };

  render() {
    const { shape, display } = this.props;
    const {
      minprice,
      maxprice,
      ratings,
      colors,
      sizes,
      tags,
      search,
    } = this.state;
    return Object.keys(shape).length > 0 ? (
      <StyledFilter display={display}>
        <SearchFilter handleSearch={this.handleSearch} value={search} />
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
        <ResetButton>
          <Button onClick={this.handleResetFilter} type="primary">
            Reset
          </Button>
        </ResetButton>
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
