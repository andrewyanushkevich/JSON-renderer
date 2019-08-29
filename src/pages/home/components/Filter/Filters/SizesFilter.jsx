import React from 'react';
import PropTypes from 'prop-types';

import { SizesWrapper } from './styles';

const SizesFilter = props => {
  const { sizes, shapeSizes, handleChangeFilter } = props;
  return (
    <SizesWrapper
      onChange={e => {
        return handleChangeFilter(e, 'sizes');
      }}
      defaultValue={sizes}
      options={shapeSizes.map(elem => {
        return {
          label: elem,
          value: elem,
        };
      })}
    />
  );
};

SizesFilter.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  shapeSizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default SizesFilter;
