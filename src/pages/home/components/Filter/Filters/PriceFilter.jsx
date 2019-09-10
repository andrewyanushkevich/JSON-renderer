import React from 'react';
import { Slider } from 'antd';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from 'lodash/debounce';

const PriceFilter = props => {
  const {
    shapeMinPrice,
    shapeMaxPrice,
    minprice,
    maxprice,
    handleChangeFilter,
  } = props;
  const onChange = debounce(price => {
    handleChangeFilter(price, 'price');
  }, 300);
  return (
    <Slider
      range
      min={shapeMinPrice}
      max={shapeMaxPrice}
      value={[minprice, maxprice]}
      onChange={e => onChange(e)}
      marks={{
        [shapeMinPrice]: shapeMinPrice,
        [shapeMaxPrice]: shapeMaxPrice,
      }}
    />
  );
};

PriceFilter.defaultProps = {
  minprice: 0,
  maxprice: 0,
};

PriceFilter.propTypes = {
  shapeMinPrice: PropTypes.number.isRequired,
  shapeMaxPrice: PropTypes.number.isRequired,
  minprice: PropTypes.number,
  maxprice: PropTypes.number,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default PriceFilter;
