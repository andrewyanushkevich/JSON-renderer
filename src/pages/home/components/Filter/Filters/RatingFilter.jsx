import React from 'react';
import PropTypes from 'prop-types';

import Rating from 'blocks/Rating';

import { RatingWrapper } from './styles';

const RatingFilter = props => {
  const { ratings, handleChangeFilter } = props;
  return (
    <RatingWrapper
      onChange={e => {
        return handleChangeFilter(e, 'ratings');
      }}
      defaultValue={ratings}
      options={[
        {
          label: <Rating stars={1} totalStars={5} />,
          value: 1,
        },
        {
          label: <Rating stars={2} totalStars={5} />,
          value: 2,
        },
        {
          label: <Rating stars={3} totalStars={5} />,
          value: 3,
        },
        {
          label: <Rating stars={4} totalStars={5} />,
          value: 4,
        },
        {
          label: <Rating stars={5} totalStars={5} />,
          value: 5,
        },
      ]}
    />
  );
};

RatingFilter.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default RatingFilter;
