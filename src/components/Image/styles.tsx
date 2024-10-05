import styled, { css } from 'styled-components';
import { pulse } from '../../constants/animations';
import { ERROR_IMAGE, LOADING_IMAGE } from '../../constants/base64Images';
import { StyledImageProps } from './types';

export const StyledImage = styled.img<StyledImageProps>`
  max-width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) =>
    props.$isLoading &&
    css`
      background-image: url('${LOADING_IMAGE}');
      background-size: cover;
      animation: ${pulse} 1.5s infinite ease-in-out;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); /* Added box-shadow */
    `}
  ${(props) =>
    props.$isError &&
    css`
      background-image: url('${ERROR_IMAGE}');
      background-size: contain;
    `}
  ${(props) => props.$styles}
`;
