import React from 'react';
import PropTypes from 'prop-types';

const CarouselSlide = ({ imgUrl, description, attribution, ...rest }) => (
  <figure {...rest}>
    <img src={imgUrl} alt={description} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string,
  description: PropTypes.string,
  attribution: PropTypes.string
};

export default CarouselSlide;
