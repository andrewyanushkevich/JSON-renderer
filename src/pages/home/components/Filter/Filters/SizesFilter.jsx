import React from 'react';
import PropTypes from 'prop-types';

import { SizesWrapper } from './styles';

const SizesFilter = props => {
  const { sizes, shapeSizes, handleChangeFilter } = props;
  return (
    <SizesWrapper
      onChange={e => handleChangeFilter(e, 'sizes')}
      value={sizes}
      options={shapeSizes.map(elem => ({
        label: elem,
        value: elem,
      }))}
    />
  );
};

SizesFilter.defaultProps = {
  sizes: [],
};

SizesFilter.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string),
  shapeSizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default SizesFilter;
