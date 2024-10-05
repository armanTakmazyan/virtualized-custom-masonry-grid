import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const PhotoLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  border: none;
`;

export const photoStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  transition:
    transform 0.3s ease,
    filter 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  &:hover {
    z-index: 10;
    transform: scale(1.05);
    filter: brightness(1.2);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;
