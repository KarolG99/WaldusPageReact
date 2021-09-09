import React from 'react';
import img1xs from 'img/headerimg-400-690.jpg';
import img1s from 'img/headerimg-770-690.jpg';
import img1m from 'img/headerimg-1350-600.jpg';
import img1l from 'img/headerimg-1920-600.jpg';
import img1xl from 'img/headerimg-2600-690.jpg';
import { HeaderPhotosWrapper } from './HeaderPhotos.styles';

const HeaderPhotos = () => {
  const extraSmall = img1xs;
  const small = img1s;
  const medium = img1m;
  const large = img1l;
  const extraLarge = img1xl;

  return (
    <HeaderPhotosWrapper id="header-photo">
      <picture>
        <source media="(max-width: 300px)" srcSet={extraSmall} />
        <source media="(max-width: 770px)" srcSet={small} />
        <source media="(max-width: 1350px)" srcSet={medium} />
        <source media="(max-width: 1920)" srcSet={large} />
        <source media="(max-width: 2600px)" srcSet={extraLarge} />
        <img src={extraLarge} alt="plan budowy" />
      </picture>
    </HeaderPhotosWrapper>
  );
};

export default HeaderPhotos;
