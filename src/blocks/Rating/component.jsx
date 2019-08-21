import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const getStars = (totalCount, activeCount) => {
  const stars = [];

  for (let i = 1; i <= totalCount; i += 1) {
    stars.push({
      id: i,
      active: i <= activeCount,
    });
  }

  return stars;
};

const Rating = props => {
  const { stars, totalStars } = props;
  const starsArray = getStars(totalStars, stars);

  return (
    <div>
      {starsArray.map(elem =>
        elem.active ? (
          <FontAwesomeIcon icon={faStar} color="orange" />
        ) : (
          <FontAwesomeIcon icon={faStar} color="lightgray" />
        ),
      )}
    </div>
  );
};

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  totalStars: PropTypes.number,
};

Rating.defaultProps = {
  totalStars: 5,
};

export default Rating;