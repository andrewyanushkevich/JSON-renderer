import React from 'react';
import { Slider } from 'antd';
import PropTypes from 'prop-types';

const PriceFilter = props => {
  const {
    shapeMinPrice,
    shapeMaxPrice,
    minprice,
    maxprice,
    handleChangeFilter,
  } = props;
  return (
    <Slider
      range
      min={shapeMinPrice}
      max={shapeMaxPrice}
      value={[minprice, maxprice]}
      onChange={e => handleChangeFilter(e, 'price')}
      marks={{
        [shapeMinPrice]: shapeMinPrice,
        [shapeMaxPrice]: shapeMaxPrice,
      }}
    />
  );
};

PriceFilter.propTypes = {
  shapeMinPrice: PropTypes.number.isRequired,
  shapeMaxPrice: PropTypes.number.isRequired,
  minprice: PropTypes.number.isRequired,
  maxprice: PropTypes.number.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default PriceFilter;
