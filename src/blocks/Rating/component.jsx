import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

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
  const starsArray = getStars(totalStars, Math.round(stars));

  return (
    <div>
      {starsArray.map(elem =>
        elem.active ? (
          <Icon type="star" theme="filled" key={elem.id} />
        ) : (
          <Icon type="star" key={elem.id} />
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
