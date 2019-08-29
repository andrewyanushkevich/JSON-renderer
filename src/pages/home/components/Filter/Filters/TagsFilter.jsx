import React from 'react';
import PropTypes from 'prop-types';

import { TagsWrapper } from './styles';

const TagsFilter = props => {
  const { tags, shapeTags, handleChangeFilter } = props;
  return (
    <TagsWrapper
      onChange={e => handleChangeFilter(e, 'tags')}
      value={tags}
      options={shapeTags.map(elem => ({
        label: elem,
        value: elem,
      }))}
    />
  );
};

TagsFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  shapeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default TagsFilter;
