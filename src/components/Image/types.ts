import { ImgHTMLAttributes } from 'react';
import { RuleSet } from 'styled-components';

export interface StyledImageProps {
  $isLoading: boolean;
  $isError: boolean;
  $styles?: RuleSet<object>;
}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  $styles?: RuleSet<object>;
}
