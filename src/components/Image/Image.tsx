import React, { useState } from 'react';
import { StyledImage } from './styles';
import { ImageProps } from './types';

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  $styles,
  ...restProps
}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => setIsError(true);
  const handleImageLoad = () => setIsLoading(false);

  return (
    <StyledImage
      src={src}
      alt={alt}
      $isError={isError}
      $isLoading={isLoading}
      $styles={$styles}
      onError={handleImageError}
      onLoad={handleImageLoad}
      {...restProps}
    />
  );
};
