import React, { useState } from 'react';

const Star = ({ selected = false, onClick = (ev) => ev }) => (
  <div className={selected ? 'star selected' : 'star'} onClick={onClick} />
);

const Rating = ({ totalStars }) => {
  const [starsSelected, selectStar] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => selectStar(i + 1)}
        />
      ))}
    </div>
  );
};

export default Rating;
