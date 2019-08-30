import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';

const SearchFilter = props => {
  const { handleSearch, value } = props;
  return (
    <Input
      onChange={handleSearch}
      placeholder="Search item"
      allowClear
      value={value}
    />
  );
};

SearchFilter.defaultProps = {
  value: '',
};

SearchFilter.propTypes = {
  value: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchFilter;
