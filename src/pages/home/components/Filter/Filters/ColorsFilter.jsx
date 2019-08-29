import React from 'react';
import PropTypes from 'prop-types';

import { ColorsWrapper } from './styles';

const ColorsFilter = props => {
  const { colors, shapeColors, handleChangeFilter } = props;
  return (
    <ColorsWrapper
      onChange={e => {
        return handleChangeFilter(e, 'colors');
      }}
      defaultValue={colors}
      options={shapeColors.map(elem => {
        return {
          label: elem,
          value: elem,
        };
      })}
    />
  );
};

ColorsFilter.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  shapeColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default ColorsFilter;
