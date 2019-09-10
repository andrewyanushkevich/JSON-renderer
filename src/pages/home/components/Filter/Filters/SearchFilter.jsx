import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import { Input } from 'antd';

const SearchFilter = props => {
  const { handleSearch } = props;

  const search = debounce(text => {
    handleSearch(text);
  }, 300);

  return (
    <Input
      onChange={e => search(e.target.value)}
      placeholder="Search item"
      allowClear
    />
  );
};

SearchFilter.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchFilter;
